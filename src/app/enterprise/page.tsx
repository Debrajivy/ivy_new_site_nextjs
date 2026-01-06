"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Briefcase, Award, Calendar, ArrowRight, GraduationCap, Phone, Mail, Send, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input'; // Add this line if not already present
import { Textarea } from '@/components/ui/textarea'; // Add this line if not already present
import Partners from '@/components/home/Partners';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'; // Add this line
import meityLogo from '@/assests/meity.webp';
import Nasscom from '@/assests/NASSCOM.webp';
import IBM from '@/assests/placement/IBM_MAIN.webp';
import IIT from "@/assests/IIT2.webp";
import img1 from "@/assests/img1.webp";
import img2 from "@/assests/img2.webp";
import img3 from "@/assests/img3.webp";
import microsoftd from "@/assests/microsoftd.webp";
import googled from "@/assests/googled.webp";
import ibmd from "@/assests/ibmd.webp"
import amazond from "@/assests/amazond.webp"
import deloitted from "@/assests/deloitted.webp";
import pwcd from "@/assests/pwcd.webp";
import capgeminid from "@/assests/capgeminid.webp";
import pwctra from "@/assests/Pwctra.webp";
import tescotra from "@/assests/Tescotra.webp";
import hsbctra from "@/assests/hsbctra.webp";
import tatatra from "@/assests/Tatatra1.webp";
import ITctra from "@/assests/ITCtra.webp";
import honeywelltra from "@/assests/Honeywelltra.webp";
import genpacttra from "@/assests/Genpacttra.webp";
import cognizanttra from "@/assests/Cognizanttra.webp";
import accenturetra from "@/assests/Accenturetra.webp";
import Link from "next/link"
import { Badge } from "@/components/ui/badge";

