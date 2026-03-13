import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import FooterMain from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "AI Help Center | Free GenAI, Data Science & SQL Tutorials | Ivy Pro School",
  description:
    "Free tutorials on Generative AI, LLMs, Data Science, Python, SQL, Machine Learning, MLOps and more. Expert-authored learning resources from Ivy Pro School.",
  openGraph: {
    title: "AI Help Center | Free GenAI, Data Science & SQL Tutorials | Ivy Pro School",
    description:
      "Explore free, expert-authored tutorials on GenAI, LLMs, Python, SQL, Machine Learning, and Data Science. Learn at your own pace with Ivy Pro School's AI Help Center.",
    url: "https://ivyproschool.com/aihelpcenter",
    type: "website",
    siteName: "Ivy Professional School",
    images: ["https://ivyproschool.com/assets/logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Help Center | Free GenAI, Data Science & SQL Tutorials | Ivy Pro School",
    description:
      "Free tutorials on GenAI, LLMs, Python, SQL, Machine Learning & more. Expert-authored resources from Ivy Pro School.",
    site: "@IvyProSchool",
    images: ["https://ivyproschool.com/assets/logo.webp"],
  },
  alternates: { canonical: "https://ivyproschool.com/aihelpcenter" },
};

export default function AIHelpCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      {children}
      <FooterMain />
    </div>
  );
}