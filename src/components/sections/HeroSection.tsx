import { motion, Transition } from "framer-motion";
import { Link } from "react-router-dom";
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
    <section className="relative overflow-hidden bg-background">
      {/* Single subtle radial — not an orb, just ambient warmth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 10% 60%, hsl(72 100% 64% / 0.03) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative">
        <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 max-w-3xl">
          {/* Eyebrow */}
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp} className="mb-7">
            <span
              style={{
                fontFamily: "'JetBrains Mono', 'Space Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "hsl(72 100% 64%)",
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
                  background: "hsl(72 100% 64%)",
                  display: "inline-block",
                }}
              />
              AI Marketing · Orlando, Florida
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="text-[2.75rem] sm:text-5xl lg:text-6xl xl:text-[4rem] font-semibold tracking-[-0.03em] text-foreground mb-7 leading-[1.05]"
          >
            Get your business found<br />
            <span className="text-muted-foreground">by AI — not just Google.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="text-lg lg:text-xl text-muted-foreground max-w-[52ch] mb-12 leading-relaxed font-normal"
          >
            Voxaris builds AI-optimized websites, runs AEO campaigns that get you cited by ChatGPT and Perplexity, and delivers personalized video outreach that turns cold contacts into booked calls.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 mb-20"
          >
            <a href="https://audit.voxaris.io" target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  background: "hsl(72 100% 64%)",
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
                Get Free AI Audit <ArrowRight className="h-4 w-4" />
              </button>
            </a>
            <Link to="/book-demo">
              <button
                style={{
                  background: "transparent",
                  color: "hsl(var(--foreground))",
                  padding: "14px 28px",
                  fontSize: 15,
                  fontWeight: 500,
                  borderRadius: 6,
                  border: "1px solid hsl(var(--border))",
                  cursor: "pointer",
                  transition: "border-color 150ms",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "hsl(72 100% 64% / 0.4)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "hsl(var(--border))")
                }
              >
                Book a Demo
              </button>
            </Link>
          </motion.div>

          {/* Three product pills */}
          <motion.div initial="hidden" animate="visible" custom={0.5} variants={fadeUp}>
            <p
              style={{
                fontFamily: "'JetBrains Mono', 'Space Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "hsl(var(--muted-foreground))",
                marginBottom: 14,
                opacity: 0.6,
              }}
            >
              Three products. One team.
            </p>
            <div className="flex flex-wrap gap-2">
              {["AEO Services", "AI Website Builds", "Talking Postcard"].map((label) => (
                <span
                  key={label}
                  style={{
                    padding: "8px 14px",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 6,
                    fontSize: 13,
                    color: "hsl(var(--muted-foreground))",
                    background: "transparent",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
