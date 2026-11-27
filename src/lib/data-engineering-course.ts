// src/lib/data-engineering-course.ts (import as "@/lib/data-engineering-course")
// Content for the Data Engineering course pages: the main page and the six city pages.
// Source: "Data Engineering course page: changes for the new curriculum" (website change brief,
// batch starting 28 Nov 2026). Text is copied from the brief. City pages use the same content
// with the city name in the title, meta description and H1.
// Only these 7 pages read this file; every other course keeps its existing content.
import { COMPANY } from "@/lib/company-facts";

export const DE_PAGES: Record<string, string | null> = {
  "data-engineering-course": null,
  "data-engineering-course-kolkata": "Kolkata",
  "data-engineering-course-delhi": "Delhi",
  "data-engineering-course-mumbai": "Mumbai",
  "data-engineering-course-bangalore": "Bangalore",
  "data-engineering-course-pune": "Pune",
  "data-engineering-course-chennai": "Chennai",
};

/** Course titles of the same 7 pages (several components only receive the title). */
export const DE_TITLES = new Set([
  " Data Engineering Course",
  "Data Engineering Course in Kolkata",
  "Data Engineering Course in Delhi",
  "Data Engineering Course in Mumbai",
  "Data Engineering Course in Bangalore",
  "Data Engineering Course in Pune",
  "Data Engineering Course in Chennai",
]);

export const isDataEngineeringSlug = (slug?: string) => !!slug && slug in DE_PAGES;
export const isDataEngineeringTitle = (title?: string) => !!title && DE_TITLES.has(title);
const cityOf = (slug: string) => DE_PAGES[slug] ?? null;

/** Brand name used on these pages (brief section 12: "Ivy Professional School" throughout). */
export const DE_BRAND = "Ivy Professional School";

// ---------- 1. SEO title, meta description, H1 ----------
export function dePageTitle(slug: string) {
  const city = cityOf(slug);
  return city
    ? `Data Engineering Course in ${city}: PySpark, Databricks and Azure | Ivy Professional School`
    : "Data Engineering Course: PySpark, Databricks and Azure | Ivy Professional School";
}
export function deMetaDescription(slug: string) {
  const city = cityOf(slug);
  return `160-hour data engineering programme${city ? ` in ${city}` : ""}: SQL, Python, PySpark, Databricks and Azure, with a capstone project, Databricks certification prep and placement support.`;
}
export function deH1(slug: string) {
  const city = cityOf(slug);
  return city ? `Data Engineering Course in ${city} on Azure Databricks` : "Data Engineering Course on Azure Databricks";
}

// ---------- 2. Hero ----------
export const DE_SUBHEADLINE =
  "Start with SQL and Python, then build production data pipelines with PySpark, Databricks and Azure, the stack most data engineering roles in India now ask for. Finish with a capstone platform on your GitHub.";

export const DE_HIGHLIGHTS = [
  // Highlight 1: Keep (current text)
  "Master MySQL database operations, advanced query writing, window functions, and Python data manipulation.",
  "PySpark on Databricks with Delta Lake, Unity Catalog, Auto Loader, Lakeflow Pipelines and Jobs",
  "Azure Data Factory, ADLS Gen2, Event Hubs and Key Vault",
  "Streaming, CI/CD with GitHub Actions, data quality and data pipelines for AI",
];

export const DE_RATING_BADGE = "4.7 (198 course reviews)";
export const DE_EXTRA_BADGES = ["Databricks certification prep", COMPANY.recognition, `Since ${COMPANY.foundingYear}`];

// ---------- 3. Course overview ----------
export const DE_OVERVIEW = [
  "This 160-hour programme takes you from SQL and Python to building and running the data pipelines companies depend on, using PySpark, Databricks and Microsoft Azure.",
  "You begin with 15 SQL classes and 15 Python classes. You then learn how a data engineer works and how Spark processes data, build a lakehouse with Delta Lake and Unity Catalog, automate it with Lakeflow Pipelines and Jobs, tune it for speed and cost, connect it to Azure Data Factory and Event Hubs, and deploy it with GitHub Actions.",
  "Extra practice, hands-on and interview preparation classes run alongside. The programme includes 10+ industry projects, 30+ case studies and 50+ assignments, and every lab builds one platform for a fictional quick-commerce company, which becomes your capstone and GitHub portfolio.",
  "The programme prepares you for the Databricks Certified Data Engineer Associate exam.",
];

