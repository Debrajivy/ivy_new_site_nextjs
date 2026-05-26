"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { CheckCircle, Users, Clock, Star, ArrowRight, Award, BookOpen, ShieldCheck, TrendingUp, GraduationCap, Briefcase, CalendarCheck } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import coursehero from "@/assests/coursehero.jpg";
/* ── Course Images ── */
import GA    from "@/assests/GAI.webp";
import CDE   from "@/assests/CDE.webp";
import DSMAI from "@/assests/ML.webp";
import DAGA  from "@/assests/DAGA.webp";
import DA    from "@/assests/DA.webp";
import DSPAP from "@/assests/DSPAP.webp";
import AIML  from "@/assests/AI&ML.webp";
import AIE   from "@/assests/AIE.webp";
import AIB   from "@/assests/AIB.webp";
import AIPM  from "@/assests/AIPM.webp";

/* ── Alumni Images ── */
import vishal    from "@/assests/vishal.webp";
import Krishna   from "@/assests/Krishna.webp";
import nandini   from "@/assests/nandini.webp";
import Arghadeep from "@/assests/Arghadip.webp";
import Vtc  from "@/assests/Vtc.webp";
import Vtp  from "@/assests/Vtp.webp";
import Nac  from "@/assests/Nac.webp";
import Acc  from "@/assests/Acc.webp";
import Acp  from "@/assests/Acp.webp";

/* ── Accreditation Logos ── */
import NASSCOM from "@/assests/NASSCOM.webp";
import IBM     from "@/assests/IBM.png";
import IIT     from "@/assests/IIT.png";

/* ── Hiring Partner Logo Images ── */
import Accenture  from "@/assests/Accenturetra.webp";
import Cognizant  from "@/assests/Cognizanttra.webp";
import Deloitte   from "@/assests/Deloittebgremove.png";
import Genpact    from "@/assests/Genpacttra.webp";
import Honeywell  from "@/assests/Honeywelltra.webp";
import ITCLogo    from "@/assests/ITCtra.webp";
import PwcLogo    from "@/assests/Pwctra.webp";
import Tata       from "@/assests/Tatatra1.webp";
import Tesco      from "@/assests/Tescotra.webp";
import GoogleLogo from "@/assests/Google.webp";

/* ─────────────────────────────────────── */
/* Types                                   */
/* ─────────────────────────────────────── */
interface Course {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  category: string;
  filterCategory: string;
  badge: string;
  badgeColor: string;
  students: number;
  duration: string;
  mode: string;
  level: string;
  rating: number;
  reviewCount: number;
  slug: string;
  keyFeatures: string[];
  tools: string[];
}

interface AlumniItem {
  id: string;
  name: string;
  image: StaticImageData;
  content: string;
  rating: number;
  course: string;
  from: { company: string; role: string; logo: StaticImageData | null };
  to:   { company: string; role: string; logo: StaticImageData | null };
}

type PartnerEntry =
  | { type: 'img';  src: StaticImageData; alt: string }
  | { type: 'text'; name: string; bg: string; color: string };

