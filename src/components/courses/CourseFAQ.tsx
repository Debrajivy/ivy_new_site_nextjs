"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { Course } from '@/lib/api';

interface CourseHeroProps {
  course: Course;
}

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
        question: "What is the duration of the AI Product Manager course?",
        answer: "The course runs for 6–8 weeks with 25–30 hours of live and recorded sessions, providing flexible weekday, weekend, and fast-track options for working professionals.",
        category: "program"
      },
      {
        question: "Is this course beginner-friendly?",
        answer: "Yes. No coding or prior technical background is required. It is designed for both beginners and Senior leaders, focusing on real AI applications using no-code and low-code tools.",
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
        answer: "This course is designed for product managers, product leaders, team leads, and professionals who want to integrate AI into project workflows and decision-making.",
        category: "eligibility"
      },
      {
        question: "Is the AI for Product Managers course suitable for non-coders?",
        answer: "Yes. The course uses no-code and low-code AI tools, making it perfect for managers without programming experience.",
        category: "eligibility"
      },
      {
        question: "Is this course only for IT project managers?",
        answer: "Not at all. The course is industry-agnostic and applies to IT, manufacturing, consulting, media, retail, and any sector where end-to-end automation is needed.",
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
        answer: "AI-savvy project managers command higher salaries than traditional PMs, with many companies providing premium pay for AI-enabled leadership skills.",
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
        question: "Will I receive a certificate for product manager certification courses upon completion?",
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
        question: "Does Ivy provide placement support after the course?",
        answer: "Yes. Ivy Professional School provides product manager course with placement assistance, including resume building, interview preparation, mock interviews, and job referrals.",
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
        answer: "Yes. Ivy provides lifetime career and placement support, so you can access guidance, referrals, and interview prep even after years of completing the course.",
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
        answer: "It provides Generative AI mastery, IT certification, and production-level model deployment.",
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
        question: "What is the average salary provide?",
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
        answer: "Yes, Ivy provides recruiter access and job fairs.",
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
        answer: "Yes, Ivy provides lifetime job and career support.",
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


  "Data Science with Machine Learning & AI Course in Kolkata": {
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
        question: "Who should enroll in the Data Science course in Kolkata?",
        answer: "This Data Science course in Kolkata is ideal for fresh graduates, working professionals, IT engineers, analysts, and career switchers who want to build a strong career in data science, machine learning, and AI.",
        category: "eligibility"
      },
      {
        question: "Do I need prior coding or programming experience to join this course?",
        answer: "No prior coding experience is mandatory. The course starts from the basics of Python and statistics, making it suitable for beginners while still being valuable for experienced professionals.",
        category: "eligibility"
      },
      {
        question: "What is the duration of the Data Science course in Kolkata?",
        answer: "The course duration typically ranges from 6 to 11 months, depending on the learning mode (weekday/weekend) and specialization track chosen.",
        category: "program"
      },
      {
        question: "Is this Data Science course in Kolkata suitable for working professionals?",
        answer: "Yes, the course is designed with flexible schedules, including weekend and evening batches, making it convenient for working professionals in Kolkata.",
        category: "program"
      },
      {
        question: "What tools and technologies will I learn during the course?",
        answer: "You will learn Python, SQL, Machine Learning, Deep Learning, Artificial Intelligence, Data Visualization (Tableau/Power BI), Statistics, and real-world industry tools used by data scientists.",
        category: "data-science"
      },
      {
        question: "Are there real-world projects included in the course?",
        answer: "Yes, learners work on multiple real-world projects and a capstone project based on industry use cases to gain hands-on experience and practical exposure.",
        category: "projects"
      },
      {
        question: "Does the Data Science course in Kolkata provide placement assistance?",
        answer: "Yes, comprehensive placement support is provided, including resume building, mock interviews, career mentoring, and access to hiring partners.",
        category: "placement"
      },
      {
        question: "What kind of job roles can I apply for after completing this course?",
        answer: "After completing the course, you can apply for roles such as Data Scientist, Data Analyst, Machine Learning Engineer, Business Analyst, and AI Engineer.",
        category: "job and career"
      },
      {
        question: "Will I receive a certification after course completion?",
        answer: "Yes, upon successful completion, you will receive a recognized Data Science certification from Ivy Professional School, validating your skills and industry readiness.",
        category: "certification"
      },
      {
        question: "Is the certification recognized by employers in Kolkata and India?",
        answer: "Yes, the certification is widely recognized by employers across Kolkata and major Indian cities, helping learners enhance credibility and job prospects.",
        category: "certification"
      },
      {
        question: "What is the mode of learning available for this course in Kolkata?",
        answer: "The course is available in instructor-led classroom training, live online sessions, and hybrid learning formats.",
        category: "program"
      },
      {
        question: "Are there any eligibility criteria for enrolling in the course?",
        answer: "A basic understanding of mathematics and logical reasoning is recommended. Graduates from engineering, science, commerce, or management backgrounds can enroll.",
        category: "eligibility"
      },
      {
        question: "Will I get doubt-clearing and mentorship support?",
        answer: "Yes, learners receive continuous mentorship, doubt-clearing sessions, one-on-one guidance, and academic support throughout the course.",
        category: "support"
      },
      {
        question: "How is this Data Science course in Kolkata different from others?",
        answer: "This course focuses on practical learning, industry-aligned curriculum, experienced faculty, hands-on projects, and strong placement support, making it career-oriented rather than theory-heavy.",
        category: "program"
      },
      {
        question: "Is this course suitable for career transition into data science?",
        answer: "Absolutely. The course is structured to help professionals from non-technical and technical backgrounds successfully transition into data science roles.",
        category: "opportunities"
      }
    ]
  },


  "Data Science with Machine Learning & AI Course in Delhi": {
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
        question: "Who can enroll in the Data Science course in Delhi?",
        answer: "The Data Science course in Delhi is suitable for fresh graduates, working professionals, IT professionals, engineers, analysts, and individuals looking to transition into data science, machine learning, and AI roles.",
        category: "eligibility"
      },
      {
        question: "Is prior programming knowledge required for this course?",
        answer: "No, prior programming experience is not mandatory. The course begins with Python fundamentals and core statistics, making it beginner-friendly while still advanced enough for experienced learners.",
        category: "eligibility"
      },
      {
        question: "What is the duration of the Data Science course in Delhi?",
        answer: "The course duration generally ranges between 6 to 11 months, depending on the batch type (weekday or weekend) and learning mode selected.",
        category: "program"
      },
      {
        question: "Is this Data Science course in Delhi suitable for working professionals?",
        answer: "Yes, the course is designed with flexible schedules, including weekend and evening batches, allowing working professionals in Delhi to learn without disrupting their jobs.",
        category: "program"
      },
      {
        question: "What tools and technologies are covered in the course?",
        answer: "You will learn Python, SQL, Statistics, Machine Learning, Deep Learning, Artificial Intelligence, Data Visualization tools like Tableau or Power BI, and industry-relevant frameworks.",
        category: "data-science"
      },
      {
        question: "Are live projects included in the Data Science course?",
        answer: "Yes, the course includes multiple hands-on projects and a comprehensive capstone project based on real-world industry use cases to build practical skills.",
        category: "projects"
      },
      {
        question: "Does the Data Science course in Delhi offer placement assistance?",
        answer: "Yes, learners receive dedicated placement support, including resume preparation, mock interviews, career guidance, and access to a network of hiring partners.",
        category: "placement"
      },
      {
        question: "What career roles can I apply for after completing this course?",
        answer: "After completion, you can apply for roles such as Data Scientist, Data Analyst, Machine Learning Engineer, Business Analyst, AI Engineer, and Data Engineer (entry-level).",
        category: "job and career"
      },
      {
        question: "Will I receive a certification after completing the course?",
        answer: "Yes, upon successful completion, you will receive an industry-recognized Data Science certification from Ivy Professional School.",
        category: "certification"
      },
      {
        question: "Is the certification recognized by companies in Delhi and across India?",
        answer: "Yes, the certification is well-recognized by recruiters across Delhi NCR and major cities in India, adding credibility to your profile.",
        category: "certification"
      },
      {
        question: "What learning modes are available for the Data Science course in Delhi?",
        answer: "The course is available in classroom training, live online instructor-led sessions, and hybrid learning formats.",
        category: "program"
      },
      {
        question: "What is the eligibility criteria for enrolling in the course?",
        answer: "Graduates from engineering, science, commerce, or management backgrounds can enroll. Basic mathematical understanding and logical reasoning skills are recommended.",
        category: "eligibility"
      },
      {
        question: "Will I get mentorship and doubt-clearing support during the course?",
        answer: "Yes, learners receive continuous mentorship, regular doubt-clearing sessions, one-on-one academic support, and guidance from experienced faculty.",
        category: "support"
      },
      {
        question: "How is this Data Science course in Delhi different from other institutes?",
        answer: "The course focuses on industry-aligned curriculum, practical learning, real-world projects, expert trainers, and structured placement support rather than purely theoretical teaching.",
        category: "program"
      },
      {
        question: "Is this course suitable for a complete career switch into data science?",
        answer: "Yes, the course is specifically designed to help both technical and non-technical professionals successfully transition into data science and AI-driven roles.",
        category: "opportunities"
      }
    ]
  },



  "Data Science with Machine Learning & AI Course in Pune": {
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
        question: "Who should enroll in the Data Science Course in Pune?",
        answer: "The Data Science Course in Pune is ideal for fresh graduates, working professionals, IT engineers, analysts, and career switchers aiming to build a career in data science, machine learning, and artificial intelligence.",
        category: "eligibility"
      },
      {
        question: "Do I need prior coding experience to join the Data Science course in Pune?",
        answer: "No prior programming experience is required. The course starts with Python basics and foundational statistics, making it suitable for beginners as well as experienced professionals.",
        category: "eligibility"
      },
      {
        question: "What is the duration of the Data Science Course in Pune?",
        answer: "The course duration typically ranges from 6 to 11 months, depending on the learning mode (weekday or weekend batches) and specialization track.",
        category: "program"
      },
      {
        question: "Is the Data Science course in Pune suitable for working professionals?",
        answer: "Yes, the course offers flexible learning options, including weekend and evening batches, making it convenient for working professionals in Pune.",
        category: "program"
      },
      {
        question: "What tools and technologies are covered in this course?",
        answer: "You will learn Python, SQL, Statistics, Machine Learning, Deep Learning, Artificial Intelligence, Data Visualization tools (Tableau/Power BI), and industry-relevant frameworks.",
        category: "data-science"
      },
      {
        question: "Are real-world projects included in the Data Science course?",
        answer: "Yes, the course includes multiple hands-on projects and an industry-focused capstone project to help learners gain practical, job-ready experience.",
        category: "projects"
      },
      {
        question: "Does the Data Science Course in Pune provide placement assistance?",
        answer: "Yes, comprehensive placement support is provided, including resume building, mock interviews, career mentoring, and access to hiring partners.",
        category: "placement"
      },
      {
        question: "What job roles can I apply for after completing the course?",
        answer: "After completion, learners can apply for roles such as Data Scientist, Data Analyst, Machine Learning Engineer, Business Analyst, and AI Engineer.",
        category: "job and career"
      },
      {
        question: "Will I receive a certification after completing the Data Science course?",
        answer: "Yes, learners receive an industry-recognized Data Science certification from Ivy Professional School upon successful completion.",
        category: "certification"
      },
      {
        question: "Is the certification recognized by companies in Pune and across India?",
        answer: "Yes, the certification is widely recognized by employers in Pune, Mumbai, Bangalore, and other major tech hubs across India.",
        category: "certification"
      },
      {
        question: "What learning modes are available for the Data Science course in Pune?",
        answer: "The course is available in classroom training, live instructor-led online sessions, and hybrid learning formats.",
        category: "program"
      },
      {
        question: "What is the eligibility criteria for enrolling in this course?",
        answer: "Graduates from engineering, science, commerce, or management backgrounds can enroll. A basic understanding of mathematics and logical reasoning is recommended.",
        category: "eligibility"
      },
      {
        question: "Will I get mentorship and doubt-clearing support during the course?",
        answer: "Yes, learners receive continuous mentorship, regular doubt-clearing sessions, and one-on-one academic guidance throughout the program.",
        category: "support"
      },
      {
        question: "How is this Data Science Course in Pune different from other institutes?",
        answer: "The course focuses on industry-aligned curriculum, hands-on learning, real-world projects, experienced faculty, and structured placement support rather than purely theoretical teaching.",
        category: "program"
      },
      {
        question: "Is this course suitable for a career switch into data science?",
        answer: "Absolutely. The course is designed to help both technical and non-technical professionals successfully transition into data science and AI-driven careers.",
        category: "opportunities"
      }
    ]
  },




  "Data Science with Machine Learning & AI Course in Bangalore": {
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
        question: "Is this Data Science course suitable for beginners in Bangalore?",
        answer: "Yes, the program starts with fundamentals, making it suitable for beginners as well as professionals transitioning into data science.",
        category: "eligibility"
      },
      {
        question: "Do I need a programming background to join?",
        answer: "Basic programming knowledge is helpful but not mandatory. Python and coding fundamentals are taught from scratch.",
        category: "eligibility"
      },
      {
        question: "What is the duration of the Data Science Course in Bangalore?",
        answer: "The course duration is designed to balance depth and flexibility, typically ranging from 6 to 11 months depending on the batch type.",
        category: "program"
      },
      {
        question: "Is the Data Science course in Bangalore suitable for working professionals?",
        answer: "Yes, with flexible weekend and evening batches, the course is specifically tailored for the busy schedules of Bangalore's working professionals.",
        category: "program"
      },
      {
        question: "What tools and technologies are covered in this course?",
        answer: "The curriculum covers Python, SQL, Statistics, Machine Learning, Deep Learning, AI, and Data Visualization tools like Tableau and Power BI.",
        category: "data-science"
      },
      {
        question: "Will I work on real-world projects?",
        answer: "Yes, the course includes multiple hands-on projects and a capstone aligned with industry use cases to ensure practical exposure.",
        category: "projects"
      },
      {
        question: "Does Ivy Professional School provide placement assistance in Bangalore?",
        answer: "Yes, we provide 100% placement assistance, including resume building, mock interviews, and connections with Bangalore's top tech recruiters.",
        category: "placement"
      },
      {
        question: "What career roles can I target after completion?",
        answer: "Graduates can pursue roles such as Data Scientist, Data Analyst, Machine Learning Engineer, and Business Analyst.",
        category: "job and career"
      },
      {
        question: "Will I receive a certification after completing the course?",
        answer: "Yes, you will receive an industry-recognized Data Science certification from Ivy Professional School upon successful completion.",
        category: "certification"
      },
      {
        question: "Is the certification recognized by top tech companies in Bangalore?",
        answer: "Yes, the certification is highly valued by MNCs, startups, and tech giants across Bangalore and India's Silicon Valley.",
        category: "certification"
      },
      {
        question: "What learning modes are available for this course in Bangalore?",
        answer: "The course is available in classroom training, live online instructor-led sessions, and hybrid formats.",
        category: "program"
      },
      {
        question: "What is the eligibility criteria for enrolling in Bangalore?",
        answer: "Graduates or final-year students from Engineering, Science, Commerce, or Management backgrounds are eligible to apply.",
        category: "eligibility"
      },
      {
        question: "Will I get mentorship and doubt-clearing support?",
        answer: "Yes, you will have access to 1:1 mentorship, dedicated doubt-clearing sessions, and academic support from industry experts.",
        category: "support"
      },
      {
        question: "How is this Data Science course in Bangalore different from others?",
        answer: "Our focus on hands-on practical learning, elite faculty from IITs/IIMs, and a strong network of hiring partners sets us apart.",
        category: "program"
      },
      {
        question: "Can I switch my career to Data Science if I am from a non-technical background?",
        answer: "Absolutely. The course is designed to guide non-technical professionals through a structured path into high-growth AI and Data roles.",
        category: "opportunities"
      }
    ]
  },

