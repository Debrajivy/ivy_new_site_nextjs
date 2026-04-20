import React from 'react';
import { Course } from '@/lib/api';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CheckCircle, Users, Award, Briefcase, Brain, TrendingUp, Factory, Zap, Rocket, Target, Linkedin, Layers, BookOpen } from 'lucide-react';
// Existing imports (updated to .webp)
import Lovable from "@/assests/casestudies/lovable.webp";
import Replit from "@/assests/casestudies/Replitai.webp";
import Canva from "@/assests/casestudies/Canva.png";
import Chatgpt from "@/assests/casestudies/Chatgpt.webp";

// New imports for selected items in screenshot
import Adobe from "@/assests/casestudies/Adobe.webp";
import Bolt from "@/assests/casestudies/Bolt.webp";
import Excelai from "@/assests/casestudies/Excelai.webp";
import Freepikai from "@/assests/casestudies/Freepikai.webp";
import Gemini from "@/assests/casestudies/Gemini.webp";
import Googlestudio from "@/assests/casestudies/Googlestudio.webp";
import Notebooklm from "@/assests/casestudies/Notebooklm.webp";
import Pebbeley from "@/assests/casestudies/Pebbely.webp";
import Powerautomate from "@/assests/casestudies/Powerautomate.webp";
import Runway from "@/assests/casestudies/Runway.webp";
import Claude from "@/assests/casestudies/Claude.webp";
import Netlify from "@/assests/casestudies/Netlify.webp";
import N8n from "@/assests/casestudies/N8n.webp";
import Eleven from "@/assests/casestudies/Eleven.webp";
import Image from 'next/image';

interface CourseOverviewProps {
  course: Course;
}

const getAboutCourseTitle = (courseTitle: string) => {
  const knownTitles = [
    "Generative AI Course",
    "Data Science with Machine Learning & AI Certification",
    " Data Engineering Course",
    "Data Science with Machine Learning & AI Certification",
    "Data Analytics and Generative AI Course",
    "Data Analytics With Visualization",
    "Data Analytics and Generative AI Course",
    "Cloud Data Engineering Course with IIT Guwahati",
    "AI for Product Managers"
  ];

  if (knownTitles.includes(courseTitle)) {
    return `What is ${courseTitle} and why should I learn it today?`;
  }

  return "What is Data Science with AI & ML and why should I learn it today?";
};

const getAboutWhatYouWillLearn = (whatYouWillLearn: string) => {
  const knownTitles = [
    "Generative AI Course",
    "Data Science with Machine Learning & AI Certification",
    " Data Engineering Course",
    "Data Science with Machine Learning & AI Certification",
    "Data Analytics and Generative AI Course",
    "Data Analytics With Visualization",
    "Data Analytics and Generative AI Course",
    "Cloud Data Engineering Course with IIT Guwahati",
  ];

  if (knownTitles.includes(whatYouWillLearn)) {
    return `What will I learn in Ivy Pro School ${whatYouWillLearn} course?`;
  }

  return "What is Data Science with AI & ML and why should I learn it today?";
};

