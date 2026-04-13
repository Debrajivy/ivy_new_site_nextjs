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
  Target,
  Star,
  ChevronDown,
  ArrowUpRight,
  ShieldCheck,
  Briefcase,
  Brain,
  BarChart3,
  Database,
  Cpu,
  TrendingUp,
  MapPin,
  Users,
  Award,
  BookMarked,
  Zap,
  Globe,
  FileText,
  Building2,
  DollarSign,
  Layers,
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

/* ─── constants ────────────────────────────────────── */

const ACCENT = "#009fda";
const ACCENT_DARK = "#013a81";

const ROADMAP_SECTIONS = [
  { id: "kolkata-hub",    title: "Kolkata as an AI Hub" },
  { id: "why-now",        title: "Why Data Science & AI — Now?" },
  { id: "career-roles",   title: "Top Career Roles" },
  { id: "salary-guide",   title: "Salary Guide 2026" },
  { id: "skills",         title: "Skills You Need" },
  { id: "employers",      title: "Top Employers in Kolkata" },
  { id: "why-ivy",        title: "Why Ivy Professional School" },
  { id: "programs",       title: "Ivy's Programs" },
  { id: "success-stories","title": "Success Stories" },
  { id: "get-started",    title: "Your Roadmap" },
  { id: "faq",            title: "FAQs" },
];

const KOLKATA_STATS = [
  { value: "3,200+", label: "IT Companies in Kolkata",    icon: <Building2 size={20} />, color: "#009fda", bg: "#e0f2fe" },
  { value: "₹12,000 Cr", label: "Annual IT Revenue (2024)", icon: <DollarSign size={20} />, color: "#8b5cf6", bg: "#ede9fe" },
  { value: "5 Lakh+", label: "IT Professionals Employed",  icon: <Users size={20} />,   color: "#f59e0b", bg: "#fef3c7" },
  { value: "28%",    label: "YoY Growth in AI/Data Roles", icon: <TrendingUp size={20} />, color: "#ef4444", bg: "#fee2e2" },
];

const ROLES_DATA = [
  {
    emoji: "🔬",
    icon: <Brain size={22} />,
    color: "#009fda",
    bg: "#dbeafe",
    title: "Data Scientist",
    salary: "₹8 – 35 LPA",
    growth: "↑ 38%",
    link: "https://ivyproschool.com/courses/data-science-and-ml-course",
    desc: "Builds predictive models, runs statistical analyses, and turns raw data into strategic insights. Often the most sought-after role in Kolkata's analytics-driven companies. Requires strong Python, statistics, and machine learning skills.",
  },
  {
    emoji: "🤖",
    icon: <Cpu size={22} />,
    color: "#8b5cf6",
    bg: "#ede9fe",
    title: "Machine Learning Engineer",
    salary: "₹10 – 40 LPA",
    growth: "↑ 42%",
    link: "https://ivyproschool.com/courses/data-science-and-ml-course",
    desc: "Designs, develops, and deploys ML models into production systems. Bridges the gap between data science research and real-world software. Highly valued in Kolkata's product companies and MNCs.",
  },
  {
    emoji: "📊",
    icon: <BarChart3 size={22} />,
    color: "#f59e0b",
    bg: "#fef3c7",
    title: "Data Analyst",
    salary: "₹4 – 18 LPA",
    growth: "↑ 31%",
    link: "https://ivyproschool.com/courses/data-analytics-course",
    desc: "Analyzes datasets to uncover trends, builds dashboards, and generates business reports. An ideal entry point into the data career path. SQL, Excel, Power BI, and Tableau are key tools.",
  },
  {
    emoji: "🧠",
    icon: <Brain size={22} />,
    color: "#ef4444",
    bg: "#fee2e2",
    title: "AI Engineer",
    salary: "₹12 – 45 LPA",
    growth: "↑ 50%",
    link: "https://ivyproschool.com/courses/iit-generative-ai-course",
    desc: "Works on cutting-edge AI systems including Natural Language Processing, computer vision, and generative AI. The fastest-growing and highest-paid role category in Kolkata's 2026 job market.",
  },
  {
    emoji: "📈",
    icon: <TrendingUp size={22} />,
    color: "#6366f1",
    bg: "#e0e7ff",
    title: "Business Intelligence Developer",
    salary: "₹6 – 22 LPA",
    growth: "↑ 27%",
    link: "https://ivyproschool.com/courses/data-analytics-and-generative-ai-course",
    desc: "Designs and maintains BI systems, data warehouses, and interactive dashboards. Power BI, Tableau, and SQL expertise are essential. Perfect for those with a business + tech background.",
  },
  {
    emoji: "⚙️",
    icon: <Database size={22} />,
    color: "#0ea5e9",
    bg: "#e0f2fe",
    title: "Data Engineer",
    salary: "₹8 – 30 LPA",
    growth: "↑ 35%",
    link: "https://ivyproschool.com/courses/data-engineering-course",
    desc: "Builds and maintains data pipelines, data lakes, and ETL processes that power data teams. Strong demand from Kolkata's fintech, healthcare, and e-commerce companies. Requires Python, Spark, SQL, and cloud skills.",
  },
];

const SALARY_ROWS = [
  { role: "Data Scientist",          entry: "₹5 – 8 LPA",   mid: "₹12 – 22 LPA", senior: "₹28 – 60 LPA", growth: "38%", color: "#009fda" },
  { role: "ML Engineer",             entry: "₹6 – 10 LPA",  mid: "₹14 – 25 LPA", senior: "₹30 – 60 LPA", growth: "42%", color: "#8b5cf6" },
  { role: "Data Analyst",            entry: "₹3.5 – 6 LPA", mid: "₹8 – 15 LPA",  senior: "₹16 – 28 LPA", growth: "31%", color: "#f59e0b" },
  { role: "AI Engineer",             entry: "₹7 – 12 LPA",  mid: "₹16 – 28 LPA", senior: "₹35 – 70 LPA", growth: "50%", color: "#ef4444" },
  { role: "BI Developer",            entry: "₹4 – 7 LPA",   mid: "₹9 – 16 LPA",  senior: "₹18 – 30 LPA", growth: "27%", color: "#6366f1" },
  { role: "Data Engineer",           entry: "₹5 – 9 LPA",   mid: "₹12 – 22 LPA", senior: "₹25 – 45 LPA", growth: "35%", color: "#0ea5e9" },
];

