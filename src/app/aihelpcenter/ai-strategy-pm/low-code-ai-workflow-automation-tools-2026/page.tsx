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
  Star,
  ArrowUpRight,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Brain,
  Play,
  Settings,
  Workflow,
  Users,
  Layers,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  Bot,
  Globe,
  Code2,
  Rocket,
  BarChart2,
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

/* ─── roadmap sections ───────────────────────────── */
const ROADMAP_SECTIONS = [
  { id: "introduction", title: "Introduction" },
  { id: "what-is", title: "What is AI Workflow Automation" },
  { id: "low-code-tools", title: "Understanding Low-Code Tools" },
  { id: "why-growing", title: "Why It's Growing" },
  { id: "business-functions", title: "Key Business Functions" },
  { id: "effective-tool", title: "What Makes an Effective Tool" },
  { id: "key-trends", title: "Key Trends in 2026" },
  { id: "tool-landscape", title: "Tool Landscape" },
  { id: "top-tools", title: "Top Tools in 2026" },
  { id: "use-cases", title: "Real-World Use Cases" },
  { id: "build-workflow", title: "Build Your First Workflow" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "choosing-tool", title: "Choosing the Right Tool" },
  { id: "future", title: "The Future" },
  { id: "final-thoughts", title: "Final Thoughts" },
];

/* ─── tool categories ────────────────────────────── */
const TOOL_CATEGORIES = [
  {
    label: "AI-First Platforms",
    desc: "Built for production AI systems with evaluation, versioning & governance",
    tools: ["Vellum AI", "StackAI"],
    color: "#009fda",
    bg: "#e0f2fe",
    icon: <Brain size={16} />,
    badge: "Best for Scale",
  },
  {
    label: "No-Code + AI",
    desc: "Quick wins via app integrations with basic AI capabilities",
    tools: ["Zapier", "Make"],
    color: "#7c3aed",
    bg: "#ede9fe",
    icon: <Zap size={16} />,
    badge: "Best for Speed",
  },
  {
    label: "Developer-First",
    desc: "Full control and flexibility for technical teams",
    tools: ["n8n", "Pipedream"],
    color: "#059669",
    bg: "#d1fae5",
    icon: <Code2 size={16} />,
    badge: "Best for Customization",
  },
  {
    label: "Enterprise Suite",
    desc: "Large-scale governance and compliance across departments",
    tools: ["Power Automate", "Workato", "Tray.ai", "UiPath"],
    color: "#f59e0b",
    bg: "#fef3c7",
    icon: <Globe size={16} />,
    badge: "Best for Enterprise",
  },
];

/* ─── top tools ──────────────────────────────────── */
const TOP_TOOLS = [
  {
    name: "Vellum AI",
    type: "AI-First Platform",
    color: "#009fda",
    bg: "#e0f2fe",
    icon: <Brain size={20} />,
    desc: "Vellum is emerging as a strong AI-first platform focused on building, testing, and deploying AI workflows. It combines a visual builder with advanced capabilities like evaluations, versioning, and observability.",
    bestFor: "Teams building reliable AI systems with governance in place",
    features: ["Prompt evaluation", "Version control", "Detailed observability", "Visual builder"],
  },
  {
    name: "Zapier",
    type: "No-Code + AI",
    color: "#f59e0b",
    bg: "#fef3c7",
    icon: <Zap size={20} />,
    desc: "Zapier remains one of the easiest tools for getting started with automation. Its strength lies in its vast library of integrations and its simple, intuitive interface.",
    bestFor: "Lightweight workflows where speed and simplicity matter most",
    features: ["5,000+ app integrations", "Simple drag-and-drop", "AI steps built-in", "Fast deployment"],
  },
  {
    name: "Make (Integromat)",
    type: "No-Code + AI",
    color: "#6d00cc",
    bg: "#f3e8ff",
    icon: <Settings size={20} />,
    desc: "Make provides more flexibility than Zapier, especially for multi-step workflows and data transformations. It is often preferred by operations teams handling high-volume processes.",
    bestFor: "Operations teams with high-volume, multi-step workflows",
    features: ["Visual data flow", "Complex branching", "Data transformation", "High-volume processing"],
  },
  {
    name: "n8n",
    type: "Developer-First",
    color: "#059669",
    bg: "#d1fae5",
    icon: <Code2 size={20} />,
    desc: "n8n is an open-source workflow automation tool that offers high flexibility and control. It is ideal for organizations that want to self-host workflows or customize them extensively.",
    bestFor: "Organizations needing self-hosted or fully customized workflows",
    features: ["Open-source", "Self-hostable", "400+ integrations", "Custom code nodes"],
  },
  {
    name: "Power Automate",
    type: "Enterprise Suite",
    color: "#0078d4",
    bg: "#dbeafe",
    icon: <Workflow size={20} />,
    desc: "For organizations already using Microsoft tools, Power Automate is a natural choice. It integrates deeply with Microsoft 365, Teams, and Azure services, combining cloud and desktop automation (RPA).",
    bestFor: "Microsoft-centric organizations needing RPA + cloud automation",
    features: ["Microsoft 365 integration", "Desktop RPA", "AI Builder", "Teams integration"],
  },
  {
    name: "Workato / Tray.ai",
    type: "Enterprise Suite",
    color: "#ef4444",
    bg: "#fee2e2",
    icon: <Globe size={20} />,
    desc: "These platforms are designed for enterprise-grade integrations and automation. They offer strong governance, collaboration features, and scalability for large organizations managing complex cross-department workflows.",
    bestFor: "Large enterprises managing complex multi-department workflows",
    features: ["Enterprise governance", "Advanced security", "Team collaboration", "Scalable architecture"],
  },
];

