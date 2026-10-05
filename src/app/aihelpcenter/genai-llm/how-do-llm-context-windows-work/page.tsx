import Link from "next/link";
import styles from "./article.module.css";

const canonicalUrl =
  "https://ivyproschool.com/aihelpcenter/genai-llm/how-do-llm-context-windows-work";

const roadmap = [
  ["what-is-a-context-window-in-an-llm", "What is a context window in an LLM?"],
  ["what-is-a-token-and-how-many-tokens-is-a-page-of-text", "What is a token, and how many tokens is a page of text?"],
  ["how-does-a-context-window-work-in-practice", "How does a context window work in practice?"],
  ["what-takes-up-space-in-the-context-window", "What takes up space in the context window?"],
  ["what-happens-when-a-conversation-exceeds-the-context-window", "What happens when a conversation exceeds the context window?"],
  ["why-does-a-model-miss-information-that-is-still-inside-the-window", "Why does a model miss information that is still inside the window?"],
  ["is-a-bigger-context-window-always-better", "Is a bigger context window always better?"],
  ["when-don-t-you-need-a-bigger-context-window", "When don't you need a bigger context window?"],
  ["how-is-a-context-window-different-from-memory-training-data-and-rag", "How is a context window different from memory, training data and RAG?"],
  ["a-worked-example-twelve-monthly-sales-reports", "A worked example: twelve monthly sales reports"],
  ["how-can-you-use-a-context-window-more-effectively", "How can you use a context window more effectively?"],
  ["frequently-asked-questions", "Frequently asked questions"],
] as const;

const faqs = [
  {
    question: "What is a context window in simple terms?",
    answer:
      "It is the amount of text an AI model can look at in one go, counted in tokens. It includes your question, earlier messages, any files attached and the answer the model writes. Anything beyond that limit is invisible to the model for that request.",
  },
  {
    question: "What happens when ChatGPT reaches its context limit?",
    answer:
      "The app shortens what it sends to the model, usually by dropping or summarising older messages, or it refuses an input that is too large. You are rarely told which. The visible symptom is the model forgetting earlier instructions or details.",
  },
  {
    question: "Is one token the same as one word?",
    answer:
      "No. A token can be a whole word, part of a word or a punctuation mark. In English, 100 tokens is roughly 75 words; code, numbers and Indian languages usually need more tokens for the same content.",
  },
  {
    question: "Does a larger context window make an LLM smarter?",
    answer:
      "No. It lets you give the model more material, but reasoning quality is a separate property. Research such as Lost in the Middle and RULER shows models use long inputs unevenly, missing details in the middle or weakening well before their advertised limit.",
  },
  {
    question: "Does RAG remove the context-window limit?",
    answer:
      "No. RAG chooses which passages to send so you do not have to send everything, but the retrieved text still occupies the window. It makes a limited window go much further; it does not make it unlimited.",
  },
  {
    question: "Is ChatGPT's memory the same as its context window?",
    answer:
      "No. Memory stores selected facts across conversations; the context window is what the model can see in the current request. A saved memory only affects an answer once the app inserts it into the context window.",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${canonicalUrl}#article`,
      headline: "How Do LLM Context Windows Work? Tokens, Limits and Why AI Forgets",
      description:
        "An LLM context window is the token limit a model can read and write in one request. Learn how it fills up, why AI forgets, and when a bigger window will not help.",
      mainEntityOfPage: canonicalUrl,
      datePublished: "2026-09-09",
      dateModified: "2026-10-04",
      author: [
        { "@type": "Person", name: "Prateek Agrawal" },
        { "@type": "Person", name: "Eeshani Agrawal" },
      ],
      publisher: {
        "@type": "EducationalOrganization",
        name: "Ivy Professional School",
        url: "https://ivyproschool.com",
      },
      articleSection: "GenAI / LLM",
      keywords: [
        "how do LLM context windows work",
        "LLM context window",
        "tokens in LLM",
        "LLM token limit",
        "context window vs memory",
        "context window vs RAG",
      ],
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "AI Help Center", item: "https://ivyproschool.com/aihelpcenter" },
        { "@type": "ListItem", position: 2, name: "GenAI / LLM", item: "https://ivyproschool.com/aihelpcenter/genai-llm" },
        { "@type": "ListItem", position: 3, name: "How Do LLM Context Windows Work?", item: canonicalUrl },
      ],
    },
  ],
};

