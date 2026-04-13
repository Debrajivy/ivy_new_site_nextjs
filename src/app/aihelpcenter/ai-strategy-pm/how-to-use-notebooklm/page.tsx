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
  Mic,
  Video,
  Map,
  FileText,
  CreditCard,
  HelpCircle,
  BarChart2,
  Presentation,
  Table2,
  StickyNote,
  AlertCircle,
  Search,
  Users,
  Layers,
  CheckSquare,
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
  { id: "what-is", title: "What is NotebookLM" },
  { id: "pricing", title: "Pricing and Plans" },
  { id: "get-started", title: "How to Get Started" },
  { id: "features", title: "Key Features & Use Cases" },
  { id: "limitations", title: "Limitations" },
  { id: "best-practices", title: "Best Practices" },
  { id: "alternatives", title: "NotebookLM Alternatives" },
  { id: "worth-it", title: "Is NotebookLM Worth It?" },
];

/* ─── features tab data ──────────────────────────── */
const FEATURES = [
  {
    id: "web-research",
    icon: <Search size={20} />,
    label: "Web Research",
    color: "#009fda",
    bg: "#e0f2fe",
    title: "Web Search and Deep Research",
    body: `NotebookLM can combine your uploaded sources with research support to help you explore a topic more deeply. Fast Research is useful when you want quick, relevant references, while Deep Research is better when you need a more thorough, structured summary.`,
    detail: `For a student working on a capstone project, this means you can quickly check whether your lecture notes and papers align with current information before writing your final report. Deep Research produces a fully structured document with source-grounded insights.`,
    example: `"Search for recent developments on this topic and compare them against the findings in my uploaded research papers."`,
  },
  {
    id: "audio",
    icon: <Mic size={20} />,
    label: "Audio Overview",
    color: "#6366f1",
    bg: "#e0e7ff",
    title: "Audio Overview",
    body: `Audio Overview turns your sources into an audio-style conversation that feels closer to a podcast than a plain summary. This is useful when you want to review content without reading line by line.`,
    detail: `A student could convert research documents into an audio recap and listen while commuting or revising for class. Google notes that Audio Overviews can be downloaded for offline playback in the mobile app — making it genuinely portable.`,
    example: `"Create an audio overview of my uploaded documents in a conversational, easy-to-follow format."`,
  },
  {
    id: "video",
    icon: <Video size={20} />,
    label: "Video Overview",
    color: "#7c3aed",
    bg: "#ede9fe",
    title: "Video Overview",
    body: `Video Overview creates a visual explanation of your material and generates it in the background, so you can continue working while it is being prepared. This makes it useful for presenting key ideas in a more engaging format.`,
    detail: `A student could turn a project report into a short explainer video for a classroom presentation or supervisor review. Google confirms that Video Overviews can be customized before generation, giving you control over the final output.`,
    example: `"Generate a video overview of my project report that I can use for a 5-minute classroom presentation."`,
  },
  {
    id: "mindmaps",
    icon: <Map size={20} />,
    label: "Mind Maps",
    color: "#0369a1",
    bg: "#dbeafe",
    title: "Mind Maps",
    body: `Mind Maps help you organize information visually by showing how ideas connect to one another. Instead of reading scattered notes, you can see topics, subtopics, and relationships in a more structured, visual way.`,
    detail: `A student could map the project into sections such as background, research question, findings, and conclusion — making the project easier to plan and explain to others. NotebookLM surfaces Mind Maps as a built-in Studio feature that updates as you add more sources.`,
    example: `"Create a mind map that organizes my research into main themes, subtopics, and supporting evidence."`,
  },
  {
    id: "reports",
    icon: <FileText size={20} />,
    label: "Reports",
    color: "#b45309",
    bg: "#fef3c7",
    title: "Reports",
    body: `Reports are one of NotebookLM's most useful outputs because they transform source material into structured written formats. You can create your own report or choose from formats like FAQ, study guide, briefing document, or an AI-suggested type.`,
    detail: `For a professional, this could mean turning meeting notes and market research into a polished briefing document. If the report includes data tables, NotebookLM can export them to Google Sheets with citations separated into their own tab for easy reference.`,
    example: `"Create a structured briefing document from my uploaded sources with an executive summary, key findings, and recommendations."`,
  },
  {
    id: "flashcards",
    icon: <CreditCard size={20} />,
    label: "Flashcards",
    color: "#009fda",
    bg: "#e0f2fe",
    title: "Flashcards",
    body: `Flashcards are designed to help you study and remember important information from your sources. NotebookLM turns key facts into quick review cards, which is especially helpful when you need to memorize definitions, concepts, timelines, or comparisons.`,
    detail: `A student could create flashcards from research notes to revise major theories, project methods, and key conclusions before a viva or presentation. Google also confirms that flashcards can be customized before generation and are created in the background.`,
    example: `"Generate flashcards from my study materials covering all key terms, definitions, and main concepts."`,
  },
  {
    id: "quizzes",
    icon: <HelpCircle size={20} />,
    label: "Quizzes",
    color: "#6366f1",
    bg: "#e0e7ff",
    title: "Quizzes",
    body: `Quizzes work similarly to flashcards but are better for testing understanding. Instead of simple recall, quizzes help you check whether you actually understand the material at a deeper level.`,
    detail: `NotebookLM could generate a short quiz from project documents so a student can practice answering likely questions before presenting to a class or mentor. Google's documentation confirms that quizzes can be customized and are generated in the background.`,
    example: `"Create a 10-question quiz from my uploaded documents to test my understanding of the main concepts."`,
  },
  {
    id: "infographics",
    icon: <BarChart2 size={20} />,
    label: "Infographics",
    color: "#7c3aed",
    bg: "#ede9fe",
    title: "Infographics",
    body: `Infographics are useful when you want to present information in a visual, easy-to-scan format. You can rename an infographic, download it as a PNG, share it, or delete it, and you can also view the custom prompt used to generate it.`,
    detail: `An infographic could turn a long research project into a clean visual summary showing the problem statement, findings, and final recommendation in one glance — ideal for sharing with non-technical stakeholders or including in a report appendix.`,
    example: `"Create an infographic summarizing the key findings and recommendations from my research documents."`,
  },
  {
    id: "slides",
    icon: <Presentation size={20} />,
    label: "Slide Decks",
    color: "#0369a1",
    bg: "#dbeafe",
    title: "Slide Decks",
    body: `Slide Decks are one of the most practical features for presentations. NotebookLM can generate a deck in the background and lets you customize it before generation by choosing formats such as a Detailed Deck, which is meant for reading or emailing on its own.`,
    detail: `Lecture notes, reports, and interview transcripts can be turned into a ready-to-edit presentation draft without starting from scratch. This is especially valuable for professionals who regularly need to present research findings to clients or leadership.`,
    example: `"Generate a 12-slide presentation deck from my research notes, structured with an intro, key sections, and a clear conclusion."`,
  },
  {
    id: "datatables",
    icon: <Table2 size={20} />,
    label: "Data Tables",
    color: "#b45309",
    bg: "#fef3c7",
    title: "Data Tables",
    body: `Data Tables help convert unstructured content into a neat table format. You can generate one directly or customize it by selecting the pencil icon, choosing a language, or describing the rows and columns you want.`,
    detail: `A data table could organize research sources, author names, findings, themes, and supporting evidence into a single view — ideal for literature reviews or competitive analysis. NotebookLM also lets you export the table to Google Sheets with citations in a separate tab.`,
    example: `"Create a data table comparing all my sources by author, methodology, key findings, and relevance to my research question."`,
  },
  {
    id: "notes",
    icon: <StickyNote size={20} />,
    label: "Notes",
    color: "#009fda",
    bg: "#e0f2fe",
    title: "Notes",
    body: `NotebookLM supports notes for capturing key insights, interpretations, and personal thoughts while working through your sources. You can write a new note or save a response from chat into notes — a notebook can hold up to 1,000 notes.`,
    detail: `You can store important observations from each source and later convert those notes back into source material if needed. NotebookLM also provides quick actions for turning selected notes into outlines, study guides, summaries, or idea prompts.`,
    example: `"Save this insight as a note and generate a structured outline based on all my saved notes so far."`,
  },
];

