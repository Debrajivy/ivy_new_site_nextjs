
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Briefcase, FileText, Users, Award, BarChart, GraduationCap } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import certificate from "../../assests/certificate.webp";
import smallibm from "../../assests/placement/IBM_MAIN.webp";
import smallpwc from "../../assests/placement/PWC.webp";
import smallhoneywell from "../../assests/smallhoneywell.webp";
import smalltiger from "../../assests/smalltiger.webp";
import smallgenpact from "../../assests/smallgenpact.webp";
import smallipsos from "../../assests/smallipsos.webp";
import smallaccenture from "../../assests/placement/accenture.webp";
import smalladityabirla from "../../assests/placement/AdityaBirla.webp";
import smalladzguru from "../../assests/placement/ADZGURU.webp";
import smallamlrightsource from "../../assests/placement/AMLRIGHTSOURCE.webp";
import smallavalara from "../../assests/placement/Avalara.webp";
import smallbandhanbank from "../../assests/placement/bandhanBank.webp";
import smallbigo from "../../assests/placement/Bigo.webp";
import smallcardekho from "../../assests/placement/CarDekho.webp";
import smallcltsfoundations from "../../assests/placement/CLTSFoundations.webp";
import smallcogenthub from "../../assests/placement/CogentHub.webp";
import smallcongizent from "../../assests/placement/Congizent.webp";
import smalldatvcs from "../../assests/placement/DATYCS.webp";
import smallecolab from "../../assests/placement/ECOLAB.webp";
import smallenlist from "../../assests/placement/Enlist.webp";
import smalley from "../../assests/placement/Ey.webp";
import smallfogla from "../../assests/placement/FOGLA.webp";
import smallgrilgurd from "../../assests/placement/GRILGURD.webp";
import smallkantarimrb from "../../assests/placement/KANTARIMRB.webp";
import smallkpmg from "../../assests/placement/KPMG.webp";
import smalllegend from "../../assests/placement/Legend.webp";
import smalllinc from "../../assests/placement/LINC.webp";
import smallmimessay from "../../assests/placement/MIM-Essay.webp";
import smallnielsdeniq from "../../assests/placement/NielsdenIQ.webp";
import smallparle from "../../assests/placement/PARLE.webp";
import smallpidilite from "../../assests/placement/Pidilite.webp";
import smallpublicisglobaldelivery from "../../assests/placement/PUBLICISGLOBALDELIVERY.webp";
import smallroyal from "../../assests/placement/Royal.webp";
import smallstratacent from "../../assests/placement/Stratacent.webp";
import smallsunic from "../../assests/placement/Sunic.webp";
import smalltechnocraze from "../../assests/placement/TECHNOCRAZE.webp";
import smalltm from "../../assests/placement/TM.webp";
import smallveedol from "../../assests/placement/Veedol.webp";
import smallventra from "../../assests/placement/VENTRA.webp";
import smallwipro from "../../assests/placement/Wipro.webp";
import Bavc from "../../assests/Bavc.jpg";
import Cdec from "../../assests/Cdec.jpg";
import Davc from "../../assests/Davc.jpg";
import Dsvc from "../../assests/Dsvc.jpg";
import Nc from "../../assests/Nc.jpg";
import { Course } from '@/lib/api';
import Pmc from "../../assests/PMC.png";
import Iitc from "../../assests/Iitc.jpg";
import PAPC from "../../assests/PAPC.jpeg";
import AIML from "../../assests/AIML.webp";
import NASSCOMML from "../../assests/NASSCOMML.webp";
import genaicertificate from "../../assests/genaicertificate.png";

import Image from 'next/image';
interface CourseJobSupportProps {
  course: Course;
}

