import Image from "next/image";
import Link from "next/link";
import PrateekAgrawal from "@/assests/pratilk.webp";
import EeshaniAgrawal from "@/assests/eeshani.webp";
import styles from "../how-do-llm-context-windows-work/article.module.css";

const canonicalUrl =
  "https://ivyproschool.com/aihelpcenter/genai-llm/do-llms-remember-previous-conversations";

const roadmap = [
  ["do-llms-remember-anything-at-all", "Do LLMs remember anything at all?"],
  ["how-does-a-chatbot-appear-to-remember-what-you-said-earlier", "How does a chatbot appear to remember what you said earlier?"],
  ["why-does-the-ai-forget-things-in-the-same-chat", "Why does the AI forget things in the same chat?"],
  ["how-do-the-memory-features-in-ai-assistants-work", "How do the memory features in AI assistants work?"],
  ["what-are-the-ways-to-give-an-llm-memory", "What are the ways to give an LLM memory?"],
  ["does-talking-to-an-llm-train-it", "Does talking to an LLM train it?"],
  ["when-don-t-you-need-ai-memory", "When don’t you need AI memory?"],
  ["a-worked-example-a-support-bot-over-twelve-turns", "A worked example: a support bot over twelve turns"],
  ["how-can-you-use-ai-memory-more-safely-and-effectively", "How can you use AI memory more safely and effectively?"],
  ["frequently-asked-questions", "Frequently asked questions"],
] as const;

const faqs = [
  {
    question: "Does ChatGPT, Claude or Gemini remember me between chats?",
    answer:
      "By default, the underlying model does not. Some assistants offer an optional memory feature that saves notes about you and adds them to future prompts. Check the settings of your specific product to see whether it is available and whether it is switched on.",
  },
  {
    question: "Why did the AI forget something from earlier in the same chat?",
    answer:
      "Usually the conversation grew past the context window and the app trimmed or summarised older messages. It can also happen when the detail sits in the middle of a long input, where models tend to use information less reliably.",
  },
  {
    question: "Is a bigger context window the same as better memory?",
    answer:
      "No. A bigger window lets you fit more text, but it does not make the model use that text well, and it raises cost and latency because more is re-read each turn. It extends working memory within one chat; it does not create memory that lasts across separate chats.",
  },
  {
    question: "What is the difference between AI memory and RAG?",
    answer:
      "Memory stores facts about you or your work and inserts them into prompts. RAG searches a document collection and inserts the passages that match the current question. Both place text into the context window; they differ in what is stored and how it is chosen.",
  },
  {
    question: "Does talking to an LLM train it?",
    answer:
      "Not in real time. Your messages do not change the model’s weights while you chat. Whether conversations are later used to improve future models depends on the provider’s policy and your settings, so read the data terms.",
  },
  {
    question: "Should I use fine-tuning to make a model remember my company’s facts?",
    answer:
      "Usually no. Fine-tuning is better for style, format and narrow behaviours. For facts that change, retrieval is easier to update and easier to check against the source.",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${canonicalUrl}#article`,
      headline: "Do LLMs Remember Previous Conversations? How AI Memory Really Works",
      description:
        "Why a model starts every request blank, how apps create memory with chat history and saved notes, and when no memory is the better choice.",
      mainEntityOfPage: canonicalUrl,
      datePublished: "2026-10-07",
      dateModified: "2026-10-07",
      author: [
        { "@type": "Person", name: "Prateek Agrawal", sameAs: "https://www.linkedin.com/in/prateekagrawal" },
        { "@type": "Person", name: "Eeshani Agrawal", sameAs: "https://www.linkedin.com/in/eeshani-agrawal-b674045" },
      ],
      publisher: {
        "@type": "EducationalOrganization",
        name: "Ivy Professional School",
        url: "https://ivyproschool.com",
        sameAs: "https://www.linkedin.com/school/ivy-professional-school",
      },
      articleSection: "GenAI / LLM",
      keywords: [
        "do LLMs remember previous conversations",
        "AI memory",
        "LLM memory",
        "ChatGPT memory",
        "context window",
        "RAG vs memory",
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
        { "@type": "ListItem", position: 3, name: "Do LLMs Remember Previous Conversations?", item: canonicalUrl },
      ],
    },
  ],
};

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.5 8.3H3.2V19h3.3V8.3ZM4.8 3A1.9 1.9 0 1 0 4.8 6.8 1.9 1.9 0 0 0 4.8 3ZM19 12.9c0-3.2-1.7-4.9-4-4.9-1.8 0-2.7 1-3.1 1.7V8.3H8.6V19h3.3v-5.3c0-1.4.3-2.8 2-2.8 1.7 0 1.7 1.6 1.7 2.9V19H19v-6.1Z" />
  </svg>
);

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

