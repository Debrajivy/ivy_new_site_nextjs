import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Bot, BrainCircuit, CheckCircle2, ChevronRight, Clock3, Lightbulb, Rocket, Target, Users, Workflow } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import workshop from "@/assests/workshop.jpeg";

const barriers = [
  ["01", "Tool-first AI experimentation", "Participants started with a platform rather than a business problem, process owner and success metric."],
  ["02", "Prototype-to-pilot gap", "Chatbots, websites and automations remained demos because no rapid build and validation path existed."],
  ["03", "Business data-to-action gap", "Sales and financial data was available, but turning it into insights and predictions remained slow."],
  ["04", "No AI implementation roadmap", "Initiatives lacked sequencing, governance, ownership and a realistic 30/60/180-day plan."],
];
const principles = [
  ["A", "Start with a measurable business problem", "Every exercise began with a sales, service, operations or decision challenge - not a tool demonstration."],
  ["B", "Build a working AI asset", "Participants created prompts, assistants, web assets, analyses, predictive examples and automation flows."],
  ["C", "Assign ownership and milestones", "Each priority use case gained an owner, success metric and 30/60/180-day implementation horizon."],
];
const builds = [
  ["01", "AI assistants and prompt systems", "Role-specific assistants for market research, marketing, customer response, proposal drafting and operating decisions."],
  ["02", "AI websites and app prototypes", "Rapid landing pages, simple applications and customer-facing assets built with no-code and low-code AI tools."],
  ["03", "AI-powered data and predictive insights", "Sales-data analysis, growth recommendations and a practical customer purchase-likelihood model."],
  ["04", "AI automation workflows", "Workflows connecting forms, WhatsApp or email, spreadsheets and follow-up actions."],
];
const results = [
  ["86", "AI USE CASES IDENTIFIED", "across five business areas"], ["31", "AI USE CASES PRIORITISED", "through impact-effort screening"],
  ["18", "WORKING AI PROTOTYPES", "created during or immediately after"], ["14", "AI PILOTS INITIATED", "with owners and 30-day actions"],
  ["8", "AI USE CASES IMPLEMENTED", "within the 60-day draft follow-up"], ["360", "HOURS / MONTH", "estimated capacity released"],
  ["₹6.8 Cr", "ANNUAL VALUE OPPORTUNITY", "estimated from time and growth cases"], ["88%", "ROADMAP COMPLETION", "participants with a 6-month plan"],
];
const impacts = [
  ["01", "Faster AI time to value", "Assistants, reporting workflows and customer-response automations moved from concept to pilot in days rather than months."],
  ["02", "Lower cost of AI experimentation", "Existing SaaS, no-code and low-code tools let participants test ideas before custom development."],
  ["03", "Stronger AI governance and execution", "A quantified use-case backlog helped leaders fund, sequence and govern AI initiatives against business outcomes."],
];
const useCases = [
  ["AI SALES FOLLOW-UP", "AI-assisted lead qualification and follow-up", "Faster response; reduced enquiry leakage"],
  ["AI SALES ANALYTICS", "Automated analysis of sales and customer data", "Shorter reporting cycle; clearer actions"],
  ["AI CONTENT AUTOMATION", "Repeatable campaign and proposal drafting workflow", "Lower first-draft time; brand consistency"],
  ["AI OPERATIONS AUTOMATION", "Form-to-message-to-sheet automation", "Less manual entry; better process visibility"],
];
const modelReasons = [
  ["Custom corporate AI training", "Examples, datasets and activities can be aligned to functions, processes and strategic priorities."],
  ["Applied learning with workplace outputs", "Every module produces an observable asset, reducing the distance between training and implementation."],
  ["ROI-focused AI use-case selection", "Projects are evaluated on value, feasibility, ownership, data readiness and measurable success criteria."],
  ["Scalable enterprise AI adoption", "The workshop can feed into pilot clinics, project mentoring, functional cohorts and enterprise programmes."],
];
const seoFields = [
  ["Primary keyword", "AI workshop for entrepreneurs"], ["Suggested URL slug", "/casestudies/ai-workshop-for-entrepreneurs"],
  ["Title tag", "AI Workshop for Entrepreneurs | Ivy Professional School"], ["Meta description", "See how Ivy’s hands-on AI workshop helped 50 entrepreneurs identify 86 use cases, build 18 prototypes and launch 14 pilots."],
  ["H1", "AI Workshop for Entrepreneurs: From Chatbots to Predictive AI"], ["Search intent", "Business owners and corporate L&D leaders evaluating applied AI training and implementation support"],
  ["Image alt text", "Entrepreneurs participating in Ivy Professional School’s hands-on AI workshop with trainer Prateek Agrawal"],
];
const checklist = [
  ["01", "Semantic headings", "Use one H1. Publish the problem, solution, impact and business-value titles as descriptive H2/H3 headings."],
  ["02", "Visible metric text", "Keep the 86, 31, 18, 14 and 8 impact figures as HTML text, not only as labels inside chart images."],
  ["03", "Optimised images", "Use descriptive filenames and alt text. Compress photographs and charts to WebP without reducing legibility."],
  ["04", "Structured data", "Implement Article or BlogPosting, Organization and BreadcrumbList JSON-LD with accurate author, publisher and dates."],
  ["05", "Crawl and index", "Add a canonical URL, include the page in the XML sitemap and confirm that robots directives allow indexing."],
  ["06", "Measurement", "Track organic sessions, search queries, CTA clicks and qualified enquiries in Search Console and analytics."],
];

