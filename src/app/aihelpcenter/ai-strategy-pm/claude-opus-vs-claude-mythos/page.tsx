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
  ChevronDown,
  ArrowUpRight,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Brain,
  Layers,
  AlertCircle,
  TrendingUp,
  Lock,
  Unlock,
  BarChart2,
  Cpu,
  Globe,
  Code2,
  Shield,
  Lightbulb,
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

const ROADMAP_SECTIONS = [
  { id: "introduction", title: "Introduction" },
  { id: "what-is-new", title: "What's New in Opus 4.7?" },
  { id: "benchmarks", title: "Benchmark Deep Dive" },
  { id: "head-to-head", title: "Head-to-Head Comparison" },
  { id: "why-restricted", title: "Why is Mythos Restricted?" },
  { id: "key-insight", title: "Knowledge vs. Execution" },
  { id: "vs-46", title: "Opus 4.7 vs. Opus 4.6" },
  { id: "who-uses-what", title: "Who Should Use What?" },
  { id: "bigger-picture", title: "The Bigger Picture" },
];

const OPUS_NEW_FEATURES = [
  {
    icon: <Cpu size={18} />,
    title: "Better Vision",
    color: "#009fda",
    bg: "#e0f2fe",
    body: "Opus 4.7 now accepts images up to 2,576 pixels on the long edge — more than three times the resolution of earlier Claude models. This matters enormously for tasks like reading dense charts, processing high-quality screenshots, or extracting data from detailed diagrams.",
  },
  {
    icon: <Target size={18} />,
    title: "Sharper Instruction Following",
    color: "#013a81",
    bg: "#e0e7ff",
    body: "The model takes your instructions more literally than before. If you've been using Claude with prompts that were written for earlier models, you may need to re-tune them — Opus 4.7 will actually do what you said, including the parts you didn't fully intend.",
  },
  {
    icon: <Brain size={18} />,
    title: "Better Memory Across Sessions",
    color: "#0369a1",
    bg: "#dbeafe",
    body: "In long agentic runs, Opus 4.7 is significantly better at using file-system memory to carry context between tasks, reducing the need to re-explain background every session.",
  },
  {
    icon: <Zap size={18} />,
    title: "New xhigh Effort Level",
    color: "#009fda",
    bg: "#e0f2fe",
    body: "A new xhigh effort level gives fine-grained control over the reasoning-vs-latency tradeoff. In Claude Code, xhigh is now the default for all plans.",
  },
  {
    icon: <Layers size={18} />,
    title: "New Tokenizer",
    color: "#013a81",
    bg: "#e0e7ff",
    body: "A new tokenizer processes text differently — the same input can map to 1.0–1.35× more tokens depending on content type, which affects cost. Anthropic recommends measuring real-traffic token usage before and after upgrading.",
  },
];

const KNOWLEDGE_BENCHMARKS = [
  { name: "GPQA Diamond (PhD Reasoning)", opus: 94.2, mythos: 94.6 },
  { name: "MMLU Pro (Broad Knowledge)", opus: 90.1, mythos: 91.2 },
  { name: "Humanity's Last Exam", opus: 72.4, mythos: 74.1 },
  { name: "MATH (Mathematical Reasoning)", opus: 88.3, mythos: 89.5 },
];

const EXECUTION_BENCHMARKS = [
  { name: "SWE-bench (Software Engineering)", opus: 87.6, mythos: 93.9 },
  { name: "BrowseComp (Web Agent)", opus: 79.3, mythos: 86.9 },
  { name: "MCP Atlas (Multi-Tool Chaining)", opus: 47, mythos: 68 },
  { name: "OS World (Computer Use)", opus: 78.0, mythos: 79.6 },
  { name: "CyberGym (Cybersecurity)", opus: 55, mythos: 74 },
  { name: "Terminal-Bench (Autonomous Coding)", opus: 62, mythos: 77 },
];

