import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Use Claude in Excel for Data Analytics | AI Strategy (PM) | Ivy Pro School",
  description:
    "Learn how to use Claude as an AI co-analyst inside Microsoft Excel — from cleaning data and writing formulas to interpreting trends and generating insights without leaving your spreadsheet.",
  openGraph: {
    title: "How to Use Claude in Excel for Data Analytics: A Complete Guide",
    description:
      "Learn how to use Claude as an AI co-analyst inside Microsoft Excel — from cleaning data and writing formulas to interpreting trends and generating insights without leaving your spreadsheet.",
    url: "https://ivyproschool.com/aihelpcenter/ai-strategy-pm/how-to-use-claude-in-excel-for-data-analytics",
    siteName: "Ivy Pro School",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Use Claude in Excel for Data Analytics",
    description:
      "Learn how to use Claude as an AI co-analyst inside Microsoft Excel — data cleaning, formulas, trend analysis, and more.",
  },
  alternates: {
    canonical:
      "https://ivyproschool.com/aihelpcenter/ai-strategy-pm/how-to-use-claude-in-excel-for-data-analytics",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
