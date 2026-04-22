import { useState } from "react";
import { Loader2, ArrowRight, CheckCircle2 } from "lucide-react";

interface LeadFormProps {
  /** Where this form is mounted — sent to Slack so we know context */
  source?: string;
  heading?: string;
  subheading?: string;
  /** Show the message textarea (defaults true) */
  showMessage?: boolean;
  /** Compact = no heading block, just the form */
  compact?: boolean;
}

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm({
  source = "voxaris.io",
  heading = "Get your free AI Visibility Audit",
  subheading = "We'll review where you appear (or don't) across ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews — and send a fix list within 24 hours.",
  showMessage = true,
  compact = false,
}: LeadFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [consentSms, setConsentSms] = useState(false);
  const [companyUrl, setCompanyUrl] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<string[]>([]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors([]);
    if (phone && !consentSms) {
      setErrors([
        "Please check the SMS consent box to receive audit-related text messages, or remove your phone number.",
      ]);
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          website,
          message,
          consentSms,
          source,
          company_url: companyUrl,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setErrors(body.errors ?? [body.error ?? "Something went wrong. Please try again."]);
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrors(["Network error. Please try again."]);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-[hsl(var(--accent))] mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-foreground mb-2">Got it.</h3>
        <p className="text-muted-foreground max-w-[42ch] mx-auto">
          We'll be in touch within 24 hours with your AI visibility report. Watch your inbox
          (and your phone, if you opted in to SMS).
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full bg-white/[0.04] border border-white/10 rounded-md px-3.5 py-3 text-[15px] text-foreground placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 lg:p-8"
    >
      {!compact && (
        <div className="mb-6">
          <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-3 leading-snug">
            {heading}
          </h3>
          <p className="text-muted-foreground text-[15px] leading-relaxed">{subheading}</p>
        </div>
      )}

      {/* Honeypot — hidden from users, bots fill it */}
      <label
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}
      >
        Company URL
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={companyUrl}
          onChange={(e) => setCompanyUrl(e.target.value)}
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-[12px] uppercase tracking-wider text-muted-foreground mb-2">
            Name *
          </label>
          <input
            required
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputCls}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className="block text-[12px] uppercase tracking-wider text-muted-foreground mb-2">
            Email *
          </label>
          <input
            required
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputCls}
            placeholder="you@business.com"
          />
        </div>
        <div>
          <label className="block text-[12px] uppercase tracking-wider text-muted-foreground mb-2">
            Phone
          </label>
          <input
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputCls}
            placeholder="(407) 555-0123"
          />
        </div>
        <div>
          <label className="block text-[12px] uppercase tracking-wider text-muted-foreground mb-2">
            Website
          </label>
          <input
            type="text"
            autoComplete="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className={inputCls}
            placeholder="yourbusiness.com"
          />
        </div>
      </div>

      {showMessage && (
        <div className="mt-4">
          <label className="block text-[12px] uppercase tracking-wider text-muted-foreground mb-2">
            Anything else?
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${inputCls} min-h-[110px] resize-y`}
            placeholder="Tell us what you're trying to fix."
          />
        </div>
      )}

      {/* Twilio-compliant SMS consent */}
      <label className="mt-5 flex items-start gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={consentSms}
          onChange={(e) => setConsentSms(e.target.checked)}
          className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 accent-[hsl(var(--accent))]"
        />
        <span className="text-[12.5px] text-muted-foreground leading-relaxed">
          I agree to receive 1–4 follow-up SMS messages from Voxaris AI related to my
          free AI Visibility Audit (audit confirmation, report link, scheduling
          reminders). Message frequency varies. Standard message and data rates may
          apply. Reply <strong className="text-foreground">STOP</strong> to opt out at
          any time, <strong className="text-foreground">HELP</strong> for help. See{" "}
          <a href="/terms#sms-terms" className="underline underline-offset-2">
            SMS Terms
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline underline-offset-2">
            Privacy Policy
          </a>
          . Phone numbers are never shared with third parties.
        </span>
      </label>

      {errors.length > 0 && (
        <div className="mt-4 rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-[13px] text-red-300">
          {errors.map((err, i) => (
            <div key={i}>{err}</div>
          ))}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-7 py-3.5 rounded-md font-semibold text-[15px] hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Run my free audit <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="mt-3 text-[11.5px] text-muted-foreground/70">
        By submitting this form you agree to our{" "}
        <a href="/terms" className="underline underline-offset-2">
          Terms
        </a>{" "}
        and{" "}
        <a href="/privacy" className="underline underline-offset-2">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
