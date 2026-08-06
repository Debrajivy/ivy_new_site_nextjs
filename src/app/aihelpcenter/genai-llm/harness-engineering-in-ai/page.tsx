import Image from "next/image";
import Link from "next/link";
import { BookOpen, Briefcase, Calendar, ChevronRight, Clock, GraduationCap, ShieldCheck, Star } from "lucide-react";
import ivy from "@/assests/ivy.png";
import PrateekAgarwal from "@/assests/pratilk.webp";
import eeshani from "@/assests/eeshani.webp";
import { harnessEngineeringArticle } from "./article-source";

const majorHeadings = new Set([
  "What Is Harness Engineering in AI?", "How Does Harness Engineering Work for AI Agents?",
  "What Are the Key Components of an AI Harness?", "Why Is Harness Engineering Important in Agentic AI?",
  "How Is Harness Engineering Different from Prompt Engineering?",
  "What Is the Difference Between Context Engineering and Harness Engineering?",
  "What Are Some Practical Harness Engineering Examples?", "How Can Harness Engineering Improve AI Agent Reliability?",
  "Which Tools Are Used for Harness Engineering?", "What Are the Best Practices for Building AI Agent Harnesses?",
  "From Capable Models to Dependable Systems", "SEO Publishing Details", "References and Further Reading",
]);

const subheadings = new Set([
  "A useful mental model", "The Model Supplies Reasoning", "The Harness Supplies Operating Conditions",
  "What Happens Behind This Code?", "Instructions and Task Specifications", "Context Assembly", "Tools and Permissions",
  "Memory and State", "Verification and Evaluation", "Observability and Recovery", "A Prompt Can Describe a Process",
  "A Harness Can Enforce the Process", "Coding Agent", "Research Agent", "Customer-Support Agent",
  "Business-Reporting Agent", "Continuous improvement cycle", "Define Completion Before Development",
  "Keep Tools Narrow and Descriptive", "Apply Least-Privilege Access", "Make State Visible", "Build Evaluations Early",
  "Use Bounded Autonomy", "Improve the Environment After Failures", "Maintain the Harness Like Software",
  "Priority Secondary Keywords",
]);

const labels = new Set(["PRIMARY KEYWORD", "Article focus", "Meta title", "Meta description", "Suggested slug", "Primary keyword", "Image alt text"]);
const codeStarts = new Set(["from dataclasses import dataclass", "def build_context(", "TOOL_RISK = {", "def approve_request(", "EVALUATION_CASES = ["]);
const codeEndNext = new Set(["What Happens Behind This Code?", "The code deliberately limits the number of documents to five.", "This code assigns a risk level to every tool.", "The code creates an enforceable policy boundary.", "The evaluator creates a measurable performance baseline."]);
const referenceLinks: Record<string, string> = {
  "OpenAI: Harness engineering": "https://openai.com/index/harness-engineering/",
  "OpenAI: A practical guide to building agents": "https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf",
  "OpenAI: New tools for building agents": "https://openai.com/index/new-tools-for-building-agents/",
  "Anthropic: Effective harnesses for long-running agents": "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents",
};

const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const roadmap = [...majorHeadings].filter((heading) => !heading.includes("SEO") && heading !== "References and Further Reading");