"Data Science with Machine Learning & AI Course in Chennai": {
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
        question: "Who should enroll in a data science course in Chennai?",
        answer: "Graduates, IT professionals, engineers, and career switchers interested in analytics and AI can enroll in this program.",
        category: "eligibility"
      },
      {
        question: "Is prior coding experience required?",
        answer: "No, the data science course in Chennai starts with programming fundamentals and gradually progresses to advanced concepts.",
        category: "eligibility"
      },
      {
        question: "What is the duration of the Data Science course in Chennai?",
        answer: "The course duration typically ranges from 6 to 11 months, depending on the chosen learning path and batch schedule (weekday or weekend).",
        category: "program"
      },
      {
        question: "Is this course suitable for working professionals in Chennai?",
        answer: "Yes, the program offers flexible scheduling including weekend sessions and live online classes to accommodate working professionals.",
        category: "program"
      },
      {
        question: "What tools and technologies are covered in this course?",
        answer: "You will master Python, SQL, Machine Learning algorithms, Deep Learning, AI, and Data Visualization tools like Power BI and Tableau.",
        category: "data-science"
      },
      {
        question: "Are real-world projects included in the curriculum?",
        answer: "Yes, the course features multiple industry-specific projects and a final capstone project based on real-world datasets.",
        category: "projects"
      },
      {
        question: "Does Ivy Professional School provide placement support?",
        answer: "Yes, comprehensive career guidance and placement assistance are provided to help learners enter data science roles.",
        category: "placement"
      },
      {
        question: "What job roles can I pursue after completing the course?",
        answer: "Learners can pursue roles such as Data Analyst, Business Analyst, Junior Data Scientist, and Analytics Associate.",
        category: "job and career"
      },
      {
        question: "Will I receive a certification after the course?",
        answer: "Yes, you will receive a professional Data Science certification from Ivy Professional School upon successful completion of the course and projects.",
        category: "certification"
      },
      {
        question: "Is the certification recognized by recruiters in Chennai?",
        answer: "Yes, Ivy’s certification is highly respected by top MNCs and startups across Chennai’s IT and manufacturing hubs.",
        category: "certification"
      },
      {
        question: "What are the available learning modes in Chennai?",
        answer: "You can choose between instructor-led classroom training, live online sessions, or a hybrid learning model.",
        category: "program"
      },
      {
        question: "What are the eligibility criteria for this course?",
        answer: "Graduates from any stream (Science, Commerce, Engineering, or Management) with basic logical reasoning skills can apply.",
        category: "eligibility"
      },
      {
        question: "Will I get doubt-clearing and mentorship support?",
        answer: "Yes, we provide 1:1 mentorship sessions, regular doubt-clearing classes, and academic support from industry experts.",
        category: "support"
      },
      {
        question: "How is this course different from other data science programs?",
        answer: "This program focuses on production-level deployment, hands-on tool mastery, and personalized career coaching rather than just theory.",
        category: "program"
      },
      {
        question: "Is this course suitable for non-technical career switchers?",
        answer: "Absolutely. The curriculum is designed to hand-hold non-technical learners through the basics of data handling and coding.",
        category: "opportunities"
      }
    ]
  },

  "Data Science with Machine Learning & AI Course in Mumbai": {
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
        question: "Who should enroll in the Data Science course in Mumbai?",
        answer: "This course is ideal for fresh graduates, working professionals, IT engineers, and career switchers in Mumbai looking to build expertise in analytics, ML, and AI.",
        category: "eligibility"
      },
      {
        question: "Do I need prior programming experience?",
        answer: "No prior coding experience is required. Python is taught from the basics, making it accessible for beginners and non-programmers.",
        category: "eligibility"
      },
      {
        question: "What is the duration of the Data Science Course in Mumbai?",
        answer: "The duration is optimized to balance conceptual depth, practical exposure, and flexibility, typically ranging from 6 to 11 months.",
        category: "program"
      },
      {
        question: "Is the Data Science course in Mumbai suitable for working professionals?",
        answer: "Yes, the course is designed with flexible schedules, including weekend and evening batches, suitable for working professionals.",
        category: "program"
      },
      {
        question: "What tools and technologies are covered in this course?",
        answer: "You will master Python, SQL, Statistics, Machine Learning, Deep Learning, AI, and Data Visualization tools like Tableau or Power BI.",
        category: "data-science"
      },
      {
        question: "Are real-world projects included in the course?",
        answer: "Yes, learners work on multiple industry-relevant projects and a comprehensive capstone project based on real-world datasets.",
        category: "projects"
      },
      {
        question: "Does Ivy Professional School provide placement assistance in Mumbai?",
        answer: "Yes, we provide extensive placement support, including resume reviews, mock interviews, and access to our 400+ hiring partners.",
        category: "placement"
      },
      {
        question: "What career roles can I target after completion?",
        answer: "Graduates can pursue roles such as Data Scientist, Data Analyst, Machine Learning Engineer, and Business Analyst.",
        category: "job and career"
      },
      {
        question: "Will I receive a certification after completing the course?",
        answer: "Yes, upon successful completion, you will receive an industry-recognized Data Science certification from Ivy Professional School.",
        category: "certification"
      },
      {
        question: "Is the certification recognized by employers in Mumbai?",
        answer: "Yes, the certification is widely recognized by top banks, consulting firms, and tech companies across Mumbai and India.",
        category: "certification"
      },
      {
        question: "What are the available learning modes in Mumbai?",
        answer: "The course is available through instructor-led classroom training, live online sessions, and hybrid learning formats.",
        category: "program"
      },
      {
        question: "What are the eligibility criteria for this program?",
        answer: "Graduates from Engineering, Science, Commerce, or Management backgrounds are welcome. Basic math and logical skills are recommended.",
        category: "eligibility"
      },
      {
        question: "Will I get mentorship and doubt-clearing support?",
        answer: "Yes, learners receive 1:1 mentorship, regular doubt-clearing sessions, and continuous academic support throughout the course.",
        category: "support"
      },
      {
        question: "How is this Data Science course in Mumbai different from others?",
        answer: "We emphasize practical, hands-on tool mastery and industry-aligned curriculum taught by elite faculty from IITs and IIMs.",
        category: "program"
      },
      {
        question: "Is this course suitable for a career transition into AI?",
        answer: "Absolutely. The course is structured to bridge the gap for professionals moving from traditional roles into high-growth AI and Data roles.",
        category: "opportunities"
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
        answer: "Yes, you can join two demo classes before enrollment.",
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
        question: "Does Ivy provides job placement assistance?",
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
        question: "Does Ivy provides networking opportunities?",
        answer: "Yes, through valuable job fairs, meetups, and alumni events.",
        category: "placement"
      },
      {
        question: "Is placement support available after course completion?",
        answer: "Yes, lifetime placement assistance is provided.",
        category: "placement"
      },
      {
        question: "Does Ivy provide salary negotiation help?",
        answer: "Yes, Ivy provides evaluation and negotiation guidance.",
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
"Data Engineering Course in Delhi": {
    categories: [
      { id: "program", name: "Program" },
      { id: "eligibility", name: "Eligibility" },
      { id: "data-engineering", name: "Data Engineering" },
      { id: "job and career", name: "Job And Career" },
      { id: "certification", name: "Certification" },
      { id: "projects", name: "Projects" },
      { id: "placement", name: "Placement" },
      { id: "opportunities", name: "Opportunities" },
      { id: "support", name: "Support" }
    ],
    faqs: [
      {
        question: "Who should enroll in the Data Engineering Course in Delhi?",
        answer: "Fresh graduates, working professionals, software developers, and IT professionals aiming to build or transition into data engineering roles can enroll.",
        category: "eligibility"
      },
      {
        question: "Is prior coding experience required?",
        answer: "Basic programming knowledge is helpful, but the course starts with fundamentals and progresses to advanced concepts, making it accessible for dedicated learners.",
        category: "eligibility"
      },
      {
        question: "What is the duration of the Data Engineering course in Delhi?",
        answer: "The program typically spans 6 to 9 months, depending on the learning track and batch type (weekday or weekend) you select.",
        category: "program"
      },
      {
        question: "Is this course suitable for professionals working in Delhi NCR?",
        answer: "Yes, we offer flexible weekend and evening batches specifically designed for working professionals in Delhi, Gurgaon, and Noida.",
        category: "program"
      },
      {
        question: "What tools and technologies are covered in this course?",
        answer: "The curriculum covers Python, SQL, NoSQL databases, Big Data tools (Hadoop, Spark), ETL pipelines, and Cloud platforms like AWS, Azure, or GCP.",
        category: "data-engineering"
      },
      {
        question: "Are there hands-on projects included?",
        answer: "Yes, the course includes multiple real-world projects focused on building data pipelines, data warehousing, and real-time streaming architecture.",
        category: "projects"
      },
      {
        question: "Is placement assistance provided in Delhi?",
        answer: "Yes, Ivy Professional School offers career support, resume building for tech roles, mock interviews, and placement assistance with top firms in Delhi NCR.",
        category: "placement"
      },
      {
        question: "What career opportunities are available after this course?",
        answer: "Graduates can apply for roles such as Data Engineer, Big Data Engineer, ETL Developer, Data Architect, and Analytics Engineer.",
        category: "job and career"
      },
      {
        question: "Will I receive a certification after the course?",
        answer: "Yes, you will receive an industry-recognized Data Engineering certification from Ivy Professional School upon successful completion.",
        category: "certification"
      },
      {
        question: "Is the certification recognized by top companies in India?",
        answer: "Yes, the certification is highly valued by major IT companies, analytics firms, and startups across Delhi NCR and India.",
        category: "certification"
      },
      {
        question: "What learning modes are available in Delhi?",
        answer: "We offer classroom-based training in Delhi, live online instructor-led sessions, and hybrid learning options.",
        category: "program"
      },
      {
        question: "What is the eligibility criteria for this course?",
        answer: "Graduates from CS, IT, Engineering, or any technical/quantitative background are eligible. A logical mindset and basic math skills are recommended.",
        category: "eligibility"
      },
      {
        question: "Will I get mentorship for advanced cloud tools?",
        answer: "Yes, learners receive one-on-one mentorship and technical guidance from industry experts specifically for cloud and big data tools.",
        category: "support"
      },
      {
        question: "How does this course differ from a general Data Science course?",
        answer: "This course focuses on the architecture and infrastructure required to move and transform data (the 'plumbing'), while Data Science focuses on analysis and modeling.",
        category: "program"
      },
      {
        question: "Is this course suitable for a career switch from testing or DBA roles?",
        answer: "Absolutely. This course is a perfect bridge for Testers, DBAs, and Software Developers looking to move into high-demand Data Engineering roles.",
        category: "opportunities"
      }
    ]
  },

  "Data Engineering Course in Bangalore": {
    categories: [
      { id: "program", name: "Program" },
      { id: "eligibility", name: "Eligibility" },
      { id: "data-engineering", name: "Data Engineering" },
      { id: "job and career", name: "Job And Career" },
      { id: "certification", name: "Certification" },
      { id: "projects", name: "Projects" },
      { id: "placement", name: "Placement" },
      { id: "opportunities", name: "Opportunities" },
      { id: "support", name: "Support" }
    ],
    faqs: [
      {
        question: "Who should enroll in the Data Engineering Course in Bangalore?",
        answer: "This course is suitable for fresh graduates, working professionals, software developers, and IT professionals looking to transition into data engineering roles in Bangalore's thriving tech sector.",
        category: "eligibility"
      },
      {
        question: "Do I need prior coding experience?",
        answer: "Basic programming knowledge is helpful, but the course starts from fundamentals and gradually advances to complex concepts, including Python and SQL for data pipelines.",
        category: "eligibility"
      },
      {
        question: "What is the duration of the Data Engineering course in Bangalore?",
        answer: "The program typically ranges from 6 to 11 months, depending on the track (weekday/weekend) and depth of cloud specializations selected.",
        category: "program"
      },
      {
        question: "Is this course suitable for working professionals in Bangalore?",
        answer: "Yes, the program offers flexible weekend and evening batches to accommodate the busy schedules of professionals working in Electronic City, Whitefield, and ORR.",
        category: "program"
      },
      {
        question: "What tools and technologies are covered in this course?",
        answer: "You will master Python, SQL, Big Data tools (Hadoop, Spark), NoSQL (MongoDB/Cassandra), Orchestration tools (Airflow), and Cloud platforms like AWS, Azure, or GCP.",
        category: "data-engineering"
      },
      {
        question: "Will I work on real-world projects?",
        answer: "Yes, the course includes multiple hands-on projects such as building ETL pipelines, real-time data streaming with Kafka, and cloud-native data warehousing.",
        category: "projects"
      },
      {
        question: "Is placement assistance available in Bangalore?",
        answer: "Yes, Ivy Professional School provides 100% placement assistance, including resume optimization for engineering roles, mock interviews, and connections with 500+ hiring partners.",
        category: "placement"
      },
      {
        question: "What job roles can I apply for after completing this course?",
        answer: "You can apply for roles such as Data Engineer, Big Data Engineer, ETL Developer, Cloud Data Engineer, and Analytics Engineer.",
        category: "job and career"
      },
      {
        question: "Will I receive a certification after the course?",
        answer: "Yes, you will receive an industry-recognized Data Engineering certification from Ivy Professional School upon successful completion of all modules and projects.",
        category: "certification"
      },
      {
        question: "Is the certification recognized by top tech firms in Bangalore?",
        answer: "Yes, Ivy’s certification is highly valued by MNCs, product startups, and consulting firms across Bangalore, India's Silicon Valley.",
        category: "certification"
      },
      {
        question: "What learning modes are available in Bangalore?",
        answer: "We offer instructor-led classroom training, live online sessions, and hybrid models to provide maximum learning flexibility.",
        category: "program"
      },
      {
        question: "What are the eligibility criteria for the program?",
        answer: "Graduates from Engineering, Computer Science, IT, or any quantitative background are ideal. A logical mindset and familiarity with databases are recommended.",
        category: "eligibility"
      },
      {
        question: "Will I get mentorship for specialized cloud engineering tools?",
        answer: "Yes, students receive 1:1 mentorship from experienced Data Engineers who provide guidance on complex cloud architectures and big data workflows.",
        category: "support"
      },
      {
        question: "How does this Data Engineering course differ from Data Science?",
        answer: "This course focuses on building and maintaining the infrastructure and pipelines that move data (the 'how'), while Data Science focuses on analyzing that data (the 'what').",
        category: "program"
      },
      {
        question: "Can I transition from a testing or support role into Data Engineering?",
        answer: "Absolutely. Our curriculum is designed to help professionals from QA, Support, or Database Administration backgrounds transition smoothly into high-paying engineering roles.",
        category: "opportunities"
      }
    ]
  },

  "Data Engineering Course in Mumbai": {
    categories: [
      { id: "program", name: "Program" },
      { id: "eligibility", name: "Eligibility" },
      { id: "data-engineering", name: "Data Engineering" },
      { id: "job and career", name: "Job And Career" },
      { id: "certification", name: "Certification" },
      { id: "projects", name: "Projects" },
      { id: "placement", name: "Placement" },
      { id: "opportunities", name: "Opportunities" },
      { id: "support", name: "Support" }
    ],
    faqs: [
      {
        question: "Who should enroll in the Data Engineering Course in Mumbai?",
        answer: "Fresh graduates, working professionals, software developers, and IT professionals looking to transition into data engineering roles can enroll. It is ideal for those who prefer building systems and data architecture over pure statistical analysis.",
        category: "eligibility"
      },
      {
        question: "Is prior coding experience required?",
        answer: "No prior coding experience is required. The course begins with fundamentals of Python and SQL, gradually progressing to advanced automation and big data engineering concepts.",
        category: "eligibility"
      },
      {
        question: "What is the duration of the Data Engineering course in Mumbai?",
        answer: "The program typically spans 6 to 9 months, providing a balance of theoretical depth and extensive hands-on laboratory sessions.",
        category: "program"
      },
      {
        question: "Is the Data Engineering course in Mumbai suitable for working professionals?",
        answer: "Yes, the course offers flexible learning options including weekend batches and live online sessions, making it convenient for Mumbai’s working professionals to upskill without quitting their jobs.",
        category: "program"
      },
      {
        question: "What tools and technologies are covered in this course?",
        answer: "You will master Python, SQL, Big Data frameworks (Hadoop, Spark), ETL tools, Data Orchestration (Airflow), and Cloud platforms like AWS, Azure, or GCP.",
        category: "data-engineering"
      },
      {
        question: "Are real-world projects included in the course?",
        answer: "Yes, the curriculum includes multiple industry-relevant projects and a comprehensive capstone where you build end-to-end data pipelines and real-time streaming architectures.",
        category: "projects"
      },
      {
        question: "Does Ivy Professional School provide placement assistance in Mumbai?",
        answer: "Yes, Ivy Professional School provides dedicated career support, including resume optimization, mock technical interviews, and connections with 500+ hiring partners.",
        category: "placement"
      },
      {
        question: "What job roles can I apply for after completing this course?",
        answer: "Graduates can apply for roles such as Data Engineer, Big Data Engineer, ETL Developer, Analytics Engineer, and Data Architect.",
        category: "job and career"
      },
      {
        question: "Will I receive a certification after completing the course?",
        answer: "Yes, you will receive an industry-recognized Data Engineering certification from Ivy Professional School upon successful completion of the program.",
        category: "certification"
      },
      {
        question: "Is the certification recognized by recruiters in Mumbai?",
        answer: "Yes, the certification is well-regarded by top MNCs, fintech firms, and tech startups across Mumbai and the Navi Mumbai IT hubs.",
        category: "certification"
      },
      {
        question: "What learning modes are available for this course in Mumbai?",
        answer: "The course is available in multiple formats: classroom-led training, live online instructor-led sessions, and a hybrid learning model.",
        category: "program"
      },
      {
        question: "What is the eligibility criteria for enrolling in the course?",
        answer: "Graduates from Engineering, Science, Commerce, or Management backgrounds are eligible. A basic logical mindset and an interest in problem-solving are recommended.",
        category: "eligibility"
      },
      {
        question: "Will I get mentorship and doubt-clearing support?",
        answer: "Yes, students receive 1:1 mentorship from industry experts, regular doubt-clearing sessions, and lifetime access to learning materials and recorded sessions.",
        category: "support"
      },
      {
        question: "How is Data Engineering different from a Data Science course?",
        answer: "Data Engineering focuses on the 'plumbing'—building the infrastructure and pipelines to move and transform data—whereas Data Science focuses on analyzing that data to find patterns and insights.",
        category: "program"
      },
      {
        question: "Is this course suitable for a career switch from a non-IT background?",
        answer: "Absolutely. The structured curriculum is designed to hand-hold career switchers through the technical basics before moving into complex big data and cloud engineering.",
        category: "opportunities"
      }
    ]
  },

  "Data Engineering Course in Kolkata": {
    categories: [
      { id: "program", name: "Program" },
      { id: "eligibility", name: "Eligibility" },
      { id: "data-engineering", name: "Data Engineering" },
      { id: "job and career", name: "Job And Career" },
      { id: "certification", name: "Certification" },
      { id: "projects", name: "Projects" },
      { id: "placement", name: "Placement" },
      { id: "opportunities", name: "Opportunities" },
      { id: "support", name: "Support" }
    ],
    faqs: [
      {
        question: "Is this Data Engineering Course in Kolkata suitable for freshers?",
        answer: "Yes, the course starts with fundamentals and gradually advances to industry-level concepts, making it ideal for both freshers and professionals.",
        category: "eligibility"
      },
      {
        question: "Do I need coding experience?",
        answer: "Basic programming knowledge is helpful but not mandatory. The course covers Python and SQL from a data engineering perspective.",
        category: "eligibility"
      },
      {
        question: "What is the duration of the Data Engineering course in Kolkata?",
        answer: "The program typically spans 6 to 9 months, depending on the intensity of the track and whether you choose weekday or weekend batches.",
        category: "program"
      },
      {
        question: "Is this course suitable for working IT professionals?",
        answer: "Yes, it is highly recommended for software engineers and database admins looking to upscale. Flexible weekend batches are available in Kolkata.",
        category: "program"
      },
      {
        question: "What tools and technologies are covered in this course?",
        answer: "You will learn Python, SQL, Big Data frameworks (Hadoop, Spark), ETL tools, Cloud platforms (AWS/Azure/GCP), and Data Warehousing concepts.",
        category: "data-engineering"
      },
      {
        question: "Are there hands-on projects included?",
        answer: "Yes, you will work on building end-to-end data pipelines, real-time data streaming projects, and cloud-based data architecture projects.",
        category: "projects"
      },
      {
        question: "Is placement assistance available in Kolkata?",
        answer: "Yes, career support, resume building for engineering roles, and mock technical interviews are an integral part of the program.",
        category: "placement"
      },
      {
        question: "What career roles can I pursue after this course?",
        answer: "Graduates can apply for roles such as Data Engineer, Big Data Engineer, ETL Developer, Data Architect, and Analytics Engineer.",
        category: "job and career"
      },
      {
        question: "Will I receive a certification upon completion?",
        answer: "Yes, you will receive an industry-recognized Data Engineering certification from Ivy Professional School.",
        category: "certification"
      },
      {
        question: "Is the certification recognized by Kolkata-based IT firms?",
        answer: "Yes, it is recognized by major IT hubs in Sector V and Rajarhat, as well as top tech firms across India.",
        category: "certification"
      },
      {
        question: "What are the learning modes available for this course?",
        answer: "You can choose from classroom sessions in Kolkata, live online instructor-led training, or a hybrid model.",
        category: "program"
      },
      {
        question: "What is the eligibility criteria for Data Engineering?",
        answer: "Graduates from CS, IT, Engineering, or any quantitative background with a logical mindset are eligible to join.",
        category: "eligibility"
      },
      {
        question: "Will I get mentorship for cloud-based engineering tools?",
        answer: "Yes, you will receive 1:1 mentorship and hands-on guidance for setting up and managing cloud data environments.",
        category: "support"
      },
      {
        question: "How is Data Engineering different from the Data Science course?",
        answer: "While Data Science focuses on modeling and insights, this course focuses on the infrastructure, plumbing, and processing of large-scale data.",
        category: "program"
      },
      {
        question: "Can I transition from a non-IT background to Data Engineering?",
        answer: "Yes, though it is more technical, our structured curriculum and preparatory modules help non-IT students build the necessary foundation.",
        category: "opportunities"
      }
    ]
  },
  "Data Engineering Course in Pune": {
    categories: [
      { id: "program", name: "Program" },
      { id: "eligibility", name: "Eligibility" },
      { id: "data-engineering", name: "Data Engineering" },
      { id: "job and career", name: "Job And Career" },
      { id: "certification", name: "Certification" },
      { id: "projects", name: "Projects" },
      { id: "placement", name: "Placement" },
      { id: "opportunities", name: "Opportunities" },
      { id: "support", name: "Support" }
    ],
    faqs: [
      {
        question: "Who should enroll in the Data Engineering Course in Pune?",
        answer: "Fresh graduates, working professionals, software developers, and IT professionals looking to transition into data engineering roles can enroll. It is specifically designed for those who want to build and manage large-scale data systems.",
        category: "eligibility"
      },
      {
        question: "Is prior coding experience required?",
        answer: "Basic programming knowledge is helpful, but not mandatory. The course begins with fundamentals of Python and SQL, gradually advancing to complex big data and automation topics.",
        category: "eligibility"
      },
      {
        question: "What is the duration of the Data Engineering course in Pune?",
        answer: "The program typically spans 6 to 9 months, providing a balance of theoretical depth and extensive hands-on laboratory sessions to ensure industry readiness.",
        category: "program"
      },
      {
        question: "Is the Data Engineering course in Pune suitable for working professionals?",
        answer: "Yes, the course offers flexible learning options, including weekend batches and live online sessions, specifically tailored for Pune's busy IT workforce.",
        category: "program"
      },
      {
        question: "What tools and technologies are covered in this course?",
        answer: "You will master Python, SQL, Big Data frameworks (Hadoop, Spark), ETL tools, Data Orchestration (Apache Airflow), and Cloud platforms like AWS, Azure, or GCP.",
        category: "data-engineering"
      },
      {
        question: "Are real-world projects included in the course?",
        answer: "Yes, learners work on multiple industry-relevant projects and a comprehensive capstone where you build end-to-end data pipelines and real-time streaming architectures.",
        category: "projects"
      },
      {
        question: "Is placement assistance available in Pune?",
        answer: "Yes, Ivy Professional School provides career support, including resume optimization, mock technical interviews, and placement assistance with our network of 500+ hiring partners.",
        category: "placement"
      },
      {
        question: "What job roles can I apply for after completing this course?",
        answer: "Graduates can apply for roles such as Data Engineer, Big Data Engineer, ETL Developer, Analytics Engineer, and Data Architect.",
        category: "job and career"
      },
      {
        question: "Will I receive a certification after completing the course?",
        answer: "Yes, upon successful completion, you will receive an industry-recognized Data Engineering certification from Ivy Professional School.",
        category: "certification"
      },
      {
        question: "Is the certification recognized by IT companies in Pune?",
        answer: "Yes, the certification is highly valued by top MNCs, global capability centers (GCCs), and tech startups across Pune's Hinjewadi and Magarpatta IT hubs.",
        category: "certification"
      },
      {
        question: "What learning modes are available for this course in Pune?",
        answer: "The course is available through instructor-led classroom training, live online instructor-led sessions, and hybrid learning formats.",
        category: "program"
      },
      {
        question: "What is the eligibility criteria for enrolling in the course?",
        answer: "Graduates from Engineering, Science, Commerce, or Management backgrounds are eligible. A basic logical mindset and an interest in data infrastructure are recommended.",
        category: "eligibility"
      },
      {
        question: "Will I get mentorship and doubt-clearing support?",
        answer: "Yes, students receive 1:1 mentorship from industry experts, regular doubt-clearing sessions, and lifetime access to course recordings and materials.",
        category: "support"
      },
      {
        question: "How is Data Engineering different from a Data Science course?",
        answer: "Data Engineering focuses on building and maintaining the infrastructure (pipelines) that moves data, whereas Data Science focuses on analyzing that data to find patterns and insights.",
        category: "program"
      },
      {
        question: "Is this course suitable for a career switch into Cloud Engineering?",
        answer: "Absolutely. The course includes dedicated modules on Cloud (Azure/AWS), making it an excellent path for anyone looking to transition into Cloud Data Engineering roles.",
        category: "opportunities"
      }
    ]
  },
  "Data Engineering Course in Chennai": {
    categories: [
      { id: "program", name: "Program" },
      { id: "eligibility", name: "Eligibility" },
      { id: "data-engineering", name: "Data Engineering" },
      { id: "job and career", name: "Job And Career" },
      { id: "certification", name: "Certification" },
      { id: "projects", name: "Projects" },
      { id: "placement", name: "Placement" },
      { id: "opportunities", name: "Opportunities" },
      { id: "support", name: "Support" }
    ],
    faqs: [
      {
        question: "Who should enroll in the Data Engineering Course in Chennai?",
        answer: "Fresh graduates, working professionals, software developers, and IT professionals aiming to transition into data engineering roles can enroll. It is a perfect fit for those who enjoy backend systems and data architecture.",
        category: "eligibility"
      },
      {
        question: "Is prior coding experience required?",
        answer: "Basic programming knowledge is helpful, but the course starts from fundamentals and gradually advances to complex concepts like building ETL pipelines and managing Big Data clusters.",
        category: "eligibility"
      },
      {
        question: "What is the duration of the Data Engineering course in Chennai?",
        answer: "The program typically spans 6 to 9 months, depending on the learning pace and whether you opt for intensive weekday sessions or weekend batches.",
        category: "program"
      },
      {
        question: "Is this course suitable for working professionals in Chennai?",
        answer: "Yes, we offer flexible weekend and evening batches specifically for the convenience of IT professionals working in OMR, Siruseri, and DLF IT Park.",
        category: "program"
      },
      {
        question: "What tools and technologies are covered in this course?",
        answer: "The curriculum includes Python, SQL, Hadoop, Apache Spark, Kafka, NoSQL databases, and Cloud-native engineering tools on AWS, Azure, or GCP.",
        category: "data-engineering"
      },
      {
        question: "Are there hands-on projects included?",
        answer: "Yes, you will work on 10+ industry-aligned projects, including building real-time data streaming pipelines and architecting cloud data warehouses.",
        category: "projects"
      },
      {
        question: "Is placement assistance available in Chennai?",
        answer: "Yes, Ivy Professional School provides dedicated career support, including resume building, mock technical interviews, and placement assistance with 500+ hiring partners.",
        category: "placement"
      },
      {
        question: "What job roles can I apply for after completing this course?",
        answer: "Graduates can apply for roles such as Data Engineer, Big Data Engineer, ETL Developer, Data Architect, and Analytics Engineer.",
        category: "job and career"
      },
      {
        question: "Will I receive a certification after the course?",
        answer: "Yes, upon successful completion, you will receive an industry-recognized Data Engineering certification from Ivy Professional School.",
        category: "certification"
      },
      {
        question: "Is the certification recognized by top recruiters in Chennai?",
        answer: "Yes, the certification is well-recognized by Chennai-based tech giants, SaaS companies, and global analytics firms.",
        category: "certification"
      },
      {
        question: "What learning modes are available in Chennai?",
        answer: "We provide instructor-led classroom sessions, live online instructor-led training, and a hybrid learning model.",
        category: "program"
      },
      {
        question: "What is the eligibility criteria for this course?",
        answer: "Graduates from Engineering, Computer Science, IT, or any quantitative background are eligible. A logical mindset and familiarity with databases are beneficial.",
        category: "eligibility"
      },
      {
        question: "Will I get mentorship for cloud-based engineering?",
        answer: "Yes, learners receive 1:1 mentorship from industry experts to help them navigate complex cloud architectures and big data workflows.",
        category: "support"
      },
      {
        question: "How is Data Engineering different from a Data Science course?",
        answer: "Data Engineering is about the infrastructure and 'plumbing' that moves and cleans data, while Data Science is about analyzing that data for insights and predictions.",
        category: "program"
      },
      {
        question: "Is this course suitable for a career switch from testing or support roles?",
        answer: "Absolutely. This course is designed to help professionals from QA, Support, or DBA backgrounds transition smoothly into high-paying engineering roles.",
        category: "opportunities"
      }
    ]
  },

"Data Analytics Course in Kolkata": {
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
      question: "Who can join the Data Analytics course in Kolkata?",
      answer: "This course is suitable for graduates, working professionals, commerce and management students, engineers, and individuals in Kolkata looking to build practical data analytics and reporting skills.",
      category: "eligibility"
    },
    {
      question: "Is this course appropriate for beginners with no analytics experience?",
      answer: "Yes. The learning journey starts with foundational concepts and gradually progresses to applied analytics, making it accessible for beginners as well as professionals.",
      category: "eligibility"
    },
    {
      question: "What is the course duration for the Data Analytics program in Kolkata?",
      answer: "The program usually takes 6 to 8 months to complete, depending on the selected batch, learning format, and pace of project work.",
      category: "program"
    },
    {
      question: "Are there flexible batch options available for learners in Kolkata?",
      answer: "Yes. The course offers weekday, weekend, and evening batches to suit students and working professionals in Kolkata.",
      category: "program"
    },
    {
      question: "What analytics tools and techniques are included in the syllabus?",
      answer: "Learners are trained in Excel, SQL, Python for analytics, Power BI or Tableau for dashboards, and statistical techniques used in business analytics.",
      category: "data-science"
    },
    {
      question: "Does the program emphasize practical learning?",
      answer: "Yes. The curriculum includes hands-on assignments, data analysis projects, and a capstone project based on real-world business scenarios.",
      category: "projects"
    },
    {
      question: "Is career or placement support provided after course completion?",
      answer: "Yes. Learners receive placement support including resume preparation, interview guidance, mock interviews, and career mentoring.",
      category: "placement"
    },
    {
      question: "Which career paths can I explore after completing the course?",
      answer: "After completion, learners can pursue roles such as Data Analyst, Business Analyst, MIS Executive, Reporting Analyst, and entry-level analytics positions.",
      category: "job and career"
    },
    {
      question: "Will I receive a certificate after finishing the Data Analytics course?",
      answer: "Yes. A Data Analytics certification from Ivy Professional School is awarded upon successful completion of the course and project requirements.",
      category: "certification"
    },
    {
      question: "How does this certification help in the job market?",
      answer: "The certification demonstrates hands-on analytics skills and project exposure, making it valuable for employers in Kolkata and across India.",
      category: "certification"
    },
    {
      question: "What learning formats are available for this course in Kolkata?",
      answer: "Learners can choose between classroom training, live online instructor-led sessions, or a hybrid learning model.",
      category: "program"
    },
    {
      question: "Are there any mandatory eligibility or academic requirements?",
      answer: "There are no mandatory academic prerequisites. Learners from engineering, commerce, science, management, and non-technical backgrounds can enroll.",
      category: "eligibility"
    },
    {
      question: "What type of academic support is offered during the program?",
      answer: "Learners receive ongoing support through doubt-clearing sessions, mentor guidance, feedback on assignments, and structured academic assistance.",
      category: "support"
    },
    {
      question: "Why choose this Data Analytics course in Kolkata?",
      answer: "The course focuses on applied analytics, business-relevant use cases, guided mentorship, and career readiness rather than only theoretical learning.",
      category: "data-analytics"
    },
    {
      question: "Why choose this Data Analytics course in Kolkata?",
      answer: "The course focuses on applied analytics, business-relevant use cases, guided mentorship, and career readiness rather than only theoretical learning.",
      category: "program"
    },
    {
      question: "Can this course support a transition into analytics roles?",
      answer: "Yes. The program is designed to help learners from diverse backgrounds build analytics capabilities and transition into data-focused roles.",
      category: "opportunities"
    }
  ]
},

