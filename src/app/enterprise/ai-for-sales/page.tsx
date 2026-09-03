import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import styles from "../ai-for-leaders-and-cxos/leaders.module.css";
import ProgramGallery from "../ai-for-leaders-and-cxos/ProgramGallery";
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
  ["01 · 30 MIN", "AI and Prompt Design for Sales Data Workflows", "Distinguish AI assistance, repeatable automation, agentic workflows and selective autonomous execution. Use the RICF structure to define inputs, business rules, expected outputs, validation checks and exception handling.", "FOCUSED FOUNDATION"],
  ["02 · 75 MIN", "Bank Statement Preparation and Reconciliation", "Clean and standardize bank statements, extract useful narration information, prepare customer mappings, classify matched or unmatched items, flag duplicates and build validation totals for a repeatable refresh process.", "HANDS-ON CASE"],
  ["03 · 120 MIN", "Automated Debtor Reporting", "Combine payment and ERP data, map receipts to outstanding amounts, separate TMT and Structural outputs, identify overdue and unadjusted cases, assign follow-up priority and create a management exception list.", "DETAILED HANDS-ON"],
  ["04 · 75 MIN", "Sales Performance Reporting Pack", "Prepare one clean ERP reporting table and use it to generate RGH_TMT targets, target-versus-achievement analysis, dealer-wise and product-wise summaries, variance indicators and management observations.", "HANDS-ON CASE"],
  ["05 · 40 MIN", "Management Insights, Actions and Report-to-Presentation Workflow", "Interpret completed MIS outputs, separate observation from inference and recommendation, then create an executive summary, a five-slide review structure, an action tracker, follow-up communication and escalation messages.", "GUIDED WORKFLOW"],
  ["06 · 80 MIN", "Copilot Agents for Sales and MIS Workflows", "Design a practical Sales MIS Copilot Agent using approved reports, reporting rules and process instructions. Define users, knowledge sources, calculations, questions, outputs, controls, escalation rules and mandatory human approvals.", "DEMO + GUIDED DESIGN"],
  ["07 · 60 MIN", "Integrated Mini-Capstone and Implementation Planning", "Document one end-to-end workflow from source-file preparation through transformation, reporting, exception identification, management summary, action tracking and potential Copilot Agent application. Finish with a 30-day implementation action plan.", "INTEGRATED APPLICATION"],
] as const;

const cases = [
  ["BANK DATA", "Bank Statement Preparation Copilot", "Read the raw statement structure, propose cleaning steps, standardize dates and amounts, extract narration details and generate validation checks."],
  ["RECONCILIATION", "Payment Matching Assistant", "Support customer-code mapping, identify fully or partially matched receipts, surface unadjusted payments and route ambiguous items for review."],
  ["DEBTORS", "Debtor Review Agent", "Summarize outstanding positions, highlight ageing and high-value cases, detect payments received but not adjusted and prepare review priorities."],
  ["COLLECTIONS", "Follow-Up Prioritization Copilot", "Apply approved business rules to classify urgent follow-up, create customer-level action categories and draft recommended internal comments."],
  ["TMT + STRUCTURALS", "Debtor Output Automation", "Generate separate TMT and Structural debtor outputs from combined source data while validating counts and totals against original files."],
  ["PERFORMANCE", "Target vs Achievement Copilot", "Calculate achievement percentage and variance, identify zero or below-target cases and produce management observations around priority gaps."],
  ["CHANNEL SALES", "Dealer Performance Analyzer", "Produce dealer-wise summaries, top and bottom dealer views, inactive or declining dealer flags and concentration indicators."],
  ["PRODUCT MIX", "Product Analysis Copilot", "Create product-wise summaries and dealer-product matrices, inspect product mix and identify product-performance concerns."],
  ["MANAGEMENT MIS", "Weekly Sales Review Agent", "Read approved reports, answer recurring review questions, surface critical exceptions and prepare a consistent weekly management summary."],
  ["EXECUTIVE COMMUNICATION", "Report-to-Presentation Copilot", "Convert completed analysis into a one-page briefing, a five-slide review structure and evidence-grounded management communication."],
  ["ACTION MANAGEMENT", "Customer Action Tracker", "Convert approved observations into owner, deadline and status fields, then prepare internal reminders and escalation drafts for review."],
  ["AGENTIC WORKFLOW", "Sales MIS Copilot Agent", "Use approved debtor, dispatch, target and dealer reports with defined instructions, output formats, exception rules and human-approval gates."],
] as const;

