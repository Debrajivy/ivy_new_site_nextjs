import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI & Data Science Bootcamps | Live Online Workshops | Ivy Pro School",
  description:
    "Join free live bootcamps on Generative AI, AI Agents, SQL, Python, Excel and more. Hands-on workshops mentored by industry experts. Get certified with Ivy Pro School.",
  openGraph: {
    title: "Free AI & Data Science Bootcamps | Live Online Workshops | Ivy Pro School",
    description:
      "Free live bootcamps on Gen AI, AI Agents, SQL, Python and Excel. Hands-on sessions mentored by Ivy Pro School experts. Limited seats — register now.",
    url: "https://ivyproschool.com/bootcamp",
    type: "website",
    siteName: "Ivy Professional School",
    images: ["https://ivyproschool.com/assets/logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI & Data Science Bootcamps | Ivy Pro School",
    description:
      "Free live bootcamps on Gen AI, AI Agents, SQL, Python & Excel. Hands-on sessions with industry experts. Limited seats.",
    site: "@IvyProSchool",
    images: ["https://ivyproschool.com/assets/logo.webp"],
  },
  alternates: { canonical: "https://ivyproschool.com/bootcamp" },
};

export default function BootcampLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
