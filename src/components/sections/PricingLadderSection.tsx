import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

interface Tier {
  name: string;
  priceAmount: string;
  priceSub: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  ctaExternal?: boolean;
  highlight?: boolean;
  badge?: string;
}

const tiers: Tier[] = [
  {
    name: "Free Audit",
    priceAmount: "$0",
    priceSub: "no credit card",
    description: "See where you stand across all 6 engines.",
    features: [
      "Readiness / Visibility / Trust score",
      "Preview across 6 AI engines",
      "Top fix surfaced",
      "Free preview in about 90 seconds",
    ],
    cta: "Run my free audit",
    ctaHref: "https://audit.voxaris.io",
    ctaExternal: true,
    badge: "Start here",
  },
  {
    name: "Full Report",
    priceAmount: "$99",
    priceSub: "one-time",
    description: "The real fix list, with proof screenshots.",
    features: [
      "19-point report + proof screenshots",
      "Competitor citation gap analysis",
      "Prioritized fix list (do-it-yourself or hand off)",
      "Per-engine breakdown with raw prompts",
    ],
    cta: "Get the full report",
    ctaHref: "https://audit.voxaris.io",
    ctaExternal: true,
  },
  {
    name: "Monthly Tracking",
    priceAmount: "$299",
    priceSub: "/ month",
    description: "Live dashboard. We watch all 6 engines weekly.",
    features: [
      "Weekly score snapshots (all 3 dimensions)",
      "Per-engine visibility dashboard",
      "Competitor benchmarking",
      "Score-drop alerts",
      "Monthly AI Visibility Report Card",
    ],
    cta: "Book a walkthrough",
    ctaHref: "/book-demo",
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "AI-Ready Rebuild",
    priceAmount: "$2,500",
    priceSub: "+ $300/mo tracking",
    description: "Full rebuild of the signals AI needs.",
    features: [
      "Schema-complete rebuild (Org / LocalBusiness / Service / FAQPage)",
      "llms.txt + robots.txt rewrite",
      "FAQ + answer-format content layer",
      "GBP / Apple / Bing / Foursquare cleanup",
      "Month 1 tracking included",
    ],
    cta: "Book a call",
    ctaHref: "/book-demo",
  },
];

export default function PricingLadderSection() {
  return (
    <section id="pricing" className="section-padding border-t border-[hsl(var(--border))]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="eyebrow mb-4">Pricing</p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.03em] text-foreground leading-[1.05]">
            Start free.
            <br />
            <span className="text-muted-foreground">Ladder up when it's working.</span>
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground max-w-[60ch] leading-relaxed">
            Every tier is built to improve the signals that help AI cite your business. No
            lock-ins, no &quot;guaranteed #1&quot; nonsense — just the infrastructure, scored.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative rounded-2xl border backdrop-blur-sm p-6 flex flex-col ${
                tier.highlight
                  ? "border-white/25 bg-white/[0.05]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/80 px-3 py-1 text-[10px] font-mono-display uppercase tracking-[0.14em] text-foreground">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-5">
                <div className="text-[13px] font-semibold text-foreground mb-1">
                  {tier.name}
                </div>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <div className="text-3xl font-semibold text-foreground tracking-[-0.02em]">
                    {tier.priceAmount}
                  </div>
                  <div className="text-[13px] text-muted-foreground">{tier.priceSub}</div>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13px] text-muted-foreground leading-relaxed">
                    <Check className="h-3.5 w-3.5 text-[hsl(var(--accent))] mt-1 shrink-0" strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {tier.ctaExternal ? (
                <a href={tier.ctaHref} target="_blank" rel="noopener noreferrer" className="block">
                  <button
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-[14px] font-semibold transition ${
                      tier.highlight
                        ? "bg-[hsl(28_8%_72%)] text-black hover:brightness-110"
                        : "border border-white/15 bg-white/[0.04] text-foreground hover:bg-white/[0.10] hover:border-white/30"
                    }`}
                  >
                    {tier.cta} <ArrowRight className="h-4 w-4" />
                  </button>
                </a>
              ) : (
                <Link to={tier.ctaHref}>
                  <button
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-[14px] font-semibold transition ${
                      tier.highlight
                        ? "bg-[hsl(28_8%_72%)] text-black hover:brightness-110"
                        : "border border-white/15 bg-white/[0.04] text-foreground hover:bg-white/[0.10] hover:border-white/30"
                    }`}
                  >
                    {tier.cta} <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              )}

              {tier.highlight && (
                <BorderBeam
                  size={240}
                  duration={11}
                  colorFrom="hsl(28 8% 72%)"
                  colorTo="hsl(28 8% 72% / 0)"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
