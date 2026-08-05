import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Bot,
  Building2,
  ExternalLink,
  GraduationCap,
  Landmark,
  Linkedin,
  Scale,
} from "lucide-react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import aboutIvy from "@/assests/aboutusivy.jpeg";
import eeshani from "@/assests/eeshani.webp";
import prateek from "@/assests/pratilk.webp";

const ventures = [
  {
    name: "Time2Justice.ai",
    label: "Legal AI & credit risk intelligence",
    description:
      "A full-suite legal AI technology and credit risk intelligence firm making complex legal information faster and easier to act on.",
    href: "https://time2justice.ai",
    icon: Scale,
  },
  {
    name: "PrepAI",
    label: "AI interviewer & talent appraisal",
    description:
      "An AI-powered career platform that helps people practise interviews, understand skill gaps and prepare for the opportunities ahead.",
    href: "https://prepai.ivyproschool.com",
    icon: Bot,
  },
  {
    name: "BiGo",
    label: "EV fleet technology",
    description:
      "A technology-led electric mobility company building dependable, cleaner last-mile fleets for businesses and riders.",
    href: "https://bigo.bike",
    icon: Bike,
    stat: "500+ bikes and riders",
  },
  {
    name: "Srijan Valley School",
    label: "CBSE-aligned school, Ranchi",
    description:
      "A school designed to help young learners grow through curiosity, strong foundations and confident thinking.",
    href: "https://www.srijanvalleyschool.com/",
    icon: GraduationCap,
  },
  {
    name: "Panchwati Ivy — Phase 1",
    label: "Residential real estate",
    description:
      "The first chapter of a thoughtfully planned residential community created around comfort, connection and everyday living.",
    href: "https://panchwatibuilders.com/project/panchwati-ivy/",
    icon: Building2,
    stat: "330+ flats across both phases",
  },
  {
    name: "Panchwati Ivy — Phase 2",
    label: "Residential real estate",
    description:
      "The next phase of the Panchwati Ivy community, carrying forward the same promise of considered homes and shared spaces.",
    href: "https://panchwatibuilders.com/project/panchwati-ivy-2/",
    icon: Building2,
  },
  {
    name: "Hari Om Ivy Tower",
    label: "Commercial real estate",
    description:
      "A commercial real estate venture shaped for modern businesses, bringing together accessibility, utility and long-term value.",
    href: "https://panchwatibuilders.com/",
    icon: Landmark,
  },
];