const delivery = [
  ["BEFORE", "Assess & configure", ["Sponsor and process-owner discovery", "Participant pre-screening", "AI maturity pre-assessment", "ERP, bank and reporting-file review", "Business-rule, KPI and control mapping"]],
  ["DURING", "Build & validate", ["RICF prompting for recurring workflows", "Three hands-on Sales and MIS cases", "Source-total and exception validation", "Management-summary and action outputs", "Copilot Agent design with approval gates"]],
  ["AFTER", "Activate & measure", ["Post-assessment and cohort report", "Prompt, checklist and agent templates", "Selected workflow implementation plan", "30-day adoption and time-saving pulse", "Pilot shortlist with success measures"]],
] as const;

const metrics = [
  ["20–30%", "TARGET KNOWLEDGE UPLIFT", "AI + workflow fluency", "Improvement between pre- and post-assessments covering prompting, workflow design, responsible use, validation and Copilot Agent concepts.", "MEASURE: PRE/POST SCORE"],
  ["≥80%", "TARGET HANDS-ON COMPLETION", "Applied capability", "Participants completing the guided bank, debtor, reporting or agent-design activity to the agreed validation standard.", "MEASURE: TASK RUBRIC"],
  ["100%", "OF GUIDED WORKFLOWS CONTROLLED", "Validation discipline", "Each selected workflow documents source checks, validation totals, exception handling and mandatory human-review points.", "MEASURE: CONTROL CHECKLIST"],
  ["≥70%", "TARGET 30-DAY ACTIVATION", "Adoption behavior", "Participants applying at least one approved Sales or MIS prompt, reporting workflow, checklist or Copilot Agent pattern within 30 days.", "MEASURE: FOLLOW-UP PULSE"],
  ["15–30%", "TARGET CYCLE-TIME POTENTIAL", "Productivity case", "Estimated reduction in preparation time for a selected recurring workflow, validated against a baseline before any scale claim.", "MEASURE: TIME PER REFRESH"],
  ["1+", "PILOT-READY WORKFLOW PER TEAM", "Implementation readiness", "A documented workflow with inputs, business rules, outputs, controls, owner, refresh frequency, expected benefit and immediate next action.", "MEASURE: 30-DAY ACTION PLAN"],
] as const;

const takeaways = [
  ["Sales and MIS prompt template", "A reusable RICF structure for recurring data and reporting requirements."],
  ["Bank-statement and reconciliation checklists", "Cleaning, mapping, duplicate, balance and total-validation controls."],
  ["Debtor-report automation workflow", "Payment and ERP mapping logic with exception and follow-up templates."],
  ["Performance-analysis prompt set", "Target-versus-achievement, dealer-wise and product-wise analysis prompts."],
  ["Management reporting pack", "Summary, report-to-PowerPoint and customer action-tracker templates."],
  ["Copilot Agent design blueprint", "Knowledge sources, instructions, controls, outputs and human-approval points."],
  ["30-day implementation plan", "One selected workflow documented with owner, refresh cadence, expected time saving, risks and next action."],
] as const;

