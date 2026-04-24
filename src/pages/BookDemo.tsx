import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";

/**
 * Cal.com embed for the 15-min Voxaris Strategy Call.
 * Migrated from Calendly to cal.com/voxaris-ai/15min on 2026-04-24.
 * Using a plain iframe rather than Cal's Embed SDK keeps zero runtime
 * deps and works identically on SSR + client renders.
 */
const CAL_EMBED_URL =
  "https://cal.com/voxaris-ai/15min?embed=true&theme=dark&layout=month_view";

export default function BookDemo() {
  usePageMeta({
    title: "Book a Call | Voxaris",
    description:
      "Book a free 15-minute call with Voxaris. Walk through your AI visibility audit and a plan to get cited by ChatGPT and Perplexity.",
    canonical: "https://voxaris.io/book-demo",
  });

  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container-content">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="eyebrow mb-4">Book a call</p>
            <h1 className="heading-xl mb-4">
              15 minutes with Ethan. No pressure.
            </h1>
            <p className="body-lg text-muted-foreground">
              We&apos;ll walk through your AI visibility audit and the single
              fix that would move the needle fastest for your business.
            </p>
          </div>

          <div className="max-w-3xl mx-auto border border-[hsl(var(--border))] rounded-[8px] overflow-hidden bg-card">
            <iframe
              title="Book a call with Voxaris"
              src={CAL_EMBED_URL}
              style={{ width: "100%", minHeight: "780px", border: "0" }}
              allow="camera; microphone; fullscreen; payment"
              loading="lazy"
            />
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Can&apos;t make the schedule work?{" "}
            <a
              href="mailto:ethan@voxaris.io"
              className="underline hover:text-foreground"
            >
              Email me directly
            </a>{" "}
            and we&apos;ll find a time.
          </p>
        </div>
      </section>
    </Layout>
  );
}
