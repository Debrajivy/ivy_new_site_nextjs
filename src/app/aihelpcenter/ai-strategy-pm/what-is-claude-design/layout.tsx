import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Claude Design? The AI-Powered Visual Tool for Every Professional | Ivy Pro School",
  description:
    "Anthropic launched Claude Design on April 17, 2026 — powered by Claude Opus 4.7. Learn what it is, how it works, six real use cases, competitive landscape, and what it means for professional development.",
  openGraph: {
    title: "What is Claude Design? The AI-Powered Visual Tool for Every Professional",
    description:
      "Anthropic launched Claude Design on April 17, 2026 — powered by Claude Opus 4.7. Learn what it is, how it works, six real use cases, competitive landscape, and what it means for professional development.",
    url: "https://ivyproschool.com/aihelpcenter/ai-strategy-pm/what-is-claude-design",
    siteName: "Ivy Pro School",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is Claude Design? Anthropic's AI Visual Tool Explained",
    description:
      "Claude Design by Anthropic — animated videos, pitch decks, landing pages, prototypes and more. Complete guide for professionals.",
  },
  alternates: {
    canonical: "https://ivyproschool.com/aihelpcenter/ai-strategy-pm/what-is-claude-design",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
