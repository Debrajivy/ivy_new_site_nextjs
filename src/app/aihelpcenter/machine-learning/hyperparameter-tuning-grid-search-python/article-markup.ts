const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;

export const articleMarkup = `
<div class="crumb"><a href="/aihelpcenter">AI Help Center</a> › <a href="/aihelpcenter/machine-learning">Machine Learning</a> › <b>Hyperparameter Tuning Using Grid Search in Python</b></div>
<header class="hero"><div class="hero-in"><div>
<div class="pill">MACHINE LEARNING · BEGINNER GUIDE</div>
<h1>Hyperparameter Tuning Using <span>Grid Search</span> in Python</h1>
<p class="sub">GridSearchCV end to end, and the one-line pipeline rule that stops a score being quietly wrong.</p>
<div class="meta"><span class="byline"><img class="byline-avatar" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><img class="byline-avatar" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/>By <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a> &amp; <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a></span><span>10 min read</span><span>Published 17 Nov 2026</span><span>Verified on scikit-learn 1.9.1</span></div></div>
<div class="hcard"><div class="top">Quick insight</div><div class="in"><p><strong>Leakage beats tuning, every time.</strong> On 200 rows of pure noise, selecting features outside the pipeline scored <strong>0.755</strong>. Inside a pipeline it scored 0.555, near the honest 0.50. No amount of tuning recovers from that.</p></div></div></div></header>

<div class="wrap"><main>
<p class="answer">Use <code>GridSearchCV</code> from <code>sklearn.model_selection</code>. You give it a model, a dictionary of parameter values to try, and a number of cross-validation folds. It fits every combination, scores each one by cross-validation, and keeps the best. Put the model inside a <code>Pipeline</code> first, or your results will be quietly wrong.</p>

<p>Grid search is the first tuning method most people learn, and it is also the one most often used incorrectly. The mistakes are not in the grid. They are in what surrounds it: preprocessing that sees the validation fold, a scoring metric chosen by habit, and a best score reported as though it were a prediction of future performance.</p>
<p>All code here was run on <strong>scikit-learn 1.9.1</strong>. Every number is copied from the actual run.</p>

<section class="card" id="what-is-a-hyperparameter-and-why-does-it-need-tuning"><div class="pill">Machine Learning</div><h2>What is a hyperparameter, and why does it need tuning?</h2>
<p><strong>A hyperparameter is a setting you choose before training, as opposed to a parameter the model learns from the data during training.</strong> The weights in a logistic regression are parameters. The <code>C</code> that controls how strongly it is regularised is a hyperparameter.</p>
<p>The model cannot learn its own hyperparameters, because they govern how the learning happens. So you try several values and keep whichever performs best, measured honestly. That is all tuning is.</p>
<p>The examples below use the breast cancer dataset built into scikit-learn: 569 rows, 30 features, split into 455 training rows and 114 held-out test rows.</p></section>

<section class="card" id="how-do-you-run-a-grid-search-in-scikit-learn"><div class="pill">Machine Learning</div><h2>How do you run a grid search in scikit-learn?</h2>
<p><strong>Build a pipeline, define a dictionary of values to try, pass both to <code>GridSearchCV</code>, and call <code>fit</code>.</strong></p>
<div class="code"><div class="fname">python</div><pre>from sklearn.model_selection import GridSearchCV, StratifiedKFold
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC

pipe = Pipeline([("scale", StandardScaler()), ("clf", SVC(random_state=42))])

grid = {
    "clf__C":      [0.1, 1, 10],
    "clf__gamma":  ["scale", 0.01],
    "clf__kernel": ["rbf"],
}

cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
gs = GridSearchCV(pipe, grid, cv=cv, scoring="accuracy", n_jobs=-1)
gs.fit(X_train, y_train)</pre></div>
<div class="code"><div class="fname">output</div><pre>best_params_: {'clf__C': 10, 'clf__gamma': 0.01, 'clf__kernel': 'rbf'}
best_score_ : 0.9758</pre></div>
<p>Three details in that code are doing real work.</p>
<p><strong>The double underscore.</strong> <code>clf__C</code> means "the <code>C</code> parameter of the step named <code>clf</code>". That is how you reach inside a pipeline. One underscore will not work, and the error message is not obvious.</p>
<p><strong><code>StratifiedKFold</code>.</strong> For classification, each fold should hold roughly the same class balance as the whole dataset. Passing an integer to <code>cv</code> gives you stratified folds for a classifier anyway, but writing it out means you control the shuffle and the random seed, so the run is reproducible.</p>
<p><strong><code>n_jobs=-1</code>.</strong> Use every available core. Grid search is embarrassingly parallel, and this is the cheapest speed-up available.</p></section>

<section class="card" id="how-do-you-see-what-actually-happened"><div class="pill">Machine Learning</div><h2>How do you see what actually happened?</h2>
<p><strong>Read <code>cv_results_</code> into a DataFrame.</strong> The best parameters alone hide whether the winner won by a mile or by noise.</p>
<div class="code"><div class="fname">python</div><pre>import pandas as pd
res = pd.DataFrame(gs.cv_results_)
res[["param_clf__C", "param_clf__gamma", "mean_test_score",
     "std_test_score", "rank_test_score"]].sort_values("rank_test_score")</pre></div>
<div class="code"><div class="fname">output</div><pre> param_clf__C param_clf__gamma  mean_test_score  std_test_score  rank_test_score
         10.0             0.01         0.975824        0.016150                1
          1.0             0.01         0.971429        0.014906                2
         10.0            scale         0.969231        0.012815                3
          1.0            scale         0.969231        0.014579                3
          0.1             0.01         0.947253        0.012815                5
          0.1            scale         0.942857        0.016150                6</pre></div>
<p>Look at the top two rows. The winner scores 0.9758 and the runner-up 0.9714, a gap of 0.0044. Now look at <code>std_test_score</code>: about 0.016, roughly four times the gap. <strong>The difference between first and second place is smaller than the fold-to-fold noise.</strong> Treating that winner as meaningfully better than the runner-up is reading signal into a rounding error.</p>
<p>This is why <code>cv_results_</code> matters. It is the difference between "C=10 is the best value" and "anything from 1 to 10 works, and 0.1 is genuinely worse".</p></section>

<section class="card" id="why-must-the-grid-search-go-inside-a-pipeline"><div class="pill">Common error</div><h2>Why must the grid search go inside a Pipeline?</h2>
<p><strong>Because any preprocessing step fitted outside cross-validation has already seen the validation fold, which inflates your score by an amount you cannot measure.</strong> This is data leakage, and it is the single most expensive mistake in this article.</p>
<p>Here is the demonstration. Take 200 rows of <strong>pure random noise</strong> with 2,000 features and random labels. There is no signal whatsoever, so an honest classifier should score about 0.50.</p>
<div class="code"><div class="fname">python</div><pre># WRONG: pick the best features using all the data, then cross-validate
sel = SelectKBest(f_classif, k=20).fit(X_noise, y_noise)
cross_val_score(LogisticRegression(), sel.transform(X_noise), y_noise, cv=5).mean()

# RIGHT: selection happens inside each fold
pipe = Pipeline([("sel", SelectKBest(f_classif, k=20)),
                 ("clf", LogisticRegression())])
cross_val_score(pipe, X_noise, y_noise, cv=5).mean()</pre></div>
<div class="code"><div class="fname">output</div><pre>selection BEFORE cv (leaky) : 0.755
selection INSIDE a pipeline : 0.555
inflation from leakage      : 0.200</pre></div>
<p><strong>0.755 on data that contains no information at all.</strong> The feature selector looked at all 200 rows, found the 20 features that happened to correlate with the labels by chance, and handed them to a model that was then tested on those same rows. The pipeline version gets 0.555, which is close to the honest 0.50 for a sample this small.</p>
<p>Scaling leaks less dramatically than feature selection, but it leaks. So does imputation, encoding and resampling. The rule is simple and has no exceptions worth learning: <strong>every step that learns anything from the data goes inside the pipeline.</strong></p></section>

<section class="card" id="how-many-models-does-a-grid-search-actually-fit"><div class="pill">Machine Learning</div><h2>How many models does a grid search actually fit?</h2>
<p><strong>The number of combinations multiplied by the number of folds, plus one final refit.</strong> The example above fits 6 × 5 = 30 models, then refits the winner on all the training data, giving 31.</p>
<p>That is fine. The problem is how fast it grows, because the combinations multiply rather than add.</p>
<div class="tbl"><table>
<thead><tr><th scope="col">Parameters</th><th scope="col">Values each</th><th scope="col">Folds</th><th scope="col">Combinations</th><th scope="col">Model fits</th></tr></thead>
<tbody>
<tr><td>2</td><td>3</td><td>5</td><td>9</td><td>45</td></tr>
<tr><td>3</td><td>4</td><td>5</td><td>64</td><td>320</td></tr>
<tr><td>4</td><td>5</td><td>5</td><td>625</td><td>3,125</td></tr>
<tr><td>5</td><td>5</td><td>10</td><td>3,125</td><td>31,250</td></tr>
</tbody></table></div>
<p>Adding one more parameter with five values multiplies your runtime by five. A grid that feels reasonable while you are typing it can take overnight. Work out the fits before you run it:</p>
<div class="code"><div class="fname">python</div><pre>from sklearn.model_selection import ParameterGrid
print(len(ParameterGrid(grid)) * cv.get_n_splits())</pre></div></section>

<section class="card" id="is-best-score-the-number-you-should-report"><div class="pill">Common error</div><h2>Is best_score_ the number you should report?</h2>
<p><strong>No. <code>best_score_</code> is the score of the configuration you selected because it scored highest, so it is biased upward by the selection itself.</strong> Report a score from data the search never touched.</p>
<div class="code"><div class="fname">python</div><pre>print(gs.best_score_)            # 0.9758  cross-validation, used for selection
print(gs.score(X_test, y_test))  # 0.9825  held-out test set</pre></div>
<p>Here the held-out score came out slightly <strong>higher</strong>, at 0.9825. That is worth dwelling on, because the usual advice is that <code>best_score_</code> always overstates performance, and this run shows otherwise.</p>
<p>Both statements can be true. The selection bias is real and pushes <code>best_score_</code> up in expectation. But on any single run, that bias is competing with ordinary sampling noise, and with only 114 test rows, one extra correct prediction moves the test score by almost 0.009. The two numbers here differ by 0.0066, well inside the noise.</p>
<p>The honest reading is not "the test score was better". It is: <strong>these two numbers are not precise enough to be compared, and neither one is a promise.</strong> If the decision matters, use nested cross-validation, or hold out a test set large enough that its score means something.</p></section>

<section class="card" id="which-scoring-metric-should-you-use"><div class="pill">Machine Learning</div><h2>Which scoring metric should you use?</h2>
<p><strong>Whichever one matches the decision the model will be used for, chosen deliberately, because the metric decides which model wins.</strong> On balanced data this often makes no difference. On imbalanced data it changes the answer completely.</p>
<p>Here is the same grid, on the same data, with only the <code>scoring</code> string changed. The dataset is 4,000 rows with a 4% positive rate, like a fraud or default problem.</p>
<div class="tbl"><table>
<thead><tr><th scope="col"><code>scoring</code></th><th scope="col">Winning <code>C</code></th><th scope="col">Winning <code>class_weight</code></th><th scope="col">Best score</th></tr></thead>
<tbody>
<tr><td><code>accuracy</code></td><td>1</td><td><code>None</code></td><td>0.9642</td></tr>
<tr><td><code>roc_auc</code></td><td>10</td><td><code>None</code></td><td>0.7281</td></tr>
<tr><td><code>average_precision</code></td><td>0.01</td><td><code>None</code></td><td>0.3468</td></tr>
<tr><td><code>recall</code></td><td>0.01</td><td><code>balanced</code></td><td>0.6150</td></tr>
</tbody></table></div>
<p><strong>Four metrics, four different winners.</strong> <code>C</code> ranges across three orders of magnitude and <code>class_weight</code> flips, purely from which string you passed to <code>scoring</code>. The accuracy figure of 0.9642 is the least useful number on that table: with a 4% positive rate, predicting "negative" every time scores about 0.96.</p>
<p>If you are tuning on rare-event data, decide the metric before you decide the grid.</p></section>

<section class="card" id="is-random-search-better-than-grid-search"><div class="pill">Machine Learning</div><h2>Is random search better than grid search?</h2>
<p><strong>Usually, for the same time budget.</strong> Random search samples combinations instead of trying all of them, which means it spends its budget exploring more distinct values of whichever parameter actually matters.</p>
<p>Bergstra and Bengio (2012) made this argument formally: in most problems only a few hyperparameters matter much, and a grid wastes most of its fits re-testing the ones that do not.</p>
<p>Here is a 72-combination grid on a random forest, against a random search allowed only 12 of them.</p>
<div class="code"><div class="fname">output</div><pre>grid   : 72 combinations, best score 0.9626, 33.4s
random : 12 combinations, best score 0.9626,  5.4s</pre></div>
<p><strong>Identical score, 84% less time.</strong> Swapping <code>GridSearchCV</code> for <code>RandomizedSearchCV</code> is a one-word change plus an <code>n_iter</code>:</p>
<div class="code"><div class="fname">python</div><pre>from sklearn.model_selection import RandomizedSearchCV
rs = RandomizedSearchCV(pipe, grid, n_iter=12, cv=3, n_jobs=-1, random_state=42)</pre></div>
<p>Grid search still earns its place when the grid is genuinely small, when you need to be able to say you tried every combination, or when the parameters are categorical with few levels.</p></section>

<section class="card" id="what-does-this-look-like-end-to-end"><div class="pill">Worked example</div><h2>What does this look like end to end?</h2>
<div class="code"><div class="fname">python</div><pre>from sklearn.model_selection import GridSearchCV, StratifiedKFold, train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC

X_tr, X_te, y_tr, y_te = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42)     # hold out FIRST

pipe = Pipeline([("scale", StandardScaler()),             # inside the pipeline
                 ("clf", SVC(random_state=42))])

grid = {"clf__C": [0.1, 1, 10], "clf__gamma": ["scale", 0.01]}
cv = StratifiedKFold(5, shuffle=True, random_state=42)

gs = GridSearchCV(pipe, grid, cv=cv, scoring="roc_auc", n_jobs=-1)
gs.fit(X_tr, y_tr)

print(gs.best_params_)
print(pd.DataFrame(gs.cv_results_)[["params", "mean_test_score", "std_test_score"]])
print("held-out:", gs.score(X_te, y_te))                  # the number you report</pre></div>
<p>The order of those steps is the article in miniature. Hold out the test set first, put every learned step inside the pipeline, inspect the spread rather than just the winner, and report the held-out score. <code>gs</code> itself is already refitted on all the training data, so <code>gs.predict(X_new)</code> works directly.</p></section>

<section class="card" id="when-should-you-not-tune-at-all"><div class="pill">Honest limits</div><h2>When should you not tune at all?</h2>
<p><strong>Four situations where tuning is the wrong use of your time, or will mislead you.</strong></p>
<p><strong>1. Your features or labels are the real problem.</strong> Tuning moves a score by fractions of a percent. Fixing a mislabelled target, a leaking feature or a missing data source moves it by much more. Tune last, not first.</p>
<p><strong>2. The gap between configurations is inside the noise.</strong> If first and second place differ by less than <code>std_test_score</code>, you have not found a better model. You have found a better random seed. Widen the range of values rather than refining the grid around a winner that is not really winning.</p>
<p><strong>3. You cannot afford the fits.</strong> A grid that takes nine hours and improves cross-validated accuracy from 0.9758 to 0.9769 has cost more than it returned. Decide the budget first, then size the grid to fit it.</p>
<p><strong>4. You assume the newest method is faster.</strong> Successive halving, available as <code>HalvingGridSearchCV</code>, trains many candidates on small subsets and promotes the survivors. It is genuinely useful on large datasets with expensive models. On the small problem used here it was <strong>slower and worse</strong>: 45.0 seconds against the full grid's 33.4, for a best score of 0.9512 against 0.9626. With 455 training rows, the early rounds are too noisy to pick good candidates and the overhead is not repaid. Measure it on your own data before adopting it.</p>
<p>Finally, a tuned model is still only as good as its evaluation. For choosing the model family in the first place, which usually matters more than tuning it, see <a href="/aihelpcenter/machine-learning/decision-tree-vs-random-forest">decision tree vs random forest</a> and <a href="/aihelpcenter/machine-learning/random-forest-vs-xgboost">the difference between random forest and XGBoost</a>.</p></section>

<section class="card concl" id="what-should-you-do-next"><div class="pill">Next steps</div><h2>What should you do next?</h2>
<div class="check"><ul>
<li><strong>Take one model you have already built and wrap it in a <code>Pipeline</code></strong>, with every preprocessing step inside. Re-run your cross-validation and compare the score to what you had before. If it drops, you have just found a leak.</li>
<li><strong>Print <code>len(ParameterGrid(grid)) * n_folds</code> before every search.</strong> If the number surprises you, cut the grid or switch to <code>RandomizedSearchCV</code>.</li>
<li><strong>Report the held-out score, not <code>best_score_</code></strong>, and state the fold-to-fold standard deviation next to it so the reader knows how precise it is.</li>
</ul></div></section>

<section class="card" id="frequently-asked-questions"><div class="pill">FAQ</div><h2>Frequently asked questions</h2>
<h3>What is GridSearchCV in scikit-learn?</h3><p>It is a class that performs an exhaustive search over the parameter values you specify, scoring every combination by cross-validation. After fitting, it exposes <code>best_params_</code>, <code>best_score_</code> and a <code>best_estimator_</code> that has been refitted on all the training data.</p>
<h3>What is the difference between grid search and random search?</h3><p>Grid search tries every combination in the grid, while random search samples a fixed number of combinations. For the same time budget, random search usually explores more distinct values of the parameters that matter, which is why it often matches grid search in a fraction of the time.</p>
<h3>Why do I need a Pipeline with GridSearchCV?</h3><p>Because preprocessing fitted outside cross-validation has already seen the validation fold, which inflates the score. In the noise example in this article, doing feature selection outside the pipeline produced 0.755 on data with no signal in it at all.</p>
<h3>What does the double underscore mean in a parameter grid?</h3><p>It separates the pipeline step name from the parameter name, so <code>clf__C</code> means the <code>C</code> parameter of the step named <code>clf</code>. A single underscore will not be recognised.</p>
<h3>Is best_score_ the accuracy I should report?</h3><p>No. It is the cross-validated score of the configuration chosen because it scored highest, so the selection itself biases it upward. Report a score computed on data the search never saw, and state how noisy that estimate is.</p>
<h3>How many combinations is too many for a grid search?</h3><p>It depends on how long one fit takes, so calculate it rather than guessing: <code>len(ParameterGrid(grid)) * n_folds</code> gives the number of model fits. Multiply by the time for a single fit, and if the answer does not fit your budget, use <code>RandomizedSearchCV</code>.</p>
</section>

<section class="card" id="sources"><div class="pill">Sources</div><h2>Sources</h2><ul>
<li>scikit-learn documentation. "GridSearchCV." <a href="https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html" target="_blank" rel="noopener">https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html</a></li>
<li>scikit-learn user guide. "Tuning the hyper-parameters of an estimator." <a href="https://scikit-learn.org/stable/modules/grid_search.html" target="_blank" rel="noopener">https://scikit-learn.org/stable/modules/grid_search.html</a></li>
<li>scikit-learn user guide. "Common pitfalls and recommended practices," on data leakage. <a href="https://scikit-learn.org/stable/common_pitfalls.html" target="_blank" rel="noopener">https://scikit-learn.org/stable/common_pitfalls.html</a></li>
<li>scikit-learn user guide. "Successive halving for hyperparameter tuning." <a href="https://scikit-learn.org/stable/modules/grid_search.html#successive-halving-user-guide" target="_blank" rel="noopener">https://scikit-learn.org/stable/modules/grid_search.html#successive-halving-user-guide</a></li>
<li>Bergstra, J. and Bengio, Y. "Random Search for Hyper-Parameter Optimization." <em>Journal of Machine Learning Research</em>, 13, 281–305, 2012. <a href="https://jmlr.org/papers/v13/bergstra12a.html" target="_blank" rel="noopener">https://jmlr.org/papers/v13/bergstra12a.html</a></li>
</ul></section>

<section class="card" id="related-articles"><div class="pill">Keep reading</div><h2>Related articles</h2><ul>
<li><a href="/aihelpcenter/machine-learning/decision-tree-vs-random-forest">Decision tree vs random forest: use cases and performance metrics</a></li>
<li><a href="/aihelpcenter/machine-learning/random-forest-vs-xgboost">The difference between random forest and XGBoost</a></li>
<li><a href="/aihelpcenter/machine-learning/bagging-vs-boosting-machine-learning">Bagging vs boosting in machine learning</a></li>
</ul>
<p>More in <a href="/aihelpcenter/machine-learning">Machine Learning</a>.</p>
<div class="cta"><p><strong>Find your knowledge gaps in machine learning.</strong> Start your PrepAI Diagnose: a short quiz on this topic, with feedback on what to study next.</p>
<a class="btn" href="/courses/data-science-and-ml-course">Explore the Data Science Course</a><a class="btn alt" href="https://prepai.ivyproschool.com" target="_blank" rel="noopener">Start your PrepAI Diagnose</a>
<p>Want to build and evaluate models on real, messy data, with the evaluation done properly? Our Data Science Course covers it hands-on. WhatsApp or call +91 7676882222.</p></div></section>
</main>
<aside><div class="stick"><nav class="box" aria-label="Article roadmap"><div class="lbl">ROADMAP</div><a href="#what-is-a-hyperparameter-and-why-does-it-need-tuning">What is a hyperparameter, and why does it need tuning?</a><a href="#how-do-you-run-a-grid-search-in-scikit-learn">How do you run a grid search in scikit-learn?</a><a href="#how-do-you-see-what-actually-happened">How do you see what actually happened?</a><a href="#why-must-the-grid-search-go-inside-a-pipeline">Why must the grid search go inside a Pipeline?</a><a href="#how-many-models-does-a-grid-search-actually-fit">How many models does a grid search actually fit?</a><a href="#is-best-score-the-number-you-should-report">Is best_score_ the number you should report?</a><a href="#which-scoring-metric-should-you-use">Which scoring metric should you use?</a><a href="#is-random-search-better-than-grid-search">Is random search better than grid search?</a><a href="#what-does-this-look-like-end-to-end">What does this look like end to end?</a><a href="#when-should-you-not-tune-at-all">When should you not tune at all?</a><a href="#what-should-you-do-next">What should you do next?</a><a href="#frequently-asked-questions">Frequently asked questions</a><a href="#sources">Sources</a><a href="#related-articles">Related articles</a></nav><div class="box author"><div class="lbl">WRITTEN BY</div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a><p>Founder · AI/ML Leader</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" aria-label="Prateek Agrawal on LinkedIn">${linkedinIcon}</a></div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a><p>Co-founder · Data/AI Consultant</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" aria-label="Eeshani Agrawal on LinkedIn">${linkedinIcon}</a></div></div></div></aside>
</div>
`;
