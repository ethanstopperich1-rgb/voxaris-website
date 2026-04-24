import { motion } from "framer-motion";
import {
  Code2,
  Braces,
  ListChecks,
  MapPin,
  Map,
  Globe,
  Star,
  Network,
  Youtube,
  AtSign,
  BarChart3,
  FileSearch,
} from "lucide-react";

const fixes = [
  {
    icon: Code2,
    title: "Website structure",
    body: "Semantic HTML, heading hierarchy, mobile-first viewport — so AI extractors don't choke.",
  },
  {
    icon: Braces,
    title: "Schema (JSON-LD)",
    body: "Organization, LocalBusiness, Service, Product, FAQPage, BreadcrumbList — installed and validated.",
  },
  {
    icon: ListChecks,
    title: "FAQ blocks",
    body: "Question-phrased headings with machine-readable answers. AI engines pull these verbatim.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    body: "Categories, services, description, Q&A, posts — aligned with how AI search reconciles entity data.",
  },
  {
    icon: Map,
    title: "Apple / Bing / Foursquare",
    body: "The three maps layers most businesses ignore. AI answers pull from all three.",
  },
  {
    icon: Globe,
    title: "Big 8 directories",
    body: "BBB, Yelp, Yellow Pages, Nextdoor, Chamber, Superpages, Manta, industry-specific. Consistent NAP across the board.",
  },
  {
    icon: Star,
    title: "Review signals",
    body: "Review volume + recency + response rate. AI weighs review depth heavily in trust scoring.",
  },
  {
    icon: Network,
    title: "Entity data",
    body: "Wikidata, Knowledge Graph, DBpedia — the entity backbone AI search cross-references.",
  },
  {
    icon: Youtube,
    title: "YouTube",
    body: "Transcribed, schema-tagged, linked to your business entity. AI engines increasingly cite video.",
  },
  {
    icon: AtSign,
    title: "Branded mentions",
    body: "Press, podcasts, guest posts, industry citations. The off-site signals that move Trust.",
  },
  {
    icon: BarChart3,
    title: "Tracking dashboard",
    body: "Live per-engine visibility, weekly score snapshots, competitor benchmarking, drop alerts.",
  },
  {
    icon: FileSearch,
    title: "llms.txt + robots.txt",
    body: "Correct allowlist for GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended.",
  },
];

export default function WhatVoxarisFixesSection() {
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
          <p className="eyebrow mb-4">What Voxaris actually fixes</p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.03em] text-foreground leading-[1.05]">
            Twelve signals.
            <br />
            <span className="text-muted-foreground">Every one, scored and fixed.</span>
          </h2>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {fixes.map((fix, i) => (
            <motion.div
              key={fix.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: (i % 4) * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 hover:border-white/20 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center shrink-0">
                  <fix.icon className="h-4 w-4 text-[hsl(var(--accent))]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-foreground mb-1.5 leading-snug">
                    {fix.title}
                  </div>
                  <div className="text-[12.5px] text-muted-foreground leading-relaxed">
                    {fix.body}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
