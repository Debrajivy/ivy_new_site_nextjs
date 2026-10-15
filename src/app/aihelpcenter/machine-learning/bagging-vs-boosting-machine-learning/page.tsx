import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Linkedin } from "lucide-react";
import PrateekAgarwal from "@/assests/pratilk.webp";
import EeshaniAgarwal from "@/assests/eeshani.webp";
import styles from "../../sql-db/sql-window-functions-explained/article.module.css";

const title =
  "Bagging vs Boosting in Machine Learning: Differences and When to Use Each";
const description =
  "Bagging trains models in parallel to cut variance. Boosting trains them in sequence to cut bias. Learn how each works, how they differ, and when to use which.";
const canonical =
  "https://ivyproschool.com/aihelpcenter/machine-learning/bagging-vs-boosting-machine-learning";

export const metadata: Metadata = {
  title: `${title} | Ivy Professional School`,
  description,
  alternates: { canonical },
  authors: [
    { name: "Eeshani Agrawal", url: "https://www.linkedin.com/in/eeshani-agrawal-b674045/" },
    { name: "Prateek Agrawal", url: "https://www.linkedin.com/in/prateekagrawal/" },
  ],
  openGraph: {
    title,
    description,
    type: "article",
    url: canonical,
    publishedTime: "2026-10-15",
    modifiedTime: "2026-10-15",
    authors: [
      "https://www.linkedin.com/in/eeshani-agrawal-b674045/",
      "https://www.linkedin.com/in/prateekagrawal/",
    ],
  },
};

const roadmap = [
  ["why-does-the-choice-between-bagging-and-boosting-matter", "Why does the choice matter?"],
  ["what-is-an-ensemble-and-why-does-it-help", "What is an ensemble?"],
  ["how-does-bagging-work", "How does bagging work?"],
  ["how-does-boosting-work", "How does boosting work?"],
  ["what-are-the-differences-between-bagging-and-boosting", "Bagging vs boosting differences"],
  ["when-should-you-use-bagging", "When should you use bagging?"],
  ["when-should-you-use-boosting", "When should you use boosting?"],
  ["can-you-show-the-numbers-behind-each-method", "Numbers behind each method"],
  ["when-should-you-not-use-bagging-or-boosting", "When should you use neither?"],
  ["what-should-you-do-next", "What should you do next?"],
  ["frequently-asked-questions", "Frequently asked questions"],
  ["references", "References"],
] as const;

const faqs = [
  {
    question: "Is Random Forest bagging or boosting?",
    answer:
      "Random Forest is a bagging method. It trains many decision trees in parallel on bootstrap samples and averages their predictions. It also picks a random subset of features at each split, which makes the trees less correlated with one another.",
  },
  {
    question: "Is XGBoost bagging or boosting?",
    answer:
      "XGBoost is a boosting method. It builds trees one after another, and each new tree is fitted to correct the errors left by the trees before it. It adds regularisation and an efficient system design on top of standard gradient boosting.",
  },
  {
    question: "Which is more accurate, bagging or boosting?",
    answer:
      "On structured, tabular data, well-tuned boosting usually reaches higher accuracy than bagging. The gap is not guaranteed, and boosting needs more tuning and is more sensitive to noisy labels. Always compare both with cross-validation on your own data.",
  },
  {
    question: "Can bagging and boosting overfit?",
    answer:
      "Boosting overfits more easily because it keeps fitting the training errors, so it needs a low learning rate, limited tree depth and early stopping. Bagging rarely overfits as more models are added, but it cannot fix a model that is too simple for the problem.",
  },
  {
    question: "Can I run bagging and boosting in parallel to save time?",
    answer:
      "Bagging trains each model independently, so it parallelises naturally across CPU cores. Boosting is sequential across rounds, though modern libraries parallelise the work inside each tree. For very large datasets, LightGBM and XGBoost are still fast in practice.",
  },
];

