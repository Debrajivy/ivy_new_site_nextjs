const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;

export const articleMarkup = `
<div class="crumb"><a href="/aihelpcenter">AI Help Center</a> › <a href="/aihelpcenter/genai-llm">GenAI / LLM</a> › <b>Multi-Agent Systems Explained</b></div>
<header class="hero"><div class="hero-in"><div>
<div class="pill">GenAI / LLM · PRACTITIONER GUIDE</div>
<h1>Multi-Agent Systems Explained: When One AI Agent Isn't Enough</h1>
<p class="sub">Know when splitting work across several AI agents pays off, which pattern to use, what it costs and how to stop the agents tripping over each other.</p>
<div class="meta"><span class="byline"><img class="byline-avatar" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><img class="byline-avatar" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/>By <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a> &amp; <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a></span><span>11 min read</span><span>Published 8 Nov 2026</span><span>Last reviewed 8 Nov 2026</span></div></div>
<div class="hcard"><div class="top">Quick insight</div><div class="in"><p><strong>More agents means more handoffs, and handoffs are where things break.</strong> A multi-agent system can read more, work in parallel and check its own output. It also costs several times more and fails in new ways. Earn the second agent.</p></div></div></div></header>

<div class="wrap"><main>
<p class="answer">A multi-agent system is an AI application where several LLM agents, each with its own role, instructions and tools, divide a task and pass work between them, usually under an orchestrator. It helps when work is too large for one context, splits into parallel parts or needs an independent checker. Otherwise, one agent is cheaper and more reliable.</p>

<section class="summary" id="summary"><h2>Summary: the short version</h2><ul>
<li>A multi-agent system splits a task across several LLM agents with separate roles, tools and context, coordinated by an orchestrator or code.</li>
<li>Use one when a single agent hits context limits, has too many tools, faces parallel work or needs an independent checker.</li>
<li>The common patterns are orchestrator and workers, sequential pipelines, generator and critic loops, and handoff networks.</li>
<li>Anthropic reported multi-agent systems using about 15 times the tokens of a chat, so they suit high-value tasks only.</li>
<li>Most failures come from vague roles, loose handoffs and missing verification, not weak models.</li>
</ul></section>

<section class="card" id="what-is-a-multi-agent-system"><div class="pill">GenAI / LLM</div><h2>What is a multi-agent system?</h2>
<p><strong>A multi-agent system is an AI application in which two or more LLM agents, each with its own instructions, tools and context, split a task and pass work between them.</strong> One agent might research, another check compliance and a third write, with an orchestrator agent or plain code deciding who does what.</p>
<p>The idea is older than LLMs; multi-agent systems have been a research field since the 1980s. What is new is that each agent is now a language model that can read, reason and call tools, so you can build a team of specialists from prompts. If the single-agent loop is new to you, start with <a href="/aihelpcenter/genai-llm/what-is-agentic-ai">what agentic AI is</a>.</p>
</section>

<section class="card" id="when-is-one-ai-agent-not-enough"><div class="pill">GenAI / LLM</div><h2>When is one AI agent not enough?</h2>
<p><strong>One agent stops being enough when the task needs more context than one model can hold well, more tools than it can choose between reliably, or work that can run in parallel.</strong> The signals we look for:</p>
<ul>
<li><strong>Context overflow:</strong> the job means reading hundreds of pages, and the agent starts ignoring earlier material. See <a href="/aihelpcenter/genai-llm/how-do-llm-context-windows-work">how context windows work</a>.</li>
<li><strong>Tool overload:</strong> past a couple of dozen tools, tool choice gets noticeably worse in our experience.</li>
<li><strong>Parallel breadth:</strong> ten independent questions can be researched at once.</li>
<li><strong>Separation of duties:</strong> the maker should not be its own checker, and different steps need different permissions.</li>
</ul>
<div class="callout strong-opinion"><div class="eyebrow">Strong opinion</div><p>Default to one agent. Cognition, the team behind the Devin coding agent, argued in <a href="https://cognition.com/blog/dont-build-multi-agents" target="_blank" rel="noopener">Don't Build Multi-Agents</a> (2025) that sub-agents working without shared context make conflicting decisions. We agree for tightly coupled work like coding. Split only when a signal above is real and measured.</p></div>
</section>

<section class="card" id="what-are-the-main-multi-agent-architectures"><div class="pill">GenAI / LLM</div><h2>What are the main multi-agent architectures?</h2>
<p><strong>Most systems use one of four shapes: an orchestrator with workers, a sequential pipeline, a generator with a critic, or a network of agents that hand off to each other.</strong> Anthropic's <a href="https://www.anthropic.com/engineering/building-effective-agents" target="_blank" rel="noopener">Building effective agents</a> describes the orchestrator-workers and evaluator-optimizer patterns in detail.</p>
<figure class="diagram"><svg viewBox="0 0 720 340" role="img" aria-label="Four multi-agent patterns. Orchestrator and workers: one orchestrator delegates to research, compliance and pricing workers and combines their results. Sequential pipeline: extract, draft and review agents each hand output to the next. Generator and critic: a writer sends drafts to a critic, which returns feedback until the draft passes. Handoff network: a triage agent passes the conversation to a billing agent or a tech agent, which can pass it back." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="12.5" fill="#14202b"><text x="0" y="16" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">Four common multi-agent patterns</text><rect x="0" y="28" width="350" height="148" rx="10" fill="#f6f9fc" stroke="#e3eaf1"/><rect x="370" y="28" width="350" height="148" rx="10" fill="#f6f9fc" stroke="#e3eaf1"/><rect x="0" y="188" width="350" height="148" rx="10" fill="#f6f9fc" stroke="#e3eaf1"/><rect x="370" y="188" width="350" height="148" rx="10" fill="#f6f9fc" stroke="#e3eaf1"/><text x="12" y="48" font-family="Montserrat,sans-serif" font-weight="700" font-size="13.5">Orchestrator and workers</text><rect x="115" y="60" width="120" height="32" rx="7" fill="#5b4bd6" stroke="#5b4bd6" stroke-width="2"/><text x="175.0" y="80.5" text-anchor="middle" fill="#fff">Orchestrator</text><line x1="175" y1="92" x2="62" y2="130" stroke="#0b5394" stroke-width="2"/><line x1="175" y1="92" x2="175" y2="130" stroke="#0b5394" stroke-width="2"/><line x1="175" y1="92" x2="288" y2="130" stroke="#0b5394" stroke-width="2"/><rect x="12" y="130" width="100" height="32" rx="7" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="62.0" y="150.5" text-anchor="middle" fill="#14202b">Research</text><rect x="125" y="130" width="100" height="32" rx="7" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="175.0" y="150.5" text-anchor="middle" fill="#14202b">Compliance</text><rect x="238" y="130" width="100" height="32" rx="7" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="288.0" y="150.5" text-anchor="middle" fill="#14202b">Pricing</text><text x="382" y="48" font-family="Montserrat,sans-serif" font-weight="700" font-size="13.5">Sequential pipeline</text><rect x="382" y="92" width="96" height="32" rx="7" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="430.0" y="112.5" text-anchor="middle" fill="#14202b">Extract</text><line x1="478" y1="108" x2="494" y2="108" stroke="#0b5394" stroke-width="2"/><path d="M492 103 l8 5 l-8 5z" fill="#0b5394"/><rect x="500" y="92" width="96" height="32" rx="7" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="548.0" y="112.5" text-anchor="middle" fill="#14202b">Draft</text><line x1="596" y1="108" x2="612" y2="108" stroke="#0b5394" stroke-width="2"/><path d="M610 103 l8 5 l-8 5z" fill="#0b5394"/><rect x="618" y="92" width="92" height="32" rx="7" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="664.0" y="112.5" text-anchor="middle" fill="#14202b">Review</text><text x="545" y="156" text-anchor="middle" font-size="11.5" font-style="italic">each agent hands its output to the next</text><text x="12" y="208" font-family="Montserrat,sans-serif" font-weight="700" font-size="13.5">Generator and critic</text><rect x="30" y="250" width="110" height="32" rx="7" fill="#0b5394" stroke="#0b5394" stroke-width="2"/><text x="85.0" y="270.5" text-anchor="middle" fill="#fff">Writer</text><rect x="210" y="250" width="110" height="32" rx="7" fill="#1f9d6b" stroke="#1f9d6b" stroke-width="2"/><text x="265.0" y="270.5" text-anchor="middle" fill="#fff">Critic</text><line x1="140" y1="258" x2="202" y2="258" stroke="#0b5394" stroke-width="2"/><path d="M202 253 l8 5 l-8 5z" fill="#0b5394"/><line x1="148" y1="274" x2="210" y2="274" stroke="#0b5394" stroke-width="2"/><path d="M148 269 l-8 5 l8 5z" fill="#0b5394"/><text x="175" y="246" text-anchor="middle" font-size="11">draft</text><text x="175" y="298" text-anchor="middle" font-size="11">feedback until it passes</text><text x="382" y="208" font-family="Montserrat,sans-serif" font-weight="700" font-size="13.5">Handoff network</text><rect x="385" y="262" width="96" height="32" rx="7" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="433.0" y="282.5" text-anchor="middle" fill="#14202b">Triage</text><rect x="560" y="226" width="130" height="32" rx="7" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="625.0" y="246.5" text-anchor="middle" fill="#14202b">Billing agent</text><rect x="560" y="290" width="130" height="32" rx="7" fill="#fff" stroke="#1a98cb" stroke-width="2"/><text x="625.0" y="310.5" text-anchor="middle" fill="#14202b">Tech agent</text><line x1="481" y1="270" x2="552" y2="242" stroke="#0b5394" stroke-width="2"/><path d="M552 237 l8 5 l-8 5z" fill="#0b5394"/><line x1="481" y1="286" x2="552" y2="306" stroke="#0b5394" stroke-width="2"/><path d="M552 301 l8 5 l-8 5z" fill="#0b5394"/><line x1="625" y1="258" x2="625" y2="290" stroke="#0b5394" stroke-width="2" stroke-dasharray="5 4"/><text x="632" y="279" font-size="11" font-style="italic">pass back</text></g></svg><figcaption>Most production systems use one of these shapes, or two combined. The orchestrator pattern is the most common; free-form networks are the hardest to debug.</figcaption></figure>
<div class="tbl"><table>
<thead><tr><th scope="col">Pattern</th><th scope="col">Good for</th><th scope="col">Watch out for</th></tr></thead>
<tbody>
<tr><td>Orchestrator and workers</td><td>Research, due diligence, large documents split into parts</td><td>Orchestrator writes vague briefs; workers duplicate effort</td></tr>
<tr><td>Sequential pipeline</td><td>Stable processes: extract, then draft, then review</td><td>An early error flows through every stage</td></tr>
<tr><td>Generator and critic</td><td>Writing, code, anything with a clear quality bar</td><td>Endless revision loops; cap the rounds</td></tr>
<tr><td>Handoff network</td><td>Customer conversations that move between departments</td><td>Agents passing the user back and forth</td></tr>
</tbody></table></div>
</section>

<section class="card" id="how-do-agents-in-a-multi-agent-system-communicate"><div class="pill">GenAI / LLM</div><h2>How do agents in a multi-agent system communicate?</h2>
<p><strong>Agents communicate through a shared state object or through structured messages, and the quality of those handoffs decides whether the system works.</strong> Free-text chat between agents drifts like a game of telephone. Typed contracts, where each agent must return specific fields, keep it honest.</p>
<div class="code"><div class="fname">orchestrator_workers.py  (Python 3.10+, no packages needed)</div><pre><code># orchestrator_workers.py: fan out to specialists, then check before merging.
from concurrent.futures import ThreadPoolExecutor
from dataclasses import dataclass

@dataclass
class Brief:                    # what the orchestrator hands each worker
    section: str
    instructions: str
    allowed_sources: list[str]

@dataclass
class Result:                   # what every worker must hand back
    section: str
    draft: str
    evidence: list[str]

def worker(brief: Brief) -&gt; Result:
    """Stand-in for an LLM agent with its own prompt, tools and context."""
    cited = [s for s in brief.allowed_sources if s.endswith(".pdf")]
    return Result(brief.section, f"Draft answer for {brief.section}", cited)

def orchestrate(sections: list[str], library: dict[str, list[str]]):
    briefs = [Brief(s, f"Answer RFP section '{s}' from approved sources only",
                    library.get(s, [])) for s in sections]
    with ThreadPoolExecutor(max_workers=4) as pool:      # workers run in parallel
        results = list(pool.map(worker, briefs))
    accepted = [r for r in results if r.evidence]        # no evidence, no merge
    to_human = [r.section for r in results if not r.evidence]
    return accepted, to_human

if __name__ == "__main__":
    library = {"Technical approach": ["core_banking_migration_case.pdf"],
               "Data security": ["iso27001_certificate.pdf", "soc2_summary.pdf"]}
    ok, review = orchestrate(["Technical approach", "Data security", "Commercials"], library)
    print("Merged:", [r.section for r in ok])
    print("Needs a human:", review)</code></pre></div>
<p>The <code>worker()</code> stub stands in for an LLM agent so the file runs offline. The rule in the last lines matters most: a result without evidence never reaches the final document. In LangGraph, the same idea becomes a typed state shared across nodes; our <a href="/aihelpcenter/genai-llm/build-your-first-ai-agent-python-langgraph">LangGraph tutorial</a> shows the single-agent version.</p>
<p>Two protocols are worth knowing. <a href="/aihelpcenter/genai-llm/what-is-model-context-protocol-mcp">MCP</a> connects an agent to tools and data. Agent2Agent (A2A), launched by Google in April 2025 and a <a href="https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents" target="_blank" rel="noopener">Linux Foundation project</a> since June 2025, connects agents built by different teams or vendors to each other.</p>
</section>

<section class="card" id="how-much-more-does-a-multi-agent-system-cost"><div class="pill">GenAI / LLM</div><h2>How much more does a multi-agent system cost?</h2>
<p><strong>A lot more: according to Anthropic's data, multi-agent systems use about fifteen times the tokens of a chat, against about four times for a single agent.</strong></p>
<figure class="diagram"><svg viewBox="0 0 720 190" role="img" aria-label="Token use relative to a chat interaction, as reported by Anthropic in 2025: chat 1 times, single agent about 4 times, multi-agent system about 15 times." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="13" fill="#14202b">
<text x="0" y="16" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">Tokens used, relative to a chat (Anthropic, 2025)</text>
<text x="0" y="62">Chat</text><rect x="150" y="44" width="30" height="30" rx="4" fill="#1a98cb"/><text x="190" y="64" font-family="Montserrat,sans-serif" font-weight="700">1×</text>
<text x="0" y="112">Single agent</text><rect x="150" y="94" width="120" height="30" rx="4" fill="#0b5394"/><text x="280" y="114" font-family="Montserrat,sans-serif" font-weight="700">~4×</text>
<text x="0" y="162">Multi-agent system</text><rect x="150" y="144" width="450" height="30" rx="4" fill="#5b4bd6"/><text x="610" y="164" font-family="Montserrat,sans-serif" font-weight="700">~15×</text>
</g></svg><figcaption>Figures as reported by Anthropic from its own usage data (June 2025); your ratios will differ by task and design. The direction is the point: every extra agent re-reads context and multiplies spend.</figcaption></figure>
<p>The same <a href="https://www.anthropic.com/engineering/multi-agent-research-system" target="_blank" rel="noopener">2025 write-up</a> reported that a multi-agent setup (a Claude Opus 4 lead with Claude Sonnet 4 sub-agents) beat single-agent Claude Opus 4 by 90.2% on Anthropic's internal research evaluation, and noted that tasks where all agents need the same context, such as most coding, are a poor fit. Read both numbers together. Multi-agent systems pay off when the value per task is high and the work splits cleanly; a ₹200 support ticket rarely qualifies.</p>
</section>

<section class="card" id="why-do-multi-agent-systems-fail"><div class="pill">GenAI / LLM</div><h2>Why do multi-agent systems fail?</h2>
<p><strong>They mostly fail because of design and coordination problems, not because the underlying models are weak.</strong> Cemri and colleagues at UC Berkeley annotated more than 1,600 traces from seven popular frameworks in <a href="https://arxiv.org/abs/2503.13657" target="_blank" rel="noopener">Why Do Multi-Agent LLM Systems Fail?</a> (2025) and grouped 14 failure modes into three categories: system design issues, misalignment between agents, and weak task verification.</p>
<p>In plain terms, we see agents ignore their role, ignore another agent's output, declare victory early, or loop with each other until the budget runs out. The fixes are unglamorous: narrow roles, typed handoffs, a hard cap on rounds and a verification step that checks results against sources before anything is merged.</p>
<div class="callout classroom"><div class="eyebrow">From our classrooms</div><p>When learners in Ivy Professional School's <a href="/courses/generative-ai-course">Advanced Generative AI course</a> reach the LangGraph and LCEL module on stateful multi-agent workflows and build their first multi-agent project, the version with five agents almost always loses to a rebuilt version with two agents and better briefs. Logging every handoff is what shows them why.</p></div>
</section>

<section class="card" id="how-would-an-it-services-firm-use-multi-agent-ai-for-rfp-responses"><div class="pill">Worked example</div><h2>How would an IT services firm use multi-agent AI for RFP responses?</h2>
<p><strong>RFP responses suit an orchestrator-and-workers design because the work is large, splits by section and has a clear checker: does every claim have evidence?</strong> This is a composite scenario; figures are illustrative.</p>
<p>Picture a mid-sized IT services firm in Pune bidding for a public-sector bank's 140-page RFP for a loan-origination system. The presales team has ten working days. Most of that time goes into the compliance matrix: reading every requirement, mapping it to a past project or certificate, and drafting a response.</p>
<ol class="steps">
<li>An extractor agent splits the RFP into numbered requirements and tags each by section.</li>
<li>The orchestrator sends each section to a worker with a brief and the allowed sources: case studies, certificates, past proposals.</li>
<li>Workers draft answers in parallel and must cite a source document for every claim.</li>
<li>A compliance checker agent rejects any answer without evidence and flags "partially compliant" items.</li>
<li>Commercials and deviations go only to people. The bid manager approves the final matrix.</li>
</ol>
<div class="stats"><div><b>~600</b><span>requirements extracted (illustrative)</span></div><div><b>4</b><span>agents, plus an orchestrator</span></div><div><b>0</b><span>prices or deviations written by AI</span></div></div>
<p>Why not one agent? A 140-page RFP plus the evidence library overflows a single context, the sections are independent, and the checker should not mark its own homework. Those are three of the four signals from earlier, which is what justifies the extra cost.</p>
</section>

<section class="card" id="which-frameworks-are-used-to-build-multi-agent-systems"><div class="pill">GenAI / LLM</div><h2>Which frameworks are used to build multi-agent systems?</h2>
<p><strong>LangGraph, CrewAI, Microsoft Agent Framework and OpenAI's Agents SDK are the most common choices at the time of writing (Nov 2026).</strong> <a href="https://docs.langchain.com/oss/python/langgraph/overview" target="_blank" rel="noopener">LangGraph</a> models agents as nodes in a graph with shared, checkpointed state, which suits approvals and long runs. CrewAI centres on role-based crews. Microsoft describes its <a href="https://learn.microsoft.com/en-us/agent-framework/overview/agent-framework-overview" target="_blank" rel="noopener">Agent Framework</a> as the direct successor to AutoGen and Semantic Kernel, built by the same teams, so new Microsoft-stack projects should start there rather than on AutoGen.</p>
<p>Our view: learn the concepts (state, handoffs, checkpoints, human-in-the-loop) on one framework properly. They transfer, and frameworks change faster than the ideas. For the career path, see <a href="/aihelpcenter/career/how-to-become-an-ai-engineer">how to become an AI engineer</a>.</p>
</section>

<section class="card concl" id="should-you-build-a-multi-agent-system"><div class="pill">GenAI / LLM</div><h2>Should you build a multi-agent system?</h2>
<p><strong>Build one only after a single agent has failed for a reason you can name and measure.</strong></p>
<div class="check"><ul>
<li>Build the single-agent version first and log where it fails.</li>
<li>Match each failure to a signal: context overflow, tool overload, parallel breadth or separation of duties.</li>
<li>Pick the simplest pattern that fixes it, usually orchestrator and workers.</li>
<li>Define typed handoffs: what each agent receives and must return.</li>
<li>Cap rounds, tokens and run time per task, and add a verification step before merging.</li>
<li>Compare cost and accuracy against the single agent on the same test set before going live.</li>
</ul></div>
<p>If the bigger question is which processes in your company deserve agents at all, start there: our <a href="/enterprise/ai-for-leaders-and-cxos">AI for Leaders and CXOs workshop</a> helps leadership teams rank AI use cases by value, feasibility and risk and leave with pilot-ready candidates.</p>
</section>

<section class="card" id="frequently-asked-questions"><div class="pill">FAQ</div><h2>Frequently asked questions</h2>
<h3>What is the difference between a single agent and a multi-agent system?</h3><p>A single agent is one model with one set of tools working through a task in a loop. A multi-agent system splits the task across several agents with separate roles, prompts and context, coordinated by an orchestrator or code. Multi-agent designs handle bigger, parallel work but cost more and add coordination failures.</p>
<h3>What is an example of a multi-agent system?</h3><p>A research assistant where a lead agent plans the question, several sub-agents search different sources in parallel, and the lead combines their findings. Another is an RFP response desk where workers draft sections from approved documents and a checker agent rejects any claim without evidence.</p>
<h3>What is the supervisor pattern in multi-agent AI?</h3><p>The supervisor or orchestrator pattern uses one agent to break a task into parts, assign each part to a specialist worker agent, and combine the results. It is the most common multi-agent design because control stays in one place, which makes it easier to log, budget and debug.</p>
<h3>What is the difference between MCP and A2A?</h3><p>MCP (Model Context Protocol) standardises how an AI application connects to tools and data. A2A (Agent2Agent) standardises how independent agents, possibly from different vendors, discover each other and exchange tasks. A multi-agent system can use both: MCP for each agent's tools, A2A between agents.</p>
<h3>Are multi-agent systems more accurate than single agents?</h3><p>Sometimes. Anthropic reported a large gain on its own research evaluation, but at about fifteen times the tokens of a chat. For tightly connected tasks such as most coding, a single agent with full context often does better. Test both on the same cases before deciding.</p>
</section>

<section class="card" id="sources"><div class="pill">Sources</div><h2>Sources</h2><ul>
<li>Anthropic. "How we built our multi-agent research system." 2025. <a href="https://www.anthropic.com/engineering/multi-agent-research-system" target="_blank" rel="noopener">https://www.anthropic.com/engineering/multi-agent-research-system</a></li>
<li>Anthropic. "Building effective agents." 2024. <a href="https://www.anthropic.com/engineering/building-effective-agents" target="_blank" rel="noopener">https://www.anthropic.com/engineering/building-effective-agents</a></li>
<li>Yan, W. (Cognition). "Don't Build Multi-Agents." 2025. <a href="https://cognition.com/blog/dont-build-multi-agents" target="_blank" rel="noopener">https://cognition.com/blog/dont-build-multi-agents</a></li>
<li>Cemri, M. et al. "Why Do Multi-Agent LLM Systems Fail?" 2025. <a href="https://arxiv.org/abs/2503.13657" target="_blank" rel="noopener">https://arxiv.org/abs/2503.13657</a></li>
<li>LangChain. "LangGraph overview" (documentation). <a href="https://docs.langchain.com/oss/python/langgraph/overview" target="_blank" rel="noopener">https://docs.langchain.com/oss/python/langgraph/overview</a></li>
<li>Linux Foundation. "Linux Foundation Launches the Agent2Agent Protocol Project." 2025. <a href="https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents" target="_blank" rel="noopener">https://www.linuxfoundation.org/press/linux-foundation-launches-the-agent2agent-protocol-project-to-enable-secure-intelligent-communication-between-ai-agents</a></li>
</ul></section>

<section class="card" id="related-articles"><div class="pill">Keep reading</div><h2>Related articles</h2><ul>
<li><a href="/aihelpcenter/genai-llm/what-is-agentic-ai">What is agentic AI?</a></li>
<li><a href="/aihelpcenter/genai-llm/build-your-first-ai-agent-python-langgraph">Build your first AI agent in Python with LangGraph</a></li>
<li><a href="/aihelpcenter/genai-llm/what-is-model-context-protocol-mcp">What is MCP (Model Context Protocol)?</a></li>
<li><a href="/aihelpcenter/genai-llm/rag-vs-ai-agents-vs-agentic-ai">RAG vs AI agents vs agentic AI</a></li>
<li><a href="/aihelpcenter/mlops/how-to-evaluate-llm-applications">How to evaluate LLM applications</a></li>
<li><a href="/aihelpcenter/genai-llm/harness-engineering-in-ai">Harness engineering in AI</a></li>
</ul>
<p>More in <a href="/aihelpcenter/genai-llm">GenAI / LLM</a>.</p>
<div class="cta"><p><strong>Design multi-agent systems that earn their cost.</strong> Ivy's Advanced Generative AI Course teaches multi-agent execution with custom tools and stateful workflows in LangGraph and LCEL, alongside RAG and deployment with FastAPI and Docker. 160 hours, live, with capstone projects, certification and placement support.</p>
<a class="btn" href="/courses/generative-ai-course">See the multi-agent AI course modules</a><a class="btn alt" href="https://prepai.ivyproschool.com" target="_blank" rel="noopener">Take the free PrepAI Diagnose</a>
<p>Unsure whether you need agents, retrieval or both? Our free bootcamp recording <a href="https://www.youtube.com/watch?v=o6ZjB25OmFE" target="_blank" rel="noopener">RAG vs. AI Agents vs. Agentic AI Explained LIVE</a> is a good hour to spend first, and new sessions are on the <a href="/bootcamp">free live AI bootcamp</a> page. To book two free demo classes, call or WhatsApp +91 7676882222.</p></div></section>
</main>
<aside><div class="stick"><nav class="box" aria-label="Article roadmap"><div class="lbl">ROADMAP</div><a href="#summary">Summary</a><a href="#what-is-a-multi-agent-system">What is a multi-agent system?</a><a href="#when-is-one-ai-agent-not-enough">When is one AI agent not enough?</a><a href="#what-are-the-main-multi-agent-architectures">What are the main multi-agent architectures?</a><a href="#how-do-agents-in-a-multi-agent-system-communicate">How do agents in a multi-agent system communicate?</a><a href="#how-much-more-does-a-multi-agent-system-cost">How much more does a multi-agent system cost?</a><a href="#why-do-multi-agent-systems-fail">Why do multi-agent systems fail?</a><a href="#how-would-an-it-services-firm-use-multi-agent-ai-for-rfp-responses">How would an IT services firm use multi-agent AI for RFP responses?</a><a href="#which-frameworks-are-used-to-build-multi-agent-systems">Which frameworks are used to build multi-agent systems?</a><a href="#should-you-build-a-multi-agent-system">Should you build a multi-agent system?</a><a href="#frequently-asked-questions">Frequently asked questions</a><a href="#sources">Sources</a><a href="#related-articles">Related articles</a></nav><div class="box author"><div class="lbl">WRITTEN BY</div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a><p>Founder · AI/ML Leader</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" aria-label="Prateek Agrawal on LinkedIn">${linkedinIcon}</a></div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a><p>Co-founder · Data/AI Consultant</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" aria-label="Eeshani Agrawal on LinkedIn">${linkedinIcon}</a></div></div></div></aside>
</div>
`;
