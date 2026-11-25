// Automated speed test using the Google PageSpeed Insights API.
//
// Usage:
//   PSI_API_KEY=xxxx node scripts/speed-test/run.mjs
//   node scripts/speed-test/run.mjs --urls=https://ivyproschool.com/ --strategies=mobile
//
// Writes into speed-results/ (JSON, CSV and a Markdown summary).
// Exit code is 1 only if --fail-below=<score> is given and a page scores under it.

import { readFileSync, mkdirSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const here = dirname(fileURLToPath(import.meta.url))
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, ...v] = a.replace(/^--/, "").split("=")
    return [k, v.join("=") || "true"]
  }),
)

const apiKey = process.env.PSI_API_KEY || ""
const urls = args.urls
  ? args.urls.split(",")
  : JSON.parse(readFileSync(join(here, "urls.json"), "utf8")).urls
const strategies = (args.strategies || "mobile,desktop").split(",")
const failBelow = args["fail-below"] ? Number(args["fail-below"]) : null
const outDir = args.out || "speed-results"
const delayMs = Number(args.delay || 3000)

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// Google's published Core Web Vitals thresholds.
const THRESHOLDS = {
  lcp: [2500, 4000], // ms
  cls: [0.1, 0.25],
  tbt: [200, 600], // ms, lab proxy for responsiveness
  fcp: [1800, 3000], // ms
}
function rate(metric, value) {
  if (value == null) return "n/a"
  const [good, poor] = THRESHOLDS[metric]
  return value <= good ? "Good" : value <= poor ? "Needs work" : "Poor"
}

async function runOne(url, strategy) {
  const params = new URLSearchParams({ url, strategy })
  for (const c of ["performance", "accessibility", "best-practices", "seo"]) {
    params.append("category", c)
  }
  if (apiKey) params.set("key", apiKey)
  const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`

  let lastError = ""
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const res = await fetch(endpoint)
      if (res.ok) return await res.json()
      lastError = `HTTP ${res.status}`
      // 429 (rate limit) and 5xx are worth retrying with a longer wait.
      if (res.status !== 429 && res.status < 500) {
        const body = await res.text()
        throw new Error(`${lastError} ${body.slice(0, 200)}`)
      }
    } catch (err) {
      lastError = String(err.message || err)
    }
    await sleep(attempt * 8000)
  }
  throw new Error(`PageSpeed API failed for ${url} (${strategy}): ${lastError}`)
}

function summarise(url, strategy, data) {
  const lh = data.lighthouseResult
  const audits = lh.audits
  const cat = (id) => Math.round((lh.categories[id]?.score ?? 0) * 100)
  const num = (id) => audits[id]?.numericValue ?? null
  const field = data.loadingExperience?.metrics || {}
  return {
    url,
    strategy,
    performance: cat("performance"),
    accessibility: cat("accessibility"),
    bestPractices: cat("best-practices"),
    seo: cat("seo"),
    lcpMs: num("largest-contentful-paint"),
    fcpMs: num("first-contentful-paint"),
    tbtMs: num("total-blocking-time"),
    cls: num("cumulative-layout-shift"),
    speedIndexMs: num("speed-index"),
    ttfbMs: num("server-response-time"),
    fieldLcpMs: field.LARGEST_CONTENTFUL_PAINT_MS?.percentile ?? null,
    fieldCls: field.CUMULATIVE_LAYOUT_SHIFT_SCORE?.percentile != null
      ? field.CUMULATIVE_LAYOUT_SHIFT_SCORE.percentile / 100
      : null,
    fieldInpMs: field.INTERACTION_TO_NEXT_PAINT?.percentile ?? null,
    fieldVerdict: data.loadingExperience?.overall_category ?? null,
    fetchedAt: lh.fetchTime,
  }
}

const sec = (ms) => (ms == null ? "n/a" : `${(ms / 1000).toFixed(1)} s`)
const ms = (v) => (v == null ? "n/a" : `${Math.round(v)} ms`)

function toMarkdown(rows, errors) {
  const date = new Date().toISOString().slice(0, 10)
  const lines = [`# Speed test ${date}`, ""]
  for (const strategy of strategies) {
    const subset = rows.filter((r) => r.strategy === strategy)
    if (!subset.length) continue
    lines.push(`## ${strategy[0].toUpperCase() + strategy.slice(1)}`, "")
    lines.push(
      "| Page | Score | LCP | FCP | TBT | CLS | TTFB | SEO | Access. |",
      "|---|---|---|---|---|---|---|---|---|",
    )
    for (const r of subset) {
      const path = r.url.replace(/^https?:\/\/[^/]+/, "") || "/"
      lines.push(
        `| ${path} | ${r.performance} | ${sec(r.lcpMs)} (${rate("lcp", r.lcpMs)}) | ${sec(r.fcpMs)} | ${ms(r.tbtMs)} | ${
          r.cls == null ? "n/a" : r.cls.toFixed(3)
        } (${rate("cls", r.cls)}) | ${ms(r.ttfbMs)} | ${r.seo} | ${r.accessibility} |`,
      )
    }
    const avg = Math.round(subset.reduce((s, r) => s + r.performance, 0) / subset.length)
    lines.push("", `Average performance score: **${avg}** across ${subset.length} pages.`, "")
  }
  lines.push(
    "Scores are Lighthouse lab results from Google PageSpeed Insights (0 to 100, higher is better).",
    "LCP under 2.5 s, CLS under 0.1 and TBT under 200 ms are rated Good.",
  )
  if (errors.length) {
    lines.push("", "## Pages that could not be tested", "", ...errors.map((e) => `- ${e}`))
  }
  return lines.join("\n") + "\n"
}

function toCsv(rows) {
  const cols = Object.keys(rows[0] || { url: "" })
  const esc = (v) => (v == null ? "" : `"${String(v).replace(/"/g, '""')}"`)
  return [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n") + "\n"
}

async function main() {
  if (!apiKey) {
    console.warn("PSI_API_KEY is not set. Google will rate limit keyless requests heavily.")
  }
  const rows = []
  const errors = []
  for (const url of urls) {
    for (const strategy of strategies) {
      try {
        console.log(`Testing ${strategy} ${url}`)
        const data = await runOne(url, strategy)
        const row = summarise(url, strategy, data)
        rows.push(row)
        console.log(`  score ${row.performance}, LCP ${sec(row.lcpMs)}, CLS ${row.cls?.toFixed(3)}`)
      } catch (err) {
        console.error(`  failed: ${err.message}`)
        errors.push(`${url} (${strategy}): ${err.message}`)
      }
      await sleep(delayMs)
    }
  }

  mkdirSync(outDir, { recursive: true })
  const stamp = new Date().toISOString().slice(0, 10)
  writeFileSync(join(outDir, `speed-${stamp}.json`), JSON.stringify(rows, null, 2))
  if (rows.length) writeFileSync(join(outDir, `speed-${stamp}.csv`), toCsv(rows))
  const md = toMarkdown(rows, errors)
  writeFileSync(join(outDir, "summary.md"), md)
  console.log("\n" + md)

  if (!rows.length) {
    console.error("No pages were tested.")
    process.exit(1)
  }
  if (failBelow != null) {
    const low = rows.filter((r) => r.performance < failBelow)
    if (low.length) {
      console.error(`${low.length} page test(s) scored below ${failBelow}.`)
      process.exit(1)
    }
  }
}

main()
