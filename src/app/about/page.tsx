import type { Metadata } from "next";
import About from "./About";

export const metadata: Metadata = {
  title: "About Ivy Professional School – Our Story, Leaders & Ventures",
  description:
    "Discover Ivy Professional School's journey, meet founders Prateek and Eeshani Agrawal, and explore the Ivy ecosystem across AI, education, mobility and real estate.",
  openGraph: {
    title: "About Ivy Professional School – Our Story, Leaders & Ventures",
    description:
      "Discover Ivy Professional School's story and its ventures across AI, education, electric mobility and real estate.",
    url: "https://ivyproschool.com/about",
    type: "website",
    siteName: "Ivy Professional School",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ivy Professional School – Our Story, Leaders & Ventures",
    description: "Meet our founders and explore the growing Ivy ecosystem.",
  },
  alternates: { canonical: "https://ivyproschool.com/about" },
};

export default function AboutPage() {
  return <About />;
}
