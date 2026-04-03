import React from 'react';
import { Course } from '@/lib/api';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CheckCircle, Users, Award, Briefcase, Brain } from 'lucide-react';
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
import Eleven  from "@/assests/casestudies/Eleven.webp";
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
              course.title==="AI for Entrepreneurs" ?
               <section className="py-10">
              <div className="container mx-auto px-4">
                {/* Section Title */}
                <h3 className="text-xl font-bold mb-4">
           Which AI Tools I Will Master in {" "}
               
                    <span className="text-[#00a0da]">{course.title} course?</span> 
            
              </h3>

                {/* Logos Container */}
                <div style={{textAlign:'left', alignItems:'flex-start',marginTop:30}}>
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
                {course.title !== "AI for Entrepreneurs" ? (
                  /* Standard Course Logic */
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
                ) : (
                  /* AI for Entrepreneurs Logic */
                  <>
                    <div className="flex items-start">
                      {/* <div className="text-xl mr-3">🛠️</div> */}
                      <div>
                        <div className="font-medium">Immediate Implementation</div>
                        <p className="text-sm text-gray-600">5+ AI tools built during the program | 90-day roadmap ready to execute | Automations live in your business from Day 1</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      {/* <div className="text-xl mr-3">👥</div> */}
                      <div>
                        <div className="font-medium">Entrepreneur Community</div>
                        <p className="text-sm text-gray-600">Get connected with fellow business owners | Join our exclusive WhatsApp Entrepreneur Community | Lifetime access to resources and updates</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      {/* <div className="text-xl mr-3">🏆</div> */}
                      <div>
                        <div className="font-medium">Business Impact</div>
                        <p className="text-sm text-gray-600">Reduced operational costs | Faster marketing content creation | Data-driven decisions across sales, inventory and customer behaviour</p>
                      </div>
                    </div>
                  </>
                )}
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
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;