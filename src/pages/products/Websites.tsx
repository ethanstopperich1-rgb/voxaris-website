import ProductPage from "./ProductPage";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Websites() {
  usePageMeta({
    title: "Site Rebuild Add-On | Voxaris",
    description:
      "Optional Site Rebuild add-on for any Voxaris AEO retainer. Pure web design — new visual treatment, same brand. +$1,497 one-time. Optional +$100/mo if Voxaris hosts ongoing.",
    canonical: "https://voxaris.io/products/websites",
  });
  return (
    <ProductPage
      eyebrow="Site Rebuild Add-On"
      headline={
        <>
          Like your website? Keep it.<br />
          <span className="text-muted-foreground">Hate your website? We&rsquo;ll rebuild it.</span>
        </>
      }
      subheadline="Optional add-on for any AEO retainer tier. We rebuild your site visually using modern components — same logo, same voice, just better looking. It has nothing to do with the AEO work; we charge the same retainer setup whether we apply AEO to your old site or to a new one we build for you."
      featuresTitle="What's in the Site Rebuild"
      features={[
        {
          title: "+$1,497 one-time",
          body: "Pure web-design service. New Next.js scaffold, fresh visual treatment, same brand identity (logo and voice stay). 12 pages migrated from your existing site, 301 redirects in place.",
        },
        {
          title: "Modern component system",
          body: "We build using 21st.dev component blocks accelerated by Claude — typically deployed in under 2 weeks for sites with fewer than 20 pages.",
        },
        {
          title: "AEO work is separate (and required)",
          body: "The Site Rebuild does NOT include schemas, FAQ blocks, llms.txt, blog posts, or any AEO deliverables. Those come from the AEO retainer (Visibility, Citation, or Authority) and apply equally to old or rebuilt sites.",
        },
        {
          title: "Optional hosting (+$100/mo)",
          body: "Want Voxaris to host and manage the new site ongoing? +$100/month on top of your retainer. Otherwise, you take full ownership and host wherever you like.",
        },
      ]}
      cta={{
        eyebrow: "Need a custom quote?",
        headline: "Sites with 20+ pages, e-commerce, or complex CMS integrations: book a call for a custom quote.",
        primary: { label: "Book a Demo", href: "/book-demo" },
      }}
    />
  );
}
