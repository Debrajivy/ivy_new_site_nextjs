"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  Database,
  FileText,
  PlayCircle,
  Sparkles,
  Users,
} from "lucide-react";

type BootcampCategory = "Data Engineering" | "AI Agent" | "SQL" | "Claude AI" | "AI Apps";

interface BootcampRecording {
  id: string;
  videoId: string;
  title: string;
  category: BootcampCategory;
  youtubeUrl: string;
  thumbnail: string;
  summary: string;
}

interface UpcomingBootcamp {
  title: string;
  date: string;
  time: string;
  mentor: string;
  outcomes: string[];
}

const latestRecordings: BootcampRecording[] = [
  {
    id: "de-ai-era",
    videoId: "gJaAinGssMY",
    title: "Data Engineering in the AI Era | Live Bootcamp for Beginners to Advanced",
    category: "Data Engineering",
    youtubeUrl: "https://www.youtube.com/watch?v=gJaAinGssMY",
    thumbnail: "https://i.ytimg.com/vi/gJaAinGssMY/hqdefault.jpg",
    summary: "A practical walkthrough of modern data engineering skills, tools, and AI-era workflows.",
  },
  {
    id: "claude-doc-agent",
    videoId: "pZRU5wXpDzA",
    title: "How to Use Claude to Create an AI Agent to Summarize Documents | Claude AI Bootcamp 2026",
    category: "Claude AI",
    youtubeUrl: "https://www.youtube.com/watch?v=pZRU5wXpDzA",
    thumbnail: "https://i.ytimg.com/vi/pZRU5wXpDzA/hqdefault.jpg",
    summary: "Build a document summarization workflow with Claude and understand how AI agents support knowledge work.",
  },
  {
    id: "text-to-sql-agent",
    videoId: "uukEZ8cPJ7g",
    title: "Build a Text-to-SQL AI Agent: Generate SQL Queries from Natural Language",
    category: "SQL",
    youtubeUrl: "https://www.youtube.com/watch?v=uukEZ8cPJ7g&t=119s",
    thumbnail: "https://i.ytimg.com/vi/uukEZ8cPJ7g/hqdefault.jpg",
    summary: "Learn how natural-language prompts can be converted into SQL queries for analytics workflows.",
  },
  {
    id: "free-ai-apps",
    videoId: "nXxvyuxpYkI",
    title: "Stop Paying for Claude Code | Build & Deploy AI Apps for FREE",
    category: "AI Apps",
    youtubeUrl: "https://www.youtube.com/watch?v=nXxvyuxpYkI&t=13s",
    thumbnail: "https://i.ytimg.com/vi/nXxvyuxpYkI/hqdefault.jpg",
    summary: "Explore a no-cost path to building and deploying AI apps without heavy tooling overhead.",
  },
  {
    id: "claude-data-ai-pro",
    videoId: "XR56kedmoLo",
    title: "How to Use Claude AI as a Data & AI Professional | Free Hands-on Bootcamp (2026)",
    category: "Claude AI",
    youtubeUrl: "https://www.youtube.com/watch?v=XR56kedmoLo&t=14s",
    thumbnail: "https://i.ytimg.com/vi/XR56kedmoLo/hqdefault.jpg",
    summary: "A hands-on session for using Claude AI across data analysis, reporting, and professional workflows.",
  },
];

const upcomingBootcamp: UpcomingBootcamp = {
  title: "Live Data & AI Career Bootcamp",
  date: "New schedule opening soon",
  time: "Evening live session",
  mentor: "Ivy Professional School faculty",
  outcomes: [
    "Understand current Data, AI, and Analytics career paths",
    "See practical workflows used by working professionals",
    "Get a clear next-step roadmap for hands-on learning",
  ],
};

const categoryStyles: Record<BootcampCategory, string> = {
  "Data Engineering": "bg-cyan-50 text-cyan-700 border-cyan-100",
  "AI Agent": "bg-indigo-50 text-indigo-700 border-indigo-100",
  SQL: "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Claude AI": "bg-violet-50 text-violet-700 border-violet-100",
  "AI Apps": "bg-amber-50 text-amber-700 border-amber-100",
};

const stats = [
  { label: "Learners reached", value: "1 Lakh+" },
  { label: "Success alumni", value: "37K+" },
  { label: "Latest recordings", value: "5" },
];

