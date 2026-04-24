import { motion } from "framer-motion";
import { TrendingUp, Clock, Target } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

interface Stat {
  number: string;
  label: string;
  caption: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  {
    icon: <TrendingUp />,
    number: "+21",
    label: "average score lift",
    caption: "in the first 30 days of retainer",
  },
  {
    icon: <Clock />,
    number: "60s",
    label: "audit turnaround",
    caption: "Full dual report delivered in about a minute",
  },
  {
    icon: <Target />,
    number: "100/100",
    label: "Technical SEO",
    caption: "voxaris.io's own AEO score",
  },
];

const founderProof = {
  business: "The Kitchen and Bath Store of Orlando",
  location: "Orlando, FL",
  metric: "6 figures",
  metricLabel: "in first-year revenue",
  detail:
    "Voxaris's founder rebuilt The Kitchen and Bath Store of Orlando into an AI-optimized website that drove over six figures in revenue in its first year live — the same playbook now shipped to every Voxaris client.",
};

export default function ResultsSection() {
  return (
    <section className="section-padding border-t border-[hsl(var(--border))]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="eyebrow mb-4">Does AEO actually work?</p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.03em] text-foreground leading-[1.05]">
            How much does AI visibility actually move?
          </h2>
        </motion.div>

        {/* Stat cards */}
        <div className="grid gap-5 md:grid-cols-3 mb-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6"
            >
              <div className="text-muted-foreground mb-4">{s.icon}</div>
              <div className="text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-foreground mb-2 tabular-nums">
                {s.number}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">{s.label}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{s.caption}</div>
            </motion.div>
          ))}
        </div>

        {/* Founder track record */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 lg:p-10"
        >
          <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center">
            <div className="flex flex-col">
              <div className="text-6xl lg:text-7xl font-semibold tracking-[-0.03em] text-foreground leading-none mb-2">
                {founderProof.metric}
              </div>
              <div className="text-sm text-muted-foreground">{founderProof.metricLabel}</div>
            </div>
            <div>
              <p className="eyebrow-muted mb-3">Founder track record</p>
              <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-4 max-w-[58ch]">
                {founderProof.detail}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">{founderProof.business}</span>
                {" · "}
                {founderProof.location}
              </p>
            </div>
          </div>

          <BorderBeam
            size={280}
            duration={13}
            colorFrom="hsl(28 8% 72%)"
            colorTo="hsl(28 8% 72% / 0)"
          />
        </motion.div>
      </div>
    </section>
  );
}
