import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import styles from "./article.module.css";
import { articleMarkup } from "./article-markup";
import { faqStructuredData } from "./faq-structured-data";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

const canonicalUrl = "https://ivyproschool.com/aihelpcenter/genai-llm/prompt-engineering-basics";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Prompt Engineering Basics: The 5-Part Framework for Better AI Answers",
  description: "Prompt engineering basics for students: a simple 5-part framework (role, task, context, format, constraints), examples and a 25-minute exercise.",
  inLanguage: "en-IN",
  datePublished: "2026-10-23",
  dateModified: "2026-10-23",
  mainEntityOfPage: canonicalUrl,
  author: [
    { "@type": "Person", name: "Prateek Agrawal", sameAs: "https://www.linkedin.com/in/prateekagrawal" },
    { "@type": "Person", name: "Eeshani Agrawal", sameAs: "https://www.linkedin.com/in/eeshani-agrawal-b674045" },
  ],
  publisher: { "@type": "Organization", name: "Ivy Professional School" },
};

export const metadata: Metadata = {
  title: "Prompt Engineering Basics: The 5-Part Framework for Better AI Answers",
  description: "Prompt engineering basics for students: a simple 5-part framework (role, task, context, format, constraints), examples and a 25-minute exercise.",
  authors: [{ name: "Prateek Agrawal" }, { name: "Eeshani Agrawal" }],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "article",
    url: canonicalUrl,
    title: "Prompt Engineering Basics: The 5-Part Framework for Better AI Answers",
    description: "Prompt engineering basics for students: a simple 5-part framework (role, task, context, format, constraints), examples and a 25-minute exercise.",
    siteName: "Ivy Professional School",
    publishedTime: "2026-10-23T00:00:00+05:30",
    modifiedTime: "2026-10-23T00:00:00+05:30",
    authors: ["Prateek Agrawal", "Eeshani Agrawal"],
  },
};

export default function PromptEngineeringBasicsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <div className={`${styles.page} ${montserrat.variable} ${poppins.variable}`} dangerouslySetInnerHTML={{ __html: articleMarkup }} />
    </>
  );
}
