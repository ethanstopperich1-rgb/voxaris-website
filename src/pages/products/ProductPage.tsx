import { motion, Transition } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] } as Transition,
  }),
};

export type ProductFeature = {
  title: string;
  body: string;
};

export type ProductPageProps = {
  eyebrow: string;
  headline: React.ReactNode;
  subheadline: string;
  features: ProductFeature[];
  featuresTitle?: string;
  cta: {
    eyebrow?: string;
    headline: string;
    primary: { label: string; href: string; external?: boolean };
    secondary?: { label: string; href: string; external?: boolean };
  };
};

export default function ProductPage({
  eyebrow,
  headline,
  subheadline,
  features,
  featuresTitle = "What's included",
  cta,
}: ProductPageProps) {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background border-b border-[hsl(var(--border))]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 10% 60%, hsl(72 100% 64% / 0.03) 0%, transparent 70%)",
          }}
        />
        <div className="container-wide relative">
          <div className="pt-32 pb-20 lg:pt-40 lg:pb-28 max-w-3xl">
            <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp} className="mb-7">
              <p className="eyebrow">{eyebrow}</p>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
              className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-[4rem] font-semibold tracking-[-0.03em] text-foreground mb-7 leading-[1.05]"
            >
              {headline}
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
              className="text-lg lg:text-xl text-muted-foreground max-w-[56ch] leading-relaxed"
            >
              {subheadline}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-[55ch]"
          >
            <p className="eyebrow mb-4">{featuresTitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[hsl(var(--border))] rounded-[6px] overflow-hidden">
            {features.map((f, index) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="bg-[hsl(var(--card))] px-8 py-10 lg:px-10 lg:py-12"
              >
                <span className="font-mono-display text-[hsl(var(--accent))] text-[11px] tracking-[0.12em] mb-4 block">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-3 leading-snug">
                  {f.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-[55ch]"
          >
            {cta.eyebrow && <p className="eyebrow mb-4">{cta.eyebrow}</p>}
            <h2 className="text-heading font-semibold text-foreground mb-8">{cta.headline}</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              {cta.primary.external ? (
                <a href={cta.primary.href} target="_blank" rel="noopener noreferrer">
                  <PrimaryButton label={cta.primary.label} />
                </a>
              ) : (
                <Link to={cta.primary.href}>
                  <PrimaryButton label={cta.primary.label} />
                </Link>
              )}
              {cta.secondary &&
                (cta.secondary.external ? (
                  <a href={cta.secondary.href} target="_blank" rel="noopener noreferrer">
                    <SecondaryButton label={cta.secondary.label} />
                  </a>
                ) : (
                  <Link to={cta.secondary.href}>
                    <SecondaryButton label={cta.secondary.label} />
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

function PrimaryButton({ label }: { label: string }) {
  return (
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
      {label} <ArrowRight className="h-4 w-4" />
    </button>
  );
}

function SecondaryButton({ label }: { label: string }) {
  return (
    <button className="border border-[hsl(var(--border))] text-foreground px-6 py-3 text-[15px] font-medium rounded-[6px] hover:border-[hsl(var(--accent))/40] transition-all duration-200">
      {label}
    </button>
  );
}
