import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

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
    tag: "AEO",
    title: "AEO Services",
    description:
      "Answer Engine Optimization — we make your business visible in ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews. Starts with a free audit.",
    features: [
      "AI Visibility Audit (free, 24h delivery)",
      "Schema + robots.txt + sitemap optimization",
      "AEO content engine (FAQ + answer format)",
      "Weekly citation monitoring across 4 engines",
    ],
    cta: "Get Free Audit",
    href: "https://audit.voxaris.io",
    external: true,
  },
  {
    tag: "VIDEO",
    title: "Talking Postcard",
    description:
      "Personalized AI video outreach at scale — delivered physically with a QR code or digitally. Every recipient sees a video made just for them.",
    features: [
      "Personalized AI video per recipient",
      "Physical postcard + QR, or digital delivery",
      "Outreach campaign automation",
      "Real-time engagement tracking",
    ],
    cta: "See Talking Postcard",
    href: "/products/talking-postcard",
  },
  {
    tag: "WEBSITES",
    title: "AI Website Builds",
    description:
      "AEO-ready websites built in 72 hours. Schema-complete, FAQ-structured, fast. Designed to be cited by AI before the first visitor arrives.",
    features: [
      "Live in 72 hours",
      "Full JSON-LD schema architecture",
      "Question-phrased content for AI extraction",
      "Core Web Vitals optimized",
    ],
    cta: "See AI Website Builds",
    href: "/products/websites",
  },
  {
    tag: "STAFFING",
    title: "Staffing Agent",
    description:
      "AI video interviews that screen every applicant before your team sees a resume. Consistent questions, recorded answers, one-page summaries.",
    features: [
      "Automated video interview invites",
      "Structured question delivery",
      "Recorded answers + AI summaries",
      "Scales from 5 to 500 interviews",
    ],
    cta: "See Staffing Agent",
    href: "/products/staffing",
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
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.05] flex flex-col"
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
              <BorderBeam
                size={240}
                duration={12}
                delay={index * 1.8}
                colorFrom="hsl(28 8% 72%)"
                colorTo="hsl(28 8% 72% / 0)"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
