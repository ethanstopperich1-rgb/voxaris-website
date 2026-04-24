import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import JsonLd from "@/components/seo/JsonLd";
import { usePageMeta } from "@/hooks/usePageMeta";

export interface LandingFAQ {
  q: string;
  a: string;
}

interface LandingLayoutProps {
  eyebrow: string;
  title: string;
  h1: string;
  subhead: string;
  canonical: string;
  description: string;
  metaTitle?: string;
  answerBlock: string;
  lastUpdated: string; // e.g. "2026-04-24"
  children?: ReactNode;
  faqs: LandingFAQ[];
  breadcrumbs: { name: string; item: string }[];
}

export default function LandingLayout({
  eyebrow,
  title,
  h1,
  subhead,
  canonical,
  description,
  metaTitle,
  answerBlock,
  lastUpdated,
  children,
  faqs,
  breadcrumbs,
}: LandingLayoutProps) {
  usePageMeta({
    title: metaTitle ?? title,
    description,
    canonical,
  });

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonical}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: b.item,
    })),
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: {
      "@type": "Person",
      "@id": "https://voxaris.io/#founder",
      name: "Ethan Stopperich",
      url: "https://voxaris.io/#founder",
    },
    publisher: { "@id": "https://voxaris.io/#organization" },
    dateModified: lastUpdated,
    datePublished: lastUpdated,
    mainEntityOfPage: canonical,
  };

  return (
    <Layout>
      <JsonLd data={faqLd} id={`ld-${canonical}-faq`} />
      <JsonLd data={breadcrumbLd} id={`ld-${canonical}-breadcrumb`} />
      <JsonLd data={articleLd} id={`ld-${canonical}-article`} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[hsl(var(--border))]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 10% 60%, hsl(28 8% 72% / 0.03) 0%, transparent 70%)",
          }}
        />
        <div className="container-wide relative">
          <div className="pt-16 pb-16 lg:pt-24 lg:pb-20 max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-5">
              <p className="eyebrow">{eyebrow}</p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[2.25rem] sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-semibold tracking-[-0.03em] text-foreground mb-6 leading-[1.08]"
            >
              {h1}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-[58ch] mb-8 leading-relaxed"
            >
              {subhead}
            </motion.p>

            {/* Answer block — first 100 words */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl border border-[hsl(var(--accent))/20] bg-[hsl(var(--accent))/5] p-6 mb-8"
            >
              <div className="font-mono-display text-[10px] uppercase tracking-[0.16em] text-[hsl(var(--accent))] mb-3">
                Quick answer
              </div>
              <p className="text-[15px] text-foreground leading-relaxed">
                {answerBlock}
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-3">
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
              <Link to="/book-demo">
                <button className="border border-[hsl(var(--border))] text-foreground px-6 py-3 text-[15px] font-medium rounded-[6px] hover:border-[hsl(var(--accent))/40] transition-all">
                  Book a walkthrough
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-padding border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-3xl prose-landing space-y-10">{children}</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.03em] text-foreground leading-[1.1] mb-10">
              Common questions
            </h2>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5 px-2">
                  <summary className="cursor-pointer text-[16px] font-medium text-foreground flex items-center justify-between gap-4 list-none">
                    <span>{f.q}</span>
                    <span className="text-muted-foreground text-xs group-open:rotate-180 transition">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-[14.5px] text-muted-foreground leading-relaxed max-w-[66ch]">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Author + last updated */}
      <section className="section-padding border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
            <div>
              <div className="font-mono-display text-[10px] uppercase tracking-[0.14em] text-muted-foreground/80 mb-1.5">
                Written by
              </div>
              <div className="text-[15px] font-semibold text-foreground">Ethan Stopperich</div>
              <div className="text-[13px] text-muted-foreground">
                Founder, Voxaris · Orlando, Florida
              </div>
            </div>
            <div>
              <div className="font-mono-display text-[10px] uppercase tracking-[0.14em] text-muted-foreground/80 mb-1.5">
                Last updated
              </div>
              <div className="text-[14px] text-foreground">{lastUpdated}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Next step</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-[-0.03em] text-foreground mb-4">
              See where you stand.
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Free AI Visibility Audit. About 90 seconds. No credit card.
            </p>
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
          </div>
        </div>
      </section>
    </Layout>
  );
}
