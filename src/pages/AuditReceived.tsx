import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

/**
 * Thank-you page users land on after submitting the free AI Presence Report
 * form on audit.voxaris.io. Mirrors audit.voxaris.io/received visually so the
 * funnel feels seamless. Hosted at voxaris.io/audit-received so Google Ads
 * can track form-submit conversions against the verified root domain.
 */
export default function AuditReceived() {
  usePageMeta({
    title: "Audit running · Voxaris AI",
    description:
      "Your AI Presence Report is generating. We're scoring your site across 21 AEO checks and 6 AI engines. Check your email in under 2 minutes.",
    canonical: "https://voxaris.io/audit-received",
  });

  return (
    <div className="relative min-h-screen bg-[#07080a] text-white">
      {/* Subtle gold/void ambient background — matches audit app's AppBackground */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(212,168,67,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_100%,rgba(212,168,67,0.04),transparent_70%)]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <nav className="max-w-[1400px] w-full mx-auto px-6 pt-5 flex items-center justify-end">
          <a
            href="https://voxaris.io/"
            className="text-xs text-white/60 hover:text-white transition-colors"
          >
            ← Back
          </a>
        </nav>

        <div className="relative max-w-[1400px] w-full mx-auto px-4 pt-2 md:pt-4 flex justify-center">
          <img
            src="/voxaris-wordmark.png"
            alt="Voxaris AI"
            width={1600}
            height={900}
            className="w-full max-w-[540px] h-auto select-none pointer-events-none -my-6 md:-my-10"
          />
        </div>

        <main className="flex-1 max-w-[720px] w-full mx-auto px-6 pb-16 pt-4">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/25">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
            </div>

            <div className="flex flex-col gap-3">
              <div className="inline-flex w-fit mx-auto items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs text-white/60 uppercase tracking-wider">
                  Audit running
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                Got it — check your email.
              </h1>
              <p className="text-sm md:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
                We're crawling your site, scoring it across 21 AEO checks and
                6 AI engines, and running the findings through our strategist
                model. The full report will land in your inbox in{" "}
                <strong className="text-white">under 2 minutes</strong>.
              </p>
            </div>

            <div className="w-full rounded-xl border border-white/10 bg-white/[0.04] p-5 md:p-6 text-left">
              <div className="text-[10px] font-mono tracking-[0.22em] text-white/50 uppercase mb-3">
                What to expect
              </div>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 text-white/50 shrink-0" strokeWidth={1.5} />
                  <span>
                    An email from{" "}
                    <strong className="text-white">audits@mail.voxaris.io</strong>{" "}
                    with your score, top findings, and a 3-path next step.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-white/50 shrink-0" strokeWidth={1.5} />
                  <span>
                    A link to your full interactive report — 21 AEO checks, per-engine
                    visibility scores, and prioritized quick wins.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-xs text-white/50 leading-relaxed max-w-lg">
              If you don't see the email in 2 minutes, check spam — or reply to{" "}
              <a
                href="mailto:ethan@voxaris.io"
                className="text-white/70 underline hover:text-white"
              >
                ethan@voxaris.io
              </a>{" "}
              and I'll resend.
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white/80 transition-colors mt-2"
            >
              ← Back to voxaris.io
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
