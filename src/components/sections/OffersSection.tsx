import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, LineChart, Hammer, ArrowRight } from "lucide-react";
import * as PricingCard from "@/components/ui/pricing-card";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";

interface Offer {
  icon: React.ReactNode;
  name: string;
  description: string;
  price: string;
  period?: string;
  badge?: string;
  cta: string;
  ctaHref: string;
  ctaExternal?: boolean;
  highlight?: boolean;
}

const offers: Offer[] = [
  {
    icon: <Search />,
    name: "Audit",
    description: "Find out where you stand",
    price: "Free",
    period: "24h delivery",
    cta: "Run my audit",
    ctaHref: "https://audit.voxaris.io",
    ctaExternal: true,
    badge: "Start here",
  },
  {
    icon: <LineChart />,
    name: "Retainer",
    description: "For businesses ready to fix it",
    price: "Custom",
    period: "monthly",
    cta: "Book a call",
    ctaHref: "/book-demo",
    highlight: true,
    badge: "Most popular",
  },
  {
    icon: <Hammer />,
    name: "Rebuild",
    description: "Need a full rebuild?",
    price: "Custom",
    period: "per project",
    cta: "Book a call",
    ctaHref: "/book-demo",
  },
];

export default function OffersSection() {
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
          <p className="eyebrow mb-4">How does Voxaris work?</p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.03em] text-foreground leading-[1.05]">
            Which Voxaris tier
            <br />
            <span className="text-muted-foreground">fits your business?</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <PricingCard.Card
                className={
                  offer.highlight
                    ? "max-w-none border-white/25 bg-white/[0.04]"
                    : "max-w-none bg-white/[0.02]"
                }
              >
                <PricingCard.Header
                  className={offer.highlight ? "bg-white/[0.05]" : "bg-white/[0.03]"}
                >
                  <PricingCard.Plan>
                    <PricingCard.PlanName>
                      {offer.icon}
                      <span className="text-foreground">{offer.name}</span>
                    </PricingCard.PlanName>
                    {offer.badge && <PricingCard.Badge>{offer.badge}</PricingCard.Badge>}
                  </PricingCard.Plan>

                  <PricingCard.Price>
                    <PricingCard.MainPrice className="text-4xl">
                      {offer.price}
                    </PricingCard.MainPrice>
                    {offer.period && <PricingCard.Period>{offer.period}</PricingCard.Period>}
                  </PricingCard.Price>

                  {offer.ctaExternal ? (
                    <a href={offer.ctaHref} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant={offer.highlight ? "default" : "outline"}
                        className={
                          offer.highlight
                            ? "w-full font-semibold bg-[hsl(28_8%_72%)] text-black hover:bg-[hsl(28_8%_72%)] hover:brightness-110"
                            : "w-full font-semibold border-white/15 bg-white/[0.04] text-foreground hover:bg-white/[0.10] hover:border-white/30"
                        }
                      >
                        {offer.cta} <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </a>
                  ) : (
                    <Link to={offer.ctaHref}>
                      <Button
                        variant={offer.highlight ? "default" : "outline"}
                        className={
                          offer.highlight
                            ? "w-full font-semibold bg-[hsl(28_8%_72%)] text-black hover:bg-[hsl(28_8%_72%)] hover:brightness-110"
                            : "w-full font-semibold border-white/15 bg-white/[0.04] text-foreground hover:bg-white/[0.10] hover:border-white/30"
                        }
                      >
                        {offer.cta} <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </PricingCard.Header>

                <PricingCard.Body>
                  <PricingCard.Description className="text-[13px] text-muted-foreground">
                    {offer.description}
                  </PricingCard.Description>
                </PricingCard.Body>

                {offer.highlight && (
                  <BorderBeam
                    size={260}
                    duration={11}
                    colorFrom="hsl(28 8% 72%)"
                    colorTo="hsl(28 8% 72% / 0)"
                  />
                )}
              </PricingCard.Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
