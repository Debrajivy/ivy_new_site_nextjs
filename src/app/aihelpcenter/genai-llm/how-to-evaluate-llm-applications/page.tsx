import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import ArticleReviewProgress from "@/components/helpcenter/ArticleReviewProgress";
import styles from "./article.module.css";
import { articleMarkup } from "./article-markup";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

const canonicalUrl = "https://ivyproschool.com/aihelpcenter/genai-llm/how-to-evaluate-llm-applications";
const title = "LLM Evaluation: Evals, Metrics and Judges | Ivy Pro School";
const headline = "How to Evaluate LLM Applications: Evals, Metrics and LLM-as-a-Judge";
const description =
  "LLM evaluation explained: golden datasets, offline vs online evals, faithfulness and recall@k, LLM-as-a-judge biases, regression tests and a Python harness.";
const keywords = [
  "llm evaluation",
  "llm evals",
  "llm as a judge",
  "golden dataset",
  "rag evaluation metrics",
  "faithfulness",
  "recall@k",
  "regression testing llm",
  "ragas",
  "promptfoo",
];

const faqs = [
  ["What is an LLM eval?", "An LLM eval is a repeatable test that runs an LLM application on a set of inputs and scores the outputs against defined criteria, such as correctness, faithfulness to sources, format or safety. Teams rerun evals after every prompt, model or retrieval change to catch regressions before users see them."],
  ["How many test cases do I need to evaluate an LLM application?", "Start with 50 to 200 real, carefully labelled cases covering your main topics and known hard cases. Grow the set over time from production failures, and make sure each important slice, such as a language or product line, has enough cases to be scored on its own."],
  ["Is LLM-as-a-judge reliable?", "It can be, for narrow and clearly defined questions. Research on MT-Bench found strong judges agreed with human preferences over 80% of the time, similar to agreement between humans. Judges also show position, verbosity and self-enhancement biases, so calibrate yours against human labels on your own data before relying on it."],
  ["What is the difference between faithfulness and answer relevance?", "Faithfulness asks whether every claim in the answer is supported by the retrieved context, which catches hallucinations. Answer relevance asks whether the answer actually addresses the question. An answer can be perfectly faithful to the documents yet irrelevant to what was asked, so measure both."],
  ["How do you evaluate a RAG system?", "Evaluate retrieval and generation separately. For retrieval, measure recall@k and precision against labelled relevant passages. For generation, measure fact coverage, faithfulness to the retrieved context and answer relevance. This split tells you whether to fix chunking and search, or the prompt and model."],
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
      datePublished: "2026-11-23",
      dateModified: "2026-11-23",
      mainEntityOfPage: canonicalUrl,
      articleSection: "GenAI / LLM",
      keywords: keywords.join(", "),
      about: ["LLM evaluation", "LLM-as-a-judge", "Retrieval-augmented generation evaluation"],
      author: [
        { "@type": "Person", name: "Prateek Agrawal", jobTitle: "Founder, Ivy Professional School", sameAs: "https://www.linkedin.com/in/prateekagrawal" },
        { "@type": "Person", name: "Eeshani Agrawal", jobTitle: "Co-founder, Ivy Professional School", sameAs: "https://www.linkedin.com/in/eeshani-agrawal-b674045" },
      ],
      publisher: { "@type": "EducationalOrganization", name: "Ivy Professional School", url: "https://ivyproschool.com" },
      mentions: {
        "@type": "Course",
        name: "Advanced Generative AI Course",
        url: "https://ivyproschool.com/courses/generative-ai-course",
        provider: { "@type": "EducationalOrganization", name: "Ivy Professional School", url: "https://ivyproschool.com" },
      },
      citation: [
        "https://arxiv.org/abs/2306.05685",
        "https://arxiv.org/abs/2309.15217",
        "https://arxiv.org/abs/2211.09110",
        "https://docs.ragas.io/en/stable/",
        "https://www.promptfoo.dev/docs/intro/",
        "https://docs.langchain.com/langsmith/evaluation",
        "https://github.com/openai/evals",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Help Center", item: "https://ivyproschool.com/aihelpcenter" },
        { "@type": "ListItem", position: 2, name: "GenAI / LLM", item: "https://ivyproschool.com/aihelpcenter/genai-llm" },
        { "@type": "ListItem", position: 3, name: "How to Evaluate LLM Applications" },
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

export default function HowToEvaluateLlmApplicationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ArticleReviewProgress />
      <div className={`${styles.page} ${montserrat.variable} ${poppins.variable}`} dangerouslySetInnerHTML={{ __html: articleMarkup }} />
    </>
  );
}
