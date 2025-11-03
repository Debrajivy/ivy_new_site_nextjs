// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

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
    title: "Ivy Professional School: #1 GenAI & Data Science Institute",
    description:
      "Join Ivy Pro's GenAI & Data Science Courses. 4.9/5 Rated since 2007. Partners: IIT Guwahati, NASSCOM, IBM. 32500+ Alumni in 500+ firms. 40+ Fortune 500 Clients",
    url: "https://ivyproschool.com/",
    type: "website",
    siteName: "Ivy Professional School",
    images: ["https://ivyproschool.com/assets/logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivy Professional School: #1 GenAI & Data Science Institute",
    description:
      "Join Ivy Pro's GenAI & Data Science Courses. 4.9/5 Rated since 2007. Partners: IIT Guwahati, NASSCOM, IBM. 32500+ Alumni in 500+ firms. 40+ Fortune 500 Clients",
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
    "Join Ivy Pro's GenAI & Data Science Courses. 4.9/5 Rated since 2007. Partners: IIT Guwahati, NASSCOM, IBM. 32500+ Alumni in 500+ firms. 40+ Fortune 500 Clients",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-981187918"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-981187918');
            `,
          }}
        />

        {/*  JSON-LD: this is what schema tools look for */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* GTM */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PZPNXDVD');
            `,
          }}
        />

        {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1435433223444500');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        {/* GTM noscript */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZPNXDVD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt="facebook"
            src="https://www.facebook.com/tr?id=1435433223444500&ev=PageView&noscript=1"
          />
        </noscript> */}

        {children}

        {/* LeadSquared Tracking */}
        <Script
          src="https://web.mxradon.com/t/Tracker.js"
          strategy="afterInteractive"
        />
        <Script
          id="leadsquared-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: "pidTracker('18802');",
          }}
        />

      </body>
    </html>
  );
}
