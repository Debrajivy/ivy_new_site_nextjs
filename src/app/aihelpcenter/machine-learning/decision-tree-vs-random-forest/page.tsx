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
  GitBranch,
  Layers,
  BarChart3,
  AlertCircle,
  TrendingUp,
  Users,
  ShoppingCart,
  CreditCard,
  Activity,
  Package,
  FileText,
  CheckSquare,
  XCircle,
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

/* ─── roadmap ───────────────────────────────────── */
const ROADMAP_SECTIONS = [
  { id: "introduction", title: "Introduction" },
  { id: "decision-tree", title: "What is a Decision Tree?" },
  { id: "random-forest", title: "What is a Random Forest?" },
  { id: "key-differences", title: "Key Differences" },
  { id: "main-difference", title: "Main Difference Explained" },
  { id: "how-rf-improves", title: "How Random Forest Improves" },
  { id: "performance", title: "Performance Metrics" },
  { id: "use-cases", title: "Real-World Use Cases" },
  { id: "when-to-use", title: "When to Use Which" },
  { id: "pros-cons", title: "Advantages & Disadvantages" },
  { id: "conclusion", title: "Conclusion" },
];

/* ─── use cases tabs ─────────────────────────────── */
const USE_CASES = [
  {
    id: "loan",
    icon: <CreditCard size={20} />,
    label: "Loan Approval",
    color: "#009fda",
    bg: "#e0f2fe",
    algo: "Decision Tree",
    title: "Loan Approval Systems",
    body: `Banks and financial institutions use Decision Trees to build transparent, rule-based loan approval systems. Each node in the tree represents a specific criterion — income level, credit score, employment status — making the decision logic fully traceable and explainable to regulators.`,
    detail: `A simple example: If income > ₹50,000 AND credit score > 700 → Approve. If income < ₹30,000 → Reject. The branching structure allows compliance teams to audit every approval and rejection with a clear audit trail.`,
    example: `Income > ₹50,000 AND Credit Score > 700 → Approve Loan`,
  },
  {
    id: "medical",
    icon: <Activity size={20} />,
    label: "Medical Diagnosis",
    color: "#6366f1",
    bg: "#e0e7ff",
    algo: "Decision Tree",
    title: "Medical Diagnosis",
    body: `Decision Trees are widely used in medical diagnosis because doctors and patients need to understand why a particular diagnosis was made. The transparent rule structure makes it easier to validate clinical decisions against established medical guidelines.`,
    detail: `A diagnostic tree might evaluate: fever > 38°C → check symptoms → if cough AND shortness of breath → flag for respiratory assessment. The interpretability of Decision Trees is critical in healthcare where explainability can be a legal and ethical requirement.`,
    example: `Fever > 38°C + Cough + Fatigue → Recommend further respiratory testing`,
  },
  {
    id: "fraud",
    icon: <ShieldCheck size={20} />,
    label: "Fraud Detection",
    color: "#7c3aed",
    bg: "#ede9fe",
    algo: "Random Forest",
    title: "Fraud Detection",
    body: `Financial fraud detection requires catching subtle, complex patterns across thousands of transaction variables — a task where Random Forest significantly outperforms a single Decision Tree. By aggregating predictions across hundreds of trees, it detects fraud more accurately while reducing false positives.`,
    detail: `Each tree in the forest learns different patterns from different transaction subsets. Their combined vote produces a robust fraud score that adapts to new fraud patterns. Major payment processors use Random Forest as a core component of their real-time fraud screening systems.`,
    example: `Transaction amount + location anomaly + time pattern + device fingerprint → Fraud probability score`,
  },
  {
    id: "churn",
    icon: <Users size={20} />,
    label: "Customer Churn",
    color: "#0369a1",
    bg: "#dbeafe",
    algo: "Random Forest",
    title: "Customer Churn Prediction",
    body: `Predicting which customers are likely to cancel a subscription or stop purchasing requires analyzing dozens of behavioral signals simultaneously. Random Forest handles this high-dimensional feature space better than a single tree, producing more reliable churn probability scores.`,
    detail: `Features like login frequency, support ticket history, time since last purchase, and plan tier are combined across multiple trees. The ensemble approach captures non-linear relationships that a single Decision Tree would miss, resulting in significantly better recall for identifying at-risk customers.`,
    example: `Login frequency + last purchase > 30 days + open tickets > 2 → High churn risk`,
  },
  {
    id: "recommendation",
    icon: <ShoppingCart size={20} />,
    label: "Recommendations",
    color: "#b45309",
    bg: "#fef3c7",
    algo: "Random Forest",
    title: "Product Recommendation Systems",
    body: `E-commerce platforms use Random Forest to power product recommendation engines. The model learns from purchase history, browsing behavior, demographic data, and seasonal patterns across millions of users — a task that would cause severe overfitting in a single Decision Tree.`,
    detail: `The ensemble nature of Random Forest allows it to capture diverse customer preferences from different subsets of users. This produces recommendations that generalize well across new users rather than just memorizing the training data.`,
    example: `Browse history + purchase patterns + category affinity → Product recommendations`,
  },
  {
    id: "demand",
    icon: <Package size={20} />,
    label: "Demand Forecasting",
    color: "#7c3aed",
    bg: "#ede9fe",
    algo: "Random Forest",
    title: "Demand Forecasting",
    body: `Supply chain and retail teams use Random Forest for demand forecasting because it handles the complex interaction between seasonality, promotions, economic indicators, and product category trends more robustly than simple rule-based Decision Trees.`,
    detail: `By training hundreds of trees on different time windows and feature combinations, the model learns to forecast demand across varying conditions. The averaged output smooths out the instability that a single Decision Tree would exhibit when encountering new seasonal patterns.`,
    example: `Season + historical sales + promotions + regional trends → Demand forecast`,
  },
];

