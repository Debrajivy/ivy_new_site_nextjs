import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import styles from "./leaders.module.css";
import aiLeaders1 from "@/assests/aileaders1.jpeg";
import aiLeaders2 from "@/assests/aileaders2.jpeg";
import aiLeaders3 from "@/assests/aileaders3.jpeg";
import aiLeaders4 from "@/assests/aileaders4.jpeg";
import aiLeaders5 from "@/assests/aileaders5.jpeg";
import cxo1 from "@/assests/cxo1.jpeg";
import cxo2 from "@/assests/cxo2.jpeg";
import cxo3 from "@/assests/cxo3.jpeg";
import cxo4 from "@/assests/cxo4.jpeg";
import cxo5 from "@/assests/cxo5.jpeg";
import cxo6 from "@/assests/cxo6.jpeg";
import atlasCopcoLogo from "@/assests/Atlas Copco Logotype for white BG_CMYK.png";
import bcclLogo from "@/assests/BCCL - Times of India.webp";
import canonLogo from "@/assests/Canon.png";
import bridgestoneLogo from "@/assests/Bridgestone.png";
import capgeminiLogo from "@/assests/Capgemini-Logo.png";
import genpactLogo from "@/assests/Genpact Logo.png";
import tataSteelLogo from "@/assests/Tata Steel.png";
import itcLogo from "@/assests/ITC.png";
import honeywellLogo from "@/assests/Honeywell.png";
import mspSteelLogo from "@/assests/MSP Steel.png";

const modules = [
  ["01 · 60 MIN", "The Enterprise AI Landscape", "Distinguish traditional AI, generative AI and agentic AI. Build a common vocabulary around LLMs, enterprise platforms, adoption patterns and the economics behind AI usage.", "CONCEPT + DISCUSSION"],
  ["02 · 30 MIN", "Responsible AI & Data Privacy", "Translate governance into daily decisions. Cover data boundaries, verification, human oversight, copyright, bias and safe use of approved tools.", "FRAMEWORK + Q&A"],
  ["03 · 45 MIN", "Prompting & Hallucination Control", "Use the RICTF framework to turn vague requests into precise, contextualized outputs with clear formats and constraints.", "LIVE DEMO + PRACTICE"],
  ["04 · 60 MIN", "Industry & Function Use Cases", "See AI applied to realistic challenges across sales, marketing, finance, HR, operations, legal, IT and customer experience.", "RAPID DEMO LAB"],
  ["05 · 60 MIN", "AI in Everyday Work", "Apply Copilot or the organization's chosen stack to email, documents, presentations, spreadsheets, meetings and knowledge retrieval.", "DEMO + HANDS-ON"],
  ["06 · 45 MIN", "Build a Personal AI Assistant", "Configure a role-aware assistant for planning, research, SOP guidance, onboarding, contract review or another participant-selected task.", "LIVE BUILD"],
  ["07 · 45 MIN", "Agentic AI, Workflow Design & Economics", "Explore how agents read, decide, act and check results. Compare productivity value with licence, model, integration, data, governance and change-management costs.", "CONCEPT + SIMULATION"],
  ["08 · 45 MIN", "Use-Case Prioritization Sprint", "Identify personal, team and enterprise opportunities. Score them for value, feasibility, data readiness, risk and sponsor ownership.", "BREAKOUT ACTIVITY"],
];

