import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import DifferentiationSection from "@/components/sections/DifferentiationSection";
import AudienceSection from "@/components/sections/AudienceSection";
import TrustSection from "@/components/sections/TrustSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
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
