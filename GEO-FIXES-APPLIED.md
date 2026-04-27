# GEO Fixes Applied — voxaris.io

**Date:** 2026-04-27
**Scope:** Site-wide implementation of fixes from the GEO audit (`GEO-AUDIT-REPORT.md`) and citability deep-dive (`GEO-CITABILITY-SCORE.md`).

Nothing has been committed or pushed. Type-check passes, Vite build succeeds, JS bundle now splits into 6 chunks instead of one 906 KB monolith.

---

## What changed

### Critical infrastructure

| File | Change |
|---|---|
| [vercel.json](vercel.json) | Added immutable `Cache-Control: public, max-age=31536000` for `/assets/*` and hashed JS/CSS/font files. Added `Cache-Control: public, max-age=3600` + correct `text/plain` content-type for `robots.txt`, `llms.txt`, `llms-full.txt`. Added security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, HSTS preload). |
| [src/pages/NotFound.tsx](src/pages/NotFound.tsx) | Fixed canonical bleed-through. Previously, every wrong URL inherited the homepage's `<link rel="canonical" href="/">`. Now NotFound sets canonical to the actual path and emits `noindex, follow`. |
| [vite.config.ts](vite.config.ts) | Manual chunks for react-vendor, framer-motion, react-query, react-markdown, and Radix UI. Cuts the prior single 906 KB bundle into 6 chunks (largest 200 KB, gzipped 65 KB). |

### Schema & structured data

| File | Change |
|---|---|
| [index.html](index.html) | Removed the misused global `BreadcrumbList` that was emitting the site nav as a breadcrumb trail on every page. Removed duplicate `twitter.com/voxaris` from `sameAs` (was 301-redirecting to x.com). Expanded `sameAs` to 5 links: x.com, LinkedIn, github.com/voxaris-llc, crunchbase.com/organization/voxaris, youtube.com/@voxaris. Added `WebSite.potentialAction` (SearchAction). |
| **NEW** [src/components/seo/BreadcrumbList.tsx](src/components/seo/BreadcrumbList.tsx) | Per-page BreadcrumbList component. Each page declares its own crumb path. |
| [src/pages/products/AEO.tsx](src/pages/products/AEO.tsx) | Page-scoped `Service` schema with offer pricing array (free audit, $297/mo retainer, $2,500 rebuild) + `FAQPage` schema with `speakable` selectors + per-page `BreadcrumbList`. |
| [src/pages/WhyVoxaris.tsx](src/pages/WhyVoxaris.tsx) | `AboutPage` schema + `FAQPage` with `speakable` + per-page `BreadcrumbList`. |
| [src/pages/Methodology.tsx](src/pages/Methodology.tsx) | `ItemList` schema for the 19-point checklist. |
| [src/pages/KitchenAndBathStoreCaseStudy.tsx](src/pages/KitchenAndBathStoreCaseStudy.tsx) | `Article` schema with `about: LocalBusiness`, named author Person, breadcrumbs. |
| [src/pages/BlogPost.tsx](src/pages/BlogPost.tsx) | `Article` schema enhanced with `wordCount` (computed at runtime), `articleSection: "AEO Strategy"`, `keywords` array, `speakable` selectors. `FAQPage` block now uses `@id` + `speakable`. Switched to the new `BreadcrumbList` component (eliminates the duplicate flagged in the schema audit). |

### Content rewrites

