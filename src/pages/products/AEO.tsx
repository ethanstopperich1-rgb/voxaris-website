import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";
import JsonLd from "@/components/seo/JsonLd";
import BreadcrumbList from "@/components/seo/BreadcrumbList";

const PAGE_URL = "https://voxaris.io/products/aeo";

const SIX_ENGINES = [
  "ChatGPT",
  "Perplexity",
  "Claude",
  "Gemini",
  "Google AI Overviews",
  "Bing Copilot",
];

interface Faq {
  q: string;
  a: string;
}

const FAQS: Faq[] = [
  {
    q: "What is Answer Engine Optimization (AEO)?",
    a: "Answer Engine Optimization (AEO) is the practice of structuring a website's content, schema markup, and external citations so AI models cite the business in response to relevant customer queries. Distinct from traditional SEO, which optimizes for blue-link search results, AEO optimizes for AI-generated answer extraction across ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot.",
  },
  {
    q: "How is AEO different from SEO?",
    a: "SEO optimizes a page to rank in Google's blue-link results, where users click through to read. AEO optimizes a page to be cited inside an AI answer, where users may never click. The two share fundamentals (crawlability, schema, content quality) but diverge on tactics: AEO weights question-form headings, 134–167 word answer passages, FAQPage schema, llms.txt, citation-quality prose, and entity recognition signals far more heavily than traditional SEO does.",
  },
  {
    q: "Which AI engines does Voxaris track?",
    a: "Voxaris tracks the six major AI answer engines: ChatGPT (OpenAI), Perplexity, Claude (Anthropic), Gemini (Google), Google AI Overviews, and Bing Copilot. We also monitor Grok on the highest tier. Other long-tail engines (DeepSeek, Mistral, You.com) are reported on demand.",
  },
  {
    q: "How long until I see citations move?",
    a: "Most clients see measurable AI Visibility Score improvements within 30 days. Citation appearances typically surface within 2–6 weeks of implementation, with the highest gains coming from technical fixes that ship in the first week (schema, llms.txt, robots.txt) and from question-form FAQ content that ships in the first 30 days.",
  },
  {
    q: "What does AEO cost?",
    a: "Voxaris offers three retainer tiers, each with a one-time setup fee and a monthly retainer. Visibility is $997 setup + $297/month for tracking and alerts. Citation is $1,997 setup + $997/month and adds monthly content production. Authority is $2,997 setup + $1,997/month and runs the entire AI visibility funnel. The free AI Visibility Audit is the lead-in and stays free with no commitment.",
  },
  {
    q: "Can Voxaris also redesign my website?",
    a: "Yes, as an optional one-time add-on for $1,497. The Site Rebuild is a pure web-design service — new visual treatment using modern components, same brand identity, deployed on a fast Next.js stack. It has nothing to do with AEO; the AEO retainer fee stays the same whether we rebuild your site or apply the AEO work to your existing one. If you'd like Voxaris to also host and manage the rebuilt site ongoing, that's an additional $100/month on top of the retainer; otherwise you take ownership and host it yourself.",
  },
  {
    q: "Do you guarantee results?",
    a: "Citation share is a function of competitive signals Voxaris doesn't fully control, so we don't guarantee specific citation outcomes on the retainer alone. What we do guarantee: every audit finding gets fixed and tracked, and our average client improves their AI Visibility Score by 15–25 points within the first 30 days of retainer. The Site Rebuild add-on (where we control the entire build) is the only path with an explicit score-improvement guarantee.",
  },
  {
    q: "Who is Voxaris AEO for?",
    a: "Local service businesses (roofing, dental, law, HVAC, home services, dealerships), marketing agencies reselling AEO to their clients, and SaaS companies competing for AI-recommended-tool mentions. We do not work with businesses in regulated categories that AI engines refuse to recommend (cannabis, firearms, certain financial products) because no amount of AEO will produce citations there.",
  },
  {
    q: "What's the difference between being indexed and being cited by AI?",
    a: "Being indexed means an AI crawler can read your site. Being cited means an AI answer engine actually references your site (by name, by URL, or by paraphrase) when a user asks a relevant question. Most local business sites are indexed but never cited — indexability is necessary but not sufficient. AEO closes that gap by adding the structural signals AI models weight when selecting which indexed sources to extract from.",
  },
];

