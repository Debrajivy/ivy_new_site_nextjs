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
  Play,
  FileSpreadsheet,
  BarChart3,
  TrendingUp,
  Database,
  Wand2,
  LineChart,
  LayoutDashboard,
  PaintBucket,
  AlertCircle,
  Users,
  Globe,
  Settings,
  Layers,
  Search,
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
  { id: "what-is", title: "What is Claude for Excel" },
  { id: "what-you-can-do", title: "What You Can Do with Claude" },
  { id: "whats-new", title: "What's New in Claude for Excel" },
  { id: "get-started", title: "How to Get Started" },
  { id: "key-features", title: "Key Features & Capabilities" },
  { id: "example-prompts", title: "Example Prompts" },
  { id: "connectors", title: "Support for Connectors" },
  { id: "technical-specs", title: "Technical Specifications" },
  { id: "limitations", title: "Current Limitations" },
  { id: "best-practices", title: "Best Practices" },
  { id: "use-cases", title: "Example Use Cases" },
  { id: "conclusion", title: "Conclusion" },
];

/* ─── use cases tab data ─────────────────────────── */

const USE_CASES = [
  {
    id: "financial-modeling",
    icon: <TrendingUp size={20} />,
    label: "Financial Modeling",
    color: "#009fda",
    bg: "#e0f2fe",
    title: "Financial Modeling",
    body: `Claude can help build and manage complete financial models directly inside Excel. Whether you are starting from scratch or completing an existing template, Claude understands the structure of financial models and can help at every step.`,
    detail: `Claude can create three-statement models linking P&L, balance sheet, and cash flow. It supports DCF and valuation model building, performs scenario and sensitivity analysis, and updates assumptions without breaking formula dependencies.`,
    example: `"Build a 5-year DCF model with WACC calculation and sensitivity table for revenue growth rates between 5% and 20%."`,
    link: { label: "Financial Modeling Course", href: "https://ivyproschool.com/courses/data-analytics-course" },
  },
  {
    id: "data-analysis",
    icon: <BarChart3 size={20} />,
    label: "Data Analysis",
    color: "#6366f1",
    bg: "#e0e7ff",
    title: "Data Analysis",
    body: `Claude helps extract meaningful insights from data quickly and accurately. Instead of manually reviewing spreadsheets, you can ask Claude to identify trends, flag anomalies, and compare performance metrics.`,
    detail: `Use Claude to identify trends and patterns across time periods, compare actual vs. budget variances, analyze performance across business segments, and get clear explanations of what the numbers mean for decision-making.`,
    example: `"Analyze this sales data and identify the three months where actual performance deviated most from budget. Explain the likely causes."`,
    link: { label: "Data Analytics & Gen AI Course", href: "https://ivyproschool.com/courses/data-analytics-and-generative-ai-course" },
  },
  {
    id: "data-cleaning",
    icon: <Database size={20} />,
    label: "Data Cleaning",
    color: "#7c3aed",
    bg: "#ede9fe",
    title: "Data Cleaning",
    body: `Messy data is one of the most common challenges in financial and business analysis. Claude simplifies the process of cleaning, standardizing, and preparing data for analysis.`,
    detail: `Claude can remove duplicates automatically, standardize date and number formats, fill missing values using logical patterns, and restructure tables to make them analysis-ready — all without requiring manual effort or VBA scripts.`,
    example: `"Clean this customer data: remove duplicates, standardize all date formats to YYYY-MM-DD, and flag rows where the revenue column is blank."`,
    link: { label: "Data Analytics Course", href: "https://ivyproschool.com/courses/data-analytics-course" },
  },
  {
    id: "formulas",
    icon: <Wand2 size={20} />,
    label: "Formulas",
    color: "#0369a1",
    bg: "#dbeafe",
    title: "Formulas",
    body: `Building and debugging complex Excel formulas is one of the most time-consuming tasks in financial analysis. Claude acts as an expert formula assistant — whether you are writing new formulas or trying to understand existing ones.`,
    detail: `Claude explains complex formulas in simple language, fixes errors like #VALUE, #REF, and #N/A, generates new formulas based on plain English requirements, and can handle XLOOKUP, INDEX-MATCH, SUMPRODUCT, and array formulas.`,
    example: `"Write a formula that calculates the 3-month rolling average of column D and returns 'Insufficient Data' if there are fewer than 3 prior months available."`,
    link: { label: "Advanced Excel Course", href: "https://ivyproschool.com/courses/data-analytics-course" },
  },
  {
    id: "dashboards",
    icon: <LayoutDashboard size={20} />,
    label: "Dashboards",
    color: "#b45309",
    bg: "#fef3c7",
    title: "Dashboards and Reporting",
    body: `Claude can automate the creation of dashboards and financial reports that would otherwise take hours to build manually. It understands KPIs, formatting requirements, and how different audiences consume financial data.`,
    detail: `Claude creates KPI summary dashboards, generates monthly and quarterly financial reports, builds charts and visualizations from your data, and formats reports for professional presentation to executives or board members.`,
    example: `"Create a one-page executive dashboard that shows total revenue, gross margin, operating expenses, and EBITDA for the last 12 months, with month-over-month trend lines."`,
    link: { label: "Data Analytics & Gen AI Course", href: "https://ivyproschool.com/courses/data-analytics-and-generative-ai-course" },
  },
  {
    id: "formatting",
    icon: <PaintBucket size={20} />,
    label: "Formatting",
    color: "#7c3aed",
    bg: "#f5f3ff",
    title: "Formatting",
    body: `Professional presentation of financial data matters. Claude ensures your workbooks are consistently formatted, visually clear, and ready for external audiences — without the tedious manual effort.`,
    detail: `Apply consistent number formatting across all sheets, add conditional formatting rules to highlight variances, prepare reports for printing with proper headers and page breaks, and ensure color-coding follows your organization's style guide.`,
    example: `"Apply consistent formatting to all financial tables: numbers in thousands with one decimal, negative values in red with brackets, headers in bold dark blue, and alternating row shading."`,
    link: { label: "Data Analytics Course", href: "https://ivyproschool.com/courses/data-analytics-course" },
  },
];