/** "What will I learn" list: current items with Hadoop, MongoDB, AWS and GCP removed (brief section 3). */
export const DE_OUTCOMES = [
  "Build scalable data pipelines using PySpark, Databricks, Kafka and Azure",
  "Manage structured and unstructured data with MySQL, Delta Lake and real-time processing systems",
  "Implement data solutions on the cloud using Microsoft Azure and Azure Databricks",
  "Solve complex business problems with 30+ case studies and 10+ industry-aligned capstone projects",
  "Prepare for the Databricks Certified Data Engineer Associate exam with guided mentoring and hands-on labs",
  "Get lifetime access to recordings and 1:1 expert mentorship to support your learning and job prep",
];

// ---------- 4. Who should join ----------
export const DE_WHO_SHOULD_JOIN = [
  "Career switchers moving into data engineering from IT support, testing, analytics or other engineering roles.",
  "Fresh engineering graduates aiming for their first data engineering job.",
  "Data analysts who want to move from reporting to building pipelines.",
  "No prior SQL or Python needed: the programme starts with both.",
];

// ---------- 5. Curriculum (accordion: title, hours, topics) ----------
const MODULES: [title: string, hours: string, topics: string][] = [
  ["SQL for Data Engineering (15 classes)", "37.5", "MySQL operations, advanced queries, joins, aggregations and window functions"],
  ["Python for Data Engineering (15 classes)", "37.5", "Python programming, data structures, data manipulation with Pandas and NumPy"],
  ["M1 Data Engineering and Lakehouse Basics", "4", "What a data engineer builds; ETL vs ELT; batch vs streaming; data lake, warehouse and lakehouse; CSV, JSON, Avro, Parquet; Delta Lake and ACID; data modelling: facts, dimensions, grain, star schema, surrogate keys, SCD Type 1 and 2; bronze, silver and gold layers"],
  ["M2 PySpark on Databricks", "10", "How Spark works: driver, executors, jobs, stages, tasks, partitions, shuffle; DataFrame API; schemas; cleaning messy data; joins including semi and anti joins; broadcast joins; aggregations; pivot; window functions; Spark SQL; nested JSON with explode and from_json; VARIANT; built-in functions vs UDFs; bad records and schema drift"],
  ["M3 Databricks Lakehouse", "10", "Delta Lake: MERGE upserts, time travel, schema evolution, Change Data Feed, OPTIMIZE, VACUUM; Unity Catalog: permissions, row filters, column masks, lineage; Auto Loader and COPY INTO; incremental loads and CDC basics; Lakeflow Declarative Pipelines with data-quality expectations; Lakeflow Jobs: dependencies, retries, triggers, alerts"],
  ["M4 Performance Optimisation", "4", "Query profile; shuffle, spill, skew and small files; troubleshooting failed jobs; adaptive query execution; Liquid Clustering; Photon; cluster sizing and cost control"],
  ["M5 Azure for Data Engineers", "6", "Microsoft Entra ID, RBAC, managed identity, Key Vault, ADLS Gen2, cost management; Azure Databricks with ADLS and Unity Catalog; Azure Data Factory: parameterised and metadata-driven pipelines, triggers, running Databricks jobs"],
  ["M6 Streaming", "4", "Event-driven design; Kafka topics, partitions, offsets and consumer groups (KRaft); Azure Event Hubs; Structured Streaming into Delta: checkpoints, watermarks, stateful aggregations, MERGE in streams"],
  ["M7 DataOps", "3", "Git branching; Databricks Asset Bundles; CI/CD with GitHub Actions and a service principal; Azure DevOps comparison; quality checks, quarantine tables and alerts"],
  ["M8 Data Pipelines for AI", "2", "The data engineer's role in AI projects: document ingestion, chunking, embeddings, vector search, keeping the index fresh, PII checks"],
  ["M9 Capstone Project", "4", "Build an end-to-end analytics platform on Azure Databricks with mentor reviews and a final demo"],
  ["M10 Interview and Certification Prep", "2", "PySpark and scenario questions, data system design round, resume and GitHub review, Databricks Data Engineer Associate exam preparation, one mock interview each"],
  ["Practice, hands-on and interview preparation classes", "36", "About 36 hours of extra hands-on modules, practice classes and interview preparation"],
];

export const DE_CURRICULUM = MODULES.map(([title, hours, topics], i) => ({
  id: `m${i + 1}`,
  title,
  duration: `${hours} hrs`,
  topics: topics.split("; ").map((t, j) => ({ id: `t${j + 1}`, title: t })),
}));

