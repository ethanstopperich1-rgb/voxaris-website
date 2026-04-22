/**
 * POST /api/lead
 *
 * Vercel serverless function.
 * Validates the lead payload, posts it to Slack, and returns success.
 *
 * Required env var:
 *   SLACK_WEBHOOK_URL — Slack incoming webhook URL
 */

interface LeadPayload {
  name?: string;
  email?: string;
  phone?: string;
  website?: string;
  message?: string;
  source?: string;
  consentSms?: boolean;
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
      ip,
      userAgent,
    }),
  );

  return ok({ ok: true });
}
