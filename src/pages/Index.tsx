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
    title: "Voxaris | The 3-Dimension AI Presence Report",
    description:
      "AI search judges your business on three dimensions: Readiness, Visibility, and Trust. Voxaris scores all three across ChatGPT, Perplexity, Gemini, Google AI Overviews, Bing, and Claude. Free report in 60 seconds.",
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