const CourseJobSupport = ({ course }: CourseJobSupportProps) => {

  if (!course.projects || course.projects.length === 0) {
    return null;
  }

  const partners = [
    { name: 'Accenture', logo: smallaccenture },
    { name: 'Aditya Birla', logo: smalladityabirla },
    { name: 'ADZGURU', logo: smalladzguru },
    { name: 'AMLRIGHTSOURCE', logo: smallamlrightsource },
    { name: 'Avalara', logo: smallavalara },
    { name: 'Bandhan Bank', logo: smallbandhanbank },
    { name: 'Bigo', logo: smallbigo },
    { name: 'CarDekho', logo: smallcardekho },
    { name: 'CLTSFoundations', logo: smallcltsfoundations },
    { name: 'CogentHub', logo: smallcogenthub },
    { name: 'Congizent', logo: smallcongizent },
    { name: 'DATVCS', logo: smalldatvcs },
    { name: 'ECOLAB', logo: smallecolab },
    { name: 'Enlist', logo: smallenlist },
    { name: 'Ey', logo: smalley },
    { name: 'FOGLA', logo: smallfogla },
    { name: 'Genpact', logo: smallgenpact },
    { name: 'GRILGURD', logo: smallgrilgurd },
    { name: 'Honeywell', logo: smallhoneywell },
    { name: 'IBM', logo: smallibm },
    { name: 'Ipsos', logo: smallipsos },
    { name: 'KANTARIMRB', logo: smallkantarimrb },
    { name: 'KPMG', logo: smallkpmg },
    { name: 'Legend', logo: smalllegend },
    { name: 'LINC', logo: smalllinc },
    { name: 'MIM-Essay', logo: smallmimessay },
    { name: 'NielsdenIQ', logo: smallnielsdeniq },
    { name: 'PARLE', logo: smallparle },
    { name: 'Pidilite', logo: smallpidilite },
    { name: 'PUBLICISGLOBALDELIVERY', logo: smallpublicisglobaldelivery },
    { name: 'PWC', logo: smallpwc },
    { name: 'Royal', logo: smallroyal },
    { name: 'Stratacent', logo: smallstratacent },
    { name: 'Sunic', logo: smallsunic },
    { name: 'TECHNOCRAZE', logo: smalltechnocraze },
    { name: 'TigerAnalytics', logo: smalltiger },
    { name: 'TM', logo: smalltm },
    { name: 'Veedol', logo: smallveedol },
    { name: 'VENTRA', logo: smallventra },
    { name: 'Wipro', logo: smallwipro },
  ];


  return (
    <section style={{ marginTop: -10 }} className="py-5 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What kind of career support does Ivy Pro School provide?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our career services team is dedicated to helping you launch or advance your career in the tech industry.
            We provide end-to-end support from resume building to job placement.
          </p>
        </div>

        <Tabs defaultValue="placement" className="max-w-5xl mx-auto">
          {/* <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="placement">Placement Services</TabsTrigger>
            <TabsTrigger value="interview">Interview Preparation</TabsTrigger>
            <TabsTrigger value="resume">Resume Building</TabsTrigger>
          </TabsList> */}


          <TabsList
            className="flex w-full justify-center items-center overflow-x-auto pb-2 gap-4 no-scrollbar"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              padding: '0 16px',
            }}
          >
            <TabsTrigger
              value="placement"
              className="px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium flex-1 max-w-[180px] text-center bg-white shadow-sm"
            >
              <span className="inline sm:hidden">Placement</span>
              <span className="hidden sm:inline">Placement Services</span>
            </TabsTrigger>
            <TabsTrigger
              value="interview"
              className="px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium flex-1 max-w-[180px] text-center bg-white shadow-sm"
            >
              <span className="inline sm:hidden">Interview Prep</span>
              <span className="hidden sm:inline">Interview Preparation</span>
            </TabsTrigger>
            <TabsTrigger
              value="resume"
              className="px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium flex-1 max-w-[180px] text-center bg-white shadow-sm"
            >
              <span className="inline sm:hidden">Resume</span>
              <span className="hidden sm:inline">Resume Building</span>
            </TabsTrigger>
          </TabsList>


          <TabsContent value="placement" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Briefcase className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Job Placement Program</h3>
                      <p className="text-gray-600">
                        Our dedicated placement team works with 500+ hiring partners to help you find the right job opportunities.
                        We have a 94% placement rate for our full-time program graduates.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {course.title != "AI for Product Managers" ?

                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Users className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Career Fairs & Networking</h3>
                        <p className="text-gray-600">
                          Access exclusive hiring events, industry meetups, and networking opportunities with top companies
                          in the tech and data science fields.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                : null


              }

              {course.title != "AI for Product Managers" ?
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Award className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Job Guarantee Program</h3>
                        <p className="text-gray-600">
                          Eligible students can opt for our job guarantee program, ensuring you land a role within 6 months
                          of graduation or receive a full tuition refund.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                : null

              }


              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <BarChart className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Salary Negotiation Support</h3>
                      <p className="text-gray-600">
                        Get guidance on evaluating job opportunities, negotiating compensation packages, and understanding
                        industry salary benchmarks for your role and experience level.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div style={{
              backgroundColor: '#ffffff',
              padding: '30px 20px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)', // Main container has light 3D look
              borderRadius: '20px',
              margin: '40px',
              maxWidth: '1200px',
              marginInline: 'auto'
            }}>
              <h2 style={{
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '30px',
                color: '#2a2a2a'
              }}>
                Will I get a certificate after the course?
              </h2>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '40px',
                alignItems: 'stretch'
              }}>
                {/* Left Column: Description Boxes */}
                <div style={{
                  flex: '1 1 500px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  justifyContent: 'space-between'
                }}>
                  <div style={{
                    backgroundColor: 'white',
                    color: 'black',
                    borderRadius: '16px',
                    padding: '24px',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                    border: '1px solid #87CEEB',
                    position: 'relative',
                    boxShadow: `
          0 0 0 1px rgba(135, 206, 235, 0.3),
          2px 2px 0 0 rgba(135, 206, 235, 0.2),
          4px 4px 8px 0 rgba(135, 206, 235, 0.3),
          6px 6px 16px 0 rgba(135, 206, 235, 0.2),
          inset -2px -2px 4px rgba(0,0,0,0.05),
          inset 2px 2px 4px rgba(255,255,255,0.5)
        `,
                    transform: 'perspective(500px) rotateX(1deg)',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{
                      filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.2)) drop-shadow(2px 2px 3px rgba(135, 206, 235, 0.4))',
                      transform: 'translateZ(8px)',
                      transition: 'all 0.3s ease'
                    }}>
                      <div className="bg-primary/10 p-2 rounded-full">
                        <GraduationCap size={18} className="text-primary" />
                      </div>
                    </div>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, textShadow: '1px 1px 1px rgba(135, 206, 235, 0.2)' }}>
                      {course.title === "Generative AI Course" ?
                        "The Executive Certification in GenAI ensures quality and comprehensiveness of content coverage as well as ample credibility in the Data Engineering field." :
                        course.title === "Data Science with Machine Learning & AI Certification" || course.title === "Data Science with Machine Learning & AI Course in Kolkata" || course.title === "Data Science with Machine Learning & AI Course in Delhi" || course.title === "Data Science with Machine Learning & AI Course in Pune" || course.title === "Data Science with Machine Learning & AI Course in Chennai" || course.title === "Data Science with Machine Learning & AI Course in Bangalore" || course.title === "Data Science with Machine Learning & AI Course in Mumbai" ?
                          "The Executive Certification in Data Science, widely regarded as one of the best data science courses in India. This program ensures a high standard of quality and comprehensive content coverage, making it a top choice for those seeking credibility and expertise in the field of Data Science." :
                          course.title === " Data Engineering Course" || course.title === "Data Engineering Course in Kolkata" ?
                            "Launch your cloud career with an elite certification FROM Ivy Pro School. Designed with experts from Amazon & Accenture, it proves your ability to build real-time data systems using Spark, Kafka, and AWS." :
                            course.title === "Data Engineering Course in Delhi" ?
                              "Upon successful completion, learners receive a professional certification from Ivy Professional School. The certification validates job-ready data engineering skills and enhances employability."
                              :
                              course.title === "Data Engineering Course in Bangalore" ?
                              "Upon successful completion of the program, learners receive a professional certification from Ivy Professional School. This certification validates industry-relevant data engineering skills and strengthens job profiles":
                             course.title === "Data Engineering Course in Mumbai"?
                             "Upon successful completion, learners receive a professional certification from Ivy Professional School, validating industry-relevant data engineering skills.":
                             course.title === "Data Engineering Course in Pune"?
                             "Upon successful completion, learners receive a professional certification from Ivy Professional School. This certification validates industry-relevant data engineering skills and enhances employability.":
                             course.title ==="Data Engineering Course in Chennai"?
                             "Upon successful completion of the program, learners receive a professional certification from Ivy Professional School. This certification validates industry-relevant data engineering skills and strengthens employability.":
                             course.title === "Data Analytics and Generative AI Course" ?
                                "Earn Ivy’s Data Science with Visualization certificate and prove your command over Excel, SQL, Python, Tableau & Power BI. Backed by 1:1 mentoring, this certification blends dashboarding, predictive modeling & automation into job-ready expertise." :
                                course.title === "Data Analytics Course" || course.title === "Data Analytics Course in Kolkata" || course.title === "Data Analytics Course in Delhi" || course.title === "Data Analytics Course in Bangalore" || course.title === "Data Analytics Course in Mumbai" ?
                                 "This dual-focus certification covers both analytical techniques and visualization best practices for comprehensive data storytelling." :
                                  course.title === "Cloud Data Engineering Course with IIT Guwahati" ?
                                    "The Executive Certification in Cloud Data Engineering with IIT Guwahati combines academic rigor with industry-relevant cloud technologies." :
                                    course.title === "AI for Product Managers" ?
                                      "This product management certification empowers product managers to lead AI-driven transformations, equipping you with future-ready skills for high-impact roles across industries." :
                                      course.title === "Data science course (Pay after Placement)" ?
                                        "This certification demonstrates your proficiency in end-to-end data science workflows, from data cleaning to deploying ML models." :
                                        null
                      }
                    </p>
                  </div>

                  <div style={{
                    backgroundColor: 'white',
                    color: 'black',
                    borderRadius: '16px',
                    padding: '24px',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                    border: '1px solid #87CEEB',
                    position: 'relative',
                    boxShadow: `
          0 0 0 1px rgba(135, 206, 235, 0.3),
          2px 2px 0 0 rgba(135, 206, 235, 0.2),
          4px 4px 8px 0 rgba(135, 206, 235, 0.3),
          6px 6px 16px 0 rgba(135, 206, 235, 0.2),
          inset -2px -2px 4px rgba(0,0,0,0.05),
          inset 2px 2px 4px rgba(255,255,255,0.5)
        `,
                    transform: 'perspective(500px) rotateX(1deg)',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{
                      filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.2)) drop-shadow(2px 2px 3px rgba(135, 206, 235, 0.4))',
                      transform: 'translateZ(8px)',
                      transition: 'all 0.3s ease'
                    }}>
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Award size={18} className="text-primary" />
                      </div>
                    </div>
                    <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                      {(course.title === "Generative AI Course" || course.title === "Data Science with Machine Learning & AI Certification") ?
                        "A stamp of approval from E&ICT Academy, tells prospective recruiters that your skillset is held to a high standard compared to regular certifications which will help in landing your well-paying dream job!" :
                        course.title === "Data Science Course in Kolkata" ?
                          "On successful completion, students receive a Data Science Certification from Ivy Professional School, validating their skills in analytics, machine learning, and AI. This certification strengthens resumes and improves employability in competitive job markets." :
                          course.title === "Data Science with Machine Learning & AI Course in Delhi" ?
                            "Students receive a Data Science Certification from Ivy Professional School upon successful completion, validating their expertise in analytics, machine learning, and AI." :
                            course.title === "Data Science with Machine Learning & AI Course in Pune" ?
                              "Upon successful completion, students receive a Data Science Certification from Ivy Professional School, validating their skills in analytics, machine learning, and AI." :
                              course.title === "Data Science with Machine Learning & AI Course in Chennai" ?
                                "On successful completion, students receive a Data Science Certification from Ivy Professional School, validating their skills in analytics, machine learning, and AI." :
                                course.title === "Data Science with Machine Learning & AI Course in Bangalore" ?
                                  "Upon successful completion of the program, learners receive a Data Science Certification from Ivy Professional School. This certification validates your skills in data analysis, machine learning, and applied AI, making your profile more credible in the Bangalore job market." :
                                  course.title === "Data Science with Machine Learning & AI Course in Mumbai" ?
                                    "Upon successful completion, learners receive a Data Science Certification from Ivy Professional School, validating their expertise in data analysis, machine learning, and applied AI—highly valued by employers in Mumbai’s corporate and financial sectors." :
                                   course.title==="Data Analytics Course in Kolkata"?
                                   "Upon successful completion, learners receive a professional certification from Ivy Professional School, validating industry-relevant data analytics skills.":
                                   course.title==="Data Analytics Course in Bangalore"?
                                   "Upon successful completion, learners receive a professional certification from Ivy Professional School, validating industry-relevant data analytics skills and enhancing employability.":
                                    (course.title === "Data Engineering Course" || course.title === "Data Engineering Course in Kolkata") ?
                                      "Show recruiters you're cloud-ready, with hands-on skills in AWS, GCP, and Azure. This certification validates your ability to design scalable pipelines and apply data engineering tools to real-world projects." :
                                      course.title === "Data Analytics and Generative AI Course" ?
                                        "Trusted by 100+ recruiters, this certificate shows your hands-on mastery in data storytelling and analytics tools—validated through real-world projects in telecom, pharma, retail, and BFSI sectors." :
                                        course.title === "AI for Product Managers" ?
                                          "By completing certifications for product management, you gain hands-on expertise in AI adoption frameworks, prompt engineering, and GenAI strategy." :
                                          "Validates your ability to implement machine learning algorithms and AI solutions to solve complex business problems."
                      }
                    </p>
                  </div>
                </div>

                {/* Right Column: Image and CTA Button */}
                <div style={{
                  flex: '1 1 300px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '24px'
                }}>
                  <Image
                    src={
                      course.title === "Generative AI Course" ? genaicertificate :
                        course.title === "Data Science with Machine Learning & AI Certification" || course.title === "Data Science with Machine Learning & AI Course in Kolkata" || course.title === "Data Science with Machine Learning & AI Course in Delhi" || course.title === "Data Science with Machine Learning & AI Course in Pune" || course.title === "Data Science with Machine Learning & AI Course in Chennai" || course.title === "Data Science with Machine Learning & AI Course in Bangalore" || course.title === "Data Science with Machine Learning & AI Course in Mumbai"  ||course.title ==="Data Engineering Course in Delhi"  || course.title ==="Data Engineering Course in Bangalore" || course.title ==="Data Engineering Course in Mumbai" || course.title === "Data Engineering Course in Pune"  || course.title === "Data Engineering Course in Chennai" ? NASSCOMML :
                          course.title === " Data Engineering Course" || course.title === "Data Engineering Course in Kolkata" ? Cdec :
                            course.title === "Data Analytics and Generative AI Course" ? Dsvc :
                              course.title === "Data Analytics Course" || course.title === "Data Analytics Course in Kolkata" || course.title === "Data Analytics Course in Delhi" || course.title === "Data Analytics Course in Bangalore" || course.title === "Data Analytics Course in Mumbai" ?  Davc :
                                course.title === "Cloud Data Engineering Course with IIT Guwahati" ? Nc :
                                  course.title === "AI for Product Managers" ? Pmc :
                                    course.title === "AI and Machine Learning Course" ? AIML :
                                      course.title === "Data science course (Pay after Placement)" ? PAPC : ""
                    }
                    alt="Certificate"
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      borderRadius: '12px',
                      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
                    }}
                  />

                  {/* Corrected CTA Button using Tailwind to avoid Server Error */}
                  <a
                    href="/verify-certificate"
                    className="w-full py-4 text-white text-lg font-semibold rounded-lg text-center transition-all duration-200"
                    style={{
                      backgroundColor: '#00adef',
                      boxShadow: '0 4px 14px 0 rgba(0, 173, 239, 0.39)',
                      display: 'block'
                    }}
                    // Using CSS hover via Tailwind classes for server compatibility
                    onMouseEnter={undefined}
                  >
                    Verify Certificate
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-center">Who are Ivy Pro School's hiring partners and where can I get placed?</h3>

              {/* First row - full width container */}
              {/* If you want NO FADE like the reference image, remove 'logo-fade-mask' class below */}
              <div style={{ backgroundColor: 'white' }} className="relative overflow-hidden h-28 w-screen -ml-[calc(50vw-50%)] logo-fade-mask">
                <div className="absolute flex items-center animate-scroll-left space-x-4" style={{ width: '200%' }}> {/* Adjusted space-x back to 4 for balance */}
                  {partners.concat(partners).map((partner, index) => (
                    <div key={`first-${index}`} className="flex-shrink-0 flex items-center justify-center h-24 w-44"> {/* Added specific h, w, and flex centering for uniform logo slots */}
                      <Image
                        width={100}
                        height={100}
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-h-full max-w-full object-contain transition-all hover:opacity-90"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Second row - full width container */}
              {/* If you want NO FADE like the reference image, remove 'logo-fade-mask' class below */}
              <div style={{ backgroundColor: 'white' }} className="relative overflow-hidden h-28 w-screen -ml-[calc(50vw-50%)] -mt-8 logo-fade-mask">
                <div className="absolute flex items-center animate-scroll-right space-x-4" style={{ width: '200%' }}> {/* Adjusted space-x back to 4 for balance */}
                  {[...partners].reverse().concat([...partners].reverse()).map((partner, index) => (
                    <div key={`second-${index}`} className="flex-shrink-0 flex items-center justify-center h-24 w-44"> {/* Added specific h, w, and flex centering for uniform logo slots */}
                      <Image
                        height={100}
                        width={100}
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-h-full max-w-full object-contain transition-all hover:opacity-90"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </TabsContent>

          <TabsContent value="interview" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
              <h3 className="text-xl font-bold mb-4">Mock Interview Program</h3>
              <p className="mb-6">
                Practice makes perfect. Our comprehensive mock interview program is designed to prepare you for
                technical, behavioral, and case study interviews in the data science and AI industry.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Technical Interview Preparation</h4>
                  {
                    course.title != "AI for Product Managers" ?

                      <ul className="space-y-2">
                        {[
                          'Data structure & algorithm practice sessions',
                          'Machine learning theory deep dives',
                          'SQL and data manipulation challenges',
                          'System design interviews for ML/AI',
                          'Live coding sessions with feedback'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      :

                      <ul className="space-y-2">
                        {[
                          'AI strategy and opportunity mapping case discussions',
                          'Prompt design, RAG systems, and workflow automation questions',
                          'Product analytics and experimentation case studies',
                          'No-/Low-code AI prototyping challenges using Flowise or LangGraph',
                          'End-to-end AI feature design mock sessions with mentor feedback'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                  }


                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Behavioral Interview Preparation</h4>

                  {
                    course.title != "AI for Product Managers" ?

                      <ul className="space-y-2">
                        {[
                          'STAR method response preparation',
                          'Role-specific scenario practice',
                          'Leadership and teamwork examples',
                          'Cultural fit assessment practice',
                          'Detailed feedback and improvement plans'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      :
                      <ul className="space-y-2">
                        {[
                          'STAR method response training for product and leadership roles',
                          'Scenario-based practice for AI-driven decision-making and trade-offs',
                          'Cross-functional collaboration and stakeholder management examples',
                          'Product ownership and ethical AI scenario evaluations',
                          'Personalized feedback with career-specific improvement plans'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>


                  }
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-4">Interview Mentorship</h3>
              <p className="mb-4">
                Get 1-on-1 mentoring sessions with industry professionals who have been hiring managers at top tech companies.
              </p>

              {course.title != "AI for Product Managers" ?
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 text-center">
                    <div className="font-bold text-3xl text-primary mb-2">40+</div>
                    <p className="text-sm text-gray-600">Hours of interview preparation</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <div className="font-bold text-3xl text-primary mb-2">10+</div>
                    <p className="text-sm text-gray-600">Mock interviews with feedback</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <div className="font-bold text-3xl text-primary mb-2">5+</div>
                    <p className="text-sm text-gray-600">Industry expert mentors</p>
                  </div>
                </div>
                :

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 text-center">
                    <div className="font-bold text-3xl text-primary mb-2">20+</div>
                    <p className="text-sm text-gray-600">Hours of interview preparation</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <div className="font-bold text-3xl text-primary mb-2">5+</div>
                    <p className="text-sm text-gray-600">Mock interviews with feedback</p>
                  </div>
                  <div className="border rounded-lg p-4 text-center">
                    <div className="font-bold text-3xl text-primary mb-2">3+</div>
                    <p className="text-sm text-gray-600">Industry expert mentors</p>
                  </div>
                </div>


              }

            </div>
          </TabsContent>

          <TabsContent value="resume" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-4">ATS-Optimized Resume Building</h3>
                  <p className="mb-4">
                    Our career services team helps you create resumes that pass through Applicant Tracking Systems (ATS)
                    and catch the hiring manager's attention.
                  </p>

                  <ul className="space-y-3">
                    {[
                      'Keyword optimization for role-specific ATS requirements',
                      'Industry-standard formatting and layout best practices',
                      'Project showcase with quantifiable achievements',
                      'Technical skills highlighting and verification',
                      'Multiple tailored resumes for different job applications'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:w-1/3 bg-gray-50 p-4 rounded-lg border">
                  <div className="text-center mb-3">
                    <FileText className="h-10 w-10 text-primary mx-auto" />
                    <h4 className="font-semibold mt-2">Resume Success Rate</h4>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>ATS Pass Rate</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Interview Invitation</span>
                        <span className="font-medium">78%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Job Success Ratio</span>
                        <span className="font-medium">65%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold mb-4">LinkedIn & Portfolio Optimization</h3>
              <p className="mb-4">
                Beyond your resume, we help you create an impressive online presence with optimized LinkedIn profiles
                and professional portfolios to showcase your projects and skills.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">LinkedIn Profile Optimization</h4>
                  <ul className="space-y-2">
                    {[
                      'SEO-friendly headline and summary',
                      'Skills endorsement strategy',
                      'Recommendation acquisition tactics',
                      'Content sharing and engagement plan'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Portfolio Development</h4>
                  <ul className="space-y-2">
                    {[
                      'GitHub profile optimization',
                      'Project documentation best practices',
                      'Case study presentation formats',
                      'Personal website development guidance'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <style  >{`
        @keyframes scroll-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  
  @keyframes scroll-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  
  .animate-scroll-left {
    animation: scroll-left 40s linear infinite;
  }
  
  .animate-scroll-right {
    animation: scroll-right 40s linear infinite;
  }
      `}</style>
    </section>
  );
};

export default CourseJobSupport;