const SERVICES = [
  {
    n: "01",
    title: "What's in the AI Visibility Audit?",
    body: "The AI Visibility Audit scores how often your business is cited across the six major AI answer engines using a 19-point AEO checklist. Voxaris returns a 0–100 composite score, a per-engine citation breakdown, a competitive citation gap analysis against your top three local competitors, and a prioritized fix list. Every audit is delivered within 24 hours, free, with no credit card required.",
    cta: { label: "Run my free audit", href: "https://audit.voxaris.io", external: true },
  },
  {
    n: "02",
    title: "How does Voxaris fix the technical layer?",
    body: "Voxaris ships valid JSON-LD schema (Organization, LocalBusiness, FAQPage, Service, Person, BreadcrumbList) on every indexable page, configures robots.txt to explicitly allow the major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended, and others), generates a complete sitemap with lastmod timestamps, deploys a structured llms.txt file so AI models receive a curated site summary, and adds IndexNow auto-pinging on every deploy. Average implementation: 5–7 business days from kickoff.",
  },
  {
    n: "03",
    title: "How does the AEO Content Engine produce citable content?",
    body: "The AEO Content Engine produces 4 question-form FAQ pages and 2 long-form answer articles per month, each formatted to the 134–167 word passage length AI engines preferentially extract (per the 2024 GEO research from Princeton, Georgia Tech, and IIT Delhi). Every piece ships with FAQPage schema, speakable selectors, named author bylines, and inline citations to authoritative sources. Sample output: see our blog post on why an 85/100 AEO score still leaves you invisible.",
  },
  {
    n: "04",
    title: "How does weekly citation monitoring work?",
    body: "Voxaris runs 36 standardized prompts per week — six per engine across ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot — and tracks whether your business is cited, ranked, or absent. Clients receive a one-page report every Monday morning showing citation count delta, source-overlap with the top three competitors, and the next two highest-leverage fixes. Twelve months of citation history are retained in the dashboard.",
  },
];

const TIMELINE = [
  {
    when: "Week 1",
    what: "Audit + technical fixes",
    detail: "Schema deployed, robots.txt and sitemap fixed, llms.txt published, IndexNow wired up. AI crawlers can now read your site cleanly.",
  },
  {
    when: "Weeks 2–4",
    what: "Content + FAQ + entity work",
    detail: "Question-form FAQs ship, GBP and citation directories cleaned up, sameAs links added, founder/expert profiles published. Citation surface starts forming.",
  },
  {
    when: "Days 30–60",
    what: "First citations surface",
    detail: "Bing Copilot and Google AI Overviews typically show first. Citation tracking dashboard starts charting upward movement on standardized prompts.",
  },
  {
    when: "Days 60–90",
    what: "ChatGPT + Perplexity gains",
    detail: "Long-tail entity recognition improves as off-site signals (reviews, mentions, sameAs) compound. Average client sees +15–25 composite score points by day 30, +30–40 by day 90.",
  },
];