const programPhotos = [aiLeaders1,aiLeaders2,aiLeaders3,aiLeaders4,aiLeaders5,cxo1,cxo2,cxo3,cxo4,cxo5,cxo6].map((src,index) => ({ src, alt: `Enterprise teams collaborating in a practical AI workshop — program highlight ${index + 1}` }));
const clientLogos = [{src:atlasCopcoLogo,name:"Atlas Copco"},{src:bcclLogo,name:"BCCL – The Times of India"},{src:canonLogo,name:"Canon"},{src:bridgestoneLogo,name:"Bridgestone"},{src:capgeminiLogo,name:"Capgemini"},{src:genpactLogo,name:"Genpact"},{src:tataSteelLogo,name:"Tata Steel"},{src:itcLogo,name:"ITC"},{src:honeywellLogo,name:"Honeywell"},{src:mspSteelLogo,name:"MSP Steel"}];

const faqs = [
  ["Who is this AI for Sales and MIS program designed for?", "The program is designed for Sales teams, MIS owners, commercial managers, finance-linked Sales operations and business leaders responsible for recurring reporting, reconciliation and follow-up workflows."],
  ["Which tools are used during the program?", "The program is configured around the client's approved AI and Microsoft 365 environment, including Excel and Copilot where available. Exercises can use actual approved files or sanitized equivalents."],
  ["Does the workshop automate our full production process?", "No. The workshop creates guided prototypes and repeatable workflow designs. Production automation requires stable inputs, integration, testing, monitoring, governance, ownership and approval controls."],
  ["How is financial and customer data protected?", "Activities use approved or sanitized data, preserve source-total validation and keep customer mapping, financial adjustment, credit, ownership and external communication decisions under human control."],
  ["What do participants take back after the workshop?", "Participants receive reusable prompts, reconciliation and validation checklists, reporting templates, a Sales MIS Copilot Agent blueprint and a 30-day implementation plan."],
] as const;

const structuredData = {"@context":"https://schema.org","@graph":[{"@type":"Course",name:"AI for Sales & MIS Automation",description:"A customized enterprise AI program for recurring Sales and MIS reporting, reconciliation, analysis and follow-up workflows.",provider:{"@type":"Organization",name:"Ivy Professional School",url:"https://ivyproschool.com"},teaches:["Sales automation","MIS automation","Microsoft 365 Copilot","Debtor reporting","Sales performance reporting","AI agents"]},{"@type":"FAQPage",mainEntity:faqs.map(([question,answer])=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))}]};

