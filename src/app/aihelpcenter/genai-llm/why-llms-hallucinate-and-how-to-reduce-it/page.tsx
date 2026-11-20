import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import ArticleReviewProgress from "@/components/helpcenter/ArticleReviewProgress";
import styles from "./article.module.css";
import { articleMarkup } from "./article-markup";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

const canonicalUrl = "https://ivyproschool.com/aihelpcenter/genai-llm/why-llms-hallucinate-and-how-to-reduce-it";
const title = "Why LLMs Hallucinate and How to Reduce It | Ivy Pro School";
const headline = "Why Do LLMs Hallucinate, and How Do You Reduce It?";
const description =
  "Why LLMs hallucinate: next-token prediction, rare facts, scoring that rewards guessing and missing context. Plus a mitigation ladder and a Python check.";
const keywords = [
  "llm hallucination",
  "why do llms hallucinate",
  "reduce ai hallucinations",
  "rag grounding",
  "faithfulness",
  "llm verification",
  "truthfulqa",
  "hallucination detection python",
];

const faqs = [
  ["Why does ChatGPT make up facts and sources?", "Because it generates the most plausible continuation of text rather than looking facts up. When it lacks reliable knowledge, a plausible-sounding answer or citation still comes out in a confident tone. Training and evaluation that reward guessing make this worse. Asking for sources helps only if someone or something checks them."],
  ["Does lowering temperature stop hallucinations?", "No. Lower temperature makes outputs more consistent, but a model can be consistently wrong. It helps for repeatable extraction and testing. Reducing hallucinations needs grounding in sources, permission to abstain, automated checks on numbers and citations, and an evaluation set."],
  ["Can RAG eliminate hallucinations completely?", "No. RAG greatly reduces hallucinations about your own data by putting relevant passages in the prompt, but the retriever can fetch the wrong passage, and the model can misread or embellish the right one. Measure retrieval quality and answer faithfulness separately, and require quotes for important claims."],
  ["Which LLM hallucinates the least?", "It changes with every release and depends on the task, so rankings date quickly. Test candidate models on your own questions and documents, with scoring that penalises wrong answers more than abstentions. The system around the model, including grounding and checks, usually matters more than the model choice."],
  ["How do you measure hallucination rate?", "Build a golden set of questions with known answers and sources, run your system on it, and count answers containing false or unsupported claims. Track abstentions separately. Use automated checks and an LLM judge for scale, calibrated against a sample of human reviews."],
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
      datePublished: "2026-11-08",
      dateModified: "2026-11-08",
      mainEntityOfPage: canonicalUrl,
      articleSection: "GenAI / LLM",
      keywords: keywords.join(", "),
      about: ["LLM hallucination", "Large language models", "Retrieval-augmented generation"],
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
        "https://openai.com/index/why-language-models-hallucinate/",
        "https://arxiv.org/abs/2509.04664",
        "https://arxiv.org/abs/2109.07958",
        "https://arxiv.org/abs/2311.05232",
        "https://arxiv.org/abs/2005.11401",
        "https://arxiv.org/abs/2307.03172",
        "https://arxiv.org/abs/2303.08896",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Help Center", item: "https://ivyproschool.com/aihelpcenter" },
        { "@type": "ListItem", position: 2, name: "GenAI / LLM", item: "https://ivyproschool.com/aihelpcenter/genai-llm" },
        { "@type": "ListItem", position: 3, name: "Why LLMs Hallucinate" },
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
    publishedTime: "2026-11-08T00:00:00+05:30",
    modifiedTime: "2026-11-08T00:00:00+05:30",
    authors: ["Prateek Agrawal", "Eeshani Agrawal"],
  },
  twitter: { card: "summary_large_image", title: headline, description, site: "@IvyProSchool" },
};

export default function WhyLlmsHallucinateAndHowToReduceItPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ArticleReviewProgress />
      <div className={`${styles.page} ${montserrat.variable} ${poppins.variable}`} dangerouslySetInnerHTML={{ __html: articleMarkup }} />
    </>
  );
}