const cases = [
  ["SALES & CHANNEL", "Meeting-to-Follow-up Copilot", "Turn unstructured account notes into an executive summary, accountable actions, a follow-up email and a grounded next-best discussion."],
  ["MARKETING", "Campaign Content Copilot", "Convert a launch brief into differentiated concepts, channel-wise drafts, A/B routes and a claim-validation checklist."],
  ["E-COMMERCE", "Product Listing Copilot", "Translate verified specifications into customer benefits, listings, FAQs and SEO suggestions while preserving every qualifier."],
  ["HUMAN RESOURCES", "Recruitment Design Copilot", "Create an inclusive JD, competency-based interview plan and weighted evidence rubric while keeping hiring decisions human-led."],
  ["FINANCE", "Variance Analysis Copilot", "Validate actual-versus-budget movements, classify material items and draft evidence-labelled management commentary."],
  ["LEGAL", "Contract Vetting Copilot", "Perform first-cut clause issue spotting, classify risk, explain business impact and escalate high-risk deviations."],
  ["LOGISTICS & SUPPLY CHAIN", "Dispatch Delay Copilot", "Convert incomplete delay information into an escalation note, customer update and recovery tracker without inventing commitments."],
  ["INFORMATION TECHNOLOGY", "IT Triage Assistant", "Provide approved process guidance, prioritize incidents, refuse security bypasses and escalate unsupported questions safely."],
  ["CUSTOMER SUPPORT", "Service Email Triage", "Classify complaints, detect urgency, identify missing information, draft a safe response and structure the service call log."],
  ["LEADERSHIP + PROCUREMENT", "Vendor Renewal Decision Notebook", "Review contract, spend and approval documents through legal and finance lenses, then verify AI-generated figures before deciding."],
  ["STRATEGY", "Market Expansion Intelligence", "Research markets and segments, structure evidence, compare scenarios and create a Minto-style recommendation with source confidence."],
  ["EXECUTIVE COMMUNICATION", "Board Decision Pack", "Turn approved analysis into an interactive dashboard, conclusion-led presentation, one-page infographic and formal strategy report."],
];

const metrics = [
  ["20–30%", "TARGET KNOWLEDGE UPLIFT", "AI fluency", "Improvement between pre- and post-assessments covering AI concepts, responsible-use decisions and workflow understanding."],
  ["≥80%", "TARGET HANDS-ON COMPLETION", "Applied capability", "Participants completing the guided prompt, notebook, copilot or agent activity at the required validation standard."],
  ["≥70%", "TARGET 30-DAY ACTIVATION", "Adoption behavior", "Leaders applying at least one approved AI workflow in their role within 30 days of the program."],
  ["100%", "OF CAPTURED USE CASES SCORED", "Opportunity quality", "Each use case assessed for business value, feasibility, data readiness, risk and accountable ownership."],
  ["15–30%", "TARGET CYCLE-TIME POTENTIAL", "Productivity case", "Estimated reduction for selected recurring workflows, validated through a controlled pilot before any scale claim."],
  ["3–5", "PILOT-READY OPPORTUNITIES", "Implementation readiness", "Shortlisted workflows with data inputs, guardrails, sponsor ownership, economic logic and defined success criteria."],
];

const delivery = [
  ["BEFORE", "Assess & configure", ["Sponsor and stakeholder discovery", "Participant pre-screening", "AI maturity pre-assessment", "Tool, data and policy mapping", "Custom use-case and KPI selection"]],
  ["DURING", "Experience & build", ["Level-adjusted concepts", "Industry-relevant demonstrations", "Hands-on copilot and agent builds", "Verification and guardrail testing", "Function-wise opportunity sprint"]],
  ["AFTER", "Activate & measure", ["Post-assessment and cohort report", "Role-based prompt and agent library", "Prioritized AI opportunity map", "7-day commitments and 30-day pulse", "Pilot shortlist with success metrics"]],
] as const;

const programPhotos = [
  { src: aiLeaders1, alt: "AI for Leaders workshop participants in a live learning session", wide: true },
  { src: aiLeaders2, alt: "Business leaders taking part in an applied AI workshop", wide: true },
  { src: aiLeaders3, alt: "Facilitator engaging leaders during an enterprise AI program", wide: false },
  { src: aiLeaders4, alt: "Senior professionals collaborating during an AI learning activity", wide: false },
  { src: aiLeaders5, alt: "Enterprise leaders exploring practical AI applications", wide: true },
  { src: cxo1, alt: "CXOs participating in an enterprise AI leadership session", wide: true },
  { src: cxo2, alt: "Senior executives collaborating during the AI for Leaders program", wide: true },
  { src: cxo3, alt: "Leadership team attending a practical AI workshop", wide: true },
  { src: cxo4, alt: "CXO cohort exploring business applications of AI", wide: true },
  { src: cxo5, alt: "Enterprise leaders engaged in an instructor-led AI session", wide: true },
  { src: cxo6, alt: "Executives taking part in the AI for Leaders learning experience", wide: true },
];

