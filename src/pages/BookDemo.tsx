import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Calendar } from "@/components/ui/calendar";
import { usePageMeta } from "@/hooks/usePageMeta";

const CALENDLY_URL = "https://calendly.com/ethan-voxaris/30min";

/** Builds the Calendly inline-widget data-url with our brand colors + optional pre-selected date. */
function buildCalendlyUrl(date: Date | undefined) {
  const params = new URLSearchParams({
    hide_event_type_details: "0",
    hide_gdpr_banner: "1",
    background_color: "171412",
    text_color: "f0ede8",
    primary_color: "e8ff47",
  });
  if (date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    params.set("month", `${y}-${m}`);
    params.set("date", `${y}-${m}-${d}`);
  }
  return `${CALENDLY_URL}?${params.toString()}`;
}

export default function BookDemo() {
  usePageMeta({
    title: "Book a Demo | Voxaris",
    description:
      "Book a free 20-minute call with Voxaris. Walk through your AI visibility audit and a plan to get cited by ChatGPT and Perplexity.",
    canonical: "https://voxaris.io/book-demo",
  });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // Calendly script needs to be present for .calendly-inline-widget to hydrate.
  useEffect(() => {
    if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }, []);

  // When the date changes, Calendly's widget needs to be re-initialized.
  // Setting `key` on the widget div forces a remount; once mounted, Calendly's
  // script auto-scans and initializes any new `.calendly-inline-widget` elements.
  const widgetKey = selectedDate ? selectedDate.toISOString().slice(0, 10) : "default";
  const widgetUrl = buildCalendlyUrl(selectedDate);

  // Fire Calendly's init after the key change so the new container gets picked up.
  useEffect(() => {
    const w = window as unknown as { Calendly?: { initInlineWidgets?: () => void } };
    if (w.Calendly?.initInlineWidgets) {
      w.Calendly.initInlineWidgets();
    }
  }, [widgetKey]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <Layout>
      <section className="section-padding min-h-[calc(100vh-5rem)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[42fr_58fr] gap-12 lg:gap-16 items-start">
            {/* Left — content */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow mb-4">Book a Demo</p>
              <h1 className="text-4xl lg:text-display-sm font-semibold text-foreground mb-6 leading-[1.05] tracking-[-0.03em]">
                See Voxaris in action
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-[48ch]">
                Pick a date that works for you, then choose a time. We'll walk through any of the products live — AEO, Talking Postcard, AI websites, or the staffing agent — and show you what a deployment in your business looks like.
              </p>

              <p className="eyebrow-muted mb-5">What we'll cover</p>
              <div className="space-y-1 mb-10">
                {[
                  "Your current AI visibility across ChatGPT, Perplexity, Claude",
                  "A Talking Postcard or AEO campaign walkthrough",
                  "AI-ready website builds — scope + timeline",
                  "AI video interviews for hiring pipelines",
                  "Custom proposal + implementation timeline for your setup",
                ].map((item, i) => (
                  <div
                    key={item}
                    className={`border-l-2 pl-4 py-2 ${
                      i === 0 ? "border-[hsl(var(--accent))]" : "border-[hsl(var(--border))]"
                    }`}
                  >
                    <span className="text-[15px] text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[hsl(var(--border))] pt-6">
                <p className="eyebrow-muted mb-2">Not ready for a call?</p>
                <a
                  href="https://audit.voxaris.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-[hsl(var(--accent))] font-medium hover:opacity-80 transition"
                >
                  Start with a free AI Visibility Audit →
                </a>
              </div>
            </motion.div>

            {/* Right — branded calendar on top, Calendly iframe below */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              {/* Branded calendar */}
              <div className="border border-[hsl(var(--border))] rounded-[8px] bg-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="eyebrow-muted mb-1">Step 1</p>
                    <p className="text-[15px] font-medium text-foreground">Pick a date</p>
                  </div>
                  {selectedDate && (
                    <button
                      onClick={() => setSelectedDate(undefined)}
                      className="text-[12px] text-muted-foreground hover:text-foreground transition"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  defaultMonth={selectedDate ?? today}
                  disabled={{ before: today }}
                  className="w-full"
                  classNames={{
                    months: "w-full",
                    month: "w-full space-y-4",
                    table: "w-full border-collapse",
                    head_row: "flex w-full justify-between",
                    head_cell: "text-muted-foreground flex-1 font-mono-display text-[10px] uppercase tracking-[0.1em] font-medium",
                    row: "flex w-full justify-between mt-2",
                    cell: "flex-1 aspect-square text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
                    day: "h-full w-full p-0 font-normal text-foreground hover:bg-[hsl(var(--accent))/15] hover:text-foreground rounded-[6px] transition-colors",
                    day_selected: "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] focus:bg-[hsl(var(--accent))] focus:text-[hsl(var(--accent-foreground))] font-semibold",
                    day_today: "border border-[hsl(var(--accent))/40] text-[hsl(var(--accent))]",
                    day_disabled: "text-muted-foreground/30 line-through cursor-not-allowed hover:bg-transparent",
                    day_outside: "text-muted-foreground/30",
                    caption: "flex justify-center pt-1 pb-2 relative items-center text-foreground font-medium",
                    caption_label: "text-[15px] font-semibold",
                    nav: "flex items-center gap-1",
                    nav_button: "h-7 w-7 bg-transparent p-0 opacity-60 hover:opacity-100 hover:bg-[hsl(var(--secondary))] rounded-[4px] flex items-center justify-center transition",
                    nav_button_previous: "absolute left-1",
                    nav_button_next: "absolute right-1",
                  }}
                />
                {selectedDate && (
                  <div className="mt-4 pt-4 border-t border-[hsl(var(--border))]">
                    <p className="eyebrow mb-2">Selected</p>
                    <p className="text-[15px] font-medium text-foreground">
                      {selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                )}
              </div>

              {/* Calendly — auto-focuses on selected date when set */}
              <div className="border border-[hsl(var(--border))] rounded-[8px] overflow-hidden bg-card">
                <div className="px-6 py-4 border-b border-[hsl(var(--border))]">
                  <p className="eyebrow-muted mb-1">Step 2</p>
                  <p className="text-[15px] font-medium text-foreground">
                    {selectedDate ? "Choose a time" : "Or pick a time below"}
                  </p>
                </div>
                <div
                  key={widgetKey}
                  className="calendly-inline-widget"
                  data-url={widgetUrl}
                  style={{ minWidth: 320, height: 700 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
