const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;

// String.raw keeps backslashes in the Python regex (\d, \s, \b) exactly as written.
export const articleMarkup = String.raw`
<div class="crumb"><a href="/aihelpcenter">AI Help Center</a> › <a href="/aihelpcenter/genai-llm">GenAI / LLM</a> › <b>Why LLMs Hallucinate</b></div>
<header class="hero"><div class="hero-in"><div>
<div class="pill">GenAI / LLM · PRACTITIONER GUIDE</div>
<h1>Why Do LLMs Hallucinate, and How Do You Reduce It?</h1>
<p class="sub">Understand the real causes of confident wrong answers, then apply a seven-rung mitigation ladder and a Python check you can run today.</p>
<div class="meta"><span class="byline"><img class="byline-avatar" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><img class="byline-avatar" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/>By <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a> &amp; <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a></span><span>13 min read</span><span>Published 8 Nov 2026</span><span>Last reviewed 8 Nov 2026</span></div></div>
<div class="hcard"><div class="top">Quick insight</div><div class="in"><p><strong>A language model is graded for answering, not for knowing.</strong> It was trained to produce the most plausible next words, and most tests reward a lucky guess over an honest "I don't know". Reduce hallucination by changing what the model sees and what you reward.</p></div></div></div></header>

<div class="wrap"><main>
<p class="answer">LLMs hallucinate because they generate the most plausible next words, not verified facts. Rare facts are learned poorly, training and benchmarks reward guessing over admitting uncertainty, and the model often lacks the context your question needs. You reduce hallucination by grounding answers in sources, allowing "I don't know", checking outputs automatically and measuring error rates.</p>

<section class="summary" id="summary"><h2>Summary: the short version</h2><ul>
<li>A hallucination is fluent output that is false or unsupported by the source the model was given; unfaithfulness to your own documents matters most in business use.</li>
<li>The main causes are next-token prediction, rare facts in training data, scoring that rewards guessing, and missing context.</li>
<li>Hallucinations cannot be removed completely, but you can trade a little coverage for much higher accuracy by letting the model abstain.</li>
<li>Grounding with retrieval (RAG) cuts hallucinations sharply but does not end them; models still misread or embellish retrieved text.</li>
<li>Cheap automated checks, such as confirming every number in an answer appears in the source, catch costly errors before a human sees them.</li>
</ul></section>

<section class="card" id="what-is-an-llm-hallucination"><div class="pill">GenAI / LLM</div><h2>What is an LLM hallucination?</h2>
<p><strong>An LLM hallucination is output that sounds confident and fluent but is false, invented, or not supported by the information the model was given.</strong> There is no intent behind it: the model produces text that fits the pattern of a good answer, whether or not the facts behind it exist.</p>
<p>The <a href="https://arxiv.org/abs/2311.05232" target="_blank" rel="noopener">hallucination survey by Huang and colleagues</a> (2023) splits them into two useful families:</p>
<ul>
<li><strong>Factuality hallucinations:</strong> the answer contradicts the real world. A model says a GST return is due on a date it is not, or invents a court judgment.</li>
<li><strong>Faithfulness hallucinations:</strong> the answer contradicts or goes beyond the source you supplied. You paste a vendor contract and the summary adds a penalty clause that is not in it.</li>
</ul>
<p>If you build on your own documents, obsess over faithfulness: it is the one you can measure and control.</p>
</section>

<section class="card" id="why-do-llms-hallucinate"><div class="pill">Causes</div><h2>Why do LLMs hallucinate?</h2>
<p><strong>LLMs hallucinate because they are built to continue text plausibly, they learn rare facts poorly, their training and tests reward guessing, and they often lack the context a question needs.</strong></p>
<h3>Next-token prediction optimises for plausible, not true</h3>
<p>A model is pretrained to predict the next token (see <a href="/aihelpcenter/genai-llm/how-are-llms-trained">how LLMs are trained</a>). It has no fact store to consult. When it knows a fact well, plausible and true coincide. When it does not, the plausible version still comes out, in the same confident tone.</p>
<h3>Rare facts are learned unreliably</h3>
<p>In OpenAI's 2025 paper <a href="https://arxiv.org/abs/2509.04664" target="_blank" rel="noopener">"Why Language Models Hallucinate"</a>, Kalai and co-authors argue that facts appearing once or rarely in training data cannot be learned reliably from patterns. Grammar follows patterns. A particular person's birthday, or a niche circular number, does not.</p>
<h3>Training and benchmarks reward guessing</h3>
<p>The paper's sharper point: most evaluations grade answers right or wrong, with no credit for "I don't know". Guessing a stranger's birthday gives a 1-in-365 chance of a point; declining guarantees zero. Models tuned to climb such leaderboards learn to bluff.</p>
<h3>The context is missing or buried</h3>
<p>Ask about your company's leave policy or last quarter's debtor ageing and the model has never seen the answer, so it fills the gap with something typical. Even when the document is in the prompt, information buried in the middle of a long context is used less reliably than text at the start or end, as the <a href="https://arxiv.org/abs/2307.03172" target="_blank" rel="noopener">"Lost in the Middle" study</a> (Liu et al., 2023) showed.</p>
<figure class="diagram"><svg viewBox="0 0 720 250" role="img" aria-label="Four causes feed into a confident wrong answer: next-token prediction that optimises for plausible text, rare facts seen once or never in training, scoring that rewards guessing over abstaining, and missing or buried context." style="width:100%;height:auto"><defs><marker id="ar6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0b5394"/></marker></defs><g font-family="Poppins,sans-serif" font-size="13" fill="#14202b">
<text x="0" y="16" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">Four roads to a confident wrong answer</text>
<rect x="0" y="34" width="300" height="44" rx="8" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="14" y="53" font-weight="600">Next-token prediction</text><text x="14" y="70" font-size="12">optimises for plausible, not true</text>
<rect x="0" y="86" width="300" height="44" rx="8" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="14" y="105" font-weight="600">Rare facts</text><text x="14" y="122" font-size="12">seen once or never in training data</text>
<rect x="0" y="138" width="300" height="44" rx="8" fill="#fff" stroke="#f7a61b" stroke-width="2"/><text x="14" y="157" font-weight="600">Scoring rewards guessing</text><text x="14" y="174" font-size="12">no credit for "I don't know"</text>
<rect x="0" y="190" width="300" height="44" rx="8" fill="#fff" stroke="#5b4bd6" stroke-width="2"/><text x="14" y="209" font-weight="600">Missing or buried context</text><text x="14" y="226" font-size="12">your data was never in the prompt</text>
<path d="M302 56 C380 56 380 134 452 134" fill="none" stroke="#0b5394" stroke-width="2" marker-end="url(#ar6)"/>
<path d="M302 108 C370 108 380 134 452 134" fill="none" stroke="#0b5394" stroke-width="2" marker-end="url(#ar6)"/>
<path d="M302 160 C370 160 380 134 452 134" fill="none" stroke="#0b5394" stroke-width="2" marker-end="url(#ar6)"/>
<path d="M302 212 C380 212 380 134 452 134" fill="none" stroke="#0b5394" stroke-width="2" marker-end="url(#ar6)"/>
<rect x="456" y="96" width="250" height="76" rx="10" fill="#0b5394"/><text x="581" y="128" text-anchor="middle" fill="#fff" font-family="Montserrat,sans-serif" font-weight="700">Confident wrong answer</text><text x="581" y="150" text-anchor="middle" fill="#fff" font-size="12">same fluent tone as a right one</text>
</g></svg><figcaption>Each cause needs its own fix: grounding for missing context, abstention for rare facts, and better scoring for the incentive problem.</figcaption></figure>
</section>

<section class="card" id="what-are-the-types-of-llm-hallucination"><div class="pill">Types</div><h2>What are the types of LLM hallucination?</h2>
<p><strong>In business use you will meet five recurring types, and each has a cheap first line of defence.</strong></p>
<div class="tbl"><table>
<thead><tr><th scope="col">Type</th><th scope="col">Example</th><th scope="col">First line of defence</th></tr></thead>
<tbody>
<tr><td>Invented fact</td><td>A due date or rate that no notification ever stated</td><td>Ground in the source; allow "not found"</td></tr>
<tr><td>Wrong number</td><td>₹8,460 instead of ₹8,640 in a GST total</td><td>Do arithmetic in code; check numbers against sources</td></tr>
<tr><td>Fake citation</td><td>A plausible case name, section number or URL that does not exist</td><td>Resolve every citation against a real index</td></tr>
<tr><td>Unfaithful summary</td><td>A contract summary that adds or drops a clause</td><td>Require quoted evidence for each claim</td></tr>
<tr><td>False premise accepted</td><td>"Why did RBI cut the repo rate last week?" answered even if it did not</td><td>Instruct the model to check premises first</td></tr>
</tbody></table></div>
</section>

<section class="card" id="can-you-eliminate-llm-hallucinations-completely"><div class="pill">Limits</div><h2>Can you eliminate LLM hallucinations completely?</h2>
<p><strong>No, but you can make them rare where it matters by letting the model abstain and by scoring abstention fairly.</strong> Some answers the model cannot know; the realistic goal is a system that says "I'm not sure" instead of inventing something.</p>
<p>This is an old problem. The <a href="https://arxiv.org/abs/2109.07958" target="_blank" rel="noopener">TruthfulQA benchmark</a> (Lin, Hilton and Evans, 2021) asked 817 questions designed around common misconceptions. The best model then was truthful on 58% against 94% for humans, and the largest models were generally the least truthful, because they imitated popular falsehoods well. Models have improved since; the incentive problem has not fixed itself.</p>
<figure class="diagram"><svg viewBox="0 0 720 175" role="img" aria-label="Illustrative comparison of two assistants on 100 questions. Assistant A always guesses: 62 correct, 38 wrong, 0 abstained; accuracy-only score 62, score with a one-point penalty per wrong answer 24. Assistant B abstains when unsure: 55 correct, 10 wrong, 35 abstained; accuracy-only score 55, penalised score 45." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="13" fill="#14202b">
<text x="0" y="16" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">Same questions, different scoring (illustrative, 100 questions)</text>
<text x="0" y="64" font-weight="600" font-size="12">A: always guesses</text>
<rect x="165" y="46" width="186" height="28" fill="#1f9d6b"/><text x="258" y="65" text-anchor="middle" fill="#fff" font-size="12">62 correct</text>
<rect x="351" y="46" width="114" height="28" fill="#d64545"/><text x="408" y="65" text-anchor="middle" fill="#fff" font-size="12">38 wrong</text>
<text x="0" y="114" font-weight="600" font-size="12">B: abstains if unsure</text>
<rect x="165" y="96" width="165" height="28" fill="#1f9d6b"/><text x="247" y="115" text-anchor="middle" fill="#fff" font-size="12">55 correct</text>
<rect x="330" y="96" width="30" height="28" fill="#d64545"/><text x="345" y="115" text-anchor="middle" fill="#fff" font-size="12">10</text>
<rect x="360" y="96" width="105" height="28" fill="#eeeeee"/><text x="412" y="115" text-anchor="middle" font-size="12">35 "not sure"</text>
<text x="495" y="40" font-size="12" font-weight="600">Accuracy only</text><text x="620" y="40" font-size="12" font-weight="600">Wrong = −1</text>
<text x="530" y="65" font-family="Montserrat,sans-serif" font-weight="700">62</text><text x="650" y="65" font-family="Montserrat,sans-serif" font-weight="700" fill="#d64545">24</text>
<text x="530" y="115" font-family="Montserrat,sans-serif" font-weight="700">55</text><text x="650" y="115" font-family="Montserrat,sans-serif" font-weight="700" fill="#1f9d6b">45</text>
<text x="0" y="160" font-size="12" font-style="italic">Illustrative numbers, not benchmark results.</text>
</g></svg><figcaption>How you score your own evals decides whether you are training your team, and your prompts, to prefer bluffing.</figcaption></figure>
<div class="callout strong-opinion"><div class="eyebrow">Strong opinion</div><p>In finance, tax, legal and HR, a wrong answer costs far more than "I don't know, please check with the team". Score your evals that way.</p></div>
</section>

<section class="card" id="how-do-you-reduce-llm-hallucinations"><div class="pill">Mitigation</div><h2>How do you reduce LLM hallucinations?</h2>
<p><strong>Climb a ladder: permit abstention, ground answers in sources, demand citations, constrain the output format, verify automatically, measure with evals, and keep humans on high-stakes decisions.</strong> Start at the cheap end.</p>
<figure class="diagram"><svg viewBox="0 0 720 245" role="img" aria-label="Mitigation ladder with seven rungs from cheapest to most expensive: prompt for abstention, ground with RAG, require citations, structured output, automated checks, evals, human review." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="12" fill="#14202b">
<text x="0" y="16" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">The hallucination mitigation ladder</text>
<rect x="0" y="210" width="96" height="30" rx="4" fill="#1a98cb"/><text x="48" y="230" text-anchor="middle" fill="#fff" font-weight="600">1</text><text x="0" y="186">Allow "I don't</text><text x="0" y="200">know"</text>
<rect x="102" y="184" width="96" height="56" rx="4" fill="#1a98cb"/><text x="150" y="230" text-anchor="middle" fill="#fff" font-weight="600">2</text><text x="102" y="160">Ground with</text><text x="102" y="174">RAG</text>
<rect x="204" y="158" width="96" height="82" rx="4" fill="#1a98cb"/><text x="252" y="230" text-anchor="middle" fill="#fff" font-weight="600">3</text><text x="204" y="134">Require</text><text x="204" y="148">citations</text>
<rect x="306" y="132" width="96" height="108" rx="4" fill="#0b5394"/><text x="354" y="230" text-anchor="middle" fill="#fff" font-weight="600">4</text><text x="306" y="108">Structured</text><text x="306" y="122">output</text>
<rect x="408" y="106" width="96" height="134" rx="4" fill="#0b5394"/><text x="456" y="230" text-anchor="middle" fill="#fff" font-weight="600">5</text><text x="408" y="82">Automated</text><text x="408" y="96">checks</text>
<rect x="510" y="80" width="96" height="160" rx="4" fill="#5b4bd6"/><text x="558" y="230" text-anchor="middle" fill="#fff" font-weight="600">6</text><text x="510" y="56">Evals on a</text><text x="510" y="70">golden set</text>
<rect x="612" y="54" width="96" height="186" rx="4" fill="#5b4bd6"/><text x="660" y="230" text-anchor="middle" fill="#fff" font-weight="600">7</text><text x="612" y="30">Human</text><text x="612" y="44">review</text>
</g></svg><figcaption>Start at the bottom. Each rung catches errors the one below it misses.</figcaption></figure>
<div class="tbl"><table>
<thead><tr><th scope="col">Rung</th><th scope="col">What you do</th><th scope="col">What it catches</th><th scope="col">What it misses</th></tr></thead>
<tbody>
<tr><td>Allow abstention</td><td>Tell the model it may answer "not in the documents"</td><td>Bluffing on unknowns</td><td>Confident errors</td></tr>
<tr><td>Ground with RAG</td><td>Retrieve relevant passages and place them in the prompt</td><td>Missing context, outdated knowledge</td><td>Retrieval misses, misreading</td></tr>
<tr><td>Require citations</td><td>Ask for a quote or passage ID per claim</td><td>Unsupported claims become visible</td><td>Real quotes, wrong conclusion</td></tr>
<tr><td>Structured output</td><td>Force a JSON schema with fields such as <code>answer</code>, <code>source_id</code>, <code>confidence</code></td><td>Rambling, missing fields</td><td>Wrong values in valid fields</td></tr>
<tr><td>Automated checks</td><td>Code verifies numbers, IDs and citations against sources</td><td>Invented figures and references</td><td>Subtle reasoning errors</td></tr>
<tr><td>Evals</td><td>Score a golden question set on every change</td><td>Regressions, measured error rates</td><td>Questions you never thought to test</td></tr>
<tr><td>Human review</td><td>Route flagged or high-stakes answers to a person</td><td>What automation cannot judge</td><td>Little, but slow and costly</td></tr>
</tbody></table></div>
<p>Rungs 1 to 3 fit in one prompt, which we hand to finance and HR teams in workshops (our guide to <a href="/aihelpcenter/genai-llm/advanced-prompting">advanced prompting</a> covers the techniques behind it). For rung 5, keep arithmetic out of the model entirely: our <a href="/aihelpcenter/genai-llm/build-your-first-ai-agent-python-langgraph">LangGraph agent tutorial</a> builds a GST calculator tool for exactly this reason. The stakes rise in <a href="/aihelpcenter/genai-llm/what-is-agentic-ai">agentic AI systems</a>, where a hallucinated tool argument becomes a wrong action rather than a wrong sentence.</p>
<div class="prompt"><div class="eyebrow">Example prompt · Grounded answer with abstention</div>Answer the question using ONLY the extracts below.<br>For every figure or rule you state, quote the sentence it came from and give the extract ID.<br>If the extracts do not contain the answer, reply exactly: "Not in the provided documents."<br>If the question assumes something the extracts contradict, say so before answering.<br>EXTRACTS: [paste or retrieve]<br>QUESTION: [question]</div>
</section>

<section class="card" id="does-rag-stop-llm-hallucinations"><div class="pill">Grounding</div><h2>Does RAG stop LLM hallucinations?</h2>
<p><strong>RAG reduces hallucinations a great deal, but it does not stop them, because the model can still misread, ignore or embellish the passages it is given.</strong> Retrieval-augmented generation (Lewis et al., 2020) puts relevant text in front of the model before it answers; see <a href="/aihelpcenter/genai-llm/rag-explained-how-to-make-ai-answer-from-your-data">how RAG works</a>.</p>
<p>Grounded systems still fail in four predictable ways: the retriever fetches the wrong chunk; the right chunk sits in the middle of a long prompt and is underused; the model blends the passage with its own prior knowledge; or the source itself is outdated. The fixes: evaluate retrieval separately (chunking and the <a href="/aihelpcenter/data-engineering/how-to-choose-a-vector-database">vector database you choose</a> both affect it), keep context short and well ranked, enforce quote-per-claim, and give documents owners who keep them current. <a href="/aihelpcenter/genai-llm/rag-vs-finetuning">RAG vs fine-tuning</a> explains why fine-tuning is a poor tool for teaching facts.</p>
<p>This is why, in Ivy Professional School's <a href="/courses/generative-ai-course">Advanced Generative AI course</a>, we teach vector-database RAG pipelines alongside prompt engineering (including ReAct and Tree-of-Thought) rather than as separate topics: grounding fixes what the model sees, prompting fixes what it is allowed to say, and you need both.</p>
<div class="callout classroom"><div class="eyebrow">From our classrooms</div><p>When participants in Ivy Professional School's enterprise workshops audit their first RAG prototype, the most common finding is a correct-looking answer built on an outdated policy version. Version control for source documents fixes more hallucinations than prompt tweaks do.</p></div>
</section>

<section class="card" id="how-can-you-check-an-llm-answer-automatically-in-python"><div class="pill">Verification</div><h2>How can you check an LLM answer automatically in Python?</h2>
<p><strong>Start with deterministic checks: extract every number from the answer and confirm it appears in the source documents or tool outputs; anything left over is a candidate hallucination.</strong> Amounts, rates and dates do the most damage when wrong, and they are easy to check.</p>
<div class="code"><div class="fname">number_check.py</div><pre><code>import re

UNITS = {"lakh": 1e5, "lakhs": 1e5, "crore": 1e7, "crores": 1e7, "cr": 1e7}
PATTERN = re.compile(r"(\d[\d,]*(?:\.\d+)?)\s*(lakhs?|crores?|cr)?\b", re.IGNORECASE)


def numbers_in(text: str) -&gt; set[float]:
    """Every number in the text, normalised: 1,25,000 and 1.25 lakh both become 125000."""
    found = set()
    for digits, unit in PATTERN.findall(text):
        value = float(digits.replace(",", "").rstrip("."))
        if unit:
            value *= UNITS[unit.lower()]
        found.add(round(value, 2))
    return found


def unsupported_numbers(answer: str, *evidence: str) -&gt; list[float]:
    """Numbers stated in the answer that appear in none of the evidence texts."""
    allowed = set().union(*(numbers_in(e) for e in evidence))
    return sorted(numbers_in(answer) - allowed)


source = ("Invoice INV-1002: taxable value Rs 48,000, GST rate 18%, inter-state "
          "supply (IGST). Payment due 5 Nov 2026.")
answer = ("IGST at 18% on Rs 48,000 is Rs 8,640, so the total payable is Rs 56,640. "
          "Payment is due by 15 Nov 2026.")
print(unsupported_numbers(answer, source))
# [15.0, 8640.0, 56640.0]

calculator_output = '{"igst": 8640.0, "invoice_total": 56640.0}'
print(unsupported_numbers(answer, source, calculator_output))
# [15.0]  &lt;- the due date the model made up

print(unsupported_numbers("Turnover rose to 1.25 lakh", "Turnover: Rs 1,25,000"))
# []</code></pre></div>
<p>The function normalises Indian formats, so ₹1,25,000 and 1.25 lakh match. In the example, the GST arithmetic is flagged until you add the calculator's output as evidence, which leaves only the invented due date (15 instead of 5). Derived numbers must come from a tool you trust.</p>
<p>Know the limits: the check confirms a number exists in the evidence, not that it is used correctly. Pair it with other cheap checks (cited IDs exist, quotes appear verbatim, JSON matches the schema). For meaning-level checks, use an LLM judge validated against human labels, as our guide on <a href="/aihelpcenter/genai-llm/how-to-evaluate-llm-applications">evaluating LLM applications</a> explains. With no source to compare against, consistency checks such as SelfCheckGPT treat disagreement between sampled answers as a warning sign.</p>
</section>

<section class="card" id="worked-example-how-would-a-kolkata-ca-firm-catch-a-made-up-gst-figure"><div class="pill">Worked example</div><h2>Worked example: how would a Kolkata CA firm catch a made-up GST figure?</h2>
<p><strong>By combining a grounded prompt, a calculator tool and the number check, and routing any flagged answer to a staff member before it reaches a client.</strong> Picture a chartered accountancy firm in Kolkata whose article assistants field routine client questions about invoices and GST, and want an AI assistant to draft replies from client ledgers and internal notes.</p>
<ol class="steps">
<li>Retrieve the client's invoice record and the relevant internal note.</li>
<li>Call a GST calculator tool for every amount.</li>
<li>Draft with the grounded prompt above, quoting sources.</li>
<li>Run <code>unsupported_numbers()</code> against record, note and tool output.</li>
<li>Zero flags: quick check and send. Any flag: full review.</li>
</ol>
<p>Illustrative planning arithmetic: at 400 queries a month and an 8% flag rate, 32 drafts need full review and 368 need a quick glance, so reviewer attention goes where invented figures concentrate. Measure your real flag rate in a pilot, and spot-check unflagged answers weekly, since a real number can still be the wrong one from the right document.</p>
</section>

<section class="card concl" id="what-should-your-team-do-this-week-to-reduce-hallucinations"><div class="pill">Action plan</div><h2>What should your team do this week to reduce hallucinations?</h2>
<p><strong>Pick one live use case and climb the first three rungs of the ladder before touching anything fancier.</strong></p>
<div class="check"><ul>
<li>Add explicit permission to answer "Not in the provided documents" to every production prompt.</li>
<li>Move all arithmetic (GST, discounts, totals, ageing) into code or tools.</li>
<li>Require a quote or source ID for every factual claim in high-stakes answers.</li>
<li>Run the number check on a sample of 50 recent answers and count the flags.</li>
<li>Write 30 golden questions, including five whose answer is not in your documents, and score them with a penalty for wrong answers.</li>
<li>Decide in writing which answer types always need a human.</li>
</ul></div></section>

<section class="card" id="frequently-asked-questions"><div class="pill">FAQ</div><h2>Frequently asked questions</h2>
<h3>Why does ChatGPT make up facts and sources?</h3>
<p>Because it generates the most plausible continuation of text rather than looking facts up. When it lacks reliable knowledge, a plausible-sounding answer or citation still comes out in a confident tone. Training and evaluation that reward guessing make this worse. Asking for sources helps only if someone or something checks them.</p>
<h3>Does lowering temperature stop hallucinations?</h3>
<p>No. Lower temperature makes outputs more consistent, but a model can be consistently wrong. It helps for repeatable extraction and testing. Reducing hallucinations needs grounding in sources, permission to abstain, automated checks on numbers and citations, and an evaluation set.</p>
<h3>Can RAG eliminate hallucinations completely?</h3>
<p>No. RAG greatly reduces hallucinations about your own data by putting relevant passages in the prompt, but the retriever can fetch the wrong passage, and the model can misread or embellish the right one. Measure retrieval quality and answer faithfulness separately, and require quotes for important claims.</p>
<h3>Which LLM hallucinates the least?</h3>
<p>It changes with every release and depends on the task, so rankings date quickly. Test candidate models on your own questions and documents, with scoring that penalises wrong answers more than abstentions. The system around the model, including grounding and checks, usually matters more than the model choice.</p>
<h3>How do you measure hallucination rate?</h3>
<p>Build a golden set of questions with known answers and sources, run your system on it, and count answers containing false or unsupported claims. Track abstentions separately. Use automated checks and an LLM judge for scale, calibrated against a sample of human reviews.</p>
</section>

<section class="card" id="sources"><div class="pill">Sources</div><h2>Sources</h2><ul>
<li>OpenAI. "Why language models hallucinate." Research post, September 2025. <a href="https://openai.com/index/why-language-models-hallucinate/" target="_blank" rel="noopener">https://openai.com/index/why-language-models-hallucinate/</a></li>
<li>Kalai, A. T., Nachum, O., Vempala, S. S. and Zhang, E. "Why Language Models Hallucinate." 2025. <a href="https://arxiv.org/abs/2509.04664" target="_blank" rel="noopener">https://arxiv.org/abs/2509.04664</a></li>
<li>Lin, S., Hilton, J. and Evans, O. "TruthfulQA: Measuring How Models Mimic Human Falsehoods." 2021. <a href="https://arxiv.org/abs/2109.07958" target="_blank" rel="noopener">https://arxiv.org/abs/2109.07958</a></li>
<li>Huang, L. et al. "A Survey on Hallucination in Large Language Models: Principles, Taxonomy, Challenges, and Open Questions." 2023. <a href="https://arxiv.org/abs/2311.05232" target="_blank" rel="noopener">https://arxiv.org/abs/2311.05232</a></li>
<li>Lewis, P. et al. "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." 2020. <a href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener">https://arxiv.org/abs/2005.11401</a></li>
<li>Liu, N. F. et al. "Lost in the Middle: How Language Models Use Long Contexts." 2023. <a href="https://arxiv.org/abs/2307.03172" target="_blank" rel="noopener">https://arxiv.org/abs/2307.03172</a></li>
<li>Manakul, P., Liusie, A. and Gales, M. J. F. "SelfCheckGPT: Zero-Resource Black-Box Hallucination Detection for Generative Large Language Models." 2023. <a href="https://arxiv.org/abs/2303.08896" target="_blank" rel="noopener">https://arxiv.org/abs/2303.08896</a></li>
</ul></section>

<section class="card" id="related-articles"><div class="pill">Keep reading</div><h2>Related articles</h2><ul>
<li><a href="/aihelpcenter/genai-llm/rag-explained-how-to-make-ai-answer-from-your-data">RAG explained: how to make AI answer from your data</a></li>
<li><a href="/aihelpcenter/genai-llm/how-to-evaluate-llm-applications">How to evaluate LLM applications</a></li>
<li><a href="/aihelpcenter/genai-llm/build-your-first-ai-agent-python-langgraph">Build your first AI agent in Python with LangGraph</a></li>
<li><a href="/aihelpcenter/genai-llm/fine-tuning-llms-lora-qlora">Fine-tuning LLMs with LoRA and QLoRA</a></li>
<li><a href="/aihelpcenter/genai-llm/how-are-llms-trained">How are LLMs trained?</a></li>
</ul>
<p>More in <a href="/aihelpcenter/genai-llm">GenAI / LLM</a>.</p>
<div class="cta"><p><strong>Build AI systems your finance and compliance teams can trust.</strong> Ivy's Advanced Generative AI Course covers every rung of the ladder above that needs engineering: RAG with vector databases, prompt engineering including ReAct and Tree-of-Thought, tool-using LangGraph agents that keep arithmetic in code, and FastAPI plus Docker deployment. 160 hours, live, with certification and placement support.</p>
<a class="btn" href="/courses/generative-ai-course">Learn to build grounded GenAI applications</a><a class="btn alt" href="https://prepai.ivyproschool.com" target="_blank" rel="noopener">Take the free PrepAI Diagnose</a>
<p>Summaries are where many teams first meet hallucination. Our free bootcamp recording <a href="https://www.youtube.com/watch?v=pZRU5wXpDzA" target="_blank" rel="noopener">How to Use Claude to Create an AI Agent to Summarize Documents</a> builds one end to end; more sessions are on the <a href="/bootcamp">free live AI bootcamp</a> page. To book two free demo classes, call or WhatsApp +91 7676882222.</p></div></section>
</main>
<aside><div class="stick"><nav class="box" aria-label="Article roadmap"><div class="lbl">ROADMAP</div><a href="#summary">Summary</a><a href="#what-is-an-llm-hallucination">What is an LLM hallucination?</a><a href="#why-do-llms-hallucinate">Why do LLMs hallucinate?</a><a href="#what-are-the-types-of-llm-hallucination">Types of hallucination</a><a href="#can-you-eliminate-llm-hallucinations-completely">Can you eliminate them?</a><a href="#how-do-you-reduce-llm-hallucinations">How do you reduce them?</a><a href="#does-rag-stop-llm-hallucinations">Does RAG stop hallucinations?</a><a href="#how-can-you-check-an-llm-answer-automatically-in-python">Checking answers in Python</a><a href="#worked-example-how-would-a-kolkata-ca-firm-catch-a-made-up-gst-figure">Worked example: a Kolkata CA firm</a><a href="#what-should-your-team-do-this-week-to-reduce-hallucinations">What to do this week</a><a href="#frequently-asked-questions">Frequently asked questions</a><a href="#sources">Sources</a><a href="#related-articles">Related articles</a></nav><div class="box author"><div class="lbl">WRITTEN BY</div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a><p>Founder · AI/ML Leader</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" aria-label="Prateek Agrawal on LinkedIn">${linkedinIcon}</a></div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a><p>Co-founder · Data/AI Consultant</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" aria-label="Eeshani Agrawal on LinkedIn">${linkedinIcon}</a></div></div></div></aside>
</div>
`;