export default function AEO() {
  usePageMeta({
    title: "AEO Services | Get Cited by ChatGPT, Perplexity, Claude, Gemini & More | Voxaris",
    description:
      "Voxaris Answer Engine Optimization: three tiers — Visibility ($297/mo), Citation ($997/mo), Authority ($1,997/mo) — to get businesses cited across ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot. Orlando, FL.",
    canonical: PAGE_URL,
  });

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Answer Engine Optimization (AEO) Services",
    serviceType: "Answer Engine Optimization",
    provider: { "@id": "https://voxaris.io/#organization" },
    areaServed: { "@type": "Country", name: "US" },
    url: PAGE_URL,
    description:
      "Monthly AEO retainer that gets local businesses cited inside ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot. Includes technical schema, llms.txt, content engine, and weekly citation tracking.",
    offers: [
      {
        "@type": "Offer",
        name: "AI Visibility Audit",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://audit.voxaris.io",
      },
      {
        "@type": "Offer",
        name: "Visibility (AEO retainer)",
        description: "$997 one-time setup + $297/month. Tracking, alerts, hallucination detection.",
        price: "297",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "297",
          priceCurrency: "USD",
          unitCode: "MON",
          billingDuration: "P1M",
        },
        url: "https://voxaris.io/book-demo",
      },
      {
        "@type": "Offer",
        name: "Citation (AEO retainer + content)",
        description: "$1,997 one-time setup + $997/month. Visibility tier plus monthly content production, FAQ pages, Perplexity Pages, video, outreach.",
        price: "997",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "997",
          priceCurrency: "USD",
          unitCode: "MON",
          billingDuration: "P1M",
        },
        url: "https://voxaris.io/book-demo",
      },
      {
        "@type": "Offer",
        name: "Authority (AEO full management)",
        description: "$2,997 one-time setup + $1,997/month. Citation tier plus advanced experimentation, agent-readiness, original research, full delegation.",
        price: "1997",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "1997",
          priceCurrency: "USD",
          unitCode: "MON",
          billingDuration: "P1M",
        },
        url: "https://voxaris.io/book-demo",
      },
      {
        "@type": "Offer",
        name: "Site Rebuild (optional add-on)",
        description: "$1,497 one-time. Pure web-design service — new visual treatment, same brand. No AEO work bundled. Optional +$100/month if Voxaris hosts ongoing.",
        price: "1497",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://voxaris.io/book-demo",
      },
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Local service businesses, marketing agencies, and SaaS companies",
    },
    mainEntityOfPage: PAGE_URL,
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
      <JsonLd data={serviceLd} id="ld-service" />
      <JsonLd data={faqLd} id="ld-faqpage" />
      <BreadcrumbList
        crumbs={[
          { name: "Home", item: "https://voxaris.io/" },
          { name: "Products", item: "https://voxaris.io/products/aeo" },
          { name: "AEO Services", item: PAGE_URL },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[hsl(var(--border))]">
        <div className="container-wide relative">
          <div className="pt-32 pb-16 lg:pt-40 lg:pb-20 max-w-3xl">
            <p className="eyebrow mb-7">AEO Services</p>
            <h1 className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-[4rem] font-semibold tracking-[-0.03em] text-foreground mb-7 leading-[1.05]">
              Get cited by ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot.
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-[60ch] leading-relaxed">
              <strong className="text-foreground">Answer Engine Optimization (AEO) is the practice of structuring a website's content, schema markup, and external citations so AI models cite the business in response to relevant customer queries.</strong>{" "}
              Voxaris scores, fixes, and monitors AEO performance across the six major AI engines. Three tiers — Visibility, Citation, Authority — starting at $997 setup + $297/month after a free 24-hour audit.
            </p>
          </div>
        </div>
      </section>

      {/* AEO vs SEO comparison */}
      <section className="section-padding border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-3xl mb-10">
            <p className="eyebrow mb-4">AEO vs SEO</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-5">
              How is AEO different from SEO?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed faq-answer">
              SEO optimizes a page to rank in Google's blue-link results, where users click through to read. AEO optimizes a page to be cited inside an AI answer, where users may never click. The two share fundamentals (crawlability, schema, content quality) but diverge sharply on tactics.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[6px] border border-[hsl(var(--border))]">
            <table className="w-full text-sm">
              <thead className="bg-[hsl(var(--card))]">
                <tr className="border-b border-[hsl(var(--border))]">
                  <th className="text-left px-6 py-4 font-semibold">Dimension</th>
                  <th className="text-left px-6 py-4 font-semibold">Traditional SEO</th>
                  <th className="text-left px-6 py-4 font-semibold text-[hsl(var(--accent))]">AEO</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Goal", "Rank #1 in Google blue links", "Be cited inside an AI answer"],
                  ["Optimization target", "Keywords + backlinks + UX", "Question-form headings + 134–167 word passages + entity signals"],
                  ["Engines", "Google + Bing", "ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, Bing Copilot"],
                  ["Critical schema", "Article, Product, Review", "FAQPage, Organization, Person, Service, speakable"],
                  ["Off-site signal", "Backlinks", "sameAs, Wikidata, Reddit, Crunchbase, podcasts"],
                  ["Update cadence", "Monthly–quarterly", "Weekly (citation prompts shift constantly)"],
                  ["Click-through", "Required for revenue", "Often zero — the citation is the value"],
                ].map(([k, seo, aeo]) => (
                  <tr key={k} className="border-b border-[hsl(var(--border))] last:border-0">
                    <td className="px-6 py-3 font-medium text-foreground">{k}</td>
                    <td className="px-6 py-3 text-muted-foreground">{seo}</td>
                    <td className="px-6 py-3 text-foreground">{aeo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-4">What's included</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-5">
              What does Voxaris's AEO service do?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Four pillars across the retainer tiers. Each one targets a distinct citation signal AI engines weight when selecting which indexed sources to extract from. Visibility tier focuses on pillars 1 and 4; Citation adds pillars 2 and 3; Authority adds advanced experimentation, original research, and agent-readiness on top.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-[8px] px-8 py-9 lg:px-9 lg:py-11"
              >
                <span className="font-mono-display text-[hsl(var(--accent))] text-[11px] tracking-[0.12em] mb-4 block">
                  {s.n}
                </span>
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4 leading-snug">
                  {s.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed faq-answer">
                  {s.body}
                </p>
                {s.cta && (
                  <a
                    href={s.cta.href}
                    {...(s.cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-foreground hover:text-[hsl(var(--accent))] transition-colors"
                  >
                    {s.cta.label} <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-4">Timeline</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-5">
              How long until I see citations move?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed faq-answer">
              Most clients see measurable AI Visibility Score improvements within 30 days. Citation appearances typically surface within 2–6 weeks of implementation, with the highest gains coming from technical fixes that ship in the first week and from question-form FAQ content that ships in the first 30 days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(var(--border))] rounded-[6px] overflow-hidden">
            {TIMELINE.map((t) => (
              <div key={t.when} className="bg-[hsl(var(--card))] px-6 py-7">
                <p className="font-mono-display text-[hsl(var(--accent))] text-[11px] tracking-[0.12em] mb-3">
                  {t.when}
                </p>
                <h3 className="text-base font-semibold text-foreground mb-2">{t.what}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-5">
              What does AEO cost?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed faq-answer">
              Three retainer tiers. Each is a one-time setup fee plus a monthly retainer. The free audit is the lead-in and stays free with no commitment. Pick the outcome you want — Visibility, Citation, or Authority — and ladder up when the lower tier is doing its job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tier: "Visibility",
                tagline: "We watch; you fix.",
                setup: "$997",
                price: "$297",
                cadence: "/month",
                desc: "Tracking, alerts, and hallucination detection across all six AI engines. We tell you the moment something breaks; you handle the fixes.",
                cta: { label: "Book a discovery call", href: "/book-demo" },
                features: [
                  "Setup: 19-point AEO baseline + tracking infrastructure",
                  "Monthly visibility + citation re-audit",
                  "Hallucination + sentiment scan, six engines",
                  "Wikidata maintenance",
                  "AI crawler activity report",
                  "1-page monthly Report Card",
                  "Quarterly schema validation sweep",
                ],
              },
              {
                tier: "Citation",
                tagline: "We produce the content that gets you cited.",
                setup: "$1,997",
                price: "$997",
                cadence: "/month",
                desc: "Everything in Visibility, plus monthly content production: blog posts, FAQ pages, Perplexity Pages, video, outreach, Reddit, and quarterly pillar content + customer case studies.",
                cta: { label: "Book a discovery call", href: "/book-demo" },
                features: [
                  "Everything in Visibility",
                  "1–2 long-form blog posts / month",
                  "1 Perplexity Page / month",
                  "1 YouTube video + transcript / month",
                  "Monthly external publication pitch (listicle / guest post / podcast / HARO)",
                  "Reddit comment quota (5–10 / month)",
                  "Quarterly long-form pillar page",
                  "Quarterly customer case study",
                ],
                highlight: true,
              },
              {
                tier: "Authority",
                tagline: "We run your entire AI visibility funnel.",
                setup: "$2,997",
                price: "$1,997",
                cadence: "/month",
                desc: "Everything in Citation, plus advanced experimentation, agent-readiness, original research, and full delegation. The kitchen sink — for businesses that want to dominate their category in AI.",
                cta: { label: "Book a discovery call", href: "/book-demo" },
                features: [
                  "Everything in Citation",
                  "Monthly prompt experiment batch",
                  "Monthly competitor teardown",
                  "Bulk listicle pitching (5–10 / month)",
                  "Quarterly original research report",
                  "Quarterly executive review",
                  "Custom GPT, MCP server, OpenAPI spec",
                  "Wikipedia article (when notable)",
                  "Dedicated monthly strategy hour",
                ],
              },
            ].map((p) => (
              <div
                key={p.tier}
                className={`relative bg-[hsl(var(--card))] border rounded-[8px] px-7 py-8 ${
                  p.highlight
                    ? "border-[hsl(var(--accent))] ring-1 ring-[hsl(var(--accent))/40]"
                    : "border-[hsl(var(--border))]"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-7 bg-[hsl(var(--accent))] text-[#0E0C0B] text-[10px] font-mono-display tracking-[0.16em] px-3 py-1 rounded">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-lg font-semibold text-foreground mb-1">{p.tier}</h3>
                <p className="text-xs text-muted-foreground mb-5">{p.tagline}</p>
                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-semibold text-foreground">{p.price}</span>
                    <span className="text-sm text-muted-foreground">{p.cadence}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    + {p.setup} one-time setup
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                <ul className="space-y-2.5 mb-7">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 mt-0.5 text-[hsl(var(--accent))] flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={p.cta.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-[hsl(var(--accent))] transition-colors"
                >
                  {p.cta.label} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Site rebuild + hosting note */}
          <div className="mt-12 max-w-3xl rounded-[8px] border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-7 py-7">
            <p className="eyebrow mb-3">Optional add-on</p>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Like your website? Keep it. Hate your website? We&rsquo;ll rebuild it.
            </h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">
              <strong className="text-foreground">Site Rebuild — +$1,497 one-time.</strong> A pure web-design service. We rebuild your site visually using modern components — same logo, same voice, just better looking. Has nothing to do with the AEO work; we charge the same retainer setup fee whether we apply it to your old site or to a new one we build for you.
            </p>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Want us to host and manage the new site ongoing? <strong className="text-foreground">+$100/month</strong> on top of your retainer. Otherwise, you take ownership and host it yourself.
            </p>
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
            <p className="text-lg text-muted-foreground leading-relaxed">
              Direct answers, no marketing fluff. Each answer is also marked up as FAQPage schema so AI engines can extract it cleanly.
            </p>
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
            <p className="eyebrow mb-4">Start here</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-7">
              Run your free AI Visibility Audit in 24 hours.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-[55ch]">
              No credit card. No commitment. We score you across all {SIX_ENGINES.length} major AI engines and send you a fix list — even if you never hire us.
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
