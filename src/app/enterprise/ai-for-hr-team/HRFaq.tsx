"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./hr.module.css";

const faqCategories = [
  {
    id: "program",
    label: "Program & Audience",
    title: "Program & Audience FAQs",
    items: [
      {
        question: "Who is an AI for HR training program designed for?",
        answer: "The AI for HR program is designed for HR leaders, HR business partners, Talent Acquisition teams, HR Operations, Payroll and Compensation teams, Learning & Development professionals, Employee Engagement teams and HR Analytics professionals who want to apply AI to practical HR workflows.",
      },
      {
        question: "What is AI for HR training?",
        answer: "AI for HR training teaches HR professionals how to use Generative AI, Microsoft 365 Copilot, AI agents, prompting, analytics and workflow automation to improve day-to-day HR work. The focus is on practical workflows such as recruitment, reporting, employee service, payroll review, L&D and people analytics.",
      },
      {
        question: "Do HR professionals need technical or programming knowledge to learn AI?",
        answer: "No programming background is required for the core programme. The training is designed around practical HR workflows, business problems and guided hands-on exercises. Participants learn how to use AI tools, structure prompts, validate outputs and design controlled workflows.",
      },
      {
        question: "Is AI for HR training suitable for HR leaders and CHROs?",
        answer: "Yes. The programme can be adapted for HR leadership teams as well as hands-on HR practitioners. Leadership-focused delivery can emphasize AI opportunity identification, governance, business cases, adoption priorities, workflow redesign and implementation planning.",
      },
      {
        question: "What are the benefits of AI training for HR teams?",
        answer: "AI training can help HR teams reduce repetitive work, improve the quality and consistency of HR outputs, accelerate reporting and communication, strengthen data validation and identify practical automation opportunities. The programme also helps teams establish human review and responsible AI controls for sensitive HR work.",
      },
      {
        question: "What HR functions can use AI?",
        answer: "AI can support recruitment, onboarding, HR operations, payroll review, workforce reporting, people analytics, performance management, learning and development, employee engagement, policy communication and HR business partnering. The programme selects use cases according to the organization's priorities and tool environment.",
      },
      {
        question: "How can AI be used in recruitment and talent acquisition?",
        answer: "AI can assist with requirement-to-JD workflows, role scorecards, sourcing briefs, explainable CV comparison, interview guides, candidate communication and joining-readiness tracking. The programme emphasizes explicit criteria, evidence checks and human review for candidate-related decisions.",
      },
    ],
  },
  {
    id: "applications",
    label: "HR Applications",
    title: "AI Applications Across HR",
    items: [
      {
        question: "Can AI help with resume screening and candidate evaluation?",
        answer: "Yes. AI can compare CV evidence against defined role criteria and surface matches, gaps and information requiring review. The programme uses an explainable approach so AI output supports recruiter judgement rather than making unsupported rejection decisions.",
      },
      {
        question: "How can ChatGPT, Claude or Copilot be used in HR?",
        answer: "Generative AI tools can support HR professionals with drafting, summarization, analysis, communication, document review and structured workflow tasks. The specific tools used can be aligned with the organization's approved enterprise environment and data policies.",
      },
      {
        question: "Does the AI for HR program include Microsoft 365 Copilot?",
        answer: "Yes. The programme includes practical Microsoft 365 Copilot applications for HR, including meeting summaries, action tracking, Outlook thread analysis, HR documents, presentations and management narratives.",
      },
      {
        question: "Does the program cover AI agents for HR?",
        answer: "Yes. The programme introduces controlled AI-agent workflows and includes ready-to-configure agent instructions and starter prompts. Potential applications include HR reporting, data quality, policy Q&A, recruitment, L&D, employee feedback and cross-file analysis.",
      },
      {
        question: "How can AI automate HR workflows?",
        answer: "AI workflow automation can connect tasks such as document handling, reporting, approvals, reminders, exception identification and communication. The programme covers workflow design, triggers and approvals, document processing and escalation flows, with human review where required.",
      },
      {
        question: "Can AI be used for HR analytics and workforce reporting?",
        answer: "Yes. AI can assist with consolidating HR data, validating records, identifying exceptions and preparing workforce insights. The programme includes workforce reporting, manpower-cost analysis, attrition review and dashboard cross-audit activities.",
      },
      {
        question: "Can AI help HR with payroll validation and payroll analysis?",
        answer: "Yes. AI-assisted workflows can compare payroll information with attendance, leave, increments, incentives and deductions to surface exceptions before review and sign-off. Sensitive payroll decisions remain subject to authorised human review.",
      },
      {
        question: "Can AI help with employee engagement and HR communication?",
        answer: "Yes. AI can help HR teams adapt approved communications for email, WhatsApp, intranet, posters and other professional channels. The programme also covers tone, clarity, consistency and reputational review.",
      },
      {
        question: "How can AI be used in Learning and Development?",
        answer: "AI can support LMS effectiveness reviews by combining enrolment, completion, assessment and feedback information to identify cohorts or programmes that need attention. It can also help structure follow-up actions and learning communications.",
      },
      {
        question: "Can AI help HR analyze employee feedback and engagement surveys?",
        answer: "Yes. AI can anonymize and categorize survey and exit-feedback themes, identify recurring patterns and organize action priorities. The programme emphasizes sample controls, traceability and appropriate safeguards when working with employee information.",
      },
      {
        question: "How can AI be used for HR policy and employee queries?",
        answer: "An HR policy knowledge assistant can answer questions from approved HR documents, provide citations, respect document versions and route exceptions for human review. This approach helps HR teams provide more consistent policy information while retaining control over sensitive cases.",
      },
    ],
  },
  {
    id: "governance",
    label: "Responsible AI",
    title: "Responsible AI, Privacy & Governance",
    items: [
      {
        question: "How does the program address data privacy and confidentiality in HR?",
        answer: "The programme teaches HR teams to use approved enterprise locations for employee-level data, establish data boundaries and apply human review. It addresses candidate data, payroll risk, sensitive information, unsupported claims and other risks associated with AI-assisted HR workflows.",
      },
      {
        question: "How does AI for HR training address bias and responsible AI?",
        answer: "The programme includes bias awareness, hallucination controls, evidence checks and mandatory human review. Recruitment, appraisal, disciplinary and separation decisions remain with authorised people. AI outputs are treated as decision support and are reviewed before sensitive decisions are made.",
      },
      {
        question: "What is agentic AI and why should HR teams understand it?",
        answer: "Agentic AI refers to AI systems that can perform multi-step tasks, use tools and move through defined workflows with limited human intervention. HR teams can use agentic approaches for reporting, data quality, policy Q&A, recruitment, L&D and employee-feedback workflows, with appropriate controls.",
      },
      {
        question: "Can our HR team use its own HR processes and use cases during the training?",
        answer: "Yes. The programme is modular and can be configured around the organization's priority workflows, available tools, data readiness and HR maturity. Use cases and datasets can be selected during pre-screening and programme design.",
      },
    ],
  },
  {
    id: "delivery",
    label: "Delivery & Outcomes",
    title: "Customization, Delivery & Outcomes",
    items: [
      {
        question: "Can AI for HR training be customized for our organization?",
        answer: "Yes. Ivy Professional School can customize the curriculum, case materials, tools, datasets, learning tracks, deliverables and success measures according to the organization's business priorities and technology environment.",
      },
      {
        question: "What will HR participants build during the AI for HR program?",
        answer: "Participants can create reusable HR prompt libraries, recruitment toolkits, HR analytics and payroll validation packs, workflow templates, Copilot-agent instructions and a prioritized 30-day HR AI action plan. The exact outputs can be adapted to the programme scope.",
      },
      {
        question: "Is the AI for HR program hands-on or mainly theoretical?",
        answer: "The programme is hands-on. Participants work with HR scenarios and fictional or sanitized datasets, create practical outputs, validate AI-generated results and apply review controls. The core format includes practical exercises across prompting, Copilot, recruitment, analytics, L&D, engagement and implementation planning.",
      },
      {
        question: "How long is the AI for HR training program?",
        answer: "The core programme is designed as an eight-hour format including breaks. It can be expanded into role-based labs, implementation sprints or a multi-stage HR AI academy depending on the organization's needs.",
      },
      {
        question: "What can an HR team expect to achieve after AI training?",
        answer: "The programme is designed to move the team from individual AI productivity toward controlled, repeatable HR workflows. Expected outputs include practical AI assets, prioritized use cases, defined owners, implementation controls and a 30-day action plan.",
      },
      {
        question: "How can HR measure the ROI of AI adoption?",
        answer: "HR can compare baseline effort with AI-assisted effort, including human review time, quality-control gains, rework avoided, tool costs and adoption. The programme provides a framework for assessing annualized capacity value, avoided rework and risk against implementation cost.",
      },
      {
        question: "What is the difference between AI for HR training and generic AI training?",
        answer: "Generic AI training typically focuses on broad AI concepts or general-purpose tools. AI for HR training applies those capabilities to HR workflows such as recruitment, payroll review, workforce reporting, L&D, employee communication and policy support, while incorporating HR-specific privacy, bias and human-review requirements.",
      },
      {
        question: "Is this program only about ChatGPT?",
        answer: "No. The programme is broader than a single AI tool. It covers Generative AI concepts, prompting, Microsoft 365 Copilot, AI agents, dashboards, workflow automation and controlled agentic work. Tool selection can be aligned with the organization's approved environment.",
      },
      {
        question: "Can AI training help HR move from experimentation to implementation?",
        answer: "Yes. The programme includes an implementation roadmap covering the current process, problem, input data, workflow, risks, controls, owner, next 30-day action and success measure. This gives HR teams a practical path from an AI use case to an approved pilot.",
      },
      {
        question: "What industries can benefit from AI for HR training?",
        answer: "The programme can be adapted for organizations across manufacturing, BFSI, healthcare, technology, consulting, retail, education, infrastructure, professional services and other sectors where HR teams manage high-volume people, document, reporting and communication workflows.",
      },
      {
        question: "Can the training be delivered for an entire HR team?",
        answer: "Yes. The programme is designed for corporate HR teams and can be delivered through common foundation sessions, role-based tracks, hands-on labs or extended implementation programmes depending on participant roles and organizational requirements.",
      },
      {
        question: "How does Ivy Professional School customize AI training for HR teams?",
        answer: "Ivy can assess participant roles, experience, AI comfort, tool access, current AI usage, data readiness, governance controls and priority workflows before configuring the programme. The curriculum can then be tailored around relevant use cases, datasets, tools, deliverables and measurement criteria.",
      },
    ],
  },
] as const;

