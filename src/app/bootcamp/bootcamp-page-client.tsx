"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import AgentHeroImage from "@/assests/agent.png";
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
import {
  bootcampRegisterUrl,
  categoryStyles,
  latestRecordings,
  liveSessionZoomUrl,
  sessionRecordings,
  youtubeChannelUrl,
} from "@/data/bootcamps";
import { getSessionStatus, type LiveSession, type SessionStatus } from "@/lib/liveSession";

interface CountdownState {
  status: SessionStatus;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getCountdown = (session: LiveSession): CountdownState => {
  const now = Date.now();
  const status = getSessionStatus(session, now);
  const remaining = status === "upcoming" && session.startTime !== null ? session.startTime - now : 0;

  return {
    status,
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining / 3_600_000) % 24),
    minutes: Math.floor((remaining / 60_000) % 60),
    seconds: Math.floor((remaining / 1_000) % 60),
  };
};

// Ticks every second so the page switches from Register to Zoom to YouTube on its own.
const useSessionCountdown = (session: LiveSession, initialStatus: SessionStatus) => {
  const [countdown, setCountdown] = useState<CountdownState | null>(null);

  useEffect(() => {
    const updateCountdown = () => setCountdown(getCountdown(session));
    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1_000);

    return () => window.clearInterval(timer);
  }, [session]);

  return { countdown, status: countdown?.status ?? initialStatus };
};

interface SessionAction {
  href: string;
  label: string;
  badge: string;
  cardText: string;
}

const getSessionAction = (session: LiveSession, status: SessionStatus): SessionAction => {
  if (status === "live") {
    return {
      href: liveSessionZoomUrl,
      label: "Join Live Class on Zoom",
      badge: "Live now",
      cardText: "Click to join the live class on Zoom",
    };
  }

  if (status === "ended") {
    const recordingUrl = session.dateKey ? sessionRecordings[session.dateKey] : undefined;
    return recordingUrl
      ? {
          href: recordingUrl,
          label: "Watch the Recording on YouTube",
          badge: "Session recording",
          cardText: "Click to watch the session recording on YouTube",
        }
      : {
          href: youtubeChannelUrl,
          label: "Visit our YouTube Channel",
          badge: "Session ended",
          cardText: "The recording will be shared on our YouTube channel",
        };
  }

  return {
    href: bootcampRegisterUrl,
    label: "Register for Free",
    badge: "Upcoming free live session",
    cardText: "Click to register for the free live session",
  };
};

const LiveSessionCountdown = ({ countdown, action }: { countdown: CountdownState | null; action: SessionAction }) => {
  if (countdown?.status === "live") {
    return (
      <a
        href={action.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex w-full max-w-2xl items-center justify-center gap-3 rounded-xl border border-red-300/40 bg-red-500 px-5 py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-red-950/20 transition-transform hover:scale-[1.01]"
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
        </span>
        Live now, join the Zoom class
      </a>
    );
  }

  if (countdown?.status === "ended") {
    return (
      <div className="mt-6 max-w-2xl rounded-xl border border-white/15 bg-white/10 px-5 py-4 text-center text-sm font-bold text-slate-100">
        This live session has ended.
      </div>
    );
  }

  const units = [
    { label: "Days", value: countdown?.days },
    { label: "Hours", value: countdown?.hours },
    { label: "Minutes", value: countdown?.minutes },
    { label: "Seconds", value: countdown?.seconds },
  ];

  return (
    <div className="mt-6 max-w-2xl rounded-xl border border-white/15 bg-slate-950/20 p-4 backdrop-blur-sm">
      <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Class starts in</p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {units.map((unit) => (
          <div key={unit.label} className="rounded-lg border border-white/10 bg-white/10 px-2 py-3 text-center">
            <p className="text-xl font-black tabular-nums text-white sm:text-2xl">
              {unit.value === undefined ? "--" : String(unit.value).padStart(2, "0")}
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-300 sm:text-xs">{unit.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const sessionMentor = "Ivy Professional School faculty";

// Kept general because the session topic changes with the Google Form.
const sessionOutcomes = [
  "A live, hands-on class taught by Ivy Professional School faculty",
  "Follow along with practical, real-world examples step by step",
  "Ask your questions directly during the session",
];

const stats = [
  { label: "Learners reached", value: "1 Lakh+" },
  { label: "Success alumni", value: "37K+" },
  { label: "Latest recordings", value: String(latestRecordings.length) },
];

interface BootcampPageClientProps {
  session: LiveSession;
  initialStatus: SessionStatus;
}

const BootcampPageClient = ({ session, initialStatus }: BootcampPageClientProps) => {
  const { countdown, status } = useSessionCountdown(session, initialStatus);
  const action = getSessionAction(session, status);

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
              <div className="mb-4 inline-flex animate-pulse items-center gap-2 rounded-full border border-red-300/40 bg-red-500/20 px-3 py-1 text-sm font-bold text-white">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-300 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-red-400" />
                </span>
                {action.badge}
              </div>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                {session.title}
              </h1>
              {(session.dateLabel || session.timeLabel) && (
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
                  {session.dateLabel && <strong className="text-white">{session.dateLabel}</strong>}
                  {session.dateLabel && session.timeLabel && <span className="mx-2 text-cyan-300">•</span>}
                  {session.timeLabel && (
                    <>
                      Class time <strong className="text-white">{session.timeLabel}</strong>
                    </>
                  )}
                </p>
              )}

              {session.startTime !== null && <LiveSessionCountdown countdown={countdown} action={action} />}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex animate-pulse items-center justify-center gap-2 rounded-lg bg-red-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-red-950/30 transition-all hover:animate-none hover:bg-red-400"
                >
                  {action.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
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
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl shadow-black/20"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <Image
                  src={AgentHeroImage}
                  alt={session.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute left-5 top-5">
                  <span className="inline-flex animate-pulse items-center gap-2 rounded-full bg-red-500 px-3 py-1 text-xs font-black uppercase tracking-wide text-white shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    {action.badge}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <p className="text-lg font-bold leading-snug text-white">{action.cardText}</p>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-transform group-hover:scale-110">
                    <ArrowRight className="h-6 w-6" />
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
                <p className="text-sm font-bold text-slate-900">{status === "ended" ? "Last session" : "Upcoming session"}</p>
                <p className="mt-1 text-sm text-slate-600">{session.dateLabel || "To be announced"}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 text-[#4eaec3]" />
              <div>
                <p className="text-sm font-bold text-slate-900">Time</p>
                <p className="mt-1 text-sm text-slate-600">{session.timeLabel || "To be announced"}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="mt-1 h-5 w-5 text-[#4eaec3]" />
              <div>
                <p className="text-sm font-bold text-slate-900">Mentored by</p>
                <p className="mt-1 text-sm text-slate-600">{sessionMentor}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4eaec3]">
                {status === "ended" ? "Latest live bootcamp" : "Next live bootcamp"}
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">{session.title}</h2>
              <p className="mt-4 text-slate-600">
                {status === "ended"
                  ? "This free hands-on class has ended. Watch the recording to catch up."
                  : "Join this free hands-on class live and learn by doing alongside Ivy faculty."}
              </p>
              <a
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-600"
              >
                {action.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-slate-900">What learners can expect</p>
              <div className="mt-5 grid gap-4">
                {sessionOutcomes.map((outcome) => (
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
                  Watch the most recent hands-on bootcamps from Ivy Professional School.
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

export default BootcampPageClient;