function ModelRequestDiagram() {
  return (
    <figure className={styles.diagram}>
      <svg viewBox="0 0 720 210" role="img" aria-label="On turn 5 the model receives the system prompt, turns 1 to 4 and the new message, then writes a reply. Nothing is kept after the reply.">
        <g fontFamily="Arial, sans-serif" fontSize="13" fill="#14202b">
          <text x="0" y="16" fontWeight="700" fontSize="15">What the model sees on turn 5</text>
          <rect x="0" y="36" width="300" height="40" rx="8" fill="#fff" stroke="#1a98cb" strokeWidth="2" />
          <text x="14" y="61">System prompt</text>
          <rect x="0" y="84" width="300" height="40" rx="8" fill="#fff" stroke="#1a98cb" strokeWidth="2" />
          <text x="14" y="109">Turns 1 to 4 (your messages and replies)</text>
          <rect x="0" y="132" width="300" height="40" rx="8" fill="#fff" stroke="#f7a61b" strokeWidth="3" />
          <text x="14" y="157">Turn 5 (your new message)</text>
          <line x1="308" y1="104" x2="358" y2="104" stroke="#0b5394" strokeWidth="3" />
          <path d="M358 96 l12 8 l-12 8z" fill="#0b5394" />
          <rect x="376" y="62" width="150" height="84" rx="10" fill="#0b5394" />
          <text x="451" y="100" textAnchor="middle" fill="#fff" fontWeight="700">LLM</text>
          <text x="451" y="120" textAnchor="middle" fill="#fff" fontSize="12">(weights frozen)</text>
          <line x1="534" y1="104" x2="582" y2="104" stroke="#0b5394" strokeWidth="3" />
          <path d="M582 96 l12 8 l-12 8z" fill="#0b5394" />
          <rect x="602" y="82" width="118" height="44" rx="8" fill="#fff" stroke="#1a98cb" strokeWidth="2" />
          <text x="661" y="109" textAnchor="middle">Reply</text>
          <text x="376" y="172" fontSize="12" fontStyle="italic">Nothing is kept after the reply.</text>
        </g>
      </svg>
    </figure>
  );
}

function RepeatedTokensDiagram() {
  return (
    <figure className={styles.diagram}>
      <svg viewBox="0 0 720 220" role="img" aria-label="Input tokens read per turn: 560 on turn 1, 2,110 on turn 6, 3,970 on turn 12. The new text each turn stays at 310 tokens while the re-read history grows.">
        <g fontFamily="Arial, sans-serif" fontSize="13" fill="#14202b">
          <text x="0" y="16" fontWeight="700" fontSize="15">The same words, read again and again</text>
          <text x="0" y="64">Turn 1</text>
          <rect x="64" y="44" width="31.5" height="30" rx="4" fill="#1a98cb" />
          <rect x="95.5" y="44" width="39" height="30" fill="#f7a61b" />
          <text x="142.5" y="64" fontWeight="600">560 tokens</text>
          <text x="0" y="110">Turn 6</text>
          <rect x="64" y="90" width="226.7" height="30" rx="4" fill="#1a98cb" />
          <rect x="290.7" y="90" width="39" height="30" fill="#f7a61b" />
          <text x="337.7" y="110" fontWeight="600">2,110 tokens</text>
          <text x="0" y="156">Turn 12</text>
          <rect x="64" y="136" width="461" height="30" rx="4" fill="#1a98cb" />
          <rect x="525" y="136" width="39" height="30" fill="#f7a61b" />
          <text x="572" y="156" fontWeight="600">3,970 tokens</text>
          <rect x="64" y="186" width="14" height="14" fill="#1a98cb" />
          <text x="84" y="198" fontSize="12">Re-read history and system prompt</text>
          <rect x="320" y="186" width="14" height="14" fill="#f7a61b" />
          <text x="340" y="198" fontSize="12">New text this turn (310 tokens)</text>
          <text x="0" y="216" fontSize="12" fontStyle="italic">Cost grows with the length of the conversation, not with how much you said.</text>
        </g>
      </svg>
    </figure>
  );
}

