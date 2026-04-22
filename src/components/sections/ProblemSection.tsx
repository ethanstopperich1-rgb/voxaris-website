import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";

const problems = [
  {
    category: "LEAD RESPONSE",
    title: "Missed calls",
    description: "Every unanswered call is a potential customer lost to a competitor.",
  },
  {
    category: "SPEED TO LEAD",
    title: "Slow follow-up",
    description: "Leads go cold in minutes, but your team takes hours — or days — to respond.",
  },
  {
    category: "CONVERSION",
    title: "Leads going cold",
    description: "Without instant engagement, interested prospects lose momentum and move on.",
  },
  {
    category: "PIPELINE QUALITY",
    title: "Inconsistent qualification",
    description: "Different reps ask different questions, leading to unpredictable pipeline quality.",
  },
  {
    category: "DATA INTEGRITY",
    title: "Messy CRM data",
    description: "Incomplete records, missing notes, and duplicate entries make reporting unreliable.",
  },
  {
    category: "AD ROI",
    title: "Lost attribution",
    description: "You're spending on ads but can't trace which campaigns actually book appointments.",
  },
];

export default function ProblemSection() {
  return (
    <section className="section-padding border-t border-[hsl(var(--border))]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="eyebrow mb-4">The Problem</p>
          <h2 className="text-heading font-semibold text-foreground mb-4 max-w-[24ch]">
            Your customers are asking AI. Are you in the answer?
          </h2>
          <p className="text-lg text-muted-foreground max-w-[60ch]">
            ChatGPT, Perplexity, and Google AI now answer local business questions directly — without showing a list of websites. If you're not optimized for AI, you're invisible to a growing share of your market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <p className="eyebrow-muted mb-3">{problem.category}</p>
              <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
              <BorderBeam
                size={180}
                duration={10}
                delay={index * 1.4}
                colorFrom="hsl(28 8% 72%)"
                colorTo="hsl(28 8% 72% / 0)"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
