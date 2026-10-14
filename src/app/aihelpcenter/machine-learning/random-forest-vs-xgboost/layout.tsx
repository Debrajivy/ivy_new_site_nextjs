import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Random Forest vs XGBoost: Differences, Use Cases & When to Use Each | Ivy Professional School",
  description:
    "Random Forest builds trees in parallel and averages them. XGBoost builds trees in sequence, each fixing the last. Learn the differences, tested results, and when to use each.",
  openGraph: {
    title: "Random Forest vs XGBoost: Differences, Use Cases & When to Use Each",
    description:
      "Compare Random Forest and XGBoost, review tested results, and learn when to use each model for tabular machine learning.",
    url: "https://ivyproschool.com/aihelpcenter/machine-learning/random-forest-vs-xgboost",
    siteName: "Ivy Professional School",
    type: "article",
    publishedTime: "2026-10-13T00:00:00+05:30",
    modifiedTime: "2026-10-13T00:00:00+05:30",
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Forest vs XGBoost: Differences, Use Cases & When to Use Each",
    description:
      "Understand bagging vs boosting, compare practical results, and choose the right tree ensemble for your data.",
  },
  alternates: {
    canonical:
      "https://ivyproschool.com/aihelpcenter/machine-learning/random-forest-vs-xgboost",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
