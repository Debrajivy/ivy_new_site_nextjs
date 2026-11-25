# ivyproschool.com: notes for Claude

## SEO autopilot

- SEO_AUTOPILOT_DIR: `D:/02-02-2026-ivyprofessionalschool/ivy-seo-autopilot`
- Tracker: https://docs.google.com/spreadsheets/d/1jKgkaGZRsO55s4RqP-9TMYdZTUiAUWA8w9nbs56Wzzs/edit
- SEO fixes follow the `/seo-fix` skill. Approved batches only, one branch per batch, PR for review.
- Deploy command: Netlify auto-deploys on merge to main (preview deploy on every PR).
- Cloudflare caches course and main pages for 4 hours. After deploy, purge the changed URLs.
- Path note: this repo keeps source under `src/` and maps `@/*` to `./src/*`. Wherever the autopilot kit or the `/seo-fix` skill says `lib/company-facts.ts`, use `src/lib/company-facts.ts` (import as `@/lib/company-facts`).

## SEO contract (applies to every change, not only SEO work)

Any change you make in this repo must keep these true. If a task would break one, stop and ask.

1. Every indexable page exports metadata with a unique `title` (about 30 to 60 characters), a `description` (about 120 to 155 characters) and a **self-referencing canonical**. Never point an article's canonical at a hub or listing page.
2. No `noindex` on production pages. `robots.txt` never disallows `/`, `/courses`, `/aihelpcenter` or `/enterprise`.
3. AI crawlers stay allowed: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended, Googlebot, Bingbot, Applebot-Extended. Changing this is a leadership decision, not a code decision.
4. Main content is server-rendered. Course details, FAQs and article text must be in the HTML response, not loaded only by client-side JavaScript. AI crawlers do not run JavaScript.
5. Structured data stays in place: Organization + WebSite on the homepage, Course on every course page, Article on help center articles and case studies, FAQPage where FAQs are shown, BreadcrumbList on deep pages.
6. Company figures come only from `src/lib/company-facts.ts`. Never type a figure (alumni, trainers, hiring companies, placement %, salary hike %, rating, reviews, founding year) directly into a page. Founder: Prateek Agrawal.
7. `public/llms.txt` exists and is updated when courses are added, renamed or removed.
8. New pages are added to the sitemap. Removed pages get a 301 redirect to the closest live page.
9. One H1 per page. Images have alt text. Form fields have labels.

## Approved company facts (only these may appear on the site)

18+ years (since 2008), 37,500+ alumni, 400+ trainers, 500+ hiring companies, 82% placement (overall since 2008), 100% placement assistance, 67% average salary hike, Google rating 4.8/5 from 2,250+ reviews, recognised by MeitY.
The 94% placement figure comes from a recent cohort study. Show it only with that label next to it, for example "94% placement rate (2025 full-time cohort study)". Never write "100% placement" without "assistance".
Do not name enterprise clients on public pages unless marketing confirms approval for that page.
