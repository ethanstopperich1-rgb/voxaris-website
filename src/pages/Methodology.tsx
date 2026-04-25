import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "react-router-dom";
import { ExternalLink, Lock } from "lucide-react";

/**
 * /methodology — the public spec for how Voxaris computes its scores.
 *
 * Why this page exists: every AI-visibility competitor (Profound, Peec AI,
 * SE Visible, BrightLocal, Writesonic GEO) refuses to publish their full
 * scoring methodology. Voxaris publishes it. That is the moat.
 *
 * Audience: dual — sophisticated buyers (CMOs, agencies, investors) and
 * smart SMB owners who want to verify the math before spending $99-2,997.
 *
 * Updated when: scoring weights change, new dimensions ship, Wilson method
 * is replaced, or vertical matrix evolves.
 */
export default function Methodology() {
  usePageMeta({
    title: "Methodology · How Voxaris computes AI Presence scores",
    description:
      "The full Voxaris AI Presence Audit methodology — 5-dimension scoring, Wilson score confidence intervals, Bayesian dark-funnel attribution, Google NLP + Knowledge Graph entity clarity, vertical weighting matrix, ISO/IEC 42006-aligned reproducibility.",
    canonical: "https://voxaris.io/methodology",
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="pt-20 pb-12 lg:pt-28 lg:pb-16 max-w-3xl">
            <p className="eyebrow mb-4">Methodology · v3 RoGEO Protocol · 2026.04</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-[-0.03em] text-foreground mb-6 leading-[1.05]">
              How Voxaris computes
              <br />
              <span className="text-muted-foreground">AI Presence scores.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-[60ch] leading-relaxed">
              Every score in your audit is derived from a published formula running on data you can verify. No black boxes, no proprietary fudge factors, no "trust us." If the math doesn't survive your own scrutiny, you shouldn't pay for the report.
            </p>
            <p className="mt-4 text-sm text-muted-foreground/80">
              This page is the full spec. It is updated alongside every weight change, every new dimension, and every model swap. If you spot a flaw or a tightening opportunity, email{" "}
              <a className="underline hover:text-foreground" href="mailto:methodology@voxaris.io">
                methodology@voxaris.io
              </a>{" "}
              — we ship corrections within a week.
            </p>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="section-padding pt-12 lg:pt-16 border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">TL;DR for the impatient</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-foreground mb-4 leading-[1.1]">
              Five dimensions, weighted by vertical, scored with confidence intervals.
            </h2>
            <ul className="space-y-3 text-base text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-foreground">5 dimensions</strong> — AI Readiness, AI Visibility, AI Trust, AI Entity Clarity, AI Momentum. Each scored 0–100 with sub-component breakdowns.
              </li>
              <li>
                <strong className="text-foreground">Statistical honesty</strong> — every citation rate published with a 95% Wilson score confidence interval. We never display "60%" when the true range is "20–95%."
              </li>
              <li>
                <strong className="text-foreground">Live entity verification</strong> — Google's Cloud Natural Language API + Knowledge Graph Search API actually queried at audit time, not estimated.
              </li>
              <li>
                <strong className="text-foreground">Bayesian dark funnel</strong> — for $499/mo customers, we run a Negative Binomial regression with placebo validation to attribute calls and conversions to AI citations.
              </li>
              <li>
                <strong className="text-foreground">Reproducible</strong> — every audit logs random seeds, model versions, query timestamps, and raw response hashes. Re-run any audit and you should get the same numbers within statistical noise.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 1 — The 5 dimensions */}
      <section className="section-padding pt-12 lg:pt-16 border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="eyebrow mb-4">§1 · The Five Dimensions</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-foreground mb-4 leading-[1.1]">
              What we measure, and what each score means.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              AI engines decide whether to cite a business by answering five distinct questions in sequence. Each question is one Voxaris dimension.
            </p>

            <div className="space-y-8">
              <DimensionExplainer
                num="01"
                name="AI Readiness"
                question="Can AI read your site?"
                weight="15%"
                subs={[
                  ["Schema completeness", "40%", "LocalBusiness, FAQPage, HowTo, Review JSON-LD presence + valid schema.org markup"],
                  ["Google Business Profile completeness", "30%", "Categories, services, photos, hours, Q&A, attributes filled"],
                  ["Site crawlability", "15%", "Server-side rendered HTML, robots.txt allowing AI bots (GPTBot, ClaudeBot, PerplexityBot, etc.), Bing Webmaster verified"],
                  ["llms.txt presence", "5%", "Low-weighted — SE Ranking's 300k-domain study found no correlation between llms.txt and citation frequency. Kept as a directional signal only."],
                  ["HTTPS, Core Web Vitals, internal linking", "10%", "Sanity-check baseline web hygiene"],
                ]}
              />

              <DimensionExplainer
                num="02"
                name="AI Visibility"
                question="Does AI cite you?"
                weight="25%"
                subs={[
                  ["Google AI Overview citation rate", "50%", "Across 8 transactional + 2 zero-click queries"],
                  ["Google AI Mode citation rate", "20%", "Informational + comparative — note that AIO and AI Mode share only ~14% of cited URLs"],
                  ["Perplexity citation rate", "15%", "Highest user trust score per 2026 user behavior research"],
                  ["ChatGPT citation rate", "10%", "Web-search results + source attribution"],
                  ["Claude + Bing Copilot citation rate", "5%", "Lower volume but completes the cross-engine matrix"],
                ]}
              />

              <DimensionExplainer
                num="03"
                name="AI Trust"
                question="Does AI trust your entity?"
                weight="25%"
                subs={[
                  ["GBP review velocity (last 90 days)", "25%", "New review count divided by elapsed time, normalized against vertical median"],
                  ["Review Attribute Extraction score", "25%", "Aspect-Based Sentiment Analysis on review text — measures coverage of vertical-specific buyer-intent attributes (e.g. 'painless' for dental, 'before/after results' for med spa)"],
                  ["NAP consistency", "20%", "Name, Address, Phone match rate across GBP, Foursquare, Yelp, BBB, and the business's own website"],
                  ["Citation chain depth", "15%", "Independent third-party mentions (news, trade press, directories) where the business's identifying facts agree"],
                  ["Sentiment polarity", "15%", "Mean review sentiment, weighted by recency (last 6 months heaviest)"],
                ]}
              />

              <DimensionExplainer
                num="04"
                name="AI Entity Clarity"
                question="Can AI disambiguate you?"
                weight="20%"
                subs={[
                  ["Google NLP analyzeEntities", "40%", "Salience score for the business name on its homepage + correct typing as ORGANIZATION (not PERSON or OTHER) + presence of mid (Knowledge Graph ID) + Wikipedia metadata link"],
                  ["Google Knowledge Graph presence", "30%", "Resultscore from Knowledge Graph Search API, organization-typed entity link, Wikipedia article presence"],
                  ["Graph density", "20%", "Richness of the KG node — description, detailed description, image, URL, Wikipedia"],
                  ["Uniqueness penalty", "10%", "Same-named entities within 50 miles or in the same vertical reduce this sub-score by 2.5 points each (capped at –10)"],
                ]}
              />

              <DimensionExplainer
                num="05"
                name="AI Momentum"
                question="Is your AI presence growing?"
                weight="15%"
                subs={[
                  ["Citation frequency trend (week-over-week)", "35%", "Slope of citation counts across the rolling 4-week window"],
                  ["Review velocity trend", "25%", "Review count slope, recency-weighted"],
                  ["Content freshness decay", "20%", "Days since the last meaningful site update (lastmod / dateModified)"],
                  ["Competitor displacement risk", "20%", "Rate at which previously-tracked competitors are gaining or losing AI citations relative to you"],
                ]}
              />
            </div>

            <div className="mt-10 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6">
              <p className="eyebrow-muted mb-3">Default composite formula</p>
              <pre className="text-sm font-mono leading-relaxed overflow-x-auto text-muted-foreground">
{`overall = visibility × 0.25
        + trust × 0.25
        + entity_clarity × 0.20
        + readiness × 0.15
        + momentum × 0.15`}
              </pre>
              <p className="mt-4 text-sm text-muted-foreground/80">
                Weights re-balance per vertical (see §6). Default sums to 1.00 by design — we never apply hidden multipliers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Confidence intervals */}
      <section className="section-padding pt-12 lg:pt-16 border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="eyebrow mb-4">§2 · Statistical Confidence</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-foreground mb-4 leading-[1.1]">
              Why we publish confidence intervals on every citation rate.
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              When you query an AI engine 5 times for "best roofer in Orlando" and the business gets cited 3 times, the naïve answer is "60% citation rate." That number is technically correct and practically useless, because the true rate could be anywhere from 23% to 88% with that little data.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Voxaris publishes the Wilson score confidence interval — a statistical method specifically designed for binomial proportions. Wilson handles small-sample edge cases gracefully (where naïve normal approximations break down) and produces asymmetric bands when the true rate is near 0% or 100% — which is exactly when local-business audits live.
            </p>

            <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/40 p-6 lg:p-8 mb-6">
              <p className="eyebrow-muted mb-3">In plain English — the Wilson method explained without math</p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Imagine we ask ChatGPT "best roofer in Orlando" five times. Three times it cites your business. The naïve answer is <strong className="text-foreground">"60% citation rate"</strong>. That number feels precise, but it isn't.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Five queries is a small sample. If we'd asked the same question five hundred times, the true answer might be 50%. Or 75%. Or 30%. We don't know yet — we have five data points to work with.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                The Wilson method takes the small sample and gives back an honest range: <strong className="text-foreground">"the true citation rate is somewhere between 23% and 88%, with 95% confidence."</strong> That range is wide because we don't have enough data yet — and pretending otherwise would be lying with statistics.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Three things make the range narrower over time:
              </p>
              <ul className="space-y-2 text-base text-muted-foreground leading-relaxed list-disc pl-6 mb-4">
                <li><strong className="text-foreground">More queries.</strong> Going from 5 to 50 runs cuts the range roughly in half.</li>
                <li><strong className="text-foreground">More consistent results.</strong> If the engine cites you 100% of the time, the range is naturally narrower than if it cites you 50%.</li>
                <li><strong className="text-foreground">Tracking over time.</strong> Weekly tracking accumulates evidence. After a month, the same business goes from "60% (23–88%)" to "60% (53–67%)" — same point estimate, much tighter confidence.</li>
              </ul>
              <p className="text-base text-muted-foreground leading-relaxed">
                That's why the $99 Snapshot Report uses 5 query runs but the $499/mo Tracking Pro tier uses 7 runs and weekly tracking — paid customers get tighter confidence bands and clearer answers as data accumulates.
              </p>
            </div>

            <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 mb-6">
              <p className="eyebrow-muted mb-3">For the math people — the Wilson formula we ship</p>
              <pre className="text-sm font-mono leading-relaxed overflow-x-auto text-muted-foreground">
{`p̂      = k / n                           (sample proportion)
z      = quantile(N(0,1), 1 - α/2)       (z=1.959964 at 95%)
denom  = 1 + z² / n
centre = (p̂ + z²/(2n)) / denom
spread = z·√(p̂(1-p̂)/n + z²/(4n²)) / denom

CI = [max(0, centre - spread), min(1, centre + spread)]`}
              </pre>
              <p className="mt-4 text-sm text-muted-foreground/80">
                Reference: Wilson, E.B. (1927). "Probable inference, the law of succession, and statistical inference." JASA 22:158, p. 209–212.
              </p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed mb-3">
              Implementation specifics, in case you want to verify:
            </p>
            <ul className="space-y-2 text-base text-muted-foreground leading-relaxed list-disc pl-6">
              <li>z-scores via Acklam's normal-inverse-CDF approximation (~1.15 × 10⁻⁹ accurate). Compounded through z² in Wilson's denominator, our published bounds match scipy.stats reference values to within ~5 × 10⁻³ — well below display rounding.</li>
              <li>n = 5 query runs per (engine × query) on the $99 tier; n = 7 on $499/mo. n = 1 only on the free preview.</li>
              <li>"Cited" is true if the business's domain or name appears anywhere in the engine's cited-source list for that query, after fuzzy-matching the brand name against organizational variants (e.g. "Acme Inc." matches "Acme").</li>
              <li>Display rule: when the upper minus lower band exceeds 40 percentage points, we flag the row with a warning icon — that's a "needs more data" signal, not a verdict.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 — Per-engine query coverage */}
      <section className="section-padding pt-12 lg:pt-16 border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="eyebrow mb-4">§3 · Per-Engine Query Coverage</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-foreground mb-4 leading-[1.1]">
              The 30-query (v2) and 50-query (v3) engines.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              v2 audits run 30 queries × 6 engines × n=3 majority-vote runs = ~540 LLM calls per audit. v3 audits expand to 50 queries × 7 engines × n=5 = ~1,750 calls.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Queries are split by intent type — transactional, informational, comparative, navigational, fan-out (Google AI Mode sub-queries), voice (zero-click conversational), and YMYL (regulated verticals). Each query runs only on engines where that intent type is meaningful — no wasted calls.
            </p>

            <div className="overflow-x-auto rounded-xl border border-[hsl(var(--border))]">
              <table className="w-full text-sm">
                <thead className="bg-[hsl(var(--card))] text-xs uppercase text-muted-foreground/80 tracking-wider">
                  <tr>
                    <th className="text-left px-4 py-3">Intent</th>
                    <th className="text-center px-3 py-3">Count</th>
                    <th className="text-center px-3 py-3">ChatGPT</th>
                    <th className="text-center px-3 py-3">Perplexity</th>
                    <th className="text-center px-3 py-3">Gemini</th>
                    <th className="text-center px-3 py-3">AIO</th>
                    <th className="text-center px-3 py-3">AI Mode</th>
                    <th className="text-center px-3 py-3">Claude</th>
                    <th className="text-center px-3 py-3">Bing</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ["Transactional", "10", "✓", "✓", "✓", "✓", "✓", "✓", "✓"],
                    ["Informational", "12", "✓", "✓", "✓", "✓", "✓", "✓", "—"],
                    ["Comparative", "6", "✓", "✓", "✓", "—", "—", "✓", "—"],
                    ["Navigational", "4", "—", "✓", "✓", "✓", "✓", "—", "✓"],
                    ["Fan-out", "10", "—", "—", "✓", "✓", "✓", "—", "—"],
                    ["Voice / zero-click", "4", "—", "—", "✓", "✓", "✓", "—", "—"],
                    ["YMYL (regulated)", "4", "✓", "✓", "✓", "✓", "✓", "✓", "—"],
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-[hsl(var(--border))]">
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`px-3 py-2 ${j === 0 ? "text-left font-medium text-foreground" : "text-center"}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-sm text-muted-foreground/80">
              Stateless API sessions only — no thread reuse — to prevent context contamination across queries. Temperature locked to 0 for reproducibility. n=3 majority voting reduces variance from probabilistic cite/no-cite decisions; we log every individual run for audit reproducibility.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — Entity Clarity */}
      <section className="section-padding pt-12 lg:pt-16 border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="eyebrow mb-4">§4 · Entity Clarity (Google NLP + Knowledge Graph)</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-foreground mb-4 leading-[1.1]">
              How we measure whether AI can disambiguate your business.
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              In June 2025 Google's Knowledge Graph "Great Clarity Cleanup" deleted ~3 billion ambiguous entities — about 6.26% of the graph. The takeaway: AI engines aggressively de-prioritize businesses they can't confidently disambiguate. Voxaris measures this directly using two Google APIs:
            </p>

            <ul className="space-y-3 text-base text-muted-foreground leading-relaxed mb-6">
              <li>
                <strong className="text-foreground">Cloud Natural Language API</strong> — analyzeEntities is run against the first 5,000 characters of the business's homepage. We extract: (1) salience (relative importance to the page, 0–1), (2) entity type (we want ORGANIZATION, not PERSON or OTHER — this is one of the most common silent failures we surface), (3) the mid metadata field (presence of a linked Google Knowledge Graph entity), (4) wikipedia_url metadata (when set, the business has Wikipedia presence).
              </li>
              <li>
                <strong className="text-foreground">Knowledge Graph Search API</strong> — queried with the brand name + city, returning ranked entity candidates. We extract: resultScore (Google's confidence in the match — log-scaled into our subscore so 10→1.6pt, 100→4pt, 1000→6.6pt), the @type array (organization-typed entries score higher), description + detailedDescription presence, image presence, URL presence, and Wikipedia article URL when linked.
              </li>
            </ul>

            <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 mb-6">
              <p className="eyebrow-muted mb-3">Entity Clarity composite</p>
              <pre className="text-sm font-mono leading-relaxed overflow-x-auto text-muted-foreground">
{`nlp_subscore     = min(40, [
                     min(20, salience × 50)    // 20 pts at salience ≥ 0.4
                   + (10 if typed as ORGANIZATION)
                   + (5 if has KG mid)
                   + (5 if has Wikipedia URL)
                   ])

kg_subscore      = min(30, [
                     (12 if KG entity exists)
                   + min(8, log10(resultScore + 1) × 2.7)
                   + (5 if typed as Organization)
                   + (5 if has Wikipedia article)
                   ])

graph_density    = min(20, [
                     (4 if has description)
                   + (5 if has detailed description)
                   + (3 if has image)
                   + (4 if has url)
                   + (4 if has Wikipedia)
                   ])

uniqueness       = max(0, 10 - 2.5 × duplicate_count)

Entity Clarity   = nlp_subscore + kg_subscore + graph_density + uniqueness
                   (capped at 100)`}
              </pre>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              <strong className="text-foreground">NIL prediction</strong> — when the engine cannot resolve any KG entity, or when an entity exists but has resultScore &lt; 5 with multiple same-named conflicts, we flag the audit as "Not In Lexicon." NIL-predicted businesses suffer 40–60% lower AI citation rates regardless of content quality. Surfacing this is one of the highest-leverage signals Voxaris produces.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 — Trust + Reviews */}
      <section className="section-padding pt-12 lg:pt-16 border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="eyebrow mb-4">§5 · Trust Signals (GBP + Foursquare + Reviews)</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-foreground mb-4 leading-[1.1]">
              Review velocity, attribute coverage, NAP consistency.
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              AI engines weight third-party trust signals heavily because they're harder to fake than on-page content. We pull canonical signals from Google Places API, Foursquare Places API, and (when wired) directly from Yext, BrightLocal, or DataForSEO's business intelligence endpoints.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              The most distinctive component of our Trust score is <strong className="text-foreground">Review Attribute Extraction</strong> — we run Aspect-Based Sentiment Analysis (ABSA) on the actual review text, mapped against vertical-specific attribute taxonomies. For a roofer, that taxonomy includes "leak repair," "hail damage," "emergency roofing," "warranty," "cleanup," "insurance claims." For a med spa: "before/after results," "Botox," "filler," "natural results," "certified provider," "CoolSculpting."
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              The output is an Attribute Coverage Matrix — what percentage of the vertical's key attributes are mentioned in your reviews, weighted by recency (last 6–12 months heaviest) and sentiment polarity (positive mentions count more than neutral, negative mentions deduct). A roofer with a 4.2-star rating and 50 reviews where 30% mention "emergency roofing" outperforms a 5.0-star roofer with generic "great service" reviews — for that specific buyer-intent query.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              NAP consistency is computed by fuzzy-matching the canonical Name + Address + Phone from GBP against what's published on Foursquare, Yelp, BBB, the business's own website (parsed from schema.org markup), and (where present) Crunchbase + LinkedIn. Each mismatch above a Levenshtein-distance threshold deducts from the consistency sub-score.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 — Vertical weighting */}
      <section className="section-padding pt-12 lg:pt-16 border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="eyebrow mb-4">§6 · Vertical Weighting Matrix</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-foreground mb-4 leading-[1.1]">
              The same dimension is worth more in some industries than others.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Personal injury law is dominated by trust + authority signals. Roofing is dominated by visibility + GBP completeness. Same five dimensions, different weights. The matrix below is the current 2026.04 spec — re-tuned quarterly based on observed citation outcomes.
            </p>

            <div className="overflow-x-auto rounded-xl border border-[hsl(var(--border))]">
              <table className="w-full text-sm">
                <thead className="bg-[hsl(var(--card))] text-xs uppercase text-muted-foreground/80 tracking-wider">
                  <tr>
                    <th className="text-left px-4 py-3">Vertical</th>
                    <th className="text-center px-3 py-3">Visibility</th>
                    <th className="text-center px-3 py-3">Trust</th>
                    <th className="text-center px-3 py-3">Entity Clarity</th>
                    <th className="text-center px-3 py-3">Readiness</th>
                    <th className="text-center px-3 py-3">Momentum</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ["Default", "25%", "25%", "20%", "15%", "15%"],
                    ["Personal Injury Law", "25%", "50%", "15%", "0%", "10%"],
                    ["Cosmetic Dentistry", "25%", "40%", "15%", "10%", "10%"],
                    ["Med Spa", "25%", "40%", "15%", "10%", "10%"],
                    ["Roofing", "45%", "30%", "15%", "0%", "10%"],
                    ["Auto Dealership", "45%", "30%", "15%", "0%", "10%"],
                    ["B2B SaaS", "30%", "20%", "25%", "15%", "10%"],
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-[hsl(var(--border))]">
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`px-3 py-2 ${j === 0 ? "text-left font-medium text-foreground" : "text-center tabular-nums"}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-sm text-muted-foreground/80">
              Personal Injury Law's 50% trust weight reflects research showing only 27% of top firms appear in AI recommendations and that authority signals (bar admissions, case results, news mentions) dominate citation decisions. Roofing's 45% visibility weight reflects the 69% location-bound nature of roofing queries vs. the 34% location-bound nature of legal queries.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 — Dark Funnel */}
      <section className="section-padding pt-12 lg:pt-16 border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="eyebrow mb-4 inline-flex items-center gap-2">
              <Lock className="h-3 w-3" />
              §7 · Dark Funnel Estimator ($499/mo Tracking Pro tier)
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-foreground mb-4 leading-[1.1]">
              Bayesian attribution of offline revenue to AI citations.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              The hardest measurement problem in 2026 marketing is attributing offline conversions (phone calls, walk-ins, direct traffic) to AI engine citations that produced no clickable referral. Voxaris solves this with a Hierarchical Bayesian Negative Binomial regression — the same statistical method used in pharmaceutical clinical trials and economic causal inference.
            </p>

            <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 mb-6">
              <p className="eyebrow-muted mb-3">Model specification (PyMC, runs on Modal)</p>
              <pre className="text-sm font-mono leading-relaxed overflow-x-auto text-muted-foreground">
{`y_t  ~ NegBinomial(μ_t, α)
μ_t = exp(β₀ + β₁ × citation_intensity_t
        + β_trend × t
        + β_dow[dow_t]
        + β_holiday × is_holiday_t)

priors:
  β₀         ~ Normal(3.0, 1.0)        # baseline log-call-volume
  β₁         ~ Normal(0.10, 0.25)      # citation effect (treatment)
  β_trend    ~ Normal(0,   0.01)       # weekly trend
  β_dow      ~ Normal(0,   0.5) × 7    # day-of-week
  β_holiday  ~ Normal(0,   0.5)
  α          ~ HalfNormal(2.0)          # NegBin dispersion`}
              </pre>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">citation_intensity</strong> is engine-weighted (Perplexity 1.0 / ChatGPT 0.9 / Google AIO 0.7 / Google AI Mode 0.6 / Claude 0.5 / Bing Copilot 0.5 / Gemini 0.7) and exponentially decayed over a 7-day window from the citation event. Negative Binomial (vs. Poisson) is the default because local SMB call data is overdispersed — viral days, storm spikes, seasonality.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              We run NUTS (No-U-Turn Sampler) with 4 chains × 2,000 tuning steps × 2,000 draws at target_accept = 0.95. Posterior diagnostics required for any number to display in the dashboard:
            </p>

            <ul className="space-y-2 text-base text-muted-foreground leading-relaxed list-disc pl-6 mb-6">
              <li>R-hat &lt; 1.01 across all parameters (chain mixing)</li>
              <li>Effective sample size &gt; 400 (independent posterior samples)</li>
              <li>Posterior predictive check passes (Bayesian p-value 0.05–0.95)</li>
              <li>Placebo test passes — see below</li>
            </ul>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">Placebo validation</strong> — before any attribution number is displayed to a customer, we run 20 placebo iterations: shuffle the citation_intensity time series within day-of-week strata (preserving weekly seasonality), refit the model, record the placebo β₁ distribution. If |placebo β₁| ≥ |real β₁| in more than 10% of iterations (p &gt; 0.10), the result is flagged untrustworthy and the dashboard refuses to display it.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              The "trustworthy = true" flag in our database has a SQL CHECK constraint preventing it from being set unless all four diagnostic gates pass. <strong className="text-foreground">It is physically impossible</strong> to display an untrustworthy attribution number to a customer in our dashboard, even if a developer tries to override it.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8 — Reproducibility */}
      <section className="section-padding pt-12 lg:pt-16 border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="eyebrow mb-4">§8 · Reproducibility (ISO/IEC 42006-aligned)</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-foreground mb-4 leading-[1.1]">
              Every audit is an artifact you can re-run.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Voxaris audits are designed to align with the rigor expectations of ISO/IEC 42006 — the AI management system audit standard. This means every audit logs:
            </p>
            <ul className="space-y-2 text-base text-muted-foreground leading-relaxed list-disc pl-6 mb-6">
              <li>The exact set of queries used (with version tag, e.g. v3.0)</li>
              <li>Random seeds for every LLM call (so an audit run today can be reproduced months later)</li>
              <li>Model versions for every engine (e.g. gpt-4.1-mini-2026-04, claude-4.x-20260301)</li>
              <li>SHA-256 hashes of every raw response (so we can detect post-hoc tampering)</li>
              <li>Total API cost in cents and full audit duration in seconds</li>
              <li>Weight matrix version + scoring engine version (so old audits stay re-explainable when weights evolve)</li>
              <li>An append-only compliance audit log of every action taken on behalf of the client (FTC AI transparency)</li>
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed">
              If a client disputes an audit, we can produce the full reproducibility package — every query, every response, every random seed, every model version — within minutes. No competitor in this category ships this.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9 — What we don't claim */}
      <section className="section-padding pt-12 lg:pt-16 border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="eyebrow mb-4">§9 · What we don't claim</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-foreground mb-4 leading-[1.1]">
              The honest limits of this methodology.
            </h2>
            <ul className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-foreground">We don't promise guaranteed citations.</strong> AI engines pick their own sources. What we guarantee is the signals that improve your probability — and we track that probability rigorously.
              </li>
              <li>
                <strong className="text-foreground">Engine results vary day to day.</strong> A query that cites your business at noon may not at 3pm. n=3 (or n=5/7 on paid tiers) majority voting reduces this variance, but doesn't eliminate it. The Wilson CI is the honest answer.
              </li>
              <li>
                <strong className="text-foreground">AI Overview is more delayed than we'd like.</strong> Google's AIO updates with a 60–90 day stability lag. We score the four faster engines aggressively (Perplexity, ChatGPT, Bing Copilot, Claude) and treat AIO as a longer-term tracking metric.
              </li>
              <li>
                <strong className="text-foreground">Dark Funnel attribution is probabilistic.</strong> We give a range with confidence intervals, not a single number. If a client wants a single number with no uncertainty, we can't honestly provide that — and neither can anyone else.
              </li>
              <li>
                <strong className="text-foreground">Vertical weights are tuned, not proven optimal.</strong> The 2026.04 matrix is our current best estimate from observed outcomes across our customer base. It will change as we accumulate more data. Old audits will retain their original weight matrix in their reproducibility metadata.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Run your own audit</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-foreground mb-6 leading-[1.1]">
              See the methodology applied to your business.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-[55ch]">
              Free preview in about 90 seconds — three scores, one fix surfaced, no credit card. The full Snapshot Report ($99) unlocks every signal documented above.
            </p>
            <a
              href="https://audit.voxaris.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--primary))] px-6 py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition-opacity hover:opacity-90"
            >
              Run my free AI audit
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="border-t border-[hsl(var(--border))] py-8">
        <div className="container-wide">
          <p className="text-xs text-muted-foreground/60 max-w-3xl">
            Last updated 2026-04-25. Methodology version: v3.0 (RoGEO Protocol). Weight matrix version: 2026.04. If you find an error, suggest a correction, or want a deeper math discussion, email{" "}
            <a className="underline hover:text-foreground" href="mailto:methodology@voxaris.io">
              methodology@voxaris.io
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
}

// ─────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────
function DimensionExplainer({
  num,
  name,
  question,
  weight,
  subs,
}: {
  num: string;
  name: string;
  question: string;
  weight: string;
  subs: Array<[string, string, string]>;
}) {
  return (
    <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/40 p-6 lg:p-8">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-mono text-xs text-muted-foreground/70">§1.{num}</span>
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
          Default weight {weight}
        </span>
      </div>
      <h3 className="text-xl lg:text-2xl font-semibold text-foreground tracking-tight">
        {name}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground/80">{question}</p>
      <div className="mt-5 space-y-3">
        {subs.map(([sub, pct, desc]) => (
          <div
            key={sub}
            className="grid grid-cols-[120px_1fr] gap-4 text-sm border-t border-[hsl(var(--border))]/60 pt-3"
          >
            <div className="text-foreground font-medium tabular-nums">
              {pct}
              <span className="ml-1 text-muted-foreground/60 font-normal text-xs">
                {sub}
              </span>
            </div>
            <div className="text-muted-foreground leading-relaxed">{desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
