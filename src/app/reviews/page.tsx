"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Star, Play, ChevronDown, ChevronUp, ArrowRight, Quote, CheckCircle, Briefcase, TrendingUp, Users, Award, ExternalLink } from "lucide-react";

// ─── Alumni images (subset for reviews page) ───────────────────────────────
import AmazonLogo from "@/assests/amazon.webp";
import DeloitteLogo from "@/assests/deloitte.webp";
import PwCLogo from "@/assests/placement/PWC.webp";
import IBMLogo from "@/assests/placement/IBM_MAIN.webp";
import AccentureLogo from "@/assests/placement/accenture.webp";

import PritiJha from "@/assests/alumni/PritiJha.webp";
import AbhinavSinha from "@/assests/alumni/AbhinavSinha.webp";
import AnishBanerjee from "@/assests/alumni/AnishBanerjee.webp";
import PranabKumarPaul from "@/assests/alumni/PranabKumarPaul.webp";
import SarveshLunia from "@/assests/alumni/SarveshLunia.webp";
import MrinalDhar from "@/assests/alumni/MrinalDhar.webp";
import AnkitaPaul from "@/assests/alumni/AnkitaPaul.webp";
import DebapriyaGhosh from "@/assests/alumni/DebapriyaGhosh.webp";
import SatyajitPramanik from "@/assests/alumni/SatyajitPramanik.webp";
import SnehaBaid from "@/assests/alumni/SnehaBaid.webp";
import SankhadiptyaPaul from "@/assests/alumni/SankhadiptyaPaul.webp";
import SunandaKumari from "@/assests/alumni/SunandaKumari.webp";
import BalkrishnaAgarwal from "@/assests/alumni/BalkrishnaAgarwal.webp";
import UdayJaiswal from "@/assests/alumni/UdayJaiswal.webp";
import SayantaniChoudhury from "@/assests/alumni/SayantaniChoudhury.webp";
import SayanNayak from "@/assests/alumni/SayanNayak.webp";
import AninditaMaity from "@/assests/alumni/AninditaMaity.webp";
import PathikritGanguly from "@/assests/alumni/PathikritGanguly.webp";
import ShrutiBanerjee from "@/assests/alumni/ShrutiBanerjee.webp";
import NaiwritaBoral from "@/assests/alumni/NaiwritaBoral.webp";
import type { StaticImageData } from "next/image";

// ─── Types ───────────────────────────────────────────────────────────────────
interface VideoReview {
  id: string;
  name: string;
  role: string;
  company: string;
  course: string;
  courseSlug: string;
  hikeLabel: string;
  image: StaticImageData;
  videoId: string | null; // null = placeholder shown
  quote: string;
  category: string;
  linkedin?: string;
}

interface WrittenReview {
  id: string;
  name: string;
  role: string;
  prevRole: string;
  company: string;
  course: string;
  courseSlug: string;
  image: StaticImageData;
  rating: number;
  review: string;
  location: string;
  category: string;
  linkedin?: string;
}

