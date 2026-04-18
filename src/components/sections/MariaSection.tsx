import { motion } from "framer-motion";

const capabilities = [
  "Answers inbound calls 24/7",
  "Calls new leads within seconds of form submission",
  "Qualifies prospects with custom logic",
  "Books appointments in real time",
  "Confirms appointments via SMS",
  "Follows up until conversion",
  "Pushes all data to your CRM",
];

const stats = [
  { stat: "< 1s", label: "Answer latency", sub: "Every inbound call" },
  { stat: "24/7", label: "No off days", sub: "No sick days, no lunch breaks" },
  { stat: "100%", label: "Call answered", sub: "Zero missed, zero voicemail" },
  { stat: "2 min", label: "Lead to booked", sub: "Average time to appointment" },
];

export default function MariaSection() {
  return (
    <section className="section-padding bg-secondary/30 border-t border-[hsl(var(--border))]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-[50ch]"
        >
          <p className="eyebrow mb-4">Meet Maria</p>
          <h2 className="text-heading font-semibold text-foreground mb-4">
            Your always-available AI sales representative
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Maria is the voice of Voxaris — a professional, calm, naturally-sounding AI agent trained to handle real sales conversations with real prospects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — capability list */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow-muted mb-5">What Maria does</p>
            <div className="space-y-1">
              {capabilities.map((capability, i) => (
                <div
                  key={capability}
                  className={`border-l-2 pl-4 py-2 ${
                    i === 0 ? "border-[hsl(var(--accent))]" : "border-[hsl(var(--border))]"
                  }`}
                >
                  <span className="text-[15px] text-foreground">{capability}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — stat grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="eyebrow-muted mb-5">By the numbers</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
              {stats.map((item) => (
                <div key={item.label} className="border-t border-[hsl(var(--border))] pt-5">
                  <div className="stat-number text-3xl font-medium mb-1">{item.stat}</div>
                  <div className="text-sm font-medium text-foreground mb-0.5">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
