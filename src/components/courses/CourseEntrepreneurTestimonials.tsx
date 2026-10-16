"use client";

import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Linkedin,
  MessageCircle,
  Quote,
  Volume2,
  VolumeX,
} from "lucide-react";

const linkedinPostUrl =
  "https://www.linkedin.com/feed/update/urn:li:activity:7516764153634811919";

const registrationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSd8X66KYIL844mLefs4Pd0Q5lVtQTeMMeHnddJAtbdybI4Lww/viewform";

interface TestimonialStory {
  name: string;
  role: string;
  quote: string;
  description?: string;
  poster: string;
  videoSrc?: string;
  youtubeId?: string;
  linkedinUrl?: string;
}

const upcomingStories: TestimonialStory[] = [
  {
    name: "Anand Methi",
    role: "Participant, AI for Entrepreneurs",
    quote: "My entire dispatch plan went digital!",
    description:
      "Anand Methi transformed his dispatch workflow with AI, automating order tracking, freight costs, and accounting. Go paperless. Automate operations. Grow with AI!",
    poster: "/videos/anand-methi-testimonial-poster.jpeg",
    youtubeId: "To4sj_LHvTo",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7516784925459808256",
  },
  {
    name: "Palash",
    role: "Director, Vedas Exports",
    quote: "I showed him how to do SEO, and he was amazed!",
    description:
      "Palash, Director at Vedas Exports, transformed his SEO, content, and Meta Ads with AI. Make your brand visible on Google and AI platforms. Grow your business with AI!",
    poster: "/videos/palash-testimonial-poster.jpeg",
    youtubeId: "r2mGbTPkkfw",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7516775701237329920/",
  },
  {
    name: "Rakesh Pradhan",
    role: "Performance Marketer",
    quote: "I automated my daily and monthly reports!",
    description:
      "Rakesh Pradhan, Performance Marketer, uses AI workflows to automate reporting and connect tools like Meta Ads, Google Analytics, and Search Console. Automate the routine. Focus on growth with AI!",
    poster: "/videos/rakesh-pradhan-testimonial-poster.jpeg",
    youtubeId: "Str8WoEigKk",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7516771834504347648",
  },
];

interface TestimonialVideoProps {
  name: string;
  src: string;
  poster: string;
}

function TestimonialVideo({ name, src, poster }: TestimonialVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  const startVideo = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setHasStarted(true);
    } catch {
      setHasStarted(false);
    }
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="relative aspect-square shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.1)]">
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-xl"
      />
      <video
        ref={videoRef}
        className="absolute inset-y-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2"
        src={src}
        poster={poster}
        aria-label={`${name}'s AI for Entrepreneurs testimonial`}
        muted
        loop
        playsInline
        preload="none"
      >
        Your browser does not support video playback.
      </video>
      {!hasStarted && (
        <button
          type="button"
          onClick={startVideo}
          aria-label={`Play ${name}'s testimonial video`}
          className="absolute inset-0 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#009fda]"
        >
          <span className="sr-only">Play testimonial video</span>
        </button>
      )}
      {hasStarted && (
        <button
          type="button"
          onClick={toggleSound}
          aria-label={isMuted ? "Turn testimonial sound on" : "Mute testimonial"}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white shadow-sm backdrop-blur transition hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-white"
        >
          {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
        </button>
      )}
    </div>
  );
}

interface TestimonialYoutubeProps {
  name: string;
  videoId: string;
  poster: string;
}

function TestimonialYoutube({ name, videoId, poster }: TestimonialYoutubeProps) {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="relative aspect-square shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.1)]">
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-xl"
      />
      {hasStarted ? (
        <iframe
          className="absolute inset-y-0 left-1/2 aspect-[9/16] h-full -translate-x-1/2"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&modestbranding=1&rel=0`}
          title={`${name}'s AI for Entrepreneurs testimonial`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setHasStarted(true)}
          aria-label={`Play ${name}'s testimonial video`}
          className="absolute inset-0 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#009fda]"
        >
          <img
            src={poster}
            alt=""
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2"
          />
          <span className="sr-only">Play testimonial video</span>
        </button>
      )}
    </div>
  );
}