/* ─────────────────────────────────────── */
/* Tool colour palette                     */
/* ─────────────────────────────────────── */
const TC: Record<string, { bg: string; color: string }> = {
  Python:           { bg: '#dbeafe', color: '#1d4ed8' },
  SQL:              { bg: '#fed7aa', color: '#c2410c' },
  TensorFlow:       { bg: '#fee2e2', color: '#dc2626' },
  PyTorch:          { bg: '#fee2e2', color: '#b91c1c' },
  'Power BI':       { bg: '#fef9c3', color: '#a16207' },
  Tableau:          { bg: '#ede9fe', color: '#7c3aed' },
  Excel:            { bg: '#dcfce7', color: '#15803d' },
  Azure:            { bg: '#e0f2fe', color: '#0284c7' },
  GCP:              { bg: '#cffafe', color: '#0e7490' },
  Spark:            { bg: '#ffedd5', color: '#ea580c' },
  Kafka:            { bg: '#f3f4f6', color: '#374151' },
  Hadoop:           { bg: '#fef3c7', color: '#b45309' },
  MongoDB:          { bg: '#d1fae5', color: '#059669' },
  ML:               { bg: '#ede9fe', color: '#7c3aed' },
  LangChain:        { bg: '#d1fae5', color: '#059669' },
  ChatGPT:          { bg: '#ccfbf1', color: '#0f766e' },
  Claude:           { bg: '#f3e8ff', color: '#9333ea' },
  Gemini:           { bg: '#e0f2fe', color: '#0284c7' },
  LLM:              { bg: '#e0e7ff', color: '#4338ca' },
  RAG:              { bg: '#e0e7ff', color: '#4338ca' },
  Transformer:      { bg: '#f0fdf4', color: '#15803d' },
  'Deep Learning':  { bg: '#fce7f3', color: '#be185d' },
  VBA:              { bg: '#fef3c7', color: '#b45309' },
  Statistics:       { bg: '#e0f2fe', color: '#0369a1' },
  'Scikit-Learn':   { bg: '#fef9c3', color: '#a16207' },
  'No-Code':        { bg: '#f0fdf4', color: '#15803d' },
  Automation:       { bg: '#dcfce7', color: '#166534' },
  'AI Agents':      { bg: '#ede9fe', color: '#6d28d9' },
  Firebase:         { bg: '#fff7ed', color: '#c2410c' },
  PromptLayer:      { bg: '#fdf4ff', color: '#a21caf' },
  'Canva AI':       { bg: '#fdf4ff', color: '#a21caf' },
  Midjourney:       { bg: '#fce7f3', color: '#9d174d' },
  Replit:           { bg: '#f0fdf4', color: '#166534' },
  R:                { bg: '#dbeafe', color: '#1d4ed8' },
};

