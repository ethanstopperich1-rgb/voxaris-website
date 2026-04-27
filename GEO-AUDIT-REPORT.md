# GEO Audit Report: Voxaris

**Audit Date:** 2026-04-27
**URL:** https://voxaris.io
**Business Type:** Agency / Services with SaaS attributes (audit funnel + dashboard product)
**Pages Analyzed:** 6 (`/`, `/products/aeo`, `/products/talking-postcard`, `/blog/why-your-85-aeo-score-still-means-youre-invisible`, `/why-voxaris`, `/methodology`) plus `/robots.txt`, `/sitemap.xml`, `/llms.txt`

---

## Executive Summary

**Overall GEO Score: 58/100 (Poor)**

The technical foundation is genuinely best-in-class — robots.txt explicitly opens 14 AI crawlers, llms.txt is comprehensive, prerender ships real HTML with rich JSON-LD, IndexNow auto-pings on deploy, sitemap is clean. Voxaris is doing the *engineering* of AEO better than 95% of sites. The score is dragged down by the two pillars no amount of code can fix in a week: **Brand Authority (18/100)** — Voxaris does not yet exist as an entity to AI models, with no Wikipedia, no Reddit footprint, no Crunchbase, and the GitHub namespace squatted by strangers — and **Content E-E-A-T (47/100)** — one blog post, no real case-study artifacts, no external authority anchor, and a self-inflicted credibility wound where "19-point checklist" claimed in marketing copy and llms.txt resolves to 12 unlabeled bullets on the methodology page. Until the off-site authority gap closes, ChatGPT and Perplexity will keep recommending HubSpot and Moz when prospects ask "who does AEO in Orlando."

### Score Breakdown

| Category | Score | Weight | Weighted |
|---|---|---|---|
| AI Citability | 72/100 | 25% | 18.0 |
| Brand Authority | 18/100 | 20% | 3.6 |
| Content E-E-A-T | 47/100 | 20% | 9.4 |
| Technical GEO | 84/100 | 15% | 12.6 |
| Schema & Structured Data | 72/100 | 10% | 7.2 |
| Platform Optimization | 72/100 | 10% | 7.2 |
| **Overall GEO Score** | | | **58.0/100** |

---

## Critical Issues (Fix Immediately)

| # | Issue | Page(s) | Fix |
|---|---|---|---|
| C1 | **Zero third-party entity recognition.** Wikipedia API has no "Voxaris" entry. Reddit has no posts referencing voxaris.io. Crunchbase, G2, Capterra, Clutch all empty. AI models have no external anchor to confirm Voxaris exists. | All | This week: create Crunchbase profile (free, indexed by Perplexity), seed a Wikidata Q-item (founded 2026, instance-of:business, sameAs to LinkedIn/X/site), get one Reddit footprint via authentic discussion in r/SEO or r/marketing where AEO comes up. |
| C2 | **GitHub namespace collision.** `github.com/voxaris` is owned by an unrelated user; `github.com/Voxaris-AI` and `bradnbelew/voxaris-website` exist but aren't yours. AI models scraping GitHub for org provenance get the wrong company. | n/a | Register `github.com/voxaris-llc` (or similar) immediately. Publish the open-source AEO checklist there as a citation magnet. |
| C3 | **`/methodology` canonical points to `/`.** Curl confirms `<link rel="canonical" href="https://voxaris.io/">` on the methodology page. Google will treat it as a duplicate of homepage and likely deindex. **Risk:** this is probably a default-fallback bug in the prerender pipeline — audit *every* non-home route. | `/methodology` (verify others) | In prerender / route metadata, set per-page canonical. Test all 19 sitemap URLs. |
| C4 | **"19-point checklist" doesn't exist.** Homepage and llms.txt advertise "19-point AEO checklist." Methodology page actually shows 12 unlabeled bullets. AI models cross-referencing llms.txt vs page content will catch the contradiction and downweight expertise. | `/methodology`, `/llms.txt`, homepage | Either expand methodology to a real numbered 19-point page (each point ≈ 100 words: signal, why it matters, how Voxaris measures it) or revise the marketing copy to match what's there. Two-hour fix. |
| C5 | **No real case-study page for The Kitchen and Bath Store of Orlando.** Currently a single line on the homepage claiming "six figures in revenue first year." This is the strongest Experience artifact you have, and it lives nowhere AI can cite it. | n/a (missing page) | Build `/case-studies/kitchen-and-bath-store-orlando` with: client name, signed quote, before/after citation screenshots from ChatGPT/Perplexity/Google AIO, dated metrics, methodology behind "six figures." Mark up with `CaseStudy` + `Review` schema. Link from llms.txt. |

