import type { Metadata } from "next";

const title = "Do LLMs Remember Previous Conversations? AI Memory Explained";
const description =
  "Do LLMs remember previous conversations? Learn how context windows, saved memory, RAG and chat history make AI appear to remember you.";
const url =
  "https://ivyproschool.com/aihelpcenter/genai-llm/do-llms-remember-previous-conversations";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "do LLMs remember previous conversations",
    "AI memory",
    "LLM memory",
    "ChatGPT memory",
    "context window",
    "RAG vs memory",
    "does talking to an LLM train it",
  ],
  authors: [
    { name: "Prateek Agrawal" },
    { name: "Eeshani Agrawal" },
  ],
  alternates: { canonical: url },
  openGraph: {
    type: "article",
    url,
    title,
    description,
    siteName: "Ivy Professional School",
    publishedTime: "2026-10-07T00:00:00+05:30",
    modifiedTime: "2026-10-07T00:00:00+05:30",
    authors: ["Prateek Agrawal", "Eeshani Agrawal"],
  },
  twitter: {
    card: "summary",
    title,
    description,
    site: "@IvyProSchool",
  },
};

export default function LlmMemoryArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
