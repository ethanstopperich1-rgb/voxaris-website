import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";
import JsonLd from "@/components/seo/JsonLd";
import BreadcrumbList from "@/components/seo/BreadcrumbList";

const PAGE_URL = "https://voxaris.io/why-voxaris";

const FAQS = [
  {
    q: "What makes Voxaris different from a traditional SEO agency?",
    a: "Voxaris focuses exclusively on Answer Engine Optimization (AEO) — getting cited inside ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot. Traditional SEO agencies optimize for Google blue-link rankings, where users still click through. AEO targets the answer itself, where users may never click. The skill stacks overlap (schema, content, crawlability) but the tactics diverge: AEO weights question-form headings, 134–167 word answer passages, FAQPage schema, llms.txt, entity recognition, and citation-quality prose far more heavily than traditional SEO.",
  },
  {
    q: "Why should a 2026-founded company be trusted with AI visibility?",
    a: "Three reasons. First, the entire AEO discipline is itself new — every practitioner is a 2024+ specialist because the field didn't exist before. Second, Voxaris was founded by Ethan Stopperich after an AI-optimized website rebuild for The Kitchen and Bath Store of Orlando generated six figures in revenue in its first year, before AEO had a name. Third, voxaris.io itself implements the full 19-point AEO checklist — IndexNow, llms.txt, schema across every page, prerendered HTML for AI crawlers — so the methodology is verifiable at the source.",
  },
  {
    q: "Who is Voxaris not a fit for?",
    a: "Voxaris is not a fit for businesses whose categories AI engines refuse to recommend (cannabis dispensaries, firearms retailers, certain financial products, adult services), enterprise companies that already have a 5+ person SEO team in-house, or businesses unwilling to publish question-form FAQ content. AEO requires content production — if there's no willingness to ship 4 FAQ pages a month, the retainer cannot deliver its core value.",
  },
  {
    q: "How is Voxaris pricing structured?",
    a: "Three retainer tiers, each a one-time setup plus monthly retainer. Visibility ($997 setup + $297/month) is tracking, alerts, and hallucination detection. Citation ($1,997 setup + $997/month) adds monthly content production. Authority ($2,997 setup + $1,997/month) is full management — advanced experimentation, agent-readiness, and original research. The free 24-hour AI Visibility Audit is the lead-in and stays free with no commitment. Optional Site Rebuild add-on: +$1,497 one-time (web design only, no AEO bundled), with optional +$100/month if Voxaris hosts ongoing. No long-term contracts; cancel anytime.",
  },
  {
    q: "What's the founder's background?",
    a: "Ethan Stopperich is the founder and CEO of Voxaris, based in Orlando, Florida. His expertise is in Answer Engine Optimization, AI visibility infrastructure, and local business citation strategy. The methodology behind Voxaris's 19-point AEO checklist is informed by the 2024 GEO research from Princeton, Georgia Tech, and IIT Delhi.",
  },
];

const PILLARS = [
  {
    title: "AEO is what we do, not a sub-service",
    body: "Most marketing agencies will sell you AEO as an add-on to their core SEO or PPC service. Voxaris does only AEO — the citation tracking, the schema, the llms.txt, the FAQ content engine, the weekly reporting. When the discipline is your only product, your incentives align with the outcome. Our average client improves their AI Visibility Score by 15–25 points in the first 30 days.",
  },
  {
    title: "Citations, not impressions",
    body: "Traditional SEO measures impressions, click-through rate, and ranking position. AEO measures whether your business name appears inside an AI answer when a customer asks. Those are different success criteria. Voxaris reports on citation count, citation share against the top three local competitors, and per-engine visibility — the metrics that map to revenue when the user never clicks because the AI already gave them the answer.",
  },
  {
    title: "Methodology is public",
    body: "Our 19-point AEO checklist is published. The research it's based on (Princeton/Georgia Tech/IIT Delhi 2024 GEO study, Bortolato 2025 passage-length analysis) is cited inline. Our llms.txt, robots.txt, schema, and prerendered HTML are inspectable on every Voxaris page — view-source to verify. AEO firms that hide methodology behind proprietary jargon are typically obscuring that they don't have one.",
  },
  {
    title: "Founder-led, Orlando-based, U.S.-only",
    body: "Voxaris is a founder-led shop based in Orlando, Florida. We do not outsource fulfillment. We do not white-label other agencies' work. Every audit, every retainer, every rebuild is delivered by the same small team. We serve U.S.-based clients only, with deep local knowledge of Florida and the Orlando metro area for businesses targeting AI Overviews on local intent queries.",
  },
  {
    title: "Real timelines, real guarantees",
    body: "AEO retainer outcomes show measurable AI Visibility Score lift within 30 days, with citation surface forming on Bing Copilot and Google AI Overviews first (typically days 30–60), followed by ChatGPT and Perplexity (days 60–90). The Website Rebuild tier carries an explicit score-improvement guarantee. We don't promise specific citation outcomes on the retainer because citation share is a function of competitive signals we don't fully control — and any AEO firm that does promise specific outcomes is selling you something they cannot deliver.",
  },
  {
    title: "Audit before retainer, every time",
    body: "We do not sell retainers cold. Every Voxaris client starts with the free 24-hour AI Visibility Audit, which establishes the baseline score, identifies the highest-leverage fixes, and surfaces whether AEO is a fit at all. About 30% of audits result in a recommendation NOT to engage — usually because the business is in a category AI engines refuse to recommend, or because the existing site is fundamentally too thin to optimize. That recommendation is free, and we'd rather give it than take a retainer fee for work that won't move the needle.",
  },
];