---

## High Priority Issues

| # | Issue | Page(s) | Fix |
|---|---|---|---|
| H1 | **`/products/aeo` and `/why-voxaris` are not citable.** 366 and 437 words; zero question-form H2s; marketing prose with no extractable definitions. AI engines have nothing to quote from your two most important conversion pages. | `/products/aeo`, `/why-voxaris` | Rewrite each to 1,200+ words with 6+ question-form H2s and a 40–60-word definition paragraph immediately under each. Copy the structure of the blog post — it's already proving the pattern works. |
| H2 | **`Cache-Control: max-age=0, must-revalidate` on Vite-hashed `/assets/*`.** These are immutable hashed bundles; current headers force revalidation of a 906 KB JS bundle on every repeat visit. Free CWV win. | All assets | Add to `vercel.json`: `headers` rule for `/assets/(.*)` setting `Cache-Control: public, max-age=31536000, immutable`. |
| H3 | **906 KB single JS bundle.** Likely framer-motion + React + all routes unsplit. INP/LCP risk on mobile. | All | `build.rollupOptions.output.manualChunks` in `vite.config.ts` to split framer-motion, react-vendor, route code. Lazy-load route components with `React.lazy`. |
| H4 | **`BreadcrumbList` is misused on every non-blog page.** The 7-item site nav (Home, How It Works, AEO Services, Talking Postcard, Websites, Staffing, Book a Demo) is being emitted as `BreadcrumbList`. It is not a breadcrumb trail. Google's docs require breadcrumbs to reflect the path to the current page. | `/`, `/products/aeo`, `/products/talking-postcard`, `/why-voxaris` | Replace with proper per-page breadcrumbs. `/products/aeo` should be `Home > Products > AEO Services`. Stop emitting site nav as `BreadcrumbList`. |
| H5 | **Duplicate `BreadcrumbList` on the blog post.** Blog post emits both the global nav-crumb and a correct article crumb. Schema validators will warn; AI extractors get conflicting signals. | `/blog/why-your-85...` | Remove the global nav-crumb on the blog template; keep only the per-article one. |
| H6 | **`sameAs` is dangerously thin.** Only 3 links: `twitter.com/voxaris`, `x.com/voxaris` (the same entity twice — twitter.com 301s to x.com), `linkedin.com/company/voxaris-ai-solutions`. Your own blog post tells readers to ship 5+. Self-inflicted credibility wound. | All (Organization JSON-LD) | Drop the duplicate twitter.com. Add `github.com/voxaris-llc`, `crunchbase.com/organization/voxaris`, Google Business Profile maps URL, future Wikidata Q-id. |
| H7 | **No page-specific `Service` schema on product pages.** `/products/aeo` and `/products/talking-postcard` only have a shared `ItemList` of all 5 services repeated identically on every page. AI engines have no signal that `/products/aeo` is *the* canonical page for the AEO Service entity. | `/products/aeo`, `/products/talking-postcard` | Add page-scoped `Service` block with `@id="https://voxaris.io/products/aeo#service"`, linked to `provider: { @id: organization }`, with `offers` containing `priceSpecification`. |
| H8 | **No `FAQPage` schema on product pages.** Q&A content already exists in copy; not marked up. | `/products/aeo`, `/products/talking-postcard` | Mirror homepage `FAQPage` pattern, page-scoped. Add `speakable` with `cssSelector` targeting answer DOM. |
| H9 | **No external authority anchor.** No podcast appearance, no guest post on a recognized SEO/marketing publication, no Clutch/G2/Capterra listing, no press. With a 2026-founded company this is the single biggest determinant of citation share. | n/a | Pick the cheapest win: Clutch profile + 2 real reviews, OR one guest post (Search Engine Journal, Search Engine Land, Marketing Brew), OR one podcast appearance on an AEO/GEO podcast. Any of these beats 10 more landing pages. |

---

## Medium Priority Issues

