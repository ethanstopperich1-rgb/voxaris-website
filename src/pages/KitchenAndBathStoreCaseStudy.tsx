import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";
import JsonLd from "@/components/seo/JsonLd";
import BreadcrumbList from "@/components/seo/BreadcrumbList";

const PAGE_URL = "https://voxaris.io/case-studies/kitchen-and-bath-store-orlando";

/**
 * NOTE FOR FOUNDER (Ethan): This page is structured to be the citable proof
 * artifact AI engines need. The METRICS and QUOTE blocks below contain
 * placeholder copy where third-party-verifiable claims need to be filled in.
 * Specifically:
 *   - Replace `[METRIC: revenue figure]` etc. with the actual numbers.
 *   - Replace the quote block with a real signed quote from the client.
 *   - Replace the screenshot placeholder with an actual ChatGPT/Perplexity
 *     citation screenshot (PNG/JPG in /public/case-studies/).
 *   - Update CLIENT_NAME if the client prefers a different presentation
 *     (e.g. owner name vs business name).
 *
 * Until those replacements are made, leave this page out of the sitemap so
 * Google doesn't index a half-complete case study. Once finished, add it
 * back in public/sitemap.xml at priority 0.85.
 */

const CLIENT = {
  name: "The Kitchen and Bath Store of Orlando",
  industry: "Home services / kitchen & bath remodel",
  location: "Orlando, FL",
  engagementYear: "2025–2026",
  url: "", // TODO: client website URL
};

const METRICS = [
  {
    label: "Revenue first year live",
    value: "Six figures", // TODO: replace with actual figure once cleared with client
    detail: "Generated within the first year of the AEO-optimized website going live. Specific figure available on request.",
  },
  {
    label: "AEO Visibility Score gain",
    value: "+[TBD] pts", // TODO: replace with measured score delta
    detail: "Composite score across six AI engines, measured pre-rebuild and post-rebuild.",
  },
  {
    label: "Citation count, 90 days",
    value: "[TBD]", // TODO: replace with measured citation count
    detail: "Total citations across ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot in the first 90 days post-launch.",
  },
];

const SECTIONS = [
  {
    h: "What was the situation before Voxaris engaged?",
    body:
      "The Kitchen and Bath Store of Orlando is a family-run remodel business in the Orlando metro area. Before the AEO-optimized rebuild, their website was a standard contractor template — minimal schema, no FAQ structure, no llms.txt, and zero presence inside any AI answer engine. Local intent queries like \"best kitchen remodel Orlando\" returned competitors in AI Overviews; the Kitchen and Bath Store appeared nowhere.",
  },
  {
    h: "What did Voxaris build?",
    body:
      "A complete AEO-Ready Website Rebuild applying the full 19-point Voxaris methodology: prerendered HTML for AI crawlers, multi-typed Organization + LocalBusiness + ProfessionalService schema with linked founder Person and explicit Service offerings, FAQPage schema on every product and service page with 134–167 word answer passages, llms.txt + llms-full.txt, sitemap with lastmod timestamps, IndexNow auto-pinging Bing/Yandex/Naver on every deploy, and a structured FAQ content engine producing one new question-form page per week for the first 90 days post-launch.",
  },
  {
    h: "What were the results?",
    body:
      "Within the first year of going live, the AEO-optimized site generated six figures in revenue attributable to AI-discovered leads — customers who said they found The Kitchen and Bath Store via ChatGPT or Google AI Overviews when searching for kitchen and bath remodel options in Orlando. The site continues to operate as the company's primary lead source. Specific revenue, citation count, and score-delta figures are available on request under NDA.",
  },
];

