/**
 * Real publish and update dates for articles and case studies (SEO-010).
 *
 * Rules:
 * - published: the date the article's content was first committed to this repo.
 * - modified: the date of the last commit that changed what the reader reads
 *   (headline, body, tables, FAQs, figures). Styling, layout, link targets,
 *   metadata/canonical and author-box edits do not count.
 * - Never use today's date or the build time. If a date is unknown, leave the
 *   article out of this list: the page then shows no date rather than a wrong one.
 * - When you change an article's text, update its `modified` date here.
 *
 * Dates are YYYY-MM-DD. The commit is noted next to each entry so it can be checked.
 *
 * Article schema (SEO-011): for standalone pages that have no data file, the entry also
 * holds the headline (the page's H1 text) and the authors named in the byline under the
 * H1. Keep them in step with the page. Entries without `authors` use the organisation.
 * Never add a name that is not shown on the page.
 */
export type ArticleAuthor = { name: string; url?: string };

export type ArticleDates = {
  published: string;
  modified: string;
  headline?: string;
  authors?: ArticleAuthor[];
};

/** People named as authors on article pages, with the profile link the page shows. */
export const AUTHORS = {
  prateek: { name: "Prateek Agrawal", url: "https://www.linkedin.com/in/prateekagrawal" },
  nawid: { name: "Nawid Khichi" }, // byline "April 2026 · Nawid Khichi"; no profile link on the page
} satisfies Record<string, ArticleAuthor>;

export const ARTICLE_DATES: Record<string, ArticleDates> = {
  // ---------- AI Help Center (standalone article pages) ----------
  "/aihelpcenter/ai-for-product-managers/best-ai-tools-2026": { published: "2026-03-16", modified: "2026-03-16", headline: "The Best AI Tools for 2026", authors: [AUTHORS.prateek] }, // ae6a67f
  "/aihelpcenter/ai-strategy-pm/claude-opus-vs-claude-mythos": { published: "2026-04-21", modified: "2026-04-21", headline: "Claude Opus 4.7 vs. Claude Mythos: Every Benchmark, Explained", authors: [AUTHORS.nawid, AUTHORS.prateek] }, // 9a277e5
  "/aihelpcenter/ai-strategy-pm/how-to-use-claude-ai-like-a-pro": { published: "2026-04-13", modified: "2026-04-13", headline: "How to Use Claude AI Like a Pro: Complete Beginner to Advanced Guide", authors: [AUTHORS.prateek] }, // 7014ce0
  "/aihelpcenter/ai-strategy-pm/how-to-use-claude-in-excel-for-data-analytics": { published: "2026-03-17", modified: "2026-03-17", headline: "How to Use Claude in Excel for Data Analytics", authors: [AUTHORS.prateek] }, // d6e275c
  "/aihelpcenter/ai-strategy-pm/how-to-use-claude-in-finance": { published: "2026-04-13", modified: "2026-04-13", headline: "How to Use Claude in Finance: AI for Financial Analysis, Modeling & Automation", authors: [AUTHORS.prateek] }, // 7014ce0
  "/aihelpcenter/ai-strategy-pm/how-to-use-notebooklm": { published: "2026-04-13", modified: "2026-04-13", headline: "How to Use NotebookLM: Complete Guide to Features, Pricing & Best Practices", authors: [AUTHORS.prateek] }, // 7014ce0
  "/aihelpcenter/ai-strategy-pm/low-code-ai-workflow-automation-tools-2026": { published: "2026-04-16", modified: "2026-04-16", headline: "Top Low-Code AI Workflow Automation Tools in 2026 + How to Implement Them", authors: [AUTHORS.prateek] }, // 5981bc2
  "/aihelpcenter/ai-strategy-pm/what-is-claude-design": { published: "2026-04-21", modified: "2026-04-21", headline: "What is Claude Design? The AI-Powered Visual Tool for Every Professional", authors: [AUTHORS.nawid, AUTHORS.prateek] }, // 9a277e5
  "/aihelpcenter/career/data-science-ai-careers-kolkata-2026": { published: "2026-04-13", modified: "2026-11-25", headline: "Data Science & AI Careers in Kolkata", authors: [AUTHORS.prateek] }, // 7014ce0; figures updated in 1ab8c86 (SEO-001)
  "/aihelpcenter/career/data-science-for-commerce-students": { published: "2026-04-07", modified: "2026-04-07", headline: "Is Data Science a Good Career for Commerce Students?", authors: [AUTHORS.prateek] }, // 8848ed6
  "/aihelpcenter/data-engineering/star-schema-vs-snowflake-schema": { published: "2026-05-05", modified: "2026-05-05", headline: "Star Schema vs Snowflake Schema: Differences, Use Cases, SQL Examples & How to Choose", authors: [AUTHORS.prateek] }, // 519a7f1
  "/aihelpcenter/genai-llm/harness-engineering-in-ai": { published: "2026-08-06", modified: "2026-08-06", headline: "Harness Engineering in AI", authors: [AUTHORS.prateek] }, // 42e971f
  "/aihelpcenter/genai-llm/how-are-llms-trained": { published: "2026-08-12", modified: "2026-08-12", headline: "How Are LLMs Trained?", authors: [AUTHORS.prateek] }, // 1ab124a

  // ---------- Case studies: corporate (content in casestudies/page.tsx) ----------
  "/casestudies/enterprise-wide-training-in-data-analytics-data-science-and-ai": { published: "2025-11-11", modified: "2025-11-11" }, // b76c0da
  "/casestudies/establishing-gurukul-a-centralized-learning-and-development-department-for-workforce-transformation": { published: "2025-11-11", modified: "2025-11-11" }, // b76c0da
  "/casestudies/ai-for-leaders-enabling-cxos-and-senior-executives-to-drive-enterprise-transformation": { published: "2025-11-11", modified: "2025-11-11" }, // b76c0da
  "/casestudies/ai-workshop-for-entrepreneurs": { published: "2026-08-06", modified: "2026-08-06" }, // 42e971f

  // ---------- Case studies: SQL data drills (casestudies/page.tsx) ----------
  "/casestudies/department-payroll": { published: "2026-03-24", modified: "2026-03-24" }, // dcc9d09
  "/casestudies/skeleton-crew": { published: "2026-04-10", modified: "2026-04-10" }, // 5734838
  "/casestudies/rank-and-file": { published: "2026-04-10", modified: "2026-04-10" }, // 5734838
  "/casestudies/performance-trends": { published: "2026-04-30", modified: "2026-04-30" }, // dda1e7b
  "/casestudies/merchandising": { published: "2026-05-06", modified: "2026-05-06" }, // 97017e7
  "/casestudies/cohort-analysis": { published: "2026-05-06", modified: "2026-05-06" }, // 97017e7
  "/casestudies/inventory-vs-sales-demand-alignment": { published: "2026-05-06", modified: "2026-05-06" }, // 97017e7
  "/casestudies/web-event-analysis": { published: "2026-05-06", modified: "2026-05-06" }, // 97017e7
  "/casestudies/advertisement-analysis": { published: "2026-05-06", modified: "2026-05-06" }, // 97017e7
  "/casestudies/department-wise-salary-ranking": { published: "2026-06-10", modified: "2026-06-10" }, // e757732
  "/casestudies/vehicle-capacity-allocation": { published: "2026-06-10", modified: "2026-06-10" }, // e757732
  "/casestudies/quarter-wise-salesman-bonus-analysis": { published: "2026-06-10", modified: "2026-06-10" }, // e757732
  "/casestudies/daily-employee-salary-calculation": { published: "2026-06-10", modified: "2026-06-10" }, // e757732
  "/casestudies/yearly-product-sales-report": { published: "2026-06-11", modified: "2026-06-11" }, // 054d744
  "/casestudies/batch-wise-order-packaging-allocation": { published: "2026-06-11", modified: "2026-06-11" }, // 054d744
  "/casestudies/ropeway-station-route-analysis": { published: "2026-06-11", modified: "2026-06-11" }, // 054d744
  "/casestudies/student-screening-and-failed-subject-analysis": { published: "2026-06-11", modified: "2026-06-11" }, // 054d744

  // ---------- Case studies: Python data drills (casestudies/pythonDrills.ts) ----------
  "/casestudies/retail-sales-revenue-analysis": { published: "2026-06-24", modified: "2026-06-24" }, // 9b8b1fe
  "/casestudies/employee-performance-analysis": { published: "2026-06-24", modified: "2026-06-24" }, // 9b8b1fe
  "/casestudies/student-performance-and-scholarship-analysis": { published: "2026-06-24", modified: "2026-06-24" }, // 9b8b1fe
  "/casestudies/customer-profitability-and-loyalty-analysis": { published: "2026-06-24", modified: "2026-06-24" }, // 9b8b1fe
  "/casestudies/bank-loan-risk-analysis": { published: "2026-06-24", modified: "2026-06-24" }, // 9b8b1fe
  "/casestudies/hospital-patient-visit-analysis": { published: "2026-06-24", modified: "2026-06-24" }, // 9b8b1fe
  "/casestudies/food-delivery-performance-analysis": { published: "2026-06-24", modified: "2026-06-24" }, // 9b8b1fe
  "/casestudies/website-traffic-quality-analysis": { published: "2026-06-24", modified: "2026-06-24" }, // 9b8b1fe
  "/casestudies/insurance-claim-severity-analysis": { published: "2026-06-24", modified: "2026-06-24" }, // 9b8b1fe
  "/casestudies/hotel-booking-cancellation-analysis": { published: "2026-06-24", modified: "2026-06-24" }, // 9b8b1fe
  "/casestudies/customer-churn-prediction-strategy": { published: "2026-06-24", modified: "2026-06-24" }, // 9b8b1fe
  "/casestudies/subscription-pricing-a-b-test-analysis": { published: "2026-06-24", modified: "2026-06-24" }, // 9b8b1fe
};

export function getArticleDates(path: string): ArticleDates | undefined {
  return ARTICLE_DATES[path];
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2026-03-16" -> "16 Mar 2026". String-based, so server and browser always agree. */
export function formatArticleDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}