const VERSUS = [
  ["Optimization target", "Blue-link rankings on Google", "Citations inside AI answers across 6 engines"],
  ["Engines covered", "Google + Bing", "ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, Bing Copilot"],
  ["Reporting metrics", "Impressions, CTR, position", "Citation count, citation share, per-engine visibility"],
  ["Content style", "Keyword-rich, long-form", "Question-form headings, 134–167 word passages, FAQ-structured"],
  ["Critical schema", "Article, Product, Review", "FAQPage, Organization, Person, Service, speakable, llms.txt"],
  ["Off-site signals", "Backlinks", "sameAs, Wikidata, Reddit, Crunchbase, podcasts, GBP, citation directories"],
  ["Retainer floor", "$1,500–$5,000/mo", "$297/mo"],
  ["Update cadence", "Quarterly content + monthly reporting", "Weekly citation tracking, monthly content"],
];

export default function WhyVoxaris() {
  usePageMeta({
    title: "Why Voxaris | Founder-Led AEO Firm in Orlando, FL",
    description:
      "Voxaris is a founder-led Answer Engine Optimization firm in Orlando, FL. We do only AEO — getting businesses cited by ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot. Public methodology, transparent pricing.",
    canonical: PAGE_URL,
  });

  const aboutLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${PAGE_URL}#aboutpage`,
    url: PAGE_URL,
    name: "Why Voxaris",
    description: "Why Voxaris is the right Answer Engine Optimization firm for local businesses, agencies, and SaaS companies that want to be cited by AI.",
    isPartOf: { "@id": "https://voxaris.io/#website" },
    about: { "@id": "https://voxaris.io/#organization" },
    mainEntity: { "@id": "https://voxaris.io/#organization" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".faq-answer"],
    },
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Layout>
      <JsonLd data={aboutLd} id="ld-aboutpage" />
      <JsonLd data={faqLd} id="ld-faqpage" />
      <BreadcrumbList
        crumbs={[
          { name: "Home", item: "https://voxaris.io/" },
          { name: "Why Voxaris", item: PAGE_URL },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[hsl(var(--border))]">
        <div className="container-wide relative">
          <div className="pt-32 pb-16 lg:pt-40 lg:pb-20 max-w-3xl">
            <p className="eyebrow mb-7">Why Voxaris</p>
            <h1 className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-[4rem] font-semibold tracking-[-0.03em] text-foreground mb-7 leading-[1.05]">
              The only thing we do is get you cited by AI.
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-[60ch] leading-relaxed">
              <strong className="text-foreground">Voxaris is a founder-led Answer Engine Optimization (AEO) firm in Orlando, Florida.</strong>{" "}
              We do not sell SEO. We do not sell PPC. We do not sell social. We do AEO — getting businesses cited inside ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot. Three retainer tiers: Visibility ($997 + $297/mo), Citation ($1,997 + $997/mo), Authority ($2,997 + $1,997/mo). Free 24-hour audit to start.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-4">What sets us apart</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-5">
              Why should you trust a 2026-founded firm with your AI visibility?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed faq-answer">
              The entire AEO discipline is new — every practitioner is a 2024+ specialist because the field didn't exist before. The honest question is not "who's been doing this longest" but "who has a public, verifiable methodology and the discipline to execute it." Six things make Voxaris the right answer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[8px] px-8 py-9 lg:px-9 lg:py-11"
              >
                <span className="font-mono-display text-[hsl(var(--accent))] text-[11px] tracking-[0.12em] mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4 leading-snug">
                  {p.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed faq-answer">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Versus traditional SEO */}
      <section className="section-padding border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-3xl mb-10">
            <p className="eyebrow mb-4">Voxaris vs traditional SEO</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-5">
              How is Voxaris different from a traditional SEO agency?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed faq-answer">
              The skill stacks overlap (crawlability, schema, content quality) but the tactics diverge sharply. SEO optimizes for blue-link rankings where the user still clicks. AEO optimizes for the citation itself, where the user may never click. Different goal, different tactics, different metrics.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[6px] border border-[hsl(var(--border))]">
            <table className="w-full text-sm">
              <thead className="bg-[hsl(var(--card))]">
                <tr className="border-b border-[hsl(var(--border))]">
                  <th className="text-left px-6 py-4 font-semibold">Dimension</th>
                  <th className="text-left px-6 py-4 font-semibold">Traditional SEO Agency</th>
                  <th className="text-left px-6 py-4 font-semibold text-[hsl(var(--accent))]">Voxaris (AEO)</th>
                </tr>
              </thead>
              <tbody>
                {VERSUS.map(([k, seo, vox]) => (
                  <tr key={k} className="border-b border-[hsl(var(--border))] last:border-0">
                    <td className="px-6 py-3 font-medium text-foreground">{k}</td>
                    <td className="px-6 py-3 text-muted-foreground">{seo}</td>
                    <td className="px-6 py-3 text-foreground">{vox}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="section-padding border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-3xl mb-10">
            <p className="eyebrow mb-4">Verifiable proof</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-5">
              How do I know the methodology actually works?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed faq-answer">
              Three independent signals you can verify yourself, today, without a sales call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "View-source voxaris.io",
                body: "Every Voxaris page implements the full 19-point AEO checklist. Open dev tools, inspect the JSON-LD on /products/aeo or this page, check robots.txt allowlists 14 AI crawlers, fetch /llms.txt directly. The methodology is verifiable at the source.",
              },
              {
                title: "Read the underlying research",
                body: "The 134–167 word passage length AEO targets comes from Bortolato 2025's analysis of Google AI Overview citation lengths. The structural recommendations (definition patterns, statistical density, FAQPage schema) come from the 2024 Princeton/Georgia Tech/IIT Delhi GEO study showing 30–115% visibility lift on optimized content.",
              },
              {
                title: "See a real client outcome",
                body: "An AI-optimized website rebuild by Voxaris's founder generated six figures in revenue in its first year live for The Kitchen and Bath Store of Orlando. Case study with named client and dated metrics.",
                cta: { label: "See case study", href: "/case-studies/kitchen-and-bath-store-orlando" },
              },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[8px] px-7 py-8"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed faq-answer">
                  {p.body}
                </p>
                {p.cta && (
                  <Link
                    to={p.cta.href}
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-foreground hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    {p.cta.label} <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we don't work with */}
      <section className="section-padding border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Who we don't work with</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-5">
              Who is Voxaris not a fit for?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-7 faq-answer">
              About 30% of audits we deliver result in a recommendation NOT to engage. We'd rather give that recommendation than take a retainer fee for work that won't move the needle.
            </p>
            <ul className="space-y-3.5 text-[15px] text-muted-foreground">
              {[
                "Businesses in categories AI engines refuse to recommend (cannabis, firearms, certain financial products, adult services). No amount of AEO produces citations there.",
                "Enterprise companies with a 5+ person in-house SEO team. We're not built to plug into a complex internal stack.",
                "Businesses unwilling to publish question-form FAQ content. AEO requires content production — without it, the retainer cannot deliver value.",
                "Operators expecting #1-ranking-style guarantees. Citation share is a function of competitive signals we don't fully control. Any AEO firm that promises specific citations is selling something they cannot deliver.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-4 h-px bg-[hsl(var(--border))] mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-5">
              Frequently asked questions
            </h2>
          </div>

          <div className="max-w-3xl divide-y divide-[hsl(var(--border))]">
            {FAQS.map((f) => (
              <div key={f.q} className="py-7">
                <h3 className="text-lg font-semibold text-foreground mb-3">{f.q}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed faq-answer">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-7">
              Run your free AI Visibility Audit.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-[55ch]">
              See where you stand across all six major AI engines. Delivered in 24 hours. No credit card. Even if Voxaris isn't a fit, you'll leave with a fix list you can hand to anyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://audit.voxaris.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[hsl(28_8%_72%)] text-[#0E0C0B] px-7 py-3.5 text-[15px] font-semibold rounded-[6px] hover:brightness-110 transition-all"
              >
                See Your AI Visibility Score <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/book-demo"
                className="inline-flex items-center gap-2 border border-[hsl(var(--border))] text-foreground px-7 py-3.5 text-[15px] font-medium rounded-[6px] hover:border-[hsl(var(--accent))/40] transition-all"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
