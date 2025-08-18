import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ivy Professional School: #1 GenAI & Data Science Institute",
  description:
    "Join Ivy Pro's GenAI & Data Science Courses. 4.9/5 Rated since 2008. Partners: IIT Guwahati, NASSCOM, IBM. 32500+ Alumni in 500+ firms. 40+ Fortune 500 Clients",
  authors: [{ name: "Ivy Professional School" }],
  keywords: [
    "GenAI Courses",
    "Data Science Courses",
    "Ivy Professional School",
    "Analytics Training",
    "AI Training",
    "IIT Guwahati",
    "NASSCOM",
    "IBM",
    "MEITY",
  ],
  openGraph: {
    title:
      "Ivy Professional School – Premier Data Science & AI Education in Kolkata",
    description:
      "Join 32500+ alumni trained since 2008. Trusted by NASSCOM, IBM, IIT & MEITY. Elevate your career with hands-on Data Science, Analytics & AI training.",
    url: "https://ivyproschool.com/",
    type: "website",
    siteName: "Ivy Professional School",
    images: ["https://ivyproschool.com/logo.webp"], // uncomment when image is available
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ivy Professional School – Data Science & AI Education in Kolkata",
    description:
      "32500+ trained since 2008. Accredited by NASSCOM, IBM, IIT & MEITY. Empower your career in Data Science, Analytics & AI.",
    site: "@IvyProSchool",
    images: ["https://ivyproschool.com/logo.webp"], // uncomment when image is available
  },
  icons: {
    icon: "https://ivyproschool.com/favicon.ico",
  },
  alternates: {
    canonical: "https://ivyproschool.com/",
  },
  other: {
    // Extra meta tags that don't have direct support in Next Metadata API
    "application/ld+json": JSON.stringify({
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
        "Ivy Professional School – premier Data Science, Analytics & AI education since 2008. Accredited by NASSCOM, IBM, IIT & MEITY. Based in Kolkata.",
      foundingDate: "2008",
      alumni: "32500+",
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
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
