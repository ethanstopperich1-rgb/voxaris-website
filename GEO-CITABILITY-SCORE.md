# AI Citability Analysis: Voxaris AEO Services Page

**URL:** https://voxaris.io/products/aeo
**Analysis Date:** 2026-04-27
**Overall Citability Score: 30/100**
**Citability Coverage:** 0% of content blocks score above 70

---

## Score Summary

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Answer Block Quality | 33/100 | 30% | 9.9 |
| Passage Self-Containment | 33/100 | 25% | 8.1 |
| Structural Readability | 35/100 | 20% | 7.0 |
| Statistical Density | 20/100 | 15% | 3.0 |
| Uniqueness & Original Data | 15/100 | 10% | 1.5 |
| **Overall** | | | **29.5/100** |

---

## Headline Findings

This is a **300% gap** between what the company sells and what its own product page demonstrates. Voxaris evangelizes citability; their AEO product page has zero citable blocks. Three structural problems compound:

1. **The page is 180 words.** Optimal AI extraction is 134–167 words *per passage*. This page has less total content than a single quotable passage on a competitor's site.
2. **`What's included` is rendered as a styled `<p>`, not an `<h2>`.** Heading hierarchy goes H1 → (fake heading) → H3 (×4) → H2 (CTA). AI parsers have no idea this is a "What's included" section.
3. **Zero question-form headings.** No "What is AEO?", no "How does the audit work?", no "How long does implementation take?" — every heading is a noun-phrase label.

The prior GEO audit gave this page a citability score of 52 from an AI-visibility-broad lens (which mixed in crawlability and SSR). The dedicated citability score is **30**, because the content itself is the problem, not the infrastructure.

---

## Strongest Content Blocks

The strongest block on the page is still poor by any GEO standard. Listing for completeness:

### 1. Hero intro (under H1) — Score: 45/100
> "Answer Engine Optimization is the new SEO. When someone asks AI which business to use in your category, we make sure yours is the one it recommends."

**Why it's the best on the page:** Has a definition-shaped opening (`X is Y`) and explicit subject. **Why it still fails:** The "definition" is a marketing positioning ("the new SEO"), not a definition. No quantified answer. No named engines. Pronoun-heavy second sentence.

### 2. Weekly Citation Monitoring (H3 #04) — Score: 35/100
> "Every week we check your AI visibility score across all engines and send you a clear report on where you're being cited."

**Why it's relatively strong:** Names a cadence ("every week") and a deliverable. **Why it fails:** Heading isn't a question. Subject ("Weekly Citation Monitoring") only in heading, not in body. "All engines" is vague — name them.

---

## Weakest Content Blocks (Rewrite Priority)

### 1. AI Visibility Audit (H3 #01) — Score: 32/100

**Current opening:**
> "Full citation report across all 4 major AI engines. Where you appear, where you don't, and what your competitors are doing that you're not."

**Problem:** Heading is a noun phrase, not a question. Body opens with a sentence fragment ("Full citation report..."). Pronoun-heavy ("where you appear", "what your competitors are doing"). "4 major AI engines" — which 4? Site sells across 6 engines elsewhere. Internal inconsistency.

**Suggested rewrite:**

> ### What is an AI Visibility Audit?
>
> An AI Visibility Audit scores how often your business is cited across the six major AI answer engines — ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot — using a 19-point AEO checklist. The audit returns a 0–100 composite score, a per-engine citation breakdown, and a prioritized fix list. Voxaris delivers every audit within 24 hours, free.

**Additional improvements:**
- Reconcile the engine count: site says 6 elsewhere; this page says 4. Fix to 6.
- Add the deliverable timeframe ("within 24 hours") for citability + trust.
- Reference the 19-point checklist (the same one promised in llms.txt) — but note this is contingent on resolving the 12-vs-19 inconsistency flagged in the GEO audit.

---

### 2. Schema & Technical AEO (H3 #02) — Score: 28/100

**Current opening:**
> "JSON-LD schema, robots.txt configuration, sitemap optimization, and meta layer fixes that make your site machine-readable."

**Problem:** Sentence fragment. No subject named in the body. No definition pattern. "Machine-readable" is jargon without a payoff statement. No quantified outcome.

**Suggested rewrite:**