const articleHtml = `
  <div class="answer">
    <p><strong>Bagging trains many models in parallel on random resamples of the data and averages them, which reduces variance and overfitting. Boosting trains models one after another, each correcting the errors of the last, which mainly reduces bias. Use bagging when a model overfits, and boosting when it underfits.</strong></p>
  </div>

  <nav class="toc" aria-label="Table of contents">
    <p class="toc-title">In this article</p>
    <ol>
      <li><a href="#why-does-the-choice-between-bagging-and-boosting-matter">Why does the choice between bagging and boosting matter?</a></li>
      <li><a href="#what-is-an-ensemble-and-why-does-it-help">What is an ensemble, and why does it help?</a></li>
      <li><a href="#how-does-bagging-work">How does bagging work?</a></li>
      <li><a href="#how-does-boosting-work">How does boosting work?</a></li>
      <li><a href="#what-are-the-differences-between-bagging-and-boosting">What are the differences between bagging and boosting?</a></li>
      <li><a href="#when-should-you-use-bagging">When should you use bagging?</a></li>
      <li><a href="#when-should-you-use-boosting">When should you use boosting?</a></li>
      <li><a href="#can-you-show-the-numbers-behind-each-method">Can you show the numbers behind each method?</a></li>
      <li><a href="#when-should-you-not-use-bagging-or-boosting">When should you not use bagging or boosting?</a></li>
      <li><a href="#what-should-you-do-next">What should you do next?</a></li>
      <li><a href="#frequently-asked-questions">Frequently asked questions</a></li>
      <li><a href="#references">References</a></li>
    </ol>
  </nav>

  <h2 id="why-does-the-choice-between-bagging-and-boosting-matter">Why does the choice between bagging and boosting matter?</h2>
  <p>Most tabular machine learning problems in industry, such as credit risk, churn, demand forecasting and fraud, are solved with tree-based ensembles. Picking the wrong family costs you either accuracy or time. A boosted model on noisy data can chase errors that are not real. A bagged model on a problem that needs finer detail can plateau well below what is possible.</p>
  <p>The two methods are often taught as a pair, but they solve different problems. Once you understand which problem each one targets, the choice becomes a diagnosis rather than a guess.</p>

  <h2 id="what-is-an-ensemble-and-why-does-it-help">What is an ensemble, and why does it help?</h2>
  <p>An ensemble is a group of models whose predictions are combined into one final prediction. Combining models helps because a single model makes two kinds of error, and ensembles attack them differently.</p>
  <ul>
    <li><strong>Bias</strong> is error from a model being too simple to capture the pattern. A shallow tree on a complex problem has high bias. It underfits.</li>
    <li><strong>Variance</strong> is error from a model being too sensitive to the exact training sample. A deep, unpruned tree has high variance. It overfits, so a small change in the data gives a very different tree.</li>
  </ul>
  <p>Bagging is mainly a variance-reduction technique. Boosting is mainly a bias-reduction technique. If you want a fuller treatment of the trade-off, read our explainer on the bias-variance trade-off.</p>

  <h2 id="how-does-bagging-work">How does bagging work?</h2>
  <p>Bagging, short for bootstrap aggregating, trains many models independently on different random samples of the training data and combines their outputs by averaging (regression) or majority vote (classification). Leo Breiman introduced it in 1996.</p>
  <ol>
    <li>Draw a <strong>bootstrap sample</strong> from the training set. This means sampling rows at random with replacement, so some rows appear more than once and others not at all. A bootstrap sample contains roughly 63.2% of the distinct rows; the remaining 36.8% are left out.</li>
    <li>Train one model, usually a deep decision tree, on that sample.</li>
    <li>Repeat for 100 to 500 samples. Each model is trained independently, so the work can run in parallel across CPU cores.</li>
    <li>Combine the predictions by averaging or voting.</li>
  </ol>
  <p>The rows each model never saw are called <strong>out-of-bag</strong> rows. You can score each model on its own out-of-bag rows and get a free validation estimate without a separate hold-out set.</p>
  <p><strong>Random Forest</strong> is the best-known bagging method. It adds one more source of randomness: at every split, each tree considers only a random subset of the features. This keeps the trees from all looking alike, which makes averaging more effective.</p>

  <h2 id="how-does-boosting-work">How does boosting work?</h2>
  <p>Boosting trains models in sequence, where each new model is built to fix the mistakes of the ensemble so far, and the final prediction is a weighted sum of all models. The individual models are deliberately weak, meaning only slightly better than guessing. A common weak learner is a shallow tree with 1 to 6 levels.</p>
  <p>There are two main flavours:</p>
  <ul>
    <li><strong>AdaBoost</strong> (Freund and Schapire, 1997) increases the weight of rows the previous model got wrong, so the next model concentrates on them.</li>
    <li><strong>Gradient boosting</strong> (Friedman, 2001) fits each new model to the residual errors of the current ensemble. Technically it takes a step along the negative gradient of the loss function.</li>
  </ul>
  <p>Modern libraries build on gradient boosting. XGBoost (Chen and Guestrin, 2016) adds regularisation and a fast system design. LightGBM (Ke et al., 2017) uses histogram-based splits to train quickly on large data. CatBoost (Prokhorenkova et al., 2018) handles categorical features directly. Each also supports a <strong>learning rate</strong>, a small multiplier on every new model's contribution, which slows learning and reduces overfitting.</p>

  <h2 id="what-are-the-differences-between-bagging-and-boosting">What are the differences between bagging and boosting?</h2>
  <p>Bagging builds independent models in parallel to reduce variance, while boosting builds dependent models in sequence to reduce bias. The table below sets out the practical differences.</p>

  <figure>
    <div class="table-scroll">
      <table>
        <thead><tr><th>Aspect</th><th>Bagging</th><th>Boosting</th></tr></thead>
        <tbody>
          <tr><td>Training order</td><td>Parallel. Models are independent.</td><td>Sequential. Each model depends on the previous ones.</td></tr>
          <tr><td>Main error reduced</td><td>Variance</td><td>Bias (and some variance)</td></tr>
          <tr><td>Base learner</td><td>Strong, high-variance models, such as deep trees</td><td>Weak, high-bias models, such as shallow trees</td></tr>
          <tr><td>Data used per model</td><td>Random bootstrap sample</td><td>Full data, with reweighted rows or residual targets</td></tr>
          <tr><td>How models are combined</td><td>Equal-weight average or vote</td><td>Weighted sum</td></tr>
          <tr><td>Overfitting risk</td><td>Low. More models rarely hurt.</td><td>Higher. Needs early stopping and a low learning rate.</td></tr>
          <tr><td>Sensitivity to noisy labels</td><td>Low</td><td>High, because it keeps chasing hard rows</td></tr>
          <tr><td>Tuning effort</td><td>Low. Defaults are often good.</td><td>Higher. Several interacting hyperparameters.</td></tr>
          <tr><td>Training speed</td><td>Parallelises across models</td><td>Sequential across rounds, parallel inside each tree</td></tr>
          <tr><td>Typical algorithms</td><td>Bagged trees, Random Forest, Extra Trees</td><td>AdaBoost, Gradient Boosting, XGBoost, LightGBM, CatBoost</td></tr>
        </tbody>
      </table>
    </div>
    <figcaption>Table 1. Bagging and boosting compared.</figcaption>
  </figure>

  <figure>
    <div class="ensemble-diagram">
      <section class="ensemble-panel">
        <h3>Bagging</h3>
        <div class="flow-node">Training set</div>
        <div class="flow-arrow">↓</div>
        <div class="bagging-grid">
          <div class="flow-node">Bootstrap sample 1<br>Tree 1</div>
          <div class="flow-node">Bootstrap sample 2<br>Tree 2</div>
          <div class="flow-node">Bootstrap sample 3<br>Tree 3</div>
        </div>
        <div class="flow-arrow">↓</div>
        <div class="flow-node bagging-output">Average or vote</div>
      </section>
      <section class="ensemble-panel">
        <h3>Boosting</h3>
        <div class="boosting-chain">
          <div class="flow-node">Tree 1</div>
          <div class="error-arrow">errors →</div>
          <div class="flow-node">Tree 2</div>
          <div class="error-arrow">errors →</div>
          <div class="flow-node">Tree 3</div>
        </div>
        <div class="flow-arrow">↓</div>
        <div class="flow-node boosting-output">Weighted sum</div>
      </section>
    </div>
    <figcaption>Figure 1. Bagging works in parallel, boosting works in sequence.</figcaption>
  </figure>

  <h2 id="when-should-you-use-bagging">When should you use bagging?</h2>
  <p>Use bagging when your model overfits, meaning training accuracy is much higher than validation accuracy, and when you want a reliable result with little tuning. Specifically, bagging is a good fit when:</p>
  <ul>
    <li>The base model is unstable. Deep decision trees are the classic case.</li>
    <li>The data is noisy or has mislabelled rows. Averaging smooths out the noise instead of amplifying it.</li>
    <li>You need a strong baseline quickly. Random Forest with default settings is often within a few points of a tuned boosted model.</li>
    <li>You have many CPU cores and want training to scale across them.</li>
    <li>You want an out-of-bag error estimate without setting aside validation data.</li>
  </ul>
  <p>Bagging does not help when the base model is stable and already low-variance, such as linear regression on a clean, well-specified problem. Averaging identical results gives you the same result.</p>

  <h2 id="when-should-you-use-boosting">When should you use boosting?</h2>
  <p>Use boosting when you need the highest accuracy on structured data and your model underfits, meaning even the training error is high. Boosting is a good fit when:</p>
  <ul>
    <li>You are competing on accuracy, such as a Kaggle problem or a production model where a fraction of a percentage point has real financial value.</li>
    <li>The data is clean enough that hard-to-predict rows are genuine signal and not label errors.</li>
    <li>Your classes are imbalanced. Boosting's focus on hard rows often helps with the minority class, though you should still evaluate with precision, recall and AUC, not accuracy alone.</li>
    <li>You can afford to tune the learning rate, number of trees, tree depth and regularisation, and to use early stopping on a validation set.</li>
  </ul>
  <p>On tabular data, gradient boosting libraries are frequently the strongest option. This is a pattern seen across published benchmarks and competitions, not a law, so always confirm it on your own data.</p>

  <h2 id="can-you-show-the-numbers-behind-each-method">Can you show the numbers behind each method?</h2>
  <p>Yes. Two small calculations show why bagging helps and what boosting does to the data. The numbers below are worked arithmetic for illustration, not results from a real dataset.</p>

  <div class="example">
    <h3>Bagging: how much variance does averaging remove?</h3>
    <p>Suppose each tree's prediction has variance &sigma;&sup2; = 1, and the trees' predictions are correlated with each other at &rho; = 0.3. The variance of the average of <em>n</em> trees is &rho;&sigma;&sup2; + (1 &minus; &rho;)&sigma;&sup2;/<em>n</em>.</p>
    <ul>
      <li>With <em>n</em> = 1 tree: 0.3 + 0.7 = <span class="stat">1.000</span></li>
      <li>With <em>n</em> = 10 trees: 0.3 + 0.07 = <span class="stat">0.370</span></li>
      <li>With <em>n</em> = 100 trees: 0.3 + 0.007 = <span class="stat">0.307</span></li>
    </ul>
    <p>Two lessons follow. Going from 1 to 10 trees removes most of the benefit, and going from 10 to 100 adds little. The floor is set by &rho;, the correlation between trees. This is why Random Forest randomises features: lowering &rho; lowers the floor.</p>
  </div>

  <div class="example">
    <h3>Boosting: how does AdaBoost reweight rows?</h3>
    <p>Start with 10 training rows, each with weight 0.10. The first weak learner misclassifies 2 rows, so its weighted error is 0.20.</p>
    <ol>
      <li>The learner's vote weight is &alpha; = &frac12; &times; ln(0.8 / 0.2) = &frac12; &times; ln 4 = <strong>0.693</strong>.</li>
      <li>Misclassified rows are multiplied by e<sup>0.693</sup> = 2, so each goes from 0.10 to 0.20. Correct rows are multiplied by e<sup>&minus;0.693</sup> = 0.5, so each goes from 0.10 to 0.05.</li>
      <li>The total is now (2 &times; 0.20) + (8 &times; 0.05) = 0.80. Dividing every weight by 0.80 gives <strong>0.25</strong> for each misclassified row and <strong>0.0625</strong> for each correct row.</li>
    </ol>
    <p>The 2 hard rows now carry half of the total weight (2 &times; 0.25 = 0.50), so the next learner is forced to get them right. That is the whole idea of boosting in one step.</p>
  </div>

  <h3>How do you compare both in code?</h3>
  <p>This scikit-learn snippet runs both families through the same cross-validation, so the comparison is fair. Replace the generated data with your own.</p>
  <pre><code>from sklearn.datasets import make_classification
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.model_selection import cross_val_score

X, y = make_classification(n_samples=5000, n_features=20,
                           n_informative=8, random_state=42)

models = {
    "Bagging (Random Forest)": RandomForestClassifier(
        n_estimators=300, n_jobs=-1, random_state=42),
    "Boosting (Gradient Boosting)": GradientBoostingClassifier(
        n_estimators=300, learning_rate=0.05, max_depth=3, random_state=42),
}

for name, model in models.items():
    scores = cross_val_score(model, X, y, cv=5, scoring="roc_auc")
    print(f"{name}: mean AUC {scores.mean():.3f} (std {scores.std():.3f})")</code></pre>
  <p>Look at both the mean and the spread across folds. A slightly higher mean with a much larger spread is a warning sign. See our guide to cross-validation for how to read these numbers.</p>

  <h2 id="when-should-you-not-use-bagging-or-boosting">When should you not use bagging or boosting?</h2>
  <p>You may not need either. An ensemble is a tool for a specific problem, and several common situations do not call for one.</p>
  <ul>
    <li><strong>A simple model already works.</strong> If logistic regression or a single shallow tree reaches the accuracy the business needs, stop there. A 300-tree ensemble adds cost, latency and maintenance for no practical gain.</li>
    <li><strong>You must explain every prediction.</strong> A single tree or a linear model can be read line by line. Ensembles need tools such as SHAP to explain, and that is harder to defend in a regulated setting.</li>
    <li><strong>The data is very small.</strong> With a few hundred rows, a boosted model tends to memorise the training data. A regularised simple model is usually safer.</li>
    <li><strong>Labels are unreliable.</strong> Boosting keeps chasing hard rows, and wrong labels look exactly like hard rows. Clean the labels first, or prefer bagging.</li>
    <li><strong>The data is images, audio or free text.</strong> Neural networks usually do better here. Tree ensembles are strongest on structured, tabular data.</li>
    <li><strong>Prediction latency is tight.</strong> Hundreds of trees take longer to score than one model. Check your latency budget before you commit.</li>
  </ul>
  <p>Also be careful with the idea that boosting is always better. It often wins on accuracy, but it also demands more tuning and more care. On a Tuesday afternoon with a deadline, a well-set Random Forest that you trust is often the better professional choice.</p>

  <h2 id="what-should-you-do-next">What should you do next?</h2>
  <ol>
    <li><strong>Get a baseline.</strong> Train a single decision tree and a Random Forest on your data with default settings. Note training and validation scores.</li>
    <li><strong>Diagnose before you choose.</strong> If training is far above validation, you have a variance problem, so stay with bagging or add regularisation. If both are low, you have a bias problem, so try boosting.</li>
    <li><strong>Tune boosting with discipline.</strong> Fix a low learning rate (0.05 to 0.1), set a large number of trees, and use early stopping on a validation set. Then tune tree depth and regularisation. Our guide on hyperparameter tuning walks through the order.</li>
  </ol>
  <p>If you want to practise this on real business datasets with a trainer reviewing your work, see how Random Forest and XGBoost compare in our Random Forest vs XGBoost guide. Ivy has been teaching data science and AI since 2008 and has trained 37,500+ alumni.</p>

  <section class="faq">
    <h2 id="frequently-asked-questions">Frequently asked questions</h2>
    <h3>Is Random Forest bagging or boosting?</h3>
    <p>Random Forest is a bagging method. It trains many decision trees in parallel on bootstrap samples and averages their predictions. It also picks a random subset of features at each split, which makes the trees less correlated with one another.</p>
    <h3>Is XGBoost bagging or boosting?</h3>
    <p>XGBoost is a boosting method. It builds trees one after another, and each new tree is fitted to correct the errors left by the trees before it. It adds regularisation and an efficient system design on top of standard gradient boosting.</p>
    <h3>Which is more accurate, bagging or boosting?</h3>
    <p>On structured, tabular data, well-tuned boosting usually reaches higher accuracy than bagging. The gap is not guaranteed, and boosting needs more tuning and is more sensitive to noisy labels. Always compare both with cross-validation on your own data.</p>
    <h3>Can bagging and boosting overfit?</h3>
    <p>Boosting overfits more easily because it keeps fitting the training errors, so it needs a low learning rate, limited tree depth and early stopping. Bagging rarely overfits as more models are added, but it cannot fix a model that is too simple for the problem.</p>
    <h3>Can I run bagging and boosting in parallel to save time?</h3>
    <p>Bagging trains each model independently, so it parallelises naturally across CPU cores. Boosting is sequential across rounds, though modern libraries parallelise the work inside each tree. For very large datasets, LightGBM and XGBoost are still fast in practice.</p>
  </section>

  <h2 id="references">References</h2>
  <ol class="refs">
    <li>Breiman, L. (1996). Bagging predictors. <em>Machine Learning</em>, 24(2), 123&ndash;140. <a href="https://doi.org/10.1007/BF00058655">doi.org/10.1007/BF00058655</a></li>
    <li>Breiman, L. (2001). Random forests. <em>Machine Learning</em>, 45(1), 5&ndash;32. <a href="https://doi.org/10.1023/A:1010933404324">doi.org/10.1023/A:1010933404324</a></li>
    <li>Freund, Y. and Schapire, R. E. (1997). A decision-theoretic generalization of on-line learning and an application to boosting. <em>Journal of Computer and System Sciences</em>, 55(1), 119&ndash;139. <a href="https://doi.org/10.1006/jcss.1997.1504">doi.org/10.1006/jcss.1997.1504</a></li>
    <li>Friedman, J. H. (2001). Greedy function approximation: a gradient boosting machine. <em>Annals of Statistics</em>, 29(5), 1189&ndash;1232. <a href="https://doi.org/10.1214/aos/1013203451">doi.org/10.1214/aos/1013203451</a></li>
    <li>Chen, T. and Guestrin, C. (2016). XGBoost: a scalable tree boosting system. <em>Proceedings of KDD 2016</em>. <a href="https://arxiv.org/abs/1603.02754">arxiv.org/abs/1603.02754</a></li>
    <li>Ke, G. et al. (2017). LightGBM: a highly efficient gradient boosting decision tree. <em>Advances in Neural Information Processing Systems 30</em>.</li>
    <li>Prokhorenkova, L. et al. (2018). CatBoost: unbiased boosting with categorical features. <em>Advances in Neural Information Processing Systems 31</em>.</li>
    <li>scikit-learn documentation, Ensembles: Gradient boosting, forests of randomized trees, bagging and AdaBoost. <a href="https://scikit-learn.org/stable/modules/ensemble.html">scikit-learn.org/stable/modules/ensemble.html</a></li>
  </ol>
`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: title,
      description,
      datePublished: "2026-10-15",
      dateModified: "2026-10-15",
      mainEntityOfPage: canonical,
      author: [
        { "@type": "Person", name: "Eeshani Agrawal", url: "https://www.linkedin.com/in/eeshani-agrawal-b674045/" },
        { "@type": "Person", name: "Prateek Agrawal", url: "https://www.linkedin.com/in/prateekagrawal/" },
      ],
      publisher: { "@type": "Organization", name: "Ivy Professional School" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Help Center", item: "https://ivyproschool.com/aihelpcenter" },
        { "@type": "ListItem", position: 2, name: "Machine Learning", item: "https://ivyproschool.com/aihelpcenter/machine-learning" },
        { "@type": "ListItem", position: 3, name: "Bagging vs Boosting in Machine Learning", item: canonical },
      ],
    },
  ],
};

