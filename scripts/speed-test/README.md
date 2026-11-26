# Automated speed test

Tests every page in the sitemap using Google PageSpeed Insights, every Monday
at 03:00 IST. It can also be run by hand.

## What is tested

- Every page listed in `https://ivyproschool.com/sitemap-main.xml` is tested on
  **mobile and desktop** (about 156 pages, 312 tests). New pages are picked up
  automatically once they are in the sitemap.
- The key pages listed under `bothDevices` in `urls.json` get their own table in
  the summary.
- Blog pages (`/blog`) and other hosts are skipped.
- To test a page the sitemap does not list, add it to `extraUrls` in `urls.json`.
  To skip a path, add it to `exclude`.
- A full run takes roughly 30 to 60 minutes. For a quicker run on your computer,
  add `--mobile-only`.

## One-time setup

1. In Google Cloud Console, create or pick a project and enable the
   "PageSpeed Insights API".
2. Create an API key (APIs and Services, Credentials) and restrict it to the
   PageSpeed Insights API only.
3. In GitHub, open the repository, Settings, Secrets and variables, Actions,
   and add a repository secret named `PSI_API_KEY` with the key.

Never put the key in the code or in a message.

## Running it

- **Automatic:** the "Weekly speed test" workflow runs every Monday.
- **On demand:** GitHub, Actions, "Weekly speed test", Run workflow.
  Leave "fail_below" empty to only report. If you enter a score, the run turns
  red when any page scores lower than that.
- **On your computer:** `PSI_API_KEY=your-key node scripts/speed-test/run.mjs`
  - `--dry-run` lists what would be tested without calling Google.
  - `--urls=https://ivyproschool.com/ --strategies=mobile` tests one page.
  - `--mobile-only` tests every page on mobile only (about half the time).

## Where to see results

- The run page in GitHub shows an overview, the 15 slowest mobile pages and the
  key pages table.
- The "speed-report" download on the run page has the full CSV and JSON for
  every page. It is kept for 90 days.

## What the numbers mean

- Score: 0 to 100, higher is better (Google rates 90 and above as good).
- LCP (largest content shown): under 2.5 s is good.
- CLS (layout shift): under 0.1 is good.
- TBT (blocking time): under 200 ms is good.
- TTFB: how fast the server replies.

These are lab results from one test run on Google's machines, so scores move a
few points between runs. Compare trends over several weeks, not single runs.