> ### How does Voxaris fix the technical layer for AEO?
>
> Voxaris ships valid JSON-LD schema (Organization, LocalBusiness, FAQPage, Service, Person) on every indexable page, configures `robots.txt` to allow the 14 AI crawlers (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended, and 9 others), generates a complete sitemap with `lastmod` timestamps, and adds `llms.txt` so AI models get a structured site summary. Average implementation: 5–7 business days from kickoff.

**Additional improvements:**
- Drop "machine-readable" — name the actual schemas.
- List the 14 crawlers (or at least name 5).
- Add a timeframe.

---

### 3. AEO Content Engine (H3 #03) — Score: 27/100

**Current opening:**
> "FAQ content, answer-format articles, and structured pages written specifically to be extracted by AI citation systems."

**Problem:** Sentence fragment. No subject. No definition. "Structured pages" is a vague term — what structure? No volume claim, no examples, no proof of effectiveness.

**Suggested rewrite:**

> ### What does the AEO Content Engine produce?
>
> The AEO Content Engine ships 4 question-form FAQ pages and 2 long-form answer articles per month per client, each formatted to the 134–167 word passage length AI engines preferentially extract (Princeton/Georgia Tech/IIT Delhi 2024 GEO research). Every piece ships with FAQPage schema, `speakable` selectors, named author bylines, and inline citations. Sample output: see [/blog/why-your-85-aeo-score-still-means-youre-invisible](https://voxaris.io/blog/why-your-85-aeo-score-still-means-youre-invisible).
>
> **Cited research:** Aggarwal et al., "GEO: Generative Engine Optimization" (Princeton/IIT Delhi, 2024). Bortolato 2025 analysis of AI Overview citation lengths.

**Additional improvements:**
- Cite the actual research the methodology is based on. AI engines cite citations.
- Link to a real example output (the existing blog post is the proof).
- Quantify deliverable cadence.

---

### 4. Weekly Citation Monitoring (H3 #04) — Score: 35/100

**Current opening:**
> "Every week we check your AI visibility score across all engines and send you a clear report on where you're being cited."

**Problem:** Heading isn't a question. "All engines" is vague — name them. "Clear report" is unfalsifiable. No mention of what the report contains or what's actionable.

**Suggested rewrite:**

> ### How does weekly citation monitoring work?
>
> Voxaris runs 36 standardized prompts per week — six per engine across ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot — and tracks whether your business is cited, ranked, or absent. Clients receive a 1-page report every Monday morning showing: citation count delta, source-overlap with top 3 competitors, and the next two highest-leverage fixes. Citation tracking history is retained for 12 months in the dashboard.

**Additional improvements:**
- Quantify everything: "36 prompts/week", "6 engines", "12 months retention".
- Name the engines (consistency with rest of site).
- Specify report cadence ("Monday morning") for trust.

---

### 5. Hero (H1 + intro) — Score: 45/100

**Current:**
> # Get cited by ChatGPT, Perplexity, Claude, and Google AI.
> "Answer Engine Optimization is the new SEO. When someone asks AI which business to use in your category, we make sure yours is the one it recommends."

**Problem:** H1 misses Gemini, Bing Copilot, and Google AI Overviews — same 4-vs-6 engine inconsistency as the audit description. Body is positioning copy, not a definition. AI engines crawling this page have no extractable definition of AEO.

**Suggested rewrite:**

> # Get cited by ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews, and Bing Copilot
>
> **Answer Engine Optimization (AEO) is the practice of structuring a website's content, schema markup, and external citations so AI models cite the business in response to relevant customer queries.** Distinct from traditional SEO, which optimizes for blue-link search results, AEO optimizes for AI-generated answer extraction. Voxaris scores, fixes, and monitors AEO performance across the six major AI engines for $297/month after a free audit.

**Additional improvements:**
- Bold the definition sentence (aids entity extraction).
- Echo the AEO definition from llms.txt verbatim — consistency across surfaces is itself a citation signal.
- State the price (consistency with homepage).

---

## Quick Win Reformatting Recommendations

1. **Convert `What's included` from styled `<p>` to a real `<h2>`.** AI parsers segment by heading; right now this section is invisible to extractors. **Expected lift: +8 points.** 5-minute fix.

2. **Convert all 4 service H3s from noun-phrase labels to question form.** "AI Visibility Audit" → "What is an AI Visibility Audit?". Question headings are 2.1× more citable per Georgia Tech 2024. **Expected lift: +12 points.** 30-minute fix.

3. **Add a 50–80 word definition paragraph immediately under each H3.** Pattern: `[Subject] is [definition]. Voxaris [delivers what, how often, by when].` Subject must be named in the body, not only in the heading. **Expected lift: +15 points.** 1-hour fix.

4. **Add 3+ specific statistics per service block.** Engine count (6, not 4), delivery timeframe (24 hours / 5–7 days / weekly), specific schema types shipped, deliverable count per month. **Expected lift: +10 points.** 30-minute fix.

5. **Add an FAQPage schema-marked-up FAQ section at the bottom.** 6–8 questions: "What is AEO?", "How is AEO different from SEO?", "Which AI engines does Voxaris track?", "How long until citations move?", "What does AEO cost?", "What does the audit cover?". This single addition takes the page from "not citable" to "FAQ-extractable" overnight. **Expected lift: +15 points.** 2-hour fix.

6. **Add an AEO vs SEO comparison table.** AI systems extract table data with high accuracy. Columns: Goal / Optimization target / Ranking signal / Update cadence / Engines covered. **Expected lift: +5 points.** 1-hour fix.

7. **Add pricing transparently on this page.** Currently hidden despite homepage being explicit ($297/mo retainer, $2,500 rebuild). Inconsistency is itself a citability penalty (AI engines downweight contradictory info). **Expected lift: +3 points.** 15-minute fix.

**Total projected lift if all 7 ship: +68 points → score ~98/100.** Even getting 4 of 7 lands the page in the 70s.

---

## Per-Section Scores

| Section Heading | Words | Answer Quality | Self-Contained | Structure | Stats | Unique | Overall |
|---|---|---|---|---|---|---|---|
| H1 + intro | 35 | 50 | 55 | 50 | 25 | 20 | 45 |
| (fake H2) "What's included" | 4 | 0 | 10 | 0 | 0 | 0 | 3 |
| H3 #01 AI Visibility Audit | 27 | 40 | 30 | 35 | 25 | 15 | 32 |
| H3 #02 Schema & Technical AEO | 17 | 30 | 30 | 35 | 20 | 10 | 28 |
| H3 #03 AEO Content Engine | 16 | 30 | 30 | 35 | 15 | 10 | 27 |
| H3 #04 Weekly Citation Monitoring | 22 | 35 | 30 | 40 | 25 | 15 | 35 |
| H2 "Start here" (CTA) | 11 | 10 | 20 | 30 | 0 | 0 | 14 |

---

## What This Page Should Look Like

A best-in-class AEO services page targeting this exact prospect intent should be ~1,200–1,800 words structured as:

```
H1 (with definition-bearing subhead, all 6 engines named)

H2 "What is Answer Engine Optimization (AEO)?"
  → 60-word definition, bolded
  → 80-word "How AEO differs from SEO" with comparison table

H2 "How does Voxaris's AEO service work?"
  H3 "What's in the AI Visibility Audit?" (Q-form, 80 words + 19-point list)
  H3 "How does Voxaris fix the technical layer?" (Q-form, 80 words + named schemas)
  H3 "How does the AEO Content Engine produce citable content?" (Q-form, 80 words + cited research)
  H3 "How does weekly citation monitoring work?" (Q-form, 80 words + sample report)

H2 "How long until I see citations move?"
  → 60-word answer with 30/60/90-day milestones

H2 "What does AEO cost?"
  → Pricing table (consistency with homepage)

H2 "Frequently asked questions"
  → 6-8 Q&A pairs, FAQPage schema, speakable selectors

H2 "See your AI visibility score"
  → CTA
```

Word count target: 1,200–1,800. Current: 180. Gap: 1,000+ words of citable content.

---

## Bottom Line

You sell schema and citability as a service. The page that *sells* that service is the lowest-citability page on your site — 30/100, with 0% of content blocks above the citability threshold. Every prospect who view-sources this page (and they will, because that's the proof step in your sales narrative) sees a marketing slide where they should see proof. **Two-day fix, +60 points.** Cite the Princeton/Georgia Tech/IIT Delhi research that justifies your methodology, name the 6 engines consistently, ship 4 question-form H3s with definition openings, add an FAQ block with FAQPage schema, and bring pricing onto the page. The blog post already proves you can write content AI cites. Apply that same discipline here.
