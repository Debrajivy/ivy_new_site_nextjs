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
  "AI for Product Manager": {
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
        question: "What is the duration of the AI for Product Managers course?",
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
        question: "Who can enroll in the AI for Product Managers course?",
        answer: "This course is designed for project managers, product leaders, team leads, and professionals who want to integrate AI into project workflows and decision-making.",
        category: "eligibility"
      },
      {
        question: "Is the AI for Product Managers course suitable for non-coders?",
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
        answer: "You will receive a course completion certificate in AI for Product Managers issued by Ivy Professional School, validating your expertise in AI-driven project workflows.",
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
  "Data Science & AI with IIT Guwahati": {
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
      question: "What is the duration of the Data Science & AI with IIT Guwahati course?",
      answer: "The course lasts for 45 weeks and includes 7 modules with 50 sessions totaling 225 hours.",
      category: "Program"
    },
    {
      question: "Is this course hybrid or fully online?",
      answer: "The course follows a hybrid model with live classes and lifetime access to recordings.",
      category: "Program"
    },
    {
      question: "What makes this program unique?",
      answer: "It offers Generative AI mastery, IT certification, and production-level model deployment.",
      category: "Program"
    },
    {
      question: "Do I get practice sessions?",
      answer: "Yes, there are 30-minute practice sessions before and after each main class.",
      category: "Program"
    },
    {
      question: "Is this course beginner-friendly?",
      answer: "Yes, this course is designed for students and professionals transitioning into data roles.",
      category: "Program"
    },
    {
      question: "Can I pay in installments?",
      answer: "Yes, no-cost EMI and 4-month installment plans are available.",
      category: "Program"
    },
    {
      question: "Who is eligible for this course?",
      answer: "Graduates, final-year students, and working professionals in any field can apply.",
      category: "Eligibility"
    },
    {
      question: "Do I need prior experience in AI or ML?",
      answer: "No, the course starts from basics and gradually advances to GenAI.",
      category: "Eligibility"
    },
    {
      question: "Is this suitable for non-programmers?",
      answer: "Yes, it is suitable for non-programmers.",
      category: "Eligibility"
    },
    {
      question: "Do I need to attend live classes?",
      answer: "No, live attendance is encouraged but recordings are available for flexibility.",
      category: "Eligibility"
    },
    {
      question: "Can I take only selected modules?",
      answer: "Yes, there is a 'Pick Your Own Module' option available.",
      category: "Eligibility"
    },
    {
      question: "Is there an admission test?",
      answer: "No, you can enroll directly by paying the fee.",
      category: "Eligibility"
    },
    {
      question: "What are the core technologies covered?",
      answer: "Python, SQL, Excel, Power BI, MLOps, and generative AI APIs like OpenAI and Anthropic.",
      category: "Data Science"
    },
    {
      question: "Are ML and DL concepts taught?",
      answer: "Yes, along with building and fine-tuning LLMs.",
      category: "Data Science"
    },
    {
      question: "Do I learn data visualization?",
      answer: "Yes, Power BI and Excel are covered in detail.",
      category: "Data Science"
    },
    {
      question: "Are MLOps included in the course?",
      answer: "Yes, as part of model deployment and production.",
      category: "Data Science"
    },
    {
      question: "Will I learn how to build AI applications?",
      answer: "Yes, including deploying models and using GenAI APIs.",
      category: "Data Science"
    },
    {
      question: "Are statistics and problem solving covered?",
      answer: "Yes, including business statistics and interview-based problem solving.",
      category: "Data Science"
    },
    {
      question: "What job roles can I get after this course?",
      answer: "Data Analyst, AI Developer, LLM Engineer, BI Developer, ML Engineer.",
      category: "Job And Career"
    },
    {
      question: "What is the average salary offered?",
      answer: "4-5 LPA is the average for freshers. Experienced professionals may earn more.",
      category: "Job And Career"
    },
    {
      question: "Is there a job guarantee?",
      answer: "Yes, a 6-month job guarantee is available for eligible learners.",
      category: "Job And Career"
    },
    {
      question: "Does the course help with interview prep?",
      answer: "Yes, with mock interviews, resume review, and analytical workshops.",
      category: "Job And Career"
    },
    {
      question: "Do I get help building my resume?",
      answer: "Yes, via the PrepAI platform and expert mentors.",
      category: "Job And Career"
    },
    {
      question: "Will I be connected to recruiters?",
      answer: "Yes, Ivy offers recruiter access and job fairs.",
      category: "Job And Career"
    },
    {
      question: "Do I get an IIT Guwahati certificate?",
      answer: "Yes, from the ESICT Academy, IIT Guwahati.",
      category: "Certification"
    },
    {
      question: "How is this certificate different?",
      answer: "It's among India's most respected academic validations for Data Science.",
      category: "Certification"
    },
    {
      question: "Is this certificate verifiable?",
      answer: "Yes, it includes digital credentials shareable on LinkedIn.",
      category: "Certification"
    },
    {
      question: "Is this certification government-backed?",
      answer: "Yes, via the ESICT Academy and aligned with national skilling standards.",
      category: "Certification"
    },
    {
      question: "Will it boost my profile for jobs?",
      answer: "Yes, IT certification provides a strong credibility with top employers.",
      category: "Certification"
    },
    {
      question: "Is there a final evaluation to earn it?",
      answer: "Yes, you must complete all modules and assessments.",
      category: "Certification"
    },
    {
      question: "What types of projects will I work on?",
      answer: "Projects include Excel sales analysis, Tableau dashboards, and R-based predictions.",
      category: "Projects"
    },
    {
      question: "Are these real-world case studies?",
      answer: "Yes, across retail, law enforcement, and automotive industries.",
      category: "Projects"
    },
    {
      question: "Do projects include AI, LLMs?",
      answer: "Yes, generative AI, LLMs, and model deployment are part of final projects.",
      category: "Projects"
    },
    {
      question: "Will I build a professional portfolio?",
      answer: "Yes, all projects can be showcased to recruiters.",
      category: "Projects"
    },
    {
      question: "Are projects group-based or individual?",
      answer: "Mostly individual with guidance from mentors.",
      category: "Projects"
    },
    {
      question: "Can I get feedback on my projects?",
      answer: "Yes, via project reviews and teaching assistants.",
      category: "Projects"
    },
    {
      question: "Which companies recruit from this course?",
      answer: "Amazon, IBM, Accenture, PwC, Microsoft, and 500+ hiring partners.",
      category: "Placement"
    },
    {
      question: "What is the placement success rate?",
      answer: "94% for full-time graduates.",
      category: "Placement"
    },
    {
      question: "Is placement assistance lifetime?",
      answer: "Yes, Ivy offers lifetime job and career support.",
      category: "Placement"
    },
    {
      question: "Are there dedicated recruiters?",
      answer: "Yes, including networking events with recruiters.",
      category: "Placement"
    },
    {
      question: "Can I get support for freelancing or remote jobs?",
      answer: "Yes, opportunities are shared based on learner preferences.",
      category: "Placement"
    },
    {
      question: "Is salary negotiation assistance provided?",
      answer: "Yes, Ivy mentors support evaluation and negotiation.",
      category: "Placement"
    },
    {
      question: "Which industries hire graduates from this course?",
      answer: "Tech, healthcare, e-commerce, banking, media, manufacturing.",
      category: "Opportunities"
    },
    {
      question: "Can I work internationally after this course?",
      answer: "Yes, the skills are aligned to global standards.",
      category: "Opportunities"
    },
    {
      question: "Will this course help me transition careers?",
      answer: "Yes, it's ideal for both freshers and professionals switching to AIData.",
      category: "Opportunities"
    },
    {
      question: "Can I freelance after this course?",
      answer: "Yes, especially in analytics, dashboarding, and GenAI apps.",
      category: "Opportunities"
    },
    {
      question: "Will this help me if I'm specializing in IT?",
      answer: "Yes, it upgrades your profile for AI/ML specializations.",
      category: "Opportunities"
    },
    {
      question: "Does this course use suitable tools for entrepreneurs?",
      answer: "Yes, it teaches how to use AI tools to build products.",
      category: "Opportunities"
    },
    {
      question: "What kind of support will I receive?",
      answer: "Dedicated mentors, 1:1 doubt sessions, peer groups, and TA access.",
      category: "Support"
    },
    {
      question: "What is PrepAI and how does it help?",
      answer: "It's Ivy's AI-powered support tool for resumes, interview prep, and assessments.",
      category: "Support"
    },
    {
      question: "Are WhatsApp groups available?",
      answer: "Yes, for ongoing peer discussion and mentor guidance.",
      category: "Support"
    },
    {
      question: "Do I get lifetime support?",
      answer: "Yes, you can revisit content anytime.",
      category: "Support"
    },
    {
      question: "Is there a technical helpdesk?",
      answer: "Yes, for any issues during your learning.",
      category: "Support"
    },
    {
      question: "Can I access support after completing the course?",
      answer: "Yes, career and learning support continues even post-completion.",
      category: "Support"
    }
  ]
},
  "Another Course Title": {
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
        question: "What is this 'Another Course' about?",
        answer: "This course covers the fundamentals of a different domain...",
        category: "program"
      },
      // ... (Add all other unique FAQs for this course here)
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