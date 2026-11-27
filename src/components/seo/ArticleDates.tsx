import { COMPANY } from "@/lib/company-facts";
import { formatArticleDate, getArticleDates } from "@/lib/article-dates";

/**
 * Visible "Last updated" line for an article or case study, with <time> tags.
 * Dates come only from src/lib/article-dates.ts. If the path has no entry,
 * nothing is shown (no made-up dates).
 * Set jsonLd={false} when the page outputs <ArticleDatesJsonLd> elsewhere.
 */
export default function ArticleDates({
  path,
  className = "text-sm text-gray-500",
  jsonLd = true,
  inline = false,
}: {
  path: string;
  className?: string;
  jsonLd?: boolean;
  /** Render a <span> instead of a <p>, for use inside an existing line of text. */
  inline?: boolean;
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
      {jsonLd && <ArticleDatesJsonLd path={path} />}
    </>
  );
}

/** JSON-LD WebPage node carrying datePublished and dateModified for the page. */
export function ArticleDatesJsonLd({ path }: { path: string }) {
  const dates = getArticleDates(path);
  if (!dates) return null;
  const url = `${COMPANY.url}${path}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    datePublished: dates.published,
    dateModified: dates.modified,
    isPartOf: { "@id": `${COMPANY.url}/#website` },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