| # | Issue | Fix |
|---|---|---|
| M1 | **Security headers missing.** Only HSTS present. No CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy. Lighthouse Best-Practices hit + trust signal. | `vercel.json` `headers` block for `/(.*)`: `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`. Defer CSP if it would break GTM. |
| M2 | **llms.txt resource links lack descriptions.** Spec calls for `- [Title](url): Description`. Several entries are bare URLs. Blog index lists only one post; sitemap has more. | Add a one-sentence description after each link. Expand "Blog posts" section to mirror sitemap. |
| M3 | **Article schema missing GEO-critical properties.** No `wordCount`, `articleSection`, `keywords`, `speakable`. `image` is the generic OG image, not an article-specific hero. | Add to blog Article block: `wordCount: 2200`, `articleSection: "AEO Strategy"`, `keywords: [...]`, `speakable: { cssSelector: ["article h1", "article .tldr", "article h2"] }`, article-specific `image`. |
| M4 | **`WebSite` missing `potentialAction` (SearchAction).** Trivial, present on most sites. | Add `potentialAction` with `target` `urlTemplate: "https://voxaris.io/search?q={search_term_string}"`. |
| M5 | **Topical hub is thin.** One blog post. AEO has 30+ obvious sub-pillars (schema for each engine, llms.txt patterns, citation tracking, robots.txt for AI bots, FAQ schema, GBP for AEO). Perplexity and Gemini both weight topical clustering heavily. | Ship 8–12 spoke pages over 2–3 months, each Person-bylined with FAQ schema and inline citations. |
| M6 | **No verifiable case study with named client.** Blog post has 4 mini-cases (Orlando dental, Tampa HVAC, Miami immigration, Austin SaaS) — all anonymized. ChatGPT can't verify anonymized claims. | One named client with quote and dated outcomes is worth more than ten anonymized examples. |

---

## Low Priority Issues

| # | Issue | Fix |
|---|---|---|
| L1 | **Preconnect tags don't appear in served HTML.** Recently added in `index.html`; either prerender stripped them or they haven't deployed yet. | Verify `<link rel="preconnect">` tags survive the puppeteer prerender. If not, add them in the prerender script's HTML template. |
| L2 | **No phone or street address.** Email-only contact. NAP completeness is a trust gate for AI engines on local services. | Add a phone number (Google Voice is fine) and either a P.O. Box or coworking-space street address. |
| L3 | **No editorial / affiliate disclosure on the blog.** Author IS the founder of the tool described. AI engines weight transparency disclosures. | Add a one-line disclosure at the top of the blog template: "Written by Ethan Stopperich, founder of Voxaris." |
| L4 | **`/products/aeo` hides pricing.** Homepage shows pricing transparently ($297/mo, $2,500 rebuild). Product page does not. Inconsistent. | Bring pricing onto the product page in `Offer` schema and visibly in copy. |
| L5 | **Heavy `Organization` block duplicated on every page.** Multi-typed Org+ProfessionalService+LocalBusiness with full `makesOffer`, `hasOfferCatalog`, `areaServed` repeated on all 5 pages. Valid because of shared `@id`, but bloats every page ~5KB. | Keep the full block on `/` only; emit a stub `{"@id":"https://voxaris.io/#organization"}` reference elsewhere. |

---

## Category Deep Dives

### AI Citability (72/100)

Sampled live as `User-Agent: GPTBot` — all pages return 200 with full prerendered HTML, no `X-Robots-Tag` blockers.

| Page | Words | Q-headings | Score | Notes |
|---|---|---|---|---|
| `/` | 1,852 | 11 | 78 | Strong FAQ block. Each answer 1–3 sentences, self-contained. |
| `/blog/why-your-85-aeo-score…` | 2,409 | 11 | 84 | Best-in-class. Numbered "7 Gaps" list, named cases, dated examples. AI can quote any sub-section. |
| `/products/aeo` | 366 | 0 | 52 | Thin. No question H2s, mostly nav/CTAs. |
| `/why-voxaris` | 437 | 0 | 48 | Slogan-heavy. Citation-unlikely. |

The blog post is the unsung hero — copy its structure to product pages.

### Brand Authority (18/100)

Definitive checks (not search inference):

| Platform | Status | Evidence |
|---|---|---|
| Wikipedia | Absent | API for "Voxaris" returns 1 hit (Manx language). `/wiki/Voxaris` returns 404. |
| Reddit | Absent | `q=voxaris` returns 10 results — none about this company. `q="voxaris.io"` returns zero. |
| YouTube | Minimal | `@voxaris` channel exists; unranked in searches. |
| LinkedIn | Unknown | Company page exists; full assessment blocked by anti-bot. |
| GitHub | **Namespace collision** | `github.com/voxaris` and `Voxaris-AI` belong to other entities. |
| Crunchbase | Absent | No public profile. |
| G2 / Capterra / Clutch | Absent | No listings. |

This is the single biggest score-mover available. It's also the slowest to fix because it requires earning external mentions, not writing more code.

### Content E-E-A-T (47/100)

