import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Use Claude AI Like a Pro: Complete Beginner to Advanced Guide | AI Strategy (PM) | Ivy Pro School",
  description:
    "Master Claude AI from beginner to advanced — learn Claude Chat, Projects, Artifacts, Skills, Claude Code, Co-Work, MCP connectors, and real automation workflows with this complete guide.",
  openGraph: {
    title: "How to Use Claude AI Like a Pro: Complete Beginner to Advanced Guide",
    description:
      "Master Claude AI from beginner to advanced — learn Claude Chat, Projects, Artifacts, Skills, Claude Code, Co-Work, MCP connectors, and real automation workflows with this complete guide.",
    url: "https://ivyproschool.com/aihelpcenter/ai-strategy-pm/how-to-use-claude-ai-like-a-pro",
    siteName: "Ivy Pro School",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Use Claude AI Like a Pro: Complete Beginner to Advanced Guide",
    description:
      "Master Claude AI from beginner to advanced — Claude Chat, Artifacts, Claude Code, MCP, and automation workflows explained.",
  },
  alternates: {
    canonical:
      "https://ivyproschool.com/aihelpcenter/ai-strategy-pm/how-to-use-claude-ai-like-a-pro",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