const clientLogos = [
  { src: atlasCopcoLogo, name: "Atlas Copco" },
  { src: bcclLogo, name: "BCCL – The Times of India" },
  { src: canonLogo, name: "Canon" },
  { src: bridgestoneLogo, name: "Bridgestone" },
  { src: capgeminiLogo, name: "Capgemini" },
  { src: genpactLogo, name: "Genpact" },
  { src: tataSteelLogo, name: "Tata Steel" },
  { src: itcLogo, name: "ITC" },
  { src: honeywellLogo, name: "Honeywell" },
  { src: mspSteelLogo, name: "MSP Steel" },
];

const faqs = [
  ["Who is the AI for Leaders and CXOs program designed for?", "The program is designed for CXOs, business heads, senior managers and enterprise decision-makers who need to evaluate AI opportunities, guide adoption and manage risk without becoming technical specialists."],
  ["Do participants need a technical or coding background?", "No. The program focuses on leadership judgment, practical business workflows and responsible AI adoption. Concepts, demonstrations and exercises are configured for the cohort's existing level."],
  ["Can the AI leadership training be customized for our organization?", "Yes. Ivy Professional School assesses business priorities, participant maturity, approved tools, data boundaries and target functions before configuring the curriculum, use cases and success measures."],
  ["What business outcomes does the program target?", "Typical targets include stronger AI fluency, completion of hands-on workflows, a scored AI opportunity map, improved adoption and a shortlist of pilot-ready use cases with owners and measurement criteria."],
  ["Which AI topics are covered?", "The program covers generative AI, agentic AI, prompting, hallucination control, responsible AI, data privacy, functional use cases, workflow design, AI economics and use-case prioritization."],
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Course", name: "AI for Leaders & CXOs", description: "A customizable enterprise AI training program for CXOs and senior leaders covering GenAI, AI agents, responsible adoption and business use cases.", provider: { "@type": "Organization", name: "Ivy Professional School", url: "https://ivyproschool.com" }, educationalLevel: "Executive and senior leadership", teaches: ["Generative AI", "Agentic AI", "Responsible AI", "AI strategy", "Enterprise AI adoption", "AI use-case prioritization"] },
    { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ],
};

