import { COMPANY } from "@/lib/company-facts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Reviews & Success Stories | Ivy Professional School | 4.8★ Rated",
  description:
    "Read " + COMPANY.googleReviewsLabel + " Google reviews of Ivy Professional School's Data Science, Generative AI & Analytics courses. Watch video testimonials from alumni placed at Amazon, Google, IBM, Deloitte & 500+ firms.",
  keywords: [
    "Ivy Professional School reviews",
    "data science course reviews India",
    "Ivy Pro School student feedback",
    "IIT Guwahati data science reviews",
    "pay after placement reviews",
    "generative AI course reviews",
    "data analytics course testimonials",
    "best data science institute Kolkata",
  ],
  openGraph: {
    title: "Student Reviews & Success Stories | Ivy Professional School | 4.8★ Rated",
    description:
      COMPANY.googleReviewsLabel + " Google reviews. Watch video stories from alumni now at Amazon, Google, Deloitte & IBM. See how Ivy Pro's Data Science & AI courses transform careers.",
    url: "https://ivyproschool.com/reviews",
    type: "website",
    siteName: "Ivy Professional School",
    images: ["https://ivyproschool.com/assets/logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Reviews | Ivy Pro School | " + COMPANY.googleRating + "★ from " + COMPANY.googleReviewsLabel + " Google reviews",
    description:
      "Real reviews from students now working at Amazon, Google, IBM & Deloitte. Ivy Pro School's Data Science & AI courses — rated 4.8/5.",
    site: "@IvyProSchool",
    images: ["https://ivyproschool.com/assets/logo.webp"],
  },
  alternates: { canonical: "https://ivyproschool.com/reviews" },
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
