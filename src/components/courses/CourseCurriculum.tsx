"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { Course } from '@/lib/api';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Clock, FileText, CheckCircle, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from "@/components/ui/button"
import { Bot, Send, MessageSquare, Phone } from "lucide-react"

interface CourseCurriculumProps {
  course: Course;
}

const CourseCurriculum = ({ course }: CourseCurriculumProps) => {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [showNumber, setShowNumber] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showApplyModal, setShowApplyModal] = useState(false)


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
    'Data Analytics and Generative AI Course': { courseFee: 41000, registration: 10000, emi: 3445, months: 9 },
    'Data Science with Machine Learning & AI Certification': { courseFee: 56000, registration: 10000, emi: 5111, months: 9 },
    'Data Science with Machine Learning & AI Course in Delhi': { courseFee: 56000, registration: 10000, emi: 5111, months: 9 },
    'Data Science with Machine Learning & AI Course in Kolkata': { courseFee: 56000, registration: 10000, emi: 5111, months: 9 },
    'Data Science with Machine Learning & AI Course in Pune': { courseFee: 56000, registration: 10000, emi: 5111, months: 9 },
    'Data Science with Machine Learning & AI Course in Chennai': { courseFee: 56000, registration: 10000, emi: 5111, months: 9 },
    'Data Science with Machine Learning & AI Course in Mumbai': { courseFee: 56000, registration: 10000, emi: 5111, months: 9 },
    // Removed duplicate 'Data Analytics and Generative AI Course' key to fix error
    ' Data Engineering Course': { courseFee: 58500, registration: 10000, emi: 5389, months: 9 },
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
    'Generative AI Course': { courseFee: 69000, registration: 10000, emi: 6556, months: 9 },
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

            <Accordion type="single" collapsible>
              {course.curriculum.map((module: any, index: any) => (
                <AccordionItem key={module.id} value={module.id}>
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 no-underline hover:no-underline">
                    <div className="flex items-center">
                      <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                        {index + 1}
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold no-underline hover:no-underline">{module.title}</h4>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Clock size={14} className="mr-1" />
                          <span className="no-underline hover:no-underline">{module.duration}</span>
                          <span className="mx-2">•</span>
                          <FileText size={14} className="mr-1" />
                          {/* <span className="no-underline hover:no-underline">
                            {module.topics.length} lessons
                          </span> */}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-6 pt-2 pb-4">
                      <ul className="space-y-3">
                        {module.topics.map((topic: any) => (
                          <li
                            key={topic.id}
                            className="flex justify-between items-center py-2 border-b border-gray-100"
                          >
                            <div style={{ width: '90%' }} className="flex items-center">
                              <CheckCircle size={19} className="text-blue-500 mr-3" />
                              <span className="no-underline hover:no-underline">{topic.title}</span>
                              {topic.isAdvanced && (
                                <Badge variant="outline" className="ml-2 text-xs">
                                  Advanced
                                </Badge>
                              )}
                            </div>
                            <div style={{ width: '10%' }} className="flex items-center text-sm text-gray-500">
                              {/* <Clock size={14} className="mr-1" /> */}
                              {/* <span >{topic.duration}</span> */}
                            </div>
                          </li>
                        ))}
                      </ul>
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
                          <span>Complete course access</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="text-blue-500 mr-2 h-5 w-5" />
                          <span>Industry-recognized certification</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="text-blue-500 mr-2 h-5 w-5" />
                          <span>Career support services</span>
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
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Flexible Payment Options</h3>
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center">

                                    {
                                      course.title != "AI for Product Managers" ?
                                        <span className="text-sm font-medium text-gray-700">No Cost EMI</span>
                                        :
                                        <span className="text-sm font-medium text-gray-700">Installment available</span>
                                    }

                                    {
                                      course.title == "AI for Product Managers" ?

                                        <span className="text-lg font-semibold">₹{details.emi.toLocaleString()}/installment</span>
                                        :
                                        <span className="text-lg font-semibold">₹{details.emi.toLocaleString()}/mo</span>

                                    }
                                  </div>

                                  {
                                    course.title == "AI for Product Managers" ? <p className="text-xs text-gray-500">Pay in 2 installment* (plus GST)</p> :

                                      <p className="text-xs text-gray-500">For {details.months} months* (excluding GST)</p>
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
                                <span className="text-sm font-medium text-gray-700">Registration Fee</span>
                                <span className="text-lg font-semibold">₹{details.registration.toLocaleString()} <span className="text-xs"> + GST</span></span>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">or pay full amount upfront</p>
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
                          Apply Now
                        </button>
                      </div>
                    );
                  })()}

                </div>
              </div>
              {/* New Section for 'Fees seem higher?' */}
              <div className="mt-8 text-center w-full max-w-4xl mx-auto">
                <h3 className="text-lg font-semibold text-gray-800">Fees seems higher? Pick your own module.</h3>
                <Button
                  style={{ backgroundColor: '#009fda' }}
                  className="mt-4 px-6 py-3 rounded-lg text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
                  onClick={() => setShowContactOptions(!showContactOptions)}
                >
                  Pick your own customized course
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum;