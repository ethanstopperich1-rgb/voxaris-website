import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import LeadForm from "@/components/forms/LeadForm";

export default function CTASection() {
  return (
    <section className="section-padding border-t border-[hsl(var(--border))]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left */}
          <div>
            <p className="eyebrow mb-4">Ready?</p>
            <h2 className="text-heading font-semibold text-foreground mb-4">
              Start with a free AI Visibility Audit
            </h2>
            <p className="text-lg text-muted-foreground max-w-[55ch] mb-8 leading-relaxed">
              Find out exactly where your business stands across ChatGPT, Perplexity, Gemini, Claude, Google AI Overviews, and Bing Copilot. Free preview in about 90 seconds — full report unlocks proof screenshots and the fix plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://audit.voxaris.io" target="_blank" rel="noopener noreferrer">
                <button className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-6 py-3 text-[15px] font-semibold rounded-[6px] hover:brightness-110 transition-all duration-200 inline-flex items-center gap-2">
                  See Your AI Visibility Score <ArrowRight className="h-4 w-4" />
                </button>
              </a>
              <Link to="/book-demo">
                <button className="border border-[hsl(var(--border))] text-foreground px-6 py-3 text-[15px] font-medium rounded-[6px] hover:border-[hsl(var(--accent))/40] transition-all duration-200">
                  Book a Demo
                </button>
              </Link>
            </div>
          </div>

          {/* Right — Lead capture form (Slack + SMS-consent) */}
          <LeadForm
            source="voxaris.io/home"
            heading="See your AI Visibility Score"
            subheading="Drop your details. We'll run the audit and email the preview + fix list. Full report unlocks proof screenshots."
            showMessage={false}
          />
        </motion.div>
      </div>
    </section>
  );
}

// Re-export internals used elsewhere; suppress unused-warnings
void Link;
void ArrowRight;