/* ─── best practices ─────────────────────────────── */
const BEST_PRACTICES = [
  {
    icon: <Target size={18} />,
    color: "#009fda",
    title: "Keep Notebooks Focused on a Single Topic",
    body: `Avoid mixing unrelated topics within a single notebook. When notebooks contain documents from multiple unrelated projects, the AI has a harder time generating precise, relevant responses. One notebook per project or topic area ensures much better results.`,
  },
  {
    icon: <CheckSquare size={18} />,
    color: "#6366f1",
    title: "Be Selective With Your Sources",
    body: `Upload only relevant and high-quality documents to ensure better outputs. NotebookLM's quality is directly tied to your input — uploading poorly structured, incomplete, or off-topic files will reduce the accuracy and usefulness of every response.`,
  },
  {
    icon: <ShieldCheck size={18} />,
    color: "#7c3aed",
    title: "Verify Responses Using Citations",
    body: `Regularly verify the responses using the citations provided by the tool. NotebookLM grounds its answers in your sources and provides references, so take the time to cross-check key outputs — especially before including them in formal reports or presentations.`,
  },
  {
    icon: <Layers size={18} />,
    color: "#0369a1",
    title: "Experiment With Different Output Formats",
    body: `The same data can be used to create reports, slides, summaries, audio overviews, or visual content depending on your needs. Do not limit yourself to one format — different outputs are better suited for different audiences and contexts.`,
  },
  {
    icon: <Brain size={18} />,
    color: "#b45309",
    title: "Treat NotebookLM as a Thinking Partner",
    body: `The more structured and intentional your inputs are, the better the results will be. Provide clear instructions, well-organized source documents, and specific questions to get the highest-quality outputs. NotebookLM works best when you bring a clear purpose.`,
  },
];