// ─── VIDEO REVIEW DATA ────────────────────────────────────────────────────────
// videoId: null = placeholder (video not yet linked); add YouTube ID when available
const videoReviews: VideoReview[] = [
  {
    id: "v1",
    name: "Priti Jha",
    role: " Business Intelligence Engineer",
    company: "Amazon",
    course: "Data Science with ML & AI",
    courseSlug: "data-science-course",
    hikeLabel: "200% Salary Hike",
    image: PritiJha,
    videoId: null,
    quote:
      "I started with zero coding background. Ivy Pro School’s structured program and live mentorship gave me the confidence to crack my first analytics interview. Today, I work at Amazon—something I never imagined possible..",
    category: "Data Science",
    linkedin: "https://linkedin.com/in/priti-jha/",
  },
  {
    id: "v2",
    name: "Abhinav Sinha",
    role: "Strategic Insights Analyst",
    company: "LinkedIn",
    course: "Data Science with ML & AI",
    courseSlug: "data-science-course",
    hikeLabel: "400% Salary Hike",
    image: AbhinavSinha,
    videoId: null,
    quote:
      "From a non-tech background to Amazon in just 8 months—Ivy Pro School made it possible. The IIT Guwahati certification added real credibility to my resume, and the placement team supported me every step of the way.",
    category: "Data Science",
    linkedin: "https://linkedin.com/in/abhinavsinhalinkedin/",
  },
  {
    id: "v3",
    name: "Anish Banerjee",
    role: " Senior Analyst",
    company: "Deloitte",
    course: "Data Analytics and Generative AI",
    courseSlug: "data-analytics-course",
    hikeLabel: "3× Salary Growth",
    image: AnishBanerjee,
    videoId: null,
    quote:
      "The Analytics + GenAI curriculum is exactly what the market demands today. The mock interviews at Ivy were even tougher than the real one.",
    category: "Data Analytics",
    linkedin: "https://linkedin.com/in/anish-banerjee-07a218134/",
  },
  {
    id: "v4",
    name: "Pranab Kumar Paul",
    role: "AWS Data Engineer",
    company: "Tata Consultancy Services",
    course: "Generative AI Course",
    courseSlug: "generative-ai-course",
    hikeLabel: "Top Performer",
    image: PranabKumarPaul,
    videoId: null,
    quote:
      "The Generative AI course at Ivy Pro is one of the most practical programs I’ve come across in India. We built real GenAI tools from scratch, not just learned from slides. PwC hired me specifically for the projects I worked on during the course.",
    category: "Generative AI",
    linkedin: "https://linkedin.com/in/pranabkumarpaul/",
  },
  {
    id: "v5",
    name: "Sarvesh Lunia",
    role: "Business Coordinator",
    company: "Uniper",
    course: "Cloud Data Engineering",
    courseSlug: "cloud-data-engineering-course",
    hikeLabel: "60% Hike",
    image: SarveshLunia,
    videoId: null,
    quote:
      "The Cloud Data Engineering programme with IIT Guwahati equipped me with in-demand skills in Azure and Spark—exactly what Uniper was looking for. The real-world capstone project played a key role in securing my interview.",
    category: "Data Engineering",
    linkedin: "https://linkedin.com/in/sarvesh-lunia/",
  },
  {
    id: "v6",
    name: "Mrinal Dhar",
    role: "Data Scientis",
    company: "Cognizant ",
    course: "Data Engineering Course",
    courseSlug: "data-engineering-course",
    hikeLabel: "55% Hike",
    image: MrinalDhar,
    videoId: null,
    quote:
      "With two years of experience, I felt stuck in my career. After completing Ivy Pro’s Data Engineering programme, I was able to move up two levels. The faculty are industry practitioners, not just theorists.",
    category: "Data Engineering",
    linkedin: "https://linkedin.com/in/mrinal-dhar-387800164/",
  },
];

