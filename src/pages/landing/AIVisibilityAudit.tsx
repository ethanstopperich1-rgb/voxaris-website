import LandingLayout from "@/components/landing/LandingLayout";

export default function AIVisibilityAudit() {
  return (
    <LandingLayout
      eyebrow="AI Visibility Audit"
      title="AI Visibility Audit — See how AI recommends your business | Voxaris"
      metaTitle="AI Visibility Audit — Check 6 AI Engines | Voxaris"
      h1="The AI Visibility Audit that checks 6 engines in about 90 seconds."
      subhead="ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, Bing Copilot — scored on Readiness, Visibility, and Trust. Free preview. No credit card."
      canonical="https://voxaris.io/ai-visibility-audit"
      description="Free AI Visibility Audit across 6 AI engines. Get your Readiness, Visibility, and Trust scores plus the top fix in about 90 seconds."
      lastUpdated="2026-04-24"
      answerBlock="An AI Visibility Audit is a test of how AI engines — ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot — currently recommend your business. Voxaris runs real buyer-intent prompts, scores your site on three dimensions (Readiness, Visibility, Trust), and gives you a prioritized fix list. The free preview runs in about 90 seconds; the full report unlocks proof screenshots and the 19-signal breakdown."
      breadcrumbs={[
        { name: "Home", item: "https://voxaris.io/" },
        { name: "AI Visibility Audit", item: "https://voxaris.io/ai-visibility-audit" },
      ]}
      faqs={[
        {
          q: "What does the AI Visibility Audit actually test?",
          a: "We run real buyer-intent prompts across ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot — the same prompts your customers run — and log where your business appears (or doesn't). We score the signals that drive those citations: schema markup, llms.txt, FAQ structure, Google Business Profile, Apple/Bing/Foursquare listings, directory consistency, review signals, entity data.",
        },
        {
          q: "How long does it take?",
          a: "The free preview runs in about 90 seconds. The full report unlocks proof screenshots and the complete 19-signal fix plan.",
        },
        {
          q: "Is it really free?",
          a: "The preview is free with no credit card. The Full Report (with proof screenshots + the full fix list) is $99 one-time.",
        },
        {
          q: "What do I do with the report?",
          a: "Hand it to your developer, your agency, or your internal team — every item is a concrete technical fix. Or let Voxaris implement it under the $299/month tracking tier.",
        },
      ]}
    >
      <h2>What the audit checks</h2>
      <p>
        Every AI engine weighs different signals. ChatGPT pulls from Bing + OpenAI's training
        + crawl. Perplexity pulls from its own search index plus live web. Google AI Overviews
        lean on Knowledge Graph and Google Business Profile. The audit tests them all with
        real buyer-intent prompts and logs which ones name your business.
      </p>
      <h2>The three scores</h2>
      <p>
        <strong>Readiness</strong> — can AI read your site at all? Schema, llms.txt, robots.txt,
        FAQPage markup, mobile-first viewport, Open Graph, canonical. Fastest dimension to move.
      </p>
      <p>
        <strong>Visibility</strong> — does AI actually cite you? Per-engine citation counts
        across the 12-query buyer-intent matrix (shopping, emergency, service-specific, trust,
        financing).
      </p>
      <p>
        <strong>Trust</strong> — does the web back you up? Google Business Profile, Apple /
        Bing / Foursquare, Big 8 directories, Wikidata, Knowledge Graph, review signals,
        branded mentions.
      </p>
      <h2>Who it's for</h2>
      <p>
        Local service businesses (roofing, dental, law, home services, dealerships, real
        estate), agencies reselling AEO to clients, and any business with a website that
        wants to know what AI engines say about it today.
      </p>
    </LandingLayout>
  );
}
