import type { Metadata } from "next";
import { data } from "../lib/data";

// Custom meta titles and descriptions for specific category landing pages
const categoryMeta: Record<string, { title: string; description: string }> = {
  "machine-learning": {
    title: "Machine Learning Tutorials & Concepts | AI Help Center | Ivy Pro School",
    description: "Learn Machine Learning from scratch — supervised learning, model evaluation, feature engineering, and real-world applications explained by industry experts.",
  },
  "sql-db": {
    title: "SQL & Database Tutorials for Beginners | AI Help Center | Ivy Pro School",
    description: "Master SQL queries, database design, joins, aggregations, and Text-to-SQL agents. Beginner-friendly guides with real-world examples.",
  },
  "career": {
    title: "Data Science & AI Career Guide | AI Help Center | Ivy Pro School",
    description: "Navigate your Data Science and AI career — resume tips, interview prep, portfolio building, and salary insights from Ivy Pro School experts.",
  },
  "genai-llm": {
    title: "Generative AI & LLM Tutorials | AI Help Center | Ivy Pro School",
    description: "Deep-dive into Generative AI and Large Language Models — RAG, fine-tuning, Text-to-SQL agents, and LLM applications explained with code examples.",
  },
  "python-basics": {
    title: "Python for Data Science & AI | AI Help Center | Ivy Pro School",
    description: "Learn Python for Data Science — pandas, NumPy, data wrangling, and automation with hands-on examples and beginner-friendly explanations.",
  },
  "visualization": {
    title: "Data Visualization Tutorials | Power BI, Tableau | AI Help Center | Ivy Pro School",
    description: "Master data visualization with Tableau, Power BI, and DAX. Learn chart design, dual-axis charts, YoY analysis, and dashboard storytelling.",
  },
  "mlops": {
    title: "MLOps Tutorials & Best Practices | AI Help Center | Ivy Pro School",
    description: "Learn MLOps — model deployment, CI/CD for ML, monitoring, and production best practices. Bridge the gap between data science and engineering.",
  },
  "data-engineering": {
    title: "Data Engineering Tutorials | Pipelines & ETL | AI Help Center | Ivy Pro School",
    description: "Learn data engineering — pipelines, ETL, Apache Spark, data lakes, and modern data stack best practices from Ivy Pro School experts.",
  },
};

export async function generateMetadata(
  { params }: { params: Promise<{ category: string }> }
): Promise<Metadata> {
  const { category } = await params;

  if (categoryMeta[category]) {
    return {
      title: categoryMeta[category].title,
      description: categoryMeta[category].description,
    };
  }

  const categoryData = data.categories[category as keyof typeof data.categories];
  const categoryTitle = categoryData?.title ?? category;
  const categoryDesc = (categoryData as any)?.description ?? "";

  return {
    title: `${categoryTitle} Tutorials | AI Help Center | Ivy Pro School`,
    description: categoryDesc
      ? `${categoryDesc} — Free tutorials and learning resources from Ivy Pro School's AI Help Center.`
      : `Free ${categoryTitle} tutorials, guides, and learning resources from Ivy Pro School's AI Help Center.`,
  };
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
