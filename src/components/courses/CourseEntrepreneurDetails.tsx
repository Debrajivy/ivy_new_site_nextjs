import {
  ArrowUpRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Clock3,
  Code2,
  Lightbulb,
  Megaphone,
  Play,
  Settings2,
  Sparkles,
  Target,
  TrendingUp,
  Users2,
  WandSparkles,
} from "lucide-react";

const problems = [
  {
    icon: Sparkles,
    title: "AI feels overwhelming",
    copy: "Most AI courses are built for engineers—not business owners. The jargon, coding and complexity do not fit the way you run your business.",
  },
  {
    icon: TrendingUp,
    title: "Competitors are moving fast",
    copy: "Businesses using AI are pulling ahead in marketing, sales and operations. Every month you wait, the gap gets wider.",
  },
  {
    icon: Clock3,
    title: "No time for long commitments",
    copy: "You need practical skills that create results in days, not a six-month certification that keeps you away from your business.",
  },
];

const solutions = [
  ["Live Classes", "Online + Classroom"],
  ["Seasoned AI Entrepreneurs", "Coaches who build and deploy AI in real businesses."],
  ["Lifetime Access", "Classroom recordings, resources, templates and community support."],
  ["1:1 Doubt Clearing", "Sessions all 7-days."],
  ["20+ Hands-On Exercises", "From proposal generation to automation workflows."],
  ["5+ AI Tools Built by You", "Build working no-code AI tools for your business."],
];

const projects = [
  { icon: BarChart3, title: "AI Sales Analyzer & Predictor", copy: "Turn sales data into product insights, revenue trends and growth forecasts." },
  { icon: WandSparkles, title: "AI Marketing Studio", copy: "Create product photos, lifestyle visuals, reels and ad campaigns without an agency." },
  { icon: Bot, title: "AI Business Agent", copy: "Build a live agent for complaint handling, lead qualification or invoice processing." },
  { icon: Megaphone, title: "Pitch & Proposal Generator", copy: "Generate a professional quotation or pitch from client needs and your product portfolio." },
  { icon: Settings2, title: "Customer Voice Agent", copy: "Deploy a working voice workflow that can respond to common customer issues." },
];

const highlights = [
  ["20+", "Hands-on exercises"],
  ["5+", "Business projects"],
  ["10+", "Industry use cases"],
  ["90 days", "AI action roadmap"],
];

const videos = [
  { title: "AI for Entrepreneurs Course", id: "7xAibAQFCRA", href: "https://www.youtube.com/watch?v=7xAibAQFCRA" },
  { title: "Introductory Session", id: "YertEnxdufk", href: "https://www.youtube.com/watch?v=YertEnxdufk&t=207s" },
];

export default function CourseEntrepreneurDetails() {
  return (
    <section aria-labelledby="entrepreneur-details-title" className="overflow-hidden bg-slate-50 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#009fda]/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#007eae]">
            A business-first AI program
          </span>
          <h2 id="entrepreneur-details-title" className="mt-5 text-3xl font-black text-[#0d2137] sm:text-4xl lg:text-5xl">
           The Problem Every <span className="text-[#009fda]"> Entrepreneur Face</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
Most business owners know AI is important, but struggle with jargon, time constraints and practical implementation.          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {problems.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8A320]/15 text-[#d98200]">
                <Icon size={25} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#0d2137]">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#0d2137] p-7 text-white shadow-xl sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F8A320]">Program Highlights</span>
              <h3 className="mt-4 text-3xl font-black sm:text-4xl">A compact, hands-on, business-first AI program.</h3>
              <p className="mt-5 leading-7 text-slate-300">
                Learn through live classes, practical exercises and no-code AI tools with continued access to resources and support.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {solutions.map(([title, copy]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#20bde9]" size={21} />
                    <div>
                      <h4 className="font-bold">{title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{copy}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#d98200]">Learn by building</span>
            <h3 className="mt-3 text-3xl font-black text-[#0d2137] sm:text-4xl">Build real-world no-code AI solutions</h3>
            <p className="mt-4 text-lg text-slate-600">Every project is designed to solve practical business problems.</p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {projects.map(({ icon: Icon, title, copy }, index) => (
              <article key={title} className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="absolute right-5 top-4 text-4xl font-black text-[#009fda]/10">0{index + 1}</span>
                <Icon className="text-[#009fda]" size={28} />
                <h4 className="mt-5 font-bold text-[#0d2137]">{title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-[#009fda]/20 bg-white p-6 text-center shadow-sm">
              <div className="text-3xl font-black text-[#009fda]">{value}</div>
              <div className="mt-2 font-semibold text-slate-600">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#d98200]">See the program in action</span>
            <h3 className="mt-3 text-3xl font-black text-[#0d2137] sm:text-4xl">Watch the course experience</h3>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
            {videos.map((video) => (
              <a key={video.id} href={video.href} target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} alt={`${video.title} video thumbnail`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0d2137]/30">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F8A320] text-[#0d2137] shadow-xl"><Play className="ml-1" fill="currentColor" /></span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <span className="font-bold text-[#0d2137]">{video.title}</span>
                  <ArrowUpRight className="shrink-0 text-[#009fda]" size={20} />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] bg-gradient-to-r from-[#009fda] to-[#007eae] p-8 text-white shadow-xl sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="font-bold uppercase tracking-widest text-[#ffe0a1]">Your final outcome</span>
              <h3 className="mt-3 text-3xl font-black sm:text-4xl">A 90-day AI transformation plan for your business</h3>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-50">Identify business problems, map the right AI solutions and prioritise quick wins—with a practical plan ready to execute after the course.</p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center lg:w-[330px]">
              {[
                [Lightbulb, "Identify"],
                [Target, "Prioritise"],
                [Code2, "Implement"],
              ].map(([Icon, label]) => {
                const IconComponent = Icon as typeof Lightbulb;
                return <div key={label as string} className="rounded-2xl bg-white/15 p-4"><IconComponent className="mx-auto" /><span className="mt-2 block text-xs font-bold">{label as string}</span></div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
