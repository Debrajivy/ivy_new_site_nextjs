import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: ["img.youtube.com"], // ✅ allow YouTube thumbnails
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          { type: "host", value: "www.ivyproschool.com" },
        ],
        destination: "https://ivyproschool.com/:path*",
        permanent: true, // 308
      },
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
        source: "/blog/:slug*",
        destination: "https://blog.ivyproschool.com/:slug*",
        permanent: true,
      },
      // ✅ New redirects
      {
        source: "/nasscom-certified-data-science-course",
        destination: "/courses/data-science-and-ml-course",
        permanent: true,
      },
      {
        source: "/genai-course-with-iit-guwahati",
        destination: "/courses/iit-generative-ai-course",
        permanent: true,
      },
      {
        source: "/data-analytics-with-visualization-certification-course",
        destination: "/courses/data-analytics-course",
        permanent: true,
      },
      {
        source: "/register-trial",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cloud-data-engineering-course-with-iit-guwahati",
        destination: "/courses/iit-data-engineering-course",
        permanent: true,
      },
      {
        source: "/data-science-data-visualization-certification-training-course",
        destination: "/courses/data-visualization-course",
        permanent: true,
      },
      {
        source: "/business-analytics-certification-training-course",
        destination: "/courses/business-analytics-course",
        permanent: true,
      },


      {
        source: "/?p=9199&preview_id=9199&preview_nonce=833a6af645&preview=true",
        destination: "/",
        permanent: true,
      },
      {
        source: "/actuarialscienceoverview.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/b",
        destination: "/",
        permanent: true,
      },
      {
        source: "/careercentre.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/data-scien",
        destination: "/",
        permanent: true,
      },
      {
        source: "/data-science-course-bangalore",
        destination: "/",
        permanent: true,
      },
      {
        source: "/data-science-course-with-iit-guwahati",
        destination: "/courses/iit-data-science-course",
        permanent: true,
      },
      {
        source: "/data-science-course-with-iit-guwahati?utm_source=organic&utm_campaign=blog&utm_term={keyword}",
        destination: "/courses/iit-data-science-course",
        permanent: true,
      },
      {
        source: "/data-science-course-with-iit-guwahati?utm_source=organic&utm_campaign=blog&utm_term=keyword",
        destination: "/courses/iit-data-science-course",
        permanent: true,
      },
      {
        source: "/data-science-ml-ai-no-upfront-fee",
        destination: "/courses/no-upfront-fees-data-science-and-ml-course",
        permanent: true,
      },
      {
        source: "/data-science-machine-learning-ai-certification-course-with-honeywell",
        destination: "/",
        permanent: true,
      },
      {
        source: "/data-science-ml-ai-no-upfront-fee",
        destination: "/",
        permanent: true,
      },
      {
        source: "/diploma-in-data-science-ml-ai-big-data",
        destination: "/",
        permanent: true,
      },
      {
        source: "/growwith",
        destination: "/",
        permanent: true,
      },
      {
        source: "/itsecurity.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ivy-in-news.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/kpo.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/landing",
        destination: "/",
        permanent: true,
      },
      {
        source: "/landing_2013",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-cour",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-course",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/actuarial-science/actuarial-common-entrance-test-acet-coaching",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics/advanced-analytics",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics/big-data-hadoop-certification",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics/business-analytics-certification",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics/d",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics/dat",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics/data-science-advanced-tableau-certification-course",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics/data-science-analytics-certification-course",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics/data-science-and-advanced-tableau-certification-course",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics/data-science-and-analytics-certification-course",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics/data-science-and-big-data-analytics-certification-course",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics/data-science-machine-learning-artificial-intelligence-deep-learning-certification-course",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics/data-science-machine-learning-certification",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics/data-visualization-and-reporting",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics/machine-learning-python-certification",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics/machine-learning-with-python-certification",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics/pick-your-module",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics/predictive-analytics-with-r-certification",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-courses/big-data-and-analytics/quantitative-risk-analytics-professional",
        destination: "/",
        permanent: true,
      },
      {
        source: "/summer-analyitics",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2015/10/Ivy_Official_Learning_Business_Partners_List.pdf",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2019/02/Data_Science_with_Machine_Learning_and_AI_Pro_plus_Certification_Course_co_created_with_Honeywell.pdf",
        destination: "/",
        permanent: true,
      },
      {
        source: "https://blog.ivyproschool.com/what-social-media-in-2011-tells-us-about-the-future-of-marketing/",
        destination: "/",
        permanent: true,
      },
      {
        source: "https://blog.ivyproschool.com/why-getting-an-ai-training-should-be-on-your-mind-right-now/",
        destination: "/",
        permanent: true,
      },


    ]
  },
}

export default nextConfig
