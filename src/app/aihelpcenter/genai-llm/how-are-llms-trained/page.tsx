import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown, BookOpen, BrainCircuit, Briefcase, Calendar, ChevronRight,
  Clock, Cpu, GraduationCap, Layers3, RefreshCw, ShieldCheck, Sparkles,
} from "lucide-react";
import ivy from "@/assests/ivy.png";
import PrateekAgarwal from "@/assests/pratilk.webp";
import eeshani from "@/assests/eeshani.webp";

const sections = [
  { id: "how-training-works", label: "How LLM training works" },
  { id: "training-process", label: "The training process" },
  { id: "training-data", label: "Training data" },
  { id: "pretraining", label: "Pretraining" },
  { id: "learning-loop", label: "The learning loop" },
  { id: "next-token", label: "Next-token prediction" },
  { id: "parameters", label: "Parameters" },
  { id: "compute", label: "Computing power" },
  { id: "fine-tuning", label: "Fine-tuning" },
  { id: "alignment", label: "After pretraining" },
  { id: "understanding", label: "Does an LLM understand?" },
  { id: "mental-model", label: "The complete mental model" },
];

const Code = ({ title, children }: { title: string; children: string }) => (
  <div className="my-8 overflow-hidden rounded-2xl border-l-[6px] border-[#009fda] bg-[#07111f] shadow-xl">
    <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
      <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">{title}</span>
      <span className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-red-400"/><i className="h-2.5 w-2.5 rounded-full bg-amber-300"/><i className="h-2.5 w-2.5 rounded-full bg-emerald-400"/></span>
    </div>
    <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200 sm:p-7"><code>{children}</code></pre>
  </div>
);

const Heading = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="mb-6 mt-16 scroll-mt-24 text-2xl font-extrabold tracking-tight text-[#013a81] sm:text-3xl">{children}</h2>
);

const LinkedInIcon = () => <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M6.5 8.3H3.2V19h3.3V8.3ZM4.8 3A1.9 1.9 0 1 0 4.8 6.8 1.9 1.9 0 0 0 4.8 3ZM19 12.9c0-3.2-1.7-4.9-4-4.9-1.8 0-2.7 1-3.1 1.7V8.3H8.6V19h3.3v-5.3c0-1.4.3-2.8 2-2.8 1.7 0 1.7 1.6 1.7 2.9V19H19v-6.1Z"/></svg>;

function AuthorityBox() {
  const people = [
    { name: "Prateek Agarwal", role: "Founder · 20+ years as an AI/ML Leader", image: PrateekAgarwal, href: "https://www.linkedin.com/in/prateekagrawal" },
    { name: "Eeshani Agrawal", role: "Co-Founder · 20+ years as a Data/AI Consultant", image: eeshani, href: "https://www.linkedin.com/in/eeshani-agrawal-b674045" },
  ];
  return <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 shadow-lg">
    <h3 className="mb-1 flex items-center justify-center gap-2 font-bold text-gray-900"><ShieldCheck className="h-5 w-5 text-blue-600"/> Industry Authority</h3>
    <p className="mb-4 text-center text-xs text-gray-600">Content reviewed by Ivy Pro School founders</p>
    <div className="space-y-3">{people.map((person) => <div key={person.name} className="rounded-xl bg-white p-3 shadow-sm"><div className="flex items-center gap-3"><Image src={person.image} alt={person.name} width={48} height={48} className="h-12 w-12 rounded-full border-2 border-blue-200 object-cover"/><div className="min-w-0 flex-1"><p className="text-sm font-bold text-gray-900">{person.name}</p><p className="text-xs leading-5 text-gray-500">{person.role}</p></div><a href={person.href} target="_blank" rel="noopener noreferrer" aria-label={`${person.name} on LinkedIn`} className="rounded-lg bg-blue-50 p-2 text-blue-600 hover:bg-blue-100"><LinkedInIcon/></a></div></div>)}</div>
    <div className="mt-4 flex justify-between border-t border-blue-100 pt-4 text-xs text-gray-600"><span className="flex items-center gap-1"><Briefcase size={14}/> Industry Experts</span><span className="flex items-center gap-1"><GraduationCap size={14}/> 20+ Years Each</span></div>
  </div>;
}

const courses = [
  ["AI Product Manager", "/courses/ai-product-manager-course"], ["Data Science & ML", "/courses/data-science-and-ml-course"],
  ["Data Engineering", "/courses/data-engineering-course"], ["Data Analytics & Gen AI", "/courses/data-analytics-and-generative-ai-course"],
  ["Generative AI", "/courses/generative-ai-course"], ["AI & Machine Learning", "/courses/ai-machine-learning-course"],
];