| Pillar | Score | Verdict |
|---|---|---|
| Experience | 11/25 | One real client (K&B Store) plus 4 anonymized blog mini-cases. No screenshots, no video walkthroughs, no public dashboard previews. Rich claims, thin proof artifacts. |
| Expertise | 13/25 | Founder bio + Person schema + named author byline solid. Methodology page reads expert-adjacent but stops at labels — "19-point checklist" claim doesn't resolve. One blog post is not enough surface area. |
| Authoritativeness | 8/25 | Realistic for a 2026-founded company. Zero off-site validation. LinkedIn is the only off-site signal. AI weights off-site corroboration heavily. |
| Trustworthiness | 15/25 | Strongest pillar. HTTPS, founder email, Privacy/Terms/SMS Terms, transparent homepage pricing. Gaps: no phone, no street address, no editorial/affiliate disclosure on blog. |

Fastest path from 47 → 70+ is one real case study page + one external authority anchor + closing the 19-vs-12 inconsistency.

### Technical GEO (84/100)

| Component | Score |
|---|---|
| Crawlability | 100/100 — all 19 sitemap URLs return 200; robots.txt explicitly whitelists 14 AI bots |
| Indexability / SSR | 95/100 — `data-prerendered="true"`; full HTML on every page; **wrong canonical on `/methodology`** |
| Security Headers | 35/100 — only HSTS |
| Performance / CWV | 70/100 — 906KB JS bundle, `max-age=0` on hashed assets, no preconnects in served HTML |
| Mobile | 100/100 |
| JS-Dependency | 100/100 — non-JS readers (ClaudeBot/GPTBot/PerplexityBot) get full content |

For an AEO company the JS-dependency story is exactly right. The two findings that should not survive the week are the `/methodology` canonical bug (likely affects more routes — audit them all) and `Cache-Control: max-age=0` on `/assets/*`.

### Schema & Structured Data (72/100)

Per-page coverage matrix:

| Page | Org/LB | WebSite | Breadcrumb | Page-Specific | FAQPage | Author |
|---|---|---|---|---|---|---|
| `/` | ✓ multi | ✓ | ⚠ misused as nav | FAQPage, ItemList, SoftwareApplication | ✓ (8) | Founder Person |
| `/products/aeo` | ✓ dup | ✓ dup | ⚠ same global | ItemList only | ✗ | n/a |
| `/products/talking-postcard` | ✓ dup | ✓ dup | ⚠ same global | ItemList only | ✗ | n/a |
| `/blog/why-your-85...` | ✓ dup | ✓ | ⚠ DUPLICATE | Article | ✓ (6) | ✓ linked `@id` |
| `/why-voxaris` | ✓ dup | ✓ dup | ⚠ same global | none | ✗ | n/a |

Bones are solid. Three "the cobbler's children" gaps: thin `sameAs`, `BreadcrumbList` misused as site nav on every page, no page-specific `Service` or `FAQPage` on product pages — exactly what Voxaris evangelizes to clients.

### Platform Optimization (72/100)

| Platform | Score | Status |
|---|---|---|
| Google AI Overviews | 74/100 | Good. Blog post is textbook AIO bait. `/products/aeo` lacks question H2s + FAQPage. |
| ChatGPT (web search) | 68/100 | Fair. OAI-SearchBot allowed; no Wikidata Q-item; anonymized case studies. |
| Perplexity | 62/100 | Fair. PerplexityBot allowed; no Reddit/forum signals; thin topical hub. |
| Google Gemini | 70/100 | Good. Schema-rich; no YouTube; topical depth limited. |
| **Bing Copilot** | **86/100** | **Excellent.** IndexNow + schema density + msvalidate-friendly. Should be your strongest channel. |

Bing Copilot is your best channel by margin — lean into it. LinkedIn completeness is the marginal next gain there.

---

## Quick Wins (Implement This Week)

1. **Fix `/methodology` canonical + audit every route for the same bug** — half day. Unblocks indexability of one or more pages today being treated as homepage duplicates.
2. **Add immutable Cache-Control on `/assets/*`** — 5 minutes in `vercel.json`. Free CWV improvement on every repeat visit.
3. **Expand `sameAs` to 6+ links** — drop duplicate twitter.com, add `github.com/voxaris-llc` (after registering it), Crunchbase placeholder, GBP maps URL. 30 minutes.
4. **Fix `BreadcrumbList`** — replace site-nav-as-breadcrumb with proper per-page breadcrumbs. Remove the duplicate on the blog post. 1–2 hours.
5. **Resolve "19-point" vs "12-point" inconsistency** — either build the real 19-point methodology page or revise marketing copy. 2 hours either way.

---

## 30-Day Action Plan

