"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Clock,
  BookOpen,
  BarChart3,
  Wand2,
  LineChart,
  Database,
  AlertCircle,
  FileSpreadsheet,
  Zap,
  Target,
  MessageSquare,
  Search,
  Star,
  ChevronDown,
  Users,
  Lightbulb,
  Layers,
  FlaskConical,
  ArrowUpRight,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  LinkedinIcon,
} from "lucide-react";
import ivy from "@/assests/ivy.png";
import PrateekAgarwal from "@/assests/pratilk.webp";
import eeshani from "@/assests/eeshani.webp";

/* ─── roadmap sections ──────────────────────────────── */

const ROADMAP_SECTIONS = [
  { id: "what-is", title: "What Is Claude in Excel?" },
  { id: "setup", title: "Setting Up Claude in Excel" },
  { id: "use-cases", title: "5 Core Use Cases" },
  { id: "large-data", title: "Handling Large Datasets" },
  { id: "replace", title: "Can It Replace a Data Analyst?" },
  { id: "best-practices", title: "Best Practices" },
  { id: "examples", title: "Real-World Examples" },
  { id: "conclusion", title: "Conclusion" },
];

/* ─── data ──────────────────────────────────────────── */

const USE_CASES = [
  {
    id: "cleaning",
    icon: <Database size={20} />,
    label: "Data Cleaning",
    color: "#0ea5e9",
    bg: "#e0f2fe",
    title: "Data Cleaning & Preparation",
    body: `Raw data is almost never clean. You have inconsistent date formats, extra spaces, mismatched categories, blank rows, and duplicate entries. Normally, cleaning this by hand is tedious and error-prone.`,
    detail: `With Claude, you can simply describe the problem. Tell it something like: "There are inconsistent entries in column B where some rows say 'New York' and others say 'NY'. Can you help me standardize these?" — and Claude walks you through exactly how to fix it, including which formulas to use or which Excel features to apply.`,
    example: `"Standardize all date formats in column C to YYYY-MM-DD and flag any blank rows in columns A through F."`,
    links: [
      { label: "Advanced Excel techniques (Cheat Sheet)", href: "https://blog.ivyproschool.com/advanced-excel-cheat-sheet-series-2/" },
      { label: "Automating Excel reports with Python", href: "https://ivyproschool.com/aihelpcenter/python-basics/excel-automation-openpyxl" },
    ],
  },
  {
    id: "formulas",
    icon: <Wand2 size={20} />,
    label: "Formula Writing",
    color: "#8b5cf6",
    bg: "#ede9fe",
    title: "Formula Writing & Explanation",
    body: `Even experienced Excel users struggle with complex formulas: XLOOKUP, INDEX-MATCH, nested IF statements, array formulas, SUMPRODUCT — these can get complicated fast.`,
    detail: `Claude excels in two directions. First, describe what you want in plain English and get the formula. Second, paste in an existing formula and ask Claude to explain it step by step — perfect for formulas you wrote three months ago and have completely forgotten.`,
    example: `"Write a formula that returns the manager name from Sheet2 based on the employee ID in column A of Sheet1, and return 'Not Found' if there is no match."`,
    links: [],
  },
  {
    id: "stats",
    icon: <BarChart3 size={20} />,
    label: "Statistical Analysis",
    color: "#10b981",
    bg: "#d1fae5",
    title: "Statistical Analysis & Interpretation",
    body: `Running a pivot table or a regression is one thing. Understanding what the output is actually telling you is another — especially when you need to communicate it to non-technical stakeholders.`,
    detail: `Claude can interpret statistical results in plain language. If you run a correlation analysis and get a result of 0.73, Claude explains what that means in the context of your specific dataset, what its implications are, and what follow-up analyses you might want to consider.`,
    example: `"I ran a regression and got an R-squared of 0.61 and a p-value of 0.003. Explain what this means for my quarterly sales forecast in plain language."`,
    links: [],
  },
  {
    id: "charts",
    icon: <LineChart size={20} />,
    label: "Chart Recommendations",
    color: "#f59e0b",
    bg: "#fef3c7",
    title: "Chart & Visualization Recommendations",
    body: `One of the most common mistakes in data analytics is choosing the wrong chart type — a pie chart when a bar chart would be clearer, or a cluttered scatter plot when a simple table would communicate better.`,
    detail: `Ask Claude to look at your data structure and suggest the most effective visualization. It recommends a chart type and explains why that choice makes sense for your specific data and your audience.`,
    example: `"I have monthly revenue data for 8 product lines over 3 years. What chart type best shows both the trend over time and the relative size of each product line?"`,
    links: [],
  },
  {
    id: "trends",
    icon: <TrendingUp size={20} />,
    label: "Trend Detection",
    color: "#ef4444",
    bg: "#fee2e2",
    title: "Trend Identification & Pattern Recognition",
    body: `When you have months or years of data, spotting meaningful trends manually is genuinely hard. Patterns often hide in plain sight across dozens of rows and columns.`,
    detail: `Claude can help identify patterns, flag anomalies, and point out relationships between variables you might not have been looking for. This is especially powerful for sales data, financial reporting, and operational metrics where patterns over time drive decisions.`,
    example: `"Look at my sales data in columns A through F. Are there any months that consistently underperform? Are there any unusual spikes or drops that don't match the trend?"`,
    links: [],
  },
];

