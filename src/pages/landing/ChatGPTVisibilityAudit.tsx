import LandingLayout from "@/components/landing/LandingLayout";

export default function ChatGPTVisibilityAudit() {
  return (
    <LandingLayout
      eyebrow="ChatGPT Visibility"
      title="ChatGPT Visibility Audit — Does ChatGPT name your business? | Voxaris"
      h1="ChatGPT Visibility Audit — does ChatGPT name your business?"
      subhead="We run real buyer-intent prompts through ChatGPT, log whether you're named, and give you the schema + content fixes that move the needle."
      canonical="https://voxaris.io/chatgpt-visibility-audit"
      description="Free ChatGPT Visibility Audit. We run the same prompts your buyers run, log citations, and hand you the fix list."
      lastUpdated="2026-04-24"
      answerBlock="A ChatGPT Visibility Audit tests whether ChatGPT names your business when users run buyer-intent prompts. ChatGPT's web search pulls from OpenAI's training data plus Bing's live index and cites specific businesses in its answers. The audit logs your citation rate across real prompts, checks the schema and entity signals behind them, and outputs a fix list. It's part of the full 6-engine Voxaris audit — free preview in about 90 seconds."
      breadcrumbs={[
        { name: "Home", item: "https://voxaris.io/" },
        { name: "ChatGPT Visibility Audit", item: "https://voxaris.io/chatgpt-visibility-audit" },
      ]}
      faqs={[
        {
          q: "Does ChatGPT really pick specific businesses to recommend?",
          a: "Yes. When users ask ChatGPT buyer-intent questions (with web search enabled, which is default for many users now), it synthesizes an answer and often names 2–3 specific businesses with links. Whoever gets named wins the click.",
        },
        {
          q: "How does ChatGPT decide who to name?",
          a: "A blend of its training data, live Bing-powered web search, and the entity/citation signals around each business: schema, FAQPage, structured about pages, directory consistency, review depth, and content quality on the business's own site.",
        },
        {
          q: "Is ChatGPT the same as ChatGPT Search?",
          a: "ChatGPT Search is the web-connected mode inside ChatGPT. It's what most users hit when they ask local/buyer-intent questions. GPTBot is the training crawler; OAI-SearchBot and ChatGPT-User are the search/browsing crawlers — all three should be allowed in your robots.txt for full coverage.",
        },
        {
          q: "What's the fastest fix for ChatGPT visibility?",
          a: "Add FAQPage schema to your top service page, confirm GPTBot + OAI-SearchBot + ChatGPT-User are allowed in robots.txt, ship an llms.txt, and make sure your core about + services pages have machine-readable entity data. That cluster alone often lifts ChatGPT visibility noticeably.",
        },
      ]}
    >
      <h2>What we test</h2>
      <p>
        The same 12-query buyer-intent matrix we use across all 6 engines — shopping,
        emergency, service-specific, trust/vetting, financing — run through ChatGPT's
        web-search mode. We log per-prompt citations: named, linked, not cited.
      </p>
      <h2>What ChatGPT weighs</h2>
      <p>
        ChatGPT's answers blend OpenAI's crawl (GPTBot), OpenAI's search browsing
        (OAI-SearchBot / ChatGPT-User), and Bing's live index. It prefers sources with
        clear entity definitions, structured schema, FAQPage answers it can extract
        verbatim, and corroboration from directory data and reviews.
      </p>
      <h2>What we fix</h2>
      <p>
        robots.txt allowlist for GPTBot, OAI-SearchBot, ChatGPT-User. llms.txt that
        declares your business clearly. Organization + LocalBusiness + Service + FAQPage
        schema. Answer-format content matching the buyer-intent prompts. Bing Places
        completeness (ChatGPT leans heavily on Bing for the live index). Directory
        hygiene. Review signal strength.
      </p>
    </LandingLayout>
  );
}
