"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Clock,
  BookOpen,
  Zap,
  Target,
  MessageSquare,
  Star,
  ChevronDown,
  Lightbulb,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Brain,
  Code2,
  Puzzle,
  Globe,
  Play,
  Cpu,
  Workflow,
  FileText,
  Settings,
  Terminal,
  Bot,
  Rocket,
} from "lucide-react";

const LinkedInSVG = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import ivy from "@/assests/ivy.png";
import PrateekAgarwal from "@/assests/pratilk.webp";
import eeshani from "@/assests/eeshani.webp";

/* ─── roadmap sections ──────────────────────────────── */

const ROADMAP_SECTIONS = [
  { id: "introduction", title: "Introduction to Claude AI" },
  { id: "what-is-claude", title: "What is Claude AI" },
  { id: "models", title: "Claude AI Models Explained" },
  { id: "chat-overview", title: "Claude Chat Overview" },
  { id: "prompts", title: "How to Write Better Prompts" },
  { id: "projects", title: "Projects in Claude AI" },
  { id: "extended-thinking", title: "Extended Thinking" },
  { id: "artifacts", title: "Artifacts in Claude AI" },
  { id: "skills", title: "Skills in Claude AI" },
  { id: "claude-code", title: "Claude Code Explained" },
  { id: "code-development", title: "Claude Code in Development" },
  { id: "thinking-commands", title: "Thinking Commands" },
  { id: "co-work", title: "What is Claude Co-Work" },
  { id: "connectors", title: "Claude Connectors" },
  { id: "mcp", title: "What is MCP" },
  { id: "automation-example", title: "Real Automation Example" },
  { id: "learning-roadmap", title: "Claude Learning Roadmap" },
  { id: "why-powerful", title: "Why Claude is Powerful" },
];

/* ─── models data ──────────────────────────────────── */

const MODELS = [
  {
    name: "Claude Opus",
    icon: <Brain size={20} />,
    color: "#7c3aed",
    bg: "#ede9fe",
    badge: "Most Powerful",
    badgeBg: "#7c3aed",
    desc: "Designed for complex reasoning — advanced coding, research analysis, strategic planning, and deep reasoning problems. Delivers the highest-quality outputs.",
    tasks: ["Advanced coding", "Research analysis", "Strategic planning", "Deep reasoning"],
  },
  {
    name: "Claude Sonnet",
    icon: <Zap size={20} />,
    color: "#009fda",
    bg: "#e0f2fe",
    badge: "Best Balance",
    badgeBg: "#009fda",
    desc: "The balanced model for everyday use. Strong combination of performance and efficiency. The default choice for most daily work.",
    tasks: ["Writing emails", "Content generation", "Basic analysis", "Prompt experimentation"],
  },
  {
    name: "Claude Haiku",
    icon: <Rocket size={20} />,
    color: "#059669",
    bg: "#d1fae5",
    badge: "Fastest",
    badgeBg: "#059669",
    desc: "The fastest and most cost-efficient model. Designed for lightweight tasks and quick automation where deep reasoning isn't required.",
    tasks: ["Simple conversations", "Basic queries", "Quick automation", "Lightweight tasks"],
  },
];

/* ─── levels data ─────────────────────────────────── */

const LEVELS = [
  {
    level: "Level 1",
    title: "Claude Chat",
    icon: <MessageSquare size={18} />,
    color: "#009fda",
    bg: "#e0f2fe",
    desc: "The entry point for most users. Chat interface for writing, research, analysis, and content generation with structured prompting.",
  },
  {
    level: "Level 2",
    title: "Claude Code",
    icon: <Code2 size={18} />,
    color: "#7c3aed",
    bg: "#ede9fe",
    desc: "Integrates with actual codebases and development environments — reads files, understands project structures, and assists developers.",
  },
  {
    level: "Level 3",
    title: "Claude Co-Work",
    icon: <Workflow size={18} />,
    color: "#f59e0b",
    bg: "#fef3c7",
    desc: "Connects Claude to external systems via Connectors and MCP servers to automate real workflows and interact with external data.",
  },
];

/* ─── mcp components ─────────────────────────────── */

const MCP_COMPONENTS = [
  {
    title: "Tools",
    icon: <Settings size={18} />,
    color: "#009fda",
    bg: "#e0f2fe",
    desc: "Functions Claude can execute — create repository, upload file, run database query, generate report.",
    examples: ["Create repository", "Upload file", "Run database query", "Generate report"],
  },
  {
    title: "Prompts",
    icon: <MessageSquare size={18} />,
    color: "#7c3aed",
    bg: "#ede9fe",
    desc: "Instructions that define how Claude communicates with the tool — required inputs, expected outputs, task formatting.",
    examples: ["Required inputs", "Expected outputs", "Task formatting", "Communication rules"],
  },
  {
    title: "Resources",
    icon: <Globe size={18} />,
    color: "#f59e0b",
    bg: "#fef3c7",
    desc: "Access to external data — databases, APIs, files, and network services Claude can read and interact with.",
    examples: ["Databases", "REST APIs", "Files & documents", "Network services"],
  },
];

/* ─── connectors data ─────────────────────────────── */

const CONNECTORS = [
  { name: "GitHub", color: "#24292e" },
  { name: "Google Drive", color: "#4285f4" },
  { name: "Slack", color: "#4a154b" },
  { name: "Make", color: "#6d00cc" },
  { name: "PayPal", color: "#003087" },
  { name: "Tableau", color: "#e97627" },
  { name: "Gamma", color: "#6366f1" },
];

/* ─── learning roadmap ────────────────────────────── */

const ROADMAP_STEPS = [
  {
    step: "01",
    title: "Start with Claude Chat",
    color: "#009fda",
    tasks: ["Writing emails", "Summarizing articles", "Generating content"],
  },
  {
    step: "02",
    title: "Learn Prompt Engineering",
    color: "#7c3aed",
    tasks: ["Context → Task → Format", "Structured prompts", "Iterative refinement"],
  },
  {
    step: "03",
    title: "Use Projects and Artifacts",
    color: "#059669",
    tasks: ["Create reusable workflows", "Build mini tools", "Store project context"],
  },
  {
    step: "04",
    title: "Add Skills and Connectors",
    color: "#f59e0b",
    tasks: ["Create custom skills", "Connect external apps", "Enhance capabilities"],
  },
  {
    step: "05",
    title: "Explore Claude Code",
    color: "#ef4444",
    tasks: ["Coding workflows", "Repository analysis", "Automated code review"],
  },
  {
    step: "06",
    title: "Use Claude Co-Work",
    color: "#8b5cf6",
    tasks: ["Automate complex tasks", "Connect external systems", "Multi-step workflows"],
  },
];