/* ─── alternatives data ──────────────────────────── */
const ALTERNATIVES = [
  {
    name: "Perplexity",
    color: "#009fda",
    bg: "#e0f2fe",
    best: "Real-time web research",
    desc: "Strong option for real-time web research and getting quick, well-sourced answers from live internet content.",
  },
  {
    name: "Elicit",
    color: "#6366f1",
    bg: "#e0e7ff",
    best: "Academic research",
    desc: "Particularly useful for academic and research-focused tasks — finds and summarizes peer-reviewed papers effectively.",
  },
  {
    name: "You.com",
    color: "#7c3aed",
    bg: "#ede9fe",
    best: "Enterprise search",
    desc: "Offers enterprise-level search capabilities with enhanced data privacy controls for organizational use.",
  },
  {
    name: "ChatGPT",
    color: "#0369a1",
    bg: "#dbeafe",
    best: "Creative & coding tasks",
    desc: "Provides flexibility for creative tasks, coding, broad AI applications, and open-ended workflows beyond document analysis.",
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

/* ─── accordion ──────────────────────────────────── */
const PracticeCard = ({ item, index }: { item: typeof BEST_PRACTICES[0]; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl border bg-white shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      style={{ borderColor: open ? item.color : "#e5e7eb" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center gap-4 px-5 py-4">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${item.color}18`, color: item.color }}>
          {item.icon}
        </div>
        <div className="flex-1 flex items-center gap-2">
          <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${item.color}18`, color: item.color }}>#{index + 1}</span>
          <h3 className="text-sm sm:text-base font-bold text-gray-900">{item.title}</h3>
        </div>
        <ChevronDown size={16} className="text-gray-400 transition-transform duration-200 flex-shrink-0" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
      </div>
      <div className="overflow-hidden transition-all duration-300 px-5" style={{ maxHeight: open ? "200px" : "0px", paddingBottom: open ? "16px" : "0px" }}>
        <p className="text-sm text-gray-600 leading-relaxed border-t pt-3" style={{ borderColor: `${item.color}30` }}>{item.body}</p>
      </div>
    </div>
  );
};

/* ─── feature tab button ─────────────────────────── */
const FeatureTab = ({ feat, active, onClick }: { feat: typeof FEATURES[0]; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 w-full text-left"
    style={{
      backgroundColor: active ? feat.color : "transparent",
      color: active ? "#fff" : "#6b7280",
      border: `1.5px solid ${active ? feat.color : "#e5e7eb"}`,
    }}
  >
    <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: active ? "rgba(255,255,255,0.2)" : feat.bg, color: feat.color }}>
      {feat.icon}
    </span>
    {feat.label}
  </button>
);

/* ─── main page ──────────────────────────────────── */
export default function NotebookLMPage() {
  const [activeTab, setActiveTab] = useState(0);
  const active = FEATURES[activeTab];

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

      {/* ── Scroll Progress Bar ─────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
        <div className="h-full transition-all duration-300" style={{ width: `${scrollProgress}%`, background: "linear-gradient(90deg, #009fda, #013a81)" }} />
      </div>

      {/* ── Floating Review Prompt ──────────────── */}
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
              <button onClick={openReviewPage} className="flex-1 text-white font-bold py-2 sm:py-3 rounded-lg sm:rounded-xl hover:opacity-90 transition-opacity text-sm bg-gradient-to-r from-[#009fda] to-blue-700">
                Write a Review
              </button>
              <button onClick={() => setShowReviewPrompt(false)} className="px-3 sm:px-4 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm">
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Breadcrumb ──────────────────────────── */}
      <div className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
          <Link href="/aihelpcenter" className="hover:text-[#013a81] transition-colors">AI Help Center</Link>
          <ChevronRight size={12} />
          <Link href="/aihelpcenter/ai-strategy-pm" className="hover:text-[#013a81] transition-colors">AI Strategy (PM)</Link>
          <ChevronRight size={12} />
          <span className="text-gray-800 font-medium">How to Use NotebookLM</span>
        </div>
      </div>

      {/* ── Hero ────────────────────────────────── */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#009fda] via-[#6366f1] to-[#013a81]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* left text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#013a81] uppercase tracking-wider mb-5">
              <Brain size={12} className="text-[#009fda]" />
              AI Strategy (PM) · NotebookLM Guide
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
              How to Use{" "}
              <span className="bg-gradient-to-r from-[#009fda] to-[#013a81] bg-clip-text text-transparent">
                NotebookLM
              </span>
              : Complete Guide to Features, Pricing &amp; Best Practices
            </h1>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-7">
              Google&apos;s AI-powered research tool — learn how to use NotebookLM for document analysis, audio overviews, slide decks, mind maps, and more. Everything from free plan to enterprise in one guide.
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

          {/* right — notebook visual */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              <div className="bg-[#013a81] px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-[#009fda]" />
                </div>
                <span className="text-white text-xs font-semibold ml-2">NotebookLM — Research Workspace</span>
              </div>
              <div className="p-5 space-y-3">
                <div className="rounded-xl bg-blue-50 border border-blue-100 px-4 py-3">
                  <p className="text-[10px] font-bold text-[#013a81] uppercase tracking-wide mb-1">Notebook: Q2 Market Research</p>
                  <p className="text-xs text-blue-700">4 sources · 3 notes · Last updated 2 hours ago</p>
                </div>
                {[
                  { icon: <FileText size={12} />, label: "Industry Report 2026.pdf", type: "PDF" },
                  { icon: <StickyNote size={12} />, label: "Customer Interview Notes.docx", type: "DOC" },
                  { icon: <BarChart2 size={12} />, label: "Competitor Analysis.xlsx", type: "XLS" },
                  { icon: <Search size={12} />, label: "Market Trends Transcript.txt", type: "TXT" },
                ].map((src, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2">
                    <div className="w-6 h-6 rounded bg-[#009fda]/15 text-[#009fda] flex items-center justify-center flex-shrink-0">{src.icon}</div>
                    <span className="text-xs text-gray-700 flex-1 truncate">{src.label}</span>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gray-200 text-gray-500">{src.type}</span>
                  </div>
                ))}
                <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#009fda] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star size={12} className="text-white" />
                  </div>
                  <p className="text-[10px] text-[#013a81] leading-snug">
                    <strong>NotebookLM:</strong> I found 3 major trends across your sources. Shall I generate a structured report, a slide deck, or an audio overview?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Authority Strip ──────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-0">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl px-4 sm:px-5 py-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-blue-600 flex-shrink-0" />
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wide">Authored by Ivy Pro School Founders</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src={PrateekAgarwal} alt="Prateek Agarwal" width={28} height={28} className="rounded-full object-cover flex-shrink-0 border border-blue-200" />
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold text-gray-900">Prateek Agarwal</span>
              <span className="text-xs text-gray-500"> · 20+ yrs AI/ML Leader</span>
              <a href="https://www.linkedin.com/in/prateekagrawal" target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-600 hover:text-blue-800">
                <LinkedInSVG className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main grid ────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-8 lg:gap-10 lg:grid-cols-4">

          {/* ── LEFT: article ──────────────────── */}
          <article className="lg:col-span-3 space-y-6">

            {/* Table of Contents */}
            <div className="rounded-2xl bg-white border border-blue-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-[#009fda] to-[#013a81] px-5 py-3 flex items-center gap-2">
                <BookOpen size={14} className="text-white" />
                <span className="text-sm font-bold text-white uppercase tracking-widest">Table of Contents</span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-1">
                {ROADMAP_SECTIONS.map((item, i) => (
                  <button key={item.id} onClick={() => scrollTo(item.id)} className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-blue-50 transition-colors text-left w-full">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#013a81] flex items-center justify-center text-[10px] font-bold flex-shrink-0 group-hover:bg-[#009fda] group-hover:text-white transition-colors">{i + 1}</span>
                    <span className="text-sm text-gray-600 group-hover:text-[#013a81] transition-colors font-medium">{item.title}</span>
                    <ArrowRight size={12} className="text-[#009fda] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>

            {/* ── 1. What is NotebookLM ────────────── */}
            <section id="what-is" className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#009fda] to-[#013a81]" />
              <div className="p-6 sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>
                  <Brain size={12} /> Overview
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What is NotebookLM?</h2>
                <p className="text-base sm:text-lg border-l-4 border-[#009fda] pl-4 italic text-gray-700 mb-5">
                  &ldquo;Unlike traditional AI tools that rely on general internet knowledge, NotebookLM is designed to generate responses based entirely on the documents you upload.&rdquo;
                </p>
                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    NotebookLM is an AI-powered research and knowledge management tool developed by Google that helps you work with your own data more effectively. Every answer is grounded in your sources — often supported by citations — which significantly reduces the risk of hallucinated or irrelevant outputs.
                  </p>
                  <p>
                    In practical terms, NotebookLM acts like a smart assistant that reads, understands, and connects your documents. Whether you are working with reports, study materials, meeting notes, or research papers, it helps you extract insights, summarize information, and create structured outputs in a fraction of the time.
                  </p>
                </div>
                <div className="mt-6 rounded-xl bg-blue-50 border border-blue-100 p-5">
                  <p className="text-xs font-bold text-[#013a81] uppercase tracking-wide mb-3">For example, if you upload business reports, customer feedback, and internal notes, NotebookLM can:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["Identify key trends and patterns", "Generate concise summaries", "Answer specific questions", "Create presentations or reports"].map((item, i) => (
                      <div key={i} className="flex flex-col items-center gap-2 rounded-xl bg-white border border-blue-100 p-3 text-center shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-[#009fda] text-white flex items-center justify-center text-xs font-bold">{i + 1}</div>
                        <p className="text-xs text-[#013a81] font-medium leading-snug">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Best Suited For</p>
                    <ul className="space-y-1.5">
                      {["Professionals", "Students", "Researchers", "Teams with large volumes of information"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 size={12} className="text-[#009fda] flex-shrink-0" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-4">
                    <p className="text-xs font-bold text-indigo-700 uppercase tracking-wide mb-2">Key Advantage</p>
                    <p className="text-sm text-indigo-800 leading-relaxed">Responses are grounded in <strong>your specific documents</strong> with citations — far more reliable than general AI tools for analysis and reporting tasks.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ── 2. Pricing ───────────────────────── */}
            <section id="pricing" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#e0e7ff", color: "#4338ca" }}>
                <Zap size={12} /> Pricing
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">NotebookLM Pricing and Plans</h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6">
                NotebookLM offers multiple pricing tiers from free to enterprise. The free version is sufficient for basic use, but advanced users benefit from higher limits and additional features.
              </p>

              {/* Pricing table */}
              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#013a81] text-white">
                      <th className="text-left px-4 py-3 font-bold rounded-tl-2xl">Feature</th>
                      <th className="px-4 py-3 font-bold text-center">Free</th>
                      <th className="px-4 py-3 font-bold text-center">AI Plus</th>
                      <th className="px-4 py-3 font-bold text-center">AI Pro</th>
                      <th className="px-4 py-3 font-bold text-center rounded-tr-2xl">AI Ultra</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Price (approx.)", "$0", "$7.99/mo", "$19.99/mo", "$249.99/mo"],
                      ["Max Notebooks", "100", "500", "500", "1,000+"],
                      ["Sources per Notebook", "50", "100", "300", "600"],
                      ["Daily Chat Queries", "50", "100 (2×)", "500 (5×)", "5,000 (50×)"],
                      ["Audio/Video Overviews", "3/day", "~6/day", "20/day", "200/day"],
                      ["Deep Research Reports", "10/month", "20/month", "20/month", "100+/month"],
                      ["Gemini Model Access", "Standard", "Standard", "Advanced", "Ultra"],
                      ["Customization", "Standard", "Early access", "Custom styles", "Highest priority"],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50/40"}>
                        <td className="px-4 py-3 font-semibold text-gray-800 border-r border-gray-100">{row[0]}</td>
                        <td className="px-4 py-3 text-center text-gray-600">{row[1]}</td>
                        <td className="px-4 py-3 text-center text-gray-600">{row[2]}</td>
                        <td className="px-4 py-3 text-center text-[#009fda] font-semibold">{row[3]}</td>
                        <td className="px-4 py-3 text-center text-[#013a81] font-bold">{row[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 rounded-xl bg-blue-50 border border-blue-100 p-4">
                <p className="text-xs font-bold text-[#013a81] uppercase tracking-wide mb-3">Upgrading becomes valuable when you:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {["Manage multiple projects or notebooks simultaneously", "Rely heavily on daily queries and AI-generated outputs", "Need advanced models for better reasoning and quality", "Frequently create audio summaries, videos, or reports"].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#013a81]">
                      <CheckCircle2 size={12} className="text-[#009fda] flex-shrink-0 mt-0.5" />{item}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 3. Get Started ───────────────────── */}
            <section id="get-started" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>
                <Search size={12} /> Getting Started
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How to Get Started with NotebookLM</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Getting started is straightforward, but using it effectively requires a structured approach. Follow these steps to set up your first notebook and begin generating insights.
              </p>
              <div className="relative">
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#009fda] to-blue-300 hidden sm:block" />
                <div className="space-y-4">
                  {[
                    { title: "Create a Notebook", desc: "A notebook acts as a workspace where all related documents are grouped together. Keep each notebook focused on a single topic or project to maintain clarity and accuracy." },
                    { title: "Upload Your Sources", desc: "Upload PDFs, documents, notes, transcripts, or any relevant files. Start with a small set of high-quality documents rather than uploading everything at once — this helps generate more accurate insights." },
                    { title: "Start Interacting with the AI", desc: "Ask questions, request summaries, or instruct it to generate specific outputs such as reports or presentations. Example: \"Summarize the key insights from these documents.\"" },
                    { title: "Explore Output Formats", desc: "Try different Studio outputs — audio overviews, slide decks, mind maps, flashcards, and infographics — depending on your goal and audience." },
                    { title: "Enrich Over Time", desc: "Continue adding more sources as your project progresses. Additional context improves the depth and accuracy of the analysis." },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-5 items-start pl-0 sm:pl-3">
                      <div className="w-9 h-9 rounded-full bg-[#009fda] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 z-10 shadow-md">{i + 1}</div>
                      <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-indigo-50 border border-indigo-100 p-4">
                <p className="text-xs font-bold text-indigo-700 uppercase tracking-wide mb-2">Example starter prompts</p>
                <div className="space-y-2">
                  {[
                    "Summarize the key insights from these documents",
                    "Highlight major trends and patterns",
                    "Create a structured report based on this data",
                  ].map((prompt, i) => (
                    <div key={i} className="rounded-lg bg-white border border-indigo-100 px-3 py-2 font-mono text-xs text-indigo-700 italic">
                      &ldquo;{prompt}&rdquo;
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ── 4. Key Features (tab switcher) ──── */}
            <section id="features" className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 p-6 sm:p-8">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#013a81] mb-4">
                  <Zap size={12} /> Key Features
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Key Features and Real-World Use Cases</h2>
                <p className="text-gray-500 text-sm sm:text-base max-w-xl">
                  NotebookLM stands out because of its ability to transform raw information into structured, usable outputs. Select each feature to explore details and example prompts.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* tab list — scrollable on mobile, column on desktop */}
                <div className="lg:col-span-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                  {FEATURES.map((feat, i) => (
                    <FeatureTab key={feat.id} feat={feat} active={activeTab === i} onClick={() => setActiveTab(i)} />
                  ))}
                </div>
                {/* detail panel */}
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
                  </div>
                </div>
              </div>
            </section>

            {/* ── 5. Limitations ───────────────────── */}
            <section id="limitations" className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-[#013a81] border border-[#013a81] p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/70 mb-5">
                <AlertCircle size={12} className="text-[#009fda]" /> Limitations
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Limitations of NotebookLM</h2>
              <p className="text-white/70 text-sm sm:text-base mb-7 max-w-xl">
                Despite its strengths, NotebookLM is not without limitations. Understanding these helps you use it more effectively and set the right expectations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Source Quality Dependency", desc: "The tool is heavily dependent on the quality of sources you provide. If input data is incomplete or poorly structured, outputs may also lack clarity or accuracy.", icon: <FileText size={16} /> },
                  { title: "Not for Open-Ended Tasks", desc: "NotebookLM is not designed for highly creative or open-ended tasks. It performs best when working within the defined boundaries set by your documents.", icon: <Brain size={16} /> },
                  { title: "Limited External Integrations", desc: "Compared to more flexible AI platforms, NotebookLM offers fewer options for connecting with external tools or modifying outputs extensively.", icon: <Layers size={16} /> },
                  { title: "Feature Variation Across Devices", desc: "Some features may vary across devices — certain capabilities are more developed on web platforms than on mobile, which can limit flexibility.", icon: <Users size={16} /> },
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
                  <strong className="text-white">Key reminder:</strong> It is important to use NotebookLM as an assistant, not a complete replacement for human judgment. Always review critical outputs before using them in formal presentations or decisions.
                </p>
              </div>
            </section>

            {/* ── 6. Best Practices ────────────────── */}
            <section id="best-practices" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#e0e7ff", color: "#4338ca" }}>
                <Target size={12} /> Best Practices
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Best Practices to Use NotebookLM Effectively</h2>
              <p className="text-gray-500 text-sm sm:text-base mb-7 max-w-2xl">
                To get the most out of NotebookLM, follow these key practices. Click each to expand details.
              </p>
              <div className="space-y-3">
                {BEST_PRACTICES.map((item, i) => (
                  <PracticeCard key={i} item={item} index={i} />
                ))}
              </div>
            </section>

            {/* ── 7. Alternatives ──────────────────── */}
            <section id="alternatives" className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}>
                <Layers size={12} /> Alternatives
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">NotebookLM Alternatives</h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-2xl">
                While NotebookLM excels in source-based analysis, other tools may be better suited for different use cases. Choosing the right tool depends on your specific workflow.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ALTERNATIVES.map((alt, i) => (
                  <div key={i} className="rounded-2xl border p-5 hover:shadow-md transition-shadow" style={{ borderColor: `${alt.color}25`, backgroundColor: `${alt.color}08` }}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-base font-bold text-gray-900">{alt.name}</h3>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: alt.bg, color: alt.color }}>{alt.best}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{alt.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-blue-50 border border-blue-100 p-4">
                <p className="text-sm text-[#013a81]">
                  <strong>NotebookLM remains one of the best options</strong> when accuracy and source grounding are critical — particularly for professionals who work with specific documents, research materials, and structured data.
                </p>
              </div>
            </section>

            {/* ── 8. Worth It ──────────────────────── */}
            <section id="worth-it" className="rounded-2xl bg-gradient-to-br from-[#009fda] to-[#013a81] p-6 sm:p-8 text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                <Star size={12} /> Verdict
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Is NotebookLM Worth It in 2026?</h2>
              <div className="space-y-4 text-sm sm:text-base text-white/85 leading-relaxed mb-7">
                <p>
                  NotebookLM remains a highly valuable AI tool in 2026, especially for users who work with documents, research materials, and structured data. Its biggest advantage lies in generating responses directly from your uploaded sources with citations — making it far more reliable than general AI tools for analysis and reporting tasks.
                </p>
                <p>
                  With features like audio and video overviews, slide decks, infographics, and data tables, it allows users to transform information into multiple formats without switching platforms.
                </p>
                <p className="font-semibold text-white">
                  However, it is best suited for focused, document-based workflows rather than open-ended creativity or real-time web exploration. Overall, if your work involves summarizing, analyzing, or presenting information from your own data, NotebookLM is definitely worth using in 2026.
                </p>
              </div>
              {/* Quick verdict grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
                <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={16} className="text-[#009fda]" />
                    <p className="text-sm font-bold text-white">Use NotebookLM if you…</p>
                  </div>
                  <ul className="space-y-1.5">
                    {["Work with your own documents regularly", "Need cited, source-grounded answers", "Want multi-format output (audio, slides, maps)", "Manage large volumes of research or reports"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#009fda] flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle size={16} className="text-amber-300" />
                    <p className="text-sm font-bold text-white">Consider alternatives if you…</p>
                  </div>
                  <ul className="space-y-1.5">
                    {["Need real-time web search results", "Do creative writing or coding tasks", "Require deep external tool integrations", "Work primarily with open-ended prompts"].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-300 flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/courses/iit-generative-ai-course" className="inline-flex items-center gap-2 rounded-xl bg-white text-[#013a81] font-bold text-sm px-5 py-2.5 hover:bg-blue-50 transition-colors shadow-sm">
                  Generative AI Course <ArrowUpRight size={14} />
                </Link>
                <a href="https://ivyproschool.com/bootcampregister" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/20 border border-white/30 text-white font-bold text-sm px-5 py-2.5 hover:bg-white/30 transition-colors">
                  Live AI Workshop <ArrowUpRight size={14} />
                </a>
              </div>
            </section>

            {/* ── Back links ─────────────────────── */}
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
