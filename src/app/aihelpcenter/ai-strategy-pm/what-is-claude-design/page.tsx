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
  Video,
  Layers,
  FileText,
  Users,
  AlertCircle,
  Presentation,
  Smartphone,
  Globe,
  Cpu,
  Palette,
  Share2,
  Download,
  TrendingUp,
  TrendingDown,
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
  { id: "what-is", title: "What Is Claude Design" },
  { id: "how-it-works", title: "How It Works" },
  { id: "use-cases", title: "Six Real Use Cases" },
  { id: "competitive", title: "Competitive Landscape" },
  { id: "adoption", title: "Adoption by Role" },
  { id: "professional-dev", title: "Professional Development" },
  { id: "getting-started", title: "Getting Started" },
];

const USE_CASES = [
  {
    id: "animated-videos",
    icon: <Video size={20} />,
    label: "Animated Videos",
    color: "#009fda",
    bg: "#ede9fe",
    title: "Animated Videos from Text",
    body: `Paste any text or announcement into Claude Design and receive a fully animated video in minutes. The output includes configurable aspect ratios, adjustable tone, and optional captions. Because the video is code, individual elements — colour palette, timing, font choices — can be adjusted without regenerating the entire piece.`,
    detail: `This workflow previously required hours of work in tools like After Effects or CapCut. Claude Design reduces a multi-hour production task to a few minutes of conversational iteration. Marketers and educators benefit most from this immediate time compression.`,
    who: "Marketers, Educators",
    timeSaved: "Hours → Minutes",
  },
  {
    id: "pitch-decks",
    icon: <Presentation size={20} />,
    label: "Pitch Decks",
    color: "#013a81",
    bg: "#e0e7ff",
    title: "Pitch Decks & Slide Presentations",
    body: `Claude Design produces complete, on-brand decks from a rough outline. The recommended workflow is to iterate on copy using regular Claude first, then bring polished text into Claude Design for visual treatment.`,
    detail: `The result can be exported as PPTX, sent directly to Canva, or shared as an internal link. For founders preparing investor meetings, this collapses a multi-day process to under an hour — a decisive advantage in fast-moving fundraising situations.`,
    who: "Founders, Sales Executives",
    timeSaved: "Days → 30 minutes",
  },
  {
    id: "landing-pages",
    icon: <Globe size={20} />,
    label: "Landing Pages",
    color: "#0369a1",
    bg: "#dbeafe",
    title: "Landing Pages & Web Collateral",
    body: `The web capture tool allows Claude Design to grab elements directly from a live website, so prototype landing pages look like the real product from day one. No Webflow or coding skills required.`,
    detail: `Marketers can create a complete first version, loop in designers for polish, and hand off to engineering — all within a single platform. The feedback loop between concept and publishable mockup compresses from days to under an hour.`,
    who: "Marketers, PMs",
    timeSaved: "Days → 1 hour",
  },
  {
    id: "prototypes",
    icon: <Layers size={20} />,
    label: "Interactive Prototypes",
    color: "#009fda",
    bg: "#ede9fe",
    title: "Interactive Prototypes",
    body: `Build click-through prototypes without writing a single line of code. Claude Design generates interactive UI flows that can be shared with a link, enabling stakeholder feedback before any engineering investment.`,
    detail: `For designers and product managers, this dramatically accelerates the discovery and validation cycle. Exploring ten directions instead of two is now realistic within a single afternoon — a fundamental change to how product decisions get made.`,
    who: "Designers, PMs",
    timeSaved: "Days → Hours",
  },
  {
    id: "mobile-apps",
    icon: <Smartphone size={20} />,
    label: "Mobile App Mockups",
    color: "#013a81",
    bg: "#e0e7ff",
    title: "Mobile App Mockups",
    body: `Generate mobile app screens complete with play-testing interactions. Founders and PMs can validate user flows and feature ideas with real-feeling prototypes, without a developer or designer.`,
    detail: `For early-stage companies where design bandwidth is scarce, this capability is transformative. A concept that previously required a full sprint to mockup can now be validated in an afternoon — before committing engineering resources.`,
    who: "Founders, PMs",
    timeSaved: "Weeks → Hours",
  },
  {
    id: "frontier-designs",
    icon: <Cpu size={20} />,
    label: "3D / Frontier",
    color: "#0369a1",
    bg: "#dbeafe",
    title: "3D & Frontier Designs",
    body: `Build frontier prototypes with 3D, voice, video, and WebGL shaders. Claude Design supports advanced visual outputs that previously required specialist tools and months of learning to access.`,
    detail: `Engineers and designers exploring spatial computing, interactive data visualisations, or branded motion graphics can use Claude Design as a powerful rapid-prototyping layer. What previously took months of specialist work now takes days.`,
    who: "Engineers, Designers",
    timeSaved: "Months → Days",
  },
];

