import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Video, PhoneCall } from "lucide-react";

const products = [
  {
    icon: Globe,
    name: "AI-Ready Website Build",
    body: "Full rebuild of your site on the Voxaris AEO stack. Schema-complete, FAQ-structured, fast, mobile-first. The website your next audit will actually reward.",
    cta: "See websites",
    href: "/products/websites",
  },
  {
    icon: Video,
    name: "Talking Postcard",
    body: "AI-personalized video delivered as a physical postcard. Each piece plays a unique message addressed to the recipient — name, business, city, specific hook.",
    cta: "See Talking Postcard",
    href: "/products/talking-postcard",
  },
  {
    icon: PhoneCall,
    name: "AI Intake / Staffing Agent",
    body: "AI voice or video interviews that screen candidates — or inbound leads — before your team spends time. Consistent questions, recorded answers, one-page summaries.",
    cta: "See staffing agent",
    href: "/products/staffing",
  },
];

export default function SecondaryProductsSection() {
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
          <p className="eyebrow mb-4">More ways we can help</p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.03em] text-foreground leading-[1.05]">
            More ways Voxaris can help
            <br />
            <span className="text-muted-foreground">after the audit.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 flex flex-col"
            >
              <div className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center mb-5">
                <p.icon className="h-4.5 w-4.5 text-[hsl(var(--accent))]" strokeWidth={1.5} />
              </div>
              <div className="text-[16px] font-semibold text-foreground mb-2">{p.name}</div>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed mb-5 flex-1">
                {p.body}
              </p>
              <Link
                to={p.href}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[hsl(var(--accent))] hover:opacity-80"
              >
                {p.cta} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
