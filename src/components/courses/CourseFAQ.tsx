"use client";
import React, { useState, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle, HelpCircle, Phone } from 'lucide-react';
import { Course } from '@/lib/api';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
interface CourseHeroProps {
  course: Course;
}

// console.log("title", course.title)
// Map course titles to their specific FAQs and categories
type Category = { id: string; name: string };
type FAQ = { question: string; answer: string; category: string };
type CourseFAQData = {
  categories: Category[];
  faqs: FAQ[];
};
const courseData: { [key: string]: CourseFAQData } = {
  "AI for Product Managers": {
    categories: [
      { id: "program", name: "Program" },
      { id: "eligibility", name: "Eligibility" },
      { id: "project-management", name: "Product Management" },
      { id: "job and career", name: "Job And Career" },
      { id: "certification", name: "Certification" },
      { id: "projects", name: "Projects" },
      { id: "placement", name: "Placement" },
      { id: "opportunities", name: "Opportunities" },
      { id: "support", name: "Support" }
    ],
    faqs: [
      {
        question: "What is the duration of the AI for Product Managerss course?",
        answer: "The course runs for 6–8 weeks with 25–30 hours of live and recorded sessions, offering flexible weekday, weekend, and fast-track options for working professionals.",
        category: "program"
      },
      {
        question: "Is this course beginner-friendly?",
        answer: "Yes. No coding or prior technical background is required. It is designed for project managers and leaders, focusing on real AI applications using no-code and low-code tools.",
        category: "program"
      },
      {
        question: "What tools will I learn in this program?",
        answer: "You will gain hands-on experience with ChatGPT, Claude, Gemini, Microsoft Copilot, and no-code tools like Flowise, LangChain Hub, and n8n, plus vector databases and AI governance practices.",
        category: "program"
      },
      {
        question: "Are the classes live or recorded?",
        answer: "The program follows a blended format with expert-led live classes and self-paced recorded sessions, ensuring flexibility and direct trainer interaction.",
        category: "program"
      },
      {
        question: "What projects and case studies are included?",
        answer: "You’ll work on AI-driven case studies such as risk prediction, automated reporting, and meeting assistants, plus a capstone project to design and prototype an AI feature end-to-end.",
        category: "program"
      },
      {
        question: "How is this course different from regular project management training?",
        answer: "Unlike traditional programs, this course integrates AI into project workflows—covering automation, risk forecasting, decision support, and smarter stakeholder communication.",
        category: "program"
      },
      {
        question: "Can I apply the concepts directly to my current projects?",
        answer: "Yes. Every module includes real-world use cases like AI-powered reporting, automation, and risk analysis that can be applied to ongoing projects immediately.",
        category: "program"
      },
      {
        question: "Does the course include both theory and hands-on practice?",
        answer: "Absolutely. You’ll learn frameworks like AI suitability and governance while building prototypes, workflows, and completing a capstone project for practical exposure.",
        category: "program"
      },
      {
        question: "Who can enroll in the AI for Product Managerss course?",
        answer: "This course is designed for project managers, product leaders, team leads, and professionals who want to integrate AI into project workflows and decision-making.",
        category: "eligibility"
      },
      {
        question: "Is the AI for Product Managerss course suitable for non-coders?",
        answer: "Yes. The course uses no-code and low-code AI tools, making it perfect for managers without programming experience.",
        category: "eligibility"
      },
      {
        question: "Is this course only for IT project managers?",
        answer: "Not at all. The course is industry-agnostic and applies to IT, manufacturing, consulting, media, retail, and any sector where project management is crucial.",
        category: "eligibility"
      },
      {
        question: "Can business analysts or product owners enroll in this course?",
        answer: "Yes. The course is highly relevant for business analysts, product owners, and team leads who work closely with project managers.",
        category: "eligibility"
      },
      {
        question: "Is there a minimum work experience required?",
        answer: "We recommend at least 1–2 years of professional or project experience, but motivated freshers and final-year students can also benefit.",
        category: "eligibility"
      },
      {
        question: "Will this course help me if I already use AI tools like ChatGPT or Copilot?",
        answer: "Yes. You’ll go beyond basic usage and learn structured frameworks, governance, and project-specific AI workflows to maximize ROI.",
        category: "eligibility"
      },
      {
        question: "What is AI in Project Management and why is it important?",
        answer: "AI in project management automates reporting, improves forecasting, and enhances decision-making, helping managers deliver projects faster and more efficiently.",
        category: "project-management"
      },
      {
        question: "What’s the difference between AI-driven Project Management and traditional project management?",
        answer: "Traditional methods rely on manual tracking, while AI-driven project management uses automation, predictive analytics, and intelligent assistants to optimize workflows.",
        category: "project-management"
      },
      {
        question: "Will this course teach both strategy and application?",
        answer: "Yes. The course blends strategic concepts like AI suitability and governance with hands-on practice through real-world case studies and automation workflows.",
        category: "project-management"
      },
      {
        question: "How are AI tools and real-world use cases covered in the course?",
        answer: "You’ll learn tools like ChatGPT, Microsoft Copilot, and no-code AI platforms, applied to scenarios such as risk prediction, status reporting, and stakeholder communication.",
        category: "project-management"
      },
      {
        question: "How does the course cover AI adoption in agile or hybrid project workflows?",
        answer: "You’ll explore how AI supports sprint planning, backlog management, and hybrid models by improving forecasting, automation, and team collaboration.",
        category: "project-management"
      },
      {
        question: "What career opportunities open up after completing this course?",
        answer: "You can apply for roles such as AI Project Manager, Digital Transformation Manager, Program Lead, and Project Consultant specializing in AI adoption.",
        category: "job and career"
      },
      {
        question: "Is there demand for AI-skilled project managers in the industry?",
        answer: "Yes. With AI transforming workflows across IT, consulting, manufacturing, and services, project managers with AI expertise are in high demand globally.",
        category: "job and career"
      },
      {
        question: "How does this course support career transitions?",
        answer: "The program is ideal for professionals shifting from traditional project management to AI-enabled roles, giving them practical, future-ready skills.",
        category: "job and career"
      },
      {
        question: "What salary growth can I expect after this course?",
        answer: "AI-savvy project managers command higher salaries than traditional PMs, with many companies offering premium pay for AI-enabled leadership skills.",
        category: "job and career"
      },
      {
        question: "Will I get portfolio-ready experience for job applications?",
        answer: "Yes. Through real-world case studies and a capstone project, you’ll build AI-powered project solutions you can showcase to employers.",
        category: "job and career"
      },
      {
        question: "Does the course help with global career opportunities?",
        answer: "Absolutely. The skills you gain are industry-agnostic and internationally relevant, opening pathways to global roles in AI-driven project leadership.",
        category: "job and career"
      },
      {
        question: "What certification will I receive upon completion?",
        answer: "You will receive a course completion certificate in AI for Product Managerss issued by Ivy Professional School, validating your expertise in AI-driven project workflows.",
        category: "certification"
      },
      {
        question: "Is the certification industry-recognized?",
        answer: "Yes. The certificate from Ivy Professional School is recognized by leading employers in India, and the AI tools, frameworks, and methods you learn are globally relevant.",
        category: "certification"
      },
      {
        question: "Do I need to pass an exam to receive the certificate?",
        answer: "Yes. Successful completion of assignments, case studies, and the capstone project is required to earn the certificate, ensuring both credibility and skill readiness.",
        category: "certification"
      },
      {
        question: "Is this certificate valid internationally?",
        answer: "The certificate is issued in India by Ivy Professional School. However, the tools and platforms you’ll master—such as ChatGPT, Microsoft Copilot, and no-code AI workflows—are globally adopted, making your skills internationally applicable.",
        category: "certification"
      },
      {
        question: "How many projects will I work on?",
        answer: "You will work on multiple real-world mini projects throughout the course and complete one major capstone project focused on AI in project management.",
        category: "projects"
      },
      {
        question: "Are these projects done individually or in groups?",
        answer: "Most projects are done individually so you can build a personal portfolio, while the capstone may include collaborative elements to mimic real project team settings.",
        category: "projects"
      },
      {
        question: "Will I get project certificates separately?",
        answer: "No separate certificates are issued for each project. However, all projects—including the capstone—are part of the main Ivy Professional School certification.",
        category: "projects"
      },
      {
        question: "Are the projects domain-specific?",
        answer: "Yes. Projects are designed around project management use cases such as AI-powered risk prediction, automated reporting, and stakeholder communication—relevant across industries.",
        category: "projects"
      },
      {
        question: "What is the capstone project about?",
        answer: "The capstone requires you to propose, design, and prototype an AI-based project management solution, giving you portfolio-ready experience to showcase to employers.",
        category: "projects"
      },
      {
        question: "Does Ivy offer placement support after the course?",
        answer: "Yes. Ivy Professional School provides lifetime placement assistance, including resume building, interview preparation, mock interviews, and job referrals.",
        category: "placement"
      },
      {
        question: "What companies hire AI-skilled project managers from Ivy?",
        answer: "Learners from Ivy have been placed in top IT, consulting, finance, and manufacturing firms that actively seek project managers with AI expertise.",
        category: "placement"
      },
      {
        question: "How soon after completing the course can I expect interview opportunities?",
        answer: "Interview opportunities usually start within weeks of course completion, depending on your profile, skill readiness, and job openings in the market.",
        category: "placement"
      },
      {
        question: "Is internship assistance also provided?",
        answer: "Yes. Internship opportunities are provided to help learners gain practical experience and strengthen their portfolio before applying for full-time roles.",
        category: "placement"
      },
      {
        question: "Will I get continued placement support in the future?",
        answer: "Yes. Ivy offers lifetime career and placement support, so you can access guidance, referrals, and interview prep even after years of completing the course.",
        category: "placement"
      },
      {
        question: "Which industries hire AI-skilled project managers?",
        answer: "AI project management skills are in demand across IT, consulting, banking, manufacturing, healthcare, and media—any sector adopting digital transformation.",
        category: "opportunities"
      },
      {
        question: "Can I work as a consultant or freelancer after completing this course?",
        answer: "Yes. Many project managers use their AI skills to take on freelance consulting, digital transformation projects, and AI workflow automation roles.",
        category: "opportunities"
      },
      {
        question: "Does the course support international career goals?",
        answer: "Yes. While the certificate is India-recognized, the AI tools and project frameworks you learn are globally applicable, opening international career opportunities.",
        category: "opportunities"
      },
      {
        question: "Can professionals from non-technical backgrounds explore AI project management?",
        answer: "Absolutely. The course is beginner-friendly and designed for non-coders, making it ideal for managers from diverse industries who want to upskill in AI.",
        category: "opportunities"
      },
      {
        question: "What long-term growth opportunities does this course create?",
        answer: "The course equips you for leadership roles like Program Manager, Transformation Lead, or Head of AI Projects, ensuring future-ready career progression.",
        category: "opportunities"
      },
      {
        question: "What kind of learner support is provided?",
        answer: "24x7 support via chat, email, and calls to resolve queries, access content, or schedule mentoring sessions.",
        category: "support"
      },
      {
        question: "Will I get one-on-one mentoring?",
        answer: "Yes, you will have access to 1:1 sessions with faculty and mentors for doubt clearing and career guidance.",
        category: "support"
      },
      {
        question: "What if I miss a live class?",
        answer: "You can access the recorded session anytime through the Learning Management System.",
        category: "support"
      },
      {
        question: "How do I reach out for technical issues or login problems?",
        answer: "A dedicated support team is available to assist you with technical, academic, or admin concerns.",
        category: "support"
      }
    ]
  },
  "Data Science with Machine Learning & AI Certification": {
    categories: [
      { id: "program", name: "Program" },
      { id: "eligibility", name: "Eligibility" },
      { id: "data-science", name: "Data Science" },
      { id: "job and career", name: "Job And Career" },
      { id: "certification", name: "Certification" },
      { id: "projects", name: "Projects" },
      { id: "placement", name: "Placement" },
      { id: "opportunities", name: "Opportunities" },
      { id: "support", name: "Support" }
    ],
    faqs: [
      {
        question: "What is the duration of the Data Science with Machine Learning & AI Certification course?",
        answer: "The course lasts for 45 weeks and includes 7 modules with 50 sessions totaling 225 hours.",
        category: "program"
      },
      {
        question: "Is this course hybrid or fully online?",
        answer: "The course follows a hybrid model with live classes and lifetime access to recordings.",
        category: "program"
      },
      {
        question: "What makes this program unique?",
        answer: "It offers Generative AI mastery, IT certification, and production-level model deployment.",
        category: "program"
      },
      {
        question: "Do I get practice sessions?",
        answer: "Yes, there are 30-minute practice sessions before and after each main class.",
        category: "program"
      },
      {
        question: "Is this course beginner-friendly?",
        answer: "Yes, this course is designed for students and professionals transitioning into data roles.",
        category: "program"
      },
      {
        question: "Can I pay in installments?",
        answer: "Yes, no-cost EMI and 4-month installment plans are available.",
        category: "program"
      },
      {
        question: "Who is eligible for this course?",
        answer: "Graduates, final-year students, and working professionals in any field can apply.",
        category: "eligibility"
      },
      {
        question: "Do I need prior experience in AI or ML?",
        answer: "No, the course starts from basics and gradually advances to GenAI.",
        category: "eligibility"
      },
      {
        question: "Is this suitable for non-programmers?",
        answer: "Yes, it is suitable for non-programmers.",
        category: "eligibility"
      },
      {
        question: "Do I need to attend live classes?",
        answer: "No, live attendance is encouraged but recordings are available for flexibility.",
        category: "eligibility"
      },
      {
        question: "Can I take only selected modules?",
        answer: "Yes, there is a 'Pick Your Own Module' option available.",
        category: "eligibility"
      },
      {
        question: "Is there an admission test?",
        answer: "No, you can enroll directly by paying the fee.",
        category: "eligibility"
      },
      {
        question: "What are the core technologies covered?",
        answer: "Python, SQL, Excel, Power BI, MLOps, and generative AI APIs like OpenAI and Anthropic.",
        category: "data-science"
      },
      {
        question: "Are ML and DL concepts taught?",
        answer: "Yes, along with building and fine-tuning LLMs.",
        category: "data-science"
      },
      {
        question: "Do I learn data visualization?",
        answer: "Yes, Power BI and Excel are covered in detail.",
        category: "data-science"
      },
      {
        question: "Are MLOps included in the course?",
        answer: "Yes, as part of model deployment and production.",
        category: "data-science"
      },
      {
        question: "Will I learn how to build AI applications?",
        answer: "Yes, including deploying models and using GenAI APIs.",
        category: "data-science"
      },
      {
        question: "Are statistics and problem solving covered?",
        answer: "Yes, including business statistics and interview-based problem solving.",
        category: "data-science"
      },
      {
        question: "What job roles can I get after this course?",
        answer: "Data Analyst, AI Developer, LLM Engineer, BI Developer, ML Engineer.",
        category: "job and career"
      },
      {
        question: "What is the average salary offered?",
        answer: "4-5 LPA is the average for freshers. Experienced professionals may earn more.",
        category: "job and career"
      },
      {
        question: "Is there a job guarantee?",
        answer: "Yes, a 6-month job guarantee is available for eligible learners.",
        category: "job and career"
      },
      {
        question: "Does the course help with interview prep?",
        answer: "Yes, with mock interviews, resume review, and analytical workshops.",
        category: "job and career"
      },
      {
        question: "Do I get help building my resume?",
        answer: "Yes, via the PrepAI platform and expert mentors.",
        category: "job and career"
      },
      {
        question: "Will I be connected to recruiters?",
        answer: "Yes, Ivy offers recruiter access and job fairs.",
        category: "job and career"
      },
      {
        question: "Do I get an IIT Guwahati certificate?",
        answer: "Yes, from the ESICT Academy, IIT Guwahati.",
        category: "certification"
      },
      {
        question: "How is this certificate different?",
        answer: "It's among India's most respected academic validations for Data Science.",
        category: "certification"
      },
      {
        question: "Is this certificate verifiable?",
        answer: "Yes, it includes digital credentials shareable on LinkedIn.",
        category: "certification"
      },
      {
        question: "Is this certification government-backed?",
        answer: "Yes, via the ESICT Academy and aligned with national skilling standards.",
        category: "certification"
      },
      {
        question: "Will it boost my profile for jobs?",
        answer: "Yes, IT certification provides a strong credibility with top employers.",
        category: "certification"
      },
      {
        question: "Is there a final evaluation to earn it?",
        answer: "Yes, you must complete all modules and assessments.",
        category: "certification"
      },
      {
        question: "What types of projects will I work on?",
        answer: "Projects include Excel sales analysis, Tableau dashboards, and R-based predictions.",
        category: "projects"
      },
      {
        question: "Are these real-world case studies?",
        answer: "Yes, across retail, law enforcement, and automotive industries.",
        category: "projects"
      },
      {
        question: "Do projects include AI, LLMs?",
        answer: "Yes, generative AI, LLMs, and model deployment are part of final projects.",
        category: "projects"
      },
      {
        question: "Will I build a professional portfolio?",
        answer: "Yes, all projects can be showcased to recruiters.",
        category: "projects"
      },
      {
        question: "Are projects group-based or individual?",
        answer: "Mostly individual with guidance from mentors.",
        category: "projects"
      },
      {
        question: "Can I get feedback on my projects?",
        answer: "Yes, via project reviews and teaching assistants.",
        category: "projects"
      },
      {
        question: "Which companies recruit from this course?",
        answer: "Amazon, IBM, Accenture, PwC, Microsoft, and 500+ hiring partners.",
        category: "placement"
      },
      {
        question: "What is the placement success rate?",
        answer: "94% for full-time graduates.",
        category: "placement"
      },
      {
        question: "Is placement assistance lifetime?",
        answer: "Yes, Ivy offers lifetime job and career support.",
        category: "placement"
      },
      {
        question: "Are there dedicated recruiters?",
        answer: "Yes, including networking events with recruiters.",
        category: "placement"
      },
      {
        question: "Can I get support for freelancing or remote jobs?",
        answer: "Yes, opportunities are shared based on learner preferences.",
        category: "placement"
      },
      {
        question: "Is salary negotiation assistance provided?",
        answer: "Yes, Ivy mentors support evaluation and negotiation.",
        category: "placement"
      },
      {
        question: "Which industries hire graduates from this course?",
        answer: "Tech, healthcare, e-commerce, banking, media, manufacturing.",
        category: "opportunities"
      },
      {
        question: "Can I work internationally after this course?",
        answer: "Yes, the skills are aligned to global standards.",
        category: "opportunities"
      },
      {
        question: "Will this course help me transition careers?",
        answer: "Yes, it's ideal for both freshers and professionals switching to AIData.",
        category: "opportunities"
      },
      {
        question: "Can I freelance after this course?",
        answer: "Yes, especially in analytics, dashboarding, and GenAI apps.",
        category: "opportunities"
      },
      {
        question: "Will this help me if I'm specializing in IT?",
        answer: "Yes, it upgrades your profile for AI/ML specializations.",
        category: "opportunities"
      },
      {
        question: "Does this course use suitable tools for entrepreneurs?",
        answer: "Yes, it teaches how to use AI tools to build products.",
        category: "opportunities"
      },
      {
        question: "What kind of support will I receive?",
        answer: "Dedicated mentors, 1:1 doubt sessions, peer groups, and TA access.",
        category: "support"
      },
      {
        question: "What is PrepAI and how does it help?",
        answer: "It's Ivy's AI-powered support tool for resumes, interview prep, and assessments.",
        category: "support"
      },
      {
        question: "Are WhatsApp groups available?",
        answer: "Yes, for ongoing peer discussion and mentor guidance.",
        category: "support"
      },
      {
        question: "Do I get lifetime support?",
        answer: "Yes, you can revisit content anytime.",
        category: "support"
      },
      {
        question: "Is there a technical helpdesk?",
        answer: "Yes, for any issues during your learning.",
        category: "support"
      },
      {
        question: "Can I access support after completing the course?",
        answer: "Yes, career and learning support continues even post-completion.",
        category: "support"
      }
    ]
  },
 
  " Data Engineering Course": {
    categories: [
      { id: "program", name: "Program" },
      { id: "eligibility", name: "Eligibility" },
      { id: "cloud-data-engineering", name: "Cloud Data Engineering" },
      { id: "job and career", name: "Job And Career" },
      { id: "certification", name: "Certification" },
      { id: "projects", name: "Projects" },
      { id: "placement", name: "Placement" },
      { id: "opportunities", name: "Opportunities" },
      { id: "support", name: "Support" }
    ],
    faqs: [
      {
        question: "What is the duration of the  Data Engineering Course course?",
        answer: "The course spans 225 hours and is completed over 12 weeks, covering 8 modules and 62 lessons.",
        category: "program"
      },
      {
        question: "Is this course beginner-friendly or do I need prior experience?",
        answer: "Yes, it’s beginner-friendly and starts with basics before moving to advanced topics.",
        category: "program"
      },
      {
        question: "What topics are covered in this course?",
        answer: "Topics include SQL, Big Data in Azure, Hadoop, Spark, MongoDB, Kafka, Hive, and cloud-based implementation.",
        category: "program"
      },
      {
        question: "Are the classes live or recorded?",
        answer: "The program includes live sessions with industry experts and lifetime access to recorded lectures.",
        category: "program"
      },
      {
        question: "How is this program different from other data courses?",
        answer: "It focuses exclusively on data engineering and big data tools for cloud, with real-world implementation.",
        category: "program"
      },
      {
        question: "Are there any trial labs before enrolling?",
        answer: "Yes, you can join two free classes before enrollment.",
        category: "program"
      },
      {
        question: "Who is eligible for this course?",
        answer: "Anyone with basic computer knowledge can enroll. It’s suitable for freshers and working professionals.",
        category: "eligibility"
      },
      {
        question: "Do I need to know coding experience?",
        answer: "No prior coding experience is needed.",
        category: "eligibility"
      },
      {
        question: "Is this suitable for working professionals?",
        answer: "Yes, it’s designed for professionals looking to upskill or transition to data engineering.",
        category: "eligibility"
      },
      {
        question: "Can graduates from non-technical fields apply?",
        answer: "Yes, learners from commerce, science, and even arts backgrounds have successfully completed it.",
        category: "eligibility"
      },
      {
        question: "Are students allowed to join this program?",
        answer: "Yes, final-year students and recent graduates are encouraged to apply.",
        category: "eligibility"
      },
      {
        question: "Is there an entrance test?",
        answer: "No, there’s no entrance test. Admission is based on interest and eligibility.",
        category: "eligibility"
      },
      {
        question: "What technologies are covered in the course?",
        answer: "Hadoop, Spark, Kafka, Hive, MongoDB, Azure, AWS, GCP, SQL, and Python.",
        category: "cloud-data-engineering"
      },
      {
        question: "Will I learn cloud technologies?",
        answer: "Yes, you’ll learn cloud implementation using Azure, AWS, and GCP.",
        category: "cloud-data-engineering"
      },
      {
        question: "Are real-time data tools included?",
        answer: "Yes, tools like Kafka and MongoDB are part of the curriculum.",
        category: "cloud-data-engineering"
      },
      {
        question: "Do I get hands-on experience with big data tools?",
        answer: "Yes, hands-on practice is provided through guided labs and assignments.",
        category: "cloud-data-engineering"
      },
      {
        question: "Is data modeling taught in the course?",
        answer: "Yes, relational and non-relational database modeling is covered.",
        category: "cloud-data-engineering"
      },
      {
        question: "Is there an emphasis on scalability?",
        answer: "Yes. You’ll learn to build scalable data pipelines using distributed frameworks.",
        category: "cloud-data-engineering"
      },
      {
        question: "What career roles can I pursue after this course?",
        answer: "Data Engineer, Big Data Engineer, Cloud Data Engineer, and ETL Developer.",
        category: "job and career"
      },
      {
        question: "Does Ivy offer job placement assistance?",
        answer: "Yes, including end-to-end placement assistance and career coaching.",
        category: "job and career"
      },
      {
        question: "Is there a job guarantee?",
        answer: "Yes, eligible students are covered under a 6-month job guarantee program.",
        category: "job and career"
      },
      {
        question: "What is the average salary for graduates?",
        answer: "The average CTC is around 12 LPA, with roles in top firms.",
        category: "job and career"
      },
      {
        question: "Will I get help with LinkedIn and resume building?",
        answer: "Yes, Ivy provides LinkedIn optimization and resume building.",
        category: "job and career"
      },
      {
        question: "Are mock interviews part of the support?",
        answer: "Yes, mock interviews and job-specific coaching are included.",
        category: "job and career"
      },
      {
        question: "Do I receive a certificate after course completion?",
        answer: "Yes, an industry-recognized certification from Ivy, co-branded with NASSCOM.",
        category: "certification"
      },
      {
        question: "Is the certification useful for job applications?",
        answer: "Yes, it’s well-recognized across Fortune 500 and mid-sized firms.",
        category: "certification"
      },
      {
        question: "Does the course prepare me for AWS and GCP certifications?",
        answer: "Yes, with dedicated mentoring and practice labs.",
        category: "certification"
      },
      {
        question: "Can I share my certificate on LinkedIn?",
        answer: "Yes, it’s digitally shareable and verified.",
        category: "certification"
      },
      {
        question: "Is the certificate issued only upon exam?",
        answer: "It is granted on successful completion of course and assessments.",
        category: "certification"
      },
      {
        question: "Is the certificate government-backed?",
        answer: "Yes, it’s aligned with NASSCOM’s FutureSkills Prime initiative.",
        category: "certification"
      },
      {
        question: "What kinds of projects are included?",
        answer: "Projects include Superstore Sales in Excel, Car Sales in R, and Crime Dashboard in Power BI.",
        category: "projects"
      },
      {
        question: "How many capstone projects are included?",
        answer: "There are over 10 capstone projects and 30+ case studies.",
        category: "projects"
      },
      {
        question: "Are the projects hands-on?",
        answer: "Yes, they involve real-world data and business problem-solving.",
        category: "projects"
      },
      {
        question: "Can I build a portfolio with these projects?",
        answer: "Yes, projects help you create a job-ready portfolio.",
        category: "projects"
      },
      {
        question: "Are tools like Power BI and Excel covered in projects?",
        answer: "Yes, several projects use tools like Excel, R, and Power BI.",
        category: "projects"
      },
      {
        question: "Can I access the projects after course ends?",
        answer: "Yes, you get lifetime access to all materials and projects.",
        category: "projects"
      },
      {
        question: "Who are the hiring partners?",
        answer: "Top companies like Amazon, IBM, Deloitte, Microsoft, and PwC.",
        category: "placement"
      },
      {
        question: "What is Ivy’s placement rate?",
        answer: "94% of the learners are successfully placed.",
        category: "placement"
      },
      {
        question: "Does Ivy offer networking opportunities?",
        answer: "Yes, through valuable job fairs, meetups, and alumni events.",
        category: "placement"
      },
      {
        question: "Is placement support available after course completion?",
        answer: "Yes, lifetime placement assistance is offered.",
        category: "placement"
      },
      {
        question: "Does Ivy offer salary negotiation help?",
        answer: "Yes, Ivy provides offer evaluation and negotiation guidance.",
        category: "placement"
      },
      {
        question: "Which sectors hire Cloud Data Engineers?",
        answer: "Tech, finance, logistics, healthcare, and manufacturing.",
        category: "opportunities"
      },
      {
        question: "Can I freelance in data engineering after this course?",
        answer: "Yes, the course equips you with project-ready skills for freelancing.",
        category: "opportunities"
      },
      {
        question: "Does the course support international opportunities?",
        answer: "Yes, curriculum is globally relevant and certification is recognized.",
        category: "opportunities"
      },
      {
        question: "Is the course helpful for career switchers?",
        answer: "Yes, many learners have moved from non-tech roles to data engineering.",
        category: "opportunities"
      },
      {
        question: "Does it help in DevOps/DataOps roles too?",
        answer: "Yes, it’s relevant for understanding data infrastructure tasks.",
        category: "opportunities"
      },
      {
        question: "What type of support is provided?",
        answer: "Mentorship, expert-led classes, and support via PrepAI platform.",
        category: "support"
      },
      {
        question: "Are mock interviews included in this course?",
        answer: "Yes, with role-specific interview and job-specific coaching are included.",
        category: "support"
      },
      {
        question: "Are doubt-clearing sessions included?",
        answer: "Yes, dedicated doubt-clearing sessions and community access.",
        category: "support"
      },
      {
        question: "Do I get 1:1 mentorship?",
        answer: "Yes, personalized guidance and mentoring are available.",
        category: "support"
      },
      {
        question: "Can I schedule a call with instructors after enrollment?",
        answer: "Yes, scheduled calls with instructors are available for learners.",
        category: "support"
      },
      {
        question: "Is PrepAI used as a support tool?",
        answer: "Yes, PrepAI provides mock interviews, resume evaluation, and skill assessments.",
        category: "support"
      }
    ]
  },

  "Cloud Data Engineering Course with IIT Guwahati": {
    categories: [
      { id: "program", name: "Program" },
      { id: "eligibility", name: "Eligibility" },
      { id: "cloud-data-engineering", name: "Cloud Data Engineering" },
      { id: "job and career", name: "Job And Career" },
      { id: "certification", name: "Certification" },
      { id: "projects", name: "Projects" },
      { id: "placement", name: "Placement" },
      { id: "opportunities", name: "Opportunities" },
      { id: "support", name: "Support" }
    ],
    faqs: [
      {
        question: "What is the duration of the  Data Engineering Course course?",
        answer: "The course spans 225 hours and is completed over 12 weeks, covering 8 modules and 62 lessons.",
        category: "program"
      },
      {
        question: "Is this course beginner-friendly or do I need prior experience?",
        answer: "Yes, it’s beginner-friendly and starts with basics before moving to advanced topics.",
        category: "program"
      },
      {
        question: "What topics are covered in this course?",
        answer: "Topics include SQL, Big Data in Azure, Hadoop, Spark, MongoDB, Kafka, Hive, and cloud-based implementation.",
        category: "program"
      },
      {
        question: "Are the classes live or recorded?",
        answer: "The program includes live sessions with industry experts and lifetime access to recorded lectures.",
        category: "program"
      },
      {
        question: "How is this program different from other data courses?",
        answer: "It focuses exclusively on data engineering and big data tools for cloud, with real-world implementation.",
        category: "program"
      },
      {
        question: "Are there any trial labs before enrolling?",
        answer: "Yes, you can join two free classes before enrollment.",
        category: "program"
      },
      {
        question: "Who is eligible for this course?",
        answer: "Anyone with basic computer knowledge can enroll. It’s suitable for freshers and working professionals.",
        category: "eligibility"
      },
      {
        question: "Do I need to know coding experience?",
        answer: "No prior coding experience is needed.",
        category: "eligibility"
      },
      {
        question: "Is this suitable for working professionals?",
        answer: "Yes, it’s designed for professionals looking to upskill or transition to data engineering.",
        category: "eligibility"
      },
      {
        question: "Can graduates from non-technical fields apply?",
        answer: "Yes, learners from commerce, science, and even arts backgrounds have successfully completed it.",
        category: "eligibility"
      },
      {
        question: "Are students allowed to join this program?",
        answer: "Yes, final-year students and recent graduates are encouraged to apply.",
        category: "eligibility"
      },
      {
        question: "Is there an entrance test?",
        answer: "No, there’s no entrance test. Admission is based on interest and eligibility.",
        category: "eligibility"
      },
      {
        question: "What technologies are covered in the course?",
        answer: "Hadoop, Spark, Kafka, Hive, MongoDB, Azure, AWS, GCP, SQL, and Python.",
        category: "cloud-data-engineering"
      },
      {
        question: "Will I learn cloud technologies?",
        answer: "Yes, you’ll learn cloud implementation using Azure, AWS, and GCP.",
        category: "cloud-data-engineering"
      },
      {
        question: "Are real-time data tools included?",
        answer: "Yes, tools like Kafka and MongoDB are part of the curriculum.",
        category: "cloud-data-engineering"
      },
      {
        question: "Do I get hands-on experience with big data tools?",
        answer: "Yes, hands-on practice is provided through guided labs and assignments.",
        category: "cloud-data-engineering"
      },
      {
        question: "Is data modeling taught in the course?",
        answer: "Yes, relational and non-relational database modeling is covered.",
        category: "cloud-data-engineering"
      },
      {
        question: "Is there an emphasis on scalability?",
        answer: "Yes. You’ll learn to build scalable data pipelines using distributed frameworks.",
        category: "cloud-data-engineering"
      },
      {
        question: "What career roles can I pursue after this course?",
        answer: "Data Engineer, Big Data Engineer, Cloud Data Engineer, and ETL Developer.",
        category: "job and career"
      },
      {
        question: "Does Ivy offer job placement assistance?",
        answer: "Yes, including end-to-end placement assistance and career coaching.",
        category: "job and career"
      },
      {
        question: "Is there a job guarantee?",
        answer: "Yes, eligible students are covered under a 6-month job guarantee program.",
        category: "job and career"
      },
      {
        question: "What is the average salary for graduates?",
        answer: "The average CTC is around 12 LPA, with roles in top firms.",
        category: "job and career"
      },
      {
        question: "Will I get help with LinkedIn and resume building?",
        answer: "Yes, Ivy provides LinkedIn optimization and resume building.",
        category: "job and career"
      },
      {
        question: "Are mock interviews part of the support?",
        answer: "Yes, mock interviews and job-specific coaching are included.",
        category: "job and career"
      },
      {
        question: "Do I receive a certificate after course completion?",
        answer: "Yes, an industry-recognized certification from Ivy, co-branded with NASSCOM.",
        category: "certification"
      },
      {
        question: "Is the certification useful for job applications?",
        answer: "Yes, it’s well-recognized across Fortune 500 and mid-sized firms.",
        category: "certification"
      },
      {
        question: "Does the course prepare me for AWS and GCP certifications?",
        answer: "Yes, with dedicated mentoring and practice labs.",
        category: "certification"
      },
      {
        question: "Can I share my certificate on LinkedIn?",
        answer: "Yes, it’s digitally shareable and verified.",
        category: "certification"
      },
      {
        question: "Is the certificate issued only upon exam?",
        answer: "It is granted on successful completion of course and assessments.",
        category: "certification"
      },
      {
        question: "Is the certificate government-backed?",
        answer: "Yes, it’s aligned with NASSCOM’s FutureSkills Prime initiative.",
        category: "certification"
      },
      {
        question: "What kinds of projects are included?",
        answer: "Projects include Superstore Sales in Excel, Car Sales in R, and Crime Dashboard in Power BI.",
        category: "projects"
      },
      {
        question: "How many capstone projects are included?",
        answer: "There are over 10 capstone projects and 30+ case studies.",
        category: "projects"
      },
      {
        question: "Are the projects hands-on?",
        answer: "Yes, they involve real-world data and business problem-solving.",
        category: "projects"
      },
      {
        question: "Can I build a portfolio with these projects?",
        answer: "Yes, projects help you create a job-ready portfolio.",
        category: "projects"
      },
      {
        question: "Are tools like Power BI and Excel covered in projects?",
        answer: "Yes, several projects use tools like Excel, R, and Power BI.",
        category: "projects"
      },
      {
        question: "Can I access the projects after course ends?",
        answer: "Yes, you get lifetime access to all materials and projects.",
        category: "projects"
      },
      {
        question: "Who are the hiring partners?",
        answer: "Top companies like Amazon, IBM, Deloitte, Microsoft, and PwC.",
        category: "placement"
      },
      {
        question: "What is Ivy’s placement rate?",
        answer: "94% of the learners are successfully placed.",
        category: "placement"
      },
      {
        question: "Does Ivy offer networking opportunities?",
        answer: "Yes, through valuable job fairs, meetups, and alumni events.",
        category: "placement"
      },
      {
        question: "Is placement support available after course completion?",
        answer: "Yes, lifetime placement assistance is offered.",
        category: "placement"
      },
      {
        question: "Does Ivy offer salary negotiation help?",
        answer: "Yes, Ivy provides offer evaluation and negotiation guidance.",
        category: "placement"
      },
      {
        question: "Which sectors hire Cloud Data Engineers?",
        answer: "Tech, finance, logistics, healthcare, and manufacturing.",
        category: "opportunities"
      },
      {
        question: "Can I freelance in data engineering after this course?",
        answer: "Yes, the course equips you with project-ready skills for freelancing.",
        category: "opportunities"
      },
      {
        question: "Does the course support international opportunities?",
        answer: "Yes, curriculum is globally relevant and certification is recognized.",
        category: "opportunities"
      },
      {
        question: "Is the course helpful for career switchers?",
        answer: "Yes, many learners have moved from non-tech roles to data engineering.",
        category: "opportunities"
      },
      {
        question: "Does it help in DevOps/DataOps roles too?",
        answer: "Yes, it’s relevant for understanding data infrastructure tasks.",
        category: "opportunities"
      },
      {
        question: "What type of support is provided?",
        answer: "Mentorship, expert-led classes, and support via PrepAI platform.",
        category: "support"
      },
      {
        question: "Are mock interviews included in this course?",
        answer: "Yes, with role-specific interview and job-specific coaching are included.",
        category: "support"
      },
      {
        question: "Are doubt-clearing sessions included?",
        answer: "Yes, dedicated doubt-clearing sessions and community access.",
        category: "support"
      },
      {
        question: "Do I get 1:1 mentorship?",
        answer: "Yes, personalized guidance and mentoring are available.",
        category: "support"
      },
      {
        question: "Can I schedule a call with instructors after enrollment?",
        answer: "Yes, scheduled calls with instructors are available for learners.",
        category: "support"
      },
      {
        question: "Is PrepAI used as a support tool?",
        answer: "Yes, PrepAI provides mock interviews, resume evaluation, and skill assessments.",
        category: "support"
      }
    ]
  },

  "Data Analytics Course": {
    categories: [
      { id: "program", name: "Program" },
      { id: "eligibility", name: "Eligibility" },
      { id: "data-analytics", name: "Data Analytics" },
      { id: "job and career", name: "Job And Career" },
      { id: "certification", name: "Certification" },
      { id: "projects", name: "Projects" },
      { id: "placement", name: "Placement" },
      { id: "opportunities", name: "Opportunities" },
      { id: "support", name: "Support" }
    ],
    faqs: [
      {
        question: "What is the duration of the Data Analytics Course?",
        answer: "The course spans 225 hours across 14 weeks and includes live sessions, projects, and hands-on practice.",
        category: "program"
      },
      {
        question: "Is this course beginner-friendly?",
        answer: "Yes, it’s suitable for beginners as well as professionals looking to shift to analytics roles.",
        category: "program"
      },
      {
        question: "Which tools will I learn in this course?",
        answer: "You’ll learn Excel, SQL, Python, R, Tableau, Power BI, Hadoop, Spark, and Scala.",
        category: "program"
      },
      {
        question: "Are the classes live or recorded?",
        answer: "The course includes live instructor-led classes, with recorded sessions for flexible access.",
        category: "program"
      },
      {
        question: "What domains are covered in projects?",
        answer: "Projects span across retail, finance, healthcare, aviation, and more.",
        category: "program"
      },
      {
        question: "What makes this course different from others?",
        answer: "It combines data analysis, visualization, machine learning, and big data into one job-focused program.",
        category: "program"
      },
      {
        question: "Who can apply for this course?",
        answer: "Anyone including students, recent graduates, and working professionals from any background.",
        category: "eligibility"
      },
      {
        question: "Do I need technical or coding experience?",
        answer: "No prior coding experience is required. The course starts from basics.",
        category: "eligibility"
      },
      {
        question: "Can non-tech graduates join?",
        answer: "Yes, many successful learners come from non-technical fields like commerce or humanities.",
        category: "eligibility"
      },
      {
        question: "Is this course open to final-year college students?",
        answer: "Yes, final-year students can enroll and build their career early.",
        category: "eligibility"
      },
      {
        question: "Can I join while working full-time?",
        answer: "Yes, the course is designed to accommodate working professionals.",
        category: "eligibility"
      },
      {
        question: "Is there an eligibility test?",
        answer: "No, there is no entrance test required for admission.",
        category: "eligibility"
      },
      {
        question: "Which data science skills are covered?",
        answer: "Skills include data manipulation, visualization, statistics, ML, big data processing.",
        category: "data-analytics"
      },
      {
        question: "Are visualization and analytics tools taught?",
        answer: "Yes, the course blends both data analytics and visualization for business use.",
        category: "data-analytics"
      },
      {
        question: "Is predictive modeling included?",
        answer: "Yes, predictive modeling techniques are part of the curriculum.",
        category: "data-analytics"
      },
      {
        question: "Are big data tools like Spark and Hadoop included?",
        answer: "Yes, Hadoop, Spark, and Scala are taught for big data workflows.",
        category: "data-analytics"
      },
      {
        question: "Will I build dashboards in this course?",
        answer: "Yes, dashboards in Tableau, Excel, and R are covered.",
        category: "data-analytics"
      },
      {
        question: "Will I learn programming languages?",
        answer: "Yes, Python and R are included for data handling and analytics.",
        category: "data-analytics"
      },
      {
        question: "What career roles can I pursue after this course?",
        answer: "Data Analyst, Business Analyst, Visualization Expert, Junior Data Scientist.",
        category: "job and career"
      },
      {
        question: "Is placement assistance provided?",
        answer: "Yes, Ivy offers full career support including job fairs and referrals.",
        category: "job and career"
      },
      {
        question: "What is the placement success rate?",
        answer: "94% of Ivy’s full-time program learners are successfully placed.",
        category: "job and career"
      },
      {
        question: "Is there a job guarantee?",
        answer: "Yes, eligible students may avail the 6-month job guarantee option.",
        category: "job and career"
      },
      {
        question: "What’s the average expected salary?",
        answer: "An average package of 8-12 LPA is reported for qualified candidates.",
        category: "job and career"
      },
      {
        question: "Do you help with resume and LinkedIn profiles?",
        answer: "Yes, Ivy provides end-to-end career guidance including personal branding.",
        category: "job and career"
      },
      {
        question: "Will I get a certificate after completion?",
        answer: "Yes, a certificate co-branded by IBM and Ivy, aligned with NASSCOM standards.",
        category: "certification"
      },
      {
        question: "Is the certificate recognized by employers?",
        answer: "Yes, it is recognized across the data and analytics industry.",
        category: "certification"
      },
      {
        question: "Is it a government-approved certificate?",
        answer: "Yes, it’s aligned with the FutureSkills Prime initiative by NASSCOM.",
        category: "certification"
      },
      {
        question: "Can I share this certificate on LinkedIn?",
        answer: "Yes, it is verifiable and can be added to your profile.",
        category: "certification"
      },
      {
        question: "Do I need to pass an exam to get certified?",
        answer: "Yes, completion of assessments and projects is required.",
        category: "certification"
      },
      {
        question: "Does it help with future certifications?",
        answer: "Yes, this forms the foundation for advanced certifications in data science.",
        category: "certification"
      },
      {
        question: "What kind of projects are included?",
        answer: "Projects include sales data analysis and dashboarding using Excel and Tableau.",
        category: "projects"
      },
      {
        question: "How many projects will I work on?",
        answer: "You will complete over 10 projects and 30+ case studies.",
        category: "projects"
      },
      {
        question: "Are these projects aligned with real-world business needs?",
        answer: "Yes, they simulate real industry problems across sectors.",
        category: "projects"
      },
      {
        question: "Can I use these projects in my job portfolio?",
        answer: "Yes, they are designed to help you showcase practical experience.",
        category: "projects"
      },
      {
        question: "Will I work on data from multiple domains?",
        answer: "Yes, datasets are from finance, retail, healthcare, aviation, and more.",
        category: "projects"
      },
      {
        question: "Is project mentorship available?",
        answer: "Yes, projects are mentored by industry experts.",
        category: "projects"
      },
      {
        question: "Who are the hiring partners for this course?",
        answer: "Top firms like Amazon, IBM, Cognizant, PwC, KPMG, and many others.",
        category: "placement"
      },
      {
        question: "Is there lifetime placement assistance?",
        answer: "Yes, Ivy supports learners with job opportunities even after course completion.",
        category: "placement"
      },
      {
        question: "Do you offer interview preparation?",
        answer: "Yes, mock interviews and personalized coaching are part of the career support.",
        category: "placement"
      },
      {
        question: "Are remote roles supported?",
        answer: "Yes, many Ivy learners are placed in remote and hybrid roles.",
        category: "placement"
      },
      {
        question: "Do you help with offer negotiations?",
        answer: "Yes, support is offered to assess and negotiate offers.",
        category: "placement"
      },
      {
        question: "Is job fair participation included?",
        answer: "Yes, learners are invited to exclusive hiring events and meetups.",
        category: "placement"
      },
      {
        question: "Which industries hire data analysts?",
        answer: "Banking, retail, healthcare, logistics, education, aviation, and IT sectors.",
        category: "opportunities"
      },
      {
        question: "Can I switch careers from another field?",
        answer: "Yes, this course is ideal for career switchers into analytics.",
        category: "opportunities"
      },
      {
        question: "Are freelance or consulting roles possible?",
        answer: "Yes, learners start freelance or contract projects after the course.",
        category: "opportunities"
      },
      {
        question: "Is this course helpful for international roles?",
        answer: "Yes, the certification and skills are globally aligned.",
        category: "opportunities"
      },
      {
        question: "Can entrepreneurs benefit from this program?",
        answer: "Yes, it helps in managing and analyzing business data.",
        category: "opportunities"
      },
      {
        question: "Is this relevant for academic researchers?",
        answer: "Yes, it’s useful in applying statistical and analytical methods to research.",
        category: "opportunities"
      },
      {
        question: "What kind of support is available during the course?",
        answer: "Dedicated teaching assistants, 1:1 mentoring, career support, and PrepAI resources.",
        category: "support"
      },
      {
        question: "Do I get access to recordings?",
        answer: "Yes, live session recordings are available for lifetime access.",
        category: "support"
      },
      {
        question: "Are doubt-clearing sessions included?",
        answer: "Yes, faculty and TAs conduct regular doubt-clearing sessions.",
        category: "support"
      },
      {
        question: "Do you offer PrepAI support for interviews?",
        answer: "Yes, PrepAI includes resume review, mock interviews, and skill assessments.",
        category: "support"
      },
      {
        question: "Is personalized mentorship included?",
        answer: "Yes, Ivy provides 1:1 mentorship for students.",
        category: "support"
      },
      {
        question: "Is support available post-course?",
        answer: "Yes, placement and career services are extended beyond course duration.",
        category: "support"
      }
    ]
  },
  "Data Analytics and Generative AI Course": {
    categories: [
      { id: "program", name: "Program" },
      { id: "eligibility", name: "Eligibility" },
      { id: "business-analytics", name: "Business Analytics" },
      { id: "job-and-career", name: "Job And Career" },
      { id: "certification", name: "Certification" },
      { id: "projects", name: "Projects" },
      { id: "placement", name: "Placement" },
      { id: "opportunities", name: "Opportunities" },
      { id: "support", name: "Support" }
    ],
    faqs: [
      { question: "What is the duration of the Data Analytics and Generative AI Course?", answer: "The course runs for 225 hours over approximately 8 months and includes 5 structured modules and real-world projects.", category: "program" },
      { question: "Is the course designed for beginners or professionals?", answer: "It’s designed for both freshers and professionals seeking business analytics roles.", category: "program" },
      { question: "What tools and technologies are taught?", answer: "Excel, SQL, Python, R, Tableau, and Excel VBA are included.", category: "program" },
      { question: "Is this course delivered online?", answer: "Yes, the course is fully online with live sessions and recorded access.", category: "program" },
      { question: "What is the learning format?", answer: "You’ll learn via instructor-led classes, projects, and self-paced resources.", category: "program" },
      { question: "Are trial classes available?", answer: "Yes, you can join two free trial sessions before enrollment.", category: "program" },
      { question: "Who is this course for?", answer: "MBA students, engineers, B.Sc., M.Sc. grads, professionals in banking/IT, and students from math, stats, econ, and commerce.", category: "program" },
      { question: "Do I need coding experience?", answer: "No, prior coding experience is not required.", category: "eligibility" },
      { question: "Is this course suitable for college students?", answer: "Yes, especially for final-year or third-year students.", category: "eligibility" },
      { question: "Can working professionals join?", answer: "Yes, the schedule accommodates professionals.", category: "eligibility" },
      { question: "Are non-technical learners eligible?", answer: "Yes, it’s suitable for non-tech backgrounds.", category: "eligibility" },
      { question: "Is an entrance test required?", answer: "No, direct enrollment is available without a test.", category: "eligibility" },
      { question: "What analytics concepts are taught?", answer: "Business statistics, dashboarding, predictive modeling, and machine learning.", category: "business-analytics" },
      { question: "Do I learn data science and visualization?", answer: "Yes, including Python, R, Tableau, and Excel.", category: "business-analytics" },
      { question: "Are machine learning techniques included?", answer: "Yes, such as decision trees, ensemble learning, and text mining.", category: "business-analytics" },
      { question: "Is business-centric problem solving taught?", answer: "Yes, with domain-based case studies and real projects.", category: "business-analytics" },
      { question: "Will I learn automation as part of analytics?", answer: "Yes, Excel VBA automation is a module in the course.", category: "business-analytics" },
      { question: "Are both structured and unstructured data handled?", answer: "Yes, using SQL, Python, and R techniques.", category: "business-analytics" },
      { question: "What job roles can I pursue after the course?", answer: "Roles like Business Analyst, Data Analyst, MIS Analyst, and Research Analyst.", category: "job-and-career" },
      { question: "Does Ivy provide placement assistance?", answer: "Yes, with resume building, interview prep, and job referrals.", category: "job-and-career" },
      { question: "Is there a job guarantee option?", answer: "Yes, eligible students can opt for a 6-month job guarantee.", category: "job-and-career" },
      { question: "What is the average salary offered?", answer: "Around ₹12 LPA for full-time roles, depending on profile and experience.", category: "job-and-career" },
      { question: "Is the job switcher-friendly?", answer: "Yes, the course is designed to support domain switchers.", category: "job-and-career" },
      { question: "Will I get mock interview support?", answer: "Yes, through Prepal and mentor interactions.", category: "job-and-career" },
      { question: "Do I get certified after completing the course?", answer: "Yes, by an IBM certificate co-branded with NASSCOM is awarded.", category: "certification" },
      { question: "Is the certification recognized?", answer: "Yes, by Fortune 500 companies and hiring managers.", category: "certification" },
      { question: "Is it a government-backed certificate?", answer: "Yes, aligned with FutureSkills Prime by NASSCOM.", category: "certification" },
      { question: "Can I share the certificate digitally?", answer: "Yes, the certificate is digital and shareable.", category: "certification" },
      { question: "Is certification based on exams or project work?", answer: "Yes, it’s based on completing course milestones and evaluations.", category: "certification" },
      { question: "Will it help with other advanced certifications?", answer: "Yes, it builds a strong foundation for future analytics certifications.", category: "certification" },
      { question: "Are projects based on real clients’ business problems?", answer: "Projects include solving Disney, Hotstar, and sentiment analysis use cases.", category: "projects" },
      { question: "Do projects use real datasets?", answer: "Yes, datasets are sourced from domains like retail, streaming, and airlines.", category: "projects" },
      { question: "How many projects will I complete?", answer: "Over 10 projects and 30+ case studies are included.", category: "projects" },
      { question: "Can I use projects in my portfolio?", answer: "Yes, they are meant to showcase your practical skills.", category: "projects" },
      { question: "Who are the placement partners?", answer: "Companies like Amazon, IBM, EY, PwC, Deloitte, KPMG, and more.", category: "placement" },
      { question: "Is lifetime placement support available?", answer: "Yes, Ivy provides lifelong career support.", category: "placement" },
      { question: "Are resume and LinkedIn reviews offered?", answer: "Yes, Ivy offers standard placement process.", category: "placement" },
      { question: "Can I get help with senior or freelance roles?", answer: "Yes, placement services also include mentor opportunities.", category: "placement" },
      { question: "Will I be supported in salary negotiations?", answer: "Yes, Ivy provides expert advice and offer evaluations.", category: "placement" },
      { question: "Is job fair participation included?", answer: "Yes, learners are invited to hiring events and job fairs.", category: "placement" },
      { question: "Which industries hire business analytics professionals?", answer: "Finance, marketing, IT, e-commerce, retail, and consulting.", category: "opportunities" },
      { question: "Is this course useful for career switches?", answer: "Yes, it helps learners transition into analytics roles.", category: "opportunities" },
      { question: "Are freelance or consulting roles possible?", answer: "Yes, learners can take up consulting and dashboarding services independently.", category: "opportunities" },
      { question: "Will this course help me apply for international roles?", answer: "Yes, the curriculum is globally aligned.", category: "opportunities" },
      { question: "Are the skills applicable to startups?", answer: "Yes, it strengthens skills like business insights and operations analytics.", category: "opportunities" },
      { question: "Is this course helpful for MBA or M.Sc. students?", answer: "Yes, it strengthens analytical decision-making and quantitative skills.", category: "opportunities" },
      { question: "What kind of mentorship is provided?", answer: "Yes, including one-on-one sessions with industry experts.", category: "support" },
      { question: "Do I get access to Prepal career support?", answer: "Yes, for mock interviews, resume prep, and assessments.", category: "support" },
      { question: "Is technical support included?", answer: "Yes, Ivy offers full academic and tech support.", category: "support" },
      { question: "Can I interact with peers and alumni?", answer: "Yes, via community channels and networking events.", category: "support" },
      { question: "Is support available post-course?", answer: "Yes, including job support, mentoring, and project guidance.", category: "support" }
    ]
  },

  "Data Analytics and Generative AI Courses": {
    categories: [
      { id: "program", name: "Program" },
      { id: "eligibility", name: "Eligibility" },
      { id: "business-analytics", name: "Business Analytics" },
      { id: "job-and-career", name: "Job And Career" },
      { id: "certification", name: "Certification" },
      { id: "projects", name: "Projects" },
      { id: "placement", name: "Placement" },
      { id: "opportunities", name: "Opportunities" },
      { id: "support", name: "Support" }
    ],
    faqs: [
      {
        question: "What is the duration of the Data Analytics and Generative AI Course Course?",
        answer: "The course spans 225 hours including live training projects, and assignments over 14 weeks.",
        category: "program"
      },
      {
        question: "What skills are suitable for beginners?",
        answer: "You're a perfect fit as well as professionals looking to upskill.",
        category: "eligibility"
      },
      {
        question: "What tools will I learn?",
        answer: "You'll learn Excel, MySQL, Python, R, Tableau, and Power BI.",
        category: "business-analytics"
      },
      {
        question: "Is this course fully online?",
        answer: "Yes, it includes live sessions along with lifetime access to recorded content.",
        category: "program"
      },
      {
        question: "What content does this course offer?",
        answer: "You'll learn data science, data story telling, and about 50+ real-world projects.",
        category: "program"
      },
      {
        question: "What is the mode of instruction?",
        answer: "Classes are live, and recordings are available for self-paced learning.",
        category: "program"
      },
      {
        question: "Who can apply for this course?",
        answer: "Students, freshers, and working professionals from any background can apply.",
        category: "eligibility"
      },
      {
        question: "Do I need prior experience in data?",
        answer: "No, prior experience isn't needed; the course starts from fundamentals.",
        category: "eligibility"
      },
      {
        question: "Is this course suitable for non-technical students?",
        answer: "Yes, learners with non-technical backgrounds can successfully complete it.",
        category: "eligibility"
      },
      {
        question: "Can college students enroll?",
        answer: "Yes, especially final-year students or recent graduates.",
        category: "eligibility"
      },
      {
        question: "Is this course flexible for working professionals?",
        answer: "Yes, it's structured to fit around working schedules.",
        category: "eligibility"
      },
      {
        question: "Is there an age or degree restriction?",
        answer: "No, there are no strict eligibility restrictions.",
        category: "eligibility"
      },
      {
        question: "What data analytics are included?",
        answer: "You'll learn business analytics, business statistics, predictive modeling, and analysis.",
        category: "Data Visualization"
      },
      {
        question: "Will I learn data story-telling?",
        answer: "Yes, including basic Python and R for analysis and visualization are covered.",
        category: "Data Visualization"
      },
      {
        question: "Do I learn data storytelling?",
        answer: "Yes, there is a strong emphasis on storytelling and communication.",
        category: "Data Visualization"
      },
      {
        question: "What data domains are covered in the course?",
        answer: "Projects include domains like retail, finance, and healthcare.",
        category: "Data Visualization"
      },
      {
        question: "Is dashboarding a significant detail?",
        answer: "Yes, Tableau, Power BI, and Excel dashboarding are core components.",
        category: "Data Visualization"
      },
      {
        question: "Are business analytics skills covered?",
        answer: "Yes, including data-driven problem solving and reporting.",
        category: "Data Visualization"
      },
      {
        question: "What job roles can I apply for after this course?",
        answer: "You can apply for roles like Data Analyst, BI Analyst, Dashboard Developer, or Visualization Expert.",
        category: "job-and-career"
      },
      {
        question: "Does Ivy provide placement support?",
        answer: "Yes, full placement support is included.",
        category: "job-and-career"
      },
      {
        question: "What is the average salary I can expect?",
        answer: "The average package is 12 LPA for experienced candidates.",
        category: "job-and-career"
      },
      {
        question: "Will I get help in preparing my resume?",
        answer: "Yes, personalized resume building support is included.",
        category: "job-and-career"
      },
      {
        question: "Is there interview preparation?",
        answer: "Yes, including mock interviews and job-specific coaching.",
        category: "job-and-career"
      },
      {
        question: "Is there a job guarantee?",
        answer: "Yes, eligible candidates can opt for the 6-month job guarantee.",
        category: "job-and-career"
      },
      {
        question: "Do I get a certificate after the course?",
        answer: "Yes, you get an Ivy and IBM co-branded certificate aligned with NASSCOM.",
        category: "certification"
      },
      {
        question: "Is this certificate recognized?",
        answer: "Yes, it's recognized by top firms and HR recruiters.",
        category: "certification"
      },
      {
        question: "Can I use the certificate for LinkedIn and job applications?",
        answer: "Yes, it's digitally shareable and verifiable.",
        category: "certification"
      },
      {
        question: "Do I have to appear for an exam to get the certificate?",
        answer: "No, it’s based on project work, assignments and evaluations.",
        category: "certification"
      },
      {
        question: "Is it globally recognized?",
        answer: "Yes, it has a foundation in global and other tech-forward countries.",
        category: "certification"
      },
      {
        question: "Does it help with further certifications?",
        answer: "Yes, it helps lay a foundation for Tableau, Power BI, or data analytics certifications.",
        category: "certification"
      },
      {
        question: "What kind of projects will I do?",
        answer: "Projects include Excel dashboards, Tableau crime analysis, and Airbnb case studies.",
        category: "projects"
      },
      {
        question: "How many projects will there be?",
        answer: "You will complete over 50 projects and 50+ case studies.",
        category: "projects"
      },
      {
        question: "Will I build a portfolio?",
        answer: "Yes, the projects are designed to help you build a job-ready portfolio.",
        category: "projects"
      },
      {
        question: "Are projects based on real-world problems?",
        answer: "Yes, all projects are industry-aligned and practical.",
        category: "projects"
      },
      {
        question: "Are visualization tools used in projects?",
        answer: "Yes, Excel, Tableau, and Power BI are core to project work.",
        category: "projects"
      },
      {
        question: "Can I showcase these projects during interviews?",
        answer: "Absolutely, they are designed to be showcased to recruiters.",
        category: "placement"
      },
      {
        question: "Which companies hire from this course?",
        answer: "Amazon, PwC, IBM, Deloitte, Cognizant, KPMG, and others.",
        category: "placement"
      },
      {
        question: "What is the placement rate?",
        answer: "Ivy reports a 94% placement rate for full-time program graduates.",
        category: "placement"
      },
      {
        question: "Is there lifetime placement support?",
        answer: "Yes, Ivy provides ongoing placement support even after course completion.",
        category: "placement"
      },
      {
        question: "Are resume and LinkedIn reviews offered?",
        answer: "Yes, a dedicated executive mentoring expert for resume reviews is provided.",
        category: "placement"
      },
      {
        question: "Can I get remote or freelance roles?",
        answer: "Yes, many learners secure remote and freelance roles in visualization.",
        category: "placement"
      },
      {
        question: "Is support offered for salary negotiation?",
        answer: "Yes, including guidance on offers and benchmarking.",
        category: "placement"
      },
      {
        question: "Which industries will I find jobs in after this course?",
        answer: "All major industries, including retail, finance, healthcare, and IT.",
        category: "opportunities"
      },
      {
        question: "Can I work as a freelancer after the course?",
        answer: "Yes, many learners move on to freelance and consulting.",
        category: "opportunities"
      },
      {
        question: "Is the course suitable for career changers?",
        answer: "Yes, especially for those from marketing, sales, or operations.",
        category: "opportunities"
      },
      {
        question: "Can I get international roles?",
        answer: "Yes, the course content is aligned with global visualization standards.",
        category: "opportunities"
      },
      {
        question: "Is the course useful for startups?",
        answer: "Yes, it helps in day-to-day visualization and reporting needs.",
        category: "opportunities"
      },
      {
        question: "Can researchers benefit from this course?",
        answer: "Yes, especially for presenting findings with clear visuals.",
        category: "opportunities"
      },
      {
        question: "Will I receive support during the course?",
        answer: "You'll get access to live doubt-clearing, mentoring, and career support.",
        category: "support"
      },
      {
        question: "Are classes recorded for later access?",
        answer: "Yes, all sessions are recorded and available anytime.",
        category: "support"
      },
      {
        question: "Can I schedule 1:1 help?",
        answer: "Yes, one-on-one sessions with a mentor are available.",
        category: "support"
      },
      {
        question: "Is there a support team for technical issues?",
        answer: "Yes, Ivy has a dedicated tech and academic support team.",
        category: "support"
      },
      {
        question: "Are mock interviews part of the course?",
        answer: "Yes, they are included as part of the Prepal platform.",
        category: "support"
      },
      {
        question: "Can I access support post-course?",
        answer: "Yes, Ivy provides lifetime access to career and course support.",
        category: "support"
      }
    ]
  },
  "Data science course (Pay after Placement)": {
    categories: [
      { id: "program", name: "Program" },
      { id: "eligibility", name: "Eligibility" },
      { id: "data-science", name: "Data Science" },
      { id: "job and career", name: "Job And Career" },
      { id: "certification", name: "Certification" },
      { id: "projects", name: "Projects" },
      { id: "placement", name: "Placement" },
      { id: "opportunities", name: "Opportunities" },
      { id: "support", name: "Support" }
    ],
    faqs: [
      {
        question: "What is the duration of the Data Science with ML & AI course?",
        answer: "The course spans 225 hours over 14 weeks, including 9 modules and 103 lessons.",
        category: "program"
      },
      {
        question: "Is the course curriculum beginner-friendly?",
        answer: "Yes, it is designed for beginners and progresses to advanced topics.",
        category: "program"
      },
      {
        question: "What topics are covered in the curriculum?",
        answer: "Topics include Excel, SQL, Tableau, Power BI, R, Python, ML, AI, and Deep Learning.",
        category: "program"
      },
      {
        question: "Can I access the course materials after completion?",
        answer: "Yes, you get lifetime access to all recorded sessions and resources.",
        category: "program"
      },
      {
        question: "Is the course available online?",
        answer: "Yes, it is a fully online course with live sessions and self-paced content.",
        category: "program"
      },
      {
        question: "Who designed the curriculum?",
        answer: "The curriculum is designed by industry experts and Ivy’s leadership team from IITs and IIMs.",
        category: "program"
      },
      {
        question: "Who can enroll in this course?",
        answer: "80% throughout 10th and 12th grade, no gap year or month, science background, no commerce, no arts",
        category: "eligibility"
      },
      {
        question: "Do I need prior coding experience?",
        answer: "No prior coding experience is required.",
        category: "eligibility"
      },
      {
        question: "Are final-year students welcome to enroll?",
        answer: "Yes, final-year students are welcome to enroll.",
        category: "eligibility"
      },
      {
        question: "Can working professionals join this course?",
        answer: "Yes, many working professionals enroll to switch to a data science career. But 85% attendance is mandatory.",
        category: "eligibility"
      },
      {
        question: "Are there any prerequisites?",
        answer: "Basic computer literacy is sufficient.",
        category: "eligibility"
      },
      {
        question: "Is there an age limit to join?",
        answer: "yes max age is 28",
        category: "eligibility"
      },
      {
        question: "What tools will I start using in this course?",
        answer: "Python, R, SQL, Tableau, Power BI, Excel, Spark, MongoDB, and cloud platforms.",
        category: "data-science"
      },
      {
        question: "Does the course teach machine learning and AI?",
        answer: "Yes, the course covers ML, AI, Deep Learning, and their real-world applications.",
        category: "data-science"
      },
      {
        question: "Are cloud tools like AWS and Azure included?",
        answer: "Yes, the course includes AWS, Azure, and GCP.",
        category: "data-science"
      },
      {
        question: "Do we work with real datasets?",
        answer: "Yes, learners work on industry-aligned case studies and datasets.",
        category: "data-science"
      },
      {
        question: "Do I learn both structured and unstructured data handling?",
        answer: "Yes, including tools like MySQL and MongoDB.",
        category: "data-science"
      },
      {
        question: "Is there focus on both theory and practice?",
        answer: "Yes, the course is a blend of conceptual understanding and hands-on application.",
        category: "data-science"
      },
      {
        question: "What kind of job roles can I apply for?",
        answer: "Roles include Data Analyst, Data Scientist, ML Engineer, and Business Analyst.",
        category: "job and career"
      },
      {
        question: "Does Ivy provide interview preparation?",
        answer: "Yes, with mock interviews, resume building, and expert guidance.",
        category: "job and career"
      },
      {
        question: "Is there a job guarantee program?",
        answer: "Yes, eligible students can opt into the job guarantee program.",
        category: "job and career"
      },
      {
        question: "What is the placement rate?",
        answer: "Ivy has a 94% placement rate.",
        category: "job and career"
      },
      {
        question: "What salary can I expect after this course?",
        answer: "Average salary offered is 12 LPA, depending on background and role.",
        category: "job and career"
      },
      {
        question: "Will I get help with salary negotiation?",
        answer: "Yes, Ivy provides support in offer evaluation and salary negotiation.",
        category: "job and career"
      },
      {
        question: "Do I receive a certificate after completion?",
        answer: "Yes, you receive a certificate co-branded by IBM and NASSCOM.",
        category: "certification"
      },
      {
        question: "Is the certification recognized in the industry?",
        answer: "Yes, it is valued by recruiters and hiring managers.",
        category: "certification"
      },
      {
        question: "Is the certificate government-approved?",
        answer: "Yes, through NASSCOM’s FutureSkills Prime initiative.",
        category: "certification"
      },
      {
        question: "Can I share my certificate on LinkedIn?",
        answer: "Yes, it’s digital and shareable.",
        category: "certification"
      },
      {
        question: "Does the course help with external certifications?",
        answer: "Yes, including AWS and GCP certification prep.",
        category: "certification"
      },
      {
        question: "Is the certificate permanent?",
        answer: "Yes, there is no expiration on the issued certificate.",
        category: "certification"
      },
      {
        question: "What kinds of projects will I work on?",
        answer: "Projects include real estate prediction, AI visuals in Power BI, and chatbot design.",
        category: "projects"
      },
      {
        question: "Are the projects industry-aligned?",
        answer: "Yes, they are designed with inputs from industry experts.",
        category: "projects"
      },
      {
        question: "How many capstone projects are there?",
        answer: "There are over 10 capstone projects and 30 case studies.",
        category: "projects"
      },
      {
        question: "Will I build a portfolio?",
        answer: "Yes, the projects help build a professional portfolio.",
        category: "projects"
      },
      {
        question: "Do projects involve real datasets?",
        answer: "Yes, learners solve real-world business problems.",
        category: "projects"
      },
      {
        question: "Can I try sample projects before enrolling?",
        answer: "Yes, you can access trial projects for free.",
        category: "projects"
      },
      {
        question: "Who are the hiring partners?",
        answer: "Top companies like Amazon, IBM, PwC, Deloitte, and many Fortune 500 firms.",
        category: "placement"
      },
      {
        question: "Is there placement support after course completion?",
        answer: "Yes, including job fairs and one-on-one guidance.",
        category: "placement"
      },
      {
        question: "How long does it take to get placed?",
        answer: "Most learners are placed within 3–6 months.",
        category: "placement"
      },
      {
        question: "Does Ivy offer lifetime placement assistance?",
        answer: "Yes, you can access placement services anytime.",
        category: "placement"
      },
      {
        question: "Are remote jobs supported?",
        answer: "Yes, many learners get remote roles in data science.",
        category: "placement"
      },
      {
        question: "Do you host exclusive hiring drives?",
        answer: "Yes, Ivy conducts hiring events with partner firms.",
        category: "placement"
      },
      {
        question: "Which industries hire data scientists?",
        answer: "Finance, healthcare, e-commerce, IT, logistics, and more.",
        category: "opportunities"
      },
      {
        question: "Can I freelance after completing this course?",
        answer: "Yes, many learners successfully freelance post-completion.",
        category: "opportunities"
      },
      {
        question: "Is the course helpful for international careers?",
        answer: "Yes, the curriculum aligns with global job requirements.",
        category: "opportunities"
      },
      {
        question: "Can I transition from a non-tech role?",
        answer: "Yes, many learners successfully switch from social sciences, HR, etc.",
        category: "opportunities"
      },
      {
        question: "Does the course suit entrepreneurs?",
        answer: "Yes, it helps entrepreneurs use data in decision-making.",
        category: "opportunities"
      },
      {
        question: "Is this relevant for academic researchers?",
        answer: "Yes, especially for data-heavy or social science research.",
        category: "opportunities"
      },
      {
        question: "What kind of support do learners receive?",
        answer: "Learners receive doubt-clearing sessions, doubt classes, and community access.",
        category: "support"
      },
      {
        question: "Is 1:1 mentorship provided?",
        answer: "Yes, personalized mentoring is available for all learners.",
        category: "support"
      },
      {
        question: "Do I get help with resume building?",
        answer: "Yes, resume reviews and optimization are part of the service.",
        category: "support"
      },
      {
        question: "Is there technical support if I face issues?",
        answer: "Yes, Ivy’s team offers full tech and learning support.",
        category: "support"
      },
      {
        question: "Can I attend free classes after course enrollment?",
        answer: "Yes, sample classes are available after enrollment.",
        category: "support"
      },
      {
        question: "Is PrepAI integrated for learning support?",
        answer: "Yes, PrepAI offers mock interviews, career coaching, and assessments.",
        category: "support"
      }
    ]
  },
 "Generative AI Course": {
  categories: [
    { id: "program", name: "Program" },
    { id: "eligibility", name: "Eligibility" },
    { id: "data-science", name: "Data Science" },
    { id: "job and career", name: "Job And Career" },
    { id: "certification", name: "Certification" },
    { id: "projects", name: "Projects" },
    { id: "placement", name: "Placement" },
    { id: "support", name: "Support" }
  ],
  faqs: [
    {
      question: "What is this program about?",
      answer:
        "The Executive Certification in Generative AI (IIT Guwahati + Ivy Pro School) is a comprehensive, application-driven program that helps learners design, build, and deploy AI-powered applications using OpenAI, DALL·E, Whisper, and LangChain. It blends programming, GenAI, deep learning, and multimodal integration through 4 levels of learning and real-world projects.",
      category: "program"
    },
    {
      question: "What are the key learning stages?",
      answer:
        "The program includes three certification levels:\n\n1) GenAI App Builder – Foundation Certificate\n   - Python Programming, Data Processing, Intro to Generative AI, OpenAI APIs\n   - Hands-on: Text generation projects\n\n2) Advanced GenAI and Machine Learning\n   - Deep Learning, Chatbot creation (ChatPal AI), LangChain, SocioGenie AI\n   - Hands-on: LLM-powered chatbot development, AI content automation\n\n3) Advanced AI Integration & Multimodal Applications\n   - DALL·E, Whisper, ChatGPT, multimodal model fusion, VoiceMate AI, Newsify AI\n   - Hands-on: Voice assistants, image generation, news summarization, unified multimodal AI assistant",
      category: "program"
    },
    {
      question: "What is the duration of the program?",
      answer:
        "The course runs for 6 months, combining live interactive classes, hands-on labs, and capstone projects after every module.",
      category: "program"
    },
    {
      question: "Is the program industry-oriented?",
      answer:
        "Yes. Each module includes practical assignments and project deployment using APIs, LangChain pipelines, and cloud services — preparing you for immediate job relevance.",
      category: "program"
    },
    {
      question: "Who is eligible for the GenAI program?",
      answer:
        "Professionals, students, or tech enthusiasts with a background or interest in AI, programming, data, or digital innovation.",
      category: "eligibility"
    },
    {
      question: "Are programming skills required?",
      answer:
        "Basic Python knowledge is helpful but not mandatory. The Foundation Certificate starts from Python setup, libraries (NumPy, Pandas), and control structures.",
      category: "eligibility"
    },
    {
      question: "Can non-engineers join?",
      answer:
        "Yes. The program includes guided labs and mentorship to help non-tech learners become proficient in applied AI development.",
      category: "eligibility"
    },
    {
      question: "How does this program connect with Data Science?",
      answer:
        "While Data Science analyzes data, this course emphasizes generating text, images, and audio from data using models like GPT, DALL·E, and Whisper. You’ll also learn to automate analytics workflows using AI.",
      category: "data-science"
    },
    {
      question: "Will I learn Machine Learning fundamentals?",
      answer:
        "Yes. The Advanced GenAI & ML stage covers:\n\n- Linear Models, Decision Trees, k-NN\n- Classification & Regression\n- Deep Learning (MLP, CNN, RNN, LSTM, GRU)\n\nHands-on ML projects integrated with GenAI workflows.",
      category: "data-science"
    },
    {
      question: "What job roles can I target?",
      answer:
        "Graduates transition to roles like:\n\n- GenAI Engineer / AI Application Developer\n- AI Product Specialist / Automation Lead\n- Prompt Engineer / Chatbot Architect\n- Voice & Image AI Developer",
      category: "job and career"
    },
    {
      question: "How does the course prepare me for real-world projects?",
      answer:
        "Every stage has a capstone project, including:\n\n- ChatPal AI (Chatbot)\n- SocioGenie AI (Social Media Automation)\n- ResumeGen AI\n- EcommImageCraft AI\n- VoiceMate AI\n- Newsify AI\n- Unified Multimodal Assistant (final capstone)\n\nThese projects simulate business-level challenges.",
      category: "job and career"
    },
    {
      question: "What certification will I receive?",
      answer:
        "Upon completion, you’ll earn an Executive Certification in Generative AI jointly from IIT Guwahati and Ivy Professional School. Interim certifications are also provided after each module.",
      category: "certification"
    },
    {
      question: "How is evaluation done?",
      answer:
        "Assessments are based on hands-on projects, assignments, and mentor reviews, not written exams.",
      category: "certification"
    },
    {
      question: "What types of projects will I complete?",
      answer:
        "Foundation Level: Text generation using OpenAI APIs\nIntermediate Level: Chatbots, Social Media AI automation (LangChain, LLMs)\nAdvanced Level: Image generation (DALL·E), Voice recognition (Whisper), and multimodal systems combining text, voice, and image AI.\nEach project is mentored and graded.",
      category: "projects"
    },
    {
      question: "Is there a final capstone project?",
      answer:
        "Yes — “Unified Multimodal AI Assistant,” integrating ChatGPT, DALL·E, and Whisper for real-world applications.",
      category: "projects"
    },
    {
      question: "Do I get placement assistance?",
      answer:
        "Yes. Ivy provides:\n\n- 1:1 Career Counseling\n- Resume & Portfolio Building (GitHub, Projects)\n- Mock Interviews\n- Job Referrals to top AI and Data firms",
      category: "placement"
    },
    {
      question: "Which companies hire Ivy AI learners?",
      answer:
        "Our alumni work at EY, PwC, TCS, KPMG, Accenture, Amazon, and Wipro, across Data, AI, and Automation roles.",
      category: "placement"
    },
    {
      question: "What kind of learning support will I get?",
      answer:
        "Live interactive classes\nDedicated mentor support for projects\nLifetime access to recordings and materials\nDiscussion forums & community channels",
      category: "support"
    },
    {
      question: "What if I miss a session?",
      answer:
        "You can watch recordings anytime and rejoin a later batch at no extra cost.",
      category: "support"
    },
    {
      question: "Will there be post-course support?",
      answer:
        "Yes. Ivy alumni receive lifetime access to course updates, GenAI tool upgrades, and continued mentor support.",
      category: "support"
    }
  ]
}










};

