import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Science & AI Careers in Kolkata: The Complete 2026 Guide | Ivy Pro School",
  description:
    "Everything you need to know about the booming Data Science, Machine Learning, and AI job market in Kolkata — top roles, salary ranges, must-have skills, and how to launch your career in 2026.",
  openGraph: {
    title: "Data Science & AI Careers in Kolkata: The Complete 2026 Guide",
    description:
      "Everything you need to know about the booming Data Science, Machine Learning, and AI job market in Kolkata — top roles, salary ranges, must-have skills, and how to launch your career in 2026.",
    url: "https://ivyproschool.com/aihelpcenter/career/data-science-ai-careers-kolkata-2026",
    siteName: "Ivy Pro School",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Science & AI Careers in Kolkata: The Complete 2026 Guide",
    description:
      "Top roles, salary ranges, must-have skills, and how to launch your Data Science or AI career in Kolkata in 2026.",
  },
  alternates: {
    canonical:
      "https://ivyproschool.com/aihelpcenter/career/data-science-ai-careers-kolkata-2026",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