/* ─── best practices data ────────────────────────── */

const BEST_PRACTICES = [
  {
    icon: <CheckCircle2 size={18} />,
    color: "#009fda",
    title: "Always Review Changes Before Finalizing",
    body: `Claude is highly capable but operates as an assistant, not a replacement for human judgment. Always review the changes Claude makes to formulas, data, and formatting before presenting outputs to stakeholders or using them in business decisions.`,
  },
  {
    icon: <Target size={18} />,
    color: "#6366f1",
    title: "Validate Outputs Against Business Logic",
    body: `Cross-check Claude's outputs against your understanding of the business. If a financial model produces numbers that seem unrealistic, investigate before accepting them. Claude provides analytical support — your domain knowledge provides the final validation.`,
  },
  {
    icon: <ShieldCheck size={18} />,
    color: "#7c3aed",
    title: "Use Secure and Trusted Data Sources",
    body: `Ensure that any data you work with in Claude for Excel comes from trusted, controlled sources. Avoid uploading files that contain personally identifiable information or highly sensitive financial data without appropriate controls in place.`,
  },
  {
    icon: <Users size={18} />,
    color: "#b45309",
    title: "Maintain Human Oversight for Critical Work",
    body: `For any analysis that will inform major financial decisions — board presentations, investor reporting, M&A due diligence — treat Claude's outputs as a first draft that requires expert review, not a final deliverable.`,
  },
];

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

/* ─── accordion component ────────────────────────── */

const PracticeCard = ({ item, index }: { item: typeof BEST_PRACTICES[0]; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl border bg-white shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      style={{ borderColor: open ? item.color : "#e5e7eb" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center gap-4 px-5 py-4">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${item.color}18`, color: item.color }}
        >
          {item.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: `${item.color}18`, color: item.color }}
            >
              #{index + 1}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-gray-900">{item.title}</h3>
          </div>
        </div>
        <ChevronDown
          size={16}
          className="text-gray-400 transition-transform duration-200 flex-shrink-0"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>
      <div
        className="overflow-hidden transition-all duration-300 px-5"
        style={{ maxHeight: open ? "200px" : "0px", paddingBottom: open ? "16px" : "0px" }}
      >
        <p className="text-sm text-gray-600 leading-relaxed border-t pt-3" style={{ borderColor: `${item.color}30` }}>
          {item.body}
        </p>
      </div>
    </div>
  );
};

/* ─── use case tab button ────────────────────────── */

const UseCaseTab = ({
  useCase,
  active,
  onClick,
}: {
  useCase: typeof USE_CASES[0];
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 w-full text-left"
    style={{
      backgroundColor: active ? useCase.color : "transparent",
      color: active ? "#fff" : "#6b7280",
      border: `1.5px solid ${active ? useCase.color : "#e5e7eb"}`,
    }}
  >
    <span
      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: active ? "rgba(255,255,255,0.2)" : useCase.bg, color: useCase.color }}
    >
      {useCase.icon}
    </span>
    {useCase.label}
  </button>
);