function renderArticle() {
  const lines = harnessEngineeringArticle.replace(/\r/g, "").split("\n");
  const nodes: React.ReactNode[] = [];
  let code: string[] = [];
  let inCode = false;
  let codeIndex = 0;
  const flushCode = () => {
    if (!code.length) return;
    nodes.push(<div key={`code-${codeIndex++}`} className="my-8 overflow-hidden rounded-2xl border-l-[6px] border-[#009fda] bg-black font-mono shadow-xl"><div className="border-b border-gray-800 bg-gray-900 px-6 py-3 text-xs font-medium text-gray-400">Python example</div><pre className="overflow-x-auto whitespace-pre-wrap p-6 text-sm leading-7 text-gray-100"><code>{code.join("\n")}</code></pre></div>);
    code = [];
  };
  lines.forEach((raw, index) => {
    const clean = raw.trim();
    if (inCode && codeEndNext.has(clean)) { inCode = false; flushCode(); }
    if (codeStarts.has(clean)) inCode = true;
    if (inCode) { code.push(raw.trimEnd()); return; }
    if (!clean) return;
    if (clean === "SEO ARTICLE" || clean === "Harness Engineering in AI" || clean === "How reliable AI agents are designed, controlled and improved") return;
    if (clean === "Harness Engineering in AI: How Reliable AI Agents Are Built") {
      nodes.push(<div key={index} className="relative mb-10 border-l-[6px] border-[#009fda] pl-6"><h2 className="text-2xl font-black text-[#013a81] sm:text-3xl">{clean}</h2></div>);
    } else if (majorHeadings.has(clean)) {
      nodes.push(<h2 key={index} id={slug(clean)} className="mb-6 mt-16 scroll-mt-24 text-2xl font-bold text-gray-900 sm:text-3xl">{clean}</h2>);
    } else if (subheadings.has(clean)) {
      nodes.push(<h3 key={index} className="mb-4 mt-10 text-xl font-bold text-gray-800 sm:text-2xl">{clean}</h3>);
    } else if (labels.has(clean)) {
      nodes.push(<h3 key={index} className="mb-2 mt-7 text-xs font-black uppercase tracking-widest text-[#013a81]">{clean}</h3>);
    } else if (referenceLinks[clean]) {
      nodes.push(<a key={index} href={referenceLinks[clean]} target="_blank" rel="noopener noreferrer" className="my-3 flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50 px-5 py-4 font-semibold text-[#013a81] transition hover:border-[#009fda] hover:bg-cyan-50"><span>{clean}</span><span aria-hidden>↗</span></a>);
    } else if (clean.endsWith(";") || /^\d+\. /.test(clean)) {
      nodes.push(<div key={index} className="my-2 flex gap-3 text-base leading-7 text-gray-700"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#009fda]"/><span>{clean}</span></div>);
    } else if (clean.includes(" → ") || clean.startsWith("AI agent =")) {
      nodes.push(<div key={index} className="my-7 rounded-2xl border border-blue-200 bg-blue-50 px-6 py-5 font-bold text-[#013a81]">{clean}</div>);
    } else {
      nodes.push(<p key={index} className="mb-5 text-base leading-8 text-gray-600 sm:text-lg">{clean}</p>);
    }
  });
  flushCode();
  return nodes;
}

const LinkedInIcon = () => <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M6.5 8.3H3.2V19h3.3V8.3ZM4.8 3A1.9 1.9 0 1 0 4.8 6.8 1.9 1.9 0 0 0 4.8 3ZM19 12.9c0-3.2-1.7-4.9-4-4.9-1.8 0-2.7 1-3.1 1.7V8.3H8.6V19h3.3v-5.3c0-1.4.3-2.8 2-2.8 1.7 0 1.7 1.6 1.7 2.9V19H19v-6.1Z"/></svg>;

function AuthorityBox() {
  const people = [{ name: "Prateek Agarwal", role: "Founder · 20+ years as an AI/ML Leader", image: PrateekAgarwal, href: "https://www.linkedin.com/in/prateekagrawal" }, { name: "Eeshani Agrawal", role: "Co-Founder · 20+ years as a Data/AI Consultant", image: eeshani, href: "https://www.linkedin.com/in/eeshani-agrawal-b674045" }];
  return <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 shadow-lg"><h3 className="mb-1 flex items-center justify-center gap-2 font-bold text-gray-900"><ShieldCheck className="h-5 w-5 text-blue-600"/> Industry Authority</h3><p className="mb-4 text-center text-xs text-gray-600">Content reviewed by Ivy Pro School founders</p><div className="space-y-3">{people.map((person) => <div key={person.name} className="rounded-xl bg-white p-3 shadow-sm"><div className="flex items-center gap-3"><Image src={person.image} alt={person.name} width={48} height={48} className="h-12 w-12 rounded-full border-2 border-blue-200 object-cover"/><div className="min-w-0 flex-1"><p className="text-sm font-bold text-gray-900">{person.name}</p><p className="text-xs leading-5 text-gray-500">{person.role}</p></div><a href={person.href} target="_blank" rel="noopener noreferrer" aria-label={`${person.name} on LinkedIn`} className="rounded-lg bg-blue-50 p-2 text-blue-600 hover:bg-blue-100"><LinkedInIcon/></a></div></div>)}</div><div className="mt-4 flex justify-between border-t border-blue-100 pt-4 text-xs text-gray-600"><span className="flex items-center gap-1"><Briefcase size={14}/> Industry Experts</span><span className="flex items-center gap-1"><GraduationCap size={14}/> 20+ Years Each</span></div></div>;
}

const courses = [{ name: "AI Product Manager", link: "/courses/ai-product-manager-course" }, { name: "Data Science & ML", link: "/courses/data-science-and-ml-course" }, { name: "Data Engineering", link: "/courses/data-engineering-course" }, { name: "Data Analytics & Gen AI", link: "/courses/data-analytics-and-generative-ai-course" }, { name: "Generative AI", link: "/courses/generative-ai-course" }, { name: "AI & Machine Learning", link: "/courses/ai-machine-learning-course" }];

export default function HarnessEngineeringArticlePage() {
  return <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
    <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6"><nav className="mb-6 flex flex-wrap items-center gap-2 text-sm font-medium text-gray-500"><Link href="/aihelpcenter" className="hover:text-blue-600">Home</Link><ChevronRight size={14}/><Link href="/aihelpcenter/genai-llm" className="hover:text-blue-600">GenAI / LLM</Link><ChevronRight size={14}/><span className="text-blue-600">Harness Engineering in AI</span></nav></div>
    <header className="bg-white px-4 pb-12 pt-4 sm:px-6"><div className="mx-auto max-w-7xl"><h1 className="mb-7 max-w-4xl text-3xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">Harness Engineering in AI</h1><p className="mb-7 max-w-3xl text-lg text-gray-500">How reliable AI agents are designed, controlled and improved</p><div className="flex flex-wrap items-center gap-4 border-t border-gray-100 pt-6 text-sm text-gray-500"><div className="flex items-center gap-2"><Image src={PrateekAgarwal} alt="Prateek Agarwal" width={40} height={40} className="h-10 w-10 rounded-full border-2 border-blue-200 object-cover"/><span>By <strong className="text-gray-900">Prateek Agarwal</strong></span><a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" aria-label="Prateek Agarwal on LinkedIn" className="text-blue-600"><LinkedInIcon/></a></div><span className="flex items-center gap-2 border-l border-gray-200 pl-4"><Calendar size={15}/> August 2026</span><span className="flex items-center gap-2 border-l border-gray-200 pl-4"><Clock size={15}/> 20 min read</span></div></div></header>
    <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-6"><div className="flex flex-wrap items-center gap-5 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-3 text-xs"><span className="flex items-center gap-2 font-bold uppercase tracking-wide text-blue-900"><ShieldCheck size={16} className="text-blue-600"/> Authored by Ivy Pro School Founders</span><a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-700 hover:text-blue-600">Prateek Agarwal ↗</a><a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-700 hover:text-blue-600">Eeshani Agrawal ↗</a></div></div>
    <main className="mx-auto mt-12 max-w-7xl px-4 pb-24 sm:px-6"><div className="grid grid-cols-1 gap-10 lg:grid-cols-4"><article className="lg:col-span-3"><div className="rounded-[2.5rem] bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-10 lg:p-14">{renderArticle()}<div className="mt-16 rounded-[2rem] bg-[#013a81] px-6 py-10 text-center text-white"><BookOpen className="mx-auto mb-4"/><h2 className="mb-3 text-2xl font-bold">Build dependable AI systems</h2><p className="mx-auto mb-6 max-w-2xl text-blue-100">Learn how to apply Generative AI concepts through structured, practical training.</p><Link href="/courses/generative-ai-course" className="inline-block rounded-full bg-white px-7 py-3 font-bold text-[#013a81] hover:bg-blue-50">Explore Generative AI Course</Link></div></div><div className="mt-7 flex flex-wrap gap-3"><Link href="/aihelpcenter/genai-llm" className="rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-[#013a81] hover:border-[#009fda]">← Back to GenAI / LLM</Link><Link href="/aihelpcenter" className="rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold text-[#013a81] hover:border-[#009fda]">← All Topics</Link></div></article>
      <aside className="lg:col-span-1"><div className="sticky top-24 space-y-7"><div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"><h4 className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-gray-400">Roadmap</h4><div className="flex flex-col gap-3">{roadmap.map((heading) => <a key={heading} href={`#${slug(heading)}`} className="border-l-4 border-transparent pl-3 text-sm font-bold text-gray-400 transition hover:border-[#009fda] hover:text-[#009fda]">{heading}</a>)}</div></div><AuthorityBox/><div className="rounded-3xl bg-gradient-to-br from-[#009fda] to-[#013a81] p-5 text-white shadow-2xl"><h3 className="text-center text-xl font-extrabold">Advanced Courses</h3><p className="mb-5 mt-1 text-center text-xs text-blue-100">Fast-track your career with Ivy.</p><div className="space-y-2">{courses.map((course) => <Link key={course.link} href={course.link} className="group flex items-center justify-between rounded-xl p-2 hover:bg-white"><span className="flex items-center gap-3"><Image src={ivy} alt="Ivy Logo" className="h-8 w-10 object-contain"/><span className="text-xs font-bold text-white group-hover:text-[#013a81]">{course.name}</span></span><span className="group-hover:text-[#013a81]">›</span></Link>)}</div></div></div></aside>
    </div></main>
  </div>;
}