// ─── WRITTEN REVIEW DATA ──────────────────────────────────────────────────────
const writtenReviews: WrittenReview[] = [
  {
    id: "w1",
    name: "Ankita Paul",
    role: "Data Scientist",
    prevRole: "HR Executive",
    company: "Ipsos",
    course: "Data Science with ML & AI",
    courseSlug: "data-science-course",
    image: AnkitaPaul,
    rating: 5,
    review:
      "Switching from HR to Data Science felt impossible until I found Ivy Pro. The curriculum is designed for career switchers — no prior coding needed. I joined Ipsos 5 months after enrolling.",
    location: "Kolkata",
    category: "Data Science",
    linkedin: "https://linkedin.com/in/ankita-paul-872713105/",
  },
  {
    id: "w2",
    name: "Debapriya Ghosh",
    role: "Business Analyst",
    prevRole: "Sales Manager",
    company: "LinkedIn",
    course: "Data Analytics and Generative AI",
    courseSlug: "data-analytics-course",
    image: DebapriyaGhosh,
    rating: 5,
    review:
      "The blended learning format — live classes + recorded sessions + mentor calls — fits a working professional's schedule perfectly. I never missed a beat while working full-time.",
    location: "Bangalore",
    category: "Data Analytics",
    linkedin: "https://linkedin.com/in/debapriya-ghosh/",
  },
  {
    id: "w3",
    name: "Satyajit Pramanik",
    role: "ML Engineer",
    prevRole: "Civil Engineer",
    company: "Google",
    course: "Generative AI Course",
    courseSlug: "generative-ai-course",
    image: SatyajitPramanik,
    rating: 5,
    review:
      "As a civil engineer, I was sceptical about AI. But the instructors made it approachable step by step. The IIT Guwahati certification is genuinely respected — Google hired me after seeing it.",
    location: "Hyderabad",
    category: "Generative AI",
    linkedin: "https://linkedin.com/in/satyajitpramanik/",
  },
  {
    id: "w4",
    name: "Sneha Baid",
    role: "Data Analyst",
    prevRole: "Operations Executive",
    company: "Accenture",
    course: "Data Analytics with Visualization",
    courseSlug: "data-analytics-visualization-course",
    image: SnehaBaid,
    rating: 5,
    review:
      "The Tableau & Power BI modules are extremely hands-on. By week 3 I was building real dashboards. Accenture's panel appreciated my portfolio projects during the interview — Ivy Pro made those happen.",
    location: "Mumbai",
    category: "Data Analytics",
    linkedin: "https://linkedin.com/in/baidsneha/",
  },
  {
    id: "w5",
    name: "Sankhadiptya Paul",
    role: "Data Engineer",
    prevRole: "Software Tester",
    company: "Cognizant",
    course: "Data Engineering Course",
    courseSlug: "data-engineering-course",
    image: SankhadiptyaPaul,
    rating: 5,
    review:
      "Moved from manual testing to data engineering in 6 months. The live project on building ETL pipelines was the highlight — I literally described that project in my Cognizant interview and got hired.",
    location: "Chennai",
    category: "Data Engineering",
    linkedin: "https://linkedin.com/in/sankhadiptya-paul-381658146/",
  },
  {
    id: "w6",
    name: "Sunanda Kumari",
    role: "Product Analyst",
    prevRole: "Fresher",
    company: "Flipkart",
    course: "Data Science with ML & AI",
    courseSlug: "data-science-course",
    image: SunandaKumari,
    rating: 5,
    review:
      "As a fresher with no work experience, I was worried. Ivy Pro's placement cell treated me like a priority. Resume workshops, LinkedIn optimisation, mock GDs — all included. Flipkart hired me fresh out of the course.",
    location: "Kolkata",
    category: "Data Science",
    linkedin: "https://linkedin.com/in/sunanda-kumari-07b9971a7/",
  },
  {
    id: "w7",
    name: "Balkrishna Agarwal",
    role: "Senior Data Scientist",
    prevRole: "Finance Analyst",
    company: "Goldman Sachs",
    course: "Data Science with ML & AI",
    courseSlug: "data-science-course",
    image: BalkrishnaAgarwal,
    rating: 5,
    review:
      "Finance to Data Science is a natural move but companies want proof of skills. The IIT Guwahati certificate + the 10+ projects I built at Ivy Pro gave me that proof. Goldman Sachs came through campus placement.",
    location: "Mumbai",
    category: "Data Science",
    linkedin: "https://linkedin.com/in/balkrishnaagarwal/",
  },
  {
    id: "w8",
    name: "Uday Jaiswal",
    role: "AI Engineer",
    prevRole: "Content Writer",
    company: "NASSCOM",
    course: "Generative AI Course",
    courseSlug: "generative-ai-course",
    image: UdayJaiswal,
    rating: 5,
    review:
      "No tech background, was a content writer. Ivy Pro's GenAI course showed me how to use AI tools professionally — prompt engineering, LLM APIs, building bots. The NASSCOM co-branded certificate added great value.",
    location: "Delhi",
    category: "Generative AI",
    linkedin: "https://linkedin.com/in/uday-prakash-jaiswal-877501b7/",
  },
  {
    id: "w9",
    name: "Sayantani Choudhury",
    role: "Data Scientist",
    prevRole: "Pharmacist",
    company: "Novartis",
    course: "Data Science with ML & AI",
    courseSlug: "data-science-course",
    image: SayantaniChoudhury,
    rating: 5,
    review:
      "Pharmacy to Data Science sounds wild but Ivy Pro made it logical. Healthcare analytics is booming and Novartis picked me because I could combine domain knowledge with data science skills.",
    location: "Kolkata",
    category: "Data Science",
    linkedin: "https://linkedin.com/in/sayantanichoudhury97/",
  },
  {
    id: "w10",
    name: "Sayan Nayak",
    role: "Data Analyst",
    prevRole: "BPO Executive",
    company: "EY",
    course: "Data Analytics and Generative AI",
    courseSlug: "data-analytics-course",
    image: SayanNayak,
    rating: 5,
    review:
      "Was stuck in BPO for 4 years. Ivy Pro's evening batch was a lifesaver — classes after 7 PM so I could continue working. Got placed at EY within 4 months.",
    location: "Kolkata",
    category: "Data Analytics",
    linkedin: "https://linkedin.com/in/sayan-nayak-68b529135/",
  },
  {
    id: "w11",
    name: "Anindita Maity",
    role: "ML Engineer",
    prevRole: "School Teacher",
    company: "TCS",
    course: "Data Science with ML & AI",
    courseSlug: "data-science-course",
    image: AninditaMaity,
    rating: 5,
    review:
      "Teaching maths for 7 years gave me a strong foundation, but I needed practical skills. Ivy Pro's programme bridged that gap perfectly. TCS hired me for their AI team and I couldn't be happier.",
    location: "Kolkata",
    category: "Data Science",
    linkedin: "https://linkedin.com/in/anindita-maity-191758175/",
  },
  {
    id: "w12",
    name: "Pathikrit Ganguly",
    role: "Senior Analyst",
    prevRole: "Operations Manager",
    company: "KPMG",
    course: "Data Analytics and Generative AI",
    courseSlug: "data-analytics-course",
    image: PathikritGanguly,
    rating: 5,
    review:
      "The faculty at Ivy Pro are industry practitioners — my Python instructor was a working data scientist at a Big 4. That industry connect translated directly into placement at KPMG.",
    location: "Bangalore",
    category: "Data Analytics",
    linkedin: "https://linkedin.com/in/pathikrit-ganguly-kol/",
  },
  {
    id: "w13",
    name: "Shruti Banerjee",
    role: "Data Engineer",
    prevRole: "Java Developer",
    company: "Infosys",
    course: "Cloud Data Engineering",
    courseSlug: "cloud-data-engineering-course",
    image: ShrutiBanerjee,
    rating: 5,
    review:
      "Moving from Java development to cloud data engineering was seamless with Ivy Pro. The Azure + Databricks modules are world-class. Infosys promoted me internally based on the new skills I brought back.",
    location: "Pune",
    category: "Data Engineering",
    linkedin: "https://linkedin.com/in/shruti-banerjee06/",
  },
  {
    id: "w14",
    name: "Naiwritа Boral",
    role: "Business Intelligence Analyst",
    prevRole: "Admin Executive",
    company: "HDFC Bank",
    course: "Data Analytics with Visualization",
    courseSlug: "data-analytics-visualization-course",
    image: NaiwritaBoral,
    rating: 5,
    review:
      "The Power BI dashboard I built during the course became my interview portfolio piece. HDFC Bank's analytics team was impressed enough to fast-track my selection. Career changed in 5 months.",
    location: "Kolkata",
    category: "Data Analytics",
    linkedin: "https://linkedin.com/in/naiwrita-boral/",
  },
];

// ─── PLACEMENT PARTNERS LOGOS (Illustrative) ────────────────────────────────
const placementPartners = [
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Deloitte", logo: "https://logo.clearbit.com/deloitte.com" },
  { name: "PwC", logo: "https://logo.clearbit.com/pwc.com" },
  { name: "EY", logo: "https://logo.clearbit.com/ey.com" },
  { name: "KPMG", logo: "https://logo.clearbit.com/kpmg.com" },
  { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
  { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
  { name: "Flipkart", logo: "https://logo.clearbit.com/flipkart.com" },
  { name: "HSBC", logo: "https://logo.clearbit.com/hsbc.com" },
];

// ─── FAQ DATA (AEO / Featured Snippets optimised) ────────────────────────────
const FAQ_DATA = [
  {
    question: "Is Ivy Professional School legitimate and trustworthy?",
    answer:
      "**Yes.** Ivy Professional School has been operating since **2008** with **37,500+ alumni** now placed at companies like **Amazon, Google, IBM, Deloitte, PwC, and LinkedIn**. The institute is rated **4.9/5** across 1,300+ verified student reviews. Courses are co-certified with **IIT Guwahati** and endorsed by **NASSCOM and IBM**.",
  },
  {
    question: "What is the average salary hike after completing an Ivy Pro School course?",
    answer:
      "Students typically report **40%–60% salary hikes** after completing an Ivy Pro School course. Top performers transitioning from non-tech backgrounds into Data Science roles have reported hikes of **200%–400%**. For example, Priti Jha achieved a **200% hike** and Abhinav Sinha achieved a **400% hike** after placement at HSBC and Amazon respectively.",
  },
  {
    question: "Are the reviews on Ivy Professional School's website verified?",
    answer:
      "The success stories and reviews featured on this page are based on **real students who completed courses at Ivy Pro School** and are currently working at the mentioned companies. Many students have LinkedIn profiles linked from their alumni profiles. Video testimonials capture students speaking in their own words about their experience and career outcomes.",
  },
  {
    question: "How long does it take to get placed after an Ivy Pro School course?",
    answer:
      "The typical placement timeline is **3–6 months** after completing the course. Students who are actively engaged with the placement support cell — attending mock interviews, completing LinkedIn optimisation, and applying to recommended job openings — are placed fastest. Some students are placed even before course completion.",
  },
  {
    question: "Does Ivy Pro School work for students from non-technical backgrounds?",
    answer:
      "**Yes — the majority of Ivy Pro's success stories come from non-tech backgrounds.** Alumni who were previously homemakers, pharmacists, school teachers, BPO executives, content writers, and civil engineers have successfully transitioned to Data Science and AI roles at top firms. The curriculum is designed to start from fundamentals with no prior coding required.",
  },
  {
    question: "What makes Ivy Professional School different from other data science institutes in India?",
    answer:
      "Key differentiators include: (1) **IIT Guwahati co-certification** — a government institution's stamp on your resume; (2) **Pay After Placement** option for eligible students; (3) **Industry mentors** who are active practitioners at top firms; (4) **37,500+ alumni network** for peer mentorship and referrals; (5) **Lifetime placement support** — not just 6 months.",
  },
  {
    question: "Can I watch video reviews of Ivy Professional School students?",
    answer:
      "Yes. Ivy Professional School has a **YouTube channel** with video testimonials from alumni. Featured students like **Priti Jha, Abhinav Sinha, Anish Banerjee, and Pranab Kumar Paul** have shared their complete career transformation stories on video. You can also visit our **Alumni page** to read detailed profiles and connect with graduates on LinkedIn.",
  },
];

const FILTER_CATEGORIES = ["All", "Data Science", "Data Analytics", "Generative AI", "Data Engineering"];

const STARS_OVERALL = 4.8;
const TOTAL_REVIEWS = 1300;

// ─── Component ────────────────────────────────────────────────────────────────
export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const filteredVideoReviews = useMemo(
    () =>
      activeFilter === "All"
        ? videoReviews
        : videoReviews.filter((v) => v.category === activeFilter),
    [activeFilter]
  );

  const filteredWrittenReviews = useMemo(
    () =>
      activeFilter === "All"
        ? writtenReviews
        : writtenReviews.filter((w) => w.category === activeFilter),
    [activeFilter]
  );

  const renderBold = (text: string) =>
    text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i} className="font-bold text-[#013a81]">
          {part.slice(2, -2)}
        </strong>
      ) : (
        part
      )
    );

  // Enhanced Schema data for better SEO/AEO
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Ivy Professional School",
      url: "https://ivyproschool.com",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: STARS_OVERALL,
        bestRating: "5",
        worstRating: "1",
        ratingCount: TOTAL_REVIEWS,
        reviewCount: TOTAL_REVIEWS,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_DATA.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer.replace(/\*\*/g, ""),
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Ivy Professional School Student Reviews",
      description:
        "Verified reviews from students who completed Data Science, AI and Analytics courses at Ivy Professional School.",
      itemListElement: writtenReviews.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Review",
          author: { "@type": "Person", name: r.name },
          reviewRating: {
            "@type": "Rating",
            ratingValue: r.rating,
            bestRating: 5,
          },
          reviewBody: r.review,
          itemReviewed: {
            "@type": "EducationalOrganization",
            name: "Ivy Professional School",
          },
        },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">

        {/* ── HERO SECTION with Dynamic Gradient ─────────────────────────────── */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#009fda]/5 via-transparent to-[#f7af34]/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f7af34]/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#009fda]/20 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-7xl mx-auto px-4 pt-12 pb-16 relative">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-[#009fda] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <span className="text-[#009fda] font-semibold">Success Stories & Reviews</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f7af34]/10 to-[#009fda]/10 text-[#013a81] text-sm font-bold px-4 py-2 rounded-full mb-6 border border-[#f7af34]/30">
                  <Award className="w-4 h-4 text-[#f7af34]" /> Trusted by 37,500+ Professionals
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-4 leading-[1.2]">
                  Turn Potential into               <span className="bg-gradient-to-r from-[#009fda] to-[#013a81] bg-clip-text text-transparent"> Proven Careers    </span>
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Join <strong className="text-[#009fda]"> 37,500+ professionals </strong>  who have successfully transitioned into high-growth roles in
                  <strong className="text-[#013a81]">  Data Science, Generative AI, and Analytics with Ivy Professional School.</strong>.  Explore real learner journeys through in-depth reviews, career transformation stories, and video testimonials.
                </p>
                <div className="flex flex-wrap gap-4 mb-8 items-center">
                  {/* Read Reviews Button */}
                  <Link
                    href="#written-reviews"
                    className="w-64 h-14 border-2 border-[#009fda] text-[#009fda] hover:bg-[#009fda]/5 font-bold rounded-full transition-all flex items-center justify-center gap-2"
                  >
                    Read Reviews <Star className="w-4 h-4 fill-[#f7af34] text-[#f7af34]" />
                  </Link>

                  {/* Watch Journey Button */}
                  <a
                    href="#watch-journey"
                    className="w-64 h-14 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#009fda] to-[#013a81] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                  >
                    <Play className="w-5 h-5 fill-white" />
                    Watch Their Journey
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                    <TrendingUp className="w-4 h-4 text-[#009fda]" />
                    <span>400% Top Hike</span>
                  </div>
                  <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                    <Users className="w-4 h-4 text-[#009fda]" />
                    <span>500+ Hiring Partners</span>
                  </div>
                </div>
              </div>

              {/* Hero Right - Rating Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 relative">
                <div className="absolute -top-3 -right-3 bg-[#f7af34] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">#1 Rated</div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl font-extrabold text-[#013a81]">{STARS_OVERALL}</div>
                  <div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-[#f7af34] text-[#f7af34]" />)}
                    </div>
                    <p className="text-sm text-gray-500">{TOTAL_REVIEWS.toLocaleString()}+ Verified Reviews</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Placement Rate", value: "93%", color: "#009fda" },
                    { label: "Average Starting Package", value: "₹8.5 LPA", color: "#013a81" },
                    { label: "Alumni Network", value: "37,500+", color: "#f7af34" }
                  ].map(stat => (
                    <div key={stat.label} className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">{stat.label}</span>
                      <span className="font-bold text-gray-900">{stat.value}</span>
                      <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: stat.value === "93%" ? "93%" : stat.value === "₹8.5 LPA" ? "85%" : "100%", backgroundColor: stat.color }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PLACEMENT PARTNERS SECTION ────────────────────────────────────── */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-xs md:text-sm uppercase tracking-[0.2em] text-gray-500 font-bold mb-12">
              Our Alumni Are Placed At
            </p>

            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              {[
                { name: "Amazon", logo: AmazonLogo },
                { name: "Deloitte", logo: DeloitteLogo },
                { name: "PwC", logo: PwCLogo },
                { name: "IBM", logo: IBMLogo },
                { name: "Accenture", logo: AccentureLogo },
              ].map((partner) => (
                <div
                  key={partner.name}
                  className="flex justify-center transition-transform duration-300 hover:scale-105"
                >
                  <div className={`relative ${partner.name === "Accenture"
                      ? "w-48 h-20 md:w-60 md:h-24" // Extra large for Accenture
                      : "w-32 h-14 md:w-40 md:h-16" // Standard size for others
                    }`}>
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ─── FILTER TABS with Enhanced Design ──────────────────────────────── */}
        <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
              <span className="text-xs font-bold text-gray-400 mr-2 shrink-0">Filter by:</span>
              {FILTER_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeFilter === cat
                    ? "bg-[#009fda] text-white shadow-md"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-[#009fda] border border-gray-200"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── VIDEO REVIEWS with Modern Card Design ──────────────────────────── */}
        <section id="watch-journey" className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Watch Their <span className="bg-gradient-to-r from-[#009fda] to-[#013a81] bg-clip-text text-transparent">Journey</span>
              </h2>
              <p className="text-gray-500 mt-2">Video testimonials from alumni now at top global companies</p>
            </div>
            <Link href="/alumni" className="hidden md:flex items-center gap-2 text-[#009fda] font-semibold hover:gap-3 transition-all">
              View All Alumni <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideoReviews.map((review) => (
              <div key={review.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
                <div className="relative aspect-video bg-gradient-to-br from-[#009fda]/20 to-[#013a81]/20 overflow-hidden">
                  {review.videoId ? (
                    playingVideo === review.id ? (
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube-nocookie.com/embed/${review.videoId}?autoplay=1&rel=0`}
                        title={`${review.name} — Ivy Pro School video review`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <Image
                          src={`https://img.youtube.com/vi/${review.videoId}/hqdefault.jpg`}
                          alt={`${review.name} video testimonial thumbnail`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
                          <button
                            onClick={() => setPlayingVideo(review.id)}
                            className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                            aria-label={`Play ${review.name}'s testimonial video`}
                          >
                            <Play className="w-7 h-7 text-[#009fda] fill-[#009fda] ml-1" />
                          </button>
                        </div>
                      </>
                    )
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-3 p-6 text-center w-full h-full bg-gradient-to-br from-gray-50 to-gray-100">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                        <Image src={review.image} alt={review.name} width={80} height={80} className="object-cover" />
                      </div>
                      <p className="text-xs text-gray-500">Full video coming soon on our YouTube</p>
                      <a href="https://www.youtube.com/@ivyproschool" target="_blank" rel="noopener noreferrer" className="text-[#009fda] text-xs font-semibold hover:underline">Watch more →</a>
                    </div>
                  )}
                  <span className="absolute top-3 right-3 bg-[#f7af34] text-[#013a81] text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md">
                    {review.hikeLabel}
                  </span>
                </div>

                <div className="p-5 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Image src={review.image} alt={review.name} width={48} height={48} className="rounded-full object-cover border-2 border-[#009fda]/20" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-gray-900">{review.name}</h3>
                        {review.linkedin && (
                          <a
                            href={review.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${review.name} LinkedIn profile`}
                            className="flex-shrink-0"
                          >
                            <svg className="w-4 h-4 text-[#0077B5] hover:opacity-80 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-[#009fda] font-semibold">{review.role} · {review.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-[#f7af34] text-[#f7af34]" />)}
                  </div>
                  <blockquote className="relative">
                    <Quote className="w-5 h-5 text-[#009fda]/20 absolute -top-1 -left-1" />
                    <p className="text-gray-600 text-sm leading-relaxed pl-4 italic">"{review.quote}"</p>
                  </blockquote>
                  {/* <Link href={`/courses/${review.courseSlug}`} className="inline-block mt-4 text-xs font-semibold text-[#009fda] hover:underline">
                    View Course →
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WRITTEN REVIEWS with Modern Masonry Layout ──────────────────────── */}
        <section id="written-reviews" className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                What Our <span className="text-[#009fda]">Alumni Say</span>
              </h2>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto">Verified reviews from students who transformed their careers with Ivy Pro</p>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-0">
              {filteredWrittenReviews.map((r) => (
                <div key={r.id} className="break-inside-avoid bg-white rounded-2xl p-6 mb-6 shadow-md hover:shadow-xl transition-all border border-gray-100">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map(s => (
                      <Star key={s} className={`w-4 h-4 ${s <= r.rating ? "fill-[#f7af34] text-[#f7af34]" : "text-gray-200"}`} />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-sm leading-relaxed mb-5 italic">"{r.review}"</blockquote>
                  <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                    <Image src={r.image} alt={r.name} width={44} height={44} className="rounded-full object-cover border-2 border-[#009fda]/20" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-gray-900">{r.name}</p>
                        {r.linkedin && (
                          <a
                            href={r.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${r.name} LinkedIn profile`}
                            className="flex-shrink-0"
                          >
                            <svg className="w-3.5 h-3.5 text-[#0077B5] hover:opacity-80 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-[#009fda] font-semibold">{r.role} · {r.company}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-[10px] text-gray-400 line-through">{r.prevRole}</span>
                        <ArrowRight className="w-2.5 h-2.5 text-gray-300" />
                        <span className="text-[10px] text-gray-500">{r.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Watch Their Journey Button */}

          </div>
        </section>

        {/* ── TRUST BAND with Gradient ────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#009fda] to-[#013a81] py-16 text-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="max-w-5xl mx-auto px-4 text-center relative">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Your Career Transformation Starts Here</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Join 37,500+ alumni who trusted Ivy Pro for their career growth. Courses co-certified with IIT Guwahati, backed by NASSCOM & IBM.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/courses/data-science-and-ml-course" className="bg-white text-[#009fda] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                Explore Data Science <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="courses/iit-generative-ai-course" className="bg-transparent border-2 border-white/50 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
                Explore GenAI <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ with Enhanced Styling ───────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 text-center">Frequently Asked Questions</h2>
          <p className="text-center text-gray-500 mb-10">Everything you need to know about Ivy Pro School</p>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-lg">
            {FAQ_DATA.map((faq, idx) => (
              <div key={idx} className="transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors group"
                >
                  <span className="font-semibold text-gray-800 group-hover:text-[#009fda] transition-colors">{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#009fda] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 group-hover:text-[#009fda]" />
                  )}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? "max-h-96" : "max-h-0"}`}>
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {renderBold(faq.answer)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA with Bold Design ───────────────────────────────────────── */}
        <section className="bg-white border-t border-gray-100 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Ready to Write Your Own Success Story?</h2>
              <p className="text-gray-500 mb-8">Talk to a career counselor, check your eligibility, or explore our course catalogue — all for free.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact-us" className="bg-[#009fda] hover:bg-[#013a81] text-white font-bold px-8 py-3 rounded-full transition-all shadow-md hover:shadow-xl flex items-center gap-2">
                  Talk to a Counselor <ArrowRight className="w-4 h-4" />
                </Link>
                {/* <Link href="/courses/data-science-course" className="border-2 border-[#009fda] text-[#009fda] hover:bg-[#009fda] hover:text-white font-bold px-8 py-3 rounded-full transition-all">
                  Explore All Courses
                </Link> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}