import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye, FileText, Crown, ArrowRight } from "lucide-react";
import * as PricingCard from "@/components/ui/pricing-card";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";

interface Offer {
  icon: React.ReactNode;
  name: string;
  description: string;
  price: string;
  period?: string;
  setupNote?: string;
  badge?: string;
  cta: string;
  ctaHref: string;
  ctaExternal?: boolean;
  highlight?: boolean;
}

const offers: Offer[] = [
  {
    icon: <Eye />,
    name: "Visibility",
    description: "We watch; you fix.",
    price: "$297",
    period: "/month",
    setupNote: "+ $997 setup",
    cta: "Book a call",
    ctaHref: "/book-demo",
    badge: "Tracking",
  },
  {
    icon: <FileText />,
    name: "Citation",
    description: "We produce the content that gets you cited.",
    price: "$997",
    period: "/month",
    setupNote: "+ $1,997 setup",
    cta: "Book a call",
    ctaHref: "/book-demo",
    highlight: true,
    badge: "Most popular",
  },
  {
    icon: <Crown />,
    name: "Authority",
    description: "We run your entire AI visibility funnel.",
    price: "$1,997",
    period: "/month",
    setupNote: "+ $2,997 setup",
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
                  {offer.setupNote && (
                    <p className="text-xs text-muted-foreground/80 mt-1">{offer.setupNote}</p>
                  )}

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center text-sm text-muted-foreground"
        >
          Not sure where you stand?{" "}
          <a
            href="https://audit.voxaris.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:text-[hsl(var(--accent))]"
          >
            Run the free 24-hour AI Visibility Audit
          </a>{" "}
          first &mdash; no card, no commitment.{" "}
          <span className="block sm:inline mt-1 sm:mt-0">
            Optional <strong className="text-foreground">Site Rebuild</strong> add-on: +$1,497 one-time
            (web design only, no AEO work bundled).
          </span>
        </motion.div>
      </div>
    </section>
  );
}