/* ─────────────────────────────────────── */
/* Course Data                             */
/* ─────────────────────────────────────── */
const COURSES: Course[] = [
  {
    id: '1',
    title: "Generative AI Course",
    description: "Master GPT-4, DALL·E, LangChain, RAG & Transformer architectures. Build and deploy production-ready GenAI applications under Ivy Professional Schoolfaculty guidance.",
    image: GA,
    category: "Gen AI",
    filterCategory: "Gen AI",
    badge: "Trending 🔥",
    badgeColor: "#009fda",
    students: 1220,
    duration: "5 Months",
    mode: "Online + Hybrid",
    level: "Intermediate",
    rating: 4.9,
    reviewCount: 209,
    slug: "generative-ai-course",
    keyFeatures: [
      "20+ real-world GenAI projects",
      "Live sessions + lifetime recordings",
      "Master LLMs, RAG, LoRA, LangChain,  AI Agents & Fine-Tuned LLMs"
    ],
    tools: ["Python", "LLM", "Transformer", "RAG", "LangChain", "ML"],
  },
  {
    id: '2',
    title: "Data Science with Machine Learning & AI",
    description: "India's most comprehensive data science program — Excel, SQL, Python, R, Machine Learning, Deep Learning & visualization tools, taught by IIM faculty.",
    image: DSMAI,
    category: "Data Science",
    filterCategory: "Data Science",
    badge: "Best Seller ⭐",
    badgeColor: "#f7af34",
    students: 1158,
    duration: "11 Months",
    mode: "Online + Hybrid",
    level: "Beginner to Advanced",
    rating: 4.8,
    reviewCount: 324,
    slug: "data-science-and-ml-course",
    keyFeatures: [
      "50+ real-life industry projects",
      "Deep learning with TensorFlow & PyTorch",
      "NASSCOM + IBM + MEITY certified",
    ],
    tools: ["Python", "SQL", "TensorFlow", "PyTorch", "Tableau", "ML"],
  },
  {
    id: '3',
    title: "Data Engineering Course",
    description: "Build enterprise-grade data pipelines, architect big data solutions on Azure & GCP, and master real-time stream processing with Kafka, Spark, and Hadoop.",
    image: CDE,
    category: "Data Engineering",
    filterCategory: "Data Engineering",
    badge: "Popular 🚀",
    badgeColor: "#013a81",
    students: 862,
    duration: "8 Months",
    mode: "Online + Hybrid",
    level: "Intermediate",
    rating: 4.7,
    reviewCount: 198,
    slug: "data-engineering-course",
    keyFeatures: [
      "Hands-on Azure & GCP cloud labs",
      "Real-time Kafka stream processing",
      "Build production-grade ETL pipelines",
    ],
    tools: ["Azure", "GCP", "Kafka", "Spark", "Hadoop", "MongoDB"],
  },
  {
    id: '4',
    title: "Data Analytics and Generative AI Course",
    description: "Master Excel, SQL, Tableau, Power BI combined with Generative AI — the most in-demand analytics + AI skill set for data professionals in 2025–26.",
    image: DAGA,
    category: "Data Analytics",
    filterCategory: "Data Analytics",
    badge: "Popular 🚀",
    badgeColor: "#013a81",
    students: 855,
    duration: "7 Months",
    mode: "Online + Hybrid",
    level: "Beginner to Intermediate",
    rating: 4.7,
    reviewCount: 212,
    slug: "data-visualization-course",
    keyFeatures: [
      "Master Tableau, Power BI & VBA",
      "AI-powered dashboard creation",
      "Storytelling & data narratives",
    ],
    tools: ["Tableau", "Power BI", "VBA", "Excel", "SQL", "ChatGPT"],
  },
  {
    id: '5',
    title: "Data Analytics With Visualization",
    description: "Learn Excel, Python, SQL, Power BI, and VBA for comprehensive data analysis. Build interactive dashboards that drive strategic business decisions.",
    image: DA,
    category: "Data Analytics",
    filterCategory: "Data Analytics",
    badge: "Best Choice ✅",
    badgeColor: "#059669",
    students: 967,
    duration: "8 Months",
    mode: "Online + Hybrid",
    level: "Beginner to Intermediate",
    rating: 4.6,
    reviewCount: 286,
    slug: "data-analytics-course",
    keyFeatures: [
      "Advanced data mining techniques",
      "Power BI enterprise dashboards",
      "NASSCOM & MEITY certified",
    ],
    tools: ["Excel", "Python", "SQL", "Power BI", "VBA", "R"],
  },
  {
    id: '6',
    title: "AI for Product Managers",
    description: "Design AI-powered products, write LLM prompts, build no-code AI agents and roadmaps with ChatGPT, Claude & Firebase Studio — built for PMs, not engineers.",
    image: AIPM,
    category: "AI Tools",
    filterCategory: "AI Tools",
    badge: "New 🆕",
    badgeColor: "#7c3aed",
    students: 720,
    duration: "2 Months",
    mode: "Online",
    level: "Intermediate",
    rating: 4.7,
    reviewCount: 195,
    slug: "ai-product-manager-course",
    keyFeatures: [
      "20+ real product AI scenarios",
      "AI-powered product roadmapping",
      "IBM certified on completion",
    ],
    tools: ["ChatGPT", "LangChain", "AI Agents", "Firebase", "PromptLayer"],
  },
  {
    id: '7',
    title: "Data Science — Pay After Placement",
    description: "Zero upfront fees — get fully trained, secured, and placed in a data science role before paying. India's only pay-after-placement data science program.",
    image: DSPAP,
    category: "Data Science",
    filterCategory: "Data Science",
    badge: "₹0 Upfront 💡",
    badgeColor: "#dc2626",
    students: 430,
    duration: "12 Months",
    mode: "Online + Hybrid",
    level: "Beginner to Advanced",
    rating: 4.8,
    reviewCount: 109,
    slug: "no-upfront-fees-data-science-and-ml-course",
    keyFeatures: [
      "Pay fees only after getting placed",
      "100% placement guarantee",
      "Full data science + ML curriculum",
    ],
    tools: ["Python", "SQL", "ML", "TensorFlow", "Tableau", "Scikit-Learn"],
  },
  {
    id: '8',
    title: "AI and Machine Learning Course",
    description: "Go from statistics fundamentals to advanced deep learning. Master model building, training, evaluation, and deployment with Python, PyTorch & Scikit-Learn.",
    image: AIML,
    category: "Machine Learning",
    filterCategory: "Machine Learning",
    badge: "New 🆕",
    badgeColor: "#7c3aed",
    students: 430,
    duration: "4 Months",
    mode: "Online",
    level: "Intermediate",
    rating: 4.8,
    reviewCount: 109,
    slug: "ai-machine-learning-course",
    keyFeatures: [
      "Statistics → ML → Deep Learning path",
      "Python for ML model building",
      "Model deployment & MLOps basics",
    ],
    tools: ["Python", "ML", "Statistics", "Deep Learning", "Scikit-Learn", "PyTorch"],
  },
  {
    id: '9',
    title: "AI for Entrepreneurs",
    description: "Automate your business, analyze data, and scale operations with AI — no coding required. Use Claude, Gemini, n8n, and no-code tools for real business impact.",
    image: AIE,
    category: "AI Tools",
    filterCategory: "AI Tools",
    badge: "New 🆕",
    badgeColor: "#7c3aed",
    students: 100,
    duration: "6 Weeks",
    mode: "Online",
    level: "Beginner",
    rating: 4.8,
    reviewCount: 90,
    slug: "ai-for-entrepreneurs-course",
    keyFeatures: [
      "10+ business automation projects",
      "No-code AI tool building",
      "Master Claude, Gemini, Grok & n8n",
    ],
    tools: ["Claude", "Gemini", "No-Code", "Automation", "ChatGPT", "AI Agents"],
  },
  {
    id: '10',
    title: "AI for Beginners",
    description: "Learn 15+ AI tools including ChatGPT, Claude, Canva AI, Midjourney, and Replit. Perfect for students, professionals, or anyone starting their AI journey.",
    image: AIB,
    category: "AI Tools",
    filterCategory: "AI Tools",
    badge: "Beginner Friendly 👋",
    badgeColor: "#059669",
    students: 100,
    duration: "6 Weeks",
    mode: "Online",
    level: "Beginner",
    rating: 4.8,
    reviewCount: 25,
    slug: "ai-for-beginners-course",
    keyFeatures: [
      "15+ AI tools hands-on each session",
      "Capstone project + certificate",
      "Zero prior experience needed",
    ],
    tools: ["ChatGPT", "Claude", "Canva AI", "Midjourney", "Replit"],
  },
];