### Week 1 — Technical Sprint (close the easy wins)
- [ ] Fix canonical bug on all non-home routes
- [ ] Add immutable cache headers for `/assets/*`
- [ ] Add security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy)
- [ ] Verify preconnects survive prerender (or add them in prerender HTML template)
- [ ] Split JS bundle: framer-motion + react-vendor + route-level chunks
- [ ] Expand `sameAs` (drop dup twitter.com; add GitHub, Crunchbase, GBP)
- [ ] Fix `BreadcrumbList` per page; remove duplicate on blog post
- [ ] Add `WebSite` `potentialAction` (SearchAction) site-wide

### Week 2 — Content + Schema (close the citability gaps)
- [ ] Rewrite `/products/aeo` to 1,200+ words with 6+ question H2s + FAQ
- [ ] Rewrite `/why-voxaris` to 1,200+ words with question H2s
- [ ] Add page-specific `Service` schema on `/products/aeo` and `/products/talking-postcard`
- [ ] Add `FAQPage` + `speakable` to product pages
- [ ] Beef up Article schema on blog post (`wordCount`, `articleSection`, `keywords`, `speakable`)
- [ ] Build `/case-studies/kitchen-and-bath-store-orlando` with screenshots, named client quote, methodology, `CaseStudy` + `Review` schema
- [ ] Resolve "19-point" claim — build the real 19-point methodology page
- [ ] Bring pricing onto `/products/aeo` (consistency with homepage)
- [ ] Add editorial/affiliate disclosure to blog template
- [ ] Add phone number + physical address to LocalBusiness schema

### Week 3 — Off-Site Authority (close the brand gap)
- [ ] Register `github.com/voxaris-llc` (or similar); push the open-source 19-point checklist
- [ ] Create Crunchbase profile (free, indexed by Perplexity)
- [ ] Submit Wikidata Q-item (founded 2026, instance-of:business, sameAs LinkedIn/X/site)
- [ ] List on Clutch with 2 real client reviews
- [ ] Pitch one guest post (Search Engine Journal, Search Engine Land, Marketing Brew, or Moz)
- [ ] Pitch one podcast appearance (20+ AEO/GEO podcasts exist)
- [ ] Authentic Reddit footprint: 2-3 substantive comments in r/SEO, r/smallbusiness, r/Entrepreneur on AEO topics where you're genuinely helpful

### Week 4 — Topical Hub + Cadence
- [ ] Ship 4 new blog posts in cluster: "AEO for Google AI Overviews", "AEO for Local Service Businesses", "How AEO Differs from SEO in 2026", "Citation Tracking for AEO"
- [ ] Each post: Person-bylined with credentials, FAQ schema, `speakable`, inline citations to authoritative sources
- [ ] Update llms.txt to reflect new posts with descriptions
- [ ] Set up monthly cadence for at least one new post per week through Q3

---

## Appendix: Pages Analyzed

| URL | Title | Notable Issues |
|---|---|---|
| https://voxaris.io/ | Voxaris \| Is AI recommending your business or your competitors? | BreadcrumbList misuse; sameAs thin |
| https://voxaris.io/products/aeo | Products / AEO | No question H2s; no Service schema; no FAQPage; pricing hidden |
| https://voxaris.io/products/talking-postcard | Products / Talking Postcard | Same as `/products/aeo` |
| https://voxaris.io/blog/why-your-85-aeo-score-still-means-youre-invisible | Why Your 85/100 AEO Score Doesn't Equal AI Visibility | Best citability of any page; duplicate BreadcrumbList; Article schema missing properties |
| https://voxaris.io/why-voxaris | Why Voxaris | Slogan-heavy; 437 words; not citable |
| https://voxaris.io/methodology | Methodology | **Canonical points to `/`** (deindex bug); "19-point checklist" claim resolves to 12 unlabeled bullets |

### Robots.txt
Best-in-class. Explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, ClaudeBot, Claude-Web, anthropic-ai, Google-Extended, Applebot-Extended, CCBot, Bytespider, Meta-ExternalAgent. No disallows. Sitemap declared.

### llms.txt
~3,500 chars at `Content-Type: text/plain`. `llms-full.txt` also present. Conforms to spec: H1, blockquote summary, H2-organized sections. Includes Company, Founder, Key Terms, three-tier offer with prices, Verified Results, FAQ, Resources. **Two minor gaps:** Resources lines lack the `- [Title](url): Description` format; Blog posts section advertises only one post when sitemap has more.

### Sitemap.xml
19 URLs, well-prioritized (homepage 1.0, products 0.8–0.9, contact 0.7, privacy/terms 0.3). 12 entries with lastmod 2026-04-22/24; 7 entries lack lastmod (consider adding).