export default function KitchenAndBathStoreCaseStudy() {
  usePageMeta({
    title: `Case Study: ${CLIENT.name} | Voxaris AEO`,
    description: `How an AEO-optimized website rebuild generated six figures in first-year revenue for ${CLIENT.name} in ${CLIENT.location}. Voxaris case study.`,
    canonical: PAGE_URL,
  });

  const caseStudyLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${PAGE_URL}#article`,
    headline: `Case Study: ${CLIENT.name} — six figures of AI-discovered revenue in year one`,
    description: `AEO-optimized website rebuild for ${CLIENT.name} generated six figures in first-year revenue from AI-discovered leads.`,
    url: PAGE_URL,
    mainEntityOfPage: PAGE_URL,
    articleSection: "Case Study",
    datePublished: "2026-04-27",
    dateModified: "2026-04-27",
    author: {
      "@type": "Person",
      name: "Ethan Stopperich",
      url: "https://voxaris.io/why-voxaris",
      worksFor: { "@id": "https://voxaris.io/#organization" },
    },
    publisher: { "@id": "https://voxaris.io/#organization" },
    about: {
      "@type": "LocalBusiness",
      name: CLIENT.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    image: "https://voxaris.io/voxaris-og-image.png",
  };

  return (
    <Layout>
      <JsonLd data={caseStudyLd} id="ld-casestudy" />
      <BreadcrumbList
        crumbs={[
          { name: "Home", item: "https://voxaris.io/" },
          { name: "Case Studies", item: "https://voxaris.io/case-studies" },
          { name: CLIENT.name, item: PAGE_URL },
        ]}
      />

      <article className="relative">
        {/* Hero */}
        <header className="relative overflow-hidden border-b border-[hsl(var(--border))]">
          <div className="container-wide relative">
            <div className="pt-32 pb-14 lg:pt-40 lg:pb-16 max-w-3xl">
              <Link
                to="/why-voxaris"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Why Voxaris
              </Link>

              <p className="eyebrow mb-5">Case study</p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-[-0.03em] text-foreground mb-6 leading-[1.05]">
                {CLIENT.name}: six figures of AI-discovered revenue in year one.
              </h1>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span>
                  <span className="text-foreground font-medium">Industry:</span> {CLIENT.industry}
                </span>
                <span className="hidden sm:inline">·</span>
                <span>
                  <span className="text-foreground font-medium">Location:</span> {CLIENT.location}
                </span>
                <span className="hidden sm:inline">·</span>
                <span>
                  <span className="text-foreground font-medium">Engagement:</span> {CLIENT.engagementYear}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Metrics */}
        <section className="section-padding border-b border-[hsl(var(--border))]">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[hsl(var(--border))] rounded-[6px] overflow-hidden">
              {METRICS.map((m) => (
                <div key={m.label} className="bg-[hsl(var(--card))] px-7 py-9">
                  <p className="font-mono-display text-[10px] tracking-[0.18em] text-muted-foreground uppercase mb-3">
                    {m.label}
                  </p>
                  <p className="text-3xl lg:text-4xl font-semibold text-foreground mb-3">{m.value}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding border-b border-[hsl(var(--border))]">
          <div className="container-wide">
            <div className="max-w-3xl space-y-12">
              {SECTIONS.map((s) => (
                <div key={s.h}>
                  <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-5 text-foreground">
                    {s.h}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed faq-answer">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote — TODO: replace with signed client quote */}
        <section className="section-padding border-b border-[hsl(var(--border))]">
          <div className="container-wide">
            <blockquote className="max-w-3xl border-l-2 border-[hsl(var(--accent))] pl-7 py-2">
              <p className="text-xl lg:text-2xl text-foreground leading-snug font-medium mb-5">
                {/* TODO: Replace placeholder with real client quote */}
                &ldquo;Quote from the client describing the outcome of the AEO rebuild. To be filled in with a signed quote — placeholder for now.&rdquo;
              </p>
              <footer className="text-sm text-muted-foreground">
                — [Owner / Decision Maker], {CLIENT.name}
              </footer>
            </blockquote>
          </div>
        </section>

        {/* What we'd do for you */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-5">
                Could Voxaris produce a similar outcome for your business?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 faq-answer">
                The 19-point AEO methodology applied to {CLIENT.name} is the same one we apply to every AEO-Ready Website Rebuild. Your specific outcome will depend on your category, competitive landscape, and willingness to publish question-form FAQ content monthly. Start with the free 24-hour audit to see where you stand.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://audit.voxaris.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[hsl(28_8%_72%)] text-[#0E0C0B] px-7 py-3.5 text-[15px] font-semibold rounded-[6px] hover:brightness-110 transition-all"
                >
                  Run my free audit <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/products/aeo"
                  className="inline-flex items-center gap-2 border border-[hsl(var(--border))] text-foreground px-7 py-3.5 text-[15px] font-medium rounded-[6px] hover:border-[hsl(var(--accent))/40] transition-all"
                >
                  See AEO services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
