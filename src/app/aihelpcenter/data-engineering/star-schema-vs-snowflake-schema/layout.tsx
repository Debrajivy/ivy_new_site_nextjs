import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Star Schema vs Snowflake Schema: Differences, SQL Examples & When to Use | Data Engineering | Ivy Pro School",
  description:
    "A complete guide to Star Schema and Snowflake Schema — key differences, SQL examples, performance trade-offs, and when to use each model in your data warehouse design.",
  openGraph: {
    title: "Star Schema vs Snowflake Schema: Differences, Use Cases, SQL Examples, and Choosing the Right Data Warehouse Model",
    description:
      "A complete guide to Star Schema and Snowflake Schema — key differences, SQL examples, performance trade-offs, and when to use each model in your data warehouse design.",
    url: "https://ivyproschool.com/aihelpcenter/data-engineering/star-schema-vs-snowflake-schema",
    siteName: "Ivy Pro School",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Star Schema vs Snowflake Schema: Complete Guide",
    description:
      "Key differences, SQL examples, performance trade-offs, and when to use Star Schema vs Snowflake Schema in your data warehouse.",
  },
  alternates: {
    canonical:
      "https://ivyproschool.com/aihelpcenter/data-engineering/star-schema-vs-snowflake-schema",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
