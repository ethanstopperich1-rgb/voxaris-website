import ProductPage from "./ProductPage";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function TalkingPostcard() {
  usePageMeta({
    title: "Talking Postcard | Voxaris",
    description:
      "AI-personalized video delivered as a physical postcard. Name, business, city — unique to each recipient. Campaigns from 500 to 50,000 pieces.",
    canonical: "https://voxaris.io/products/talking-postcard",
  });
  return (
    <ProductPage
      eyebrow="Talking Postcard"
      headline={
        <>
          AI video outreach<br />
          <span className="text-muted-foreground">that actually gets watched.</span>
        </>
      }
      subheadline="Send personalized AI video messages at scale. Every recipient sees a video made specifically for them — their name, their business, their situation. Physical postcard + QR code or digital delivery."
      features={[
        {
          title: "Personalized AI video per recipient",
          body: "Built on Tavus. Each video is uniquely generated with the recipient's name and context. Not a template — a real personalized video.",
        },
        {
          title: "Physical + digital delivery",
          body: "Mail a physical postcard with a QR code that opens their personal video, or deliver digitally via email and SMS.",
        },
        {
          title: "Outreach campaign automation",
          body: "Build sequences: postcard → video view → follow-up SMS → booked call. Fully automated.",
        },
        {
          title: "Real-time engagement tracking",
          body: "See exactly who watched their video, how long they watched, and whether they clicked through.",
        },
      ]}
      cta={{
        eyebrow: "See it in action",
        headline: "See a Talking Postcard demo.",
        primary: { label: "Book a Demo", href: "/book-demo" },
      }}
    />
  );
}
