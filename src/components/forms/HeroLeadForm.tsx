import { useEffect, useState } from "react";
import { Loader2, ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * HeroLeadForm — 2-field minimal audit submission.
 *
 * Contract preserved with /api/lead: sends email + website. After initial submit,
 * we reveal an optional city + industry step to enrich lead data without blocking
 * the conversion.
 *
 * Primary user flow: submit → we handle the audit on our end (Slack + Resend email
 * confirmation via /api/lead). No SMS, no phone, no name required. If the user
 * wants the full interactive audit experience, the CTA still points to
 * audit.voxaris.io.
 */

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
  "ttclid",
  "msclkid",
] as const;

type AttributionData = Partial<Record<(typeof UTM_KEYS)[number], string>>;

function readAttribution(): AttributionData {
  if (typeof window === "undefined") return {};
  const out: AttributionData = {};
  const params = new URLSearchParams(window.location.search);
  for (const k of UTM_KEYS) {
    const v = params.get(k);
    if (v) out[k] = v;
  }
  try {
    const stored = JSON.parse(localStorage.getItem("vx_attr") ?? "{}") as AttributionData;
    for (const k of UTM_KEYS) {
      if (!out[k] && stored[k]) out[k] = stored[k];
    }
  } catch {
    /* ignore */
  }
  if (Object.keys(out).length > 0) {
    try {
      localStorage.setItem("vx_attr", JSON.stringify(out));
    } catch {
      /* ignore */
    }
  }
  return out;
}

type Status = "idle" | "submitting" | "success" | "error";

export default function HeroLeadForm({
  source = "voxaris.io/home-hero",
}: {
  source?: string;
}) {
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [industry, setIndustry] = useState("");
  const [companyUrl, setCompanyUrl] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<string[]>([]);
  const [attribution, setAttribution] = useState<AttributionData>({});
  const [referrer, setReferrer] = useState<string>("");
  const [showEnrichment, setShowEnrichment] = useState(false);

  useEffect(() => {
    setAttribution(readAttribution());
    setReferrer(document.referrer ?? "");
  }, []);

  async function submitLead(enrichment?: { city?: string; industry?: string }) {
    setErrors([]);
    setStatus("submitting");
    try {
      // /api/lead requires name — synthesize from email local-part so backend
      // contract (name >= 2 chars) stays valid without exposing a name field.
      const syntheticName = email.split("@")[0]?.slice(0, 40) || "Audit lead";
      const messageParts: string[] = [];
      if (enrichment?.city) messageParts.push(`City: ${enrichment.city}`);
      if (enrichment?.industry) messageParts.push(`Industry: ${enrichment.industry}`);

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: syntheticName,
          email,
          phone: "",
          website,
          message: messageParts.join(" · "),
          consentSms: false,
          source,
          company_url: companyUrl,
          attribution,
          referrer,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setErrors(body.errors ?? [body.error ?? "Something went wrong. Please try again."]);
        setStatus("error");
        return false;
      }
      setStatus("success");
      // Conversion pixels
      if (typeof window !== "undefined") {
        try {
          const w = window as unknown as {
            gtag?: (...a: unknown[]) => void;
            fbq?: (...a: unknown[]) => void;
          };
          if (typeof w.gtag === "function") {
            w.gtag("event", "generate_lead", { currency: "USD", value: 25, source });
          }
          if (typeof w.fbq === "function") {
            w.fbq("track", "Lead", { source });
            w.fbq("track", "CompleteRegistration", { source });
          }
        } catch {
          /* ignore */
        }
      }
      return true;
    } catch {
      setErrors(["Network error. Please try again."]);
      setStatus("error");
      return false;
    }
  }

  async function onInitialSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmedWebsite = website.trim();
    const trimmedEmail = email.trim();
    const errs: string[] = [];
    if (trimmedWebsite.length < 3) errs.push("Please enter your website.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) errs.push("Enter a valid email.");
    if (errs.length) {
      setErrors(errs);
      return;
    }
    const success = await submitLead();
    if (success) setShowEnrichment(true);
  }

  async function onEnrichmentSubmit(e: React.FormEvent) {
    e.preventDefault();
    await submitLead({ city: city.trim(), industry: industry.trim() });
    setShowEnrichment(false);
  }

  const inputCls =
    "w-full bg-white/[0.04] border border-white/10 rounded-md px-3.5 py-3 text-[15px] text-foreground placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors";

  if (status === "success" && !showEnrichment) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-[hsl(var(--accent))] mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-foreground mb-2">On it.</h3>
        <p className="text-muted-foreground max-w-[42ch] mx-auto mb-5">
          Your free preview is running. Watch your inbox — the full report unlocks
          proof screenshots and the fix plan.
        </p>
        <a
          href="https://audit.voxaris.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[14px] text-[hsl(var(--accent))] font-medium hover:opacity-80"
        >
          Open the live audit tool <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={showEnrichment ? onEnrichmentSubmit : onInitialSubmit}
      className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 lg:p-7"
    >
      <div className="mb-5">
        <p className="font-mono-display text-[10px] uppercase tracking-[0.14em] text-muted-foreground/80 mb-2">
          Free AI Visibility Audit
        </p>
        <h3 className="text-xl lg:text-2xl font-semibold text-foreground leading-snug mb-2">
          {showEnrichment ? "One more thing (optional)" : "Run My Free AI Audit"}
        </h3>
        <p className="text-[13.5px] text-muted-foreground leading-relaxed">
          {showEnrichment
            ? "This helps us pull the right competitor citations. Skip if you like."
            : "Free preview in about 90 seconds. Full report unlocks proof screenshots and the fix plan."}
        </p>
      </div>

      {/* Honeypot */}
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

      {!showEnrichment ? (
        <div className="space-y-3.5">
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">
              Your website
            </label>
            <input
              required
              type="text"
              autoComplete="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className={inputCls}
              placeholder="yourbusiness.com"
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">
              Email for the report
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
        </div>
      ) : (
        <div className="space-y-3.5">
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">
              City (optional)
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={inputCls}
              placeholder="Orlando, FL"
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">
              Industry (optional)
            </label>
            <input
              type="text"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className={inputCls}
              placeholder="Roofing, dental, law firm…"
            />
          </div>
        </div>
      )}

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
        className="mt-5 inline-flex items-center justify-center gap-2 w-full bg-[hsl(28_8%_72%)] text-black px-6 py-3.5 rounded-md font-semibold text-[15px] hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : showEnrichment ? (
          <>
            Submit <ArrowRight className="h-4 w-4" />
          </>
        ) : (
          <>
            Run My Free AI Audit <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>

      {showEnrichment && (
        <button
          type="button"
          onClick={() => setShowEnrichment(false)}
          className="mt-2 w-full text-[12px] text-muted-foreground hover:text-foreground transition"
        >
          Skip — I'm done
        </button>
      )}

      <p className="mt-3 text-[11px] text-muted-foreground/70 text-center">
        By submitting you agree to our{" "}
        <a href="/terms" className="underline underline-offset-2">Terms</a> and{" "}
        <a href="/privacy" className="underline underline-offset-2">Privacy Policy</a>.
      </p>
    </form>
  );
}