const CATEGORIES = ['All', 'Data Science', 'Data Engineering', 'Gen AI', 'Data Analytics', 'Machine Learning', 'AI Tools'];

/* ─────────────────────────────────────── */
/* Hiring Partners                         */
/* ─────────────────────────────────────── */
const hiringPartners: PartnerEntry[] = [
  { type: 'img',  src: Tata,       alt: 'Tata Consultancy' },
  { type: 'img',  src: Accenture,  alt: 'Accenture' },
  { type: 'img',  src: Cognizant,  alt: 'Cognizant' },
  { type: 'img',  src: Deloitte,   alt: 'Deloitte' },
  { type: 'img',  src: PwcLogo,    alt: 'PwC' },
  { type: 'img',  src: Genpact,    alt: 'Genpact' },
  { type: 'img',  src: GoogleLogo, alt: 'Google' },
  { type: 'img',  src: Honeywell,  alt: 'Honeywell' },
  { type: 'img',  src: ITCLogo,    alt: 'ITC' },
  { type: 'img',  src: Tesco,      alt: 'Tesco' },

];

/* ─────────────────────────────────────── */
/* Alumni Data                             */
/* ─────────────────────────────────────── */
const alumni: AlumniItem[] = [
  {
    id: '1',
    name: 'Vishal Tiwary',
    image: vishal,
    content: "The Data Science program completely transformed my career. Now working at PwC and mentoring the next generation of data professionals.",
    rating: 5,
    course: 'Business Analytics',
    from: { company: 'Barclays', role: 'Treasury Data Analyst', logo: Vtp },
    to:   { company: 'PwC', role: 'Senior Data Analyst', logo: Vtc },
  },
  {
    id: '2',
    name: 'Krishnakoli Datta',
    image: Krishna,
    content: "IVY resolves every single doubt. They even arrange one-to-one sessions with mentors. Best decision of my career as a fresher.",
    rating: 5,
    course: 'Data Analytics',
    from: { company: 'Fresher', role: '', logo: null },
    to:   { company: 'Ecolab', role: 'Data Analyst Trainee', logo: Nac },
  },
  {
    id: '3',
    name: 'Nandini Agarwal',
    image: nandini,
    content: "What sets Ivy apart is the personal attention. The director personally helped me solve a real-world business problem during class!",
    rating: 4,
    course: 'Data Science',
    from: { company: 'Fresher', role: '', logo: null },
    to:   { company: 'ECOLAB', role: 'Trainee Data Analyst', logo: Nac },
  },
  {
    id: '4',
    name: 'Arghadip Charan',
    image: Arghadeep,
    content: "The faculty makes complex concepts feel simple. I went from intern to full-time analyst within 3 months of completing the program.",
    rating: 5,
    course: 'Data Science with ML',
    from: { company: 'Cognifyz Technologies', role: 'Data Analyst Intern', logo: Acp },
    to:   { company: 'Ivy Professional School', role: 'Data Analyst', logo: Acc },
  },
];

