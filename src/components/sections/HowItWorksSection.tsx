import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Enter your URL",
    body: "Drop in your website. No credit card. Nothing to download.",
  },
  {
    num: "02",
    title: "We test 6 engines",
    body: "ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, Bing Copilot. Same prompts your buyers run.",
  },
  {
    num: "03",
    title: "Get your scores",
    body: "Readiness, Visibility, Trust — scored 0–100. Plus the top fix surfaced immediately.",
  },
  {
    num: "04",
    title: "See the fix plan",
    body: "Full report unlocks proof screenshots, 19-signal breakdown, and the prioritized fix list.",
  },
];

export default function HowItWorksSection() {
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
          <p className="eyebrow mb-4">How Voxaris works</p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.03em] text-foreground leading-[1.05]">
            Four steps.
            <br />
            <span className="text-muted-foreground">Free preview in about 90 seconds.</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6"
            >
              <div className="font-mono-display text-[hsl(var(--accent))] text-[12px] tracking-[0.16em] mb-5">
                {step.num}
              </div>
              <div className="text-[16px] font-semibold text-foreground mb-2">
                {step.title}
              </div>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
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
              }}
            >
              Run My Free AI Audit <ArrowRight className="h-4 w-4" />
            </button>
          </a>
          <Link to="/how-it-works">
            <button className="border border-[hsl(var(--border))] text-foreground px-6 py-3 text-[15px] font-medium rounded-[6px] hover:border-[hsl(var(--accent))/40] transition-all">
              See the full process
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
