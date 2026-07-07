import type { Course } from "@/lib/api"

type RelatedLink = { label: string; href: string }
type Family = "generative-ai" | "data-science" | "data-engineering" | "data-analytics"

const related = (label: string, href: string): RelatedLink => ({ label, href })

const genAiLinks = [
  related("Generative AI Course in Kolkata", "/courses/generative-ai-course-kolkata"),
  related("Generative AI Course in Bangalore", "/courses/generative-ai-course-bangalore"),
  related("Generative AI Course in Delhi", "/courses/generative-ai-course-delhi"),
  related("Data Analytics and Generative AI Course", "/courses/data-analytics-and-generative-ai-course"),
  related("How to Use Claude AI Like a Pro", "/aihelpcenter/ai-strategy-pm/how-to-use-claude-ai-like-a-pro"),
  related("Low-Code AI Workflow Automation Tools", "/aihelpcenter/ai-strategy-pm/low-code-ai-workflow-automation-tools-2026"),
]

const dataScienceLinks = [
  related("Data Science Course in Kolkata", "/courses/data-science-course-kolkata"),
  related("Data Science Course in Bangalore", "/courses/data-science-course-bangalore"),
  related("Data Science Course in Delhi", "/courses/data-science-course-delhi"),
  related("Pay After Placement Data Science Course", "/courses/no-upfront-fees-data-science-and-ml-course"),
  related("Decision Tree vs Random Forest", "/aihelpcenter/machine-learning/decision-tree-vs-random-forest"),
  related("Build a Data Science Portfolio", "/aihelpcenter/career/how-to-build-a-data-science-portfolio-without-experience"),
]

const dataEngineeringLinks = [
  related("Data Engineering Course in Kolkata", "/courses/data-engineering-course-kolkata"),
  related("Data Engineering Course in Bangalore", "/courses/data-engineering-course-bangalore"),
  related("Data Engineering Course in Delhi", "/courses/data-engineering-course-delhi"),
  related("IIT Guwahati Data Engineering Course", "/courses/iit-data-engineering-course"),
  related("Star Schema vs Snowflake Schema", "/aihelpcenter/data-engineering/star-schema-vs-snowflake-schema"),
  related("Data Analytics Course", "/courses/data-analytics-course"),
]

const dataAnalyticsLinks = [
  related("Data Analytics Course in Kolkata", "/courses/data-analytics-course-kolkata"),
  related("Data Analytics Course in Bangalore", "/courses/data-analytics-course-bangalore"),
  related("Data Analytics Course in Delhi", "/courses/data-analytics-course-delhi"),
  related("Data Analytics and Generative AI Course", "/courses/data-analytics-and-generative-ai-course"),
  related("Data Visualization Course", "/courses/data-visualization-course"),
  related("Use Claude in Excel for Data Analytics", "/aihelpcenter/ai-strategy-pm/how-to-use-claude-in-excel-for-data-analytics"),
]

const productManagerLinks = [
  related("Best AI Tools for Product Managers", "/aihelpcenter/ai-for-product-managers/best-ai-tools-2026"),
  related("Low-Code AI Workflow Automation Tools", "/aihelpcenter/ai-strategy-pm/low-code-ai-workflow-automation-tools-2026"),
  related("How to Use NotebookLM", "/aihelpcenter/ai-strategy-pm/how-to-use-notebooklm"),
  related("What Is Claude Design?", "/aihelpcenter/ai-strategy-pm/what-is-claude-design"),
  related("Generative AI Course", "/courses/generative-ai-course"),
  related("AI and Machine Learning Course", "/courses/ai-machine-learning-course"),
]

const appliedAiLinks = [
  related("Generative AI Course", "/courses/generative-ai-course"),
  related("AI Product Manager Course", "/courses/ai-product-manager-course"),
  related("AI and Machine Learning Course", "/courses/ai-machine-learning-course"),
  related("Low-Code AI Workflow Automation Tools", "/aihelpcenter/ai-strategy-pm/low-code-ai-workflow-automation-tools-2026"),
  related("How to Use Claude AI Like a Pro", "/aihelpcenter/ai-strategy-pm/how-to-use-claude-ai-like-a-pro"),
  related("How to Use NotebookLM", "/aihelpcenter/ai-strategy-pm/how-to-use-notebooklm"),
]

function cityPeers(slug: string, family: Family): RelatedLink[] {
  const labels: Record<Family, string> = {
    "generative-ai": "Generative AI Course",
    "data-science": "Data Science Course",
    "data-engineering": "Data Engineering Course",
    "data-analytics": "Data Analytics Course",
  }
  const cities = ["kolkata", "bangalore", "delhi", "mumbai", "pune", "chennai"]
  const coreSlug = family === "generative-ai" ? "generative-ai-course" : `${family}-course`

  return [
    related(labels[family], `/courses/${coreSlug}`),
    ...cities.map(city =>
      related(`${labels[family]} in ${city[0].toUpperCase()}${city.slice(1)}`, `/courses/${family}-course-${city}`),
    ),
  ].filter(item => item.href !== `/courses/${slug}`)
}

function linksFor(course: Course): RelatedLink[] {
  const { slug } = course
  let links: RelatedLink[]

  if (slug.startsWith("generative-ai-course-")) links = cityPeers(slug, "generative-ai")
  else if (slug.startsWith("data-science-course-")) links = cityPeers(slug, "data-science")
  else if (slug.startsWith("data-engineering-course-")) links = cityPeers(slug, "data-engineering")
  else if (slug.startsWith("data-analytics-course-")) links = cityPeers(slug, "data-analytics")
  else if (slug === "ai-product-manager-course") links = productManagerLinks
  else if (slug === "ai-for-entrepreneurs-course" || slug === "ai-for-beginners-course") links = appliedAiLinks
  else if (slug === "generative-ai-course") links = genAiLinks
  else if (slug.includes("data-engineering")) links = dataEngineeringLinks
  else if (slug.includes("data-analytics") || slug === "data-visualization-course") links = dataAnalyticsLinks
  else if (slug.includes("data-science") || slug.includes("machine-learning")) links = dataScienceLinks
  else links = genAiLinks

  return links
    .filter(item => item.href !== `/courses/${slug}`)
    .filter((item, index, items) => items.findIndex(candidate => candidate.href === item.href) === index)
    .slice(0, 6)
}

export default function CourseRelatedLinks({ course }: { course: Course }) {
  const links = linksFor(course)

  return (
    <section aria-labelledby="related-learning-heading" className="w-full bg-[#121212] p-6 text-white md:p-12">
      <div className="mx-auto max-w-7xl">
        <h2 id="related-learning-heading" className="text-xl font-bold">
          Related Courses and Learning Resources
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-md border border-[#343434] bg-[#1e1e1e] px-4 py-3 text-sm text-[#8eb4ff] transition-colors hover:border-[#6495ED] hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