export default function LeadersPage() {
  return <div className={styles.page}>
    <Navbar />
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className={styles.hero} id="top"><div className={styles.shell + " " + styles.heroGrid}>
        <div><p className={styles.eyebrow}>ENTERPRISE AI CAPABILITY PROGRAM</p><h1>AI for Leaders <span>& CXOs</span></h1><p className={styles.heroLead}>Help decision-makers move from AI awareness to responsible action, with hands-on tools, business-ready use cases, and a clear path from individual productivity to enterprise transformation.</p><div className={styles.actions}><a className={styles.button} href="#outline">Explore the program <ArrowRight size={17}/></a><a href="#customized">See how we customize</a></div><div className={styles.trust}><span><Check/> No technical background required</span><span><Check/> Built around your approved AI stack</span></div></div>
        <aside className={styles.heroPanel}><div className={styles.panelTop}><span>LEADERSHIP WORKSHOP</span><span>LIVE + HANDS-ON</span></div><div className={styles.panelCore}><p>A practical journey</p>{[["01","Understand","AI, GenAI & agents"],["02","Apply","Prompts, copilots & tools"],["03","Prioritize","Value, feasibility & risk"],["04","Activate","A measurable action plan"]].map(x=><div className={styles.journey} key={x[0]}><strong>{x[0]}</strong><b>{x[1]}</b><small>{x[2]}</small></div>)}<div className={styles.result}><Sparkles/><p><b>Program result</b><br/>A shared leadership vocabulary, practical experience, and a prioritized AI opportunity map.</p></div></div></aside>
      </div></section>

      <section className={styles.proof}><div className={styles.shell + " " + styles.proofGrid}>{[["8 hours","Flagship workshop"],["12","Functional use-case labs"],["3–5","Pilot-ready opportunities"],["30 days","Activation pulse"]].map(x=><div key={x[0]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</div></section>

      <section className={styles.photoSection} id="program-photos"><div className={styles.shell}><div className={styles.photoIntro}><div><p className={styles.eyebrow}>PREVIOUS PROGRAM HIGHLIGHTS</p><h2>Leaders learning through real business application.</h2></div><p>Immersive sessions built around live demonstrations, collaborative problem-solving and practical AI workflows that leaders can take back to their teams.</p></div><div className={styles.programGallery}>{programPhotos.map((photo, index)=><figure className={`${styles.photoCard} ${photo.wide ? styles.photoWide : ""}`} key={photo.alt}><Image src={photo.src} alt={photo.alt} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 50vw" priority={index === 0} /><span>{String(index + 1).padStart(2, "0")}</span></figure>)}</div></div></section>

      <section className={styles.section}><div className={styles.shell + " " + styles.twoCol}><div><p className={styles.eyebrow}>WHY THIS PROGRAM</p><h2>Leadership judgment is the real AI advantage.</h2></div><div className={styles.leadCopy}><p>Leaders need enough AI fluency to ask sharper questions, choose worthwhile opportunities, set responsible boundaries, and sponsor adoption with confidence.</p><p>The program connects technology to business decisions, using examples that feel familiar to each participant&apos;s function and industry.</p></div></div></section>

      <section className={styles.custom} id="customized"><div className={styles.shell + " " + styles.customGrid}><p className={styles.eyebrow}>BUILT FOR YOUR ORGANIZATION</p><h2>One program.<br/>Configured to your context.</h2><p>Every engagement begins with leadership discovery, participant pre-screening and an AI maturity assessment. The findings determine the program level, tool depth, pace, exercises, industry examples and success measures. The published outline is a starting architecture, not a rigid syllabus.</p></div></section>

      <section className={styles.logoSection} id="clients" aria-labelledby="clients-heading"><div className={styles.shell}><div className={styles.logoHead}><div><p className={styles.eyebrow}>TRUSTED BY ENTERPRISE TEAMS</p><h2 id="clients-heading">Organizations we have worked with</h2></div><p>Enterprise learning experiences designed for leaders and teams across industries.</p></div></div><div className={styles.logoCarousel}><div className={styles.logoTrack}>{[...clientLogos,...clientLogos].map((client,i)=><div className={styles.logoItem} key={`${client.name}-${i}`} aria-hidden={i >= clientLogos.length}><Image src={client.src} alt={i < clientLogos.length ? `${client.name} logo` : ""} sizes="180px" /></div>)}</div></div></section>

      <section className={styles.section}><div className={styles.shell}><div className={styles.diagnosticHead}><p className={styles.eyebrow}>CONFIGURED, NEVER OFF-THE-SHELF</p><h2>We assess the cohort before we design the classroom.</h2><p>Every engagement begins with pre-screening and an AI maturity assessment. The findings determine the program level, tool depth, pace, exercises, industry examples and success measures. The published outline is a starting architecture, not a rigid syllabus.</p></div><div className={styles.maturityBar}>{["AI AWARENESS","TOOL ADOPTION","DATA & GOVERNANCE READINESS","USE-CASE MATURITY"].map(x=><span key={x}>{x}</span>)}</div><div className={styles.diagnostic}>{["Leadership discovery","Participant pre-screening","AI maturity baseline","Curriculum configuration","Outcome design"].map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3><p>{["Clarify business priorities, sponsor expectations, target functions and transformation goals.","Map role mix, prior exposure, confidence, current usage and barriers to adoption.","Assess capability across awareness, prompting, tools, governance, workflow thinking and agent readiness.","Select the right concepts, demos, data, case labs and hands-on complexity for the cohort.","Agree measurable learning, adoption, productivity and pilot-readiness targets before delivery."][i]}</p></article>)}</div><div className={styles.configNote}><article><h3>What changes by client</h3><p>Examples, terminology, tools, datasets, documents, case complexity, function mix, governance boundaries, session duration and take-home assets.</p></article><article><h3>What remains consistent</h3><p>Business relevance, responsible AI, source verification, hands-on practice, human judgment, measurable outcomes and a clear path to implementation.</p></article></div></div></section>

      <section className={styles.section} id="outline"><div className={styles.shell}><div className={styles.heading}><div><p className={styles.eyebrow}>FLAGSHIP OUTLINE</p><h2>Eight hours.<br/>From context to commitment.</h2></div><p>The full-day format blends leadership context, live demonstrations, guided practice and structured opportunity discovery. Modular and multi-day formats are also available.</p></div><div className={styles.modules}>{modules.map(m=><article key={m[0]}><span>{m[0]}</span><div><h3>{m[1]}</h3><p>{m[2]}</p></div><b>{m[3]}</b></article>)}</div></div></section>

      <section className={styles.dark} id="cases"><div className={styles.shell + " " + styles.section}><div className={styles.heading}><div><p className={styles.eyebrow}>USE-CASE LIBRARY</p><h2>Business work becomes the learning material.</h2></div><p>Participants build and test role-specific copilots using synthetic or approved client inputs. Each activity includes embedded rules, validation criteria, guardrails and mandatory human review.</p></div><div className={styles.caseGrid}>{cases.map(c=><article key={c[1]}><span>{c[0]}</span><h3>{c[1]}</h3><p>{c[2]}</p></article>)}</div></div></section>

      <section className={styles.economics}><div className={styles.shell + " " + styles.economicsGrid}><div><p className={styles.eyebrow}>AI COST ECONOMICS</p><h2>Leaders learn to judge value before approving scale.</h2></div><div><p className={styles.leadCopy}>AI economics extends beyond a licence price. Leaders examine the full cost-to-value equation, compare build, buy and configure choices, and learn when a promising demo is commercially ready for an enterprise pilot.</p><div className={styles.costGrid}>{[["DIRECT COSTS","Licences, model usage, compute and platforms"],["IMPLEMENTATION COSTS","Integration, workflow design, testing and support"],["READINESS COSTS","Data preparation, access, security and governance"],["ADOPTION COSTS","Training, process redesign and human oversight"],["VALUE DRIVERS","Time saved, quality, consistency and avoided risk"],["UNIT ECONOMICS","Cost per user, task or decision versus benefit"]].map(x=><div key={x[0]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</div></div></div></section>

      <section className={styles.section}><div className={styles.shell}><div className={styles.heading}><div><p className={styles.eyebrow}>HOW WE DELIVER</p><h2>Diagnose. Configure. Deliver. Measure.</h2></div><p>The workshop is the first stage of a capability and implementation journey. Business ownership, responsible-use boundaries and measurement are designed in from the start.</p></div><div className={styles.delivery}>{delivery.map(d=><article key={d[0]}><span>{d[0]}</span><h3>{d[1]}</h3><ul>{d[2].map(x=><li key={x}>{x}</li>)}</ul></article>)}</div></div></section>

      <section className={styles.outcomes} id="outcomes"><div className={styles.shell + " " + styles.section}><div className={styles.heading}><div><p className={styles.eyebrow}>OUTCOMES & IMPACT METRICS</p><h2>Targets that a corporate sponsor can track.</h2></div><p>Final targets are agreed after the maturity assessment and adjusted to the cohort baseline, program duration, tool access and selected workflows.</p></div><div className={styles.metricGrid}>{metrics.map(m=><article key={m[2]}><strong>{m[0]}</strong><small>{m[1]}</small><h3>{m[2]}</h3><p>{m[3]}</p><span>MEASURED & REPORTED</span></article>)}<div className={styles.note}><ShieldCheck/> These percentages are proposed program targets, not universal performance claims. Final targets are customized after baseline assessment.</div></div></div></section>

      <section className={styles.roadmap}><div className={styles.shell + " " + styles.roadmapGrid}><div><p className={styles.eyebrow}>FROM WORKSHOP TO SCALE</p><h2>A phased enterprise journey</h2></div>{[["PHASE 1","Leadership alignment","Shared vocabulary, responsible-use clarity and opportunity discovery."],["PHASE 2","Functional capability","Role-specific training using real documents, workflows and approved tools."],["PHASE 3","AI pilots","Design, test and scale selected agents and AI-enabled workflows."]].map(x=><article key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>

      <section className={styles.faqSection} aria-labelledby="faq-heading"><div className={styles.shell}><div className={styles.faqHead}><p className={styles.eyebrow}>FREQUENTLY ASKED QUESTIONS</p><h2 id="faq-heading">AI training for leaders, answered.</h2></div><div className={styles.faqList}>{faqs.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>

      <section className={styles.cta}><div className={styles.shell}><p className={styles.eyebrow}>DESIGN YOUR PROGRAM</p><h2>Bring your priorities.<br/>We will build the learning around them.</h2><p>Share your industry, leadership audience, approved AI tools and the business areas you want to transform.</p><a className={styles.button} href="mailto:corporate@ivyproschool.com">Discuss your AI leadership program <ArrowRight size={17}/></a></div></section>
    </main>
    <Footer />
  </div>;
}