const BEST_PRACTICES = [
  {
    icon: <Target size={18} />,
    color: "#6366f1",
    title: "Be Specific About What You Need",
    body: `Vague questions produce vague answers. Instead of "Can you analyze my sales data?", ask "Can you help me calculate the month-over-month percentage change in column D and identify the three months with the biggest drops?" The more specific the question, the more actionable the response.`,
  },
  {
    icon: <MessageSquare size={18} />,
    color: "#0ea5e9",
    title: "Provide Context About Your Goal",
    body: `Claude is more helpful when it understands what you are ultimately trying to accomplish. If you are preparing data for a board presentation, that context changes what insights are most relevant. Always share the bigger picture — it shapes the entire quality of Claude's guidance.`,
  },
  {
    icon: <Layers size={18} />,
    color: "#10b981",
    title: "Iterate and Ask Follow-Up Questions",
    body: `Because Claude maintains context within a session, you can build on previous responses. If it gives you a formula and you want to understand one part better, just ask. If its first suggestion is close but not right, describe what needs to change. This conversational back-and-forth is one of the most powerful aspects of working with Claude.`,
  },
  {
    icon: <FlaskConical size={18} />,
    color: "#f59e0b",
    title: "Validate Important Outputs",
    body: `For any analysis that will inform a significant business decision, take the time to verify Claude's outputs. Check formulas against known values, cross-reference results with other data sources, and apply your domain knowledge. Claude is highly capable, but human oversight remains important for high-stakes work.`,
  },
];

const REAL_EXAMPLES = [
  {
    icon: "📊",
    color: "#6366f1",
    bg: "from-indigo-50 to-purple-50",
    border: "border-indigo-200",
    role: "Sales Manager",
    time: "2 hours → 20 minutes",
    title: "Monthly Sales Reporting",
    body: `A sales manager needed to produce a monthly performance report across 12 regional teams. Rather than manually calculating totals, averages, and percentage changes for each region, she used Claude to build the formula structure once, then applied it consistently across all columns.`,
    outcome: "Report time reduced by 83%",
  },
  {
    icon: "🎯",
    color: "#10b981",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-200",
    role: "Marketing Analyst",
    time: "Days → Hours",
    title: "Customer Segmentation",
    body: `A marketing analyst with a customer dataset containing purchase history, demographics, and engagement metrics asked Claude to suggest how to segment customers into meaningful groups. Claude walked him through an RFM (Recency, Frequency, Monetary) framework and the exact Excel steps to implement it.`,
    outcome: "Full segmentation in one afternoon",
  },
  {
    icon: "💰",
    color: "#f59e0b",
    bg: "from-amber-50 to-yellow-50",
    border: "border-amber-200",
    role: "Finance Professional",
    time: "Manual → Automated",
    title: "Budget Variance Analysis",
    body: `A finance professional needed to identify which budget categories were most significantly over or under plan. She asked Claude to help build a dynamic analysis that flags variances above a certain threshold and color-codes them using conditional formatting.`,
    outcome: "Self-updating variance tracker built in one session",
  },
];

