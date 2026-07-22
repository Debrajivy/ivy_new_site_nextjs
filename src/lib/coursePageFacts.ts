const DATA_SCIENCE_TITLES = new Set([
  "Data Science with Machine Learning & AI Certification",
  "Data Science with Machine Learning & AI Course in Kolkata",
  "Data Science with Machine Learning & AI Course in Delhi",
  "Data Science with Machine Learning & AI Course in Pune",
  "Data Science with Machine Learning & AI Course in Chennai",
  "Data Science with Machine Learning & AI Course in Bangalore",
  "Data Science with Machine Learning & AI Course in Mumbai",
])

/** This is the duration logic displayed by CourseHero. */
export function getCourseDurationHours(title: string) {
  const normalizedTitle = title.trim()
  if (normalizedTitle === "AI and Machine Learning Course") return "80 Hours"
  if (normalizedTitle === "AI for Beginners") return "20 Hours"
  if (normalizedTitle === "AI for Entrepreneurs") return "20 Hours"
  if (DATA_SCIENCE_TITLES.has(normalizedTitle)) return "232 Hours"
  if (normalizedTitle === "AI for Product Managers") return "24 Hours"
  return "160 Hours"
}

export function hasCourseEmi(title: string) {
  return !["AI for Beginners", "AI for Entrepreneurs"].includes(title.trim())
}

export const ENTREPRENEUR_PROJECTS = [
  { title: "AI Sales Analyzer & Predictor", description: "Turn sales data into product insights, revenue trends and growth forecasts." },
  { title: "AI Marketing Studio", description: "Create product photos, lifestyle visuals, reels and ad campaigns without an agency." },
  { title: "AI Business Agent", description: "Build a live agent for complaint handling, lead qualification or invoice processing." },
  { title: "Pitch & Proposal Generator", description: "Generate a professional quotation or pitch from client needs and your product portfolio." },
  { title: "Customer Voice Agent", description: "Deploy a working voice workflow that can respond to common customer issues." },
]
