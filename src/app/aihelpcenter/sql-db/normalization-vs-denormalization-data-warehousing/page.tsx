import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import ArticleReviewProgress from "@/components/helpcenter/ArticleReviewProgress";
import styles from "./article.module.css";
import { articleMarkup } from "./article-markup";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

const canonicalUrl = "https://ivyproschool.com/aihelpcenter/sql-db/normalization-vs-denormalization-data-warehousing";
const title = "Normalization vs Denormalization in Data Warehousing | Ivy Pro School";
const headline = "Normalization vs Denormalization in Data Warehousing: A Practical Tutorial";
const description =
  "A SQL tutorial on normalization and denormalization in data warehousing: normalize to 3NF step by step, build the star schema from it, and know which layer needs which.";
const keywords = [
  "normalization vs denormalization",
  "data warehouse modelling",
  "3NF",
  "star schema",
  "snowflake schema",
  "kimball",
  "inmon",
  "slowly changing dimension",
  "fact table grain",
];

const faqs = [
  ["Should a data warehouse be normalized or denormalized?", "Both, in different layers. The integration core is normalized so each fact is stored once and corrections are cheap; the presentation layer is denormalized into star schemas so analysts get fast queries and consistent measures. Treating the warehouse as a single modelling decision is what makes this look like a contradiction."],
  ["Is a star schema denormalized?", "Yes. Dimension tables flatten hierarchies that a normalized design would split across several tables, so product, sub-category and category become three columns on one dimension row. Fact tables stay narrow and additive; the denormalization is in the dimensions."],
  ["What is the difference between a star schema and a snowflake schema?", "A star schema keeps each dimension as a single flat table. A snowflake schema normalizes the dimension hierarchies into separate tables, so category becomes its own table joined to product. Snowflaking saves a little storage and costs query simplicity, which is usually the wrong trade in a presentation layer."],
  ["Does normalization still matter on modern cloud warehouses?", "Yes, in the integration layer. Columnar storage and cheap compute make wide tables more affordable than they were on row stores, which weakens the performance argument for normalizing. It does not weaken the correctness argument: storing a fact once is what makes a correction a one-row update instead of a backfill."],
  ["What is 3NF in simple terms?", "A table is in third normal form when every column depends on the key, the whole key and nothing but the key. In practice that means no repeating groups of columns, no column that depends on only part of a composite key, and no column that depends on another non-key column."],
  ["Which normal form should a data warehouse core use?", "Third normal form is the usual stopping point, and it is what Inmon-style enterprise warehouses use. Some teams use Data Vault instead, which splits data into hubs, links and satellites to handle changing sources and auditability. Boyce-Codd and higher normal forms rarely earn their complexity in warehouse work."],
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "@id": `${canonicalUrl}#article`,
      headline,
      description,
      inLanguage: "en-IN",
      proficiencyLevel: "Beginner",
      datePublished: "2026-11-23",
      dateModified: "2026-11-23",
      mainEntityOfPage: canonicalUrl,
      articleSection: "SQL & DB",
      keywords: keywords.join(", "),
      about: ["Data warehousing", "Database normalization", "Dimensional modeling"],
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
        "https://doi.org/10.1145/362384.362685",
        "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling/",
        "https://docs.cloud.google.com/bigquery/docs/best-practices-performance-nested",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Help Center", item: "https://ivyproschool.com/aihelpcenter" },
        { "@type": "ListItem", position: 2, name: "SQL & DB", item: "https://ivyproschool.com/aihelpcenter/sql-db" },
        { "@type": "ListItem", position: 3, name: "Normalization vs Denormalization" },
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
    publishedTime: "2026-11-23T00:00:00+05:30",
    modifiedTime: "2026-11-23T00:00:00+05:30",
    authors: ["Prateek Agrawal", "Eeshani Agrawal"],
  },
  twitter: { card: "summary_large_image", title: headline, description, site: "@IvyProSchool" },
};

export default function NormalizationVsDenormalizationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ArticleReviewProgress />
      <div className={`${styles.page} ${montserrat.variable} ${poppins.variable}`} dangerouslySetInnerHTML={{ __html: articleMarkup }} />
    </>
  );
}
