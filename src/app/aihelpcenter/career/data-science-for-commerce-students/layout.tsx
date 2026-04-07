import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is Data Science a Good Career for Commerce Students? | Career Guide 2025 | Ivy Pro School",
  description:
    "A complete, practical roadmap for BCom graduates entering Data Science and Analytics careers — covering skills, roles, salary, and the step-by-step path from commerce to Business Analyst, Data Analyst, and beyond.",
  openGraph: {
    title: "Is Data Science a Good Career for Commerce Students? Career Guide 2025",
    description:
      "A complete, practical roadmap for BCom graduates entering Data Science and Analytics careers — covering skills, roles, salary, and the step-by-step path from commerce to Business Analyst, Data Analyst, and beyond.",
    url: "https://ivyproschool.com/aihelpcenter/career/data-science-for-commerce-students",
    siteName: "Ivy Pro School",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Data Science a Good Career for Commerce Students?",
    description:
      "Practical roadmap for BCom graduates — skills, career roles, salary, and step-by-step path into Data Science and Analytics.",
  },
  alternates: {
    canonical:
      "https://ivyproschool.com/aihelpcenter/career/data-science-for-commerce-students",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
