const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;

// String.raw keeps backslashes in code samples (e.g. .venv\Scripts\activate) exactly as written.
export const articleMarkup = String.raw`
<div class="crumb"><a href="/aihelpcenter">AI Help Center</a> › <a href="/aihelpcenter/genai-llm">GenAI / LLM</a> › <b>Build Your First AI Agent with LangGraph</b></div>
<header class="hero"><div class="hero-in"><div>
<div class="pill">GenAI / LLM · PRACTITIONER GUIDE</div>
<h1>How to Build Your First AI Agent in Python with LangGraph</h1>
<p class="sub">A working accounts assistant with two tools, one graph, a step limit and a human approval gate, plus the same loop written without a framework.</p>
<div class="meta"><span class="byline"><img class="byline-avatar" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><img class="byline-avatar" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/>By <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a> &amp; <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a></span><span>14 min read</span><span>Published 8 Nov 2026</span><span>Last reviewed 8 Nov 2026</span></div></div>
<div class="hcard"><div class="top">Quick insight</div><div class="in"><p><strong>An agent is a loop you can read.</strong> The model asks for a tool, your code runs it, the result goes back into the conversation, and the model decides again. LangGraph gives that loop a shape you can pause, inspect and limit.</p></div></div></div></header>

<div class="wrap"><main>
<p class="answer">To build your first AI agent in Python, write a few typed functions as tools, bind them to a tool-calling LLM, and wire a LangGraph StateGraph with a model node, a ToolNode and a tools_condition edge that loops until the model stops asking for tools. Then add a step limit and human approval before any action that changes data.</p>

<section class="summary" id="summary"><h2>Summary: the short version</h2><ul>
<li>An AI agent is an LLM in a loop: it picks a tool, your code runs it, the result goes back into the conversation, and the model decides again.</li>
<li>In LangGraph that loop is a StateGraph with a model node and a ToolNode, joined by tools_condition, which routes to the tools when there are tool calls and ends otherwise.</li>
<li>Tools are Python functions with the @tool decorator; their docstrings and type hints are what the model reads.</li>
<li>Cap every run with recursion_limit, and put an interrupt() approval step in front of any tool that writes, pays, sends or deletes.</li>
<li>The core loop is under 20 lines of plain Python; LangGraph earns its place once you need pauses, persistence or several paths through the work.</li>
</ul></section>

<section class="card" id="what-is-an-ai-agent-in-python-terms"><div class="pill">GenAI / LLM</div><h2>What is an AI agent, in Python terms?</h2>
<p><strong>In code, an AI agent is a while-loop around an LLM call, where the model can request functions and your program runs them and feeds the results back.</strong> The model never executes anything itself. It returns a structured request such as "call <code>lookup_invoice</code> with <code>invoice_no='INV-1002'</code>", and your code decides whether and how to honour it.</p>
<p>The pattern traces back to research such as <a href="https://arxiv.org/abs/2210.03629" target="_blank" rel="noopener">ReAct (Yao et al., 2022)</a>, which interleaved reasoning steps with actions; every major model API now supports it as tool calling. Our guide to <a href="/aihelpcenter/genai-llm/advanced-prompting">advanced prompting techniques</a> covers ReAct-style prompts, and <a href="/aihelpcenter/genai-llm/what-is-agentic-ai">what agentic AI is</a> covers the concepts. If you are unsure whether you need an agent or plain retrieval, read <a href="/aihelpcenter/genai-llm/rag-vs-ai-agents-vs-agentic-ai">RAG vs AI agents vs agentic AI</a> first. Three ingredients make the loop work: <strong>tools</strong> (the model sees only their names, descriptions and argument types), <strong>state</strong> (the running list of messages, re-read on every call) and <strong>a stopping rule</strong> (no more tool requests, or a step limit).</p>
<figure class="diagram"><svg viewBox="0 0 720 240" role="img" aria-label="LangGraph agent loop. START leads to the agent node, which is the LLM with bound tools. A tools_condition check follows: if the last message has tool calls, flow goes down to the tools node (ToolNode), which runs calculate_gst or lookup_invoice and sends the tool result back to the agent node. If there are no tool calls, flow goes to END." style="width:100%;height:auto"><defs><marker id="ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0b5394"/></marker></defs><g font-family="Poppins,sans-serif" font-size="13" fill="#14202b">
<text x="0" y="16" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">The agent graph you will build</text>
<rect x="0" y="92" width="70" height="36" rx="18" fill="#eeeeee"/><text x="35" y="115" text-anchor="middle" font-weight="600">START</text>
<line x1="72" y1="110" x2="100" y2="110" stroke="#0b5394" stroke-width="2.5" marker-end="url(#ar3)"/>
<rect x="104" y="78" width="160" height="64" rx="10" fill="#0b5394"/><text x="184" y="105" text-anchor="middle" fill="#fff" font-family="Montserrat,sans-serif" font-weight="700">agent</text><text x="184" y="125" text-anchor="middle" fill="#fff" font-size="12">LLM + bound tools</text>
<line x1="266" y1="110" x2="302" y2="110" stroke="#0b5394" stroke-width="2.5" marker-end="url(#ar3)"/>
<polygon points="370,68 436,110 370,152 304,110" fill="#fff6e5" stroke="#f7a61b" stroke-width="2"/><text x="370" y="106" text-anchor="middle" font-size="12">tools_</text><text x="370" y="121" text-anchor="middle" font-size="12">condition</text>
<line x1="436" y1="110" x2="560" y2="110" stroke="#0b5394" stroke-width="2.5" marker-end="url(#ar3)"/><text x="498" y="100" text-anchor="middle" font-size="12">no tool calls</text>
<rect x="564" y="92" width="70" height="36" rx="18" fill="#eeeeee"/><text x="599" y="115" text-anchor="middle" font-weight="600">END</text>
<line x1="370" y1="152" x2="370" y2="168" stroke="#0b5394" stroke-width="2.5" marker-end="url(#ar3)"/><text x="380" y="164" font-size="12">tool calls</text>
<rect x="270" y="172" width="200" height="54" rx="10" fill="#1a98cb"/><text x="370" y="195" text-anchor="middle" fill="#fff" font-family="Montserrat,sans-serif" font-weight="700">tools (ToolNode)</text><text x="370" y="214" text-anchor="middle" fill="#fff" font-size="11">calculate_gst, lookup_invoice</text>
<path d="M270 199 H184 V148" fill="none" stroke="#0b5394" stroke-width="2.5" marker-end="url(#ar3)"/><text x="40" y="222" font-size="12">tool result appended to messages</text>
<text x="490" y="200" font-size="12">State: MessagesState</text>
</g></svg><figcaption>The whole agent is two nodes and one decision. The loop runs until the model answers without asking for a tool.</figcaption></figure>
</section>

<section class="card" id="what-do-you-need-to-install-for-a-langgraph-agent"><div class="pill">Setup</div><h2>What do you need to install for a LangGraph agent?</h2>
<p><strong>You need Python 3.10 or newer, three pip packages (<code>langgraph</code>, <code>langchain-openai</code> and <code>pandas</code>) and an API key for a model that supports tool calling.</strong> Use a virtual environment, and pick any current tool-calling model through <code>AGENT_MODEL</code>.</p>
<div class="code"><div class="fname">terminal</div><pre><code>python -m venv .venv
source .venv/bin/activate           # Windows: .venv\Scripts\activate
pip install -U langgraph langchain-openai pandas
# Prefer Claude? pip install -U langchain-anthropic and use ChatAnthropic instead

export OPENAI_API_KEY="your-key"    # Windows PowerShell: $env:OPENAI_API_KEY="your-key"
export AGENT_MODEL="model-name"     # a current tool-calling model from your provider's model list</code></pre></div>
<ul>
<li><code>langgraph</code> is the orchestration library; <code>langchain-openai</code> provides <code>ChatOpenAI</code>; <code>langchain-core</code> (installed with it) provides <code>@tool</code> and the message types. For Claude, install <code>langchain-anthropic</code> and use <code>ChatAnthropic</code>. The graph code does not change.</li>
<li>Model names change fast: OpenAI has already scheduled older snapshots such as <code>gpt-4o-mini</code> for removal, so the code reads the model from <code>AGENT_MODEL</code> instead of hard-coding one.</li>
<li>We ran every LangGraph listing here against langgraph 1.2 in November 2026, with a stubbed model standing in for the API, using the documented imports (<code>StateGraph</code>, <code>MessagesState</code>, <code>ToolNode</code>, <code>tools_condition</code>, <code>interrupt</code>). APIs still move, so if an import fails, check the <a href="https://docs.langchain.com/oss/python/langgraph/overview" target="_blank" rel="noopener">LangGraph docs</a> for your version.</li>
</ul>
</section>

<section class="card" id="how-do-you-define-tools-for-an-ai-agent"><div class="pill">Tools</div><h2>How do you define tools for an AI agent?</h2>
<p><strong>Write a normal Python function with type hints and a clear docstring, then add the <code>@tool</code> decorator; LangChain turns the signature into the JSON schema the model sees.</strong> The model chooses tools purely from their names, descriptions and argument types, so the docstring is effectively part of your prompt.</p>
<p>Our accounts assistant gets two tools: <code>calculate_gst</code> does the arithmetic (never let the model multiply rupees in its head), and <code>lookup_invoice</code> reads a small pandas DataFrame standing in for a Tally or ERP export.</p>
<div class="code"><div class="fname">agent.py (part 1: data and tools)</div><pre><code>import os

import pandas as pd
from langchain_core.messages import SystemMessage
from langchain_core.tools import tool
from langchain_openai import ChatOpenAI
from langgraph.graph import StateGraph, MessagesState, START
from langgraph.prebuilt import ToolNode, tools_condition

# A tiny invoice register standing in for your Tally or ERP export
INVOICES = pd.DataFrame({
    "invoice_no": ["INV-1001", "INV-1002", "INV-1003", "INV-1004"],
    "customer": ["Retailer, Pune", "Distributor, Nagpur", "Hospital, Kolkata", "Retailer, Pune"],
    "taxable_value": [125000, 48000, 310000, 76500],
    "gst_rate": [18, 18, 5, 18],
    "same_state": [True, False, False, True],
    "status": ["paid", "unpaid", "unpaid", "paid"],
    "due_date": ["2026-10-15", "2026-11-05", "2026-11-20", "2026-10-30"],
})


@tool
def calculate_gst(amount: float, rate: float, same_state: bool = True) -&gt; dict:
    """Calculate GST on a taxable amount in INR.

    Args:
        amount: Taxable value in rupees, before GST.
        rate: GST rate in percent, for example 5 or 18.
        same_state: True if supplier and buyer are in the same state
            (CGST + SGST); False for an inter-state supply (IGST).
    """
    gst = round(amount * rate / 100, 2)
    split = {"cgst": gst / 2, "sgst": gst / 2} if same_state else {"igst": gst}
    return {"taxable_value": amount, "rate": rate, "gst": gst, **split,
            "invoice_total": round(amount + gst, 2)}


@tool
def lookup_invoice(invoice_no: str) -&gt; dict:
    """Return the details of one invoice, looked up by number such as INV-1002."""
    rows = INVOICES[INVOICES["invoice_no"] == invoice_no.strip().upper()]
    if rows.empty:
        return {"error": f"No invoice found with number {invoice_no}"}
    return rows.to_dict(orient="records")[0]</code></pre></div>
<ul>
<li><strong>Return structured data.</strong> A dict with named fields is easier for the model to read correctly than a sentence.</li>
<li><strong>Return errors as data.</strong> <code>{"error": "No invoice found"}</code> lets the model explain the problem; an unhandled exception can stop the run.</li>
<li><strong>Keep outputs JSON-friendly.</strong> <code>to_dict(orient="records")</code> converts pandas values to plain Python types.</li>
<li><strong>Take rates as inputs.</strong> GST slabs were rationalised in September 2025 and will change again; hard-coded slabs go stale quietly.</li>
</ul>
<div class="callout classroom"><div class="eyebrow">From our classrooms</div><p>In the LangGraph and LCEL agent modules of Ivy Professional School's <a href="/courses/generative-ai-course">Advanced Generative AI course</a>, when a learner's agent picks the wrong tool, the cause is usually a vague docstring, not a weak model. Rewriting "Gets invoice" as "Return the details of one invoice, looked up by number such as INV-1002" fixes more agents than a bigger model does.</p></div>
</section>

<section class="card" id="how-do-you-build-the-agent-loop-with-a-langgraph-stategraph"><div class="pill">LangGraph</div><h2>How do you build the agent loop with a LangGraph StateGraph?</h2>
<p><strong>Create a <code>StateGraph(MessagesState)</code>, add a model node and a <code>ToolNode</code>, connect them with <code>tools_condition</code>, and add an edge from the tools back to the model.</strong> That is the entire agent.</p>
<div class="code"><div class="fname">agent.py (part 2: model, graph and run)</div><pre><code>tools = [calculate_gst, lookup_invoice]
llm = ChatOpenAI(model=os.environ["AGENT_MODEL"], temperature=0)  # drop temperature if your model rejects it
llm_with_tools = llm.bind_tools(tools)

SYSTEM = SystemMessage(content=(
    "You are an accounts assistant for an Indian SME. Amounts are in INR. "
    "Use the tools for every figure; never do GST arithmetic yourself. "
    "If a tool returns an error, say so plainly instead of guessing."
))


def call_model(state: MessagesState):
    response = llm_with_tools.invoke([SYSTEM] + state["messages"])
    return {"messages": [response]}


builder = StateGraph(MessagesState)
builder.add_node("agent", call_model)
builder.add_node("tools", ToolNode(tools))
builder.add_edge(START, "agent")
builder.add_conditional_edges("agent", tools_condition)  # -&gt; "tools" or END
builder.add_edge("tools", "agent")
graph = builder.compile()

if __name__ == "__main__":
    question = "What is the total payable on INV-1002 including GST?"
    result = graph.invoke({"messages": [("user", question)]},
                          config={"recursion_limit": 10})
    for message in result["messages"]:
        message.pretty_print()</code></pre></div>
<ul>
<li><code>bind_tools(tools)</code> sends the tool schemas with every call. Forget it and the model answers from memory, confidently and wrongly.</li>
<li><code>MessagesState</code> has one key, <code>messages</code>, whose reducer appends rather than replaces. That is why <code>call_model</code> returns only the new reply.</li>
<li><code>ToolNode(tools)</code> reads the tool calls on the last AI message, runs each one, and appends a <code>ToolMessage</code> per call. Invalid arguments come back to the model as an error it can fix; other exceptions stop the run unless you set <code>handle_tool_errors=True</code>.</li>
<li><code>tools_condition</code> returns <code>"tools"</code> when there are tool calls and <code>END</code> otherwise, so name the tool node exactly <code>"tools"</code>.</li>
<li>The edge from <code>tools</code> back to <code>agent</code> closes the loop.</li>
</ul>
</section>

<section class="card" id="worked-example-what-happens-when-a-pune-accounts-team-asks-about-an-invoice"><div class="pill">Worked example</div><h2>Worked example: what happens when a Pune accounts team asks about an invoice?</h2>
<p><strong>The agent makes two tool calls and then answers, and the trace shows every step, which is what a reviewer needs to see.</strong> Picture the receivables desk of a mid-sized distributor in Pune, fielding "what is the total on this invoice, and is it paid?" from sales colleagues all day. Here the question is about INV-1002, an inter-state invoice to a Nagpur distributor: ₹48,000 taxable at 18% GST. Run <code>python agent.py</code>. Your model's wording will differ from our run below; the shape will not.</p>
<div class="code"><div class="fname">output (abridged)</div><pre><code>================================ Human Message =================================
What is the total payable on INV-1002 including GST?
================================== Ai Message ==================================
Tool Calls:
  lookup_invoice (call_1)
  Args:
    invoice_no: INV-1002
================================= Tool Message =================================
Name: lookup_invoice
{"invoice_no": "INV-1002", "customer": "Distributor, Nagpur", "taxable_value": 48000,
 "gst_rate": 18, "same_state": false, "status": "unpaid", "due_date": "2026-11-05"}
================================== Ai Message ==================================
Tool Calls:
  calculate_gst (call_2)
  Args:
    amount: 48000
    rate: 18
    same_state: False
================================= Tool Message =================================
Name: calculate_gst
{"taxable_value": 48000.0, "rate": 18.0, "gst": 8640.0, "igst": 8640.0, "invoice_total": 56640.0}
================================== Ai Message ==================================
INV-1002 is an inter-state invoice, so IGST applies. Taxable value Rs 48,000,
IGST at 18% is Rs 8,640, total payable Rs 56,640. It was due on 5 Nov 2026
and is still unpaid.</code></pre></div>
<div class="tbl"><table>
<thead><tr><th scope="col">Step</th><th scope="col">Node</th><th scope="col">What happened</th><th scope="col">What to check</th></tr></thead>
<tbody>
<tr><td>1</td><td>agent</td><td>Model asks for <code>lookup_invoice("INV-1002")</code></td><td>Did it pick the right tool and argument?</td></tr>
<tr><td>2</td><td>tools</td><td>Returns taxable value ₹48,000, rate 18%, inter-state</td><td>Is the data source current?</td></tr>
<tr><td>3</td><td>agent</td><td>Model asks for <code>calculate_gst(48000, 18, same_state=False)</code></td><td>Was the inter-state flag passed on?</td></tr>
<tr><td>4</td><td>tools</td><td>IGST ₹8,640; total ₹56,640</td><td>Arithmetic came from code, not the model</td></tr>
<tr><td>5</td><td>agent</td><td>Writes the final answer, no tool calls, so the graph ends</td><td>Does every number match a tool result?</td></tr>
</tbody></table></div>
<p>The last row matters most: a number no tool returned is a number the model invented. Our guide on <a href="/aihelpcenter/genai-llm/why-llms-hallucinate-and-how-to-reduce-it">why LLMs hallucinate</a> has a short Python check for it. To watch steps live, stream updates:</p>
<div class="code"><div class="fname">stream_updates.py</div><pre><code>from agent import graph

inputs = {"messages": [("user", "Which unpaid invoices are due this month?")]}
for update in graph.stream(inputs, config={"recursion_limit": 10}, stream_mode="updates"):
    for node, payload in update.items():
        print(f"--- {node} ---")
        payload["messages"][-1].pretty_print()</code></pre></div>
</section>

<section class="card" id="how-do-you-stop-an-agent-from-looping-forever"><div class="pill">Guardrails</div><h2>How do you stop an agent from looping forever?</h2>
<p><strong>Set <code>recursion_limit</code> on every call and catch <code>GraphRecursionError</code>; it caps node runs so a confused model cannot burn tokens forever.</strong> Each tool round costs two steps, so a limit of 10 allows roughly four rounds before the final answer. The default has changed across versions, so set it explicitly.</p>
<div class="code"><div class="fname">step_limit.py</div><pre><code>from langgraph.errors import GraphRecursionError

from agent import graph

question = "What is the total payable on INV-1002 including GST?"
try:
    result = graph.invoke({"messages": [("user", question)]},
                          config={"recursion_limit": 10})
except GraphRecursionError:
    result = None
    print("Agent hit its step limit. Routing the question to a person.")</code></pre></div>
<p>Loops usually have a boring cause: a tool keeps returning an error the model cannot fix. Read the trace before raising the limit, because every extra round re-sends the whole history.</p>
<figure class="diagram"><svg viewBox="0 0 720 275" role="img" aria-label="Illustrative bar chart of input tokens per model call in one agent run: about 900 tokens on call 1, 1,150 on call 2, 1,400 on call 3, 1,650 on call 4 and 1,900 on call 5, about 7,000 in total." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="13" fill="#14202b">
<text x="0" y="16" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">Input tokens per model call in one run (illustrative)</text>
<line x1="60" y1="220" x2="700" y2="220" stroke="#556" stroke-width="1"/>
<rect x="90" y="148" width="80" height="72" rx="4" fill="#1a98cb"/><text x="130" y="140" text-anchor="middle" font-weight="600">900</text><text x="130" y="240" text-anchor="middle">Call 1</text>
<rect x="210" y="128" width="80" height="92" rx="4" fill="#1a98cb"/><text x="250" y="120" text-anchor="middle" font-weight="600">1,150</text><text x="250" y="240" text-anchor="middle">Call 2</text>
<rect x="330" y="108" width="80" height="112" rx="4" fill="#1a98cb"/><text x="370" y="100" text-anchor="middle" font-weight="600">1,400</text><text x="370" y="240" text-anchor="middle">Call 3</text>
<rect x="450" y="88" width="80" height="132" rx="4" fill="#0b5394"/><text x="490" y="80" text-anchor="middle" font-weight="600">1,650</text><text x="490" y="240" text-anchor="middle">Call 4</text>
<rect x="570" y="68" width="80" height="152" rx="4" fill="#0b5394"/><text x="610" y="60" text-anchor="middle" font-weight="600">1,900</text><text x="610" y="240" text-anchor="middle">Call 5</text>
<text x="0" y="266" font-size="12" font-style="italic">Illustrative: ~900 starting tokens plus ~250 per round, about 7,000 in total.</text>
</g></svg><figcaption>Cost grows with every round because each model call re-reads the full history. A step limit is a budget limit.</figcaption></figure>
</section>

<section class="card" id="how-do-you-add-human-approval-before-an-agent-acts"><div class="pill">Human in the loop</div><h2>How do you add human approval before an agent acts?</h2>
<p><strong>Route risky tool calls to an approval node that calls <code>interrupt()</code>, compile the graph with a checkpointer, and resume with <code>Command(resume=...)</code> once a person decides.</strong> Nothing executes until someone approves.</p>
<p>Here a third tool that changes data, <code>mark_invoice_paid</code>, needs approval; read-only tools run straight away.</p>
<div class="code"><div class="fname">agent_with_approval.py</div><pre><code>from typing import Literal

from langchain_core.messages import ToolMessage
from langchain_core.tools import tool
from langgraph.checkpoint.memory import InMemorySaver
from langgraph.graph import StateGraph, MessagesState, START, END
from langgraph.prebuilt import ToolNode
from langgraph.types import Command, interrupt

from agent import INVOICES, SYSTEM, calculate_gst, llm, lookup_invoice


@tool
def mark_invoice_paid(invoice_no: str) -&gt; str:
    """Mark an invoice as paid in the register. This changes data."""
    mask = INVOICES["invoice_no"] == invoice_no.strip().upper()
    if not mask.any():
        return f"No invoice found with number {invoice_no}"
    INVOICES.loc[mask, "status"] = "paid"
    return f"{invoice_no} marked as paid"


tools = [calculate_gst, lookup_invoice, mark_invoice_paid]
llm_with_tools = llm.bind_tools(tools)
NEEDS_APPROVAL = {"mark_invoice_paid"}


def call_model(state: MessagesState):
    return {"messages": [llm_with_tools.invoke([SYSTEM] + state["messages"])]}


def route(state: MessagesState) -&gt; Literal["approval", "tools", "__end__"]:
    last = state["messages"][-1]
    if not last.tool_calls:
        return END
    if any(call["name"] in NEEDS_APPROVAL for call in last.tool_calls):
        return "approval"
    return "tools"


def approval(state: MessagesState) -&gt; Command[Literal["tools", "agent"]]:
    calls = state["messages"][-1].tool_calls
    decision = interrupt({"pending": [{"tool": c["name"], "args": c["args"]} for c in calls]})
    if decision == "approve":
        return Command(goto="tools")
    rejected = [ToolMessage(content="Rejected by the accounts reviewer. Do not retry.",
                            tool_call_id=c["id"]) for c in calls]
    return Command(goto="agent", update={"messages": rejected})


builder = StateGraph(MessagesState)
builder.add_node("agent", call_model)
builder.add_node("approval", approval)
builder.add_node("tools", ToolNode(tools))
builder.add_edge(START, "agent")
builder.add_conditional_edges("agent", route)
builder.add_edge("tools", "agent")
graph = builder.compile(checkpointer=InMemorySaver())  # interrupts need a checkpointer

if __name__ == "__main__":
    config = {"configurable": {"thread_id": "ap-review-1"}, "recursion_limit": 12}
    result = graph.invoke(
        {"messages": [("user", "The hospital says INV-1003 is settled. Mark it paid.")]}, config)
    if "__interrupt__" in result:
        print("Waiting for approval:", result["__interrupt__"][0].value)
        decision = input("Type approve or reject: ").strip().lower()
        result = graph.invoke(Command(resume=decision), config)
    print(result["messages"][-1].content)</code></pre></div>
<p>Interrupts need a checkpointer and a <code>thread_id</code>; use a database-backed checkpointer in production so a pause survives a restart. And a rejection must still answer each pending tool call with a <code>ToolMessage</code>, or the model API will reject the conversation.</p>
<div class="callout rule-of-thumb"><div class="eyebrow">Rule of thumb</div><p>If a tool writes, pays, sends or deletes, it goes behind approval: the maker-checker control finance teams already run. Read-only lookups can run freely.</p></div>
</section>

<section class="card" id="what-does-langgraph-do-that-a-plain-python-loop-does-not"><div class="pill">Under the hood</div><h2>What does LangGraph do that a plain Python loop does not?</h2>
<p><strong>For one model and a few tools, very little: the core loop is under 20 lines of plain Python, and writing it once shows you what LangGraph automates.</strong> Here is the same agent with the OpenAI SDK's Chat Completions API; the newer Responses API follows the same loop.</p>
<div class="code"><div class="fname">plain_agent.py</div><pre><code>import json
import os

from openai import OpenAI

client = OpenAI()  # reads OPENAI_API_KEY from the environment
MODEL = os.environ["AGENT_MODEL"]
INVOICES = {"INV-1002": {"taxable_value": 48000, "gst_rate": 18, "same_state": False}}


def calculate_gst(amount, rate, same_state=True):
    gst = round(amount * rate / 100, 2)
    return {"gst": gst, "invoice_total": round(amount + gst, 2), "igst": not same_state}


def lookup_invoice(invoice_no):
    return INVOICES.get(invoice_no.upper(), {"error": "invoice not found"})


FUNCS = {"calculate_gst": calculate_gst, "lookup_invoice": lookup_invoice}
TOOLS = [
    {"type": "function", "function": {"name": "calculate_gst", "description": "GST on a taxable INR amount",
     "parameters": {"type": "object", "required": ["amount", "rate"], "properties": {
         "amount": {"type": "number"}, "rate": {"type": "number"}, "same_state": {"type": "boolean"}}}}},
    {"type": "function", "function": {"name": "lookup_invoice", "description": "Invoice details by number",
     "parameters": {"type": "object", "required": ["invoice_no"], "properties": {
         "invoice_no": {"type": "string"}}}}},
]


def run_agent(question, max_steps=6):
    messages = [{"role": "system", "content": "Use the tools for every figure."},
                {"role": "user", "content": question}]
    for _ in range(max_steps):                      # the step limit
        msg = client.chat.completions.create(model=MODEL, messages=messages,
                                             tools=TOOLS).choices[0].message
        messages.append(msg)                        # the state is just this list
        if not msg.tool_calls:                      # no tool requested: done
            return msg.content
        for call in msg.tool_calls:                 # the "ToolNode"
            result = FUNCS[call.function.name](**json.loads(call.function.arguments))
            messages.append({"role": "tool", "tool_call_id": call.id,
                             "content": json.dumps(result)})
    return "Stopped: step limit reached."


if __name__ == "__main__":
    print(run_agent("What is the total payable on INV-1002 including GST?"))</code></pre></div>
<p>The <code>messages</code> list is <code>MessagesState</code>, the <code>if not msg.tool_calls</code> check is <code>tools_condition</code>, the inner loop is <code>ToolNode</code>, and <code>max_steps</code> is <code>recursion_limit</code>. Anthropic's guide on <a href="https://www.anthropic.com/engineering/building-effective-agents" target="_blank" rel="noopener">building effective agents</a> also advises starting with direct API calls, since frameworks can hide what you need to debug.</p>
<div class="tbl"><table>
<thead><tr><th scope="col">Concern</th><th scope="col">Plain Python loop</th><th scope="col">LangGraph</th></tr></thead>
<tbody>
<tr><td>Conversation state</td><td>A list you append to</td><td><code>MessagesState</code> or your own typed state</td></tr>
<tr><td>Routing</td><td><code>if</code> statements</td><td>Conditional edges, <code>tools_condition</code>, <code>Command(goto=...)</code></td></tr>
<tr><td>Running tools</td><td>Dict lookup, your own error handling</td><td><code>ToolNode</code>: parallel calls, configurable error handling</td></tr>
<tr><td>Step limit</td><td><code>for _ in range(max_steps)</code></td><td><code>recursion_limit</code> and <code>GraphRecursionError</code></td></tr>
<tr><td>Pause for approval</td><td>You build storage and resume logic</td><td><code>interrupt()</code> plus a checkpointer</td></tr>
<tr><td>Resume after a crash or days later</td><td>Your own database code</td><td>Checkpointers keyed by <code>thread_id</code></td></tr>
<tr><td>Streaming and inspection</td><td>Print statements</td><td>Stream modes, graph drawing, tracing</td></tr>
</tbody></table></div>
<div class="callout strong-opinion"><div class="eyebrow">Strong opinion</div><p>One model, three tools, no pauses: ship the plain loop. Move to LangGraph the day you need approvals, persistence or a second path through the work. That is also when <a href="/aihelpcenter/genai-llm/multi-agent-systems-explained">multi-agent designs</a> start to make sense, and not before.</p></div>
</section>

<section class="card" id="what-are-the-most-common-langgraph-agent-errors"><div class="pill">Debugging</div><h2>What are the most common LangGraph agent errors?</h2>
<p><strong>Most first-agent bugs come from an unbound model, a misnamed tool node, a missing return edge or broken message pairs.</strong> In our workshops these cover nearly every "my agent doesn't work" question.</p>
<div class="tbl"><table>
<thead><tr><th scope="col">Symptom</th><th scope="col">Likely cause</th><th scope="col">Fix</th></tr></thead>
<tbody>
<tr><td>Agent answers without ever calling a tool</td><td>Model not bound with tools, or vague tool docstrings</td><td>Use <code>llm.bind_tools(tools)</code>; say in each docstring when to use the tool</td></tr>
<tr><td>Error about an unknown node <code>tools</code></td><td><code>tools_condition</code> routes to <code>"tools"</code> but your node has another name</td><td>Name the ToolNode <code>"tools"</code> or pass a path map to <code>add_conditional_edges</code></td></tr>
<tr><td>Graph stops right after a tool runs</td><td>No edge from tools back to the model</td><td><code>builder.add_edge("tools", "agent")</code></td></tr>
<tr><td><code>GraphRecursionError</code></td><td>Model retrying a failing tool</td><td>Read the trace; fix the tool's error message first</td></tr>
<tr><td>400 error saying a tool message must follow a tool call</td><td>History was trimmed or edited and an AI tool call lost its <code>ToolMessage</code></td><td>Trim history in whole rounds; answer every tool call, even rejected ones</td></tr>
</tbody></table></div>
<div class="callout warning"><div class="eyebrow">Watch out</div><p>Treat tool arguments as untrusted input. Validate them before they reach SQL or a shell; see <a href="/aihelpcenter/genai-llm/connecting-llms-to-sql">connecting LLMs to SQL</a>.</p></div>
</section>

<section class="card concl" id="what-should-you-build-after-your-first-agent"><div class="pill">Next steps</div><h2>What should you build after your first agent?</h2>
<p><strong>Make this agent trustworthy before making it bigger.</strong> Tests, limits and approvals are also the habits our <a href="/aihelpcenter/career/how-to-become-an-ai-engineer">AI engineer roadmap</a> puts ahead of new frameworks.</p>
<div class="check"><ul>
<li>Swap the DataFrame for a read-only connection to a test invoice table.</li>
<li>Write ten test questions with known answers, two of them with invoice numbers that do not exist, and rerun them after every change (see <a href="/aihelpcenter/genai-llm/how-to-evaluate-llm-applications">evaluating LLM applications</a>).</li>
<li>Set recursion_limit on every call and log every GraphRecursionError.</li>
<li>Put every write action behind interrupt() approval with a database-backed checkpointer.</li>
<li>Expose the agent through an API such as FastAPI only after the tests pass.</li>
<li>If several assistants need the same tools, expose them through <a href="/aihelpcenter/genai-llm/what-is-model-context-protocol-mcp">MCP</a>.</li>
</ul></div></section>

<section class="card" id="frequently-asked-questions"><div class="pill">FAQ</div><h2>Frequently asked questions</h2>
<h3>Do I need LangGraph to build an AI agent in Python?</h3>
<p>No. A tool-calling agent is a loop you can write in about 20 lines with any model SDK. LangGraph becomes useful when you need human approval pauses, saved state between runs, streaming of intermediate steps, or several nodes with different jobs. Learn the plain loop first.</p>
<h3>Can I use Claude or an open-source model with LangGraph instead of OpenAI?</h3>
<p>Yes. Install the matching LangChain package, such as langchain-anthropic for Claude or langchain-ollama for local models, and swap the chat model class. The graph, tools and edges stay the same. The model must support tool calling, and smaller open models are less reliable at choosing tools.</p>
<h3>What is the difference between ToolNode and tools_condition in LangGraph?</h3>
<p>tools_condition is a routing function: it looks at the last message and returns "tools" if the model requested tool calls, or END if it did not. ToolNode is the node that actually runs the requested tools and appends their results as ToolMessages. You normally use them together.</p>
<h3>How many tools should my first AI agent have?</h3>
<p>Start with two to five tools that each do one clear job. Every tool adds text the model must read and another way to choose wrongly. Above ten or fifteen tools, group them, split the work across specialised agents, or load only the tools the current task needs.</p>
<h3>Why does my LangGraph agent keep calling the same tool?</h3>
<p>Usually the tool returns an error or an unhelpful result, and the model retries with small variations. Read the trace, make the tool's error message say what input it expects, and tell the model to stop and report after a failed lookup. Keep recursion_limit as a backstop.</p>
</section>

<section class="card" id="sources"><div class="pill">Sources</div><h2>Sources</h2><ul>
<li>LangChain. "LangGraph overview." Documentation. <a href="https://docs.langchain.com/oss/python/langgraph/overview" target="_blank" rel="noopener">https://docs.langchain.com/oss/python/langgraph/overview</a></li>
<li>LangChain. "LangGraph quickstart." Documentation. <a href="https://docs.langchain.com/oss/python/langgraph/quickstart" target="_blank" rel="noopener">https://docs.langchain.com/oss/python/langgraph/quickstart</a></li>
<li>LangChain. "Interrupts" (human-in-the-loop with interrupt and Command). Documentation. <a href="https://docs.langchain.com/oss/python/langgraph/interrupts" target="_blank" rel="noopener">https://docs.langchain.com/oss/python/langgraph/interrupts</a></li>
<li>LangChain. "tools_condition" API reference. <a href="https://reference.langchain.com/python/langgraph.prebuilt/tool_node/tools_condition" target="_blank" rel="noopener">https://reference.langchain.com/python/langgraph.prebuilt/tool_node/tools_condition</a></li>
<li>Yao, S. et al. "ReAct: Synergizing Reasoning and Acting in Language Models." 2022. <a href="https://arxiv.org/abs/2210.03629" target="_blank" rel="noopener">https://arxiv.org/abs/2210.03629</a></li>
<li>Anthropic. "Building effective agents." 2024. <a href="https://www.anthropic.com/engineering/building-effective-agents" target="_blank" rel="noopener">https://www.anthropic.com/engineering/building-effective-agents</a></li>
<li>OpenAI. "Function calling" guide. <a href="https://developers.openai.com/api/docs/guides/function-calling" target="_blank" rel="noopener">https://developers.openai.com/api/docs/guides/function-calling</a></li>
</ul></section>

<section class="card" id="related-articles"><div class="pill">Keep reading</div><h2>Related articles</h2><ul>
<li><a href="/aihelpcenter/genai-llm/what-is-agentic-ai">What is agentic AI?</a></li>
<li><a href="/aihelpcenter/genai-llm/rag-vs-ai-agents-vs-agentic-ai">RAG vs AI agents vs agentic AI</a></li>
<li><a href="/aihelpcenter/genai-llm/multi-agent-systems-explained">Multi-agent systems explained</a></li>
<li><a href="/aihelpcenter/genai-llm/what-is-model-context-protocol-mcp">What is MCP (Model Context Protocol)?</a></li>
<li><a href="/aihelpcenter/genai-llm/how-to-evaluate-llm-applications">How to evaluate LLM applications</a></li>
<li><a href="/aihelpcenter/genai-llm/harness-engineering-in-ai">Harness engineering in AI</a></li>
</ul>
<p>More in <a href="/aihelpcenter/genai-llm">GenAI / LLM</a>.</p>
<div class="cta"><p><strong>Got this agent running? Take it to production with mentors.</strong> Ivy's Advanced Generative AI Course picks up where this tutorial stops: custom tools and stateful multi-agent workflows in LangGraph and LCEL, RAG over vector databases, LoRA fine-tuning, and packaging the agent as a FastAPI service in Docker. 160 hours, live, with certification and placement support.</p>
<a class="btn" href="/courses/generative-ai-course">Explore the agentic AI course with LangGraph</a><a class="btn alt" href="https://prepai.ivyproschool.com" target="_blank" rel="noopener">Take the free PrepAI Diagnose</a>
<p>Want another agent to practise on? Our free bootcamp recording <a href="https://www.youtube.com/watch?v=uukEZ8cPJ7g" target="_blank" rel="noopener">Build a Text-to-SQL AI Agent</a> applies the same tool-calling loop to SQL, and new sessions are listed on the <a href="/bootcamp">free live AI bootcamp</a> page. To sit in on two free demo classes, call or WhatsApp +91 7676882222; Ivy also has a learning hub in Pune (see the <a href="/courses/generative-ai-course-pune">Generative AI course in Pune</a>).</p></div></section>
</main>
<aside><div class="stick"><nav class="box" aria-label="Article roadmap"><div class="lbl">ROADMAP</div><a href="#summary">Summary</a><a href="#what-is-an-ai-agent-in-python-terms">What is an AI agent, in Python terms?</a><a href="#what-do-you-need-to-install-for-a-langgraph-agent">What do you need to install?</a><a href="#how-do-you-define-tools-for-an-ai-agent">How do you define tools?</a><a href="#how-do-you-build-the-agent-loop-with-a-langgraph-stategraph">How do you build the StateGraph?</a><a href="#worked-example-what-happens-when-a-pune-accounts-team-asks-about-an-invoice">Worked example: a Pune accounts team</a><a href="#how-do-you-stop-an-agent-from-looping-forever">How do you stop endless loops?</a><a href="#how-do-you-add-human-approval-before-an-agent-acts">How do you add human approval?</a><a href="#what-does-langgraph-do-that-a-plain-python-loop-does-not">LangGraph vs a plain Python loop</a><a href="#what-are-the-most-common-langgraph-agent-errors">Common LangGraph errors</a><a href="#what-should-you-build-after-your-first-agent">What to build next</a><a href="#frequently-asked-questions">Frequently asked questions</a><a href="#sources">Sources</a><a href="#related-articles">Related articles</a></nav><div class="box author"><div class="lbl">WRITTEN BY</div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a><p>Founder · AI/ML Leader</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" aria-label="Prateek Agrawal on LinkedIn">${linkedinIcon}</a></div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a><p>Co-founder · Data/AI Consultant</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" aria-label="Eeshani Agrawal on LinkedIn">${linkedinIcon}</a></div></div></div></aside>
</div>
`;