const COMPETITIVE = [
  {
    tool: "Claude Design",
    use: "Visual design & prototypes",
    ai: "Yes (Opus 4.7)",
    export: "PPTX, PDF, HTML, Canva",
    ds: "Auto-applies brand",
    best: "All professionals",
    highlight: true,
  },
  {
    tool: "Figma",
    use: "UI/UX design",
    ai: "Partial",
    export: "SVG, PNG, PDF",
    ds: "Manual setup",
    best: "Designers",
    highlight: false,
  },
  {
    tool: "Canva",
    use: "Marketing graphics",
    ai: "Partial",
    export: "PNG, PDF, MP4",
    ds: "Limited",
    best: "Marketers",
    highlight: false,
  },
  {
    tool: "Gamma",
    use: "Presentations",
    ai: "Yes",
    export: "PDF, PPTX",
    ds: "Themes only",
    best: "Presenters",
    highlight: false,
  },
  {
    tool: "Replit",
    use: "App prototyping",
    ai: "Yes",
    export: "Code only",
    ds: "None",
    best: "Developers",
    highlight: false,
  },
];

const ADOPTION = [
  { role: "Designers", pct: 78, color: "#009fda" },
  { role: "Founders", pct: 72, color: "#013a81" },
  { role: "Product Managers", pct: 65, color: "#0369a1" },
  { role: "Marketers", pct: 60, color: "#009fda" },
  { role: "Engineers", pct: 55, color: "#013a81" },
  { role: "Educators", pct: 48, color: "#0369a1" },
];

const SKILLS_GAIN = [
  {
    skill: "Aesthetic taste",
    desc: "Knowing what good design looks like and being able to articulate why.",
  },
  {
    skill: "Communication clarity",
    desc: "Ability to describe visual goals precisely through natural language.",
  },
  {
    skill: "Strategic thinking",
    desc: "Connecting design decisions to business outcomes and user needs.",
  },
  {
    skill: "Feedback quality",
    desc: "Ability to critique, iterate, and guide AI toward excellence.",
  },
  {
    skill: "Workflow design",
    desc: "Knowing which tool to use at which stage of a project.",
  },
];

const SKILLS_LOSE = [
  {
    skill: "Software mechanics",
    desc: "Mastery of specific tools like Figma or Photoshop becomes less critical.",
  },
  {
    skill: "Production execution",
    desc: "Manually placing elements and adjusting typography by hand.",
  },
  {
    skill: "Template management",
    desc: "Building and maintaining design systems manually.",
  },
];

const HOW_IT_WORKS = [
  {
    title: "Describe Your Design",
    desc: "Type a prompt describing the visual you need — a deck, prototype, video, or landing page.",
    icon: <FileText size={18} />,
    color: "#009fda",
  },
  {
    title: "Claude Generates v1",
    desc: "Claude Opus 4.7 produces a first version. Review it directly in the browser within seconds.",
    icon: <Zap size={18} />,
    color: "#013a81",
  },
  {
    title: "Refine & Iterate",
    desc: "Comment inline, adjust sliders, or chat with Claude to revise specific elements.",
    icon: <Target size={18} />,
    color: "#0369a1",
  },
  {
    title: "Apply Brand System",
    desc: "Claude applies your team's design system — colours, fonts, and components — automatically.",
    icon: <Palette size={18} />,
    color: "#009fda",
  },
  {
    title: "Collaborate",
    desc: "Share a link with your team for viewing or editing. Group AI chat is included.",
    icon: <Share2 size={18} />,
    color: "#013a81",
  },
  {
    title: "Export or Hand Off",
    desc: "Export as PPTX, PDF, Canva, or HTML — or pass the handoff bundle to Claude Code.",
    icon: <Download size={18} />,
    color: "#0369a1",
  },
];

