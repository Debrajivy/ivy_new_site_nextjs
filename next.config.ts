import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/iit-data-science-course",
        destination: "/courses/iit-data-science-course",
        permanent: true, // 308 redirect
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
        source: "/business-analytics-course",
        destination: "/courses/business-analytics-course",
        permanent: true,
      },
      {
        source: "/data-science-and-visualization-course",
        destination: "/courses/data-visualization-course",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "https://blog.ivyproschool.com",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "https://blog.ivyproschool.com/:slug*",
        permanent: true,
      },

    ]
  },
}

export default nextConfig