export default function LlmMemoryArticlePage() {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/aihelpcenter">AI Help Center</Link> ›{" "}
        <Link href="/aihelpcenter/genai-llm">GenAI / LLM</Link> › Generative AI Beginner Guides ›{" "}
        <strong>Do LLMs Remember Previous Conversations?</strong>
      </nav>

      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <div className={styles.pill}>GenAI / LLM · Beginner Guide</div>
            <h1>Do LLMs Remember Previous Conversations? How AI Memory Really Works</h1>
            <p className={styles.subtitle}>Why a model starts every request blank, how apps fake memory with your own text, and when you are better off with no memory at all.</p>
            <div className={styles.meta}>
              <span className={styles.authorMeta}>
                <span className={styles.authorAvatars} aria-hidden="true">
                  <Image src={PrateekAgrawal} alt="" width={28} height={28} />
                  <Image src={EeshaniAgrawal} alt="" width={28} height={28} />
                </span>
                By&nbsp;
                <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a>
                &nbsp;&amp;&nbsp;
                <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a>
              </span>
              <span>10 min read</span>
              <span>Published 7 Oct 2026</span>
              <span>Last reviewed 7 Oct 2026</span>
            </div>
          </div>
          <div className={styles.heroCard}>
            <div className={styles.heroCardTitle}>Quick insight</div>
            <div className={styles.heroCardBody}>
              <p><strong>The model has no memory. The app has a notebook.</strong> Every request starts blank. The app copies your earlier messages, and any saved notes, back onto the page before the model reads it. Remove the notebook and the model has never met you.</p>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.layout}>
        <main className={styles.article}>
          <p className={styles.answer}>No. A large language model (LLM) does not remember previous conversations on its own. Its learned knowledge is fixed after training, and each reply is built only from the text sent in that request. What feels like memory is the app re-sending your earlier messages, or saved notes, along with your new message.</p>

          <section className={styles.card} id="do-llms-remember-anything-at-all">
            <div className={styles.pill}>GenAI / LLM</div>
            <h2>Do LLMs remember anything at all?</h2>
            <p><strong>An LLM keeps what it learned in training and nothing from your conversations.</strong> A large language model (LLM) is a model trained on huge amounts of text to predict the next piece of text; ChatGPT, Claude and Gemini are all built on LLMs. Training adjusts its weights, the billions of numbers that encode patterns in language. When training ends, the weights are frozen. Chatting with the model does not change them.</p>
            <p>So “memory” means two different things, and most confusion comes from mixing them up:</p>
            <DataTable
              headers={["Kind of memory", "What it is", "Shared across users?", "Changes when you chat?"]}
              rows={[
                ["Learned knowledge", "Patterns stored in the weights during training", "Yes, identical for everyone", "No"],
                ["Working memory", "The text in front of the model for this one request", "No, built per request", "Yes, rebuilt every time"],
              ]}
            />
            <p>The second kind is called the <Link href="/aihelpcenter/genai-llm/how-do-llm-context-windows-work">context window</Link>, and it is where all “remembering” actually happens.</p>
          </section>

          <section className={styles.card} id="how-does-a-chatbot-appear-to-remember-what-you-said-earlier">
            <div className={styles.pill}>GenAI / LLM</div>
            <h2>How does a chatbot appear to remember what you said earlier?</h2>
            <p><strong>The application re-sends the whole conversation with every new message.</strong> The model itself is stateless, which means it keeps no record between requests. Anthropic&apos;s API documentation says this directly: the Messages API is stateless, so you always send the full conversational history.</p>
            <p>When you send your fifth message, the app builds one package containing:</p>
            <ol>
              <li>A hidden system prompt: instructions from the app&apos;s developer, such as tone and rules</li>
              <li>Your first four messages and the model&apos;s four replies</li>
              <li>Your fifth message</li>
            </ol>
            <p>The model reads all of it as one long document and writes the next reply. Once the reply is returned, nothing is retained.</p>
            <ModelRequestDiagram />
            <div className={styles.callout}>
              <div className={styles.eyebrow}>Behind the code</div>
              <p>Here is the whole trick in a few lines. The “memory” is a Python list that the app owns, not something inside the model.</p>
              <div className={styles.codeBlock}>
                <div className={styles.fileName}>chat_loop.py</div>
                <pre><code>{`history = []                                   # lives in the app, not the model

def chat(user_text):
    history.append({"role": "user", "content": user_text})
    reply = call_model(messages=history)       # the model sees ALL of history
    history.append({"role": "assistant", "content": reply})
    return reply`}</code></pre>
              </div>
              <p>Delete <code className={styles.inlineCode}>history</code> and the next call knows nothing about the earlier ones. (<code className={styles.inlineCode}>call_model</code> stands in for whichever provider&apos;s API you use.)</p>
            </div>
          </section>

          <section className={styles.card} id="why-does-the-ai-forget-things-in-the-same-chat">
            <div className={styles.pill}>GenAI / LLM</div>
            <h2>Why does the AI forget things in the same chat?</h2>
            <p><strong>Because the conversation outgrew the context window, or the detail got lost in a long input.</strong> The context window is the maximum number of tokens a model can read in one request. A token is the unit of text a model reads: a whole word, part of a word or a punctuation mark. Everything has to fit: system prompt, history, attached files and the reply being written.</p>
            <p>When a chat gets too long, the app has to cut something. The common strategies are dropping the oldest messages or replacing them with a summary. Either way, detail is lost, and the model is not told what is missing. This is why a rule you set an hour ago, such as “use rupees, not dollars”, can quietly stop being followed.</p>
            <p>A bigger window does not fully fix it. Liu and colleagues (published in <em>Transactions of the ACL</em>, 2024) found that models often use information at the start or end of a long input more reliably than information buried in the middle. Fitting in the window is not the same as being used well.</p>
            <div className={`${styles.callout} ${styles.rule}`}>
              <div className={styles.eyebrow}>Rule of thumb</div>
              <p>For anything that must survive a long chat, restate it. Put standing instructions at the top of your prompt, and repeat the key constraint in the message where it matters.</p>
            </div>
          </section>

          <section className={styles.card} id="how-do-the-memory-features-in-ai-assistants-work">
            <div className={styles.pill}>GenAI / LLM</div>
            <h2>How do the memory features in AI assistants work?</h2>
            <p><strong>They save short notes about you in the app&apos;s own storage and paste the relevant ones into your prompt later.</strong> Many assistants now offer a memory setting. The model never holds the fact. Say the app saves “Arjun reports in INR lakhs”. Next week, when you ask for a summary, the app adds that line to the prompt behind the scenes, and only then does the model see it.</p>
            <p>That has three practical consequences:</p>
            <ul>
              <li><strong>Memory is text, so it can be wrong.</strong> If a saved note is stale or mistaken, it will be pasted into every future prompt.</li>
              <li><strong>Memory uses tokens.</strong> Saved notes sit inside the same window as everything else.</li>
              <li><strong>You can usually see and delete it.</strong> Whether a memory feature exists, and whether it is on by default, varies by product, so check the settings of the tool you use.</li>
            </ul>
          </section>

          <section className={styles.card} id="what-are-the-ways-to-give-an-llm-memory">
            <div className={styles.pill}>GenAI / LLM</div>
            <h2>What are the ways to give an LLM memory?</h2>
            <p><strong>There are five common approaches, and each solves a different problem.</strong></p>
            <DataTable
              headers={["Approach", "Where the information lives", "Survives a new chat?", "Best for", "Main failure"]}
              rows={[
                ["Full history in the window", "Inside the current prompt", "No", "Short, single-session tasks", "Runs out of space; cost grows each turn"],
                ["Summarised history", "A running summary in the prompt", "Only if the app saves it", "Long sessions", "The summary drops a detail that later matters"],
                ["Retrieval (RAG)", "An external database, searched per question", "Yes", "Large document sets, company knowledge", "Fetches the wrong passage; poor chunking"],
                ["Saved memory notes", "App storage, inserted into prompts", "Yes, if the feature is on", "Preferences and recurring context", "Stale or wrong notes; privacy exposure"],
                ["Fine-tuning", "Inside the model’s weights", "Yes, for everyone", "Style, format, narrow behaviours", "Poor at storing facts; costly to update"],
              ]}
            />
            <p>Retrieval-augmented generation (RAG) means searching an external store for relevant passages and placing them in the prompt before the model answers. Lewis and colleagues introduced the method in 2020. For when to retrieve and when to retrain, see <Link href="/aihelpcenter/genai-llm/rag-vs-finetuning">RAG vs fine-tuning</Link>.</p>
            <p>Researchers are also building agents that manage their own memory. Packer and colleagues (MemGPT, 2023) proposed treating the context window like a computer&apos;s fast memory, with the agent moving information in and out of slower storage as needed. Every one of these designs ends the same way: whatever is retrieved still has to be placed in the window before it can affect an answer.</p>
          </section>

          <section className={styles.card} id="does-talking-to-an-llm-train-it">
            <div className={styles.pill}>GenAI / LLM</div>
            <h2>Does talking to an LLM train it?</h2>
            <p><strong>Not in real time. Your messages do not change the model&apos;s weights while you chat.</strong> Two other things are easy to confuse with it.</p>
            <p>First, models can reproduce fragments of text they saw during training. That is learned knowledge, not memory of your conversation. Second, whether your chats are later used to improve future models depends on the provider&apos;s policy and your account settings. These vary by product and plan and change over time.</p>
            <p>Read the data-use terms before you paste anything confidential. For company work, use the enterprise plan or API terms your organisation has approved.</p>
          </section>

          <section className={styles.card} id="when-don-t-you-need-ai-memory">
            <div className={styles.pill}>Honest limits</div>
            <h2>When don&apos;t you need AI memory?</h2>
            <p><strong>Often.</strong> In our experience training teams on generative AI, people add memory layers to systems that would be simpler, cheaper and more reliable without them.</p>
            <DataTable
              headers={["If your situation is…", "Memory is…", "Do this instead"]}
              rows={[
                ["Classifying tickets or extracting fields from invoices, one request at a time", "✗ Unnecessary", "Send each item independently with a fixed prompt"],
                ["An audit-sensitive task where the same input must give the same output", "✗ A risk", "Send identical inputs every time; avoid hidden saved notes"],
                ["A knowledge base of a few dozen pages", "✗ More machinery than needed", "Put the pages straight into the prompt; skip the retrieval pipeline"],
                ["Teaching the model facts that change monthly", "✗ The wrong tool (fine-tuning)", "Use retrieval and update the source documents"],
                ["A support assistant that must recall a customer’s open case across sessions", "✓ Genuinely useful", "Store the case summary in your database and insert it per request"],
              ]}
            />
            <div className={`${styles.callout} ${styles.opinion}`}>
              <div className={styles.eyebrow}>Strong opinion</div>
              <p>Start stateless. Every piece of memory is data you must secure, expire and delete on request, and a way for yesterday&apos;s mistake to reach today&apos;s answer. Add the simplest memory that fixes a failure you have actually observed, and nothing more.</p>
            </div>
          </section>

          <section className={styles.card} id="a-worked-example-a-support-bot-over-twelve-turns">
            <div className={styles.pill}>Worked example</div>
            <h2>A worked example: a support bot over twelve turns</h2>
            <p>The numbers below are illustrative arithmetic with assumed sizes, not measured data. Assume a support chat where the system prompt is 500 tokens, each user message is about 60 tokens, and each model reply is about 250 tokens.</p>
            <DataTable
              headers={["Turn", "Input tokens the model reads", "New text added this turn"]}
              rows={[
                ["1", "560", "310"],
                ["3", "1,180", "310"],
                ["6", "2,110", "310"],
                ["9", "3,040", "310"],
                ["12", "3,970", "310"],
                [<strong key="total-turns">Across all 12 turns</strong>, <strong key="input-total">~27,180</strong>, <strong key="new-total">~3,720</strong>],
              ]}
            />
            <p>The conversation contains about 3,720 tokens of actual dialogue (12 × 310). But the model reads about 27,180 input tokens in total, because earlier turns are re-sent each time. That is roughly seven times the text anyone wrote. Providers offer techniques such as prompt caching to reduce the cost of re-reading unchanged text, but the principle holds: the model conditions on the whole history on every turn.</p>
            <RepeatedTokensDiagram />
            <p>The practical fix is to summarise. Once a chat passes a few thousand tokens, ask the model for a short summary of decisions and constraints, then start a new chat with only that summary. You pay for a few hundred tokens instead of thousands, and you can check the summary for errors before the model builds on it.</p>
          </section>

          <section className={`${styles.card} ${styles.conclusion}`} id="how-can-you-use-ai-memory-more-safely-and-effectively">
            <div className={styles.pill}>GenAI / LLM</div>
            <h2>How can you use AI memory more safely and effectively?</h2>
            <p><strong>Own the memory yourself: keep it short, keep it visible, and keep it checkable.</strong></p>
            <ul className={styles.checklist}>
              <li>Find the memory and data settings in the assistant you use, and decide what you are comfortable having saved.</li>
              <li>Open your saved memories now and delete anything stale, wrong or confidential.</li>
              <li>Keep a project brief: goals, constraints and decisions so far. Paste it at the start of each new chat instead of letting one chat run for hours.</li>
              <li>Restate critical instructions in the message where they matter, not only at the start of the chat.</li>
              <li>If you build with an API, log one full request and read exactly what the model receives.</li>
              <li>Count the tokens in a typical conversation from your own use case. If it sits well inside the window, send full history and add nothing else.</li>
              <li>Test long inputs with the answer placed in the middle, since that is where models are weakest.</li>
            </ul>
            <p>Here is a project brief you can adapt and paste at the start of a fresh chat:</p>
            <div className={styles.prompt}>
              <div className={styles.eyebrow}>Example prompt · Project brief for a new chat</div>
              PROJECT: Monthly sales review for the eastern region.<br />
              DECISIONS SO FAR: All figures in INR lakhs. Compare against the same month last year.<br />
              CONSTRAINTS: No external data. Flag any number you are unsure about.<br />
              TASK: Summarise the attached March report in five bullet points.
            </div>
          </section>

          <section className={styles.card} id="frequently-asked-questions">
            <div className={styles.pill}>FAQ</div>
            <h2>Frequently asked questions</h2>
            {faqs.map(({ question, answer }) => (
              <div key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            ))}
          </section>

          <section className={styles.card} id="sources">
            <div className={styles.pill}>Sources</div>
            <h2>Sources</h2>
            <ul className={styles.sourceList}>
              <li>Anthropic. “Messages API examples” (the API is stateless; send the full conversation history). <a href="https://docs.anthropic.com/en/api/messages-examples" target="_blank" rel="noopener noreferrer">Anthropic documentation</a></li>
              <li>Liu, N. F. et al. “Lost in the Middle: How Language Models Use Long Contexts.” <em>Transactions of the ACL</em>, 2024. <a href="https://arxiv.org/abs/2307.03172" target="_blank" rel="noopener noreferrer">Read the paper</a></li>
              <li>Lewis, P. et al. “Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.” 2020. <a href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener noreferrer">Read the paper</a></li>
              <li>Packer, C. et al. “MemGPT: Towards LLMs as Operating Systems.” 2023. <a href="https://arxiv.org/abs/2310.08560" target="_blank" rel="noopener noreferrer">Read the paper</a></li>
              <li>Current context-window sizes: <a href="https://docs.claude.com/en/docs/build-with-claude/context-windows" target="_blank" rel="noopener noreferrer">Anthropic</a>, <a href="https://platform.openai.com/docs/models" target="_blank" rel="noopener noreferrer">OpenAI models</a>, and <a href="https://ai.google.dev/gemini-api/docs/long-context" target="_blank" rel="noopener noreferrer">Google Gemini</a>.</li>
            </ul>
          </section>

          <section className={styles.card} id="related-articles">
            <div className={styles.pill}>Keep reading</div>
            <h2>Related articles</h2>
            <ul className={styles.relatedList}>
              <li><Link href="/aihelpcenter/genai-llm/how-do-llm-context-windows-work">How do LLM context windows work?</Link></li>
              <li><Link href="/aihelpcenter/genai-llm/what-is-generative-ai">What is generative AI? A plain-English starting point</Link></li>
              <li><Link href="/aihelpcenter/genai-llm/how-are-llms-trained">How are LLMs trained?</Link></li>
              <li><Link href="/aihelpcenter/genai-llm/rag-vs-finetuning">RAG vs fine-tuning: which one should you use?</Link></li>
              <li><Link href="/aihelpcenter/genai-llm/what-an-embedding-actually-is">What an embedding actually is</Link></li>
            </ul>
            <p>More in <Link href="/aihelpcenter/genai-llm">GenAI / LLM</Link>.</p>
            <div className={styles.cta}>
              <p><strong>Find your knowledge gaps on generative AI.</strong> Start your PrepAI Diagnose: a short quiz on this topic, with feedback on what to study next.</p>
              <a className={styles.ctaButton} href="https://prepai.ivyproschool.com" target="_blank" rel="noopener noreferrer">Start your PrepAI Diagnose</a>
              <p>Want to build assistants that remember the right things, with retrieval, summarisation pipelines and evaluation? Our <Link href="/courses/generative-ai-course">Advanced Generative AI Course</Link> covers it hands-on. WhatsApp or call +91 7676882222.</p>
            </div>
          </section>
        </main>

        <aside className={styles.sidebar}>
          <div className={styles.sticky}>
            <div className={styles.sideBox}>
              <div className={styles.sideLabel}>ROADMAP</div>
              {roadmap.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
            </div>
            <div className={`${styles.sideBox} ${styles.author}`}>
              <div className={styles.sideLabel}>WRITTEN BY</div>
              <div className={styles.authorCard}>
                <Image src={PrateekAgrawal} alt="Prateek Agrawal" width={52} height={52} />
                <div>
                  <a className={styles.authorName} href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer">Prateek Agrawal</a>
                  <p>Founder, Ivy Professional School</p>
                </div>
                <a className={styles.linkedin} href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" aria-label="Prateek Agrawal on LinkedIn"><LinkedInIcon /></a>
              </div>
              <div className={styles.authorCard}>
                <Image src={EeshaniAgrawal} alt="Eeshani Agrawal" width={52} height={52} />
                <div>
                  <a className={styles.authorName} href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer">Eeshani Agrawal</a>
                  <p>Co-founder, Ivy Professional School</p>
                </div>
                <a className={styles.linkedin} href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" aria-label="Eeshani Agrawal on LinkedIn"><LinkedInIcon /></a>
              </div>
              <a className={styles.companyLinkedin} href="https://www.linkedin.com/school/ivy-professional-school" target="_blank" rel="noopener noreferrer"><LinkedInIcon /> Follow Ivy Professional School</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
