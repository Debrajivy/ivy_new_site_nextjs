import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Use Claude in Finance: AI for Financial Analysis, Modeling & Excel | Ivy Pro School",
  description:
    "Complete guide to using Claude AI for financial analysis, modeling, and Excel automation — DCF models, scenario analysis, dashboards, data cleaning, and formula building with AI.",
  openGraph: {
    title: "How to Use Claude in Finance: AI for Financial Analysis, Modeling & Excel",
    description:
      "Complete guide to using Claude AI for financial analysis, modeling, and Excel automation — DCF models, scenario analysis, dashboards, data cleaning, and formula building with AI.",
    url: "https://ivyproschool.com/aihelpcenter/ai-strategy-pm/how-to-use-claude-in-finance",
    siteName: "Ivy Pro School",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Use Claude in Finance: AI for Financial Analysis & Modeling",
    description:
      "Master Claude for Excel — financial modeling, DCF analysis, dashboards, data cleaning, and automation explained.",
  },
  alternates: {
    canonical:
      "https://ivyproschool.com/aihelpcenter/ai-strategy-pm/how-to-use-claude-in-finance",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
