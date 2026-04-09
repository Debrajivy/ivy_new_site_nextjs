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
  BarChart3,
  Database,
  AlertCircle,
  Star,
  ChevronDown,
  ArrowUpRight,
  ShieldCheck,
  Briefcase,
  BookMarked,
  XCircle,
  Award,
  FileText,
  Layers,
  GitBranch,
  Rocket,
  Wrench,
  PenLine,
  Globe,
  GitPullRequest,
} from "lucide-react";

import ivy from "@/assests/ivy.png";
import PrateekAgarwal from "@/assests/pratilk.webp";
import eeshani from "@/assests/eeshani.webp";

const LinkedInSVG = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/* ─── constants ────────────────────────────────────── */

const ACCENT = "#009fda";
const ACCENT_DARK = "#013a81";
const ACCENT_LIGHT = "#dbeafe";

const PUBLISHED_BY = {
  tagline: "Published by practitioners who've helped 32,500+ professionals build job-ready data science portfolios",
  authors: [
    {
      name: "Prateek Agarwal",
      role: "Founder, Ivy Pro School",
      badge: "20+ yrs AI/ML Leader",
      img: "PrateekAgarwal" as const,
      linkedin: "https://www.linkedin.com/in/prateekagrawal",
      accentColor: "#009fda",
      borderColor: "border-blue-200",
      bgColor: "bg-blue-50",
      hoverBg: "hover:bg-blue-100",
    },
  ],
};

const ARTICLE_SECTIONS = [
  { id: "why-portfolio",    title: "Why Portfolio > Degree" },
  { id: "academic-trap",    title: "The Academic Trap" },
  { id: "archetypes",       title: "Three Project Archetypes" },
  { id: "data-choice",      title: "Choosing the Right Data" },
  { id: "framework",        title: "The 5-Step Framework" },
  { id: "case-studies",     title: "Case Studies vs Code Dumps" },
  { id: "github",           title: "GitHub as Narrative" },
  { id: "errors",           title: "Four Critical Errors" },
  { id: "amplify",          title: "Portfolio Amplification" },
  { id: "checklist",        title: "Pre-Launch Checklist" },
  { id: "stack",            title: "Recommended Tech Stack" },
];

const ARCHETYPE_DATA = [
  {
    id: "cleaner",
    icon: <Wrench size={20} />,
    label: "The Cleaner",
    emoji: "🔧",
    color: "#059669",
    bg: "#d1fae5",
    title: "The Cleaner",
    subtitle: "Real-world data wrangling",
    proof: "You handle the 80% of data work that is wrangling.",
    body: `Take genuinely messy, real-world data and build a clean, reproducible pipeline using SQL or Pandas. Show your methodology at every step.`,
    detail: `This project demonstrates that you can deal with missing values, inconsistent formats, duplicates, and unclear schemas — the reality of every production dataset. Most portfolios skip this because tutorials always start with clean data. Doing it proves you are ready for real work.`,
    example: `A raw e-commerce transaction CSV with 40% missing values, mixed date formats, and duplicate order IDs → cleaned pipeline with documented transformation steps and a reproducible Pandas script.`,
  },
  {
    id: "storyteller",
    icon: <PenLine size={20} />,
    label: "The Storyteller",
    emoji: "📊",
    color: "#0ea5e9",
    bg: "#e0f2fe",
    title: "The Storyteller",
    subtitle: "Data into business narrative",
    proof: "You communicate insights to stakeholders.",
    body: `Transform complex data into a narrative dashboard using EDA and a visualisation tool like Tableau. Build for a non-technical audience.`,
    detail: `This project shows that you can extract signal from noise and communicate it in a form that a CFO or Operations Director could act on — without needing to understand the underlying code. The visualisation must tell a story with a beginning (the business question), a middle (the patterns in the data), and an end (the recommendation).`,
    example: `A Tableau dashboard showing seasonal churn patterns by customer segment, with a two-paragraph written recommendation on when to trigger retention campaigns.`,
  },
  {
    id: "builder",
    icon: <Rocket size={20} />,
    label: "The Builder",
    emoji: "🚀",
    color: "#8b5cf6",
    bg: "#ede9fe",
    title: "The Builder",
    subtitle: "End-to-end deployed system",
    proof: "You ship end-to-end systems, not just notebooks.",
    body: `Take a live data source, build an ML model, and deploy it as an interactive web application using Streamlit or a similar tool.`,
    detail: `This is the project that separates you from 95% of other candidates. A deployed, clickable application means a non-technical hiring manager can interact with your work directly — no GitHub, no Jupyter, no terminal. It signals that you understand the full software lifecycle, not just the analysis step.`,
    example: `A customer churn predictor trained on a telecom dataset, deployed as a Streamlit app where users enter customer attributes and receive a churn probability with a recommended intervention.`,
  },
];

const DATA_QUALITY_DATA = [
  {
    tier: "🏆 Gold Standard",
    color: "#059669",
    bg: "#d1fae5",
    label: "Highest Impact",
    sources: "Custom web scraping, Reddit or Twitter APIs, personal tracking data.",
    why: "Highly original and inherently messy.",
  },
  {
    tier: "💪 Strong",
    color: "#0ea5e9",
    bg: "#e0f2fe",
    label: "Good Choice",
    sources: "Data.gov, World Bank, niche industry APIs.",
    why: "Real-world and messy enough to demonstrate skill.",
  },
  {
    tier: "✅ Good for Practice",
    color: "#f59e0b",
    bg: "#fef3c7",
    label: "Acceptable",
    sources: "FiveThirtyEight, OpenML.",
    why: "Original enough to learn from, though less impressive in a portfolio.",
  },
  {
    tier: "⚠️ Avoid",
    color: "#ef4444",
    bg: "#fee2e2",
    label: "Overused",
    sources: "Kaggle Titanic, Iris, MNIST.",
    why: "Seen by every recruiter. Add no differentiation to your profile.",
  },
];

