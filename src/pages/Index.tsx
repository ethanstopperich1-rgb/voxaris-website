import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import DifferentiationSection from "@/components/sections/DifferentiationSection";
import AudienceSection from "@/components/sections/AudienceSection";
import TrustSection from "@/components/sections/TrustSection";
import CTASection from "@/components/sections/CTASection";
import { usePageMeta } from "@/hooks/usePageMeta";

const Index = () => {
  usePageMeta({
    title: "Voxaris | AI Marketing Infrastructure for Florida Businesses",
    description:
      "Voxaris makes Florida businesses visible to AI. AEO, 72-hour AI-ready websites, and Talking Postcard video outreach. Orlando, FL.",
    canonical: "https://voxaris.io/",
  });
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <DifferentiationSection />
      <AudienceSection />
      <TrustSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
