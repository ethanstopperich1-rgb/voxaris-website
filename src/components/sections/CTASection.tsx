import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type ContactItem = {
  tag: string;
  title: string;
  action: string;
  href: string;
  internal: boolean;
};

const contactItems: ContactItem[] = [
  { tag: "AUDIT", title: "Free AI Visibility Audit", action: "Start free →", href: "https://audit.voxaris.io", internal: false },
  { tag: "DEMO", title: "20-min product walkthrough", action: "Book a time →", href: "/book-demo", internal: true },
  { tag: "WEBSITES", title: "AI-Ready Website Build in 72h", action: "See example →", href: "/products/websites", internal: true },
];

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

          {/* Right — 3 contact methods */}
          <div className="space-y-px bg-[hsl(var(--border))] rounded-[8px] overflow-hidden">
            {contactItems.map((item) => (
              <div
                key={item.tag}
                className="bg-card px-6 py-5 flex items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <span className="eyebrow mb-1 block">{item.tag}</span>
                  <span className="text-[15px] font-medium text-foreground">{item.title}</span>
                </div>
                {item.internal ? (
                  <Link
                    to={item.href}
                    className="text-[13px] text-[hsl(var(--accent))] font-medium hover:opacity-80 transition whitespace-nowrap"
                  >
                    {item.action}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-[hsl(var(--accent))] font-medium hover:opacity-80 transition whitespace-nowrap"
                  >
                    {item.action}
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
