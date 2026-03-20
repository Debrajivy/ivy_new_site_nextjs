"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ArrowRight,
  Shield,
  Zap,
  Brain,
  Bot,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Layers,
  Target,
  Clock,
  BookOpen,
  Users,
  Sparkles,
  Lock,
  BarChart3,
  Code2,
  Workflow,
  ChevronDown,
  GraduationCap,
} from "lucide-react";

const LinkedInSVG = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import ivy from "@/assests/ivy.png";
import PrateekAgarwal from "@/assests/pratilk.webp";
import eeshani from "@/assests/eeshani.webp";

/* ─── data ─────────────────────────────────────────── */

const AI_TOOLS = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    company: "OpenAI",
    badge: "Most Popular",
    badgeColor: "bg-emerald-500",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    accent: "#10b981",
    accentLight: "#d1fae5",
    icon: "🤖",
    bestFor: "General-purpose AI assistant, content generation, research, and customer interaction.",
    description:
      "Since its release, ChatGPT has become one of the most popular AI tools, widely used for drafting content, answering queries, and assisting with coding. As of 2026, ChatGPT has advanced with longer context windows, improved reasoning abilities, and integration into various platforms like Microsoft Word and Excel. Its ability to generate creative content, engage in natural conversations, and solve complex problems makes it a must-have for businesses and creators alike.",
    strengths: ["Long context windows", "Coding & debugging", "Creative writing", "Natural conversation", "Platform integrations"],
  },
  {
    id: "gemini",
    name: "Google Gemini",
    company: "Google",
    badge: "Multimodal Leader",
    badgeColor: "bg-blue-500",
    gradient: "from-blue-500 via-violet-500 to-purple-600",
    accent: "#6366f1",
    accentLight: "#e0e7ff",
    icon: "✨",
    bestFor: "Multimodal AI (text, image, audio), research, and productivity.",
    description:
      "Google Gemini takes the lead with its multimodal capabilities, meaning it can process text, images, and audio simultaneously. This makes it ideal for teams working on cross-functional projects that require visual creativity, content creation, and data analysis. As an extension of Google's search capabilities, Gemini integrates seamlessly with Google Workspace, boosting productivity and enhancing collaboration.",
    strengths: ["Text + image + audio", "Google Workspace integration", "Deep research", "Visual creativity", "Cross-functional teams"],
  },
  {
    id: "claude",
    name: "Claude",
    company: "Anthropic",
    badge: "Enterprise-Safe",
    badgeColor: "bg-orange-500",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    accent: "#f59e0b",
    accentLight: "#fef3c7",
    icon: "🛡️",
    bestFor: "Safe and reliable AI for business and compliance.",
    description:
      "Claude is gaining traction for its focus on AI safety and business compliance, making it a trusted choice for enterprises that need to ensure secure and reliable AI outputs. It's perfect for industries such as legal, finance, and healthcare, where data integrity and compliance are critical. Claude is also adept at long-form content creation, research, and structured analysis.",
    strengths: ["AI safety-first", "Legal & finance ready", "Long-form content", "Structured analysis", "Compliance-grade reliability"],
  },
  {
    id: "copilot",
    name: "Microsoft Copilot",
    company: "Microsoft",
    badge: "Productivity Suite",
    badgeColor: "bg-sky-500",
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    accent: "#0ea5e9",
    accentLight: "#e0f2fe",
    icon: "💼",
    bestFor: "Productivity integration into Microsoft 365 tools.",
    description:
      "Microsoft Copilot has turned Excel from a spreadsheet tool into a data-science-as-a-service platform. Deeply embedded across Word, PowerPoint, Teams, and Outlook, it understands your organization's context and helps you get more done within the tools you already use every day — without switching applications.",
    strengths: ["Microsoft 365 native", "Excel + Word + Teams", "Context-aware", "Business analytics", "Enterprise rollout ready"],
  },
];

const AUTOMATION_CAPABILITIES = [
  { icon: <Workflow size={18} />, title: "Automate repetitive workflows", desc: "AI agents take over tasks like data entry, report generation, and email management, saving valuable time." },
  { icon: <Bot size={18} />, title: "Manage emails intelligently", desc: "Tools like AI-powered email assistants can sort and respond to emails based on pre-set rules, ensuring important messages are prioritized." },
  { icon: <Zap size={18} />, title: "Trigger tasks across apps", desc: "An AI agent could update a CRM system, send follow-up emails, and schedule meetings — all triggered by a single command." },
  { icon: <Brain size={18} />, title: "Conduct structured research", desc: "AI agents can perform research on specific topics, summarize key findings, and present information in easily digestible formats." },
];