/* ─── main page ──────────────────────────────────── */

export default function ClaudeInFinancePage() {
  const [activeTab, setActiveTab] = useState(0);
  const active = USE_CASES[activeTab];

  const [activeSection, setActiveSection] = useState("what-is");
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
          style={{ width: `${scrollProgress}%`, background: "linear-gradient(90deg, #009fda, #013a81)" }}
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
          <span className="text-gray-800 font-medium">Claude in Finance</span>
        </div>
      </div>

      {/* ── Hero ────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#009fda] via-[#6366f1] to-[#013a81]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* left text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#013a81] uppercase tracking-wider mb-5">
              <FileSpreadsheet size={12} className="text-[#009fda]" />
              AI Strategy (PM) · Claude in Finance
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
              How to Use{" "}
              <span className="bg-gradient-to-r from-[#009fda] to-[#013a81] bg-clip-text text-transparent">
                Claude in Finance
              </span>
              {": "}
              AI for Financial Analysis, Modeling &amp; Automation
            </h1>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-7">
              A complete guide to using Claude as an{" "}
              <a href="https://ivyproschool.com/courses/iit-generative-ai-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                AI-powered
              </a>{" "}
              assistant inside Excel — from financial modeling and DCF analysis to dashboards, data cleaning, and formula automation.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Image src={ivy} alt="Ivy Pro School" width={16} height={16} className="rounded-full" />
                Ivy Pro School
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Clock size={11} />
                ~15 minutes read
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <BookOpen size={11} />
                April 13, 2026
              </div>
            </div>
          </div>

          {/* right — finance visual */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              <div className="bg-[#013a81] px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-[#009fda]" />
                </div>
                <span className="text-white text-xs font-semibold ml-2">financial_model.xlsx — Claude for Finance</span>
              </div>
              <div className="grid grid-cols-4 bg-[#f2f2f2] border-b border-gray-200 text-[10px] font-bold text-gray-500 uppercase">
                {["Metric", "Q1 Actual", "Q1 Budget", "Variance"].map((h) => (
                  <div key={h} className="px-3 py-2 border-r border-gray-200 last:border-r-0">{h}</div>
                ))}
              </div>
              {[
                ["Revenue", "$4.2M", "$4.0M", "+5.0%"],
                ["Gross Margin", "64.3%", "62.0%", "+2.3pp"],
                ["EBITDA", "$1.1M", "$980K", "+12.2%"],
                ["Net Income", "$720K", "$640K", "+12.5%"],
                ["Free Cash Flow", "$890K", "$750K", "+18.7%"],
              ].map(([metric, actual, budget, variance], i) => (
                <div key={i} className="grid grid-cols-4 text-[10px] border-b border-gray-100 hover:bg-blue-50/60 transition-colors">
                  <div className="px-3 py-2 border-r border-gray-100 font-semibold text-gray-700">{metric}</div>
                  <div className="px-3 py-2 border-r border-gray-100 text-gray-600">{actual}</div>
                  <div className="px-3 py-2 border-r border-gray-100 text-gray-400">{budget}</div>
                  <div className={`px-3 py-2 font-bold ${variance.startsWith("+") ? "text-[#013a81]" : "text-red-500"}`}>{variance}</div>
                </div>
              ))}
              <div className="bg-blue-50 border-t border-blue-100 px-4 py-3 flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-[#009fda] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Star size={12} className="text-white" />
                </div>
                <p className="text-[10px] text-[#013a81] leading-snug">
                  <strong>Claude:</strong> All five metrics beat budget. Free cash flow outperformed by 18.7% — would you like me to build a sensitivity analysis on the key drivers?
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
                <span className="text-sm font-bold text-white uppercase tracking-widest">Watch: Claude for Excel &amp; Finance</span>
              </div>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/X4I__a6qDCE"
                  title="How to Use Claude in Finance: AI for Financial Analysis and Excel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* ── Intro paragraph ───────────────────── */}
            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed border-l-4 border-[#009fda] pl-5 italic">
                &ldquo;Artificial intelligence is changing how professionals work with spreadsheets, and Claude for Excel is one of the most powerful tools leading this shift.&rdquo;
              </p>
              <div className="mt-5 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Instead of manually analyzing data, building formulas, or debugging errors, users can now interact with Excel using simple instructions. Claude acts as an intelligent assistant that understands your workbook, automates complex tasks, and helps you generate insights faster.
                </p>
                <p>
                  Whether you are working in finance,{" "}
                  <a href="https://ivyproschool.com/courses/data-analytics-and-generative-ai-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                    data analysis
                  </a>
                  , or{" "}
                  <a href="https://ivyproschool.com/courses/data-analytics-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                    business operations
                  </a>
                  , Claude for Excel allows you to save time, reduce errors, and work more efficiently with data.
                </p>
              </div>
            </div>

            {/* ── 1. What is Claude for Excel ─────────── */}
            <section id="what-is" className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#009fda] to-[#013a81]" />
              <div className="p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>
                  <FileSpreadsheet size={12} /> Overview
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  What is Claude for Excel
                </h2>
                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Claude for Excel is an{" "}
                    <a href="https://ivyproschool.com/courses/iit-generative-ai-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                      AI-powered
                    </a>{" "}
                    add-in that integrates directly into Excel and allows users to work with spreadsheets using natural language. Instead of relying only on formulas and manual navigation, users can ask questions, give instructions, and automate workflows inside their workbook.
                  </p>
                  <p>
                    It is especially useful for professionals working with{" "}
                    <a href="https://ivyproschool.com/courses/data-analytics-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">
                      financial models
                    </a>
                    , large datasets, and multi-sheet Excel files.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap size={15} className="text-[#013a81]" />
                      <span className="text-xs font-bold text-[#013a81] uppercase tracking-wide">The Old Way</span>
                    </div>
                    <p className="text-sm text-[#013a81]">Finance professionals spend hours on repetitive tasks: building formulas, debugging errors, cleaning data, and formatting reports manually.</p>
                  </div>
                  <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Star size={15} className="text-indigo-700" />
                      <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">With Claude</span>
                    </div>
                    <p className="text-sm text-indigo-800">Claude handles the mechanics — freeing you to focus on analysis, interpretation, and the strategic decisions that require human judgment.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ── 2. What You Can Do ──────────────────── */}
            <section id="what-you-can-do" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#e0e7ff", color: "#4338ca" }}>
                <Zap size={12} /> Capabilities
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                What You Can Do with Claude
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Claude is designed to act as a smart assistant inside Excel — helping users interact with data more efficiently and perform complex tasks with minimal effort.
              </p>
              <div className="space-y-3">
                {[
                  { text: "Ask questions about your workbook and get answers with cell-level references", icon: <Search size={16} /> },
                  { text: "Update assumptions without breaking formulas or dependencies", icon: <Settings size={16} /> },
                  { text: "Debug errors and identify root causes", icon: <AlertCircle size={16} /> },
                  { text: "Build new financial models or complete existing templates", icon: <TrendingUp size={16} /> },
                  { text: "Navigate across complex multi-sheet workbooks", icon: <Layers size={16} /> },
                  { text: "Automate repetitive tasks such as formatting, analysis, and reporting", icon: <Zap size={16} /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 hover:border-blue-200 hover:bg-blue-50/40 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#009fda] text-white flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 3. What's New ───────────────────────── */}
            <section id="whats-new" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>
                <Star size={12} /> Recent Updates
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                What&apos;s New in Claude for Excel
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Claude for Excel is continuously improving. Recent updates make it more powerful for finance and data professionals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Advanced AI Models", desc: "Access to Claude Sonnet and Opus versions for deeper reasoning and more accurate financial analysis.", color: "#009fda" },
                  { title: "Enhanced Spreadsheet Editing", desc: "Improved capabilities for editing formulas, values, and structures across complex multi-sheet workbooks.", color: "#6366f1" },
                  { title: "Chart & Pivot Table Editing", desc: "Create and modify charts and pivot tables using plain language instructions.", color: "#7c3aed" },
                  { title: "Conditional Formatting Support", desc: "Apply, modify, and explain conditional formatting rules across large datasets automatically.", color: "#0369a1" },
                  { title: "Data Validation", desc: "Set and manage data validation rules to maintain data integrity across financial models.", color: "#b45309" },
                  { title: "External Connector Support", desc: "Connect with external tools and data sources to bring additional context into your workbook.", color: "#6366f1" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border p-4 hover:shadow-sm transition-shadow" style={{ borderColor: `${item.color}25`, backgroundColor: `${item.color}08` }}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                      <p className="text-sm font-bold text-gray-900">{item.title}</p>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 4. How to Get Started ───────────────── */}
            <section id="get-started" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#e0e7ff", color: "#4338ca" }}>
                <Search size={12} /> Getting Started
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                How to Get Started
              </h2>

              {/* Supported Versions */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Supported Versions</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {["Excel on the web", "Excel on Windows (Microsoft 365)", "Excel on Mac", "Excel on iPad"].map((v, i) => (
                    <div key={i} className="rounded-xl bg-blue-50 border border-blue-100 p-3 text-center">
                      <FileSpreadsheet size={18} className="text-[#009fda] mx-auto mb-1.5" />
                      <p className="text-xs font-semibold text-[#013a81] leading-snug">{v}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Individual Users */}
                <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#009fda] text-white flex items-center justify-center flex-shrink-0">
                      <Users size={14} />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900">For Individual Users</h3>
                  </div>
                  <div className="space-y-2">
                    {["Go to the Microsoft Marketplace", "Search for Claude for Excel", "Click Install", "Open Excel and activate the add-in", "Sign in with your Claude account"].map((step, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#009fda] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">{i + 1}</div>
                        <p className="text-xs text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Admin Deployment */}
                <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center flex-shrink-0">
                      <Settings size={14} />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900">For Admin Deployment</h3>
                  </div>
                  <div className="space-y-2">
                    {["Open Microsoft 365 Admin Center", "Enable access to Office Store", "Navigate to Integrated Apps and Add-ins", "Search for Claude for Excel", "Deploy to users or teams"].map((step, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">{i + 1}</div>
                        <p className="text-xs text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── 5. Key Features ─────────────────────── */}
            <section id="key-features" className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-[#013a81] border border-[#013a81] p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/70 mb-5">
                <Zap size={12} className="text-[#009fda]" /> Key Features
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Key Features and Capabilities
              </h2>
              <p className="text-white/70 text-sm sm:text-base mb-7 max-w-xl">
                Claude offers a wide range of features designed to simplify Excel workflows for finance and data professionals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Read & Explain Complex Models", desc: "Understands multi-sheet workbooks and explains them clearly, including formula logic and data relationships.", icon: <BookOpen size={16} /> },
                  { title: "Safe Assumption Updates", desc: "Modify model inputs and assumptions safely — changes are tracked and highlighted without breaking dependencies.", icon: <CheckCircle2 size={16} /> },
                  { title: "Error Detection & Debugging", desc: "Identifies #VALUE, #REF, #N/A errors and other formula issues, then explains the root cause and how to fix them.", icon: <AlertCircle size={16} /> },
                  { title: "Financial Model Building", desc: "Builds three-statement models, DCF valuations, and scenario analyses from scratch or from existing templates.", icon: <TrendingUp size={16} /> },
                  { title: "Chart & Pivot Table Editing", desc: "Creates, updates, and formats charts and pivot tables using plain language — no manual configuration required.", icon: <LineChart size={16} /> },
                  { title: "Data Sorting, Filtering & Validation", desc: "Sorts and filters datasets, applies validation rules, and structures data for clean, reliable analysis.", icon: <Database size={16} /> },
                ].map((feat, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#009fda]/20 text-[#009fda] flex items-center justify-center flex-shrink-0">
                        {feat.icon}
                      </div>
                      <h3 className="text-sm font-bold text-white">{feat.title}</h3>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 6. Example Prompts ──────────────────── */}
            <section id="example-prompts" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#e0e7ff", color: "#4338ca" }}>
                <Wand2 size={12} /> Example Prompts
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Example Prompts You Can Use
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6">
                One of the biggest advantages of Claude is that it works with simple, plain English instructions. No formulas or technical knowledge required.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { prompt: "Explain how this revenue model works", category: "Analysis", color: "#009fda" },
                  { prompt: "Find all errors in this workbook", category: "Debugging", color: "#ef4444" },
                  { prompt: "Build a 12-month revenue forecast", category: "Modeling", color: "#6366f1" },
                  { prompt: "Create a dashboard summarizing key metrics", category: "Dashboard", color: "#b45309" },
                  { prompt: "Sort this table by revenue in descending order", category: "Data", color: "#7c3aed" },
                  { prompt: "Highlight negative values in red", category: "Formatting", color: "#0369a1" },
                  { prompt: "Update growth rate by 5% and show impact", category: "Scenarios", color: "#6366f1" },
                  { prompt: "Fix the #REF error in column D and explain the cause", category: "Debugging", color: "#ef4444" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-gray-100 bg-gray-50 p-4 hover:border-blue-200 hover:bg-blue-50/40 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.category}</span>
                    </div>
                    <p className="font-mono text-xs sm:text-sm text-gray-700 italic leading-relaxed">&ldquo;{item.prompt}&rdquo;</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 7. Connectors ───────────────────────── */}
            <section id="connectors" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>
                <Globe size={12} /> Connectors
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Support for Connectors
              </h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                <p>
                  Claude can connect with external tools and data platforms, allowing users to bring additional context into Excel. This is especially useful for finance and research professionals working across multiple systems.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: "Pull External Financial Data", desc: "Connect to external financial systems and pull live data directly into your workbook.", icon: <Database size={18} />, color: "#009fda" },
                  { title: "Cross-Platform Insights", desc: "Combine spreadsheet data with insights from external analytics platforms without switching tools.", icon: <Layers size={18} />, color: "#6366f1" },
                  { title: "Automate Workflows", desc: <><a href="https://ivyproschool.com/courses/ai-product-manager-course" target="_blank" rel="noopener noreferrer" className="text-[#009fda] font-semibold hover:underline">Automate workflows</a> across systems — trigger actions in external platforms directly from instructions inside Excel.</>, icon: <Zap size={18} />, color: "#7c3aed" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border p-5 hover:shadow-sm transition-shadow" style={{ borderColor: `${item.color}25`, backgroundColor: `${item.color}08` }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${item.color}18`, color: item.color }}>
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 8. Technical Specs ──────────────────── */}
            <section id="technical-specs" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#e0e7ff", color: "#4338ca" }}>
                <Settings size={12} /> Technical Specs
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Technical Specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-5">
                  <h3 className="text-sm font-bold text-[#013a81] mb-3 flex items-center gap-2">
                    <FileSpreadsheet size={15} className="text-[#009fda]" />
                    Supported File Formats
                  </h3>
                  <div className="space-y-2">
                    {[".xlsx files (standard Excel format)", ".xlsm files (macro-enabled workbooks)"].map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[#013a81]">
                        <CheckCircle2 size={13} className="text-[#009fda] flex-shrink-0" />
                        <span className="font-mono">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-5">
                  <h3 className="text-sm font-bold text-indigo-800 mb-3 flex items-center gap-2">
                    <ShieldCheck size={15} className="text-indigo-600" />
                    What is Preserved
                  </h3>
                  <div className="space-y-2">
                    {["Formulas and dependencies remain intact", "Cell relationships are preserved", "Existing formatting and structure are maintained"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-indigo-800">
                        <CheckCircle2 size={13} className="text-indigo-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── 9. Current Limitations ──────────────── */}
            <section id="limitations" className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#013a81] mb-4">
                <AlertCircle size={12} /> Limitations
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Current Limitations
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-xl">
                While Claude is powerful, it is important to understand its current boundaries. Use Claude as an assistant, not a complete replacement for human judgment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "No Macro or VBA Support", desc: "Claude does not support macros or VBA scripts. Automation is handled through AI instructions, not programmatic Excel automation.", color: "#ef4444" },
                  { title: "Chat History Not Saved", desc: "Conversation history is not saved between sessions. Each session starts fresh — plan your workflow accordingly.", color: "#f59e0b" },
                  { title: "Review Required for Final Outputs", desc: "Not recommended for final outputs without human review. Always validate critical financial models before presenting to stakeholders.", color: "#6366f1" },
                  { title: "Limited Advanced Excel Feature Support", desc: "Some advanced Excel features — complex array functions, certain pivot table configurations — may have limited support.", color: "#009fda" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl bg-white border p-4 shadow-sm" style={{ borderColor: `${item.color}30` }}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                      <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 10. Best Practices ──────────────────── */}
            <section id="best-practices" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#e0e7ff", color: "#4338ca" }}>
                <Target size={12} /> Best Practices
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Best Practices
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-7 max-w-2xl">
                To use Claude effectively and safely in financial workflows, follow these practices. Click each to expand details.
              </p>
              <div className="space-y-3">
                {BEST_PRACTICES.map((item, i) => (
                  <PracticeCard key={i} item={item} index={i} />
                ))}
              </div>
            </section>

            {/* ── 11. Example Use Cases (tab switcher) ── */}
            <section id="use-cases" className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 p-6 sm:p-8">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#013a81] mb-4">
                  <BarChart3 size={12} /> Example Use Cases
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Example Use Cases
                </h2>
                <p className="text-gray-500 text-sm sm:text-base max-w-xl">
                  Explore how Claude is used across the most common financial and data workflows. Select a use case to see details.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-1 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                  {USE_CASES.map((uc, i) => (
                    <UseCaseTab key={uc.id} useCase={uc} active={activeTab === i} onClick={() => setActiveTab(i)} />
                  ))}
                </div>
                <div className="lg:col-span-2">
                  <div className="rounded-2xl bg-white border shadow-md p-5 sm:p-7 h-full transition-all duration-200" style={{ borderColor: active.color }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: active.bg, color: active.color }}>
                        {active.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">{active.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">{active.body}</p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">{active.detail}</p>
                    <div className="rounded-xl px-4 py-3.5 mb-4" style={{ backgroundColor: active.bg }}>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: active.color }}>Example Prompt</p>
                      <p className="text-sm italic" style={{ color: active.color }}>&ldquo;{active.example}&rdquo;</p>
                    </div>
                    <a
                      href={active.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-4 py-1.5 border hover:opacity-80 transition-opacity"
                      style={{ color: active.color, borderColor: active.color, backgroundColor: active.bg }}
                    >
                      {active.link.label} <ArrowUpRight size={11} />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* ── 12. Conclusion ──────────────────────── */}
            <section id="conclusion" className="rounded-2xl bg-gradient-to-br from-[#009fda] to-[#013a81] p-6 sm:p-8 text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                <BookOpen size={12} /> Conclusion
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Conclusion
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-white/85 leading-relaxed mb-7">
                <p>
                  Claude for Excel is transforming how professionals use spreadsheets by combining AI with traditional Excel capabilities. It reduces manual effort, improves accuracy, and enables users to focus on insights rather than repetitive tasks.
                </p>
                <p>
                  For anyone working with{" "}
                  <a href="https://ivyproschool.com/courses/data-analytics-and-generative-ai-course" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-blue-200">
                    data analysis
                  </a>
                  ,{" "}
                  <a href="https://ivyproschool.com/courses/data-analytics-course" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-blue-200">
                    financial modeling
                  </a>
                  , or reporting, learning how to use Claude in Excel is becoming an essential professional skill.
                </p>
                <p className="font-semibold text-white">
                  As AI continues to evolve, tools like Claude will play a central role in shaping the future of financial analysis and data-driven decision-making.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/courses/data-analytics-and-generative-ai-course"
                  className="inline-flex items-center gap-2 rounded-xl bg-white text-[#013a81] font-bold text-sm px-5 py-2.5 hover:bg-blue-50 transition-colors shadow-sm"
                >
                  Data Analytics &amp; Gen AI Course <ArrowUpRight size={14} />
                </Link>
                <a
                  href="https://ivyproschool.com/bootcampregister"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/20 border border-white/30 text-white font-bold text-sm px-5 py-2.5 hover:bg-white/30 transition-colors"
                >
                  Live AI &amp; Excel Workshop <ArrowUpRight size={14} />
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
                <div className="flex flex-col gap-3">
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
                          <span className="text-xs text-gray-500">20+ years as an AI/ML Leader</span>
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
                      <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition-colors" title="View LinkedIn Profile">
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
