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
  Database,
  AlertCircle,
  Target,
  Search,
  Star,
  ChevronDown,
  Lightbulb,
  ArrowUpRight,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  BookMarked,
  DollarSign,
  XCircle,
  Award,
  LineChart,
  PieChart,
  FileText,
  Banknote,
  Layers,
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
import AutoPlayYouTube from "@/components/AutoPlayYoutube";

/* ─── constants ────────────────────────────────────── */

const ACCENT = "#009fda";
const ACCENT_DARK = "#013a81";
const ACCENT_LIGHT = "#dbeafe";

const ROADMAP_SECTIONS = [
  { id: "myth",      title: "The Biggest Myth" },
  { id: "advantage", title: "Your Commerce Advantage" },
  { id: "skills",    title: "Skills You Actually Need" },
  { id: "roles",     title: "Career Roles Open to You" },
  { id: "market",    title: "Why the Market Is Changing" },
  { id: "salary",    title: "Salary & Growth Potential" },
  { id: "mistakes",  title: "Common Mistakes to Avoid" },
  { id: "roadmap",   title: "The Right Roadmap" },
  { id: "conclusion","title": "Final Guidance" },
];

const SKILLS_DATA = [
  {
    id: "excel",
    icon: <BarChart3 size={20} />,
    label: "Advanced Excel",
    color: "#059669",
    bg: "#d1fae5",
    title: "Advanced Excel",
    tool: "Microsoft Excel",
    useCase: "Pivot tables, dashboards, financial models",
    body: `Excel is the foundation of every analytics career. Before you write a single line of SQL or Python, you need complete command of pivot tables, VLOOKUP/XLOOKUP, conditional formatting, named ranges, data validation, and charting.`,
    detail: `Commerce students already use Excel — but analytics-level Excel is different. The goal is to build dynamic financial models, automate repetitive reports, and create dashboards that update without manual effort. This is exactly where your commerce background accelerates your learning.`,
    example: `Build a sales dashboard with a pivot table that auto-refreshes, slicers for region/product, and conditional formatting that flags underperformers in red.`,
  },
  {
    id: "sql",
    icon: <Database size={20} />,
    label: "SQL",
    color: "#0ea5e9",
    bg: "#e0f2fe",
    title: "SQL for Data Extraction",
    tool: "MySQL / PostgreSQL",
    useCase: "Querying databases, data extraction",
    body: `SQL is the language every analyst uses daily. Every company stores its business data in relational databases — customer records, sales transactions, product inventory, financial ledgers — and SQL is how you get that data out.`,
    detail: `For commerce students, SQL is exceptionally intuitive because it mirrors accounting logic: you are joining tables (like combining two ledgers), filtering records (like applying criteria to a balance sheet), and aggregating data (like producing a P&L summary). Most working analysts learn SQL in 4–6 weeks with focused effort.`,
    example: `Write a query to find the top 10 customers by total purchase value in the last 90 days, broken down by product category.`,
  },
  {
    id: "python",
    icon: <Layers size={20} />,
    label: "Python for Data",
    color: "#8b5cf6",
    bg: "#ede9fe",
    title: "Python for Data Analysis",
    tool: "Pandas, NumPy",
    useCase: "Data cleaning, analysis, automation",
    body: `Python is the most widely used language in data analytics. With Pandas and NumPy, you can clean messy datasets, merge multiple data sources, calculate statistics, and automate repetitive tasks — all in code that runs in seconds.`,
    detail: `You do not need to become a software engineer. Analytics Python is a narrow, practical skill set focused on reading files, reshaping data, computing aggregates, and producing outputs. Commerce students who understand data context often learn this faster than engineering students because they know what the numbers should look like.`,
    example: `Load a CSV of 50,000 customer transactions, remove duplicates, calculate monthly revenue per segment, and export a clean summary to Excel.`,
  },
  {
    id: "powerbi",
    icon: <PieChart size={20} />,
    label: "Power BI / Tableau",
    color: "#f59e0b",
    bg: "#fef3c7",
    title: "Data Visualization",
    tool: "Power BI / Tableau",
    useCase: "Interactive reports, business dashboards",
    body: `Dashboards are how analytics insights reach decision-makers. Power BI and Tableau are the two dominant platforms in Indian and global companies for building interactive, live-updating business dashboards.`,
    detail: `The ability to take a business question — "Where are we losing margin?" — and build a visual answer that a CFO can navigate without training is one of the highest-value skills in analytics. Commerce graduates understand what CFOs and business heads actually need, which gives them an edge in designing meaningful dashboards.`,
    example: `Build a financial performance dashboard in Power BI showing revenue vs. target, expense trends, and gross margin by product line — filterable by month and region.`,
  },
  {
    id: "stats",
    icon: <LineChart size={20} />,
    label: "Statistics",
    color: "#ef4444",
    bg: "#fee2e2",
    title: "Applied Statistics",
    tool: "Applied statistics",
    useCase: "Interpreting data, trend analysis",
    body: `You do not need advanced mathematics. Applied statistics for analysts covers: mean/median/mode, standard deviation, correlation, basic regression, and hypothesis testing. These tools let you separate real patterns from noise.`,
    detail: `Commerce students often have a stronger foundation here than they realize. Concepts like variance in budgeting, trend lines in financial forecasting, and probability in risk assessment are directly connected to statistical thinking. The bridge from accounting logic to statistical logic is shorter than you expect.`,
    example: `Calculate the correlation between marketing spend and monthly sales over 24 months, and test whether the relationship is statistically significant at a 95% confidence level.`,
  },
  {
    id: "portfolio",
    icon: <FileText size={20} />,
    label: "Project Portfolio",
    color: "#6366f1",
    bg: "#e0e7ff",
    title: "Real-World Project Portfolio",
    tool: "GitHub / Notion",
    useCase: "Demonstrating real skills to recruiters",
    body: `In data analytics hiring, a portfolio of real projects matters more than a stack of certificates. Recruiters expect to see evidence that you can apply skills to actual business problems — not just that you completed a course.`,
    detail: `A strong commerce-background portfolio includes: a sales dashboard (Excel/Power BI), a customer segmentation analysis (SQL + Python), a financial report with trend analysis, and at least one end-to-end project that goes from raw data to business recommendation. Each project should include a short write-up explaining the business question it answers.`,
    example: `A 3-project portfolio covering: (1) a retail sales dashboard in Power BI, (2) a churn analysis using SQL and Python, and (3) a financial KPI report with automated Excel — hosted on GitHub with explanations.`,
  },
];

