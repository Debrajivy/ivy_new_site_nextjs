import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import styles from "./article.module.css";
import { articleMarkup } from "./article-markup";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

const canonicalUrl = "https://ivyproschool.com/aihelpcenter/python-basics/reshaping-dataframes-melt-pivot";
const title = "Reshaping DataFrames in Pandas Using melt and pivot";
const description =
  "melt turns wide data into long, pivot turns it back. Verified on pandas 3.0.5, with the duplicate-entries error explained and a comparison of pivot and pivot_table.";

const faqs = [
  ["What is the difference between melt and pivot in pandas?", "melt goes from wide to long by collapsing many columns into a name column and a value column. pivot goes from long back to wide by spreading those two columns out again. They are inverse operations, so melting and then pivoting returns the original table."],
  ["Why does pandas say Index contains duplicate entries, cannot reshape?", "Two or more rows share the same index and column combination, so pandas cannot decide which value belongs in that cell. Either add the column that distinguishes them to index, or use pivot_table with an aggfunc to combine them deliberately."],
  ["When should I use pivot_table instead of pivot?", "Use pivot_table whenever a cell can legitimately hold more than one value and you want them summarised, or when you want row and column totals with margins=True. Use pivot when you expect exactly one value per cell and want an error if that is not true."],
  ["What is the difference between stack and melt?", "They reshape the same way, but stack works on the column index and returns a Series with a MultiIndex, while melt works on named columns and returns a flat DataFrame. Use melt for ordinary tables and stack when you are already working with a MultiIndex."],
  ["Does melt change my original DataFrame?", "No. melt returns a new DataFrame and leaves the original untouched, so you must assign the result to a variable. This is true of pivot, pivot_table, stack and unstack as well."],
  ["How do I get rid of the extra column label after pivoting?", "Pivoting leaves the columns axis named after the column you spread out. Remove it with .rename_axis(columns=None), and turn the index back into an ordinary column with .reset_index() if you need a flat table."],
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "@id": `${canonicalUrl}#article`,
      headline: title,
      description,
      inLanguage: "en-IN",
      proficiencyLevel: "Beginner",
      datePublished: "2026-11-10",
      dateModified: "2026-11-10",
      mainEntityOfPage: canonicalUrl,
      articleSection: "Python Basics",
      author: [
        { "@type": "Person", name: "Prateek Agrawal", sameAs: "https://www.linkedin.com/in/prateekagrawal" },
        { "@type": "Person", name: "Eeshani Agrawal", sameAs: "https://www.linkedin.com/in/eeshani-agrawal-b674045" },
      ],
      publisher: { "@type": "EducationalOrganization", name: "Ivy Professional School", url: "https://ivyproschool.com" },
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export const metadata: Metadata = {
  title,
  description,
  keywords: ["pandas melt", "pandas pivot", "pivot vs pivot_table", "wide to long pandas", "reshape dataframe", "Index contains duplicate entries cannot reshape"],
  authors: [{ name: "Prateek Agrawal" }, { name: "Eeshani Agrawal" }],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "article",
    url: canonicalUrl,
    title,
    description,
    siteName: "Ivy Professional School",
    publishedTime: "2026-11-10T00:00:00+05:30",
    modifiedTime: "2026-11-10T00:00:00+05:30",
    authors: ["Prateek Agrawal", "Eeshani Agrawal"],
  },
  twitter: { card: "summary", title, description, site: "@IvyProSchool" },
};

export default function ReshapingDataFramesMeltPivotPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className={`${styles.page} ${montserrat.variable} ${poppins.variable}`} dangerouslySetInnerHTML={{ __html: articleMarkup }} />
    </>
  );
}