const TECH_SKILLS = [
  { label: "Python Programming",          color: "#009fda", bg: "#dbeafe" },
  { label: "SQL & Databases",             color: "#8b5cf6", bg: "#ede9fe" },
  { label: "Machine Learning",            color: "#f59e0b", bg: "#fef3c7" },
  { label: "Deep Learning / TensorFlow",  color: "#ef4444", bg: "#fee2e2" },
  { label: "Data Visualization",          color: "#6366f1", bg: "#e0e7ff" },
  { label: "Power BI / Tableau",          color: "#0ea5e9", bg: "#e0f2fe" },
  { label: "Statistics & Probability",    color: "#d97706", bg: "#fef3c7" },
  { label: "Natural Language Processing", color: "#7c3aed", bg: "#ede9fe" },
  { label: "Cloud Platforms (AWS/GCP)",   color: "#0284c7", bg: "#e0f2fe" },
  { label: "Big Data (Spark/Hadoop)",     color: "#b45309", bg: "#fef3c7" },
  { label: "Generative AI / LLMs",        color: "#dc2626", bg: "#fee2e2" },
  { label: "Feature Engineering",         color: "#4f46e5", bg: "#e0e7ff" },
];

const SOFT_SKILLS = [
  { title: "Data Storytelling",         desc: "Communicate complex findings in simple, business-friendly language." },
  { title: "Business Acumen",           desc: "Understanding which data questions actually matter for business outcomes." },
  { title: "Curiosity & Problem-Solving", desc: "A love of digging into problems is essential in exploratory data work." },
  { title: "Attention to Detail",       desc: "Small errors in data pipelines can have enormous downstream consequences." },
  { title: "Collaboration",             desc: "Data teams work closely with PMs, engineers, and business stakeholders." },
];

const EMPLOYERS = [
  { name: "TCS",               desc: "Analytics, ML, AI CoE" },
  { name: "Wipro",             desc: "Data Engineering, BI" },
  { name: "Infosys BPM",       desc: "Advanced Analytics" },
  { name: "Capgemini",         desc: "AI & Data Solutions" },
  { name: "Cognizant",         desc: "Data Science, ML Ops" },
  { name: "IBM India",         desc: "AI Research, Watson" },
  { name: "Accenture",         desc: "AI Consulting, Analytics" },
  { name: "Mphasis",           desc: "AI, Data Science" },
  { name: "ITC Infotech",      desc: "BI, Data Analytics" },
  { name: "Tech Mahindra",     desc: "AI Solutions" },
  { name: "Fintechs & Startups", desc: "Kolkata Ecosystem" },
  { name: "HDFC, Axis, SBI",  desc: "Banking Analytics" },
];

const IVY_HIGHLIGHTS = [
  { value: "93%",    label: "Placement Rate" },
  { value: "₹8.5 LPA", label: "Avg. Starting CTC" },
  { value: "200+",   label: "Hiring Partners" },
  { value: "5,000+", label: "Alumni Placed" },
];

const IVY_FEATURES = [
  "Industry-Aligned Curriculum",
  "Expert Faculty & Mentors",
  "Live Projects & Capstone",
  "100% Placement Support",
  "Flexible EMI Plans",
  "Hybrid & Weekend Batches",
  "4.8★ Student Rating",
  "Kolkata Campus + Online",
];

const PROGRAMS = [
  {
    badge: "⭐ Most Popular",
    badgeColor: "#009fda",
    title: "PG Diploma in Data Science & Artificial Intelligence",
    duration: "12 Months",
    mode: "Hybrid (Weekday & Weekend)",
    forWho: "Fresh graduates & career switchers",
    outcome: "Data Scientist / ML Engineer roles",
    link: "https://ivyproschool.com/courses/data-science-and-ml-course",
    color: "#009fda",
    bg: "#dbeafe",
  },
  {
    badge: "For Working Pros",
    badgeColor: "#8b5cf6",
    title: "Executive Program: Machine Learning & Deep Learning",
    duration: "6 Months",
    mode: "Weekend Batches",
    forWho: "IT professionals & engineers",
    outcome: "ML Engineer / AI Specialist roles",
    link: "https://ivyproschool.com/courses/data-science-and-ml-course",
    color: "#8b5cf6",
    bg: "#ede9fe",
  },
  {
    badge: "Beginner Friendly",
    badgeColor: "#f59e0b",
    title: "Data Analytics & Visualization Bootcamp",
    duration: "4 Months",
    mode: "Online + Offline Flex",
    forWho: "Commerce, arts & science graduates",
    outcome: "Data Analyst / BI Analyst roles",
    link: "https://ivyproschool.com/courses/business-analytics-course",
    color: "#f59e0b",
    bg: "#fef3c7",
  },
  {
    badge: "Job-Ready Fast",
    badgeColor: "#6366f1",
    title: "Business Intelligence & Power BI Certification",
    duration: "3 Months",
    mode: "Flexible (Online)",
    forWho: "Business analysts & managers",
    outcome: "BI Developer / Analyst roles",
    link: "https://ivyproschool.com/courses/data-analytics-and-generative-ai-course",
    color: "#6366f1",
    bg: "#e0e7ff",
  },
];

const TESTIMONIALS = [
  {
    quote: "Ivy's curriculum is perfectly aligned with what industry actually needs. I was placed as a Data Analyst at TCS within 30 days of completing my program. The live projects made all the difference in my interviews.",
    name: "Rohan Chatterjee",
    role: "Data Analyst",
    company: "TCS Kolkata",
    year: "Ivy Class of 2024",
    color: "#009fda",
  },
  {
    quote: "As someone from a commerce background, I was nervous about entering data science. The Ivy faculty made every concept accessible. I'm now an ML Engineer at Capgemini — something I never imagined possible two years ago.",
    name: "Priya Mondal",
    role: "ML Engineer",
    company: "Capgemini",
    year: "Ivy Class of 2024",
    color: "#8b5cf6",
  },
  {
    quote: "Affordable fees, flexible weekend batches that fit around my job, and genuine placement support — Ivy is the best career investment I've made. I went from ₹4 LPA to ₹14 LPA in 8 months.",
    name: "Arjun Das",
    role: "BI Developer",
    company: "Wipro",
    year: "Ivy Class of 2023",
    color: "#f59e0b",
  },
];