const COMPARISON_ROWS = [
  {
    category: "Availability",
    opus: "Open to everyone — GA",
    mythos: "Restricted access only — Preview",
    winner: "Opus 4.7",
    winnerColor: "#009fda",
  },
  {
    category: "Pricing",
    opus: "$5 / $25 per M tokens",
    mythos: "Not publicly announced",
    winner: "Opus 4.7",
    winnerColor: "#009fda",
  },
  {
    category: "Answering Q&A",
    opus: "Excellent. Strong reasoning, reliable, literal.",
    mythos: "Excellent. Very similar performance.",
    winner: "Tie",
    winnerColor: "#6b7280",
  },
  {
    category: "PhD-Level Science",
    opus: "94.2% on GPQA Diamond",
    mythos: "~94.6% on GPQA Diamond",
    winner: "Near Tie",
    winnerColor: "#6b7280",
  },
  {
    category: "Software Engineering",
    opus: "Strong (87.6% SWE-bench)",
    mythos: "Dominant (93.9% SWE-bench)",
    winner: "Mythos",
    winnerColor: "#7c3aed",
  },
  {
    category: "Autonomous Coding",
    opus: "Good with supervision",
    mythos: "Handles long unsupervised runs",
    winner: "Mythos",
    winnerColor: "#7c3aed",
  },
  {
    category: "Web Browsing Agent",
    opus: "79.3% BrowseComp",
    mythos: "86.9% BrowseComp (+24pts)",
    winner: "Mythos",
    winnerColor: "#7c3aed",
  },
  {
    category: "Multi-Tool Workflows",
    opus: "47% MCP Atlas",
    mythos: "68% MCP Atlas (+21pts)",
    winner: "Mythos",
    winnerColor: "#7c3aed",
  },
  {
    category: "Computer Use / OS Control",
    opus: "78.0% OS World",
    mythos: "79.6% OS World (+16pts)",
    winner: "Mythos",
    winnerColor: "#7c3aed",
  },
  {
    category: "Image / Vision Quality",
    opus: "Major upgrade — up to 2,576px",
    mythos: "Also strong vision",
    winner: "Tie / Edge Opus 4.7",
    winnerColor: "#009fda",
  },
  {
    category: "Cybersecurity Capability",
    opus: "Moderate (55% CyberGym) + safeguards",
    mythos: "Very high (74%) — restricted",
    winner: "Mythos (restricted)",
    winnerColor: "#dc2626",
  },
  {
    category: "Financial Analysis",
    opus: "State-of-the-art, near top on Finance Agent",
    mythos: "Very similar, marginal edge",
    winner: "Near Tie",
    winnerColor: "#6b7280",
  },
  {
    category: "Safety Alignment",
    opus: "Well-aligned, modest improvement on 4.6",
    mythos: "Best-aligned model Anthropic has built",
    winner: "Mythos",
    winnerColor: "#7c3aed",
  },
  {
    category: "Instruction Following",
    opus: "Major improvement — very literal now",
    mythos: "Strong",
    winner: "Opus 4.7",
    winnerColor: "#009fda",
  },
  {
    category: "Memory Across Sessions",
    opus: "Significantly improved over 4.6",
    mythos: "Strong",
    winner: "Comparable",
    winnerColor: "#6b7280",
  },
];

const WHO_USES = [
  {
    useCase: "Writing, research, Q&A, analysis",
    choice: "Opus 4.7",
    choiceColor: "#009fda",
    why: "Basically identical results, fully accessible",
    icon: <BookOpen size={16} />,
  },
  {
    useCase: "Coding with your supervision",
    choice: "Opus 4.7",
    choiceColor: "#009fda",
    why: "87.6% SWE-bench is excellent; full control",
    icon: <Code2 size={16} />,
  },
  {
    useCase: "Long autonomous coding runs",
    choice: "Mythos (if available)",
    choiceColor: "#7c3aed",
    why: "+14pt gap on SWE-bench; handles unsupervised work",
    icon: <Brain size={16} />,
  },
  {
    useCase: "Building AI agents that browse the web",
    choice: "Mythos (if available)",
    choiceColor: "#7c3aed",
    why: "+24pt gap on BrowseComp is decisive",
    icon: <Globe size={16} />,
  },
  {
    useCase: "Finance, legal, professional documents",
    choice: "Opus 4.7",
    choiceColor: "#009fda",
    why: "State-of-the-art; near-tie with Mythos",
    icon: <Briefcase size={16} />,
  },
  {
    useCase: "Computer use / desktop automation",
    choice: "Mythos (if available)",
    choiceColor: "#7c3aed",
    why: "OS World gap; Mythos is more reliable autonomously",
    icon: <Cpu size={16} />,
  },
  {
    useCase: "Processing high-res images / charts",
    choice: "Opus 4.7",
    choiceColor: "#009fda",
    why: "3× resolution upgrade is a major practical win",
    icon: <Layers size={16} />,
  },
  {
    useCase: "Security research (legitimate uses)",
    choice: "Opus 4.7 + Cyber Program",
    choiceColor: "#013a81",
    why: "Apply for Cyber Verification Program access",
    icon: <Shield size={16} />,
  },
];

const OPUS_46_DIFFS = [
  {
    area: "Vision",
    change: "Major upgrade — up to 2,576px images (3× previous resolution)",
    type: "improvement",
  },
  {
    area: "Instruction Following",
    change: "Significantly more literal — re-tune prompts written for 4.6",
    type: "improvement",
  },
  {
    area: "Memory Across Sessions",
    change: "Substantially improved in long agentic runs",
    type: "improvement",
  },
  {
    area: "Tokenizer",
    change: "New tokenizer: 1.0–1.35× more tokens per input, affects cost",
    type: "caution",
  },
  {
    area: "Effort Control",
    change: "New xhigh effort level; Claude Code default raised to xhigh",
    type: "improvement",
  },
  {
    area: "Output Tokens",
    change: "Reasons more at higher effort — produces more output tokens",
    type: "caution",
  },
];

