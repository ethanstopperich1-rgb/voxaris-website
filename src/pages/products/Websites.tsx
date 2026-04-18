import ProductPage from "./ProductPage";

export default function Websites() {
  return (
    <ProductPage
      eyebrow="AI Website Builds"
      headline={
        <>
          A website built to be<br />
          <span className="text-muted-foreground">found by AI — not just Google.</span>
        </>
      }
      subheadline="We design and build fast, AEO-optimized websites that are structured from day one to be cited by ChatGPT, Perplexity, and Google AI. Delivered in 72 hours."
      features={[
        {
          title: "AEO-ready from day one",
          body: "Schema markup, FAQ content, and structured data built in before launch. Most agencies add this as an afterthought — we build it into the foundation.",
        },
        {
          title: "Fast & modern design",
          body: "Built on React or Next.js, deployed on Vercel, and optimized for Core Web Vitals. Loads fast. Looks sharp.",
        },
        {
          title: "72-hour delivery",
          body: "No 6-week agency timelines. Most builds are live within 3 days of receiving your content and brand assets.",
        },
        {
          title: "AEO-optimized copy",
          body: "Every page is written using answer-format structure so AI engines can extract and cite your services, location, and expertise.",
        },
      ]}
      cta={{
        eyebrow: "Next step",
        headline: "Get a quote on your build.",
        primary: { label: "Book a Demo", href: "/book-demo" },
      }}
    />
  );
}