const ROLES_DATA = [
  {
    icon: <Search size={22} />,
    color: "#059669",
    bg: "#d1fae5",
    border: "border-blue-200",
    title: "Data Analyst",
    tools: "SQL, Python, Power BI",
    desc: "Queries databases, builds dashboards, and translates data patterns into business recommendations. The most common entry-level analytics role — high demand across all industries.",
    industries: ["Banking", "E-commerce", "Consulting", "FinTech"],
    salary: "₹3.5 – 7 LPA",
  },
  {
    icon: <Briefcase size={22} />,
    color: "#0ea5e9",
    bg: "#e0f2fe",
    border: "border-blue-200",
    title: "Business Analyst",
    tools: "Requirements, process, dashboards",
    desc: "Bridges the gap between business teams and data/technology. Specializes in understanding business needs, documenting processes, and using data to support decision-making.",
    industries: ["Consulting", "IT Services", "BFSI", "Healthcare"],
    salary: "₹4 – 9 LPA",
  },
  {
    icon: <Banknote size={22} />,
    color: "#8b5cf6",
    bg: "#ede9fe",
    border: "border-violet-200",
    title: "Financial Analyst",
    tools: "Excel, modeling, reporting",
    desc: "Uses data to evaluate financial performance, build forecasting models, and support investment and business decisions. Commerce graduates are exceptionally well-suited for this role.",
    industries: ["Investment Banks", "Big 4", "Corporates", "NBFCs"],
    salary: "₹4 – 10 LPA",
  },
  {
    icon: <AlertCircle size={22} />,
    color: "#f59e0b",
    bg: "#fef3c7",
    border: "border-amber-200",
    title: "Risk Analyst",
    tools: "Credit, fraud, market risk",
    desc: "Analyzes data to identify and quantify financial, credit, and operational risk. Banks and insurance companies actively recruit commerce graduates with analytics skills for these roles.",
    industries: ["Banking", "Insurance", "NBFCs", "RBI Regulated"],
    salary: "₹4 – 8 LPA",
  },
  {
    icon: <FileText size={22} />,
    color: "#ef4444",
    bg: "#fee2e2",
    border: "border-red-200",
    title: "MIS / Reporting Analyst",
    tools: "Automated reports, KPI tracking",
    desc: "Builds and maintains management information systems — automated reports, KPI dashboards, and performance tracking frameworks used by leadership.",
    industries: ["All Industries", "Especially BFSI", "Telecom", "Retail"],
    salary: "₹3 – 6 LPA",
  },
];