const SectionLabel = ({ number, text }: { number: string; text: string }) => <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-[#013a81] px-4 py-2 text-xs font-black tracking-[0.18em] text-white"><span className="text-[#7dd3e8]">{number}</span>{text}</div>;
const Cards = ({ items, columns = 2 }: { items: string[][]; columns?: number }) => <div className={`grid gap-5 ${columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>{items.map(([number, title, body]) => <div key={`${number}-${title}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><span className="text-sm font-black text-[#4eaec3]">{number}</span><h3 className="mt-3 text-lg font-bold text-slate-900">{title}</h3><p className="mt-2 leading-7 text-slate-600">{body}</p></div>)}</div>;

export default function AIWorkshopCaseStudy() {
  const structuredData = { "@context": "https://schema.org", "@type": "Article", headline: "AI Workshop for Entrepreneurs: From Chatbots to Predictive AI", description: "See how Ivy’s hands-on AI workshop helped 50 entrepreneurs identify 86 use cases, build 18 prototypes and launch 14 pilots.", author: { "@type": "Organization", name: "Ivy Professional School" }, publisher: { "@type": "Organization", name: "Ivy Professional School" }, mainEntityOfPage: "https://ivyproschool.com/casestudies/ai-workshop-for-entrepreneurs" };
  return <><Navbar/><main className="case-document bg-white text-slate-900"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}/>
    <style>{`
      .case-document { --doc-blue:#0b5795; --doc-cyan:#109ed1; --doc-orange:#f59d0a; --doc-ink:#101d2d; --doc-gray:#f1f4f6; }
      .case-document .rounded-3xl, .case-document .rounded-2xl, .case-document .rounded-b-3xl { border-radius: 0 !important; }
      .case-document .shadow-2xl, .case-document .shadow-sm { box-shadow: none !important; }
      .case-document h1, .case-document h2, .case-document h3 { letter-spacing: -.015em; }
      .case-document h2, .case-document h3 { color: var(--doc-blue); }
      .case-document section > div > .inline-flex:first-child, .case-document section > .inline-flex:first-child { background:var(--doc-orange) !important; border-radius:0 !important; min-width:134px; justify-content:center; padding:.45rem 1rem; color:#fff !important; }
      .case-document section > div > .inline-flex:first-child span, .case-document section > .inline-flex:first-child span { color:#fff !important; }
      .case-document section:nth-of-type(3), .case-document section:nth-of-type(5) { background:#fff; }
      .case-document section:nth-of-type(4) { background:#fff; }
      .case-document section:nth-of-type(6) { background:#f7f8f9; }
      .case-document section:nth-of-type(4) > div > div > div,
      .case-document section:nth-of-type(5) > div > div > div { border-width:1px; border-color:#cbdce7; }
    `}</style>
    <section className="relative overflow-hidden bg-[#013a81] text-white"><div className="absolute inset-0"><Image src={workshop} alt="Entrepreneurs participating in Ivy Professional School’s hands-on AI workshop with trainer Prateek Agrawal" fill priority className="object-cover opacity-25"/><div className="absolute inset-0 bg-gradient-to-r from-[#013a81] via-[#013a81]/95 to-[#013a81]/55"/></div><div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24"><nav className="mb-8 flex items-center gap-2 text-sm text-blue-100"><Link href="/">Home</Link><ChevronRight size={14}/><Link href="/casestudies">Corporate Case Studies</Link><ChevronRight size={14}/><span className="text-white">AI Workshop for Entrepreneurs</span></nav><p className="mb-5 text-xs font-black tracking-[0.2em] text-[#7dd3e8]">AI WORKSHOP FOR ENTREPRENEURS / BUSINESS TRANSFORMATION / CASE STUDY</p><h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl">AI Workshop for Entrepreneurs: <span className="text-[#7dd3e8]">From Chatbots to Predictive AI</span></h1><p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">How Ivy Professional School helped 50 business owners, founders and CXOs convert AI experimentation into 86 business use cases, 18 prototypes, 14 pilots and a six-month implementation roadmap.</p></div></section>

    <section className="mx-auto -mt-8 max-w-7xl px-4 sm:px-6"><div className="relative grid overflow-hidden rounded-3xl bg-white shadow-2xl sm:grid-cols-2 lg:grid-cols-5">{[["50","ENTREPRENEURS","business owners, founders and CXOs"],["6 hrs","HANDS-ON AI TRAINING","one-day, in-person intensive"],["86","AI USE CASES","identified across five business areas"],["14","PILOTS INITIATED","with owners and 30-day actions"],["14","PILOTS INITIATED","with owners and 30-day actions"]].map(([n,l,d])=><div key={`${n}-${l}-${d}`} className="border-b border-slate-100 p-6 lg:border-b-0 lg:border-r"><p className="text-3xl font-black text-[#013a81]">{n}</p><p className="mt-1 text-xs font-black tracking-wide text-[#4eaec3]">{l}</p><p className="mt-2 text-xs leading-5 text-slate-500">{d}</p></div>)}</div><div className="rounded-b-3xl bg-[#4eaec3] px-7 py-6 text-white"><strong>THE BUSINESS OUTCOME</strong><p className="mt-1">A hands-on AI training programme that turned business problems into implementation-ready AI assistants, data insights, predictive use cases and automation workflows.</p></div></section>

    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <SectionLabel number="01" text="PROBLEM"/>
      <h2 className="text-3xl font-black sm:text-4xl">Why entrepreneurs struggle to implement AI in their businesses</h2>
      <p className="mt-1 text-base leading-7 text-slate-600">Most participants had tried ChatGPT, Gemini or similar generative AI tools. The challenge was moving beyond isolated prompts to repeatable AI workflows, owned projects and measurable returns.</p>

      <div className="mt-3 ml-auto grid max-w-[676px] md:grid-cols-[3fr_2fr]">
        <div className="bg-[#f1f4f6] p-3 text-[#101d2d]">
          <h3 className="text-xs font-black tracking-wide text-[#0b5795]">BUSINESS CONTEXT</h3>
          <p className="mt-2 text-sm font-black leading-5">Entrepreneurs wanted to improve sales speed, customer response and cost efficiency without building large technology teams or investing in complex AI infrastructure.</p>
          <ul className="mt-2 space-y-1 text-xs leading-[1.45] text-slate-600">{[["#159bd3","Fragmented AI use","Tools were used for writing or research, not embedded into sales, service, finance or operations."],["#f6a313","No use-case prioritisation","Teams lacked a framework to rank opportunities by impact, effort, data readiness and risk."],["#159bd3","Low implementation confidence","Founders were unsure how to move from a promising AI idea to a working prototype and pilot."],["#f6a313","Unclear AI ROI","Benefits were qualitative, with few quantified time-saving, revenue or payback hypotheses."]].map(([color,title,body])=><li key={title}><span className="mr-1 font-black" style={{color}}>●</span><strong className="text-[#101d2d]">{title}</strong> - {body}</li>)}</ul>
        </div>
        <div className="bg-[#fff4df] p-3 text-center">
          <h3 className="text-xs font-black tracking-wide text-[#f6a313]">THE CORE QUESTION</h3>
          <blockquote className="mt-2 text-2xl font-black leading-[1.12] text-[#0b5795]">“Which AI use cases should we implement first - and how will we measure business value?”</blockquote>
          <p className="mx-auto mt-3 max-w-[220px] text-xs leading-4 text-slate-600">The workshop answered this through hands-on AI training, rapid prototyping and use-case business cases.</p>
        </div>
      </div>

      <div className="mt-5 grid items-start gap-7 lg:grid-cols-[44%_56%] lg:gap-0">
        <h3 className="pr-10 text-2xl font-black">Four barriers to successful AI adoption</h3>
        <div className="grid border-l border-t border-[#159bd3] sm:grid-cols-2">{barriers.map(([number,title,body],index)=><div key={number} className={`min-h-[108px] border-b border-r p-3 ${index === 1 || index === 2 ? "border-[#f6a313]" : "border-[#159bd3]"}`}><span className={`text-xl font-black ${index === 1 || index === 2 ? "text-[#f6a313]" : "text-[#159bd3]"}`}>{number}</span><h4 className="mt-1 text-base font-black text-[#101d2d]">{title}</h4><p className="mt-1 text-xs leading-4 text-slate-600">{body}</p></div>)}</div>
      </div>

      <div className="mt-5 grid items-start gap-7 lg:grid-cols-[44%_56%] lg:gap-0">
        <h3 className="pr-10 text-2xl font-black">The shift created by the AI workshop</h3>
        <div className="grid grid-cols-[1fr_64px_1fr] items-stretch text-center">
          <div className="flex min-h-[108px] flex-col justify-between bg-[#f1f4f6] px-4 py-3"><p className="text-xs font-black text-slate-500">BEFORE</p><p className="text-base font-black leading-tight text-[#101d2d]">Scattered AI prompts, generic demos and vendor dependence</p></div>
          <div className="flex flex-col items-center justify-around text-2xl text-[#f6a313]"><span>→</span><span>→</span></div>
          <div className="flex min-h-[108px] flex-col justify-between bg-[#e8f6fb] px-4 py-3"><p className="text-xs font-black text-[#0b5795]">AFTER</p><p className="text-base font-black leading-tight text-[#0b5795]">Prioritised AI use cases, working prototypes, owners, timelines and ROI hypotheses</p></div>
        </div>
      </div>
    </section>

    <section className="bg-white"><div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionLabel number="02" text="SOLUTION"/>
      <h2 className="text-3xl font-black sm:text-4xl">How Ivy’s hands-on AI workshop moved ideas into implementation</h2>
      <p className="mt-1 text-base leading-7 text-slate-600">Ivy Professional School structured the six-hour AI training programme as a series of short concept inputs, guided builds and business decisions. Each module produced an asset or next step for the participant’s six-month AI roadmap.</p>

      <div className="mt-7 ml-auto max-w-[652px]">
        <h3 className="mb-4 text-xl font-black text-[#101d2d]">A six-stage build-to-implementation journey</h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {[["1","Discover","Find high-value AI opportunities"],["2","Prompt","Create reliable business instructions"],["3","Build","Develop web, app and assistant assets"],["4","Analyse","Turn sales and financial data into actions"],["5","Predict","Test purchase likelihood and ML use cases"],["6","Automate","Connect forms, messages and workflows"]].map(([number,title,body],index)=><div key={number} className={`relative min-h-[84px] border px-2 py-2 ${index % 2 === 0 ? "border-[#159bd3] bg-[#e8f6fb]" : "border-[#f6a313] bg-[#fff5e3]"}`}><span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-black text-white ${index % 2 === 0 ? "bg-[#159bd3]" : "bg-[#f6a313]"}`}>{number}</span><p className={`mt-2 text-[11px] font-black ${index % 2 === 0 ? "text-[#0b5795]" : "text-[#f6a313]"}`}>{title}</p><p className="mt-1 text-[9px] leading-tight text-slate-700">{body}</p>{index < 5 && <span className="absolute -right-[7px] top-1/2 z-10 -translate-y-1/2 text-xs font-black text-[#0b5795]">›</span>}</div>)}
        </div>
      </div>

      <div className="mt-11 grid items-start gap-8 lg:grid-cols-[44%_56%] lg:gap-0">
        <h3 className="pr-10 text-2xl font-black">Design principles of the AI training programme</h3>
        <div className="grid border-l border-t border-[#159bd3] sm:grid-cols-3">{principles.map(([number,title,body],index)=><div key={number} className={`min-h-[145px] border-b border-r p-3 ${index === 1 ? "border-[#f6a313]" : "border-[#159bd3]"}`}><span className={`text-xl font-black ${index === 1 ? "text-[#f6a313]" : "text-[#159bd3]"}`}>{number}</span><h4 className="mt-1 text-base font-black leading-tight text-[#101d2d]">{title}</h4><p className="mt-2 text-xs leading-5 text-slate-600">{body}</p></div>)}</div>
      </div>

      <div className="mt-5 grid items-start gap-8 lg:grid-cols-[44%_56%] lg:gap-0">
        <h3 className="pr-10 text-2xl font-black">What participants built during the AI workshop</h3>
        <div className="grid border-l border-t border-[#159bd3] sm:grid-cols-2">{builds.map(([number,title,body],index)=><div key={number} className={`min-h-[124px] border-b border-r p-3 ${index === 1 || index === 2 ? "border-[#f6a313]" : "border-[#159bd3]"}`}><span className={`text-xl font-black ${index === 1 || index === 2 ? "text-[#f6a313]" : "text-[#159bd3]"}`}>{number}</span><h4 className="mt-1 text-base font-black text-[#101d2d]">{title}</h4><p className="mt-2 text-xs leading-5 text-slate-600">{body}</p></div>)}</div>
      </div>
    </div></section>

    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionLabel number="03" text="IMPACT"/>
      <h2 className="text-3xl font-black sm:text-4xl"><span className="bg-[#d2d3d4] px-1">AI workshop results:</span> 86 use cases, 14 pilots and 8 implementations</h2>
      <p className="mt-1 text-base leading-7 text-slate-600">The programme created a measurable AI implementation pipeline. Participants converted business problems into prioritised opportunities, working prototypes, pilot commitments and implemented use cases.</p>

      <div className="mt-4 ml-auto grid max-w-[676px] grid-cols-2 border-l border-t border-[#159bd3] sm:grid-cols-4">
        {results.map(([n,l,d], index)=><div key={l} className={`flex min-h-[112px] flex-col items-center justify-center border-b border-r px-2 py-3 text-center ${index % 2 === 0 ? "border-[#159bd3] bg-[#e8f6fb]" : "border-[#f6a313] bg-[#fff5e3]"}`}><p className={`text-3xl font-black ${index % 2 === 0 ? "text-[#159bd3]" : "text-[#f6a313]"}`}>{n}</p><p className="mt-1 text-[11px] font-black leading-[1.15] text-[#101d2d]">{l}</p><p className="mt-1 text-[10px] leading-tight text-slate-600">{d}</p></div>)}
      </div>

      <div className="ml-auto mt-7 max-w-[676px] text-center">
        <h3 className="mb-3 text-xl font-black text-[#101d2d]">From ideas to implemented business value</h3>
        <div className="mx-auto max-w-[545px] text-white">
          <div className="flex h-50px items-center justify-center gap-16 bg-[#159bd3] px-16 py-3 font-black" style={{ clipPath: "polygon(0 0,100% 0,89% 100%,11% 100%)" }}><strong className="text-xl">86</strong><span className="text-xs">USE CASES IDENTIFIED</span></div>
          <div className="mx-auto -mt-px flex w-[78%] items-center justify-center gap-14 bg-[#0b5795] px-12 py-3 font-black" style={{ clipPath: "polygon(0 0,100% 0,88% 100%,12% 100%)" }}><strong className="text-xl">31</strong><span className="text-xs">PRIORITISED</span></div>
          <div className="mx-auto -mt-px flex w-[57%] items-center justify-center gap-10 bg-[#f6a313] px-8 py-3 font-black" style={{ clipPath: "polygon(0 0,100% 0,84% 100%,16% 100%)" }}><strong className="text-xl">14</strong><span className="text-xs">PILOTS INITIATED</span></div>
          <div className="mx-auto -mt-px flex w-[38%] items-center justify-center gap-7 bg-[#f6a313] px-5 py-3 font-black" style={{ clipPath: "polygon(0 0,100% 0,77% 100%,23% 100%)" }}><strong className="text-xl">8</strong><span className="text-[10px]">IMPLEMENTED</span></div>
        </div>
        <p className="mt-2 text-xs text-slate-500">Implementation conversion: 9% of ideas reached live use within 60 days</p>
      </div>

      <h3 className="mb-6 mt-14 text-2xl font-black">Business impact of the AI training programme</h3><Cards items={impacts} columns={3}/>
    </section>

    <section className="bg-white"><div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <SectionLabel number="04" text="BUSINESS VALUE"/>
      <h2 className="text-3xl font-black sm:text-4xl">High-value AI use cases identified by entrepreneurs</h2>
      <p className="mt-1 text-base leading-7 text-slate-600">The use-case portfolio spanned sales and marketing, customer service, operations, finance and new digital products - areas where AI could improve revenue velocity, employee capacity, customer response and management visibility.</p>

      <div className="mt-6 ml-auto max-w-[610px]">
        <h3 className="mb-4 text-xl font-black text-[#101d2d]">Where entrepreneurs found the highest-value opportunities</h3>
        <div className="space-y-3">{[["Sales & Marketing",29],["Customer Service",21],["Operations",19],["Finance & MIS",17],["New Digital Products",14]].map(([label,value],index)=><div key={String(label)} className="grid grid-cols-[145px_1fr_42px] items-center gap-3 text-xs font-bold"><span>{label}</span><div className="h-5 bg-[#e7ecf0]"><div className={`h-full ${index % 2 === 0 ? "bg-[#159bd3]" : "bg-[#f6a313]"}`} style={{width:`${(Number(value)/29)*100}%`}}/></div><span className="text-[#0b5795]">{value}%</span></div>)}</div>
        <p className="mt-3 text-[10px] text-slate-500">Share of prioritised use cases by business area</p>
      </div>

      <div className="mt-5 grid items-start gap-7 lg:grid-cols-[49%_51%] lg:gap-0">
        <h3 className="pr-8 text-2xl font-black">Representative AI use cases from the implementation pipeline</h3>
        <div className="grid border-l border-t border-[#159bd3] sm:grid-cols-4">{useCases.map(([title,application,value],index)=><div key={title} className={`min-h-[100px] border-b border-r p-2 text-center ${index % 2 === 0 ? "border-[#159bd3] bg-[#e8f6fb]" : "border-[#f6a313] bg-[#fff5e3]"}`}><p className={`text-[9px] font-black ${index % 2 === 0 ? "text-[#159bd3]" : "text-[#f6a313]"}`}>{title}</p><p className="mt-3 text-xs font-black leading-tight text-[#101d2d]">{application}</p><p className="mt-2 text-[10px] leading-tight text-slate-600">{value}</p></div>)}</div>
      </div>

      <div className="mt-5 grid items-start gap-7 lg:grid-cols-[47%_53%] lg:gap-0">
        <h3 className="pr-8 text-2xl font-black">Why this AI training model works for enterprise teams</h3>
        <div className="grid md:grid-cols-[2fr_1fr]">
          <div className="bg-[#f1f4f6] p-3"><ul className="space-y-1 text-xs leading-[1.45] text-slate-600">{modelReasons.map(([title,body],index)=><li key={title}><span className={`mr-1 font-black ${index % 2 === 0 ? "text-[#159bd3]" : "text-[#f6a313]"}`}>●</span><strong className="text-[#101d2d]">{title}</strong> - {body}</li>)}</ul></div>
          <div className="bg-[#0b5795] p-3 text-center text-white"><p className="text-[10px] font-black tracking-wide text-[#f6a313]">FROM AI TRAINING TO BUSINESS TRANSFORMATION</p><p className="mt-3 text-lg font-black">The core deliverable is not tool familiarity.</p><p className="mt-2 text-lg font-black">It is a governed pipeline of AI use cases with evidence, ownership and momentum.</p><p className="mt-3 text-[10px] leading-tight">Custom AI workshops for leaders, functional teams and cross-functional cohorts</p></div>
          <div className="bg-[#fff4df] px-3 py-2"><h4 className="text-base font-black leading-tight text-[#101d2d]">Build a custom AI training programme around your organisation’s use cases.</h4><p className="mt-1 text-[10px] text-slate-600">Generative AI, analytics, predictive AI and automation training</p></div>
          <Link href="/contact-us" className="flex items-center justify-center bg-[#f6a313] px-3 py-3 text-xs font-black text-white">ivyproschool.com</Link>
        </div>
      </div>
    </div></section>

    <section className="border-t border-slate-200 bg-white"><div className="mx-auto max-w-6xl px-4 py-20 sm:px-6"><p className="text-xs font-black tracking-[0.2em] text-[#4eaec3]">SEO PUBLISHING SPECIFICATION</p><h2 className="mt-3 text-3xl font-black">Recommended on-page SEO setup</h2><p className="mt-5 max-w-4xl leading-7 text-slate-600">Use this internal handoff when publishing the case study on ivyproschool.com. The first five pages contain the public-facing copy; this page provides the CMS fields and implementation requirements.</p><h3 className="mb-5 mt-10 text-xl font-black">Core SEO fields</h3><div className="overflow-hidden rounded-2xl border border-slate-200">{seoFields.map(([k,v])=><div key={k} className="grid border-b border-slate-100 last:border-0 md:grid-cols-[220px_1fr]"><strong className="bg-slate-50 px-5 py-4 text-[#013a81]">{k}</strong><span className="px-5 py-4 text-slate-600">{v}</span></div>)}</div><h3 className="mb-5 mt-10 text-xl font-black">Keyword and internal-link map</h3><div className="grid gap-6 md:grid-cols-2"><div className="rounded-2xl border border-slate-200 p-6"><strong>SECONDARY KEYWORDS</strong><ul className="mt-4 space-y-2 text-slate-600">{["AI training for business owners","Generative AI workshop","AI automation training","Predictive AI training","Business AI use cases","Corporate AI training in India"].map(x=><li key={x}>• {x}</li>)}</ul></div><div className="rounded-2xl border border-slate-200 p-6"><strong>RECOMMENDED INTERNAL LINKS</strong><ul className="mt-4 space-y-2 text-slate-600"><li>• <Link className="text-[#013a81] underline" href="/enterprise">Enterprise AI training service page</Link></li><li>• <Link className="text-[#013a81] underline" href="/courses/generative-ai-course">Generative AI training programme page</Link></li><li>• <Link className="text-[#013a81] underline" href="/courses/data-analytics-and-generative-ai-course">Data analytics and AI capability page</Link></li><li>• <Link className="text-[#013a81] underline" href="/casestudies">Corporate training case-studies hub</Link></li><li>• <Link className="text-[#013a81] underline" href="/contact-us">Contact / consultation page</Link></li></ul></div></div><h3 className="mb-5 mt-10 text-xl font-black">Website implementation checklist</h3><Cards items={checklist} columns={3}/><div className="mt-10 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6 font-semibold text-amber-900">PUBLISHING NOTE: Replace or validate all draft impact metrics before the page is indexed. Use the actual publication date and update the “last modified” date when outcomes are revised.</div></div></section>
  </main><Footer/></>;
}
