import LandingLayout from "@/components/landing/LandingLayout";

export default function WhatIsAnAIVisibilityAudit() {
  return (
    <LandingLayout
      eyebrow="Definition"
      title="What is an AI Visibility Audit? | Voxaris"
      h1="What is an AI Visibility Audit?"
      subhead="Short answer: it's a test of how AI engines recommend your business — and a fix list for the signals that move the score."
      canonical="https://voxaris.io/what-is-an-ai-visibility-audit"
      description="An AI Visibility Audit measures how often AI engines (ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, Bing Copilot) recommend your business and scores the signals behind it."
      lastUpdated="2026-04-24"
      answerBlock="An AI Visibility Audit is a diagnostic that measures whether AI engines — ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot — name your business when customers ask buyer-intent questions. It scores three dimensions: Readiness (can AI read your site?), Visibility (does AI actually cite you?), and Trust (does the broader web back you up?). The output is a prioritized fix list of schema, content, directory, and entity changes that help AI cite you."
      breadcrumbs={[
        { name: "Home", item: "https://voxaris.io/" },
        { name: "What is an AI Visibility Audit?", item: "https://voxaris.io/what-is-an-ai-visibility-audit" },
      ]}
      faqs={[
        {
          q: "How is an AI Visibility Audit different from an SEO audit?",
          a: "An SEO audit checks for keyword rankings, backlinks, and Google-blue-link signals. An AI Visibility Audit checks for AI-citation signals: JSON-LD schema, FAQPage structure, llms.txt, entity consistency across the citation web, Google Business Profile, and the prompts AI engines actually answer with.",
        },
        {
          q: "Why can't a regular SEO tool do this?",
          a: "Most SEO tools crawl your site for keyword density and links. They don't run prompts against ChatGPT or Perplexity, they don't check if your llms.txt allows AI bots, and they don't log per-engine citation counts. Those are the signals that actually move AI search.",
        },
        {
          q: "What do I get in the report?",
          a: "Free preview: Readiness / Visibility / Trust scores across 6 engines plus the top fix. Full Report ($99): proof screenshots, 19-signal breakdown, competitor citation gap analysis, and the prioritized fix list your developer can implement.",
        },
        {
          q: "Is this the same as Answer Engine Optimization (AEO)?",
          a: "AEO is the discipline; an AI Visibility Audit is the diagnostic. AEO = the practice of optimizing for AI citation. The audit measures where you stand and names the fixes. Most AEO work follows directly from what the audit surfaces.",
        },
      ]}
    >
      <h2>The short version</h2>
      <p>
        An AI Visibility Audit is a report that tells you, engine by engine, whether AI
        currently recommends your business to real customers — and what to fix so it starts
        doing so (or does so more often).
      </p>
      <h2>Why now</h2>
      <p>
        In 2026, AI search is no longer experimental. Google AI Overviews ships on most
        informational queries. Perplexity is used daily by millions. ChatGPT's search
        feature is standard. Your buyers are phrasing local questions as conversations with
        AI, and AI answers them by name — naming specific businesses. If you aren't named,
        you aren't in the set.
      </p>
      <h2>What changes based on the audit</h2>
      <p>
        Schema markup, llms.txt configuration, FAQPage blocks, Google Business Profile
        details, Apple/Bing/Foursquare listings, directory consistency, entity records
        (Wikidata, Knowledge Graph), review signal strategy, answer-format content. Every
        one is concrete and measurable.
      </p>
    </LandingLayout>
  );
}
