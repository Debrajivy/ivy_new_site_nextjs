import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import styles from "./article.module.css";
import { articleMarkup } from "./article-markup";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

const canonicalUrl = "https://ivyproschool.com/aihelpcenter/machine-learning/hyperparameter-tuning-grid-search-python";
const title = "Hyperparameter Tuning Using Grid Search in Python";
const headline = "Hyperparameter Tuning Using Grid Search in Python";
const description =
  "GridSearchCV in scikit-learn, with the pipeline rule that stops silent data leakage. Verified on scikit-learn 1.9.1, including a leak that inflated a score by 0.20.";

const faqs = [
  ["What is GridSearchCV in scikit-learn?", "It is a class that performs an exhaustive search over the parameter values you specify, scoring every combination by cross-validation. After fitting, it exposes best_params_, best_score_ and a best_estimator_ that has been refitted on all the training data."],
  ["What is the difference between grid search and random search?", "Grid search tries every combination in the grid, while random search samples a fixed number of combinations. For the same time budget, random search usually explores more distinct values of the parameters that matter, which is why it often matches grid search in a fraction of the time."],
  ["Why do I need a Pipeline with GridSearchCV?", "Because preprocessing fitted outside cross-validation has already seen the validation fold, which inflates the score. In the noise example in this article, doing feature selection outside the pipeline produced 0.755 on data with no signal in it at all."],
  ["What does the double underscore mean in a parameter grid?", "It separates the pipeline step name from the parameter name, so clf__C means the C parameter of the step named clf. A single underscore will not be recognised."],
  ["Is best_score_ the accuracy I should report?", "No. It is the cross-validated score of the configuration chosen because it scored highest, so the selection itself biases it upward. Report a score computed on data the search never saw, and state how noisy that estimate is."],
  ["How many combinations is too many for a grid search?", "It depends on how long one fit takes, so calculate it rather than guessing: len(ParameterGrid(grid)) * n_folds gives the number of model fits. Multiply by the time for a single fit, and if the answer does not fit your budget, use RandomizedSearchCV."],
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${canonicalUrl}#article`,
      headline,
      description,
      inLanguage: "en-IN",
      datePublished: "2026-11-17",
      dateModified: "2026-11-17",
      mainEntityOfPage: canonicalUrl,
      articleSection: "Machine Learning",
      keywords: "hyperparameter tuning, grid search python, gridsearchcv, scikit-learn grid search, randomizedsearchcv, data leakage pipeline",
      about: ["Hyperparameter tuning", "GridSearchCV", "scikit-learn"],
      author: [
        { "@type": "Person", name: "Prateek Agrawal", jobTitle: "Founder, Ivy Professional School", sameAs: "https://www.linkedin.com/in/prateekagrawal" },
        { "@type": "Person", name: "Eeshani Agrawal", jobTitle: "Co-founder, Ivy Professional School", sameAs: "https://www.linkedin.com/in/eeshani-agrawal-b674045" },
      ],
      publisher: { "@type": "EducationalOrganization", name: "Ivy Professional School", url: "https://ivyproschool.com" },
      citation: [
        "https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html",
        "https://scikit-learn.org/stable/modules/grid_search.html",
        "https://scikit-learn.org/stable/common_pitfalls.html",
        "https://jmlr.org/papers/v13/bergstra12a.html",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Help Center", item: "https://ivyproschool.com/aihelpcenter" },
        { "@type": "ListItem", position: 2, name: "Machine Learning", item: "https://ivyproschool.com/aihelpcenter/machine-learning" },
        { "@type": "ListItem", position: 3, name: "Hyperparameter Tuning Using Grid Search in Python" },
      ],
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
  keywords: ["hyperparameter tuning", "grid search python", "gridsearchcv", "scikit-learn grid search", "randomizedsearchcv", "data leakage pipeline"],
  authors: [{ name: "Prateek Agrawal" }, { name: "Eeshani Agrawal" }],
  alternates: { canonical: canonicalUrl },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "article",
    url: canonicalUrl,
    title: headline,
    description,
    siteName: "Ivy Professional School",
    publishedTime: "2026-11-17T00:00:00+05:30",
    modifiedTime: "2026-11-17T00:00:00+05:30",
    authors: ["Prateek Agrawal", "Eeshani Agrawal"],
  },
  twitter: { card: "summary_large_image", title: headline, description, site: "@IvyProSchool" },
};

export default function HyperparameterTuningGridSearchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className={`${styles.page} ${montserrat.variable} ${poppins.variable}`} dangerouslySetInnerHTML={{ __html: articleMarkup }} />
    </>
  );
}
