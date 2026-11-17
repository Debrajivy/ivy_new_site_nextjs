import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import styles from "./article.module.css";
import { articleMarkup } from "./article-markup";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

const canonicalUrl = "https://ivyproschool.com/aihelpcenter/genai-llm/rag-vs-ai-agents-vs-agentic-ai";
const title = "RAG vs AI Agents vs Agentic AI Explained | Ivy Pro School";
const headline = "RAG vs AI Agents vs Agentic AI: What's the Difference and Which Do You Need?";
const description =
  "RAG retrieves answers from your data, AI agents take actions with tools, agentic AI runs multi-step goals. Compare cost, risk and fit, with a decision guide.";

const faqs = [
  ["Is RAG an AI agent?", "No. RAG is a retrieval technique that follows a fixed path: search your documents, add the results to the prompt, generate an answer. It does not decide what to do next or take actions. An agent can use RAG as one of its tools, which is often called agentic RAG."],
  ["Can an AI agent use RAG?", "Yes, and most production agents do. The retrieval step is wrapped as a tool, such as search_policy_documents, and the agent calls it when it needs facts from your knowledge base. The agent can then combine those facts with actions, like checking an order or raising a ticket."],
  ["Is RAG still needed now that context windows are so large?", "Usually, yes. Large windows let you paste more text, but sending your whole knowledge base on every request is slow and costly, and models use long inputs unevenly. RAG also lets you enforce access control and keep answers current. For a few dozen pages, pasting them in can be simpler."],
  ["Which is cheaper to run, RAG or AI agents?", "RAG, by a wide margin, because it typically makes one model call per question while an agent makes several per task. Anthropic reports its agents use about four times the tokens of a chat interaction, and multi-agent systems about fifteen times. Route simple questions to RAG and save agents for actions."],
  ["Do I need a vector database for RAG?", "Not always. Small collections work with keyword search or an in-memory index, and many teams start with pgvector inside an existing PostgreSQL database. A dedicated vector database earns its place at larger scale or with heavy filtering needs."],
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
      keywords: "rag vs ai agents, rag vs agentic ai, ai agents vs agentic ai, agentic rag, what is rag, ai agent vs rag, retrieval augmented generation",
      about: ["Retrieval-augmented generation", "AI agents", "Agentic AI"],
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
        "https://arxiv.org/abs/2005.11401",
        "https://arxiv.org/abs/2210.03629",
        "https://arxiv.org/abs/2501.09136",
        "https://www.anthropic.com/engineering/building-effective-agents",
        "https://www.anthropic.com/engineering/multi-agent-research-system",
        "https://genai.owasp.org/llm-top-10/",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Help Center", item: "https://ivyproschool.com/aihelpcenter" },
        { "@type": "ListItem", position: 2, name: "GenAI / LLM", item: "https://ivyproschool.com/aihelpcenter/genai-llm" },
        { "@type": "ListItem", position: 3, name: "RAG vs AI Agents vs Agentic AI" },
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
  keywords: ["rag vs ai agents", "rag vs agentic ai", "ai agents vs agentic ai", "agentic rag", "what is rag", "ai agent vs rag", "retrieval augmented generation"],
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

export default function RagVsAiAgentsVsAgenticAiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className={`${styles.page} ${montserrat.variable} ${poppins.variable}`} dangerouslySetInnerHTML={{ __html: articleMarkup }} />
    </>
  );
}
