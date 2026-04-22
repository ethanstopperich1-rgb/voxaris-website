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
              Find out exactly where your business stands across ChatGPT, Perplexity, Gemini, Claude, and Google AI. Free report, delivered in 48 hours. Or book a demo to see all three products live.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://audit.voxaris.io" target="_blank" rel="noopener noreferrer">
                <button className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-6 py-3 text-[15px] font-semibold rounded-[6px] hover:brightness-110 transition-all duration-200 inline-flex items-center gap-2">
                  Get Free Audit <ArrowRight className="h-4 w-4" />
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
            heading="Run your free audit"
            subheading="Drop your details. We'll audit your AI citation share and email a fix list within 24 hours."
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