const COURSES = [
  { name: "AI Product Manager", link: "/courses/ai-product-manager-course" },
  { name: "Data Science & ML", link: "/courses/data-science-and-ml-course" },
  { name: "Data Engineering", link: "/courses/data-engineering-course" },
  { name: "Data Analytics", link: "/courses/data-analytics-course" },
  {
    name: "Data Analytics & Gen AI",
    link: "/courses/data-analytics-and-generative-ai-course",
  },
  { name: "Generative AI", link: "/courses/iit-generative-ai-course" },
  { name: "AI & Machine Learning", link: "/courses/ai-machine-learning-course" },
  {
    name: "Data Science (Pay after placement)",
    link: "/courses/no-upfront-fees-data-science-and-ml-course",
  },
];

const InsightCard = ({
  text,
  index,
}: {
  text: string;
  index: number;
}) => {
  const [open, setOpen] = useState(false);
  const colors = ["#009fda", "#013a81", "#0369a1", "#009fda", "#013a81"];
  const color = colors[index % colors.length];
  const parts = text.split(" — ");
  return (
    <div
      className="rounded-2xl border bg-white shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      style={{ borderColor: open ? color : "#e5e7eb" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center gap-4 px-5 py-4">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${color}18`, color }}
        >
          <Lightbulb size={16} />
        </div>
        <div className="flex-1 flex items-center gap-2">
          <span
            className="text-xs font-bold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: `${color}18`, color }}
          >
            #{index + 1}
          </span>
          <h3 className="text-sm sm:text-base font-bold text-gray-900">
            {parts[0]}
          </h3>
        </div>
        <ChevronDown
          size={16}
          className="text-gray-400 transition-transform duration-200 flex-shrink-0"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>
      {parts[1] && (
        <div
          className="overflow-hidden transition-all duration-300 px-5"
          style={{
            maxHeight: open ? "200px" : "0px",
            paddingBottom: open ? "16px" : "0px",
          }}
        >
          <p
            className="text-sm text-gray-600 leading-relaxed border-t pt-3"
            style={{ borderColor: `${color}30` }}
          >
            {parts[1]}
          </p>
        </div>
      )}
    </div>
  );
};

export default function ClaudeOpusVsMythosPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showReviewPrompt, setShowReviewPrompt] = useState(false);
  const [reviewPromptShown, setReviewPromptShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      if (documentHeight > 0) {
        const progress = Math.min(
          100,
          Math.max(0, (scrolled / documentHeight) * 100)
        );
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
    <div className="min-h-screen bg-[#f0f8ff]">

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, #009fda, #013a81)",
          }}
        />
      </div>

      {/* Floating Review Prompt */}
      {showReviewPrompt && (
        <div className="fixed top-16 sm:top-20 right-2 sm:right-4 md:right-6 z-50 max-w-xs sm:max-w-sm">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="h-8 sm:h-10 w-8 sm:w-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#009fda] to-[#013a81]">
                <Star className="h-4 sm:h-6 w-4 sm:w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                  Enjoying this guide?
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Share your feedback!
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm">
              You&apos;ve completed {Math.round(scrollProgress)}% of this guide.
              Help others by sharing your experience with Ivy Professional
              School.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={openReviewPage}
                className="flex-1 text-white font-bold py-2 sm:py-3 rounded-lg sm:rounded-xl hover:opacity-90 transition-opacity text-sm bg-gradient-to-r from-[#009fda] to-[#013a81]"
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

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
          <Link href="/aihelpcenter" className="hover:text-[#013a81] transition-colors">
            AI Help Center
          </Link>
          <ChevronRight size={12} />
          <Link href="/aihelpcenter/ai-strategy-pm" className="hover:text-[#013a81] transition-colors">
            AI Strategy (PM)
          </Link>
          <ChevronRight size={12} />
          <span className="text-gray-800 font-medium">Claude Opus vs. Claude Mythos</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#009fda] via-[#013a81] to-[#013a81]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* left text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#009fda] uppercase tracking-wider mb-5">
              <BarChart2 size={12} />
              AI Strategy (PM) · Model Comparison
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
              Claude{" "}
              <span className="bg-gradient-to-r from-[#009fda] to-[#013a81] bg-clip-text text-transparent">
                Opus 4.7
              </span>{" "}
              vs.{" "}
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#013a81] bg-clip-text text-transparent">
                Claude Mythos
              </span>
              <br />
              <span className="text-xl sm:text-2xl font-bold text-gray-500">
                Every Benchmark, Explained
              </span>
            </h1>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-7">
              Anthropic just released Claude Opus 4.7 — a major upgrade for
              coding, vision, and instruction following. But there&apos;s a bigger,
              more restricted model in the room: Claude Mythos. So which one
              should you use, and why? We break it down with every benchmark we
              have.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Image src={ivy} alt="Ivy Pro School" width={16} height={16} className="rounded-full" />
                Ivy Pro School
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Clock size={11} />
                ~18 minutes read
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <BookOpen size={11} />
                April 2026 · Nawid Khichi
              </div>
            </div>
          </div>

          {/* right — model comparison visual */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              <div className="bg-gradient-to-r from-[#009fda] to-[#013a81] px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-blue-300" />
                </div>
                <span className="text-white text-xs font-semibold ml-2">
                  Benchmark Comparison — April 2026
                </span>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { label: "SWE-bench", opus: 87.6, mythos: 93.9 },
                  { label: "BrowseComp", opus: 79.3, mythos: 86.9 },
                  { label: "MCP Atlas", opus: 47, mythos: 68 },
                  { label: "GPQA Diamond", opus: 94.2, mythos: 94.6 },
                  { label: "CyberGym", opus: 55, mythos: 74 },
                ].map((b, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-semibold text-gray-500">
                      <span>{b.label}</span>
                      <div className="flex gap-3">
                        <span className="text-[#009fda]">Opus {b.opus}%</span>
                        <span className="text-[#7c3aed]">Mythos {b.mythos}%</span>
                      </div>
                    </div>
                    <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full rounded-full"
                        style={{ width: `${b.mythos}%`, backgroundColor: "#7c3aed20" }}
                      />
                      <div
                        className="absolute left-0 top-0 h-full rounded-full"
                        style={{ width: `${b.opus}%`, background: "linear-gradient(90deg, #009fda, #013a81)" }}
                      />
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-4 pt-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-1.5 rounded-full bg-gradient-to-r from-[#009fda] to-[#013a81]" />
                    <span className="text-[10px] text-gray-500 font-medium">Opus 4.7</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-1.5 rounded-full" style={{ backgroundColor: "#7c3aed60" }} />
                    <span className="text-[10px] text-gray-500 font-medium">Mythos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Authority Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-0">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 bg-gradient-to-r from-blue-50 to-blue-50 border border-blue-100 rounded-xl px-4 sm:px-5 py-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-blue-600 flex-shrink-0" />
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wide">
              Authored by Ivy Pro School Founders
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={PrateekAgarwal}
              alt="Prateek Agarwal"
              width={28}
              height={28}
              className="rounded-full object-cover flex-shrink-0 border border-blue-200"
            />
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold text-gray-900">Prateek Agarwal</span>
              <span className="text-xs text-gray-500"> · 20+ yrs AI/ML Leader</span>
              <a
                href="https://www.linkedin.com/in/prateekagrawal"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-blue-600 hover:text-blue-800"
              >
                <LinkedInSVG className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-4">

          {/* LEFT: article */}
          <article className="lg:col-span-3 space-y-6">

            {/* Table of Contents */}
            <div className="rounded-2xl bg-white border border-blue-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-[#009fda] to-[#013a81] px-5 py-3 flex items-center gap-2">
                <BookOpen size={14} className="text-white" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">
                  Table of Contents
                </span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-1">
                {ROADMAP_SECTIONS.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50 transition-colors text-left w-full"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#009fda] flex items-center justify-center text-[10px] font-bold flex-shrink-0 group-hover:bg-[#009fda] group-hover:text-white transition-colors">
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-600 group-hover:text-[#009fda] transition-colors font-medium">
                      {item.title}
                    </span>
                    <ArrowRight size={12} className="text-[#009fda] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>

            {/* 1. Introduction */}
            <section
              id="introduction"
              className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-[#009fda] to-[#013a81]" />
              <div className="p-6 sm:p-8">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ backgroundColor: "#e0f2fe", color: "#009fda" }}
                >
                  <Brain size={12} /> Introduction
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Claude Opus 4.7 vs. Claude Mythos
                </h2>
                <p className="text-base sm:text-lg border-l-4 border-[#009fda] pl-4 italic text-gray-700 mb-5">
                  &ldquo;The gap between these two models is not about intelligence. It&apos;s about autonomy — and that distinction matters enormously for how you deploy AI.&rdquo;
                </p>
                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Anthropic released Claude Opus 4.7 on April 16, 2026 — a comprehensive upgrade touching nearly every area of the model&apos;s capabilities. At the same time, a more restricted and more powerful model sits in the background: Claude Mythos. Available only to select researchers and partners in a restricted preview, Mythos represents Anthropic&apos;s most capable model to date.
                  </p>
                  <p>
                    The central question for any professional or organization is simple: which model should you use, and why? The answer requires understanding a distinction that runs through every benchmark in this comparison — the difference between <strong>intelligence</strong> and <strong>autonomous execution</strong>.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Unlock size={18} />,
                      label: "Claude Opus 4.7",
                      desc: "Generally available. Major vision, instruction, and memory upgrades. Best-in-class for supervised use.",
                      color: "#009fda",
                      bg: "#e0f2fe",
                      badge: "GA — Available Now",
                    },
                    {
                      icon: <Lock size={18} />,
                      label: "Claude Mythos",
                      desc: "Restricted preview. Leads the world on autonomous execution benchmarks. Held back due to cybersecurity capability.",
                      color: "#7c3aed",
                      bg: "#ede9fe",
                      badge: "Restricted Preview",
                    },
                  ].map((model, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border p-5"
                      style={{ borderColor: `${model.color}30`, backgroundColor: model.bg }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: model.color, color: "#fff" }}
                        >
                          {model.icon}
                        </div>
                        <div>
                          <p className="text-sm font-bold" style={{ color: model.color }}>
                            {model.label}
                          </p>
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: `${model.color}20`, color: model.color }}
                          >
                            {model.badge}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed">{model.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 2. What's New in Opus 4.7 */}
            <section
              id="what-is-new"
              className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#dbeafe", color: "#013a81" }}
              >
                <Zap size={12} /> What&apos;s New
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                What&apos;s New in Opus 4.7?
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-2xl">
                Released April 16, 2026, Opus 4.7 is not just a minor revision — it&apos;s a comprehensive upgrade. Here are the five biggest changes you&apos;ll actually notice.
              </p>
              <div className="space-y-4">
                {OPUS_NEW_FEATURES.map((feat, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start rounded-2xl border border-gray-100 bg-gray-50 p-4 sm:p-5 hover:shadow-sm transition-shadow"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: feat.bg, color: feat.color }}
                    >
                      {feat.icon}
                    </div>
                    <div>
                      <h3
                        className="text-sm sm:text-base font-bold mb-1"
                        style={{ color: feat.color }}
                      >
                        {feat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {feat.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Benchmark Deep Dive */}
            <section
              id="benchmarks"
              className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-[#013a81] border border-blue-900 p-6 sm:p-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/70 mb-5">
                <BarChart2 size={12} className="text-blue-300" /> Benchmark Deep Dive
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Benchmark Deep Dive
              </h2>
              <p className="text-white/70 text-sm sm:text-base mb-7 max-w-2xl">
                Benchmarks are split into two groups: <strong className="text-white">knowledge benchmarks</strong> (can the model reason and answer questions?) and <strong className="text-white">execution benchmarks</strong> (can the model autonomously complete complex tasks?). This distinction is the key to understanding the entire comparison.
              </p>

              {/* Knowledge Benchmarks */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#009fda]" />
                  <h3 className="text-white font-bold text-sm sm:text-base uppercase tracking-wide">
                    Knowledge Benchmarks — Near Tie
                  </h3>
                </div>
                <div className="space-y-5">
                  {KNOWLEDGE_BENCHMARKS.map((b, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between text-xs text-white/70 mb-1.5">
                        <span className="font-semibold">{b.name}</span>
                        <div className="flex gap-4">
                          <span className="text-[#009fda] font-bold">Opus {b.opus}%</span>
                          <span className="font-bold" style={{ color: "#a78bfa" }}>Mythos {b.mythos}%</span>
                        </div>
                      </div>
                      <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="absolute left-0 top-0 h-full rounded-full opacity-40"
                          style={{ width: `${b.mythos}%`, backgroundColor: "#7c3aed" }}
                        />
                        <div
                          className="absolute left-0 top-0 h-full rounded-full"
                          style={{ width: `${b.opus}%`, background: "linear-gradient(90deg, #009fda, #0369a1)" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Execution Benchmarks */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  <h3 className="text-white font-bold text-sm sm:text-base uppercase tracking-wide">
                    Execution Benchmarks — Mythos Wins by 15–24 Points
                  </h3>
                </div>
                <div className="space-y-5">
                  {EXECUTION_BENCHMARKS.map((b, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between text-xs text-white/70 mb-1.5">
                        <span className="font-semibold">{b.name}</span>
                        <div className="flex gap-4">
                          <span className="text-[#009fda] font-bold">Opus {b.opus}%</span>
                          <span className="font-bold" style={{ color: "#a78bfa" }}>Mythos {b.mythos}%</span>
                        </div>
                      </div>
                      <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="absolute left-0 top-0 h-full rounded-full opacity-40"
                          style={{ width: `${b.mythos}%`, backgroundColor: "#7c3aed" }}
                        />
                        <div
                          className="absolute left-0 top-0 h-full rounded-full"
                          style={{ width: `${b.opus}%`, background: "linear-gradient(90deg, #009fda, #0369a1)" }}
                        />
                      </div>
                      <div className="flex justify-end mt-0.5">
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: "#7c3aed30", color: "#a78bfa" }}
                        >
                          Mythos +{b.mythos - b.opus}pts
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 rounded-xl bg-white/10 border border-white/15 px-5 py-4">
                <p className="text-white/90 text-sm leading-relaxed">
                  <strong className="text-white">The pattern is unmistakable.</strong> On tasks requiring pure intelligence, the two models are nearly identical — often within 1–3 percentage points. But on tasks requiring <em>autonomous execution</em>, Mythos pulls ahead by 15–24 points across the board.
                </p>
              </div>

              <div className="flex items-center gap-6 mt-4 px-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-2 rounded-full bg-gradient-to-r from-[#009fda] to-[#0369a1]" />
                  <span className="text-[11px] text-white/60 font-medium">Opus 4.7</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-2 rounded-full" style={{ backgroundColor: "#7c3aed60" }} />
                  <span className="text-[11px] text-white/60 font-medium">Mythos (restricted)</span>
                </div>
              </div>
            </section>

            {/* 4. Head-to-Head Comparison */}
            <section
              id="head-to-head"
              className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#ede9fe", color: "#7c3aed" }}
              >
                <Layers size={12} /> Head-to-Head
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Head-to-Head Comparison
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-2xl">
                The complete breakdown across every major category, in plain language.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#009fda] to-[#013a81] text-white">
                      <th className="text-left px-4 py-3 font-bold rounded-tl-2xl">Category</th>
                      <th className="px-4 py-3 font-bold text-left hidden sm:table-cell">Opus 4.7</th>
                      <th className="px-4 py-3 font-bold text-left hidden md:table-cell">Mythos Preview</th>
                      <th className="px-4 py-3 font-bold text-center rounded-tr-2xl">Winner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_ROWS.map((row, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                      >
                        <td className="px-4 py-3 font-semibold text-gray-800 border-r border-gray-100 min-w-[140px]">
                          {row.category}
                        </td>
                        <td className="px-4 py-3 text-gray-600 hidden sm:table-cell border-r border-gray-100">
                          {row.opus}
                        </td>
                        <td className="px-4 py-3 text-gray-600 hidden md:table-cell border-r border-gray-100">
                          {row.mythos}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span
                            className="text-xs font-bold px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: `${row.winnerColor}15`,
                              color: row.winnerColor,
                            }}
                          >
                            {row.winner}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5. Why is Mythos Restricted */}
            <section
              id="why-restricted"
              className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#fee2e2", color: "#dc2626" }}
              >
                <Lock size={12} /> Restricted Model
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Why is Mythos Restricted?
              </h2>
              <p className="text-base sm:text-lg border-l-4 border-red-400 pl-4 italic text-gray-700 mb-5">
                &ldquo;Mythos isn&apos;t restricted because it&apos;s more powerful in a general sense. It&apos;s restricted primarily because of one capability: it is dramatically better at cybersecurity exploitation.&rdquo;
              </p>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  On <strong>CyberGym</strong> — a benchmark that measures the ability to find and exploit software vulnerabilities — Mythos leads Opus 4.7 by roughly 15–19 percentage points. Anthropic explicitly states this was a key factor in keeping Mythos under restricted preview. The company launched <strong>Project Glasswing</strong> specifically to address the cybersecurity risks posed by advanced AI.
                </p>
                <p>
                  Opus 4.7 is the first model where Anthropic has deployed <strong>real-time safeguards</strong> that automatically detect and block cybersecurity misuse attempts. What they learn from Opus 4.7&apos;s deployment will inform whether and how Mythos-class models can ever be broadly released.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-red-50 border border-red-100 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center">
                      <Shield size={16} className="text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-red-700">CyberGym Score</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-red-800">
                      <span>Opus 4.7</span>
                      <span>55%</span>
                    </div>
                    <div className="h-2.5 bg-red-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-[#009fda]" style={{ width: "55%" }} />
                    </div>
                    <div className="flex justify-between text-xs font-semibold text-red-800">
                      <span>Mythos (restricted)</span>
                      <span>74%</span>
                    </div>
                    <div className="h-2.5 bg-red-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-red-500" style={{ width: "74%" }} />
                    </div>
                  </div>
                  <p className="text-xs text-red-600 mt-3 font-medium">+19pt gap — key restriction trigger</p>
                </div>
                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#013a81] flex items-center justify-center">
                      <ShieldCheck size={16} className="text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-[#013a81]">Anthropic&apos;s Response</h3>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Real-time safeguards in Opus 4.7 that block misuse",
                      "Project Glasswing — dedicated cybersecurity risk program",
                      "Cyber Verification Program for legitimate security researchers",
                      "Learnings from Opus 4.7 deployment will shape Mythos release path",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-blue-900">
                        <CheckCircle2 size={12} className="text-[#009fda] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 6. Key Insight: Knowledge vs Execution */}
            <section
              id="key-insight"
              className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#7c3aed] to-[#013a81] border border-purple-800 p-6 sm:p-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/70 mb-5">
                <Lightbulb size={12} className="text-yellow-300" /> The Key Insight
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                The Key Insight: Knowledge vs. Execution
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-7">
                If you walk away with one idea from this article, make it this: the gap between Opus 4.7 and Mythos is <strong className="text-white">not really about intelligence</strong>. Both models can think at roughly the same level. The gap is about <strong className="text-yellow-300">autonomous execution</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-7">
                <div className="rounded-2xl bg-white/10 border border-white/15 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#009fda] flex items-center justify-center">
                      <Brain size={16} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold text-sm">Intelligence (Near Tie)</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "GPQA Diamond — near tie (94.2% vs 94.6%)",
                      "MMLU Pro — near tie",
                      "Humanity's Last Exam — near tie",
                      "MATH reasoning — near tie",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#009fda] flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-white/10 border border-white/15 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center">
                      <TrendingUp size={16} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold text-sm">Autonomous Execution (Mythos Wins)</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "BrowseComp — +24pts",
                      "Terminal-Bench — +15pts",
                      "MCP Atlas — +21pts",
                      "OS World — +16pts",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-xl bg-white/15 border border-white/20 px-5 py-4">
                <p className="text-white/90 text-sm leading-relaxed">
                  <strong className="text-yellow-300">Think of it this way:</strong> Opus 4.7 is an incredibly smart person who follows your instructions brilliantly. Mythos is that same smart person, except they can also independently plan a multi-week project, book their own flights, and manage the whole thing without checking in every hour. The intelligence is similar. The autonomy is not.
                </p>
              </div>
            </section>

            {/* 7. Opus 4.7 vs. Opus 4.6 */}
            <section
              id="vs-46"
              className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#dbeafe", color: "#013a81" }}
              >
                <Zap size={12} /> Upgrading from 4.6
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Opus 4.7 vs. Opus 4.6
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-2xl">
                For users upgrading from Opus 4.6, the differences are significant and practical. Here&apos;s what changes and what to watch for.
              </p>
              <div className="space-y-3">
                {OPUS_46_DIFFS.map((diff, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-xl border p-4"
                    style={{
                      borderColor: diff.type === "improvement" ? "#bbf7d0" : "#fde68a",
                      backgroundColor: diff.type === "improvement" ? "#f0fdf4" : "#fffbeb",
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                      style={{
                        backgroundColor: diff.type === "improvement" ? "#22c55e" : "#f59e0b",
                        color: "#fff",
                      }}
                    >
                      {diff.type === "improvement" ? "↑" : "!"}
                    </div>
                    <div>
                      <p
                        className="text-sm font-bold mb-0.5"
                        style={{ color: diff.type === "improvement" ? "#15803d" : "#92400e" }}
                      >
                        {diff.area}
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed">{diff.change}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-blue-50 border border-blue-100 p-4">
                <p className="text-xs font-bold text-[#009fda] uppercase tracking-wide mb-1">
                  Migration Tip
                </p>
                <p className="text-sm text-blue-900 leading-relaxed">
                  Anthropic recommends measuring real-traffic token usage before and after upgrading — the new tokenizer&apos;s 1.0–1.35× token expansion can meaningfully affect costs at scale.
                </p>
              </div>
            </section>

            {/* 8. Who Should Use What */}
            <section
              id="who-uses-what"
              className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 p-6 sm:p-8"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#009fda] mb-4"
              >
                <Target size={12} /> Decision Guide
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Who Should Use What?
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-2xl">
                A practical decision guide in plain English. For most use cases, Opus 4.7 is the right answer — Mythos only wins when autonomous execution is the critical requirement.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#009fda] to-[#013a81] text-white">
                      <th className="text-left px-4 py-3 font-bold rounded-tl-2xl">Your Use Case</th>
                      <th className="px-4 py-3 font-bold text-center">Best Choice</th>
                      <th className="px-4 py-3 font-bold text-left hidden sm:table-cell rounded-tr-2xl">Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    {WHO_USES.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                        <td className="px-4 py-3 font-medium text-gray-800 border-r border-gray-100">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400">{row.icon}</span>
                            {row.useCase}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-center border-r border-gray-100">
                          <span
                            className="text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap"
                            style={{
                              backgroundColor: `${row.choiceColor}15`,
                              color: row.choiceColor,
                            }}
                          >
                            {row.choice}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 9. The Bigger Picture */}
            <section
              id="bigger-picture"
              className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#e0f2fe", color: "#009fda" }}
              >
                <Globe size={12} /> The Bigger Picture
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                The Bigger Picture
              </h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                <p>
                  Anthropic has, for the first time, clearly separated two different types of AI capability: <strong>raw intelligence</strong> and <strong>autonomous execution</strong>. Opus 4.7 is among the best in the world at the former. Mythos leads the world at the latter.
                </p>
                <p>
                  The fact that the knowledge gap is so small — 1–3% on most reasoning benchmarks — suggests that raw intelligence is becoming a commodity. What differentiates frontier models in 2026 is no longer &ldquo;can it answer this question correctly?&rdquo; but &ldquo;can it complete this 20-step task without me babysitting it?&rdquo;
                </p>
                <p>
                  Mythos is Anthropic&apos;s answer to that second question. But because autonomous execution at that level comes with serious risks — especially in cybersecurity — Anthropic has chosen to keep it under tight wraps while using Opus 4.7 as a testbed for the safety safeguards that might eventually make a broad Mythos release possible.
                </p>
              </div>
              <div className="rounded-xl bg-blue-50 border border-blue-100 p-5 mb-5">
                <p className="text-xs font-bold text-[#009fda] uppercase tracking-wide mb-2">Key Takeaway</p>
                <p className="text-sm text-blue-900 leading-relaxed">
                  For most people, most of the time, <strong>Opus 4.7 is the right tool</strong>. It&apos;s excellent, it&apos;s available, and it&apos;s getting better. Mythos is a glimpse of what agentic AI looks like when all the guardrails are off — but for now, that future is still on a waiting list.
                </p>
              </div>
              <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                <p className="text-xs text-gray-500 leading-relaxed">
                  Benchmark figures are sourced from Anthropic&apos;s official Opus 4.7 announcement (April 16, 2026) and the model system card. Some figures are approximate based on published charts. All comparisons reflect API-accessible model versions as of publication date.
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section className="rounded-2xl bg-gradient-to-br from-[#009fda] to-[#013a81] p-6 sm:p-8 text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                <Star size={12} /> Conclusion
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                The Bottom Line
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-white/85 leading-relaxed mb-7">
                <p>
                  Raw intelligence is becoming a commodity. The frontier of AI in 2026 is not about answering questions better — it&apos;s about completing multi-step tasks autonomously, reliably, and safely.
                </p>
                <p>
                  Opus 4.7 is a major upgrade for any professional who interacts with AI directly — better vision, better instruction following, better memory. It is the right model for the vast majority of real-world use cases.
                </p>
                <p>
                  Mythos represents the next level: autonomous execution that surpasses anything currently publicly available. The reason it&apos;s restricted is the reason it matters — it can do things that require very careful handling.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
                <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={16} className="text-blue-300" />
                    <p className="text-sm font-bold text-white">Use Opus 4.7 if you…</p>
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Need a model available to you today",
                      "Work on writing, research, analysis, or coding",
                      "Want improved vision for charts and screenshots",
                      "Need literal instruction following",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-300 flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle size={16} className="text-amber-300" />
                    <p className="text-sm font-bold text-white">Wait for Mythos if you…</p>
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Need fully autonomous multi-step task execution",
                      "Are building web agents or computer-use systems",
                      "Require unsupervised long-horizon coding runs",
                      "Can wait for restricted access to clear",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-300 flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/courses/iit-generative-ai-course"
                  className="inline-flex items-center gap-2 rounded-xl bg-white text-[#009fda] font-bold text-sm px-5 py-2.5 hover:bg-blue-50 transition-colors shadow-sm"
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

            {/* Back links */}
            <div className="flex flex-wrap gap-3 pb-4">
              <Link
                href="/aihelpcenter/ai-strategy-pm"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-[#009fda] hover:text-[#009fda] transition-all shadow-sm"
              >
                ← Back to AI Strategy (PM)
              </Link>
              <Link
                href="/aihelpcenter"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-[#009fda] hover:text-[#009fda] transition-all shadow-sm"
              >
                ← All Topics
              </Link>
            </div>

          </article>

          {/* RIGHT: sticky sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* Roadmap */}
              <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-gray-200">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 sm:mb-6">
                  Roadmap
                </h4>
                <div className="flex flex-col gap-3">
                  {ROADMAP_SECTIONS.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollTo(sec.id)}
                      className={`text-left text-xs sm:text-sm font-bold transition-all border-l-4 pl-3 ${
                        activeSection === sec.id
                          ? "text-[#009fda] border-[#009fda]"
                          : "text-gray-400 border-transparent hover:text-gray-600"
                      }`}
                    >
                      {sec.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Authority Box */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-50 p-4 sm:p-5 rounded-2xl shadow-lg border border-blue-100">
                <div className="text-center mb-4">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg flex items-center justify-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                    Industry Authority
                  </h3>
                  <p className="text-gray-600 text-xs mt-1">
                    These tutorials are authored by Ivy Pro School founders
                  </p>
                </div>
                <div className="space-y-4">
                  {/* Prateek */}
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-200">
                          <Image
                            src={PrateekAgarwal}
                            alt="Prateek Agarwal"
                            className="w-full h-full object-cover"
                            width={56}
                            height={56}
                            loading="lazy"
                          />
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
                      <a
                        href="https://www.linkedin.com/in/prateekagrawal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition-colors"
                      >
                        <LinkedInSVG className="h-5 w-5 text-blue-600" />
                      </a>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-gray-700 text-xs">
                        Worked with 50+ global firms, trained students from IIT KGP, IIM Kolkata, IIT Delhi
                      </p>
                    </div>
                  </div>
                  {/* Eeshani */}
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-100">
                          <Image
                            src={eeshani}
                            alt="Eeshani Agrawal"
                            className="w-full h-full object-cover"
                            width={56}
                            height={56}
                            loading="lazy"
                          />
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
                      <a
                        href="https://www.linkedin.com/in/eeshani-agrawal-b674045"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition-colors"
                      >
                        <LinkedInSVG className="h-5 w-5 text-blue-600" />
                      </a>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-gray-700 text-xs">
                        Trained 9,000+ professionals across Top IITs, IIMs, and ISI
                      </p>
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
                  <p className="text-xs text-center text-gray-500 mt-3 italic">
                    All content reviewed by Ivy&apos;s expert faculty team
                  </p>
                </div>
              </div>

              {/* Advanced Courses */}
              <div
                className="p-4 sm:p-5 rounded-3xl shadow-2xl text-white"
                style={{ background: "linear-gradient(135deg, #009fda, #013a81)" }}
              >
                <div className="text-center mb-5">
                  <h3 className="font-extrabold text-lg sm:text-xl leading-tight">Advanced Courses</h3>
                  <p className="text-blue-100 text-[11px] opacity-70 mt-1">
                    Fast-track your career with Ivy.
                  </p>
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
                          <Image
                            loading="lazy"
                            src={ivy}
                            alt="Ivy Logo"
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <span className="text-[12px] font-bold leading-tight text-white group-hover:text-[#003366] transition-colors duration-300 truncate">
                          {course.name}
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:text-[#003366] transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
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
