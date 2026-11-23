const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;

// String.raw keeps backslashes in the code samples exactly as written.
export const articleMarkup = String.raw`
<div class="crumb"><a href="/aihelpcenter">AI Help Center</a> › <a href="/aihelpcenter/genai-llm">GenAI / LLM</a> › <b>How to Evaluate LLM Applications</b></div>
<header class="hero"><div class="hero-in"><div>
<div class="pill">GenAI / LLM · PRACTITIONER GUIDE</div>
<h1>How to Evaluate LLM Applications: Evals, Metrics and LLM-as-a-Judge</h1>
<p class="sub">Build a golden dataset, choose metrics that match the job, use LLM judges without being fooled by them, and stop regressions before they ship.</p>
<div class="meta"><span class="byline"><img class="byline-avatar" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><img class="byline-avatar" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/>By <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a> &amp; <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a></span><span>14 min read</span><span>Published 23 Nov 2026</span><span>Last reviewed 23 Nov 2026</span></div></div>
<div class="hcard"><div class="top">Quick insight</div><div class="in"><p><strong>If you cannot score it, you cannot change it safely.</strong> Every prompt edit, model upgrade or chunking change silently fixes some answers and breaks others. A small golden dataset and a script that runs on every change is what turns an LLM demo into a product.</p></div></div></div></header>

<div class="wrap"><main>
<p class="answer">LLM evaluation starts with a golden dataset of real questions with expected answers and sources. Score your application on it with task metrics (exact match, faithfulness, answer relevance, retrieval recall@k), use a calibrated LLM-as-a-judge for open-ended answers, rerun the set on every change as a regression gate, and monitor live traffic.</p>

<section class="summary" id="summary"><h2>Summary: the short version</h2><ul>
<li>You evaluate the whole application (prompt, retrieval, model, tools), not the model alone, because most failures come from the parts around the model.</li>
<li>A golden dataset of 50 to 200 real, tagged questions with expected facts and source IDs is the single most valuable evaluation asset.</li>
<li>Score retrieval and generation separately: recall@k tells you whether the right passage was found, faithfulness tells you whether the answer stuck to it.</li>
<li>LLM judges agree with humans often enough to be useful, but they show position, verbosity and self-enhancement biases, so calibrate them against human labels.</li>
<li>Offline evals gate releases; online evals on sampled live traffic find the failures your golden set did not anticipate, which then become new golden cases.</li>
</ul></section>

<section class="card" id="what-is-llm-evaluation-and-how-is-it-different-from-testing-a-normal-ml-model"><div class="pill">GenAI / LLM</div><h2>What is LLM evaluation, and how is it different from testing a normal ML model?</h2>
<p><strong>LLM evaluation is the practice of measuring whether an LLM-powered application gives correct, grounded, useful and safe outputs on the inputs it will really see, and it differs from classic ML testing because outputs are open-ended text with no single right label.</strong></p>
<p>A churn model outputs a probability you can compare with what happened. An HR assistant asked about leave encashment can be right in many wordings and wrong in subtle ones. Outputs vary between runs, and quality has several dimensions (correctness, faithfulness, format, tone, safety, latency, cost) that no single accuracy number captures. Stanford's <a href="https://arxiv.org/abs/2211.09110" target="_blank" rel="noopener">HELM benchmark</a> (Liang et al., 2022) made the same point at model level, scoring calibration, robustness, fairness, toxicity and efficiency alongside accuracy.</p>
<p>The bigger shift is what you evaluate. Most bad weeks trace back to a changed chunk size, prompt or retrieval order, with the model itself unchanged, so the unit under test is the whole application.</p>
</section>

<section class="card" id="what-is-a-golden-dataset-and-how-do-you-build-one"><div class="pill">Datasets</div><h2>What is a golden dataset, and how do you build one?</h2>
<p><strong>A golden dataset is a fixed, version-controlled set of realistic inputs with the facts a good answer must contain and the sources it should use, which you score your application against on every change.</strong> It is your test suite.</p>
<p>Build the first version in a week, not a quarter:</p>
<ol class="steps">
<li>Pull 100 to 300 real questions from logs, tickets or emails, and keep the users' actual wording.</li>
<li>Have domain owners write the must-include facts and the source passage for each.</li>
<li>Add hard cases: ambiguous questions, Hinglish, false premises, out-of-scope requests.</li>
<li>Include questions whose correct answer is "not in our documents".</li>
<li>Tag every case by topic and difficulty so you can score slices, then freeze and version it.</li>
</ol>
<p>Fifty well-chosen cases beat five hundred generated ones. LLM-written synthetic questions can widen coverage, but they are cleaner and easier than real users, so never let them dominate.</p>
<div class="callout classroom"><div class="eyebrow">From our classrooms</div><p>In Ivy Professional School's enterprise workshops, the slowest step is getting a policy owner to agree, in writing, what the correct answer to 50 questions is. Teams that manage it discover contradictions in their own documents before the model does.</p></div>
</section>

<section class="card" id="what-is-the-difference-between-offline-and-online-llm-evaluation"><div class="pill">Lifecycle</div><h2>What is the difference between offline and online LLM evaluation?</h2>
<p><strong>Offline evaluation scores your application on a fixed dataset before release; online evaluation scores samples of real production traffic after release.</strong> You need both, and they feed each other.</p>
<div class="tbl"><table>
<thead><tr><th scope="col">Aspect</th><th scope="col">Offline evaluation</th><th scope="col">Online evaluation</th></tr></thead>
<tbody>
<tr><td>Data</td><td>Golden dataset with expected answers</td><td>Live user inputs, usually without labels</td></tr>
<tr><td>When</td><td>Every prompt, model or retrieval change, in CI</td><td>Continuously, on a sample of traffic</td></tr>
<tr><td>Metrics</td><td>Exact match, fact coverage, recall@k, judge scores against references</td><td>Reference-free judge scores, user feedback, escalations, latency, cost</td></tr>
<tr><td>Catches</td><td>Regressions on known cases</td><td>New question types, drift, real-world failures</td></tr>
<tr><td>Main risk</td><td>Dataset goes stale and stops reflecting users</td><td>Privacy of logged conversations; noisy signals</td></tr>
</tbody></table></div>
<figure class="diagram"><svg viewBox="0 0 720 220" role="img" aria-label="LLM evaluation loop: golden dataset feeds offline evals in CI, which gate the release. After release, online monitoring samples live traffic. Failures found in production are reviewed and added back to the golden dataset." style="width:100%;height:auto"><defs><marker id="ar8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0b5394"/></marker></defs><g font-family="Poppins,sans-serif" font-size="13" fill="#14202b">
<text x="0" y="16" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">The evaluation loop</text>
<rect x="0" y="40" width="150" height="56" rx="10" fill="#f7a61b"/><text x="75" y="64" text-anchor="middle" font-weight="600">Golden dataset</text><text x="75" y="82" text-anchor="middle" font-size="12">versioned, tagged</text>
<line x1="152" y1="68" x2="196" y2="68" stroke="#0b5394" stroke-width="2.5" marker-end="url(#ar8)"/>
<rect x="200" y="40" width="150" height="56" rx="10" fill="#0b5394"/><text x="275" y="64" text-anchor="middle" fill="#fff" font-weight="600">Offline evals</text><text x="275" y="82" text-anchor="middle" fill="#fff" font-size="12">runs on every change</text>
<line x1="352" y1="68" x2="396" y2="68" stroke="#0b5394" stroke-width="2.5" marker-end="url(#ar8)"/>
<rect x="400" y="40" width="130" height="56" rx="10" fill="#1f9d6b"/><text x="465" y="64" text-anchor="middle" fill="#fff" font-weight="600">Release gate</text><text x="465" y="82" text-anchor="middle" fill="#fff" font-size="12">pass thresholds</text>
<line x1="532" y1="68" x2="566" y2="68" stroke="#0b5394" stroke-width="2.5" marker-end="url(#ar8)"/>
<rect x="570" y="40" width="150" height="56" rx="10" fill="#1a98cb"/><text x="645" y="64" text-anchor="middle" fill="#fff" font-weight="600">Online monitoring</text><text x="645" y="82" text-anchor="middle" fill="#fff" font-size="12">sampled live traffic</text>
<path d="M645 98 V160 H450" fill="none" stroke="#0b5394" stroke-width="2.5" marker-end="url(#ar8)"/>
<rect x="296" y="134" width="150" height="56" rx="10" fill="#5b4bd6"/><text x="371" y="158" text-anchor="middle" fill="#fff" font-weight="600">Failure review</text><text x="371" y="176" text-anchor="middle" fill="#fff" font-size="12">humans label misses</text>
<path d="M294 162 H75 V100" fill="none" stroke="#0b5394" stroke-width="2.5" marker-end="url(#ar8)"/>
<text x="90" y="182" font-size="12">new cases added</text>
</g></svg><figcaption>Production failures become tomorrow's golden cases, so the test set grows in the direction your users push it.</figcaption></figure>
</section>

<section class="card" id="which-metrics-should-you-use-to-evaluate-an-llm-application"><div class="pill">Metrics</div><h2>Which metrics should you use to evaluate an LLM application?</h2>
<p><strong>Use the cheapest metric that captures what "correct" means for each task: deterministic checks first, retrieval metrics for RAG, and judge-based scores only for qualities code cannot check.</strong></p>
<div class="tbl"><table>
<thead><tr><th scope="col">Metric</th><th scope="col">What it measures</th><th scope="col">How it is computed</th><th scope="col">Use it for</th></tr></thead>
<tbody>
<tr><td>Exact match</td><td>Output equals the expected value</td><td>String or field comparison</td><td>Classification, extraction, IDs, dates</td></tr>
<tr><td>Key-fact coverage</td><td>Required facts appear in the answer</td><td>Checklist match per case</td><td>Policy and FAQ answers</td></tr>
<tr><td>Format validity</td><td>Output parses and matches the schema</td><td>JSON parse plus schema check</td><td>Anything feeding another system</td></tr>
<tr><td>Faithfulness</td><td>Every claim is supported by retrieved context</td><td>LLM judge or claim-level check</td><td>RAG answers</td></tr>
<tr><td>Answer relevance</td><td>The answer addresses the question asked</td><td>LLM judge, or embedding similarity</td><td>Open-ended assistants</td></tr>
<tr><td>Retrieval recall@k</td><td>Share of the relevant passages found in the top k results</td><td>|relevant ∩ top-k| ÷ |relevant|</td><td>Any retrieval step</td></tr>
<tr><td>Abstention accuracy</td><td>Says "not found" when the answer is absent</td><td>Score on out-of-scope cases</td><td>High-stakes domains</td></tr>
<tr><td>Tool-call accuracy</td><td>An agent called the right tool with the right arguments</td><td>Compare logged tool calls with expected calls</td><td>Agents and tool-using assistants</td></tr>
<tr><td>Latency and cost</td><td>Seconds and tokens per request</td><td>Logged per run</td><td>Every release decision</td></tr>
</tbody></table></div>
<p>Recall@k deserves special attention in <a href="/aihelpcenter/genai-llm/rag-explained-how-to-make-ai-answer-from-your-data">retrieval-augmented generation (RAG)</a>. If the right passage is not in the top five results, no prompt can save the answer. Measuring it separately tells you whether to fix retrieval (chunking, embeddings, the vector database) or generation, which are very different jobs. Faithfulness is the metric that catches <a href="/aihelpcenter/genai-llm/why-llms-hallucinate-and-how-to-reduce-it">LLM hallucinations</a> against your own documents. The <a href="https://arxiv.org/abs/2309.15217" target="_blank" rel="noopener">Ragas paper</a> (Es et al., 2023) formalised this split into context, faithfulness and answer-quality dimensions. For agents (our <a href="/aihelpcenter/genai-llm/what-is-agentic-ai">agentic AI explainer</a> covers why they fail differently), add tool-call accuracy: our <a href="/aihelpcenter/genai-llm/build-your-first-ai-agent-python-langgraph">LangGraph agent tutorial</a> shows the trace you would score.</p>
</section>

<section class="card" id="how-does-llm-as-a-judge-work-and-can-you-trust-it"><div class="pill">LLM-as-a-judge</div><h2>How does LLM-as-a-judge work, and can you trust it?</h2>
<p><strong>An LLM judge is a second model prompted with a rubric to grade an answer, and you can trust it only after checking its verdicts against human labels on your own data.</strong></p>
<p>The best-known study, <a href="https://arxiv.org/abs/2306.05685" target="_blank" rel="noopener">Zheng et al. (2023)</a>, found that strong judges such as GPT-4 reached over 80% agreement with human preferences, about the same level at which humans agree with each other. The same paper documented biases you must design around:</p>
<ul>
<li><strong>Position bias:</strong> in pairwise comparisons, judges favour an answer because of where it appears. Run both orders and count only consistent verdicts.</li>
<li><strong>Verbosity bias:</strong> longer answers look better to judges. Tell the judge to ignore length and grade against a reference.</li>
<li><strong>Self-enhancement bias:</strong> judges can favour outputs from their own model family. Use a different family for judging where you can.</li>
<li><strong>Limited reasoning:</strong> judges miss maths and logic errors. Check numbers with code, not with a judge.</li>
</ul>
<p>Keep the judge's job narrow. A yes/no question ("Is every claim supported by the extract?") with a list of unsupported claims is far more reliable than a 1 to 10 quality score.</p>
<div class="code"><div class="fname">judge.py</div><pre><code>import json

from openai import OpenAI

JUDGE_PROMPT = """You are checking an HR policy assistant for faithfulness.

POLICY EXTRACT:
[CONTEXT]

ASSISTANT ANSWER:
[ANSWER]

Is every factual claim in the answer supported by the policy extract?
Ignore tone and length. Reply in JSON only, in this shape:
{"faithful": true, "unsupported_claims": []}"""


def judge_faithfulness(client: OpenAI, model: str, context: str, answer: str) -&gt; dict:
    prompt = JUDGE_PROMPT.replace("[CONTEXT]", context).replace("[ANSWER]", answer)
    response = client.chat.completions.create(
        model=model,                 # ideally a different model family from the one judged
        temperature=0,               # drop if your judge model only accepts its default
        response_format={"type": "json_object"},
        messages=[{"role": "user", "content": prompt}],
    )
    return json.loads(response.choices[0].message.content)</code></pre></div>
<div class="callout strong-opinion"><div class="eyebrow">Strong opinion</div><p>Never ship a judge you have not calibrated. Label 50 answers by hand, run the judge on them, and read every disagreement. If agreement is poor, fix the rubric before trusting a single dashboard built on it.</p></div>
</section>

<section class="card" id="how-do-you-build-a-simple-llm-eval-harness-in-python"><div class="pill">Code</div><h2>How do you build a simple LLM eval harness in Python?</h2>
<p><strong>Loop over the golden cases, call your application, compute per-case metrics, aggregate them by tag, and exit with an error when a threshold is missed so CI blocks the change.</strong> It needs only the standard library.</p>
<div class="code"><div class="fname">eval_harness.py</div><pre><code>import json
import statistics
import sys
from collections import defaultdict

# In practice, keep these in golden.jsonl under version control.
GOLDEN = [
    {"id": "leave-01", "tag": "leave", "question": "How many casual leaves do I get in a year?",
     "must_include": ["12"], "relevant_docs": ["leave-s2"]},
    {"id": "travel-03", "tag": "travel", "question": "What is the daily meal allowance in a metro city?",
     "must_include": ["1,200"], "relevant_docs": ["travel-s4"]},
    {"id": "posh-01", "tag": "posh", "question": "Whom do I contact to report harassment?",
     "must_include": ["Internal Committee"], "relevant_docs": ["posh-s1", "posh-s3"]},
]


def answer_question(question: str) -&gt; dict:
    """Replace with a call to your real application. Return the answer text and
    the ids of the chunks the retriever returned, best first."""
    canned = {
        "How many casual leaves do I get in a year?":
            ("You get 12 casual leaves per calendar year.", ["leave-s2", "leave-s5"]),
        "What is the daily meal allowance in a metro city?":
            ("The meal allowance is Rs 1,000 per day.", ["travel-s2", "travel-s4"]),
        "Whom do I contact to report harassment?":
            ("Write to the Internal Committee at ic@company.example.", ["posh-s1", "hr-s9"]),
    }
    answer, retrieved = canned[question]
    return {"answer": answer, "retrieved": retrieved}


def fact_coverage(answer: str, must_include: list[str]) -&gt; float:
    hits = [fact for fact in must_include if fact.lower() in answer.lower()]
    return len(hits) / len(must_include)


def recall_at_k(retrieved: list[str], relevant: list[str], k: int = 5) -&gt; float:
    return len(set(retrieved[:k]) &amp; set(relevant)) / len(set(relevant))


def run(golden: list[dict], k: int = 5) -&gt; list[dict]:
    rows = []
    for case in golden:
        out = answer_question(case["question"])
        rows.append({
            "id": case["id"], "tag": case["tag"], "answer": out["answer"],
            "coverage": fact_coverage(out["answer"], case["must_include"]),
            "recall": recall_at_k(out["retrieved"], case["relevant_docs"], k),
        })
    return rows


def report(rows: list[dict]) -&gt; dict:
    by_tag = defaultdict(list)
    for row in rows:
        by_tag[row["tag"]].append(row)
    for tag, group in sorted(by_tag.items()):
        cov = statistics.mean(r["coverage"] for r in group)
        rec = statistics.mean(r["recall"] for r in group)
        print(f"{tag:10} n={len(group):&lt;4} coverage={cov:.2f}  recall@5={rec:.2f}")
    return {"coverage": statistics.mean(r["coverage"] for r in rows),
            "recall": statistics.mean(r["recall"] for r in rows)}


THRESHOLDS = {"coverage": 0.90, "recall": 0.80}  # agree these with the business owner

if __name__ == "__main__":
    results = run(GOLDEN)
    overall = report(results)
    print("overall", {m: round(v, 2) for m, v in overall.items()})
    for row in results:
        if row["coverage"] &lt; 1:
            print("FAIL", row["id"], "-&gt;", row["answer"])
    with open("eval_results.jsonl", "w", encoding="utf-8") as f:
        f.writelines(json.dumps(r, ensure_ascii=False) + "\n" for r in results)
    if any(overall[m] &lt; t for m, t in THRESHOLDS.items()):
        sys.exit("Eval gate failed: do not ship this change.")</code></pre></div>
<p>Running it against the stub shows the shape of a useful report:</p>
<div class="code"><div class="fname">output</div><pre><code>$ python eval_harness.py
leave      n=1    coverage=1.00  recall@5=1.00
posh       n=1    coverage=1.00  recall@5=0.50
travel     n=1    coverage=0.00  recall@5=1.00
overall {'coverage': 0.67, 'recall': 0.83}
FAIL travel-03 -&gt; The meal allowance is Rs 1,000 per day.
Eval gate failed: do not ship this change.
$ echo $?
1</code></pre></div>
<p>Two different failures surface. The travel answer retrieved the right section but stated the wrong allowance, a generation problem. The harassment question got a correct answer while missing one of two relevant passages, a retrieval problem worth watching. Then point <code>answer_question</code> at your real system and move the cases into <code>golden.jsonl</code>.</p>
</section>

<section class="card" id="how-do-you-run-regression-tests-on-prompts-and-models"><div class="pill">Regression</div><h2>How do you run regression tests on prompts and models?</h2>
<p><strong>Run the full golden set on every change to prompts, models, retrieval settings or tools, compare each slice with the last accepted baseline, and block the release if any slice drops beyond an agreed tolerance.</strong> The averages hide regressions; the slices reveal them.</p>
<figure class="diagram"><svg viewBox="0 0 720 270" role="img" aria-label="Illustrative grouped bar chart comparing a baseline prompt and a new prompt across slices. Overall 0.86 to 0.89. Leave 0.92 to 0.95. Travel 0.88 to 0.93. Payroll 0.84 to 0.88. Hinglish questions fall from 0.81 to 0.68." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="12" fill="#14202b">
<text x="0" y="16" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">Fact coverage by slice, baseline vs new prompt (illustrative)</text>
<rect x="430" y="28" width="12" height="12" fill="#1a98cb"/><text x="448" y="39">Baseline</text><rect x="520" y="28" width="12" height="12" fill="#0b5394"/><text x="538" y="39">New prompt</text>
<line x1="40" y1="230" x2="710" y2="230" stroke="#556"/>
<rect x="60" y="76" width="44" height="154" fill="#1a98cb"/><rect x="106" y="70" width="44" height="160" fill="#0b5394"/><text x="82" y="70" text-anchor="middle">0.86</text><text x="128" y="64" text-anchor="middle">0.89</text><text x="105" y="248" text-anchor="middle">Overall</text>
<rect x="190" y="64" width="44" height="166" fill="#1a98cb"/><rect x="236" y="59" width="44" height="171" fill="#0b5394"/><text x="212" y="58" text-anchor="middle">0.92</text><text x="258" y="53" text-anchor="middle">0.95</text><text x="235" y="248" text-anchor="middle">Leave</text>
<rect x="320" y="72" width="44" height="158" fill="#1a98cb"/><rect x="366" y="63" width="44" height="167" fill="#0b5394"/><text x="342" y="66" text-anchor="middle">0.88</text><text x="388" y="57" text-anchor="middle">0.93</text><text x="365" y="248" text-anchor="middle">Travel</text>
<rect x="450" y="79" width="44" height="151" fill="#1a98cb"/><rect x="496" y="72" width="44" height="158" fill="#0b5394"/><text x="472" y="73" text-anchor="middle">0.84</text><text x="518" y="66" text-anchor="middle">0.88</text><text x="495" y="248" text-anchor="middle">Payroll</text>
<rect x="580" y="84" width="44" height="146" fill="#1a98cb"/><rect x="626" y="108" width="44" height="122" fill="#d64545"/><text x="602" y="78" text-anchor="middle">0.81</text><text x="648" y="102" text-anchor="middle" font-weight="700">0.68</text><text x="625" y="248" text-anchor="middle">Hinglish</text>
<text x="0" y="266" font-size="11" font-style="italic">Illustrative numbers. Bar height proportional to score (0 to 1).</text>
</g></svg><figcaption>The overall score went up, yet Hinglish questions got much worse. A slice-level gate catches what an average hides.</figcaption></figure>
<p>Practical rules we use:</p>
<ul>
<li>Pin the model version and set temperature to 0 for eval runs, so differences come from your change.</li>
<li>Run judge-scored cases two or three times and average, since judges vary too.</li>
<li>Store every run's outputs alongside the scores, so you can diff answers between versions.</li>
<li>Treat a model provider's upgrade like your own code change: rerun the suite before switching. Providers retire model snapshots on a schedule, so this happens more often than teams expect.</li>
<li>Score a <a href="/aihelpcenter/genai-llm/fine-tuning-llms-lora-qlora">LoRA fine-tuned model</a> on the same golden set as the prompted base model it is meant to beat.</li>
</ul>
<p>Put the gate where releases happen. In Ivy Professional School's <a href="/courses/generative-ai-course">Advanced Generative AI course</a>, learners deploy their applications as FastAPI services in Docker; our advice is to wire a suite like this into that same pipeline, so each redeploy is a decision backed by scores rather than a hope.</p>
</section>

<section class="card" id="which-tools-can-help-with-llm-evaluation"><div class="pill">Tools</div><h2>Which tools can help with LLM evaluation?</h2>
<p><strong>Open-source libraries cover most metric needs, and hosted platforms add tracing, dataset management and online evaluation; start with a script and adopt a tool when the script becomes a chore.</strong></p>
<div class="tbl"><table>
<thead><tr><th scope="col">Tool</th><th scope="col">What it is</th><th scope="col">Good fit when</th></tr></thead>
<tbody>
<tr><td>Ragas</td><td>Open-source Python library with LLM-based RAG metrics such as faithfulness and context quality</td><td>You run RAG and want standard retrieval and faithfulness scores quickly</td></tr>
<tr><td>promptfoo</td><td>Open-source CLI and library for test cases, assertions, side-by-side prompt and model comparison, and red-teaming</td><td>You want config-driven tests in CI without much code</td></tr>
<tr><td>LangSmith</td><td>Commercial platform from LangChain for tracing, datasets, and offline and online evaluation</td><td>You build with LangChain or LangGraph and want traces and evals in one place</td></tr>
<tr><td>OpenAI Evals</td><td>Open-source framework and registry of benchmarks for evaluating models and LLM systems</td><td>You want reusable eval templates and benchmark-style runs</td></tr>
<tr><td>Your own harness</td><td>A script like the one above, plus pytest</td><td>You are starting out or need full control</td></tr>
</tbody></table></div>
</section>

<section class="card" id="worked-example-how-would-a-pune-manufacturer-evaluate-its-hr-policy-assistant"><div class="pill">Worked example</div><h2>Worked example: how would a Pune manufacturer evaluate its HR policy assistant?</h2>
<p><strong>By turning real employee questions into a tagged golden set, scoring retrieval and answers separately, and gating every change on slice-level thresholds agreed with HR.</strong> Imagine a manufacturing company near Pune with about 1,200 employees across a plant and a head office. HR has built a RAG assistant over its leave, travel, payroll and POSH policies, and shop-floor staff often ask in Hinglish.</p>
<p>The team pulls 150 questions from six months of HR helpdesk emails, masks names and employee IDs, and asks policy owners to write the must-include facts and source sections. They add 15 out-of-scope questions ("Can you approve my leave?") and tag everything by policy and language. Thresholds, agreed with the HR head: fact coverage at least 0.90 overall and 0.85 in every slice, recall@5 at least 0.85, abstention correct on every out-of-scope case, and zero POSH answers without a cited section.</p>
<p>Illustrative first run: coverage 0.86, recall@5 0.91, and the Hinglish slice at 0.74. Because retrieval is healthy, the team focuses on generation: the prompt answered in formal English and dropped amounts. A revised prompt that replies in the user's language and quotes the policy line lifts Hinglish coverage. A calibrated judge then samples 5% of live conversations weekly, and every miss goes to HR for review and into the golden set.</p>
</section>

<section class="card concl" id="what-should-you-do-to-start-evaluating-your-llm-application"><div class="pill">Action plan</div><h2>What should you do to start evaluating your LLM application?</h2>
<p><strong>Ship a small, honest eval this week rather than a perfect one next quarter.</strong></p>
<div class="check"><ul>
<li>Collect 50 real questions and get a domain owner to write the must-include facts and sources.</li>
<li>Add ten hard cases and five questions whose answer is not in your documents.</li>
<li>Tag every case by topic and language, and store the set in version control.</li>
<li>Adapt the harness above, measuring fact coverage and recall@k first.</li>
<li>Calibrate one narrow judge (faithfulness, yes or no) against 50 human labels.</li>
<li>Agree release thresholds per slice with the business owner and enforce them in CI.</li>
<li>Sample live conversations weekly and turn every confirmed failure into a golden case.</li>
</ul></div></section>

<section class="card" id="frequently-asked-questions"><div class="pill">FAQ</div><h2>Frequently asked questions</h2>
<h3>What is an LLM eval?</h3>
<p>An LLM eval is a repeatable test that runs an LLM application on a set of inputs and scores the outputs against defined criteria, such as correctness, faithfulness to sources, format or safety. Teams rerun evals after every prompt, model or retrieval change to catch regressions before users see them.</p>
<h3>How many test cases do I need to evaluate an LLM application?</h3>
<p>Start with 50 to 200 real, carefully labelled cases covering your main topics and known hard cases. Grow the set over time from production failures, and make sure each important slice, such as a language or product line, has enough cases to be scored on its own.</p>
<h3>Is LLM-as-a-judge reliable?</h3>
<p>It can be, for narrow and clearly defined questions. Research on MT-Bench found strong judges agreed with human preferences over 80% of the time, similar to agreement between humans. Judges also show position, verbosity and self-enhancement biases, so calibrate yours against human labels on your own data before relying on it.</p>
<h3>What is the difference between faithfulness and answer relevance?</h3>
<p>Faithfulness asks whether every claim in the answer is supported by the retrieved context, which catches hallucinations. Answer relevance asks whether the answer actually addresses the question. An answer can be perfectly faithful to the documents yet irrelevant to what was asked, so measure both.</p>
<h3>How do you evaluate a RAG system?</h3>
<p>Evaluate retrieval and generation separately. For retrieval, measure recall@k and precision against labelled relevant passages. For generation, measure fact coverage, faithfulness to the retrieved context and answer relevance. This split tells you whether to fix chunking and search, or the prompt and model.</p>
</section>

<section class="card" id="sources"><div class="pill">Sources</div><h2>Sources</h2><ul>
<li>Zheng, L. et al. "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena." 2023. <a href="https://arxiv.org/abs/2306.05685" target="_blank" rel="noopener">https://arxiv.org/abs/2306.05685</a></li>
<li>Es, S. et al. "Ragas: Automated Evaluation of Retrieval Augmented Generation." 2023. <a href="https://arxiv.org/abs/2309.15217" target="_blank" rel="noopener">https://arxiv.org/abs/2309.15217</a></li>
<li>Liang, P. et al. "Holistic Evaluation of Language Models." 2022. <a href="https://arxiv.org/abs/2211.09110" target="_blank" rel="noopener">https://arxiv.org/abs/2211.09110</a></li>
<li>Ragas documentation. <a href="https://docs.ragas.io/en/stable/" target="_blank" rel="noopener">https://docs.ragas.io/en/stable/</a></li>
<li>promptfoo documentation. <a href="https://www.promptfoo.dev/docs/intro/" target="_blank" rel="noopener">https://www.promptfoo.dev/docs/intro/</a></li>
<li>LangChain. "LangSmith Evaluation." Documentation. <a href="https://docs.langchain.com/langsmith/evaluation" target="_blank" rel="noopener">https://docs.langchain.com/langsmith/evaluation</a></li>
<li>OpenAI. "Evals" repository. <a href="https://github.com/openai/evals" target="_blank" rel="noopener">https://github.com/openai/evals</a></li>
</ul></section>

<section class="card" id="related-articles"><div class="pill">Keep reading</div><h2>Related articles</h2><ul>
<li><a href="/aihelpcenter/genai-llm/why-llms-hallucinate-and-how-to-reduce-it">Why LLMs hallucinate, and how to reduce it</a></li>
<li><a href="/aihelpcenter/genai-llm/rag-explained-how-to-make-ai-answer-from-your-data">RAG explained</a></li>
<li><a href="/aihelpcenter/genai-llm/build-your-first-ai-agent-python-langgraph">Build your first AI agent with LangGraph</a></li>
<li><a href="/aihelpcenter/genai-llm/fine-tuning-llms-lora-qlora">Fine-tuning LLMs with LoRA and QLoRA</a></li>
</ul>
<p>More in <a href="/aihelpcenter/genai-llm">GenAI / LLM</a>.</p>
<div class="cta"><p><strong>Learn to ship LLM applications you can measure.</strong> Ivy's Advanced Generative AI Course takes you from building RAG pipelines over vector databases, LangGraph agents and LoRA fine-tunes to deploying them as scalable FastAPI and Docker microservices, the stage where evaluation decides what goes live. 160 hours, live, with capstone projects, certification and placement support.</p>
<a class="btn" href="/courses/generative-ai-course">Explore the GenAI course with production deployment</a><a class="btn alt" href="https://prepai.ivyproschool.com" target="_blank" rel="noopener">Take the free PrepAI Diagnose</a>
<p>Already shipping LLM features and want a second opinion on your stack? Call or WhatsApp +91 7676882222 to talk to a counsellor or book two free demo classes, or join a free <a href="/bootcamp">live AI bootcamp</a>.</p></div></section>
</main>
<aside><div class="stick"><nav class="box" aria-label="Article roadmap"><div class="lbl">ROADMAP</div><a href="#summary">Summary</a><a href="#what-is-llm-evaluation-and-how-is-it-different-from-testing-a-normal-ml-model">What is LLM evaluation?</a><a href="#what-is-a-golden-dataset-and-how-do-you-build-one">Building a golden dataset</a><a href="#what-is-the-difference-between-offline-and-online-llm-evaluation">Offline vs online evaluation</a><a href="#which-metrics-should-you-use-to-evaluate-an-llm-application">Which metrics to use</a><a href="#how-does-llm-as-a-judge-work-and-can-you-trust-it">LLM-as-a-judge</a><a href="#how-do-you-build-a-simple-llm-eval-harness-in-python">A Python eval harness</a><a href="#how-do-you-run-regression-tests-on-prompts-and-models">Regression testing</a><a href="#which-tools-can-help-with-llm-evaluation">Evaluation tools</a><a href="#worked-example-how-would-a-pune-manufacturer-evaluate-its-hr-policy-assistant">Worked example: a Pune manufacturer</a><a href="#what-should-you-do-to-start-evaluating-your-llm-application">Where to start</a><a href="#frequently-asked-questions">Frequently asked questions</a><a href="#sources">Sources</a><a href="#related-articles">Related articles</a></nav><div class="box author"><div class="lbl">WRITTEN BY</div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a><p>Founder · AI/ML Leader</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" aria-label="Prateek Agrawal on LinkedIn">${linkedinIcon}</a></div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a><p>Co-founder · Data/AI Consultant</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" aria-label="Eeshani Agrawal on LinkedIn">${linkedinIcon}</a></div></div></div></aside>
</div>
`;
