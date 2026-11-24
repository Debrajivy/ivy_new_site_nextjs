import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import ArticleReviewProgress from "@/components/helpcenter/ArticleReviewProgress";
import styles from "./article.module.css";
import { articleMarkup } from "./article-markup";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

const canonicalUrl = "https://ivyproschool.com/aihelpcenter/genai-llm/how-to-become-an-ai-engineer";
const title = "How to Become an AI Engineer in 2026 | Ivy Pro School";
const headline = "How to Become an AI Engineer in 2026: Skills, Roadmap and Projects";
const description =
  "How to become an AI engineer in 2026: the skills that matter, a 6-month roadmap, five portfolio projects with an Indian business flavour, and interview prep.";
const keywords = [
  "how to become an ai engineer",
  "ai engineer skills",
  "genai engineer",
  "llm engineer",
  "ai engineer projects",
  "ai engineer interview",
  "career switch to ai",
];

const faqs = [
  ["Can I become an AI engineer without a computer science degree?", "Yes. Employers hiring AI engineers mostly look for evidence that you can build and ship: deployed projects, clean code on GitHub, evaluation results and the ability to explain trade-offs. A degree helps with some employers' filters, but a strong portfolio and solid Python, SQL and API skills matter more for most roles."],
  ["How long does it take to become an AI engineer?", "About six months of focused study at 8 to 12 hours a week is realistic if you already code or work with data. Software developers often move faster. From no coding background, plan nine to twelve months, because Python, Git and API skills need time before LLM work makes sense."],
  ["Do AI engineers need to know machine learning maths?", "Less than ML researchers do. You need an intuition for vectors, similarity, probability and evaluation metrics, plus a working understanding of how LLMs are trained and why they fail. Deep calculus and training models from scratch are rarely part of the day-to-day job, though they help for fine-tuning work."],
  ["What is the salary of an AI engineer in India?", "It varies widely with city, company type, experience and how much production work you have done, and published salary surveys often disagree. We do not quote a single figure. Compare current listings and salary reports for your city and experience level, and weigh the projects you can show."],
  ["Is AI engineering the same as prompt engineering?", "No. Prompt engineering is one skill inside AI engineering. AI engineers also build retrieval pipelines, connect models to tools and databases, write evaluation suites, deploy APIs, monitor cost and latency, and handle security and access control. Prompting alone rarely makes a production-ready application."],
  ["Which course should I take to become an AI engineer in India?", "Pick one that makes you build and deploy, not just watch. Check the syllabus for Python and APIs, RAG with vector databases, agents with a framework such as LangGraph, evaluation, and deployment with FastAPI and Docker, plus projects you can show. Ivy Professional School's Advanced Generative AI Course is one option that covers most of this list; free documentation and a disciplined self-study plan also work."],
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
      datePublished: "2026-11-24",
      dateModified: "2026-11-24",
      mainEntityOfPage: canonicalUrl,
      articleSection: "GenAI / LLM",
      keywords: keywords.join(", "),
      about: ["AI engineer", "Career roadmap"],
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
        "https://www.latent.space/p/ai-engineer",
        "https://hamel.dev/blog/posts/evals/",
        "https://docs.langchain.com/oss/python/langgraph/overview",
        "https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview",
        "https://fastapi.tiangolo.com/",
        "https://arxiv.org/abs/2005.11401",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Help Center", item: "https://ivyproschool.com/aihelpcenter" },
        { "@type": "ListItem", position: 2, name: "GenAI / LLM", item: "https://ivyproschool.com/aihelpcenter/genai-llm" },
        { "@type": "ListItem", position: 3, name: "How to Become an AI Engineer" },
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
    publishedTime: "2026-11-24T00:00:00+05:30",
    modifiedTime: "2026-11-24T00:00:00+05:30",
    authors: ["Prateek Agrawal", "Eeshani Agrawal"],
  },
  twitter: { card: "summary_large_image", title: headline, description, site: "@IvyProSchool" },
};

export default function HowToBecomeAnAiEngineerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ArticleReviewProgress />
      <div className={`${styles.page} ${montserrat.variable} ${poppins.variable}`} dangerouslySetInnerHTML={{ __html: articleMarkup }} />
    </>
  );
}
