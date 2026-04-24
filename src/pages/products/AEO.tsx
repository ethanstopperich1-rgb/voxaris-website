import ProductPage from "./ProductPage";
import { usePageMeta } from "@/hooks/usePageMeta";

/**
 * AEO product page — rewritten 2026-04-24 for the three-dimension
 * AI Presence Report product that now ships from audit.voxaris.io.
 *
 *   - Readiness + Visibility + Trust (3 unified scores on /proof/[slug])
 *   - 6 engines (ChatGPT, Perplexity, Gemini, Google AIO, Bing, Claude)
 *   - 18-screenshot AI Mystery Shop as $99 unlock evidence
 *   - $299/mo Tracking dashboard at /dashboard/[slug] — weekly snapshots,
 *     competitor benchmarking, citation health, GSC + Bing connectors
 *   - $2,500 Rebuild for sites that can't break an 80 Readiness score
 */
export default function AEO() {
  usePageMeta({
    title: "AI Presence Report — Voxaris",
    description:
      "AI search judges every business on three dimensions: Readiness (can AI crawl you?), Visibility (does AI name you?), and Trust (does AI trust you?). We score all three across ChatGPT, Perplexity, Gemini, Google AI Overviews, Bing, and Claude. Free 60-second report at audit.voxaris.io.",
    canonical: "https://voxaris.io/products/aeo",
  });
  return (
    <ProductPage
      eyebrow="AI Presence · Three dimensions, six engines"
      headline={
        <>
          AI search judges your business on three dimensions.<br />
          <span className="text-muted-foreground">We score all three — across all six engines.</span>
        </>
      }
      subheadline="Readiness — can the crawlers actually read your site. Visibility — how often ChatGPT, Perplexity, Gemini, Google AI Overviews, Bing, and Claude name you in real answers. Trust — what Google Business Profile, Foursquare, and the citation web say about you. One unified report. Free 60-second teaser. $99 to unlock the full 18-screenshot AI Mystery Shop. $299/mo if you want the live dashboard tracking it every week."
      features={[
        {
          title: "Three scores, one report",
          body: "AI Readiness scores crawler access, llms.txt, FAQPage schema, viewport meta, Open Graph, and mobile indexability — the technical layer. AI Visibility scores how often you surface in real AI answers. AI Trust scores Google Business Profile rating + reviews + operational signals, plus Foursquare aggregator presence. Delivered as three pill-scores on one unified report — same page, not three PDFs.",
        },
        {
          title: "Six engines covered — not four",
          body: "ChatGPT. Perplexity. Gemini. Google AI Overviews. Bing. Claude. Each engine gets its own visibility breakdown and per-engine citation count. The $99 unlock captures 18 screenshots — three per engine — as literal proof of what AI is saying about you today.",
        },
        {
          title: "Live customer dashboard ($299/mo)",
          body: "Weekly score snapshots on all three dimensions. Per-engine visibility tiles (ChatGPT / Perplexity / Gemini / Google AIO / Bing / Claude). Competitor benchmarking table showing which rivals are winning which buyer-intent queries. Citation health across your Big 8 directories. Google Search Console and Bing Webmaster connectors feed live traffic + indexation data alongside the AI scores.",
        },
        {
          title: "Competitor benchmarking — new",
          body: "Every audit now runs the same 12-query buyer-intent matrix against your top 3 competitors and surfaces which of them the AI named instead of you. The $299/mo dashboard watches this weekly and alerts you when a competitor's score climbs above yours on a buyer-stage that matters.",
        },
        {
          title: "Trust signals — new",
          body: "Google Places integration pulls your live GBP rating, review count, business status, and operational flags. Foursquare integration checks aggregator presence and match confidence. Trust score is GBP-weighted, Foursquare-adjusted, and cached on your report page so the Trust card stays consistent between refreshes.",
        },
        {
          title: "18-screenshot AI Mystery Shop",
          body: "Free audit: one Perplexity teaser. $99 unlock: three screenshots per engine across six engines — 18 total — captured post-checkout via a Stripe webhook that backfills your proof page with real answer screenshots. Not estimated rankings. Literal screenshots of what the AI said this morning.",
        },
        {
          title: "$99 unlocks everything (one-time)",
          body: "Full Visibility + Trust report · 18-screenshot AI Mystery Shop across 6 engines · competitor benchmarking table · 30-day personalized fix plan derived from your actual signals · 30-min strategy call with Ethan included.",
        },
        {
          title: "$299/month for live tracking",
          body: "The customer-facing dashboard at audit.voxaris.io/dashboard. Weekly score pulse on all three dimensions. Per-engine citation tracking. Competitor watch. Monthly strategy call. Score-drop alerts. AI re-indexes every 30–90 days, so the climb is something you watch happen — and you want to be the first to see it when an engine rotates against you.",
        },
        {
          title: "$2,500 rebuild for the high-ticket close",
          body: "When your existing site can't break 80 Readiness, we rebuild it on Next.js engineered for AI citation from day one. Schema-complete. FAQ-structured. llms.txt-native. 80+ Readiness score in 90 days OR we keep working free until we hit it. + $300/mo retainer.",
        },
      ]}
      cta={{
        eyebrow: "Start here",
        headline: "60 seconds. Three scores. Zero credit card.",
        primary: { label: "Run my free AI Presence Report →", href: "https://audit.voxaris.io", external: true },
        secondary: { label: "Or talk to Ethan first", href: "https://cal.com/voxaris-ai/15min", external: true },
      }}
    />
  );
}
