import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const CALENDLY_URL = "https://calendly.com/ethan-voxaris/30min";

export default function BookDemo() {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }, []);

  return (
    <Layout>
      <section className="section-padding min-h-[calc(100vh-5rem)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[42fr_58fr] gap-12 lg:gap-16 items-start">
            {/* Left — content */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow mb-4">Book a Demo</p>
              <h1 className="text-4xl lg:text-display-sm font-semibold text-foreground mb-6 leading-[1.05] tracking-[-0.03em]">
                See Voxaris in action
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-[48ch]">
                Pick a 30-minute slot that works for you. We'll walk through any of the four products live — voice, video, staffing, or AEO — and show you what a deployment in your business looks like.
              </p>

              <p className="eyebrow-muted mb-5">What we'll cover</p>
              <div className="space-y-1 mb-10">
                {[
                  "How Maria handles real sales calls in under 1s",
                  "Talking Postcards + video outreach campaigns",
                  "AI video interviews for hiring pipelines",
                  "AEO — getting cited in ChatGPT, Perplexity, Gemini",
                  "Pricing + implementation timeline for your setup",
                ].map((item, i) => (
                  <div
                    key={item}
                    className={`border-l-2 pl-4 py-2 ${
                      i === 0 ? "border-[hsl(var(--accent))]" : "border-[hsl(var(--border))]"
                    }`}
                  >
                    <span className="text-[15px] text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[hsl(var(--border))] pt-6">
                <p className="eyebrow-muted mb-2">Not ready for a call?</p>
                <a
                  href="https://audit.voxaris.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-[hsl(var(--accent))] font-medium hover:opacity-80 transition"
                >
                  Start with a free AI Visibility Audit →
                </a>
              </div>
            </motion.div>

            {/* Right — Calendly inline embed */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="border border-[hsl(var(--border))] rounded-[8px] overflow-hidden bg-card"
            >
              <div
                className="calendly-inline-widget"
                data-url={`${CALENDLY_URL}?hide_event_type_details=0&hide_gdpr_banner=1&background_color=171412&text_color=f0ede8&primary_color=e8ff47`}
                style={{ minWidth: 320, height: 780 }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
