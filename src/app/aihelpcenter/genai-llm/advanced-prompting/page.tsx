import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import styles from "../prompt-engineering-basics/article.module.css";
import { articleMarkup } from "./article-markup";
import { faqStructuredData } from "./faq-structured-data";

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

const title = "Advanced Prompting: Few-Shot Examples, Chain-of-Thought and Structured Outputs";
const description =
  "Advanced prompting uses four techniques to control model behaviour: few-shot prompting, chain-of-thought, structured outputs and prompt chaining. Includes a 30-minute exercise.";
const canonicalUrl = "https://ivyproschool.com/aihelpcenter/genai-llm/advanced-prompting";

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
  proficiencyLevel: "Intermediate",
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  mainEntityOfPage: canonicalUrl,
  author: authors,
  publisher: {
    "@type": "Organization",
    name: "Ivy Professional School",
  },
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
    publishedTime: "2026-11-02T00:00:00+05:30",
    modifiedTime: "2026-11-02T00:00:00+05:30",
    authors: ["Prateek Agrawal", "Eeshani Agrawal"],
  },
};

export default function AdvancedPromptingPage() {
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
