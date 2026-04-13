import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Use NotebookLM: Complete Guide to Features, Pricing, and Best Practices | Ivy Pro School",
  description:
    "Complete guide to NotebookLM — features, pricing plans, use cases, audio overviews, slide decks, mind maps, best practices, alternatives, and whether it's worth it in 2026.",
  openGraph: {
    title: "How to Use NotebookLM: Complete Guide to Features, Pricing, and Best Practices",
    description:
      "Complete guide to NotebookLM — features, pricing plans, use cases, audio overviews, slide decks, mind maps, best practices, alternatives, and whether it's worth it in 2026.",
    url: "https://ivyproschool.com/aihelpcenter/ai-strategy-pm/how-to-use-notebooklm",
    siteName: "Ivy Pro School",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Use NotebookLM: Complete Guide to Features, Pricing & Best Practices",
    description:
      "Master NotebookLM — AI-powered research tool by Google. Features, pricing, use cases, best practices, and alternatives explained.",
  },
  alternates: {
    canonical: "https://ivyproschool.com/aihelpcenter/ai-strategy-pm/how-to-use-notebooklm",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
