import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import OffersSection from "@/components/sections/OffersSection";
import CTASection from "@/components/sections/CTASection";
import { usePageMeta } from "@/hooks/usePageMeta";

const Index = () => {
  usePageMeta({
    title: "Voxaris | Find Out If AI Can See Your Business",
    description:
      "We score your business across ChatGPT, Perplexity, Claude, Gemini, and Google AI. 19-point report in 24 hours. $99 audit, $297/mo retainer, $2,500 rebuild.",
    canonical: "https://voxaris.io/",
  });
  return (
    <Layout>
      <HeroSection />
      <OffersSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
