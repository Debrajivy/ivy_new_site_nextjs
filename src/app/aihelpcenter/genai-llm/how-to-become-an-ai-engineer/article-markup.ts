const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;

// String.raw keeps backslashes in the code samples exactly as written.
export const articleMarkup = String.raw`
<div class="crumb"><a href="/aihelpcenter">AI Help Center</a> › <a href="/aihelpcenter/genai-llm">GenAI / LLM</a> › <b>How to Become an AI Engineer</b></div>
<header class="hero"><div class="hero-in"><div>
<div class="pill">GenAI / LLM · CAREER GUIDE</div>
<h1>How to Become an AI Engineer in 2026: Skills, Roadmap and Projects</h1>
<p class="sub">What the job really involves, which skills to learn in what order, a month-by-month plan, and the projects and interview preparation that get you hired.</p>
<div class="meta"><span class="byline"><img class="byline-avatar" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><img class="byline-avatar" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/>By <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a> &amp; <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a></span><span>14 min read</span><span>Published 24 Nov 2026</span><span>Last reviewed 24 Nov 2026</span></div></div>
<div class="hcard"><div class="top">Quick insight</div><div class="in"><p><strong>AI engineering is software engineering with a probabilistic component.</strong> The model call is the easy part. The job is everything around it: getting the right data in, checking what comes out, and keeping it fast, cheap and safe in production.</p></div></div></div></header>

<div class="wrap"><main>
<p class="answer">To become an AI engineer in 2026, get solid at Python, SQL and APIs, then learn to build applications on large language models: prompt design, retrieval-augmented generation (RAG), tool-using agents, evaluation, and deployment with FastAPI, Docker and a cloud platform. Prove it with three to five deployed projects that solve real business problems.</p>

<section class="summary" id="summary"><h2>Summary: the short version</h2><ul>
<li>An AI engineer builds products on top of foundation models (LLM features, RAG systems, agents) and owns their quality, cost and deployment; training models from scratch is rare.</li>
<li>The core stack is Python, SQL, Git, HTTP APIs, prompt design, embeddings and RAG, agents with a framework such as LangGraph, evals, FastAPI, Docker and one cloud.</li>
<li>Six focused months at 8 to 12 hours a week is realistic if you already code or work with data; plan longer from zero.</li>
<li>Deployed projects with an evaluation report and an honest write-up beat certificates and notebook demos.</li>
<li>Analysts, developers and non-tech professionals enter through different doors, and each has a different gap to close.</li>
</ul></section>

<section class="card" id="what-does-an-ai-engineer-do-in-2026"><div class="pill">Career</div><h2>What does an AI engineer do in 2026?</h2>
<p><strong>An AI engineer builds software products on top of foundation models: LLM features, RAG systems over company data, tool-using agents, and the evaluation, monitoring and deployment that keep them reliable.</strong> A typical week might include connecting a model API to a document store, designing prompts that return structured JSON, debugging why retrieval missed the right clause, adding test cases after a customer complaint, and cutting cost by routing easy questions to a smaller model.</p>
<p>The title took off after the 2023 essay <a href="https://www.latent.space/p/ai-engineer" target="_blank" rel="noopener">"The Rise of the AI Engineer"</a> on Latent Space, which described software engineers who turn foundation models into products rather than researchers who train them. Indian job postings use several names for overlapping work: GenAI engineer, LLM engineer, applied AI engineer, AI developer. Read the responsibilities, not the title.</p>
</section>

<section class="card" id="how-is-an-ai-engineer-different-from-an-ml-engineer"><div class="pill">Career</div><h2>How is an AI engineer different from an ML engineer?</h2>
<p><strong>An ML engineer trains and serves predictive models, while an AI engineer builds applications around pretrained foundation models, so an AI engineer roadmap spends more time on APIs, retrieval and evals than on model training.</strong> The overlap is real, and smaller companies often merge the two jobs.</p>
<div class="tbl"><table>
<thead><tr><th scope="col">Role</th><th scope="col">Main question</th><th scope="col">Typical work</th><th scope="col">What it means for your learning plan</th></tr></thead>
<tbody>
<tr><td>ML engineer</td><td>How do we train, ship and monitor this model?</td><td>Feature pipelines, training, model serving, MLOps</td><td>More statistics, model training and feature engineering</td></tr>
<tr><td>AI engineer</td><td>How do we build a reliable product on a foundation model?</td><td>Prompts, RAG, agents, evals, APIs, deployment, cost control</td><td>More software engineering, retrieval, evaluation and cost control</td></tr>
</tbody></table></div>
<p>This guide assumes you have already picked AI engineering. If you are still weighing data and AI careers, browse our <a href="/aihelpcenter/career">career guides</a> first.</p>
</section>

<section class="card" id="what-skills-does-an-ai-engineer-need"><div class="pill">Skills</div><h2>What skills does an AI engineer need?</h2>
<p><strong>Four layers of skills, learned bottom-up: programming foundations, LLM application patterns, agents, and production engineering.</strong></p>
<figure class="diagram"><svg viewBox="0 0 720 280" role="img" aria-label="Skills stack with four layers, from bottom to top. Foundations: Python, SQL, Git, HTTP APIs and JSON, pandas, Linux basics. LLM apps: prompt design, structured output, embeddings, RAG, vector databases. Agents: tool calling, LangGraph state and loops, MCP, human approval. Production: evals, FastAPI, Docker, cloud, tracing, cost control." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="13" fill="#14202b">
<text x="0" y="18" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">The AI engineer skills stack (learn bottom-up)</text>
<rect x="90" y="36" width="540" height="50" rx="9" fill="#f7a61b"/><text x="106" y="66" font-weight="700">Production</text><text x="230" y="66">Evals · FastAPI · Docker · cloud · tracing · cost control</text>
<rect x="60" y="94" width="600" height="50" rx="9" fill="#5b4bd6"/><text x="76" y="124" font-weight="700" fill="#fff">Agents</text><text x="200" y="124" fill="#fff">Tool calling · LangGraph state and loops · MCP · human approval</text>
<rect x="30" y="152" width="660" height="50" rx="9" fill="#1a98cb"/><text x="46" y="182" font-weight="700" fill="#fff">LLM apps</text><text x="170" y="182" fill="#fff">Prompt design · structured output · embeddings · RAG · vector DBs</text>
<rect x="0" y="210" width="720" height="50" rx="9" fill="#0b5394"/><text x="16" y="240" font-weight="700" fill="#fff">Foundations</text><text x="140" y="240" fill="#fff">Python · SQL · Git · HTTP APIs and JSON · pandas · Linux basics</text>
</g></svg><figcaption>Most people who struggle skipped the bottom layer. Agents and evals are hard to learn without comfortable Python and API skills.</figcaption></figure>
<p>A few notes on each layer. <strong>Foundations</strong> means writing clean Python modules with functions, error handling and tests, beyond notebook cells. <strong>LLM apps</strong> means knowing why <a href="/aihelpcenter/genai-llm/rag-explained-how-to-make-ai-answer-from-your-data">RAG</a>, introduced by <a href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener">Lewis and colleagues</a>, beats fine-tuning for changing facts, and how chunking and embeddings affect answers. <strong>Agents</strong> means models calling tools you define (see Anthropic's <a href="https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview" target="_blank" rel="noopener">tool use documentation</a> for the request-response loop) and orchestrating multi-step flows with a framework such as <a href="https://docs.langchain.com/oss/python/langgraph/overview" target="_blank" rel="noopener">LangGraph</a>; if the idea is new, start with our guide to <a href="/aihelpcenter/genai-llm/what-is-agentic-ai">what agentic AI is and how AI agents work</a>. <strong>Production</strong> means evals, APIs, containers, tracing and cost.</p>
<p>What you can postpone: training transformers from scratch, heavy mathematics beyond an intuition for vectors and probability, and chasing every new framework. Fine-tuning with LoRA is worth learning later, once you know when it beats retrieval (<a href="/aihelpcenter/genai-llm/fine-tuning-llms-lora-qlora">our LoRA and QLoRA guide</a>).</p>
<div class="callout strong-opinion"><div class="eyebrow">Strong opinion</div><p>Evals are the skill that separates AI engineers from people who have tried ChatGPT's API. Anyone can get a good answer once. Showing that answers stay good across 100 test questions, after every change, is the job. Hamel Husain's essay <a href="https://hamel.dev/blog/posts/evals/" target="_blank" rel="noopener">"Your AI Product Needs Evals"</a> makes the case well, and our guide on <a href="/aihelpcenter/genai-llm/how-to-evaluate-llm-applications">how to evaluate LLM applications</a> shows how to build one.</p></div>
</section>

<section class="card" id="what-is-a-realistic-6-month-roadmap-to-become-an-ai-engineer"><div class="pill">Roadmap</div><h2>What is a realistic 6-month roadmap to become an AI engineer?</h2>
<p><strong>One layer of skills per month or so, with a working project at the end of every month, at 8 to 12 hours a week.</strong> This plan assumes you can already write basic Python or SQL. From zero coding, give months one and two double the time.</p>
<div class="tbl"><table>
<thead><tr><th scope="col">Month</th><th scope="col">Learn</th><th scope="col">Build</th><th scope="col">Done when</th></tr></thead>
<tbody>
<tr><td>1</td><td>Python functions and tests, Git, SQL joins and window functions, calling an LLM API</td><td>A script that summarises a CSV of customer complaints by category</td><td>It handles API errors and bad rows without crashing</td></tr>
<tr><td>2</td><td>Prompt design, structured output, embeddings</td><td>A GST invoice field extractor returning validated JSON</td><td>50 test invoices pass schema and total checks</td></tr>
<tr><td>3</td><td>RAG: chunking, vector search, citations</td><td>An HR policy assistant over 30 PDFs</td><td>Every answer cites a page; a 30-question eval set runs in one command</td></tr>
<tr><td>4</td><td>Tool calling, agents, LangGraph</td><td>A sales MIS agent that queries a DuckDB copy of ERP data</td><td>It refuses write queries and logs every tool call</td></tr>
<tr><td>5</td><td>Evals in CI, FastAPI, Docker, one cloud</td><td>Your month-3 project behind an API in a container</td><td>A public demo link and an eval report in the README</td></tr>
<tr><td>6</td><td>System design, portfolio write-ups, interviews</td><td>A capstone combining RAG and an agent</td><td>Three to five projects documented; applications going out weekly</td></tr>
</tbody></table></div>
<p>Prefer to follow a roadmap like this with mentors? <a href="/courses/generative-ai-course">Ivy Professional School's Advanced Generative AI course</a> covers most of months one to five in a 160-hour programme: Python, Git and API integrations; prompt engineering including ReAct and Tree-of-Thought; RAG with vector databases; LoRA and QLoRA fine-tuning; multi-agent LangGraph and LCEL workflows; and FastAPI plus Docker deployment. Whichever route you take, the evals and the portfolio built on problems you know are still yours to do.</p>
<figure class="diagram"><svg viewBox="0 0 720 260" role="img" aria-label="Suggested study hours per week by month: month 1, 8 hours; month 2, 10; month 3, 10; month 4, 12; month 5, 12; month 6, 10. About 270 hours in total." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="13" fill="#14202b">
<text x="0" y="18" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">Suggested hours per week (our recommended pace, not survey data)</text>
<line x1="40" y1="210" x2="710" y2="210" stroke="#c9d4de" stroke-width="1.5"/>
<rect x="60" y="110" width="70" height="100" rx="4" fill="#0b5394"/><text x="95" y="102" text-anchor="middle" font-weight="600">8</text><text x="95" y="230" text-anchor="middle">Month 1</text>
<rect x="170" y="85" width="70" height="125" rx="4" fill="#1a98cb"/><text x="205" y="77" text-anchor="middle" font-weight="600">10</text><text x="205" y="230" text-anchor="middle">Month 2</text>
<rect x="280" y="85" width="70" height="125" rx="4" fill="#1a98cb"/><text x="315" y="77" text-anchor="middle" font-weight="600">10</text><text x="315" y="230" text-anchor="middle">Month 3</text>
<rect x="390" y="60" width="70" height="150" rx="4" fill="#5b4bd6"/><text x="425" y="52" text-anchor="middle" font-weight="600">12</text><text x="425" y="230" text-anchor="middle">Month 4</text>
<rect x="500" y="60" width="70" height="150" rx="4" fill="#5b4bd6"/><text x="535" y="52" text-anchor="middle" font-weight="600">12</text><text x="535" y="230" text-anchor="middle">Month 5</text>
<rect x="610" y="85" width="70" height="125" rx="4" fill="#f7a61b"/><text x="645" y="77" text-anchor="middle" font-weight="600">10</text><text x="645" y="230" text-anchor="middle">Month 6</text>
<text x="0" y="254" font-size="12" font-style="italic">Roughly 270 hours over six months. Agents and deployment (months 4 and 5) need the most time.</text>
</g></svg><figcaption>A steady pace beats weekend marathons. Most working professionals we teach do best with a fixed weekday slot plus one longer weekend block.</figcaption></figure>
</section>

<section class="card" id="which-portfolio-projects-should-you-build"><div class="pill">Portfolio</div><h2>Which portfolio projects should you build?</h2>
<p><strong>Build five small, deployed projects that each prove a different skill on a problem an Indian business would recognise.</strong></p>
<div class="tbl"><table>
<thead><tr><th scope="col">Project</th><th scope="col">What it proves</th></tr></thead>
<tbody>
<tr><td>GST invoice extractor: PDFs to validated JSON, with GSTIN format checks and line items that must add up to the total</td><td>Structured output, validation, evals on messy inputs</td></tr>
<tr><td>HR policy assistant with page citations, where employees only see policies for their grade</td><td>RAG, chunking, metadata filters, access control</td></tr>
<tr><td>Sales MIS agent over a Tally or ERP export loaded into DuckDB ("which distributors are 90 days overdue?")</td><td>Tool calling, text-to-SQL, read-only guardrails</td></tr>
<tr><td>Support triage for a D2C brand: classify Hinglish WhatsApp-style messages, route them, draft replies for human approval</td><td>Classification, multilingual handling, cost and latency trade-offs</td></tr>
<tr><td>Bank reconciliation agent: match statement lines to invoices and send exceptions to a maker-checker queue</td><td>Multi-step agents with LangGraph, human-in-the-loop, audit logs</td></tr>
</tbody></table></div>
<p>Use public or synthetic data, never an employer's real customer data. For the SQL-heavy projects, our guides on <a href="/aihelpcenter/genai-llm/connecting-llms-to-sql">connecting LLMs to SQL</a> and <a href="/aihelpcenter/sql-db/duckdb-vs-sqlite">DuckDB vs SQLite</a> help, and <a href="/aihelpcenter/genai-llm/build-your-first-ai-agent-python-langgraph">building your first agent with LangGraph</a> covers project five's foundations. Every project should end the same way: behind a small, typed API like this one, built with <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener">FastAPI</a>.</p>
<div class="code"><div class="fname">app.py (pip install fastapi uvicorn; run: uvicorn app:app --reload)</div><pre><code>from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(title="Policy assistant")

POLICIES = {
    "leave": "Employees may carry forward up to 30 days of earned leave.",
    "travel": "Travel claims must be filed within 15 days with GST invoices attached.",
}


class Question(BaseModel):
    text: str = Field(min_length=3, max_length=500)


class Answer(BaseModel):
    answer: str
    sources: list[str]


def retrieve(question: str) -&gt; list[str]:
    """Stand-in for vector search: match policy topics mentioned in the question."""
    q = question.lower()
    return [topic for topic in POLICIES if topic in q]


@app.post("/ask", response_model=Answer)
def ask(question: Question) -&gt; Answer:
    topics = retrieve(question.text)
    if not topics:
        raise HTTPException(status_code=404, detail="No matching policy found")
    # In the real project, send the retrieved text and the question to an LLM here.
    return Answer(answer=" ".join(POLICIES[t] for t in topics), sources=topics)</code></pre></div>
<p>Input validation, a typed response with sources, and a clear "not found" path are what reviewers notice. Then add a Dockerfile, an eval script and a README with results. Our <a href="/aihelpcenter/career/how-to-build-a-data-science-portfolio-without-experience">portfolio guide</a> covers presentation.</p>
</section>

<section class="card" id="how-do-you-switch-to-ai-engineering-from-another-role"><div class="pill">Career switch</div><h2>How do you switch to AI engineering from another role?</h2>
<p><strong>Start from your existing strength, close the specific gap it leaves, and look for an AI project inside your current job before applying outside.</strong></p>
<h3>From data or MIS analyst</h3>
<p>You already have SQL, business context and a feel for messy data. The gap is software engineering: Git, writing modules rather than notebooks, APIs, tests and deployment. Lean on projects one and three, where your domain knowledge shows.</p>
<h3>From software developer</h3>
<p>You have the engineering; the gap is working with non-deterministic outputs. Learn retrieval, evals and prompt design properly, and expect the fastest transition of the three, often three to four months.</p>
<h3>From non-tech roles (finance, HR, operations, sales)</h3>
<p>Your domain knowledge is valuable because most AI projects fail on domain details. Be honest about the coding gap: from zero, plan nine to twelve months. Many people first move into an AI-enabled role in their own function, then into engineering.</p>
</section>

<section class="card" id="what-does-the-switch-look-like-for-an-mis-analyst"><div class="pill">Worked example</div><h2>What does the switch look like for an MIS analyst?</h2>
<p><strong>For an MIS analyst, the shortest path is to automate a report they already own, then generalise it into portfolio projects.</strong> Take a hypothetical analyst at an auto-components distributor in Pune, strong in Excel and SQL, who spends every Monday writing commentary on the debtor ageing report.</p>
<ol>
<li><strong>Months 1 and 2:</strong> Python and Git, then a script that loads the ageing export, computes changes against last week, and drafts the commentary as structured JSON with an LLM.</li>
<li><strong>Month 3:</strong> with the manager's approval and customer names masked, the script runs on real exports. Each draft is checked against the numbers before it goes out.</li>
<li><strong>Months 4 and 5:</strong> the same idea becomes an agent that answers ad hoc questions ("which dealers in Nashik crossed 90 days?") through read-only SQL, deployed internally with FastAPI and Docker.</li>
<li><strong>Month 6:</strong> a synthetic-data version goes on GitHub with an eval report, and the internal results go on the CV, described without confidential details.</li>
</ol>
<p>The analyst now has a story interviewers believe: a real problem, measured results, and evidence of shipping. In our classrooms at Ivy Professional School, the learners who switch most smoothly are almost always the ones who solved a problem at their current job first.</p>
</section>

<section class="card" id="how-should-you-prepare-for-ai-engineer-interviews"><div class="pill">Interviews</div><h2>How should you prepare for AI engineer interviews?</h2>
<p><strong>Prepare for four kinds of questions: Python and SQL coding, LLM fundamentals, system design for a RAG or agent feature, and detailed questions on your own projects.</strong> Practise answering these out loud:</p>
<ul>
<li>Design a policy assistant for 5,000 employees. How do you chunk, retrieve, enforce access and evaluate it?</li>
<li>Your RAG system gives confident wrong answers. How do you find out whether retrieval or generation is at fault?</li>
<li>How would you cut LLM cost by half without hurting quality, and how would you prove it?</li>
<li>When would you fine-tune instead of using retrieval?</li>
<li>How do you stop an agent from taking a destructive action, such as deleting records?</li>
<li>Walk us through a failure in one of your projects and what you changed.</li>
</ul>
<div class="callout rule-of-thumb"><div class="eyebrow">Rule of thumb</div><p>Bring numbers from your own projects: eval pass rates before and after a change, p95 latency, cost per request. A candidate who says "pass rate went from 72% to 88% after I fixed chunking" stands out from one who says "it worked well".</p></div>
</section>

<section class="card concl" id="what-should-you-do-this-week"><div class="pill">Action checklist</div><h2>What should you do this week?</h2>
<p><strong>Pick a start date and make the first project small enough to finish.</strong></p>
<div class="check"><ul>
<li>Rate yourself against the four-layer skills stack and mark the weakest layer.</li>
<li>Block a fixed weekly schedule of 8 to 12 hours for the next six months.</li>
<li>Set up Python, Git, a GitHub account and an API key with a spending limit.</li>
<li>Choose your first project from the list above and write its README before the code.</li>
<li>Write ten test questions for that project before you build it.</li>
<li>Look for one repetitive, text-heavy task at your current job that AI could help with.</li>
<li>Read three AI engineer job descriptions in your city and list the skills they repeat.</li>
</ul></div></section>

<section class="card" id="frequently-asked-questions"><div class="pill">FAQ</div><h2>Frequently asked questions</h2>
<h3>Can I become an AI engineer without a computer science degree?</h3><p>Yes. Employers hiring AI engineers mostly look for evidence that you can build and ship: deployed projects, clean code on GitHub, evaluation results and the ability to explain trade-offs. A degree helps with some employers' filters, but a strong portfolio and solid Python, SQL and API skills matter more for most roles.</p>
<h3>How long does it take to become an AI engineer?</h3><p>About six months of focused study at 8 to 12 hours a week is realistic if you already code or work with data. Software developers often move faster. From no coding background, plan nine to twelve months, because Python, Git and API skills need time before LLM work makes sense.</p>
<h3>Do AI engineers need to know machine learning maths?</h3><p>Less than ML researchers do. You need an intuition for vectors, similarity, probability and evaluation metrics, plus a working understanding of how LLMs are trained and why they fail. Deep calculus and training models from scratch are rarely part of the day-to-day job, though they help for fine-tuning work.</p>
<h3>What is the salary of an AI engineer in India?</h3><p>It varies widely with city, company type, experience and how much production work you have done, and published salary surveys often disagree. We do not quote a single figure. Compare current listings and salary reports for your city and experience level, and weigh the projects you can show.</p>
<h3>Is AI engineering the same as prompt engineering?</h3><p>No. Prompt engineering is one skill inside AI engineering. AI engineers also build retrieval pipelines, connect models to tools and databases, write evaluation suites, deploy APIs, monitor cost and latency, and handle security and access control. Prompting alone rarely makes a production-ready application.</p>
<h3>Which course should I take to become an AI engineer in India?</h3><p>Pick one that makes you build and deploy, not just watch. Check the syllabus for Python and APIs, RAG with vector databases, agents with a framework such as LangGraph, evaluation, and deployment with FastAPI and Docker, plus projects you can show. Ivy Professional School's Advanced Generative AI Course is one option that covers most of this list; free documentation and a disciplined self-study plan also work.</p>
</section>

<section class="card" id="sources"><div class="pill">Sources</div><h2>Sources</h2><ul>
<li>Latent Space. "The Rise of the AI Engineer." 2023. <a href="https://www.latent.space/p/ai-engineer" target="_blank" rel="noopener">https://www.latent.space/p/ai-engineer</a></li>
<li>Husain, H. "Your AI Product Needs Evals." 2024. <a href="https://hamel.dev/blog/posts/evals/" target="_blank" rel="noopener">https://hamel.dev/blog/posts/evals/</a></li>
<li>LangChain. "LangGraph overview" documentation. <a href="https://docs.langchain.com/oss/python/langgraph/overview" target="_blank" rel="noopener">https://docs.langchain.com/oss/python/langgraph/overview</a></li>
<li>Anthropic. "Tool use with Claude" documentation. <a href="https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview" target="_blank" rel="noopener">https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview</a></li>
<li>FastAPI documentation. <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener">https://fastapi.tiangolo.com/</a></li>
<li>Lewis, P. et al. "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." 2020. <a href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener">https://arxiv.org/abs/2005.11401</a></li>
</ul></section>

<section class="card" id="related-articles"><div class="pill">Keep reading</div><h2>Related articles</h2><ul>
<li><a href="/aihelpcenter/data-engineering/data-engineering-for-generative-ai">Data engineering for generative AI: pipelines that feed RAG and agents</a></li>
<li><a href="/aihelpcenter/genai-llm/build-your-first-ai-agent-python-langgraph">Build your first AI agent in Python with LangGraph</a></li>
<li><a href="/aihelpcenter/genai-llm/how-to-evaluate-llm-applications">How to evaluate LLM applications</a></li>
<li><a href="/aihelpcenter/genai-llm/rag-explained-how-to-make-ai-answer-from-your-data">RAG explained: how to make AI answer from your data</a></li>
<li><a href="/aihelpcenter/career/how-to-build-a-data-science-portfolio-without-experience">How to build a data science portfolio without experience</a></li>
<li><a href="/aihelpcenter/career/data-science-ai-careers-kolkata-2026">Data science and AI careers in Kolkata (2026)</a></li>
</ul>
<p>More in <a href="/aihelpcenter/genai-llm">GenAI / LLM</a>.</p>
<div class="cta"><p><strong>Follow this roadmap with live mentors.</strong> Ivy's Advanced Generative AI Course covers LLMs, prompt engineering, RAG with vector databases, LoRA fine-tuning, LangGraph multi-agent systems and FastAPI plus Docker deployment over 160 live hours, with capstone projects, an Executive Certification in GenAI and placement support (resume building and interview preparation).</p>
<a class="btn" href="/courses/generative-ai-course">See the AI engineer course syllabus</a><a class="btn alt" href="https://prepai.ivyproschool.com" target="_blank" rel="noopener">Find your weakest layer with PrepAI Diagnose (free)</a>
<p>Want a first project before you commit? Our free bootcamp recording <a href="https://www.youtube.com/watch?v=uukEZ8cPJ7g" target="_blank" rel="noopener">Build a Text-to-SQL AI Agent</a> is a good start on the sales MIS agent above. When you are ready, call or WhatsApp +91 7676882222 to book two free demo classes. Prefer a classroom? Ivy has learning hubs in Bengaluru, Kolkata, Delhi and Pune; see the <a href="/courses/generative-ai-course-bangalore">Generative AI course in Bangalore</a>.</p></div></section>
</main>
<aside><div class="stick"><nav class="box" aria-label="Article roadmap"><div class="lbl">ROADMAP</div><a href="#summary">Summary</a><a href="#what-does-an-ai-engineer-do-in-2026">What an AI engineer does</a><a href="#how-is-an-ai-engineer-different-from-an-ml-engineer">AI engineer vs ML engineer</a><a href="#what-skills-does-an-ai-engineer-need">Skills you need</a><a href="#what-is-a-realistic-6-month-roadmap-to-become-an-ai-engineer">6-month roadmap</a><a href="#which-portfolio-projects-should-you-build">Portfolio projects</a><a href="#how-do-you-switch-to-ai-engineering-from-another-role">Switching from another role</a><a href="#what-does-the-switch-look-like-for-an-mis-analyst">Worked example: an MIS analyst</a><a href="#how-should-you-prepare-for-ai-engineer-interviews">Interview preparation</a><a href="#what-should-you-do-this-week">This week's checklist</a><a href="#frequently-asked-questions">Frequently asked questions</a><a href="#sources">Sources</a><a href="#related-articles">Related articles</a></nav><div class="box author"><div class="lbl">WRITTEN BY</div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a><p>Founder · AI/ML Leader</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" aria-label="Prateek Agrawal on LinkedIn">${linkedinIcon}</a></div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a><p>Co-founder · Data/AI Consultant</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" aria-label="Eeshani Agrawal on LinkedIn">${linkedinIcon}</a></div></div></div></aside>
</div>
`;