export default function CourseEntrepreneurTestimonials() {

  return (
    <section
      aria-labelledby="entrepreneur-testimonials-title"
      className="border-y border-slate-200 bg-white py-14 sm:py-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#007eae]">
              Founder stories
            </p>
            <h2
              id="entrepreneur-testimonials-title"
              className="mt-3 text-3xl font-black leading-tight text-[#0d2137] sm:text-4xl"
            >
              Real business owners. Real AI impact.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              See how entrepreneurs are turning structured AI learning into
              practical ideas for their businesses.
            </p>
          </div>

          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-[#009fda] px-5 py-3 font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#008bc0]"
          >
            Join the next cohort
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-9 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <article className="flex h-full w-full max-w-[340px] flex-col justify-self-center">
            <TestimonialYoutube
              name="Manish Prasad"
              videoId="5bPHckjhgVI"
              poster="/videos/manish-testimonial-poster.jpeg?v=20261016-131300"
            />

            <div className="flex flex-1 flex-col px-1 pt-4">
              <div className="flex items-start gap-2.5">
                <Quote className="mt-0.5 shrink-0 text-[#009fda]" size={21} fill="currentColor" aria-hidden="true" />
                <blockquote className="text-[15px] font-bold leading-6 text-[#0d2137]">
                  &ldquo;This is the most structured AI program that I have actually...&rdquo;
                </blockquote>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Manish runs an infrastructure business, and his time is precious.
                He&apos;s sat through enough AI talks with &ldquo;no substance.&rdquo;
                This one, he calls &ldquo;amazing.&rdquo;
              </p>
              <p className="mt-4 text-sm font-bold text-[#007eae]">
                What would AI change in your business?
              </p>

              <div className="mt-5 flex items-end justify-between gap-3 border-t border-slate-200 pt-4">
                <div className="min-w-0 pr-2">
                  <h3 className="text-sm font-black text-[#0d2137]">Manish Prasad</h3>
                  <p className="text-xs leading-5 text-slate-500">Infrastructure business owner</p>
                </div>
                <a
                  href={linkedinPostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Manish Prasad's original testimonial on LinkedIn"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef8fc] text-[#0077b5] transition hover:bg-[#009fda] hover:text-white"
                >
                  <Linkedin size={16} fill="currentColor" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>

          {upcomingStories.map((story) => (
            <article
              key={story.name}
              className="flex h-full w-full max-w-[340px] flex-col justify-self-center"
            >
              {story.youtubeId ? (
                <TestimonialYoutube
                  name={story.name}
                  videoId={story.youtubeId}
                  poster={story.poster}
                />
              ) : story.videoSrc ? (
                <TestimonialVideo
                  name={story.name}
                  src={story.videoSrc}
                  poster={story.poster}
                />
              ) : (
                <div className="relative aspect-square shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
                  <img
                    src={story.poster}
                    alt={`${story.name} AI for Entrepreneurs testimonial preview`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col px-1 pt-4">
                <div className="flex items-start gap-2.5">
                  <Quote className="mt-0.5 shrink-0 text-[#009fda]" size={21} fill="currentColor" aria-hidden="true" />
                  <p className="text-[15px] font-bold leading-6 text-[#0d2137]">{story.quote}</p>
                </div>
                {story.description && (
                  <p className="mt-4 text-sm leading-6 text-slate-600">{story.description}</p>
                )}
                <div className="mt-auto flex items-end justify-between gap-3 border-t border-slate-200 pt-4">
                  <div>
                    <p className="text-sm font-black text-[#0d2137]">{story.name}</p>
                    <p className="text-xs leading-5 text-slate-500">{story.role}</p>
                  </div>
                  {story.linkedinUrl && (
                    <a
                      href={story.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${story.name}'s original testimonial on LinkedIn`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef8fc] text-[#0077b5] transition hover:bg-[#009fda] hover:text-white"
                    >
                      <Linkedin size={16} fill="currentColor" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-[#f8fafc] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F8A320]/15 text-[#c87500]">
              <Building2 size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="font-bold text-[#0d2137]">What would AI change in your business?</p>
              <p className="text-sm text-slate-500">Speak with the Ivy team about the next cohort.</p>
            </div>
          </div>
          <a
            href="https://wa.me/919748441111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#009fda]/25 bg-white px-5 py-2.5 text-sm font-bold text-[#007eae] transition hover:bg-[#eef8fc]"
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp 97484 41111
          </a>
        </div>
      </div>
    </section>
  );
}