const STEPS = [
  {
    num: 1,
    title: "Identify Your Starting Point",
    desc: "Are you a fresh graduate, a working professional looking to upskill, or someone completely new to tech? Your starting point determines which Ivy program is the best fit. Ivy offers a free counselling session where career advisors assess your background and recommend the ideal learning path.",
    color: "#009fda",
    bg: "#dbeafe",
  },
  {
    num: 2,
    title: "Choose the Right Program",
    desc: "Use the program guide above to shortlist your options. Consider your schedule (full-time vs. weekend), timeline (3 months vs. 12 months), and end goal (Data Analyst vs. ML Engineer). Ivy's counsellors can help you decide.",
    color: "#8b5cf6",
    bg: "#ede9fe",
  },
  {
    num: 3,
    title: "Build Foundational Skills Early",
    desc: "While waiting for your program to begin, start with the basics. Install Python (it's free), explore tutorials on statistics and SQL, and get comfortable with data thinking. Ivy provides pre-program resources to all enrolled students.",
    color: "#f59e0b",
    bg: "#fef3c7",
  },
  {
    num: 4,
    title: "Complete Real Projects",
    desc: "Portfolio projects are everything in Data Science hiring. Every Ivy program includes capstone projects using real datasets from industries like finance, retail, and healthcare. These projects become the centrepiece of your resume and GitHub profile.",
    color: "#6366f1",
    bg: "#e0e7ff",
  },
  {
    num: 5,
    title: "Apply with Ivy's Placement Support",
    desc: "Ivy's dedicated placement cell connects you with 200+ hiring partners, organises campus interviews, and provides one-on-one resume and interview coaching. The average Ivy student receives their first job offer within 45 days of program completion.",
    color: "#ef4444",
    bg: "#fee2e2",
  },
];

const FAQS = [
  {
    q: "What is the scope of Data Science careers in Kolkata in 2026?",
    a: "The scope is exceptional. Kolkata saw a 28% year-on-year growth in Data Science and AI job postings in 2024, and this trend is accelerating. With over 3,200 IT companies, major MNCs, and a fast-growing startup ecosystem, Kolkata offers thousands of data roles with competitive salaries. The demand-supply gap remains wide, giving candidates an edge in negotiations.",
  },
  {
    q: "What is the average salary of a Data Scientist in Kolkata?",
    a: "Entry-level Data Scientists in Kolkata typically earn ₹5–8 LPA. With 3–5 years of experience, this grows to ₹12–22 LPA. Senior Data Scientists with 6+ years of expertise can command ₹28–60 LPA. When adjusted for Kolkata's lower cost of living versus cities like Bengaluru, these salaries offer exceptional purchasing power.",
  },
  {
    q: "Which is the best Data Science institute in Kolkata?",
    a: "Ivy Professional School is consistently ranked as Kolkata's top Data Science and AI training institution. With a 93% placement rate, 4.8-star student rating, 200+ hiring partners, and industry-aligned curriculum, Ivy offers the most comprehensive and career-focused Data Science education in the city.",
  },
  {
    q: "Can I learn Data Science without a technical background?",
    a: "Absolutely. Ivy Professional School's programs are designed to accommodate students from all backgrounds — commerce, arts, science, and engineering. The Data Analytics Bootcamp is specifically structured for non-technical learners. Many of Ivy's most successful alumni came from non-tech backgrounds including BCom, BA, and BBA graduates.",
  },
  {
    q: "How long does it take to become job-ready in Data Science?",
    a: "With Ivy's structured programs, most students with a science or engineering background become job-ready in 4–6 months. Students from non-technical backgrounds typically take 8–12 months. The key is consistent practice, completing real projects, and building a strong portfolio — all of which are built into Ivy's curriculum.",
  },
  {
    q: "Does Ivy Professional School offer job placement assistance?",
    a: "Yes, Ivy offers 100% placement assistance to all program graduates. This includes resume building, LinkedIn profile optimization, mock interviews, access to Ivy's network of 200+ hiring partners, and dedicated placement coordinators who actively connect students with relevant job opportunities in Kolkata and across India.",
  },
  {
    q: "What are the fees for Data Science courses at Ivy Professional School?",
    a: "Ivy offers competitive fee structures with flexible EMI options to ensure financial constraints are never a barrier. Fees vary by program (3-month bootcamps to 12-month PG Diplomas). Contact Ivy's admissions team at ivyproschool.com for the latest fee schedules and available scholarships.",
  },
  {
    q: "Are there remote Data Science jobs available for Kolkata professionals?",
    a: "Yes, significantly. The post-2020 shift to remote and hybrid work has created a large market of global Data Science and AI roles accessible to Kolkata-based professionals. This effectively allows Kolkata talent to earn global salaries while maintaining Kolkata's lower cost of living.",
  },
];

/* ─── sub-components ────────────────────────────────── */