const BootcampPage = () => {
  const featuredRecording = latestRecordings[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="bg-[#013a81] text-white">
        <div className="container mx-auto px-4 py-14 md:py-20">
          <Badge
            style={{
              backgroundColor: "rgba(78,174,195,0.16)",
              color: "#c8f4ff",
              border: "1px solid rgba(78,174,195,0.35)",
            }}
            className="mb-5 font-normal"
          >
            <nav className="flex items-center gap-1 text-xs">
              <Link href="/">Home</Link>
              <span>/</span>
              <span className="font-semibold text-white">Bootcamp</span>
            </nav>
          </Badge>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-slate-100">
                <Sparkles className="h-4 w-4 text-[#7dd3e8]" />
                Free live workshops and recorded masterclasses
              </div>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                Data & AI bootcamps built for serious upskilling
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
                Join practical sessions on Data Engineering, AI agents, SQL, Claude AI, and analytics workflows. Learn through real demos instead of generic lectures.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/bootcampregister"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#4eaec3] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/10 transition-colors hover:bg-[#3f9db1]"
                >
                  Register for next bootcamp
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#recordings"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/15"
                >
                  Watch latest recordings
                  <PlayCircle className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-9 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/15 bg-white/10 p-4">
                    <p className="text-2xl font-black text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={featuredRecording.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl shadow-black/20"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img
                  src={featuredRecording.thumbnail}
                  alt={featuredRecording.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.src = `https://img.youtube.com/vi/${featuredRecording.videoId}/hqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-900">Latest bootcamp</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <p className="text-lg font-bold leading-snug text-white">{featuredRecording.title}</p>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4eaec3] text-white shadow-lg transition-transform group-hover:scale-105">
                    <PlayCircle className="h-6 w-6" />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="container mx-auto grid gap-6 px-4 py-8 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <CalendarDays className="mt-1 h-5 w-5 text-[#4eaec3]" />
              <div>
                <p className="text-sm font-bold text-slate-900">Upcoming session</p>
                <p className="mt-1 text-sm text-slate-600">{upcomingBootcamp.date}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 text-[#4eaec3]" />
              <div>
                <p className="text-sm font-bold text-slate-900">Format</p>
                <p className="mt-1 text-sm text-slate-600">{upcomingBootcamp.time}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="mt-1 h-5 w-5 text-[#4eaec3]" />
              <div>
                <p className="text-sm font-bold text-slate-900">Mentored by</p>
                <p className="mt-1 text-sm text-slate-600">{upcomingBootcamp.mentor}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4eaec3]">Next live bootcamp</p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">{upcomingBootcamp.title}</h2>
              <p className="mt-4 text-slate-600">
                A focused learning session for people who want to understand where data and AI skills are moving, and what to practice next.
              </p>
              <Link
                href="/bootcampregister"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#013a81] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0b4c9a]"
              >
                Register interest
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-slate-900">What learners can expect</p>
              <div className="mt-5 grid gap-4">
                {upcomingBootcamp.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <p className="text-sm leading-6 text-slate-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="recordings" className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4eaec3]">Past bootcamps</p>
                <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">Latest session recordings</h2>
                <p className="mt-3 max-w-2xl text-slate-600">
                  Watch the five most recent hands-on bootcamps from Ivy Professional School.
                </p>
              </div>
              <a
                href="https://youtube.com/ivyproschool"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Visit YouTube channel
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {latestRecordings.map((recording) => (
                <a
                  key={recording.id}
                  href={recording.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4eaec3]/50 hover:shadow-xl"
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={recording.thumbnail}
                      alt={recording.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.src = `https://img.youtube.com/vi/${recording.videoId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-90" />
                    <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#013a81] shadow-lg">
                      <PlayCircle className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="p-5">
                    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-bold ${categoryStyles[recording.category]}`}>
                      {recording.category}
                    </span>
                    <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-snug text-slate-900">{recording.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{recording.summary}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#013a81]">
                      Watch recording
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: Database, title: "Hands-on datasets", text: "Sessions are built around real workflows, dashboards, SQL, and AI use cases." },
              { icon: FileText, title: "Clear takeaways", text: "Each bootcamp focuses on practical concepts learners can continue practicing after the session." },
              { icon: Sparkles, title: "AI-ready skills", text: "Topics are selected around the current needs of data and AI professionals." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <item.icon className="h-6 w-6 text-[#4eaec3]" />
                <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BootcampPage;