export default function HowAreLLMsTrainedPage() {
  return <div className="min-h-screen bg-slate-50 font-sans text-gray-900">
    <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6"><nav className="mb-6 flex flex-wrap items-center gap-2 text-sm font-medium text-gray-500"><Link href="/aihelpcenter" className="hover:text-[#009fda]">Home</Link><ChevronRight size={14}/><Link href="/aihelpcenter/genai-llm" className="hover:text-[#009fda]">GenAI / LLM</Link><ChevronRight size={14}/><span className="text-[#009fda]">How Are LLMs Trained?</span></nav></div>

    <header className="relative overflow-hidden bg-[#013a81] px-4 py-14 text-white sm:px-6 sm:py-20">
      <div className="absolute -right-28 -top-36 h-96 w-96 rounded-full bg-[#009fda]/30 blur-3xl"/><div className="absolute -bottom-48 left-1/4 h-96 w-96 rounded-full bg-indigo-500/25 blur-3xl"/>
      <div className="relative mx-auto max-w-7xl"><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200"><BrainCircuit size={16}/> LLM fundamentals</div>
        <h1 className="max-w-5xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">How Are LLMs Trained?</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100 sm:text-xl">Understanding the large language model training process—from tokens and predictions to fine-tuning and alignment.</p>
        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/15 pt-6 text-sm text-blue-100"><div className="flex items-center gap-2"><Image src={PrateekAgarwal} alt="Prateek Agarwal" width={40} height={40} className="h-10 w-10 rounded-full border-2 border-cyan-300 object-cover"/><span>By <strong className="text-white">Prateek Agarwal</strong></span></div><span className="flex items-center gap-2 sm:border-l sm:border-white/20 sm:pl-4"><Calendar size={15}/> August 12, 2026</span><span className="flex items-center gap-2 sm:border-l sm:border-white/20 sm:pl-4"><Clock size={15}/> 16 min read</span></div>
      </div>
    </header>

    <div className="mx-auto -mt-6 max-w-5xl px-4 sm:px-6"><div className="relative grid overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 shadow-xl sm:grid-cols-5 sm:p-7">{[
      ["Raw text", BookOpen], ["Tokens", Layers3], ["Prediction", Sparkles], ["Loss", RefreshCw], ["Learning", BrainCircuit],
    ].map(([label, Icon], i) => <div key={label as string} className="flex items-center justify-center gap-3 py-3 sm:flex-col"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#009fda]"><Icon size={23}/></div><span className="text-sm font-bold text-[#013a81]">{label as string}</span>{i < 4 && <ChevronRight className="ml-auto text-blue-200 sm:absolute sm:hidden"/>}</div>)}</div></div>

    <main className="mx-auto mt-12 max-w-7xl px-4 pb-24 sm:px-6"><div className="grid grid-cols-1 gap-10 lg:grid-cols-4"><article className="lg:col-span-3"><div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-10 lg:p-14">
      <div className="border-l-[6px] border-[#009fda] pl-6"><p className="text-xl font-semibold leading-9 text-[#013a81]">LLM training is the process through which a large language model learns statistical patterns from huge amounts of text so that it can predict, generate, and transform language.</p></div>
      <p className="mt-7 text-lg leading-8 text-gray-600">If you already understand tokenization, you are standing at the right starting point. Tokenization converts text into smaller units called tokens. Training begins after those tokens have been converted into numbers that a neural network can process.</p>
      <div className="my-9 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-6 ring-1 ring-blue-100"><p className="font-bold text-[#013a81]">The core loop</p><p className="mt-2 leading-7 text-gray-700">The model sees a sequence of tokens, predicts what comes next, compares its prediction with the correct answer, measures the error, and adjusts its internal parameters. This happens again and again across a very large dataset.</p></div>

      <Heading id="how-training-works">How Are LLMs Trained?</Heading>
      <p className="text-lg leading-8 text-gray-600">Large language models do not learn language by memorising a textbook. They repeatedly observe patterns across enormous collections of text. If a model sees “The sun rises in the ___”, it produces probabilities for many possible next tokens. When “east” receives too little probability, training adjusts the model so the correct continuation becomes more likely in a similar context.</p>
      <p className="mt-5 text-lg leading-8 text-gray-600">Large language model training is repeated prediction followed by repeated correction.</p>
      <Code title="A simplified training example">{`sentence = ["The", "sun", "rises", "in", "the", "east"]

input_tokens = sentence[:-1]
target_token = sentence[-1]

print("Input:", input_tokens)
print("Target:", target_token)`}</Code>
      <p className="text-lg leading-8 text-gray-600">The model receives the earlier tokens as context and is asked to predict the next token. Real models perform this operation across billions or trillions of token positions, depending on their scale and dataset.</p>

      <Heading id="training-process">What Is the LLM Training Process?</Heading>
      <div className="space-y-5">{[
        ["1", "Collect and prepare training data", "Books, articles, websites, documentation, code and conversations are cleaned, filtered, deduplicated, formatted and tokenized."],
        ["2", "Convert tokens into numbers", "Each token maps to an ID and then to an embedding—a useful numerical representation that the network can process."],
        ["3", "Pass the sequence through the model", "Transformer layers and self-attention help the model weigh relationships among tokens in context."],
      ].map(([n, title, text]) => <div key={n} className="flex gap-5 rounded-2xl border border-slate-200 p-5"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#013a81] font-black text-white">{n}</span><div><h3 className="font-bold text-gray-900">{title}</h3><p className="mt-1 leading-7 text-gray-600">{text}</p></div></div>)}</div>
      <Code title="Tokens become IDs">{`vocabulary = {"The": 101, "sun": 245, "rises": 812,
              "in": 56, "the": 34, "east": 972}

tokens = ["The", "sun", "rises", "in", "the"]
token_ids = [vocabulary[token] for token in tokens]

print(token_ids)  # [101, 245, 812, 56, 34]`}</Code>
      <p className="text-lg leading-8 text-gray-600">The number 245 does not itself mean “sun”; it is only an identifier. Meaningful mathematical representations develop through embeddings and subsequent neural-network layers. In a sentence such as “Riya kept the laptop on the table because it was heavy,” attention helps the model identify which earlier words matter when processing “it.”</p>

      <Heading id="training-data">What Kind of Training Data Do LLMs Use?</Heading>
      <p className="text-lg leading-8 text-gray-600">A broad dataset can include explanatory writing, technical documentation, news-style writing, programming code, question-and-answer formats, conversations, academic material and structured information represented as text.</p>
      <div className="my-7 grid gap-3 sm:grid-cols-2">{["Explanatory writing", "Technical documentation", "Programming code", "Conversations", "Academic material", "Structured information"].map(item => <div key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 font-medium text-gray-700"><span className="h-2 w-2 rounded-full bg-[#009fda]"/>{item}</div>)}</div>
      <p className="text-lg leading-8 text-gray-600">Size alone is not enough. Duplicate, poorly formatted, irrelevant or low-quality content influences what a model learns. Think of it like preparing study material: more pages do not automatically create a better lesson.</p>

      <Heading id="pretraining">How Does LLM Pretraining Work?</Heading>
      <p className="text-lg leading-8 text-gray-600">Pretraining is where a model develops broad language capabilities before adaptation for narrower tasks. For many generative models, the central objective is next-token prediction.</p>
      <div className="my-8 rounded-2xl border border-blue-100 bg-blue-50 p-6"><p className="font-mono text-sm text-gray-600">Artificial intelligence is changing the way people …</p><div className="mt-5 space-y-3">{[["work",32],["learn",18],["communicate",11],["travel",2],["banana",0.01]].map(([word, pct]) => <div key={word as string} className="grid grid-cols-[7rem_1fr_3rem] items-center gap-3 text-sm"><span className="font-bold text-[#013a81]">{word}</span><span className="h-2 overflow-hidden rounded-full bg-white"><i className="block h-full rounded-full bg-[#009fda]" style={{width: `${pct}%`}}/></span><span className="text-right text-gray-500">{pct}%</span></div>)}</div></div>
      <p className="text-lg leading-8 text-gray-600">Early predictions may be poor. Repeated exposure gradually improves the probability distribution. The model learns distributed patterns rather than following a giant collection of manually written grammar rules.</p>

      <Heading id="learning-loop">How Do Large Language Models Learn Patterns?</Heading>
      <p className="text-lg leading-8 text-gray-600">Focus on one idea: error reduction. The prediction is compared with the correct next token, and a mathematical function measures how far it was from the expected answer. This measurement is called <strong className="text-gray-900">loss</strong>.</p>
      <Code title="The learning cycle">{`prediction = model(input_tokens)

loss = loss_function(prediction, target_token)

loss.backward()
optimizer.step()
optimizer.zero_grad()`}</Code>
      <div className="grid gap-4 sm:grid-cols-2">{[
        ["Prediction", "The model processes the input and produces scores or probabilities for possible next tokens."],
        ["Loss", "The loss function produces a numerical signal showing how much the prediction needs to improve."],
        ["Backpropagation", "Gradients show which parameters should change, and in which direction, to reduce the error."],
        ["Optimizer", "The optimizer applies those gradients, then clears them so the next training step can begin."],
      ].map(([title, text]) => <div key={title} className="rounded-2xl border border-slate-200 p-5"><h3 className="font-bold text-[#013a81]">{title}</h3><p className="mt-2 leading-7 text-gray-600">{text}</p></div>)}</div>

      <Heading id="next-token">What Is Next-Token Prediction?</Heading>
      <p className="text-lg leading-8 text-gray-600">One sentence creates many learning opportunities. From “AI can help employees analyze data faster,” the model learns successive pairs: AI → can; AI can → help; AI can help → employees; and so on.</p>
      <Code title="Create context-target pairs">{`tokens = ["AI", "can", "help", "employees",
          "analyze", "data", "faster"]

for i in range(1, len(tokens)):
    context = tokens[:i]
    target = tokens[i]
    print("Context:", context, "| Target:", target)`}</Code>
      <p className="text-lg leading-8 text-gray-600">Across a massive body of text, the model encounters grammar, concepts, programming syntax, writing styles and relationships among ideas. Its ability to predict appropriate continuations improves over time.</p>

      <Heading id="parameters">Why Does the Model Need So Many Parameters?</Heading>
      <p className="text-lg leading-8 text-gray-600">Parameters are adjustable numerical values inside the network. A single parameter does not neatly equal one fact or topic. Knowledge and behaviour emerge through interactions among large numbers of parameters across many layers.</p>
      <div className="my-8 rounded-2xl bg-[#013a81] p-7 text-center text-white"><p className="text-sm font-bold uppercase tracking-widest text-cyan-200">The update rule</p><p className="mt-3 font-mono text-lg sm:text-2xl">new parameter = old parameter − learning rate × gradient</p></div>
      <p className="text-lg leading-8 text-gray-600">The gradient indicates the useful direction of change. The learning rate controls its size—much like focusing a camera, where a change that is too large overshoots and one that is too small takes too many attempts.</p>

      <Heading id="compute">Why Does LLM Training Require So Much Computing Power?</Heading>
      <p className="text-lg leading-8 text-gray-600">Every batch of tokens passes through many layers that perform operations on large numerical matrices. The system then computes predictions, loss and gradients. Multiply this by huge datasets, long sequences, many layers, billions of parameters and repeated optimisation steps.</p>
      <div className="my-8 grid gap-4 sm:grid-cols-3">{[[Cpu,"AI accelerators","GPUs and specialised hardware"],[Layers3,"Distributed training","Work shared across machines"],[RefreshCw,"Operations","Checkpoints, memory and recovery"]].map(([Icon,title,text]) => <div key={title as string} className="rounded-2xl bg-slate-50 p-5"><Icon className="mb-4 text-[#009fda]"/><h3 className="font-bold text-gray-900">{title as string}</h3><p className="mt-2 text-sm leading-6 text-gray-600">{text as string}</p></div>)}</div>

      <Heading id="fine-tuning">How Is Fine-Tuning Different from Pretraining?</Heading>
      <p className="text-lg leading-8 text-gray-600">Pretraining gives a model broad capability. Fine-tuning adapts an already pretrained model for a specific task, domain or response style. It is not learning language again from the beginning.</p>
      <Code title="A fine-tuning example">{`training_example = {
    "instruction": "Summarize the complaint in one sentence.",
    "input": "The order arrived three days late and damaged.",
    "output": "The customer reported delayed delivery and damaged packaging."
}`}</Code>
      <p className="text-lg leading-8 text-gray-600">The instruction defines the task, the input supplies information, and the desired output demonstrates the expected response. Depending on the technique, fine-tuning may update many model parameters or only a small set of additional ones.</p>

      <Heading id="alignment">What Happens After Pretraining and Fine-Tuning?</Heading>
      <p className="text-lg leading-8 text-gray-600">A useful assistant can require additional instruction examples, preference information, feedback signals and alignment techniques. These stages help models follow instructions, use requested formats, handle conversations, explain clearly and reduce undesirable outputs.</p>
      <div className="my-9 flex flex-col items-center gap-3 text-center">{["General language learning", "Pretrained model", "Task or instruction adaptation", "More useful model behaviour"].map((item, index) => <div key={item} className="contents"><div className="w-full max-w-lg rounded-xl border border-blue-100 bg-blue-50 px-5 py-3 font-bold text-[#013a81]">{item}</div>{index < 3 && <ArrowDown className="text-[#009fda]"/>}</div>)}</div>

      <Heading id="understanding">Does an LLM Really “Understand” What It Learns?</Heading>
      <p className="text-lg leading-8 text-gray-600">The careful answer is that the model learns numerical patterns that improve prediction and generation. Those patterns can support explanation, translation, summarisation, coding, classification and multi-step problem solving, while the underlying objective remains mathematical.</p>
      <div className="my-8 rounded-2xl border-l-[6px] border-amber-400 bg-amber-50 p-6"><h3 className="font-bold text-amber-900">Why confident errors happen</h3><p className="mt-2 leading-7 text-amber-900/80">Generating a statistically plausible continuation and verifying whether every statement is factually correct are different operations. This is why a fluent answer can still be wrong.</p></div>

      <Heading id="mental-model">A Simple Mental Model for the Entire Process</Heading>
      <div className="my-8 grid gap-2 sm:grid-cols-2">{["Raw text", "Cleaning and filtering", "Tokenization", "Token IDs", "Embeddings", "Transformer layers", "Next-token prediction", "Loss calculation", "Backpropagation", "Parameter update", "Repeat across massive data", "Pretrained model", "Fine-tuning and alignment", "Usable LLM application"].map((item, index) => <div key={item} className="flex items-center gap-4 rounded-xl border border-slate-200 p-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#009fda] text-xs font-black text-white">{index + 1}</span><span className="font-semibold text-gray-700">{item}</span></div>)}</div>
      <p className="text-lg leading-8 text-gray-600">Think of a student practising mathematics: attempting thousands of problems, checking each answer, identifying errors and adjusting the method. A neural network learns mathematically rather than like a human, but the analogy makes the repeated prediction-and-correction cycle easier to visualise.</p>

      <div className="mt-16 rounded-[2rem] bg-gradient-to-br from-[#013a81] to-[#005da8] px-6 py-10 text-center text-white"><Sparkles className="mx-auto mb-4 text-cyan-300"/><h2 className="text-2xl font-bold">Final thoughts</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">An LLM receives tokenized text, predicts what comes next, measures its error, sends that error backward through the network and adjusts its parameters. Repeated at enormous scale, this simple loop creates broad language capability. Fine-tuning and alignment then shape it for useful tasks.</p><Link href="/courses/generative-ai-course" className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-bold text-[#013a81] transition hover:bg-cyan-50">Explore Generative AI Course</Link></div>
    </div><div className="mt-7 flex flex-wrap gap-3"><Link href="/aihelpcenter/genai-llm" className="rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-[#013a81] hover:border-[#009fda]">← Back to GenAI / LLM</Link><Link href="/aihelpcenter" className="rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-[#013a81] hover:border-[#009fda]">← All Topics</Link></div></article>

      <aside className="lg:col-span-1"><div className="sticky top-24 space-y-7"><div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"><h4 className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-gray-400">In this article</h4><div className="flex flex-col gap-3">{sections.map(section => <a key={section.id} href={`#${section.id}`} className="border-l-4 border-transparent pl-3 text-sm font-bold leading-5 text-gray-400 transition hover:border-[#009fda] hover:text-[#009fda]">{section.label}</a>)}</div></div><AuthorityBox/><div className="rounded-3xl bg-gradient-to-br from-[#009fda] to-[#013a81] p-5 text-white shadow-2xl"><h3 className="text-center text-xl font-extrabold">Advanced Courses</h3><p className="mb-5 mt-1 text-center text-xs text-blue-100">Fast-track your career with Ivy.</p><div className="space-y-2">{courses.map(([name, href]) => <Link key={href} href={href} className="group flex items-center justify-between rounded-xl p-2 hover:bg-white"><span className="flex items-center gap-3"><Image src={ivy} alt="Ivy Logo" className="h-8 w-10 object-contain"/><span className="text-xs font-bold text-white group-hover:text-[#013a81]">{name}</span></span><span className="group-hover:text-[#013a81]">›</span></Link>)}</div></div></div></aside>
    </div></main>
  </div>;
}
