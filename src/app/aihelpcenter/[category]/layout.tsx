import type { Metadata } from "next";
import { data } from "../lib/data";

// Custom meta titles for specific category landing pages
const categoryMetaTitles: Record<string, string> = {
  "machine-learning": "Machine Learning Basics & Concepts | AI Help Center",
  "sql-db": "SQL Database Basics | Beginner-Friendly Guide",
  "career": "Data Science & AI Careers | Ivy Pro School Guide",
};

export async function generateMetadata(
  { params }: { params: Promise<{ category: string }> }
): Promise<Metadata> {
  const { category } = await params;

  if (categoryMetaTitles[category]) {
    return { title: categoryMetaTitles[category] };
  }

  const categoryData = data.categories[category as keyof typeof data.categories];
  const categoryTitle = categoryData?.title ?? category;

  return {
    title: `${categoryTitle} | AI Help Center | Ivy Pro School`,
  };
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