/* ─────────────────────────────────────── */
/* FAQ Data                                */
/* ─────────────────────────────────────── */
const faqs = [
  {
    q: "What data science and AI courses does Ivy Professional School offer?",
    a: "Ivy Professional School offers 10+ certified courses: Data Science with ML & AI (11 months), Generative AI with IIT Guwahati (5 months), Data Engineering (8 months), Data Analytics with Visualization (8 months), Data Analytics & GenAI (7 months), AI for Product Managers (2 months), AI & Machine Learning (4 months), AI for Entrepreneurs (6 weeks), AI for Beginners (6 weeks), and a unique Pay-After-Placement Data Science program. All programs are NASSCOM, IBM, or MEITY certified.",
  },
  {
    q: "Are Ivy Professional School courses NASSCOM and IBM certified?",
    a: "Yes. Ivy Pro School is one of India's few institutes with certifications from NASSCOM (India's premier IT body), IBM, IIT Guwahati (for premium programs), and Govt. of India MEITY. These certifications are recognized by 700+ hiring partners including TCS, Infosys, Accenture, Deloitte, PwC, Capgemini, JP Morgan, Google, and Amazon.",
  },
  {
    q: "What is the duration of data science courses at Ivy Pro School?",
    a: "Courses range from 6 weeks (AI for Beginners, AI for Entrepreneurs) to 12 months (Data Science Pay After Placement). Most popular programs run 7–11 months. Weekend batches (Sat–Sun), weekday batches (Mon–Fri), and hybrid batches are all available to suit working professionals.",
  },
  {
    q: "Does Ivy Pro School offer 100% placement support?",
    a: "Yes. All students get access to PrepAI — Ivy's career copilot — which includes AI-powered resume building, mock interview practice, recruiter connects, and a dedicated placement manager. Over 37,500 professionals have been placed at companies like TCS, Wipro, Cognizant, Barclays, PwC, Ecolab, and more.",
  },
  {
    q: "Can I pay course fees in installments or EMI?",
    a: "Yes. Ivy Pro School offers no-cost EMI (0% interest), 4-month installment plans, and a unique Pay-After-Placement option for the Data Science course where you pay zero upfront and only after landing your first job. Corporate sponsorship facilitation is also available.",
  },
  {
    q: "Are classes online, offline, or hybrid?",
    a: "Ivy Pro School follows a flexible hybrid learning model — live online classes with IIT & IIM faculty via video platform, plus optional offline sessions at centers in Kolkata, Delhi, Bangalore, and Pune. All live sessions are recorded and accessible for lifetime. You also get 30-minute daily practice classes before and after main sessions.",
  },
  {
    q: "What is the eligibility to join data science or AI courses?",
    a: "Most courses accept graduates from any background — engineering, commerce, arts, or science. Basic computer literacy is the only requirement for beginner courses. For advanced programs like Generative AI or Data Engineering, familiarity with Python or SQL is preferred but not mandatory — Ivy's curriculum starts from the fundamentals.",
  },
  {
    q: "What makes Ivy Pro School different from other data science institutes?",
    a: "Ivy Pro School offers IIT & IIM faculty (not just industry trainers), 1:1 doubt resolution with dedicated TAs, 30-minute practice sessions every day, PrepAI career copilot, lifetime recording access, and the only Pay-After-Placement program in India. With 17+ years of experience and 37,500+ alumni placed, Ivy is India's most trusted Data & AI training institute.",
  },
];