"Data Analytics Course in Delhi": {
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
      question: "Who should enroll in the Data Analytics course in Delhi?",
      answer: "This Data Analytics course in Delhi is ideal for fresh graduates, working professionals, IT engineers, analysts, and career switchers who want to build a strong foundation in data analytics, business intelligence, and data-driven decision-making.",
      category: "eligibility"
    },
    {
      question: "Do I need prior coding or programming experience to join this course?",
      answer: "No prior coding experience is mandatory. The course starts from the basics of Python, SQL, and statistics, making it suitable for beginners while still adding value for experienced professionals.",
      category: "eligibility"
    },
    {
      question: "What is the duration of the Data Analytics course in Delhi?",
      answer: "The course duration typically ranges from 6 to 8 months, depending on the learning mode (weekday or weekend) and batch structure.",
      category: "program"
    },
    {
      question: "Is this Data Analytics course in Delhi suitable for working professionals?",
      answer: "Yes, the course is designed with flexible schedules, including weekend and evening batches, making it convenient for working professionals in Delhi.",
      category: "program"
    },
    {
      question: "What tools and technologies will I learn during the course?",
      answer: "You will learn Excel, SQL, Python, Power BI or Tableau, statistics, data visualization, and analytics techniques used by data analysts across industries.",
      category: "data-analytics"
    },
    {
      question: "What tools and technologies will I learn during the course?",
      answer: "You will learn Excel, SQL, Python, Power BI or Tableau, statistics, data visualization, and analytics techniques used by data analysts across industries.",
      category: "data-science"
    },
    {
      question: "Are there real-world projects included in the course?",
      answer: "Yes, learners work on multiple real-world, industry-aligned projects and a capstone project to gain hands-on experience and practical exposure.",
      category: "projects"
    },
    {
      question: "Does the Data Analytics course in Delhi provide placement assistance?",
      answer: "Yes, comprehensive placement support is provided, including resume building, mock interviews, career mentoring, and access to hiring partners.",
      category: "placement"
    },
    {
      question: "What kind of job roles can I apply for after completing this course?",
      answer: "After completing the course, you can apply for roles such as Data Analyst, Business Analyst, MIS Analyst, Reporting Analyst, and Junior Data Scientist.",
      category: "job and career"
    },
    {
      question: "Will I receive a certification after course completion?",
      answer: "Yes, upon successful completion, you will receive a recognized Data Analytics certification from Ivy Professional School, validating your skills and job readiness.",
      category: "certification"
    },
    {
      question: "Is the certification recognized by employers in Delhi and across India?",
      answer: "Yes, the certification is recognized by employers across Delhi NCR and major Indian cities, helping learners improve credibility and job prospects.",
      category: "certification"
    },
    {
      question: "What learning modes are available for this Data Analytics course in Delhi?",
      answer: "The course is available through instructor-led classroom training, live online sessions, and hybrid learning formats.",
      category: "program"
    },
    {
      question: "Are there any eligibility criteria for enrolling in the course?",
      answer: "A basic understanding of mathematics and logical reasoning is recommended. Graduates from engineering, science, commerce, or management backgrounds can enroll.",
      category: "eligibility"
    },
    {
      question: "Will I get doubt-clearing and mentorship support during the course?",
      answer: "Yes, learners receive continuous mentorship, regular doubt-clearing sessions, one-on-one guidance, and academic support throughout the program.",
      category: "support"
    },
    {
      question: "How is this Data Analytics course in Delhi different from others?",
      answer: "This course focuses on practical, job-oriented learning with industry-aligned curriculum, experienced faculty, hands-on projects, and strong placement support.",
      category: "program"
    },
    {
      question: "Is this course suitable for a career transition into data analytics?",
      answer: "Yes, the course is structured to help both technical and non-technical professionals successfully transition into data analytics roles.",
      category: "opportunities"
    }
  ]
},