const FRAMEWORK_STEPS = [
  {
    num: "1",
    color: ACCENT,
    bg: ACCENT_LIGHT,
    title: "Define",
    subtitle: "Frame a business-relevant research question",
    body: `Do not start with data. Start with a question that a business would actually care about. "Can we predict which customers are most likely to churn in the next 30 days?" is far stronger than "I will classify some customer data."`,
  },
  {
    num: "2",
    color: "#059669",
    bg: "#d1fae5",
    title: "Acquire",
    subtitle: "Source and clean messy, real-world data",
    body: `Find your own data. Scrape it, access it via API, or combine multiple public sources. Document every cleaning decision you make and why.`,
  },
  {
    num: "3",
    color: "#8b5cf6",
    bg: "#ede9fe",
    title: "Analyse",
    subtitle: "EDA, feature engineering, and modelling",
    body: `Explore your data visually before modelling. Build features thoughtfully. Document your model choices and explain why you preferred one approach over another.`,
  },
  {
    num: "4",
    color: "#f59e0b",
    bg: "#fef3c7",
    title: "Synthesise",
    subtitle: "Translate model metrics into business ROI",
    body: `A 93% accuracy score means nothing to a business stakeholder. Translate your results: "This model could reduce customer churn by 15%, representing approximately ₹40L in retained annual revenue."`,
  },
  {
    num: "5",
    color: "#ef4444",
    bg: "#fee2e2",
    title: "Ship",
    subtitle: "Publish reproducible code with a narrative README",
    body: `Your GitHub repository should tell a story. Write it as if you are handing it to a colleague who knows nothing about the project.`,
  },
];

const ERRORS_DATA = [
  {
    code: "ERR 01",
    color: "#ef4444",
    bg: "#fee2e2",
    title: "Hardcoded Paths",
    body: `File paths like C:/Users/Dave/Desktop/data.csv make your code completely unrunnable for anyone else — and immediately signal a lack of professional experience.`,
  },
  {
    code: "ERR 02",
    color: "#f59e0b",
    bg: "#fef3c7",
    title: "Missing Dependencies",
    body: `No requirements.txt or environment setup means your reviewer cannot reproduce anything. This is a fast-track to the rejection pile.`,
  },
  {
    code: "ERR 03",
    color: "#8b5cf6",
    bg: "#ede9fe",
    title: "Wall of Math",
    body: `Dense academic proofs with zero business context or stakeholder translation. You are applying for an industry role, not submitting a research paper.`,
  },
  {
    code: "ERR 04",
    color: "#ef4444",
    bg: "#fce7f3",
    title: "Dead Ends",
    body: `Jupyter Notebooks that end abruptly without a conclusion, summary, or actionable recommendation. Every project must land somewhere.`,
  },
];

const AMPLIFY_LEVELS = [
  {
    level: "Level 1",
    icon: <PenLine size={20} />,
    color: ACCENT,
    bg: ACCENT_LIGHT,
    title: "Publish Your Methodology",
    body: `Write a Medium or Substack article explaining your project's methodology and business impact in plain language. This demonstrates communication skills — one of the most underrated but consistently valued skills in data science — and also creates an SEO trail that makes you more discoverable to recruiters.`,
  },
  {
    level: "Level 2",
    icon: <Globe size={20} />,
    color: "#059669",
    bg: "#d1fae5",
    title: "Build a Front-End",
    body: `Wrap your ML model in a Streamlit web application and deploy it publicly. This allows non-technical hiring managers to interact with your work directly — no code, no Jupyter environment required. The ability to see a live, running application is one of the most memorable things a portfolio can offer.`,
  },
  {
    level: "Level 3",
    icon: <GitPullRequest size={20} />,
    color: "#8b5cf6",
    bg: "#ede9fe",
    title: "Contribute to Open Source",
    body: `Contribute to a major open-source data science project — even something small like documentation, a bug fix, or a test. A merged pull request is among the strongest proofs of collaborative software engineering skill that exists, and very few candidates at the entry level have one.`,
  },
];

const CHECKLIST_ITEMS = [
  "Do I have 2–3 deep, end-to-end projects rather than 10 shallow tutorials?",
  "Is my data sourced originally, or uniquely applied to a specific niche?",
  "Does my GitHub README read like an executive summary for each project?",
  "Have I clearly translated my model's accuracy into a business impact statement?",
  "Can a total stranger clone my repository and run it in under 5 minutes?",
  "Does each project end with a clear, defensible recommendation — not a code dump?",
];

/* ─── sub-components ────────────────────────────────── */

