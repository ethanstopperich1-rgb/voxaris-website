import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import OffersSection from "@/components/sections/OffersSection";
import ResultsSection from "@/components/sections/ResultsSection";
import HomepageFAQ from "@/components/sections/HomepageFAQ";
import AboutEthan from "@/components/sections/AboutEthan";
import CTASection from "@/components/sections/CTASection";
import { usePageMeta } from "@/hooks/usePageMeta";

const Index = () => {
  usePageMeta({
    title: "Voxaris | Can AI See Your Business?",
    description:
      "We score your business across ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot. Free 19-point AI Visibility Audit delivered in 24 hours.",
    canonical: "https://voxaris.io/",
  });
  return (
    <Layout>
      <HeroSection />
      <OffersSection />
      <ResultsSection />
      <HomepageFAQ />
      <AboutEthan />
      <CTASection />
    </Layout>
  );
};

export default Index;
