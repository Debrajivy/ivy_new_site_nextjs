import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import styles from "./article.module.css";
import { articleMarkup } from "./article-markup";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

const canonicalUrl = "https://ivyproschool.com/aihelpcenter/genai-llm/multi-agent-systems-explained";
const title = "Multi-Agent Systems: Patterns, Costs, Risks | Ivy Pro School";
const headline = "Multi-Agent Systems Explained: When One AI Agent Isn't Enough";
const description =
  "Multi-agent systems split work across specialised AI agents. Learn the main patterns, real costs, why they fail, and when a single agent is the better choice.";
const keywords = ["multi agent systems", "multi-agent ai", "multi agent llm", "orchestrator workers pattern", "supervisor agent", "langgraph multi agent", "mcp vs a2a"];

const faqs = [
  ["What is the difference between a single agent and a multi-agent system?", "A single agent is one model with one set of tools working through a task in a loop. A multi-agent system splits the task across several agents with separate roles, prompts and context, coordinated by an orchestrator or code. Multi-agent designs handle bigger, parallel work but cost more and add coordination failures."],
  ["What is an example of a multi-agent system?", "A research assistant where a lead agent plans the question, several sub-agents search different sources in parallel, and the lead combines their findings. Another is an RFP response desk where workers draft sections from approved documents and a checker agent rejects any claim without evidence."],
  ["What is the supervisor pattern in multi-agent AI?", "The supervisor or orchestrator pattern uses one agent to break a task into parts, assign each part to a specialist worker agent, and combine the results. It is the most common multi-agent design because control stays in one place, which makes it easier to log, budget and debug."],
  ["What is the difference between MCP and A2A?", "MCP (Model Context Protocol) standardises how an AI application connects to tools and data. A2A (Agent2Agent) standardises how independent agents, possibly from different vendors, discover each other and exchange tasks. A multi-agent system can use both: MCP for each agent's tools, A2A between agents."],
  ["Are multi-agent systems more accurate than single agents?", "Sometimes. Anthropic reported a large gain on its own research evaluation, but at about fifteen times the tokens of a chat. For tightly connected tasks such as most coding, a single agent with full context often does better. Test both on the same cases before deciding."],
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
      about: ["Multi-agent systems", "AI agents", "Agentic AI"],
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
        "https://www.anthropic.com/engineering/multi-agent-research-system",
        "https://www.anthropic.com/engineering/building-effective-agents",
        "https://cognition.com/blog/dont-build-multi-agents",
        "https://arxiv.org/abs/2503.13657",
        "https://docs.langchain.com/oss/python/langgraph/overview",
        "https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents",
        "https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Help Center", item: "https://ivyproschool.com/aihelpcenter" },
        { "@type": "ListItem", position: 2, name: "GenAI / LLM", item: "https://ivyproschool.com/aihelpcenter/genai-llm" },
        { "@type": "ListItem", position: 3, name: "Multi-Agent Systems Explained" },
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

export default function MultiAgentSystemsExplainedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className={`${styles.page} ${montserrat.variable} ${poppins.variable}`} dangerouslySetInnerHTML={{ __html: articleMarkup }} />
    </>
  );
}