export default function BaggingVsBoostingPage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className={styles.shell}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/aihelpcenter">AI Help Center</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link href="/aihelpcenter/machine-learning">Machine Learning</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span>Bagging vs Boosting</span>
        </nav>

        <div className={styles.layout}>
          <article className={styles.article}>
            <h1 className={styles.title}>
              Bagging vs Boosting in Machine Learning:{" "}
              <span className={styles.accent}>Differences and When to Use Each</span>
            </h1>

            <div className={styles.byline}>
              <span className={styles.reviewed}>Reviewed by</span>
              <a
                className={styles.authorLink}
                href="https://www.linkedin.com/in/eeshani-agrawal-b674045/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Eeshani Agrawal's LinkedIn profile"
              >
                <Image className={styles.avatar} src={EeshaniAgarwal} alt="Eeshani Agrawal" width={34} height={34} />
                <span>Eeshani Agrawal</span>
                <Linkedin size={14} aria-hidden="true" />
              </a>
              <a
                className={styles.authorLink}
                href="https://www.linkedin.com/in/prateekagrawal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Prateek Agrawal's LinkedIn profile"
              >
                <Image className={styles.avatar} src={PrateekAgarwal} alt="Prateek Agrawal" width={34} height={34} />
                <span>Prateek Agrawal</span>
                <Linkedin size={14} aria-hidden="true" />
              </a>
              <span className={styles.date}>Last updated 15 October 2026</span>
            </div>

            <div className={styles.articleBody} dangerouslySetInnerHTML={{ __html: articleHtml }} />

            <footer className={styles.articleFooter}>
              Ivy Professional School (Ivy Knowledge Services Pvt Ltd). Teaching AI and data science since 2008. Recognized by MeitY.
            </footer>
          </article>

          <aside className={styles.roadmap} aria-label="Article roadmap">
            <h2 className={styles.roadmapTitle}>Roadmap</h2>
            <ol>
              {roadmap.map(([id, label]) => (
                <li key={id}><a href={`#${id}`}>{label}</a></li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </div>
  );
}
