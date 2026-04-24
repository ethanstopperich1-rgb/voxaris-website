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
    a: "The free preview runs in about 90 seconds — Readiness / Visibility / Trust score across 6 engines, top fix surfaced, no credit card. Full Report is $99 one-time (with proof screenshots, competitor citation gap, and full fix list). Monthly Tracking is $299/month. AI-Ready Rebuild is $2,500 plus $300/month tracking. Book a walkthrough and we'll scope the right tier.",
  },
  {
    q: "How long does AEO take to show results?",
    a: "Technical foundation (schema, robots.txt, sitemap, meta layer, llms.txt) is complete in week 1. First citations in AI engines typically appear between weeks 3 and 6. Consistent presence across 4 or more engines for your core service queries builds by month 3. We don't promise guaranteed citations — AI engines pick their own sources — but we build the signals that help AI cite you, and we track the score so you can see it move.",
  },
  {
    q: "Which AI engines does Voxaris optimize for?",
    a: "We optimize for ChatGPT (OpenAI), Perplexity, Claude (Anthropic), Gemini (Google), Google AI Overviews, and Bing Copilot. We track citation signals across all six engines weekly and report month-over-month score changes in your dashboard.",
  },
  {
    q: "Do you guarantee AI will cite my business?",
    a: "No, and nobody honestly can — AI engines pick their own sources. What we guarantee is that we'll track your visibility across all 6 engines and build the signals (schema, content, GBP, directories, entity data) that help AI cite you. You see the score move month-over-month in your dashboard. If the infrastructure we ship isn't live and correct, that's on us and we fix it.",
  },
  {
    q: "Where is Voxaris based and who do you serve?",
    a: "Voxaris is based in Orlando, Florida and was founded in 2026 by Ethan Stopperich. We primarily serve local service businesses (roofing, dental, law, home services, dealerships, real estate) across Florida and nationwide, plus marketing agencies that resell AEO to their own clients.",
  },
  {
    q: "What's the first step to working with Voxaris?",
    a: "Run the free AI Visibility Audit at audit.voxaris.io. You'll see a free preview across all 6 AI engines in about 90 seconds — Readiness / Visibility / Trust scores plus your top fix. The Full Report ($99) unlocks proof screenshots, the 19-signal breakdown, and the competitive citation gap. From there you can implement fixes yourself or hand the punch list to our team.",
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