/* ═══════════════════════════════════════ */
/* Main Component                          */
/* ═══════════════════════════════════════ */
export default function CoursesListing() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? COURSES
    : COURSES.filter((c) => c.filterCategory === activeCategory);

  return (
    <div className="min-h-screen bg-[#f8fafc]">

      {/* ══════════════════════════════════
          HERO BANNER
      ══════════════════════════════════ */}
      <div className="w-full">
      <Image
        src={coursehero}
        alt="Course Hero"
        priority
        className="w-full h-auto object-cover"
        sizes="100vw"
      />
    </div>
      {/* ══════════════════════════════════
          HIRING PARTNERS MARQUEE
      ══════════════════════════════════ */}
      <div className="bg-white py-10 border-b border-gray-100">
        <div className="container mx-auto px-4 mb-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Our Students Are Placed At</p>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">700+ Hiring Partners Across India &amp; Globally</h2>
        </div>

        <div className="overflow-hidden relative">
          {/* fade edges */}
          <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #fff, transparent)' }} />
          <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #fff, transparent)' }} />

          <div className="marquee-track flex items-center gap-6" style={{ width: 'max-content' }}>
            {[...hiringPartners, ...hiringPartners].map((p, i) =>
              p.type === 'img' ? (
                <div key={i} className="flex-shrink-0 bg-gray-50 border border-gray-100 rounded-xl px-5 py-3 h-16 flex items-center justify-center min-w-[110px]">
                  <Image src={p.src} alt={p.alt} width={100} height={56} className="h-8 w-auto object-contain" />
                </div>
              ) : (
                <div
                  key={i}
                  className="flex-shrink-0 rounded-xl px-5 py-3 h-16 flex items-center justify-center font-bold text-sm min-w-[110px] shadow-sm"
                  style={{ backgroundColor: p.bg, color: p.color }}
                >
                  {p.name}
                </div>
              )
            )}
          </div>
        </div>

        {/* marquee keyframes via inline style tag */}
        <style>{`
          .marquee-track {
            animation: marquee-scroll 45s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
          @keyframes marquee-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* ══════════════════════════════════
          CATEGORY FILTER BAR (sticky)
      ══════════════════════════════════ */}
      <div className="sticky top-0 z-20 bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div
            className="flex items-center gap-2.5 py-4 overflow-x-auto"
            style={{ scrollbarWidth: 'none' }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'text-white shadow-md scale-[1.04]'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                }`}
                style={activeCategory === cat ? { background: 'linear-gradient(135deg, #013a81, #009fda)' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          COURSE GRID
      ══════════════════════════════════ */}
      <div id="course-grid" className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {activeCategory === 'All' ? 'All Courses' : `${activeCategory} Courses`}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Showing <span className="font-semibold text-gray-800">{filtered.length}</span> of{' '}
              <span className="font-semibold text-gray-800">{COURSES.length}</span> programs
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════
          WHY CHOOSE IVY
      ══════════════════════════════════ */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#009fda] font-semibold text-sm uppercase tracking-wider mb-2">Why Students Choose Us</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">India&apos;s Most Trusted Data &amp; AI Institute</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <GraduationCap size={28} />,
                title: 'IIT & IIM Faculty',
                stat: '50+ Experts',
                desc: 'Live sessions with faculty from IIT Guwahati, IIT Patna, IIM & top MNCs — not just industry trainers',
                color: '#013a81',
              },
              {
                icon: <ShieldCheck size={28} />,
                title: 'Multi-Body Certified',
                stat: 'NASSCOM + IBM + MEITY',
                desc: 'Globally recognized certifications accepted by 700+ companies including TCS, Wipro, Accenture, Deloitte',
                color: '#009fda',
              },
              {
                icon: <Briefcase size={28} />,
                title: '100% Placement',
                stat: '37,500+ Placed',
                desc: 'PrepAI career copilot: AI resume builder, mock interviews, recruiter network & dedicated placement managers',
                color: '#f7af34',
              },
              {
                icon: <BookOpen size={28} />,
                title: 'Lifetime Learning',
                stat: '∞ Recording Access',
                desc: '30-min daily practice classes, 1:1 doubt sessions with TAs, flexible weekend & weekday batches',
                color: '#059669',
              },
            ].map(({ icon, title, stat, desc, color }) => (
              <div
                key={title}
                className="rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group"
                style={{ background: '#fff' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white"
                  style={{ background: color }}
                >
                  {icon}
                </div>
                <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color }}>{stat}</p>
                <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          ALUMNI SUCCESS STORIES
      ══════════════════════════════════ */}
      <div className="py-16" style={{ background: '#f0f7ff' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-4 py-1.5 text-[#013a81] text-sm font-semibold mb-4 shadow-sm">
              <Award size={14} />
              Success Stories
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Our Students Work At Top Companies
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Real transformations, real placements — not just testimonials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumni.map((a) => (
              <AlumniCard key={a.id} alumni={a} />
            ))}
          </div>

          {/* aggregate stats under alumni */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '37,500+', label: 'Alumni Placed' },
              { value: '₹8–35 LPA', label: 'Placement Range' },
              { value: '67%', label: 'Avg. Salary Hike' },
              { value: '4.8 / 5', label: 'Alumni Rating' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-blue-50">
                <div className="text-2xl md:text-3xl font-extrabold" style={{ color: '#013a81' }}>{value}</div>
                <div className="text-gray-500 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          ACCREDITATIONS
      ══════════════════════════════════ */}
      <div className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
            Accredited &amp; Recognised By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-5">
            {[
              { src: typeof NASSCOM === 'string' ? NASSCOM : NASSCOM.src, alt: 'NASSCOM' },
              { src: typeof IBM === 'string' ? IBM : IBM.src, alt: 'IBM' },
              { src: typeof IIT === 'string' ? IIT : IIT.src, alt: 'IIT Guwahati' },
            ].map((logo) => (
              <div key={logo.alt} className="bg-gray-50 rounded-2xl px-8 py-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <img src={logo.src} alt={logo.alt} className="h-10 w-auto object-contain" />
              </div>
            ))}
            <div className="bg-gray-50 rounded-2xl px-8 py-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: '#013a81' }}>
                  GOI
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-800 text-sm">MEITY</div>
                  <div className="text-gray-400 text-[10px]">Govt. of India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          FAQ
      ══════════════════════════════════ */}
      <div className="bg-[#f8fafc] py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-500 mt-2 text-sm">
              Everything you need to know about Ivy Pro School courses &amp; admissions
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-2xl border border-gray-200 px-6 shadow-sm hover:border-blue-200 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-5 text-sm md:text-base leading-snug">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* ══════════════════════════════════
          BOTTOM CTA BANNER
      ══════════════════════════════════ */}
      <div
        className="py-20"
        style={{ background: 'linear-gradient(145deg, #012f6b 0%, #013a81 50%, #009fda 100%)' }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-white/80 text-xs font-medium mb-5">
            <CalendarCheck size={13} />
            Free Demo — No Obligation — No Registration Fee
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
            Start Your Data &amp; AI Career Today
          </h2>
          <p className="text-blue-200 mb-8 text-base max-w-xl mx-auto">
            Join 37,500+ professionals who transformed their careers with Ivy Pro School's certified programs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/courses/data-science-and-ml-course"
              onClick={() => window.scrollTo(0, 0)}
              className="px-8 py-4 bg-[#f7af34] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-sm"
              style={{ color: '#012f6b' }}
            >
              Book Free Demo Class
            </Link>
            <Link
              href="/courses/generative-ai-course"
              onClick={() => window.scrollTo(0, 0)}
              className="px-8 py-4 border-2 border-white/60 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-sm"
            >
              Explore Gen AI Course
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────── */
/* Course Card                             */
/* ─────────────────────────────────────── */
function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">

      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-400"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <span
          className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-white text-[11px] font-bold shadow backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(1,58,129,0.85)' }}
        >
          {course.category}
        </span>
        <span
          className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-white text-[11px] font-bold shadow backdrop-blur-sm"
          style={{ backgroundColor: course.badgeColor + 'dd' }}
        >
          {course.badge}
        </span>

        {/* level pill bottom-left */}
        <span className="absolute bottom-3 left-3.5 px-2.5 py-0.5 rounded-full bg-black/50 text-white text-[10px] font-medium backdrop-blur-sm">
          {course.level}
        </span>
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col">

        <h3 className="font-extrabold text-gray-900 text-lg leading-snug mb-2.5 line-clamp-2 group-hover:text-[#013a81] transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-500 text-sm mb-5 leading-relaxed line-clamp-3">
          {course.description}
        </p>

        {/* Meta: duration, mode */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-5 pb-4 border-b border-gray-100">
          <span className="flex items-center gap-1.5">
            <Clock size={13} className="text-[#009fda]" />
            <strong className="text-gray-700">{course.duration}</strong>
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen size={13} className="text-[#009fda]" />
            {course.mode}
          </span>
        </div>

        {/* Tool Badges */}
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">Tools You&apos;ll Learn</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {course.tools.map((tool) => {
            const c = TC[tool] || { bg: '#f3f4f6', color: '#374151' };
            return (
              <span
                key={tool}
                className="px-2.5 py-1 rounded-lg text-[11px] font-semibold"
                style={{ backgroundColor: c.bg, color: c.color }}
              >
                {tool}
              </span>
            );
          })}
        </div>

        {/* Key Features */}
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">Highlights</p>
        <ul className="space-y-2 mb-5 flex-1">
          {course.keyFeatures.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
              <CheckCircle size={14} className="text-[#009fda] flex-shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>

        {/* Rating + Students */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-5 pt-4 border-t border-gray-100">
          <span className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(course.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200 fill-gray-200'}
              />
            ))}
            <span className="font-semibold text-gray-700 ml-1">{course.rating}</span>
            <span className="text-gray-400 ml-0.5">({course.reviewCount})</span>
          </span>
          <span className="flex items-center gap-1">
            <Users size={12} />
            {course.students.toLocaleString()}+ enrolled
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2.5">
          <Link
            href={`/courses/${course.slug}`}
            onClick={() => window.scrollTo(0, 0)}
            className="flex-1 text-center py-3 rounded-xl text-white text-sm font-bold transition-all hover:opacity-95 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #013a81 0%, #009fda 100%)' }}
          >
            View Details →
          </Link>
          <Link
            href={`/courses/${course.slug}`}
            onClick={() => window.scrollTo(0, 0)}
            className="px-3.5 py-3 rounded-xl text-sm font-bold border-2 transition-all hover:bg-blue-50"
            style={{ borderColor: '#013a81', color: '#013a81' }}
            title="Book Free Demo"
          >
            <CalendarCheck size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────── */
