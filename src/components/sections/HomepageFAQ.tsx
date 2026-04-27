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
    q: "What is Answer Engine Optimization (AEO)?",
    a: "Answer Engine Optimization (AEO) is the practice of structuring your website and external citations so AI search engines — ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot — cite your business directly inside their answers. Unlike traditional SEO which optimizes for ranked links, AEO optimizes for being the cited source.",
  },
  {
    q: "How is AEO different from SEO?",
    a: "SEO optimizes for Google's ranked list of blue links. AEO optimizes for being cited inside AI-generated answers where users often never see a link list at all. SEO rewards keyword density and backlinks; AEO rewards structured data (JSON-LD), question-phrased content, entity authority, and explicit llms.txt and schema signals that AI engines extract.",
  },
  {
    q: "How much does AEO cost with Voxaris?",
    a: "Three retainer tiers, each a one-time setup plus monthly retainer. Visibility is $997 setup + $297/month for tracking, alerts, and hallucination detection. Citation is $1,997 setup + $997/month and adds monthly content production (blog, FAQ pages, Perplexity Pages, video, outreach). Authority is $2,997 setup + $1,997/month and runs the full funnel (advanced experimentation, agent-readiness, original research). The free 24-hour AI Visibility Audit is the lead-in and stays free with no commitment. Optional Site Rebuild add-on: +$1,497 one-time, web design only, no AEO work bundled.",
  },
  {
    q: "How long does AEO take to show results?",
    a: "Technical foundation (schema, robots.txt, sitemap, meta layer, llms.txt) is complete in week 1. First citations in AI engines typically appear between weeks 3 and 6. Consistent presence across 4 or more engines for your core service queries builds by month 3. Average client sees +15–25 AI Visibility Score points within the first 30 days of retainer.",
  },
  {
    q: "Which AI engines does Voxaris optimize for?",
    a: "We optimize for ChatGPT (OpenAI), Perplexity, Claude (Anthropic), Gemini (Google), Google AI Overviews, and Bing Copilot. We track citation signals across all six engines weekly and report month-over-month score changes in your dashboard.",
  },
  {
    q: "Do you guarantee results?",
    a: "Citation share is a function of competitive signals Voxaris doesn't fully control, so we don't guarantee specific citation outcomes on the retainer alone. What we do guarantee: every audit finding gets fixed and tracked, and our average client improves their AI Visibility Score by 15–25 points within the first 30 days of retainer. The Site Rebuild add-on (where we control the entire build) is the only path with an explicit score-improvement guarantee.",
  },
  {
    q: "Where is Voxaris based and who do you serve?",
    a: "Voxaris is based in Orlando, Florida and was founded in 2026 by Ethan Stopperich. We primarily serve local service businesses (roofing, dental, law, home services, dealerships, real estate) across Florida and nationwide, plus marketing agencies that resell AEO to their own clients.",
  },
  {
    q: "What's the first step to working with Voxaris?",
    a: "Run the free AI Visibility Audit at audit.voxaris.io. You get a 19-point report scored across all 6 AI engines in 24 hours, plus a prioritized fix list and competitive citation gap analysis — no credit card required. From there you can implement fixes yourself or hand the punch list to our retainer team.",
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
