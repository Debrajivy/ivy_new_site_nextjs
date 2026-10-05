import type { Metadata } from "next";

const title = "How Do LLM Context Windows Work? Tokens & Limits";
const description =
  "An LLM context window is the token limit a model can read and write in one request. How it fills up, why AI forgets, and when a bigger window won't help.";
const url = "https://ivyproschool.com/aihelpcenter/genai-llm/how-do-llm-context-windows-work";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "how do LLM context windows work",
    "LLM context window",
    "context window in AI",
    "tokens in LLM",
    "LLM token limit",
    "lost in the middle",
    "context window vs memory",
    "context window vs RAG",
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
    publishedTime: "2026-09-09T00:00:00+05:30",
    modifiedTime: "2026-10-04T00:00:00+05:30",
    authors: ["Prateek Agrawal", "Eeshani Agrawal"],
  },
  twitter: {
    card: "summary",
    title,
    description,
    site: "@IvyProSchool",
  },
};

export default function ContextWindowArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