const leaders: Array<{
  name: string;
  role: string;
  image: StaticImageData;
  bio: string;
  highlights: string[];
  linkedin: string;
}> = [
  {
    name: "Prateek Agrawal",
    role: "Founder, Ivy Professional School",
    image: prateek,
    bio: "An AI and data science educator, entrepreneur and technology strategist, Prateek has spent more than two decades helping people and organisations use data to solve meaningful problems.",
    highlights: [
      "20+ years in AI and data",
      "Texas A&M University",
      "10,000+ learners taught",
    ],
    linkedin: "https://www.linkedin.com/in/prateekagrawal",
  },
  {
    name: "Eeshani Agrawal",
    role: "Co-founder, Ivy Professional School",
    image: eeshani,
    bio: "A data storyteller and analytics leader, Eeshani turns technical ideas into practical learning. Her work spans teaching, consulting and building learning experiences that create confidence.",
    highlights: [
      "20+ years of experience",
      "9,000+ professionals coached",
      "50+ Fortune 500 firms consulted",
    ],
    linkedin: "https://www.linkedin.com/in/eeshani-agrawal-b674045",
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden border-b border-slate-100 bg-white">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ivy-blue via-ivy-blue to-ivy-orange" />
          <div className="container mx-auto px-4 py-20 text-center sm:py-24 lg:py-28">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-ivy-blue">
              About Ivy Professional School
            </p>
            <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-7xl">
              It started with a classroom.
              <span className="block text-ivy-blue">It grew into an ecosystem.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              Since 2008, Ivy has helped people turn emerging technology into
              practical opportunity. Today, that same thinking powers ventures
              across AI, education, mobility and real estate.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href="#our-story"
                className="inline-flex items-center gap-2 rounded-md bg-ivy-blue px-6 py-3.5 font-semibold text-white transition hover:bg-[#008cc1]"
              >
                Read our story <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#our-ventures"
                className="inline-flex items-center rounded-md border border-slate-300 px-6 py-3.5 font-semibold text-slate-800 transition hover:border-ivy-blue hover:text-ivy-blue"
              >
                Explore our ventures
              </Link>
            </div>
          </div>
        </section>

        <figure className="w-full bg-slate-50">
          <Image
            src={aboutIvy}
            alt="The Ivy Professional School community"
            className="block h-auto w-full"
            priority
            sizes="100vw"
          />
          <figcaption className="border-y border-slate-100 bg-white px-4 py-4 text-center text-sm font-medium text-slate-500">
            The people and community behind Ivy Professional School
          </figcaption>
        </figure>

        <section id="our-story" className="scroll-mt-20 py-20 lg:py-28">
          <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-ivy-blue">
                Our story
              </p>
              <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
                One belief has guided every chapter.
              </h2>
              <div className="mt-8 flex items-center gap-4 border-t border-slate-200 pt-6">
                <span className="text-4xl font-bold text-ivy-orange">2008</span>
                <span className="max-w-[150px] text-sm font-medium leading-5 text-slate-500">
                  The year the Ivy journey began
                </span>
              </div>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600 lg:col-span-7 lg:col-start-6">
              <p className="text-2xl font-medium leading-9 text-slate-900">
                Education works best when it is connected to the world outside
                the classroom.
              </p>
              <p>
                Ivy was founded to close the distance between what people learn
                and what the world needs. We chose emerging fields—analytics,
                data science and AI—and made them approachable through expert
                mentors, hands-on work and career-focused learning.
              </p>
              <p>
                As our community grew, so did our ambition. Legal access needed
                intelligence. Hiring needed better signals. Urban mobility
                needed cleaner fleets. Families needed thoughtful schools and
                spaces.
              </p>
              <blockquote className="border-l-4 border-ivy-orange bg-amber-50/70 px-6 py-5 font-semibold text-slate-900">
                Understand the real problem. Combine technology with human
                insight. Build for lasting impact.
              </blockquote>
            </div>
          </div>
        </section>

        <section
          id="our-ventures"
          className="scroll-mt-20 border-y border-slate-200 bg-slate-50 py-20 lg:py-28"
        >
          <div className="container mx-auto px-4">
            <div className="grid gap-8 border-b border-slate-300 pb-10 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-ivy-blue">
                  The Ivy ecosystem
                </p>
                <h2 className="mt-5 text-3xl sm:text-4xl">
                  Different businesses.
                  <br />
                  One shared purpose.
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-slate-600 lg:justify-self-end">
                Each venture serves a different part of life, connected by a
                practical, technology-forward approach to progress.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3">
              {ventures.map((venture, index) => {
                const Icon = venture.icon;
                return (
                  <a
                    key={venture.name}
                    href={venture.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative min-h-[320px] border-b border-slate-200 px-1 py-9 transition md:px-8 md:odd:border-r xl:border-r xl:px-9 xl:[&:nth-child(3n)]:border-r-0"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-semibold text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-ivy-blue transition group-hover:border-ivy-blue group-hover:bg-ivy-blue group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <p className="mt-10 text-xs font-bold uppercase tracking-[0.17em] text-ivy-blue">
                      {venture.label}
                    </p>
                    <h3 className="mt-3 flex items-center gap-2 text-2xl transition group-hover:text-ivy-blue">
                      {venture.name}
                      <ExternalLink className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                    </h3>
                    <p className="mt-4 leading-7 text-slate-600">
                      {venture.description}
                    </p>
                    {venture.stat && (
                      <p className="mt-5 font-semibold text-[#bc4e00]">
                        {venture.stat}
                      </p>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section id="leadership" className="scroll-mt-20 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-ivy-blue">
                Leadership
              </p>
              <h2 className="mt-5 text-3xl sm:text-4xl">
                Educators at heart. Entrepreneurs in action.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Prateek and Eeshani combine deep industry experience with a
                shared love for teaching—an outlook that shapes every Ivy
                initiative.
              </p>
            </div>

            <div className="mx-auto mt-14 max-w-6xl divide-y divide-slate-200 border-y border-slate-200">
              {leaders.map((leader, index) => (
                <article
                  key={leader.name}
                  className="grid gap-8 py-10 md:grid-cols-[220px_1fr] md:items-center lg:gap-14"
                >
                  <div className="relative mx-auto w-full max-w-[220px]">
                    <div
                      className={`absolute -bottom-3 -right-3 h-full w-full rounded-md ${
                        index === 0 ? "bg-ivy-blue" : "bg-ivy-orange"
                      }`}
                    />
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      className="relative aspect-square w-full rounded-md object-cover"
                      sizes="220px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-ivy-blue">
                      {leader.role}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-4">
                      <h3 className="text-3xl">{leader.name}</h3>
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${leader.name} on LinkedIn`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-ivy-blue hover:bg-ivy-blue hover:text-white"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                      {leader.bio}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                      {leader.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-ivy-orange" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-sky-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-ivy-blue">
              The next chapter
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-3xl leading-tight sm:text-5xl">
              The future is built by people willing to keep learning.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Whether you are beginning a career, transforming a team or
              exploring what AI can make possible, there is a place for you in
              the Ivy story.
            </p>
            <Link
              href="/courses"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-ivy-blue px-7 py-3.5 font-semibold text-white transition hover:bg-[#008cc1]"
            >
              Explore Ivy courses <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
