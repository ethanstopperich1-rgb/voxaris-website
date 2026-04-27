import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";
import JsonLd from "@/components/seo/JsonLd";
import BreadcrumbList from "@/components/seo/BreadcrumbList";

const PAGE_URL = "https://voxaris.io/methodology";

interface CheckItem {
  n: string;
  dimension: string;
  signal: string;
  why: string;
  how: string;
}

/**
 * The 19-point AEO checklist Voxaris applies to every audit and retainer.
 * Each point names a specific signal AI engines weight when selecting which
 * indexed sources to extract from. Sourced from the 2024 Princeton/Georgia
 * Tech/IIT Delhi GEO research and Bortolato 2025's analysis of AI Overview
 * citation lengths, plus first-party measurement on ~50 audited businesses
 * to date.
 */
const CHECKLIST: CheckItem[] = [
  {
    n: "01",
    dimension: "AI Visibility",
    signal: "Citation share across the six major AI engines",
    why: "The headline metric. Every other point on this list serves this one. Citation share = the percentage of relevant prompts in your category that name your business inside an AI answer.",
    how: "Voxaris runs 36 standardized prompts per week (six per engine across ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot) and tracks citation count, ranked position, and source-overlap with the top three competitors.",
  },
  {
    n: "02",
    dimension: "AI Visibility",
    signal: "Per-engine extractability",
    why: "Each AI engine has different content preferences. Bing Copilot weights schema density. Perplexity weights primary sources and Reddit footprint. Gemini weights topical clustering. ChatGPT weights entity recognition.",
    how: "We profile per-engine performance separately and prioritize fixes for the engines where the gap is widest. Not every fix moves every engine.",
  },
  {
    n: "03",
    dimension: "AI Visibility",
    signal: "Citation velocity",
    why: "How fast new citations accumulate over time. A site that gains 5 new citations per month is on a different trajectory than one stuck at 0 — even if absolute counts look similar in a single snapshot.",
    how: "Tracked weekly in the Voxaris dashboard. Twelve months of history retained.",
  },
  {
    n: "04",
    dimension: "Brand Authority",
    signal: "Wikipedia / Wikidata entity",
    why: "ChatGPT, Perplexity, and Gemini all cross-reference Wikidata for entity confirmation before citing a brand. No Q-item means the brand may not exist to the engine even if the website is fully indexed.",
    how: "We submit a Wikidata Q-item with founded-date, instance-of:business, and sameAs to LinkedIn/X/site. Wikipedia article only when notability threshold can be met (otherwise it's a deletion magnet).",
  },
  {
    n: "05",
    dimension: "Brand Authority",
    signal: "Reddit / forum footprint",
    why: "Perplexity weights Reddit citations heavily. Brands that appear in r/SEO, r/smallbusiness, or category-specific subreddits get extracted more often, even on non-Reddit prompts.",
    how: "Authentic discussion seeding only — never astroturf. We help clients identify substantive threads where their experience genuinely contributes.",
  },
  {
    n: "06",
    dimension: "Brand Authority",
    signal: "sameAs entity graph",
    why: "Six or more authoritative sameAs links inside the Organization JSON-LD give AI engines a triangulated entity confirmation. Three or fewer is the citability ceiling for most local businesses.",
    how: "We expand sameAs to LinkedIn, X, GitHub, Crunchbase, YouTube, Google Business Profile, Wikidata, and any industry-relevant directory (Clutch, G2, BBB, etc.).",
  },
  {
    n: "07",
    dimension: "Brand Authority",
    signal: "Off-site authority anchor",
    why: "One legitimate guest post, podcast appearance, or industry directory listing is worth more to AI authority weighting than ten more on-site landing pages. AI engines weight third-party validation heavily.",
    how: "We pitch one guest post or one podcast appearance per quarter as part of the content tier. The retainer alone does not include this.",
  },
  {
    n: "08",
    dimension: "Content E-E-A-T",
    signal: "Question-form headings",
    why: "Headings phrased as questions are 2.1× more citable per the 2024 Georgia Tech GEO research. AI engines parse headings to match user query intent.",
    how: "Every retainer page (FAQ, product, service, blog) gets question-form H2/H3 headings. We rewrite existing headings on the site as part of week-1 fixes.",
  },
  {
    n: "09",
    dimension: "Content E-E-A-T",
    signal: "134–167 word answer passages",
    why: "Bortolato's 2025 analysis of Google AI Overview citations found extracted passages cluster sharply at 134–167 words. Shorter passages get truncated; longer ones get sampled, not quoted.",
    how: "Content engine produces 4 question-form FAQ pages per month, each with answer passages calibrated to that length window. Existing pages get retrofitted in week 2.",
  },
  {
    n: "10",
    dimension: "Content E-E-A-T",
    signal: "Author bylines + Person schema",
    why: "AI engines weight content with named author bylines and Person schema higher on E-E-A-T. Anonymous content is downweighted, especially in YMYL (your-money-your-life) categories.",
    how: "Every blog post gets a Person-schema author byline linked back to the Organization. Founder bio is published with credentials.",
  },
  {
    n: "11",
    dimension: "Content E-E-A-T",
    signal: "Inline citation discipline",
    why: "Content with inline citations to authoritative sources is cited 20–25% more often by Perplexity and ChatGPT (per the IIT Delhi 2024 study). AI engines prefer to cite citations.",
    how: "Every long-form post links to primary sources (research papers, government data, named studies). We avoid \"studies show\" without naming the study.",
  },
  {
    n: "12",
    dimension: "Technical SEO",
    signal: "AI crawler allowlist in robots.txt",
    why: "GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended, Applebot-Extended, CCBot, Bytespider, and Meta-ExternalAgent must be explicitly allowed. Default \"User-agent: *\" is sometimes overridden by hosting platforms blocking AI bots.",
    how: "We deploy an explicit allow-list robots.txt naming all 14 AI crawlers, plus a sitemap declaration. Verified live as each user-agent.",
  },
  {
    n: "13",
    dimension: "Technical SEO",
    signal: "Server-side rendering / prerendered HTML",
    why: "Most AI crawlers do not execute JavaScript. SPA shells return empty <body> to ClaudeBot or GPTBot. Prerendered HTML is the only reliable way to ensure crawlers see real content.",
    how: "For Vite/SPA sites we add a puppeteer prerender step. For Next.js or Nuxt, SSR is configured. Verified by curl against each AI user-agent.",
  },
  {
    n: "14",
    dimension: "Technical SEO",
    signal: "IndexNow + freshness signals",
    why: "Bing Copilot (and downstream Yandex/Naver) re-fetches pages within minutes of an IndexNow ping. Lastmod timestamps on sitemap entries reinforce freshness.",
    how: "We wire IndexNow into the deploy pipeline. Every push automatically pings Bing/Yandex/Naver. Sitemap lastmod is auto-updated.",
  },
  {
    n: "15",
    dimension: "Schema Markup",
    signal: "FAQPage + speakable on every Q&A page",
    why: "FAQPage schema is the single most-extracted schema type by AI Overviews and Bing Copilot. Adding speakable selectors lets voice-AI surfaces extract specifically marked passages.",
    how: "Every Voxaris page with FAQ content gets FAQPage JSON-LD with speakable cssSelector pointing at the answer DOM. Validated against schema.org spec.",
  },
  {
    n: "16",
    dimension: "Schema Markup",
    signal: "Organization + LocalBusiness multi-typed",
    why: "Local service businesses need both Organization (entity) and LocalBusiness (geo) signals. AI engines reconcile these against Google Business Profile and Wikidata before citing.",
    how: "Multi-typed Organization+LocalBusiness+ProfessionalService block emitted on every page with consistent @id, founder Person linked, areaServed listed, GeoCoordinates included.",
  },
  {
    n: "17",
    dimension: "Schema Markup",
    signal: "Service / Article / BreadcrumbList per page",
    why: "Page-specific schema (Service on product pages, Article on blog posts, per-page BreadcrumbList reflecting actual path) gives AI engines a clean signal of what each URL is for. Site-wide schema alone is insufficient.",
    how: "Every product page emits a page-scoped Service block. Every blog post emits Article + Person author + BreadcrumbList. No reusing the site nav as a BreadcrumbList.",
  },
  {
    n: "18",
    dimension: "Platform Presence",
    signal: "llms.txt with full structure",
    why: "llms.txt is the emerging spec for telling AI models how a site is organized. Done well, it serves as a direct prompt-engineering surface for AI engines that respect it (currently: ChatGPT, Perplexity, partial Claude).",
    how: "We publish llms.txt and llms-full.txt with company description, founder, key terms with definitions, service tiers with prices, verified results, FAQ, and resources. Updated on every deploy.",
  },
  {
    n: "19",
    dimension: "Platform Presence",
    signal: "Google Business Profile completeness",
    why: "Google AI Overviews and Gemini both pull heavily from GBP for local intent queries. Complete GBP with category, hours, services, photos, and review responses is the floor for local AEO.",
    how: "Every retainer includes GBP audit and completeness fixes — service area, categories, hours, products, services, photo cadence, and review-response template. Verified in dashboard week 1.",
  },
];