const ArchetypeTab = ({
  archetype,
  active,
  onClick,
}: {
  archetype: typeof ARCHETYPE_DATA[0];
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 w-full text-left"
    style={{
      backgroundColor: active ? archetype.color : "transparent",
      color: active ? "#fff" : "#6b7280",
      border: `1.5px solid ${active ? archetype.color : "#e5e7eb"}`,
    }}
  >
    <span
      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-base"
      style={{ backgroundColor: active ? "rgba(255,255,255,0.2)" : archetype.bg, color: archetype.color }}
    >
      {archetype.emoji}
    </span>
    {archetype.label}
  </button>
);

const ErrorCard = ({ item }: { item: typeof ERRORS_DATA[0] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl border bg-white shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      style={{ borderColor: open ? item.color : "#e5e7eb" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center gap-4 px-5 py-4">
        <div
          className="rounded-xl px-2 py-1 text-xs font-bold flex-shrink-0"
          style={{ backgroundColor: item.bg, color: item.color }}
        >
          {item.code}
        </div>
        <h3 className="text-sm sm:text-base font-bold text-gray-900 flex-1">{item.title}</h3>
        <ChevronDown
          size={16}
          className="text-gray-400 transition-transform duration-200 flex-shrink-0"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>
      <div
        className="overflow-hidden transition-all duration-300 px-5"
        style={{ maxHeight: open ? "220px" : "0px", paddingBottom: open ? "16px" : "0px" }}
      >
        <p className="text-sm text-gray-600 leading-relaxed border-t pt-3" style={{ borderColor: `${item.color}30` }}>
          {item.body}
        </p>
      </div>
    </div>
  );
};

/* ─── main page ─────────────────────────────────────── */

export default function HowToBuildDataSciencePortfolioPage() {
  const [activeArchetype, setActiveArchetype] = useState(0);
  const active = ARCHETYPE_DATA[activeArchetype];

  const [activeSection, setActiveSection] = useState("why-portfolio");
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
      for (const sec of [...ARTICLE_SECTIONS].reverse()) {
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

      {/* ── Scroll Progress Bar ─────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
        <div
          className="h-full transition-all duration-300"
          style={{ width: `${scrollProgress}%`, background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }}
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
              You&apos;ve read {Math.round(scrollProgress)}% of this guide. Help others discover Ivy Professional School.
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

      {/* ── Breadcrumb ──────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
          <Link href="/aihelpcenter" className="hover:text-[#013a81] transition-colors">AI Help Center</Link>
          <ChevronRight size={12} />
          <Link href="/aihelpcenter/career" className="hover:text-[#013a81] transition-colors">Career Insights</Link>
          <ChevronRight size={12} />
          <span className="text-gray-800 font-medium">How to Build a Data Science Portfolio</span>
        </div>
      </div>

      {/* ── Hero ────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* left text */}
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wider mb-5"
              style={{ borderColor: "#bfdbfe", backgroundColor: "#eff6ff", color: ACCENT_DARK }}
            >
              <BookMarked size={12} style={{ color: ACCENT }} />
              Career Insights · Data Science · Portfolio
            </div>

            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4"
              style={{ backgroundColor: "#fef3c7", color: "#92400e" }}
            >
              Career Guide · March 2026
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
              How to Build a{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})` }}
              >
                Data Science Portfolio
              </span>{" "}
              That Actually Gets You Hired
            </h1>

            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-7">
              Certificates and Kaggle badges are a start — but hiring managers are looking for proof-of-work. Here is the complete playbook for building a portfolio that opens doors in 2026.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Image src={ivy} alt="Ivy Pro School" width={16} height={16} className="rounded-full" />
                Ivy Pro School Editorial Team
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Clock size={11} />
                12 min read
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <BookOpen size={11} />
                March 2026
              </div>
            </div>
          </div>

          {/* right — portfolio visual */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              <div className="px-4 py-2.5 flex items-center gap-2" style={{ backgroundColor: ACCENT_DARK }}>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: ACCENT }} />
                </div>
                <span className="text-white text-xs font-semibold ml-2">Portfolio Quality Matrix</span>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { label: "10+ shallow tutorial projects", type: "bad", icon: "✗" },
                  { label: "Famous datasets (Titanic, Iris, MNIST)", type: "bad", icon: "✗" },
                  { label: "Complex math, zero business impact", type: "bad", icon: "✗" },
                  { label: "2–3 deep, end-to-end projects", type: "good", icon: "✓" },
                  { label: "Original or niche real-world data", type: "good", icon: "✓" },
                  { label: "Business ROI + reproducible code", type: "good", icon: "✓" },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5"
                    style={{
                      backgroundColor: row.type === "good" ? "#ecfdf5" : "#fef2f2",
                      border: `1px solid ${row.type === "good" ? "#6ee7b7" : "#fecaca"}`,
                    }}
                  >
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{
                        backgroundColor: row.type === "good" ? "#059669" : "#ef4444",
                        color: "#fff",
                      }}
                    >
                      {row.icon}
                    </span>
                    <span
                      className="text-xs font-medium"
                      style={{ color: row.type === "good" ? "#065f46" : "#991b1b" }}
                    >
                      {row.label}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="border-t px-4 py-3 flex items-center gap-2"
                style={{ borderColor: ACCENT + "30", backgroundColor: "#eff6ff" }}
              >
                <GitBranch size={14} style={{ color: ACCENT_DARK }} />
                <p className="text-[10px] font-semibold" style={{ color: ACCENT_DARK }}>
                  3 solid projects on GitHub will move you further than a dozen unfinished tutorials
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100" />
      </div>

      {/* ── Authority Strip ──────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-0">
        <div
          className="flex flex-wrap items-center gap-3 sm:gap-6 rounded-xl px-4 sm:px-5 py-3"
          style={{ background: "linear-gradient(90deg, #eff6ff, #ecfdf5)", border: "1px solid #bfdbfe" }}
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 flex-shrink-0" style={{ color: ACCENT }} />
            <span className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT_DARK }}>
              Published by Ivy Pro School Editorial Team · India&apos;s #1 Data &amp; GenAI Training Institute
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image src={ivy} alt="Ivy Pro School" width={28} height={28} className="rounded-full object-cover flex-shrink-0 border-2 border-blue-200" />
            <span className="text-xs font-semibold text-gray-900">Ivy Pro School</span>
            <span className="text-xs text-gray-500">· 17+ yrs · IIT Certified · NASSCOM Accredited</span>
          </div>
        </div>
      </div>

      {/* ── Main grid ───────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-4">

          {/* ── LEFT: article ──────────────────────── */}
          <article className="lg:col-span-3 space-y-6">

            {/* ── Published By / Author Strip ──────── */}
            <div
              className="rounded-2xl bg-white border shadow-sm overflow-hidden"
              style={{ borderColor: "#bfdbfe" }}
            >
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }} />
              <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
                <div
                  className="flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest flex-shrink-0"
                  style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT_DARK }}
                >
                  <ShieldCheck size={12} style={{ color: ACCENT }} />
                  Expert Authored
                </div>
                <p className="text-xs text-gray-500 leading-relaxed flex-1">
                  {PUBLISHED_BY.tagline}
                </p>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-200">
                      <Image
                        src={PrateekAgarwal}
                        alt="Prateek Agarwal"
                        className="w-full h-full object-cover"
                        width={40}
                        height={40}
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="absolute -bottom-1 -right-1 rounded-full p-0.5"
                      style={{ backgroundColor: ACCENT }}
                    >
                      <Star className="h-2.5 w-2.5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{PUBLISHED_BY.authors[0].name}</div>
                    <div className="text-xs text-gray-500">{PUBLISHED_BY.authors[0].badge}</div>
                  </div>
                  <a
                    href={PUBLISHED_BY.authors[0].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition-colors flex-shrink-0"
                  >
                    <LinkedInSVG className="h-4 w-4 text-blue-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div
              className="rounded-2xl bg-white border shadow-sm overflow-hidden"
              style={{ borderColor: "#bfdbfe" }}
            >
              <div
                className="px-5 py-3 flex items-center gap-2"
                style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }}
              >
                <BookOpen size={14} className="text-white" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">In This Article</span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-1">
                {ARTICLE_SECTIONS.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50 transition-colors text-left w-full"
                  >
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 group-hover:text-white transition-colors"
                      style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-600 group-hover:text-[#013a81] transition-colors font-medium">{item.title}</span>
                    <ArrowRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: ACCENT }} />
                  </button>
                ))}
              </div>
            </div>

            {/* ── 01 WHY PORTFOLIO ─────────────────── */}
            <section id="why-portfolio" className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }} />
              <div className="p-6 sm:p-8">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT_DARK }}
                >
                  <span>01</span> The Core Case
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Why Your Portfolio Matters More Than Your Degree
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                  Every week, thousands of aspiring data scientists complete a course, earn a certificate, and then wonder why their job applications go unanswered. The missing piece is almost never knowledge — it is evidence. A strong portfolio is that evidence.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  This guide distills the core principles behind what separates a portfolio that gets ignored from one that lands interviews at companies like PwC, Cognizant, and Tata Steel. Whether you are a fresh graduate, a working professional upskilling, or making a full career switch into data, these principles apply equally to you.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  Employers are not in the business of paying you to learn something for the first time. They need confidence that you can handle real business problems — messy data, unclear objectives, and non-technical stakeholders waiting for answers. A university degree or an online certificate tells them you sat through a curriculum. A portfolio tells them you can actually do the work.
                </p>

                <div
                  className="rounded-2xl border p-5 mb-6"
                  style={{ backgroundColor: "#eff6ff", borderColor: "#bfdbfe" }}
                >
                  <p className="text-base sm:text-lg font-bold italic text-center" style={{ color: ACCENT_DARK }}>
                    &ldquo;3 solid projects on GitHub will move you further than a dozen tutorials you never finished.&rdquo;
                  </p>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  In a competitive hiring environment, your portfolio is what bridges the gap between knowing the math and solving the business problem. It is your most powerful differentiator — and it costs nothing but time to build.
                </p>
              </div>
            </section>

            {/* ── 02 ACADEMIC TRAP ─────────────────── */}
            <section id="academic-trap" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#fee2e2", color: "#991b1b" }}
              >
                <span>02</span> Common Pitfall
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                The Academic Trap vs. The Industry Standard
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Most early-career data scientists fall into what can be called the Academic Trap: they build many shallow tutorial-style projects using overused datasets like Titanic, Iris, or MNIST, and focus on demonstrating algorithmic complexity rather than business value. Hiring managers have seen hundreds of such portfolios, and they do not stand out.
              </p>

              {/* Comparison table */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 mb-6">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-3 text-sm font-bold text-red-700 bg-red-50 border-b border-r border-gray-200">
                    The Academic Trap ✗
                  </div>
                  <div className="px-4 py-3 text-sm font-bold text-green-700 bg-green-50 border-b border-gray-200">
                    The Industry Standard ✓
                  </div>
                  {[
                    ["10+ shallow tutorial projects", "2–3 deep, end-to-end projects"],
                    ["Famous datasets (Titanic, Iris, MNIST)", "Scraped, messy, or niche real-world data"],
                    ["Complex mathematical algorithms", "Actionable business impact and clean code"],
                    ["Only recruiters look at it", "Hiring managers use it to filter the top 10%"],
                  ].map(([bad, good], i) => (
                    <React.Fragment key={i}>
                      <div className="flex items-start gap-2 px-4 py-3 bg-red-50 border-r border-b border-gray-100">
                        <XCircle size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-red-700">{bad}</span>
                      </div>
                      <div className="flex items-start gap-2 px-4 py-3 bg-green-50 border-b border-gray-100">
                        <CheckCircle2 size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-green-700">{good}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div
                className="rounded-xl border p-4"
                style={{ backgroundColor: "#eff6ff", borderColor: "#bfdbfe" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle size={14} style={{ color: ACCENT }} />
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT_DARK }}>The Mindset Shift</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  The shift in mindset is simple but profound: stop trying to prove you know data science, and start proving you can use data science to solve a problem someone actually cares about.
                </p>
              </div>
            </section>

            {/* ── 03 THREE ARCHETYPES (tab switcher) ─ */}
            <section
              id="archetypes"
              className="rounded-2xl overflow-hidden border p-6 sm:p-8"
              style={{ background: "linear-gradient(135deg, #f8fafc, #eff6ff)", borderColor: "#bfdbfe" }}
            >
              <div className="mb-6">
                <div
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ borderColor: "#bfdbfe", backgroundColor: "#eff6ff", color: ACCENT_DARK }}
                >
                  <Layers size={12} /> <span>03</span> Project Archetypes
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  The Three Project Archetypes Every Portfolio Needs
                </h2>
                <p className="text-gray-500 text-sm sm:text-base max-w-xl">
                  A strong data science portfolio does not need twenty projects. It needs three that each demonstrate a distinct, valuable skill. Select each archetype below to explore.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-1 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                  {ARCHETYPE_DATA.map((arch, i) => (
                    <ArchetypeTab key={arch.id} archetype={arch} active={activeArchetype === i} onClick={() => setActiveArchetype(i)} />
                  ))}
                </div>
                <div className="lg:col-span-2">
                  <div
                    className="rounded-2xl bg-white border shadow-md p-5 sm:p-7 h-full transition-all duration-200"
                    style={{ borderColor: active.color }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                        style={{ backgroundColor: active.bg }}
                      >
                        {active.emoji}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{active.title}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-semibold"
                            style={{ backgroundColor: active.bg, color: active.color }}
                          >
                            {active.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">{active.body}</p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">{active.detail}</p>
                    <div
                      className="rounded-xl px-4 py-3.5 mb-4"
                      style={{ backgroundColor: active.bg }}
                    >
                      <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: active.color }}>
                        Example Project
                      </p>
                      <p className="text-sm italic leading-relaxed" style={{ color: active.color }}>
                        &ldquo;{active.example}&rdquo;
                      </p>
                    </div>
                    <div
                      className="flex items-center gap-2 rounded-xl px-4 py-3"
                      style={{ backgroundColor: "#ecfdf5", border: `1px solid ${active.color}40` }}
                    >
                      <CheckCircle2 size={14} style={{ color: active.color }} />
                      <p className="text-xs font-semibold" style={{ color: "#065f46" }}>
                        Proof: {active.proof}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mt-5 p-4 rounded-2xl border"
                style={{ backgroundColor: "#fffbeb", borderColor: "#fde68a" }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0">📌</span>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    Each of these archetypes answers a different question a hiring manager has. Together, they paint a picture of a <strong>complete, deployable data professional</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* ── 04 CHOOSING THE RIGHT DATA ───────── */}
            <section id="data-choice" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#fef3c7", color: "#92400e" }}
              >
                <span>04</span> Data Selection
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Choosing the Right Data: The Messier, the Better
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-2xl">
                The dataset you choose is one of the strongest signals of your seriousness. Pre-cleaned, competition-ready datasets from Kaggle are almost universally overused in student portfolios.
              </p>
              <div className="space-y-3 mb-6">
                {DATA_QUALITY_DATA.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border p-4 flex flex-col sm:flex-row sm:items-start gap-3"
                    style={{ borderColor: item.color + "40", backgroundColor: item.bg + "50" }}
                  >
                    <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:min-w-[140px]">
                      <span className="text-base font-bold" style={{ color: item.color }}>{item.tier}</span>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"
                        style={{ backgroundColor: item.bg, color: item.color }}
                      >
                        {item.label}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800 mb-1">{item.sources}</p>
                      <p className="text-xs text-gray-500">{item.why}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="rounded-xl border p-4"
                style={{ backgroundColor: "#eff6ff", borderColor: "#bfdbfe" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={14} style={{ color: ACCENT }} />
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT_DARK }}>The Logic</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  When you scrape or source your own data, you are already demonstrating initiative, resourcefulness, and a step of the process that tutorial projects skip entirely.
                </p>
              </div>
            </section>

            {/* ── 05 5-STEP FRAMEWORK ──────────────── */}
            <section
              id="framework"
              className="rounded-2xl overflow-hidden border p-6 sm:p-8"
              style={{ background: "linear-gradient(135deg, #f8fafc, #eff6ff)", borderColor: "#bfdbfe" }}
            >
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ borderColor: "#bfdbfe", backgroundColor: "#eff6ff", color: ACCENT_DARK }}
              >
                <BarChart3 size={12} /> <span>05</span> Project Framework
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                The 5-Step Framework for Building Each Project
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-7 max-w-2xl">
                Every strong portfolio project, regardless of the domain, follows the same underlying structure. Following this framework ensures your work has a beginning, a middle, and — crucially — a business-relevant conclusion.
              </p>
              <div className="space-y-4">
                {FRAMEWORK_STEPS.map((step, i) => (
                  <div
                    key={i}
                    className="relative flex gap-4 items-start"
                  >
                    {i < FRAMEWORK_STEPS.length - 1 && (
                      <div
                        className="absolute left-5 top-12 w-0.5 h-full"
                        style={{ backgroundColor: step.color + "30" }}
                      />
                    )}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 z-10 border-2"
                      style={{ backgroundColor: step.bg, color: step.color, borderColor: step.color }}
                    >
                      {step.num}
                    </div>
                    <div
                      className="flex-1 rounded-2xl border p-4 sm:p-5"
                      style={{ borderColor: step.color + "40", backgroundColor: step.bg + "50" }}
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <div>
                          <h3 className="text-base font-bold" style={{ color: step.color }}>{step.title}</h3>
                          <p className="text-xs font-semibold text-gray-500 mt-0.5">{step.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 06 CASE STUDIES ──────────────────── */}
            <section id="case-studies" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#ede9fe", color: "#5b21b6" }}
              >
                <span>06</span> Writing Style
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Stop Writing Code Dumps. Start Writing Case Studies.
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                One of the most common mistakes in data science portfolios is treating the project write-up as a log of technical activities rather than a business case study. Compare these two descriptions of the exact same project:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle size={14} className="text-red-500" />
                    <span className="text-xs font-bold text-red-700 uppercase tracking-wide">Passive Reporting</span>
                  </div>
                  <p className="text-sm text-red-700 italic leading-relaxed">
                    &ldquo;I cleaned the data and ran a Random Forest model with 93% accuracy.&rdquo;
                  </p>
                </div>
                <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={14} className="text-green-600" />
                    <span className="text-xs font-bold text-green-700 uppercase tracking-wide">Impact-Driven Case Study</span>
                  </div>
                  <p className="text-sm text-green-700 italic leading-relaxed">
                    &ldquo;Identified class imbalance using SMOTE, deployed an ensemble model, and uncovered an optimal pricing tier that reduces churn risk by 15% — potentially saving ₹35L annually for a mid-sized SaaS business.&rdquo;
                  </p>
                </div>
              </div>

              <div
                className="rounded-xl border p-4"
                style={{ backgroundColor: "#eff6ff", borderColor: "#bfdbfe" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle size={14} style={{ color: ACCENT }} />
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT_DARK }}>The Golden Rule</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Models are tools. The portfolio entry should always show what the tool helps a business decide or do. Lead with the business problem, follow with your methodology, and close with a specific, defensible recommendation.
                </p>
              </div>
            </section>

            {/* ── 07 GITHUB ────────────────────────── */}
            <section id="github" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#d1fae5", color: "#065f46" }}
              >
                <GitBranch size={12} /> <span>07</span> GitHub Strategy
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Structuring Your GitHub Repository as a Narrative
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Your repository is not just where your code lives — it is a document that a hiring manager may spend 90 seconds reviewing before deciding whether to call you. Every element of it should serve that audience.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                A well-structured repository includes five essential components:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { num: "1", title: "Clear, searchable project title with relevant tags", color: ACCENT, bg: ACCENT_LIGHT },
                  { num: "2", title: "A two-sentence business problem hook at the very top of your README", color: "#059669", bg: "#d1fae5" },
                  { num: "3", title: "A visual diagram of your tech stack", color: "#8b5cf6", bg: "#ede9fe" },
                  { num: "4", title: "Three bullet points of actionable business findings", color: "#f59e0b", bg: "#fef3c7" },
                  { num: "5", title: 'A requirements.txt with clear "how to run" terminal instructions', color: "#ef4444", bg: "#fee2e2" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border p-3.5"
                    style={{ borderColor: item.color + "30", backgroundColor: item.bg + "60" }}
                  >
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                      style={{ backgroundColor: item.color, color: "#fff" }}
                    >
                      {item.num}
                    </span>
                    <p className="text-sm text-gray-700 font-medium leading-relaxed">{item.title}</p>
                  </div>
                ))}
              </div>
              <div
                className="rounded-xl border p-4"
                style={{ backgroundColor: "#fffbeb", borderColor: "#fde68a" }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0">📌</span>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    That last point is worth emphasising: <strong>reproducibility is a professional signal</strong>. If someone cannot run your code, it does not exist from their perspective.
                  </p>
                </div>
              </div>
            </section>

            {/* ── 08 FOUR CRITICAL ERRORS ──────────── */}
            <section id="errors" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#fee2e2", color: "#991b1b" }}
              >
                <AlertCircle size={12} /> <span>08</span> Critical Errors
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                The Four Critical Errors That Kill Portfolios
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-2xl">
                Even technically excellent projects get rejected by hiring managers because of avoidable presentation errors. Click each to expand.
              </p>
              <div className="space-y-3">
                {ERRORS_DATA.map((item, i) => (
                  <ErrorCard key={i} item={item} />
                ))}
              </div>
            </section>

            {/* ── FEATURED TRAINING PARTNER ────────── */}
            <section
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: ACCENT + "40", background: `linear-gradient(135deg, ${ACCENT_DARK}, #0369a1)` }}
            >
              <div className="p-6 sm:p-8">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" }}
                >
                  <Award size={12} /> Featured Training Partner
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Learn to Build Portfolio Projects the Industry-Ready Way
                </h2>
                <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6">
                  At Ivy Pro School — India&apos;s #1 Data &amp; GenAI Training Institute — every student builds real, end-to-end portfolio projects as part of their programme. With IIT-certified curriculum, NASSCOM and IBM accreditation, and instructors who have trained professionals at PwC, HSBC, and Tata Steel, Ivy Pro ensures you graduate with proof-of-work that hiring managers recognise.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {[
                    { value: "32,500+", label: "Students Trained" },
                    { value: "82%", label: "Placement Rate" },
                    { value: "59%", label: "Avg. Salary Hike" },
                    { value: "₹42 LPA", label: "Highest Package" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-3 text-center"
                      style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                    >
                      <div className="text-xl sm:text-2xl font-black text-white">{stat.value}</div>
                      <div className="text-[10px] text-blue-200 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/courses/data-science-and-ml-course"
                    className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: ACCENT, color: "#fff" }}
                  >
                    Explore Data Science Course <ArrowUpRight size={14} />
                  </Link>
                  <Link
                    href="/courses"
                    className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}
                  >
                    View All Courses
                  </Link>
                </div>
              </div>
            </section>

            {/* ── 09 AMPLIFICATION ─────────────────── */}
            <section id="amplify" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#ede9fe", color: "#5b21b6" }}
              >
                <Rocket size={12} /> <span>09</span> Going Beyond
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Going Beyond: Three Levels of Portfolio Amplification
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-7 max-w-2xl">
                Once your core projects are solid, there are three ways to multiply their impact and signal to employers that you are not just a learner but a practitioner.
              </p>
              <div className="space-y-4">
                {AMPLIFY_LEVELS.map((level, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border p-5 flex gap-4"
                    style={{ borderColor: level.color + "40", backgroundColor: level.bg + "50" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: level.bg, color: level.color }}
                    >
                      {level.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: level.bg, color: level.color }}
                        >
                          {level.level}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-gray-900">{level.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{level.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 10 PRE-LAUNCH CHECKLIST ──────────── */}
            <section id="checklist" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#d1fae5", color: "#065f46" }}
              >
                <CheckCircle2 size={12} /> <span>10</span> Pre-Launch Check
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                The Pre-Launch Checklist
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-2xl">
                Before you share your portfolio with a single recruiter or hiring manager, run through this final quality check.
              </p>
              <div className="space-y-3 mb-6">
                {CHECKLIST_ITEMS.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border p-4"
                    style={{ borderColor: "#6ee7b7", backgroundColor: "#f0fdf4" }}
                  >
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <div
                className="rounded-xl border p-4"
                style={{ backgroundColor: "#eff6ff", borderColor: "#bfdbfe" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle size={14} style={{ color: ACCENT }} />
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT_DARK }}>Ready to Compete</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  If you can answer yes to all six, your portfolio is ready to compete. If not, you now know exactly what to work on.
                </p>
              </div>
            </section>

            {/* ── 11 RECOMMENDED TECH STACK ────────── */}
            <section id="stack" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT_DARK }}
              >
                <Database size={12} /> <span>11</span> Tech Stack
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                The Recommended Tech Stack (No Need to Overcomplicate It)
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                One final, important note: do not let tool selection become a form of procrastination. The data science job market values clear thinking and business impact over technical complexity. A simple linear regression that correctly frames and answers the right business question will beat a complex neural network that answers the wrong one every time.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                For most portfolios, the following stack is more than sufficient:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
                {[
                  { icon: "🐍", label: "Python / R", desc: "Code & analysis in Jupyter", color: "#8b5cf6", bg: "#ede9fe" },
                  { icon: "🗄️", label: "SQL", desc: "DBeaver or PostgreSQL for data ops", color: "#0ea5e9", bg: "#e0f2fe" },
                  { icon: "🚀", label: "Streamlit", desc: "Deployment & web apps", color: "#059669", bg: "#d1fae5" },
                  { icon: "📊", label: "Tableau / GitHub Pages", desc: "Visualisation & hosting", color: "#f59e0b", bg: "#fef3c7" },
                ].map((tool, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border p-4 flex flex-col gap-2 hover:shadow-md transition-shadow text-center items-center"
                    style={{ borderColor: tool.color + "30", backgroundColor: tool.bg + "60" }}
                  >
                    <span className="text-2xl">{tool.icon}</span>
                    <div className="text-sm font-bold" style={{ color: tool.color }}>{tool.label}</div>
                    <p className="text-xs text-gray-600 leading-relaxed">{tool.desc}</p>
                  </div>
                ))}
              </div>
              <div
                className="rounded-2xl border p-5"
                style={{ backgroundColor: "#eff6ff", borderColor: "#bfdbfe" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase size={14} style={{ color: ACCENT }} />
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT_DARK }}>The Bottom Line</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Master these before chasing the next trending framework. That is it.
                </p>
                <p className="text-base font-bold text-gray-900 mb-2">
                  Your portfolio is your competitive edge. Stop reading about it. Start building it.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The data science job market in 2026 is competitive — but it rewards those who demonstrate, not those who merely declare. A portfolio built on the principles in this guide will do more for your career than any number of certificates sitting in a PDF folder.
                </p>
              </div>
            </section>

            {/* ── Tags ─────────────────────────────────── */}
            <div className="flex flex-wrap gap-2">
              {["data science", "portfolio", "machine learning", "career guide", "github", "data science jobs 2026", "Ivy Pro School"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full font-medium border"
                  style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT_DARK, borderColor: "#bfdbfe" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* ── Author ───────────────────────────────── */}
            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }} />
              <div className="p-6 flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg flex-shrink-0 border-2"
                  style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})`, borderColor: ACCENT_LIGHT }}
                >
                  IP
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-base mb-0.5">Ivy Pro School Editorial Team</div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Ivy Pro School is India&apos;s #1 Data Science &amp; GenAI Training Institute with 17+ years of experience, IIT-certified curriculum, and a track record of placing 32,500+ students at top companies. Instructors have trained professionals at{" "}
                    <a href="https://ivyproschool.com/alumni" className="font-semibold hover:underline" style={{ color: ACCENT }}>PwC, HSBC, Accenture, Genpact</a>, and more.{" "}
                    <Link href="/about" className="font-semibold hover:underline" style={{ color: ACCENT }}>
                      Learn more →
                    </Link>
                  </p>
                </div>
              </div>
            </div>

          </article>

          {/* ── RIGHT: sidebar ──────────────────── */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-8 space-y-4">

              {/* On-page nav */}
              <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
                <div
                  className="px-4 py-2.5 flex items-center gap-2"
                  style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }}
                >
                  <BookOpen size={12} className="text-white" />
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Contents</span>
                </div>
                <div className="p-3 space-y-0.5">
                  {ARTICLE_SECTIONS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200"
                      style={{
                        backgroundColor: activeSection === item.id ? ACCENT_LIGHT : "transparent",
                        color: activeSection === item.id ? ACCENT_DARK : "#6b7280",
                        fontWeight: activeSection === item.id ? "700" : "500",
                      }}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA card */}
              <div
                className="rounded-2xl p-5"
                style={{ background: `linear-gradient(135deg, ${ACCENT_DARK}, #0369a1)` }}
              >
                <div className="text-white font-bold text-sm mb-2">Ready to Build Your Portfolio?</div>
                <p className="text-blue-100 text-xs leading-relaxed mb-4">
                  Join 32,500+ students who built job-ready data science portfolios with Ivy Pro School.
                </p>
                <Link
                  href="/courses/data-science-and-ml-course"
                  className="flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: ACCENT }}
                >
                  Explore Courses <ArrowRight size={12} />
                </Link>
              </div>

              {/* Industry Authority */}
              <div className="p-4 sm:p-5 rounded-2xl shadow-lg border" style={{ background: "linear-gradient(135deg, #ecfdf5, #eff6ff)", borderColor: "#a7f3d0" }}>
                <div className="text-center mb-4">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg flex items-center justify-center gap-2">
                    <ShieldCheck className="h-5 w-5" style={{ color: ACCENT }} />
                    Industry Authority
                  </h3>
                  <p className="text-gray-600 text-xs mt-1">Authored by Ivy Pro School founders &amp; practitioners</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-200">
                          <Image src={PrateekAgarwal} alt="Prateek Agarwal" className="w-full h-full object-cover" width={56} height={56} loading="lazy" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 rounded-full p-1" style={{ backgroundColor: ACCENT }}>
                          <Star className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-sm truncate">Prateek Agarwal</h4>
                        <p className="text-gray-600 text-xs truncate">Founder, Ivy Pro School</p>
                        <div className="flex items-center gap-1 mt-1">
                          <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
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
                          <div className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                          <span className="text-xs text-gray-500">20+ years Data/AI Consultant</span>
                        </div>
                      </div>
                      <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-orange-50 hover:bg-orange-100 p-2 rounded-lg transition-colors">
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
                      <Briefcase className="h-4 w-4" style={{ color: ACCENT }} />
                      <span>Industry Experts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" style={{ color: ACCENT }} />
                      <span>16+ Years Each</span>
                    </div>
                  </div>
                  <p className="text-xs text-center text-gray-500 mt-3 italic">All content reviewed by Ivy&apos;s expert faculty team</p>
                </div>
              </div>

              {/* Related articles */}
              <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-4 py-2.5 border-b border-gray-100">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">Related Articles</span>
                </div>
                <div className="p-3 space-y-1">
                  {[
                    { title: "Is Data Science a Good Career for Commerce Students?", href: "/aihelpcenter/career/data-science-for-commerce-students" },
                  ].map((article, i) => (
                    <Link
                      key={i}
                      href={article.href}
                      className="block px-3 py-2.5 rounded-xl hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex items-start gap-2">
                        <FileText size={12} className="mt-0.5 flex-shrink-0 text-gray-400 group-hover:text-blue-500" />
                        <span className="text-xs text-gray-600 group-hover:text-blue-700 font-medium leading-snug">
                          {article.title}
                        </span>
                      </div>
                    </Link>
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
