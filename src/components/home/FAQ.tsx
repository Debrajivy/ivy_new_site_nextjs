
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What courses does Ivy Professional School offer?",
      answer: "Being a leading data science institute, Ivy Professional School offers a wide range of courses in GenAI, Data Science, Data Engineering, Data Visualization, Business Analytics, Machine Learning, and more, helping you learn skills and gain experiences that lead to a high-income salary and a rewarding career."
    },
    {
      question: "Are online classes available?",
      answer: "Yes, we offer both online and in-person classes. From data science certification courses to data engineering certification courses, all of our classes are live, with real-time instruction from our expert educators. These classes are held every weekend. Currently, our in-person classes are available only in Kolkata."
    },
    {
      question: "How do I get admission, and what are the fees?",
      answer: "We at Ivy Professional School welcome everyone, from freshers to working professionals. There are no specific admission requirements. We offer a variety of courses in GenAI, Data Science, Data Engineering, Data Analytics, Data Visualization, etc., to meet your needs and the fees vary by course. Explore our course pages or call 7676882222 for details."
    },
    {
      question: "Can working professionals attend the courses?",
      answer: "Absolutely! Our weekend classes are designed for working professionals with busy schedules so you can learn and work simultaneously. Since Ivy is the best institute for Data Science and AI in India, we aim to give you a smooth learning experience."
    },
    {
      question: "I have finished 12th grade. Can I join?",
      answer: "We recommend completing a degree program to build a solid foundation upon graduation. However, you can contact us for personalized guidance on your career in Artificial Intelligence."
    },
    // {
    //   question: "How much time do I need to dedicate per week for the courses?",
    //   answer: "Most of our courses require 8-10 hours per week, including live sessions, self-study, and project work. Part-time programs are designed to be compatible with full-time jobs, while our full-time immersive programs require 25-30 hours per week."
    // }
  ];

  return (
    <section style={{marginTop:-20,marginBottom:20}} className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Have Questions About Ivy Pro School's Courses or Admissions?</h2>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our courses, teaching methodology, and support systems.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
