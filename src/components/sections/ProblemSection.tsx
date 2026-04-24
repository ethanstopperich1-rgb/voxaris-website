import { motion } from "framer-motion";
import { MessageSquare, Search, Users } from "lucide-react";

const cards = [
  {
    icon: MessageSquare,
    title: "Your customers are asking AI first.",
    body: "\"Best roofer near me,\" \"who do I hire for…,\" \"top dentist in Orlando\" — these queries now start in ChatGPT, Perplexity, and Google's AI Overviews. The AI answers in one shot and names a few businesses by name.",
  },
  {
    icon: Search,
    title: "If you're not in that answer, you're invisible.",
    body: "AI search doesn't show ten blue links anymore. It picks two or three businesses and recommends them. Whoever gets named wins the lead. Whoever doesn't isn't even a fallback.",
  },
  {
    icon: Users,
    title: "Your competitors might already be in it.",
    body: "Most local markets have one or two businesses AI consistently names — and it isn't always the best one. It's the one with the right schema, the right answer-format content, the right Google Business Profile, and the right citation footprint.",
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
          className="mb-14 max-w-3xl"
        >
          <p className="eyebrow mb-4">The problem</p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.03em] text-foreground leading-[1.05]">
            Your customers are asking AI.
            <br />
            <span className="text-muted-foreground">Are you in the answer?</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-7"
            >
              <div className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center mb-5">
                <card.icon className="h-5 w-5 text-[hsl(var(--accent))]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                {card.title}
              </h3>
              <p className="text-[14.5px] text-muted-foreground leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
