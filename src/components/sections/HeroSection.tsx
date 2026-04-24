import { motion, Transition } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] } as Transition,
  }),
};

// The three dimensions AI search judges every business on.
// Shipped as a unified report on /proof/[slug] in audit.voxaris.io.
const DIMENSIONS: { label: string; sub: string }[] = [
  { label: "Readiness", sub: "Can AI crawl you?" },
  { label: "Visibility", sub: "Does AI name you?" },
  { label: "Trust", sub: "Does AI trust you?" },
];

const ENGINES = ["ChatGPT", "Perplexity", "Gemini", "Google AIO", "Bing", "Claude"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 10% 60%, hsl(28 8% 72% / 0.03) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative">
        <div className="pt-12 pb-20 lg:pt-20 lg:pb-28 max-w-3xl">
          {/* Release strip — calls out the three-dimension upgrade for repeat visitors */}
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp} className="mb-7">
            <a
              href="https://audit.voxaris.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[12px] text-muted-foreground hover:bg-white/[0.06] hover:border-white/20 transition-colors"
            >
              <span
                className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(28_8%_72%)]/12 text-[hsl(28_8%_72%)] px-2 py-0.5 text-[10px] font-semibold tracking-[0.12em] uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(28_8%_72%)]" />
                New
              </span>
              <span className="text-foreground/90">
                3-dimension AI Presence Report — Readiness + Visibility + Trust, 6 engines
              </span>
              <ArrowRight className="h-3.5 w-3.5 opacity-70" />
            </a>
          </motion.div>

          {/* Eyebrow */}
          <motion.div initial="hidden" animate="visible" custom={0.05} variants={fadeUp} className="mb-7">
            <span
              style={{
                fontFamily: "'JetBrains Mono', 'Space Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "hsl(28 8% 72%)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 2,
                  background: "hsl(28 8% 72%)",
                  display: "inline-block",
                }}
              />
              AI Presence · Orlando, Florida
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="text-[2.75rem] sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-semibold tracking-[-0.03em] text-foreground mb-7 leading-[1.05]"
          >
            AI search judges your<br />
            business on three<br />
            <span className="text-muted-foreground">dimensions. Here's all three.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="text-lg lg:text-xl text-muted-foreground max-w-[56ch] mb-8 leading-relaxed font-normal"
          >
            Readiness — can the crawlers actually read your site. Visibility —
            how often ChatGPT, Perplexity, Gemini, Google AI Overviews, Bing, and
            Claude name you in real answers. Trust — what Google Business,
            Foursquare, and the citation web say about you.
            One free audit. One unified report. Scored across all six engines.
          </motion.p>

          {/* Three-dimension score pill row (mirrors the hero on /proof/[slug]) */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.25}
            variants={fadeUp}
            className="mb-10 flex flex-wrap gap-3"
            aria-label="The three dimensions of the AI Presence Report"
          >
            {DIMENSIONS.map((d) => (
              <div
                key={d.label}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5"
              >
                <span className="font-mono-display text-[11px] tracking-[0.12em] uppercase text-[hsl(28_8%_72%)]">
                  {d.label}
                </span>
                <span className="text-[13px] text-muted-foreground">{d.sub}</span>
              </div>
            ))}
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <a href="https://audit.voxaris.io" target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  background: "hsl(28 8% 72%)",
                  color: "#000",
                  padding: "16px 32px",
                  fontSize: 16,
                  fontWeight: 600,
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  transition: "filter 150ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.08)")}
                onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
              >
                Run My Free AI Presence Report <ArrowRight className="h-4 w-4" />
              </button>
            </a>
            <span className="text-sm text-muted-foreground">
              Free · 60-second teaser · 6 engines · No credit card
            </span>
          </motion.div>

          {/* Engine coverage strip */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            <span className="font-mono-display text-[10px] tracking-[0.16em] uppercase text-muted-foreground">
              Scored across
            </span>
            {ENGINES.map((e) => (
              <span
                key={e}
                className="text-[12px] text-foreground/80 border-b border-white/10 pb-0.5"
              >
                {e}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
