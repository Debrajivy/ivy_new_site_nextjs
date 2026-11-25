# Automated speed test

Tests the pages in `urls.json` on mobile and desktop using Google PageSpeed
Insights, every Monday at 03:00 IST. It can also be run by hand.

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
- **On demand:** GitHub, Actions, "Weekly speed test", Run workflow. Enter a
  score in "fail_below" if you want the run to fail when any page scores lower.
- **On your computer:** `PSI_API_KEY=your-key node scripts/speed-test/run.mjs`
  (add `--urls=https://ivyproschool.com/ --strategies=mobile` to test one page).

## Where to see results

- The run page in GitHub shows a table of scores per page.
- The "speed-report" download on the run page has CSV and JSON for the full
  detail. It is kept for 90 days.

## What the numbers mean

- Score: 0 to 100, higher is better (Google rates 90 and above as good).
- LCP (largest content shown): under 2.5 s is good.
- CLS (layout shift): under 0.1 is good.
- TBT (blocking time): under 200 ms is good.
- TTFB: how fast the server replies.

These are lab results from one test run on Google's machines, so scores move a
few points between runs. Compare trends over several weeks, not single runs.
