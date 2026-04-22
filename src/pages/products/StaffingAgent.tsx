import ProductPage from "./ProductPage";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function StaffingAgent() {
  usePageMeta({
    title: "Staffing Agent | Voxaris",
    description:
      "AI video interviews that screen candidates before your team sees a resume. Consistent questions, recorded answers, one-page summaries.",
    canonical: "https://voxaris.io/products/staffing",
  });
  return (
    <ProductPage
      eyebrow="Staffing Agent"
      headline={
        <>
          AI screens every applicant<br />
          <span className="text-muted-foreground">before your team sees a single resume.</span>
        </>
      }
      subheadline="Send candidates a personalized AI video interview. They record their answers on their own time. Your team reviews a clean summary and decides who to advance — no scheduling, no phone screens, no wasted hours."
      features={[
        {
          title: "Automated video interview invites",
          body: "Candidates receive a personalized invitation with a Voxaris AI interviewer. No scheduling required — they complete it when it works for them.",
        },
        {
          title: "Structured question delivery",
          body: "Every candidate gets the same questions in the same order. Consistent, fair, and defensible.",
        },
        {
          title: "Recorded answers + instant summaries",
          body: "Every response is recorded, transcribed, and summarized. Your team reads a one-page candidate brief instead of sitting through an hour of calls.",
        },
        {
          title: "Scalable to any volume",
          body: "Run 5 interviews or 500 simultaneously. The system never gets tired, never rushes, and never misses a question.",
        },
      ]}
      cta={{
        eyebrow: "See it in action",
        headline: "See the staffing agent in a live demo.",
        primary: { label: "Book a Demo", href: "/book-demo" },
      }}
    />
  );
}
