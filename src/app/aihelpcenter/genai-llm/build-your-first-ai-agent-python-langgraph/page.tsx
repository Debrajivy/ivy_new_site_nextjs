import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import ArticleReviewProgress from "@/components/helpcenter/ArticleReviewProgress";
import styles from "./article.module.css";
import { articleMarkup } from "./article-markup";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

const canonicalUrl = "https://ivyproschool.com/aihelpcenter/genai-llm/build-your-first-ai-agent-python-langgraph";
const title = "Build an AI Agent in Python with LangGraph | Ivy Pro School";
const headline = "How to Build Your First AI Agent in Python with LangGraph";
const description =
  "Build an AI agent in Python with LangGraph: tools, a StateGraph with ToolNode and tools_condition, step limits and human approval. Full, tested code.";
const keywords = [
  "build ai agent python",
  "langgraph tutorial",
  "langgraph stategraph",
  "toolnode",
  "tools_condition",
  "tool calling",
  "human in the loop",
  "ai agent python code",
];

const faqs = [
  ["Do I need LangGraph to build an AI agent in Python?", "No. A tool-calling agent is a loop you can write in about 20 lines with any model SDK. LangGraph becomes useful when you need human approval pauses, saved state between runs, streaming of intermediate steps, or several nodes with different jobs. Learn the plain loop first."],
  ["Can I use Claude or an open-source model with LangGraph instead of OpenAI?", "Yes. Install the matching LangChain package, such as langchain-anthropic for Claude or langchain-ollama for local models, and swap the chat model class. The graph, tools and edges stay the same. The model must support tool calling, and smaller open models are less reliable at choosing tools."],
  ["What is the difference between ToolNode and tools_condition in LangGraph?", "tools_condition is a routing function: it looks at the last message and returns \"tools\" if the model requested tool calls, or END if it did not. ToolNode is the node that actually runs the requested tools and appends their results as ToolMessages. You normally use them together."],
  ["How many tools should my first AI agent have?", "Start with two to five tools that each do one clear job. Every tool adds text the model must read and another way to choose wrongly. Above ten or fifteen tools, group them, split the work across specialised agents, or load only the tools the current task needs."],
  ["Why does my LangGraph agent keep calling the same tool?", "Usually the tool returns an error or an unhelpful result, and the model retries with small variations. Read the trace, make the tool's error message say what input it expects, and tell the model to stop and report after a failed lookup. Keep recursion_limit as a backstop."],
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
      about: ["AI agents", "LangGraph", "Tool calling"],
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
        "https://docs.langchain.com/oss/python/langgraph/overview",
        "https://docs.langchain.com/oss/python/langgraph/quickstart",
        "https://docs.langchain.com/oss/python/langgraph/interrupts",
        "https://reference.langchain.com/python/langgraph.prebuilt/tool_node/tools_condition",
        "https://arxiv.org/abs/2210.03629",
        "https://www.anthropic.com/engineering/building-effective-agents",
        "https://developers.openai.com/api/docs/guides/function-calling",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Help Center", item: "https://ivyproschool.com/aihelpcenter" },
        { "@type": "ListItem", position: 2, name: "GenAI / LLM", item: "https://ivyproschool.com/aihelpcenter/genai-llm" },
        { "@type": "ListItem", position: 3, name: "Build Your First AI Agent with LangGraph" },
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

export default function BuildYourFirstAiAgentPythonLanggraphPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ArticleReviewProgress />
      <div className={`${styles.page} ${montserrat.variable} ${poppins.variable}`} dangerouslySetInnerHTML={{ __html: articleMarkup }} />
    </>
  );
}
