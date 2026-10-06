type FAQ = {
  question: string;
  answer: string;
};

type Breadcrumb = {
  name: string;
  url: string;
};

type ArticleStructuredDataProps = {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorUrl?: string;
  image?: string;
  breadcrumbs: Breadcrumb[];
  faqs?: FAQ[];
};

const SITE_URL = "https://ivyproschool.com";

const absoluteUrl = (url: string) =>
  url.startsWith("http") ? url : `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;

export default function ArticleStructuredData({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "Prateek Agrawal",
  authorUrl = "https://www.linkedin.com/in/prateekagrawal/",
  image = "/og-home.svg",
  breadcrumbs,
  faqs = [],
}: ArticleStructuredDataProps) {
  const articleUrl = absoluteUrl(url);
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      "@id": `${articleUrl}#article`,
      headline: title,
      description,
      image: absoluteUrl(image),
      datePublished,
      dateModified: dateModified ?? datePublished,
      mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
      author: {
        "@type": "Person",
        name: authorName,
        url: authorUrl,
        sameAs: [authorUrl],
      },
      publisher: {
        "@type": "Organization",
        name: "Ivy Pro School",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/og-home.svg`,
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${articleUrl}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.url),
      })),
    },
  ];

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${articleUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  }).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />;
}