const FaqItem = ({ item, index }: { item: typeof FAQS[0]; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl border bg-white shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      style={{ borderColor: open ? ACCENT : "#e5e7eb" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center gap-4 px-5 py-4">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold"
          style={{ backgroundColor: `${ACCENT}18`, color: ACCENT }}
        >
          {index + 1}
        </div>
        <h3 className="flex-1 text-sm sm:text-base font-bold text-gray-900">{item.q}</h3>
        <ChevronDown
          size={16}
          className="text-gray-400 transition-transform duration-200 flex-shrink-0"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>
      <div
        className="overflow-hidden transition-all duration-300 px-5"
        style={{ maxHeight: open ? "400px" : "0px", paddingBottom: open ? "16px" : "0px" }}
      >
        <p className="text-sm text-gray-600 leading-relaxed border-t pt-3" style={{ borderColor: `${ACCENT}30` }}>
          {item.a}
        </p>
      </div>
    </div>
  );
};

/* ─── main page ─────────────────────────────────────── */

export default function DataScienceAICareersKolkataPage() {
  const [activeSection, setActiveSection] = useState("kolkata-hub");
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
      "https://www.google.com/search?q=ivy+professional+school#lrd=0x3a02771797fccdc1:0xca64261fceaf2af6,3,,,",
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
    <div className="min-h-screen bg-[#f0f9ff]">

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
          <span className="text-gray-800 font-medium">Data Science & AI Careers in Kolkata</span>
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
              <MapPin size={12} style={{ color: ACCENT }} />
              Career Insights · Kolkata · Data & AI
            </div>

            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4"
              style={{ backgroundColor: "#fef3c7", color: "#92400e" }}
            >
              Complete 2026 Guide
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
              Data Science &amp; AI Careers in{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_DARK})` }}
              >
                Kolkata
              </span>
            </h1>

            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-7">
              Everything you need to know about the booming Data Science, Machine Learning, and AI job market in Kolkata — top roles, salary ranges, must-have skills, and how to launch your career.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Image src={ivy} alt="Ivy Pro School" width={16} height={16} className="rounded-full" />
                Ivy Professional School
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Clock size={11} />
                12 min read
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <BookOpen size={11} />
                Published: March 2026
              </div>
            </div>
          </div>

          {/* right — Kolkata career overview card */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              <div className="px-4 py-2.5 flex items-center gap-2" style={{ backgroundColor: ACCENT_DARK }}>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: ACCENT }} />
                </div>
                <span className="text-white text-xs font-semibold ml-2">Kolkata Data & AI Job Market — 2026</span>
              </div>
              <div className="p-5 grid grid-cols-2 gap-3">
                {KOLKATA_STATS.map((s, i) => (
                  <div key={i} className="rounded-xl p-3 border" style={{ borderColor: s.color + "30", backgroundColor: s.bg }}>
                    <div className="flex items-center gap-2 mb-1">
                      <span style={{ color: s.color }}>{s.icon}</span>
                    </div>
                    <div className="text-xl font-black" style={{ color: s.color }}>{s.value}</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="border-t px-4 py-3 flex items-center gap-2" style={{ borderColor: ACCENT + "30", backgroundColor: "#eff6ff" }}>
                <CheckCircle2 size={14} style={{ color: ACCENT }} />
                <p className="text-[10px] font-semibold" style={{ color: ACCENT_DARK }}>
                  28% YoY growth — Kolkata is India&apos;s fastest-rising Data & AI destination
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
          style={{ background: "linear-gradient(90deg, #eff6ff, #eef2ff)", border: "1px solid #bfdbfe" }}
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 flex-shrink-0" style={{ color: ACCENT }} />
            <span className="text-xs font-bold uppercase tracking-wide" style={{ color: ACCENT_DARK }}>
              Published by practitioners who&apos;ve helped 5,000+ professionals launch Data & AI careers from Kolkata
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
            <div className="rounded-2xl bg-white border shadow-sm overflow-hidden" style={{ borderColor: "#bfdbfe" }}>
              <div className="px-5 py-3 flex items-center gap-2" style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }}>
                <BookOpen size={14} className="text-white" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">In This Article</span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-1">
                {ROADMAP_SECTIONS.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-sm transition-colors hover:bg-blue-50"
                    style={{ color: activeSection === item.id ? ACCENT : "#6b7280" }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                      style={{
                        backgroundColor: activeSection === item.id ? ACCENT : "#f3f4f6",
                        color: activeSection === item.id ? "#fff" : "#9ca3af",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className={activeSection === item.id ? "font-semibold" : ""}>{item.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Intro */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5 sm:p-7">
              <p className="text-gray-700 text-base leading-relaxed">
                If you live in Kolkata and are wondering whether a career in Data Science or Artificial Intelligence is the right move — the answer in 2026 is an emphatic <strong>yes</strong>. The City of Joy is rapidly transforming into one of India&apos;s most exciting tech markets, with thousands of Data and AI roles going unfilled every year due to a massive talent gap. This guide is your definitive roadmap.
              </p>
            </div>

            {/* ── Section 1: Kolkata as Hub ─────────── */}
            <section id="kolkata-hub" className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 sm:px-7 pt-6 pb-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${ACCENT}18`, color: ACCENT }}>
                    <MapPin size={16} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                    1. Kolkata as India&apos;s Emerging Data &amp; AI Hub
                  </h2>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                  For decades, Bengaluru, Hyderabad, and Pune dominated India&apos;s IT conversation. But the tides are shifting. Kolkata has quietly built a formidable IT ecosystem — one that is now accelerating at a pace that is turning heads across the industry. With a robust pool of engineering talent from institutions like IIT Kharagpur, Jadavpur University, and Presidency University, Kolkata possesses one of India&apos;s most educated workforces.
                </p>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  Large IT parks in{" "}
                  <a href="https://ivyproschool.com/contact-us" title="Visit our Kolkata Campus" className="font-semibold underline underline-offset-2" style={{ color: ACCENT }}>
                    Salt Lake Sector V and Rajarhat New Town
                  </a>{" "}
                  are now home to thousands of technology companies ranging from global MNCs to fast-growing startups. The West Bengal government&apos;s active push for IT investment — including subsidies and infrastructure development in New Town — has further accelerated this growth story.
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {KOLKATA_STATS.map((s, i) => (
                    <div key={i} className="rounded-2xl p-4 text-center border" style={{ borderColor: s.color + "30", backgroundColor: s.bg }}>
                      <div className="text-2xl font-black mb-1" style={{ color: s.color }}>{s.value}</div>
                      <div className="text-[11px] text-gray-600 leading-snug">{s.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  What makes this moment particularly special is that Kolkata is not just catching up — it is leapfrogging. While traditional IT services (BPO, software testing) still dominate, the city is witnessing a qualitative shift toward higher-value work: data analytics, machine learning engineering, AI product development, and research. Companies that previously outsourced data work to Bengaluru are now building full-fledged data teams right here in Kolkata.
                </p>

                <div className="rounded-xl border-l-4 px-4 py-3" style={{ borderColor: ACCENT, backgroundColor: "#eff6ff" }}>
                  <p className="text-sm font-semibold" style={{ color: ACCENT_DARK }}>
                    <strong>Key Insight:</strong> Kolkata&apos;s cost of living advantage — salaries that go significantly further than in Bengaluru or Mumbai — makes it an attractive destination for{" "}
                    <a href="https://ivyproschool.com/courses/data-science-and-ml-course" title="View Data Science Course Details" className="underline underline-offset-2" style={{ color: ACCENT }}>
                      remote AI roles with global companies
                    </a>
                    , effectively giving Kolkata professionals access to global compensation while living locally.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Section 2: Why Now ────────────────── */}
            <section id="why-now" className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 sm:px-7 pt-6 pb-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#fef3c7", color: "#f59e0b" }}>
                    <Zap size={16} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                    2. Why Data Science &amp; AI — and Why Now?
                  </h2>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                  According to NASSCOM&apos;s 2024 India Technology Report, India needs over 2 million data and AI professionals by 2027 — but is currently on track to produce only about half that number. This talent gap is the single biggest opportunity for job-seekers today, particularly in cities like Kolkata where competition from other professionals is still relatively lower than in metro tech hubs.
                </p>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">The Data Economy is Every Industry&apos;s Economy</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  The most significant shift in 2024–25 is that Data and AI are no longer confined to &ldquo;tech companies.&rdquo; Banking, finance, insurance, healthcare, retail, logistics, agriculture, and even government departments are now actively hiring data professionals.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    { sector: "Banking & Finance", example: "Risk modeling, fraud detection, credit scoring using ML", color: "#009fda", bg: "#dbeafe", link: "https://ivyproschool.com/courses/data-science-and-ml-course" },
                    { sector: "Healthcare", example: "Predictive diagnostics, patient data analytics, drug discovery AI", color: "#8b5cf6", bg: "#ede9fe", link: null },
                    { sector: "Retail & E-commerce", example: "Recommendation engines, demand forecasting, pricing AI", color: "#f59e0b", bg: "#fef3c7", link: null },
                    { sector: "Manufacturing", example: "Predictive maintenance, quality control AI, supply chain optimization", color: "#6366f1", bg: "#e0e7ff", link: null },
                    { sector: "Government", example: "Smart city analytics, public health data, agricultural AI", color: "#0ea5e9", bg: "#e0f2fe", link: null },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl border p-3" style={{ borderColor: item.color + "30", backgroundColor: item.bg }}>
                      <div className="text-xs font-bold mb-1" style={{ color: item.color }}>{item.sector}</div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.link ? (
                          <a href={item.link} className="underline underline-offset-2 hover:opacity-80" style={{ color: item.color }}>
                            {item.example.split("credit scoring using ML")[0]}credit scoring using ML
                          </a>
                        ) : item.example}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border p-5" style={{ borderColor: "#ef444430", backgroundColor: "#fff1f2" }}>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                    <a href="https://ivyproschool.com/courses/iit-generative-ai-course" className="hover:underline" style={{ color: "#dc2626" }}>
                      Generative AI: The New Frontier
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    The explosive rise of{" "}
                    <a href="https://ivyproschool.com/courses/iit-generative-ai-course" className="font-semibold underline underline-offset-2" style={{ color: "#dc2626" }}>
                      Generative AI
                    </a>{" "}
                    — ChatGPT, Claude, Gemini, DALL-E, Midjourney — has created an entirely new category of roles that barely existed two years ago: Prompt Engineers, LLM Fine-tuning Specialists, AI Product Managers, and AI Ethics Researchers. Kolkata&apos;s companies are already recruiting for these roles, and candidates who can combine domain knowledge with AI skills are commanding premium salaries.
                  </p>
                </div>

                <div className="mt-5 rounded-xl border-l-4 px-4 py-3" style={{ borderColor: ACCENT, backgroundColor: "#eff6ff" }}>
                  <p className="text-sm font-semibold" style={{ color: ACCENT_DARK }}>
                    <strong>The Bottom Line:</strong> Data Science and AI offer three things that are rare to find together: job security (demand is skyrocketing), exceptional compensation (even entry-level roles pay well above the IT average), and intellectual fulfilment (you get to solve real, complex problems every day).
                  </p>
                </div>
              </div>
            </section>

            {/* ── Section 3: Career Roles ───────────── */}
            <section id="career-roles" className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 sm:px-7 pt-6 pb-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#ede9fe", color: "#8b5cf6" }}>
                    <Briefcase size={16} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                    3. Top Data &amp; AI Career Roles in Kolkata
                  </h2>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                  Here is a detailed breakdown of the most in-demand Data and AI roles in Kolkata&apos;s job market in 2026, along with what each role actually involves day-to-day.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ROLES_DATA.map((role, i) => (
                    <a
                      key={i}
                      href={role.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-2xl border p-4 hover:shadow-md transition-shadow block"
                      style={{ borderColor: role.color + "30", backgroundColor: role.bg + "60" }}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{role.emoji}</span>
                          <h3 className="text-sm font-bold text-gray-900 group-hover:underline">{role.title}</h3>
                        </div>
                        <ArrowUpRight size={14} className="flex-shrink-0 mt-0.5" style={{ color: role.color }} />
                      </div>
                      <div className="flex gap-2 mb-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: role.color + "18", color: role.color }}>
                          {role.salary}
                        </span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                          {role.growth} Growth
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">{role.desc}</p>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Section 4: Salary Guide ───────────── */}
            <section id="salary-guide" className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 sm:px-7 pt-6 pb-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#fef3c7", color: "#f59e0b" }}>
                    <DollarSign size={16} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                    4. Data &amp; AI Salary Guide — Kolkata 2026
                  </h2>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                  One of the most common questions from aspiring data professionals is: &ldquo;How much will I actually earn?&rdquo; The honest answer is: more than you might expect, especially for a city with Kolkata&apos;s cost of living.
                </p>

                {/* Salary Table */}
                <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "#e5e7eb" }}>
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ backgroundColor: ACCENT_DARK }}>
                        <th className="text-left px-4 py-3 text-white font-bold text-xs">Role</th>
                        <th className="text-center px-4 py-3 text-white font-bold text-xs">Entry (0–2 yrs)</th>
                        <th className="text-center px-4 py-3 text-white font-bold text-xs">Mid (3–5 yrs)</th>
                        <th className="text-center px-4 py-3 text-white font-bold text-xs">Senior (6+ yrs)</th>
                        <th className="text-center px-4 py-3 text-white font-bold text-xs">Growth</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SALARY_ROWS.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-4 py-3 font-bold text-xs" style={{ color: row.color }}>{row.role}</td>
                          <td className="px-4 py-3 text-center text-xs text-gray-700">{row.entry}</td>
                          <td className="px-4 py-3 text-center text-xs text-gray-700">{row.mid}</td>
                          <td className="px-4 py-3 text-center text-xs font-semibold text-gray-900">{row.senior}</td>
                          <td className="px-4 py-3 text-center">
                            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: row.color + "18", color: row.color }}>
                              ↑ {row.growth}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 rounded-xl border-l-4 px-4 py-3" style={{ borderColor: "#f59e0b", backgroundColor: "#fffbeb" }}>
                  <p className="text-sm" style={{ color: "#92400e" }}>
                    <strong>Kolkata&apos;s Hidden Advantage:</strong> A{" "}
                    <a href="https://ivyproschool.com/courses/data-science-and-ml-course" title="View Data Science Course Details" className="font-semibold underline underline-offset-2" style={{ color: "#d97706" }}>
                      ₹12 LPA salary in Kolkata
                    </a>{" "}
                    offers a significantly higher quality of life than the same salary in Bengaluru or Mumbai. Lower rent, lower commute costs, and lower living expenses mean Kolkata data professionals often have more disposable income than counterparts in other metro cities earning similar packages.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Section 5: Skills ─────────────────── */}
            <section id="skills" className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 sm:px-7 pt-6 pb-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#e0e7ff", color: "#6366f1" }}>
                    <Layers size={16} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                    5. Skills You Need to Break Into Data &amp; AI
                  </h2>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                  Entering the Data and AI field does not require a PhD or a decade of experience. What it does require is a solid, well-structured skill set. Here is what Kolkata&apos;s top employers look for in 2026:
                </p>

                <h3 className="text-base font-bold text-gray-900 mb-3">Technical Skills</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {TECH_SKILLS.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                      style={{ backgroundColor: skill.bg, color: skill.color, borderColor: skill.color + "40" }}
                    >
                      {skill.label}
                    </span>
                  ))}
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-3">Soft Skills That Employers Value</h3>
                <div className="space-y-2 mb-5">
                  {SOFT_SKILLS.map((sk, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl border px-4 py-3 bg-gray-50">
                      <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: ACCENT }} />
                      <div>
                        <span className="text-sm font-bold text-gray-900">{sk.title}: </span>
                        <span className="text-sm text-gray-600">{sk.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border px-4 py-3" style={{ borderColor: "#bfdbfe", backgroundColor: "#eff6ff" }}>
                  <p className="text-sm font-semibold" style={{ color: ACCENT_DARK }}>
                    <strong>How Long Does It Take to Learn?</strong> With a structured, project-based learning program like those offered at Ivy Professional School, most students with a science or engineering background become job-ready in <strong>4–12 months</strong>, depending on the program and prior exposure.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Section 6: Employers ──────────────── */}
            <section id="employers" className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 sm:px-7 pt-6 pb-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#dbeafe", color: ACCENT }}>
                    <Building2 size={16} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                    6. Top Employers Hiring Data &amp; AI Talent in Kolkata
                  </h2>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                  The good news for Kolkata job-seekers is that you do not need to relocate. These major companies are actively building and expanding their Data and AI teams right here in Kolkata:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-5">
                  {EMPLOYERS.map((emp, i) => (
                    <a
                      key={i}
                      href="https://ivyproschool.com/alumni"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border bg-gray-50 hover:border-blue-300 hover:bg-blue-50 transition-colors p-3 text-center group"
                    >
                      <div className="text-xs font-bold text-gray-900 group-hover:text-[#013a81] mb-0.5">{emp.name}</div>
                      <div className="text-[10px] text-gray-500">{emp.desc}</div>
                    </a>
                  ))}
                </div>

                <div className="rounded-xl border-l-4 px-4 py-3" style={{ borderColor: ACCENT, backgroundColor: "#eff6ff" }}>
                  <p className="text-sm text-gray-700">
                    Beyond these large employers, Kolkata&apos;s growing startup ecosystem — particularly in fintech, edtech, healthtech, and agritech — is creating significant opportunities for data professionals who want to work on challenging, high-impact problems from day one of their careers.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Section 7: Why Ivy ────────────────── */}
            <section id="why-ivy" className="rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: ACCENT + "40" }}>
              <div style={{ background: `linear-gradient(135deg, ${ACCENT_DARK}, ${ACCENT})` }} className="px-5 sm:px-7 pt-6 pb-5">
                <div className="flex items-center gap-2 mb-2">
                  <Star size={16} className="text-yellow-300" />
                  <span className="text-yellow-300 text-xs font-bold uppercase tracking-widest">Kolkata&apos;s #1 Rated Institute</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white mb-2">
                  Ivy Professional School: Where Kolkata&apos;s Data Careers Begin
                </h2>
                <p className="text-blue-100 text-sm leading-relaxed">
                  If you are serious about launching a{" "}
                  <a href="https://ivyproschool.com/courses/data-science-and-ml-course" title="Data Science Course in Kolkata" className="text-white font-semibold underline underline-offset-2">
                    Data Science or AI career in Kolkata
                  </a>
                  , there is one name that consistently comes out on top — Ivy Professional School. With industry-aligned programs, expert mentorship, and a proven placement record, Ivy has helped thousands of Kolkata students transform their careers.
                </p>
              </div>

              <div className="bg-white px-5 sm:px-7 py-6">
                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {IVY_HIGHLIGHTS.map((h, i) => (
                    <div key={i} className="text-center rounded-xl border p-3" style={{ borderColor: ACCENT + "30", backgroundColor: "#eff6ff" }}>
                      <div className="text-2xl font-black" style={{ color: ACCENT_DARK }}>{h.value}</div>
                      <div className="text-[11px] text-gray-500 mt-0.5">{h.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                  {IVY_FEATURES.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-700 bg-gray-50 rounded-lg px-3 py-2">
                      <CheckCircle2 size={12} style={{ color: ACCENT }} className="flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://ivyproschool.com/courses/data-science-and-ml-course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity text-sm"
                    style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }}
                  >
                    Apply for Admission →
                  </a>
                  <a
                    href="https://ivyproschool.com/courses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center font-bold py-3 rounded-xl border-2 hover:bg-blue-50 transition-colors text-sm"
                    style={{ borderColor: ACCENT, color: ACCENT }}
                  >
                    View All Programs
                  </a>
                </div>
              </div>
            </section>

            {/* ── Section 8: Programs ───────────────── */}
            <section id="programs" className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 sm:px-7 pt-6 pb-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#dbeafe", color: ACCENT }}>
                    <BookOpen size={16} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                    8. Ivy&apos;s Data &amp; AI Programs — At a Glance
                  </h2>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                  Ivy Professional School offers a range of programs designed to fit different backgrounds, schedules, and career goals — from fresh graduates to experienced professionals looking to upskill.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  {PROGRAMS.map((prog, i) => (
                    <a
                      key={i}
                      href={prog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-2xl border p-4 hover:shadow-md transition-shadow block"
                      style={{ borderColor: prog.color + "40", backgroundColor: prog.bg + "50" }}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: prog.badgeColor }}>
                          {prog.badge}
                        </span>
                        <ArrowUpRight size={14} style={{ color: prog.color }} />
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 mb-3 group-hover:underline leading-snug">{prog.title}</h3>
                      <div className="space-y-1.5">
                        {[
                          { icon: <Clock size={11} />, label: "Duration", val: prog.duration },
                          { icon: <Globe size={11} />, label: "Mode", val: prog.mode },
                          { icon: <Target size={11} />, label: "For", val: prog.forWho },
                          { icon: <Award size={11} />, label: "Outcome", val: prog.outcome },
                        ].map((row, j) => (
                          <div key={j} className="flex items-center gap-2 text-[11px]">
                            <span className="flex-shrink-0" style={{ color: prog.color }}>{row.icon}</span>
                            <span className="text-gray-500">{row.label}:</span>
                            <span className="font-semibold text-gray-800">{row.val}</span>
                          </div>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>

                <div className="rounded-xl border-l-4 px-4 py-3" style={{ borderColor: ACCENT, backgroundColor: "#eff6ff" }}>
                  <p className="text-sm text-gray-700">
                    All Ivy programs include: <strong>Live projects with real datasets</strong>, industry mentor sessions, resume building workshops, mock interviews, LinkedIn optimization, and dedicated placement assistance specifically focused on Kolkata&apos;s job market.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Section 9: Testimonials ───────────── */}
            <section id="success-stories" className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 sm:px-7 pt-6 pb-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#fef3c7", color: "#f59e0b" }}>
                    <Star size={16} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                    9. Success Stories from Ivy Professional School Alumni
                  </h2>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                  Don&apos;t take our word for it. Here is what Ivy graduates who are now working in Kolkata&apos;s top Data and AI companies have to say:
                </p>

                <div className="space-y-4">
                  {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="rounded-2xl border p-5" style={{ borderColor: t.color + "30", backgroundColor: t.color + "08" }}>
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} size={12} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
                        ))}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ backgroundColor: t.color }}>
                          {t.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900">{t.name}</div>
                          <div className="text-xs text-gray-500">
                            <a href="https://ivyproschool.com/alumni" className="hover:underline" style={{ color: t.color }}>
                              {t.role}, {t.company}
                            </a>{" "}| {t.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Section 10: Roadmap ───────────────── */}
            <section id="get-started" className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 sm:px-7 pt-6 pb-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#dbeafe", color: ACCENT }}>
                    <Target size={16} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                    10. How to Get Started — Your Step-by-Step Roadmap
                  </h2>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  Feeling inspired but unsure where to begin? Here is a simple, actionable roadmap to launch your Data and AI career from Kolkata in 2026:
                </p>

                <div className="space-y-3 mb-6">
                  {STEPS.map((step, i) => (
                    <div key={i} className="relative flex items-start gap-4">
                      {i < STEPS.length - 1 && (
                        <div className="absolute left-5 top-10 w-0.5 h-full" style={{ backgroundColor: step.color + "30" }} />
                      )}
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0 z-10 border-2"
                        style={{ backgroundColor: step.bg, color: step.color, borderColor: step.color }}
                      >
                        {step.num}
                      </div>
                      <div className="flex-1 rounded-xl border px-4 py-3 mb-1" style={{ borderColor: step.color + "30", backgroundColor: step.bg + "60" }}>
                        <div className="text-sm font-bold mb-1" style={{ color: step.color }}>{step.title}</div>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Final CTA */}
                <div className="rounded-2xl overflow-hidden" style={{ background: `linear-gradient(135deg, ${ACCENT_DARK}, ${ACCENT})` }}>
                  <div className="px-5 py-6 text-center">
                    <h3 className="text-lg font-black text-white mb-2">Ready to Take the First Step?</h3>
                    <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                      The best time to start your Data Science journey was yesterday. The second best time is today. Every month you wait is a month of salary growth and career progression you leave on the table.
                    </p>
                    <a
                      href="https://ivyproschool.com/courses/data-science-and-ml-course"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white font-bold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity text-sm"
                      style={{ color: ACCENT_DARK }}
                    >
                      Join Ivy Professional School <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Section 11: FAQs ─────────────────── */}
            <section id="faq" className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 sm:px-7 pt-6 pb-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#dbeafe", color: ACCENT }}>
                    <FileText size={16} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                    11. Frequently Asked Questions
                  </h2>
                </div>
                <div className="space-y-3">
                  {FAQS.map((faq, i) => (
                    <FaqItem key={i} item={faq} index={i} />
                  ))}
                </div>
              </div>
            </section>

            {/* ── Related Articles ──────────────────── */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-5 py-3 flex items-center gap-2" style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }}>
                <BookMarked size={14} className="text-white" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">Related Articles</span>
              </div>
              <div className="p-5 space-y-2">
                {[
                  { title: "Top 10 Python Libraries Every Data Scientist Must Know in 2026", link: "/aihelpcenter/career/how-to-build-a-data-science-portfolio-without-experience" },
                  { title: "Machine Learning vs Data Science: What's the Difference?", link: "/aihelpcenter/machine-learning" },
                  { title: "How to Build a Data Science Portfolio That Gets You Hired", link: "/aihelpcenter/career/how-to-build-a-data-science-portfolio-without-experience" },
                  { title: "Generative AI Careers: The Next Big Opportunity for Indian Professionals", link: "https://ivyproschool.com/courses/iit-generative-ai-course" },
                  { title: "Is Data Science a Good Career for Commerce Students?", link: "/aihelpcenter/career/data-science-for-commerce-students" },
                ].map((rel, i) => (
                  <Link
                    key={i}
                    href={rel.link}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                  >
                    <ArrowRight size={14} className="flex-shrink-0" style={{ color: ACCENT }} />
                    <span className="text-sm text-gray-700 group-hover:text-[#013a81] group-hover:font-semibold transition-colors">{rel.title}</span>
                  </Link>
                ))}
              </div>
            </div>

          </article>

          {/* ── RIGHT: Sidebar ──────────────────────── */}
          <aside className="lg:col-span-1 space-y-5">
            <div className="sticky top-6 space-y-5">

              {/* Section Navigator */}
              <div className="rounded-2xl bg-white border shadow-sm overflow-hidden" style={{ borderColor: "#bfdbfe" }}>
                <div className="px-4 py-2.5" style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }}>
                  <span className="text-xs font-bold text-white uppercase tracking-widest">On This Page</span>
                </div>
                <div className="p-3 space-y-1">
                  {ROADMAP_SECTIONS.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollTo(sec.id)}
                      className="w-full text-left text-xs px-3 py-2 rounded-lg transition-colors"
                      style={{
                        backgroundColor: activeSection === sec.id ? ACCENT + "15" : "transparent",
                        color: activeSection === sec.id ? ACCENT_DARK : "#6b7280",
                        fontWeight: activeSection === sec.id ? 700 : 400,
                      }}
                    >
                      {sec.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Facts */}
              <div className="rounded-2xl bg-white border shadow-sm overflow-hidden" style={{ borderColor: "#bfdbfe" }}>
                <div className="px-4 py-2.5" style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }}>
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Quick Facts</span>
                </div>
                <div className="p-4 space-y-3">
                  {[
                    { icon: <TrendingUp size={14} />, label: "Job Growth Rate", val: "28% YoY in Kolkata", color: "#009fda" },
                    { icon: <DollarSign size={14} />, label: "Starting Salaries", val: "₹4–12 LPA for freshers", color: "#f59e0b" },
                    { icon: <Building2 size={14} />, label: "Top Employers", val: "TCS, Wipro, Infosys, IBM", color: "#8b5cf6" },
                    { icon: <Clock size={14} />, label: "Time to Job-Ready", val: "4–12 months with Ivy", color: "#ef4444" },
                    { icon: <Award size={14} />, label: "Ivy Placement Rate", val: "93% within 45 days", color: "#6366f1" },
                  ].map((fact, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: fact.color + "15", color: fact.color }}>
                        {fact.icon}
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wide">{fact.label}</div>
                        <div className="text-xs font-bold text-gray-900">{fact.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="rounded-2xl overflow-hidden shadow-sm" style={{ background: `linear-gradient(135deg, ${ACCENT_DARK}, ${ACCENT})` }}>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Image src={ivy} alt="Ivy Pro School" width={28} height={28} className="rounded-full border-2 border-white/30" />
                    <span className="text-white text-xs font-bold">Ivy Professional School</span>
                  </div>
                  <h3 className="text-white font-black text-base mb-2 leading-snug">
                    Start Your Data Science Career in Kolkata
                  </h3>
                  <p className="text-blue-100 text-xs mb-4 leading-relaxed">
                    93% placement rate. ₹8.5 LPA average CTC. 200+ hiring partners across Kolkata and India.
                  </p>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://ivyproschool.com/courses/data-science-and-ml-course"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-white font-bold py-2.5 rounded-xl text-xs hover:opacity-90 transition-opacity"
                      style={{ color: ACCENT_DARK }}
                    >
                      Explore Programs →
                    </a>
                    <a
                      href="https://ivyproschool.com/contact-us"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center border border-white/40 text-white font-semibold py-2.5 rounded-xl text-xs hover:bg-white/10 transition-colors"
                    >
                      Talk to a Counsellor
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="rounded-2xl bg-white border shadow-sm p-4" style={{ borderColor: "#bfdbfe" }}>
                <div className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wide">Contact Ivy</div>
                <p className="text-xs text-gray-600 mb-3">Have questions about admissions or programs?</p>
                <div className="flex gap-2">
                  <a
                    href="https://ivyproschool.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs font-semibold py-2 rounded-lg border hover:bg-blue-50 transition-colors"
                    style={{ borderColor: ACCENT, color: ACCENT }}
                  >
                    Visit Website
                  </a>
                  <a
                    href="https://ivyproschool.com/contact-us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs font-semibold py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: ACCENT }}
                  >
                    Call Us
                  </a>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </main>

      {/* ── Footer Strip ────────────────────────────── */}
      <footer className="border-t border-gray-100 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Image src={ivy} alt="Ivy Pro School" width={24} height={24} className="rounded-full" />
                <span className="text-sm font-black text-gray-900">Ivy Professional School</span>
              </div>
              <p className="text-xs text-gray-500">Kolkata&apos;s most trusted Data Science &amp; AI institute. Start your journey today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
              <a
                href="https://ivyproschool.com/courses/data-science-and-ml-course"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-white font-bold py-2.5 px-5 rounded-xl text-sm hover:opacity-90 transition-opacity"
                style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_DARK})` }}
              >
                Apply Now →
              </a>
              <a
                href="https://ivyproschool.com/courses"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center font-bold py-2.5 px-5 rounded-xl border-2 text-sm hover:bg-blue-50 transition-colors"
                style={{ borderColor: ACCENT, color: ACCENT }}
              >
                Browse Programs
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