/* Alumni Card                             */
/* ─────────────────────────────────────── */
function AlumniCard({ alumni }: { alumni: AlumniItem }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-lg transition-shadow">

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <Image
          src={alumni.image}
          alt={alumni.name}
          width={52}
          height={52}
          className="w-13 h-13 rounded-full object-cover border-2 border-[#009fda]/30 flex-shrink-0"
          style={{ width: 52, height: 52 }}
        />
        <div>
          <p className="font-bold text-gray-900 text-base leading-tight">{alumni.name}</p>
          <p className="text-xs text-gray-400 mt-0.5">{alumni.course}</p>
          <div className="flex gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} className={i < alumni.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200 fill-gray-200'} />
            ))}
          </div>
        </div>
      </div>

      {/* Quote */}
      <p className="text-gray-600 text-sm italic mb-5 flex-1 leading-relaxed border-l-2 border-[#009fda] pl-3">
        &ldquo;{alumni.content}&rdquo;
      </p>

      {/* Career Progression */}
      <div className="rounded-xl p-4" style={{ background: 'linear-gradient(to right, #eff6ff, #fefce8)' }}>
        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-3 text-center">Career Progression</p>
        <div className="flex items-center justify-between">

          <div className="text-center flex-1 min-w-0">
            {alumni.from.logo ? (
              <Image src={alumni.from.logo} alt={alumni.from.company} width={64} height={32} className="h-8 w-auto mx-auto object-contain" />
            ) : (
              <span className="text-sm font-bold text-gray-500">{alumni.from.company}</span>
            )}
            {alumni.from.role && (
              <p className="text-[9px] text-gray-400 mt-1 truncate">{alumni.from.role}</p>
            )}
          </div>

          <div className="mx-3 flex-shrink-0">
            <div className="w-6 h-6 rounded-full flex items-center justify-center shadow-sm" style={{ background: 'linear-gradient(135deg, #009fda, #f7af34)' }}>
              <ArrowRight size={10} className="text-white" />
            </div>
          </div>

          <div className="text-center flex-1 min-w-0">
            {alumni.to.logo ? (
              <Image src={alumni.to.logo} alt={alumni.to.company} width={64} height={32} className="h-8 w-auto mx-auto object-contain" />
            ) : (
              <span className="text-sm font-bold text-gray-700">{alumni.to.company}</span>
            )}
            <p className="text-[9px] text-gray-400 mt-1 truncate">{alumni.to.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
