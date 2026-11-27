import { COMPANY } from "@/lib/company-facts";
import { formatArticleDate, getArticleDates, type ArticleAuthor } from "@/lib/article-dates";

/**
 * Visible "Last updated" line for an article or case study, with <time> tags,
 * plus the page's Article JSON-LD (SEO-011).
 * Dates, headline and authors come from src/lib/article-dates.ts. If the path has
 * no entry, nothing is shown (no made-up dates).
 * Set jsonLd={false} when the page already outputs its own Article schema.
 */
export default function ArticleDates({
  path,
  className = "text-sm text-gray-500",
  jsonLd = true,
  inline = false,
  headline,
}: {
  path: string;
  className?: string;
  jsonLd?: boolean;
  /** Render a <span> instead of a <p>, for use inside an existing line of text. */
  inline?: boolean;
  /** The page's H1 text, when the template has it as data (otherwise taken from article-dates.ts). */
  headline?: string;
}) {
  const dates = getArticleDates(path);
  if (!dates) return null;
  const changed = dates.modified !== dates.published;
  const Tag = inline ? "span" : "p";
  return (
    <>
      <Tag className={className}>
        {changed && (
          <>
            Published <time dateTime={dates.published}>{formatArticleDate(dates.published)}</time>
            {" · "}
          </>
        )}
        Last updated <time dateTime={dates.modified}>{formatArticleDate(dates.modified)}</time>
      </Tag>
      {jsonLd && <ArticleJsonLd path={path} headline={headline} />}
    </>
  );
}

type Person = { "@type": "Person"; name: string; url?: string; sameAs?: string[] };
type Organization = {
  "@type": "EducationalOrganization";
  "@id": string;
  name: string;
  url: string;
  logo?: { "@type": "ImageObject"; url: string };
};
type ArticleNode = {
  "@context": "https://schema.org";
  "@type": "Article";
  "@id": string;
  url: string;
  mainEntityOfPage: { "@type": "WebPage"; "@id": string };
  headline: string;
  datePublished: string;
  dateModified: string;
  author: Person[] | Organization;
  publisher: Organization;
  inLanguage: "en-IN";
};

const ORGANIZATION: Organization = {
  "@type": "EducationalOrganization",
  "@id": `${COMPANY.url}/#organization`, // same node as the site-wide schema in app/layout.tsx
  name: COMPANY.name,
  url: COMPANY.url,
  logo: { "@type": "ImageObject", url: COMPANY.logo },
};

const toPerson = (a: ArticleAuthor): Person =>
  a.url ? { "@type": "Person", name: a.name, url: a.url, sameAs: [a.url] } : { "@type": "Person", name: a.name };

/**
 * One Article node for the page: headline = the H1, dates from article-dates.ts,
 * author = the people named in the page's byline, or the organisation when the page names none.
 * Outputs nothing when the path has no dates or no headline.
 */
export function ArticleJsonLd({ path, headline }: { path: string; headline?: string }) {
  const dates = getArticleDates(path);
  const title = headline ?? dates?.headline;
  if (!dates || !title) return null;
  const url = `${COMPANY.url}${path}`;
  const data: ArticleNode = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: title,
    datePublished: dates.published,
    dateModified: dates.modified,
    author: dates.authors?.length ? dates.authors.map(toPerson) : ORGANIZATION,
    publisher: ORGANIZATION,
    inLanguage: "en-IN",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
