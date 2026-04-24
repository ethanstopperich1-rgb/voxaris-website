import { motion } from "framer-motion";
import { Wrench, Eye, Shield } from "lucide-react";

const scores = [
  {
    icon: Wrench,
    name: "Readiness",
    scoreLabel: "Can AI read you?",
    body: "Crawler access, schema markup (Organization, LocalBusiness, FAQPage), llms.txt, viewport meta, Open Graph, canonical tags, mobile indexability. The fastest dimension to move — most businesses have zero schema and a robots.txt that silently blocks AI bots.",
    signals: ["JSON-LD schema", "llms.txt", "robots.txt + sitemap", "FAQPage structure", "Mobile-first meta"],
  },
  {
    icon: Eye,
    name: "Visibility",
    scoreLabel: "Does AI actually cite you?",
    body: "How often your business appears in real AI answers across the six engines for your buyer-intent queries — shopping, emergency, service-specific, financing, trust/vetting. We run the same prompts your customers run and log the citations.",
    signals: ["ChatGPT citations", "Perplexity sources", "Gemini answers", "Google AI Overviews", "Bing Copilot"],
  },
  {
    icon: Shield,
    name: "Trust",
    scoreLabel: "Does the web back you up?",
    body: "What Google Business Profile, Apple Maps, Bing Places, Foursquare, and the citation web say about you. Entity-graph signals: Wikidata, Knowledge Graph, consistent NAP across directories, review volume, branded mentions. Slower to move, compounds over time.",
    signals: ["Google Business Profile", "Apple / Bing / Foursquare", "Big 8 directories", "Entity consistency", "Review signals"],
  },
];

export default function ThreeScoreSection() {
  return (
    <section className="section-padding border-t border-[hsl(var(--border))]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="eyebrow mb-4">Three scores. One report.</p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.03em] text-foreground leading-[1.05]">
            AI search judges your business
            <br />
            <span className="text-muted-foreground">on three dimensions.</span>
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground max-w-[60ch] leading-relaxed">
            Most &quot;AI SEO&quot; tools only check one. We score all three and show you which is dragging you down.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {scores.map((score, i) => (
            <motion.div
              key={score.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center">
                  <score.icon className="h-4.5 w-4.5 text-[hsl(var(--accent))]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[11px] font-mono-display uppercase tracking-[0.14em] text-muted-foreground/80">
                    Score
                  </div>
                  <div className="text-lg font-semibold text-foreground leading-none">
                    {score.name}
                  </div>
                </div>
              </div>
              <p className="text-[13px] font-medium text-[hsl(var(--accent))] mb-3">
                {score.scoreLabel}
              </p>
              <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
                {score.body}
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[11px] font-mono-display uppercase tracking-[0.12em] text-muted-foreground/70 mb-2">
                  Signals we check
                </p>
                <ul className="space-y-1">
                  {score.signals.map((s) => (
                    <li key={s} className="text-[13px] text-muted-foreground flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-[hsl(28_8%_72%)] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
