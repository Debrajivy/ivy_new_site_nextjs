import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 86400,
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "image.pollinations.ai" },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // The default CSS chunking merged the HR, leaders and help-centre FAQ page
  // styles into one file that every page loaded as render-blocking CSS.
  // "strict" keeps each page's CSS to what that page imports.
  experimental: {
    cssChunking: "strict",
  },
  // Files in /public are not content-hashed, and Next.js serves them with
  // "max-age=0" by default, so Cloudflare never caches them. Give them a cache
  // lifetime. Browsers keep them for 1 day, Cloudflare for 30 days. If you
  // replace a file under these folders, purge it in Cloudflare.
  async headers() {
    const staticAssetCache = {
      key: "Cache-Control",
      value: "public, max-age=86400, s-maxage=2592000, stale-while-revalidate=86400",
    }
    return [
      { source: "/assets/:path*", headers: [staticAssetCache] },
      { source: "/images/:path*", headers: [staticAssetCache] },
      { source: "/lovable-uploads/:path*", headers: [staticAssetCache] },
      { source: "/videos/:path*", headers: [staticAssetCache] },
    ]
  },
  async redirects() {
    return [
      {
        source: "/iit-data-science-course",
        destination: "/courses/iit-data-science-course",
        permanent: true, // 308 redirect
      },
      // {
      //   source: "/iit-data-engineering-course",
      //   destination: "/courses/iit-data-engineering-course",
      //   permanent: true,
      // },
      {
        source: "/generative-ai-course",
        destination: "/courses/generative-ai-course",
        permanent: true,
      },
      {
        source: "/placement",
        destination: "/alumni",
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
        source: "/courses/iit-data-engineering-course",
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
      // {
      //   source: "/data-science-and-visualization-course",
      //   destination: "/courses/data-visualization-course",
      //   permanent: true,
      // }
      // {
      //   source: "/blog",
      //   destination: "https://blog.ivyproschool.com",
      //   permanent: true,
      // },
      // {
      //   source: "/blog/:slug*",
      //   destination: "https://blog.ivyproschool.com/:slug*",
      //   permanent: true,
      // },

      // SEO-013: removed orphan, demo and duplicate pages (301 to the closest live page)
      { source: "/jobs", destination: "/alumni", statusCode: 301 },
      { source: "/youtube", destination: "/bootcamp", statusCode: 301 },
      { source: "/categories", destination: "/courses", statusCode: 301 },
      { source: "/categories/:slug*", destination: "/courses", statusCode: 301 },
      { source: "/bootcamp/live-masterclass", destination: "/bootcamp", statusCode: 301 },
      { source: "/casestudies/department-salary-analysis", destination: "/casestudies/department-payroll", statusCode: 301 },
      { source: "/casestudies/departments-with-less-than-2-employees", destination: "/casestudies/skeleton-crew", statusCode: 301 },
      { source: "/casestudies/sales-and-aov-trends", destination: "/casestudies/performance-trends", statusCode: 301 },
    ]
  },
}

export default nextConfig
