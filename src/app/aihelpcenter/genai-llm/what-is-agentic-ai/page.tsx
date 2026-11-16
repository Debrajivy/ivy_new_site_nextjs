import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import styles from "./article.module.css";
import { articleMarkup } from "./article-markup";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

const canonicalUrl = "https://ivyproschool.com/aihelpcenter/genai-llm/what-is-agentic-ai";
const title = "What Is Agentic AI? Meaning and Examples";
const headline = "What Is Agentic AI? How It Differs From Generative AI and Chatbots";
const description =
  "Agentic AI is software that takes a goal, plans steps, uses tools and checks its own work. How it differs from chatbots and copilots, with an Indian example.";

const faqs = [
  ["Is ChatGPT an agentic AI?", "A plain question-and-answer chat is not agentic: you ask, it answers. ChatGPT and similar assistants also offer agent-style modes that browse, run code or use connected apps over several steps toward a goal you set. Those modes are agentic; ordinary chatting is not."],
  ["What is the difference between agentic AI and generative AI?", "Generative AI produces text, code or images in response to a prompt. Agentic AI uses a generative model as its reasoning engine and adds tools, a loop and permissions, so it can take actions toward a goal over several steps. Every agent uses generative AI; most generative AI use is not agentic."],
  ["Is agentic AI safe to use with customer data in India?", "It can be, with the right design. Keep personal data in systems you control, give the agent minimum access, log every tool call and require approval for actions that contact customers or move money. Map data flows against the DPDP Act, 2023 and any RBI, SEBI or IRDAI rules that apply to you."],
  ["Will agentic AI replace jobs?", "In our view it replaces tasks before roles. Lookups, copy-paste between systems and first drafts go first. People who define processes, handle exceptions and supervise agents become more valuable, while roles made almost entirely of repetitive lookups will shrink. Reskilling early is the sensible response."],
  ["Do I need to know coding to build AI agents?", "For simple agents, no: several low-code platforms let you connect tools and write instructions without code. For agents that touch production systems with approvals, logging and testing, someone on the team needs Python, APIs and a framework such as LangGraph."],
  ["Is there an agentic AI course in India?", "Yes. Several Indian institutes and global online platforms now teach agent building, and the free LangGraph and model-provider documentation is good enough to self-study. Ivy Professional School's Advanced Generative AI Course is one option: it covers ReAct prompting, tool calling through APIs, RAG, and stateful multi-agent workflows in LangGraph and LCEL. Whichever you pick, check it includes deployment and human-approval patterns, not just demos."],
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
      keywords: "what is agentic ai, agentic ai, ai agents, agentic ai vs generative ai, agentic ai examples, autonomous ai agents, agentic ai india",
      about: ["Agentic AI", "AI agents", "Generative AI"],
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
        "https://www.anthropic.com/engineering/building-effective-agents",
        "https://arxiv.org/abs/2210.03629",
        "https://arxiv.org/abs/2302.04761",
        "https://arxiv.org/abs/2503.14499",
        "https://genai.owasp.org/llm-top-10/",
        "https://docs.langchain.com/oss/python/langgraph/overview",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Help Center", item: "https://ivyproschool.com/aihelpcenter" },
        { "@type": "ListItem", position: 2, name: "GenAI / LLM", item: "https://ivyproschool.com/aihelpcenter/genai-llm" },
        { "@type": "ListItem", position: 3, name: "What Is Agentic AI?" },
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
  keywords: ["what is agentic ai", "agentic ai", "ai agents", "agentic ai vs generative ai", "agentic ai examples", "autonomous ai agents", "agentic ai india"],
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

export default function WhatIsAgenticAIPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className={`${styles.page} ${montserrat.variable} ${poppins.variable}`} dangerouslySetInnerHTML={{ __html: articleMarkup }} />
    </>
  );
}
