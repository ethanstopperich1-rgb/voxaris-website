import ProductPage from "./ProductPage";

export default function AEO() {
  return (
    <ProductPage
      eyebrow="AEO Services"
      headline={
        <>
          Get cited by ChatGPT,<br />
          <span className="text-muted-foreground">Perplexity, Claude, and Google AI.</span>
        </>
      }
      subheadline="Answer Engine Optimization is the new SEO. When someone asks AI which business to use in your category, we make sure yours is the one it recommends."
      features={[
        {
          title: "AI Visibility Audit",
          body: "Full citation report across all 4 major AI engines. Where you appear, where you don't, and what your competitors are doing that you're not.",
        },
        {
          title: "Schema & Technical AEO",
          body: "JSON-LD schema, robots.txt configuration, sitemap optimization, and meta layer fixes that make your site machine-readable.",
        },
        {
          title: "AEO Content Engine",
          body: "FAQ content, answer-format articles, and structured pages written specifically to be extracted by AI citation systems.",
        },
        {
          title: "Weekly Citation Monitoring",
          body: "Every week we check your AI visibility score across all engines and send you a clear report on where you're being cited.",
        },
      ]}
      cta={{
        eyebrow: "Start here",
        headline: "Start with a free audit — no commitment, no credit card.",
        primary: { label: "Get Free AI Audit", href: "https://audit.voxaris.io", external: true },
        secondary: { label: "Book a Demo", href: "/book-demo" },
      }}
    />
  );
}