const defaultData = {
  categories: [
    { id: "program", name: "Program" },
    { id: "eligibility", name: "Eligibility" },
    { id: "data-science", name: "Data Science" },
    { id: "job and career", name: "Job And Career" },
    { id: "certification", name: "Certification" },
    { id: "projects", name: "Projects" },
    { id: "placement", name: "Placement" },
    { id: "opportunities", name: "Opportunities" },
    { id: "support", name: "Support" }
  ],
  faqs: [
    { question: "Default question?", answer: "Default answer.", category: "program" }
  ]
};

const CourseFAQ = ({ course }: CourseHeroProps) => {

  console.log("title", course.title);

  const data = courseData[course.title] || defaultData;

  console.log("data", data);

  const categories = data.categories;
  const faqs = data.faqs;

  const [activeFilter, setActiveFilter] = useState<string>('program');
  const [isMobile, setIsMobile] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      window.location.href = "tel:7676882222";
    } else {
      setShowNumber(true);
      const timer = setTimeout(() => {
        setShowNumber(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  };

  const AnimatedPhoneButton = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showNumber, setShowNumber] = useState(false);

    useEffect(() => {
      const checkIfMobile = () => {
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
      };
      checkIfMobile();
      window.addEventListener("resize", checkIfMobile);
      return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    const handleClick = () => {
      if (isMobile) {
        window.location.href = "tel:7676882222";
      } else {
        setShowNumber(!showNumber);
      }
    };

    return (
      <div className="relative inline-block">
        <Button className="flex items-center" onClick={handleClick}>
          <MessageCircle size={18} className="mr-2" />
          Schedule a Call
        </Button>
        {showNumber && !isMobile && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-50 animate-fade-in">
            <div className="text-center whitespace-nowrap">
              <span className="text-sm font-medium text-gray-700">Call us at</span>
              <div className="text font-bold text-[#009fda]">
                7676882222
              </div>
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-white"></div>
          </div>
        )}
      </div>
    );
  };

  const filteredFaqs = activeFilter === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === activeFilter);

  return (
    <section style={{ marginTop: -90 }} className="py-5 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What I need to know more about Ivy’s support, fees, and projects?</h2>
            <p className="text-gray-600">
              Everything you need to know about the course and enrollment
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">Categories</h3>
                <nav className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveFilter(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeFilter === category.id
                        ? 'bg-indigo-50 text-indigo-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-semibold text-gray-800 capitalize">
                    {activeFilter.replace('-', ' ')}
                  </h3>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                        <div className="flex items-center">
                          <span>{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              {showNumber && !isMobile && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-50 animate-fade-in">
                  <div className="text-center">
                    <p className="text-gray-700 font-medium">Call us at:</p>
                    <a href="tel:7676882222" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
                      7676882222
                    </a>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
                </div>
              )}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <AnimatedPhoneButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFAQ;