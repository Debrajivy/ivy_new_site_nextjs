import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import ArticleReviewProgress from "@/components/helpcenter/ArticleReviewProgress";
import styles from "./article.module.css";
import { articleMarkup } from "./article-markup";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

const canonicalUrl = "https://ivyproschool.com/aihelpcenter/data-engineering/data-engineering-for-generative-ai";
const title = "Data Engineering for GenAI: RAG Pipelines | Ivy Pro School";
const headline = "Data Engineering for Generative AI: Pipelines That Feed RAG and Agents";
const description =
  "Data engineering for generative AI: how to extract, clean, mask PII, chunk, embed and refresh company data so RAG systems and AI agents answer correctly.";
const keywords = [
  "data engineering for genai",
  "data engineering for ai",
  "rag data pipeline",
  "document ingestion",
  "chunking",
  "embeddings pipeline",
  "pii masking",
  "dpdp act",
  "airflow rag",
  "vector index refresh",
];

const faqs = [
  ["What is data engineering for generative AI?", "It is building the pipelines that collect company content, extract and clean the text, mask personal data, split it into chunks, embed the chunks and load them into a searchable index, then keep that index fresh and permission-aware so RAG systems and agents answer from current, allowed information."],
  ["Do I need a vector database for RAG?", "You need somewhere to store and search embeddings, but it does not have to be a new product. If you already run PostgreSQL, the pgvector extension is often enough for small and mid-sized corpora. A few dozen documents may fit straight into the prompt with no retrieval layer at all."],
  ["How often should a RAG index be refreshed?", "As often as the source changes in ways users care about. Policies and SOPs on SharePoint often justify hourly or daily incremental refresh, while archives can refresh weekly. Refresh only changed documents, handle deletions in the same run, and alert when any source is older than its agreed refresh target."],
  ["Should I embed Excel files and ERP data?", "Usually not. Embeddings capture meaning, not arithmetic, so a vector search cannot total invoices or compare quarters reliably. Load spreadsheets and ERP exports into database tables and let the assistant query them with SQL. Embed the documents that explain the numbers, such as policies, contracts and process notes."],
  ["How does the DPDP Act affect RAG pipelines in India?", "Personal data in documents, chunks, prompts and logs is still personal data under the Digital Personal Data Protection Act, 2023. Index only what the assistant's purpose needs, mask identifiers such as PAN and Aadhaar before embedding, control access with metadata filters, and set retention and deletion rules for both the index and logs."],
  ["Do I need a course to learn data engineering for generative AI?", "No. If you already write SQL and Python, the Airflow and pgvector documentation plus one end-to-end project will teach you most of it. A course helps career switchers who want mentor feedback and deadlines. At Ivy Professional School the pipeline side sits in the Data Engineering Course and RAG with vector databases in the Advanced Generative AI Course. Compare any syllabus with real job descriptions first."],
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${canonicalUrl}#article`,
      headline,
      description,
      inLanguage: "en-IN",
      datePublished: "2026-11-24",
      dateModified: "2026-11-24",
      mainEntityOfPage: canonicalUrl,
      articleSection: "Data Engineering",
      keywords: keywords.join(", "),
      about: ["Data engineering", "Retrieval-augmented generation"],
      author: [
        { "@type": "Person", name: "Prateek Agrawal", jobTitle: "Founder, Ivy Professional School", sameAs: "https://www.linkedin.com/in/prateekagrawal" },
        { "@type": "Person", name: "Eeshani Agrawal", jobTitle: "Co-founder, Ivy Professional School", sameAs: "https://www.linkedin.com/in/eeshani-agrawal-b674045" },
      ],
      publisher: { "@type": "EducationalOrganization", name: "Ivy Professional School", url: "https://ivyproschool.com" },
      mentions: {
        "@type": "Course",
        name: "Data Engineering Course",
        url: "https://ivyproschool.com/courses/data-engineering-course",
        provider: { "@type": "EducationalOrganization", name: "Ivy Professional School", url: "https://ivyproschool.com" },
      },
      citation: [
        "https://arxiv.org/abs/2005.11401",
        "https://airflow.apache.org/docs/apache-airflow/stable/tutorial/taskflow.html",
        "https://learn.microsoft.com/en-us/graph/delta-query-overview",
        "https://docs.unstructured.io/open-source/introduction/overview",
        "https://github.com/pgvector/pgvector",
        "https://openlineage.io/docs/",
        "https://www.meity.gov.in/data-protection-framework",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Help Center", item: "https://ivyproschool.com/aihelpcenter" },
        { "@type": "ListItem", position: 2, name: "Data Engineering", item: "https://ivyproschool.com/aihelpcenter/data-engineering" },
        { "@type": "ListItem", position: 3, name: "Data Engineering for Generative AI" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title,
  description,
  keywords: [...keywords],
  authors: [{ name: "Prateek Agrawal" }, { name: "Eeshani Agrawal" }],
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "article",
    url: canonicalUrl,
    title: headline,
    description,
    siteName: "Ivy Professional School",
    publishedTime: "2026-11-24T00:00:00+05:30",
    modifiedTime: "2026-11-24T00:00:00+05:30",
    authors: ["Prateek Agrawal", "Eeshani Agrawal"],
  },
  twitter: { card: "summary_large_image", title: headline, description, site: "@IvyProSchool" },
};

export default function DataEngineeringForGenerativeAiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ArticleReviewProgress />
      <div className={`${styles.page} ${montserrat.variable} ${poppins.variable}`} dangerouslySetInnerHTML={{ __html: articleMarkup }} />
    </>
  );
}
