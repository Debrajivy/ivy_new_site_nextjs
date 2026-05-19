"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Course } from '@/lib/api';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Clock, FileText, CheckCircle, X, LayoutDashboard, Plus, Sparkles, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from "@/components/ui/button"
import { Bot, Send, MessageSquare, Phone } from "lucide-react"
import AdityaKumarBarikImg from '@/assests/alumni/AdityaKumarBarik.webp';
import AdityaKumarBarikCurImg from '@/assests/company/AdityaKumarBarikCur.webp';
import TanmayChakrabortyImg from '@/assests/alumni/TanmayChakraborty.webp';
import TanmayChakrabortyCurImg from '@/assests/company/TanmayChakrabortyCur.webp';
import TaniaLahaImg from '@/assests/alumni/TaniaLaha.webp';
import TaniaLahaCurImg from '@/assests/company/TaniaLahaCur.webp';
import SatyajitPramanikImg from '@/assests/alumni/SatyajitPramanik.webp';
import SatyajitPramanikCurImg from '@/assests/company/SatyajitPramanikCur.webp';

interface CourseCurriculumProps {
  course: Course;
}

const CourseCurriculum = ({ course }: CourseCurriculumProps) => {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [showNumber, setShowNumber] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showApplyModal, setShowApplyModal] = useState(false)
  const [showAllComparison, setShowAllComparison] = useState(false)
  const [showAllDeComparison, setShowAllDeComparison] = useState(false)
  const [showAllAiEntreComparison, setShowAllAiEntreComparison] = useState(false)
  const [showAllAiPmComparison, setShowAllAiPmComparison] = useState(false)
  const [showAllGenAiComparison, setShowAllGenAiComparison] = useState(false)
  const [showAllAiMlComparison, setShowAllAiMlComparison] = useState(false)
  const [showAllDaGenAiComparison, setShowAllDaGenAiComparison] = useState(false)
  const [showAllDaVizComparison, setShowAllDaVizComparison] = useState(false)


  const handleApplyClick = useCallback(() => {
    setShowApplyModal(true)
  }, [])

  const ApplyNowModal = ({ onClose }: { onClose: () => void }) => {
    useEffect(() => {
      // This is the container element where the iframe will be added
      const iframeContainer = document.getElementById('iframe-container');

      if (iframeContainer) {
        // Clear any previous content
        iframeContainer.innerHTML = '';

        // Create the iframe element
        const iframe = document.createElement('iframe');
        iframe.name = "leadsquared_landing_page_frame";
        iframe.src = "https://ivyproschool.viewpage.co/IVY?ignoremxtracking=mxtrue";
        iframe.width = "100%"; // Use percentage for responsiveness
        iframe.height = "100%"; // Use percentage for responsiveness
        iframe.frameBorder = "0";
        iframe.marginWidth = "0";
        iframe.marginHeight = "0";
        iframe.scrolling = "no";
        iframe.style.border = "none";

        // Append the iframe to the container
        iframeContainer.appendChild(iframe);

        // Create and append the script element
        const script = document.createElement('script');
        script.type = "text/javascript";
        script.innerHTML = "var MXLandingPageId = '2c296ae6-63a9-11f0-aa4a-06f2115baecb';";
        iframeContainer.appendChild(script);
      }
    }, []);

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} />
        <div className="relative z-10 w-full max-w-sm h-[80vh] md:h-[600px] flex flex-col">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 transition-colors z-20"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
          <div id="iframe-container" className="bg-white rounded-xl shadow-xl p-6 h-full w-full" />
        </div>
      </div>
    );
  };
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
    }
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  if (!course.curriculum || course.curriculum.length === 0) {
    return null;
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '919748441111';
    const defaultMessage = "Hello! I would like to schedule a phone call with a human career advisor from Ivy Professional School. Please provide available time slots.";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const encodedMessage = encodeURIComponent(defaultMessage);

    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      window.location.href = `tel:7676882222`;
    }
  };




  const pricingDetails: Record<string, { courseFee: number; registration: number; emi: number; months: number }> = {
    'Data Analytics With Visualization': { courseFee: 42000, registration: 10000, emi: 3556, months: 9 },
    'AI for Beginners': { courseFee: 10000, registration: 10000, emi: 3556, months: 9 },
    'Data Analytics and Generative AI Course': { courseFee: 41000, registration: 10000, emi: 3445, months: 9 },
    'Data Science with Machine Learning & AI Certification': { courseFee: 56000, registration: 10000, emi: 5111, months: 9 },
    'Data Science with Machine Learning & AI Course in Delhi': { courseFee: 56000, registration: 10000, emi: 5111, months: 9 },
    'Data Science with Machine Learning & AI Course in Kolkata': { courseFee: 56000, registration: 10000, emi: 5111, months: 9 },
    'Data Science with Machine Learning & AI Course in Pune': { courseFee: 56000, registration: 10000, emi: 5111, months: 9 },
    'Data Science with Machine Learning & AI Course in Chennai': { courseFee: 56000, registration: 10000, emi: 5111, months: 9 },
    'Data Science with Machine Learning & AI Course in Mumbai': { courseFee: 56000, registration: 10000, emi: 5111, months: 9 },
    // Removed duplicate 'Data Analytics and Generative AI Course' key to fix error
    ' Data Engineering Course': { courseFee: 58500, registration: 10000, emi: 5389, months: 9 },
    'AI for Entrepreneurs': { courseFee: 35900, registration: 14950, emi: 5389, months: 9 },
    'Data Engineering Course in Kolkata': { courseFee: 58500, registration: 10000, emi: 5389, months: 9 },
    'Data Engineering Course in Delhi': { courseFee: 58500, registration: 10000, emi: 5389, months: 9 },
    'Data Engineering Course in Bangalore': { courseFee: 58500, registration: 10000, emi: 5389, months: 9 },
    'Data Engineering Course in Mumbai': { courseFee: 58500, registration: 10000, emi: 5389, months: 9 },
    'Data Engineering Course in Pune': { courseFee: 58500, registration: 10000, emi: 5389, months: 9 },
    'Data Engineering Course in Chennai': { courseFee: 58500, registration: 10000, emi: 5389, months: 9 },
    'Data Analytics With Visualization in Kolkata': { courseFee: 42000, registration: 10000, emi: 3556, months: 9 },
    'Data Analytics With Visualization in Delhi': { courseFee: 42000, registration: 10000, emi: 3556, months: 9 },
    'Data Analytics With Visualization in Bangalore': { courseFee: 42000, registration: 10000, emi: 3556, months: 9 },
    'Data Analytics With Visualization in Mumbai': { courseFee: 42000, registration: 10000, emi: 3556, months: 9 },
    'Data Analytics With Visualization in Pune': { courseFee: 42000, registration: 10000, emi: 3556, months: 9 },
    'Generative AI Course': { courseFee: 69000, registration: 10000, emi: 6556, months: 9 },
    'Generative AI Course in Kolkata': { courseFee: 69000, registration: 10000, emi: 6556, months: 9 },
    'Generative AI Course in Delhi': { courseFee: 69000, registration: 10000, emi: 6556, months: 9 },
    'Generative AI Course in Bangalore': { courseFee: 69000, registration: 10000, emi: 6556, months: 9 },
    'Generative AI Course in Mumbai': { courseFee: 69000, registration: 10000, emi: 6556, months: 9 },
    'Generative AI Course in Pune': { courseFee: 69000, registration: 10000, emi: 6556, months: 9 },
    'AI for Product Managers': { courseFee: 29000, registration: 10000, emi: 9500, months: 2 },
    'AI and Machine Learning Course': { courseFee: 39000, registration: 10000, emi: 3223, months: 9 },
    'Data science course (Pay after Placement)': { courseFee: 135000, registration: 10000, emi: 13890, months: 9 },

  };

  return (
    <section style={{ marginTop: -30, paddingBottom: 20 }} className="bg-gray-50">
      {/* Main Curriculum Content */}
      <div className="container mx-auto px-4">


        <div className="max-w-3xl mx-auto">


          <div style={{ paddingTop: 20 }} className="text-center mb-12">
            <h2 className="text-xl font-bold mb-4">
              Which tools will I learn in
              {
                course.title === "Data Engineering Course in Kolkata"
                  ? " Data Engineering Course in Kolkata?"
                  : course.title === "Data science course (Pay after Placement)"
                    ? " Data Science Course?"
                    : (
                      <>
                        {" "}
                        <span style={{ color: '#16a5db' }}>{course.title}</span> course?
                      </>
                    )
              }
            </h2>

            {course.title != "Data Science Course in Kolkata" ?
              <p className="text-gray-600">
                Comprehensive, structured learning path designed by industry experts
              </p>
              :
              <p className="text-gray-600">
                The curriculum is carefully designed to move from fundamentals to advanced concepts in a structured manner:              </p>}



          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{course.curriculum.length}
                    {
                      course.curriculum.length === 1 ? "  Module" : " Modules"
                    }

                  </h3>
                  <p className="text-gray-500 text-sm">
                    {/* {course.curriculum.reduce((total: any, module: any) => {
                      return total + module.topics.length;
                    }, 0)} Lessons */}
                  </p>
                </div>
                <div className="flex items-center">
                  {/* <Clock size={18} className="mr-2 text-gray-500" /> */}
                  {/* <span className="text-gray-500">{course.duration} total</span> */}
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {course.curriculum.map((module: any, index: any) => (
                <AccordionItem key={module.id} value={module.id}>
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 no-underline hover:no-underline">
                    <div className="flex items-center">
                      <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                        {index + 1}
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold no-underline hover:no-underline">{module.title}</h4>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Clock size={14} className="mr-1" />
                          <span className="no-underline hover:no-underline">{module.duration}</span>

                          <span className="mx-2">•</span>

                          <FileText size={14} className="mr-1" />
                          <span className="no-underline hover:no-underline">
                            {module.topics.filter((t: any) => t.id.startsWith('t')).length} lessons
                          </span>

                          {/* Conditional Project Logic */}
                          {(() => {
                            const projectCount = module.topics.filter((t: any) => t.id.startsWith('p')).length;
                            if (projectCount > 0) {
                              return (
                                <>
                                  <span className="mx-2">•</span>
                                  <LayoutDashboard size={14} className="mr-1 text-[#013a81]" />
                                  <span className="no-underline hover:no-underline text-[#013a81] font-medium">
                                    {projectCount} {projectCount === 1 ? 'Project' : 'Projects'}
                                  </span>
                                </>
                              );
                            }
                            return null;
                          })()}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="bg-white">
                    <div className="px-6 pt-2 pb-6">
                      <ul className="space-y-1">
                        {module.topics.map((topic: any) => {
                          const isProject = topic.id.startsWith('p') || topic.title.startsWith('Project:');

                          return (
                            <li
                              key={topic.id}
                              className={`flex justify-between items-start py-3 border-b border-gray-50 last:border-0 ${isProject ? "bg-blue-50/40 rounded-lg px-4 my-2 border-none" : ""
                                }`}
                            >
                              <div className="flex items-start w-full">
                                {isProject ? (
                                  <LayoutDashboard size={18} className="text-[#013a81] mr-3 mt-1 flex-shrink-0" />
                                ) : (
                                  <CheckCircle size={18} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                                )}

                                <div className="text-gray-700 leading-relaxed text-sm md:text-base flex-grow">
                                  {isProject ? (
                                    <>
                                      <span className="font-bold text-[#013a81] mr-1">Project:</span>
                                      {topic.title.replace('Project:', '').trim()}
                                    </>
                                  ) : (
                                    topic.title
                                  )}

                                  {topic.isAdvanced && (
                                    <Badge variant="outline" className="ml-2 text-[10px] bg-white text-blue-600 border-blue-200">
                                      ADVANCED
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>

                      {/* SPECIFIC PREPAI RESUME BUILDER SECTION */}
                      {course.title === "Data Science with Machine Learning & AI Certification" &&
                        module.title === "CV Building" && (
                          <div className="mt-8 p-6 rounded-2xl border border-orange-100 bg-orange-50/30 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                              <div className="bg-white p-3 rounded-xl shadow-sm border border-orange-100">
                                <Sparkles className="text-orange-500" size={24} />
                              </div>
                              <div>
                                <h5 className="font-bold text-gray-900 text-lg">AI Resume Builder</h5>
                                <p className="text-sm text-gray-600">Build a high-impact, ATS-friendly resume in minutes.</p>
                              </div>
                            </div>

                            <a
                              href="https://prepai.ivyproschool.com/ai/resume"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white transition-all shadow-lg hover:shadow-orange-200 active:scale-95 whitespace-nowrap text-base"
                              style={{
                                background: 'linear-gradient(90deg, #FF6B00 0%, #D1458A 50%, #9B30FF 100%)'
                              }}
                            >
                              <Plus size={20} strokeWidth={3} />
                              Build Your Resume Now
                              <ExternalLink size={16} className="ml-1 opacity-70" />
                            </a>
                          </div>
                        )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Desktop Pricing Section - Below Curriculum */}
          <div className="w-full bg-gray-50 py-8">
            {/* Heading Section */}
            <div className="container mx-auto px-4">
              {/* <h2 className="text-2xl font-bold mb-4 text-center">Is the Ivy Pro School <span className="text-[#00a0da]">{course.title}</span> course fee affordable?</h2> */}

              {course.title !== "Data science course (Pay after Placement)"
                ? (
                  <>
                    <h2 className="text-2xl font-bold mb-4 text-center">Is the Ivy Pro School <span className="text-[#00a0da]">{course.title}</span> course fee affordable?</h2>

                  </>
                )
                : (
                  <>
                    <h2 className="text-2xl font-bold mb-4 text-center">Is the Ivy Pro School <span className="text-[#00a0da]">Data Science</span> course fee affordable?</h2>

                  </>
                )
              }


            </div>
            {/* Pricing Card - Full Width */}
            <div className="container mx-auto px-4">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 w-full max-w-4xl mx-auto">
                {/* Premium Pricing Badge */}
                {/* <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  BEST VALUE
                </div> */}

                {/* Main Pricing Content */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - Best Offer */}
                  <div className="space-y-6">
                    {(() => {
                      const price = pricingDetails[course.title];
                      if (!price) return null;

                      return (
                        <div style={{ backgroundColor: '#009fda' }} className="p-4 rounded-lg text-white">
                          <div className="text-center">
                            <p className="text-4xl font-bold">₹{price.courseFee.toLocaleString()}</p>
                            <p className="text-sm mt-1 opacity-90">+ GST applicable</p>
                          </div>
                        </div>
                      );
                    })()}


                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-800">What's included:</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <CheckCircle className="text-blue-500 mr-2 h-5 w-5" />
                          {course.title === "AI for Beginners" ? <span>Complete program access</span> : <span>Complete course access</span>}

                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="text-blue-500 mr-2 h-5 w-5" />
                          {course.title === "AI for Beginners" ? <span>Ivy Professional School Certificate of Completion</span> : <span>Industry-recognized certification</span>}


                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="text-blue-500 mr-2 h-5 w-5" />
                          {course.title === "AI for Beginners" ? <span>Capstone Showcase + personalized portfolio feedback</span> : <span>Career support services</span>}
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Column - Payment Options */}
                  {(() => {
                    const details = pricingDetails[course.title];
                    if (!details) return null;

                    return (
                      <div className="space-y-6">
                        {/* EMI Option */}

                        {
                          course.title === "Data science course (Pay after Placement)" ?

                            <>
                              <h3 className="text-lg font-semibold text-gray-800 mb-2">No Upfront Tuition Fees</h3>

                              <span className="text-sm font-medium text-gray-700">No Placement within 1 Year at ₹4LPA? You pay nothing.</span>

                              <p className="text-xs text-gray-500">Pay 17.5% of your monthly salary for upto 36 months, capped at ₹1,35,000+GST</p>

                            </>
                            :
                            <>

                              <div className="bg-blue-50 p-4 rounded-lg">
                                {
                                  course.title != "AI for Beginners" ?
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Flexible Payment Options</h3>
                                    :
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Merit-Based Discount Available</h3>

                                }
                                <div className="space-y-3">
                                  {
                                    course.title != "AI for Beginners" ?
                                      <span className="text-sm font-medium text-gray-700">Installment available</span>

                                      :
                                      null
                                  }
                                </div>
                              </div>
                            </>
                        }





                        {/* Registration Fee */}

                        {
                          course.title != "AI for Product Managers" ?

                            <div className="border border-gray-200 p-4 rounded-lg">
                              <div className="flex justify-between items-center">
                                {
                                  course.title != "AI for Beginners" ?
                                    <span className="text-sm font-medium text-gray-700">Registration Fee</span>
                                    :
                                    <span className="text-sm font-medium text-gray-700">Discounted Fee</span>
                                }
                                {
                                  course.title != "AI for Beginners" ?
                                    <span className="text-lg font-semibold">₹{details.registration.toLocaleString()} <span className="text-xs"> + GST</span></span>
                                    :
                                    <span className="text-lg font-semibold">₹8,500 <span className="text-xs"> + GST</span></span>
                                }
                              </div>
                              {
                                course.title != "AI for Beginners" ?
                                  <p className="text-xs text-gray-500 mt-1">or pay full amount upfront</p>
                                  :
                                  <p className="text-xs text-gray-500 mt-1">Students who scored above 80% in their last completed class</p>

                              }
                            </div>
                            :

                            null
                        }

                        {/* CTA Button */}
                        <button
                          style={{ backgroundColor: '#009fda' }}
                          className="w-full bg-gradient-to-r text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                          onClick={handleApplyClick}
                        >
                          Register Now
                        </button>
                      </div>
                    );
                  })()}

                </div>
              </div>
              {/* New Section for 'Fees seem higher?' */}
              <div className="mt-8 text-center w-full max-w-4xl mx-auto">

                {
                  course.title === "AI for Beginners" ? (
                    <h3 className="text-lg font-semibold text-gray-800">
                      For Early Registration and Consultation
                    </h3>
                  ) : course.title !== "AI for Entrepreneurs" ? (
                    <h3 className="text-lg font-semibold text-gray-800">
                      Fees seems higher? Pick your own module.
                    </h3>
                  ) : null
                }

                <Button
                  style={{ backgroundColor: '#009fda' }}
                  className="mt-4 px-6 py-3 rounded-lg text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
                  onClick={() => setShowContactOptions(!showContactOptions)}
                >
                  {
                      course.title != "AI for Entrepreneurs" && course.title !== "AI for Beginners" ?
                        "Pick your own customized course"
                        :
                        "Book your call with our counsellor"
                    }
                </Button>

                {showContactOptions && (
                  <div className=" mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 animate-fade-in sm:left-auto sm:right-auto sm:w-auto">
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="bg-green-600 hover:bg-green-700 text-white"
                        onClick={handleWhatsAppClick}
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Enquire on WhatsApp
                      </Button>

                      <Button
                        variant="outline"
                        onClick={handleCallClick}
                        className="flex items-center justify-center"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        {/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? (
                          "Call Now"
                        ) : (
                          <>
                            Call: <span className="ml-1 font-mono">7676882222</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}

                {showApplyModal && (
                  <ApplyNowModal onClose={() => setShowApplyModal(false)} />
                )}
                {showNumber && !isMobile && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-50 animate-fade-in">
                    <div className="text-center">
                      <p className="text-gray-700 font-medium">Call us at:</p>
                      <a
                        href="tel:7676882222"
                        className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        7676882222
                      </a>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
                  </div>
                )}
              </div>

              {/* Comparison Section - Data Science with ML & AI only */}
              {course.title === "Data Science with Machine Learning & AI Certification" && (
                <div className="mt-14 w-full max-w-4xl mx-auto">
                  {/* Section Header */}
                  <div className="text-center mb-8">
                    <span className="inline-block bg-blue-100 text-[#009fda] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
                      Why Choose Us
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                      Ivy Professional School{" "}
                      <span className="text-[#009fda]">vs</span>{" "}
                      <span className="text-gray-500">Other Institutes</span>
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                      See why serious learners choose Ivy Pro School for their Data Science, ML &amp; AI journey
                    </p>
                  </div>

                  {/* Table */}
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    {/* Header Row */}
                    <div className="grid grid-cols-[1fr_1.4fr_1.2fr] text-sm font-bold">
                      <div className="bg-gray-700 text-white p-4 flex items-center">
                        Comparison Factor
                      </div>
                      <div className="bg-[#009fda] text-white p-4 flex items-center justify-center gap-2 text-center">
                        <span>Ivy Professional School</span>
                        <span className="hidden sm:inline-block text-[10px] bg-white/20 px-2 py-0.5 rounded-full whitespace-nowrap">
                          ★ Recommended
                        </span>
                      </div>
                      <div className="bg-gray-500 text-white p-4 flex items-center justify-center text-center">
                        Typical Institutes
                      </div>
                    </div>

                    {/* Data Rows */}
                    {[
                      {
                        factor: "Course Focus",
                        ivy: "Covers Data Science, Machine Learning, AI, analytics thinking, and real business problem-solving",
                        others: "Often focuses mainly on tools, coding syntax, or theory",
                      },
                      {
                        factor: "Learning Approach",
                        ivy: "Practical, project-based learning with real datasets, case studies, and industry-style assignments",
                        others: "Many programs remain lecture-heavy with limited application",
                      },
                      {
                        factor: "Machine Learning Depth",
                        ivy: "Builds understanding of ML models, model evaluation, feature engineering, and practical implementation",
                        others: "ML may be taught conceptually without enough hands-on practice",
                      },
                      {
                        factor: "AI Readiness",
                        ivy: "Includes modern AI and GenAI awareness so learners stay aligned with the evolving job market",
                        others: "AI topics may be outdated or treated as optional add-ons",
                      },
                      {
                        factor: "Career Orientation",
                        ivy: "Designed for freshers, working professionals, and career switchers who want job-ready skills",
                        others: "Often designed as a generic certification program",
                      },
                      {
                        factor: "Project Portfolio",
                        ivy: "Learners work on projects that can be added to resumes, LinkedIn profiles, and interview discussions",
                        others: "Projects may be too basic or not portfolio-worthy",
                      },
                      {
                        factor: "Placement Support",
                        ivy: "Resume building, mock interviews, LinkedIn optimization, career guidance, and placement assistance",
                        others: "Placement support may be limited to job postings or basic guidance",
                      },
                      {
                        factor: "Certification Value",
                        ivy: "Positioned with NASSCOM and IIT certification benefits on the Data Science course page",
                        others: "Certification credibility varies widely across institutes",
                      },
                      {
                        factor: "1:1 Doubt Clearing Support",
                        ivy: "Learners get personalized 1:1 doubt-clearing sessions with teaching assistants to resolve coding, project, and concept-related doubts",
                        others: "Doubt support may be limited to group sessions, chat replies, or trainer availability",
                      },
                      {
                        factor: "Mentor & Academic Support",
                        ivy: "Learners receive structured academic and career support throughout the journey",
                        others: "Support may reduce after enrollment or vary by batch",
                      },
                      {
                        factor: "Business Use Case Orientation",
                        ivy: "Strong focus on solving business problems using data, ML, and AI",
                        others: "Many institutes teach tools without connecting them to business decisions",
                      },
                      {
                        factor: "Best Suited For",
                        ivy: "Learners who want a serious career transition into Data Science, ML, AI, and analytics roles",
                        others: "Learners looking only for a basic certificate or introductory exposure",
                      },
                    ]
                      .slice(0, showAllComparison ? 12 : 4)
                      .map((row, index) => (
                        <div
                          key={index}
                          className={`grid grid-cols-[1fr_1.4fr_1.2fr] text-sm border-t border-gray-100 ${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50/70"
                          }`}
                        >
                          <div className="p-4 font-semibold text-gray-800 border-r border-gray-100 flex items-start leading-snug">
                            {row.factor}
                          </div>
                          <div className="p-4 text-gray-700 border-r border-gray-100 flex items-start gap-2 leading-relaxed">
                            <CheckCircle
                              size={15}
                              className="text-green-500 flex-shrink-0 mt-0.5"
                            />
                            <span>{row.ivy}</span>
                          </div>
                          <div className="p-4 text-gray-500 flex items-start gap-2 leading-relaxed">
                            <X
                              size={15}
                              className="text-amber-400 flex-shrink-0 mt-0.5"
                            />
                            <span>{row.others}</span>
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* View All / Hide toggle */}
                  <div className="mt-3 text-center">
                    <button
                      onClick={() => setShowAllComparison(!showAllComparison)}
                      className="inline-flex items-center gap-2 text-[#009fda] text-sm font-semibold hover:underline transition-all"
                    >
                      {showAllComparison ? (
                        <>
                          <X size={15} /> Hide
                        </>
                      ) : (
                        <>
                          <Plus size={15} /> View All 12 Factors
                        </>
                      )}
                    </button>
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-6 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                      Ready to make the right choice for your career?
                    </p>
                    <button
                      style={{ backgroundColor: "#009fda" }}
                      className="px-8 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                      onClick={handleApplyClick}
                    >
                      Enroll at Ivy Professional School
                    </button>
                  </div>
                </div>
              )}

            
              {/* Comparison Section - Data Engineering courses only */}
              {course.title.includes("Data Engineering") && (
                <div className="mt-14 w-full max-w-4xl mx-auto">
                  {/* Section Header */}
                  <div className="text-center mb-8">
                    <span className="inline-block bg-blue-100 text-[#009fda] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
                      Why Choose Us
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                      Ivy Professional School{" "}
                      <span className="text-[#009fda]">vs</span>{" "}
                      <span className="text-gray-500">Other Institutes</span>
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                      See why serious learners choose Ivy Pro School for their Data Engineering journey
                    </p>
                  </div>

                  {/* Table */}
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    {/* Header Row */}
                    <div className="grid grid-cols-[1fr_1.4fr_1.2fr] text-sm font-bold">
                      <div className="bg-gray-700 text-white p-4 flex items-center">
                        Comparison Factor
                      </div>
                      <div className="bg-[#009fda] text-white p-4 flex items-center justify-center gap-2 text-center">
                        <span>Ivy Professional School</span>
                        <span className="hidden sm:inline-block text-[10px] bg-white/20 px-2 py-0.5 rounded-full whitespace-nowrap">
                          ★ Recommended
                        </span>
                      </div>
                      <div className="bg-gray-500 text-white p-4 flex items-center justify-center text-center">
                        Typical Institutes
                      </div>
                    </div>

                    {/* Data Rows */}
                    {[
                      {
                        factor: "Course Focus",
                        ivy: "Focuses on data pipelines, databases, ETL, cloud concepts, big data workflows, and real data engineering use cases",
                        others: "Often focuses only on SQL or isolated tools without full pipeline thinking",
                      },
                      {
                        factor: "Practical Orientation",
                        ivy: "Learners work on hands-on workflows involving data extraction, transformation, loading, and analysis-ready data preparation",
                        others: "Many courses stay theoretical or tool-demo based",
                      },
                      {
                        factor: "Industry Relevance",
                        ivy: "Designed around the growing demand for professionals who can prepare, move, clean, and manage data for analytics and AI systems",
                        others: "Curriculum may not reflect the latest data engineering expectations",
                      },
                      {
                        factor: "SQL & Database Foundation",
                        ivy: "Builds strong SQL, data modeling, and database understanding for real-world data environments",
                        others: "SQL may be taught only at a query-writing level",
                      },
                      {
                        factor: "ETL & Pipeline Thinking",
                        ivy: "Emphasizes how data moves from source systems to warehouses, dashboards, and analytics teams",
                        others: "Many institutes teach tools separately without explaining end-to-end flow",
                      },
                      {
                        factor: "Cloud & Modern Stack Exposure",
                        ivy: "Introduces learners to modern data engineering practices, cloud-based thinking, and scalable data workflows",
                        others: "Cloud exposure may be limited or missing",
                      },
                      {
                        factor: "Project Portfolio",
                        ivy: "Learners build projects that demonstrate pipeline logic, data transformation, and business-ready datasets",
                        others: "Projects may be too academic or not aligned with employer expectations",
                      },
                      {
                        factor: "Placement Support",
                        ivy: "Includes resume support, mock interviews, career guidance, and placement assistance for data engineering roles",
                        others: "Placement support may be generic and not role-specific",
                      },
                      {
                        factor: "Role Clarity",
                        ivy: "Helps learners understand how Data Engineering differs from Data Analytics and Data Science",
                        others: "Many institutes mix topics without clarifying the career path",
                      },
                      {
                        factor: "1:1 Doubt Clearing Support",
                        ivy: "Learners get personalized 1:1 doubt-clearing sessions with teaching assistants to resolve SQL, ETL, pipeline, database, cloud, and project-related doubts",
                        others: "Doubt support may be limited to group sessions, delayed chat replies, or trainer availability",
                      },
                      {
                        factor: "Support System",
                        ivy: "Academic and career support help learners handle technical topics step by step",
                        others: "Learners may be expected to self-manage difficult technical areas",
                      },
                      {
                        factor: "Business Application",
                        ivy: "Connects data engineering to reporting, dashboards, analytics, AI, and enterprise decision-making",
                        others: "Courses may focus only on technical commands without business context",
                      },
                      {
                        factor: "Best Suited For",
                        ivy: "Learners who want to build a career in data pipelines, SQL, ETL, cloud data workflows, and backend analytics systems",
                        others: "Learners looking only for basic SQL or tool-level training",
                      },
                    ]
                      .slice(0, showAllDeComparison ? 13 : 4)
                      .map((row, index) => (
                        <div
                          key={index}
                          className={`grid grid-cols-[1fr_1.4fr_1.2fr] text-sm border-t border-gray-100 ${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50/70"
                          }`}
                        >
                          <div className="p-4 font-semibold text-gray-800 border-r border-gray-100 flex items-start leading-snug">
                            {row.factor}
                          </div>
                          <div className="p-4 text-gray-700 border-r border-gray-100 flex items-start gap-2 leading-relaxed">
                            <CheckCircle
                              size={15}
                              className="text-green-500 flex-shrink-0 mt-0.5"
                            />
                            <span>{row.ivy}</span>
                          </div>
                          <div className="p-4 text-gray-500 flex items-start gap-2 leading-relaxed">
                            <X
                              size={15}
                              className="text-amber-400 flex-shrink-0 mt-0.5"
                            />
                            <span>{row.others}</span>
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* View All / Hide toggle */}
                  <div className="mt-3 text-center">
                    <button
                      onClick={() => setShowAllDeComparison(!showAllDeComparison)}
                      className="inline-flex items-center gap-2 text-[#009fda] text-sm font-semibold hover:underline transition-all"
                    >
                      {showAllDeComparison ? (
                        <>
                          <X size={15} /> Hide
                        </>
                      ) : (
                        <>
                          <Plus size={15} /> View All 13 Factors
                        </>
                      )}
                    </button>
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-6 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                      Ready to make the right choice for your career?
                    </p>
                    <button
                      style={{ backgroundColor: "#009fda" }}
                      className="px-8 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                      onClick={handleApplyClick}
                    >
                      Enroll at Ivy Professional School
                    </button>
                  </div>
                </div>
              )}

              {/* Comparison Section - AI for Entrepreneurs only */}
              {course.title === "AI for Entrepreneurs" && (
                <div className="mt-14 w-full max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <span className="inline-block bg-blue-100 text-[#009fda] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
                      Why Choose Us
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                      Ivy Professional School{" "}
                      <span className="text-[#009fda]">vs</span>{" "}
                      <span className="text-gray-500">Other Institutes</span>
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                      See why serious learners choose Ivy Pro School for their AI for Entrepreneurs journey
                    </p>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <div className="grid grid-cols-[1fr_1.4fr_1.2fr] text-sm font-bold">
                      <div className="bg-gray-700 text-white p-4 flex items-center">
                        Comparison Factor
                      </div>
                      <div className="bg-[#009fda] text-white p-4 flex items-center justify-center gap-2 text-center">
                        <span>Ivy Professional School</span>
                        <span className="hidden sm:inline-block text-[10px] bg-white/20 px-2 py-0.5 rounded-full whitespace-nowrap">
                          ★ Recommended
                        </span>
                      </div>
                      <div className="bg-gray-500 text-white p-4 flex items-center justify-center text-center">
                        Typical Institutes
                      </div>
                    </div>

                    {[
                      {
                        factor: "Course Focus",
                        ivy: "Focuses on practical AI adoption for business owners and entrepreneurs to automate, scale, and grow their ventures",
                        others: "Often teaches general AI theory without connecting it to real business outcomes",
                      },
                      {
                        factor: "Entrepreneurial AI Application",
                        ivy: "Covers how to use AI for marketing, sales, customer service, product development, and operational efficiency",
                        others: "May cover AI tools without explaining how to apply them in a business context",
                      },
                      {
                        factor: "Practical Use Cases",
                        ivy: "Includes real-world business scenarios, case studies, and hands-on implementation workshops",
                        others: "Content may be theoretical or not aligned with real business challenges",
                      },
                      {
                        factor: "No-Code & Low-Code AI Tools",
                        ivy: "Teaches entrepreneurs to leverage no-code AI tools to build solutions without deep technical expertise",
                        others: "May focus on technical programming skills that are not accessible to non-developers",
                      },
                      {
                        factor: "Business Strategy Integration",
                        ivy: "Helps learners build an AI roadmap, identify AI opportunities, and make data-driven decisions for their business",
                        others: "May not connect AI capabilities with strategic business planning",
                      },
                      {
                        factor: "Cost & ROI Awareness",
                        ivy: "Trains learners to evaluate AI tool costs, vendor selection, and return on investment for their specific use case",
                        others: "Cost optimization and vendor assessment may not be covered",
                      },
                      {
                        factor: "Automation & Efficiency",
                        ivy: "Covers workflow automation, AI-powered customer engagement, and productivity tools for small and growing businesses",
                        others: "May focus only on large enterprise AI applications",
                      },
                      {
                        factor: "1:1 Doubt Clearing Support",
                        ivy: "Learners get personalized 1:1 doubt-clearing sessions to resolve doubts related to tool selection, AI implementation, business workflows, and automation strategies",
                        others: "Doubt support may be limited to group sessions or community replies",
                      },
                      {
                        factor: "Mentorship & Peer Network",
                        ivy: "Includes mentorship, peer networking, and business-focused guidance for entrepreneurs at every stage",
                        others: "Career support may be designed for job seekers rather than business builders",
                      },
                      {
                        factor: "Best Suited For",
                        ivy: "Business owners, founders, entrepreneurs, consultants, and professionals who want to leverage AI for business growth",
                        others: "Learners looking only for general AI awareness or technical programming knowledge",
                      },
                    ]
                      .slice(0, showAllAiEntreComparison ? 10 : 4)
                      .map((row, index) => (
                        <div
                          key={index}
                          className={`grid grid-cols-[1fr_1.4fr_1.2fr] text-sm border-t border-gray-100 ${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50/70"
                          }`}
                        >
                          <div className="p-4 font-semibold text-gray-800 border-r border-gray-100 flex items-start leading-snug">
                            {row.factor}
                          </div>
                          <div className="p-4 text-gray-700 border-r border-gray-100 flex items-start gap-2 leading-relaxed">
                            <CheckCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{row.ivy}</span>
                          </div>
                          <div className="p-4 text-gray-500 flex items-start gap-2 leading-relaxed">
                            <X size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
                            <span>{row.others}</span>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="mt-3 text-center">
                    <button
                      onClick={() => setShowAllAiEntreComparison(!showAllAiEntreComparison)}
                      className="inline-flex items-center gap-2 text-[#009fda] text-sm font-semibold hover:underline transition-all"
                    >
                      {showAllAiEntreComparison ? (
                        <><X size={15} /> Hide</>
                      ) : (
                        <><Plus size={15} /> View All 10 Factors</>
                      )}
                    </button>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                      Ready to make the right choice for your career?
                    </p>
                    <button
                      style={{ backgroundColor: "#009fda" }}
                      className="px-8 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                      onClick={handleApplyClick}
                    >
                      Enroll at Ivy Professional School
                    </button>
                  </div>
                </div>
              )}

              {/* Comparison Section - Generative AI courses only */}
              {course.title.includes("Generative AI Course") && (
                <div className="mt-14 w-full max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <span className="inline-block bg-blue-100 text-[#009fda] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
                      Why Choose Us
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                      Ivy Professional School{" "}
                      <span className="text-[#009fda]">vs</span>{" "}
                      <span className="text-gray-500">Other Institutes</span>
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                      See why serious learners choose Ivy Pro School for their Generative AI journey
                    </p>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <div className="grid grid-cols-[1fr_1.4fr_1.2fr] text-sm font-bold">
                      <div className="bg-gray-700 text-white p-4 flex items-center">
                        Comparison Factor
                      </div>
                      <div className="bg-[#009fda] text-white p-4 flex items-center justify-center gap-2 text-center">
                        <span>Ivy Professional School</span>
                        <span className="hidden sm:inline-block text-[10px] bg-white/20 px-2 py-0.5 rounded-full whitespace-nowrap">
                          ★ Recommended
                        </span>
                      </div>
                      <div className="bg-gray-500 text-white p-4 flex items-center justify-center text-center">
                        Typical Generative AI Institutes
                      </div>
                    </div>

                    {[
                      {
                        factor: "Course Focus",
                        ivy: "Focuses on practical Generative AI skills, app-building, automation, and job readiness",
                        others: "Often focuses mainly on prompt engineering or tool demonstrations",
                      },
                      {
                        factor: "Learning Outcome",
                        ivy: "Helps learners build functional AI applications and use GenAI for real business and career outcomes",
                        others: "Many courses stop at explaining AI tools without deeper implementation",
                      },
                      {
                        factor: "Hands-on Projects",
                        ivy: "Learners work on practical GenAI projects that can be added to their portfolio",
                        others: "Projects may be simple, repetitive, or not strong enough for interviews",
                      },
                      {
                        factor: "Career Orientation",
                        ivy: "Designed for learners who want to use GenAI for jobs, freelancing, automation, entrepreneurship, or workplace productivity",
                        others: "Often designed as short-term awareness workshops",
                      },
                      {
                        factor: "Tool Coverage",
                        ivy: "Helps learners work with modern GenAI tools and workflows relevant to the current market",
                        others: "Tool exposure may be limited to one or two popular platforms",
                      },
                      {
                        factor: "Prompt Engineering Depth",
                        ivy: "Goes beyond basic prompts and teaches structured prompting for problem-solving, content, research, automation, and productivity",
                        others: "Many institutes teach only basic prompt examples",
                      },
                      {
                        factor: "AI App-Building",
                        ivy: "Emphasizes building useful AI-powered apps and workflows",
                        others: "App-building may not be included or may require too much coding knowledge",
                      },
                      {
                        factor: "Placement Support",
                        ivy: "Includes placement assistance and career-focused guidance",
                        others: "Career support may be limited or missing",
                      },
                      {
                        factor: "Certification Positioning",
                        ivy: "Offers a structured certification pathway associated with Ivy's GenAI course positioning",
                        others: "Certification credibility varies widely across institutes",
                      },
                      {
                        factor: "1:1 Doubt Clearing Support",
                        ivy: "Learners get personalized 1:1 doubt-clearing sessions with teaching assistants to resolve doubts related to prompts, GenAI tools, AI app-building, automation workflows, projects, and implementation challenges",
                        others: "Doubt support may be limited to group sessions, community replies, or trainer availability",
                      },
                      {
                        factor: "Beginner to Advanced Journey",
                        ivy: "Suitable for learners who want a guided journey from GenAI fundamentals to practical implementation",
                        others: "Many programs are either too basic or too technical",
                      },
                      {
                        factor: "Business Use Case Orientation",
                        ivy: "Connects GenAI with real workplace use cases across functions and industries",
                        others: "Courses may focus more on tool features than business application",
                      },
                      {
                        factor: "Best Suited For",
                        ivy: "Students, professionals, entrepreneurs, consultants, creators, analysts, and managers who want to use GenAI practically",
                        others: "Learners looking only for introductory AI awareness",
                      },
                    ]
                      .slice(0, showAllGenAiComparison ? 13 : 4)
                      .map((row, index) => (
                        <div
                          key={index}
                          className={`grid grid-cols-[1fr_1.4fr_1.2fr] text-sm border-t border-gray-100 ${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50/70"
                          }`}
                        >
                          <div className="p-4 font-semibold text-gray-800 border-r border-gray-100 flex items-start leading-snug">
                            {row.factor}
                          </div>
                          <div className="p-4 text-gray-700 border-r border-gray-100 flex items-start gap-2 leading-relaxed">
                            <CheckCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{row.ivy}</span>
                          </div>
                          <div className="p-4 text-gray-500 flex items-start gap-2 leading-relaxed">
                            <X size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
                            <span>{row.others}</span>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="mt-3 text-center">
                    <button
                      onClick={() => setShowAllGenAiComparison(!showAllGenAiComparison)}
                      className="inline-flex items-center gap-2 text-[#009fda] text-sm font-semibold hover:underline transition-all"
                    >
                      {showAllGenAiComparison ? (
                        <><X size={15} /> Hide</>
                      ) : (
                        <><Plus size={15} /> View All 13 Factors</>
                      )}
                    </button>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                      Ready to make the right choice for your career?
                    </p>
                    <button
                      style={{ backgroundColor: "#009fda" }}
                      className="px-8 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                      onClick={handleApplyClick}
                    >
                      Enroll at Ivy Professional School
                    </button>
                  </div>
                </div>
              )}

              {/* Comparison Section - AI for Product Managers only */}
              {course.title === "AI for Product Managers" && (
                <div className="mt-14 w-full max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <span className="inline-block bg-blue-100 text-[#009fda] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
                      Why Choose Us
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                      Ivy Professional School{" "}
                      <span className="text-[#009fda]">vs</span>{" "}
                      <span className="text-gray-500">Other Institutes</span>
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                      See why serious learners choose Ivy Pro School for their AI Product Management journey
                    </p>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <div className="grid grid-cols-[1fr_1.4fr_1.2fr] text-sm font-bold">
                      <div className="bg-gray-700 text-white p-4 flex items-center">
                        Comparison Factor
                      </div>
                      <div className="bg-[#009fda] text-white p-4 flex items-center justify-center gap-2 text-center">
                        <span>Ivy Professional School</span>
                        <span className="hidden sm:inline-block text-[10px] bg-white/20 px-2 py-0.5 rounded-full whitespace-nowrap">
                          ★ Recommended
                        </span>
                      </div>
                      <div className="bg-gray-500 text-white p-4 flex items-center justify-center text-center">
                        Typical Product Management Institutes
                      </div>
                    </div>

                    {[
                      {
                        factor: "Course Focus",
                        ivy: "Focuses specifically on AI Product Management, helping learners build and ship AI-powered products end-to-end",
                        others: "Often teaches general product management without enough focus on AI products",
                      },
                      {
                        factor: "AI Product Thinking",
                        ivy: "Covers AI opportunity discovery, AI UX, feasibility, prompt/model design, RAG, agents, metrics, and responsible AI delivery",
                        others: "May cover product strategy but not the unique challenges of AI-driven products",
                      },
                      {
                        factor: "Hands-on Learning",
                        ivy: "Includes 20+ real-world projects, labs, and case studies to help learners apply AI-PM concepts practically",
                        others: "Projects may be limited, theoretical, or not directly connected to AI product work",
                      },
                      {
                        factor: "Modern AI Tool Exposure",
                        ivy: "Includes tools and workflows around ChatGPT, Claude, Gemini, Figma, Jira, Productboard, Amplitude, Mixpanel, Retool, Flowise, LangGraph, and n8n",
                        others: "Many institutes focus only on standard PM tools and do not integrate modern AI workflows",
                      },
                      {
                        factor: "Business + Tech Balance",
                        ivy: "Helps learners understand both product strategy and AI implementation realities like cost, latency, privacy, model risk, and guardrails",
                        others: "Courses may be either too business-focused or too technical, without connecting both sides",
                      },
                      {
                        factor: "AI Prototyping",
                        ivy: "Learners explore no-code and low-code AI prototyping for building practical product concepts",
                        others: "Prototyping may be limited to wireframes or traditional product mockups",
                      },
                      {
                        factor: "Stakeholder Readiness",
                        ivy: "Trains learners to write PRDs, define metrics, and work with engineering, design, data science, legal, and GTM teams",
                        others: "Stakeholder management may be taught in a generic way",
                      },
                      {
                        factor: "Responsible AI Focus",
                        ivy: "Covers AI evaluation, risk, governance, human-in-the-loop workflows, and responsible AI delivery",
                        others: "Responsible AI may be ignored or treated as a small theory topic",
                      },
                      {
                        factor: "Career Support",
                        ivy: "Includes certification, mentorship, resume reviews, and career assistance for AI PM roles",
                        others: "Career support may be generic and not customized for AI product roles",
                      },
                      {
                        factor: "1:1 Doubt Clearing Support",
                        ivy: "Learners get personalized 1:1 doubt-clearing sessions with teaching assistants to resolve doubts related to AI product strategy, PRDs, tools, projects, prototyping, and implementation workflows",
                        others: "Doubt support may be limited to group sessions, community replies, or trainer availability",
                      },
                      {
                        factor: "Best Suited For",
                        ivy: "Product managers, aspiring PMs, founders, business leaders, consultants, and professionals who want to lead AI product initiatives",
                        others: "Learners looking only for basic product management certification",
                      },
                    ]
                      .slice(0, showAllAiPmComparison ? 11 : 4)
                      .map((row, index) => (
                        <div
                          key={index}
                          className={`grid grid-cols-[1fr_1.4fr_1.2fr] text-sm border-t border-gray-100 ${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50/70"
                          }`}
                        >
                          <div className="p-4 font-semibold text-gray-800 border-r border-gray-100 flex items-start leading-snug">
                            {row.factor}
                          </div>
                          <div className="p-4 text-gray-700 border-r border-gray-100 flex items-start gap-2 leading-relaxed">
                            <CheckCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{row.ivy}</span>
                          </div>
                          <div className="p-4 text-gray-500 flex items-start gap-2 leading-relaxed">
                            <X size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
                            <span>{row.others}</span>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="mt-3 text-center">
                    <button
                      onClick={() => setShowAllAiPmComparison(!showAllAiPmComparison)}
                      className="inline-flex items-center gap-2 text-[#009fda] text-sm font-semibold hover:underline transition-all"
                    >
                      {showAllAiPmComparison ? (
                        <><X size={15} /> Hide</>
                      ) : (
                        <><Plus size={15} /> View All 11 Factors</>
                      )}
                    </button>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                      Ready to make the right choice for your career?
                    </p>
                    <button
                      style={{ backgroundColor: "#009fda" }}
                      className="px-8 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                      onClick={handleApplyClick}
                    >
                      Enroll at Ivy Professional School
                    </button>
                  </div>
                </div>
              )}

              {/* Comparison Section - Data Analytics With Visualization courses only */}
              {course.title.includes("Data Analytics With Visualization") && (
                <div className="mt-14 w-full max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <span className="inline-block bg-blue-100 text-[#009fda] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
                      Why Choose Us
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                      Ivy Professional School{" "}
                      <span className="text-[#009fda]">vs</span>{" "}
                      <span className="text-gray-500">Other Institutes</span>
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                      See why serious learners choose Ivy Pro School for their Data Analytics journey
                    </p>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <div className="grid grid-cols-[1fr_1.4fr_1.2fr] text-sm font-bold">
                      <div className="bg-gray-700 text-white p-4 flex items-center">
                        Comparison Factor
                      </div>
                      <div className="bg-[#009fda] text-white p-4 flex items-center justify-center gap-2 text-center">
                        <span>Ivy Professional School</span>
                        <span className="hidden sm:inline-block text-[10px] bg-white/20 px-2 py-0.5 rounded-full whitespace-nowrap">
                          ★ Recommended
                        </span>
                      </div>
                      <div className="bg-gray-500 text-white p-4 flex items-center justify-center text-center">
                        Typical Data Analytics Institutes
                      </div>
                    </div>

                    {[
                      {
                        factor: "Course Focus",
                        ivy: "Covers Excel, SQL, Power BI or visualization, dashboards, business analytics, and insight generation",
                        others: "Often focuses mainly on tools without enough business interpretation",
                      },
                      {
                        factor: "Business Problem-Solving",
                        ivy: "Learners are trained to answer real business questions using data",
                        others: "Many programs teach charts and formulas but not decision-making",
                      },
                      {
                        factor: "Dashboard Building",
                        ivy: "Strong focus on creating business dashboards that managers can use for tracking performance and taking decisions",
                        others: "Dashboards may be taught as design exercises rather than business tools",
                      },
                      {
                        factor: "Data Visualization",
                        ivy: "Emphasizes clean, meaningful, and decision-oriented visualization",
                        others: "Many institutes focus on making charts without teaching storytelling",
                      },
                      {
                        factor: "Excel & SQL Foundation",
                        ivy: "Builds practical Excel and SQL skills needed for analyst roles",
                        others: "Excel and SQL may be treated as separate topics without connecting them to analysis",
                      },
                      {
                        factor: "Power BI / BI Tool Application",
                        ivy: "Helps learners create interactive dashboards and reporting solutions for real business scenarios",
                        others: "BI tools may be taught at a feature level only",
                      },
                      {
                        factor: "Insight Generation",
                        ivy: "Focuses on moving from \"what happened\" to \"why it happened\" and \"what should be done next\"",
                        others: "Many courses stop at report creation",
                      },
                      {
                        factor: "Project Portfolio",
                        ivy: "Learners create analytics projects that can be showcased in resumes, LinkedIn, and interviews",
                        others: "Projects may be generic and not recruiter-friendly",
                      },
                      {
                        factor: "Placement Support",
                        ivy: "Resume guidance, mock interviews, LinkedIn support, and placement assistance for analytics roles",
                        others: "Placement support may not be deeply aligned to analyst job expectations",
                      },
                      {
                        factor: "1:1 Doubt Clearing Support",
                        ivy: "Learners get personalized 1:1 doubt-clearing sessions with teaching assistants to resolve Excel, SQL, Power BI, dashboarding, and project-related doubts",
                        others: "Doubt support may be limited to group sessions, delayed chat replies, or trainer availability",
                      },
                      {
                        factor: "Beginner Friendliness",
                        ivy: "Suitable for freshers, non-coders, working professionals, and career switchers",
                        others: "Some institutes make the course either too basic or unnecessarily technical",
                      },
                      {
                        factor: "Career Readiness",
                        ivy: "Prepares learners for roles like Data Analyst, MIS Analyst, BI Analyst, and Business Analyst",
                        others: "Many courses focus on certification completion rather than job readiness",
                      },
                      {
                        factor: "Best Suited For",
                        ivy: "Learners who want to enter analytics, reporting, dashboarding, and business intelligence roles",
                        others: "Learners looking only for tool-level exposure",
                      },
                    ]
                      .slice(0, showAllDaVizComparison ? 13 : 4)
                      .map((row, index) => (
                        <div
                          key={index}
                          className={`grid grid-cols-[1fr_1.4fr_1.2fr] text-sm border-t border-gray-100 ${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50/70"
                          }`}
                        >
                          <div className="p-4 font-semibold text-gray-800 border-r border-gray-100 flex items-start leading-snug">
                            {row.factor}
                          </div>
                          <div className="p-4 text-gray-700 border-r border-gray-100 flex items-start gap-2 leading-relaxed">
                            <CheckCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{row.ivy}</span>
                          </div>
                          <div className="p-4 text-gray-500 flex items-start gap-2 leading-relaxed">
                            <X size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
                            <span>{row.others}</span>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="mt-3 text-center">
                    <button
                      onClick={() => setShowAllDaVizComparison(!showAllDaVizComparison)}
                      className="inline-flex items-center gap-2 text-[#009fda] text-sm font-semibold hover:underline transition-all"
                    >
                      {showAllDaVizComparison ? (
                        <><X size={15} /> Hide</>
                      ) : (
                        <><Plus size={15} /> View All 13 Factors</>
                      )}
                    </button>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                      Ready to make the right choice for your career?
                    </p>
                    <button
                      style={{ backgroundColor: "#009fda" }}
                      className="px-8 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                      onClick={handleApplyClick}
                    >
                      Enroll at Ivy Professional School
                    </button>
                  </div>
                </div>
              )}

              {/* Comparison Section - Data Analytics and Generative AI Course only */}
              {course.title === "Data Analytics and Generative AI Course" && (
                <div className="mt-14 w-full max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <span className="inline-block bg-blue-100 text-[#009fda] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
                      Why Choose Us
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                      Ivy Professional School{" "}
                      <span className="text-[#009fda]">vs</span>{" "}
                      <span className="text-gray-500">Other Institutes</span>
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                      See why serious learners choose Ivy Pro School for their Data Analytics &amp; Generative AI journey
                    </p>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <div className="grid grid-cols-[1fr_1.4fr_1.2fr] text-sm font-bold">
                      <div className="bg-gray-700 text-white p-4 flex items-center">
                        Comparison Factor
                      </div>
                      <div className="bg-[#009fda] text-white p-4 flex items-center justify-center gap-2 text-center">
                        <span>Ivy Professional School</span>
                        <span className="hidden sm:inline-block text-[10px] bg-white/20 px-2 py-0.5 rounded-full whitespace-nowrap">
                          ★ Recommended
                        </span>
                      </div>
                      <div className="bg-gray-500 text-white p-4 flex items-center justify-center text-center">
                        Typical Data Analytics / AI Institutes
                      </div>
                    </div>

                    {[
                      {
                        factor: "Integrated Focus",
                        ivy: "Combines foundational data analytics (Excel, SQL, BI) with Generative AI (automation, prompt engineering, AI workflows, LLM apps)",
                        others: "Most institutes teach analytics and AI separately or focus on only one discipline",
                      },
                      {
                        factor: "Business Problem Orientation",
                        ivy: "Teaches learners to solve business problems with analytics + AI insights and automate workflows for real business impact",
                        others: "Analytics and AI are often taught as disconnected skills without a business lens",
                      },
                      {
                        factor: "Hands-on Learning",
                        ivy: "Project-based approach with real datasets, dashboards, and AI use-cases applicable to business scenarios",
                        others: "Many programs remain lecture-heavy or tool-demo-based",
                      },
                      {
                        factor: "AI + Analytics Balance",
                        ivy: "Balanced coverage of data cleaning, visualization, BI reporting, and Generative AI applications such as content automation, RAG workflows, agents, and AI-enabled dashboards",
                        others: "Courses may emphasize one aspect and only superficially cover the other",
                      },
                      {
                        factor: "Tool Ecosystem Exposure",
                        ivy: "Teaches analytics tools (Excel, SQL, Power BI/Tableau) plus GenAI platforms (LLMs, automation tools, AI APIs, agent builders)",
                        others: "Tool coverage may be limited to either analytics tools or basic AI tools",
                      },
                      {
                        factor: "Project Portfolio",
                        ivy: "Learners build analytics dashboards, BI reports, and AI-powered solutions that can be used in resumes and interviews",
                        others: "Projects are often basic, templated, or lack business applicability",
                      },
                      {
                        factor: "Insight to Automation Pathway",
                        ivy: "Teaches how to move from descriptive analytics to predictive insights and further to automated AI workflows",
                        others: "Many courses stop at dashboards or beginner AI demos without applied automation",
                      },
                      {
                        factor: "1:1 Doubt Clearing Support",
                        ivy: "Learners get personalized 1:1 doubt-clearing sessions with teaching assistants to address analytics challenges, data modeling questions, AI prompts, workflow issues, and project obstacles",
                        others: "Doubt support may be limited to group sessions, community boards, or delayed responses",
                      },
                      {
                        factor: "Career Support",
                        ivy: "Includes resume guidance, interview prep, LinkedIn positioning, and placement assistance oriented toward analytics + AI roles",
                        others: "Career support may be generic or not tailored for hybrid analytics + AI opportunities",
                      },
                      {
                        factor: "Business Use Case Orientation",
                        ivy: "Strong focus on aligning dashboards, insights, and AI outputs with real business needs such as reporting automation, decision support, and productivity workflows",
                        others: "Many institutes teach tools without explaining how to drive business value",
                      },
                      {
                        factor: "Beginner Friendliness",
                        ivy: "Suitable for freshers, working professionals, and career switchers with structured support for both analytics and AI learning curves",
                        others: "Some programs are either too basic or too technical without bridging skill gaps",
                      },
                      {
                        factor: "Best Suited For",
                        ivy: "Learners who want to build careers that blend Analytics, BI, and Generative AI",
                        others: "Learners looking only for basic analytics skills or introductory AI exposure",
                      },
                    ]
                      .slice(0, showAllDaGenAiComparison ? 12 : 4)
                      .map((row, index) => (
                        <div
                          key={index}
                          className={`grid grid-cols-[1fr_1.4fr_1.2fr] text-sm border-t border-gray-100 ${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50/70"
                          }`}
                        >
                          <div className="p-4 font-semibold text-gray-800 border-r border-gray-100 flex items-start leading-snug">
                            {row.factor}
                          </div>
                          <div className="p-4 text-gray-700 border-r border-gray-100 flex items-start gap-2 leading-relaxed">
                            <CheckCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{row.ivy}</span>
                          </div>
                          <div className="p-4 text-gray-500 flex items-start gap-2 leading-relaxed">
                            <X size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
                            <span>{row.others}</span>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="mt-3 text-center">
                    <button
                      onClick={() => setShowAllDaGenAiComparison(!showAllDaGenAiComparison)}
                      className="inline-flex items-center gap-2 text-[#009fda] text-sm font-semibold hover:underline transition-all"
                    >
                      {showAllDaGenAiComparison ? (
                        <><X size={15} /> Hide</>
                      ) : (
                        <><Plus size={15} /> View All 12 Factors</>
                      )}
                    </button>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                      Ready to make the right choice for your career?
                    </p>
                    <button
                      style={{ backgroundColor: "#009fda" }}
                      className="px-8 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                      onClick={handleApplyClick}
                    >
                      Enroll at Ivy Professional School
                    </button>
                  </div>
                </div>
              )}

              {/* Comparison Section - AI and Machine Learning Course only */}
              {course.title === "AI and Machine Learning Course" && (
                <div className="mt-14 w-full max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <span className="inline-block bg-blue-100 text-[#009fda] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
                      Why Choose Us
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                      Ivy Professional School{" "}
                      <span className="text-[#009fda]">vs</span>{" "}
                      <span className="text-gray-500">Other Institutes</span>
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                      See why serious learners choose Ivy Pro School for their AI &amp; Machine Learning journey
                    </p>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                    <div className="grid grid-cols-[1fr_1.4fr_1.2fr] text-sm font-bold">
                      <div className="bg-gray-700 text-white p-4 flex items-center">
                        Comparison Factor
                      </div>
                      <div className="bg-[#009fda] text-white p-4 flex items-center justify-center gap-2 text-center">
                        <span>Ivy Professional School</span>
                        <span className="hidden sm:inline-block text-[10px] bg-white/20 px-2 py-0.5 rounded-full whitespace-nowrap">
                          ★ Recommended
                        </span>
                      </div>
                      <div className="bg-gray-500 text-white p-4 flex items-center justify-center text-center">
                        Typical AI &amp; ML Institutes
                      </div>
                    </div>

                    {[
                      {
                        factor: "Course Focus",
                        ivy: "Covers AI, Machine Learning, and Deep Learning with a career-focused learning path",
                        others: "Often focuses only on algorithms or Python notebooks",
                      },
                      {
                        factor: "Practical Learning",
                        ivy: "Emphasizes hands-on implementation, model-building, evaluation, and real-world use cases",
                        others: "Many programs remain theory-heavy with limited project depth",
                      },
                      {
                        factor: "AI + ML Balance",
                        ivy: "Combines classical Machine Learning, AI concepts, and modern Deep Learning foundations",
                        others: "Some institutes teach ML in isolation without connecting it to modern AI applications",
                      },
                      {
                        factor: "Model Understanding",
                        ivy: "Helps learners understand how models work, how to evaluate them, and when to use which approach",
                        others: "Learners may memorize algorithms without understanding practical selection",
                      },
                      {
                        factor: "Project Portfolio",
                        ivy: "Learners can build portfolio projects useful for resumes, LinkedIn, and interview discussions",
                        others: "Projects may be generic, copied, or too basic for job interviews",
                      },
                      {
                        factor: "Business Application",
                        ivy: "Connects ML models with real business problems such as prediction, classification, recommendation, forecasting, and automation",
                        others: "Courses may focus on code without explaining business impact",
                      },
                      {
                        factor: "Career Readiness",
                        ivy: "Designed to prepare learners for AI, ML, analytics, and data-driven roles",
                        others: "Many institutes focus mainly on course completion and certification",
                      },
                      {
                        factor: "Deep Learning Exposure",
                        ivy: "Includes Deep Learning as part of the AI and ML career pathway",
                        others: "Deep Learning may be skipped or taught only at a surface level",
                      },
                      {
                        factor: "Mentor Support",
                        ivy: "Learners receive structured academic support to handle technical concepts step by step",
                        others: "Support may depend heavily on individual trainer availability",
                      },
                      {
                        factor: "1:1 Doubt Clearing Support",
                        ivy: "Learners get personalized 1:1 doubt-clearing sessions with teaching assistants to resolve doubts related to Python, ML algorithms, model-building, Deep Learning, projects, and implementation challenges",
                        others: "Doubt support may be limited to group sessions, delayed chat replies, or trainer availability",
                      },
                      {
                        factor: "Interview Preparation",
                        ivy: "Focuses on explaining projects, model choices, evaluation metrics, and business outcomes in interviews",
                        others: "Interview preparation may be generic and not ML-specific",
                      },
                      {
                        factor: "Placement Support",
                        ivy: "Ivy's course ecosystem includes placement-focused support and career guidance",
                        others: "Placement assistance may be limited to job notifications",
                      },
                      {
                        factor: "Best Suited For",
                        ivy: "Learners who want to build a serious foundation in AI, ML, Deep Learning, and applied model-building",
                        others: "Learners looking only for basic Python or algorithm-level exposure",
                      },
                    ]
                      .slice(0, showAllAiMlComparison ? 13 : 4)
                      .map((row, index) => (
                        <div
                          key={index}
                          className={`grid grid-cols-[1fr_1.4fr_1.2fr] text-sm border-t border-gray-100 ${
                            index % 2 === 0 ? "bg-white" : "bg-gray-50/70"
                          }`}
                        >
                          <div className="p-4 font-semibold text-gray-800 border-r border-gray-100 flex items-start leading-snug">
                            {row.factor}
                          </div>
                          <div className="p-4 text-gray-700 border-r border-gray-100 flex items-start gap-2 leading-relaxed">
                            <CheckCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{row.ivy}</span>
                          </div>
                          <div className="p-4 text-gray-500 flex items-start gap-2 leading-relaxed">
                            <X size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
                            <span>{row.others}</span>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="mt-3 text-center">
                    <button
                      onClick={() => setShowAllAiMlComparison(!showAllAiMlComparison)}
                      className="inline-flex items-center gap-2 text-[#009fda] text-sm font-semibold hover:underline transition-all"
                    >
                      {showAllAiMlComparison ? (
                        <><X size={15} /> Hide</>
                      ) : (
                        <><Plus size={15} /> View All 13 Factors</>
                      )}
                    </button>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                      Ready to make the right choice for your career?
                    </p>
                    <button
                      style={{ backgroundColor: "#009fda" }}
                      className="px-8 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                      onClick={handleApplyClick}
                    >
                      Enroll at Ivy Professional School
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum;