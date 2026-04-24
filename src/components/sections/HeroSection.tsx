import { motion, Transition } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroLeadForm from "@/components/forms/HeroLeadForm";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] } as Transition,
  }),
};

const engines = [
  "ChatGPT",
  "Perplexity",
  "Claude",
  "Gemini",
  "Google AI Overviews",
  "Bing Copilot",
];

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
        <div className="pt-12 pb-20 lg:pt-20 lg:pb-28 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Left — headline + subhead + engine strip + proof */}
          <div className="max-w-2xl">
            <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp} className="mb-7">
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
                AI Visibility Audit · Orlando, Florida
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
              className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-[4rem] font-semibold tracking-[-0.03em] text-foreground mb-6 leading-[1.05]"
            >
              Is AI recommending<br />
              <span className="text-muted-foreground">your business —<br />or your competitors?</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
              className="text-lg lg:text-xl text-muted-foreground max-w-[56ch] mb-7 leading-relaxed font-normal"
            >
              We check how your business shows up across{" "}
              <span className="text-foreground">ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot</span>
              {" "}— then give you the fix list. Free preview in about 90 seconds.
            </motion.p>

            {/* Engine strip */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.25}
              variants={fadeUp}
              className="flex flex-wrap gap-2 mb-8"
            >
              {engines.map((engine) => (
                <span
                  key={engine}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[hsl(28_8%_72%)]" />
                  {engine}
                </span>
              ))}
            </motion.div>

            {/* Secondary CTA link */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.35}
              variants={fadeUp}
              className="flex flex-col sm:flex-row sm:items-center gap-4 lg:hidden"
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
                  }}
                >
                  Run My Free AI Audit <ArrowRight className="h-4 w-4" />
                </button>
              </a>
            </motion.div>

            {/* Proof strip */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.45}
              variants={fadeUp}
              className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg"
            >
              <div>
                <div className="font-mono-display text-[10px] uppercase tracking-[0.14em] text-muted-foreground/80 mb-1">
                  Engines checked
                </div>
                <div className="text-xl font-semibold text-foreground">6</div>
              </div>
              <div>
                <div className="font-mono-display text-[10px] uppercase tracking-[0.14em] text-muted-foreground/80 mb-1">
                  Preview time
                </div>
                <div className="text-xl font-semibold text-foreground">~90s</div>
              </div>
              <div>
                <div className="font-mono-display text-[10px] uppercase tracking-[0.14em] text-muted-foreground/80 mb-1">
                  Founder-led
                </div>
                <div className="text-xl font-semibold text-foreground">Orlando</div>
              </div>
            </motion.div>
          </div>

          {/* Right — 2-field lead form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:sticky lg:top-32"
          >
            <HeroLeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
