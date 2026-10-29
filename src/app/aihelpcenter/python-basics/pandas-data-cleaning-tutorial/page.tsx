import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import styles from "./article.module.css";
import { articleMarkup } from "./article-markup";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const title = "Data Cleaning in Pandas: A Step-by-Step Tutorial With Code and Examples";
const description =
  "Learn data cleaning in pandas step by step: column names, text, data types, dates, missing values, duplicates and outliers, with code and a free sample CSV.";
const canonicalUrl =
  "https://ivyproschool.com/aihelpcenter/python-basics/pandas-data-cleaning-tutorial";

const authors = [
  {
    "@type": "Person",
    name: "Prateek Agrawal",
    sameAs: "https://www.linkedin.com/in/prateekagrawal",
  },
  {
    "@type": "Person",
    name: "Eeshani Agrawal",
    sameAs: "https://www.linkedin.com/in/eeshani-agrawal-b674045",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: title,
  description,
  inLanguage: "en-IN",
  proficiencyLevel: "Beginner",
  datePublished: "2026-10-29",
  dateModified: "2026-10-29",
  mainEntityOfPage: canonicalUrl,
  author: authors,
  publisher: {
    "@type": "Organization",
    name: "Ivy Professional School",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I remove duplicate rows in pandas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use df.drop_duplicates() to remove rows that are identical in every column. Add subset=['order_id'] to compare only some columns, and keep='last' to keep the last copy. Clean the text first so differently formatted copies are treated as the same value.",
      },
    },
    {
      "@type": "Question",
      name: "How do I handle missing values in pandas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "First count missing values with df.isna().sum(). Then drop rows with dropna(), fill gaps with fillna(), or leave them missing and flag the rows. Use a median or group median rather than zero unless zero is the correct meaning.",
      },
    },
    {
      "@type": "Question",
      name: "How do I convert mixed date formats to datetime in pandas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Parse year-first dates with pd.to_datetime using format='ISO8601' and errors='coerce', parse the remaining values with format='mixed' and dayfirst=True, then combine the results with fillna().",
      },
    },
    {
      "@type": "Question",
      name: "How do I remove currency symbols and commas from a column in pandas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use str.replace with a regular expression to remove currency words, symbols and commas, then convert the cleaned text with pd.to_numeric().",
      },
    },
    {
      "@type": "Question",
      name: "How do I detect and handle outliers in pandas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compute Q1 and Q3 with quantile(), flag values outside Q1 minus 1.5 times IQR and Q3 plus 1.5 times IQR, and check each candidate against a business rule before removing, capping, replacing or flagging it.",
      },
    },
    {
      "@type": "Question",
      name: "How do I clean column names in pandas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chain string methods on df.columns: str.strip(), str.lower() and str.replace() with a regular expression. Use df.rename(columns={...}) when you only need to rename a few columns.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Prateek Agrawal" }, { name: "Eeshani Agrawal" }],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "article",
    url: canonicalUrl,
    title,
    description,
    siteName: "Ivy Professional School",
    publishedTime: "2026-10-29T00:00:00+05:30",
    modifiedTime: "2026-10-29T00:00:00+05:30",
    authors: ["Prateek Agrawal", "Eeshani Agrawal"],
  },
};

export default function PandasDataCleaningTutorialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div
        className={`${styles.page} ${montserrat.variable} ${poppins.variable}`}
        dangerouslySetInnerHTML={{ __html: articleMarkup }}
      />
    </>
  );
}
