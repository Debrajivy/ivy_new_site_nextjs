// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import MicrosoftClarity from "@/components/MicrosoftClarity";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// --- METADATA & SCHEMA DATA ---

export const metadata: Metadata = {
  title: "#1 Data Science & GenAI Training Institute | Placement Assistance | Ivy Professional School",
  description:
    "Advance your career in Data Science with Ivy Pro, trusted by 37,500+ alumni across 500+ firms. Rated 4.9/5. Industry-led training since 2008.",
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
      "Advance your career in Data Science with Ivy Pro, trusted by 37,500+ alumni across 500+ firms. Rated 4.9/5. Industry-led training since 2008.",
    url: "https://ivyproschool.com/",
    type: "website",
    siteName: "Ivy Professional School",
    images: ["https://ivyproschool.com/assets/logo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 Data Science & GenAI Training Institute | Placement Assistance | Ivy Professional School",
    description:
      "Advance your career in Data Science with Ivy Pro, trusted by 37,500+ alumni across 500+ firms. Rated 4.9/5. Industry-led training since 2008.",
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
    "Advance your career in Data Science with Ivy Pro, trusted by 37,500+ alumni across 500+ firms. Rated 4.9/5. Industry-led training since 2008.",
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
        {/* Resource hints — load critical third-party origins early */}
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://web.mxradon.com" />

        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-981187918"

          strategy="lazyOnload"
        />
        <Script
          id="google-ads"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-981187918');
            `,
          }}
        />

        {/* JSON-LD: this is what schema tools look for */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* GTM - Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="lazyOnload"
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
          strategy="lazyOnload"
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
        {/* LeadSquared Tracking - lazyOnload so it never blocks rendering */}
        <Script
          id="leadsquared-tracker"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var t=document.createElement('script');
                t.src='https://web.mxradon.com/t/Tracker.js';
                t.async=true;
                t.onload=function(){if(typeof pidTracker==='function')pidTracker('18802');};
                document.body.appendChild(t);
              })();
            `,
          }}
        />
        <MicrosoftClarity />
      </body>
    </html>
  );
}
