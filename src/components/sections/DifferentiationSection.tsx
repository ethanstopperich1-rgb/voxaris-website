import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const products = [
  {
    tag: "AEO",
    title: "Answer Engine Optimization",
    description:
      "ChatGPT, Perplexity, and Gemini now answer your customers' questions without sending them to Google. We optimize your business to appear in those answers.",
    bullets: [
      "AI Visibility Audit (free, 48h delivery)",
      "LocalBusiness + FAQPage schema markup",
      "Entity optimization + llms.txt",
      "Monthly citation tracking across 5 platforms",
    ],
    cta: "Get Free Audit",
    href: "https://audit.voxaris.io",
    external: true,
  },
  {
    tag: "WEBSITES",
    title: "AI-Ready Website Builds",
    description:
      "A website built from day one to score 85+ on an AEO audit — schema-complete, FAQ-structured, and optimized for AI citation before the first visitor arrives.",
    bullets: [
      "Live in 72 hours, $1,997 flat",
      "Full JSON-LD schema architecture",
      "Question-phrased content for AI direct answers",
      "GBP optimization included",
    ],
    cta: "See an Example",
    href: "/book-demo",
    external: false,
  },
  {
    tag: "VIDEO",
    title: "Talking Postcard",
    description:
      "Personalized AI video delivered as a physical postcard. Each piece plays a unique video message addressed to the recipient — name, business, city, specific hook.",
    bullets: [
      "AI-generated personalized video per recipient",
      "Physical postcard + QR → video landing page",
      "Campaigns from 500 to 50,000 pieces",
      "Full campaign management included",
    ],
    cta: "See How It Works",
    href: "/book-demo",
    external: false,
  },
];

export default function DifferentiationSection() {
  return (
    <section className="section-padding text-foreground border-y border-[hsl(var(--border))]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', 'Space Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "hsl(28 8% 72%)",
              marginBottom: 16,
            }}
          >
            The Platform
          </p>
          <h2 className="text-3xl lg:text-heading font-semibold mb-4 max-w-[22ch]">
            Three products. One goal: more customers finding you.
          </h2>
          <p className="text-lg text-muted-foreground max-w-[55ch]">
            AEO gets you cited. The website captures the visit. The Talking Postcard starts the conversation. They work together — or standalone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[hsl(var(--border))] rounded-[6px] overflow-hidden">
          {products.map((product, index) => (
            <motion.div
              key={product.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-[hsl(var(--card))] p-8 lg:p-10 flex flex-col"
            >
              <p
                style={{
                  fontFamily: "'JetBrains Mono', 'Space Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "hsl(28 8% 72%)",
                  marginBottom: 20,
                }}
              >
                {product.tag}
              </p>

              <h3 className="text-xl font-semibold mb-4 leading-snug">{product.title}</h3>

              <p className="text-muted-foreground text-[15px] mb-8 leading-relaxed flex-grow">
                {product.description}
              </p>

              <ul className="space-y-3 mb-10">
                {product.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      borderLeft: "2px solid hsl(28 8% 72% / 0.25)",
                      paddingLeft: 12,
                      paddingTop: 2,
                      paddingBottom: 2,
                    }}
                  >
                    <span className="text-sm text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>

              {product.external ? (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 500,
                    color: "hsl(28 8% 72%)",
                    textDecoration: "none",
                    transition: "opacity 150ms",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {product.cta} →
                </a>
              ) : (
                <Link
                  to={product.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 500,
                    color: "hsl(var(--foreground))",
                    textDecoration: "none",
                    transition: "opacity 150ms",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {product.cta} →
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