const CourseOverview = ({ course }: CourseOverviewProps) => {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ marginTop: 40 }}>
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  What is{" "}
                  {course.title !== "Data science course (Pay after Placement)"
                    ? (
                      <>
                        <span className="text-[#009fda]">{course.title}</span>{" "}
                        and why should I learn it today?
                      </>
                    )
                    : (
                      <>
                        <span className="text-[#009fda]">Data Science Course</span>{" "}
                        and why should I learn it today?
                      </>
                    )
                  }
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {course.longDescription}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">
                  What will I learn in Ivy Pro School{" "}
                  {
                    course.title !== "Data science course (Pay after Placement)" ?
                      <span className="text-[#00a0da]">{course.title} course?</span> : <span className="text-[#00a0da]"> Data Science Course?</span>
                  }
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.outcomes?.map((outcome, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle size={18} style={{ color: '#009fda' }} className="text-ivy-purple mr-2 mt-1 shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {
                course.title === "AI for Entrepreneurs"  || course.title === "AI for Beginners" ?

                  <section className="py-10">
                    <div className="container mx-auto px-4">
                      {/* Section Title */}
                      <h3 className="text-xl font-bold mb-4">
                        Which AI Tools I Will Master in {" "}
                        <span className="text-[#00a0da]">{course.title} course?</span>
                      </h3>

                      {/* Logos Container */}
                      <div style={{ textAlign: 'left', alignItems: 'flex-start', marginTop: 30 }}>
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
                          {[
                            { name: "Lovable", logo: Lovable },
                            { name: "Replit", logo: Replit },
                            { name: "Canva", logo: Canva },
                            { name: "ChatGPT", logo: Chatgpt },
                            { name: "Gemini", logo: Gemini },
                            { name: "Google Studio", logo: Googlestudio },
                            { name: "NotebookLM", logo: Notebooklm },
                            { name: "Pebbeley", logo: Pebbeley },
                            { name: "ExcelAI", logo: Excelai },
                            { name: "Power Automate", logo: Powerautomate },
                            { name: "Adobe Firefly", logo: Adobe },
                            { name: "Bolt AI", logo: Bolt },
                            { name: "Runway", logo: Runway },
                            { name: "Freepik AI", logo: Freepikai },
                            { name: "Claude", logo: Claude },
                            { name: "Netlify", logo: Netlify },
                            { name: "N8n", logo: N8n },
                            { name: "Eleven Labs", logo: Eleven },
                          ].map((tool) => (
                            <div key={tool.name} className="flex items-center group">
                              <Image
                                loading="lazy"
                                width={140}
                                height={45}
                                src={tool.logo}
                                alt={`${tool.name} logo`}
                                className="object-contain opacity-90 hover:opacity-100 transition-all h-7 sm:h-9 lg:h-10 w-auto max-w-[70px] sm:max-w-[90px] lg:max-w-[110px]"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>

                  :
                  null
              }



            </div>

            {course.title === "AI for Entrepreneurs" ?

              <>
                <div className="space-y-6">
                  {/* Instructor Section */}
                  <Card className="border-none shadow-sm bg-white overflow-hidden">
                    <CardContent className="p-5">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/* Compact Image */}
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 border border-orange-400 rounded-full scale-105 opacity-40"></div>
                          <img
                            src={course.instructors?.find(i => i.name === "Prateek Agrawal")?.image}
                            alt="Prateek Agrawal"
                            className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-md relative z-10"
                          />
                        </div>

                        {/* Bio Details */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold text-slate-800">Prateek Agrawal</h3>
                            <a href="https://www.linkedin.com/in/prateekagrawal/" target="_blank" rel="noopener noreferrer">
                              <Linkedin size={16} className="text-[#0A66C2] hover:opacity-80 transition" fill="currentColor" strokeWidth={0} />
                            </a>
                          </div>

                          <p className="text-blue-600 font-semibold text-xs mb-3 uppercase tracking-tight">
                            Director, Ivy Professional School | AI Coach
                          </p>

                          <div className="space-y-2 max-w-xl">
                            <p className="text-orange-600 font-bold text-sm italic border-l-2 border-orange-400 pl-3">
                              "He doesn't just teach AI. He builds with it."
                            </p>
                            <p className="text-slate-500 text-lg leading-normal">
                              Prateek has co-founded <strong>5 ventures</strong> across education, legal tech, mobility and AI —
                              delivering real-world depth in every lesson.
                            </p>
                          </div>

                          {/* Screenshot-style Mini Stats */}
                          <div className="grid grid-cols-3 gap-3 mt-4">
                            <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 text-center">
                              <div className="text-sm font-bold text-slate-800">21+</div>
                              <div className="text-[12px] text-slate-400 font-medium uppercase leading-tight">Years in AI</div>
                            </div>
                            <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 text-center">
                              <div className="text-sm font-bold text-slate-800">37.5k+</div>
                              <div className="text-[12px] text-slate-400 font-medium uppercase leading-tight">Trained</div>
                            </div>
                            <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 text-center">
                              <div className="text-sm font-bold text-slate-800">Top 10</div>
                              <div className="text-[12px] text-slate-400 font-medium uppercase leading-tight">AIM Acad.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Outcome Section */}
                  <div className="bg-slate-50/50 rounded-xl p-5 border border-slate-100">
                    <h2 className="font-bold text-sm mb-4 text-slate-700 flex items-center gap-2">
                      {course.title === "AI for Entrepreneurs" ? <Target size={18} className="text-orange-500" /> : <Briefcase size={18} className="text-blue-500" />}
                      {course.title === "AI for Entrepreneurs" ? "Expected Business Outcomes" : "Career Opportunities"}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4">
                      {course.title === "AI for Entrepreneurs" ? (
                        <>
                          <div className="bg-white p-3 rounded-lg border border-slate-100">
                            <Rocket size={17} className="text-orange-500 mb-2" />
                            <div className="font-bold text-[16px] mb-1">Execution</div>
                            <p className="text-slate-500 text-[16px] leading-snug">5+ AI tools built. Automations live from Day 1.</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg border border-slate-100">
                            <Users size={17} className="text-orange-500 mb-2" />
                            <div className="font-bold text-[16px] mb-1">Community</div>
                            <p className="text-slate-500 text-[16px] leading-snug">Exclusive WhatsApp Network for business owners.</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg border border-slate-100">
                            <TrendingUp size={17} className="text-orange-500 mb-2" />
                            <div className="font-bold text-[16px] mb-1">ROI</div>
                            <p className="text-slate-500 text-[16px] leading-snug">Reduced costs & data-driven inventory decisions.</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-white p-3 rounded-lg border border-slate-100">
                            <Award size={14} className="text-blue-500 mb-2" />
                            <div className="font-bold text-[13px] mb-1">Placement</div>
                            <p className="text-slate-500 text-[11px] leading-snug">94% rate | 4-5 LPA avg | 17k+ jobs in India.</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg border border-slate-100">
                            <Users size={14} className="text-blue-500 mb-2" />
                            <div className="font-bold text-[13px] mb-1">Alumni</div>
                            <p className="text-slate-500 text-[11px] leading-snug">Connect with 17,000+ professionals at F500 firms.</p>
                          </div>
                          <div className="bg-white p-3 rounded-lg border border-slate-100">
                            <Zap size={14} className="text-blue-500 mb-2" />
                            <div className="font-bold text-[13px] mb-1">Industry</div>
                            <p className="text-slate-500 text-[11px] leading-snug">Hiring partners like Google, IBM & Microsoft.</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </>

              :
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Who are the instructors for this course?</h3>
                    <div className="space-y-6">
                      {course.instructors?.map((instructor) => {
                        const linkedInUrl =
                          instructor.name === "Prateek Agrawal"
                            ? "https://www.linkedin.com/in/prateekagrawal/"
                            : instructor.name === "Eeshani Agrawal"
                              ? "https://www.linkedin.com/in/eeshani-agrawal-b674045/"
                              : "#";

                        return (
                          <a
                            key={instructor.id}
                            href={linkedInUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start mb-3 hover:bg-gray-50 rounded-lg p-2 transition"
                          >
                            <img
                              src={instructor.image}
                              alt={instructor.name}
                              className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                              <div className="font-semibold flex items-center">
                                {instructor.name}
                                {/* LinkedIn icon — now just a decorative image inside the same link */}
                                {(instructor.name === "Prateek Agrawal" ||
                                  instructor.name === "Eeshani Agrawal") && (
                                    <svg
                                      className="w-4 h-4 ml-2"
                                      viewBox="0 0 24 24"
                                      fill="#0A66C2"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-label="LinkedIn"
                                    >
                                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                  )}
                                {instructor.isFounder && (
                                  <span className="ml-2 text-xs bg-ivy-orange text-white px-2 py-0.5 rounded-full">
                                    Founder
                                  </span>
                                )}
                                {instructor.isDirector && (
                                  <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                                    Director
                                  </span>
                                )}
                              </div>
                              <div className="text-sm text-gray-500">{instructor.role}</div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>



                <div className="bg-gray-50 rounded-lg p-6">
                  {course.title != "AI for Entrepreneurs" ?
                    <h3 className="font-bold text-lg mb-4">What career opportunities can I expect after this course?</h3>

                    :
                    <h3 className="font-bold text-lg mb-4">What business outcomes can I expect after this course?</h3>

                  }

                  <div className="space-y-4">
                    {(() => {
                      if (course.title === "AI for Entrepreneurs") {
                        /* AI for Entrepreneurs Logic */
                        return (
                          <>
                            <div className="flex items-start">
                              <Zap size={25} className="text-ivy-blue mr-3 mt-1" />
                              <div>
                                <div className="font-medium">Immediate Implementation</div>
                                <p className="text-sm text-gray-600">5+ AI tools built during the program | 90-day roadmap ready to execute | Automations live in your business from Day 1</p>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <Users size={20} className="text-ivy-blue mr-3 mt-1" />
                              <div>
                                <div className="font-medium">Entrepreneur Community</div>
                                <p className="text-sm text-gray-600">Get connected with fellow business owners | Join our exclusive WhatsApp Entrepreneur Community | Lifetime access to resources and updates</p>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <TrendingUp size={25} className="text-ivy-blue mr-3 mt-1" />
                              <div>
                                <div className="font-medium">Business Impact</div>
                                <p className="text-sm text-gray-600">Reduced operational costs | Faster marketing content creation | Data-driven decisions across sales and inventory</p>
                              </div>
                            </div>
                          </>
                        );
                      } else if (course.title === "AI for Beginners") {
                        /* AI for Beginners Logic */
                        return (
                          <>
                            <div className="flex items-start">
                              <BookOpen size={25} className="text-ivy-blue mr-3 mt-1" />
                              <div>
                                <div className="font-medium">AI Portfolio</div>
                                <p className="text-sm text-gray-600">A showcase-ready portfolio of 12+ hands-on AI projects built across 6 weeks</p>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <Layers size={25} className="text-ivy-blue mr-3 mt-1" />
                              <div>
                                <div className="font-medium">AI Community</div>
                                <p className="text-sm text-gray-600">Join our WhatsApp Community and stay connected with peers and instructors beyond the program</p>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <Award size={25} className="text-ivy-blue mr-3 mt-1" />
                              <div>
                                <div className="font-medium">Certificate of Completion</div>
                                <p className="text-sm text-gray-600">Earn an Ivy Professional School Certificate of Completion, reviewed and awarded at the Capstone Showcase</p>
                              </div>
                            </div>
                          </>
                        );
                      } else {
                        /* Standard Course Logic (Default) */
                        return (
                          <>
                            <div className="flex items-start">
                              <Briefcase size={25} className="text-ivy-blue mr-3 mt-1" />
                              <div>
                                <div className="font-medium">Hiring Partners</div>
                                <p className="text-sm text-gray-600"> 94% Placement Rate | 4-5 LPA avg salary | 17,000+ job openings in India</p>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <Users size={20} className="text-ivy-blue mr-3 mt-1" />
                              <div>
                                <div style={{ marginLeft: 1 }} className="font-medium">Alumni Network</div>
                                <p className="text-sm text-gray-600">
                                  Get <a href="https://ivyproschool.com/alumni" target="_blank" rel="noopener noreferrer" className="text-[#00a1db] font-semibold hover:underline">connected with alumni, </a>
                                  Join over <a href="https://chat.whatsapp.com/ImcpUAYaD87FVwce6ZMaYN" target="_blank" rel="noopener noreferrer" className="text-[#00a1db] font-semibold hover:underline">WhatsApp Student Community </a>
                                  and Lifetime <a href="https://youtu.be/HTTMGTCxd0Q?si=__QkZiVlXQM9t8A0" target="_blank" rel="noopener noreferrer" className="text-[#00a1db] font-semibold hover:underline">Placement Assistance</a>
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <Award size={30} className="text-ivy-blue mr-3 mt-1" />
                              <div>
                                <div className="font-medium">Industry Recognition</div>
                                <p className="text-sm text-gray-600">Fortune 500 hiring partners including Google, Microsoft, Accenture, IBM, Oracle, Cognizant</p>
                              </div>
                            </div>
                          </>
                        );
                      }
                    })()}
                  </div>

                  {/* <div className="space-y-4">
                <div className="flex items-start">
                  <Briefcase size={25} className="text-ivy-blue mr-3 mt-1" />
                  <div>
                    <div className="font-medium">Hiring Partners</div>
                    <p className="text-sm text-gray-600"> 94% Placement Rate | 4-5 LPA avg salary | 17,000+ job openings in India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users size={20} className="text-ivy-blue mr-3 mt-1" />
                  <div>
                    <div style={{ marginLeft: 1 }} className="font-medium">Alumni Network</div>
                    <p className="text-sm text-gray-600">

                      Get&nbsp;


                      <a
                        href="https://ivyproschool.com/alumni"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00a1db] font-semibold hover:underline"

                      >
                        connected with alumni,{" "}

                      </a>

                      Join over&nbsp;

                      <a
                        href="https://chat.whatsapp.com/ImcpUAYaD87FVwce6ZMaYN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00a1db] font-semibold hover:underline"
                      >

                        WhatsApp Student Community {" "}

                      </a>

                      and Lifetime&nbsp;


                      <a
                        href="https://youtu.be/HTTMGTCxd0Q?si=__QkZiVlXQM9t8A0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00a1db] font-semibold hover:underline"
                      >

                        Placement Assistance

                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award size={30} className="text-ivy-blue mr-3 mt-1" />
                  <div>
                    <div className="font-medium">Industry Recognition</div>
                    <p className="text-sm text-gray-600">Fortune 500 hiring partners including Google, Microsoft, Accenture, IBM, Oracle, Cognizant</p>
                  </div>
                </div>
              </div> */}
                </div>
              </div>
            }

          </div>
        </div>
      </section>

      {/* BUSINESS IMPACT - FULL WIDTH, OUTSIDE GRID */}
      {course.title === "AI for Entrepreneurs" && (
        <section className="w-full py-20 bg-gradient-to-r from-[#009FDA] to-[#F8A320]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

            {/* Header */}
            <div className="text-center mb-14">
              <p className="text-[#0d2137] font-bold uppercase tracking-widest text-base mb-4">Why Choose This Program</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0d2137] mb-5 leading-tight">
                How AI For Entrepreneurs <br className="hidden lg:block" /> Will Help Your Business?
              </h2>
              <div className="h-1 w-20 bg-[#0d2137] mx-auto rounded-full mb-6"></div>
              <p className="text-lg sm:text-xl text-[#1a3a5c] max-w-2xl mx-auto leading-relaxed">
                Not just another AI course — a program built around your business,
                your industry and your challenges.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

              {/* Card 1 */}
              <div className="relative bg-white rounded-2xl p-7 shadow-lg hover:-translate-y-2 transition-all duration-300 group">
                <div className="absolute top-5 right-5 text-5xl font-black text-[#009FDA]/10 group-hover:text-[#009FDA]/20 transition-colors select-none">01</div>
                <div className="bg-[#009FDA]/15 w-14 h-14 rounded-xl flex items-center justify-center mb-5 border border-[#009FDA]/30">
                  <Users className="w-7 h-7 text-[#009FDA]" />
                </div>
                <h4 className="text-lg font-bold text-[#0d2137] mb-3">You're Not Alone After the Program</h4>
                <p style={{ fontSize: 18 }} className="text-gray-600 text-base leading-relaxed">
                  Most courses end on the last day. Ours doesn't — exclusive entrepreneur community, expert helpdesk and implementation support.
                </p>
                <div className="mt-6 h-0.5 w-10 bg-[#009FDA] rounded-full"></div>
              </div>

              {/* Card 2 */}
              <div className="relative bg-white rounded-2xl p-7 shadow-lg hover:-translate-y-2 transition-all duration-300 group">
                <div className="absolute top-5 right-5 text-5xl font-black text-[#009FDA]/10 group-hover:text-[#009FDA]/20 transition-colors select-none">02</div>
                <div className="bg-[#009FDA]/15 w-14 h-14 rounded-xl flex items-center justify-center mb-5 border border-[#009FDA]/30">
                  <TrendingUp className="w-7 h-7 text-[#009FDA]" />
                </div>
                <h4 className="text-lg font-bold text-[#0d2137] mb-3">AI That Pays For Itself</h4>
                <p style={{ fontSize: 18 }} className="text-gray-600 text-base leading-relaxed">
                  Every tool built during the program directly reduces business costs — ROI often starts before the program even ends.
                </p>
                <div className="mt-6 h-0.5 w-10 bg-[#009FDA] rounded-full"></div>
              </div>

              {/* Card 3 */}
              <div className="relative bg-white rounded-2xl p-7 shadow-lg hover:-translate-y-2 transition-all duration-300 group">
                <div className="absolute top-5 right-5 text-5xl font-black text-[#F8A320]/10 group-hover:text-[#F8A320]/20 transition-colors select-none">03</div>
                <div className="bg-[#F8A320]/15 w-14 h-14 rounded-xl flex items-center justify-center mb-5 border border-[#F8A320]/30">
                  <Factory className="w-7 h-7 text-[#F8A320]" />
                </div>
                <h4 className="text-lg font-bold text-[#0d2137] mb-3">Built For Business Owners</h4>
                <p style={{ fontSize: 18 }} className="text-gray-600 text-base leading-relaxed">
                  Designed after real conversations with manufacturers and traders. We solve the problems real Indian businesses face every day.
                </p>
                <div className="mt-6 h-0.5 w-10 bg-[#F8A320] rounded-full"></div>
              </div>

              {/* Card 4 */}
              <div className="relative bg-white rounded-2xl p-7 shadow-lg hover:-translate-y-2 transition-all duration-300 group">
                <div className="absolute top-5 right-5 text-5xl font-black text-[#F8A320]/10 group-hover:text-[#F8A320]/20 transition-colors select-none">04</div>
                <div className="bg-[#F8A320]/15 w-14 h-14 rounded-xl flex items-center justify-center mb-5 border border-[#F8A320]/30">
                  <Briefcase className="w-7 h-7 text-[#F8A320]" />
                </div>
                <h4 className="text-lg font-bold text-[#0d2137] mb-3">Your Business as the Case Study</h4>
                <p style={{ fontSize: 18 }} className="text-gray-600 text-base leading-relaxed">
                  No hypothetical examples. Your specific business, data, and challenges become the live focus of the program.
                </p>
                <div className="mt-6 h-0.5 w-10 bg-[#F8A320] rounded-full"></div>
              </div>

            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CourseOverview;