const FIRST_PROJECTS = [
  "Take your most recent work presentation and ask Claude Design to rebuild it with animations.",
  "Paste in a product brief and ask for a landing page mockup using your company's web style.",
  "Upload your last investor update as a PPTX and ask Claude Design to produce an animated video version.",
  "Generate three visual directions for an upcoming campaign and compare them side by side.",
  "Ask Claude Design to build a mobile app prototype for a feature you have been meaning to validate.",
];

const PRO_TIPS = [
  "Iterate on copy in regular Claude before bringing it to Claude Design — cleaner input produces better output.",
  "Set up your team's design system during onboarding. Every subsequent project benefits automatically.",
  "Use the web capture tool to ground prototypes in your actual product aesthetic.",
  "For export to Microsoft Office workflows, choose PPTX and review in PowerPoint before sharing.",
  "Pass the Claude Code handoff bundle directly to a developer or use it with Claude Code yourself.",
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

const TipCard = ({ tip, index }: { tip: string; index: number }) => {
  const [open, setOpen] = useState(false);
  const colors = ["#009fda", "#013a81", "#0369a1", "#009fda", "#013a81"];
  const color = colors[index % colors.length];
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
            {tip.split(" — ")[0]}
          </h3>
        </div>
        <ChevronDown
          size={16}
          className="text-gray-400 transition-transform duration-200 flex-shrink-0"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>
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
          {tip}
        </p>
      </div>
    </div>
  );
};

const UseCaseTab = ({
  uc,
  active,
  onClick,
}: {
  uc: (typeof USE_CASES)[0];
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 w-full text-left"
    style={{
      backgroundColor: active ? uc.color : "transparent",
      color: active ? "#fff" : "#6b7280",
      border: `1.5px solid ${active ? uc.color : "#e5e7eb"}`,
    }}
  >
    <span
      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{
        backgroundColor: active ? "rgba(255,255,255,0.2)" : uc.bg,
        color: uc.color,
      }}
    >
      {uc.icon}
    </span>
    {uc.label}
  </button>
);