/* ─── accordion ──────────────────────────────────── */
const AccordionCard = ({ title, children, color, index }: { title: string; children: React.ReactNode; color: string; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow" style={{ borderColor: open ? color : "#e5e7eb" }} onClick={() => setOpen(!open)}>
      <div className="flex items-center gap-4 px-5 py-4">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold" style={{ backgroundColor: `${color}18`, color }}>{index + 1}</div>
        <h3 className="flex-1 text-sm sm:text-base font-bold text-gray-900">{title}</h3>
        <ChevronDown size={16} className="text-gray-400 flex-shrink-0 transition-transform duration-200" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
      </div>
      <div className="overflow-hidden transition-all duration-300 px-5" style={{ maxHeight: open ? "400px" : "0px", paddingBottom: open ? "16px" : "0px" }}>
        <div className="text-sm text-gray-600 leading-relaxed border-t pt-3" style={{ borderColor: `${color}30` }}>{children}</div>
      </div>
    </div>
  );
};

/* ─── use case tab ───────────────────────────────── */
const UseCaseTab = ({ uc, active, onClick }: { uc: typeof USE_CASES[0]; active: boolean; onClick: () => void }) => (
  <button onClick={onClick} className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 w-full text-left"
    style={{ backgroundColor: active ? uc.color : "transparent", color: active ? "#fff" : "#6b7280", border: `1.5px solid ${active ? uc.color : "#e5e7eb"}` }}>
    <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: active ? "rgba(255,255,255,0.2)" : uc.bg, color: uc.color }}>{uc.icon}</span>
    {uc.label}
  </button>
);

/* ─── courses ────────────────────────────────────── */
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

