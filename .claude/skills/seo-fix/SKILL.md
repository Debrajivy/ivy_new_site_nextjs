---
name: seo-fix
description: Implement developer-approved SEO, AEO and GEO fixes from the Ivy SEO tracker (Google Sheet). Use when the developer says "/seo-fix", "fix the approved SEO rows", "work on SEO-003", or "deployed SEO-003" (post-release verification). Works only on rows with Status Approved, on a new branch, stops at a pull request, and updates the row's Status and PR link.
---

# /seo-fix

You are fixing ivyproschool.com (Next.js) based on an audit produced by the Ivy SEO Autopilot.
The developer is the approver. You prepare; they merge and deploy.

## Settings

- Autopilot folder: read `SEO_AUTOPILOT_DIR` from this repo's `CLAUDE.md` (SEO section). Ask once if it is not set.
- Course facts: `$SEO_AUTOPILOT_DIR/config/course_facts.csv`. Company facts: `lib/company-facts.ts` in this repo.

## Hard rules

1. Never commit to `main`, never merge, never deploy, never force-push, never rewrite history.
2. Implement only batches marked `[x]` in the plan. Ignore everything else, even if it looks easy.
3. Never invent facts. Fees, durations, batch dates, placement figures come only from `course_facts.csv` or `lib/company-facts.ts`. If a value is blank, leave that field out and say so in the PR.
4. Never change a URL or slug. Never add `noindex`. Never add `Disallow: /`. Never remove a canonical, title or JSON-LD block.
5. Keep the diff minimal and scoped to the batch. No drive-by refactors, formatting sweeps or dependency upgrades.
6. If the working tree is dirty or you are not up to date with `main`, stop and tell the developer.
7. Text written for the site follows Ivy voice: plain Indian professional English, no hype words, no em dashes, no emoji.

## Mode A: implement approved batches

1. **Load approved work from the tracker (source of truth).** The Google Sheet ID is `tracker_sheet_id` in `$SEO_AUTOPILOT_DIR/config/site.json`. With the Google Sheets connector read `Tracker!A1:W`. Approved work = rows with Status `Approved` and Platform `Next.js site`. If the developer named row IDs (for example `/seo-fix SEO-003 SEO-005`), use only those, and only if their Status is `Approved`. If none are approved, list the top 5 `To Do` rows by Priority in 5 lines and stop.
   - If the Sheets connector is not available in this session, say so, and fall back to batches ticked `[x]` in the newest `$SEO_AUTOPILOT_DIR/fix-queue/*-fix-plan.md`.
2. **Load the findings.** For each approved row, take its Sync key (column W, `check|platform`) and read every finding in `$SEO_AUTOPILOT_DIR/data/issues_register.json` whose `check` and `owner` match and whose status is `open` or `reopened` (url, detail, fix). Rows for WordPress, Cloudflare, Azure or Marketing are not repo work: say what the owner must do instead.
3. **Locate code.** Find the route and component that render each URL (for example `app/courses/[slug]/page.tsx`, `app/aihelpcenter/...`). Note whether the fix belongs in a shared layout/component (preferred: one change fixes all pages) or per page.
4. **Risk gate.** Read the batch's "Change risk".
   - low: proceed.
   - medium or high: write a short file-level plan (files, what changes, how you will test, how to roll back) into the chat and wait for the developer's "go".
5. **Branch.** `git switch main && git pull --ff-only && git switch -c seo/<YYYY-MM-DD>-<row id lowercase>-<short-slug>` (for example `seo/2026-11-26-seo-003-article-canonicals`; one branch per row; group several low-risk rows into one branch only if the developer asked). In the tracker set that row's Status to `In progress` and Start date to today (write only columns K and L of that row).
6. **Implement.** Templates are in `$SEO_AUTOPILOT_DIR/repo-kit/templates/`. Validate every JSON-LD object you add by building it from typed data, not string concatenation.
7. **Build and test.**
   - `npm run build` (and `npm run lint` / type check if configured). Fix only errors you caused.
   - Start the production build locally (`npm start`, port 3000).
   - `python "$SEO_AUTOPILOT_DIR/run.py" verify --base http://localhost:3000 --expect-fixed <ids> <paths...>` using 3 to 5 representative paths. Paste the output in the PR.
   - If verify shows a new critical finding, fix it or stop and report.
8. **Commit and PR.** `seo(b<N>): <batch title> [<first 5 ids>]`. Push the branch and open a PR with `gh pr create` using this body:

   ```
   ## SEO batch <N>: <title>
   Plan: fix-queue/<file>  |  Findings: <ids>
   ### What changed
   ### Why it matters (one paragraph, plain English)
   ### Files
   ### Verification
   <build result + verify output>
   ### Risk and rollback
   Risk: <low/medium/high>. Rollback: revert this squash commit and redeploy.
   ### After deploy
   Purge in Cloudflare (Caching > Configuration > Custom Purge): <URLs>
   Then tell Claude: "deployed batch <N>"
   ```
9. **Report.** In the tracker row set Status `In review`, PR link (column P) to the PR URL, and add to Developer notes (column O, append, do not overwrite) `Claude: PR opened <date>, <n> URLs, verify passed`. Tell the developer in 3 lines what to review.
   Commit messages and PR titles use the row ID: `seo(SEO-003): self-referencing canonicals on AI Help Center articles`.

## Mode B: "deployed batch N"

1. Ask for or confirm the Cloudflare purge was done.
2. Run verify against `https://ivyproschool.com` with `--expect-fixed`.
3. If fixed: in the tracker row set Status `Deployed` and Done date to today, and append to Developer notes `Claude: verified live <date>`. Add a row to `$SEO_AUTOPILOT_DIR/CHANGELOG.md` (date, row ID, what changed, finding IDs, PR, approver = developer's name, verified live = yes). The next scheduled audit sets Audit check to `Verified fixed`; the developer then sets Status `Done`.
4. If not fixed: check whether the page is still cached (response header `cf-cache-status: HIT`, `age`), and report. Do not change anything.

## Tracker rules (all modes)

- You may write only columns K (Status), L (Start date), N (Done date), O (Developer notes, append only) and P (PR link), and only on rows you are working on in this session.
- Never edit columns Q to U (the scheduled audit owns them), never change ID, Priority, Title or Sync key, never delete rows.

## Mode C: false positives

If the developer sets a row to `Won't fix` with a reason in Developer notes, the next scheduled audit records its findings as accepted automatically. To do it at once, run `python "$SEO_AUTOPILOT_DIR/run.py" accept --key "<sync key>" --reason "<reason>" --by "<developer name>"`.