/* ─── use cases ──────────────────────────────────── */
const USE_CASES = [
  {
    title: "AI-Powered Lead Management",
    icon: <Users size={18} />,
    color: "#009fda",
    bg: "#e0f2fe",
    desc: "AI can automatically process incoming leads, enrich their data, score them based on intent, and route them to the right sales team. This reduces response time and increases conversion rates.",
    impact: "Up to 80% faster lead response",
    tools: ["Zapier", "Make", "Vellum AI"],
  },
  {
    title: "Automated Customer Support Triage",
    icon: <Bot size={18} />,
    color: "#7c3aed",
    bg: "#ede9fe",
    desc: "Incoming support tickets can be analyzed by AI, categorized based on urgency, and assigned to the appropriate team. AI can also generate initial responses, reducing workload on support agents.",
    impact: "60% faster ticket resolution",
    tools: ["n8n", "Power Automate", "Zapier"],
  },
  {
    title: "Resume Screening & Hiring Automation",
    icon: <GraduationCap size={18} />,
    color: "#059669",
    bg: "#d1fae5",
    desc: "HR teams can use AI workflows to screen resumes, shortlist candidates, and generate interview questions. This significantly speeds up the hiring process while improving consistency.",
    impact: "70% reduction in screening time",
    tools: ["Make", "Workato", "n8n"],
  },
  {
    title: "Marketing Content Automation",
    icon: <TrendingUp size={18} />,
    color: "#f59e0b",
    bg: "#fef3c7",
    desc: "AI workflows can generate social media posts, email campaigns, and ad copies based on campaign goals and audience data. This enables faster content production at scale.",
    impact: "10x content output, same team size",
    tools: ["Zapier", "Make", "Vellum AI"],
  },
  {
    title: "Internal Reporting & Insights",
    icon: <BarChart2 size={18} />,
    color: "#ef4444",
    bg: "#fee2e2",
    desc: "Instead of manually preparing reports, AI can collect data from multiple sources, analyze it, and generate summaries with actionable insights—fully automated on a schedule.",
    impact: "Saves 5–10 hours of reporting weekly",
    tools: ["Power Automate", "Workato", "n8n"],
  },
];

/* ─── workflow steps ─────────────────────────────── */
const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Identify a High-Impact Use Case",
    color: "#009fda",
    desc: "Start with a process that is repetitive, time-consuming, and rule-based with some decision-making. This ensures quick wins and measurable impact from the very beginning.",
  },
  {
    step: "02",
    title: "Map the Workflow",
    color: "#7c3aed",
    desc: "Break the process into clear steps: Input (data source), Processing (AI decision or transformation), and Output (action taken). This clarity is essential before building anything.",
  },
  {
    step: "03",
    title: "Choose the Right Tool",
    color: "#059669",
    desc: "Select a platform based on your team's technical capability, complexity of the workflow, and integration requirements. Avoid over-engineering in the beginning.",
  },
  {
    step: "04",
    title: "Build and Test",
    color: "#f59e0b",
    desc: "Create the workflow using the platform's visual builder. Test it with real data and identify areas for improvement before going live.",
  },
  {
    step: "05",
    title: "Add Monitoring and Evaluation",
    color: "#ef4444",
    desc: "Track performance metrics such as accuracy, time saved, and cost per execution. This helps ensure reliability and continuous improvement over time.",
  },
  {
    step: "06",
    title: "Scale and Optimize",
    color: "#8b5cf6",
    desc: "Once the workflow is stable, automate more processes, reuse components, and improve efficiency. This is where compounding benefits begin to appear.",
  },
];

/* ─── courses ────────────────────────────────────── */
const COURSES = [
  { name: "AI Product Manager", link: "/courses/ai-product-manager-course" },
  { name: "AI for Entrepreneurs", link: "/courses/ai-for-entrepreneurs-course" },
  { name: "Generative AI (IIT)", link: "/courses/iit-generative-ai-course" },
  { name: "AI & Machine Learning", link: "/courses/ai-machine-learning-course" },
  { name: "Data Science & ML", link: "/courses/data-science-and-ml-course" },
  { name: "Data Analytics", link: "/courses/data-analytics-course" },
  { name: "Data Science Chennai", link: "/courses/data-science-course-chennai" },
];

/* ─── tool tab component ─────────────────────────── */
const ToolTab = ({
  tool,
  active,
  onClick,
}: {
  tool: (typeof TOP_TOOLS)[0];
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-left transition-all w-full"
    style={{
      backgroundColor: active ? tool.bg : "transparent",
      border: `1px solid ${active ? tool.color + "40" : "transparent"}`,
    }}
  >
    <div
      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{
        backgroundColor: active ? tool.color : "#f3f4f6",
        color: active ? "white" : "#9ca3af",
      }}
    >
      {tool.icon}
    </div>
    <div className="min-w-0">
      <div
        className="text-xs font-bold truncate"
        style={{ color: active ? tool.color : "#374151" }}
      >
        {tool.name}
      </div>
      <div className="text-[10px] text-gray-400 truncate">{tool.type}</div>
    </div>
  </button>
);