const SETUP_TIPS = [
  "You do not need any programming or advanced Excel expertise to use Claude in Excel effectively.",
  "Claude can read your data directly — you don't have to paste or describe it manually.",
  "The more specific you are with your requests, the more precise Claude's responses will be.",
  "Claude maintains context during a session, so follow-up questions work naturally.",
  "Give your columns clear, descriptive headers before working with Claude — the more meaningful the names, the better Claude understands your data.",
];

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

/* ─── sub-components ────────────────────────────────── */

const UseCaseTab = ({ useCase, active, onClick }: {
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

/* ─── main page ─────────────────────────────────────── */

export default function ClaudeInExcelPage() {
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
      // update active roadmap section
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
          style={{ width: `${scrollProgress}%`, background: "linear-gradient(90deg, #14b8a6, #f7af34)" }}
        />
      </div>

      {/* ── Floating Review Prompt ──────────────────── */}
      {showReviewPrompt && (
        <div className="fixed top-16 sm:top-20 right-2 sm:right-4 md:right-6 z-50 max-w-xs sm:max-w-sm">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="h-8 sm:h-10 w-8 sm:w-10 rounded-full flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-500">
                <Star className="h-4 sm:h-6 w-4 sm:w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Enjoying this tutorial?</h3>
                <p className="text-xs sm:text-sm text-gray-600">Share your feedback!</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm">
              You&apos;ve completed {Math.round(scrollProgress)}% of this tutorial. Help others by sharing your experience with Ivy Professional School.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={openReviewPage}
                className="flex-1 text-white font-bold py-2 sm:py-3 rounded-lg sm:rounded-xl hover:opacity-90 transition-opacity text-sm bg-gradient-to-r from-teal-500 to-blue-700"
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
          <Link href="/aihelpcenter" className="hover:text-teal-600 transition-colors">AI Help Center</Link>
          <ChevronRight size={12} />
          <Link href="/aihelpcenter/ai-strategy-pm" className="hover:text-teal-600 transition-colors">AI Strategy (PM)</Link>
          <ChevronRight size={12} />
          <span className="text-gray-800 font-medium">Claude in Excel for Data Analytics</span>
        </div>
      </div>

      {/* ── Hero (split layout) ──────────────────────── */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="h-1.5 w-full bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-500" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* left text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-700 uppercase tracking-wider mb-5">
              <FileSpreadsheet size={12} className="text-teal-500" />
              AI Strategy (PM) · Excel Analytics
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
              How to Use{" "}
              <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">
                Claude in Excel
              </span>{" "}
              for Data Analytics
            </h1>

            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-7">
              A complete guide to your AI co-analyst inside Microsoft Excel — from data cleaning to trend interpretation, all without leaving your spreadsheet.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Image src={ivy} alt="Ivy Pro School" width={16} height={16} className="rounded-full" />
                Ivy Pro School
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Clock size={11} />
                ~12 minutes read
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <BookOpen size={11} />
                March 17, 2026
              </div>
            </div>
          </div>

          {/* right — spreadsheet visual */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              <div className="bg-[#217346] px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-white text-xs font-semibold ml-2">sales_analysis.xlsx — Claude in Excel</span>
              </div>
              <div className="grid grid-cols-4 bg-[#f2f2f2] border-b border-gray-200 text-[10px] font-bold text-gray-500 uppercase">
                {["Region", "Q1 Sales", "Q2 Sales", "YoY %"].map((h) => (
                  <div key={h} className="px-3 py-2 border-r border-gray-200 last:border-r-0">{h}</div>
                ))}
              </div>
              {[
                ["North", "$142,300", "$168,500", "+18.4%"],
                ["South", "$98,700", "$107,200", "+8.6%"],
                ["East", "$203,100", "$189,400", "−6.7%"],
                ["West", "$176,800", "$221,600", "+25.3%"],
                ["Central", "$88,200", "$94,100", "+6.7%"],
              ].map(([r, q1, q2, yoy], i) => (
                <div key={i} className="grid grid-cols-4 text-[10px] border-b border-gray-100 hover:bg-teal-50/60 transition-colors">
                  <div className="px-3 py-2 border-r border-gray-100 font-medium text-gray-700">{r}</div>
                  <div className="px-3 py-2 border-r border-gray-100 text-gray-600">{q1}</div>
                  <div className="px-3 py-2 border-r border-gray-100 text-gray-600">{q2}</div>
                  <div className={`px-3 py-2 font-bold ${yoy.startsWith("+") ? "text-emerald-600" : "text-red-500"}`}>{yoy}</div>
                </div>
              ))}
              <div className="bg-teal-50 border-t border-teal-100 px-4 py-3 flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Star size={12} className="text-white" />
                </div>
                <p className="text-[10px] text-teal-800 leading-snug">
                  <strong>Claude:</strong> The East region shows a 6.7% decline. This is the only region trending negative — would you like me to help investigate the root cause using the detailed breakdown in Sheet2?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* stat strip */}
        <div className="border-t border-gray-100">
          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: "5", label: "Core Use Cases" },
              { num: "4", label: "Best Practices" },
              { num: "3", label: "Real-World Scenarios" },
              { num: "0", label: "Coding Required" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-teal-600">{s.num}</div>
                <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wide mt-0.5">{s.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* ── Main grid: article + sidebar ────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-4">

          {/* ── LEFT: article content ──────────────── */}
          <article className="lg:col-span-3 space-y-6">

            {/* Table of Contents */}
            <div className="rounded-2xl bg-white border border-teal-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-teal-500 to-emerald-500 px-5 py-3 flex items-center gap-2">
                <BookOpen size={14} className="text-white" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">Table of Contents</span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-1">
                {ROADMAP_SECTIONS.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-teal-50 transition-colors text-left w-full"
                  >
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-600 group-hover:text-teal-700 transition-colors font-medium">{item.title}</span>
                    <ArrowRight size={12} className="text-teal-300 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>

            {/* ── What Is Claude in Excel ─────────── */}
            <section id="what-is" className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-teal-400 to-cyan-400" />
              <div className="p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#ccfbf1", color: "#0f766e" }}>
                  <FileSpreadsheet size={12} /> Overview
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  What Is Claude in Excel and Why Does It Matter?
                </h2>
                <p className="text-base sm:text-lg border-l-4 border-teal-400 pl-4 italic text-gray-700 mb-5">
                  &ldquo;If you have ever stared at a massive spreadsheet and wished someone could just explain what the numbers are actually telling you, you are not alone.&rdquo;
                </p>
                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Claude is Anthropic&apos;s AI assistant, and it is now accessible directly inside Microsoft Excel as a beta product called <strong className="text-gray-800">Claude in Excel</strong>. Think of it as having a knowledgeable co-analyst sitting right next to you, ready to help you clean data, write formulas, interpret trends, and generate insights — all without leaving your spreadsheet.
                  </p>
                  <p>
                    Claude in Excel is a <strong className="text-gray-800">spreadsheet agent</strong>, meaning it doesn&apos;t just answer questions passively. It can actively read your data, understand context, perform analysis, and suggest actions. This is fundamentally different from a simple formula assistant or a chatbot bolted onto the side of a tool.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-teal-50 border border-teal-100 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap size={15} className="text-teal-600" />
                      <span className="text-xs font-bold text-teal-800 uppercase tracking-wide">The Old Way</span>
                    </div>
                    <p className="text-sm text-teal-700">Analysts spend hours on repetitive, low-insight tasks: cleaning data, restructuring tables, writing similar formulas, and interpreting charts.</p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Star size={15} className="text-emerald-600" />
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">With Claude</span>
                    </div>
                    <p className="text-sm text-emerald-700">Claude handles the mechanics — freeing you to focus on the interpretation and decision-making that actually requires human judgment.</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/aihelpcenter/ai-strategy-pm"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 hover:bg-teal-100 transition-colors"
                  >
                    <ArrowRight size={12} /> AI Strategy for Product Managers
                  </Link>
                  <a
                    href="https://blog.ivyproschool.com/category/data-analytics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 hover:bg-blue-100 transition-colors"
                  >
                    <ArrowUpRight size={12} /> Generative AI applications and use cases
                  </a>
                </div>
              </div>
            </section>

            {/* ── Setup ──────────────────────────── */}
            <section id="setup" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>
                <Search size={12} /> Setup Guide
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                How Do I Set Up Claude in Excel for the First Time?
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6">
                Getting started is more straightforward than you might expect. Claude in Excel is a beta product available through Anthropic&apos;s platform. The integration works as an add-in layer within Excel — you open your spreadsheet, activate the Claude panel, and you are ready to begin.
              </p>
              <div className="space-y-3">
                {SETUP_TIPS.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 hover:border-teal-200 hover:bg-teal-50/40 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Use Cases (tab switcher) ─────────── */}
            <section id="use-cases" className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-teal-50 border border-teal-100 p-6 sm:p-8">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-4">
                  <Lightbulb size={12} /> Core Use Cases
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  What Can You Actually Do with Claude in Excel?
                </h2>
                <p className="text-gray-500 text-sm sm:text-base max-w-xl">
                  The range of capabilities is wider than most people initially expect. Select each use case below.
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
                    <div className="rounded-xl px-4 py-3.5" style={{ backgroundColor: active.bg }}>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: active.color }}>Example Prompt</p>
                      <p className="text-sm italic" style={{ color: active.color }}>&ldquo;{active.example}&rdquo;</p>
                    </div>
                    {active.links && active.links.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {active.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5 border hover:opacity-80 transition-opacity"
                            style={{ color: active.color, borderColor: active.color, backgroundColor: active.bg }}
                          >
                            {link.label} <ArrowUpRight size={11} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* ── Large Datasets ─────────────────── */}
            <section id="large-data" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#f0fdf4", color: "#15803d" }}>
                <Database size={12} /> Large Datasets
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                How Does Claude Handle Large and Complex Datasets?
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-7 max-w-2xl">
                Claude in Excel is designed to work with the data structure you have open, grounded in your actual spreadsheet. For very large datasets, a staged approach works best:
              </p>
              <div className="relative">
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-teal-300 to-emerald-300 hidden sm:block" />
                <div className="space-y-4">
                  {[
                    { title: "Start with an Overview", desc: "Ask Claude for a high-level summary of your data — column types, missing values, obvious patterns, and overall shape." },
                    { title: "Drill into Specific Dimensions", desc: "Narrow your questions to specific categories, time periods, or subsets. For example: 'Focus only on Q3 data for the West region.'" },
                    { title: "Investigate Anomalies", desc: "When Claude flags something unusual, follow up with targeted questions to understand root causes." },
                    { title: "Use Descriptive Column Headers", desc: "Always give your columns clear, meaningful names before working with Claude. Better headers = more accurate guidance." },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-5 items-start pl-0 sm:pl-3">
                      <div className="w-9 h-9 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 z-10 shadow-md">
                        {i + 1}
                      </div>
                      <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all">
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Can It Replace an Analyst ────────── */}
            <section id="replace" className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-teal-900 border border-teal-800 p-6 sm:p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/70 mb-4">
                  <Users size={12} className="text-teal-400" /> Analyst vs AI
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Can Claude in Excel Replace a Data Analyst?
                </h2>
                <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto">
                  This question comes up a lot — and it deserves a direct answer.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle size={18} className="text-red-400" />
                    <h3 className="text-sm font-bold text-white">What Claude Cannot Do</h3>
                  </div>
                  <ul className="space-y-2">
                    {["Apply domain-specific business judgment", "Know what questions to ask in the first place", "Understand organizational politics and context", "Take responsibility for strategic decisions"].map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-red-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-teal-400/30 bg-teal-400/10 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 size={18} className="text-teal-400" />
                    <h3 className="text-sm font-bold text-white">What Claude Does Brilliantly</h3>
                  </div>
                  <ul className="space-y-2">
                    {["Handle mechanics: formulas, cleaning, structuring", "Interpret results and explain in plain language", "Identify anomalies and surface patterns fast", "Never gets tired or minds basic questions"].map((t, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-teal-100">
                        <CheckCircle2 size={13} className="text-teal-400 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4 text-center">
                <p className="text-white/80 text-sm sm:text-base">
                  <strong className="text-white">The right mental model:</strong> Think of Claude as a highly capable analytical assistant who removes friction between having a question and getting an answer. You are still the analyst. Claude just makes the work faster and more approachable.
                </p>
              </div>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://ivyproschool.com/courses/data-analytics-course"
                  className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3 hover:bg-white/20 transition-colors group"
                >
                  <BarChart3 size={16} className="text-teal-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-white/80 group-hover:text-white flex-1">Data Analytics with Visualization</span>
                  <ArrowUpRight size={12} className="text-white/40 flex-shrink-0" />
                </a>
                <a
                  href="https://ivyproschool.com/courses/iit-data-science-course"
                  className="flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3 hover:bg-white/20 transition-colors group"
                >
                  <Layers size={16} className="text-teal-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-white/80 group-hover:text-white flex-1">Data Science with Machine Learning &amp; AI</span>
                  <ArrowUpRight size={12} className="text-white/40 flex-shrink-0" />
                </a>
              </div>
            </section>

            {/* ── Best Practices ─────────────────── */}
            <section id="best-practices" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#ede9fe", color: "#7c3aed" }}>
                <Target size={12} /> Best Practices
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Best Practices for Using Claude in Excel Effectively
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-7 max-w-2xl">
                Like any tool, the results you get from Claude in Excel depend significantly on how you use it. Click each practice to expand details.
              </p>
              <div className="space-y-3">
                {BEST_PRACTICES.map((item, i) => (
                  <PracticeCard key={i} item={item} index={i} />
                ))}
              </div>
            </section>

            {/* ── Real-World Examples ─────────────── */}
            <section id="examples" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#fef3c7", color: "#b45309" }}>
                <Star size={12} /> Case Studies
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Real-World Examples of Claude in Excel for Data Analytics
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-7 max-w-2xl">
                Let&apos;s make this concrete with scenarios that illustrate how Claude fits into real analytical workflows.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {REAL_EXAMPLES.map((ex, i) => (
                  <div key={i} className={`rounded-2xl bg-gradient-to-br ${ex.bg} border ${ex.border} p-5 flex flex-col gap-3`}>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{ex.icon}</span>
                      <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-white/80 text-gray-600 border border-gray-200">{ex.time}</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: ex.color }}>{ex.role}</p>
                      <h3 className="text-sm sm:text-base font-bold text-gray-900">{ex.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-1">{ex.body}</p>
                    <div className="flex items-center gap-2 rounded-lg bg-white/70 border border-white px-3 py-2">
                      <CheckCircle2 size={13} style={{ color: ex.color }} />
                      <span className="text-xs font-semibold text-gray-700">{ex.outcome}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Conclusion ─────────────────────── */}
            <section id="conclusion" className="rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 p-6 sm:p-8 text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                <BookOpen size={12} /> Start Small, Scale Fast
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Get Started with Claude in Excel?
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-white/85 leading-relaxed mb-7">
                <p>
                  The best way to get value from Claude in Excel is to start with a real problem you are working on today. Do not try to redesign your entire analytics workflow on day one.
                </p>
                <p>
                  Pick one task — whether it is cleaning a messy column, writing a formula you have been avoiding, or interpreting a pivot table result — and let Claude help you through it.
                </p>
                <p className="font-semibold text-white">
                  Data analytics in Excel does not have to be a solo endeavor fought against confusing formulas and impenetrable datasets. With Claude in Excel, you have a capable, knowledgeable partner ready to help you get more from your data, faster, and with greater confidence.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/courses/data-analytics-and-generative-ai-course"
                  className="inline-flex items-center gap-2 rounded-xl bg-white text-teal-700 font-bold text-sm px-5 py-2.5 hover:bg-teal-50 transition-colors shadow-sm"
                >
                  Data Analytics and Generative AI Course <ArrowUpRight size={14} />
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

            {/* ── Back links ─────────────────────── */}
            <div className="flex flex-wrap gap-3 pb-4">
              <Link href="/aihelpcenter/ai-strategy-pm" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-teal-300 hover:text-teal-600 transition-all shadow-sm">
                ← Back to AI Strategy (PM)
              </Link>
              <Link href="/aihelpcenter" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-teal-300 hover:text-teal-600 transition-all shadow-sm">
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
                          ? "text-teal-600 border-teal-500"
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
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          <span className="text-xs text-gray-500">16+ years experience</span>
                        </div>
                      </div>
                      <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-blue-50 hover:bg-blue-100 p-2 rounded-lg transition-colors" title="View LinkedIn Profile">
                        <LinkedinIcon className="h-5 w-5 text-blue-600" />
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
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          <span className="text-xs text-gray-500">16+ years experience</span>
                        </div>
                      </div>
                      <a href="https://www.linkedin.com/in/eeshani-agrawal-b674045" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-orange-50 hover:bg-orange-100 p-2 rounded-lg transition-colors" title="View LinkedIn Profile">
                        <LinkedinIcon className="h-5 w-5 text-blue-600" />
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
                      <span>16+ Years Each</span>
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
