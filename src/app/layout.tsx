// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DeferredAnalytics from "@/components/DeferredAnalytics";
import { COMPANY } from "@/lib/company-facts";
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
};

// One JSON-LD block: the EducationalOrganization and the WebSite, linked by @id.
// Every value comes from src/lib/company-facts.ts.
type PostalAddress = {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry: "IN";
};

const ORG_ID = `${COMPANY.url}/#organization`;

const addresses: PostalAddress[] = COMPANY.offices.map((o) => ({
  "@type": "PostalAddress",
  streetAddress: o.streetAddress,
  addressLocality: o.city,
  ...("addressRegion" in o ? { addressRegion: o.addressRegion } : {}),
  ...("postalCode" in o ? { postalCode: o.postalCode } : {}),
  addressCountry: "IN",
}));

const organization = {
  "@type": "EducationalOrganization",
  "@id": ORG_ID,
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  url: `${COMPANY.url}/`,
  logo: { "@type": "ImageObject", url: COMPANY.logo },
  sameAs: [...COMPANY.sameAs],
  description: `Advance your career in Data Science with Ivy Pro, trusted by ${COMPANY.alumniLabel} alumni across ${COMPANY.hiringCompaniesLabel} firms. Rated ${COMPANY.googleRating}/5. Industry-led training since ${COMPANY.foundingYear}.`,
  foundingDate: String(COMPANY.foundingYear),
  founder: { "@type": "Person", name: COMPANY.founder },
  address: addresses,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+91 7676882222",
    areaServed: "IN",
  },
};

const website = {
  "@type": "WebSite",
  "@id": `${COMPANY.url}/#website`,
  url: `${COMPANY.url}/`,
  name: COMPANY.name,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-IN",
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [organization, website],
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