/* ─── main page ──────────────────────────────────── */
export default function LowCodeAIWorkflowPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showReviewPrompt, setShowReviewPrompt] = useState(false);
  const [reviewPromptShown, setReviewPromptShown] = useState(false);
  const [activeTool, setActiveTool] = useState(0);

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

  const activeTool_ = TOP_TOOLS[activeTool];

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
          <span className="text-gray-800 font-medium">Low-Code AI Workflow Automation Tools 2026</span>
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#009fda] via-[#14b8a6] to-[#013a81]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* left text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1.5 text-xs font-bold text-yellow-800 uppercase tracking-wider mb-5">
              <Workflow size={12} className="text-yellow-600" />
              AI Strategy (PM) · Workflow Automation
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
              Top{" "}
              <span className="bg-gradient-to-r from-[#009fda] to-[#013a81] bg-clip-text text-transparent">
                Low-Code AI Workflow
              </span>{" "}
              Automation Tools in 2026 + How to Implement Them
            </h1>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-7">
              From AI experiments to AI-driven operations — discover the top low-code tools, understand the full landscape, and learn how to build your first AI workflow step by step.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Image src={ivy} alt="Ivy Pro School" width={16} height={16} className="rounded-full" />
                Ivy Pro School
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Clock size={11} />
                ~18 min read
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <BookOpen size={11} />
                April 16, 2026
              </div>
            </div>
          </div>

          {/* right — tool landscape visual */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              <div className="bg-[#013a81] px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-[#009fda]" />
                </div>
                <span className="text-white text-xs font-semibold ml-2">AI Workflow Tool Landscape — 2026</span>
              </div>
              <div className="p-5 space-y-3">
                {TOOL_CATEGORIES.map((cat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl p-3 border"
                    style={{ borderColor: `${cat.color}30`, backgroundColor: cat.bg }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: cat.color, color: "#fff" }}
                    >
                      {cat.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: cat.color }}>{cat.badge}</div>
                      <div className="text-sm font-bold text-gray-900">{cat.label}</div>
                      <div className="text-[10px] text-gray-500 truncate">{cat.tools.join(" · ")}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-teal-50 border-t border-teal-100 px-4 py-3 flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-[#009fda] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap size={12} className="text-white" />
                </div>
                <p className="text-[10px] text-[#013a81] leading-snug">
                  <strong>2026 Insight:</strong> AI is no longer an add-on. It&apos;s becoming the default layer through which all business workflows operate.
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

      {/* ── Main Grid ────────────────────────────────── */}
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

            {/* YouTube Video */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              <div className="bg-gradient-to-r from-red-500 to-red-700 px-5 py-3 flex items-center gap-2">
                <Play size={14} className="text-white" fill="white" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">Watch: n8n AI Automation — Low-Code Workflow Guide</span>
              </div>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/elx-NMCbr5I"
                  title="n8n AI Automation — Low-Code AI Workflow Tools 2026"
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
                  From AI Experiments to AI-Driven Operations
                </h2>
                <p className="text-base sm:text-lg border-l-4 border-[#009fda] pl-4 italic text-gray-700 mb-5">
                  &ldquo;The real competitive advantage in 2026 is no longer about using AI tools. It is about integrating AI into workflows so that processes run automatically, intelligently, and at scale.&rdquo;
                </p>
                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Over the past two years, businesses have rapidly adopted AI tools like ChatGPT, Copilot, and other generative platforms. But while adoption has increased, most organizations are still stuck in the experimentation phase. Teams use AI for isolated tasks — writing emails, summarizing documents, or generating reports — but very few have successfully embedded{" "}
                    <a href="https://ivyproschool.com/courses/ai-for-entrepreneurs-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                      AI Workflow Automation
                    </a>{" "}
                    into their daily operations.
                  </p>
                  <p>
                    In 2026, the real competitive advantage is no longer about using AI tools. It is about integrating AI into workflows so that processes run automatically, intelligently, and at scale. This shift — from manual AI usage to automated AI workflows — is redefining how businesses operate.
                  </p>
                  <p>
                    <a href="https://ivyproschool.com/courses/ai-for-entrepreneurs-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                      Low-Code AI Workflow Automation tools
                    </a>{" "}
                    are at the center of this transformation, enabling companies to move faster without relying entirely on engineering teams.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    "Embed AI in daily operations",
                    "Automate repetitive tasks",
                    "Scale without large tech teams",
                    "Reduce time-to-deploy",
                    "Enable non-technical users",
                    "Connect existing tools with AI",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-xl bg-teal-50 border border-teal-100 px-3 py-2">
                      <CheckCircle2 size={13} className="text-teal-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-teal-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 2. What is AI Workflow Automation ───── */}
            <section id="what-is" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>
                <Brain size={12} /> Core Concept
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What is AI Workflow Automation?</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                AI workflow automation refers to the use of artificial intelligence to execute multi-step business processes with minimal human intervention. These workflows combine decision-making, data processing, and system integrations into a seamless flow. Instead of employees manually performing repetitive tasks, AI systems can now handle them end-to-end.
              </p>
              <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5 mb-6">
                <p className="text-sm font-bold text-[#013a81] mb-4">Example: AI-Powered Lead Management Flow</p>
                <div className="relative">
                  <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-[#009fda]/30 hidden sm:block" />
                  <div className="space-y-3">
                    {[
                      "Incoming lead arrives from a web form",
                      "AI analyzes lead data and scores intent",
                      "Data is enriched with company and contact info",
                      "Lead is routed to the right sales rep automatically",
                      "Personalized email follow-up is triggered instantly",
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-3 sm:pl-3">
                        <div className="w-6 h-6 rounded-full bg-[#009fda] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 z-10">{i + 1}</div>
                        <p className="text-sm text-[#013a81] leading-relaxed pt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-gradient-to-r from-[#013a81] to-[#009fda] p-4 text-white">
                <p className="text-sm leading-relaxed">
                  <strong>This is not just automation.</strong> It is <em>intelligent automation</em>, where systems make context-aware decisions rather than simply following fixed rules. Traditional rule-based automation can only follow predefined scripts — AI automation can reason, adapt, and improve.
                </p>
              </div>
            </section>

            {/* ── 3. Understanding Low-Code Tools ───── */}
            <section id="low-code-tools" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#ede9fe", color: "#7c3aed" }}>
                <Layers size={12} /> Fundamentals
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Understanding Low-Code AI Workflow Automation Tools</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                <a href="https://ivyproschool.com/courses/ai-for-entrepreneurs-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                  Low-Code AI workflow automation tools
                </a>{" "}
                are platforms that allow users to design and deploy AI-powered workflows using visual interfaces, minimal coding, or even natural language prompts. They act as a bridge between business users and technical systems — enabling{" "}
                <a href="https://ivyproschool.com/courses/ai-for-entrepreneurs-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                  No-Code AI Development
                </a>{" "}
                at scale.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {[
                  {
                    title: "Business Applications",
                    desc: "CRM systems, email platforms, databases, project management tools",
                    color: "#009fda",
                    bg: "#e0f2fe",
                    icon: <Briefcase size={18} />,
                  },
                  {
                    title: "AI Models",
                    desc: "Analyze, generate, and make decisions using LLMs and specialized models",
                    color: "#7c3aed",
                    bg: "#ede9fe",
                    icon: <Brain size={18} />,
                  },
                  {
                    title: "Workflow Logic",
                    desc: "Rules, routing, and sequencing that determine how tasks move between steps",
                    color: "#059669",
                    bg: "#d1fae5",
                    icon: <Workflow size={18} />,
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border p-4 text-center" style={{ borderColor: `${item.color}30`, backgroundColor: item.bg }}>
                    <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: item.color, color: "#fff" }}>{item.icon}</div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  These tools enable <strong>non-technical professionals</strong> — such as marketers, HR managers, and operations teams — to build workflows independently, while still allowing developers to extend and customize them when needed. The result is a unified system where AI is not a standalone tool but an <strong>integrated layer within business operations</strong>.
                </p>
              </div>
            </section>

            {/* ── 4. Why Growing ──────────────────────── */}
            <section id="why-growing" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#fef3c7", color: "#b45309" }}>
                <TrendingUp size={12} /> Growth Drivers
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Why Low-Code AI Workflow Automation is Growing Rapidly</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                One of the biggest barriers to AI adoption has not been the technology itself, but the difficulty of integrating it into real-world workflows. Low-code platforms address this gap by simplifying integration and enabling faster deployment.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Speed to Market",
                    desc: "Traditional software development cycles can take weeks or months. Low-code AI workflows can be designed, tested, and deployed in hours or days — dramatically accelerating innovation.",
                    color: "#009fda",
                    bg: "#e0f2fe",
                    icon: <Rocket size={16} />,
                  },
                  {
                    title: "Democratization of Technology",
                    desc: "Non-technical teams are increasingly expected to create solutions independently. Low-code platforms empower these users without requiring engineering support — reducing bottlenecks.",
                    color: "#7c3aed",
                    bg: "#ede9fe",
                    icon: <Users size={16} />,
                  },
                  {
                    title: "Integration Complexity",
                    desc: "Organizations struggle to connect AI models with existing tools. Low-code platforms reduce this friction with pre-built connectors, APIs, and visual interfaces.",
                    color: "#059669",
                    bg: "#d1fae5",
                    icon: <Globe size={16} />,
                  },
                  {
                    title: "Continuous Improvement Needs",
                    desc: "AI systems require constant testing, versioning, and monitoring. Unlike traditional software, AI outputs can vary — making evaluation and observability essential capabilities.",
                    color: "#f59e0b",
                    bg: "#fef3c7",
                    icon: <Target size={16} />,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start rounded-xl border p-4" style={{ borderColor: `${item.color}30`, backgroundColor: `${item.color}08` }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.color, color: "#fff" }}>{item.icon}</div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 5. Business Functions ───────────────── */}
            <section id="business-functions" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#d1fae5", color: "#059669" }}>
                <Briefcase size={12} /> Business Impact
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Key Business Functions Being Transformed</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                AI workflow automation is not limited to a single department. Its impact spans across the entire organization. Here is how each function is being reimagined with{" "}
                <a href="https://ivyproschool.com/courses/ai-for-entrepreneurs-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                  Business Operations Automation
                </a>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    dept: "Sales & Marketing",
                    tasks: ["Lead scoring & enrichment", "Personalized outreach automation", "Campaign optimization"],
                    color: "#009fda",
                    bg: "#e0f2fe",
                  },
                  {
                    dept: "HR & Learning & Development",
                    tasks: ["Resume screening", "Interview question generation", "Onboarding process automation"],
                    color: "#7c3aed",
                    bg: "#ede9fe",
                  },
                  {
                    dept: "Customer Support",
                    tasks: ["Ticket classification & routing", "Auto-generated responses", "Escalation workflows"],
                    color: "#059669",
                    bg: "#d1fae5",
                  },
                  {
                    dept: "Operations & Supply Chain",
                    tasks: ["Automated reporting", "Vendor communication", "Demand analysis & forecasting"],
                    color: "#f59e0b",
                    bg: "#fef3c7",
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border p-4" style={{ borderColor: `${item.color}30`, backgroundColor: item.bg }}>
                    <h3 className="text-sm font-bold mb-3" style={{ color: item.color }}>{item.dept}</h3>
                    <ul className="space-y-1.5">
                      {item.tasks.map((task, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                          <CheckCircle2 size={12} className="flex-shrink-0" style={{ color: item.color }} />{task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 6. Effective Tool ───────────────────── */}
            <section id="effective-tool" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>
                <Target size={12} /> Selection Criteria
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">What Makes an Effective AI Workflow Automation Tool?</h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6">
                Not all tools are created equal. The most effective platforms strike a balance between usability and depth. Here are the critical features to evaluate.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    feature: "Ease of Use",
                    desc: "Intuitive interface that allows non-technical users to design workflows without extensive training",
                    icon: <Zap size={16} />,
                    color: "#009fda",
                    priority: "High",
                  },
                  {
                    feature: "AI-Native Capabilities",
                    desc: "Built-in support for semantic routing, retrieval, decision-making, and LLM orchestration",
                    icon: <Brain size={16} />,
                    color: "#7c3aed",
                    priority: "High",
                  },
                  {
                    feature: "Testing & Versioning",
                    desc: "Ability to compare different models or prompts and safely deploy changes with rollback options",
                    icon: <Settings size={16} />,
                    color: "#059669",
                    priority: "Critical",
                  },
                  {
                    feature: "Observability",
                    desc: "Detailed insights into workflow performance — including logs, costs, and execution paths",
                    icon: <BarChart2 size={16} />,
                    color: "#f59e0b",
                    priority: "Critical",
                  },
                  {
                    feature: "Governance & Security",
                    desc: "Role-based access, audit trails, and compliance features to ensure safe deployment at scale",
                    icon: <ShieldCheck size={16} />,
                    color: "#ef4444",
                    priority: "High",
                  },
                  {
                    feature: "Scalability",
                    desc: "Ability to handle increasing workloads without performance degradation or architectural rework",
                    icon: <Rocket size={16} />,
                    color: "#8b5cf6",
                    priority: "High",
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-gray-100 bg-gray-50 p-4 hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${item.color}18`, color: item.color }}>{item.icon}</div>
                        <h3 className="text-sm font-bold text-gray-900">{item.feature}</h3>
                      </div>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: item.priority === "Critical" ? "#fee2e2" : "#e0f2fe",
                          color: item.priority === "Critical" ? "#dc2626" : "#0369a1",
                        }}
                      >
                        {item.priority}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed pl-10">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 7. Key Trends ───────────────────────── */}
            <section id="key-trends" className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-[#013a81] border border-[#013a81] p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/70 mb-5">
                <TrendingUp size={12} className="text-[#009fda]" /> 2026 Trends
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Key Trends Shaping AI Workflow Automation in 2026</h2>
              <p className="text-white/70 text-sm sm:text-base mb-7 max-w-xl">
                The evolution of AI workflow automation is driven by several important trends. Understanding these helps you plan your{" "}
                <a href="https://ivyproschool.com/courses/ai-for-entrepreneurs-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] hover:underline font-semibold">
                  AI Strategy &amp; Roadmap
                </a>{" "}
                effectively.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "AI Agents + Workflows Converging",
                    desc: "Workflows are no longer static sequences — they are becoming dynamic systems that can adapt, make decisions, and evolve over time autonomously.",
                    icon: <Bot size={16} />,
                  },
                  {
                    title: "Rise of Hybrid Logic",
                    desc: "Modern workflows combine traditional rule-based systems with AI-driven decision-making, letting organizations maintain control while leveraging AI flexibility.",
                    icon: <Brain size={16} />,
                  },
                  {
                    title: "Built-in Evaluation Mechanisms",
                    desc: "Businesses now expect to measure AI performance, compare approaches, and make data-driven deployment decisions. Evaluation is becoming a standard feature.",
                    icon: <Target size={16} />,
                  },
                  {
                    title: "Governance as a Core Feature",
                    desc: "As AI deepens into operations, organizations need robust controls to ensure compliance, security, and accountability at every workflow step.",
                    icon: <ShieldCheck size={16} />,
                  },
                  {
                    title: "AI as Default Workflow Layer",
                    desc: "AI is transitioning from being a standalone tool to becoming a foundational layer embedded within all business workflows by default.",
                    icon: <Layers size={16} />,
                  },
                  {
                    title: "Natural Language Workflow Building",
                    desc: "The barrier to building AI workflows continues to drop, with natural language interfaces allowing business users to describe and build automations conversationally.",
                    icon: <Globe size={16} />,
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#009fda]/20 text-[#009fda] flex items-center justify-center flex-shrink-0">{item.icon}</div>
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 8. Tool Landscape ───────────────────── */}
            <section id="tool-landscape" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#e0e7ff", color: "#4338ca" }}>
                <Layers size={12} /> Tool Categories
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">The AI Workflow Tool Landscape (Simplified)</h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6">
                While there are dozens of tools available, most fall into four clear categories. Understanding this classification will help you make faster, better decisions about which platform fits your needs and stage.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {TOOL_CATEGORIES.map((cat, i) => (
                  <div key={i} className="rounded-2xl border p-5 hover:shadow-md transition-shadow" style={{ borderColor: `${cat.color}30`, backgroundColor: `${cat.color}08` }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: cat.color, color: "#fff" }}>{cat.icon}</div>
                        <h3 className="text-base font-bold text-gray-900">{cat.label}</h3>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full" style={{ backgroundColor: cat.bg, color: cat.color }}>{cat.badge}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{cat.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.tools.map((tool, j) => (
                        <span key={j} className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: cat.bg, color: cat.color }}>{tool}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 9. Top Tools (tab switcher) ─────────── */}
            <section id="top-tools" className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 p-6 sm:p-8">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#013a81] mb-4">
                  <Zap size={12} /> Top Tools
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Top Low-Code AI Tools to Consider in 2026</h2>
                <p className="text-gray-500 text-sm sm:text-base max-w-xl">
                  Choosing the right tool depends on your use case, team structure, and scalability requirements. Select each tool below to explore details. Develop hands-on skills with our{" "}
                  <a href="https://ivyproschool.com/courses/ai-for-entrepreneurs-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                    AI Workflow Automation course
                  </a>.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* tab list */}
                <div className="lg:col-span-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                  {TOP_TOOLS.map((tool, i) => (
                    <ToolTab key={i} tool={tool} active={activeTool === i} onClick={() => setActiveTool(i)} />
                  ))}
                </div>
                {/* detail panel */}
                <div className="lg:col-span-2">
                  <div
                    className="rounded-2xl bg-white border shadow-md p-5 sm:p-7 h-full transition-all duration-200"
                    style={{ borderColor: activeTool_.color }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: activeTool_.bg, color: activeTool_.color }}>
                        {activeTool_.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{activeTool_.name}</h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: activeTool_.bg, color: activeTool_.color }}>{activeTool_.type}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">{activeTool_.desc}</p>
                    <div className="rounded-xl mb-4 p-3.5" style={{ backgroundColor: activeTool_.bg }}>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: activeTool_.color }}>Best For</p>
                      <p className="text-sm font-medium" style={{ color: activeTool_.color }}>{activeTool_.bestFor}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Key Features</p>
                      <div className="grid grid-cols-2 gap-2">
                        {activeTool_.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                            <CheckCircle2 size={12} className="flex-shrink-0" style={{ color: activeTool_.color }} />{feat}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 rounded-xl bg-blue-50 border border-blue-100 p-4">
                <p className="text-sm text-[#013a81]">
                  <strong>Want to master these tools?</strong> Explore our{" "}
                  <a href="https://ivyproschool.com/courses/ai-for-entrepreneurs-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                    AI for Entrepreneurs course
                  </a>{" "}
                  — covering low-code AI platforms, workflow automation, and{" "}
                  <a href="https://ivyproschool.com/courses/ai-product-manager-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                    AI Product Management
                  </a>{" "}
                  strategies for real business impact.
                </p>
              </div>
            </section>

            {/* ── 10. Real-World Use Cases ────────────── */}
            <section id="use-cases" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#d1fae5", color: "#059669" }}>
                <Target size={12} /> Real-World Use Cases
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Real-World Use Cases You Can Implement Immediately</h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-2xl">
                Understanding tools is important, but real value comes from applying them to business problems. These are high-impact use cases that organizations are already implementing. Watch the{" "}
                <a href="https://youtu.be/elx-NMCbr5I?si=TUmZC07uXcTKy2ph" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                  n8n AI Automation guide
                </a>{" "}
                above for step-by-step examples of{" "}
                <a href="https://youtu.be/elx-NMCbr5I?si=TUmZC07uXcTKy2ph" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                  AI Workflow Implementation
                </a>.
              </p>
              <div className="space-y-4">
                {USE_CASES.map((uc, i) => (
                  <div key={i} className="rounded-2xl border p-5 hover:shadow-md transition-shadow" style={{ borderColor: `${uc.color}25`, backgroundColor: `${uc.color}06` }}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: uc.color, color: "#fff" }}>{uc.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                          <h3 className="text-base font-bold text-gray-900">{i + 1}. {uc.title}</h3>
                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: uc.bg, color: uc.color }}>{uc.impact}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">{uc.desc}</p>
                        <div className="flex flex-wrap gap-2 items-center">
                          <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Tools:</span>
                          {uc.tools.map((tool, j) => (
                            <span key={j} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-gray-200 text-gray-600">{tool}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 11. Build First Workflow ────────────── */}
            <section id="build-workflow" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>
                <Workflow size={12} /> Step-by-Step
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How to Build Your First AI Workflow (Step-by-Step)</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Implementing AI workflow automation does not require a massive transformation. You can start small and scale gradually. This approach works whether you use Zapier,{" "}
                <a href="https://youtu.be/elx-NMCbr5I?si=TUmZC07uXcTKy2ph" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                  n8n
                </a>
                , Power Automate, or any other{" "}
                <a href="https://youtu.be/elx-NMCbr5I?si=TUmZC07uXcTKy2ph" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                  Low-Code AI Tool
                </a>.
              </p>
              <div className="relative">
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#009fda] to-blue-300 hidden sm:block" />
                <div className="space-y-4">
                  {WORKFLOW_STEPS.map((step, i) => (
                    <div key={i} className="flex gap-5 items-start pl-0 sm:pl-3">
                      <div
                        className="w-9 h-9 rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0 z-10 shadow-md"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.step}
                      </div>
                      <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-indigo-50 border border-indigo-100 p-4">
                <p className="text-xs font-bold text-indigo-700 uppercase tracking-wide mb-2">Key Metrics to Track</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {["Accuracy of AI outputs", "Time saved per process", "Cost per workflow execution"].map((m, i) => (
                    <div key={i} className="rounded-lg bg-white border border-indigo-100 px-3 py-2 text-xs text-indigo-700 font-medium flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-indigo-500 flex-shrink-0" />{m}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 12. Common Mistakes ─────────────────── */}
            <section id="common-mistakes" className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-[#013a81] border border-[#013a81] p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/70 mb-5">
                <AlertCircle size={12} className="text-[#009fda]" /> Common Mistakes
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Common Mistakes to Avoid</h2>
              <p className="text-white/70 text-sm sm:text-base mb-7 max-w-xl">
                Many organizations struggle with AI adoption not because of the technology, but because of how they approach implementation. Avoid these common pitfalls.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Trying to Automate Everything at Once",
                    desc: "Starting too broad leads to scope creep and delayed value. Begin with one high-impact use case and validate before scaling.",
                    icon: <Layers size={16} />,
                  },
                  {
                    title: "Choosing Based on Popularity Only",
                    desc: "The most popular tool may not be the best fit. Evaluate based on your team's capability and workflow complexity — not marketing.",
                    icon: <Star size={16} />,
                  },
                  {
                    title: "Ignoring Testing and Monitoring",
                    desc: "Deploying AI workflows without evaluation leads to unreliable outputs and eroded trust. Build in monitoring and evaluation from day one.",
                    icon: <AlertCircle size={16} />,
                  },
                  {
                    title: "Over-Complicating the Workflow",
                    desc: "Complexity is the enemy of reliability. Start with the simplest viable workflow, then add sophistication as you learn what works.",
                    icon: <Brain size={16} />,
                  },
                  {
                    title: "Excluding Business Users",
                    desc: "Technical teams building workflows in isolation miss real-world context. Involve both business and technical teams from the very start.",
                    icon: <Users size={16} />,
                  },
                  {
                    title: "Skipping Governance",
                    desc: "As AI workflows touch sensitive data and critical processes, security controls and audit trails are essential — not optional features.",
                    icon: <ShieldCheck size={16} />,
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#009fda]/20 text-[#009fda] flex items-center justify-center flex-shrink-0">{item.icon}</div>
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-white/10 border border-white/15 px-5 py-4">
                <p className="text-white/80 text-sm">
                  <strong className="text-white">Key reminder:</strong> Treat your first AI workflow as a learning experiment. The goal is to validate the approach and measure impact — not to build the perfect system on the first try.
                </p>
              </div>
            </section>

            {/* ── 13. Choosing the Right Tool ─────────── */}
            <section id="choosing-tool" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#e0e7ff", color: "#4338ca" }}>
                <Target size={12} /> Decision Framework
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">How to Choose the Right Tool for Your Business</h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6">
                Use this decision framework to match your situation to the right platform. The right choice is not the &ldquo;best&rdquo; tool — it is the best fit for your current stage and goals. Learn more with our{" "}
                <a href="https://ivyproschool.com/courses/ai-for-entrepreneurs-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                  AI Strategy &amp; Roadmap course
                </a>.
              </p>
              <div className="space-y-3">
                {[
                  {
                    condition: "You need quick, simple automations",
                    choice: "Zapier or Make",
                    reason: "Fastest path to value with minimal setup and thousands of pre-built app connectors",
                    color: "#f59e0b",
                  },
                  {
                    condition: "You have strong technical capabilities",
                    choice: "n8n or Pipedream",
                    reason: "Full control, customization, and self-hosting options for engineering-driven teams",
                    color: "#059669",
                  },
                  {
                    condition: "You need enterprise-level governance",
                    choice: "Power Automate or Workato",
                    reason: "Compliance, audit trails, and deep integration with enterprise systems and identity management",
                    color: "#0078d4",
                  },
                  {
                    condition: "Your focus is scalable AI workflows",
                    choice: "Vellum AI or StackAI",
                    reason: "Built-in evaluation, versioning, and observability for production-grade AI systems",
                    color: "#009fda",
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-gray-200 bg-gray-50 p-4 hover:shadow-sm transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-2 h-10 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                        <div>
                          <p className="text-xs text-gray-500 mb-0.5">If your situation is...</p>
                          <p className="text-sm font-semibold text-gray-800">{item.condition}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-1">
                        <ArrowRight size={16} className="text-gray-400 flex-shrink-0 hidden sm:block" />
                        <div>
                          <p className="text-xs text-gray-500 mb-0.5">Best choice</p>
                          <p className="text-sm font-bold" style={{ color: item.color }}>{item.choice}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 pl-5">{item.reason}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 14. The Future ──────────────────────── */}
            <section id="future" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#fef3c7", color: "#b45309" }}>
                <Rocket size={12} /> The Future
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">The Future: AI as Your Default Workflow Layer</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                The biggest shift happening right now is that AI is no longer an add-on. It is becoming the default layer through which all workflows operate. Organizations leveraging{" "}
                <a href="https://ivyproschool.com/courses/iit-generative-ai-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                  Generative AI
                </a>{" "}
                and{" "}
                <a href="https://ivyproschool.com/courses/ai-machine-learning-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                  Machine Learning Fundamentals
                </a>{" "}
                together with workflow automation are building significant and durable competitive advantages.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                {[
                  { prediction: "Every business process will include AI", icon: <Bot size={20} />, color: "#009fda", bg: "#e0f2fe" },
                  { prediction: "Manual work will be the exception, not the norm", icon: <Workflow size={20} />, color: "#7c3aed", bg: "#ede9fe" },
                  { prediction: "Teams will focus on strategy, not execution", icon: <Brain size={20} />, color: "#059669", bg: "#d1fae5" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border p-4 text-center" style={{ borderColor: `${item.color}30`, backgroundColor: item.bg }}>
                    <div className="w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: item.color, color: "#fff" }}>{item.icon}</div>
                    <p className="text-sm font-semibold text-gray-900 leading-snug">{item.prediction}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-gradient-to-r from-[#009fda]/10 to-[#013a81]/10 border border-[#009fda]/20 p-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Understanding{" "}
                  <a href="https://ivyproschool.com/courses/data-science-course-chennai" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                    AI-Driven Data Intelligence
                  </a>{" "}
                  and{" "}
                  <a href="https://ivyproschool.com/courses/data-science-course-chennai" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                    Data Analytics &amp; Insights
                  </a>{" "}
                  will become foundational skills for every professional — not just data teams — as AI-driven workflows generate and consume data at unprecedented scale. Additionally, mastering{" "}
                  <a href="https://ivyproschool.com/courses/iit-generative-ai-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                    Enterprise AI Integration
                  </a>{" "}
                  will differentiate leaders from followers in the years ahead.
                </p>
              </div>
            </section>

            {/* ── 15. Final Thoughts ──────────────────── */}
            <section id="final-thoughts" className="rounded-2xl bg-gradient-to-br from-[#009fda] to-[#013a81] p-6 sm:p-8 text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                <Star size={12} /> Final Thoughts
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">From Learning to Building</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/85 leading-relaxed mb-7">
                <p>
                  Low-code AI workflow automation is not just another technology trend. It is a fundamental shift in how work gets done. The real opportunity lies in moving beyond learning and experimentation to actual implementation.
                </p>
                <p>
                  Whether you are exploring{" "}
                  <a href="https://ivyproschool.com/courses/iit-generative-ai-course" target="_blank" rel="noopener noreferrer" className="text-white font-semibold underline hover:text-blue-100">
                    Enterprise AI Integration
                  </a>{" "}
                  at scale or building your first{" "}
                  <a href="https://youtu.be/elx-NMCbr5I?si=TUmZC07uXcTKy2ph" target="_blank" rel="noopener noreferrer" className="text-white font-semibold underline hover:text-blue-100">
                    n8n AI Automation
                  </a>{" "}
                  workflow, the path forward is the same: start small, build, measure, and scale. Use{" "}
                  <a href="https://ivyproschool.com/courses/iit-generative-ai-course" target="_blank" rel="noopener noreferrer" className="text-white font-semibold underline hover:text-blue-100">
                    Prompt Engineering
                  </a>{" "}
                  to get the best results from your AI steps.
                </p>
                <p className="font-semibold text-white">
                  Start small. Build your first workflow. Measure the impact. Then scale. That is how organizations turn AI into real business value.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
                <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={16} className="text-[#009fda]" />
                    <p className="text-sm font-bold text-white">Ready to start if you…</p>
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Have identified a repetitive, time-consuming process",
                      "Want to reduce manual work in your team",
                      "Are ready to experiment with AI at a small scale",
                      "Have a clear measurable outcome in mind",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#009fda] flex-shrink-0 mt-1.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Rocket size={16} className="text-amber-300" />
                    <p className="text-sm font-bold text-white">Scale when you…</p>
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Have validated your first workflow with real data",
                      "Can measure time saved and output accuracy",
                      "Have buy-in from both business and tech teams",
                      "Are ready to replicate across more processes",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-300 flex-shrink-0 mt-1.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/courses/ai-for-entrepreneurs-course" className="inline-flex items-center gap-2 rounded-xl bg-white text-[#013a81] font-bold text-sm px-5 py-2.5 hover:bg-blue-50 transition-colors shadow-sm">
                  AI for Entrepreneurs Course <ArrowUpRight size={14} />
                </Link>
                <a href="https://ivyproschool.com/bootcampregister" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/20 border border-white/30 text-white font-bold text-sm px-5 py-2.5 hover:bg-white/30 transition-colors">
                  Live AI Workshop <ArrowUpRight size={14} />
                </a>
              </div>
            </section>

            {/* Back links */}
            <div className="flex flex-wrap gap-3 pb-4">
              <Link href="/aihelpcenter/ai-strategy-pm" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-[#009fda] hover:text-[#013a81] transition-all shadow-sm">
                ← Back to AI Strategy (PM)
              </Link>
              <Link href="/aihelpcenter" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-[#009fda] hover:text-[#013a81] transition-all shadow-sm">
                ← All Topics
              </Link>
            </div>

          </article>

          {/* ── RIGHT: sticky sidebar ──────────── */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* Roadmap */}
              <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-gray-200">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 sm:mb-6">Roadmap</h4>
                <div className="flex flex-col gap-3">
                  {ROADMAP_SECTIONS.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollTo(sec.id)}
                      className={`text-left text-xs sm:text-sm font-bold transition-all border-l-4 pl-3 ${activeSection === sec.id ? "text-[#013a81] border-[#009fda]" : "text-gray-400 border-transparent hover:text-gray-600"}`}
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
                          <span className="text-xs text-gray-500">20+ years as an AI/ML Leader</span>
                        </div>
                      </div>
                      <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition-colors">
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
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-100">
                          <Image src={eeshani} alt="Eeshani Agrawal" className="w-full h-full object-cover" width={56} height={56} loading="lazy" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-[#009fda] rounded-full p-1">
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
                      <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition-colors">
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
                    <a key={i} href={course.link} className="group flex items-center justify-between w-full p-2 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-8 flex-shrink-0 flex items-center justify-center overflow-hidden">
                          <Image loading="lazy" src={ivy} alt="Ivy Logo" className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <span className="text-[12px] font-bold leading-tight text-white group-hover:text-[#003366] transition-colors duration-300 truncate">{course.name}</span>
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
