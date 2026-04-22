/**
 * POST /api/lead
 *
 * Vercel serverless function.
 * 1. Validates the lead payload
 * 2. Posts a notification to Slack
 * 3. Sends a branded confirmation email to the lead via Resend
 *
 * Required env vars:
 *   SLACK_WEBHOOK_URL — Slack incoming webhook URL
 *   RESEND_API_KEY    — Resend API key
 *   RESEND_FROM       — From address (e.g. "Voxaris AI <hello@voxaris.io>")
 *   RESEND_REPLY_TO   — Optional reply-to address
 */
import { Resend } from "resend";

interface LeadPayload {
  name?: string;
  email?: string;
  phone?: string;
  website?: string;
  message?: string;
  source?: string;
  consentSms?: boolean;
  attribution?: Record<string, string>;
  referrer?: string;
  // Honeypot — must be empty for the request to be accepted
  company_url?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function bad(status: number, body: object) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function ok(body: object) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return bad(405, { error: "Method not allowed" });
  }

  let payload: LeadPayload;
  try {
    payload = (await req.json()) as LeadPayload;
  } catch {
    return bad(400, { error: "Invalid JSON" });
  }

  // Honeypot — bots fill hidden fields
  if (payload.company_url && payload.company_url.length > 0) {
    // Pretend success so bots don't retry
    return ok({ ok: true });
  }

  // Validation
  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const phone = (payload.phone ?? "").trim();
  const website = (payload.website ?? "").trim();
  const message = (payload.message ?? "").trim();
  const source = (payload.source ?? "voxaris.io").trim();
  const consentSms = Boolean(payload.consentSms);
  const attribution = payload.attribution ?? {};
  const referrer = (payload.referrer ?? "").slice(0, 500);

  const errors: string[] = [];
  if (name.length < 2) errors.push("Name is required");
  if (!EMAIL_RE.test(email)) errors.push("Valid email is required");
  if (phone && phone.replace(/\D/g, "").length < 10) {
    errors.push("Phone must be at least 10 digits");
  }
  if (phone && !consentSms) {
    errors.push("SMS consent is required when providing a phone number");
  }
  if (errors.length) return bad(400, { errors });

  // Slack notification
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("SLACK_WEBHOOK_URL is not configured");
    return bad(500, { error: "Server misconfigured" });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  const userAgent = req.headers.get("user-agent") ?? "unknown";
  const now = new Date().toISOString();

  const blocks: object[] = [
    {
      type: "header",
      text: { type: "plain_text", text: "🟢 New Voxaris lead", emoji: true },
    },
    {
      type: "section",
      fields: [
        { type: "mrkdwn", text: `*Name*\n${name}` },
        { type: "mrkdwn", text: `*Email*\n<mailto:${email}|${email}>` },
        { type: "mrkdwn", text: `*Phone*\n${phone || "—"}` },
        {
          type: "mrkdwn",
          text: `*Website*\n${website ? `<${website.startsWith("http") ? website : `https://${website}`}|${website}>` : "—"}`,
        },
      ],
    },
  ];

  if (message) {
    blocks.push({
      type: "section",
      text: { type: "mrkdwn", text: `*Message*\n${message.slice(0, 2000)}` },
    });
  }

  // Attribution block — only show if we captured anything
  const attrPairs = Object.entries(attribution).filter(([, v]) => v && String(v).trim().length > 0);
  if (attrPairs.length || referrer) {
    const attrText = attrPairs
      .map(([k, v]) => `\`${k}=${String(v).slice(0, 80)}\``)
      .join("  ");
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Attribution*\n${attrText || "_no UTM_"}${referrer ? `\n*Referrer:* ${referrer.slice(0, 200)}` : ""}`,
      },
    });
  }

  blocks.push({
    type: "context",
    elements: [
      {
        type: "mrkdwn",
        text: `📍 *Source:* ${source} · *SMS consent:* ${consentSms ? "✅" : "❌"} · *IP:* ${ip} · ${now}`,
      },
    ],
  });

  try {
    const slackRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `New lead: ${name} (${email})`,
        blocks,
      }),
    });
    if (!slackRes.ok) {
      const body = await slackRes.text();
      console.error("Slack webhook failed:", slackRes.status, body);
      return bad(502, { error: "Notification failed" });
    }
  } catch (err) {
    console.error("Slack fetch error:", err);
    return bad(502, { error: "Notification failed" });
  }

  // Persist consent record minimally (logs are inspectable in Vercel)
  console.log(
    JSON.stringify({
      event: "lead.received",
      ts: now,
      name,
      email,
      phone: phone || null,
      website: website || null,
      consentSms,
      source,
      attribution,
      referrer: referrer || null,
      ip,
      userAgent,
    }),
  );

  // Send confirmation email via Resend (non-blocking — log on failure)
  const resendKey = process.env.RESEND_API_KEY;
  const resendFrom = process.env.RESEND_FROM ?? "Voxaris AI <onboarding@resend.dev>";
  const resendReplyTo = process.env.RESEND_REPLY_TO;
  if (resendKey) {
    try {
      const resend = new Resend(resendKey);
      const firstName = name.split(/\s+/)[0];
      const { error: emailErr } = await resend.emails.send({
        from: resendFrom,
        to: email,
        ...(resendReplyTo ? { replyTo: resendReplyTo } : {}),
        subject: "Got it — your Voxaris AI Visibility Audit is in motion",
        html: confirmationEmailHtml({ firstName, website, source, consentSms }),
        text: confirmationEmailText({ firstName, website }),
      });
      if (emailErr) {
        console.error("Resend email error:", emailErr);
      }
    } catch (err) {
      console.error("Resend exception:", err);
    }
  } else {
    console.warn("RESEND_API_KEY not set — skipping confirmation email");
  }

  return ok({ ok: true });
}

/* ------------------------------ Email templates ------------------------------ */

function confirmationEmailHtml({
  firstName,
  website,
  source,
  consentSms,
}: {
  firstName: string;
  website: string;
  source: string;
  consentSms: boolean;
}): string {
  const safeName = escapeHtml(firstName || "there");
  const safeSite = website ? escapeHtml(website) : "";
  const smsLine = consentSms
    ? `<p style="margin:0 0 16px;font-size:14px;color:#9E9590;line-height:1.6">You also opted in to receive 1–4 follow-up SMS messages related to your audit. Reply <strong style="color:#fff">STOP</strong> to any message to opt out, <strong style="color:#fff">HELP</strong> for help. Standard message and data rates may apply.</p>`
    : "";

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Your Voxaris AI Visibility Audit</title>
</head>
<body style="margin:0;padding:0;background:#0E0C0B;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#F0EDE8">
  <div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:#0E0C0B">Your free AI Visibility Audit is in motion. Report within 24 hours.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0E0C0B;padding:32px 16px">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#171412;border:1px solid rgba(255,255,255,0.08);border-radius:14px;overflow:hidden">
        <tr><td style="padding:32px 32px 16px">
          <div style="font-family:'JetBrains Mono',ui-monospace,monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#B5ADA6">VOXARIS AI · ORLANDO, FL</div>
        </td></tr>
        <tr><td style="padding:8px 32px 8px">
          <h1 style="margin:0 0 16px;font-size:28px;line-height:1.2;font-weight:600;letter-spacing:-0.02em;color:#fff">Got it, ${safeName}.</h1>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#D6D1CB">Your free AI Visibility Audit is in motion. We're querying every major AI engine right now to see where your business shows up — and where it doesn't.</p>
          ${safeSite ? `<p style="margin:0 0 16px;font-size:14px;color:#9E9590">Auditing: <strong style="color:#fff">${safeSite}</strong></p>` : ""}
        </td></tr>
        <tr><td style="padding:16px 32px 8px">
          <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:20px 22px">
            <div style="font-family:'JetBrains Mono',ui-monospace,monospace;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#9E9590;margin-bottom:10px">What we're checking</div>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr><td style="padding:5px 0;font-size:14px;color:#D6D1CB">→ ChatGPT (OpenAI) citation share</td></tr>
              <tr><td style="padding:5px 0;font-size:14px;color:#D6D1CB">→ Perplexity ranking + sources</td></tr>
              <tr><td style="padding:5px 0;font-size:14px;color:#D6D1CB">→ Claude (Anthropic) web search visibility</td></tr>
              <tr><td style="padding:5px 0;font-size:14px;color:#D6D1CB">→ Google AI Overviews + Gemini</td></tr>
              <tr><td style="padding:5px 0;font-size:14px;color:#D6D1CB">→ Bing Copilot</td></tr>
            </table>
          </div>
        </td></tr>
        <tr><td style="padding:24px 32px 8px">
          <p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#D6D1CB"><strong style="color:#fff">You'll get the full report within 24 hours</strong> — score breakdown, prioritized fix list, and the exact citation gaps your competitors are exploiting.</p>
        </td></tr>
        <tr><td align="center" style="padding:8px 32px 28px">
          <a href="https://voxaris.io/book-demo" style="display:inline-block;background:#B5ADA6;color:#0E0C0B;text-decoration:none;font-weight:600;font-size:15px;padding:14px 28px;border-radius:8px">Book a 20-min walkthrough →</a>
        </td></tr>
        ${smsLine ? `<tr><td style="padding:0 32px 16px">${smsLine}</td></tr>` : ""}
        <tr><td style="padding:20px 32px 28px;border-top:1px solid rgba(255,255,255,0.06)">
          <p style="margin:0 0 6px;font-size:12px;color:#9E9590;line-height:1.5">Voxaris, LLC · Orlando, Florida</p>
          <p style="margin:0;font-size:12px;color:#7A726C;line-height:1.5">You're getting this because you submitted the audit form at <a href="${escapeHtml("https://" + source)}" style="color:#B5ADA6;text-decoration:underline">${escapeHtml(source)}</a>. Questions? Just reply.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function confirmationEmailText({
  firstName,
  website,
}: {
  firstName: string;
  website: string;
}): string {
  return [
    `Got it, ${firstName || "there"}.`,
    ``,
    `Your free Voxaris AI Visibility Audit is in motion. We're querying every major AI engine right now to see where your business shows up — and where it doesn't.`,
    website ? `\nAuditing: ${website}` : "",
    ``,
    `What we're checking:`,
    `  • ChatGPT (OpenAI)`,
    `  • Perplexity`,
    `  • Claude (Anthropic)`,
    `  • Google AI Overviews + Gemini`,
    `  • Bing Copilot`,
    ``,
    `You'll get your full report within 24 hours — score breakdown, prioritized fix list, and where competitors are winning.`,
    ``,
    `Want to walk through it live? Book a 20-min call: https://voxaris.io/book-demo`,
    ``,
    `Voxaris, LLC · Orlando, Florida`,
    `Reply STOP to any SMS to opt out. Reply HELP for help.`,
  ]
    .filter(Boolean)
    .join("\n");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
