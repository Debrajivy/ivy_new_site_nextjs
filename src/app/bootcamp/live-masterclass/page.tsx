"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  MonitorPlay,
  Zap,
  Users,
  Award,
  BookOpen,
  Target,
} from "lucide-react";

const LiveMasterclassPage = () => {
  const bootcampDetails = {
    title: "AI Business Masterclass: Automate & Scale",
    subtitle: "India's Biggest AI Business Masterclass",
    tagline: "Automate Your Business & Double Revenue With AI",
    date: "22 September 2026",
    day: "Tuesday",
    time: "06:30 PM - 9:30 PM",
    duration: "3.5 Hours",
    mode: "Zoom",
    mentor: "Sanjeev Jain",
    mentorBio: "Built & managed multiple 1000Cr+ businesses",
    originalPrice: "₹999",
    offerPrice: "₹299",
  };

  const curriculum = [
    {
      icon: Target,
      title: "AI Strategy for Business",
      description: "Identify the highest-impact AI use cases in your business and build a clear roadmap.",
    },
    {
      icon: Zap,
      title: "Automation Frameworks",
      description: "Learn how to automate repetitive tasks, workflows, and operations with AI tools.",
    },
    {
      icon: Users,
      title: "Team & Hiring in the AI Era",
      description: "Restructure your team to leverage AI and free up your time for high-leverage work.",
    },
    {
      icon: BookOpen,
      title: "Real-World Case Studies",
      description: "See how businesses have doubled revenue by integrating AI into their core operations.",
    },
  ];

  const takeaways = [
    "A clear AI roadmap tailored for your business size",
    "Templates for automating top 10 repetitive workflows",
    "Frameworks to measure ROI from AI initiatives",
    "Access to a private community of AI-first founders",
    "Live Q&A with Sanjeev Jain",
    "Recording access for 7 days post-session",
  ];

  return (
    <div className="min-h-screen bg-[#0b0e14] text-white">
      <Navbar />

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute top-0 left-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-[#013a81] opacity-20 blur-[150px]"></div>

        <div className="container mx-auto px-4">
          <nav className="mb-6 flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/bootcamp" className="hover:text-white">Bootcamp</Link>
            <span>/</span>
            <span className="font-semibold text-white">Live Masterclass</span>
          </nav>

          <div className="mb-8 flex items-center justify-center gap-2 rounded-xl bg-red-500/90 py-3 text-sm font-bold text-white">
            <Zap className="h-4 w-4" />
            LIMITED-TIME OFFER: GRAB YOUR SEAT NOW!
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-bold text-amber-400">
              {bootcampDetails.subtitle}
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              {bootcampDetails.title}
            </h1>

            <p className="mt-6 text-lg text-slate-300 md:text-xl">{bootcampDetails.tagline}</p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/bootcampregister"
                className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
              >
                Register Now
                <ArrowRight className="h-5 w-5" />
              </Link>
              <span className="text-sm text-slate-400">
                <span className="line-through">{bootcampDetails.originalPrice}</span>{" "}
                •{" "}
                <span className="font-bold text-amber-400">{bootcampDetails.offerPrice} Inc. GST</span>
              </span>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-slate-800 bg-[#131720] p-6 shadow-2xl md:p-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-1 h-5 w-5 text-amber-400" />
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500">Date</p>
                  <p className="mt-1 text-sm font-bold">{bootcampDetails.date}</p>
                  <p className="text-xs text-slate-400">({bootcampDetails.day})</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-amber-400" />
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500">Time</p>
                  <p className="mt-1 text-sm font-bold">{bootcampDetails.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="mt-1 h-5 w-5 text-amber-400" />
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500">Duration</p>
                  <p className="mt-1 text-sm font-bold">{bootcampDetails.duration}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MonitorPlay className="mt-1 h-5 w-5 text-amber-400" />
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500">Mode</p>
                  <p className="mt-1 text-sm font-bold">{bootcampDetails.mode}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-2xl items-center gap-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
            <div className="h-20 w-20 overflow-hidden rounded-full bg-slate-700 flex-shrink-0">
              <img
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                alt={bootcampDetails.mentor}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">Your Mentor</p>
              <p className="text-2xl font-bold">{bootcampDetails.mentor}</p>
              <p className="mt-1 text-sm text-slate-400">{bootcampDetails.mentorBio}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">Curriculum</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">What you'll learn</h2>
            <p className="mt-4 text-slate-400">
              A hands-on breakdown of how AI can transform your business operations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {curriculum.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-[#131720] p-6 transition-colors hover:border-amber-500/40"
              >
                <item.icon className="h-8 w-8 text-amber-400" />
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-[#131720]/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">Outcomes</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">What you'll walk away with</h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
            {takeaways.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-800 bg-[#0b0e14] p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-3xl border border-amber-500/20 bg-gradient-to-br from-[#013a81]/40 to-[#0b0e14] p-10 text-center">
            <Award className="mx-auto h-12 w-12 text-amber-400" />
            <h2 className="mt-6 text-3xl font-extrabold md:text-4xl">Ready to transform your business?</h2>
            <p className="mt-4 text-slate-300">
              Seats are limited. Grab yours at {bootcampDetails.offerPrice} before the price goes back up.
            </p>
            <Link
              href="/bootcampregister"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-500 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
            >
              Register Now for {bootcampDetails.offerPrice}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <p className="mt-4 text-xs text-slate-400">
              <span className="line-through">{bootcampDetails.originalPrice}</span> • Limited Time Offer • Inc. GST
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LiveMasterclassPage;