function DataTable({
  headers,
  rows,
}: {
  headers: readonly string[];
  rows: readonly (readonly React.ReactNode[])[];
}) {
  return (
    <div className={styles.tableWrap}>
      <table>
        <thead>
          <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TokenBudgetDiagram() {
  return (
    <figure className={styles.diagram}>
      <svg viewBox="0 0 720 210" role="img" aria-label="Stacked bar showing how system instructions, conversation, a document, a question and an answer share a 10,000-token context limit. A second document causes overflow.">
        <g fontFamily="Arial, sans-serif" fontSize="11" fill="#14202b">
          <text x="0" y="14" fontWeight="700" fontSize="15">Everything shares one budget</text>
          <rect x="0" y="46" width="64" height="44" rx="6" fill="#0b5394" />
          <rect x="64" y="46" width="192" height="44" fill="#1a98cb" />
          <rect x="256" y="46" width="256" height="44" fill="#1a98cb" fillOpacity=".6" />
          <rect x="512" y="46" width="32" height="44" fill="#0b5394" fillOpacity=".6" />
          <rect x="544" y="46" width="96" height="44" fill="#eeeeee" stroke="#1a98cb" strokeDasharray="4 3" />
          <line x1="640" y1="34" x2="640" y2="100" stroke="#f7a61b" strokeWidth="3" />
          <text x="0" y="108">System 1,000</text>
          <text x="70" y="40">Conversation 3,000</text>
          <text x="262" y="40">Uploaded document 4,000</text>
          <text x="496" y="108">Q 500</text>
          <text x="548" y="40">Answer 1,500</text>
          <text x="646" y="62" fontWeight="600">10,000-token</text>
          <text x="646" y="76" fontWeight="600">limit</text>
          <rect x="0" y="140" width="544" height="30" rx="6" fill="#1a98cb" fillOpacity=".18" />
          <rect x="544" y="140" width="160" height="30" fill="#eeeeee" stroke="#14202b" strokeOpacity=".3" />
          <line x1="640" y1="130" x2="640" y2="180" stroke="#f7a61b" strokeWidth="3" />
          <text x="550" y="160">+ 2nd document 4,000</text>
          <text x="0" y="198" fontStyle="italic">Doesn&apos;t fit: the app drops, summarises or rejects — usually without telling you.</text>
        </g>
      </svg>
    </figure>
  );
}

function SlidingWindowDiagram() {
  return (
    <figure className={styles.diagram}>
      <svg viewBox="0 0 720 170" role="img" aria-label="Five messages where only messages three to five remain in the context window. Messages one and two, including a no scikit-learn instruction, have been dropped.">
        <g fontFamily="Arial, sans-serif" fontSize="13" fill="#14202b">
          <text x="0" y="16" fontWeight="700" fontSize="15">A sliding window keeps only the latest messages</text>
          <g opacity=".4">
            <rect x="0" y="62" width="128" height="48" rx="8" fill="#eeeeee" stroke="#99aabb" />
            <text x="22" y="91">Message 1</text>
            <rect x="144" y="62" width="128" height="48" rx="8" fill="#eeeeee" stroke="#99aabb" />
            <text x="166" y="91">Message 2</text>
          </g>
          <rect x="6" y="40" width="150" height="20" rx="10" fill="#f7a61b" />
          <text x="14" y="54" fontSize="11">“No scikit-learn, please”</text>
          <rect x="288" y="62" width="128" height="48" rx="8" fill="#ffffff" stroke="#1a98cb" strokeWidth="2" />
          <text x="310" y="91">Message 3</text>
          <rect x="432" y="62" width="128" height="48" rx="8" fill="#ffffff" stroke="#1a98cb" strokeWidth="2" />
          <text x="454" y="91">Message 4</text>
          <rect x="576" y="62" width="128" height="48" rx="8" fill="#ffffff" stroke="#1a98cb" strokeWidth="2" />
          <text x="598" y="91">Message 5</text>
          <path d="M288 124 v8 h416 v-8" fill="none" stroke="#0b5394" strokeWidth="2" />
          <text x="388" y="152" fontWeight="600" fill="#0b5394">What the model sees (window of 3)</text>
          <text x="0" y="136" fontSize="12" fontStyle="italic">Dropped. The model is not told.</text>
        </g>
      </svg>
    </figure>
  );
}

export default function ContextWindowsArticlePage() {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/aihelpcenter">AI Help Center</Link> ›{" "}
        <Link href="/aihelpcenter/genai-llm">GenAI / LLM</Link> › Generative AI Beginner Guides ›{" "}
        <strong>How Do LLM Context Windows Work?</strong>
      </nav>

      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <div className={styles.pill}>GenAI / LLM · Beginner Guide</div>
            <h1>How Do LLM Context Windows Work? Tokens, Limits and Why AI Forgets</h1>
            <p className={styles.subtitle}>What fills a model&apos;s working space, what happens when it overflows, and when a bigger window is the wrong fix.</p>
            <div className={styles.meta}>
              <span>By Prateek Agrawal &amp; Eeshani Agrawal</span>
              <span>12 min read</span>
              <span>Published 9 Sep 2026</span>
              <span>Last reviewed 4 Oct 2026</span>
            </div>
          </div>
          <div className={styles.heroCard}>
            <div className={styles.heroCardTitle}>Quick insight</div>
            <div className={styles.heroCardBody}>
              <p><strong>Context window = the whiteboard, not the memory.</strong> The model only uses what is written on the board right now. When the board is full, something gets rubbed out, and the model is never told what.</p>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.layout}>
        <main className={styles.article}>
          <p className={styles.answer}>An LLM context window is the maximum amount of text a large language model can work with in one request, measured in tokens. Your prompt, earlier messages, uploaded files, system instructions and the model&apos;s own answer all have to fit inside it. Anything outside the window does not exist for the model while it writes that answer.</p>

          <section className={styles.card} id="what-is-a-context-window-in-an-llm">
            <div className={styles.pill}>GenAI / LLM</div>
            <h2>What is a context window in an LLM?</h2>
            <p><strong>A context window is the model&apos;s active working space: everything it can read while producing one response.</strong> A large language model (LLM) is a model trained on huge amounts of text to predict the next piece of text; ChatGPT, Claude and Gemini are all built on LLMs.</p>
            <p>Picture two people discussing a project in front of a whiteboard. Whatever is written on the board shapes what each person says next. As the discussion runs on, the board fills up, and older notes have to be rubbed out or squeezed into a summary. A context window works the same way.</p>
            <p>Context is what gives a request its meaning. Compare these two prompts:</p>
            <div className={styles.prompt}><div className={styles.eyebrow}>Example prompt · Prompt A</div>Suggest three marketing strategies.</div>
            <div className={styles.prompt}><div className={styles.eyebrow}>Example prompt · Prompt B</div>My company sells industrial pumps.<br />Our main customers are manufacturing companies.<br />We want to increase sales in eastern India.<br />Suggest three marketing strategies.</div>
            <p>Prompt B produces a far more useful answer only because the first three lines sit in the same context window as the request.</p>
          </section>

          <section className={styles.card} id="what-is-a-token-and-how-many-tokens-is-a-page-of-text">
            <div className={styles.pill}>GenAI / LLM</div>
            <h2>What is a token, and how many tokens is a page of text?</h2>
            <p><strong>A token is the unit of text a model actually reads: usually a whole word, part of a word, or a punctuation mark.</strong> A tokenizer, the component that splits text before the model sees it, might break “The customer wants faster delivery” into <code className={styles.inlineCode}>The</code> · <code className={styles.inlineCode}>customer</code> · <code className={styles.inlineCode}>wants</code> · <code className={styles.inlineCode}>faster</code> · <code className={styles.inlineCode}>delivery</code>, and split a long word like “unbelievable” into two or three pieces. Context windows are measured in tokens, not words.</p>
            <p>OpenAI&apos;s rule of thumb for English is that one token is roughly four characters, or about 0.75 words. That gives these working estimates:</p>
            <DataTable headers={["Text", "Approximate words", "Approximate tokens"]} rows={[
              ["One email", "200", "270"],
              ["One A4 page of prose", "500", "670"],
              ["A 15-page report", "7,500", "10,000"],
              ["A 200-page book", "100,000", "133,000"],
            ]} />
            <p>Three things push the count up: code, numbers and tables, and non-English text. Hindi, Bengali and other Indian languages often use noticeably more tokens per word than English with many tokenizers, so the same idea takes more of the window and, on paid APIs, costs more. Petrov and colleagues (NeurIPS 2023) measured this gap across languages and found the same sentence can need several times more tokens in some languages than in English. Paste a sample of your own text into a tokenizer tool to check rather than trusting the estimate.</p>
          </section>

          <section className={styles.card} id="how-does-a-context-window-work-in-practice">
            <div className={styles.pill}>GenAI / LLM</div>
            <h2>How does a context window work in practice?</h2>
            <p><strong>The context window is a shared token budget: everything the application sends, plus the answer the model writes, draws from the same pool.</strong> Many models also cap the answer separately, at a smaller number.</p>
            <p>Here is a simplified budget for a model with a 10,000-token window:</p>
            <DataTable headers={["What the application sends", "Tokens"]} rows={[
              ["System instructions (rules the app gives the model)", "1,000"],
              ["Conversation history (earlier messages, resent every turn)", "3,000"],
              ["Uploaded document (text extracted from the file)", "4,000"],
              ["Your current question", "500"],
              [<strong key="used">Used</strong>, <strong key="used-value">8,500</strong>],
              ["Left for the answer", "1,500"],
            ]} />
            <p>Add a second 4,000-token document and the request no longer fits. The application, not the model, then decides what to do: drop older content, summarise it, or reject the request. Most chat apps do this silently.</p>
            <p>Current context windows range from tens of thousands of tokens on smaller models to a million or more on some frontier models. These numbers change every few months, so check the vendor&apos;s documentation linked under Sources for the model you actually use.</p>
          </section>

          <section className={styles.card} id="what-takes-up-space-in-the-context-window">
            <div className={styles.pill}>GenAI / LLM</div>
            <h2>What takes up space in the context window?</h2>
            <p><strong>Far more than your question.</strong> This is where most people underestimate how quickly a window fills.</p>
            <DataTable headers={["Component", "What it is", "Why it is easy to miss"]} rows={[
              ["System instructions", "Rules the app gives the model before you type", "You never see them"],
              ["Conversation history", "Earlier messages and replies", "Resent in full with every new turn"],
              ["Uploaded files", "Text extracted from PDFs, spreadsheets, code", "A “small” Excel file can run to tens of thousands of tokens"],
              ["Retrieved passages (RAG)", "Snippets fetched from a knowledge base for this question", "Added behind the scenes"],
              ["Tool and search results", "Web pages, API responses, code output", "Often long and unfiltered"],
              ["The answer itself", "Everything the model writes back", "Long answers use the same budget"],
              ["Reasoning tokens", "Internal thinking on reasoning models", "Hidden from you, but counted"],
            ]} />
            <TokenBudgetDiagram />
          </section>

          <section className={styles.card} id="what-happens-when-a-conversation-exceeds-the-context-window">
            <div className={styles.pill}>GenAI / LLM</div>
            <h2>What happens when a conversation exceeds the context window?</h2>
            <p><strong>The application removes or compresses something, and the model then answers without it.</strong> The model does not know what is missing, and you are usually not told.</p>
            <p>The simplest strategy is a sliding window: the app keeps only the most recent messages and silently drops the oldest.</p>
            <SlidingWindowDiagram />
            <p>Messages 1 and 2 have fallen outside the window. If message 1 said “Use only NumPy and Pandas, no scikit-learn”, the model will happily suggest scikit-learn later, because it can no longer see the rule. Real products use smarter strategies, such as summarising older turns or pinning important instructions, but something always gets left out.</p>
            <p>Missing context also raises the risk of hallucination, which is when a model gives a confident answer that no source supports. If the sales report you uploaded has dropped out of the window and you ask for total revenue, the model may produce a plausible figure rather than say it no longer has the data. Hallucinations have other causes too, so check any number that matters against the original file.</p>
          </section>

          <section className={styles.card} id="why-does-a-model-miss-information-that-is-still-inside-the-window">
            <div className={styles.pill}>GenAI / LLM</div>
            <h2>Why does a model miss information that is still inside the window?</h2>
            <p><strong>Because fitting in the window is not the same as being used well.</strong> Two research findings explain this.</p>
            <p>The first is the <strong>“Lost in the Middle”</strong> effect. Liu and colleagues (published in <em>Transactions of the ACL</em>, 2024) hid one relevant document among many irrelevant ones and moved it around the input. The models they tested answered best when the key information sat at the start or end, and worst when it sat in the middle. A 100-page report can fit comfortably and the model can still miss the figure on page 50.</p>
            <p>The second is the gap between <strong>advertised and effective context length</strong>. NVIDIA&apos;s RULER benchmark (Hsieh et al., 2024) tested models that claimed windows of 32,000 tokens or more and found that only about half kept satisfactory performance at 32,000 tokens. The number on the spec sheet is the most the model will accept, not the length at which it stays reliable.</p>
            <p>Both effects vary by model and have improved in newer releases, but neither has disappeared.</p>
            <div className={`${styles.callout} ${styles.rule}`}><div className={styles.eyebrow}>Rule of thumb</div><p>Put critical instructions at the top of the prompt and repeat the actual question at the very end. Never leave the one thing that matters buried in the middle of a long document.</p></div>
          </section>

          <section className={styles.card} id="is-a-bigger-context-window-always-better">
            <div className={styles.pill}>GenAI / LLM</div>
            <h2>Is a bigger context window always better?</h2>
            <p><strong>No. A bigger window lets you supply more, but it costs more, runs slower and adds risk.</strong></p>
            <p><strong>Compute grows fast.</strong> Transformer models, the architecture behind today&apos;s LLMs, use self-attention: every token is compared with every other token to work out how they relate. That is how a model works out who “she” is in “Riya sent the proposal to Neha because she asked for it”. In standard attention, the number of comparisons grows with the square of the input length:</p>
            <DataTable headers={["Input length (tokens)", "Token-pair comparisons"]} rows={[
              ["1,000", "1 million"],
              ["2,000", "4 million"],
              ["4,000", "16 million"],
            ]} />
            <p>Techniques such as FlashAttention and caching make this far cheaper in practice, but long inputs still mean higher bills and slower answers.</p>
            <p><strong>More text means more ways to be attacked.</strong> Long contexts often contain web pages, emails and documents you did not write. Prompt injection is when hidden text in that content tries to override your instructions. OWASP ranks it first among risks for LLM applications. The more untrusted text you pour into the window, the more chances it has to work.</p>
          </section>

          <section className={styles.card} id="when-don-t-you-need-a-bigger-context-window">
            <div className={styles.pill}>Honest limits</div>
            <h2>When don&apos;t you need a bigger context window?</h2>
            <p><strong>Most of the time.</strong> In our experience training teams on generative AI, people reach for a longer window when a better workflow would be faster, cheaper and more accurate.</p>
            <DataTable headers={["If your situation is…", "A bigger window is…", "Do this instead"]} rows={[
              ["Analysing 50,000 rows of sales data", "✗ The wrong tool", "Compute totals and trends in Python, SQL or Excel; give the model the summary table"],
              ["Answering questions from hundreds of policy documents", "✗ Expensive and less accurate", "Use retrieval (RAG) to send only the relevant passages"],
              ["A long chat that has started drifting", "✗ A temporary patch", "Ask for a summary of decisions; start a fresh chat with it"],
              ["Summarising a 200-page report", "✗ Workable but risky", "Summarise section by section with page references, then combine"],
              ["Reviewing one contract or one code module end to end", "✓ Genuinely useful", "Use the long window; put the key question at the end"],
            ]} />
            <div className={`${styles.callout} ${styles.opinion}`}><div className={styles.eyebrow}>Strong opinion</div><p>Start with less context, not more. A long window earns its cost only when the model must see everything at once to reason across it. When it needs only the relevant parts, retrieving or computing those parts wins on cost, speed and accuracy.</p></div>
          </section>

          <section className={styles.card} id="how-is-a-context-window-different-from-memory-training-data-and-rag">
            <div className={styles.pill}>GenAI / LLM</div>
            <h2>How is a context window different from memory, training data and RAG?</h2>
            <p><strong>The context window is what the model can see right now. Training data is knowledge built in beforehand, and memory and RAG are ways of getting information into the window.</strong></p>
            <DataTable headers={["Concept", "What it is", "How long it lasts", "Example"]} rows={[
              ["Context window", "Text available to the model in this request", "One request", "Your prompt plus the history the app resends"],
              ["Training knowledge", "Patterns learned when the model was built", "Fixed until retrained", "Knowing Python syntax"],
              ["Persistent memory", "Facts an app saves between conversations", "Until deleted", "Prefers weekly summary reports"],
              ["RAG", "Passages fetched from a knowledge base on demand", "Fetched per question", "The relevant clause from an exam policy"],
            ]} />
            <p>Memory and RAG do not get around the window. Whatever they retrieve still has to be placed into it, and still uses tokens, before it can affect the answer.</p>
            <p>Here is how memory actually works. An app saves a fact about you, say “Arjun prefers a weekly summary report”, in its own database. The model never holds it. When you next ask for a report, the app pastes that line into your prompt behind the scenes, and only then does it become context. RAG works the same way, with a search step choosing which passages to paste in.</p>
            <p>For when to use retrieval and when to retrain a model instead, see <Link href="/aihelpcenter/genai-llm/rag-vs-finetuning">RAG vs fine-tuning</Link>.</p>
          </section>

          <section className={styles.card} id="a-worked-example-twelve-monthly-sales-reports">
            <div className={styles.pill}>Worked example</div>
            <h2>A worked example: twelve monthly sales reports</h2>
            <p>A retail analyst uploads twelve monthly sales reports, each 15 pages long, to a model with a 128,000-token window, and asks: “Which region grew fastest this year, and in which month did growth stall?”</p>
            <DataTable headers={["Item", "Tokens"]} rows={[
              ["12 reports × 15 pages × ~670 tokens", "~120,000"],
              ["System instructions", "1,500"],
              ["Question", "500"],
              [<strong key="input-total">Input total</strong>, <strong key="input-value">~122,000</strong>],
              ["Left for the answer", "~6,000"],
            ]} />
            <p>On paper it fits. In practice three things go wrong. The June to September reports sit in the middle of the input, where models are least reliable. Every follow-up question adds history and pushes the earliest reports out. And there is little room left for a detailed answer.</p>
            <p>The better approach is to extract the regional figures into a table with Pandas or Excel, which takes a few minutes, and send the model a summary of about 2,000 tokens with the question. Input drops by roughly 98%, the answer is cheaper, faster and checkable, and the model spends its effort on interpretation, which is what it is good at.</p>
          </section>

          <section className={`${styles.card} ${styles.conclusion}`} id="how-can-you-use-a-context-window-more-effectively">
            <div className={styles.pill}>GenAI / LLM</div>
            <h2>How can you use a context window more effectively?</h2>
            <p><strong>Send less, structure it clearly, and put what matters at the edges.</strong></p>
            <ul className={styles.checklist}>
              <li>Measure one real prompt: paste a document you regularly use with AI into a tokenizer tool and note the count.</li>
              <li>Keep a project brief: goals, constraints and decisions so far. Paste it at the start of each new chat instead of letting one chat run for hours.</li>
              <li>Label long prompts with headings: OBJECTIVE, BACKGROUND, DATA, CONSTRAINTS, REQUIRED OUTPUT.</li>
              <li>Put critical instructions first and repeat the question last.</li>
              <li>Compute numbers in code or Excel; send the model results, not raw rows.</li>
              <li>Break large tasks into stages: extract, categorise, find patterns, recommend, check against the source.</li>
              <li>Treat text you did not write, including web pages, emails and PDFs, as untrusted.</li>
            </ul>
          </section>

          <section className={styles.card} id="frequently-asked-questions">
            <div className={styles.pill}>FAQ</div>
            <h2>Frequently asked questions</h2>
            {faqs.map(({ question, answer }) => <div key={question}><h3>{question}</h3><p>{answer}</p></div>)}
          </section>

          <section className={styles.card} id="sources">
            <div className={styles.pill}>Sources</div>
            <h2>Sources</h2>
            <ul className={styles.sourceList}>
              <li><a href="https://arxiv.org/abs/2307.03172" target="_blank" rel="noopener noreferrer">Liu, N. F. et al. “Lost in the Middle: How Language Models Use Long Contexts.” <em>Transactions of the ACL</em>, 2024.</a></li>
              <li><a href="https://arxiv.org/abs/2404.06654" target="_blank" rel="noopener noreferrer">Hsieh, C.-P. et al. “RULER: What&apos;s the Real Context Size of Your Long-Context Language Models?” 2024.</a></li>
              <li><a href="https://arxiv.org/abs/2305.15425" target="_blank" rel="noopener noreferrer">Petrov, A. et al. “Language Model Tokenizers Introduce Unfairness Between Languages.” NeurIPS 2023.</a></li>
              <li><a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener noreferrer">Vaswani, A. et al. “Attention Is All You Need.” 2017.</a></li>
              <li><a href="https://arxiv.org/abs/2205.14135" target="_blank" rel="noopener noreferrer">Dao, T. et al. “FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness.” 2022.</a></li>
              <li><a href="https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them" target="_blank" rel="noopener noreferrer">OpenAI: What are tokens and how to count them?</a></li>
              <li><a href="https://platform.openai.com/tokenizer" target="_blank" rel="noopener noreferrer">OpenAI Tokenizer</a></li>
              <li><a href="https://genai.owasp.org/llmrisk/llm01-prompt-injection/" target="_blank" rel="noopener noreferrer">OWASP: LLM01 Prompt Injection</a></li>
              <li>Current context-window sizes: <a href="https://platform.openai.com/docs/models" target="_blank" rel="noopener noreferrer">OpenAI models</a>, <a href="https://docs.claude.com/en/docs/build-with-claude/context-windows" target="_blank" rel="noopener noreferrer">Anthropic</a>, and <a href="https://ai.google.dev/gemini-api/docs/long-context" target="_blank" rel="noopener noreferrer">Google Gemini</a>.</li>
            </ul>
          </section>

          <section className={styles.card} id="related-articles">
            <div className={styles.pill}>Keep reading</div>
            <h2>Related articles</h2>
            <ul className={styles.relatedList}>
              <li><Link href="/aihelpcenter/genai-llm/what-is-generative-ai">What is generative AI? A plain-English starting point</Link></li>
              <li><Link href="/aihelpcenter/genai-llm/how-are-llms-trained">How are LLMs trained?</Link></li>
              <li><Link href="/aihelpcenter/genai-llm/what-an-embedding-actually-is">What an embedding actually is</Link></li>
              <li><Link href="/aihelpcenter/genai-llm/rag-vs-finetuning">RAG vs fine-tuning: which one should you use?</Link></li>
              <li><Link href="/aihelpcenter/genai-llm/connecting-llms-to-sql">Connecting LLMs to SQL databases</Link></li>
            </ul>
            <p>More in <Link href="/aihelpcenter/genai-llm">GenAI / LLM</Link>.</p>
            <div className={styles.cta}>
              <p><strong>Find your knowledge gaps on generative AI.</strong> Start your PrepAI Diagnose: a short quiz on this topic, with feedback on what to study next.</p>
              <a className={styles.ctaButton} href="https://prepai.ivyproschool.com" target="_blank" rel="noopener noreferrer">Start your PrepAI Diagnose</a>
              <p>Want to build applications that handle long documents properly, with retrieval, summarisation pipelines and evaluation? Our <Link href="/courses/generative-ai-course">Advanced Generative AI Course</Link> covers it hands-on. WhatsApp or call <a href="tel:+917676882222">+91 7676882222</a>.</p>
            </div>
          </section>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.sticky}>
            <nav className={styles.sideBox} aria-label="Article sections">
              <div className={styles.sideLabel}>ROADMAP</div>
              {roadmap.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
            </nav>
            <div className={`${styles.sideBox} ${styles.author}`}>
              <div className={styles.sideLabel}>WRITTEN BY</div>
              <p><strong>Prateek Agrawal</strong>Founder, Ivy Professional School · 20+ yrs in AI/ML</p>
              <p><strong>Eeshani Agrawal</strong>Co-founder, Ivy Professional School · 20+ yrs in Data/AI</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
