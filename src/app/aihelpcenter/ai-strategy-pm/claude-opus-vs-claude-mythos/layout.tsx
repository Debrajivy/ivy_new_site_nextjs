import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Opus 4.7 vs. Claude Mythos: Full Benchmark Comparison | AI Strategy (PM) | Ivy Pro School",
  description:
    "Claude Opus 4.7 vs. Claude Mythos — complete benchmark breakdown across SWE-bench, BrowseComp, GPQA, MCP Atlas, OS World, and CyberGym. Which model should you use, and why is Mythos restricted?",
  openGraph: {
    title: "Claude Opus 4.7 vs. Claude Mythos: Full Benchmark Comparison",
    description:
      "Claude Opus 4.7 vs. Claude Mythos — complete benchmark breakdown across SWE-bench, BrowseComp, GPQA, MCP Atlas, OS World, and CyberGym. Which model should you use, and why is Mythos restricted?",
    url: "https://ivyproschool.com/aihelpcenter/ai-strategy-pm/claude-opus-vs-claude-mythos",
    siteName: "Ivy Pro School",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Opus 4.7 vs. Claude Mythos: Full Benchmark Comparison",
    description:
      "Every benchmark compared — knowledge vs. execution, why Mythos is restricted, and who should use which model.",
  },
  alternates: {
    canonical:
      "https://ivyproschool.com/aihelpcenter/ai-strategy-pm/claude-opus-vs-claude-mythos",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