// ---------- 6. Tools strip ----------
export const DE_TOOLS = [
  "MySQL", "Python", "Pandas", "NumPy",
  "PySpark", "Databricks", "Delta Lake", "Unity Catalog", "Azure Data Factory", "ADLS Gen2", "Event Hubs", "Key Vault", "Kafka", "GitHub Actions",
];

// ---------- 7. Projects tabs ----------
export const DE_PROJECTS = {
  showcase: {
    intro: "Portfolio pieces you can discuss in interviews:",
    items: [
      "A star-schema model of a quick-commerce business",
      "A performance report that halves a job's runtime",
      "A real-time orders table from Event Hubs",
      "A CI/CD pipeline that deploys on every pull request",
      "A searchable index over documents for AI",
    ],
  },
  practice: {
    intro: "A hands-on lab in every data engineering session:",
    items: [
      "Load data to Delta",
      "Clean a messy orders file",
      "Build a customer metrics table",
      "Flatten nested JSON events",
      "MERGE upserts with rollback",
      "Incremental file ingestion",
      "A data-quality pipeline",
      "A scheduled job with alerts",
    ],
  },
  capstone: {
    intro: "End-to-end analytics platform on Azure Databricks:",
    items: [
      "Three sources (Azure SQL, live events, daily files)",
      "Bronze/silver/gold Delta tables under Unity Catalog",
      "Quality rules and masked personal data",
      "A scheduled job with alerts",
      "GitHub Actions deployment",
      "Gold tables and a monitoring dashboard",
    ],
    outro: "Delivered as a GitHub repository, demo video and live demo.",
  },
};

// ---------- 8. Certificate ----------
export const DE_CERTIFICATE_LINES = [
  "Launch your cloud career with an elite certification from Ivy Professional School. Designed with experts from Amazon & Accenture, it proves your ability to build batch and real-time data systems using Spark, Kafka and Azure Databricks.",
  "The programme also prepares you for the Databricks Certified Data Engineer Associate exam (exam fee paid separately to Databricks).",
];

// ---------- 9. Career support ----------
export const DE_AVG_SALARY = "6-8 LPA";

// ---------- 11. FAQ ----------
export const DE_FAQ_CATEGORIES = [
  { id: "program", name: "Program" },
  { id: "certification", name: "Certification" },
  { id: "placement", name: "Placement" },
];
export const DE_FAQS = [
  { category: "program", question: "What will I be able to do after this programme?", answer: "Write SQL and Python for data work, then build and run data pipelines on Azure Databricks: ingest data from databases, files and event streams, clean and model it in Delta Lake, govern it with Unity Catalog, schedule and monitor it, tune it for speed and cost, and deploy it with CI/CD." },
  { category: "program", question: "Do I need to know SQL and Python?", answer: "No. The programme starts with 15 SQL classes and 15 Python classes before the data engineering stage." },
  { category: "program", question: "How long is the programme?", answer: "160 hours: SQL (37.5 hours), Python (37.5 hours), Data Engineering on Azure Databricks (49 hours) and about 36 hours of practice, hands-on and interview preparation classes." },
  { category: "program", question: "Do I need to pay for Databricks or Azure?", answer: "No. Most labs run on Databricks Free Edition, which is free. Azure labs run on a lab environment provided by Ivy." },
  { category: "certification", question: "Which certification does it prepare me for?", answer: "The Databricks Certified Data Engineer Associate exam. The exam fee is paid directly to Databricks. You also receive an Ivy Professional School certificate." },
  { category: "program", question: "Is Hadoop or Hive covered?", answer: "As an interview handout that explains HDFS, MapReduce, YARN and Hive and how each maps to today's tools. New projects use Spark on cloud lakehouses, so the programme does not teach Hadoop installation or coding." },
  { category: "program", question: "What projects will I build?", answer: "10+ industry projects, 30+ case studies and 50+ assignments, plus a hands-on lab in every data engineering session that builds one platform, ending in an end-to-end capstone on Azure Databricks that you can show employers." },
  { category: "placement", question: "Is there placement support?", answer: "Yes. Resume and GitHub review, mock interviews, interview questions in every session and lifetime placement assistance. The programme's recent full-time cohort had a 94% placement rate, with an average salary of 6 to 8 LPA." },
  { category: "placement", question: "Which roles can I apply for?", answer: "Data Engineer, Azure Data Engineer, Databricks Engineer, Big Data Engineer and ETL Developer roles at the entry level." },
];