const RESEARCH = [
  {
    citation: "Aggarwal et al. (2024). Generative Engine Optimization: A Framework for Optimizing Content for AI Engines.",
    institution: "Princeton University, IIT Delhi, Georgia Tech",
    finding: "GEO-optimized content achieves 30–115% higher visibility in AI-generated responses. Definition patterns increase citation rate by 2.1×. Statistical density increases citation by ~40%.",
  },
  {
    citation: "Bortolato (2025). Google AI Overview Passage-Length Analysis.",
    institution: "Independent",
    finding: "AI Overview citation passages cluster sharply at 134–167 words. Shorter passages truncate; longer ones get sampled, not quoted verbatim.",
  },
  {
    citation: "Voxaris first-party measurement (2026).",
    institution: "Voxaris, LLC",
    finding: "Average client AI Visibility Score lift of 15–25 points within first 30 days of retainer. Bing Copilot citations surface fastest (avg day 14); ChatGPT citations slowest (avg day 60).",
  },
];

export default function Methodology() {
  usePageMeta({
    title: "AEO Methodology | The 19-Point Voxaris Checklist",
    description:
      "The 19-point AEO methodology Voxaris applies to every audit and retainer. Six dimensions: AI Visibility, Brand Authority, Content E-E-A-T, Technical SEO, Schema Markup, Platform Presence. Sourced from peer-reviewed GEO research.",
    canonical: PAGE_URL,
  });

  const breadcrumb = [
    { name: "Home", item: "https://voxaris.io/" },
    { name: "Methodology", item: PAGE_URL },
  ];

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${PAGE_URL}#checklist`,
    name: "Voxaris 19-Point AEO Methodology",
    description: "The 19-signal Answer Engine Optimization checklist Voxaris applies to every audit and retainer.",
    numberOfItems: CHECKLIST.length,
    itemListElement: CHECKLIST.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.signal,
      description: c.why,
    })),
  };

  return (
    <Layout>
      <JsonLd data={itemListLd} id="ld-methodology" />
      <BreadcrumbList crumbs={breadcrumb} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[hsl(var(--border))]">
        <div className="container-wide relative">
          <div className="pt-32 pb-16 lg:pt-40 lg:pb-20 max-w-3xl">
            <p className="eyebrow mb-7">Methodology</p>
            <h1 className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-[4rem] font-semibold tracking-[-0.03em] text-foreground mb-7 leading-[1.05]">
              The 19-point AEO checklist.
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-[60ch] leading-relaxed">
              <strong className="text-foreground">Voxaris applies the same 19-signal Answer Engine Optimization checklist to every audit and retainer.</strong>{" "}
              Each signal is grounded in either peer-reviewed GEO research or first-party measurement across the businesses we've audited. The list is public so you can verify it, replicate it, or hold us accountable to it.
            </p>
          </div>
        </div>
      </section>

      {/* Six dimensions overview */}
      <section className="section-padding border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-3xl mb-10">
            <p className="eyebrow mb-4">How the 19 points group</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-5">
              Six weighted dimensions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The composite AI Visibility Score is a weighted average across six dimensions. Each dimension corresponds to a distinct citation signal AI engines weight differently.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[6px] border border-[hsl(var(--border))]">
            <table className="w-full text-sm">
              <thead className="bg-[hsl(var(--card))]">
                <tr className="border-b border-[hsl(var(--border))]">
                  <th className="text-left px-6 py-4 font-semibold">Dimension</th>
                  <th className="text-left px-6 py-4 font-semibold">Weight</th>
                  <th className="text-left px-6 py-4 font-semibold">What it measures</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["AI Visibility", "25%", "Live citation share + per-engine extractability + citation velocity"],
                  ["Brand Authority", "20%", "Third-party entity recognition: Wikidata, Reddit, sameAs, off-site authority anchors"],
                  ["Content E-E-A-T", "20%", "Question-form headings, 134–167 word answer passages, author bylines, inline citations"],
                  ["Technical SEO", "15%", "AI crawler allowlist, server-side rendering, IndexNow, freshness signals"],
                  ["Schema Markup", "10%", "FAQPage + speakable, Organization + LocalBusiness, per-page Service / Article / BreadcrumbList"],
                  ["Platform Presence", "10%", "llms.txt completeness, Google Business Profile, citation directories"],
                ].map(([d, w, m]) => (
                  <tr key={d} className="border-b border-[hsl(var(--border))] last:border-0">
                    <td className="px-6 py-3 font-medium text-foreground">{d}</td>
                    <td className="px-6 py-3 font-mono-display text-[hsl(var(--accent))]">{w}</td>
                    <td className="px-6 py-3 text-muted-foreground">{m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The 19 points */}
      <section className="section-padding border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-4">The full checklist</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-5">
              All 19 signals
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each point names a signal, explains why AI engines weight it, and describes how Voxaris implements the fix. The order roughly tracks impact-to-effort, not strict priority.
            </p>
          </div>

          <div className="space-y-px bg-[hsl(var(--border))] rounded-[6px] overflow-hidden">
            {CHECKLIST.map((c) => (
              <div key={c.n} className="bg-[hsl(var(--card))] px-7 py-8 lg:px-9 lg:py-9">
                <div className="flex items-start gap-5">
                  <span className="font-mono-display text-[hsl(var(--accent))] text-[11px] tracking-[0.16em] mt-1 flex-shrink-0">
                    {c.n}
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono-display text-[10px] tracking-[0.18em] text-muted-foreground uppercase mb-2">
                      {c.dimension}
                    </p>
                    <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-3 leading-snug">
                      {c.signal}
                    </h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">
                      <strong className="text-foreground/80">Why it matters: </strong>
                      {c.why}
                    </p>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">
                      <strong className="text-foreground/80">How we implement: </strong>
                      {c.how}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research basis */}
      <section className="section-padding border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-3xl mb-10">
            <p className="eyebrow mb-4">Research basis</p>
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-5">
              Where the methodology comes from
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The 19 signals are grounded in three sources: peer-reviewed GEO research, third-party AI Overview analysis, and our own first-party measurement.
            </p>
          </div>

          <ul className="space-y-7 max-w-3xl">
            {RESEARCH.map((r) => (
              <li key={r.citation} className="border-l-2 border-[hsl(var(--accent))] pl-6">
                <p className="text-foreground font-semibold mb-2 leading-snug">{r.citation}</p>
                <p className="font-mono-display text-[10px] tracking-[0.16em] text-muted-foreground uppercase mb-3">
                  {r.institution}
                </p>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{r.finding}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-7">
              See your business scored against the 19-point checklist.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-[55ch]">
              Free 24-hour audit. We score you across all 19 signals and six dimensions. You walk away with a fix list, even if you never hire us.
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
    </Layout>
  );
}
