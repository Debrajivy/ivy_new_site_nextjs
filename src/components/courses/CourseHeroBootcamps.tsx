"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, PlayCircle, X } from "lucide-react";
import {
  bootcampRegisterUrl,
  latestRecordings,
  type BootcampRecording,
} from "@/data/bootcamps";

// Latest bootcamp recordings, shown under the demo form on AI course pages.
// On desktop the card only fills the space left beside the left column (it never makes the hero taller);
// container queries drop the captions, then the whole card, when that space is too short.
// With fitToSpace={false} the card always shows at full size and the hero grows to fit it.
const CourseHeroBootcamps = ({ fitToSpace = true }: { fitToSpace?: boolean }) => {
  const [activeVideo, setActiveVideo] = useState<BootcampRecording | null>(null);

  useEffect(() => {
    if (!activeVideo) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeVideo]);

  return (
    <div className={`relative mt-4 ${fitToSpace ? "hero-bootcamps lg:flex-1" : ""}`}>
      <style>{`
        @media (min-width: 1024px) {
          .hero-bootcamps { container-type: size; }
        }
        @container (max-height: 260px) {
          .hero-bootcamps .hb-caption, .hero-bootcamps .hb-subtitle, .hero-bootcamps .hb-register-btn { display: none; }
          .hero-bootcamps .hb-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); margin-top: 0.5rem; }
          .hero-bootcamps .hb-register-tile { display: flex; }
        }
        @container (max-height: 120px) {
          .hero-bootcamps .hb-card { display: none; }
        }
      `}</style>

      <div
        className={`hb-card rounded-xl border border-gray-200 bg-white p-4 text-gray-900 shadow-lg ${
          fitToSpace ? "lg:absolute lg:inset-x-0 lg:top-0 lg:max-h-full lg:overflow-hidden" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <p className="flex items-center gap-1.5 text-sm font-semibold">
            <PlayCircle className="h-4 w-4 text-[#1a98cb]" />
            Live AI Bootcamps: Learn from Industry Experts          </p>
          <Link
            href="/bootcamp#recordings"
            className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-[#1a98cb] transition-colors hover:text-[#0b5394]"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <p className="hb-subtitle mt-0.5 text-[11px] text-gray-500">Explore recorded AI workshops, practical demonstrations, and emerging technology trends.</p>

        <div className="hb-grid mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {latestRecordings.slice(0, 3).map((recording, index) => (
            <button
              key={recording.id}
              type="button"
              onClick={() => setActiveVideo(recording)}
              className={`group text-left focus-visible:outline-none ${index === 2 ? "hidden sm:block" : ""}`}
              aria-label={`Play ${recording.title}`}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-md bg-slate-100 ring-1 ring-gray-200 transition group-hover:ring-[#1a98cb] group-focus-visible:ring-2 group-focus-visible:ring-[#1a98cb]">
                <img
                  src={recording.thumbnail}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/55 text-white transition-transform group-hover:scale-110">
                    <Play className="h-3 w-3 fill-current" />
                  </span>
                </span>
              </div>
              <p className="hb-caption mt-1.5 line-clamp-2 text-[11px] leading-snug text-gray-700 group-hover:text-gray-900">
                {recording.title}
              </p>
            </button>
          ))}
          {/* Takes the place of the Register button when the card is in its compact layout */}
          <a
            href={bootcampRegisterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hb-register-tile hidden aspect-video flex-col items-center justify-center gap-1 rounded-md bg-[#1a98cb] px-2 text-center text-[11px] font-semibold leading-tight text-white transition-colors hover:bg-[#1588b7]"
          >
            Register for next bootcamp
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <a
          href={bootcampRegisterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hb-register-btn mt-3 flex w-full items-center justify-center rounded-lg bg-[#1a98cb] py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1588b7]"
        >
          Register for the Upcoming Bootcamps
        </a>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 rounded-full bg-white/15 p-1.5 text-white transition-colors hover:bg-white/25"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseHeroBootcamps;
