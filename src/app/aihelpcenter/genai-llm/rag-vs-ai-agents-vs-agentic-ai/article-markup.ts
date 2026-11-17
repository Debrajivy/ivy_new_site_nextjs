const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;

export const articleMarkup = `
<div class="crumb"><a href="/aihelpcenter">AI Help Center</a> › <a href="/aihelpcenter/genai-llm">GenAI / LLM</a> › <b>RAG vs AI Agents vs Agentic AI</b></div>
<header class="hero"><div class="hero-in"><div>
<div class="pill">GenAI / LLM · PRACTITIONER GUIDE</div>
<h1>RAG vs AI Agents vs Agentic AI: What's the Difference and Which Do You Need?</h1>
<p class="sub">See how retrieval, single agents and agentic systems differ in what they can do, what they cost and what can go wrong, then pick the right one for your use case.</p>
<div class="meta"><span class="byline"><img class="byline-avatar" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><img class="byline-avatar" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/>By <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a> &amp; <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a></span><span>12 min read</span><span>Published 8 Nov 2026</span><span>Last reviewed 8 Nov 2026</span></div></div>
<div class="hcard"><div class="top">Quick insight</div><div class="in"><p><strong>RAG reads. Agents act. Agentic systems plan.</strong> They stack: an agent often uses RAG as a tool, and an agentic system is built from agents. The expensive mistake is reaching for the top layer when the bottom one answers the question.</p></div></div></div></header>

<div class="wrap"><main>
<p class="answer">RAG (retrieval-augmented generation) finds relevant passages in your documents and gives them to an LLM so its answers are grounded. An AI agent is an LLM that calls tools in a loop to complete a task. Agentic AI describes systems that pursue goals over many steps with planning and autonomy. Use the simplest one that does the job.</p>

<section class="summary" id="summary"><h2>Summary: the short version</h2><ul>
<li>RAG retrieves passages from your documents and feeds them to the model; it answers questions but cannot take actions.</li>
<li>An AI agent is a model in a loop with tools, so it can read and change other systems, at the cost of more model calls and more ways to fail.</li>
<li>Agentic AI describes the degree of autonomy in a whole system, usually with planning, several agents, memory and human checkpoints.</li>
<li>They are layers, not alternatives: agents often use RAG as a tool, and agentic systems are made of agents.</li>
<li>Routing each request to the cheapest capable design (RAG, agent or agentic flow) usually cuts cost far more than switching models.</li>
</ul></section>

<section class="card" id="what-is-the-difference-between-rag-ai-agents-and-agentic-ai"><div class="pill">GenAI / LLM</div><h2>What is the difference between RAG, AI agents and agentic AI?</h2>
<p><strong>RAG looks things up, an AI agent takes actions with tools, and agentic AI describes systems that pursue a goal over many steps with real autonomy.</strong> They are layers, not rivals. Most serious agents use RAG as one of their tools, and most agentic systems are built from one or more agents.</p>
<p>A quick analogy for a support team: RAG is the colleague who knows where every policy PDF lives. An agent is the colleague who can also open the order system and raise a refund. An agentic system is a small desk with a supervisor, two specialists and a rulebook on what needs the manager's signature.</p>
<figure class="diagram"><svg viewBox="0 0 720 336" role="img" aria-label="Three designs side by side. RAG: a customer question triggers a search of policy documents, the top passages are added to the prompt and the LLM writes the answer; it only reads and usually needs one model call. AI agent: given a goal, the LLM picks the next step, calls a tool such as the order system, a RAG search or the refund system, and loops until it has a result or hands to a human. Agentic AI system: an orchestrator plans against a goal, rules and budget, delegates to returns and payments agents, and a human approves anything over 2,000 rupees." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="12.5" fill="#14202b"><text x="0" y="16" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">Three designs, three levels of freedom</text><rect x="0" y="30" width="220" height="30" rx="6" fill="#1a98cb"/><text x="110" y="50" text-anchor="middle" fill="#fff" font-family="Montserrat,sans-serif" font-weight="700">RAG</text><rect x="250" y="30" width="220" height="30" rx="6" fill="#0b5394"/><text x="360" y="50" text-anchor="middle" fill="#fff" font-family="Montserrat,sans-serif" font-weight="700">AI agent</text><rect x="500" y="30" width="220" height="30" rx="6" fill="#5b4bd6"/><text x="610" y="50" text-anchor="middle" fill="#fff" font-family="Montserrat,sans-serif" font-weight="700">Agentic AI system</text><rect x="10" y="76" width="200" height="40" rx="8" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="110.0" y="100.5" text-anchor="middle" fill="#14202b">Customer question</text><line x1="110" y1="116" x2="110" y2="128" stroke="#0b5394" stroke-width="2.5"/><path d="M104 127 l6 9 l6 -9z" fill="#0b5394"/><rect x="10" y="136" width="200" height="40" rx="8" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="110.0" y="160.5" text-anchor="middle" fill="#14202b">Search policy documents</text><line x1="110" y1="176" x2="110" y2="188" stroke="#0b5394" stroke-width="2.5"/><path d="M104 187 l6 9 l6 -9z" fill="#0b5394"/><rect x="10" y="196" width="200" height="40" rx="8" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="110.0" y="220.5" text-anchor="middle" fill="#14202b">Add top passages to prompt</text><line x1="110" y1="236" x2="110" y2="248" stroke="#0b5394" stroke-width="2.5"/><path d="M104 247 l6 9 l6 -9z" fill="#0b5394"/><rect x="10" y="256" width="200" height="40" rx="8" fill="#1a98cb" stroke="#1a98cb" stroke-width="2"/><text x="110.0" y="280.5" text-anchor="middle" fill="#fff">LLM writes the answer</text><rect x="260" y="76" width="200" height="40" rx="8" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="360.0" y="100.5" text-anchor="middle" fill="#14202b">Goal: resolve this ticket</text><line x1="360" y1="116" x2="360" y2="128" stroke="#0b5394" stroke-width="2.5"/><path d="M354 127 l6 9 l6 -9z" fill="#0b5394"/><rect x="260" y="136" width="200" height="40" rx="8" fill="#0b5394" stroke="#0b5394" stroke-width="2"/><text x="360.0" y="160.5" text-anchor="middle" fill="#fff">LLM picks next step</text><line x1="360" y1="176" x2="360" y2="188" stroke="#0b5394" stroke-width="2.5"/><path d="M354 187 l6 9 l6 -9z" fill="#0b5394"/><rect x="260" y="196" width="200" height="40" rx="8" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="360.0" y="220.5" text-anchor="middle" fill="#14202b">Tool: orders, RAG, refunds</text><path d="M460 216 H478 V156 H468" fill="none" stroke="#0b5394" stroke-width="2.5"/><path d="M470 150 l-9 6 l9 6z" fill="#0b5394"/><text x="482" y="190" font-size="11" font-style="italic">loop</text><line x1="360" y1="236" x2="360" y2="248" stroke="#0b5394" stroke-width="2.5"/><path d="M354 247 l6 9 l6 -9z" fill="#0b5394"/><rect x="260" y="256" width="200" height="40" rx="8" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="360.0" y="280.5" text-anchor="middle" fill="#14202b">Result, or hand to a human</text><rect x="510" y="76" width="200" height="40" rx="8" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="610.0" y="100.5" text-anchor="middle" fill="#14202b">Goal + rules + budget</text><line x1="610" y1="116" x2="610" y2="128" stroke="#0b5394" stroke-width="2.5"/><path d="M604 127 l6 9 l6 -9z" fill="#0b5394"/><rect x="510" y="136" width="200" height="40" rx="8" fill="#5b4bd6" stroke="#5b4bd6" stroke-width="2"/><text x="610.0" y="160.5" text-anchor="middle" fill="#fff">Orchestrator plans</text><line x1="560" y1="176" x2="560" y2="188" stroke="#0b5394" stroke-width="2.5"/><path d="M554 187 l6 9 l6 -9z" fill="#0b5394"/><line x1="660" y1="176" x2="660" y2="188" stroke="#0b5394" stroke-width="2.5"/><path d="M654 187 l6 9 l6 -9z" fill="#0b5394"/><rect x="510" y="196" width="95" height="40" rx="8" fill="#fff" stroke="#5b4bd6" stroke-width="2"/><text x="557.5" y="220.5" text-anchor="middle" fill="#14202b">Returns</text><rect x="615" y="196" width="95" height="40" rx="8" fill="#fff" stroke="#5b4bd6" stroke-width="2"/><text x="662.5" y="220.5" text-anchor="middle" fill="#14202b">Payments</text><line x1="610" y1="236" x2="610" y2="248" stroke="#0b5394" stroke-width="2.5"/><path d="M604 247 l6 9 l6 -9z" fill="#0b5394"/><rect x="510" y="256" width="200" height="40" rx="8" fill="#fff" stroke="#f7a61b" stroke-width="2"/><text x="610.0" y="280.5" text-anchor="middle" fill="#14202b">Human approves over ₹2,000</text><text x="110" y="324" text-anchor="middle" font-size="12" font-style="italic">Reads only · usually 1 LLM call</text><text x="360" y="324" text-anchor="middle" font-size="12" font-style="italic">Reads and writes · several calls</text><text x="610" y="324" text-anchor="middle" font-size="12" font-style="italic">Many steps · memory · checkpoints</text></g></svg><figcaption>RAG is a fixed pipeline that reads. An agent is a loop that can act. An agentic system adds planning, several agents, memory and human checkpoints around that loop.</figcaption></figure>
</section>

<section class="card" id="what-does-rag-do-and-where-does-it-stop"><div class="pill">GenAI / LLM</div><h2>What does RAG do, and where does it stop?</h2>
<p><strong>RAG (retrieval-augmented generation) searches your own documents for relevant passages and gives them to the model before it answers, so replies are grounded in your data.</strong> Lewis and colleagues introduced the method in <a href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener">2020</a>, and it is now the default way to make an LLM answer from company knowledge. Our <a href="/aihelpcenter/genai-llm/rag-explained-how-to-make-ai-answer-from-your-data">RAG explainer</a> covers the mechanics.</p>
<p>RAG is a fixed pipeline: retrieve, augment, generate. It is predictable, cheap (often one model call) and easy to evaluate, because you can check whether the right passage was retrieved. Its limit is equally clear. RAG reads; it never does. It can tell a customer the return window is 15 days. It cannot book the reverse pickup.</p>
</section>

<section class="card" id="what-makes-an-ai-agent-different-from-rag"><div class="pill">GenAI / LLM</div><h2>What makes an AI agent different from RAG?</h2>
<p><strong>An AI agent is a language model running in a loop with tools, deciding at each step what to call next, so it can read and write to other systems.</strong> Where RAG follows the same path every time, an agent chooses its path based on what it finds. The ReAct pattern (<a href="https://arxiv.org/abs/2210.03629" target="_blank" rel="noopener">Yao and colleagues, 2022</a>) of reason, act, observe is the template most agents still follow.</p>
<p>The trade is flexibility for predictability. An agent can handle "my order is late, can I change the address?" in one conversation, by checking shipment status, seeing it has not dispatched, and calling the address-update API. It also makes several model calls per request, takes longer, and can pick the wrong tool. Anthropic reports that its agents typically use about four times more tokens than chat interactions (<a href="https://www.anthropic.com/engineering/multi-agent-research-system" target="_blank" rel="noopener">2025</a>). Our primer on <a href="/aihelpcenter/genai-llm/what-is-agentic-ai">what agentic AI is</a> covers the loop in detail.</p>
</section>

<section class="card" id="is-agentic-ai-just-another-name-for-ai-agents"><div class="pill">GenAI / LLM</div><h2>Is agentic AI just another name for AI agents?</h2>
<p><strong>Mostly, but not quite: "AI agent" names a component, while "agentic AI" describes how much autonomy a whole system has and the machinery around it.</strong> The terms are used loosely by vendors, so we pin down our working definitions.</p>
<ul>
<li><strong>AI agent:</strong> one model, one set of tools, one loop, usually one job.</li>
<li><strong>Agentic AI system:</strong> goal-driven software that plans over many steps, often across several agents, with memory, guardrails, budgets and human checkpoints. It may run for minutes or days.</li>
</ul>
<p>A single well-scoped agent can be highly agentic. A system of five agents on a fixed script can be barely agentic at all. When a vendor says "agentic", ask two questions: who decides the next step, and what is it allowed to change? Our <a href="/aihelpcenter/genai-llm/what-is-agentic-ai">agentic AI explainer</a> sets out a five-level autonomy scale.</p>
<p>Prefer to watch? We walked a live audience through all three designs, with questions, in our free bootcamp <a href="https://www.youtube.com/watch?v=o6ZjB25OmFE" target="_blank" rel="noopener">RAG vs. AI Agents vs. Agentic AI Explained LIVE</a> (recording on YouTube).</p>
</section>

<section class="card" id="how-do-rag-ai-agents-and-agentic-ai-compare-side-by-side"><div class="pill">GenAI / LLM</div><h2>How do RAG, AI agents and agentic AI compare side by side?</h2>
<p><strong>RAG wins on cost, speed and auditability; agents win on handling actions; agentic systems win only on long, branching work where both are too small.</strong></p>
<div class="tbl"><table>
<thead><tr><th scope="col"></th><th scope="col">RAG</th><th scope="col">AI agent</th><th scope="col">Agentic AI system</th></tr></thead>
<tbody>
<tr><td>Core job</td><td>Answer from your documents</td><td>Complete a task using tools</td><td>Reach a goal across many tasks</td></tr>
<tr><td>Touches other systems?</td><td>Reads only</td><td>Reads and writes</td><td>Reads and writes, often several systems</td></tr>
<tr><td>Model calls per request</td><td>Usually 1</td><td>A few to a dozen</td><td>Dozens or more</td></tr>
<tr><td>Typical response time</td><td>Seconds</td><td>Seconds to a minute</td><td>Minutes to hours</td></tr>
<tr><td>Main failure</td><td>Wrong passage retrieved</td><td>Wrong tool or action</td><td>Errors compounding across steps</td></tr>
<tr><td>How you test it</td><td>Retrieval and answer accuracy</td><td>Task success on test cases</td><td>End-to-end runs plus step-level traces</td></tr>
<tr><td>Governance load</td><td>Low</td><td>Medium: approvals on writes</td><td>High: budgets, logs, human gates</td></tr>
</tbody></table></div>
</section>

<section class="card" id="what-is-agentic-rag"><div class="pill">GenAI / LLM</div><h2>What is agentic RAG?</h2>
<p><strong>Agentic RAG is retrieval controlled by an agent: the model decides whether to search, rewrites the query, searches again or checks another source before answering.</strong> Plain RAG retrieves once with the user's words. Agentic RAG can notice that "the Diwali sale return rule" needs both the sale terms and the general returns policy, and fetch both.</p>
<p>Singh and colleagues survey the design options in <a href="https://arxiv.org/abs/2501.09136" target="_blank" rel="noopener">Agentic Retrieval-Augmented Generation</a> (2025). Our view: try better chunking, hybrid keyword-plus-vector search and a re-ranker first. Move to agentic RAG when questions need several hops, such as comparing a vendor contract against the current procurement policy.</p>
</section>

<section class="card" id="what-mistakes-do-teams-make-when-choosing-between-them"><div class="pill">Honest limits</div><h2>What mistakes do teams make when choosing between them?</h2>
<p><strong>The most common mistake is building an agent to fix what is really a retrieval or data-quality problem.</strong> If the bot gives wrong policy answers, an agent loop will give the same wrong answers more slowly, on several times the tokens.</p>
<ul>
<li><strong>RAG over messy documents.</strong> Three versions of the returns policy in the shared drive means three possible answers. Clean the source first.</li>
<li><strong>Write tools on day one.</strong> An agent that can issue refunds before anyone has read a week of its logs is a finance incident waiting to happen. OWASP calls this "excessive agency" in its <a href="https://genai.owasp.org/llm-top-10/" target="_blank" rel="noopener">Top 10 for LLM applications</a>.</li>
<li><strong>No test set.</strong> Teams compare designs on gut feel. Fifty real tickets with known correct outcomes settle most arguments in an afternoon.</li>
</ul>
<div class="callout strong-opinion"><div class="eyebrow">Strong opinion</div><p>"Agentic" in a vendor pitch is not a feature. Ask for the model calls per request, the actions it can take without approval and the audit log. If they cannot show all three, it is a chatbot with a new label.</p></div>
</section>

<section class="card" id="how-would-a-d2c-brands-support-desk-use-each-one"><div class="pill">Worked example</div><h2>How would a D2C brand's support desk use each one?</h2>
<p><strong>A support desk needs all three, each on a different kind of ticket, and the saving comes from routing every ticket to the cheapest lane that can handle it.</strong> Consider a D2C skincare brand in Jaipur selling on its own site and on marketplaces, handling about 3,000 tickets a day during a sale (illustrative).</p>
<ul>
<li><strong>"Is COD available on sale items?"</strong> RAG over the policy pages. One call, fully auditable.</li>
<li><strong>"Where is my order, and can I change the pincode?"</strong> A single agent with two tools: shipment tracking and address update before dispatch.</li>
<li><strong>"Wrong shade delivered, I want an exchange."</strong> An agentic flow: verify the order and photo, check stock, create a reverse pickup, issue a replacement or store credit. Anything above ₹2,000 waits for a supervisor.</li>
</ul>
<div class="code"><div class="fname">triage.py  (Python 3.10+, no packages needed)</div><pre><code># triage.py: send each support ticket to the cheapest lane that can handle it.
# In production a small, cheap model classifies; keyword rules are a fine v1.
ESCALATE = ("legal notice", "consumer court", "fraud", "chargeback")
ACTIONS = ("where is my order", "track", "cancel", "change address")
PROBLEMS = ("wrong", "damaged", "exchange", "missing")

def route(ticket: str, order_value: float = 0) -&gt; str:
    t = ticket.lower()
    if any(w in t for w in ESCALATE):
        return "human"
    if any(w in t for w in PROBLEMS):          # multi-step: verify, check stock, refund
        return "agentic" if order_value &lt;= 2000 else "human"
    if any(w in t for w in ACTIONS):           # one or two order-system calls
        return "agent"
    return "rag"                               # answer from policy documents

tickets = [("Is COD available for sale items?", 0),
           ("Where is my order 50812?", 899),
           ("Got the wrong shade of serum, want an exchange", 1450),
           ("Damaged parcel, 3 items missing", 5200),
           ("I will file a consumer court complaint", 0)]
for text, value in tickets:
    print(f"{route(text, value):8} &lt;- {text}")</code></pre></div>
<figure class="diagram"><svg viewBox="0 0 720 200" role="img" aria-label="Worked example with assumed numbers: daily model cost for 3,000 support tickets. Sending every ticket through a full agentic system costs 18,000 rupees a day. Sending every ticket through a single agent costs 6,000 rupees. Routing each ticket to the cheapest lane that can handle it costs 4,500 rupees." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="13" fill="#14202b">
<text x="0" y="16" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">Daily model cost, 3,000 tickets (worked example, assumed prices)</text>
<text x="0" y="62">All tickets via</text><text x="0" y="78">agentic system</text><rect x="180" y="50" width="450" height="32" rx="4" fill="#5b4bd6"/><text x="640" y="71" font-family="Montserrat,sans-serif" font-weight="700">₹18,000</text>
<text x="0" y="114">All tickets via</text><text x="0" y="130">single agent</text><rect x="180" y="102" width="150" height="32" rx="4" fill="#0b5394"/><text x="340" y="123" font-family="Montserrat,sans-serif" font-weight="700">₹6,000</text>
<text x="0" y="166">Routed by lane</text><text x="0" y="182">by ticket type</text><rect x="180" y="154" width="112.5" height="32" rx="4" fill="#1f9d6b"/><text x="302" y="175" font-family="Montserrat,sans-serif" font-weight="700">₹4,500</text>
</g></svg><figcaption>Assumptions: 60% policy questions, 30% order actions, 10% complex cases; 1, 4 and 12 model calls per ticket; ₹0.50 per call. Swap in your own volumes and prices; the ratio is what matters.</figcaption></figure>
<div class="callout classroom"><div class="eyebrow">From our classrooms</div><p>When learners in Ivy Professional School's <a href="/courses/generative-ai-course">Advanced Generative AI course</a> move from the vector-database RAG module to their first agent and build a support bot, most start with an agent for everything. When they log model calls per ticket, they usually find the bulk of tickets needed a single retrieval. Routing first is the cheapest improvement they make.</p></div>
</section>

<section class="card concl" id="which-one-should-you-choose-for-your-project"><div class="pill">GenAI / LLM</div><h2>Which one should you choose for your project?</h2>
<p><strong>Choose the simplest design that completes the task: RAG if it only needs to answer, an agent if it must act, an agentic system only if the work is long and branching.</strong></p>
<div class="check"><ul>
<li>Write ten real requests your users send. Mark each as "answer only" or "needs an action".</li>
<li>If most are answer-only, build RAG first and measure retrieval accuracy before anything else.</li>
<li>For action requests, list every tool needed and whether it reads or writes.</li>
<li>If you can script the steps in advance, build a workflow, not an agent.</li>
<li>Add an approval step to every write tool for the pilot.</li>
<li>Route by request type so simple questions never pay for agent loops.</li>
</ul></div>
<p>Making this call for a whole company rather than one project? Our <a href="/enterprise/ai-for-leaders-and-cxos">AI for Leaders and CXOs workshop</a> takes leadership teams through ranking AI use cases by value, feasibility and risk before anyone builds an agent.</p>
</section>

<section class="card" id="frequently-asked-questions"><div class="pill">FAQ</div><h2>Frequently asked questions</h2>
<h3>Is RAG an AI agent?</h3><p>No. RAG is a retrieval technique that follows a fixed path: search your documents, add the results to the prompt, generate an answer. It does not decide what to do next or take actions. An agent can use RAG as one of its tools, which is often called agentic RAG.</p>
<h3>Can an AI agent use RAG?</h3><p>Yes, and most production agents do. The retrieval step is wrapped as a tool, such as search_policy_documents, and the agent calls it when it needs facts from your knowledge base. The agent can then combine those facts with actions, like checking an order or raising a ticket.</p>
<h3>Is RAG still needed now that context windows are so large?</h3><p>Usually, yes. Large windows let you paste more text, but sending your whole knowledge base on every request is slow and costly, and models use long inputs unevenly. RAG also lets you enforce access control and keep answers current. For a few dozen pages, pasting them in can be simpler.</p>
<h3>Which is cheaper to run, RAG or AI agents?</h3><p>RAG, by a wide margin, because it typically makes one model call per question while an agent makes several per task. Anthropic reports its agents use about four times the tokens of a chat interaction, and multi-agent systems about fifteen times. Route simple questions to RAG and save agents for actions.</p>
<h3>Do I need a vector database for RAG?</h3><p>Not always. Small collections work with keyword search or an in-memory index, and many teams start with pgvector inside an existing PostgreSQL database. A dedicated vector database earns its place at larger scale or with heavy filtering needs.</p>
</section>

<section class="card" id="sources"><div class="pill">Sources</div><h2>Sources</h2><ul>
<li>Lewis, P. et al. "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." 2020. <a href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener">https://arxiv.org/abs/2005.11401</a></li>
<li>Yao, S. et al. "ReAct: Synergizing Reasoning and Acting in Language Models." 2022. <a href="https://arxiv.org/abs/2210.03629" target="_blank" rel="noopener">https://arxiv.org/abs/2210.03629</a></li>
<li>Singh, A. et al. "Agentic Retrieval-Augmented Generation: A Survey on Agentic RAG." 2025. <a href="https://arxiv.org/abs/2501.09136" target="_blank" rel="noopener">https://arxiv.org/abs/2501.09136</a></li>
<li>Anthropic. "Building effective agents." 2024. <a href="https://www.anthropic.com/engineering/building-effective-agents" target="_blank" rel="noopener">https://www.anthropic.com/engineering/building-effective-agents</a></li>
<li>Anthropic. "How we built our multi-agent research system." 2025. <a href="https://www.anthropic.com/engineering/multi-agent-research-system" target="_blank" rel="noopener">https://www.anthropic.com/engineering/multi-agent-research-system</a></li>
<li>OWASP GenAI Security Project. "Top 10 for LLM Applications 2025." <a href="https://genai.owasp.org/llm-top-10/" target="_blank" rel="noopener">https://genai.owasp.org/llm-top-10/</a></li>
</ul></section>

<section class="card" id="related-articles"><div class="pill">Keep reading</div><h2>Related articles</h2><ul>
<li><a href="/aihelpcenter/genai-llm/what-is-agentic-ai">What is agentic AI?</a></li>
<li><a href="/aihelpcenter/genai-llm/rag-explained-how-to-make-ai-answer-from-your-data">RAG explained: how to make AI answer from your data</a></li>
<li><a href="/aihelpcenter/genai-llm/rag-vs-finetuning">RAG vs fine-tuning</a></li>
<li><a href="/aihelpcenter/genai-llm/harness-engineering-in-ai">Harness engineering in AI</a></li>
<li><a href="/aihelpcenter/genai-llm/connecting-llms-to-sql">Connecting LLMs to SQL using text-to-SQL agents</a></li>
<li><a href="/aihelpcenter/genai-llm/how-do-llm-context-windows-work">How LLM context windows work</a></li>
</ul>
<p>More in <a href="/aihelpcenter/genai-llm">GenAI / LLM</a>.</p>
<div class="cta"><p><strong>Build all three, and learn when to stop.</strong> Ivy's Advanced Generative AI Course teaches the layers in the order this article recommends: RAG pipelines over vector databases, then ReAct-style tool use through model APIs, then stateful multi-agent workflows in LangGraph and LCEL, deployed with FastAPI and Docker. 160 hours, live, with certification and placement support.</p>
<a class="btn" href="/courses/generative-ai-course">See the RAG and AI agents course syllabus</a><a class="btn alt" href="https://prepai.ivyproschool.com" target="_blank" rel="noopener">Check your readiness with PrepAI Diagnose (free)</a>
<p>Want to try a class first? Call or WhatsApp +91 7676882222 to book two free demo classes, or join the next free <a href="/bootcamp">live AI bootcamp</a>.</p></div></section>
</main>
<aside><div class="stick"><nav class="box" aria-label="Article roadmap"><div class="lbl">ROADMAP</div><a href="#summary">Summary</a><a href="#what-is-the-difference-between-rag-ai-agents-and-agentic-ai">What is the difference between RAG, AI agents and agentic AI?</a><a href="#what-does-rag-do-and-where-does-it-stop">What does RAG do, and where does it stop?</a><a href="#what-makes-an-ai-agent-different-from-rag">What makes an AI agent different from RAG?</a><a href="#is-agentic-ai-just-another-name-for-ai-agents">Is agentic AI just another name for AI agents?</a><a href="#how-do-rag-ai-agents-and-agentic-ai-compare-side-by-side">How do RAG, AI agents and agentic AI compare side by side?</a><a href="#what-is-agentic-rag">What is agentic RAG?</a><a href="#what-mistakes-do-teams-make-when-choosing-between-them">What mistakes do teams make when choosing between them?</a><a href="#how-would-a-d2c-brands-support-desk-use-each-one">How would a D2C brand's support desk use each one?</a><a href="#which-one-should-you-choose-for-your-project">Which one should you choose for your project?</a><a href="#frequently-asked-questions">Frequently asked questions</a><a href="#sources">Sources</a><a href="#related-articles">Related articles</a></nav><div class="box author"><div class="lbl">WRITTEN BY</div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a><p>Founder · AI/ML Leader</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" aria-label="Prateek Agrawal on LinkedIn">${linkedinIcon}</a></div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a><p>Co-founder · Data/AI Consultant</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" aria-label="Eeshani Agrawal on LinkedIn">${linkedinIcon}</a></div></div></div></aside>
</div>
`;
