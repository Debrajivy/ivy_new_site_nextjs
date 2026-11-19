import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import styles from "./article.module.css";
import { articleMarkup } from "./article-markup";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

const canonicalUrl = "https://ivyproschool.com/aihelpcenter/genai-llm/what-is-model-context-protocol-mcp";
const title = "What Is MCP? Model Context Protocol Guide | Ivy Pro School";
const headline = "What Is MCP (Model Context Protocol)? A Plain-English Guide With Code";
const description =
  "MCP (Model Context Protocol) is an open standard that connects AI apps to tools and data. How hosts, clients and servers work, with Python code and risks.";
const keywords = ["what is mcp", "model context protocol", "mcp server", "mcp python", "mcp vs api", "mcp vs function calling", "mcp security", "fastmcp"];

const faqs = [
  ["What does MCP stand for in AI?", "MCP stands for Model Context Protocol. It is an open standard for connecting AI applications such as assistants, IDEs and agents to external tools and data sources through MCP servers, so one integration can be reused by any compatible application instead of being rebuilt for each one."],
  ["Is MCP only for Claude?", "No. Anthropic created MCP, but it is an open protocol now governed under the Linux Foundation's Agentic AI Foundation. At the time of writing, many AI assistants, coding tools and agent frameworks from different vendors support it. Check the current documentation of the specific tool you use."],
  ["What is the difference between MCP and an API?", "An API exposes a system to other programs. MCP is a protocol for exposing tools and data specifically to AI applications in a standard, discoverable way. An MCP server usually calls an existing API behind the scenes and describes it so any MCP host can use it."],
  ["What is an MCP server?", "An MCP server is a small program that wraps a system, such as a database, file store or business application, and offers its capabilities as tools, resources and prompts. It can run locally over stdio or remotely over HTTP. The server decides what the AI is allowed to do with that system."],
  ["Is MCP safe to use with company data?", "It can be, if you control which servers run and what they can access. Use servers from trusted sources, give them least-privilege credentials, keep write actions behind human approval and log every tool call. Remember that tool results are sent to the model provider. Prompt injection through tool results is the main risk to design against."],
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
      about: ["Model Context Protocol", "AI agents", "Tool calling"],
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
        "https://modelcontextprotocol.io/specification/2026-07-28",
        "https://www.anthropic.com/news/model-context-protocol",
        "https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation",
        "https://github.com/modelcontextprotocol/python-sdk",
        "https://genai.owasp.org/llm-top-10/",
        "https://modelcontextprotocol.io/specification/2026-07-28/changelog",
        "https://py.sdk.modelcontextprotocol.io/v2/migration/",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Help Center", item: "https://ivyproschool.com/aihelpcenter" },
        { "@type": "ListItem", position: 2, name: "GenAI / LLM", item: "https://ivyproschool.com/aihelpcenter/genai-llm" },
        { "@type": "ListItem", position: 3, name: "What Is MCP?" },
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

export default function WhatIsModelContextProtocolMcpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className={`${styles.page} ${montserrat.variable} ${poppins.variable}`} dangerouslySetInnerHTML={{ __html: articleMarkup }} />
    </>
  );
}
