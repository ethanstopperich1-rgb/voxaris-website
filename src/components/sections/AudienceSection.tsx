import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Product = {
  tag: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  external?: boolean;
};

const products: Product[] = [
  {
    tag: "VOICE",
    title: "AI Voice Agent",
    description:
      "Maria answers every inbound call instantly, qualifies prospects with custom logic, books appointments in real time, and pushes everything to your CRM.",
    features: [
      "Inbound call handling 24/7",
      "Outbound lead follow-up",
      "Appointment booking + SMS confirmation",
      "CRM sync after every call",
    ],
    cta: "See Voice Agent",
    href: "/products/voice-agent",
  },
  {
    tag: "VIDEO",
    title: "AI Video Agent",
    description:
      "Send personalized AI video messages at scale — talking postcards, follow-up sequences, and outreach campaigns that actually get watched.",
    features: [
      "Personalized video per recipient",
      "Talking Postcard physical + digital",
      "Outreach campaign automation",
      "Real-time engagement tracking",
    ],
    cta: "See Video Agent",
    href: "/products/video-agent",
  },
  {
    tag: "STAFFING",
    title: "Staffing Agent",
    description:
      "AI-powered video interviews that screen candidates before your team gets involved. Consistent questions, recorded answers, instant summaries.",
    features: [
      "Automated video interview invites",
      "Structured question delivery",
      "AI summary of each candidate",
      "Integrates with your ATS or CRM",
    ],
    cta: "See Staffing Agent",
    href: "/products/staffing-agent",
  },
  {
    tag: "AEO",
    title: "AEO Services",
    description:
      "Answer Engine Optimization — we make your business visible in ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews. Starts with a free audit.",
    features: [
      "AI Visibility Audit (free)",
      "Schema markup + entity optimization",
      "llms.txt + AI crawler configuration",
      "Monthly citation tracking",
    ],
    cta: "Get Free Audit",
    href: "https://audit.voxaris.io",
    external: true,
  },
];

export default function AudienceSection() {
  return (
    <section className="section-padding border-t border-[hsl(var(--border))]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-[55ch]"
        >
          <p className="eyebrow mb-4">Who It's For</p>
          <h2 className="text-heading font-semibold text-foreground mb-4">
            Built for Florida businesses that can't afford to be invisible
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're a local service business that needs to show up in ChatGPT, or an agency that wants to offer AEO to your clients — Voxaris is built for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-[hsl(var(--border))] rounded-[8px] p-8 hover:border-[hsl(var(--accent))/30] transition-colors duration-200 bg-card flex flex-col"
            >
              <span className="eyebrow mb-4 block">{product.tag}</span>
              <h3 className="text-xl font-semibold text-foreground mb-3">{product.title}</h3>
              <p className="text-muted-foreground text-[15px] mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-1 mb-8 flex-1">
                {product.features.map((f) => (
                  <div
                    key={f}
                    className="border-l-2 border-[hsl(var(--border))] pl-3 py-1"
                  >
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>

              {product.external ? (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-[hsl(var(--accent))] hover:opacity-80 transition"
                >
                  {product.cta} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              ) : (
                <Link
                  to={product.href}
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-foreground hover:text-[hsl(var(--accent))] transition"
                >
                  {product.cta} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
