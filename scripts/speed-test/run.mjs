// Automated speed test using the Google PageSpeed Insights API.
//
// Tests every page listed in the sitemap(s) named in urls.json, on mobile and desktop.
// The "bothDevices" pages are shown in their own table in the summary.
//
// Usage:
//   PSI_API_KEY=xxxx node scripts/speed-test/run.mjs
//   node scripts/speed-test/run.mjs --dry-run              (list what would be tested)
//   node scripts/speed-test/run.mjs --urls=https://ivyproschool.com/ --strategies=mobile
//   node scripts/speed-test/run.mjs --mobile-only          (quicker, mobile for every page)
//   node scripts/speed-test/run.mjs --fail-below=70        (exit 1 if any page scores lower)
//
// Writes into speed-results/ (JSON, CSV and a Markdown summary).

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
const config = JSON.parse(readFileSync(join(here, "urls.json"), "utf8"))
const failBelow = args["fail-below"] && !isNaN(Number(args["fail-below"])) ? Number(args["fail-below"]) : null
const outDir = args.out || "speed-results"
const concurrency = Number(args.concurrency || 3)
const delayMs = Number(args.delay || 1000)
const dryRun = args["dry-run"] === "true"
// Every page is tested on mobile and desktop. Use --mobile-only for a quicker run.
const allDevices = args["mobile-only"] !== "true"

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// ---------- Build the list of tests ----------

async function readSitemap(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Could not read sitemap ${url}: HTTP ${res.status}`)
  const xml = await res.text()
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1])
}

function normalise(url) {
  try {
    const u = new URL(url)
    u.hash = ""
    return u.toString()
  } catch {
    return null
  }
}

async function buildPlan() {
  if (args.urls) {
    const strategies = (args.strategies || "mobile,desktop").split(",")
    return args.urls.split(",").flatMap((url) => strategies.map((strategy) => ({ url, strategy })))
  }

  let pages = []
  for (const sm of config.sitemaps || []) {
    const found = await readSitemap(sm)
    console.log(`Sitemap ${sm}: ${found.length} URLs`)
    pages.push(...found)
  }
  pages.push(...(config.extraUrls || []), ...(config.bothDevices || []))

  const exclude = (config.exclude || []).map((p) => p.toLowerCase())
  const seen = new Set()
  const clean = []
  for (const raw of pages) {
    const url = normalise(raw)
    if (!url || seen.has(url)) continue
    const { hostname, pathname } = new URL(url)
    // Only test our own pages, not blog or other hosts.
    if (hostname !== "ivyproschool.com") continue
    if (pathname.startsWith("/blog")) continue
    if (exclude.some((e) => pathname.toLowerCase().startsWith(e))) continue
    seen.add(url)
    clean.push(url)
  }

  const both = new Set((config.bothDevices || []).map(normalise))
  const plan = []
  for (const url of clean) {
    plan.push({ url, strategy: "mobile" })
    if (allDevices || both.has(url)) plan.push({ url, strategy: "desktop" })
  }
  return plan
}

// ---------- PageSpeed API ----------

// Google's published Core Web Vitals thresholds.
const THRESHOLDS = {
  lcp: [2500, 4000],
  cls: [0.1, 0.25],
  tbt: [200, 600],
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
      if (/^HTTP 4\d\d/.test(lastError) && !lastError.startsWith("HTTP 429")) break
    }
    await sleep(attempt * 8000)
  }
  throw new Error(`PageSpeed API failed: ${lastError}`)
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
    fieldCls:
      field.CUMULATIVE_LAYOUT_SHIFT_SCORE?.percentile != null
        ? field.CUMULATIVE_LAYOUT_SHIFT_SCORE.percentile / 100
        : null,
    fieldInpMs: field.INTERACTION_TO_NEXT_PAINT?.percentile ?? null,
    fieldVerdict: data.loadingExperience?.overall_category ?? null,
    fetchedAt: lh.fetchTime,
  }
}

// ---------- Report ----------

const sec = (v) => (v == null ? "n/a" : `${(v / 1000).toFixed(1)} s`)
const ms = (v) => (v == null ? "n/a" : `${Math.round(v)} ms`)
const pathOf = (url) => url.replace(/^https?:\/\/[^/]+/, "") || "/"
const avg = (rows, key) => (rows.length ? Math.round(rows.reduce((s, r) => s + r[key], 0) / rows.length) : null)

function tableRows(rows) {
  return rows.map(
    (r) =>
      `| ${pathOf(r.url)} | ${r.performance} | ${sec(r.lcpMs)} (${rate("lcp", r.lcpMs)}) | ${sec(r.fcpMs)} | ${ms(r.tbtMs)} | ${
        r.cls == null ? "n/a" : r.cls.toFixed(3)
      } (${rate("cls", r.cls)}) | ${ms(r.ttfbMs)} | ${r.seo} | ${r.accessibility} |`,
  )
}
const HEADER = [
  "| Page | Score | LCP | FCP | TBT | CLS | TTFB | SEO | Access. |",
  "|---|---|---|---|---|---|---|---|---|",
]

function toMarkdown(rows, errors, plannedCount) {
  const date = new Date().toISOString().slice(0, 10)
  const lines = [`# Speed test ${date}`, ""]
  const mobile = rows.filter((r) => r.strategy === "mobile")
  const desktop = rows.filter((r) => r.strategy === "desktop")

  lines.push(
    `Tested ${rows.length} of ${plannedCount} planned runs: ${mobile.length} mobile and ${desktop.length} desktop.`,
    "",
    "## Overview",
    "",
    "| Device | Pages | Average score | Score 90+ | Score 50 to 89 | Score under 50 |",
    "|---|---|---|---|---|---|",
  )
  for (const [name, set] of [["Mobile", mobile], ["Desktop", desktop]]) {
    if (!set.length) continue
    lines.push(
      `| ${name} | ${set.length} | ${avg(set, "performance")} | ${set.filter((r) => r.performance >= 90).length} | ${
        set.filter((r) => r.performance >= 50 && r.performance < 90).length
      } | ${set.filter((r) => r.performance < 50).length} |`,
    )
  }
  lines.push("")

  if (mobile.length) {
    const worst = [...mobile].sort((a, b) => a.performance - b.performance).slice(0, 15)
    lines.push("## 15 slowest pages on mobile", "", ...HEADER, ...tableRows(worst), "")
  }

  const both = new Set((config.bothDevices || []).map(normalise))
  const key = rows.filter((r) => both.has(normalise(r.url)))
  for (const strategy of ["mobile", "desktop"]) {
    const subset = key.filter((r) => r.strategy === strategy)
    if (!subset.length) continue
    lines.push(`## Key pages, ${strategy}`, "", ...HEADER, ...tableRows(subset), "")
  }

  lines.push(
    "The full list of every page is in the CSV file in the downloadable report.",
    "",
    "Scores are Lighthouse lab results from Google PageSpeed Insights (0 to 100, higher is better).",
    "LCP under 2.5 s, CLS under 0.1 and TBT under 200 ms are rated Good.",
  )
  if (errors.length) {
    lines.push("", `## Tests that could not be completed (${errors.length})`, "", ...errors.slice(0, 40).map((e) => `- ${e}`))
    if (errors.length > 40) lines.push(`- and ${errors.length - 40} more, see the log`)
  }
  return lines.join("\n") + "\n"
}

