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
          {/* Eyebrow */}
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
              AI Visibility · Orlando, Florida
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
            Find out if AI<br />
            <span className="text-muted-foreground">can see your business.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="text-lg lg:text-xl text-muted-foreground max-w-[52ch] mb-10 leading-relaxed font-normal"
          >
            We score your business across ChatGPT, Perplexity, Claude, Gemini, and Google AI
            Overviews. You get a 19-point report, prioritized fixes, and the exact gaps your
            competitors are exploiting — delivered in 24 hours.
          </motion.p>

          {/* Single primary CTA — $99 audit */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <a href="https://buy.stripe.com/fZu6oG3UR2F52jx1g3Wk0F" target="_blank" rel="noopener noreferrer">
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
                Run My AI Audit — $99 <ArrowRight className="h-4 w-4" />
              </button>
            </a>
            <span className="text-sm text-muted-foreground">
              24-hour delivery · 19-point report · No subscription
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
