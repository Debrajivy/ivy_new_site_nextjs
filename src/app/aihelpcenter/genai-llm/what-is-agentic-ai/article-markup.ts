const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;

export const articleMarkup = `
<div class="crumb"><a href="/aihelpcenter">AI Help Center</a> › <a href="/aihelpcenter/genai-llm">GenAI / LLM</a> › <b>What Is Agentic AI?</b></div>
<header class="hero"><div class="hero-in"><div>
<div class="pill">GenAI / LLM · BEGINNER GUIDE</div>
<h1>What Is Agentic AI? How It Differs From Generative AI and Chatbots</h1>
<p class="sub">Learn what makes an AI system agentic, how much autonomy to give it, and where it will let you down.</p>
<div class="meta"><span class="byline"><img class="byline-avatar" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><img class="byline-avatar" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/>By <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a> &amp; <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a></span><span>12 min read</span><span>Published 8 Nov 2026</span><span>Last reviewed 8 Nov 2026</span></div></div>
<div class="hcard"><div class="top">Quick insight</div><div class="in"><p><strong>A chatbot answers. An agent finishes the job.</strong> Give a language model a goal, a few tools and permission to loop, and it starts behaving like a junior operator. The hard part is rarely the intelligence. It is deciding what the agent may touch.</p></div></div></div></header>

<div class="wrap"><main>
<p class="answer">Agentic AI is software built on a large language model that is given a goal instead of a single question. It breaks the goal into steps, calls tools such as databases, APIs or email, checks the results, corrects course and stops when the job is done or a human must approve. Generative AI writes; agentic AI acts.</p>

<section class="summary" id="summary"><h2>Summary: the short version</h2><ul>
<li>Agentic AI pursues a goal over several steps, choosing which tools to call and when, instead of producing one reply to one prompt.</li>
<li>Generative AI is the engine; the agent adds tools, a plan-act-observe loop, task memory and permissions.</li>
<li>Autonomy is a dial: most useful business agents today prepare actions and a human approves anything touching money or customers.</li>
<li>Agents fail more than chatbots because per-step errors compound; step limits, approvals and narrow permissions are the defences.</li>
<li>If the process fits a fixed flowchart, a workflow is cheaper and easier to audit than an agent.</li>
</ul></section>

<section class="card" id="what-does-agentic-ai-actually-mean"><div class="pill">GenAI / LLM</div><h2>What does agentic AI actually mean?</h2>
<p><strong>Agentic AI means an AI system that pursues a goal over several steps and chooses its own actions along the way.</strong> You do not give it a question. You give it an outcome, such as "clear this week's overdue follow-ups", and it decides what to look up, which system to call, what to write and when it is finished.</p>
<p>The ingredients: a <strong>goal</strong> with a finish line, <strong>tools</strong> it can call (a database query, a CRM update, a payment link), a <strong>loop</strong> of plan, act and observe, and <strong>self-checking</strong> before moving on.</p>
<p>Anthropic's guide <a href="https://www.anthropic.com/engineering/building-effective-agents" target="_blank" rel="noopener">Building effective agents</a> draws the line we use: in a <em>workflow</em>, your code fixes the path; in an <em>agent</em>, the model directs its own process and tool use. The more of the path the model chooses, the more agentic the system.</p>
<figure class="diagram"><svg viewBox="0 0 720 250" role="img" aria-label="The agent loop. A human gives a goal. The agent plans the next step, acts by calling a tool such as the loan system, CRM or WhatsApp, observes the result and checks whether the goal is met. If not, it plans again. If it is done or needs approval, it finishes or asks a human." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="13" fill="#14202b">
<text x="0" y="16" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">The agent loop</text>
<rect x="250" y="26" width="210" height="32" rx="6" fill="#fff" stroke="#5b4bd6" stroke-width="2" stroke-dasharray="5 3"/><text x="355" y="47" text-anchor="middle" font-size="12">Loan system · CRM · WhatsApp</text>
<line x1="355" y1="58" x2="355" y2="80" stroke="#5b4bd6" stroke-width="2" stroke-dasharray="4 3"/>
<rect x="0" y="80" width="110" height="56" rx="10" fill="#f7a61b"/><text x="55" y="104" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="700">Goal</text><text x="55" y="123" text-anchor="middle" font-size="11.5">from a human</text>
<rect x="150" y="80" width="110" height="56" rx="10" fill="#0b5394"/><text x="205" y="104" text-anchor="middle" fill="#fff" font-family="Montserrat,sans-serif" font-weight="700">Plan</text><text x="205" y="123" text-anchor="middle" fill="#fff" font-size="11.5">pick next step</text>
<rect x="300" y="80" width="110" height="56" rx="10" fill="#0b5394"/><text x="355" y="104" text-anchor="middle" fill="#fff" font-family="Montserrat,sans-serif" font-weight="700">Act</text><text x="355" y="123" text-anchor="middle" fill="#fff" font-size="11.5">call a tool</text>
<rect x="450" y="80" width="110" height="56" rx="10" fill="#0b5394"/><text x="505" y="104" text-anchor="middle" fill="#fff" font-family="Montserrat,sans-serif" font-weight="700">Observe</text><text x="505" y="123" text-anchor="middle" fill="#fff" font-size="11.5">read the result</text>
<rect x="600" y="80" width="120" height="56" rx="10" fill="#1a98cb"/><text x="660" y="104" text-anchor="middle" fill="#fff" font-family="Montserrat,sans-serif" font-weight="700">Check</text><text x="660" y="123" text-anchor="middle" fill="#fff" font-size="11.5">done? allowed?</text>
<g stroke="#0b5394" stroke-width="2.5" fill="none"><line x1="110" y1="108" x2="142" y2="108"/><line x1="260" y1="108" x2="292" y2="108"/><line x1="410" y1="108" x2="442" y2="108"/><line x1="560" y1="108" x2="592" y2="108"/><path d="M630 136 V172 H205 V144"/><line x1="695" y1="136" x2="695" y2="194"/></g>
<g fill="#0b5394"><path d="M142 102 l9 6 l-9 6z"/><path d="M292 102 l9 6 l-9 6z"/><path d="M442 102 l9 6 l-9 6z"/><path d="M592 102 l9 6 l-9 6z"/><path d="M199 146 l6 -9 l6 9z"/><path d="M689 192 l6 9 l6 -9z"/></g>
<text x="418" y="190" text-anchor="middle" font-size="12" font-style="italic">Not done yet: plan again with what was learned</text>
<rect x="560" y="202" width="160" height="40" rx="8" fill="#fff" stroke="#1f9d6b" stroke-width="2"/><text x="640" y="227" text-anchor="middle" font-size="12.5">Finish, or ask a human</text>
</g></svg><figcaption>Every agent runs some version of this loop. What changes between products is the tools, the limits and who approves what.</figcaption></figure>
</section>

<section class="card" id="how-is-agentic-ai-different-from-generative-ai-and-chatbots"><div class="pill">GenAI / LLM</div><h2>How is agentic AI different from generative AI and chatbots?</h2>
<p><strong>Generative AI is the engine that produces text or code; agentic AI is the system built around that engine so it can act toward a goal.</strong> What differs is what surrounds the model: tools, a loop, task memory and permissions. New to the engine itself? Start with <a href="/aihelpcenter/genai-llm/what-is-generative-ai">what is generative AI</a>.</p>
<div class="tbl"><table>
<thead><tr><th scope="col">Type</th><th scope="col">Who decides the next step?</th><th scope="col">Changes other systems?</th><th scope="col">Indian workplace example</th><th scope="col">Main risk</th></tr></thead>
<tbody>
<tr><td>Chatbot</td><td>The human, every turn</td><td>No</td><td>HR bot answering leave-policy questions</td><td>Confident wrong answers</td></tr>
<tr><td>Copilot</td><td>The human; AI suggests</td><td>Only through the human</td><td>Drafting variance commentary for the monthly MIS</td><td>Drafts accepted unread</td></tr>
<tr><td>Workflow with LLM steps</td><td>Your code, fixed in advance</td><td>Yes, on a fixed path</td><td>Invoice PDF arrives, LLM extracts fields, rules post to Tally</td><td>Breaks on unexpected inputs</td></tr>
<tr><td>AI agent</td><td>The model, within your limits</td><td>Yes, it picks the tool and timing</td><td>Working through overdue loan accounts each morning</td><td>Wrong action, loops, runaway cost</td></tr>
</tbody></table></div>
<p>The workflow row is not a lesser option: it is cheaper and easier to audit. Agents earn their place when the path depends on what the system finds. For where retrieval fits, read <a href="/aihelpcenter/genai-llm/rag-explained-how-to-make-ai-answer-from-your-data">RAG explained: how to make AI answer from your data</a>.</p>
</section>

<section class="card" id="how-does-an-ai-agent-work-under-the-hood"><div class="pill">GenAI / LLM</div><h2>How does an AI agent work under the hood?</h2>
<p><strong>An agent is a loop in ordinary code that keeps asking a language model "what next?", runs the tool the model picks and feeds the result back.</strong> The intelligence is in the model's choice of step. The safety is in the code around it.</p>
<p>The ReAct paper (<a href="https://arxiv.org/abs/2210.03629" target="_blank" rel="noopener">Yao and colleagues, 2022</a>) showed that alternating reasoning with actions and observations beats reasoning alone; Toolformer (<a href="https://arxiv.org/abs/2302.04761" target="_blank" rel="noopener">Schick and colleagues, 2023</a>) showed models could learn when to call tools. Every major model API now supports tool calling natively. The skeleton, with <code>decide()</code> standing in for the model so it runs offline:</p>
<div class="code"><div class="fname">agent_loop.py  (Python 3.10+, no packages needed)</div><pre><code># agent_loop.py: the skeleton every AI agent shares. Python 3.10+, runs offline.
ACCOUNTS = {"LN-1042": {"dpd": 12, "paid": False, "lang": "Bengali"},
            "LN-2088": {"dpd": 4, "paid": True, "lang": "Hindi"}}

# Tools are plain functions. In production they call your loan system or WhatsApp API.
def check_payment(loan_id):
    a = ACCOUNTS[loan_id]
    return "paid" if a["paid"] else f"unpaid, {a['dpd']} days past due"

def draft_reminder(loan_id):
    return f"[{ACCOUNTS[loan_id]['lang']}] EMI reminder for {loan_id} with UPI link"

def send_whatsapp(loan_id, text):          # changes the outside world
    return f"sent to customer of {loan_id}"

TOOLS = {f.__name__: f for f in (check_payment, draft_reminder, send_whatsapp)}
NEEDS_APPROVAL = {"send_whatsapp"}

def decide(goal, history):
    """Stand-in for the LLM call, so the file runs without an API key."""
    if not history:
        return "check_payment", {"loan_id": goal}
    tool, _, result = history[-1]
    if tool == "check_payment":
        return ("finish", "Already paid") if result == "paid" else ("draft_reminder", {"loan_id": goal})
    if tool == "draft_reminder":
        return "send_whatsapp", {"loan_id": goal, "text": result}
    return "finish", result

def run_agent(goal, approve, max_steps=6):
    history = []
    for _ in range(max_steps):
        action, args = decide(goal, history)               # plan
        if action == "finish":
            return args
        if action in NEEDS_APPROVAL and not approve(action, args):
            return f"Stopped: human declined {action}"
        history.append((action, args, TOOLS[action](**args)))  # act, then observe
    return "Stopped: step limit reached"

if __name__ == "__main__":
    ask = lambda action, args: input(f"Approve {action} {args}? [y/n] ") == "y"
    for loan_id in ACCOUNTS:
        print(loan_id, "-&gt;", run_agent(loan_id, approve=ask))</code></pre></div>
<p><code>max_steps</code> stops an agent retrying a failing action; without it you get a bill, not an answer. <code>NEEDS_APPROVAL</code> separates tools that read from tools that change the world. In <a href="/courses/generative-ai-course">Ivy Professional School's Advanced Generative AI course</a> we have learners write this plain loop before they open LangGraph and LCEL, because every agent framework wraps the same plan-act-observe cycle. Our guide to <a href="/aihelpcenter/genai-llm/harness-engineering-in-ai">harness engineering in AI</a> covers the code that surrounds the model in production, and <a href="/aihelpcenter/genai-llm/connecting-llms-to-sql">connecting LLMs to SQL</a> walks through a text-to-SQL agent that queries a real database.</p>
</section>

<section class="card" id="what-are-the-levels-of-autonomy-in-agentic-ai"><div class="pill">GenAI / LLM</div><h2>What are the levels of autonomy in agentic AI?</h2>
<p><strong>Autonomy runs from an AI that only answers to one that sets its own sub-goals, and most useful business agents sit in the middle.</strong> There is no agreed industry scale yet, so treat this ladder as a planning tool.</p>
<figure class="diagram"><svg viewBox="0 0 720 300" role="img" aria-label="Five levels of autonomy. Level 0, answers: a chatbot replies and the human does everything. Level 1, suggests: a copilot drafts and the human edits and acts. Level 2, acts with approval: the agent prepares and executes each action after a human says yes. Level 3, acts within limits: the agent acts alone inside fixed rules and humans review exceptions. Level 4, sets its own sub-goals: open-ended autonomy, rare in production." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="13" fill="#14202b">
<text x="0" y="16" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">An autonomy ladder (our working scale, not an industry standard)</text>
<rect x="0" y="240" width="250" height="44" rx="8" fill="#eeeeee"/><text x="12" y="267" font-family="Montserrat,sans-serif" font-weight="700">L0 · Answers</text><text x="270" y="267">Chatbot replies. A human does all the work.</text>
<rect x="40" y="190" width="250" height="44" rx="8" fill="#d6e8f3"/><text x="52" y="217" font-family="Montserrat,sans-serif" font-weight="700">L1 · Suggests</text><text x="310" y="217">Copilot drafts. A human edits and acts.</text>
<rect x="80" y="140" width="250" height="44" rx="8" fill="#1a98cb"/><text x="92" y="167" fill="#fff" font-family="Montserrat,sans-serif" font-weight="700">L2 · Acts with approval</text><text x="350" y="167">Agent prepares, human approves each action.</text>
<rect x="120" y="90" width="250" height="44" rx="8" fill="#0b5394"/><text x="132" y="117" fill="#fff" font-family="Montserrat,sans-serif" font-weight="700">L3 · Acts within limits</text><text x="390" y="117">Acts alone inside rules; humans see exceptions.</text>
<rect x="160" y="40" width="250" height="44" rx="8" fill="#5b4bd6"/><text x="172" y="67" fill="#fff" font-family="Montserrat,sans-serif" font-weight="700">L4 · Sets own sub-goals</text><text x="430" y="67">Open-ended. Rare in production.</text>
<rect x="76" y="136" width="258" height="52" rx="10" fill="none" stroke="#f7a61b" stroke-width="3"/><text x="350" y="190" font-size="12" font-style="italic" fill="#b36f00">Where most Indian enterprise pilots should start</text>
</g></svg><figcaption>Autonomy is a dial. Most business value today sits at L2 and L3: the agent does the legwork, humans keep the irreversible decisions.</figcaption></figure>
<p>Choosing a level is a business decision. Ask what happens if the agent is wrong once in fifty runs. An awkward reminder? L3 may be fine. ₹4 lakh paid to the wrong vendor? Stay at L2.</p>
<div class="callout classroom"><div class="eyebrow">From our classrooms</div><p>In Ivy's <a href="/enterprise/ai-for-leaders-and-cxos">AI for Leaders and CXOs workshop</a>, the first instinct is L4: "can it just handle collections?" By evening most teams settle on L2 for ninety days. They still save most of the legwork, because preparing an action is where the hours go.</p></div>
</section>

<section class="card" id="why-do-ai-agents-fail-more-often-than-chatbots"><div class="pill">GenAI / LLM</div><h2>Why do AI agents fail more often than chatbots?</h2>
<p><strong>Agents fail more often because every extra step is another chance to go wrong, and early errors flow into every later step.</strong> A chatbot makes one guess. An agent makes twenty dependent decisions.</p>
<figure class="diagram"><svg viewBox="0 0 720 300" role="img" aria-label="Illustrative line chart of end-to-end success if each step succeeds independently. At 99 percent per step: 99 percent after 1 step, 95 after 5, 90 after 10, 82 after 20. At 95 percent per step: 95, 77, 60, 36. At 90 percent per step: 90, 59, 35, 12." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="12" fill="#14202b">
<text x="0" y="16" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">Small errors compound over many steps (illustrative arithmetic)</text>
<g stroke="#e3eaf1"><line x1="80" y1="30" x2="640" y2="30"/><line x1="80" y1="80" x2="640" y2="80"/><line x1="80" y1="130" x2="640" y2="130"/><line x1="80" y1="180" x2="640" y2="180"/></g>
<line x1="80" y1="230" x2="640" y2="230" stroke="#556"/><line x1="80" y1="30" x2="80" y2="230" stroke="#556"/>
<text x="72" y="34" text-anchor="end">100%</text><text x="72" y="84" text-anchor="end">75%</text><text x="72" y="134" text-anchor="end">50%</text><text x="72" y="184" text-anchor="end">25%</text><text x="72" y="234" text-anchor="end">0%</text>
<text x="108" y="248" text-anchor="middle">1</text><text x="220" y="248" text-anchor="middle">5</text><text x="360" y="248" text-anchor="middle">10</text><text x="640" y="248" text-anchor="middle">20</text><text x="360" y="266" text-anchor="middle">Number of steps in the task</text>
<polyline points="108,32 220,39.8 360,49.2 640,66.4" fill="none" stroke="#1f9d6b" stroke-width="3"/>
<polyline points="108,40 220,75.2 360,110.2 640,158.4" fill="none" stroke="#1a98cb" stroke-width="3"/>
<polyline points="108,50 220,112 360,160.2 640,205.6" fill="none" stroke="#d64545" stroke-width="3"/>
<g font-family="Montserrat,sans-serif" font-weight="700"><text x="648" y="70">82%</text><text x="648" y="162">36%</text><text x="648" y="209">12%</text><text x="364" y="45">90%</text><text x="364" y="106">60%</text><text x="364" y="156">35%</text></g>
<rect x="80" y="278" width="12" height="12" fill="#1f9d6b"/><text x="98" y="289">99% per step</text><rect x="210" y="278" width="12" height="12" fill="#1a98cb"/><text x="228" y="289">95% per step</text><rect x="340" y="278" width="12" height="12" fill="#d64545"/><text x="358" y="289">90% per step</text>
</g></svg><figcaption>Illustrative: if steps fail independently, a 95% reliable step gives about 36% success across 20 steps. Real failures are not fully independent, but long chains need checks.</figcaption></figure>
<p>The ceiling keeps rising: METR (<a href="https://arxiv.org/abs/2503.14499" target="_blank" rel="noopener">Kwa and colleagues, 2025</a>) found the length of tasks frontier models complete has doubled roughly every seven months since 2019. The arithmetic of long chains still applies. Common failures:</p>
<ul>
<li><strong>Wrong tool or loops:</strong> last month's data pulled, or one failing call retried until the budget runs out.</li>
<li><strong>Prompt injection:</strong> text inside an email or PDF tells the agent to do something else. OWASP ranks it first (LLM01) in its <a href="https://genai.owasp.org/llm-top-10/" target="_blank" rel="noopener">2025 Top 10 for LLM applications</a>.</li>
<li><strong>Excessive agency (LLM06 in the same list):</strong> permissions the agent never needed, so a small mistake becomes a big one.</li>
</ul>
<div class="callout warning"><div class="eyebrow">Watch out</div><p>Give read access widely and write access narrowly. Tools that move money, message customers or delete records need approval until logs show the agent behaves.</p></div>
<p>The other defence is testing before go-live: collect past cases with known outcomes and check every tool call against them before you widen access. Long conversations add their own failure mode; <a href="/aihelpcenter/genai-llm/how-do-llm-context-windows-work">how LLM context windows work</a> explains why an agent can lose track of earlier steps.</p>
</section>

<section class="card" id="what-does-agentic-ai-look-like-in-an-nbfc-collections-team"><div class="pill">Worked example</div><h2>What does agentic AI look like in an NBFC collections team?</h2>
<p><strong>In collections, an agent can prepare every overdue account each morning so tele-callers spend their time talking, not looking things up.</strong> This is a composite scenario we use in class; the numbers are illustrative.</p>
<p>Picture a Kolkata-based NBFC with a two-wheeler loan book across eastern India. Each morning around 1,200 accounts sit in the 1-30 days-past-due bucket. Six tele-callers check overnight payments, call notes, promise-to-pay dates and the customer's language before dialling. Lookups eat the first two hours. An L2 agent changes the morning:</p>
<ol class="steps">
<li>At 7 a.m. it pulls the 1-30 DPD list (read-only).</li>
<li>It checks overnight UPI and NACH receipts and drops paid accounts.</li>
<li>It reads recent call notes and routes disputes or hardship mentions to a person.</li>
<li>It drafts reminders from approved templates in each customer's language.</li>
<li>It ranks the rest and builds each caller's list; a team lead approves the batch before anything is sent.</li>
</ol>
<p>It cannot change due dates, waive charges or write free-form messages. Templates are checked against the lender's fair practices code and RBI's expectations on recovery conduct. Borrower records stay in the lender's systems and each tool returns only the fields the next step needs, so the model provider sees a loan ID, a status and a language preference, not the full borrower file. That keeps the DPDP Act, 2023 analysis manageable.</p>
<div class="stats"><div><b>~1,200</b><span>accounts screened before 9 a.m. (illustrative)</span></div><div><b>1 click</b><span>approval per reminder batch</span></div><div><b>0</b><span>messages sent without a team lead's approval (by design)</span></div></div>
<p>Is this agentic? Yes: the path differs per account and the agent picks the branch. The autonomy is capped on purpose, which is what gets past risk teams.</p>
</section>

<section class="card" id="when-should-you-not-use-agentic-ai"><div class="pill">Honest limits</div><h2>When should you not use agentic AI?</h2>
<p><strong>Skip agents when the task is deterministic, low-volume, hard to verify, or when one wrong action is unacceptable.</strong> The most expensive agent is the one that should have been a spreadsheet macro.</p>
<div class="tbl"><table>
<thead><tr><th scope="col">If the task is…</th><th scope="col">Use instead</th></tr></thead>
<tbody>
<tr><td>GST liability or payroll from fixed rules</td><td>Code or Excel formulas</td></tr>
<tr><td>Done twenty times a month</td><td>A good prompt and a human; see <a href="/aihelpcenter/genai-llm/advanced-prompting">advanced prompting</a></td></tr>
<tr><td>Answering from policy documents</td><td><a href="/aihelpcenter/genai-llm/rag-explained-how-to-make-ai-answer-from-your-data">Retrieval (RAG)</a></td></tr>
<tr><td>The same sequence every time</td><td>A workflow; see <a href="/aihelpcenter/ai-strategy-pm/low-code-ai-workflow-automation-tools-2026">low-code AI workflow tools</a></td></tr>
</tbody></table></div>
<div class="callout strong-opinion"><div class="eyebrow">Strong opinion</div><p>If you can draw the flowchart, build the flowchart. Reach for an agent only when the honest answer to "what happens next?" is "it depends on what we find".</p></div>
</section>

<section class="card concl" id="how-do-you-get-started-with-agentic-ai-at-work"><div class="pill">GenAI / LLM</div><h2>How do you get started with agentic AI at work?</h2>
<p><strong>Start with one narrow, high-volume task, keep a human on every write action, and measure before you widen anything.</strong></p>
<div class="check"><ul>
<li>List five tasks where people look things up across two or more systems before acting.</li>
<li>Drop any task where one wrong action would cost more than a pilot can absorb, or where systems have no API or export.</li>
<li>Pick one task at L2: the agent prepares, a person approves.</li>
<li>Collect 50 past cases with known outcomes as your first test set.</li>
<li>Set a step limit, a daily cost cap and a log of every tool call before go-live.</li>
<li>Review logs weekly for a month before moving any action to L3.</li>
</ul></div>
</section>

<section class="card" id="frequently-asked-questions"><div class="pill">FAQ</div><h2>Frequently asked questions</h2>
<h3>Is ChatGPT an agentic AI?</h3><p>A plain question-and-answer chat is not agentic: you ask, it answers. ChatGPT and similar assistants also offer agent-style modes that browse, run code or use connected apps over several steps toward a goal you set. Those modes are agentic; ordinary chatting is not.</p>
<h3>What is the difference between agentic AI and generative AI?</h3><p>Generative AI produces text, code or images in response to a prompt. Agentic AI uses a generative model as its reasoning engine and adds tools, a loop and permissions, so it can take actions toward a goal over several steps. Every agent uses generative AI; most generative AI use is not agentic.</p>
<h3>Is agentic AI safe to use with customer data in India?</h3><p>It can be, with the right design. Keep personal data in systems you control, give the agent minimum access, log every tool call and require approval for actions that contact customers or move money. Map data flows against the DPDP Act, 2023 and any RBI, SEBI or IRDAI rules that apply to you.</p>
<h3>Will agentic AI replace jobs?</h3><p>In our view it replaces tasks before roles. Lookups, copy-paste between systems and first drafts go first. People who define processes, handle exceptions and supervise agents become more valuable, while roles made almost entirely of repetitive lookups will shrink. Reskilling early is the sensible response.</p>
<h3>Do I need to know coding to build AI agents?</h3><p>For simple agents, no: several low-code platforms let you connect tools and write instructions without code. For agents that touch production systems with approvals, logging and testing, someone on the team needs Python, APIs and a framework such as LangGraph.</p>
<h3>Is there an agentic AI course in India?</h3><p>Yes. Several Indian institutes and global online platforms now teach agent building, and the free LangGraph and model-provider documentation is good enough to self-study. Ivy Professional School's Advanced Generative AI Course is one option: it covers ReAct prompting, tool calling through APIs, RAG, and stateful multi-agent workflows in LangGraph and LCEL. Whichever you pick, check it includes deployment and human-approval patterns, not just demos.</p>
</section>

<section class="card" id="sources"><div class="pill">Sources</div><h2>Sources</h2><ul>
<li>Anthropic. "Building effective agents." 2024. <a href="https://www.anthropic.com/engineering/building-effective-agents" target="_blank" rel="noopener">https://www.anthropic.com/engineering/building-effective-agents</a></li>
<li>Yao, S. et al. "ReAct: Synergizing Reasoning and Acting in Language Models." 2022. <a href="https://arxiv.org/abs/2210.03629" target="_blank" rel="noopener">https://arxiv.org/abs/2210.03629</a></li>
<li>Schick, T. et al. "Toolformer: Language Models Can Teach Themselves to Use Tools." 2023. <a href="https://arxiv.org/abs/2302.04761" target="_blank" rel="noopener">https://arxiv.org/abs/2302.04761</a></li>
<li>Kwa, T. et al. (METR). "Measuring AI Ability to Complete Long Software Tasks." 2025. <a href="https://arxiv.org/abs/2503.14499" target="_blank" rel="noopener">https://arxiv.org/abs/2503.14499</a></li>
<li>OWASP GenAI Security Project. "Top 10 for LLM Applications 2025." <a href="https://genai.owasp.org/llm-top-10/" target="_blank" rel="noopener">https://genai.owasp.org/llm-top-10/</a></li>
<li>LangChain. "LangGraph overview" (documentation). <a href="https://docs.langchain.com/oss/python/langgraph/overview" target="_blank" rel="noopener">https://docs.langchain.com/oss/python/langgraph/overview</a></li>
</ul></section>

<section class="card" id="related-articles"><div class="pill">Keep reading</div><h2>Related articles</h2><ul>
<li><a href="/aihelpcenter/genai-llm/what-is-generative-ai">What is generative AI?</a></li>
<li><a href="/aihelpcenter/genai-llm/harness-engineering-in-ai">Harness engineering in AI</a></li>
<li><a href="/aihelpcenter/genai-llm/connecting-llms-to-sql">Connecting LLMs to SQL using text-to-SQL agents</a></li>
<li><a href="/aihelpcenter/genai-llm/rag-explained-how-to-make-ai-answer-from-your-data">RAG explained: how to make AI answer from your data</a></li>
<li><a href="/aihelpcenter/genai-llm/advanced-prompting">Advanced prompting: few-shot, chain-of-thought and structured outputs</a></li>
<li><a href="/aihelpcenter/ai-strategy-pm/low-code-ai-workflow-automation-tools-2026">Low-code AI workflow automation tools</a></li>
</ul>
<p>More in <a href="/aihelpcenter/genai-llm">GenAI / LLM</a>.</p>
<div class="cta"><p><strong>Learn to build agents that are allowed near real systems.</strong> Ivy's Advanced Generative AI Course is a 160-hour programme that takes you from ReAct and Tree-of-Thought prompting and API tool calling to stateful multi-agent workflows in LangGraph and LCEL, with RAG over vector databases and FastAPI plus Docker deployment. Live, with an Executive Certification in GenAI and placement support.</p>
<a class="btn" href="/courses/generative-ai-course">Explore the course on building AI agents with LangGraph</a><a class="btn alt" href="https://prepai.ivyproschool.com" target="_blank" rel="noopener">Take the free PrepAI Diagnose</a>
<p>Still getting your bearings? Watch our free <a href="https://www.youtube.com/watch?v=o6ZjB25OmFE" target="_blank" rel="noopener">RAG vs AI agents vs agentic AI bootcamp recording</a> or join the next <a href="/bootcamp">free live AI bootcamp</a>. Ready to talk? Call or WhatsApp +91 7676882222 to book two free demo classes. Ivy also has learning hubs in Kolkata, Bengaluru, Delhi and Pune; see the <a href="/courses/generative-ai-course-kolkata">Generative AI course in Kolkata</a>.</p></div></section>
</main>
<aside><div class="stick"><nav class="box" aria-label="Article roadmap"><div class="lbl">ROADMAP</div><a href="#summary">Summary</a><a href="#what-does-agentic-ai-actually-mean">What does agentic AI actually mean?</a><a href="#how-is-agentic-ai-different-from-generative-ai-and-chatbots">How is agentic AI different from generative AI and chatbots?</a><a href="#how-does-an-ai-agent-work-under-the-hood">How does an AI agent work under the hood?</a><a href="#what-are-the-levels-of-autonomy-in-agentic-ai">What are the levels of autonomy in agentic AI?</a><a href="#why-do-ai-agents-fail-more-often-than-chatbots">Why do AI agents fail more often than chatbots?</a><a href="#what-does-agentic-ai-look-like-in-an-nbfc-collections-team">What does agentic AI look like in an NBFC collections team?</a><a href="#when-should-you-not-use-agentic-ai">When should you not use agentic AI?</a><a href="#how-do-you-get-started-with-agentic-ai-at-work">How do you get started with agentic AI at work?</a><a href="#frequently-asked-questions">Frequently asked questions</a><a href="#sources">Sources</a><a href="#related-articles">Related articles</a></nav><div class="box author"><div class="lbl">WRITTEN BY</div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a><p>Founder · AI/ML Leader</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" aria-label="Prateek Agrawal on LinkedIn">${linkedinIcon}</a></div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a><p>Co-founder · Data/AI Consultant</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" aria-label="Eeshani Agrawal on LinkedIn">${linkedinIcon}</a></div></div></div></aside>
</div>
`;
