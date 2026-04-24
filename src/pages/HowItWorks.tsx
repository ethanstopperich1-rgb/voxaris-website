import { motion, Transition } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Code, FileText, BarChart2, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] } as Transition,
  }),
};

const steps = [
  {
    number: "01",
    icon: Search,
    heading: "AI Presence Report — all three dimensions",
    title: "We score you on Readiness, Visibility, and Trust.",
    body: "Before we touch a single thing, we run your business through the same six engines your buyers use — ChatGPT, Perplexity, Gemini, Google AI Overviews, Bing, and Claude — and score you on the three dimensions AI search actually judges on. Readiness is crawler access, llms.txt, FAQPage schema, viewport meta, Open Graph, mobile indexability. Visibility is how often you appear in real AI answers. Trust is what Google Business Profile, Foursquare, and the citation web say about you.",
    tag: "Free 3-score teaser · 60 seconds · 1 Perplexity screenshot",
  },
  {
    number: "02",
    icon: Code,
    heading: "Readiness fixes — week one",
    title: "We fix how AI reads your site.",
    body: "AI engines don't rank pages. They extract structured facts. We implement JSON-LD schema (Organization, LocalBusiness, Service, FAQPage), ship a correct llms.txt + robots.txt split for AI search bots vs AI training bots, fix viewport meta for mobile-first indexability, and lock down Open Graph and canonical tags. Most businesses have zero schema and a robots.txt that silently blocks GPTBot. This alone moves the Readiness score fast.",
    tag: "Week 1 — fastest-moving dimension",
  },
  {
    number: "03",
    icon: FileText,
    heading: "Visibility + Trust building",
    title: "We earn citations across 6 engines — and entity signals across the web.",
    body: "Visibility work is answer-format content, question-phrased headings, and the 12-query buyer-intent matrix AI engines actually resolve against (shopping, emergency, storm/insurance, service-specific, trust/vetting, financing). Trust work is Google Business Profile optimization, Foursquare + Big 8 directory consistency, and entity-graph hygiene (Wikidata, Knowledge Graph). Both dimensions compound — Visibility lifts faster, Trust lifts longer.",
    tag: "Ongoing — month-over-month compounding",
  },
  {
    number: "04",
    icon: BarChart2,
    heading: "Tracking dashboard — $299/mo",
    title: "Weekly snapshots across all 6 engines, in your dashboard.",
    body: "Once Readiness is fixed and Visibility starts climbing, you need to watch it. Your dashboard at audit.voxaris.io/dashboard shows weekly score snapshots on all three dimensions, per-engine visibility breakdown (ChatGPT / Perplexity / Gemini / Google AIO / Bing / Claude), competitor benchmarking, citation health, and Google Search Console + Bing Webmaster connectors feeding live traffic data. Score-drop alerts the moment an engine re-indexes you down.",
    tag: "Weekly pulse · live dashboard · competitor watch",
  },
];

const timeline = [
  { range: "Week 1–2", title: "Technical foundation complete", sub: "Schema, robots.txt, sitemap, meta layer" },
  { range: "Week 3–6", title: "First citations appear", sub: "AI engines begin pulling your business into answers" },
  { range: "Month 3+", title: "Consistent AI presence", sub: "Appearing in 4+ engines across your core service queries" },
];

export default function HowItWorks() {
  usePageMeta({
    title: "How It Works | Voxaris AEO Process",
    description:
      "How Voxaris runs Answer Engine Optimization: audit, schema build, llms.txt, FAQ content, and weekly AI citation tracking.",
    canonical: "https://voxaris.io/how-it-works",
  });
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[hsl(var(--border))]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 10% 60%, hsl(28 8% 72% / 0.03) 0%, transparent 70%)",
          }}
        />
        <div className="container-wide relative">
          <div className="pt-32 pb-20 lg:pt-40 lg:pb-28 max-w-3xl">
            <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp} className="mb-7">
              <p className="eyebrow">How It Works</p>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
              className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-[4rem] font-semibold tracking-[-0.03em] text-foreground mb-7 leading-[1.05]"
            >
              From invisible to cited —<br />
              <span className="text-muted-foreground">in weeks, not months.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
              className="text-lg lg:text-xl text-muted-foreground max-w-[54ch] leading-relaxed"
            >
              Voxaris runs a four-part system scored on three dimensions — Readiness, Visibility, Trust — across ChatGPT, Perplexity, Gemini, Google AI Overviews, Bing, and Claude. Free 3-score teaser first. Paid unlock, tracking dashboard, and full rebuild if you want them.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="space-y-20 lg:space-y-28">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-16 items-start"
              >
                <div className="flex lg:flex-col items-center lg:items-start gap-5">
                  <span className="font-mono-display text-[hsl(var(--accent))] text-[13px] tracking-[0.12em]">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 border border-[hsl(var(--border))] rounded-[6px] flex items-center justify-center">
                    <step.icon className="h-5 w-5 text-[hsl(var(--accent))]" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="max-w-[60ch]">
                  <p className="eyebrow-muted mb-3">{step.heading}</p>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-5 leading-[1.2] tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  <p className="text-[15px] lg:text-[16px] text-muted-foreground leading-relaxed mb-5">
                    {step.body}
                  </p>
                  <span className="inline-block border border-[hsl(var(--accent))/25] text-[hsl(var(--accent))] text-[12px] font-medium px-3 py-1.5 rounded-[6px]">
                    {step.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-[55ch]"
          >
            <p className="eyebrow mb-4">What to expect</p>
            <h2 className="text-heading font-semibold text-foreground">
              A realistic timeline, measured in weeks — not years.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[hsl(var(--border))] rounded-[6px] overflow-hidden">
            {timeline.map((item, index) => (
              <motion.div
                key={item.range}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-[hsl(var(--card))] px-8 py-10"
              >
                <div className="stat-number text-2xl font-medium mb-3">{item.range}</div>
                <div className="text-[17px] font-semibold text-foreground mb-2">{item.title}</div>
                <div className="text-[14px] text-muted-foreground leading-relaxed">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-[55ch]"
          >
            <p className="eyebrow mb-4">Next step</p>
            <h2 className="text-heading font-semibold text-foreground mb-4">
              Start with a free audit.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We'll show you exactly where you stand on all three dimensions before you spend a dollar. Free AI Presence Report, delivered in 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://audit.voxaris.io" target="_blank" rel="noopener noreferrer">
                <button
                  style={{
                    background: "hsl(28 8% 72%)",
                    color: "#000",
                    padding: "14px 28px",
                    fontSize: 15,
                    fontWeight: 600,
                    borderRadius: 6,
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "filter 150ms",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
                >
                  See Your AI Presence Report <ArrowRight className="h-4 w-4" />
                </button>
              </a>
              <Link to="/book-demo">
                <button className="border border-[hsl(var(--border))] text-foreground px-6 py-3 text-[15px] font-medium rounded-[6px] hover:border-[hsl(var(--accent))/40] transition-all duration-200">
                  Book a Demo
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