/* ─── productivity capabilities ──────────────────── */

const CAPABILITIES = [
  { icon: <FileText size={16} />, label: "Generate Content", color: "#009fda" },
  { icon: <Brain size={16} />, label: "Analyze Complex Data", color: "#7c3aed" },
  { icon: <Code2 size={16} />, label: "Develop Software", color: "#059669" },
  { icon: <Workflow size={16} />, label: "Automate Workflows", color: "#f59e0b" },
  { icon: <Puzzle size={16} />, label: "Build Mini Apps", color: "#ef4444" },
  { icon: <Globe size={16} />, label: "Connect External Systems", color: "#8b5cf6" },
];

/* ─── accordion component ────────────────────────── */

const AccordionCard = ({
  title,
  children,
  color,
  index,
}: {
  title: string;
  children: React.ReactNode;
  color: string;
  index: number;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl border bg-white shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      style={{ borderColor: open ? color : "#e5e7eb" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center gap-4 px-5 py-4">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold"
          style={{ backgroundColor: `${color}18`, color }}
        >
          {index + 1}
        </div>
        <h3 className="flex-1 text-sm sm:text-base font-bold text-gray-900">{title}</h3>
        <ChevronDown
          size={16}
          className="text-gray-400 transition-transform duration-200 flex-shrink-0"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>
      <div
        className="overflow-hidden transition-all duration-300 px-5"
        style={{ maxHeight: open ? "500px" : "0px", paddingBottom: open ? "16px" : "0px" }}
      >
        <div
          className="text-sm text-gray-600 leading-relaxed border-t pt-3"
          style={{ borderColor: `${color}30` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

/* ─── courses ─────────────────────────────────────── */

const COURSES = [
  { name: "AI Product Manager", link: "/courses/ai-product-manager-course" },
  { name: "Data Science & ML", link: "/courses/data-science-and-ml-course" },
  { name: "Data Engineering", link: "/courses/data-engineering-course" },
  { name: "Data Analytics", link: "/courses/data-analytics-course" },
  { name: "Data Analytics & Gen AI", link: "/courses/data-analytics-and-generative-ai-course" },
  { name: "Generative AI", link: "/courses/iit-generative-ai-course" },
  { name: "AI & Machine Learning", link: "/courses/ai-machine-learning-course" },
  { name: "Data Science (Pay after placement)", link: "/courses/no-upfront-fees-data-science-and-ml-course" },
];

/* ─── main page ─────────────────────────────────────── */

export default function ClaudeAILikeAProPage() {
  const [activeModel, setActiveModel] = useState(0);
  const [activeSection, setActiveSection] = useState("introduction");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showReviewPrompt, setShowReviewPrompt] = useState(false);
  const [reviewPromptShown, setReviewPromptShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      if (documentHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrolled / documentHeight) * 100));
        setScrollProgress(progress);
        if (progress >= 95 && !reviewPromptShown) {
          setShowReviewPrompt(true);
          setReviewPromptShown(true);
        }
      }
      for (const sec of [...ROADMAP_SECTIONS].reverse()) {
        const el = document.getElementById(sec.id);
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveSection(sec.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reviewPromptShown]);

  const openReviewPage = () => {
    window.open(
      "https://www.google.com/search?q=ivy+professional+school&rlz=1C1ONGR_enIN1115IN1115&oq=&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7Mg0IARAuGK8BGMcBGIAEMgcIAhAAGIAEMhAIAxAuGIMBGLEDGIAEGOUEMgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYQTIGCAcQRRg80gEIMzA0N2owajeoAgiwAgHxBRMMy4WLy7978QUTMMy4WLy_ew&sourceid=chrome&ie=UTF-8#lrd=0x3a02771797fccdc1:0xca64261fceaf2af6,3,,,",
      "_blank"
    );
    setShowReviewPrompt(false);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0fdf9]">

      {/* ── Scroll Progress Bar ─────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
        <div
          className="h-full transition-all duration-300"
          style={{ width: `${scrollProgress}%`, background: "linear-gradient(90deg, #14b8a6, #009fda)" }}
        />
      </div>

      {/* ── Floating Review Prompt ──────────────────── */}
      {showReviewPrompt && (
        <div className="fixed top-16 sm:top-20 right-2 sm:right-4 md:right-6 z-50 max-w-xs sm:max-w-sm">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="h-8 sm:h-10 w-8 sm:w-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#009fda] to-[#013a81]">
                <Star className="h-4 sm:h-6 w-4 sm:w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Enjoying this guide?</h3>
                <p className="text-xs sm:text-sm text-gray-600">Share your feedback!</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm">
              You&apos;ve completed {Math.round(scrollProgress)}% of this guide. Help others by sharing your experience with Ivy Professional School.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={openReviewPage}
                className="flex-1 text-white font-bold py-2 sm:py-3 rounded-lg sm:rounded-xl hover:opacity-90 transition-opacity text-sm bg-gradient-to-r from-[#009fda] to-blue-700"
              >
                Write a Review
              </button>
              <button
                onClick={() => setShowReviewPrompt(false)}
                className="px-3 sm:px-4 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Breadcrumb ──────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
          <Link href="/aihelpcenter" className="hover:text-[#013a81] transition-colors">AI Help Center</Link>
          <ChevronRight size={12} />
          <Link href="/aihelpcenter/ai-strategy-pm" className="hover:text-[#013a81] transition-colors">AI Strategy (PM)</Link>
          <ChevronRight size={12} />
          <span className="text-gray-800 font-medium">How to Use Claude AI Like a Pro</span>
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#009fda] via-[#14b8a6] to-[#013a81]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* left text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#013a81] uppercase tracking-wider mb-5">
              <Bot size={12} className="text-[#009fda]" />
              AI Strategy (PM) · Claude AI Guide
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
              How to Use{" "}
              <span className="bg-gradient-to-r from-[#009fda] to-[#013a81] bg-clip-text text-transparent">
                Claude AI
              </span>{" "}
              Like a Pro: Complete Beginner to Advanced Guide
            </h1>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-7">
              From basic Claude Chat to advanced Claude Code and MCP integrations — master every level of Claude&apos;s capabilities with this comprehensive guide for professionals.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Image src={ivy} alt="Ivy Pro School" width={16} height={16} className="rounded-full" />
                Ivy Pro School
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Clock size={11} />
                ~20 minutes read
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <BookOpen size={11} />
                April 13, 2026
              </div>
            </div>
          </div>

          {/* right — Claude level visual */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              <div className="bg-[#013a81] px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-[#009fda]" />
                </div>
                <span className="text-white text-xs font-semibold ml-2">Claude AI — 3 Levels of Mastery</span>
              </div>
              <div className="p-5 space-y-3">
                {LEVELS.map((lvl, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl p-3 border" style={{ borderColor: `${lvl.color}30`, backgroundColor: lvl.bg }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: lvl.color, color: "#fff" }}>
                      {lvl.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: lvl.color }}>{lvl.level}</div>
                      <div className="text-sm font-bold text-gray-900">{lvl.title}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5">{lvl.desc.slice(0, 60)}...</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-teal-50 border-t border-teal-100 px-4 py-3 flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-[#009fda] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Star size={12} className="text-white" />
                </div>
                <p className="text-[10px] text-[#013a81] leading-snug">
                  <strong>Claude:</strong> I can help you at every level — from drafting emails to automating entire workflows with MCP integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Authority Strip ──────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-0">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl px-4 sm:px-5 py-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-blue-600 flex-shrink-0" />
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
          </div>
        </div>
      </div>

      {/* ── Main grid ────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-4">

          {/* ── LEFT: article ──────────────────────── */}
          <article className="lg:col-span-3 space-y-6">

            {/* Table of Contents */}
            <div className="rounded-2xl bg-white border border-blue-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-[#009fda] to-[#013a81] px-5 py-3 flex items-center gap-2">
                <BookOpen size={14} className="text-white" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">Table of Contents</span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-1">
                {ROADMAP_SECTIONS.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50 transition-colors text-left w-full"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#013a81] flex items-center justify-center text-[10px] font-bold flex-shrink-0 group-hover:bg-[#009fda] group-hover:text-white transition-colors">
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-600 group-hover:text-[#013a81] transition-colors font-medium">{item.title}</span>
                    <ArrowRight size={12} className="text-[#009fda] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>

            {/* ── YouTube Video ──────────────────────── */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              <div className="bg-gradient-to-r from-red-500 to-red-700 px-5 py-3 flex items-center gap-2">
                <Play size={14} className="text-white" fill="white" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">Watch: Claude AI Complete Guide</span>
              </div>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/agK4kIrioHc"
                  title="How to Use Claude AI Like a Pro: Complete Beginner to Advanced Guide"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* ── 1. Introduction ─────────────────────── */}
            <section id="introduction" className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#009fda] to-[#14b8a6]" />
              <div className="p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#ccfbf1", color: "#0f766e" }}>
                  <Lightbulb size={12} /> Introduction
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  1. Introduction to Claude AI
                </h2>
                <p className="text-base sm:text-lg border-l-4 border-[#009fda] pl-4 italic text-gray-700 mb-5">
                  &ldquo;AI tools have become essential for modern productivity. Claude AI goes far beyond simple chat — it&apos;s a complete productivity platform.&rdquo;
                </p>
                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Artificial intelligence tools have become an essential part of modern productivity. Many professionals now rely on AI assistants to write content,{" "}
                    <a href="https://ivyproschool.com/courses/data-analytics-and-generative-ai-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                      analyze business data
                    </a>
                    , generate code, and automate repetitive tasks.
                  </p>
                  <p>
                    One of the most powerful AI assistants available today is <strong className="text-gray-800">Claude AI</strong>, developed by Anthropic. While many people use Claude only as a chat assistant, the platform offers a much deeper set of capabilities.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["Write and edit content", "Analyze business data", "Generate code", "Build mini applications", "Automate workflows", "Connect with external tools"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-xl bg-teal-50 border border-teal-100 px-3 py-2">
                      <CheckCircle2 size={13} className="text-teal-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-teal-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <p className="text-sm font-bold text-[#013a81] mb-3">Claude usage is divided into three levels:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {LEVELS.map((lvl, i) => (
                      <div key={i} className="rounded-xl p-3 text-center" style={{ backgroundColor: lvl.bg, border: `1px solid ${lvl.color}30` }}>
                        <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: lvl.color }}>{lvl.level}</div>
                        <div className="text-sm font-bold text-gray-900">{lvl.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── 2. What is Claude AI ────────────────── */}
            <section id="what-is-claude" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>
                <Brain size={12} /> Overview
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                2. What is Claude AI
              </h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Claude AI is a{" "}
                  <a href="https://ivyproschool.com/courses/iit-generative-ai-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                    Large Language Model (LLM)
                  </a>{" "}
                  developed by the company Anthropic. LLMs are AI systems trained on large amounts of text data that can understand language, generate responses, analyze information, and assist with various tasks.
                </p>
                <p>
                  Claude is designed with a strong focus on <strong className="text-gray-800">reasoning, safety, and productivity workflows</strong> — making it distinct from tools like ChatGPT, Google Gemini, and Microsoft Copilot.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
                  <p className="text-xs font-bold text-[#013a81] uppercase tracking-wide mb-2">Claude Can Help With</p>
                  <ul className="space-y-1.5">
                    {[
                      { text: "Content generation", link: null },
                      { text: "Research and summarization", link: null },
                      { text: "Coding assistance", link: "https://ivyproschool.com/courses/iit-data-science-course" },
                      { text: "Document analysis", link: "https://ivyproschool.com/business-analytics-certification-training-course" },
                      { text: "Workflow automation", link: "https://ivyproschool.com/courses/ai-product-manager-course" },
                      { text: "Application prototyping", link: null },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#013a81]">
                        <CheckCircle2 size={12} className="text-[#009fda] flex-shrink-0" />
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">{item.text}</a>
                        ) : item.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-teal-50 border border-teal-100 p-4">
                  <p className="text-xs font-bold text-teal-800 uppercase tracking-wide mb-2">Useful For Professionals</p>
                  <ul className="space-y-1.5">
                    {["Developers", "Designers", "Data Analysts", "Entrepreneurs", "Product Managers", "Knowledge Workers"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-teal-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ── 3. Models ───────────────────────────── */}
            <section id="models" className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#013a81] mb-4">
                <Cpu size={12} /> Claude Models
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                3. Claude AI Models Explained
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-xl">
                Claude offers multiple models for different workloads. Click each model to explore its capabilities.
              </p>
              {/* Model tabs */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {MODELS.map((model, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveModel(i)}
                    className="flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl text-xs font-bold transition-all duration-200 border"
                    style={{
                      backgroundColor: activeModel === i ? model.color : "white",
                      color: activeModel === i ? "#fff" : "#6b7280",
                      borderColor: activeModel === i ? model.color : "#e5e7eb",
                    }}
                  >
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: activeModel === i ? "rgba(255,255,255,0.2)" : model.bg, color: model.color }}>
                      {model.icon}
                    </span>
                    {model.name}
                  </button>
                ))}
              </div>
              <div className="rounded-2xl bg-white border shadow-md p-5 sm:p-7 transition-all duration-200" style={{ borderColor: MODELS[activeModel].color }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: MODELS[activeModel].bg, color: MODELS[activeModel].color }}>
                    {MODELS[activeModel].icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{MODELS[activeModel].name}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: MODELS[activeModel].badgeBg }}>
                      {MODELS[activeModel].badge}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">{MODELS[activeModel].desc}</p>
                <div className="rounded-xl p-4" style={{ backgroundColor: MODELS[activeModel].bg }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: MODELS[activeModel].color }}>Best For</p>
                  <div className="flex flex-wrap gap-2">
                    {MODELS[activeModel].tasks.map((task, i) => (
                      <span key={i} className="text-xs font-semibold px-3 py-1 rounded-full bg-white border" style={{ color: MODELS[activeModel].color, borderColor: `${MODELS[activeModel].color}30` }}>
                        {task}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Model comparison table */}
              <div className="mt-5 rounded-xl overflow-hidden border border-gray-200 bg-white">
                <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 text-[10px] font-bold text-gray-500 uppercase">
                  <div className="px-4 py-2 border-r border-gray-200">Task Type</div>
                  <div className="px-4 py-2 border-r border-gray-200">Recommended Model</div>
                  <div className="px-4 py-2">Best For</div>
                </div>
                {[
                  ["Complex analysis", "Opus", "#7c3aed"],
                  ["Writing & productivity", "Sonnet", "#009fda"],
                  ["Quick conversations", "Haiku", "#059669"],
                ].map(([task, model, color], i) => (
                  <div key={i} className="grid grid-cols-3 text-xs border-b border-gray-100 last:border-0 hover:bg-blue-50/40 transition-colors">
                    <div className="px-4 py-2.5 border-r border-gray-100 text-gray-700">{task}</div>
                    <div className="px-4 py-2.5 border-r border-gray-100 font-bold" style={{ color }}>{model}</div>
                    <div className="px-4 py-2.5 text-gray-500">Optimized cost &amp; output</div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 4. Claude Chat ──────────────────────── */}
            <section id="chat-overview" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#e0f2fe", color: "#0369a1" }}>
                <MessageSquare size={12} /> Chat Interface
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                4. Claude Chat Overview
              </h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Most users begin with <strong className="text-gray-800">Claude Chat</strong> — the standard interface for interacting with the AI. There&apos;s a major difference between how beginners and experienced users interact with Claude.
                </p>
              </div>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border-2 border-red-100 bg-red-50 p-4">
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">Beginner Prompt</p>
                  <div className="rounded-lg bg-white border border-red-100 p-3 font-mono text-xs text-gray-700">
                    Write a follow-up email to my client.
                  </div>
                  <p className="text-xs text-red-500 mt-2">Produces a generic, low-value response.</p>
                </div>
                <div className="rounded-xl border-2 border-green-100 bg-green-50 p-4">
                  <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-2">Advanced Prompt</p>
                  <div className="rounded-lg bg-white border border-green-100 p-3 font-mono text-xs text-gray-700">
                    I&apos;m a freelance designer. My client hasn&apos;t replied in 6 days. Write an 80-word follow-up email with a warm but professional tone.
                  </div>
                  <p className="text-xs text-green-600 mt-2">Produces a highly relevant, actionable response.</p>
                </div>
              </div>
              <div className="mt-5 p-4 rounded-xl bg-blue-50 border border-blue-100">
                <p className="text-xs font-bold text-[#013a81] uppercase tracking-wide mb-2">Common Claude Chat Use Cases</p>
                <div className="flex flex-wrap gap-2">
                  {["Writing professional emails", "Marketing content", "Social media posts", "Research and analysis", "Text document analysis", "Business reports"].map((item, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white border border-blue-200 text-[#013a81]">{item}</span>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 5. Prompt Engineering ───────────────── */}
            <section id="prompts" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#ede9fe", color: "#7c3aed" }}>
                <Target size={12} /> Prompt Engineering
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                5. How to Write Better Prompts in Claude
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6">
                <a href="https://ivyproschool.com/courses/iit-generative-ai-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">Prompt engineering</a> is one of the most important skills when working with AI tools like Claude. The most effective framework follows a simple structure:
              </p>
              <div className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-purple-50 border border-purple-100">
                <div className="flex items-center gap-2 text-purple-700 font-bold text-base sm:text-lg">
                  <span className="px-3 py-1.5 rounded-lg bg-purple-100 text-sm">Context</span>
                  <ArrowRight size={16} />
                  <span className="px-3 py-1.5 rounded-lg bg-purple-200 text-sm">Task</span>
                  <ArrowRight size={16} />
                  <span className="px-3 py-1.5 rounded-lg bg-purple-300 text-sm">Format</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#7c3aed] to-purple-300 hidden sm:block" />
                <div className="space-y-4">
                  {[
                    { title: "Step 1: Provide Context", desc: "Explain the situation or background information.", example: "I am a freelance designer, and I sent a proposal to a client." },
                    { title: "Step 2: Define the Task", desc: "Clearly state what the AI should do.", example: "Write a follow-up message after six days." },
                    { title: "Step 3: Specify the Format", desc: "Determine the output structure.", example: "An 80-word message with a warm but professional tone." },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-5 items-start pl-0 sm:pl-3">
                      <div className="w-9 h-9 rounded-full bg-[#7c3aed] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 z-10 shadow-md">
                        {i + 1}
                      </div>
                      <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">{step.desc}</p>
                        <div className="rounded-lg bg-purple-50 border border-purple-100 px-3 py-2 font-mono text-xs text-purple-700 italic">
                          &ldquo;{step.example}&rdquo;
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 p-4">
                <p className="text-xs font-bold text-purple-700 uppercase tracking-wide mb-2">Complete Example Prompt</p>
                <div className="rounded-lg bg-white border border-purple-200 p-3 font-mono text-xs text-gray-700 leading-relaxed">
                  I am a freelance designer. My client has not replied to my proposal in six days. Write an 80-word follow-up email that gently nudges the client toward a decision. The tone should be warm and professional.
                </div>
              </div>
            </section>

            {/* ── 6. Projects ─────────────────────────── */}
            <section id="projects" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#d1fae5", color: "#065f46" }}>
                <Layers size={12} /> Projects
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                6. Projects in Claude AI
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                A key challenge with AI chat is that each new conversation begins with a fresh context window — the AI forgets previous instructions. <strong className="text-gray-800">Claude Projects</strong> solve this problem by allowing you to store documents, instructions, and reference material.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div className="rounded-xl bg-green-50 border border-green-100 p-4">
                  <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">Store in Projects</p>
                  <ul className="space-y-1.5">
                    {["Documents", "Instructions", "Reference material", "Conversation context"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-green-800">
                        <CheckCircle2 size={12} className="text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
                  <p className="text-xs font-bold text-[#013a81] uppercase tracking-wide mb-2">Use Cases for Projects</p>
                  <ul className="space-y-1.5">
                    {["LinkedIn content writing", "YouTube script creation", "Startup pitch prep", "Exam study support", "Research projects"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#013a81]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#009fda] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3">How to Create a Claude Project</p>
                <div className="space-y-2">
                  {["Open Claude and navigate to the Projects section", "Create a new project", "Upload relevant documents or notes", "Start chatting within the project"].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#009fda] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">{i + 1}</div>
                      <p className="text-sm text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 7. Extended Thinking ────────────────── */}
            <section id="extended-thinking" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#fef3c7", color: "#92400e" }}>
                <Brain size={12} /> Extended Thinking
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                7. Extended Thinking in Claude
              </h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-gray-800">Extended Thinking</strong> allows the model to spend more time analyzing a request before producing a response — instead of generating the first possible answer, Claude re-evaluates the question and performs deeper reasoning.
                </p>
              </div>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["Re-evaluates the question", "Analyzes multiple possibilities", "Performs deeper reasoning"].map((item, i) => (
                  <div key={i} className="rounded-xl bg-amber-50 border border-amber-100 p-3 text-center">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-2 font-bold text-sm">{i + 1}</div>
                    <p className="text-xs sm:text-sm text-amber-800 font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-amber-50 border border-amber-200 p-4">
                <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-2">Example Prompt with Extended Thinking</p>
                <div className="rounded-lg bg-white border border-amber-200 p-3 font-mono text-xs text-gray-700 leading-relaxed italic">
                  &ldquo;Act as a{" "}
                  <a href="https://ivyproschool.com/courses/data-analytics-and-generative-ai-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline not-italic">financial analyst</a>{" "}
                  and explain why the Indian stock market is down today. Provide a summary based on economic indicators and recent news.&rdquo;
                </div>
              </div>
              <div className="mt-4 p-3 rounded-xl bg-orange-50 border border-orange-100 flex items-start gap-2">
                <Zap size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-orange-700">Extended thinking uses more tokens — use it for complex tasks like financial analysis, research, and architecture reviews.</p>
              </div>
            </section>

            {/* ── 8. Artifacts ─────────────────────────── */}
            <section id="artifacts" className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50 border border-indigo-100 p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo-700 mb-4">
                <Puzzle size={12} /> Artifacts
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                8. Artifacts in Claude AI
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                Artifacts are one of Claude&apos;s most powerful features. They allow Claude to create interactive outputs that appear in a <strong className="text-gray-800">separate workspace</strong> next to the chat — not just text responses, but full working tools.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Documents", icon: <FileText size={16} />, color: "#6366f1" },
                  { label: "Web pages", icon: <Globe size={16} />, color: "#009fda" },
                  { label: "Mini tools", icon: <Settings size={16} />, color: "#059669" },
                  { label: "Code snippets", icon: <Code2 size={16} />, color: "#7c3aed" },
                  { label: "UI prototypes", icon: <Layers size={16} />, color: "#f59e0b" },
                  { label: "Interactive apps", icon: <Zap size={16} />, color: "#ef4444" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-xl bg-white border border-indigo-100 px-3 py-2.5 shadow-sm">
                    <span style={{ color: item.color }}>{item.icon}</span>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-white border border-indigo-200 p-5">
                <p className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-3">Example Use Case — LinkedIn Post Generator</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>A user can ask Claude to create a LinkedIn post generator tool. Claude produces an artifact containing:</p>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {["Input fields", "Content generation logic", "Copy button for publishing"].map((item, i) => (
                      <div key={i} className="text-center rounded-lg bg-indigo-50 border border-indigo-100 px-2 py-2">
                        <div className="w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center text-xs font-bold mx-auto mb-1">{i + 1}</div>
                        <p className="text-[10px] font-semibold text-indigo-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-indigo-50 border border-indigo-100 p-4">
                <p className="text-xs font-bold text-indigo-700 uppercase tracking-wide mb-2">How to Enable Artifacts</p>
                <div className="flex flex-wrap gap-2">
                  {["Open Settings", "Go to Capabilities", "Enable Artifacts"].map((step, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center text-[10px] font-bold">{i + 1}</span>
                      <span className="text-xs text-indigo-700 font-medium">{step}</span>
                      {i < 2 && <ArrowRight size={10} className="text-indigo-400" />}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 9. Skills ───────────────────────────── */}
            <section id="skills" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#d1fae5", color: "#065f46" }}>
                <Star size={12} /> Skills
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                9. Skills in Claude AI
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                Skills allow users to extend Claude&apos;s capabilities with <strong className="text-gray-800">predefined instruction sets</strong>. A skill is a structured document (typically in markdown format) that tells Claude how to perform a specific repeatable task.
              </p>
              <div className="rounded-xl bg-teal-50 border border-teal-200 p-5 mb-5">
                <p className="text-xs font-bold text-teal-700 uppercase tracking-wide mb-3">Example Skill — YouTube Metadata Generator</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-gray-600 mb-2">Input</p>
                    <div className="rounded-lg bg-white border border-teal-100 p-3 text-xs text-gray-700">Video script</div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-600 mb-2">Output Generated</p>
                    <ul className="space-y-1">
                      {["Title suggestions", "Video description", "Tags", "Thumbnail text", "Chapters and timestamps"].map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5 text-xs text-teal-800">
                          <CheckCircle2 size={10} className="text-teal-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3">How to Create a Skill</p>
                <div className="flex flex-wrap gap-3">
                  {["Open Settings", "Go to Capabilities", "Select Skills", "Create a new skill"].map((step, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-teal-500 text-white flex items-center justify-center text-[10px] font-bold">{i + 1}</span>
                      <span className="text-xs text-gray-700 font-medium">{step}</span>
                      {i < 3 && <ArrowRight size={10} className="text-gray-400" />}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">Claude will ask several questions and automatically generate the skill document. You can also download and edit it manually.</p>
              </div>
            </section>

            {/* ── 10. Claude Code Explained ────────────── */}
            <section id="claude-code" className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-[#013a81] border border-[#013a81] p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/70 mb-4">
                <Code2 size={12} className="text-[#009fda]" /> Claude Code
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                10. Claude Code Explained
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                Claude Code represents <strong className="text-white">Level 2</strong> of Claude usage. While Claude Chat focuses on conversations, Claude Code enables users to interact with actual codebases and development environments.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-bold text-[#009fda] uppercase tracking-wide mb-3">Claude Code Can</p>
                  <ul className="space-y-2">
                    {[
                      { text: "Read files and project structures", link: null },
                      { text: "Analyze code and suggest improvements", link: "https://ivyproschool.com/courses/iit-data-science-course" },
                      { text: "Generate new code", link: "https://ivyproschool.com/courses/iit-data-science-course" },
                      { text: "Understand entire repositories", link: null },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-blue-100">
                        <CheckCircle2 size={12} className="text-[#009fda] flex-shrink-0" />
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[#009fda] hover:underline">{item.text}</a>
                        ) : item.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-bold text-[#009fda] uppercase tracking-wide mb-3">Available Environments</p>
                  <ul className="space-y-2">
                    {["Claude desktop application", "Terminal interface", "VS Code integration", "Browser extensions"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-blue-100">
                        <Terminal size={12} className="text-[#009fda] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ── 11. Claude Code in Development ─────── */}
            <section id="code-development" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>
                <Terminal size={12} /> Development
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                11. How to Use Claude Code in Development
              </h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                <p>Claude Code can be used through multiple environments. Here&apos;s a step-by-step example using the terminal.</p>
              </div>
              <div className="rounded-xl bg-slate-900 border border-slate-700 overflow-hidden mb-5">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-slate-400 text-[10px] font-mono ml-2">Terminal</span>
                </div>
                <div className="p-4 space-y-2 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">$</span>
                    <span className="text-white">cd my-project</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">$</span>
                    <span className="text-white">claude</span>
                  </div>
                  <div className="text-slate-400 pl-4">Claude started — requesting file access...</div>
                  <div className="text-[#009fda] pl-4">✓ Repository analyzed. Ready to assist.</div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-green-400">$</span>
                    <span className="text-white">claude --init</span>
                  </div>
                  <div className="text-slate-400 pl-4">Creating CLAUDE.md — project documentation...</div>
                  <div className="text-[#009fda] pl-4">✓ CLAUDE.md created. Project context loaded.</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                <p className="text-xs font-bold text-[#013a81] uppercase tracking-wide mb-2">What CLAUDE.md Contains</p>
                <div className="flex flex-wrap gap-2">
                  {["Project architecture", "Key files", "Dependencies", "Code patterns"].map((item, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white border border-blue-200 text-[#013a81]">{item}</span>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 12. Thinking Commands ───────────────── */}
            <section id="thinking-commands" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#ede9fe", color: "#7c3aed" }}>
                <Brain size={12} /> Thinking Commands
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                12. Thinking Commands in Claude Code
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                Claude Code includes special commands that control how deeply the model analyzes a problem. Each level increases the depth of reasoning.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {[
                  { cmd: "Think", color: "#6b7280", desc: "Basic analysis" },
                  { cmd: "Think harder", color: "#3b82f6", desc: "Deeper reasoning" },
                  { cmd: "Think longer", color: "#7c3aed", desc: "Extended analysis" },
                  { cmd: "Ultra think", color: "#ef4444", desc: "Maximum depth" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border-2 p-3 text-center" style={{ borderColor: item.color, backgroundColor: `${item.color}10` }}>
                    <p className="text-xs font-bold mb-1" style={{ color: item.color }}>{item.cmd}</p>
                    <p className="text-[10px] text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-purple-50 border border-purple-200 p-4 mb-4">
                <p className="text-xs font-bold text-purple-700 uppercase tracking-wide mb-2">Example Prompt</p>
                <div className="rounded-lg bg-white border border-purple-200 p-3 font-mono text-xs text-gray-700 italic">
                  &ldquo;Ultra think: Review this codebase and identify potential performance issues.&rdquo;
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold text-gray-600 uppercase tracking-wide">Best Used For</p>
                <div className="flex flex-wrap gap-2">
                  {["Debugging complex systems", "Optimizing code", "Architecture reviews", "Performance analysis"].map((item, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700">{item}</span>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 13. Claude Co-Work ──────────────────── */}
            <section id="co-work" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#fef3c7", color: "#92400e" }}>
                <Workflow size={12} /> Co-Work
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                13. What is Claude Co-Work
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                Claude Co-Work represents <strong className="text-gray-800">Level 3</strong> — designed for users who want to{" "}
                <a href="https://ivyproschool.com/courses/ai-product-manager-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">automate workflows</a>{" "}
                and connect Claude to external systems without being developers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                {[
                  { label: "Connectors", icon: <Globe size={16} />, color: "#009fda", desc: "Link external apps" },
                  { label: "MCP Servers", icon: <Cpu size={16} />, color: "#7c3aed", desc: "Execute real functions" },
                  { label: "AI Agents", icon: <Bot size={16} />, color: "#f59e0b", desc: "Autonomous workflows" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border p-4 text-center" style={{ borderColor: `${item.color}30`, backgroundColor: `${item.color}0d` }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                      {item.icon}
                    </div>
                    <p className="text-sm font-bold text-gray-900">{item.label}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
                <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-2">Co-Work Examples</p>
                <div className="flex flex-wrap gap-2">
                  {["Organizing files", "Analyzing documents", "Managing project data", "Automating workflows"].map((item, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white border border-amber-200 text-amber-700">{item}</span>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 14. Connectors ──────────────────────── */}
            <section id="connectors" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#e0f2fe", color: "#0369a1" }}>
                <Globe size={12} /> Connectors
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                14. Claude Connectors Explained
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                Connectors allow Claude to integrate with external applications. Once connected, Claude can interact with those systems directly — reading data, creating content, and triggering actions.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {CONNECTORS.map((conn, i) => (
                  <div
                    key={i}
                    className="px-3 py-1.5 rounded-full border text-xs font-bold"
                    style={{ borderColor: `${conn.color}40`, backgroundColor: `${conn.color}10`, color: conn.color }}
                  >
                    {conn.name}
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-gray-50 border border-gray-200 p-4 mb-4">
                <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3">How to Add Connectors</p>
                <div className="space-y-2">
                  {["Open Claude settings", "Navigate to Connectors", "Click Browse connectors", "Authorize the applications"].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#009fda] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">{i + 1}</div>
                      <p className="text-sm text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
                <p className="text-xs font-bold text-[#013a81] uppercase tracking-wide mb-2">Example Use Case — Google Drive</p>
                <div className="rounded-lg bg-white border border-blue-200 p-3 font-mono text-xs text-gray-700 italic">
                  &ldquo;Analyze all financial reports in my drive and summarize key trends.&rdquo;
                </div>
                <p className="text-xs text-blue-600 mt-2">Claude retrieves documents from Drive and analyzes them automatically.</p>
              </div>
            </section>

            {/* ── 15. MCP ─────────────────────────────── */}
            <section id="mcp" className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-purple-50 border border-purple-100 p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-purple-700 mb-4">
                <Cpu size={12} /> MCP Protocol
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                15. What is MCP (Model Context Protocol)
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-xl">
                MCP (Model Context Protocol) is a system that allows AI models to interact with external tools and services in a structured way. An MCP server contains three components:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {MCP_COMPONENTS.map((comp, i) => (
                  <div key={i} className="rounded-2xl bg-white border shadow-sm p-5 hover:shadow-md transition-shadow" style={{ borderColor: `${comp.color}30` }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: comp.bg, color: comp.color }}>
                      {comp.icon}
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-2">
                      <span className="mr-1 text-xs font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: comp.bg, color: comp.color }}>{i + 1}</span>
                      {comp.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3">{comp.desc}</p>
                    <div className="space-y-1">
                      {comp.examples.map((ex, j) => (
                        <div key={j} className="flex items-center gap-1.5 text-[10px] text-gray-500">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: comp.color }} />
                          {ex}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-white border border-purple-200 p-5">
                <p className="text-xs font-bold text-purple-700 uppercase tracking-wide mb-3">Example: GitHub MCP Server</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Create new repositories", "Commit code", "Create issues", "Review pull requests"].map((item, i) => (
                    <div key={i} className="rounded-lg bg-purple-50 border border-purple-100 p-2 text-center">
                      <p className="text-[10px] text-purple-700 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">Claude sends instructions to the MCP server, which performs the action and returns results.</p>
              </div>
            </section>

            {/* ── 16. Real Automation Example ─────────── */}
            <section id="automation-example" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#d1fae5", color: "#065f46" }}>
                <Zap size={12} /> Real Example
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                16. Real Example of Claude Automation
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                One powerful feature of Claude Co-Work is automating complex tasks using simple instructions. Here&apos;s a real-world scenario:
              </p>
              <div className="rounded-2xl bg-gradient-to-br from-teal-50 to-green-50 border border-teal-200 p-5 mb-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center">
                    <Bot size={14} />
                  </div>
                  <p className="text-sm font-bold text-teal-800">Scenario: Organizing Downloads Folder</p>
                </div>
                <div className="rounded-lg bg-white border border-teal-200 p-3 font-mono text-xs text-gray-700 italic mb-4">
                  &ldquo;Analyze my downloads folder and organize files into structured categories.&rdquo;
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Documents", "Images", "Videos", "Finance files"].map((item, i) => (
                    <div key={i} className="rounded-lg bg-teal-100 border border-teal-200 p-2 text-center">
                      <p className="text-[10px] text-teal-700 font-bold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-green-50 border border-green-100 p-4 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-green-800">Result</p>
                  <p className="text-sm text-green-700">A task that would normally take an hour manually is completed in minutes. Claude scans all files, identifies file types, creates folders, and automatically moves files into appropriate categories.</p>
                </div>
              </div>
            </section>

            {/* ── 17. Learning Roadmap ─────────────────── */}
            <section id="learning-roadmap" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#fef3c7", color: "#92400e" }}>
                <BookOpen size={12} /> Learning Roadmap
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                17. Claude Learning Roadmap
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-2xl">
                Follow this structured learning path to go from beginner to advanced Claude user.
              </p>
              <div className="space-y-4">
                {ROADMAP_STEPS.map((step, i) => (
                  <AccordionCard key={i} title={`Step ${step.step}: ${step.title}`} color={step.color} index={i}>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {step.tasks.map((task, j) => (
                        <span key={j} className="text-xs font-medium px-2.5 py-1 rounded-full border" style={{ color: step.color, borderColor: `${step.color}30`, backgroundColor: `${step.color}0d` }}>
                          {task}
                        </span>
                      ))}
                    </div>
                  </AccordionCard>
                ))}
              </div>
            </section>

            {/* ── 18. Why Claude is Powerful ──────────── */}
            <section id="why-powerful" className="rounded-2xl bg-gradient-to-br from-[#009fda] to-[#013a81] p-6 sm:p-8 text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                <Rocket size={12} /> Productivity Platform
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                18. Why Claude is Powerful for{" "}
                <a href="https://ivyproschool.com/courses/data-analytics-course" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200">
                  Productivity
                </a>
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                Claude is more than a chatbot. It is a <strong className="text-white">complete AI productivity platform</strong> that combines chat, code, connectors, and automation into a single powerful environment.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {CAPABILITIES.map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-3 py-2.5">
                    <span className="text-white/80">{cap.icon}</span>
                    <span className="text-xs sm:text-sm font-semibold text-white/90">{cap.label}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-white/10 border border-white/15 p-4 mb-6">
                <p className="text-xs font-bold text-white/60 uppercase tracking-wide mb-2">By Combining</p>
                <div className="flex flex-wrap gap-2">
                  {["Projects", "Artifacts", "Skills", "Claude Code", "Connectors", "MCP Servers"].map((item, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 rounded-full bg-white/20 border border-white/20 text-white">{item}</span>
                  ))}
                </div>
                <p className="text-white/70 text-sm mt-3">Claude can act as a powerful digital assistant for knowledge workers across every industry.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/courses/iit-generative-ai-course"
                  className="inline-flex items-center gap-2 rounded-xl bg-white text-[#013a81] font-bold text-sm px-5 py-2.5 hover:bg-blue-50 transition-colors shadow-sm"
                >
                  Generative AI Course <ArrowUpRight size={14} />
                </Link>
                <a
                  href="https://ivyproschool.com/bootcampregister"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/20 border border-white/30 text-white font-bold text-sm px-5 py-2.5 hover:bg-white/30 transition-colors"
                >
                  Live AI Workshop <ArrowUpRight size={14} />
                </a>
              </div>
            </section>

            {/* ── Back links ─────────────────────────── */}
            <div className="flex flex-wrap gap-3 pb-4">
              <Link href="/aihelpcenter/ai-strategy-pm" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-[#009fda] hover:text-[#013a81] transition-all shadow-sm">
                ← Back to AI Strategy (PM)
              </Link>
              <Link href="/aihelpcenter" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-[#009fda] hover:text-[#013a81] transition-all shadow-sm">
                ← All Topics
              </Link>
            </div>

          </article>

          {/* ── RIGHT: sticky sidebar ──────────────── */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* Roadmap */}
              <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-gray-200">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 sm:mb-6">Roadmap</h4>
                <div className="flex flex-col gap-2.5 max-h-80 overflow-y-auto">
                  {ROADMAP_SECTIONS.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollTo(sec.id)}
                      className={`text-left text-xs sm:text-sm font-bold transition-all border-l-4 pl-3 ${
                        activeSection === sec.id
                          ? "text-[#013a81] border-[#009fda]"
                          : "text-gray-400 border-transparent hover:text-gray-600"
                      }`}
                    >
                      {sec.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Authority Box */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-5 rounded-2xl shadow-lg border border-blue-100">
                <div className="text-center mb-4">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg flex items-center justify-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                    Industry Authority
                  </h3>
                  <p className="text-gray-600 text-xs mt-1">These tutorials are authored by Ivy Pro School founders</p>
                </div>
                <div className="space-y-4">
                  {/* Prateek */}
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-200">
                          <Image src={PrateekAgarwal} alt="Prateek Agarwal" className="w-full h-full object-cover" width={56} height={56} loading="lazy" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                          <Star className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-sm truncate">Prateek Agarwal</h4>
                        <p className="text-gray-600 text-xs truncate">Founder, Ivy Pro School</p>
                        <div className="flex items-center gap-1 mt-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#009fda]" />
                          <span className="text-xs text-gray-500">20+ years experience as an AI/ML Leader</span>
                        </div>
                      </div>
                      <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition-colors" title="View LinkedIn Profile">
                        <LinkedInSVG className="h-5 w-5 text-blue-600" />
                      </a>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-gray-700 text-xs">Worked with 50+ global firms, trained students from IIT KGP, IIM Kolkata, IIT Delhi</p>
                    </div>
                  </div>
                  {/* Eeshani */}
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange-200">
                          <Image src={eeshani} alt="Eeshani Agrawal" className="w-full h-full object-cover" width={56} height={56} loading="lazy" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-orange-500 rounded-full p-1">
                          <Star className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-sm truncate">Eeshani Agrawal</h4>
                        <p className="text-gray-600 text-xs truncate">Co-Founder, Ivy Pro School</p>
                        <div className="flex items-center gap-1 mt-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#009fda]" />
                          <span className="text-xs text-gray-500">20+ years as a Data/AI Consultant</span>
                        </div>
                      </div>
                      <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-orange-50 hover:bg-orange-100 p-2 rounded-lg transition-colors" title="View LinkedIn Profile">
                        <LinkedInSVG className="h-5 w-5 text-blue-600" />
                      </a>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-gray-700 text-xs">Trained 9,000+ professionals across Top IITs, IIMs, and ISI</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-100">
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-blue-500" />
                      <span>Industry Experts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-blue-500" />
                      <span>20+ Years Each</span>
                    </div>
                  </div>
                  <p className="text-xs text-center text-gray-500 mt-3 italic">All content reviewed by Ivy&apos;s expert faculty team</p>
                </div>
              </div>

              {/* Advanced Courses */}
              <div className="p-4 sm:p-5 rounded-3xl shadow-2xl text-white" style={{ background: "linear-gradient(135deg, #009fda, #013a81)" }}>
                <div className="text-center mb-5">
                  <h3 className="font-extrabold text-lg sm:text-xl leading-tight">Advanced Courses</h3>
                  <p className="text-blue-100 text-[11px] opacity-70 mt-1">Fast-track your career with Ivy.</p>
                </div>
                <div className="flex flex-col gap-2">
                  {COURSES.map((course, i) => (
                    <a
                      key={i}
                      href={course.link}
                      className="group flex items-center justify-between w-full p-2 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-8 flex-shrink-0 flex items-center justify-center overflow-hidden">
                          <Image loading="lazy" src={ivy} alt="Ivy Logo" className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <span className="text-[12px] font-bold leading-tight text-white group-hover:text-[#003366] transition-colors duration-300 truncate">
                          {course.name}
                        </span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:text-[#003366] transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </aside>

        </div>
      </main>

    </div>
  );
}