const MISTAKES_DATA = [
  {
    icon: <Search size={18} />,
    color: "#ef4444",
    title: "Learning from random YouTube videos",
    body: `Fragmented learning from scattered YouTube tutorials creates dangerous knowledge gaps. You learn isolated skills with no logical sequence — which means real business problems, which require combining multiple tools, leave you stuck. Structured curricula ensure you learn how Excel connects to SQL, which connects to Python, in the right order.`,
  },
  {
    icon: <FileText size={18} />,
    color: "#f59e0b",
    title: "Not building real projects",
    body: `Recruiters in analytics roles ask for project portfolios in SQL, Python, or Power BI during screening — not just a list of courses. If you cannot demonstrate what you have built with real (or realistic) business data, even strong theoretical knowledge will not get you shortlisted. Projects prove applied ability in a way that certificates simply cannot.`,
  },
  {
    icon: <Award size={18} />,
    color: "#8b5cf6",
    title: "Collecting certificates instead of skills",
    body: `A wall of online certificates with no hands-on ability is immediately transparent to any experienced interviewer. In the first five minutes of a technical interview, the gap between "certified" and "capable" becomes clear. Certificates indicate exposure, not competence. Competence comes from building things with actual data.`,
  },
  {
    icon: <Target size={18} />,
    color: "#059669",
    title: "Not preparing for the interview format",
    body: `Data analytics roles have specific interview formats — SQL coding tests, case-based analytical questions, and portfolio reviews. Students who skip structured interview preparation frequently fail rounds despite genuinely knowing the tools. The format requires deliberate practice, not just technical knowledge.`,
  },
];

const COURSES = [
  { name: "Data Analytics Course", link: "/courses/data-analytics-course" },
  { name: "Data Science & ML", link: "/courses/data-science-and-ml-course" },
  { name: "Data Analytics & Gen AI", link: "/courses/data-analytics-and-generative-ai-course" },
  { name: "Data Engineering", link: "/courses/data-engineering-course" },
  { name: "AI Product Manager", link: "/courses/ai-product-manager-course" },
  { name: "Data Science (Pay after placement)", link: "/courses/no-upfront-fees-data-science-and-ml-course" },
];

/* ─── sub-components ────────────────────────────────── */

const SkillTab = ({ skill, active, onClick }: {
  skill: typeof SKILLS_DATA[0];
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 w-full text-left"
    style={{
      backgroundColor: active ? skill.color : "transparent",
      color: active ? "#fff" : "#6b7280",
      border: `1.5px solid ${active ? skill.color : "#e5e7eb"}`,
    }}
  >
    <span
      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: active ? "rgba(255,255,255,0.2)" : skill.bg, color: skill.color }}
    >
      {skill.icon}
    </span>
    {skill.label}
  </button>
);

