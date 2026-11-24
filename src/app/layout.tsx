// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DeferredAnalytics from "@/components/DeferredAnalytics";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// --- METADATA & SCHEMA DATA ---

export const metadata: Metadata = {
  title: "#1 Data Science & GenAI Training Institute | Placement Assistance | Ivy Professional School",
  description:
    "Advance your career in Data Science with Ivy Pro, trusted by 37,500+ alumni across 500+ firms. Rated 4.8/5. Industry-led training since 2008.",
  authors: [{ name: "Ivy Professional School" }],
  keywords: [
    "GenAI Courses",
    "Data Science Courses",
    "Ivy Professional School",
    "Analytics Training",
    "AI Training",
    "NASSCOM",
    "IBM",
    "MEITY",
  ],
  // ADDED GOOGLE SITE VERIFICATION HERE
  verification: {
    google: "5DI8S_HoObJNVtsYs8s9vhGls8HL93FvxJdZYSPo_G4",
  },
  openGraph: {
    title: "#1 Data Science & GenAI Training Institute | Placement Assistance | Ivy Professional School",
    description:
      "Advance your career in Data Science with Ivy Pro, trusted by 37,500+ alumni across 500+ firms. Rated 4.8/5. Industry-led training since 2008.",
    url: "https://ivyproschool.com/",
    type: "website",
    siteName: "Ivy Professional School",
    images: ["https://ivyproschool.com/assets/logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 Data Science & GenAI Training Institute | Placement Assistance | Ivy Professional School",
    description:
      "Advance your career in Data Science with Ivy Pro, trusted by 37,500+ alumni across 500+ firms. Rated 4.8/5. Industry-led training since 2008.",
    site: "@IvyProSchool",
    images: ["https://ivyproschool.com/assets/logo.webp"],
  },
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "https://ivyproschool.com/" },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ivy Professional School",
  url: "https://ivyproschool.com/",
  logo: "https://ivyproschool.com/assets/logo.png",
  sameAs: [
    "https://www.facebook.com/ivyproschool",
    "https://x.com/ivyproschool",
    "https://www.linkedin.com/school/ivy-professional-school",
    "https://www.youtube.com/ivyproschool",
    "https://www.instagram.com/ivyproschool",
  ],
  description:
    "Advance your career in Data Science with Ivy Pro, trusted by 37,500+ alumni across 500+ firms. Rated 4.8/5. Industry-led training since 2008.",
  foundingDate: "2008",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "India",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+91 7676882222",
    areaServed: "IN",
  },
};

// --- ROOT LAYOUT COMPONENT ---

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        {children}
        {/* Facebook Pixel Noscript Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1435433223444500&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <DeferredAnalytics />
      </body>
    </html>
  );
}