const Enterprise = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const officeLocations = [
    { city: 'Kolkata', address: 'PS Srijan Corporate Park, Unit 1205, Sector V, Bidhannagar, Kolkata, West Bengal 700091', mapUrl: 'https://maps.app.goo.gl/64QG4k62t7xWJ22v9' },
    { city: 'Delhi', address: 'Office No. 405, 4th Floor, Chawla House, Karol Bagh, New Delhi, Delhi 110005', mapUrl: 'https://maps.app.goo.gl/355r1sT4k2sH2QY1A' },
    { city: 'Mumbai', address: 'Office No. 601, 6th Floor, Marathon Futurex, Lower Parel, Mumbai, Maharashtra 400013', mapUrl: 'https://maps.app.goo.gl/9y8Z8N7M6sC4x5G27' },
    { city: 'Bangalore', address: 'WeWork Salarpuria Symbiosis, Bannerghatta Main Rd, Dollars Colony, Bengaluru, Karnataka 560076', mapUrl: 'https://maps.app.goo.gl/7g2R7D8F2J2Y4P5Z9' },
  ];
  const partners = [
    { name: 'Pwc', logo: pwctra },
    { name: 'Tesco', logo: tescotra },
    { name: 'HSBC', logo: hsbctra },
    { name: 'TataSteel', logo: tatatra },
    { name: 'ITC', logo: ITctra },
    { name: 'Honeywell', logo: honeywelltra },
    { name: 'Genpact', logo: genpacttra },
    { name: 'Cognizant', logo: cognizanttra },
    { name: 'Accenture', logo: accenturetra },
  ];

  const getAccreditationIcon = (description: string) => {
    switch (description) {
      case 'Academic Partner':
        return GraduationCap;
      case 'Recognized by MeitY':
        return GraduationCap;
      case 'Industry Standards':
        return Award;
      case 'Technology Partner':
        return Award;
      default:
        return null;
    }
  };

  const accreditations = [
    // {
    //   logo: IIT,
    //   description: 'Academic Partner',
    //   badge: 'Official Partner'
    // },
    {
      logo: meityLogo,
      description: 'Recognized by MeitY',
      badge: 'Govt. Recognition'
    },
    {
      logo: Nasscom,
      description: 'Industry Standards',
      badge: 'Learning Partner'
    },
    {
      logo: IBM,
      description: 'Technology Partner',
      badge: 'Learning Partner'
    }
  ];

  const enterpriseEvents = [
    {
      id: 1,
      company: "Business Insights at TESCO",
      image: img1,
      description: "Executive KPI dashboards workshop on Tableau"
    },
    {
      id: 2,
      company: "Agile & Sprint Planning at iQuanti",
      image: img3,
      description: "Session on real-time backlog management"
    },
    {
      id: 3,
      company: "Advanced AI for CXOs at Atlas Copco",
      image: img2,
      description: "Strategic Integration of AI for Manufacturing Leadership"
    },
  ];

  // Any side effects or data fetching can be done here
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);


  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      // Replace with your actual Google Apps Script Web App URL
      const response = await fetch('https://script.google.com/macros/s/AKfycbxuqkKfVM79_JTM2Hinc-EQMsFhFCGkg7YywOLMrQHnLGCwZa9wwjyVI2yIlgqa5cqYng/exec', {
        method: 'POST',
        mode: 'no-cors', // This is important for Google Apps Script to work
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      // Even with no-cors, you can't read the response. 
      // The script will work if there are no network errors.
      setStatusMessage('🎉 Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      }); // Reset form

    } catch (error) {
      console.error('Submission failed:', error);
      setStatusMessage('😢 Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenContactModal = () => {
    setIsContactModalOpen(true);
  };
  return (
    <>
      <Navbar />


      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#013a81] to-[#0256b4] text-white py-20">
          <div className="container mx-auto px-4" style={{marginTop:-30}}>
               <Badge
              style={{
                backgroundColor: "#4eaec3",
                color: "white",
                fontWeight: "normal",
              }}
              className="text-white hover:bg-white/20 w-fit mb-4"
            >
              <nav className="breadcrumbs">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/enterprise">Enterprise</Link>
                {/* Removed broken course link due to missing 'course' variable */}
              </nav>
            </Badge>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>

                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">

                  <Briefcase size={16} className="mr-2" />
                  Enterprise Solutions
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Upskill Your Workforce with Data & AI Training
                </h1>
                <p className="text-xl text-white/80 mb-8 max-w-xl">
                  Customized cohort-based training programs to equip your team with the skills needed to drive innovation and stay ahead in the data-driven world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" onClick={handleOpenContactModal}>

                    Request Consultation

                  </Button>
                  <a href="https://drive.google.com/file/d/1wBpItH2J12IOnUn7CWc_ykAduDODulk7/preview" target="_blank">
                    <Button size="lg" variant="outline" className="bg-white/10">
                      Download Brochure
                    </Button>
                  </a>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Enterprise training"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By */}
        <div className=" bg-white">


          {/* Fortune 500 Partners Section */}
          <div className="mb-8 mt-12">
            <h2 className="text-center text-lg sm:text-xl font-medium text-gray-600 px-2">
              Ivy led AI Transformation in Fortune 500 Companies          </h2>
          </div>

          {
            <div className="flex flex-wrap justify-center items-center gap-x-0 gap-y-0 sm:gap-x-6 sm:gap-y-4">
              {partners.map((partner) => (
                <div key={partner.name} className="flex items-center justify-center w-[calc(33.333%)] sm:w-24 h-20 sm:h-24">
                  <img
                    src={partner.logo.src}
                    alt={`${partner.name} logo`}
                    className="h-14 sm:h-16 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                  />
                </div>
              ))}

              <div className="flex items-center justify-center w-full sm:w-auto h-20 sm:h-24 mt-2 sm:mt-0">
                <p style={{ marginTop: 30, fontWeight: 'bold' }} className="text-gray-500 text-sm sm:text-base font-light opacity-70 leading-tight text-center">
                  and many more...
                </p>
              </div>
            </div>
          }
        </div>

        {/* Solutions */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Tailored Enterprise Solutions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We design custom training programs that address your organization's specific needs and challenges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Team Upskilling</h3>
                  <p className="text-gray-600 mb-4">
                    Enhance your existing team's capabilities with comprehensive training in data science, AI, and data engineering.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {['Customized curriculum', 'Hands-on projects', 'Progress tracking', 'Certification'].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline" onClick={handleOpenContactModal}> {/* Add onClick */}
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Modal */}
              <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
                <DialogContent className="sm:max-w-[700px] rounded-lg"> {/* Centered modal with max-width */}
                  <div className=" px-6">
                    <div className="w-full max-w-2xl mx-auto"> {/* Centers content */}

                      {/* Contact Form */}
                      <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                            <Input
                              id="name"
                              placeholder="Your name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className="rounded-md w-full"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Your email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="rounded-md w-full"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                          <Input
                            id="subject"
                            placeholder="How can we help you?"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="rounded-md w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                          <Textarea
                            id="message"
                            placeholder="Please describe your query in detail..."
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="rounded-md w-full"
                          />
                        </div>
                        <div>
                          <Button
                            type="submit"
                            className="bg-ivy-blue w-full sm:w-auto"
                            size="lg"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                            <Send className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                        {statusMessage && (
                          <p className={`mt-4 ${statusMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                            {statusMessage}
                          </p>
                        )}

                      </form>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>


              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Custom Projects</h3>
                  <p className="text-gray-600 mb-4">
                    Develop real-world solutions for your business challenges through our project-based learning approach.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {['Business problem analysis', 'Solution architecture', 'Guided implementation', 'Knowledge transfer'].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline" onClick={handleOpenContactModal}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Flexible Delivery</h3>
                  <p className="text-gray-600 mb-4">
                    Choose from various delivery formats that fit your team's schedule and learning preferences.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {['Live virtual training', 'On-site workshops', 'Hybrid approach', 'Self-paced options'].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline" onClick={handleOpenContactModal}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className=" bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                A systematic process designed to deliver maximum impact and ROI for your organization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Needs Assessment</h3>
                <p className="text-gray-600">
                  We analyze your current capabilities and identify skills gaps to target.
                </p>
              </div>

              <div className="text-center">
                <div className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Program Design</h3>
                <p className="text-gray-600">
                  Custom curriculum developed to address your specific business objectives.
                </p>
              </div>

              <div className="text-center">
                <div className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Implementation</h3>
                <p className="text-gray-600">
                  Expert-led training delivered in the format that works best for your team.
                </p>
              </div>

              <div className="text-center">
                <div className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Evaluation & Support</h3>
                <p className="text-gray-600">
                  Ongoing assessment and guidance to ensure knowledge retention and application.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">

            <div className="container mx-auto px-4">
              <div className="mb-8 md:mb-12">
                <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-4 px-2">
                  Stand out with our Reputed Partnership Certification
                </h2>
              </div>

              {/* UPDATED ACCREDITATIONS SECTION STARTS HERE */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                {accreditations.map((item) => {
                  const IconComponent = getAccreditationIcon(item.description);
                  return (
                    <div
                      key={item.description}
                      className="relative flex flex-col items-center p-4 bg-white rounded-lg shadow-sm text-center w-full max-w-[220px]" // Removed border styles here
                    >
                      {/* Top-right icon with light outer border and 3D shade */}
                      {IconComponent && (
                        <div className="absolute -top-3 -right-3 p-1 rounded-full bg-white shadow-lg flex items-center justify-center">
                          <div className="bg-[#00a1db] rounded-full p-2 flex items-center justify-center">
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      )}

                      {/* Big Size Logo - Directly on the card, no nested border/box */}
                      <div style={{ marginTop: -20 }} className="flex items-center justify-center mb-4">
                        <img
                          src={item.logo.src}
                          alt={`${item.description} logo`}
                          className="h-32 w-32 object-contain" // Increased size to h-32 w-32
                        />
                      </div>

                      <p style={{ marginTop: -30 }} className="text-base font-medium text-gray-700 mb-2 leading-tight">{item.description}</p>

                      {/* Badge as blue text with checkmark */}
                      <span className="text-[#00a1db] text-sm flex items-center gap-1 font-medium whitespace-nowrap">
                        <CheckCircle className="h-3.5 w-3.5" />
                        {item.badge}
                      </span>
                    </div>
                  );
                })}
              </div>


              {/* Enterprise Training in Action Section */}
              <div style={{ backgroundColor: '#e3e8eb', marginTop: '40px', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }} className="py-8 md:py-12">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-8">
                    <div className="flex flex-col items-center gap-2">
                      <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2 px-2">
                        How Does Ivy Pro School Enable Enterprise in AI Transformation?
                      </h2>
                      <p className="text-gray-500 text-sm max-w-2xl mx-auto px-2">
                        Join 500+ companies who trust Ivy Professional School for their data science and AI training needs
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {enterpriseEvents.map((event) => (
                      <Card key={event.id} className="overflow-hidden border-none shadow-md">
                        <div>
                          <img
                            src={event.image.src}
                            alt={`Training at ${event.company}`}
                            className="w-full object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h4 style={{ color: '#00a1db' }} className="font-semibold text-lg">{event.company}</h4>
                          <p className="text-sm text-gray-600">{event.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ backgroundColor: '#014698' }} className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Organization?</h2>
              <p className="text-xl text-white/80 mb-8">
                Schedule a consultation with our enterprise team to discuss your training needs and how we can help you achieve your data and AI objectives.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" onClick={handleOpenContactModal} >

                  Schedule a Consultation
                </Button>

                <a href="https://drive.google.com/file/d/1wBpItH2J12IOnUn7CWc_ykAduDODulk7/preview" target="_blank">
                  <Button size="lg" variant="outline" className="bg-white/10">
                    Download Enterprise Brochure
                  </Button>
                </a>
                {/* <Button size="lg" variant="outline" className="bg-white/10" >
                  Download Enterprise Brochure
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Enterprise;