import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";

export default function AboutEthan() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://voxaris.io/#founder",
    name: "Ethan Stopperich",
    givenName: "Ethan",
    familyName: "Stopperich",
    jobTitle: "Founder & CEO",
    worksFor: { "@id": "https://voxaris.io/#organization" },
    homeLocation: { "@type": "Place", name: "Orlando, Florida, USA" },
    knowsAbout: [
      "Answer Engine Optimization",
      "AEO",
      "AI visibility infrastructure",
      "AI-optimized website design",
      "Schema markup",
      "Local business citation strategy",
      "ChatGPT optimization",
      "Perplexity ranking",
      "Google AI Overviews",
      "Bing Copilot",
    ],
    alumniOf: { "@type": "Place", name: "Florida (current student)" },
    sameAs: [
      "https://www.linkedin.com/company/voxaris-ai-solutions",
      "https://x.com/voxaris",
    ],
    description:
      "Ethan Stopperich is the founder of Voxaris, an Orlando-based AI visibility company. Before founding Voxaris in 2026, he managed The Kitchen and Bath Store of Orlando and rebuilt their website into an AI-optimized site that generated over six figures in revenue. He is a full-time college student in Florida with two years of hands-on experience in AI-driven marketing.",
  };

  return (
    <section className="section-padding border-t border-[hsl(var(--border))]">
      <JsonLd data={personLd} id="ld-founder" />
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
            <div className="max-w-[60ch]">
              <p className="eyebrow mb-4">Who builds Voxaris?</p>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.03em] text-foreground mb-6 leading-[1.1]">
                Why is Voxaris the AEO authority?
              </h2>

              <p className="text-[16px] lg:text-[17px] text-muted-foreground leading-relaxed mb-5">
                Voxaris is run by{" "}
                <span className="text-foreground font-medium">Ethan Stopperich</span> — a
                Florida college student, business operator, and AI marketing builder based
                in Orlando. Before founding Voxaris in 2026, Ethan managed{" "}
                <span className="text-foreground font-medium">
                  The Kitchen and Bath Store of Orlando
                </span>
                , where he rebuilt their website into an AI-optimized site that generated{" "}
                <span className="text-foreground font-medium">
                  over six figures in revenue
                </span>{" "}
                in its first year live.
              </p>

              <p className="text-[16px] lg:text-[17px] text-muted-foreground leading-relaxed mb-7">
                That project answered the question he kept asking himself —{" "}
                <em>"how cool would it be to get my own business cited by AI?"</em> —
                and Voxaris became the answer for every business asking the same thing.
                Two years deep into AI-driven marketing, with one local AI-revenue
                playbook already proven, Ethan now ships the same infrastructure to
                businesses across Florida and the U.S.
              </p>

              <blockquote className="border-l-2 border-[hsl(var(--accent))/40] pl-5 mb-7 text-foreground text-lg italic leading-snug">
                "AI is the future. I don't want to be stuck in the present."
              </blockquote>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <a
                  href="https://www.linkedin.com/company/voxaris-ai-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="mailto:ethan@voxaris.io"
                  className="hover:text-foreground transition-colors"
                >
                  ethan@voxaris.io
                </a>
                <span className="text-muted-foreground/60">Orlando, FL · Founded 2026</span>
              </div>
            </div>

            {/* Credentials column */}
            <div className="flex flex-col gap-3 lg:min-w-[240px]">
              <Cred label="Specialty" value="AEO + AI Visibility" />
              <Cred label="Past win" value="6-figure AI website rebuild" />
              <Cred label="Years in AI marketing" value="2+ years hands-on" />
              <Cred label="Coverage" value="6 AI engines tracked weekly" />
              <Cred label="Guarantee" value="80+ score in 30 days" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Cred({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
      <div className="font-mono-display text-[10px] uppercase tracking-[0.14em] text-muted-foreground/80 mb-1">
        {label}
      </div>
      <div className="text-sm text-foreground font-medium">{value}</div>
    </div>
  );
}