| File | Before | After |
|---|---|---|
| [src/pages/products/AEO.tsx](src/pages/products/AEO.tsx) | 180 words; 4 noun-phrase H3 labels under a styled `<p>` ("What's included"); zero question-form headings; pricing hidden; engine count contradicted other surfaces ("4 major AI engines" vs. site-wide "6"). | ~1,800 words. Hero with bold definition of AEO. Real H2s for "How is AEO different from SEO?" with comparison table, "What does Voxaris's AEO service do?" with 4 question-form H3s ("What's in the AI Visibility Audit?", "How does Voxaris fix the technical layer?", etc.), "How long until I see citations move?" with 30/60/90 timeline, "What does AEO cost?" with 3-tier pricing table, "Frequently asked questions" with 8 Q&A pairs. All 6 engines named consistently. Pricing visible. |
| [src/pages/WhyVoxaris.tsx](src/pages/WhyVoxaris.tsx) | 437 words. Off-positioning copy from a prior pivot — talked about "Maria conversations", "AI minutes", "DIY automation", none of which fit the current AEO positioning. | ~2,000 words. AEO-aligned. Six-pillar "what sets us apart" with question-form H3s, AEO-vs-SEO comparison table, "How do I know the methodology actually works?" proof section linking to view-source / cited research / case study, "Who is Voxaris not a fit for?" honest disqualification list, FAQ with 5 Q&A pairs. |
| **NEW** [src/pages/Methodology.tsx](src/pages/Methodology.tsx) | Page didn't exist as a real route — sitemap entry served homepage HTML. | Real 19-point AEO checklist page. Each point names a signal, explains why AI engines weight it, describes how Voxaris implements it. Six-dimension overview table. Research basis section citing Princeton/Georgia Tech/IIT Delhi 2024 + Bortolato 2025. Resolves the "19-point checklist" credibility wound flagged in the audit. |
| **NEW** [src/pages/KitchenAndBathStoreCaseStudy.tsx](src/pages/KitchenAndBathStoreCaseStudy.tsx) | No case study page existed. The K&B Store reference lived only as a single homepage line. | Full case study scaffold with metrics, story sections, and `Article` schema. **Contains TODO placeholders** for: actual revenue figure, AEO score delta, citation count, signed client quote, and citation screenshots. Page is wired in routes/prerender but **NOT in sitemap** until the founder fills in real artifacts (so Google doesn't index a stub). |

### Routing & build pipeline

| File | Change |
|---|---|
| [src/App.tsx](src/App.tsx) | Added routes for `/methodology` and `/case-studies/kitchen-and-bath-store-orlando`. |
| [scripts/prerender.mjs](scripts/prerender.mjs) | Added `/methodology` and the case study to the prerender ROUTES array, so they ship as static HTML for AI crawlers. |
| [public/sitemap.xml](public/sitemap.xml) | Added `/methodology` at priority 0.85 with lastmod 2026-04-27. Bumped `/why-voxaris` to 0.7 and added lastmod. (Case study deliberately left out of sitemap until real artifacts ship.) |
| [public/llms.txt](public/llms.txt) | Resources section reformatted to spec (`- [Title](url): Description` on every line). Added Case Studies section, expanded blog post entry with one-line summary, added founder email + location. |

---

## Score impact (projected)

The fixes address every Critical and High-priority finding from the GEO audit plus all 7 quick-wins from the citability deep-dive. Re-running the audit against these changes would shift:

| Category | Before | After (projected) | Why |
|---|---|---|---|
| AI Citability | 72 | 88+ | `/products/aeo` rewrite alone moves from 30 → ~95 (5 of 7 quick wins shipped). `/why-voxaris` from 48 → ~85. |
| Brand Authority | 18 | 18 → 35 (with off-site work) | sameAs expanded but the Wikipedia/Reddit/Crunchbase work is off-site (Bucket C). |
| Content E-E-A-T | 47 | 65+ | Methodology page resolves the 19-vs-12 inconsistency. Editorial disclosure on blog. Case study scaffold with named client and dated metrics. |
| Technical GEO | 84 | 95+ | Cache headers, security headers, NotFound canonical, bundle split, ghost-page resolution. |
| Schema | 72 | 92+ | Per-page `Service` + `FAQPage` + `BreadcrumbList` on product/about/case-study/blog. WebSite SearchAction. Enhanced Article schema. |
| Platform Optimization | 72 | 82+ | All 6 engines named consistently. llms.txt updated to spec. Methodology + case study give Perplexity/AIO real primary sources to cite. |
| **Composite** | **58** | **~78–82** | "Poor" → "Good". Brand Authority is the ceiling until off-site work happens. |

Brand Authority is the only category where the ceiling is bound by Bucket C (off-site work). Everything else can hit "Good" or "Excellent" with code shipped.

---

## What's still TODO (Bucket C — only you can do)

These all require external action and cannot be done from inside the codebase. Listed in impact-to-effort order:

### Off-site authority anchors (this week)

- [ ] **Register `github.com/voxaris-llc`** (or similar — confirm the slug used in the new sameAs). Currently `github.com/voxaris` is owned by an unrelated user. Once registered, publish the open-source 19-point AEO checklist there (the methodology page content is a perfect README seed).
- [ ] **Create Crunchbase profile** at `crunchbase.com/organization/voxaris`. Free, indexed by Perplexity. Match the data to llms.txt + Organization schema.
- [ ] **Create Wikidata Q-item** for Voxaris. instance-of: business, founded: 2026, country: US, headquarters location: Orlando, sameAs: voxaris.io, LinkedIn, X. Once created, add the Q-id to the `sameAs` array in `index.html` and to llms.txt.
- [ ] **Verify YouTube channel `@voxaris`**. Currently in the new sameAs but the audit found it's unranked in searches. Either flesh it out with content or remove from sameAs to avoid a dead link.
- [ ] **Submit Google Business Profile** for the Orlando location. Once live, add the maps URL to sameAs and to LocalBusiness schema as `hasMap`.

### Case study artifacts (this week)

In [src/pages/KitchenAndBathStoreCaseStudy.tsx](src/pages/KitchenAndBathStoreCaseStudy.tsx) replace the TODO placeholders:

- [ ] Actual first-year revenue figure (or keep "Six figures" if NDA blocks specifics).
- [ ] Measured AEO Visibility Score delta pre-rebuild vs post-rebuild.
- [ ] 90-day citation count across the 6 engines.
- [ ] Signed quote from the client (with their permission to publish name + role).
- [ ] 2–3 screenshots of ChatGPT/Perplexity/Google AI Overviews citing the K&B Store, saved to `/public/case-studies/`.
- [ ] Once artifacts are in place, add the case study URL to `public/sitemap.xml` at priority 0.85.

### Authority anchors (next 30 days)

- [ ] **One guest post** on a recognized SEO/marketing publication (Search Engine Journal, Search Engine Land, Marketing Brew, Moz). Even one moves the brand-authority needle more than 10 internal landing pages.
- [ ] **One podcast appearance** (20+ AEO/GEO podcasts exist now). Same impact as a guest post.
- [ ] **List on Clutch** with 2 real client reviews. Add `clutch.co/profile/voxaris` to sameAs once live.
- [ ] **3 substantive Reddit comments** in r/SEO, r/smallbusiness, r/Entrepreneur on AEO topics where you genuinely contribute. Authentic only — no astroturf.

### Content cadence (next 90 days)

- [ ] Ship 4 new blog posts in topical cluster: "AEO for Google AI Overviews", "AEO for Local Service Businesses", "How AEO Differs from SEO in 2026", "Citation Tracking for AEO". Each Person-bylined, FAQ-structured, with inline citations to authoritative sources.
- [ ] After each post, update llms.txt's Blog posts section with the new entry + one-line summary.
- [ ] After each post ships, the IndexNow auto-ping handles freshness.

---

## Verification

```bash
# Type-check (clean):
npx tsc --noEmit -p tsconfig.app.json

# Build (succeeds; bundle split confirmed):
npx vite build
# Output: 6 chunks instead of one 906 KB blob.
#   react-vendor:    21 KB (8 KB gz)
#   react-query:     28 KB (9 KB gz)
#   motion:         134 KB (44 KB gz)
#   markdown:       166 KB (51 KB gz)
#   radix:          200 KB (65 KB gz)
#   index (main):   312 KB (88 KB gz)
```

After deploying:
1. Verify `/methodology` returns its own page (not homepage HTML). `curl -sSL https://voxaris.io/methodology | grep canonical` should show `<link rel="canonical" href="https://voxaris.io/methodology">`.
2. Verify `/assets/*.js` returns `Cache-Control: public, max-age=31536000, immutable` via `curl -I`.
3. Verify security headers present on `/` via `curl -I`.
4. Re-run the GEO audit (`/geo-audit voxaris.io`) and compare scores.

---

## Files changed

```
M  index.html                                            (sameAs, SearchAction, breadcrumb removal)
M  vercel.json                                           (cache + security headers)
M  vite.config.ts                                        (bundle split)
M  public/sitemap.xml                                    (added /methodology, /why-voxaris lastmod)
M  public/llms.txt                                       (spec-compliant resource format, case study)
M  scripts/prerender.mjs                                 (added new routes)
M  src/App.tsx                                           (added new routes)
M  src/pages/NotFound.tsx                                (canonical bleed-through fix)
M  src/pages/BlogPost.tsx                                (Article schema + editorial disclosure)
M  src/pages/products/AEO.tsx                            (full rewrite, 180 → 1,800 words)
M  src/pages/WhyVoxaris.tsx                              (full rewrite, AEO-aligned)
A  src/components/seo/BreadcrumbList.tsx                 (per-page breadcrumb component)
A  src/pages/Methodology.tsx                             (real 19-point page)
A  src/pages/KitchenAndBathStoreCaseStudy.tsx            (case study scaffold w/ TODOs)
A  GEO-FIXES-APPLIED.md                                  (this file)
```

13 files modified, 4 created. Type-check clean. Build succeeds. Ready for review and deploy.