export default function ClaudeDesignPage() {
  const [activeTab, setActiveTab] = useState(0);
  const active = USE_CASES[activeTab];
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
          <Link
            href="/aihelpcenter"
            className="hover:text-[#013a81] transition-colors"
          >
            AI Help Center
          </Link>
          <ChevronRight size={12} />
          <Link
            href="/aihelpcenter/ai-strategy-pm"
            className="hover:text-[#013a81] transition-colors"
          >
            AI Strategy (PM)
          </Link>
          <ChevronRight size={12} />
          <span className="text-gray-800 font-medium">
            What is Claude Design
          </span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#009fda] via-[#013a81] to-[#013a81]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* left text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#009fda] uppercase tracking-wider mb-5">
              <Palette size={12} />
              AI Strategy (PM) · Claude Design Guide
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
              What is{" "}
              <span className="bg-gradient-to-r from-[#009fda] to-[#013a81] bg-clip-text text-transparent">
                Claude Design
              </span>
              ?
              <br />
              <span className="text-xl sm:text-2xl font-bold text-gray-500">
                The AI-Powered Visual Tool for Every Professional
              </span>
            </h1>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-7">
              Anthropic launched Claude Design on April 17, 2026 — powered by
              Claude Opus 4.7. This comprehensive guide covers what it is, how
              it works, who benefits most, and what it means for the future of
              visual communication at work.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Image
                  src={ivy}
                  alt="Ivy Pro School"
                  width={16}
                  height={16}
                  className="rounded-full"
                />
                Ivy Pro School
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <Clock size={11} />
                ~15 minutes read
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1.5">
                <BookOpen size={11} />
                April 2026 · Nawid Khichi
              </div>
            </div>
          </div>

          {/* right — Claude Design visual mockup */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              <div className="bg-gradient-to-r from-[#009fda] to-[#013a81] px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-blue-300" />
                </div>
                <span className="text-white text-xs font-semibold ml-2">
                  Claude Design — Visual Workspace
                </span>
              </div>
              <div className="p-5 space-y-3">
                <div className="rounded-xl bg-blue-50 border border-blue-100 px-4 py-3">
                  <p className="text-[10px] font-bold text-[#009fda] uppercase tracking-wide mb-1">
                    New Project: Q2 Product Launch
                  </p>
                  <p className="text-xs text-blue-700">
                    Prompt: &ldquo;Create an animated product launch video with
                    our brand colours.&rdquo;
                  </p>
                </div>
                {[
                  {
                    icon: <Video size={12} />,
                    label: "Launch_Video_v1.mp4",
                    status: "Generated",
                    color: "#009fda",
                  },
                  {
                    icon: <Presentation size={12} />,
                    label: "Investor_Deck_v2.pptx",
                    status: "On-Brand",
                    color: "#013a81",
                  },
                  {
                    icon: <Globe size={12} />,
                    label: "Landing_Page_Hero.html",
                    status: "Live Preview",
                    color: "#0369a1",
                  },
                  {
                    icon: <Smartphone size={12} />,
                    label: "App_Prototype_v1",
                    status: "Interactive",
                    color: "#009fda",
                  },
                ].map((file, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2"
                  >
                    <div
                      className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: `${file.color}20`,
                        color: file.color,
                      }}
                    >
                      {file.icon}
                    </div>
                    <span className="text-xs text-gray-700 flex-1 truncate">
                      {file.label}
                    </span>
                    <span
                      className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: `${file.color}15`,
                        color: file.color,
                      }}
                    >
                      {file.status}
                    </span>
                  </div>
                ))}
                <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#009fda] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star size={12} className="text-white" />
                  </div>
                  <p className="text-[10px] text-[#009fda] leading-snug">
                    <strong>Claude Design:</strong> I&apos;ve applied your brand
                    system and generated 4 assets. Shall I export everything to
                    Canva or produce a side-by-side comparison?
                  </p>
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
              <span className="text-xs font-semibold text-gray-900">
                Prateek Agarwal
              </span>
              <span className="text-xs text-gray-500">
                {" "}
                · 20+ yrs AI/ML Leader
              </span>
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
                    <ArrowRight
                      size={12}
                      className="text-[#009fda] ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    />
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
                  style={{ backgroundColor: "#ede9fe", color: "#009fda" }}
                >
                  <Brain size={12} /> Introduction
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Introduction
                </h2>
                <p className="text-base sm:text-lg border-l-4 border-[#009fda] pl-4 italic text-gray-700 mb-5">
                  &ldquo;For the first time, professionals across every function
                  have access to a single tool that can produce polished,
                  professional visual work through natural conversation.&rdquo;
                </p>
                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Anthropic launched Claude Design on April 17, 2026, and the
                    AI design landscape changed overnight. Powered by Claude
                    Opus 4.7, Anthropic&apos;s most capable vision model, it is
                    currently available in research preview for Pro, Max, Team,
                    and Enterprise subscribers.
                  </p>
                  <p>
                    Claude Design represents the third pillar of
                    Anthropic&apos;s emerging knowledge-worker suite, alongside
                    Claude Code (engineering) and Claude Cowork (documents and
                    task management). Together, these three tools cover the full
                    surface area of professional knowledge work.
                  </p>
                  <p>
                    Whether you are a seasoned designer looking to accelerate
                    exploration, or a non-designer trying to communicate an idea
                    visually for the first time, Claude Design fundamentally
                    changes what is possible — and how quickly you can get
                    there.
                  </p>
                </div>
                <div className="mt-6 rounded-xl bg-blue-50 border border-blue-100 p-5">
                  <p className="text-xs font-bold text-[#009fda] uppercase tracking-wide mb-1">
                    Key Insight
                  </p>
                  <p className="text-sm text-blue-900 leading-relaxed">
                    Claude Design lowers the barrier to professional-quality
                    visual work from months of skill-building to a single
                    conversation.{" "}
                    <strong>
                      The bottleneck is no longer execution — it is judgment.
                    </strong>
                  </p>
                </div>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      label: "Claude Code",
                      desc: "Engineering, agentic coding, technical implementation",
                      color: "#0369a1",
                      highlight: false,
                    },
                    {
                      label: "Claude Design",
                      desc: "Visual design, prototyping, and presentation",
                      color: "#009fda",
                      highlight: true,
                    },
                    {
                      label: "Claude Cowork",
                      desc: "Document automation, file management, task workflows",
                      color: "#013a81",
                      highlight: false,
                    },
                  ].map((pillar, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-4 border"
                      style={{
                        borderColor: `${pillar.color}30`,
                        backgroundColor: pillar.highlight
                          ? `${pillar.color}08`
                          : "#f9fafb",
                      }}
                    >
                      <p
                        className="text-xs font-bold mb-1"
                        style={{ color: pillar.color }}
                      >
                        {pillar.label}
                        {pillar.highlight && (
                          <span className="ml-1.5 text-[9px] px-1.5 py-0.5 rounded-full bg-blue-100 text-[#009fda]">
                            This Guide
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 2. What Is Claude Design */}
            <section
              id="what-is"
              className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#e0e7ff", color: "#013a81" }}
              >
                <Zap size={12} /> Overview
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                What Is Claude Design?
              </h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                <p>
                  Claude Design is a collaborative visual design environment
                  that lets you describe what you need and receive a polished
                  first version within seconds. Unlike simple AI image
                  generators, Claude Design produces{" "}
                  <strong>
                    structured, editable, code-powered outputs
                  </strong>{" "}
                  — presentations, prototypes, landing pages, videos, apps, and
                  more — that you can refine through ongoing conversation.
                </p>
                <p>
                  The key word is <em>code</em>. Videos, slides, websites, and
                  apps are all code under the hood. When code becomes cheap,
                  the entire production layer of professional work becomes
                  accessible to everyone — not just engineers and designers.
                </p>
              </div>
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 mb-6">
                <p className="text-xs font-bold text-[#009fda] uppercase tracking-wide mb-3">
                  Core Capabilities
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Generate animated videos from text or documents",
                    "Build interactive prototypes without writing code",
                    "Produce on-brand pitch decks and slide presentations",
                    "Create landing pages and marketing collateral",
                    "Design mobile app mockups with built-in play testing",
                    "Build frontier prototypes with 3D, voice, video, and WebGL shaders",
                  ].map((cap, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm text-blue-900"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-[#009fda] flex-shrink-0 mt-0.5"
                      />
                      {cap}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                    Who It&apos;s For
                  </p>
                  <ul className="space-y-1.5">
                    {[
                      "Designers accelerating exploration",
                      "PMs communicating product vision",
                      "Founders without design resources",
                      "Marketers creating campaign assets",
                      "Educators building visual content",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle2
                          size={12}
                          className="text-[#009fda] flex-shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
                  <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">
                    Access Requirements
                  </p>
                  <p className="text-sm text-blue-800 leading-relaxed mb-3">
                    Available at{" "}
                    <strong>claude.ai/design</strong> for subscribers on{" "}
                    <strong>Pro, Max, Team, or Enterprise</strong> plans.
                    Included with your existing subscription.
                  </p>
                  <p className="text-xs text-blue-600">
                    Enterprise: off by default — admins must enable in
                    Organization settings.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. How It Works */}
            <section
              id="how-it-works"
              className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#dbeafe", color: "#013a81" }}
              >
                <Target size={12} /> The Design Flow
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                How It Works: The Six-Step Design Flow
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-7">
                Claude Design follows a natural, iterative creative process. The
                six steps below describe how a typical project progresses from
                idea to finished output. What makes this flow powerful is the
                tight feedback loop — you are not forced to get your prompt
                perfect on the first try.
              </p>
              <div className="relative">
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#009fda] to-[#013a81] hidden sm:block" />
                <div className="space-y-4">
                  {HOW_IT_WORKS.map((step, i) => (
                    <div key={i} className="flex gap-5 items-start pl-0 sm:pl-3">
                      <div
                        className="w-9 h-9 rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0 z-10 shadow-md"
                        style={{ backgroundColor: step.color }}
                      >
                        {i + 1}
                      </div>
                      <div
                        className="flex-1 rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-all"
                        style={{
                          borderLeftColor: step.color,
                          borderLeftWidth: "3px",
                        }}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span style={{ color: step.color }}>{step.icon}</span>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
                  <p className="text-xs font-bold text-[#009fda] uppercase tracking-wide mb-2">
                    Brand Design System
                  </p>
                  <p className="text-sm text-blue-900 leading-relaxed">
                    During onboarding, Claude reads your codebase and design
                    files to build a team design system. Every project after
                    that automatically uses your brand colours, typography, and
                    components. Teams can maintain more than one system.
                  </p>
                </div>
                <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
                  <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">
                    Collaboration Features
                  </p>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Designs have org-scoped sharing — keep private, share
                    view-only, or grant edit access for group AI chat with
                    colleagues. Claude Design is a genuine team tool, not just a
                    solo productivity aid.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Six Real Use Cases */}
            <section
              id="use-cases"
              className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 p-6 sm:p-8"
            >
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#009fda] mb-4">
                  <Zap size={12} /> Real Use Cases
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Six Real Use Cases
                </h2>
                <p className="text-gray-500 text-sm sm:text-base max-w-xl">
                  These are the six workflows where Claude Design most changes
                  what is possible. Select each to explore details and time
                  savings.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                  {USE_CASES.map((uc, i) => (
                    <UseCaseTab
                      key={uc.id}
                      uc={uc}
                      active={activeTab === i}
                      onClick={() => setActiveTab(i)}
                    />
                  ))}
                </div>
                <div className="lg:col-span-2">
                  <div
                    className="rounded-2xl bg-white border shadow-md p-5 sm:p-7 h-full transition-all duration-200"
                    style={{ borderColor: active.color }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: active.bg,
                          color: active.color,
                        }}
                      >
                        {active.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                          {active.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: active.bg,
                              color: active.color,
                            }}
                          >
                            {active.who}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                            {active.timeSaved}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                      {active.body}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                      {active.detail}
                    </p>
                    <div
                      className="rounded-xl px-4 py-3.5"
                      style={{ backgroundColor: active.bg }}
                    >
                      <p
                        className="text-xs font-bold uppercase tracking-widest mb-1"
                        style={{ color: active.color }}
                      >
                        Time Saved
                      </p>
                      <p
                        className="text-base font-bold"
                        style={{ color: active.color }}
                      >
                        {active.timeSaved}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Competitive Landscape */}
            <section
              id="competitive"
              className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#ede9fe", color: "#009fda" }}
              >
                <Layers size={12} /> Competitive Landscape
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Competitive Landscape
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-6 max-w-2xl">
                Claude Design enters a crowded market with differentiated
                positioning. The key differentiator is breadth — handling
                design, prototyping, and presentation from a single
                conversational interface (April 2026).
              </p>
              <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-5">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#009fda] to-[#013a81] text-white">
                      <th className="text-left px-4 py-3 font-bold rounded-tl-2xl">
                        Tool
                      </th>
                      <th className="px-4 py-3 font-bold text-center hidden sm:table-cell">
                        Primary Use
                      </th>
                      <th className="px-4 py-3 font-bold text-center hidden md:table-cell">
                        AI-Powered
                      </th>
                      <th className="px-4 py-3 font-bold text-center hidden lg:table-cell">
                        Export Formats
                      </th>
                      <th className="px-4 py-3 font-bold text-center hidden lg:table-cell">
                        Design System
                      </th>
                      <th className="px-4 py-3 font-bold text-center rounded-tr-2xl">
                        Best For
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPETITIVE.map((row, i) => (
                      <tr
                        key={i}
                        className={
                          row.highlight
                            ? "bg-blue-50"
                            : i % 2 === 0
                            ? "bg-white"
                            : "bg-gray-50/40"
                        }
                      >
                        <td
                          className="px-4 py-3 font-bold border-r border-gray-100"
                          style={{
                            color: row.highlight ? "#009fda" : "#374151",
                          }}
                        >
                          {row.highlight && (
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#009fda] mr-1.5 mb-0.5" />
                          )}
                          {row.tool}
                        </td>
                        <td className="px-4 py-3 text-center text-gray-600 hidden sm:table-cell">
                          {row.use}
                        </td>
                        <td
                          className="px-4 py-3 text-center hidden md:table-cell"
                          style={{
                            color: row.highlight ? "#009fda" : "#6b7280",
                            fontWeight: row.highlight ? "600" : "400",
                          }}
                        >
                          {row.ai}
                        </td>
                        <td className="px-4 py-3 text-center text-gray-600 hidden lg:table-cell">
                          {row.export}
                        </td>
                        <td className="px-4 py-3 text-center text-gray-600 hidden lg:table-cell">
                          {row.ds}
                        </td>
                        <td
                          className="px-4 py-3 text-center"
                          style={{
                            color: row.highlight ? "#009fda" : "#6b7280",
                            fontWeight: row.highlight ? "700" : "400",
                          }}
                        >
                          {row.best}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
                <p className="text-xs font-bold text-[#009fda] uppercase tracking-wide mb-2">
                  Competitive Position
                </p>
                <p className="text-sm text-blue-900 leading-relaxed">
                  Claude Design does not need to beat Figma at UI design. It
                  only needs to be good enough for 80% of use cases — and
                  dramatically faster.{" "}
                  <strong>For most professionals, it already is.</strong>
                </p>
              </div>
            </section>

            {/* 6. Adoption by Role */}
            <section
              id="adoption"
              className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-[#013a81] border border-blue-900 p-6 sm:p-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/70 mb-5">
                <Users size={12} className="text-blue-300" /> Adoption
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Adoption by Professional Role
              </h2>
              <p className="text-white/70 text-sm sm:text-base mb-7 max-w-xl">
                Estimated willingness-to-adopt scores by professional category,
                based on a survey of 400 knowledge workers (April 2026).
              </p>
              <div className="space-y-4 mb-6">
                {ADOPTION.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-white/80 text-sm font-semibold w-36 flex-shrink-0">
                      {item.role}
                    </span>
                    <div className="flex-1 bg-white/10 rounded-full h-5 overflow-hidden">
                      <div
                        className="h-full rounded-full flex items-center justify-end pr-2"
                        style={{
                          width: `${item.pct}%`,
                          backgroundColor: item.color,
                        }}
                      >
                        <span className="text-white text-[10px] font-bold">
                          {item.pct}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-white/10 border border-white/15 px-5 py-4">
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong className="text-white">Designers lead adoption</strong>{" "}
                  not because they need the tool most, but because they
                  immediately recognise the leverage it provides — exploring ten
                  directions instead of two is now realistic. Founders and PMs
                  follow closely, drawn by the ability to communicate product
                  vision without depending on scarce design resources.
                </p>
              </div>
            </section>

            {/* 7. Professional Development */}
            <section
              id="professional-dev"
              className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#e0e7ff", color: "#013a81" }}
              >
                <GraduationCap size={12} /> Professional Development
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Implications for Professional Development
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                The most significant implication of Claude Design is not
                productivity — it is{" "}
                <strong>skill premium</strong>. When production mechanics are
                automated, the scarce resource shifts to judgment: the ability
                to recognise quality, give clear direction, and iterate toward
                excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#009fda] flex items-center justify-center">
                      <TrendingUp size={16} className="text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-[#009fda] uppercase tracking-wide">
                      Skills That Gain Value
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {SKILLS_GAIN.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2
                          size={14}
                          className="text-[#009fda] flex-shrink-0 mt-0.5"
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-800">
                            {item.skill}
                          </p>
                          <p className="text-xs text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gray-500 flex items-center justify-center">
                      <TrendingDown size={16} className="text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">
                      Skills That Lose Value
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {SKILLS_LOSE.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <AlertCircle
                          size={14}
                          className="text-gray-400 flex-shrink-0 mt-0.5"
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-700">
                            {item.skill}
                          </p>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 rounded-xl bg-blue-50 border border-blue-100 p-4">
                <p className="text-sm text-blue-800 leading-relaxed">
                  <strong>For professionals early in their careers,</strong>{" "}
                  this is a critical signal. Investing in taste, communication,
                  and strategic vision will compound more over the next decade
                  than investing in tool-specific technical skills. At Ivy
                  Professional School, our curriculum has been updated to
                  reflect this shift, emphasising judgment-building frameworks
                  over software tutorials.
                </p>
              </div>
            </section>

            {/* 8. Getting Started */}
            <section
              id="getting-started"
              className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#dbeafe", color: "#013a81" }}
              >
                <Zap size={12} /> Getting Started
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Getting Started with Claude Design
              </h2>

              <div className="mb-7">
                <h3 className="text-base font-bold text-gray-800 mb-3">
                  Recommended First Projects
                </h3>
                <div className="space-y-3">
                  {FIRST_PROJECTS.map((project, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3"
                    >
                      <div
                        className="w-7 h-7 rounded-full text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                        style={{
                          backgroundColor: [
                            "#009fda",
                            "#013a81",
                            "#0369a1",
                            "#009fda",
                            "#013a81",
                          ][i],
                        }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {project}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-base font-bold text-gray-800 mb-3">
                Pro Tips
              </h3>
              <div className="space-y-3">
                {PRO_TIPS.map((tip, i) => (
                  <TipCard key={i} tip={tip} index={i} />
                ))}
              </div>
            </section>

            {/* Conclusion */}
            <section className="rounded-2xl bg-gradient-to-br from-[#009fda] to-[#013a81] p-6 sm:p-8 text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-5">
                <Star size={12} /> Conclusion
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                The Future of Visual Work Is Here
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-white/85 leading-relaxed mb-7">
                <p>
                  Claude Design is more than a productivity tool. It is a
                  signal about where professional work is headed. The gap
                  between having an idea and being able to show it to the world
                  — a gap that has shaped careers, determined funding decisions,
                  and constrained creative ambition for decades — is now
                  effectively closed.
                </p>
                <p>
                  The professionals who will thrive in this environment are not
                  those who become experts in Claude Design specifically. They
                  are those who develop the underlying human capabilities that
                  AI cannot replace:{" "}
                  <strong className="text-white">
                    taste, judgment, strategic clarity, and the ability to
                    communicate vision in a way that inspires action.
                  </strong>
                </p>
                <p>
                  At Ivy Professional School, we believe this is the defining
                  skill premium of the next decade. The tools are
                  democratising. The question is whether you are developing the
                  judgment to use them well.
                </p>
              </div>
              <div className="rounded-xl bg-white/10 border border-white/15 px-5 py-4 mb-7">
                <p className="text-white/90 text-sm font-semibold">
                  Start exploring at{" "}
                  <span className="underline">claude.ai/design</span> — available
                  now for Pro, Max, Team, and Enterprise subscribers. Your next
                  pitch deck, prototype, or campaign is one conversation away.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
                <div className="rounded-xl border border-white/10 bg-white/10 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={16} className="text-blue-300" />
                    <p className="text-sm font-bold text-white">
                      Use Claude Design if you…
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Regularly create presentations or marketing assets",
                      "Need visual prototypes without a design team",
                      "Want to compress multi-day design work to hours",
                      "Need on-brand outputs across multiple formats",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-white/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-300 flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle size={16} className="text-amber-300" />
                    <p className="text-sm font-bold text-white">
                      Consider alternatives if you…
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Need pixel-perfect production-ready UI screens",
                      "Require deep integration with existing Figma libraries",
                      "Work primarily in print or physical media",
                      "Need real-time multi-user design collaboration",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-white/80"
                      >
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
                        <h4 className="font-bold text-gray-900 text-sm truncate">
                          Prateek Agarwal
                        </h4>
                        <p className="text-gray-600 text-xs truncate">
                          Founder, Ivy Pro School
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#009fda]" />
                          <span className="text-xs text-gray-500">
                            20+ years as an AI/ML Leader
                          </span>
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
                        Worked with 50+ global firms, trained students from IIT
                        KGP, IIM Kolkata, IIT Delhi
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
                        <h4 className="font-bold text-gray-900 text-sm truncate">
                          Eeshani Agrawal
                        </h4>
                        <p className="text-gray-600 text-xs truncate">
                          Co-Founder, Ivy Pro School
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#009fda]" />
                          <span className="text-xs text-gray-500">
                            20+ years as a Data/AI Consultant
                          </span>
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
                        Trained 9,000+ professionals across Top IITs, IIMs, and
                        ISI
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
                style={{
                  background: "linear-gradient(135deg, #009fda, #013a81)",
                }}
              >
                <div className="text-center mb-5">
                  <h3 className="font-extrabold text-lg sm:text-xl leading-tight">
                    Advanced Courses
                  </h3>
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M9 5l7 7-7 7"
                        />
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
