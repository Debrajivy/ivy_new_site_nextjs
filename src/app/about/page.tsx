import type { Metadata } from "next";
import About from "./About"; 

export const metadata: Metadata = {
  title: "About Ivy Professional School – Founders, Story & Mission",
  description:
    "Learn about Ivy Professional School: our story since 2008, visionary founders, associated companies, mission, vision, and values in data science & AI education.",
  openGraph: {
    title: "About Ivy Professional School – Founders, Story & Mission",
    description:
      "Discover Ivy Professional School’s journey since 2008, its founders, associated companies, mission & vision in data science and AI education.",
    url: "https://ivyproschool.com/about",
    type: "website",
    siteName: "Ivy Professional School",
    images: [
      {
        url: "https://ivyproschool.com/assets/logo.webp", // ideally a large image (1200x630)
        width: 1200,
        height: 630,
        alt: "Ivy Professional School – Founders & Mission",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ivy Professional School – Founders, Story & Mission",
    description:
      "Meet our founders and learn Ivy Professional School’s mission & vision in AI and Data Science education.",
    images: ["https://ivyproschool.com/assets/logo.webp"], // 1200x600 preferred
  },
  alternates: {
    canonical: "https://ivyproschool.com/about",
  },
};

export default function AboutPage() {
  return <About />;
}
