import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import styles from "./article.module.css";
import { articleMarkup } from "./article-markup";
import { faqStructuredData } from "./faq-structured-data";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

const canonicalUrl = "https://ivyproschool.com/aihelpcenter/data-engineering/data-lake-vs-data-warehouse-vs-data-lakehouse";
const structuredData = {"@context":"https://schema.org","@type":"Article","headline":"Data Lake vs Data Warehouse vs Data Lakehouse: A Simple Guide for Beginners","description":"Data warehouse, data lake and data lakehouse explained in simple words with everyday examples, a comparison table, and a guide to choosing the right one.","inLanguage":"en-IN","datePublished":"2026-10-23","dateModified":"2026-10-23","mainEntityOfPage":"https://ivyproschool.com/aihelpcenter/data-engineering/data-lake-vs-data-warehouse-vs-data-lakehouse","author":[{"@type":"Person","name":"Prateek Agrawal","sameAs":"https://www.linkedin.com/in/prateekagrawal"},{"@type":"Person","name":"Eeshani Agrawal","sameAs":"https://www.linkedin.com/in/eeshani-agrawal-b674045"}],"publisher":{"@type":"Organization","name":"Ivy Professional School"}};

export const metadata: Metadata = {
  title: "Data Lake vs Data Warehouse vs Data Lakehouse: A Simple Guide for Beginners",
  description: "Data warehouse, data lake and data lakehouse explained in simple words with everyday examples, a comparison table, and a guide to choosing the right one.",
  authors: [{ name: "Prateek Agrawal" }, { name: "Eeshani Agrawal" }],
  alternates: { canonical: canonicalUrl },
  openGraph: { type: "article", url: canonicalUrl, title: "Data Lake vs Data Warehouse vs Data Lakehouse: A Simple Guide for Beginners", description: "Data warehouse, data lake and data lakehouse explained in simple words with everyday examples, a comparison table, and a guide to choosing the right one.", siteName: "Ivy Professional School", publishedTime: "2026-10-23T00:00:00+05:30", modifiedTime: "2026-10-23T00:00:00+05:30", authors: ["Prateek Agrawal", "Eeshani Agrawal"] },
};

export default function DataLakeArticlePage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
    <div className={`${styles.page} ${montserrat.variable} ${poppins.variable}`} dangerouslySetInnerHTML={{ __html: articleMarkup }} />
  </>);
}
