import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decision Tree vs Random Forest: Differences, Use Cases & When to Use Each | Ivy Pro School",
  description:
    "Understand the difference between Decision Tree and Random Forest with real-world examples, performance metrics, and use cases. A complete beginner-to-advanced guide for 2026.",
  openGraph: {
    title: "Decision Tree vs Random Forest: Differences, Use Cases & When to Use Each",
    description:
      "Understand the difference between Decision Tree and Random Forest with real-world examples, performance metrics, and use cases. A complete beginner-to-advanced guide for 2026.",
    url: "https://ivyproschool.com/aihelpcenter/machine-learning/decision-tree-vs-random-forest",
    siteName: "Ivy Pro School",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decision Tree vs Random Forest: Differences, Use Cases & When to Use Each",
    description:
      "Key differences, performance metrics, real-world use cases, and when to choose Decision Tree vs Random Forest — explained clearly.",
  },
  alternates: {
    canonical: "https://ivyproschool.com/aihelpcenter/machine-learning/decision-tree-vs-random-forest",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