/* ─── main page ──────────────────────────────────── */
export default function DecisionTreeVsRandomForestPage() {
  const [activeTab, setActiveTab] = useState(0);
  const active = USE_CASES[activeTab];
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
        if (progress >= 95 && !reviewPromptShown) { setShowReviewPrompt(true); setReviewPromptShown(true); }
      }
      for (const sec of [...ROADMAP_SECTIONS].reverse()) {
        const el = document.getElementById(sec.id);
        if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sec.id); break; }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reviewPromptShown]);

  const openReviewPage = () => {
    window.open("https://www.google.com/search?q=ivy+professional+school&rlz=1C1ONGR_enIN1115IN1115&oq=&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7Mg0IARAuGK8BGMcBGIAEMgcIAhAAGIAEMhAIAxAuGIMBGLEDGIAEGOUEMgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYQTIGCAcQRRg80gEIMzA0N2owajeoAgiwAgHxBRMMy4WLy7978QUTMMy4WLy_ew&sourceid=chrome&ie=UTF-8#lrd=0x3a02771797fccdc1:0xca64261fceaf2af6,3,,,", "_blank");
    setShowReviewPrompt(false);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: "smooth" }); setActiveSection(id); }
  };

  return (
    <div className="min-h-screen bg-[#f0fdf9]">

      {/* ── Scroll Progress ─────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
        <div className="h-full transition-all duration-300" style={{ width: `${scrollProgress}%`, background: "linear-gradient(90deg, #009fda, #7c3aed)" }} />
      </div>

      {/* ── Review Prompt ───────────────────────── */}
      {showReviewPrompt && (
        <div className="fixed top-16 sm:top-20 right-2 sm:right-4 md:right-6 z-50 max-w-xs sm:max-w-sm">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="h-8 sm:h-10 w-8 sm:w-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#009fda] to-[#7c3aed]">
                <Star className="h-4 sm:h-6 w-4 sm:w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Enjoying this guide?</h3>
                <p className="text-xs sm:text-sm text-gray-600">Share your feedback!</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm">You&apos;ve completed {Math.round(scrollProgress)}% of this guide. Help others by sharing your experience with Ivy Professional School.</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button onClick={openReviewPage} className="flex-1 text-white font-bold py-2 sm:py-3 rounded-lg sm:rounded-xl hover:opacity-90 transition-opacity text-sm bg-gradient-to-r from-[#009fda] to-[#7c3aed]">Write a Review</button>
              <button onClick={() => setShowReviewPrompt(false)} className="px-3 sm:px-4 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm">Maybe Later</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Breadcrumb ──────────────────────────── */}
      <div className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
          <Link href="/aihelpcenter" className="hover:text-[#013a81] transition-colors">AI Help Center</Link>
          <ChevronRight size={12} />
          <Link href="/aihelpcenter/machine-learning" className="hover:text-[#013a81] transition-colors">Machine Learning</Link>
          <ChevronRight size={12} />
          <span className="text-gray-800 font-medium">Decision Tree vs Random Forest</span>
        </div>
      </div>

      {/* ── Hero ────────────────────────────────── */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#009fda] via-[#7c3aed] to-[#013a81]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-xs font-bold text-purple-800 uppercase tracking-wider mb-5">
              <Brain size={12} className="text-[#7c3aed]" />
              Machine Learning · Supervised Learning
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
              <span className="bg-gradient-to-r from-[#009fda] to-[#7c3aed] bg-clip-text text-transparent">
                Decision Tree
              </span>{" "}
              vs{" "}
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#013a81] bg-clip-text text-transparent">
                Random Forest
              </span>
              : Differences, Use Cases &amp; When to Use Each
            </h1>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-7">
              Understand the key differences between Decision Tree and Random Forest with real-world examples, performance metrics, and a clear guide on when to use each algorithm.
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
                April 13, 2026
              </div>
            </div>
          </div>

          {/* right — visual */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              <div className="bg-[#013a81] px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-[#009fda]" />
                </div>
                <span className="text-white text-xs font-semibold ml-2">Decision Tree vs Random Forest — Quick Comparison</span>
              </div>
              <div className="p-5 space-y-3">
                {/* Mini decision tree visual */}
                <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
                  <p className="text-[10px] font-bold text-[#009fda] uppercase tracking-widest mb-3">Decision Tree — Single Model</p>
                  <div className="flex flex-col items-center gap-1.5 text-[10px]">
                    <div className="bg-[#009fda] text-white px-3 py-1.5 rounded-lg font-semibold">Income &gt; ₹50K?</div>
                    <div className="flex gap-8">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-px h-3 bg-gray-300" />
                        <div className="bg-blue-100 border border-blue-200 text-[#013a81] px-2 py-1 rounded font-medium">YES → Approve</div>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-px h-3 bg-gray-300" />
                        <div className="bg-red-50 border border-red-100 text-red-600 px-2 py-1 rounded font-medium">NO → Reject</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Mini random forest visual */}
                <div className="rounded-xl bg-purple-50 border border-purple-100 p-4">
                  <p className="text-[10px] font-bold text-[#7c3aed] uppercase tracking-widest mb-3">Random Forest — Ensemble of Trees</p>
                  <div className="flex items-center gap-2 justify-center">
                    {["Tree 1\nApprove", "Tree 2\nApprove", "Tree 3\nReject", "Tree 4\nApprove"].map((t, i) => (
                      <div key={i} className="bg-white border border-purple-200 text-[9px] text-purple-700 font-semibold px-2 py-1.5 rounded text-center leading-tight whitespace-pre-line">{t}</div>
                    ))}
                    <ArrowRight size={12} className="text-purple-400 flex-shrink-0" />
                    <div className="bg-[#7c3aed] text-white text-[9px] font-bold px-2 py-1.5 rounded text-center">Vote: Approve</div>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#009fda] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star size={12} className="text-white" />
                  </div>
                  <p className="text-[10px] text-[#013a81] leading-snug">
                    <strong>Key insight:</strong> Random Forest = crowd wisdom from many trees. More accurate, more robust, but harder to interpret than a single Decision Tree.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Authority Strip ──────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-0">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 rounded-xl px-4 sm:px-5 py-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-purple-600 flex-shrink-0" />
            <span className="text-xs font-bold text-purple-900 uppercase tracking-wide">Authored by Ivy Pro School Founders</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src={PrateekAgarwal} alt="Prateek Agarwal" width={28} height={28} className="rounded-full object-cover flex-shrink-0 border border-purple-200" />
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold text-gray-900">Prateek Agarwal</span>
              <span className="text-xs text-gray-500"> · 20+ yrs AI/ML Leader</span>
              <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" className="ml-1 text-purple-600 hover:text-purple-800">
                <LinkedInSVG className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main grid ────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-4">

          {/* ── LEFT article ───────────────────── */}
          <article className="lg:col-span-3 space-y-6">

            {/* Table of Contents */}
            <div className="rounded-2xl bg-white border border-purple-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-[#7c3aed] to-[#013a81] px-5 py-3 flex items-center gap-2">
                <BookOpen size={14} className="text-white" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">Table of Contents</span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-1">
                {ROADMAP_SECTIONS.map((item, i) => (
                  <button key={item.id} onClick={() => scrollTo(item.id)} className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-purple-50 transition-colors text-left w-full">
                    <span className="w-6 h-6 rounded-full bg-purple-100 text-[#7c3aed] flex items-center justify-center text-[10px] font-bold flex-shrink-0 group-hover:bg-[#7c3aed] group-hover:text-white transition-colors">{i + 1}</span>
                    <span className="text-sm text-gray-600 group-hover:text-[#013a81] transition-colors font-medium">{item.title}</span>
                    <ArrowRight size={12} className="text-[#7c3aed] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>

            {/* ── Introduction ─────────────────── */}
            <section id="introduction" className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#009fda] to-[#7c3aed]" />
              <div className="p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#ede9fe", color: "#7c3aed" }}>
                  <Brain size={12} /> Introduction
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-base sm:text-lg border-l-4 border-[#7c3aed] pl-4 italic text-gray-700 mb-5">
                  &ldquo;Understanding the difference between Decision Tree and Random Forest is critical for choosing the right model for your machine learning project.&rdquo;
                </p>
                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Machine learning is rapidly becoming the backbone of data-driven decision-making across industries. Among the most widely used algorithms are <strong className="text-gray-800">Decision Trees</strong> and <strong className="text-gray-800">Random Forests</strong> — two powerful models that help businesses solve classification and regression problems efficiently.
                  </p>
                  <p>
                    While both algorithms are closely related, they differ significantly in terms of accuracy, interpretability, and real-world performance. In this guide, you will learn how these algorithms work, their key differences, performance comparisons, and when to use each one in practical scenarios.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: "Classification", desc: "Predict categories like spam/not spam, approve/reject", color: "#009fda" },
                    { title: "Regression", desc: "Predict continuous values like price or demand", color: "#7c3aed" },
                    { title: "Both Algorithms", desc: "Work for both supervised learning task types", color: "#013a81" },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl border p-3 text-center" style={{ borderColor: `${item.color}25`, backgroundColor: `${item.color}0a` }}>
                      <p className="text-xs font-bold mb-1" style={{ color: item.color }}>{item.title}</p>
                      <p className="text-[11px] text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── What is Decision Tree ────────────── */}
            <section id="decision-tree" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#e0f2fe", color: "#0369a1" }}>
                <GitBranch size={12} /> Algorithm 1
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">1. What is a Decision Tree?</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                A <strong className="text-gray-800">Decision Tree</strong> is a supervised machine learning algorithm used for both classification and regression tasks. It works like a flowchart — starting from a root decision and branching down to final predictions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-center">
                {[
                  { label: "Each Node", desc: "Represents a decision based on a feature", icon: "⬡", color: "#009fda" },
                  { label: "Each Branch", desc: "Represents the outcome of that decision", icon: "→", color: "#6366f1" },
                  { label: "Each Leaf", desc: "Represents the final prediction or class", icon: "⬟", color: "#7c3aed" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border p-4" style={{ borderColor: `${item.color}25`, backgroundColor: `${item.color}08` }}>
                    <div className="text-2xl mb-2" style={{ color: item.color }}>{item.icon}</div>
                    <p className="text-xs font-bold mb-1" style={{ color: item.color }}>{item.label}</p>
                    <p className="text-[11px] text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Loan example visual */}
              <div className="rounded-xl bg-blue-50 border border-blue-100 p-5 mb-5">
                <p className="text-xs font-bold text-[#013a81] uppercase tracking-wide mb-4">Example: Bank Loan Approval Decision Tree</p>
                <div className="flex flex-col items-center gap-2 text-xs">
                  <div className="bg-[#013a81] text-white px-4 py-2 rounded-xl font-bold">Income &gt; ₹50,000?</div>
                  <div className="flex gap-10 sm:gap-20">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-px h-4 bg-gray-300" />
                      <span className="text-[10px] text-gray-400">YES</span>
                      <div className="bg-blue-600 text-white px-3 py-1.5 rounded-lg font-semibold">✓ Approve</div>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-px h-4 bg-gray-300" />
                      <span className="text-[10px] text-gray-400">NO</span>
                      <div className="bg-red-500 text-white px-3 py-1.5 rounded-lg font-semibold">✗ Reject</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
                <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3">Key Features of Decision Tree</p>
                <div className="space-y-2">
                  {["Easy to understand and visualize", "Requires minimal data preprocessing", "Works well with both categorical and numerical data"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={13} className="text-[#009fda] flex-shrink-0" />{item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── What is Random Forest ────────────── */}
            <section id="random-forest" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#ede9fe", color: "#7c3aed" }}>
                <Layers size={12} /> Algorithm 2
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">2. What is a Random Forest?</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                A <strong className="text-gray-800">Random Forest</strong> is an ensemble learning algorithm that builds multiple decision trees and combines their outputs to improve accuracy. Instead of relying on a single model, it uses multiple trees, random subsets of data (bagging), and random feature selection.
              </p>

              {/* How it works visual */}
              <div className="rounded-xl bg-purple-50 border border-purple-100 p-5 mb-5">
                <p className="text-xs font-bold text-[#7c3aed] uppercase tracking-wide mb-4">How Random Forest Works</p>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-4">
                  {["Tree 1\nSubset A", "Tree 2\nSubset B", "Tree 3\nSubset C", "Tree N\nSubset N"].map((t, i) => (
                    <div key={i} className="rounded-xl bg-white border border-purple-200 p-3 text-center">
                      <GitBranch size={16} className="text-[#7c3aed] mx-auto mb-1" />
                      <p className="text-[10px] font-bold text-purple-700 whitespace-pre-line">{t}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="flex-1 rounded-xl bg-white border border-purple-200 p-3 text-center">
                    <p className="text-xs font-bold text-[#7c3aed] mb-1">Classification</p>
                    <p className="text-[11px] text-gray-600">Majority vote from all trees</p>
                  </div>
                  <span className="text-purple-300 font-bold">OR</span>
                  <div className="flex-1 rounded-xl bg-white border border-purple-200 p-3 text-center">
                    <p className="text-xs font-bold text-[#7c3aed] mb-1">Regression</p>
                    <p className="text-[11px] text-gray-600">Average output of all trees</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
                <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3">Key Features of Random Forest</p>
                <div className="space-y-2">
                  {["Reduces overfitting significantly", "Delivers high accuracy on complex datasets", "Works well on large, high-dimensional datasets"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={13} className="text-[#7c3aed] flex-shrink-0" />{item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Key Differences Table ────────────── */}
            <section id="key-differences" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>
                <BarChart3 size={12} /> Comparison
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">3. Decision Tree vs Random Forest: Key Differences</h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6">A side-by-side comparison across all critical dimensions.</p>

              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th className="text-left px-4 py-3 font-bold text-gray-600 bg-gray-50 border-b border-gray-200 rounded-tl-2xl">Feature</th>
                      <th className="px-4 py-3 font-bold text-center bg-[#009fda] text-white border-b border-[#009fda]">Decision Tree</th>
                      <th className="px-4 py-3 font-bold text-center bg-[#7c3aed] text-white border-b border-[#7c3aed] rounded-tr-2xl">Random Forest</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Model Type", "Single model", "Ensemble of multiple trees"],
                      ["Accuracy", "Moderate", "High"],
                      ["Overfitting", "High risk", "Low risk"],
                      ["Interpretability", "High", "Low"],
                      ["Training Speed", "Fast", "Slower"],
                      ["Stability", "Low", "High"],
                      ["Scalability", "Limited", "Excellent"],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-3 font-semibold text-gray-800 border-r border-gray-100">{row[0]}</td>
                        <td className="px-4 py-3 text-center text-[#0369a1] font-medium">{row[1]}</td>
                        <td className="px-4 py-3 text-center text-[#7c3aed] font-medium">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Main Difference ──────────────────── */}
            <section id="main-difference" className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-[#013a81] border border-[#013a81] p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/70 mb-5">
                <Zap size={12} className="text-[#009fda]" /> Core Concept
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">4. What is the Main Difference?</h2>
              <p className="text-white/70 text-sm sm:text-base mb-7 max-w-xl">
                The main difference between Decision Tree and Random Forest lies in how predictions are made.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div className="rounded-2xl border border-[#009fda]/30 bg-[#009fda]/10 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <GitBranch size={18} className="text-[#009fda]" />
                    <h3 className="text-sm font-bold text-white">Decision Tree</h3>
                  </div>
                  <p className="text-sm text-blue-100 mb-3">Uses a <strong className="text-white">single model</strong> to make predictions based on learned rules applied step by step.</p>
                  <div className="rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-center">
                    <p className="text-xs font-bold text-[#009fda]">= One opinion</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-[#7c3aed]/40 bg-[#7c3aed]/10 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers size={18} className="text-[#a78bfa]" />
                    <h3 className="text-sm font-bold text-white">Random Forest</h3>
                  </div>
                  <p className="text-sm text-purple-100 mb-3">Combines predictions from <strong className="text-white">multiple decision trees</strong> to produce a more accurate and stable result.</p>
                  <div className="rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-center">
                    <p className="text-xs font-bold text-[#a78bfa]">= Crowd wisdom</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-white/10 border border-white/15 px-5 py-4 text-center">
                <p className="text-white text-sm sm:text-base font-semibold">
                  Decision Tree = <span className="text-[#009fda]">One opinion</span> &nbsp;|&nbsp; Random Forest = <span className="text-[#a78bfa]">Crowd wisdom</span>
                </p>
              </div>
            </section>

            {/* ── How RF Improves ──────────────────── */}
            <section id="how-rf-improves" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#ede9fe", color: "#7c3aed" }}>
                <TrendingUp size={12} /> Improvement
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">5. How Random Forest Improves Decision Trees</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Random Forest solves the biggest problem of decision trees: <strong className="text-gray-800">overfitting</strong>. It improves performance using two core techniques.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div className="rounded-2xl border border-[#009fda]/25 bg-[#009fda]/05 p-5">
                  <div className="w-10 h-10 rounded-xl bg-[#009fda]/15 text-[#009fda] flex items-center justify-center mb-3">
                    <Layers size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">Bagging (Bootstrap Sampling)</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Each tree is trained on a different random subset of the training data. This ensures no single tree dominates, and different trees learn from different patterns.</p>
                </div>
                <div className="rounded-2xl border border-[#7c3aed]/25 bg-[#7c3aed]/05 p-5">
                  <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/15 text-[#7c3aed] flex items-center justify-center mb-3">
                    <GitBranch size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">Feature Randomness</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">At each split, only a random subset of features is considered. This decorrelates the trees and prevents them all from making the same mistakes.</p>
                </div>
              </div>
              <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
                <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3">This Ensures</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: "Lower Variance", desc: "Predictions are more stable across different datasets", color: "#009fda" },
                    { label: "Better Generalization", desc: "The model performs well on new, unseen data", color: "#7c3aed" },
                    { label: "More Robust Predictions", desc: "Noise in data has less impact on final output", color: "#013a81" },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl border p-3 text-center" style={{ borderColor: `${item.color}25`, backgroundColor: `${item.color}08` }}>
                      <p className="text-xs font-bold mb-1" style={{ color: item.color }}>{item.label}</p>
                      <p className="text-[11px] text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── Performance Metrics ──────────────── */}
            <section id="performance" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>
                <BarChart3 size={12} /> Performance
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">6. Performance Metrics Comparison</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Classification */}
                <div className="rounded-xl bg-blue-50 border border-blue-100 p-5">
                  <p className="text-xs font-bold text-[#013a81] uppercase tracking-wide mb-4">For Classification Tasks</p>
                  <div className="space-y-3">
                    {[
                      { metric: "Accuracy", desc: "Overall correctness of predictions", color: "#009fda" },
                      { metric: "Precision", desc: "Correctness of positive predictions", color: "#6366f1" },
                      { metric: "Recall", desc: "Ability to capture all true positives", color: "#7c3aed" },
                      { metric: "F1 Score", desc: "Balance between precision and recall", color: "#0369a1" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-lg bg-white border border-blue-100 px-3 py-2.5">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5" style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.metric}</span>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Regression */}
                <div className="rounded-xl bg-purple-50 border border-purple-100 p-5">
                  <p className="text-xs font-bold text-[#7c3aed] uppercase tracking-wide mb-4">For Regression Tasks</p>
                  <div className="space-y-3">
                    {[
                      { metric: "MAE", desc: "Mean Absolute Error — average prediction error", color: "#7c3aed" },
                      { metric: "MSE", desc: "Mean Squared Error — penalizes large errors", color: "#6366f1" },
                      { metric: "R² Score", desc: "Model fit quality — how much variance is explained", color: "#009fda" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-lg bg-white border border-purple-100 px-3 py-2.5">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5" style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.metric}</span>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg bg-purple-100 border border-purple-200 px-3 py-2">
                    <p className="text-xs text-purple-800 font-medium">Random Forest generally performs better across all metrics due to reduced variance.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Use Cases (tab switcher) ─────────── */}
            <section id="use-cases" className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-purple-50 border border-purple-100 p-6 sm:p-8">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#7c3aed] mb-4">
                  <Target size={12} /> Use Cases
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">7. Real-World Use Cases</h2>
                <p className="text-gray-500 text-sm sm:text-base max-w-xl">Explore how each algorithm is used in real industry scenarios. Select a use case to see the full breakdown.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                  {USE_CASES.map((uc, i) => (
                    <UseCaseTab key={uc.id} uc={uc} active={activeTab === i} onClick={() => setActiveTab(i)} />
                  ))}
                </div>
                <div className="lg:col-span-2">
                  <div className="rounded-2xl bg-white border shadow-md p-5 sm:p-7 h-full transition-all duration-200" style={{ borderColor: active.color }}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: active.bg, color: active.color }}>{active.icon}</div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{active.title}</h3>
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white flex-shrink-0" style={{ backgroundColor: active.color }}>{active.algo}</span>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">{active.body}</p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">{active.detail}</p>
                    <div className="rounded-xl px-4 py-3.5" style={{ backgroundColor: active.bg }}>
                      <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: active.color }}>Example Rule / Feature Input</p>
                      <p className="text-sm font-mono italic" style={{ color: active.color }}>{active.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── When to Use ──────────────────────── */}
            <section id="when-to-use" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#e0e7ff", color: "#4338ca" }}>
                <CheckSquare size={12} /> Decision Guide
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">8. When to Use Decision Tree vs Random Forest</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-2xl border-2 border-[#009fda]/30 bg-[#009fda]/05 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#009fda] text-white flex items-center justify-center flex-shrink-0">
                      <GitBranch size={16} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Use Decision Tree when…</h3>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { text: "You need explainability and transparency", icon: <CheckCircle2 size={13} /> },
                      { text: "Dataset is small and well-structured", icon: <CheckCircle2 size={13} /> },
                      { text: "Fast training and inference is required", icon: <CheckCircle2 size={13} /> },
                      { text: "Regulatory compliance requires interpretable models", icon: <CheckCircle2 size={13} /> },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-[#009fda] flex-shrink-0 mt-0.5">{item.icon}</span>{item.text}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border-2 border-[#7c3aed]/30 bg-[#7c3aed]/05 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#7c3aed] text-white flex items-center justify-center flex-shrink-0">
                      <Layers size={16} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Use Random Forest when…</h3>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { text: "You need high accuracy on complex data", icon: <CheckCircle2 size={13} /> },
                      { text: "Data is noisy or contains many features", icon: <CheckCircle2 size={13} /> },
                      { text: "Overfitting is a concern", icon: <CheckCircle2 size={13} /> },
                      { text: "Dataset is large and high-dimensional", icon: <CheckCircle2 size={13} /> },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-[#7c3aed] flex-shrink-0 mt-0.5">{item.icon}</span>{item.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── Pros & Cons ──────────────────────── */}
            <section id="pros-cons" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>
                <BarChart3 size={12} /> Advantages &amp; Disadvantages
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">9. Advantages and Disadvantages</h2>
              <div className="space-y-3">
                <AccordionCard title="Decision Tree — Advantages" color="#009fda" index={0}>
                  <div className="space-y-2 mt-1">
                    {["Easy to interpret and visualize — anyone can follow the decision logic", "Fast to train, even on limited hardware", "Minimal preprocessing required — handles missing values and mixed types"].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-[#009fda] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </AccordionCard>
                <AccordionCard title="Decision Tree — Disadvantages" color="#ef4444" index={1}>
                  <div className="space-y-2 mt-1">
                    {["Prone to overfitting — learns training data too well and generalizes poorly", "Unstable — small changes in data can produce very different trees", "Limited accuracy compared to ensemble methods on complex problems"].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <XCircle size={13} className="text-red-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </AccordionCard>
                <AccordionCard title="Random Forest — Advantages" color="#7c3aed" index={2}>
                  <div className="space-y-2 mt-1">
                    {["High accuracy — consistently outperforms single trees on real-world datasets", "Robust to noise and outliers in the training data", "Handles large, high-dimensional datasets well without feature scaling"].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-[#7c3aed] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </AccordionCard>
                <AccordionCard title="Random Forest — Disadvantages" color="#b45309" index={3}>
                  <div className="space-y-2 mt-1">
                    {["Computationally expensive — training hundreds of trees requires more time and memory", "Hard to interpret — the ensemble prediction cannot be traced through a single path", "Slower inference compared to a single Decision Tree"].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <XCircle size={13} className="text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </AccordionCard>
              </div>
            </section>

            {/* ── Summary table ────────────────────── */}
            <section className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-[#009fda] to-[#7c3aed] px-5 py-3 flex items-center gap-2">
                <BarChart3 size={14} className="text-white" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">Quick Reference Summary</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-3 font-bold text-gray-600">Criteria</th>
                      <th className="px-4 py-3 font-bold text-center text-[#009fda]">Decision Tree</th>
                      <th className="px-4 py-3 font-bold text-center text-[#7c3aed]">Random Forest</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Need for interpretability", "✓ Best choice", "✗ Not ideal"],
                      ["High accuracy required", "✗ Limited", "✓ Best choice"],
                      ["Small dataset", "✓ Works well", "Works but overkill"],
                      ["Large complex dataset", "✗ May overfit", "✓ Best choice"],
                      ["Fast training needed", "✓ Very fast", "Slower"],
                      ["Regulatory explainability", "✓ Traceable", "✗ Black box"],
                      ["Noisy / complex data", "✗ Struggles", "✓ Robust"],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                        <td className="px-4 py-2.5 font-medium text-gray-700 border-r border-gray-100">{row[0]}</td>
                        <td className={`px-4 py-2.5 text-center text-xs font-semibold ${row[1].startsWith("✓") ? "text-[#009fda]" : "text-gray-400"}`}>{row[1]}</td>
                        <td className={`px-4 py-2.5 text-center text-xs font-semibold ${row[2].startsWith("✓") ? "text-[#7c3aed]" : "text-gray-400"}`}>{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Conclusion ───────────────────────── */}
            <section id="conclusion" className="rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#013a81] p-6 sm:p-8 text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                <BookOpen size={12} /> Conclusion
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">10. Conclusion</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/85 leading-relaxed mb-7">
                <p>
                  Choosing between Decision Tree and Random Forest depends on your specific problem and priorities. If interpretability and simplicity are important, a Decision Tree is a great starting point.
                </p>
                <p>
                  However, if your goal is higher accuracy and better performance on complex datasets, <strong className="text-white">Random Forest is the preferred choice</strong>.
                </p>
                <p className="font-semibold text-white">
                  For most real-world machine learning applications, Random Forest serves as a strong baseline model due to its balance of accuracy and robustness.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
                <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GitBranch size={14} className="text-[#009fda]" />
                    <p className="text-sm font-bold text-white">Decision Tree</p>
                  </div>
                  <p className="text-xs text-white/70">Best when you need explainability, fast results, or regulatory transparency. Ideal starting point for beginners.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers size={14} className="text-[#a78bfa]" />
                    <p className="text-sm font-bold text-white">Random Forest</p>
                  </div>
                  <p className="text-xs text-white/70">Best when accuracy matters most. Strong baseline for fraud detection, churn prediction, and demand forecasting.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/courses/data-science-and-ml-course" className="inline-flex items-center gap-2 rounded-xl bg-white text-[#013a81] font-bold text-sm px-5 py-2.5 hover:bg-purple-50 transition-colors shadow-sm">
                  Data Science &amp; ML Course <ArrowUpRight size={14} />
                </Link>
                <Link href="/courses/iit-data-science-course" className="inline-flex items-center gap-2 rounded-xl bg-white/20 border border-white/30 text-white font-bold text-sm px-5 py-2.5 hover:bg-white/30 transition-colors">
                  IIT Data Science Course <ArrowUpRight size={14} />
                </Link>
              </div>
            </section>

            {/* ── Back links ─────────────────────── */}
            <div className="flex flex-wrap gap-3 pb-4">
              <Link href="/aihelpcenter/machine-learning" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-[#7c3aed] hover:text-[#013a81] transition-all shadow-sm">
                ← Back to Machine Learning
              </Link>
              <Link href="/aihelpcenter" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-[#7c3aed] hover:text-[#013a81] transition-all shadow-sm">
                ← All Topics
              </Link>
            </div>

          </article>

          {/* ── RIGHT sidebar ──────────────────── */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* Roadmap */}
              <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-gray-200">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4 sm:mb-5">Roadmap</h4>
                <div className="flex flex-col gap-2.5">
                  {ROADMAP_SECTIONS.map((sec) => (
                    <button key={sec.id} onClick={() => scrollTo(sec.id)}
                      className={`text-left text-xs sm:text-sm font-bold transition-all border-l-4 pl-3 ${activeSection === sec.id ? "text-[#7c3aed] border-[#7c3aed]" : "text-gray-400 border-transparent hover:text-gray-600"}`}>
                      {sec.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Reference */}
              <div className="rounded-2xl bg-white p-4 sm:p-5 shadow-sm ring-1 ring-purple-100">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Quick Reference</h4>
                <div className="space-y-3">
                  <div className="rounded-xl bg-[#009fda]/08 border border-[#009fda]/20 p-3">
                    <p className="text-xs font-bold text-[#009fda] mb-1">Decision Tree</p>
                    <p className="text-[11px] text-gray-500">Simple · Fast · Interpretable · Overfits</p>
                  </div>
                  <div className="rounded-xl bg-[#7c3aed]/08 border border-[#7c3aed]/20 p-3">
                    <p className="text-xs font-bold text-[#7c3aed] mb-1">Random Forest</p>
                    <p className="text-[11px] text-gray-500">Accurate · Robust · Ensemble · Slower</p>
                  </div>
                  <div className="rounded-xl bg-amber-50 border border-amber-100 p-3">
                    <p className="text-xs font-bold text-amber-700 mb-1">Rule of Thumb</p>
                    <p className="text-[11px] text-amber-600">Start with Decision Tree, upgrade to Random Forest when accuracy matters more than interpretability.</p>
                  </div>
                </div>
              </div>

              {/* Authority Box */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 sm:p-5 rounded-2xl shadow-lg border border-purple-100">
                <div className="text-center mb-4">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg flex items-center justify-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-purple-600" />
                    Industry Authority
                  </h3>
                  <p className="text-gray-600 text-xs mt-1">Authored by Ivy Pro School founders</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-purple-200">
                          <Image src={PrateekAgarwal} alt="Prateek Agarwal" className="w-full h-full object-cover" width={56} height={56} loading="lazy" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-purple-600 rounded-full p-1">
                          <Star className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-sm truncate">Prateek Agarwal</h4>
                        <p className="text-gray-600 text-xs truncate">Founder, Ivy Pro School</p>
                        <div className="flex items-center gap-1 mt-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]" />
                          <span className="text-xs text-gray-500">20+ years as an AI/ML Leader</span>
                        </div>
                      </div>
                      <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 bg-purple-50 hover:bg-purple-100 p-2 rounded-lg transition-colors">
                        <LinkedInSVG className="h-5 w-5 text-purple-600" />
                      </a>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-gray-700 text-xs">Trained students from IIT KGP, IIM Kolkata, IIT Delhi</p>
                    </div>
                  </div>
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
                <div className="mt-4 pt-4 border-t border-purple-100">
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <div className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-purple-500" /><span>Industry Experts</span></div>
                    <div className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-purple-500" /><span>20+ Years Each</span></div>
                  </div>
                  <p className="text-xs text-center text-gray-500 mt-3 italic">All content reviewed by Ivy&apos;s expert faculty team</p>
                </div>
              </div>

              {/* Courses */}
              <div className="p-4 sm:p-5 rounded-3xl shadow-2xl text-white" style={{ background: "linear-gradient(135deg, #7c3aed, #013a81)" }}>
                <div className="text-center mb-5">
                  <h3 className="font-extrabold text-lg sm:text-xl leading-tight">Advanced Courses</h3>
                  <p className="text-purple-100 text-[11px] opacity-70 mt-1">Fast-track your career with Ivy.</p>
                </div>
                <div className="flex flex-col gap-2">
                  {COURSES.map((course, i) => (
                    <a key={i} href={course.link} className="group flex items-center justify-between w-full p-2 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-8 flex-shrink-0 flex items-center justify-center overflow-hidden">
                          <Image loading="lazy" src={ivy} alt="Ivy Logo" className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <span className="text-[12px] font-bold leading-tight text-white group-hover:text-[#3b0764] transition-colors duration-300 truncate">{course.name}</span>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:text-[#3b0764] transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