"Data Analytics Course in Mumbai": {
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
      question: "Who is this Data Analytics course in Mumbai designed for?",
      answer: "The program is designed for graduates, early-career professionals, domain experts from finance, operations or sales, and professionals looking to move into analytics-driven roles using data and dashboards.",
      category: "eligibility"
    },
    {
      question: "Is this course beginner-friendly or meant for experienced professionals?",
      answer: "The course is structured to support complete beginners as well as professionals. Concepts are taught from first principles and gradually move towards applied analytics and business use cases.",
      category: "eligibility"
    },
    {
      question: "How long does it take to complete the Data Analytics course in Mumbai?",
      answer: "Most learners complete the program within 6 to 8 months, depending on batch type, pace of learning, and project involvement.",
      category: "program"
    },
    {
      question: "Can working professionals manage this course alongside their job?",
      answer: "Yes. The course offers flexible scheduling options such as weekend and after-work batches, making it manageable for professionals working in Mumbai.",
      category: "program"
    },
    {
      question: "Which analytics tools and skills are covered in the curriculum?",
      answer: "The curriculum covers Excel for analysis, SQL for data querying, Python for analytics, Power BI or Tableau for visualization, and core statistical concepts required for data-driven decisions.",
      category: "data-analytics"
    },
    {
      question: "What kind of practical exposure does the course offer?",
      answer: "Learners work on hands-on assignments, business case–based projects, and a capstone project that mirrors real analytics problems faced by companies.",
      category: "projects"
    },
    {
      question: "Is placement or career support included in the program?",
      answer: "Yes. The course includes structured career support such as resume optimization, interview preparation, mock interviews, and guidance on analytics career paths.",
      category: "placement"
    },
    {
      question: "What roles does this course prepare me for?",
      answer: "The program prepares learners for roles like Data Analyst, Business Analyst, Reporting Analyst, MIS Analyst, and entry-level analytics roles across domains.",
      category: "job and career"
    },
    {
      question: "Do I receive a certificate after completing the course?",
      answer: "Yes. Learners receive a Data Analytics certificate from Ivy Professional School upon successful completion of coursework and projects.",
      category: "certification"
    },
    {
      question: "How valuable is this certification in the job market?",
      answer: "The certification is valued by employers across Mumbai and other major cities as it reflects practical analytics skills and project-based learning.",
      category: "certification"
    },
    {
      question: "What learning formats are available for Mumbai learners?",
      answer: "Learners can choose between classroom sessions, live online instructor-led training, or a hybrid model depending on convenience.",
      category: "program"
    },
    {
      question: "Is there any specific educational background required to enroll?",
      answer: "There are no strict educational prerequisites. Graduates from engineering, commerce, management, science, and even non-technical backgrounds can enroll.",
      category: "eligibility"
    },
    {
      question: "What kind of academic and learning support is provided?",
      answer: "Students receive regular doubt-solving sessions, mentor guidance, structured feedback on projects, and continuous academic support throughout the course.",
      category: "support"
    },
    {
      question: "What sets this Data Analytics course in Mumbai apart from others?",
      answer: "The program focuses on applied analytics, real business scenarios, strong mentoring, and career readiness rather than just tool-based training.",
      category: "program"
    },
    {
      question: "Is this course suitable for switching careers into analytics?",
      answer: "Yes. The learning path is designed to help professionals from non-analytics roles gradually build skills and transition into analytics-focused careers.",
      category: "opportunities"
    }
  ]
},

