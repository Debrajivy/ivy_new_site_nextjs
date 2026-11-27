"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import type { Course } from '@/lib/api';
import { courseData } from '@/lib/course-faqs';

interface CourseHeroProps {
  course: Course;
}

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
  const data = useMemo(() => {
    // try exact title, then trimmed title, then slug-based lookup as a fallback
    if (courseData[course.title]) return courseData[course.title];
    const trimmed = course.title?.trim();
    if (trimmed && courseData[trimmed]) return courseData[trimmed];

    // slug -> words (e.g. "generative-ai-course" -> "generative ai course")
    const slugKey = (course.slug || "").replace(/-/g, " ").toLowerCase();
    const foundBySlug = Object.keys(courseData).find(k => k.toLowerCase().includes(slugKey));
    if (foundBySlug) return courseData[foundBySlug];

    // fuzzy: check if all words from slug appear in a key
    const slugWords = slugKey.split(/\s+/).filter(Boolean);
    const fuzzy = Object.keys(courseData).find(k => slugWords.every(w => k.toLowerCase().includes(w)));
    if (fuzzy) return courseData[fuzzy];

    return defaultData;
  }, [course.title, course.slug]);
  const defaultFilter = data.categories[0]?.id ?? 'program';
  const [activeFilter, setActiveFilter] = useState<string>(defaultFilter);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Dynamic course navigation can preserve this component's state. If the
  // previous category does not exist for the new course, select its first
  // real category instead of rendering an empty FAQ panel.
  useEffect(() => {
    if (!data.categories.some(category => category.id === activeFilter)) {
      setActiveFilter(defaultFilter);
    }
  }, [activeFilter, data.categories, defaultFilter]);

  const filteredFaqs = data.faqs.filter(faq => faq.category === activeFilter);

  return (
    <>
      {/* FAQPage JSON-LD is rendered on the server by app/courses/[slug]/page.tsx from @/lib/course-faqs */}
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
                  ) :
                    course.title === "Data Engineering Course in Mumbai" ? (
                      <h2 className="text-3xl font-bold mb-4 text-gray-900">
                        Frequently Asked Questions – <span style={{ color: '#16a5db' }}>Data Engineering Course in Mumbai</span>
                      </h2>
                    ) :
                      course.title === "Data Engineering Course in Pune" ? (
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">
                          Frequently Asked Questions – <span style={{ color: '#16a5db' }}>Data Engineering Course in Pune</span>
                        </h2>
                      ) :
                        course.title === "Data Engineering Course in Delhi" ? (
                          <h2 className="text-3xl font-bold mb-4 text-gray-900">
                            Frequently Asked Questions – <span style={{ color: '#16a5db' }}>Data Engineering Course in Delhi</span>
                          </h2>
                        ) :
                          course.title === "Data Engineering Course in Chennai" ? (
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                              Frequently Asked Questions – <span style={{ color: '#16a5db' }}>Data Engineering Course in Chennai</span>
                            </h2>
                          ) :
                            course.title === "Data Analytics With Visualization in Kolkata" ? (
                              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                Frequently Asked Questions – <span style={{ color: '#16a5db' }}>Data Analytics With Visualization in Kolkata</span>
                              </h2>
                            ) :
                              course.title === "Data Analytics With Visualization in Delhi" ? (
                                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                  Frequently Asked Questions – <span style={{ color: '#16a5db' }}>Data Analytics With Visualization in Delhi</span>
                                </h2>
                              )
                                : course.title === "Data Analytics With Visualization in Bangalore" ? (
                                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                    Frequently Asked Questions – <span style={{ color: '#16a5db' }}> Data Science Course in Bangalore</span>
                                  </h2>
                                )
                                  : course.title === "Data Analytics With Visualization in Pune" ? (
                                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                      Frequently Asked Questions – <span style={{ color: '#16a5db' }}> Data Science Course in Pune</span>
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
                                          : course.title === "Generative AI Course in Kolkata" ? (
                                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                              Frequently Asked Questions – <span style={{ color: '#16a5db' }}> Generative AI Course in Kolkata</span>
                                            </h2>
                                          )
                                            : course.title === "Generative AI Course in Delhi" ? (
                                              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                                Frequently Asked Questions – <span style={{ color: '#16a5db' }}> Generative AI Course in Delhi</span>
                                              </h2>
                                            )
                                              : course.title === "Generative AI Course in Bangalore" ? (
                                                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                                  Frequently Asked Questions – <span style={{ color: '#16a5db' }}> Generative AI Course in Bangalore</span>
                                                </h2>
                                              )
                                                : course.title === "Generative AI Course in Mumbai" ? (
                                                  <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                                    Frequently Asked Questions – <span style={{ color: '#16a5db' }}> Generative AI Course in Mumbai</span>
                                                  </h2>
                                                )
                                                  : course.title === "Generative AI Course in Pune" ? (
                                                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                                      Frequently Asked Questions – <span style={{ color: '#16a5db' }}> Generative AI Course in Pune</span>
                                                    </h2>
                                                  )
                                                    : course.title === "Generative AI Course in Chennai" ? (
                                                      <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                                        Frequently Asked Questions – <span style={{ color: '#16a5db' }}> Generative AI Course in Chennai</span>
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

                  <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
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
