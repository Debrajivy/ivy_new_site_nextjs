import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import styles from "./article.module.css";
import { articleMarkup } from "./article-markup";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

const canonicalUrl = "https://ivyproschool.com/aihelpcenter/genai-llm/rag-explained-how-to-make-ai-answer-from-your-data";
const title = "RAG Explained: How to Make AI Answer From Your Data";
const description = "RAG explained for beginners: how retrieval-augmented generation works, why it often beats fine-tuning, where it fails, and how to build a mini-RAG.";

const faqs = [
  ["Is RAG a type of model?", "No. RAG is an architecture: a retrieval step wrapped around a standard LLM. Any capable LLM can provide the generation step."],
  ["Does RAG eliminate hallucinations?", "RAG substantially reduces hallucinations for questions covered by your documents, but it does not eliminate them. Evaluation and citations remain necessary."],
  ["Will million-token context windows replace RAG?", "Long contexts reduce the situations where RAG is mandatory, but retrieval remains useful for cost, latency, access control, and accuracy across large document collections."],
  ["What does a basic RAG stack cost?", "A pilot can use open-source embedding models and local vector stores, leaving the LLM API as the main cost. Costs grow with scale and managed infrastructure."],
  ["Can RAG work with Hindi, Bengali, or mixed-language documents?", "Yes. Use a multilingual embedding model and test retrieval quality separately for every language used in your documents."],
  ["How do I measure RAG quality?", "Create an evaluation set with known answers and source passages, then measure retrieval hit rate and answer accuracy separately."],
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${canonicalUrl}#article`,
      headline: title,
      description,
      inLanguage: "en-IN",
      datePublished: "2026-11-04",
      dateModified: "2026-11-04",
      mainEntityOfPage: canonicalUrl,
      articleSection: "GenAI / LLM",
      author: [
        { "@type": "Person", name: "Prateek Agrawal", sameAs: "https://www.linkedin.com/in/prateekagrawal" },
        { "@type": "Person", name: "Eeshani Agrawal", sameAs: "https://www.linkedin.com/in/eeshani-agrawal-b674045" },
      ],
      publisher: { "@type": "EducationalOrganization", name: "Ivy Professional School", url: "https://ivyproschool.com" },
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
  keywords: ["RAG explained", "retrieval-augmented generation", "RAG pipeline", "RAG vs fine-tuning", "document chunking", "vector database"],
  authors: [{ name: "Prateek Agrawal" }, { name: "Eeshani Agrawal" }],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "article",
    url: canonicalUrl,
    title,
    description,
    siteName: "Ivy Professional School",
    publishedTime: "2026-11-04T00:00:00+05:30",
    modifiedTime: "2026-11-04T00:00:00+05:30",
    authors: ["Prateek Agrawal", "Eeshani Agrawal"],
  },
  twitter: { card: "summary", title, description, site: "@IvyProSchool" },
};

export default function RagExplainedArticlePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className={`${styles.page} ${montserrat.variable} ${poppins.variable}`} dangerouslySetInnerHTML={{ __html: articleMarkup }} />
    </>
  );
}

