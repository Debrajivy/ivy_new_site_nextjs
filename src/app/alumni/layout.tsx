import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alumni Success Stories | Data Science & AI Career Transformations | Ivy Pro School",
  description:
    "Explore real placement stories from 37,500+ Ivy Pro School alumni. See how students landed roles at Amazon, Google, IBM, Deloitte, PwC and more — with salary hikes of 40%–400%.",
  openGraph: {
    title: "Alumni Success Stories | Data Science & AI Career Transformations | Ivy Pro School",
    description:
      "37,500+ alumni placed at Amazon, Google, IBM, Deloitte, PwC and 500+ firms. Read real career transformation stories from Ivy Pro School graduates.",
    url: "https://ivyproschool.com/alumni",
    type: "website",
    siteName: "Ivy Professional School",
    images: ["https://ivyproschool.com/assets/logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alumni Success Stories | Ivy Pro School",
    description:
      "Real placement stories from 37,500+ alumni at Amazon, Google, IBM, Deloitte and more. See Data Science & AI career transformations.",
    site: "@IvyProSchool",
    images: ["https://ivyproschool.com/assets/logo.webp"],
  },
  alternates: { canonical: "https://ivyproschool.com/alumni" },
};

export default function AlumniLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