const MistakeCard = ({ item, index }: { item: typeof MISTAKES_DATA[0]; index: number }) => {
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

export default function DataScienceForCommerceStudentsPage() {
  const [activeSkill, setActiveSkill] = useState(0);
  const active = SKILLS_DATA[activeSkill];

  const [activeSection, setActiveSection] = useState("myth");
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
          style={{ width: `${scrollProgress}%`, background: "linear-gradient(90deg, #059669, #f7af34)" }}
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
          <span className="text-gray-800 font-medium">Data Science for Commerce Students</span>
        </div>
      </div>

      {/* ── Hero ────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${ACCENT}, #013a81)` }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* left text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wider mb-5"
              style={{ borderColor: "#a7f3d0", backgroundColor: "#ecfdf5", color: ACCENT_DARK }}>
              <BookMarked size={12} style={{ color: ACCENT }} />
              Career Insights · Data Science · Analytics
            </div>

            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4"
              style={{ backgroundColor: "#fef3c7", color: "#92400e" }}>
              Career Guide 2025
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
              Is{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${ACCENT}, #013a81)` }}>
                Data Science
              </span>{" "}
              a Good Career for Commerce Students?
            </h1>

            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-7">
              A step-by-step practical roadmap from BCom to Business Analyst, Data Analyst, and beyond.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Image src={ivy} alt="Ivy Pro School" width={16} height={16} className="rounded-full" />
                Ivy Pro School
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Clock size={11} />
                9 min read
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <BookOpen size={11} />
                Skills · Roadmap · Salary
              </div>
            </div>
          </div>

          {/* right — career path visual */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              <div className="px-4 py-2.5 flex items-center gap-2" style={{ backgroundColor: ACCENT_DARK }}>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: ACCENT }} />
                </div>
                <span className="text-white text-xs font-semibold ml-2">BCom → Analytics Career Path</span>
              </div>
              <div className="p-5">
                {[
                  { step: "BCom / B.Com (H)", tag: "Your Starting Point", color: "#6b7280", bg: "#f3f4f6" },
                  { step: "Excel + Statistics", tag: "Foundation (Month 1–2)", color: ACCENT, bg: "#d1fae5" },
                  { step: "SQL + Python Basics", tag: "Core Skills (Month 2–4)", color: "#0ea5e9", bg: "#e0f2fe" },
                  { step: "Power BI + Projects", tag: "Applied Work (Month 4–6)", color: "#8b5cf6", bg: "#ede9fe" },
                  { step: "Data / Business Analyst", tag: "Job Ready", color: "#f59e0b", bg: "#fef3c7" },
                ].map((row, i, arr) => (
                  <div key={i} className="relative flex items-center gap-3 mb-2">
                    {i < arr.length - 1 && (
                      <div className="absolute left-4 top-8 w-0.5 h-5 bg-gray-200" />
                    )}
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 z-10"
                      style={{ backgroundColor: row.bg, color: row.color, border: `2px solid ${row.color}` }}>
                      {i + 1}
                    </div>
                    <div className="flex-1 rounded-xl border px-3 py-2" style={{ borderColor: row.color + "40", backgroundColor: row.bg + "80" }}>
                      <div className="text-xs font-bold" style={{ color: row.color }}>{row.step}</div>
                      <div className="text-[10px] text-gray-500">{row.tag}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t px-4 py-3 flex items-center gap-2" style={{ borderColor: ACCENT + "30", backgroundColor: "#ecfdf5" }}>
                <CheckCircle2 size={14} style={{ color: ACCENT }} />
                <p className="text-[10px] font-semibold" style={{ color: ACCENT_DARK }}>
                  2,000+ commerce graduates placed in analytics roles via this exact roadmap
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100" />
      </div>

      {/* ── Authority Strip ──────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-0">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 rounded-xl px-4 sm:px-5 py-3"
          style={{ background: "linear-gradient(90deg, #ecfdf5, #eff6ff)", border: "1px solid #a7f3d0" }}>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 flex-shrink-0" style={{ color: ACCENT }} />
            <span className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT_DARK }}>
              Published by practitioners who&apos;ve helped 2,000+ commerce graduates transition into analytics roles
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Image src={PrateekAgarwal} alt="Prateek Agarwal" width={28} height={28} className="rounded-full object-cover flex-shrink-0 border-2 border-blue-200" />
            <span className="text-xs font-semibold text-gray-900">Prateek Agarwal</span>
            <span className="text-xs text-gray-500">· 20+ yrs AI/ML Leader</span>
            <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-600 hover:text-blue-800">
              <LinkedInSVG className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Main grid ───────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-4">

          {/* ── LEFT: article ──────────────────────── */}
          <article className="lg:col-span-3 space-y-6">

            {/* Table of Contents */}
            <div className="rounded-2xl bg-white border shadow-sm overflow-hidden" style={{ borderColor: "#a7f3d0" }}>
              <div className="px-5 py-3 flex items-center gap-2" style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }}>
                <BookOpen size={14} className="text-white" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">In This Article</span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-1">
                {ROADMAP_SECTIONS.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50 transition-colors text-left w-full"
                  >
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 group-hover:text-white transition-colors"
                      style={{ backgroundColor: "#d1fae5", color: ACCENT }}>
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-600 group-hover:text-[#013a81] transition-colors font-medium">{item.title}</span>
                    <ArrowRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: ACCENT }} />
                  </button>
                ))}
              </div>
            </div>

            {/* ── YouTube Video ───────────────────── */}
            <AutoPlayYouTube
              id="ssyfni0SR7Q"
              title="Data Science for Commerce Students"
              className="rounded-2xl overflow-hidden shadow-sm"
            />

            {/* ── 01 MYTH ─────────────────────────── */}
            <section id="myth" className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${ACCENT}, #013a81)` }} />
              <div className="p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT_DARK }}>
                  <span>01</span> Myth vs. Reality
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  The Biggest Myth About Data Science
                </h2>
                <p className="text-base sm:text-lg border-l-4 pl-4 italic text-gray-700 mb-6"
                  style={{ borderColor: ACCENT }}>
                  &ldquo;Many commerce students believe that Data Science is only for engineers or programmers. This assumption stops capable students from exploring one of the fastest-growing career fields today.&rdquo;
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  In reality, Data Science is not only about coding — it is about understanding business problems, working with numbers, and making decisions using data. Commerce students already have a strong foundation in business, finance, and analysis, which makes them well-suited for analytics and data-science roles.
                </p>

                <div className="rounded-2xl border p-5 mb-6" style={{ backgroundColor: "#f0fdf4", borderColor: "#a7f3d0" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase size={14} style={{ color: ACCENT }} />
                    <span className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT_DARK }}>Industry Example</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Banks like HDFC, ICICI, and Axis use analytics teams to study customer spending patterns and loan risk — roles filled by professionals with business, not engineering, backgrounds.
                  </p>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-4">Three Misconceptions That Hold Commerce Students Back</h3>
                <div className="space-y-3">
                  {[
                    "Data Science requires hardcore programming skills",
                    "Only B.Tech or IT graduates can enter this field",
                    "A commerce background is simply not suitable",
                  ].map((myth, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3">
                      <XCircle size={16} className="text-red-500 flex-shrink-0" />
                      <span className="text-sm text-red-700 font-medium">{myth}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-xl border p-4" style={{ backgroundColor: "#ecfdf5", borderColor: "#6ee7b7" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={14} style={{ color: ACCENT }} />
                    <span className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT_DARK }}>Real-World Reality</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    A Business Analyst at a consulting company may spend more time in Excel and dashboards than in Python or R. Domain expertise often outweighs raw coding ability — and commerce graduates have domain expertise in abundance.
                  </p>
                </div>
              </div>
            </section>

            {/* ── 02 ADVANTAGE ────────────────────── */}
            <section id="advantage" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>
                <span>02</span> Your Head Start
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Why Commerce Students Have a Strong Advantage
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-7 max-w-2xl">
                Commerce graduates already possess knowledge that analysts use every single day. These are not just academic concepts — they are the foundation of business analytics.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {[
                  { icon: "📊", title: "P&L Analysis", desc: "Understanding profit, loss, and margins — core to financial analytics.", color: ACCENT, bg: ACCENT_LIGHT },
                  { icon: "📋", title: "Balance Sheets", desc: "Reading financial statements, a skill most engineers lack.", color: "#0ea5e9", bg: "#e0f2fe" },
                  { icon: "💹", title: "Costing & Planning", desc: "Cost-benefit thinking used daily in budgeting models.", color: "#8b5cf6", bg: "#ede9fe" },
                  { icon: "📈", title: "Market Behaviour", desc: "Economics foundations that power demand forecasting.", color: "#f59e0b", bg: "#fef3c7" },
                  { icon: "🧮", title: "Business Decisions", desc: "Understanding what metrics actually matter to leadership.", color: "#ef4444", bg: "#fee2e2" },
                  { icon: "🏦", title: "Finance Fluency", desc: "The language of money — instantly valuable in banking and BFSI analytics.", color: "#6366f1", bg: "#e0e7ff" },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border p-4 flex flex-col gap-2 hover:shadow-md transition-shadow"
                    style={{ borderColor: item.color + "30", backgroundColor: item.bg + "60" }}>
                    <span className="text-2xl">{item.icon}</span>
                    <div className="text-sm font-bold" style={{ color: item.color }}>{item.title}</div>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border p-5" style={{ backgroundColor: "#f0fdf4", borderColor: "#6ee7b7" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={14} style={{ color: ACCENT }} />
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT_DARK }}>Where These Skills Are Used</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Financial Analysts at Deloitte, KPMG, EY, HSBC, and ICRA Analytics use these exact concepts to evaluate profitability, assess risk, and present data-driven recommendations.
                </p>
              </div>
            </section>

            {/* ── 03 SKILLS (tab switcher) ─────────── */}
            <section id="skills" className="rounded-2xl overflow-hidden border p-6 sm:p-8"
              style={{ background: "linear-gradient(135deg, #f8fafc, #ecfdf5)", borderColor: "#a7f3d0" }}>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ borderColor: "#6ee7b7", backgroundColor: "#ecfdf5", color: ACCENT_DARK }}>
                  <Lightbulb size={12} /> <span>03</span> Skills Roadmap
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  What Skills Are Actually Required for Data Science?
                </h2>
                <p className="text-gray-500 text-sm sm:text-base max-w-xl">
                  You need practical, stackable skills learned in the right sequence. Select each skill below to explore.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-1 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                  {SKILLS_DATA.map((sk, i) => (
                    <SkillTab key={sk.id} skill={sk} active={activeSkill === i} onClick={() => setActiveSkill(i)} />
                  ))}
                </div>
                <div className="lg:col-span-2">
                  <div className="rounded-2xl bg-white border shadow-md p-5 sm:p-7 h-full transition-all duration-200"
                    style={{ borderColor: active.color }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: active.bg, color: active.color }}>
                        {active.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{active.title}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                            style={{ backgroundColor: active.bg, color: active.color }}>
                            Tool: {active.tool}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">{active.body}</p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">{active.detail}</p>
                    <div className="rounded-xl px-4 py-3.5" style={{ backgroundColor: active.bg }}>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: active.color }}>
                        Sample Project / Task
                      </p>
                      <p className="text-sm italic leading-relaxed" style={{ color: active.color }}>
                        &ldquo;{active.example}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 p-4 rounded-2xl border" style={{ backgroundColor: "#fffbeb", borderColor: "#fde68a" }}>
                <div className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0">📌</span>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    The critical point is that these skills must be applied <strong>together</strong>, not learned in isolation. Structured learning ensures you build genuine, job-ready competence. When evaluating any analytics program, check whether it teaches these tools through real business datasets — most hiring managers can spot the difference within the first five minutes of an interview.
                  </p>
                </div>
              </div>
            </section>

            {/* ── 04 ROLES ────────────────────────── */}
            <section id="roles" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#fef3c7", color: "#92400e" }}>
                <span>04</span> Career Paths
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Career Roles Suitable for Commerce Students
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-7 max-w-2xl">
                These are not entry-level dead ends — they are careers with strong progression paths across multiple industries.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ROLES_DATA.map((role, i) => (
                  <div key={i} className={`rounded-2xl border ${role.border} p-5 flex flex-col gap-3 hover:shadow-md transition-shadow`}
                    style={{ backgroundColor: role.bg + "50" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: role.bg, color: role.color }}>
                        {role.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-900">{role.title}</h3>
                        <span className="text-[10px] font-semibold" style={{ color: role.color }}>{role.tools}</span>
                      </div>
                      <div className="ml-auto text-right">
                        <div className="text-xs font-bold px-2 py-1 rounded-full"
                          style={{ backgroundColor: role.bg, color: role.color }}>
                          {role.salary}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{role.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {role.industries.map((ind, j) => (
                        <span key={j} className="text-[10px] px-2 py-0.5 rounded-full bg-white border font-medium text-gray-600">
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl border p-4" style={{ backgroundColor: "#ecfdf5", borderColor: "#6ee7b7" }}>
                <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: ACCENT_DARK }}>Industries Actively Hiring</p>
                <div className="flex flex-wrap gap-2">
                  {["Banking (HDFC, SBI, ICICI)", "Consulting (Accenture, Deloitte)", "E-commerce (Amazon, Flipkart)", "FinTech (Paytm, Razorpay)", "Insurance", "Healthcare"].map((ind, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full font-semibold text-white"
                      style={{ backgroundColor: ACCENT }}>
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 05 MARKET (dark) ────────────────── */}
            <section id="market" className="rounded-2xl overflow-hidden border p-6 sm:p-8 text-white"
              style={{ background: "linear-gradient(135deg, #0f172a, #065f46)", borderColor: ACCENT_DARK }}>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/70 mb-4">
                  <TrendingUp size={12} style={{ color: "#6ee7b7" }} /> <span>05</span> Market Shift
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Why the Job Market Is Changing Fast
                </h2>
                <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto">
                  Companies today prefer professionals who can analyse data — not just perform manual accounting or clerical work.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
                {[
                  { title: "Automating routine tasks", desc: "Routine accounting tasks are being automated by software. Manual data entry roles are shrinking rapidly." },
                  {  title: "Dashboards over spreadsheets", desc: "Static Excel sheets are being replaced by live, interactive dashboards that update in real time." },
                  {  title: "Data-driven decisions", desc: "Strategic decisions are increasingly made based on data models, not intuition or experience alone." },
                  {  title: "Analytics roles at every level", desc: "Organizations are hiring analytics professionals at every seniority level — from junior analysts to Chief Data Officers." },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
                    {/* <div className="text-2xl mb-2">{item.icon}</div> */}
                    <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4 text-center">
                <p className="text-white/80 text-sm sm:text-base">
                  <strong className="text-white">The structural shift:</strong> Analytics skills are becoming significantly more valuable than traditional clerical skills — and the demand shows no signs of slowing down.
                </p>
              </div>
            </section>

            {/* ── 06 SALARY ───────────────────────── */}
            <section id="salary" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#d1fae5", color: ACCENT_DARK }}>
                <DollarSign size={12} /> <span>06</span> Compensation
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Salary & Growth Potential
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-2xl">
                Data and analytics careers offer strong, consistent salary growth in India. Here is a typical career progression:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
                {[
                  { level: "Entry Level", exp: "0–1 yr", range: "₹3 – 6 LPA", pct: 40, color: ACCENT, bg: ACCENT_LIGHT },
                  { level: "Mid Level", exp: "2–3 yrs", range: "₹6 – 12 LPA", pct: 70, color: "#0ea5e9", bg: "#e0f2fe" },
                  { level: "Senior / Lead", exp: "5+ yrs", range: "₹15 LPA+", pct: 100, color: "#8b5cf6", bg: "#ede9fe" },
                ].map((tier, i) => (
                  <div key={i} className="rounded-2xl border p-5 text-center flex flex-col gap-3"
                    style={{ borderColor: tier.color + "40", backgroundColor: tier.bg + "50" }}>
                    <div className="text-2xl sm:text-3xl font-black" style={{ color: tier.color }}>{tier.range}</div>
                    <div className="text-sm font-bold text-gray-800">{tier.level}</div>
                    <div className="text-xs text-gray-500">{tier.exp}</div>
                    <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${tier.pct}%`, backgroundColor: tier.color }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border p-5" style={{ backgroundColor: "#f0fdf4", borderColor: "#6ee7b7" }}>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={14} style={{ color: ACCENT }} />
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT_DARK }}>Salary Benchmark</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  A Data Analyst with 3 years of hands-on experience frequently earns more than a fresher accountant with an MBA, given the current demand-supply gap in analytics talent. Growth depends on skill depth, portfolio quality, and practical experience — not just years of experience.
                </p>
              </div>
            </section>

            {/* ── 07 MISTAKES (accordion) ─────────── */}
            <section id="mistakes" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#fee2e2", color: "#991b1b" }}>
                <AlertCircle size={12} /> <span>07</span> Pitfalls
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Common Mistakes Students Make (And How to Avoid Them)
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-7 max-w-2xl">
                Many students fail to make a successful transition despite genuine effort. The root causes are almost always the same. Click each to read more.
              </p>
              <div className="space-y-3">
                {MISTAKES_DATA.map((item, i) => (
                  <MistakeCard key={i} item={item} index={i} />
                ))}
              </div>
              <div className="mt-6 rounded-2xl border p-5" style={{ backgroundColor: "#fffbeb", borderColor: "#fde68a" }}>
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">💡</span>
                  <p className="text-sm text-amber-900 leading-relaxed">
                    From our intake surveys at Ivy Professional School, <strong>over 70% of students who came to us had already tried self-learning for 4–6 months — and stalled at exactly these four points.</strong> Structure, accountability, and real project feedback were the missing pieces, not intelligence or effort.
                  </p>
                </div>
              </div>
            </section>

            {/* ── 08 ROADMAP ──────────────────────── */}
            <section id="roadmap" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#ede9fe", color: "#5b21b6" }}>
                <BookMarked size={12} /> <span>08</span> Action Plan
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                The Right Roadmap to Move Into Data Science
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-2xl">
                A proper transition follows a proven sequence. Here is what a structured path looks like — from zero to job-ready.
              </p>
              <div className="relative">
                <div className="absolute left-6 top-8 bottom-8 w-0.5 hidden sm:block"
                  style={{ background: `linear-gradient(to bottom, ${ACCENT}, #6366f1)` }} />
                <div className="space-y-4">
                  {[
                    {
                      step: 1, color: ACCENT, bg: ACCENT_LIGHT,
                      title: "Master the Foundations",
                      desc: "Advanced Excel, basic statistics, and business logic — the non-negotiables before writing a single line of SQL or Python. Commerce students often clear this stage faster than engineering students.",
                    },
                    {
                      step: 2, color: "#0ea5e9", bg: "#e0f2fe",
                      title: "Learn SQL & Python for Data",
                      desc: "Query real datasets. Use Pandas and NumPy for cleaning and analysis. Focus on application, not just syntax. Complete at least 5 hands-on exercises with real business data.",
                    },
                    {
                      step: 3, color: "#8b5cf6", bg: "#ede9fe",
                      title: "Build Dashboards & Visualisations",
                      desc: "Create portfolio-ready dashboards in Power BI and Tableau using realistic business datasets — sales, finance, HR. Learn to tell a story with data, not just display it.",
                    },
                    {
                      step: 4, color: "#f59e0b", bg: "#fef3c7",
                      title: "Complete Real-World Projects",
                      desc: "Work on projects like sales dashboards, customer analysis, financial report automation, and market trend analysis — mirroring actual industry tasks that hiring managers expect to see.",
                    },
                    {
                      step: 5, color: "#ef4444", bg: "#fee2e2",
                      title: "Interview Preparation & Mentorship",
                      desc: "Practice case-based questions, mock interviews, and resume building with guidance from industry professionals. Understand the specific format of analytics interviews — SQL tests, case studies, portfolio reviews.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 items-start pl-0 sm:pl-3">
                      <div className="w-9 h-9 rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0 z-10 shadow-md"
                        style={{ backgroundColor: item.color }}>
                        {item.step}
                      </div>
                      <div className="flex-1 rounded-2xl border p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
                        style={{ borderColor: "#e5e7eb", backgroundColor: item.bg + "30" }}>
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1" style={{ color: item.color }}>
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-8 rounded-2xl border p-6" style={{ backgroundColor: "#f0fdf4", borderColor: "#6ee7b7" }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})` }}>
                    P
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 italic leading-relaxed mb-3">
                      &ldquo;I had a BCom degree and zero coding background. Within eight months of following a structured program, I was placed as a Data Analyst at a mid-sized fintech firm in Bengaluru. The key was working on real datasets from week one — not toy examples.&rdquo;
                    </p>
                    <div className="text-xs font-bold text-gray-800">— Priya S.</div>
                    <div className="text-xs text-gray-500">BCom Graduate · now Data Analyst, FinTech · Ivy Professional School alumni</div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── 09 CONCLUSION ───────────────────── */}
            <section id="conclusion" className="rounded-2xl p-6 sm:p-8 text-white"
              style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})` }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                <BookOpen size={12} /> <span>09</span> Final Guidance
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Final Guidance for Commerce Students
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                Data Science can be an excellent career choice for commerce graduates — but the learning path must be correct. Success depends on five factors working together:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-7">
                {[
                  {  title: "Right Skills", desc: "Excel, SQL, Python, Power BI" },
                  { title: "Right Order", desc: "Structured, progressive learning" },
                  { title: "Real Practice", desc: "Projects with actual business data" },
                  {  title: "Interview Prep", desc: "Case studies and mock rounds" },
                  {  title: "Mentorship", desc: "Industry-led, practitioner guidance" },
                  { title: "Portfolio", desc: "Evidence of applied skill for recruiters" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 flex items-center gap-3 hover:bg-white/20 transition-colors">
                    <div>
                      <div className="text-xs font-bold text-white">{item.title}</div>
                      <div className="text-[10px] text-white/60">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4 mb-7">
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  Programs like the one at Ivy Professional School are specifically designed around this gap — built for beginners from non-technical backgrounds, with a curriculum that mirrors what analysts actually do in their first year on the job, not what looks impressive in a course syllabus.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5" style={{ borderColor: "#a7f3d0" }}>
                <h3 className="text-base font-bold mb-2" style={{ color: ACCENT_DARK }}>Ready to Start Your Analytics Career?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Speak with the career counselling team at Ivy Professional School to understand the right roadmap for your background before you begin.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://ivyproschool.com/bootcampregister"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl text-white font-bold text-sm px-5 py-2.5 hover:opacity-90 transition-opacity shadow-sm"
                    style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }}
                  >
                    Book a Free Counselling Session <ArrowUpRight size={14} />
                  </a>
                  <Link
                    href="/courses/data-analytics-course"
                    className="inline-flex items-center gap-2 rounded-xl border font-bold text-sm px-5 py-2.5 hover:opacity-80 transition-colors"
                    style={{ color: ACCENT, borderColor: ACCENT }}
                  >
                    View Data Analytics Course <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </section>

            {/* ── Back links ─────────────────────── */}
            <div className="flex flex-wrap gap-3 pb-4">
              <Link href="/aihelpcenter/career" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-[#009fda] hover:text-[#013a81] transition-all shadow-sm">
                ← Back to Career Insights
              </Link>
              <Link href="/aihelpcenter" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-[#009fda] hover:text-[#013a81] transition-all shadow-sm">
                ← All Topics
              </Link>
            </div>

          </article>

          {/* ── RIGHT: sticky sidebar ──────────────── */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* Roadmap nav */}
              <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-gray-200">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 sm:mb-6">In This Article</h4>
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
              <div className="p-4 sm:p-5 rounded-2xl shadow-lg border" style={{ background: "linear-gradient(135deg, #ecfdf5, #eff6ff)", borderColor: "#a7f3d0" }}>
                <div className="text-center mb-4">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg flex items-center justify-center gap-2">
                    <ShieldCheck className="h-5 w-5" style={{ color: ACCENT }} />
                    Industry Authority
                  </h3>
                  <p className="text-gray-600 text-xs mt-1">Authored by Ivy Pro School founders & practitioners</p>
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
                      <GraduationCap className="h-4 w-4" style={{ color: ACCENT }} />
                      <span>16+ Years Each</span>
                    </div>
                  </div>
                  <p className="text-xs text-center text-gray-500 mt-3 italic">All content reviewed by Ivy&apos;s expert faculty team</p>
                </div>
              </div>

              {/* Courses */}
              <div className="p-4 sm:p-5 rounded-3xl shadow-2xl text-white"
                style={{ background: `linear-gradient(135deg, ${ACCENT}, #013a81)` }}>
                <div className="text-center mb-5">
                  <h3 className="font-extrabold text-lg sm:text-xl leading-tight">Advanced Courses</h3>
                  <p className="text-blue-100 text-[11px] opacity-70 mt-1">Fast-track your analytics career with Ivy.</p>
                </div>
                <div className="flex flex-col gap-2">
                  {COURSES.map((course, i) => (
                    <a
                      key={i}
                      href={course.link}
                      className="flex items-center justify-between rounded-xl bg-white/10 border border-white/20 px-3 py-2.5 hover:bg-white/20 transition-colors group"
                    >
                      <span className="text-xs font-semibold text-white/80 group-hover:text-white">{course.name}</span>
                      <ArrowUpRight size={13} className="text-white/40 group-hover:text-white flex-shrink-0" />
                    </a>
                  ))}
                </div>
                <div className="mt-5">
                  <a
                    href="https://ivyproschool.com/bootcampregister"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center rounded-xl bg-white font-bold text-sm py-3 hover:bg-blue-50 transition-colors"
                    style={{ color: ACCENT_DARK }}
                  >
                    Free Counselling Session →
                  </a>
                </div>
              </div>

              {/* Quick facts */}
              <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-5">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Quick Facts</h4>
                <div className="space-y-3">
                  {[
                    { label: "Read time", value: "~9 minutes" },
                    { label: "Experience required", value: "None" },
                    { label: "Background", value: "BCom / Commerce" },
                    { label: "Roles covered", value: "5 career paths" },
                    { label: "Alumni placed", value: "2,000+" },
                  ].map((fact, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{fact.label}</span>
                      <span className="text-xs font-bold text-gray-800 text-right">{fact.value}</span>
                    </div>
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
