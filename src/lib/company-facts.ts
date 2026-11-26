// src/lib/company-facts.ts (import as "@/lib/company-facts")
// Single source of truth for every figure shown on ivyproschool.com.
// Change a number here and it changes everywhere (pages, JSON-LD, llms.txt).
// Only approved figures. Ask marketing before adding a new one.

export const COMPANY = {
  name: "Ivy Professional School",
  legalName: "Ivy Knowledge Services Pvt Ltd",
  url: "https://ivyproschool.com",
  logo: "https://ivyproschool.com/lovable-uploads/ff3e5927-bf09-4aeb-a4ff-3583075c362e.png", // logo shown in the site footer
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
  // Social profiles linked in the site footer (src/components/layout/Footer.tsx)
  sameAs: [
    "https://in.linkedin.com/school/ivy-professional-school",
    "https://twitter.com/ivyproschool",
    "https://facebook.com/ivyproschool",
    "https://youtube.com/ivyproschool",
    "https://instagram.com/ivyproschool",
  ],
  // Office addresses as shown in the site footer and on /contact-us.
  // Only fields the site shows; no postcode where the site shows none.
  offices: [
    { city: "Kolkata", streetAddress: "14B, Camac St (5th Floor)", addressRegion: "West Bengal" },
    {
      city: "Bengaluru",
      streetAddress: "George Thangaiah Complex, Kalyan Nagar, Indira Nagar 1st Stage, H Colony, Indiranagar",
      addressRegion: "Karnataka",
      postalCode: "560038",
    },
    { city: "Delhi", streetAddress: "Start Works, 1st Floor DCM Building Barakhamba Road" },
    { city: "Pune", streetAddress: "Shivajinagar", addressRegion: "Maharashtra", postalCode: "411016" },
  ],
} as const;
