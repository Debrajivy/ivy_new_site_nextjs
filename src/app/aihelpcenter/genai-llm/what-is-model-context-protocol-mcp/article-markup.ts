const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;

export const articleMarkup = `
<div class="crumb"><a href="/aihelpcenter">AI Help Center</a> › <a href="/aihelpcenter/genai-llm">GenAI / LLM</a> › <b>What Is MCP?</b></div>
<header class="hero"><div class="hero-in"><div>
<div class="pill">GenAI / LLM · PRACTITIONER GUIDE</div>
<h1>What Is MCP (Model Context Protocol)? A Plain-English Guide With Code</h1>
<p class="sub">Learn what MCP standardises, how hosts, clients and servers fit together, how to build a small server in Python, and what to lock down before it touches real data.</p>
<div class="meta"><span class="byline"><img class="byline-avatar" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><img class="byline-avatar" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/>By <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a> &amp; <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a></span><span>13 min read</span><span>Published 8 Nov 2026</span><span>Last reviewed 8 Nov 2026</span></div></div>
<div class="hcard"><div class="top">Quick insight</div><div class="in"><p><strong>MCP is a universal plug, and a plug does not make the appliance safe.</strong> It lets one integration serve every AI app you use. What that integration is allowed to do is still your decision, and the protocol cannot make it for you.</p></div></div></div></header>

<div class="wrap"><main>
<p class="answer">MCP (Model Context Protocol) is an open standard that lets AI applications connect to external tools and data through one common interface. A developer wraps a system, such as a database, Tally export or ticketing tool, as an MCP server once, and any MCP-compatible assistant, IDE or agent can then discover and use it.</p>

<section class="summary" id="summary"><h2>Summary: the short version</h2><ul>
<li>MCP is an open protocol, released by Anthropic in November 2024 and now governed under the Linux Foundation's Agentic AI Foundation, for connecting AI apps to tools and data.</li>
<li>A host (the AI app) runs one MCP client per connection; each client talks to an MCP server that exposes tools, resources and prompts.</li>
<li>MCP turns the apps-times-systems integration problem into apps-plus-systems: build a server once and every compatible host can use it.</li>
<li>In Python, the official mcp package turns decorated functions into tools; version 2 renamed the FastMCP class to MCPServer.</li>
<li>MCP does not make a tool safe: least privilege, trusted servers, human approval on writes and logs remain your job.</li>
</ul></section>

<section class="card" id="what-is-mcp-in-simple-terms"><div class="pill">GenAI / LLM</div><h2>What is MCP in simple terms?</h2>
<p><strong>MCP is a common plug that lets any AI application use any tool or data source that speaks the same protocol.</strong> The official site compares it to a USB-C port for AI applications. Before USB-C, every device needed its own cable; before MCP, every AI app needed its own custom integration with every system.</p>
<p>Anthropic released MCP as an open standard in <a href="https://www.anthropic.com/news/model-context-protocol" target="_blank" rel="noopener">November 2024</a>. Adoption spread quickly across AI assistants, coding tools and agent frameworks, and on 9 December 2025 the <a href="https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation" target="_blank" rel="noopener">Linux Foundation announced</a> the Agentic AI Foundation (AAIF), with MCP as a founding project alongside Block's goose and OpenAI's AGENTS.md. MCP is now governed by a vendor-neutral foundation under the same Linux Foundation umbrella as Kubernetes and PyTorch.</p>
<p>In practice, someone wraps a system (a database, a Tally export, a ticketing tool) as an <strong>MCP server</strong>. Any MCP-compatible <strong>host</strong>, such as a desktop assistant, an IDE or your own agent, can then discover what that server offers and use it. If agents themselves are new to you, start with our explainer on <a href="/aihelpcenter/genai-llm/what-is-agentic-ai">what agentic AI is and how agents use tools</a>.</p>
</section>

<section class="card" id="what-problem-does-mcp-solve"><div class="pill">GenAI / LLM</div><h2>What problem does MCP solve?</h2>
<p><strong>MCP solves the "N times M" integration problem: without a shared protocol, every AI app needs a separate connector for every system it touches.</strong> Three assistants and five internal systems means fifteen integrations, each written to a different vendor's tool format and each breaking on its own schedule.</p>
<figure class="diagram"><svg viewBox="0 0 720 290" role="img" aria-label="Illustrative arithmetic of integrations needed. 3 AI apps and 5 systems: 15 custom integrations without a shared protocol, 8 with MCP. 4 apps and 8 systems: 32 versus 12. 6 apps and 12 systems: 72 versus 18." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="12.5" fill="#14202b">
<text x="0" y="16" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">Integrations to build and maintain (illustrative arithmetic)</text>
<line x1="80" y1="230" x2="720" y2="230" stroke="#556"/><rect x="110" y="192.5" width="56" height="37.5" fill="#d64545"/><text x="138" y="186.5" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="700">15</text><rect x="174" y="210.0" width="56" height="20.0" fill="#1f9d6b"/><text x="202" y="204.0" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="700">8</text><text x="170" y="250" text-anchor="middle">3 apps × 5 systems</text><rect x="330" y="150.0" width="56" height="80.0" fill="#d64545"/><text x="358" y="144.0" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="700">32</text><rect x="394" y="200.0" width="56" height="30.0" fill="#1f9d6b"/><text x="422" y="194.0" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="700">12</text><text x="390" y="250" text-anchor="middle">4 apps × 8 systems</text><rect x="550" y="50.0" width="56" height="180.0" fill="#d64545"/><text x="578" y="44.0" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="700">72</text><rect x="614" y="185.0" width="56" height="45.0" fill="#1f9d6b"/><text x="642" y="179.0" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="700">18</text><text x="610" y="250" text-anchor="middle">6 apps × 12 systems</text><rect x="110" y="268" width="12" height="12" fill="#d64545"/><text x="128" y="279">Custom connector per pair (apps × systems)</text><rect x="480" y="268" width="12" height="12" fill="#1f9d6b"/><text x="498" y="279">With MCP (apps + systems)</text>
</g></svg><figcaption>Without a shared protocol, every AI app needs its own connector to every system. With MCP, each app implements a client once and each system gets a server once, so the work grows by addition, not multiplication.</figcaption></figure>
<p>The second gain is reuse inside a company. The team that owns the data writes and secures the server once. Finance analysts using a desktop assistant, developers in their IDE and the agent your engineers build next quarter all connect to the same server, with the same permissions and the same audit log.</p>
</section>

<section class="card" id="how-does-mcp-work"><div class="pill">GenAI / LLM</div><h2>How does MCP work?</h2>
<p><strong>MCP connects a host application, through one client per connection, to servers that expose tools, resources and prompts, using JSON-RPC 2.0 messages.</strong> The <a href="https://modelcontextprotocol.io/specification/2026-07-28" target="_blank" rel="noopener">specification</a> names three roles: the host (the AI app), the client (the connector inside the host) and the server (the service that provides context and capabilities).</p>
<figure class="diagram"><svg viewBox="0 0 720 300" role="img" aria-label="MCP architecture. A host application such as Claude Desktop, an IDE or your own agent contains the LLM and one MCP client per connection. Each client talks JSON-RPC to one MCP server: a GST reconciliation server running locally over stdio, a documents server over HTTP and a ticketing server over HTTP. Each server wraps a real system: Tally and GSTR-2B files, client documents, and email and tickets." style="width:100%;height:auto"><g font-family="Poppins,sans-serif" font-size="12.5" fill="#14202b">
<text x="0" y="16" font-family="Montserrat,sans-serif" font-weight="700" font-size="15">How the pieces connect</text>
<rect x="0" y="34" width="290" height="250" rx="12" fill="#f2f8fc" stroke="#0b5394" stroke-width="2"/><text x="145" y="56" text-anchor="middle" font-family="Montserrat,sans-serif" font-weight="700">Host: assistant, IDE or agent</text>
<rect x="16" y="72" width="104" height="196" rx="10" fill="#0b5394"/><text x="68" y="166" text-anchor="middle" fill="#fff" font-family="Montserrat,sans-serif" font-weight="700">LLM</text><text x="68" y="186" text-anchor="middle" fill="#fff" font-size="11">decides which</text><text x="68" y="200" text-anchor="middle" fill="#fff" font-size="11">tool to use</text>
<g fill="#fff" stroke="#1a98cb" stroke-width="2"><rect x="146" y="70" width="128" height="44" rx="8"/><rect x="146" y="148" width="128" height="44" rx="8"/><rect x="146" y="226" width="128" height="44" rx="8"/></g>
<text x="210" y="97" text-anchor="middle">MCP client</text><text x="210" y="175" text-anchor="middle">MCP client</text><text x="210" y="253" text-anchor="middle">MCP client</text>
<g stroke="#0b5394" stroke-width="2"><line x1="274" y1="92" x2="370" y2="92"/><line x1="274" y1="170" x2="370" y2="170"/><line x1="274" y1="248" x2="370" y2="248"/><line x1="560" y1="92" x2="590" y2="92"/><line x1="560" y1="170" x2="590" y2="170"/><line x1="560" y1="248" x2="590" y2="248"/></g>
<g font-size="11" font-style="italic"><text x="322" y="85" text-anchor="middle">stdio</text><text x="322" y="163" text-anchor="middle">HTTP</text><text x="322" y="241" text-anchor="middle">HTTP</text></g>
<g fill="#1a98cb"><rect x="370" y="66" width="190" height="52" rx="8"/><rect x="370" y="144" width="190" height="52" rx="8"/><rect x="370" y="222" width="190" height="52" rx="8"/></g>
<g fill="#fff" text-anchor="middle"><text x="465" y="88" font-family="Montserrat,sans-serif" font-weight="700">GST recon server</text><text x="465" y="106" font-size="11">local, on the firm's PC</text><text x="465" y="166" font-family="Montserrat,sans-serif" font-weight="700">Documents server</text><text x="465" y="184" font-size="11">remote, read-only</text><text x="465" y="244" font-family="Montserrat,sans-serif" font-weight="700">Ticketing server</text><text x="465" y="262" font-size="11">remote, drafts only</text></g>
<g fill="#fff" stroke="#f7a61b" stroke-width="2"><rect x="590" y="70" width="130" height="44" rx="8"/><rect x="590" y="148" width="130" height="44" rx="8"/><rect x="590" y="226" width="130" height="44" rx="8"/></g>
<g text-anchor="middle" font-size="12"><text x="655" y="96">Tally + GSTR-2B</text><text x="655" y="174">Client files</text><text x="655" y="252">Email, tickets</text></g>
</g></svg><figcaption>One host, many servers. Each server wraps one system once, and every MCP-compatible host can then use it. The server, not the model, decides what the system will allow.</figcaption></figure>
<div class="tbl"><table>
<thead><tr><th scope="col">What a server offers</th><th scope="col">Who triggers it</th><th scope="col">Example in a CA firm</th></tr></thead>
<tbody>
<tr><td>Tools</td><td>The model decides to call them</td><td><code>find_itc_mismatches()</code></td></tr>
<tr><td>Resources</td><td>The app or user attaches them as context</td><td>The firm's ITC checklist</td></tr>
<tr><td>Prompts</td><td>The user picks them, like a slash command</td><td>"Monthly ITC review for client X"</td></tr>
</tbody></table></div>
<p>Servers run locally over <strong>stdio</strong> (the host launches them as a subprocess) or remotely over <strong>Streamable HTTP</strong>. One update practitioners should know: according to the <a href="https://modelcontextprotocol.io/specification/2026-07-28/changelog" target="_blank" rel="noopener">changelog</a> for the latest revision at the time of writing (2026-07-28), MCP is now stateless. The initialisation handshake and protocol-level sessions are gone, every request carries its own protocol version and capabilities, and the Roots, Sampling and Logging features are deprecated. Tutorials from 2025 that rely on sessions or Sampling are out of date.</p>
</section>

<section class="card" id="how-is-mcp-different-from-function-calling-and-apis"><div class="pill">GenAI / LLM</div><h2>How is MCP different from function calling and APIs?</h2>
<p><strong>An API exposes a system, function calling lets a model request a tool inside one app, and MCP standardises how tools are described and served so any app can use them.</strong> They stack rather than compete: an MCP server usually calls your existing API, and the host turns the server's tool list into function-calling definitions for its model.</p>
<div class="tbl"><table>
<thead><tr><th scope="col"></th><th scope="col">REST API</th><th scope="col">Function calling</th><th scope="col">MCP</th></tr></thead>
<tbody>
<tr><td>What it is</td><td>An interface to a system</td><td>A model feature for requesting tool calls</td><td>An open protocol for serving tools and data to AI apps</td></tr>
<tr><td>Tools defined</td><td>By the system owner</td><td>In each app, in each provider's format</td><td>Once, in the server</td></tr>
<tr><td>Discovery</td><td>Read the docs</td><td>Hard-coded in your app</td><td>Host lists tools at runtime</td></tr>
<tr><td>Best for</td><td>Program-to-program calls</td><td>One app, a handful of tools</td><td>Many AI apps sharing many tools</td></tr>
</tbody></table></div>
<p>MCP connects an agent to tools and data. When agents need to talk to other agents, a separate protocol, Agent2Agent (A2A), does that job; our guide to <a href="/aihelpcenter/genai-llm/multi-agent-systems-explained">multi-agent systems</a> covers where A2A fits.</p>
</section>

<section class="card" id="how-do-you-build-an-mcp-server-in-python"><div class="pill">GenAI / LLM</div><h2>How do you build an MCP server in Python?</h2>
<p><strong>Install the official <code>mcp</code> package, create a server object, decorate ordinary Python functions as tools or resources, and run it.</strong> Type hints and docstrings become the schema and description the model sees, so write them carefully.</p>
<div class="code"><div class="fname">gst_recon_server.py  (Python 3.10+, mcp 2.x)</div><pre><code># gst_recon_server.py   pip install "mcp[cli]"   (tested with mcp 2.3.0, Nov 2026)
from mcp.server import MCPServer

mcp = MCPServer("gst-recon")

# Dummy rows. In practice: the client's Tally purchase register and GSTR-2B export.
BOOKS = [("27AABCS1234F1Z5", "INV-101", 9000), ("29AAGCR5678K1Z2", "RK/2231", 21600),
         ("07AAFCD4321M1Z9", "D-778", 5400)]
GSTR_2B = {("27AABCS1234F1Z5", "INV-101"): 9000, ("29AAGCR5678K1Z2", "RK/2231"): 20160}


@mcp.tool()
def find_itc_mismatches(tolerance: int = 10) -&gt; list[dict]:
    """List purchase invoices whose GST is missing from GSTR-2B or differs
    from the books by more than \`tolerance\` rupees. Read-only."""
    issues = []
    for gstin, inv, books_tax in BOOKS:
        portal_tax = GSTR_2B.get((gstin, inv))
        if portal_tax is None:
            issues.append({"gstin": gstin, "invoice": inv, "issue": "not in GSTR-2B"})
        elif abs(portal_tax - books_tax) &gt; tolerance:
            issues.append({"gstin": gstin, "invoice": inv,
                           "issue": f"books {books_tax}, 2B {portal_tax}"})
    return issues


@mcp.resource("gst://rules/itc")
def itc_rules() -&gt; str:
    """The firm's checklist for claiming input tax credit."""
    return "Claim ITC only if the invoice is in GSTR-2B and tax matches within Rs 10."


if __name__ == "__main__":
    mcp.run()  # stdio by default; mcp.run(transport="streamable-http") to serve over HTTP</code></pre></div>
<p>A version note: in version 1.x of the SDK this same pattern was called FastMCP (<code>from mcp.server.fastmcp import FastMCP</code>). Version 2, released in July 2026, renamed it to <code>MCPServer</code>, as the SDK's <a href="https://py.sdk.modelcontextprotocol.io/v2/migration/" target="_blank" rel="noopener">v2 migration guide</a> explains; pin <code>mcp&lt;2</code> if you are following an older tutorial. We ran the file above on mcp 2.3.0 before publishing. Run <code>mcp dev gst_recon_server.py</code> to open the MCP Inspector (it needs Node.js) and call the tool by hand. To use it from Claude Desktop, add it to <code>claude_desktop_config.json</code>:</p>
<div class="code"><div class="fname">claude_desktop_config.json</div><pre><code>{
  "mcpServers": {
    "gst-recon": {
      "command": "python",
      "args": ["C:\\\\gst\\\\gst_recon_server.py"]
    }
  }
}</code></pre></div>
<p>Notice that most of the server is ordinary tool design: clear names, typed arguments, narrow permissions. That skill transfers. In Ivy Professional School's <a href="/courses/generative-ai-course">Advanced Generative AI course</a>, learners write custom tools and API integrations for LangGraph agents; once you can write a good tool, wrapping it as an MCP server is a short step.</p>
</section>

<section class="card" id="what-does-mcp-look-like-in-a-ca-firms-gst-reconciliation"><div class="pill">Worked example</div><h2>What does MCP look like in a CA firm's GST reconciliation?</h2>
<p><strong>A CA firm can wrap its reconciliation data in one read-only MCP server, so partners and article assistants ask questions in plain English instead of building VLOOKUPs for every client.</strong> The scenario is a composite; numbers are illustrative.</p>
<p>Picture a Kolkata CA firm handling GST compliance for about 80 business clients. Each month, article assistants match every client's purchase register (exported from Tally) against GSTR-2B to find input tax credit that cannot be claimed: invoices the supplier never uploaded, or uploaded with different tax. For a client with 600 purchase invoices a month, this is a day of Excel work, and the follow-up emails to suppliers take another.</p>
<ol class="steps">
<li>The firm's tech-savvy manager builds a server with three read-only tools: list clients, find mismatches for a GSTIN and period, and draft supplier follow-ups.</li>
<li>Monthly exports land in a fixed folder; the server reads only that folder.</li>
<li>A partner asks the assistant: "For client 14, March: mismatches above ₹5,000, grouped by supplier."</li>
<li>The assistant calls the tools and drafts emails. A person reviews and sends them.</li>
</ol>
<p>What stays out of the server matters most. No GST portal credentials, no filing actions and no outbound email. The source files stay on the firm's machines, but whatever a tool returns is sent to the assistant's model provider, so the tools return invoice-level mismatches, not whole registers. Check the provider's data-retention terms against your engagement letters and the DPDP Act, 2023 before a partner points it at live client data. Because the logic sits in one server, the reconciliation rules are written down once and every user gets the same answer.</p>
<div class="callout classroom"><div class="eyebrow">From our classrooms</div><p>When we run Ivy's <a href="/enterprise/ai-for-finance-team">AI for Finance workshop</a> for finance teams, reconciliation is the use case people ask about first. The ones who succeed start read-only and keep "send" and "file" with a human.</p></div>
</section>

<section class="card" id="is-mcp-secure"><div class="pill">GenAI / LLM</div><h2>Is MCP secure?</h2>
<p><strong>MCP itself is a protocol, so security depends on the servers you trust and the permissions you grant; the specification says it cannot enforce its security principles at the protocol level.</strong> The spec asks hosts to obtain user consent before invoking tools and to treat tool descriptions as untrusted unless the server is trusted. Map the risks to the <a href="https://genai.owasp.org/llm-top-10/" target="_blank" rel="noopener">OWASP Top 10 for LLM applications</a>:</p>
<ul>
<li><strong>Prompt injection (LLM01):</strong> a supplier's invoice PDF containing "ignore previous instructions" reaches the model through a tool result.</li>
<li><strong>Supply chain (LLM03):</strong> a random server from a code repository can run code on your machine. Install only from sources you trust and read the code.</li>
<li><strong>Excessive agency (LLM06):</strong> a server that can delete, pay or send when the task only needed reading.</li>
<li><strong>Tool poisoning:</strong> a malicious server's tool description quietly instructs the model to misuse other tools.</li>
</ul>
<div class="callout warning"><div class="eyebrow">Watch out</div><p>Treat every MCP server like a new employee with system access: least privilege, separate credentials, logs you actually read, and a named owner.</p></div>
</section>

<section class="card" id="when-should-you-not-use-mcp"><div class="pill">Honest limits</div><h2>When should you not use MCP?</h2>
<p><strong>Skip MCP when one app uses a couple of tools, or when there is no AI model choosing actions at all.</strong> Plain function calling inside your app is simpler for a single chatbot with two tools. A nightly batch job that moves data between systems needs an ordinary pipeline, not an AI protocol.</p>
<div class="callout strong-opinion"><div class="eyebrow">Strong opinion</div><p>MCP pays off when the same system will be used by more than one AI app or team. If you cannot name the second consumer, write a function now and wrap it in MCP later. It takes an afternoon.</p></div>
</section>

<section class="card concl" id="how-do-you-start-using-mcp-at-work"><div class="pill">GenAI / LLM</div><h2>How do you start using MCP at work?</h2>
<p><strong>Start by consuming one trusted server read-only, then build one small server for a system your team queries every day.</strong></p>
<div class="check"><ul>
<li>Check which of your AI tools (desktop assistant, IDE, agent framework) support MCP today.</li>
<li>Connect one official, read-only server, such as a file or documentation server, and try it for a week.</li>
<li>Pick one internal system your team looks things up in daily and list three read-only questions about it.</li>
<li>Build a server with those three tools; write clear docstrings and typed parameters.</li>
<li>Test it in the MCP Inspector before connecting a model.</li>
<li>Agree who owns the server, what credentials it uses and where its logs go.</li>
</ul></div>
<p>Rolling MCP out across departments? Settle at leadership level which systems agents may touch, and in what order; our <a href="/enterprise/ai-for-leaders-and-cxos">AI for Leaders and CXOs workshop</a> helps leadership teams rank AI use cases by value, feasibility and risk.</p>
</section>

<section class="card" id="frequently-asked-questions"><div class="pill">FAQ</div><h2>Frequently asked questions</h2>
<h3>What does MCP stand for in AI?</h3><p>MCP stands for Model Context Protocol. It is an open standard for connecting AI applications such as assistants, IDEs and agents to external tools and data sources through MCP servers, so one integration can be reused by any compatible application instead of being rebuilt for each one.</p>
<h3>Is MCP only for Claude?</h3><p>No. Anthropic created MCP, but it is an open protocol now governed under the Linux Foundation's Agentic AI Foundation. At the time of writing, many AI assistants, coding tools and agent frameworks from different vendors support it. Check the current documentation of the specific tool you use.</p>
<h3>What is the difference between MCP and an API?</h3><p>An API exposes a system to other programs. MCP is a protocol for exposing tools and data specifically to AI applications in a standard, discoverable way. An MCP server usually calls an existing API behind the scenes and describes it so any MCP host can use it.</p>
<h3>What is an MCP server?</h3><p>An MCP server is a small program that wraps a system, such as a database, file store or business application, and offers its capabilities as tools, resources and prompts. It can run locally over stdio or remotely over HTTP. The server decides what the AI is allowed to do with that system.</p>
<h3>Is MCP safe to use with company data?</h3><p>It can be, if you control which servers run and what they can access. Use servers from trusted sources, give them least-privilege credentials, keep write actions behind human approval and log every tool call. Remember that tool results are sent to the model provider. Prompt injection through tool results is the main risk to design against.</p>
</section>

<section class="card" id="sources"><div class="pill">Sources</div><h2>Sources</h2><ul>
<li>Model Context Protocol. "Specification" (revision 2026-07-28). <a href="https://modelcontextprotocol.io/specification/2026-07-28" target="_blank" rel="noopener">https://modelcontextprotocol.io/specification/2026-07-28</a></li>
<li>Anthropic. "Introducing the Model Context Protocol." 2024. <a href="https://www.anthropic.com/news/model-context-protocol" target="_blank" rel="noopener">https://www.anthropic.com/news/model-context-protocol</a></li>
<li>Linux Foundation. "Linux Foundation Announces the Formation of the Agentic AI Foundation." 2025. <a href="https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation" target="_blank" rel="noopener">https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation</a></li>
<li>Model Context Protocol. "Key Changes" (changelog, revision 2026-07-28). <a href="https://modelcontextprotocol.io/specification/2026-07-28/changelog" target="_blank" rel="noopener">https://modelcontextprotocol.io/specification/2026-07-28/changelog</a></li>
<li>Model Context Protocol. "Python SDK" (GitHub). <a href="https://github.com/modelcontextprotocol/python-sdk" target="_blank" rel="noopener">https://github.com/modelcontextprotocol/python-sdk</a></li>
<li>OWASP GenAI Security Project. "Top 10 for LLM Applications 2025." <a href="https://genai.owasp.org/llm-top-10/" target="_blank" rel="noopener">https://genai.owasp.org/llm-top-10/</a></li>
</ul></section>

<section class="card" id="related-articles"><div class="pill">Keep reading</div><h2>Related articles</h2><ul>
<li><a href="/aihelpcenter/genai-llm/what-is-agentic-ai">What is agentic AI?</a></li>
<li><a href="/aihelpcenter/genai-llm/build-your-first-ai-agent-python-langgraph">Build your first AI agent in Python with LangGraph</a></li>
<li><a href="/aihelpcenter/genai-llm/multi-agent-systems-explained">Multi-agent systems explained</a></li>
<li><a href="/aihelpcenter/genai-llm/connecting-llms-to-sql">Connecting LLMs to SQL databases</a></li>
<li><a href="/aihelpcenter/genai-use-cases/ai-for-finance-teams">AI for finance teams</a></li>
<li><a href="/aihelpcenter/genai-llm/rag-vs-ai-agents-vs-agentic-ai">RAG vs AI agents vs agentic AI</a></li>
</ul>
<p>More in <a href="/aihelpcenter/genai-llm">GenAI / LLM</a>.</p>
<div class="cta"><p><strong>Connect models to real systems, safely.</strong> Ivy's Advanced Generative AI Course covers the skills underneath MCP: API integrations and custom tools, stateful LangGraph agents, RAG over vector databases and deploying AI services with FastAPI and Docker. 160 hours, live, with certification and placement support.</p>
<a class="btn" href="/courses/generative-ai-course">Learn to build tool-using AI agents</a><a class="btn alt" href="https://prepai.ivyproschool.com" target="_blank" rel="noopener">Take the free PrepAI Diagnose</a>
<p>See a Claude-based agent built from scratch in our free bootcamp recording <a href="https://www.youtube.com/watch?v=pZRU5wXpDzA" target="_blank" rel="noopener">How to Use Claude to Create an AI Agent to Summarize Documents</a>, or join the next <a href="/bootcamp">free live AI bootcamp</a>. To book two free demo classes, call or WhatsApp +91 7676882222.</p></div></section>
</main>
<aside><div class="stick"><nav class="box" aria-label="Article roadmap"><div class="lbl">ROADMAP</div><a href="#summary">Summary</a><a href="#what-is-mcp-in-simple-terms">What is MCP in simple terms?</a><a href="#what-problem-does-mcp-solve">What problem does MCP solve?</a><a href="#how-does-mcp-work">How does MCP work?</a><a href="#how-is-mcp-different-from-function-calling-and-apis">How is MCP different from function calling and APIs?</a><a href="#how-do-you-build-an-mcp-server-in-python">How do you build an MCP server in Python?</a><a href="#what-does-mcp-look-like-in-a-ca-firms-gst-reconciliation">What does MCP look like in a CA firm's GST reconciliation?</a><a href="#is-mcp-secure">Is MCP secure?</a><a href="#when-should-you-not-use-mcp">When should you not use MCP?</a><a href="#how-do-you-start-using-mcp-at-work">How do you start using MCP at work?</a><a href="#frequently-asked-questions">Frequently asked questions</a><a href="#sources">Sources</a><a href="#related-articles">Related articles</a></nav><div class="box author"><div class="lbl">WRITTEN BY</div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/prateek-agrawal.webp" alt="Prateek Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a><p>Founder · AI/ML Leader</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" aria-label="Prateek Agrawal on LinkedIn">${linkedinIcon}</a></div><div class="author-person"><img class="author-photo" src="/images/aihelpcenter-authors/eeshani-agrawal.webp" alt="Eeshani Agrawal"/><div class="author-info"><a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a><p>Co-founder · Data/AI Consultant</p></div><a class="author-linkedin" href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" aria-label="Eeshani Agrawal on LinkedIn">${linkedinIcon}</a></div></div></div></aside>
</div>
`;
