import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Briefcase, FileText, Users, Award, BarChart, GraduationCap, Zap, GitBranch, Headset, UserRound, TrendingUp, Video,ClipboardCheck, FileSpreadsheet, Mic, Cpu,UserCheck } from 'lucide-react';
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
  const isAICourse = course.title === "AI for Entrepreneurs";

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

  // Conditional rendering for AI for Entrepreneurs course
  if (isAICourse) {
    return (
      <section style={{ marginTop: -10 }} className="py-5 bg-primary/5">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How does Ivy Pro School help you implement AI in your business?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We don't just teach AI — we help you implement it. From your first class to your first live automation, our team supports you every step of the way.
            </p>
          </div>

          {/* Tab Section for Implementation Support */}
          <Tabs defaultValue="post-program" className="max-w-5xl mx-auto">


            <TabsList className="flex w-full justify-center items-center overflow-x-auto pb-2 gap-4 no-scrollbar mb-8">
              <TabsTrigger value="live-projects" className="px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium flex-1 max-w-[200px] text-center bg-white shadow-sm">
                <span className="sm:hidden">Projects</span>
                <span className="hidden sm:inline">Live Projects</span>
              </TabsTrigger>
              <TabsTrigger value="post-program" className="px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium flex-1 max-w-[200px] text-center bg-white shadow-sm">
                <span className="sm:hidden">Support</span>
                <span className="hidden sm:inline">Post Program Support</span>
              </TabsTrigger>
              <TabsTrigger value="implementation" className="px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium flex-1 max-w-[200px] text-center bg-white shadow-sm">
                <span className="sm:hidden">Implementation</span>
                <span className="hidden sm:inline">AI Implementation Program</span>
              </TabsTrigger>

            </TabsList>


            <TabsContent value="live-projects" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Project 1: Sales Analyzer */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <TrendingUp className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Build AI Sales Analyzer & Predictor</h3>
                        <p className="text-gray-600">
                          Upload sales data and instantly get insights on top products, weak SKUs and revenue trends. Use ML to predict future growth.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Project 2: Marketing Studio */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Video className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Create AI Marketing Studio</h3>
                        <p className="text-gray-600">
                          Create product photos, lifestyle visuals, Reels and ad campaigns using AI — no designer needed.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Project 3: Business Integration */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Cpu className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Integrate AI Agents in your Business</h3>
                        <p className="text-gray-600">
                          Build a live agent for complaint handling, lead qualification or invoice processing.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Project 4: Sales Pitch & Proposal */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <FileSpreadsheet className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Automate Sales Pitch & Proposal Generation</h3>
                        <p className="text-gray-600">
                          Build a Web Application which reads client requirement, your product portfolio and instantly generates a professional quotation or pitch deck.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Project 5: Voice Agent */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Mic className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Build AI Customer Complaint Voice Agent Tool</h3>
                        <p className="text-gray-600">
                          Deploy a working voice agent to handle customer issues.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </TabsContent>

            {/* Tab 1: Post Program Support */}
            <TabsContent value="post-program" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <FileText className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">90-Day AI Roadmap Support</h3>
                        <p className="text-gray-600">
                          Our team helps you execute your personalized AI roadmap — ensuring tools, workflows and automations are actually running in your business.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Users className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Entrepreneur Community Access</h3>
                        <p className="text-gray-600">
                          Join an exclusive network of business owners implementing AI — share challenges, exchange ideas and grow together.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Headset className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">AI Tool Helpdesk</h3>
                        <p className="text-gray-600">
                          Stuck setting up a tool or workflow? Our support team is available to troubleshoot and guide you through any implementation challenge.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <UserRound className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">1:1 Business Consultation</h3>
                        <p className="text-gray-600">
                          Get a dedicated session with an AI business expert to identify the highest ROI opportunities specific to your industry and business model.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Tab 2: AI Implementation Program */}
            <TabsContent value="implementation" className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-primary/20">
                <h3 className="text-2xl font-bold mb-2">AI Implementation Program</h3>
                <p className="text-gray-600 mb-8">
                  Not sure where to begin? Our AI Implementation Program is designed to help you apply every tool and workflow from the course directly into your business operations — with expert guidance at every step.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Tool Setup & Configuration</span>
                        <p className="text-sm text-gray-600">ChatGPT and Claude setup for business use</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Visual Content Creation</span>
                        <p className="text-sm text-gray-600">Canva AI for product photos and reels</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Marketing Strategy</span>
                        <p className="text-sm text-gray-600">AI content generation for marketing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Data Intelligence</span>
                        <p className="text-sm text-gray-600">Excel AI and Power BI for sales insights</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">No-Code Development</span>
                        <p className="text-sm text-gray-600">Vibe coding tool deployment</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Workflow & Automation Support</span>
                        <p className="text-sm text-gray-600">Building your first automation on Zapier or Make</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Operational Integration</span>
                        <p className="text-sm text-gray-600">Connecting tools across your business workflow</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Service Automation</span>
                        <p className="text-sm text-gray-600">Customer support automation setup</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Business Operations</span>
                        <p className="text-sm text-gray-600">Invoice and lead management automation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Maintenance & QA</span>
                        <p className="text-sm text-gray-600">Testing and troubleshooting live workflows</p>
                      </div>


                    </div>


                  </div>

                </div>
                <div style={{ marginTop: 10 }} className="bg-white p-8 rounded-xl shadow-sm border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4">AI Implementation Mentorship</h3>
                  <p className="text-gray-600 mb-8">
                    Get 1-on-1 sessions with AI business experts who have implemented AI across manufacturing, retail, e-commerce and service businesses.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="border rounded-lg p-6 text-center bg-primary/5">
                      <div className="font-bold text-4xl text-primary mb-2">20+</div>
                      <p className="text-gray-600">Hours of implementation support</p>
                    </div>
                    <div className="border rounded-lg p-6 text-center bg-primary/5">
                      <div className="font-bold text-4xl text-primary mb-2">8+</div>
                      <p className="text-gray-600">Hands-on business exercises</p>
                    </div>
                    <div className="border rounded-lg p-6 text-center bg-primary/5">
                      <div className="font-bold text-4xl text-primary mb-2">5+</div>
                      <p className="text-gray-600">AI business expert mentors</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <div style={{ marginTop: 50 }}>
              {
                course.title === "AI for Entrepreneurs" ?
                  <h3 className="text-2xl font-bold mb-4 text-center">Which businesses have trained their teams in AI with Ivy Pro School?</h3>
                  :
                  <h3 className="text-2xl font-bold mb-4 text-center">Who are Ivy Pro School's hiring partners and where can I get placed?</h3>

              }

              <div style={{ backgroundColor: 'white' }} className="relative overflow-hidden h-28 w-screen -ml-[calc(50vw-50%)] logo-fade-mask">
                <div className="absolute flex items-center animate-scroll-left space-x-4" style={{ width: '200%' }}>
                  {partners.concat(partners).map((partner, index) => (
                    <div key={`first-${index}`} className="flex-shrink-0 flex items-center justify-center h-24 w-44">
                      <Image
                        width={100}
                        height={100}
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-h-full max-w-full object-contain transition-all hover:opacity-90"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ backgroundColor: 'white' }} className="relative overflow-hidden h-28 w-screen -ml-[calc(50vw-50%)] -mt-8 logo-fade-mask">
                <div className="absolute flex items-center animate-scroll-right space-x-4" style={{ width: '200%' }}>
                  {[...partners].reverse().concat([...partners].reverse()).map((partner, index) => (
                    <div key={`second-${index}`} className="flex-shrink-0 flex items-center justify-center h-24 w-44">
                      <Image
                        loading="lazy"
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
          </Tabs>

          {/* Hiring Partners Section */}
          {/* <div className="mt-16">
            <h3 className="text-2xl font-bold mb-4 text-center">Which businesses have trained their teams in AI with Ivy Pro School?</h3>
            <div style={{ backgroundColor: 'white' }} className="relative overflow-hidden h-28 w-screen -ml-[calc(50vw-50%)] logo-fade-mask">
              <div className="absolute flex items-center animate-scroll-left space-x-4" style={{ width: '200%' }}>
                {partners.concat(partners).map((partner, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 flex items-center justify-center h-24 w-44">
                    <Image
                      width={100}
                      height={100}
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-full max-w-full object-contain transition-all hover:opacity-90"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div style={{ backgroundColor: 'white' }} className="relative overflow-hidden h-28 w-screen -ml-[calc(50vw-50%)] -mt-8 logo-fade-mask">
              <div className="absolute flex items-center animate-scroll-right space-x-4" style={{ width: '200%' }}>
                {[...partners].reverse().concat([...partners].reverse()).map((partner, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 flex items-center justify-center h-24 w-44">
                    <Image
                      loading="lazy"
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
          </div> */}
        </div>
        <style>{`
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
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>
    );
  }

  // Original return for all other courses
  return (
    <section style={{ marginTop: -10 }} className="py-5 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          
            
          {
            course.title!="AI for Beginners"?
            <h2 className="text-3xl font-bold mb-4">What kind of career support does Ivy Pro School provide?</h2>
            :
                   <h2 className="text-3xl font-bold mb-4">What kind of support does Ivy Pro School provide?</h2>
          }

          {
            course.title!="AI for Beginners"?
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our career services team is dedicated to helping you launch or advance your career in the tech industry.
            We provide end-to-end support from resume building to job placement.
          </p>
          :

  <p className="text-gray-600 max-w-3xl mx-auto">
            From your first session to your final showcase, we are with you every step of the way — with expert guidance, peer learning, and hands-on mentorship.
          </p>
          }
        </div>

        <Tabs defaultValue="placement" className="max-w-5xl mx-auto">


          {

            course.title!="AI for Beginners"?

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
          :

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
              <span className="inline sm:hidden">Learning </span>
              <span className="hidden sm:inline">Learning Support</span>
            </TabsTrigger>
            <TabsTrigger
              value="interview"
              className="px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium flex-1 max-w-[180px] text-center bg-white shadow-sm"
            >
              <span className="inline sm:hidden">Networking</span>
              <span className="hidden sm:inline">Community & Networking</span>
            </TabsTrigger>
            <TabsTrigger
              value="resume"
              className="px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium flex-1 max-w-[180px] text-center bg-white shadow-sm"
            >
              <span className="inline sm:hidden">Resume</span>
              <span className="hidden sm:inline">Resume Building</span>
            </TabsTrigger>
          </TabsList>


          }

          
        


          <TabsContent value="placement" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {
                course.title!="AI for Beginners"?
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
              :
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Briefcase className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Live Doubt-Clearing Sessions</h3>
                      <p className="text-gray-600">
                       Every session comes with dedicated time for questions. Instructors are available to clear doubts in real time so no concept is left behind.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card> 

              }



              {/* {course.title != "AI for Product Managers" ?

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


              } */}


              {
  course.title === "AI for Product Managers" ? null : 
  course.title === "AI for Beginners" ? (
    /* Card for AI for Beginners - showing Mentorship info from your image */
    <Card>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <UserCheck className="text-primary h-6 w-6" /> 
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">1:1 Instructor Mentorship</h3>
            <p className="text-gray-600">
              Get personalised attention from instructors who review your work, 
              guide your projects, and help you get the most out of every session.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  ) : (
    /* Default Card for all other courses - Career Fairs */
    <Card>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Users className="text-primary h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Career Fairs & Networking</h3>
            <p className="text-gray-600">
              Access exclusive hiring events, industry meetups, and networking 
              opportunities with top companies in the tech and data science fields.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

              {/* {course.title != "AI for Product Managers" ?
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

              } */}

              {
  course.title === "AI for Product Managers" ? null : 
  course.title === "AI for Beginners" ? (
    /* Card for AI for Beginners - Session Recordings & Resources */
    <Card>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Video className="text-primary h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Session Recordings & Resources</h3>
            <p className="text-gray-600">
              Missed a session or want to revise? Access recorded sessions and curated 
              resources anytime during the program.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  ) : (
    /* Default Card - Job Guarantee Program */
    <Card>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <Award className="text-primary h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Job Guarantee Program</h3>
            <p className="text-gray-600">
              Eligible students can opt for our job guarantee program, ensuring you land a 
              role within 6 months of graduation or receive a full tuition refund.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


              {/* <Card>
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
              </Card> */}
{
  course.title === "AI for Product Managers" ? null : 
  course.title === "AI for Beginners" ? (
    /* Card for AI for Beginners - Weekly Assignments & Feedback */
    <Card>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <ClipboardCheck className="text-primary h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Weekly Assignments & Feedback</h3>
            <p className="text-gray-600">
              Structured take-home assignments after every session with written 
              feedback from instructors to track your progress week by week.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  ) : (
    /* Default Card - Salary Negotiation Support */
    <Card>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-full mr-4">
            <BarChart className="text-primary h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Salary Negotiation Support</h3>
            <p className="text-gray-600">
              Get guidance on evaluating job opportunities, negotiating compensation 
              packages, and understanding industry salary benchmarks for your role 
              and experience level.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}



            </div>

            <div style={{
              backgroundColor: '#ffffff',
              padding: '30px 20px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
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
                      {course.title === "Generative AI Course" || course.title === "Generative AI Course in Kolkata" || course.title === "Generative AI Course in Delhi" || course.title === "Generative AI Course in Pune" || course.title === "Generative AI Course in Chennai" || course.title === "Generative AI Course in Bangalore" || course.title === "Generative AI Course in Mumbai" ?
                        "The Executive Certification in GenAI ensures quality and comprehensiveness of content coverage as well as ample credibility in the Data Engineering field." :
                        course.title === "Data Science with Machine Learning & AI Certification" || course.title === "Data Science with Machine Learning & AI Course in Kolkata" || course.title === "Data Science with Machine Learning & AI Course in Delhi" || course.title === "Data Science with Machine Learning & AI Course in Pune" || course.title === "Data Science with Machine Learning & AI Course in Chennai" || course.title === "Data Science with Machine Learning & AI Course in Bangalore" || course.title === "Data Science with Machine Learning & AI Course in Mumbai" ?
                          "The Executive Certification in Data Science, widely regarded as one of the best data science courses in India. This program ensures a high standard of quality and comprehensive content coverage, making it a top choice for those seeking credibility and expertise in the field of Data Science." :
                          course.title === " Data Engineering Course" || course.title === "Data Engineering Course in Kolkata" ?
                            "Launch your cloud career with an elite certification FROM Ivy Pro School. Designed with experts from Amazon & Accenture, it proves your ability to build real-time data systems using Spark, Kafka, and AWS." :
                           course.title ==="AI and Machine Learning Course" ?
                              "The AI and Machine Learning Certification from Ivy Pro School is a prestigious credential that validates your expertise in AI and ML concepts, tools, and applications. It demonstrates your ability to design, build, and deploy AI and ML solutions, making you a valuable asset in the rapidly evolving field of artificial intelligence." :
                            course.title === "Data Engineering Course in Delhi" ?
                              "Upon successful completion, learners receive a professional certification from Ivy Professional School. The certification validates job-ready data engineering skills and enhances employability."
                              :
                              course.title === "AI for Entrepreneurs" || course.title === "AI for Beginners" ? "This certification validates your ability to strategically implement AI automation and no-code solutions to scale business operations and drive exponential growth." :
                                course.title === "Data Engineering Course in Bangalore" ?
                                  "Upon successful completion of the program, learners receive a professional certification from Ivy Professional School. This certification validates industry-relevant data engineering skills and strengthens job profiles" :
                                  course.title === "Data Engineering Course in Mumbai" ?
                                    "Upon successful completion, learners receive a professional certification from Ivy Professional School, validating industry-relevant data engineering skills." :
                                    course.title === "Data Engineering Course in Pune" ?
                                      "Upon successful completion, learners receive a professional certification from Ivy Professional School. This certification validates industry-relevant data engineering skills and enhances employability." :
                                      course.title === "Data Engineering Course in Chennai" ?
                                        "Upon successful completion of the program, learners receive a professional certification from Ivy Professional School. This certification validates industry-relevant data engineering skills and strengthens employability." :
                                        course.title === "Data Analytics and Generative AI Course" ?
                                          "Earn Ivy’s Data Science with Visualization certificate and prove your command over Excel, SQL, Python, Tableau & Power BI. Backed by 1:1 mentoring, this certification blends dashboarding, predictive modeling & automation into job-ready expertise." :
                                          course.title === "Data Analytics With Visualization" || course.title === "Data Analytics With Visualization in Kolkata" || course.title === "Data Analytics With Visualization in Delhi" || course.title === "Data Analytics With Visualization in Bangalore" || course.title === "Data Analytics With Visualization in Mumbai" || course.title === "Data Analytics With Visualization in Pune" ?
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
                                    course.title === "Data Analytics With Visualization in Kolkata" ?
                                      "Upon successful completion, learners receive a professional certification from Ivy Professional School, validating industry-relevant data analytics skills." :
                                      course.title === "Generative AI Course in Kolkata" || course.title === "Generative AI Course in Delhi" || course.title === "Generative AI Course in Mumbai" ?
                                        " Upon successful completion, learners receive a Generative AI Certification from Ivy Professional School, validating skills in advanced AI development and model deployment. This certification adds credibility to your resume and LinkedIn profile."
                                        :
                                        course.title === "Data Analytics With Visualization in Bangalore" ?
                                          "Upon successful completion, learners receive a professional certification from Ivy Professional School, validating industry-relevant data analytics skills and enhancing employability." :
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

                <div style={{
                  flex: '1 1 300px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '24px'
                }}>
                  <Image
                    src={
                      course.title === "Generative AI Course" || course.title === "Generative AI Course in Kolkata" || course.title === "Generative AI Course in Delhi" || course.title === "Generative AI Course in Pune" || course.title === "Generative AI Course in Chennai" || course.title === "Generative AI Course in Bangalore" || course.title === "Generative AI Course in Mumbai" ? genaicertificate :
                        course.title === "Data Science with Machine Learning & AI Certification" || course.title === "Data Science with Machine Learning & AI Course in Kolkata" || course.title === "Data Science with Machine Learning & AI Course in Delhi" || course.title === "Data Science with Machine Learning & AI Course in Pune" || course.title === "Data Science with Machine Learning & AI Course in Chennai" || course.title === "Data Science with Machine Learning & AI Course in Bangalore" || course.title === "Data Science with Machine Learning & AI Course in Mumbai" || course.title === "Data Engineering Course in Delhi" || course.title === "Data Engineering Course in Bangalore" || course.title === "Data Engineering Course in Mumbai" || course.title === "Data Engineering Course in Pune" || course.title === "Data Engineering Course in Chennai" ? NASSCOMML :
                          course.title === " Data Engineering Course" || course.title === "Data Engineering Course in Kolkata" ? Cdec :
                            course.title === "Data Analytics and Generative AI Course" ? Dsvc :
                              course.title === "Data Analytics With Visualization" || course.title === "Data Analytics With Visualization in Kolkata" || course.title === "Data Analytics With Visualization in Delhi" || course.title === "Data Analytics With Visualization in Bangalore" || course.title === "Data Analytics With Visualization in Mumbai" || course.title === "Data Analytics With Visualization in Pune" ? Davc :
                                course.title === "Cloud Data Engineering Course with IIT Guwahati" ? Nc :
                                  course.title === "AI for Product Managers" || course.title === "AI for Entrepreneurs" ? Pmc :
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

                  <a
                    href="/verify-certificate"
                    className="w-full py-4 text-white text-lg font-semibold rounded-lg text-center transition-all duration-200"
                    style={{
                      backgroundColor: '#00adef',
                      boxShadow: '0 4px 14px 0 rgba(0, 173, 239, 0.39)',
                      display: 'block'
                    }}
                    onMouseEnter={undefined}
                  >
                    Verify Certificate
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-center">Who are Ivy Pro School's hiring partners and where can I get placed?</h3>

              <div style={{ backgroundColor: 'white' }} className="relative overflow-hidden h-28 w-screen -ml-[calc(50vw-50%)] logo-fade-mask">
                <div className="absolute flex items-center animate-scroll-left space-x-4" style={{ width: '200%' }}>
                  {partners.concat(partners).map((partner, index) => (
                    <div key={`first-${index}`} className="flex-shrink-0 flex items-center justify-center h-24 w-44">
                      <Image
                        width={100}
                        height={100}
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-h-full max-w-full object-contain transition-all hover:opacity-90"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ backgroundColor: 'white' }} className="relative overflow-hidden h-28 w-screen -ml-[calc(50vw-50%)] -mt-8 logo-fade-mask">
                <div className="absolute flex items-center animate-scroll-right space-x-4" style={{ width: '200%' }}>
                  {[...partners].reverse().concat([...partners].reverse()).map((partner, index) => (
                    <div key={`second-${index}`} className="flex-shrink-0 flex items-center justify-center h-24 w-44">
                      <Image
                        loading="lazy"
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