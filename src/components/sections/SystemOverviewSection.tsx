import { motion } from "framer-motion";

type Step = {
  time: string;
  event: string;
  detail: string;
  accent?: boolean;
};

const steps: Step[] = [
  { time: "0:00", event: "Call received", detail: "Maria picks up in under 1 second, every time", accent: true },
  { time: "0:04", event: "Caller identified", detail: "Phone number matched to CRM — new or returning" },
  { time: "0:18", event: "Qualification starts", detail: "Custom logic — budget, service type, timeline, location" },
  { time: "0:52", event: "Appointment offered", detail: "Live calendar sync — Maria reads open slots in real time" },
  { time: "1:14", event: "Booking confirmed", detail: "SMS confirmation sent to caller within seconds" },
  { time: "1:16", event: "CRM updated", detail: "Lead score, notes, service type, rep assignment — all logged" },
];

export default function SystemOverviewSection() {
  return (
    <section className="section-padding border-t border-[hsl(var(--border))]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-[50ch]"
        >
          <p className="eyebrow mb-4">How It Works</p>
          <h2 className="text-heading font-semibold text-foreground mb-4">
            From first ring to booked appointment
          </h2>
          <p className="text-lg text-muted-foreground">
            Every step of a Voxaris call happens in real time — measured in seconds, not hours.
          </p>
        </motion.div>

        <div className="max-w-[780px]">
          <div className="relative pl-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.time}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative grid grid-cols-[84px_24px_1fr] gap-4 pb-8 last:pb-0"
              >
                {/* Timestamp */}
                <div
                  className={`font-mono-display text-[13px] pt-0.5 ${
                    step.accent ? "text-[hsl(var(--accent))]" : "text-muted-foreground"
                  }`}
                >
                  {step.time}
                </div>

                {/* Vertical rail + dot */}
                <div className="relative flex justify-center">
                  <div
                    className={`w-2 h-2 rounded-[2px] mt-1.5 z-10 ${
                      step.accent ? "bg-[hsl(var(--accent))]" : "bg-[hsl(var(--border))]"
                    }`}
                  />
                  {index < steps.length - 1 && (
                    <div className="absolute top-3.5 bottom-[-32px] w-px bg-[hsl(var(--border))]" />
                  )}
                </div>

                {/* Event + detail */}
                <div>
                  <div className="text-[16px] font-medium text-foreground mb-1">{step.event}</div>
                  <div className="text-[14px] text-muted-foreground leading-relaxed">
                    {step.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