const CHOOSE_CRITERIA = [
  { q: "What problem am I solving?", a: "Understand the core need of your business — whether it's automation, research, content generation, or customer support." },
  { q: "Do I need writing, research, coding, or automation?", a: "Align your tool choice with the specific task at hand." },
  { q: "Is this tool reliable and updated?", a: "Make sure the AI tool you choose is up to date with the latest advancements and security protocols." },
  { q: "Does it integrate with my workflow?", a: "The AI tool should seamlessly fit into your existing systems, applications, and processes." },
];

const STRATEGIC_SKILLS = [
  { icon: <Target size={16} />, text: "Knowing which tool fits which task: Understanding the strengths of various AI tools and using them for their intended purpose." },
  { icon: <Code2 size={16} />, text: "Writing effective prompts: Crafting clear and effective prompts is key to getting useful and accurate outputs." },
  { icon: <CheckCircle2 size={16} />, text: "Validating outputs: AI can assist in decision-making, but human judgment is still necessary to verify the results." },
  { icon: <Layers size={16} />, text: "Combining tools intelligently: Use multiple tools together to achieve better results." },
  { icon: <AlertTriangle size={16} />, text: "Understanding limitations: Know what each AI tool can and cannot do to avoid unrealistic expectations." },
];

const SECURITY_PRACTICES = [
  { icon: <Lock size={16} />, color: "text-red-500", text: "Avoid uploading sensitive data: Be cautious about what you share with AI platforms to protect confidential information." },
  { icon: <CheckCircle2 size={16} />, color: "text-emerald-500", text: "Verify important information: Always cross-check outputs for accuracy, especially in critical business tasks." },
  { icon: <Shield size={16} />, color: "text-blue-500", text: "Cross-check AI outputs: AI tools can make mistakes — ensure the information is valid before acting on it." },
  { icon: <BookOpen size={16} />, color: "text-amber-500", text: "Understand platform privacy policies: Ensure you know how your data is being handled and stored." },
];

const BASIC_TASKS = [
  "Ask simple questions",
  "Generate drafts",
  "Replace search functions",
];

const ADVANCED_TASKS = [
  "Automate complex workflows",
  "Integrate AI into product development",
  "Use AI for deep data analysis",
  "Build AI-powered products and services",
  "Leverage AI to drive business decisions",
];

/* ─── sub-components ────────────────────────────────── */

const SectionLabel = ({ children, color = "#6366f1" }: { children: React.ReactNode; color?: string }) => (
  <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: `${color}18`, color }}>
    {children}
  </div>
);