function toCsv(rows) {
  const cols = Object.keys(rows[0] || { url: "" })
  const esc = (v) => (v == null ? "" : `"${String(v).replace(/"/g, '""')}"`)
  return [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n") + "\n"
}

// ---------- Main ----------

async function main() {
  const plan = await buildPlan()
  const pages = new Set(plan.map((p) => p.url)).size
  console.log(`Plan: ${pages} pages, ${plan.length} tests (concurrency ${concurrency}).`)

  if (dryRun) {
    for (const p of plan) console.log(`${p.strategy.padEnd(8)} ${p.url}`)
    return
  }
  if (!apiKey) console.warn("PSI_API_KEY is not set. Google will rate limit keyless requests heavily.")

  const rows = []
  const errors = []
  let done = 0
  const queue = [...plan]

  async function worker() {
    while (queue.length) {
      const { url, strategy } = queue.shift()
      try {
        const data = await runOne(url, strategy)
        const row = summarise(url, strategy, data)
        rows.push(row)
        console.log(`[${++done}/${plan.length}] ${strategy} ${pathOf(url)} score ${row.performance}, LCP ${sec(row.lcpMs)}`)
      } catch (err) {
        console.error(`[${++done}/${plan.length}] ${strategy} ${pathOf(url)} failed: ${err.message}`)
        errors.push(`${pathOf(url)} (${strategy}): ${err.message}`)
      }
      await sleep(delayMs)
    }
  }
  await Promise.all(Array.from({ length: Math.max(1, concurrency) }, worker))

  rows.sort((a, b) => a.url.localeCompare(b.url) || a.strategy.localeCompare(b.strategy))

  mkdirSync(outDir, { recursive: true })
  const stamp = new Date().toISOString().slice(0, 10)
  writeFileSync(join(outDir, `speed-${stamp}.json`), JSON.stringify(rows, null, 2))
  if (rows.length) writeFileSync(join(outDir, `speed-${stamp}.csv`), toCsv(rows))
  const md = toMarkdown(rows, errors, plan.length)
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

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