export default function SalesPage() {
  return <div className={styles.page}>
    <Navbar />
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
      <section className={styles.hero} id="top"><div className={`${styles.shell} ${styles.heroGrid}`}><div><p className={styles.eyebrow}>ENTERPRISE AI CAPABILITY PROGRAM</p><h1>AI for <span>Sales</span></h1><p className={styles.heroLead}>Turn recurring Sales and MIS work into structured, refreshable workflows. Participants use AI and Microsoft 365 tools to prepare data, reconcile payments, automate debtor and performance reports, identify exceptions, prioritize follow-up and convert analysis into management-ready communication.</p><div className={styles.actions}><a className={styles.button} href="#outline">Explore the program <ArrowRight size={17}/></a><a href="#customized">See how we customize</a></div><div className={styles.trust}><span><Check/> Built around approved Sales data and business rules</span><span><Check/> Human review retained for financial and customer actions</span></div></div><aside className={styles.heroPanel}><div className={styles.panelTop}><span>SALES + MIS WORKSHOP</span><span>LIVE + HANDS-ON</span></div><div className={styles.panelCore}><p>A practical workflow journey</p>{[["01","Prepare","Bank & ERP data"],["02","Analyze","Debtors, targets & exceptions"],["03","Act","Follow-up, MIS & Copilot Agents"]].map(item=><div className={styles.journey} key={item[0]}><strong>{item[0]}</strong><b>{item[1]}</b><small>{item[2]}</small></div>)}<div className={styles.result}><Sparkles/><p><b>Teams leave with</b><br/>Guided working prototypes, reusable prompts and checklists, a Sales MIS Copilot Agent blueprint, and a 30-day implementation plan.</p></div></div></aside></div></section>

      <section className={styles.proof}><div className={`${styles.shell} ${styles.proofGrid}`}>{[["8 hours","Full-day flagship format"],["7 modules","Data workflow to agent design"],["3 core cases","Reconciliation, debtors and performance"],["12+ workflows","Sales, MIS, action and reporting"]].map(item=><div key={item[0]}><strong>{item[0]}</strong><span>{item[1]}</span></div>)}</div></section>

      <section className={styles.photoSection} id="program-photos"><div className={styles.photoGlow} aria-hidden="true"/><div className={styles.shell}><div className={styles.photoIntro}><div><p className={styles.eyebrow}>PREVIOUS PROGRAM HIGHLIGHTS</p><h2>Sales teams working on <span>real reporting and decision workflows.</span></h2></div><div className={styles.photoSummary}><p>Hands-on enterprise sessions centered on live analysis, facilitator demonstrations and team-based use-case design.</p><span>Explore the moments <ArrowRight size={15}/></span></div></div><ProgramGallery photos={programPhotos}/><p className={styles.swipeHint}>Swipe to explore <ArrowRight size={14}/></p></div></section>

      <section className={styles.section}><div className={`${styles.shell} ${styles.twoCol}`}><div><p className={styles.eyebrow}>WHY THIS PROGRAM</p><h2>Sales performance improves when reporting turns into action faster.</h2></div><div className={styles.leadCopy}><p>Sales and MIS teams often spend recurring effort cleaning bank or ERP files, reconciling customer payments, rebuilding debtor reports, preparing target-versus-achievement views and translating findings into follow-up lists or management decks.</p><p>This program shows how AI can help structure those workflows, preserve business rules, surface exceptions and create repeatable outputs while keeping validation and commercial decisions with the responsible team.</p></div></div></section>

      <section className={styles.custom} id="customized"><div className={`${styles.shell} ${styles.customGrid}`}><p className={styles.eyebrow}>CUSTOMIZED FOR YOUR BUSINESS</p><h2>One workflow architecture.<br/>Your ERP, bank files, rules and review formats.</h2><p>Before delivery, Ivy maps the client&apos;s Sales and MIS process, source-file structures, approved Microsoft 365 environment, customer and product hierarchies, validation requirements, management-reporting formats and human-approval boundaries. Exercises are then configured around the organization&apos;s actual or sanitized files and expected outputs.</p></div></section>

      <section className={styles.logoSection} id="clients" aria-labelledby="clients-heading"><div className={styles.shell}><div className={styles.logoHead}><div><p className={styles.eyebrow}>TRUSTED BY ENTERPRISE TEAMS</p><h2 id="clients-heading">Organizations we have worked with</h2></div><p>Enterprise learning experiences designed for leaders and teams across industries.</p></div></div><div className={styles.logoCarousel}><div className={styles.logoTrack}>{[...clientLogos,...clientLogos].map((client,index)=><div className={styles.logoItem} key={`${client.name}-${index}`} aria-hidden={index>=clientLogos.length}><Image src={client.src} alt={index<clientLogos.length?`${client.name} logo`:""} sizes="180px"/></div>)}</div></div></section>

      <section className={styles.section}><div className={styles.shell}><div className={styles.diagnosticHead}><p className={styles.eyebrow}>CONFIGURED, NEVER OFF-THE-SHELF</p><h2>We assess the workflow before we design the classroom.</h2><p>Every engagement begins with participant pre-screening and an AI maturity baseline, followed by a working-session review of recurring Sales and MIS processes. The findings determine tool depth, case complexity, source files, business rules, demonstrations and success measures.</p></div><div className={styles.maturityBar}>{["AI & COPILOT FLUENCY","SALES DATA READINESS","REPORTING PROCESS MATURITY","AGENT & AUTOMATION READINESS"].map(item=><span key={item}>{item}</span>)}</div><div className={styles.diagnostic}>{[["Sponsor discovery","Clarify priority Sales outcomes, current reporting pain points, review cadence and management expectations."],["Participant pre-screening","Map roles, Excel and Copilot comfort, current AI usage, recurring tasks and practical barriers."],["Workflow baseline","Review bank, ERP, target, debtor and reporting inputs together with current manual steps and validation points."],["Curriculum configuration","Select client-relevant files, business rules, reporting dimensions, exceptions, demonstrations and agent use cases."],["Outcome design","Agree measurable learning, completion, time-saving, adoption and pilot-readiness targets before delivery."]].map((item,index)=><article key={item[0]}><b>0{index+1}</b><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div><div className={styles.configNote}><article><h3>What changes by client</h3><p>ERP structure, bank format, customer codes, product hierarchy, ageing logic, target definitions, exception rules, tools, output templates and approval flow.</p></article><article><h3>What remains consistent</h3><p>Source validation, transparent business rules, repeatable refresh logic, human review, protected customer data, measurable outcomes and a path to controlled implementation.</p></article></div></div></section>

      <section className={styles.section} id="outline"><div className={styles.shell}><div className={styles.heading}><div><p className={styles.eyebrow}>FLAGSHIP OUTLINE</p><h2>Eight hours.<br/>From raw files to repeatable Sales workflows.</h2></div><p>The full-day format uses focused concepts, three connected case studies, guided management reporting, Copilot Agent design and an integrated mini-capstone. It creates working prototypes and repeatable process designs rather than a complete production automation in one day.</p></div><div className={styles.modules}>{modules.map(module=><article key={module[0]}><span>{module[0]}</span><div><h3>{module[1]}</h3><p>{module[2]}</p></div><b>{module[3]}</b></article>)}</div></div></section>

      <section className={styles.dark} id="cases"><div className={`${styles.shell} ${styles.section}`}><div className={styles.heading}><div><p className={styles.eyebrow}>SALES + MIS USE-CASE LIBRARY</p><h2>Recurring Sales work becomes the learning material.</h2></div><p>Activities use approved or sanitized data and keep customer mappings, financial adjustments, credit decisions, ownership assignments and external communication under human control.</p></div><div className={styles.caseGrid}>{cases.map(item=><article key={item[1]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div><div className={styles.configNote}><article><p className={styles.eyebrow}>FEATURED CORE CASE</p><h3>Automated debtor reporting and collection prioritization</h3><p>Teams move from payment and ERP source files to mapped debtor outputs, exception indicators and a management follow-up list. Validation remains anchored to source totals, and AI-generated recommendations are separated from approved business actions.</p><p><strong>Prepare data → Map receipts → Calculate debtors → Flag exceptions → Prioritize action</strong></p></article><article><p className={styles.eyebrow}>FEATURED REPORTING CASE</p><h3>One ERP source, multiple refreshable Sales reports</h3><p>Participants create a clean reporting table, then reuse it for target reporting, achievement analysis, dealer performance, product mix and management observations instead of maintaining separate manual reports.</p><p><strong>ERP source → Clean table → Targets → Variance → Dealer + product MIS</strong></p></article></div></div></section>

      <section className={styles.economics}><div className={`${styles.shell} ${styles.economicsGrid}`}><div><p className={styles.eyebrow}>AI AUTOMATION ECONOMICS</p><h2>Measure the recurring work before deciding what to automate.</h2></div><div><p className={styles.leadCopy}>Sales automation value depends on frequency, manual effort, data quality, exception rates and the control required around financial or customer actions. Teams learn to separate a useful guided prototype from a production workflow that needs integration, monitoring, governance and ownership.</p><div className={styles.costGrid}>{[["BASELINE EFFORT","Time spent preparing statements, reconciling payments, rebuilding reports and preparing review packs"],["PROCESS FREQUENCY","Daily, weekly or monthly refresh cadence and the number of users or reports affected"],["IMPLEMENTATION COST","Licences, connectors, workflow build, testing, integration, maintenance and support"],["DATA READINESS","Stable identifiers, consistent file structures, mapping tables and approved business rules"],["VALUE DRIVERS","Time saved, shorter reporting cycles, consistent outputs, faster exception detection and improved follow-up focus"],["CONTROL COST","Validation, access controls, auditability, human approval and periodic review of agent instructions"]].map(item=><div key={item[0]}><strong>{item[0]}</strong><span>{item[1]}</span></div>)}</div></div></div></section>

      <section className={styles.section}><div className={styles.shell}><div className={styles.heading}><div><p className={styles.eyebrow}>HOW WE DELIVER</p><h2>Assess. Configure. Build. Measure.</h2></div><p>The workshop is the first stage of a controlled Sales and MIS automation journey. Each workflow includes input definitions, transformation logic, output requirements, validation checks, manual intervention points and ownership.</p></div><div className={styles.delivery}>{delivery.map(item=><article key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><ul>{item[2].map(point=><li key={point}>{point}</li>)}</ul></article>)}</div></div></section>

      <section className={styles.outcomes} id="outcomes"><div className={`${styles.shell} ${styles.section}`}><div className={styles.heading}><div><p className={styles.eyebrow}>OUTCOMES & IMPACT METRICS</p><h2>Targets a Sales sponsor can track.</h2></div><p>Final targets are agreed after pre-screening and workflow baseline review. These percentages are proposed measurement targets, not claims about universal performance.</p></div><div className={styles.metricGrid}>{metrics.map(item=><article key={item[2]}><strong>{item[0]}</strong><small>{item[1]}</small><h3>{item[2]}</h3><p>{item[3]}</p><span>{item[4]}</span></article>)}<div className={styles.note}><ShieldCheck/> The workshop source specifies validation checks, expected time saving and 30-day implementation planning, but no fixed outcomes. Replace these configurable targets with actual achieved results after delivery.</div></div></div></section>

      <section className={styles.takeaways}><div className={`${styles.shell} ${styles.twoCol}`}><div><p className={styles.eyebrow}>WHAT PARTICIPANTS TAKE BACK</p><h2>A Sales MIS toolkit designed for the next reporting cycle.</h2></div><div>{takeaways.map((item,index)=><p key={item[0]}><b>{String(index+1).padStart(2,"0")}</b><span><strong>{item[0]}</strong>{item[1]}</span></p>)}</div></div></section>

      <section className={styles.roadmap}><div className={`${styles.shell} ${styles.roadmapGrid}`}><div><p className={styles.eyebrow}>FROM WORKSHOP TO CONTROLLED AUTOMATION</p><h2>A phased Sales transformation journey</h2></div>{[["PHASE 1","Capability + baseline","Build common workflow language, document recurring tasks and validate a guided prototype using approved files."],["PHASE 2","Workflow pilots","Stabilize data inputs, rules, refresh steps, controls and ownership for selected high-frequency Sales and MIS processes."],["PHASE 3","Copilot Agent rollout","Deploy approved knowledge and instructions with monitoring, human approvals and periodic review before wider scale."]].map(item=><article key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}</div></section>

      <section className={styles.faqSection} aria-labelledby="faq-heading"><div className={styles.shell}><div className={styles.faqHead}><p className={styles.eyebrow}>FREQUENTLY ASKED QUESTIONS</p><h2 id="faq-heading">AI for Sales and MIS automation, answered.</h2></div><div className={styles.faqList}>{faqs.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>

      <section className={styles.cta}><div className={styles.shell}><p className={styles.eyebrow}>DESIGN YOUR PROGRAM</p><h2>Bring your Sales workflows.<br/>We will build the learning around them.</h2><p>Share your ERP and reporting environment, approved AI tools, recurring MIS outputs, Sales priorities and the workflows you want to simplify.</p><a className={styles.button} href="mailto:corporate@ivyproschool.com">Discuss your AI for Sales program <ArrowRight size={17}/></a></div></section>
    </main>
    <Footer />
  </div>;
}