const ToolCard = ({ tool, index }: { tool: typeof AI_TOOLS[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-white"
      onClick={() => setExpanded(!expanded)}
    >
      {/* gradient top strip */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${tool.gradient}`} />

      <div className="p-5 sm:p-6">
        {/* header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ backgroundColor: tool.accentLight }}
            >
              {tool.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-bold text-gray-900">{tool.name}</h3>
                <span className={`text-xs font-semibold text-white px-2 py-0.5 rounded-full ${tool.badgeColor}`}>
                  {tool.badge}
                </span>
              </div>
              <p className="text-xs text-gray-400 font-medium">{tool.company}</p>
            </div>
          </div>
          <ChevronDown
            size={18}
            className="text-gray-400 transition-transform duration-300 flex-shrink-0 mt-1"
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </div>

        {/* best for */}
        <div className="rounded-lg px-3 py-2 mb-3 text-xs font-medium" style={{ backgroundColor: tool.accentLight, color: tool.accent }}>
          <span className="font-bold">Best for:</span> {tool.bestFor}
        </div>

        {/* strengths chips */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tool.strengths.map((s, i) => (
            <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
              {s}
            </span>
          ))}
        </div>

        {/* expandable description */}
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: expanded ? "300px" : "0px", opacity: expanded ? 1 : 0 }}
        >
          <p className="text-sm text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
            {tool.description}
          </p>
        </div>

        <p className="text-xs mt-2" style={{ color: tool.accent }}>
          {expanded ? "Click to collapse ↑" : "Click to read more ↓"}
        </p>
      </div>
    </div>
  );
};

/* ─── main page ─────────────────────────────────────── */

export default function BestAITools2026Page() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* ── Breadcrumb ──────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
          <Link href="/aihelpcenter" className="hover:text-blue-600 transition-colors">AI Help Center</Link>
          <ChevronRight size={12} />
          <Link href="/aihelpcenter/ai-for-product-managers" className="hover:text-blue-600 transition-colors">AI For Product Managers</Link>
          <ChevronRight size={12} />
          <span className="text-gray-800 font-medium">The Best AI Tools for 2026</span>
        </div>
      </div>

      {/* ── Hero ────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        {/* dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1120] via-[#0f1e3a] to-[#1a0b2e]" />
        {/* mesh overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #6366f1 0%, transparent 50%), radial-gradient(circle at 80% 70%, #f59e0b 0%, transparent 50%)",
          }}
        />
        {/* grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider mb-6">
            <Sparkles size={12} className="text-yellow-400" />
            AI For Product Managers · 2026 Edition
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            The Best{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              AI Tools
            </span>{" "}
            for 2026
          </h1>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mb-8">
            Transforming How We Work, Create, Innovate, and Automate. A complete guide for product managers to understand and leverage the most powerful AI tools reshaping the workplace.
          </p>

          {/* meta row */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/50">
            <div className="flex items-center gap-1.5">
              <Image src={ivy} alt="Ivy Pro School" width={20} height={20} className="rounded-full" />
              <span>Ivy Pro School</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={12} />
              <span>~12 minutes read</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen size={12} />
              <span>March 16, 2026</span>
            </div>
          </div>

          {/* stat pills */}
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { num: "4", label: "AI Tools Reviewed" },
              { num: "2026", label: "Latest Edition" },
              { num: "5", label: "Strategic Skills" },
              { num: "4", label: "Security Best Practices" },
            ].map((s, i) => (
              <div key={i} className="rounded-xl bg-white/10 border border-white/15 px-4 py-2.5 text-center">
                <div className="text-lg sm:text-2xl font-black text-white">{s.num}</div>
                <div className="text-[10px] text-white/50 font-medium uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Authority Strip — after title, above content ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-0">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl px-4 sm:px-5 py-3">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-blue-600 flex-shrink-0" />
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wide">Authored by Ivy Pro School Founders</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-2">
              <Image src={PrateekAgarwal} alt="Prateek Agarwal" width={28} height={28} className="rounded-full object-cover flex-shrink-0 border border-blue-200" />
              <div className="flex items-center gap-1">
                <span className="text-xs font-semibold text-gray-900">Prateek Agarwal</span>
                <span className="text-xs text-gray-500"> · 20+ yrs AI/ML Leader</span>
                <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" title="View LinkedIn Profile" className="ml-1 text-blue-600 hover:text-blue-800">
                  <LinkedInSVG className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
            {/* <div className="flex items-center gap-2">
              <Image src={eeshani} alt="Eeshani Agrawal" width={28} height={28} className="rounded-full object-cover flex-shrink-0 border border-orange-200" />
              <div className="flex items-center gap-1">
                <span className="text-xs font-semibold text-gray-900">Eeshani Agrawal</span>
                <span className="text-xs text-gray-500"> · 20+ yrs Data/AI Consultant</span>
                <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" title="View LinkedIn Profile" className="ml-1 text-blue-600 hover:text-blue-800">
                  <LinkedInSVG className="h-3.5 w-3.5" />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* ── Table of Contents ───────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 p-5 sm:p-6">
          <h2 className="text-sm font-bold text-indigo-900 uppercase tracking-widest mb-4 flex items-center gap-2">
            <BookOpen size={14} className="text-indigo-500" /> Table of Contents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { label: "Introduction", href: "#introduction" },
              { label: "The Evolution of AI Tools", href: "#evolution" },
              { label: "AI Automation & Agent Tools", href: "#automation" },
              { label: "How to Choose the Right AI Tool", href: "#choose" },
              { label: "Using AI Strategically in 2026", href: "#strategic" },
              { label: "Security & Responsible Usage", href: "#security" },
              { label: "Basic to Advanced Capability", href: "#advanced" },
              { label: "Conclusion", href: "#conclusion" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-2 text-sm text-indigo-700 hover:text-indigo-900 hover:bg-white/70 rounded-lg px-3 py-1.5 transition-all"
              >
                <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                  {i + 1}
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Introduction ────────────────────────────── */}
      <section id="introduction" className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
        <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
          <SectionLabel color="#6366f1">
            <Brain size={12} /> Introduction
          </SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            AI is No Longer the Future — It Is the Present
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="text-base sm:text-lg border-l-4 border-indigo-400 pl-4 italic text-gray-700">
              &ldquo;AI tools are no longer just futuristic concepts — they are the driving force behind workplace efficiency, creativity, and innovation.&rdquo;
            </p>
            <p>
              As we move through 2026, these tools are evolving at an exponential rate, and AI agents are playing a crucial role in automating tasks and improving productivity across various industries. From generative content creation to advanced automation, AI is revolutionizing how we work and make decisions.
            </p>
            <p>
              In this guide, we&apos;ll dive into the best AI tools for 2026, their impact on creativity and business, and how AI agents are transforming workflows by automating repetitive tasks and enhancing business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* ── AI Tools Grid ───────────────────────────── */}
      <section id="evolution" className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
        <div className="mb-6">
          <SectionLabel color="#10b981">
            <Sparkles size={12} /> The Evolution of AI Tools
          </SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            The 4 AI Platforms Defining 2026
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Click on any card to read the full details about each tool.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {AI_TOOLS.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} />
          ))}
        </div>

        {/* comparison table */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
          <div className="bg-gray-50 border-b border-gray-200 px-5 py-3 flex items-center gap-2">
            <BarChart3 size={15} className="text-indigo-500" />
            <span className="text-sm font-semibold text-gray-700">Quick Comparison — AI Tools at a Glance</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[540px] text-sm">
              <thead>
                <tr className="bg-gray-100">
                  {["Tool", "Company", "Best For", "Unique Strength"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["ChatGPT", "OpenAI", "General purpose, content", "Long context + coding"],
                  ["Google Gemini", "Google", "Multimodal, research", "Text + image + audio"],
                  ["Claude", "Anthropic", "Enterprise safety", "Compliance & long-form"],
                  ["Microsoft Copilot", "Microsoft", "M365 productivity", "Native Office integration"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-gray-700 font-medium text-xs sm:text-sm">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── AI Automation ───────────────────────────── */}
      <section id="automation" className="bg-gradient-to-br from-slate-900 to-slate-800 py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-yellow-400 mb-4">
              <Bot size={12} /> AI Automation &amp; Agents
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              The Future of Work in 2026
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              In 2026, AI agents have evolved to become critical components in workplace automation. They aren&apos;t just about answering questions — they are capable of automating entire workflows, handling multiple applications simultaneously, and making real-time decisions based on data analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AUTOMATION_CAPABILITIES.map((cap, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-yellow-400/20 flex items-center justify-center text-yellow-400 flex-shrink-0">
                    {cap.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white">{cap.title}</h3>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-4">
            <p className="text-blue-300 text-sm sm:text-base">
              <span className="font-bold text-blue-200">Pro tip:</span> To build and manage these autonomous systems, professionals are increasingly turning to Data Engineering Courses to understand the underlying pipelines that feed these agents.
            </p>
          </div>
        </div>
      </section>

      {/* ── How to Choose ───────────────────────────── */}
      <section id="choose" className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <SectionLabel color="#f59e0b">
          <Target size={12} /> Decision Framework
        </SectionLabel>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          How to Choose the Right AI Tool
        </h2>
        <p className="text-gray-500 mb-8 text-sm sm:text-base max-w-2xl">
          With so many AI tools available, choosing the right one can be overwhelming. Ask yourself these four critical questions before committing.
        </p>

        <div className="space-y-3">
          {CHOOSE_CRITERIA.map((item, i) => (
            <div key={i} className="flex gap-4 rounded-2xl border border-amber-100 bg-amber-50/50 p-4 sm:p-5 hover:border-amber-300 transition-colors group">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1 group-hover:text-amber-700 transition-colors">
                  {item.q}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 p-5 sm:p-6 text-white">
          <p className="font-bold text-base sm:text-lg mb-1">The Golden Rule:</p>
          <p className="text-amber-50 text-sm sm:text-base">
            The best AI tool is one that <strong>enhances your output</strong>, <strong>integrates well with your workflow</strong>, and <strong>consistently delivers value</strong>.
          </p>
        </div>
      </section>

      {/* ── Strategic AI Usage ──────────────────────── */}
      <section id="strategic" className="bg-white border-y border-gray-200 py-12 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionLabel color="#8b5cf6">
            <TrendingUp size={12} /> Strategic Usage
          </SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            The Real Skill in 2026: Using AI Strategically
          </h2>
          <p className="text-gray-500 mb-8 text-sm sm:text-base max-w-2xl">
            The biggest mistake people make is using AI casually instead of strategically. Here&apos;s what strategic AI usage looks like:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STRATEGIC_SKILLS.map((skill, i) => (
              <div key={i} className="rounded-2xl border border-purple-100 bg-purple-50/50 p-4 sm:p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                  {skill.icon}
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{skill.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border-2 border-purple-200 bg-purple-50 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <GraduationCap size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
              <p className="text-purple-800 text-sm sm:text-base">
                This strategic mindset is exactly what we cultivate in our{" "}
                <strong>Data Science and AI Certification</strong>, where we focus on the &ldquo;why&rdquo; behind the tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Security ────────────────────────────────── */}
      <section id="security" className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <SectionLabel color="#ef4444">
          <Shield size={12} /> Security
        </SectionLabel>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Security and Responsible Usage
        </h2>
        <p className="text-gray-500 mb-8 text-sm sm:text-base max-w-2xl">
          AI tools are powerful, but their use must come with responsibility. Here are the best practices for using AI responsibly:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SECURITY_PRACTICES.map((item, i) => (
            <div key={i} className="flex gap-3 rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className={`flex-shrink-0 mt-0.5 ${item.color}`}>{item.icon}</div>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Shield size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-slate-300 text-sm sm:text-base">
              <strong className="text-white">Remember:</strong> AI should assist in decision-making, but human judgment is essential to ensure responsible usage.
            </p>
          </div>
        </div>
      </section>

      {/* ── Basic → Advanced ────────────────────────── */}
      <section id="advanced" className="bg-gradient-to-br from-[#0b1120] to-[#1a0b2e] py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/70 mb-4">
              <TrendingUp size={12} className="text-emerald-400" /> Capability Ladder
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              How to Move From Basic AI Usage to Advanced Capability
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto">
              As AI tools become more accessible, many users stay at the beginner level. Here&apos;s how to level up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Basic column */}
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle size={18} className="text-red-400" />
                <h3 className="text-base font-bold text-white">Basic AI Users</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-300">Level 1</span>
              </div>
              <ul className="space-y-2">
                {BASIC_TASKS.map((t, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-red-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Advanced column */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 sm:p-6 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle at 80% 20%, #10b981, transparent 60%)",
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 size={18} className="text-emerald-400" />
                  <h3 className="text-base font-bold text-white">Advanced AI Users</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300">Level 5</span>
                </div>
                <ul className="space-y-2">
                  {ADVANCED_TASKS.map((t, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-emerald-100">
                      <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 text-center">
            <p className="text-white/80 text-sm sm:text-base mb-3">
              Moving from a user to a creator requires structured learning. Ivy Professional School&apos;s courses are designed to take you from the basics of Python and SQL to the cutting edge of Machine Learning and Deep Learning.
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 px-5 py-2.5 text-sm font-bold text-slate-900 hover:from-yellow-300 hover:to-orange-300 transition-all"
            >
              Explore Our Courses <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Conclusion ──────────────────────────────── */}
      <section id="conclusion" className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
          <SectionLabel color="#6366f1">
            <BookOpen size={12} /> Conclusion
          </SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            AI Agents Are Shaping the Future of Work
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
            <p>
              AI agents and automation tools are shaping the future of work in 2026. These tools enhance productivity, automate complex workflows, and help businesses make smarter, data-driven decisions.
            </p>
            <p>
              The key to success with AI lies in using it strategically, choosing the right tools for the right tasks, and learning to integrate them effectively into your workflows.
            </p>
            <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-4 mt-4">
              <p className="text-indigo-800 font-medium">
                Ready to stop just &ldquo;using&rdquo; AI and start <strong>mastering</strong> it? Explore our Data Analytics and Generative AI Course to become the AI leader your industry needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Authority Box ───────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-5 sm:p-6 shadow-sm">
          <div className="text-center mb-5">
            <h3 className="font-bold text-gray-900 text-base sm:text-lg flex items-center justify-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Industry Authority
            </h3>
            <p className="text-gray-600 text-xs mt-1">These tutorials are authored by Ivy Pro School founders</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "Prateek Agarwal", role: "Founder, Ivy Pro School", exp: "20+ yrs AI/ML leader · implements scalable systems, consults strategy", img: PrateekAgarwal },
              { name: "Eeshani Agrawal", role: "Co-Founder, Ivy Pro School", exp: "20+ yrs data/AI consultant · implements analytics, advises enterprises", img: eeshani },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm">
                <Image src={f.img} alt={f.name} width={44} height={44} className="rounded-full object-cover flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{f.name}</p>
                  <p className="text-xs text-blue-600 font-medium">{f.role}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{f.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Back link ───────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 flex flex-wrap gap-3">
        <Link
          href="/aihelpcenter/ai-for-product-managers"
          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm"
        >
          ← Back to AI For Product Managers
        </Link>
        <Link
          href="/aihelpcenter"
          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm"
        >
          ← All Topics
        </Link>
      </div>
    </div>
  );
}
