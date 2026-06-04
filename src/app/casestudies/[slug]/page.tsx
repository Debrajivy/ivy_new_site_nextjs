import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudiesPage from "../page";

type Params = { slug: string };
type AsyncPageProps = { params: Promise<Params> };

const caseStudySlugs = [
  "enterprise-wide-training-in-data-analytics-data-science-and-ai",
  "establishing-gurukul-a-centralized-learning-and-development-department-for-workforce-transformation",
  "ai-for-leaders-enabling-cxos-and-senior-executives-to-drive-enterprise-transformation",
  "department-payroll",
  "skeleton-crew",
  "rank-and-file",
  "sales-and-aov-trends",
  "performance-trends",
  "merchandising",
  "cohort-analysis",
  "inventory-vs-sales-demand-alignment",
  "web-event-analysis",
  "advertisement-analysis",
];

const titleFromSlug = (slug: string) => {
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
};

const normalizeSlug = (slug: string) =>
  titleFromSlug(slug)
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: AsyncPageProps): Promise<Metadata> {
  const { slug } = await params;
  const normalizedSlug = normalizeSlug(slug);
  const readableTitle = normalizedSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title: `${readableTitle} | Case Study | Ivy Professional School`,
    description: `Read the ${readableTitle} case study from Ivy Professional School.`,
    alternates: {
      canonical: `https://ivyproschool.com/casestudies/${normalizedSlug}`,
    },
    openGraph: {
      title: `${readableTitle} | Case Study | Ivy Professional School`,
      description: `Read the ${readableTitle} case study from Ivy Professional School.`,
      url: `https://ivyproschool.com/casestudies/${normalizedSlug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: AsyncPageProps) {
  const { slug } = await params;
  const normalizedSlug = normalizeSlug(slug);

  if (!caseStudySlugs.includes(normalizedSlug)) {
    notFound();
  }

  return <CaseStudiesPage initialSlug={normalizedSlug} />;
}
