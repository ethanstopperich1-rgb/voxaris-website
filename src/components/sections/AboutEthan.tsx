import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";

export default function AboutEthan() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://voxaris.io/#founder",
    name: "Ethan Stopperich",
    jobTitle: "Founder & CEO",
    worksFor: { "@id": "https://voxaris.io/#organization" },
    knowsAbout: [
      "Answer Engine Optimization",
      "AEO",
      "AI visibility infrastructure",
      "Schema markup",
      "Local business citation strategy",
      "ChatGPT optimization",
      "Perplexity ranking",
      "Google AI Overviews",
    ],
    sameAs: [
      "https://www.linkedin.com/company/voxaris",
      "https://x.com/voxaris",
    ],
    description:
      "Ethan Stopperich is the founder of Voxaris, an Orlando-based AI visibility company helping local service businesses get cited by ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot.",
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
            <div className="max-w-[58ch]">
              <p className="eyebrow mb-4">Who builds Voxaris?</p>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.03em] text-foreground mb-5 leading-[1.1]">
                Why is Voxaris the AEO authority?
              </h2>

              <p className="text-[16px] lg:text-[17px] text-muted-foreground leading-relaxed mb-5">
                Voxaris is run by{" "}
                <span className="text-foreground font-medium">Ethan Stopperich</span> from
                Orlando, Florida. The company was founded in 2026 with one focus: building
                the technical and content infrastructure that makes local businesses cited
                by AI engines — not just indexed by Google.
              </p>

              <p className="text-[16px] lg:text-[17px] text-muted-foreground leading-relaxed mb-7">
                Every Voxaris client gets the same playbook we use on{" "}
                <span className="text-foreground font-medium">voxaris.io itself</span> —
                100/100 Technical SEO, complete JSON-LD schema, llms.txt + IndexNow
                wired, and a measurable AI Visibility Score that climbs every month or we
                refund the retainer.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <a
                  href="https://www.linkedin.com/company/voxaris"
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
            <div className="flex flex-col gap-3 lg:min-w-[220px]">
              <Cred label="Specialty" value="AEO + AI Visibility" />
              <Cred label="Client base" value="Local services + agencies" />
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
