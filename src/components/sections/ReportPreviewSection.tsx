import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

const engineCards = [
  {
    engine: "ChatGPT",
    status: "not-cited",
    verdict: "Not cited",
    detail: "AI named 3 competitors for \"best roofer in Orlando.\" Your business didn't appear.",
  },
  {
    engine: "Perplexity",
    status: "weak",
    verdict: "Weak citation",
    detail: "Cited once across 8 prompts. Schema gap: missing FAQPage + Service markup.",
  },
  {
    engine: "Google AI Overviews",
    status: "cited",
    verdict: "Cited",
    detail: "Appears in 4 of 8 Orlando roofing queries. GBP is carrying this — website isn't.",
  },
];

export default function ReportPreviewSection() {
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
          <p className="eyebrow mb-4">What you get</p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.03em] text-foreground leading-[1.05]">
            Exactly where you stand,
            <br />
            <span className="text-muted-foreground">per engine, with proof.</span>
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground max-w-[60ch] leading-relaxed">
            Sample report preview. Your real report shows your business, your city, your competitors — with screenshots.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 lg:p-8"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/10">
            <div>
              <div className="text-[11px] font-mono-display uppercase tracking-[0.14em] text-muted-foreground/80 mb-1">
                Sample report preview
              </div>
              <div className="text-[15px] font-semibold text-foreground">
                orlando-roofing-example.com
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-[hsl(var(--accent))/30] bg-[hsl(var(--accent))/10] px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />
              <span className="text-[11px] font-medium text-[hsl(var(--accent))]">Live</span>
            </div>
          </div>

          {/* Score cards */}
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            <ScoreCard label="Readiness" score={38} bar={38} verdict="Weak" />
            <ScoreCard label="Visibility" score={54} bar={54} verdict="Moderate" />
            <ScoreCard label="Trust" score={71} bar={71} verdict="Strong" />
          </div>

          {/* Per-engine breakdown */}
          <div className="grid gap-3 md:grid-cols-3 mb-8">
            {engineCards.map((e) => (
              <div
                key={e.engine}
                className="rounded-xl border border-white/10 bg-black/30 p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[13px] font-semibold text-foreground">{e.engine}</div>
                  <StatusPill status={e.status} verdict={e.verdict} />
                </div>
                <p className="text-[12.5px] text-muted-foreground leading-relaxed">{e.detail}</p>
              </div>
            ))}
          </div>

          {/* Fix row + citation counts */}
          <div className="grid gap-5 md:grid-cols-[1.4fr_1fr]">
            <div className="rounded-xl border border-[hsl(var(--accent))/20] bg-[hsl(var(--accent))/5] p-5">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-[hsl(var(--accent))]" />
                <div className="text-[11px] font-mono-display uppercase tracking-[0.14em] text-[hsl(var(--accent))]">
                  Top fix
                </div>
              </div>
              <div className="text-[15px] font-semibold text-foreground mb-1.5">
                Add FAQPage + Service schema to /services/roof-replacement
              </div>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                This one move typically lifts Readiness by 15–25 points. AI engines extract
                FAQPage answers directly — you currently expose none.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-5">
              <div className="text-[11px] font-mono-display uppercase tracking-[0.14em] text-muted-foreground/80 mb-3">
                Citation count · last 30d
              </div>
              <div className="space-y-3">
                <CitationBar label="Competitor A" count={17} max={20} highlight />
                <CitationBar label="Competitor B" count={11} max={20} />
                <CitationBar label="Your business" count={3} max={20} dim />
              </div>
            </div>
          </div>

          <div className="mt-7 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-[13px] text-muted-foreground max-w-[50ch]">
              Your report shows all six engines, 19 signals, and a prioritized fix list you
              can hand to any developer.
            </p>
            <a href="https://audit.voxaris.io" target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  background: "hsl(28 8% 72%)",
                  color: "#000",
                  padding: "12px 22px",
                  fontSize: 14,
                  fontWeight: 600,
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                Run My Free AI Audit <ArrowRight className="h-4 w-4" />
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ScoreCard({
  label,
  score,
  bar,
  verdict,
}: {
  label: string;
  score: number;
  bar: number;
  verdict: string;
}) {
  const color =
    score < 50 ? "hsl(0 70% 60%)" : score < 75 ? "hsl(38 80% 62%)" : "hsl(140 50% 58%)";
  return (
    <div className="rounded-xl border border-white/10 bg-black/30 p-5">
      <div className="flex items-baseline justify-between mb-3">
        <div className="text-[11px] font-mono-display uppercase tracking-[0.14em] text-muted-foreground/80">
          {label}
        </div>
        <div className="text-[11px] font-medium" style={{ color }}>
          {verdict}
        </div>
      </div>
      <div className="flex items-baseline gap-1 mb-3">
        <div className="text-3xl font-semibold text-foreground tabular-nums">{score}</div>
        <div className="text-sm text-muted-foreground">/100</div>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${bar}%`, background: color }}
        />
      </div>
    </div>
  );
}

function StatusPill({ status, verdict }: { status: string; verdict: string }) {
  if (status === "cited") {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[hsl(140_50%_68%)]">
        <CheckCircle2 className="h-3 w-3" /> {verdict}
      </span>
    );
  }
  if (status === "weak") {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[hsl(38_80%_68%)]">
        <AlertTriangle className="h-3 w-3" /> {verdict}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[hsl(0_70%_70%)]">
      <XCircle className="h-3 w-3" /> {verdict}
    </span>
  );
}

function CitationBar({
  label,
  count,
  max,
  highlight,
  dim,
}: {
  label: string;
  count: number;
  max: number;
  highlight?: boolean;
  dim?: boolean;
}) {
  const pct = (count / max) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <div className={`text-[12px] ${dim ? "text-muted-foreground" : "text-foreground"} font-medium`}>
          {label}
        </div>
        <div className="text-[12px] tabular-nums text-muted-foreground">{count}</div>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${pct}%`,
            background: highlight
              ? "hsl(28 8% 72%)"
              : dim
                ? "hsl(0 70% 60%)"
                : "hsl(28 8% 55%)",
          }}
        />
      </div>
    </div>
  );
}
