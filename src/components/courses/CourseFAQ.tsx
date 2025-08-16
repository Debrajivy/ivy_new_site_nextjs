import React, { useState, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle, HelpCircle } from 'lucide-react';
import { Course } from '@/lib/api';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
interface CourseHeroProps {
  course: Course;
}
const CourseFAQ = ({ course }: CourseHeroProps) => {
  { console.log("course", course) };

  const [activeFilter, setActiveFilter] = useState<string>('program');

  const [isMobile, setIsMobile] = useState(false)
  const [showNumber, setShowNumber] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
    }
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const handleClick = () => {
    if (isMobile) {
      window.location.href = "tel:7676882222"
    } else {
      setShowNumber(true)
      const timer = setTimeout(() => {
        setShowNumber(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }
  const faqs: FAQItem[] = [
    {
      question: "What is the duration of the Data Science with AI/ML course?",
      answer: "The course spans approximately 225 hours and includes live online or classroom sessions across multiple cities.",
      category: "program"
    },
    {
      question: "Is this course beginner-friendly or do I need prior knowledge?",
      answer: "The course is designed for both beginners and those with some experience, with foundational modules in Excel, SQL, and Python.",
      category: "program"
    },
    {
      question: "Which tools will I learn in this program?",
      answer: "You will gain hands-on experience with Python, R, SQL, Tableau, Power BI, Excel, and TensorFlow among others.",
      category: "program"
    },
    {
      question: "Are the classes live or recorded?",
      answer: "The program includes live interactive sessions with lifetime access to recorded videos for revision and flexibility.",
      category: "program"
    },
    {
      question: "What kind of case studies and projects are included?",
      answer: "You'll work on 30+ case studies and 10+ real-world projects in collaboration with industry partners.",
      category: "program"
    },
    {
      question: "Who can enroll in this course?",
      answer: "Graduates, final-year students, and working professionals from any background can apply.",
      category: "eligibility"
    },
    {
      question: "Is this course suitable for non-coders?",
      answer: "Yes, the course starts from basics and gradually introduces coding using Python and R with guided support.",
      category: "eligibility"
    },
    {
      question: "Do I need a degree in Mathematics or Statistics?",
      answer: "No, but an interest in numbers and logical thinking will help. Basic concepts are covered during the course.",
      category: "eligibility"
    },
    {
      question: "Can I enroll while pursuing my graduation?",
      answer: "Yes, many students take this course alongside their graduation to boost career readiness.",
      category: "eligibility"
    },
    {
      question: "What is Data Science and why is it important?",
      answer: "Data Science involves extracting insights from data using tools and algorithms. It's key to decision-making across industries.",
      category: "data science"
    },
    {
      question: "What's the difference between AI, ML, and Data Science?",
      answer: "Data Science is the broader field; ML and AI are subfields that focus on learning from data and making intelligent decisions.",
      category: "data science"
    },
    {
      question: "Will this course teach both theory and application?",
      answer: "Yes, the course balances theoretical understanding with hands-on practice on real datasets.",
      category: "data science"
    },
    {
      question: "How is Deep Learning covered in the course?",
      answer: "Deep learning fundamentals and applications using TensorFlow are included in the advanced modules.",
      category: "data science"
    },
    {
      question: "What job roles can I apply for after this course?",
      answer: "Roles include Data Analyst, Machine Learning Engineer, BI Developer, AI Specialist, and Junior Data Scientist.",
      category: "job and career"
    },
    {
      question: "What is the average salary after completing this course?",
      answer: "Entry-level salaries range from ₹5–9 LPA, depending on your background and project portfolio.",
      category: "job and career"
    },
    {
      question: "Does this course help with career transitions?",
      answer: "Yes, it's designed for freshers and professionals looking to shift to a data or AI-based career.",
      category: "job and career"
    },
    {
      question: "How does this course help with job readiness?",
      answer: "You'll build a portfolio through real projects, mock interviews, and CV preparation sessions.",
      category: "job and career"
    },
    {
      question: "What certification will I receive upon completion?",
      answer: "You will get a joint certification from Ivy Pro School and FutureSkills Prime, a MeitY-NASSCOM initiative.",
      category: "certification"
    },
    {
      question: "Is the certification industry recognized?",
      answer: "Yes, it's mapped to National Occupational Standards and co-branded with NASSCOM & IBM.",
      category: "certification"
    },
    {
      question: "Do I need to pass an exam to receive the certificate?",
      answer: "Successful completion of assignments, projects, and final assessments will earn you the certificate.",
      category: "certification"
    },
    {
      question: "Is this certificate valid internationally?",
      answer: "While it is India-recognized, the tools and skills you learn are globally applicable and accepted.",
      category: "certification"
    },
    {
      question: "How many projects will I work on?",
      answer: "The course includes over 10 industry projects and 30+ mandatory case studies across domains.",
      category: "projects"
    },
    {
      question: "Are these projects done individually or in groups?",
      answer: "Projects can be done individually or collaboratively, simulating real workplace scenarios.",
      category: "projects"
    },
    {
      question: "Will I get project certificates separately?",
      answer: "Some projects, especially industry-partnered ones, may include separate recognition or letters.",
      category: "projects"
    },
    {
      question: "Are the projects domain-specific?",
      answer: "Yes, projects span retail, finance, healthcare, and supply chain to align with job demands.",
      category: "projects"
    },
    {
      question: "Does Ivy offer placement support?",
      answer: "Yes, lifetime placement assistance is provided including resume building, mock interviews, and referrals.",
      category: "placement"
    },
    {
      question: "What companies hire from Ivy?",
      answer: "Recruiters include Cognizant, TCS, Beroe, Fractal, Accenture, and many top-tier MNCs and startups.",
      category: "placement"
    },
    {
      question: "How soon after course completion can I expect interviews?",
      answer: "Interviews typically begin during the final phase of the course, based on your project completion.",
      category: "placement"
    },
    {
      question: "Is internship assistance also provided?",
      answer: "Yes, guaranteed internships or project experiences are offered as part of the course.",
      category: "placement"
    },
    {
      question: "Which industries hire data science professionals?",
      answer: "Industries include IT, BFSI, healthcare, retail, manufacturing, consulting, and e-commerce.",
      category: "opportunities"
    },
    {
      question: "Can I freelance after completing this course?",
      answer: "Absolutely. You can take up freelance data analysis and dashboarding projects on platforms like Upwork and Toptal.",
      category: "opportunities"
    },
    {
      question: "Does the course support international career goals?",
      answer: "Yes, the tools, projects, and certifications are aligned to global industry requirements.",
      category: "opportunities"
    },
    {
      question: "Can I switch from a non-technical field to Data Science?",
      answer: "Yes, the course is built to support transitions from domains like marketing, HR, and operations.",
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
  ];

  const categories = [
    { id: 'program', name: 'Program' },
    { id: 'eligibility', name: 'Eligibility' },
    { id: 'data science', name: 'Data Science' },
    { id: 'job and career', name: 'Job And Career' },
    { id: 'certification', name: 'Certification' },
    { id: 'projects', name: 'Projects' },
    { id: 'placement', name: 'Placement' },
    { id: 'opportunities', name: 'Opportunities' },
    { id: 'support', name: 'Support' }
  ];

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
            {/* Left Side Navigation */}
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

            {/* Right Side Content */}
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
              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button className="flex items-center" onClick={handleClick} >
                  <MessageCircle size={18} className="mr-2" />
                  Schedule a Call
                </Button>

                {/* <Button variant="outline" className="flex items-center">
                  <HelpCircle size={18} className="mr-2" />
                  Ask a Question
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFAQ;