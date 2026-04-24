import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";
import LeadForm from "@/components/forms/LeadForm";

export default function Contact() {
  usePageMeta({
    title: "Contact Voxaris AI | Free AI Presence Report",
    description:
      "Talk to Voxaris. Run a free 3-dimension AI Presence Report, ask about the $299/mo Tracking dashboard, website rebuilds, or Talking Postcard campaigns. 24-hour response.",
    canonical: "https://voxaris.io/contact",
  });

  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-[hsl(var(--border))]">
        <div className="container-wide relative">
          <div className="pt-16 pb-10 lg:pt-24 lg:pb-14 max-w-3xl">
            <p className="eyebrow mb-4">Contact</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-[-0.03em] text-foreground mb-6 leading-[1.05]">
              Tell us where you're stuck.
              <br />
              <span className="text-muted-foreground">We'll respond within 24 hours.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-[55ch] leading-relaxed">
              Drop your details and we'll run a free AI visibility check on your business
              before our first call — so we walk in with answers, not questions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-12 lg:pt-16">
        <div className="container-wide">
          <div className="max-w-2xl">
            <LeadForm source="voxaris.io/contact" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
