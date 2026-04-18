import { motion } from "framer-motion";

const stats = [
  { stat: "< 1s", label: "Answer latency", sub: "Every inbound call" },
  { stat: "5", label: "AI platforms", sub: "Monitored per AEO client" },
  { stat: "48h", label: "AEO audit delivery", sub: "From submission to inbox" },
  { stat: "4", label: "Products deployed", sub: "Voice · Video · Staffing · AEO" },
];

export default function TrustSection() {
  return (
    <section className="section-padding border-t border-[hsl(var(--border))]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-[55ch]"
        >
          <p className="eyebrow mb-4">By the numbers</p>
          <h2 className="text-heading font-semibold text-foreground">
            Infrastructure you can measure
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(var(--border))] rounded-[6px] overflow-hidden">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-background px-8 py-10"
            >
              <div className="stat-number text-4xl font-medium mb-2">{item.stat}</div>
              <div className="text-sm font-medium text-foreground mb-1">{item.label}</div>
              <div className="eyebrow-muted text-[10px]">{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
