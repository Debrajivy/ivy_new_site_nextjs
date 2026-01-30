import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: ["img.youtube.com"],
  },
  // Trailing slash issue ko handle karne ke liye (Production mein ye aksar issue karta hai)
  trailingSlash: false, 
  
  async redirects() {
    return [
      // 1. WWW to Non-WWW (Keep this first, but it can sometimes conflict with hosting provider settings)
      {
        source: "/:path*",
        has: [
          { type: "host", value: "www.ivyproschool.com" },
        ],
        destination: "https://ivyproschool.com/:path*",
        permanent: true,
      },

      // 2. Specific Course Redirects (Specific rules pehle aane chahiye)
      {
        source: "/iit-data-science-course",
        destination: "/courses/iit-data-science-course",
        permanent: true,
      },
      {
        source: "/iit-data-engineering-course",
        destination: "/courses/iit-data-engineering-course",
        permanent: true,
      },
      {
        source: "/iit-generative-ai-course",
        destination: "/courses/iit-generative-ai-course",
        permanent: true,
      },
      {
        source: "/data-science-and-ml-course",
        destination: "/courses/data-science-and-ml-course",
        permanent: true,
      },
      {
        source: "/data-engineering-course",
        destination: "/courses/data-engineering-course",
        permanent: true,
      },
      {
        source: "/data-analytics-certification-course",
        destination: "/courses/data-analytics-course",
        permanent: true,
      },
      {
        source: "/data-analytics-and-generative-ai-course",
        destination: "/courses/data-analytics-and-generative-ai-course",
        permanent: true,
      },
      {
        source: "/data-science-and-visualization-course",
        destination: "/courses/data-visualization-course",
        permanent: true,
      },

      // 3. Blog Redirects (Specific slug rule general rule se upar honi chahiye)
      {
        source: "/blog/:slug*",
        destination: "https://blog.ivyproschool.com/:slug*",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "https://blog.ivyproschool.com",
        permanent: true,
      },
    ]
  },
}

export default nextConfig