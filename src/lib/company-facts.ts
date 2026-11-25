// src/lib/company-facts.ts (import as "@/lib/company-facts")
// Single source of truth for every figure shown on ivyproschool.com.
// Change a number here and it changes everywhere (pages, JSON-LD, llms.txt).
// Only approved figures. Ask marketing before adding a new one.

export const COMPANY = {
  name: "Ivy Professional School",
  legalName: "Ivy Knowledge Services Pvt Ltd",
  url: "https://ivyproschool.com",
  logo: "https://ivyproschool.com/logo.png", // TODO developer: real logo URL
  foundingYear: 2008,
  yearsLabel: "18+ years",
  founder: "Prateek Agrawal",
  alumniLabel: "37,500+",
  trainersLabel: "400+",
  hiringCompaniesLabel: "500+",
  placementPctLabel: "82%", // overall since 2008
  placementAssistanceLabel: "100% placement assistance", // a service, not a placement rate
  cohortPlacementLabel: "94% placement rate (recent full-time cohort study)", // always show with this label
  avgSalaryHikeLabel: "67%",
  googleRating: 4.8,
  googleReviewsLabel: "2,250+",
  googleReviewsCount: 2250, // numeric form for JSON-LD ratingCount
  recognition: "Recognised by MeitY",
  cities: ["Kolkata", "Bangalore", "Delhi", "Pune", "Mumbai"],
  // TODO developer: confirm official profile URLs
  sameAs: [
    "https://www.linkedin.com/school/ivy-professional-school/",
    "https://www.youtube.com/@IvyProSchool",
    "https://www.facebook.com/ivyproschool",
    "https://www.instagram.com/ivyproschool/",
  ],
} as const;
