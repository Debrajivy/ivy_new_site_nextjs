import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Enterprise Data Science & AI Training Success Stories | Ivy Pro School",
  description:
    "Explore real-world case studies of how Ivy Pro School transformed organizations with Data Science, AI, and Analytics training — from manufacturing giants to global retail leaders.",
  openGraph: {
    title: "Case Studies | Enterprise Data Science & AI Training Success Stories | Ivy Pro School",
    description:
      "See how Ivy Pro School partnered with leading enterprises to drive workforce transformation through Data Science, AI, and Analytics — with measurable business impact.",
    url: "https://ivyproschool.com/casestudies",
    type: "website",
    siteName: "Ivy Professional School",
    images: ["https://ivyproschool.com/assets/logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Ivy Pro School",
    description:
      "Real enterprise case studies showcasing workforce transformation through Data Science, AI & Analytics training by Ivy Pro School.",
    site: "@IvyProSchool",
    images: ["https://ivyproschool.com/assets/logo.webp"],
  },
  alternates: { canonical: "https://ivyproschool.com/casestudies" },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