"Data Analytics Course in Bangalore": {
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
      question: "Who should consider the Data Analytics course in Bangalore?",
      answer: "This course is ideal for graduates, software professionals, startup employees, engineers, and working professionals in Bangalore aiming to build strong analytics and data-driven decision-making skills.",
      category: "eligibility"
    },
    {
      question: "Is this Data Analytics course suitable for non-programmers?",
      answer: "Yes. The course begins with fundamentals and does not assume prior programming knowledge, making it suitable for learners from non-coding backgrounds.",
      category: "eligibility"
    },
    {
      question: "What is the expected duration of the Data Analytics course in Bangalore?",
      answer: "The program is designed to be completed within 6 to 8 months, depending on learning pace, batch schedule, and project submissions.",
      category: "program"
    },
    {
      question: "Can professionals working in Bangalore attend this course?",
      answer: "Yes. The course offers flexible learning schedules including weekend and evening batches, suitable for professionals working in tech and non-tech roles.",
      category: "program"
    },
    {
      question: "Which tools and analytics techniques are covered?",
      answer: "Learners gain hands-on experience with Excel, SQL, Python for analytics, Power BI or Tableau, and core statistical techniques used in data analysis.",
      category: "data-analytics"
    },
    {
      question: "Are industry-relevant projects part of the curriculum?",
      answer: "Yes. The course includes guided assignments, practical projects, and a capstone project aligned with real business and analytics scenarios.",
      category: "projects"
    },
    {
      question: "Does the course offer placement or career guidance?",
      answer: "Yes. Learners receive career support through resume building, mock interviews, interview preparation, and guidance on analytics career paths.",
      category: "placement"
    },
    {
      question: "What job roles can I target after completing the course?",
      answer: "Graduates of the program can apply for roles such as Data Analyst, Business Analyst, Reporting Analyst, MIS Analyst, and entry-level analytics roles.",
      category: "job and career"
    },
    {
      question: "Is certification provided after completing the course?",
      answer: "Yes. Learners receive a Data Analytics certification from Ivy Professional School after successful completion of the program.",
      category: "certification"
    },
    {
      question: "How relevant is this certification for Bangalore’s job market?",
      answer: "The certification is valued by employers across Bangalore’s tech and business ecosystem as it reflects practical analytics skills and project experience.",
      category: "certification"
    },
    {
      question: "What learning modes are available for this course?",
      answer: "Learners can choose between classroom sessions, live online instructor-led training, or a hybrid learning format.",
      category: "program"
    },
    {
      question: "Is there any minimum qualification required to enroll?",
      answer: "There are no strict qualification requirements. Graduates from engineering, science, commerce, management, and other disciplines are welcome.",
      category: "eligibility"
    },
    {
      question: "What kind of academic support is available during the course?",
      answer: "Learners receive continuous academic support through doubt-clearing sessions, mentor interactions, structured feedback, and guided learning.",
      category: "support"
    },
    {
      question: "Why choose this Data Analytics course in Bangalore?",
      answer: "The course focuses on practical analytics skills, business-oriented projects, structured mentorship, and career readiness aligned with industry needs.",
      category: "program"
    },
    {
      question: "Can this course help in transitioning to analytics roles?",
      answer: "Yes. The learning pathway is designed to help learners from diverse backgrounds transition into data analytics roles with confidence.",
      category: "opportunities"
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
        answer: "Yes, you can join two demo classes before enrollment.",
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
        question: "Does Ivy provide job placement assistance?",
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
        question: "Does Ivy provides networking opportunities?",
        answer: "Yes, through valuable job fairs, meetups, and alumni events.",
        category: "placement"
      },
      {
        question: "Is placement support available after course completion?",
        answer: "Yes, lifetime placement assistance is provided.",
        category: "placement"
      },
      {
        question: "Does Ivy provide salary negotiation help?",
        answer: "Yes, Ivy provides evaluation and negotiation guidance.",
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
        answer: "Yes, Ivy provides full career support including job fairs and referrals.",
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
        question: "Do you provide interview preparation?",
        answer: "Yes, mock interviews and personalized coaching are part of the career support.",
        category: "placement"
      },
      {
        question: "Are remote roles supported?",
        answer: "Yes, many Ivy learners are placed in remote and hybrid roles.",
        category: "placement"
      },
      {
        question: "Do you provide salary negotiations?",
        answer: "Yes, support is provided to assess and negotiate salary.",
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
        question: "Do you provide PrepAI support for interviews?",
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
      { question: "Are trial classes available?", answer: "Yes, you can join two demo trial sessions before enrollment.", category: "program" },
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
      { question: "What is the average salary?", answer: "Around ₹12 LPA for full-time roles, depending on profile and experience.", category: "job-and-career" },
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
      { question: "Are resume and LinkedIn reviews?", answer: "Yes, Ivy provides standard placement process.", category: "placement" },
      { question: "Can I get help with senior or freelance roles?", answer: "Yes, placement services also include mentor opportunities.", category: "placement" },
      { question: "Will I be supported in salary negotiations?", answer: "Yes, Ivy provides expert advice and salary evaluations.", category: "placement" },
      { question: "Is job fair participation included?", answer: "Yes, learners are invited to hiring events and job fairs.", category: "placement" },
      { question: "Which industries hire business analytics professionals?", answer: "Finance, marketing, IT, e-commerce, retail, and consulting.", category: "opportunities" },
      { question: "Is this course useful for career switches?", answer: "Yes, it helps learners transition into analytics roles.", category: "opportunities" },
      { question: "Are freelance or consulting roles possible?", answer: "Yes, learners can take up consulting and dashboarding services independently.", category: "opportunities" },
      { question: "Will this course help me apply for international roles?", answer: "Yes, the curriculum is globally aligned.", category: "opportunities" },
      { question: "Are the skills applicable to startups?", answer: "Yes, it strengthens skills like business insights and operations analytics.", category: "opportunities" },
      { question: "Is this course helpful for MBA or M.Sc. students?", answer: "Yes, it strengthens analytical decision-making and quantitative skills.", category: "opportunities" },
      { question: "What kind of mentorship is provided?", answer: "Yes, including one-on-one sessions with industry experts.", category: "support" },
      { question: "Do I get access to Prepal career support?", answer: "Yes, for mock interviews, resume prep, and assessments.", category: "support" },
      { question: "Is technical support included?", answer: "Yes, Ivy provides full academic and tech support.", category: "support" },
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
        question: "What content does this course provide?",
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
        question: "Are resume and LinkedIn reviews provided?",
        answer: "Yes, a dedicated executive mentoring expert for resume reviews is provided.",
        category: "placement"
      },
      {
        question: "Can I get remote or freelance roles?",
        answer: "Yes, many learners secure remote and freelance roles in visualization.",
        category: "placement"
      },
      {
        question: "Is support provided for salary negotiation?",
        answer: "Yes, including guidance on provides and benchmarking.",
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
        answer: "Average salary provided is 12 LPA, depending on background and role.",
        category: "job and career"
      },
      {
        question: "Will I get help with salary negotiation?",
        answer: "Yes, Ivy provides support in provide evaluation and salary negotiation.",
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
        answer: "Yes, you can access trial projects for no cost.",
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
        question: "Does Ivy provide lifetime placement assistance?",
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
        answer: "Yes, Ivy’s team provides full tech and learning support.",
        category: "support"
      },
      {
        question: "Can I attend demo classes after course enrollment?",
        answer: "Yes, sample classes are available after enrollment.",
        category: "support"
      },
      {
        question: "Is PrepAI integrated for learning support?",
        answer: "Yes, PrepAI provides mock interviews, career coaching, and assessments.",
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
  const data = useMemo(() => courseData[course.title] || defaultData, [course.title]);
  const [activeFilter, setActiveFilter] = useState<string>('program');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // SEO/AEO: Generate JSON-LD Schema for ALL FAQs in this course
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  }), [data]);

  const filteredFaqs = data.faqs.filter(faq => faq.category === activeFilter);

  return (
    <>
      {/* AEO Injection: This script makes your FAQs visible to AI Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section id="faq-section" className="py-12 bg-gray-50 mt-[-90px]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">

              {
                course.title === "Data Science with Machine Learning & AI Course in Kolkata" ? (
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    Frequently Asked Questions – <span style={{ color: '#16a5db' }}>Data Science Course in Kolkata</span>
                  </h2>
                ) : course.title === "Data Engineering Course in Kolkata" ? (
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    Frequently Asked Questions – <span style={{ color: '#16a5db' }}>Data Engineering Course in Kolkata</span>
                  </h2>
                ) :
                course.title === "Data Engineering Course in Bangalore" ? (
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    Frequently Asked Questions – <span style={{ color: '#16a5db' }}>Data Engineering Course in Bangalore</span>
                  </h2>
                ):
                course.title === "Data Engineering Course in Mumbai" ? (
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    Frequently Asked Questions – <span style={{ color: '#16a5db' }}>Data Engineering Course in Mumbai</span>
                  </h2>
                ) :
                course.title === "Data Engineering Course in Pune" ? (
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    Frequently Asked Questions – <span style={{ color: '#16a5db' }}>Data Engineering Course in Pune</span>
                  </h2>
                ):
                course.title === "Data Engineering Course in Delhi" ? (
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    Frequently Asked Questions – <span style={{ color: '#16a5db' }}>Data Engineering Course in Delhi</span>
                  </h2>
                ) :
                course.title === "Data Engineering Course in Chennai" ? (
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    Frequently Asked Questions – <span style={{ color: '#16a5db' }}>Data Engineering Course in Chennai</span>
                  </h2>
                ):
                course.title === "Data Analytics Course in Kolkata" ? (
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    Frequently Asked Questions – <span style={{ color: '#16a5db' }}>Data Analytics Course in Kolkata</span>
                  </h2>
                ) :
                course.title === "Data Analytics Course in Delhi" ? (
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    Frequently Asked Questions – <span style={{ color: '#16a5db' }}>Data Analytics Course in Delhi</span>
                  </h2>
                ) 
                 : course.title === "Data Analytics Course in Bangalore" ? (
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                      Frequently Asked Questions – <span style={{ color: '#16a5db' }}> Data Science Course in Bangalore</span>
                    </h2>
                  )
              
                : course.title === "Data Science with Machine Learning & AI Course in Delhi" ? (
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    Frequently Asked Questions – <span style={{ color: '#16a5db' }}>Data Science Course in Delhi</span>
                  </h2>
                ) : course.title === "Data Science with Machine Learning & AI Course in Pune" ? (
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    Frequently Asked Questions – <span style={{ color: '#16a5db' }}>Data Science Course in Pune</span>
                  </h2>
                ) : course.title === "Data Science with Machine Learning & AI Course in Chennai" ? (
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    Frequently Asked Questions – <span style={{ color: '#16a5db' }}> Data Science Course in Chennai</span>
                  </h2>
                )
                  : course.title === "Data Science with Machine Learning & AI Course in Bangalore" ? (
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                      Frequently Asked Questions – <span style={{ color: '#16a5db' }}> Data Science Course in Bangalore</span>
                    </h2>
                  )
                  : course.title === "Data Science with Machine Learning & AI Course in Mumbai" ? (
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                      Frequently Asked Questions – <span style={{ color: '#16a5db' }}> Data Science Course in Mumbai</span>
                    </h2>
                  )
                  : course.title === "Data Analytics Course in Mumbai" ? (
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                      Frequently Asked Questions – <span style={{ color: '#16a5db' }}> Data Science Course in Mumbai</span>
                    </h2>
                  )
                 


                    : (
                      /* DEFAULT FALLBACK - If no matches above */
                      <h2 className="text-3xl font-bold mb-4 text-gray-900">
                        What I need to know more about Ivy’s support, fees, and projects?                  </h2>
                    )
              }

              <p className="text-gray-600">
                Everything you need to know about the course and enrollment              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Category Sidebar */}
              <aside className="w-full md:w-1/4">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sticky top-24">
                  <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-500">Categories</h3>
                  <nav className="space-y-1">
                    {data.categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setActiveFilter(category.id)}
                        className={`w-full text-left px-4 py-2.5 rounded-md text-sm transition-all ${activeFilter === category.id
                          ? 'bg-blue-600 text-white font-semibold shadow-md'
                          : 'text-gray-600 hover:bg-gray-100'
                          }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* FAQ Accordion */}
              <div className="w-full md:w-3/4">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  <div className="p-6 border-b bg-white">
                    <h3 className="text-xl font-bold text-gray-800 capitalize">
                      {activeFilter.replace('-', ' ')} FAQs
                    </h3>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {filteredFaqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-0">
                        <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left transition-all">
                          {/* SEO: Using h3 or span with weight for question clarity */}
                          <span className="text-base font-semibold text-gray-900 pr-4">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Call to Action Section */}
                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-blue-900">Still have questions?</h4>
                    <p className="text-blue-700 text-sm">Speak directly with our career counselors in Kolkata.</p>
                  </div>
                  <Button
                    onClick={() => isMobile ? window.location.href = "tel:7676882222" : alert("Call us at 7676882222")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                  >
                    <MessageCircle size={18} className="mr-2" />
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseFAQ;