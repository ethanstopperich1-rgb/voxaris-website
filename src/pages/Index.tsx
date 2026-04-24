import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ThreeScoreSection from "@/components/sections/ThreeScoreSection";
import ReportPreviewSection from "@/components/sections/ReportPreviewSection";
import PricingLadderSection from "@/components/sections/PricingLadderSection";
import WhatVoxarisFixesSection from "@/components/sections/WhatVoxarisFixesSection";
import SecondaryProductsSection from "@/components/sections/SecondaryProductsSection";
import HomepageFAQ from "@/components/sections/HomepageFAQ";
import AboutEthan from "@/components/sections/AboutEthan";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { usePageMeta } from "@/hooks/usePageMeta";

const Index = () => {
  usePageMeta({
    title: "Voxaris | Is AI recommending your business or your competitors?",
    description:
      "Free AI Visibility Audit. We check how your business shows up across ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot — then give you the fix list.",
    canonical: "https://voxaris.io/",
  });

  const softwareAppLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://voxaris.io/#software-ai-visibility-audit",
    name: "Voxaris AI Visibility Audit",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Audit tool that scores a business across 6 AI engines (ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, Bing Copilot) on three dimensions: Readiness, Visibility, and Trust.",
    url: "https://audit.voxaris.io",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: { "@id": "https://voxaris.io/#organization" },
    featureList: [
      "Readiness score",
      "Visibility score",
      "Trust score",
      "Per-engine citation breakdown",
      "Prioritized fix list",
      "Competitor citation gap analysis",
    ],
  };

  return (
    <Layout>
      <JsonLd data={softwareAppLd} id="ld-software-app" />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <ThreeScoreSection />
      <ReportPreviewSection />
      <PricingLadderSection />
      <WhatVoxarisFixesSection />
      <SecondaryProductsSection />
      <HomepageFAQ />
      <AboutEthan />
      <CTASection />
    </Layout>
  );
};

export default Index;