export default function HRFaq() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  const category = faqCategories[activeCategory];

  const selectCategory = (index: number) => {
    setActiveCategory(index);
    setOpenQuestion(0);
  };

  return (
    <section className={`${styles.section} ${styles.faqSection}`} id="faqs">
      <div className={styles.shell}>
        <div className={styles.faqIntro}>
          <p className={styles.eyebrow}>AI FOR HR FAQs</p>
          <h2>Questions HR teams ask before starting.</h2>
          <p>Explore the programme by topic, from practical HR applications and responsible AI to customization, delivery and measurable outcomes.</p>
        </div>

        <div className={styles.faqLayout}>
          <aside className={styles.faqCategories} aria-label="FAQ categories">
            <strong>Categories</strong>
            <div role="tablist" aria-orientation="vertical">
              {faqCategories.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === index}
                  aria-controls={`faq-panel-${item.id}`}
                  id={`faq-tab-${item.id}`}
                  className={activeCategory === index ? styles.faqCategoryActive : ""}
                  onClick={() => selectCategory(index)}
                >
                  <span>{item.label}</span>
                  <small>{item.items.length}</small>
                </button>
              ))}
            </div>
          </aside>

          <div
            className={styles.faqPanel}
            role="tabpanel"
            id={`faq-panel-${category.id}`}
            aria-labelledby={`faq-tab-${category.id}`}
            key={category.id}
          >
            <header>
              <div>
                <span>Selected topic</span>
                <h3>{category.title}</h3>
              </div>
              <small>{category.items.length} questions</small>
            </header>

            <div className={styles.faqQuestions}>
              {category.items.map((item, index) => {
                const isOpen = openQuestion === index;
                const answerId = `faq-answer-${category.id}-${index}`;

                return (
                  <article className={styles.faqItem} key={item.question}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenQuestion(isOpen ? null : index)}
                    >
                      <span>{item.question}</span>
                      <ChevronDown className={isOpen ? styles.faqChevronOpen : ""} aria-hidden="true" />
                    </button>
                    {isOpen && <p id={answerId}>{item.answer}</p>}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
