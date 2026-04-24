import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";

interface QA {
  q: string;
  a: string;
}

const faqs: QA[] = [
  {
    q: "What is the AI Presence Report?",
    a: "The AI Presence Report is Voxaris's three-dimension scorecard for how AI search sees your business. AI Readiness scores whether the crawlers (GPTBot, PerplexityBot, Claude-SearchBot, Googlebot, Bingbot) can actually read your site — robots.txt, llms.txt, FAQPage schema, viewport meta, Open Graph, mobile indexability. AI Visibility scores how often your business surfaces inside real AI answers across ChatGPT, Perplexity, Gemini, Google AI Overviews, Bing, and Claude. AI Trust scores the entity signals AI engines pull in — Google Business Profile rating and review count, Foursquare aggregator presence, and operational flags. All three dimensions are delivered in one unified report.",
  },
  {
    q: "How is this different from SEO?",
    a: "SEO optimizes for Google's ranked list of blue links. AI Presence optimizes for being extracted by AI. SEO rewards backlinks and keyword density. AI Presence rewards structured data, llms.txt + robots posture, entity consistency across GBP and Foursquare, and real-world citations inside AI answers — not link positions on a search results page.",
  },
  {
    q: "How much does Voxaris cost?",
    a: "Four tiers. Free AI Presence teaser in 60 seconds — one Perplexity screenshot, all three score previews. Voxaris Visibility is a $99 one-time unlock of the full Visibility + Trust report with 18 AI Mystery Shop screenshots across 6 engines, competitor benchmarking, and a 30-minute strategy call with Ethan. Voxaris Tracking is $299 per month for the live customer dashboard, weekly score snapshots, competitor watch, citation health, and Google Search Console and Bing Webmaster connectors. The AEO-Ready Website Rebuild is $2,500 one-time plus $300/mo retainer — 80+ AI Readiness score in 90 days or we keep working free.",
  },
  {
    q: "How long does it take to show results?",
    a: "Readiness fixes ship week one — schema, llms.txt, robots posture, viewport, Open Graph, mobile indexability. First AI citations typically appear weeks three to six. Consistent Visibility across four-plus engines for core buyer-intent queries builds by month three. Trust signals (Google Business Profile, Foursquare, directory citations) build continuously and are re-scored weekly in the dashboard.",
  },
  {
    q: "Which AI engines does Voxaris cover?",
    a: "Six engines — ChatGPT (OpenAI), Perplexity, Gemini (Google), Google AI Overviews, Bing, and Claude (Anthropic). We track visibility and citation signals across all six every week inside the $299/mo Tracking dashboard, and we capture up to 18 screenshots — three per engine — in the $99 one-time Visibility unlock as evidence of what the AI actually says about you today.",
  },
  {
    q: "Do you guarantee results?",
    a: "Yes — and it's a work-until-hit guarantee, not a refund (AI engines re-index at 30-90 days, so promising instant results is dishonest). Voxaris Tracking guarantees your AI Visibility score climbs 20+ points within 90 days, or we keep working at no extra charge until it does. The AEO-Ready Website Rebuild guarantees 80+ AI Readiness in 90 days on the same terms.",
  },
  {
    q: "Where is Voxaris based and who do you serve?",
    a: "Voxaris is based in Orlando, Florida and was founded in 2026 by Ethan Stopperich. We primarily serve local service businesses (roofing, dental, law, home services, dealerships, real estate) across Florida and nationwide, plus marketing agencies that resell AEO to their own clients.",
  },
  {
    q: "What's the first step to working with Voxaris?",
    a: "Run the free AI Presence Report at audit.voxaris.io. You get all three dimensions — Readiness, Visibility, Trust — scored across six AI engines in 60 seconds, plus a prioritized fix list and a competitor benchmark. No credit card required. From there you can implement fixes yourself, unlock the full 18-screenshot report for $99, or start the $299/mo Tracking dashboard.",
  },
];

export default function HomepageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://voxaris.io/#homepage-faq",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="section-padding border-t border-[hsl(var(--border))]">
      <JsonLd data={faqLd} id="ld-homepage-faq" />
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <p className="eyebrow mb-4">Questions you're probably asking</p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.03em] text-foreground leading-[1.05]">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left hover:bg-white/[0.02] transition-colors px-2"
                  aria-expanded={open}
                >
                  <h3 className="text-lg font-medium text-foreground leading-snug">
                    {faq.q}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground shrink-0 mt-1 transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[15px] text-muted-foreground leading-relaxed pb-6 px-2 max-w-[64ch]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
