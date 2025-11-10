"use client";
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Award, Users } from 'lucide-react';
import { CheckCircle } from "lucide-react"

import ratingIcon from '@/assests/rating.png';
import { useRouter } from 'next/navigation';
import AutpPlayYoutube from '../AutoPlayYoutube';
import Link from 'next/link';

const Hero = () => {

  const router = useRouter(); // ⬅️ add this inside component

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    program: '',
    branch: '',
  });

  // State for form submission status and message
  const [submitStatus, setSubmitStatus] = useState<any>(null);
  const [submitMessage, setSubmitMessage] = useState<any>('');

  // LeadSquared API Details
  const LEAD_SQUARED_API_HOST = process.env.NEXT_PUBLIC_LEAD_SQUARED_API_HOST;
  const ACCESS_KEY = process.env.NEXT_PUBLIC_LEAD_SQUARED_ACCESS_KEY;
  const SECRET_KEY = process.env.NEXT_PUBLIC_LEAD_SQUARED_SECRET_KEY;

  const API_URL = `${LEAD_SQUARED_API_HOST}LeadManagement.svc/Lead.Capture?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setSubmitStatus('submitting');
    setSubmitMessage('Submitting your details...');

    // ✅ keep your full payload
    const payload = [
      {
        "Attribute": "EmailAddress",
        "Value": formData.email,
      },
      {
        "Attribute": "FirstName",
        "Value": formData.name,
      },
      {
        "Attribute": "Phone",
        "Value": formData.phone,
      },
      {
        "Attribute": "mx_Citywise",
        "Value": formData.city,
      },
      {
        "Attribute": "mx_Program",
        "Value": formData.program,
      },
      {
        "Attribute": "mx_What_is_Your_Nearest_Branch",
        "Value": formData.branch,
      },
      // {
      //   "Attribute": "Source",
      //   "Value": "Organic Search",
      // }
    ];

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("LeadSquared API Response:", result);

        if (result && result.Status === "Success") {
          setSubmitStatus('success');
          setSubmitMessage('Form submitted successfully!');

          // ✅ Redirect to Thank You page after submission
          setTimeout(() => {
            router.push('/thank-you'); // unique URL for GTM conversion tracking
          }, 1500);
        } else {
          setSubmitStatus('error');
          setSubmitMessage(result.Message || 'An error occurred during submission. Please try again.');
        }
      } else {
        setSubmitStatus('error');
        setSubmitMessage(`Failed to submit form. Server responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Network or JavaScript error during form submission:", error);
      setSubmitStatus('error');
      setSubmitMessage('An error occurred. Please check your internet connection and try again.');
    }
  };
  return (
    <div className="relative bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Centered Heading */}
        <div className="w-full text-center mb-6 md:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            India's #1 <span className="text-[#009fda]">Data & GenAI</span> Training Institute
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-8">
          {/* Left Column - Video and Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* YouTube Video */}
            <div className="relative rounded-xl overflow-hidden shadow-lg w-full h-0 pb-[56.25%] lg:pb-[65%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/3uHQEQ65yJM?autoplay=1&mute=1&loop=1&playlist=3uHQEQ65yJM"
                title="Ivy Professional School Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading='lazy'
              ></iframe>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg shadow-sm">
                <Award className="text-primary" size={18} />
                <div>
                  <div className="font-bold text-md">17+</div>
                  <div className="text-xs text-gray-500">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg shadow-sm">
                <Users className="text-primary" size={18} />
                <div>
                  <div className="font-bold text-md">32.5K+</div>
                  <div className="text-xs text-gray-500">Students Trained</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg shadow-sm">
                <Users className="text-primary" size={18} />
                <div>
                  <div className="font-bold text-md">59%</div>
                  <div className="text-xs text-gray-500">Avg. Salary Hike</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-2">
              <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg shadow-sm">
                <Award className="text-primary" size={18} />
                <div>
                  <div className="font-bold text-md">1:1</div>
                  <div className="text-xs text-gray-500"> Doubt Resolution </div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg shadow-sm">
                <Users className="text-primary" size={18} />
                <div>
                  <div className="font-bold text-md">30 min.</div>
                  <div className="text-xs text-gray-500">Practice Classes</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg shadow-sm">
                <Users className="text-primary" size={18} />
                <div>
                  <div className="font-bold text-md">100% </div>
                  <div className="text-xs text-gray-500">Recordings for Lifetime</div>
                </div>
              </div>
            </div>

            {/* Description - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:block mt-6">
  <p className="text-sm md:text-base text-gray-700">
    Land high-paying jobs by choosing Ivy Pro's courses that are accredited by
    <Link
      href="/courses/data-science-and-ml-course"
      className="font-bold"
      style={{color:'#013a81'}}
    >
      &nbsp;NASSCOM, IBM, Govt. of India (MEITY)
    </Link> 
    that compiled as per National Occupation Standards.
  </p>
</div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-1/2 flex">
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 w-full h-full flex flex-col">
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Join Two Classes for <span className="text-[#1a98cb]">FREE</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Learn with Experts & Industry Leaders from IIT & IIM
                </p>
              </div>

              <form className="space-y-4 flex-grow" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your Name*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Enter your Email*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Enter your phone*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base text-gray-700"
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  >
                    <option value="" disabled className="text-gray-400">Select your city*</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Pune">Pune</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                  </select>
                </div>
                {/* <div>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base text-gray-700"
                    required
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                  >
                    <option value="" disabled className="text-gray-400">What is your nearest branch?*</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Pune">Pune</option>
                  </select>
                </div> */}
                {/* <div>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base text-gray-700"
                    required
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                  >
                    <option value="" disabled className="text-gray-400">Select program*</option>
                    <option value="Business Analytics Program">Business Analytics Program</option>
                    <option value="Executive Data Science Course with IIT Guwahati">Executive Data Science Course with IIT Guwahati</option>
                    <option value="Executive Data Engineering Course with IIT Guwahati">Executive Data Engineering Course with IIT Guwahati</option>
                    <option value="Data Science with ML & AI Course (Nasscom)">Data Science with ML & AI Course (Nasscom)</option>
                    <option value="Gen AI Foundation Program">Gen AI Foundation Program</option>
                    <option value="Data Analytics with Visualization Program">Data Analytics with Visualization Program</option>
                    <option value="Cloud Data Engineering Program">Cloud Data Engineering Program </option>
                    <option value="Executive Gen AI Course with IIT Guwahati">Executive Gen AI Course with IIT Guwahati</option>
                  </select>
                </div> */}

                <div style={{ marginTop: 30 }} className="mt-auto pt-4">
                  <Button
                    type="submit"
                    className="w-full py-3 text-white font-medium"
                    style={{ backgroundColor: '#013a81' }}
                    disabled={submitStatus === 'submitting'}
                  >
                    {submitStatus === 'submitting' ? 'Applying...' : 'Apply Now'}
                  </Button>

                  {submitMessage && (
                    <p className={`text-center mt-2 text-sm ${submitStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                      {submitMessage}
                    </p>
                  )}

                  <div style={{ marginTop: 10 }} className="flex flex-wrap items-center justify-center gap-1 pt-2 text-sm">
                    <span className="text-[#1a98cb] font-medium">Next batch starting on 25 Oct, 2025</span>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                      <span className="text-red-600 font-medium">Limited seats left!</span>
                    </div>
                  </div>
                  {/* <div className="flex flex-col items-center mt-5 text-center" style={{ marginTop: -20 }}>
                    <div className="flex flex-col items-center mt-5 text-center">
                      <div className="bg-white shadow-md rounded-xl px-6 py-3 flex flex-wrap items-center justify-center text-[11px] sm:text-xs md:text-sm font-bold text-gray-800 gap-2 sm:gap-3">

                        <span style={{ color: '#013a81' }}>Dedicated Teaching Assistants for 1:1 doubt resolution.|</span>
                        <span style={{ color: '#013a81' }}>30-min practice classes before and after main sessions.|</span>
                        <span style={{ color: '#013a81' }}>Hybrid learning model with lifetime access to recordings.|</span>
                        <span style={{ color: '#013a81' }}>PrepAI career copilot: resume builder, mock interviews, recruiter connects.|</span>
                        <span style={{ color: '#013a81' }}>Active community groups on WhatsApp for peer and mentor interaction.|</span>
                        <span style={{ color: '#013a81' }}>Flexible payment plans with no-cost EMI and 4-month installments.|</span>
                      </div>
                    </div>


                  </div> */}









                </div>
              </form>
            </div>
          </div>

          {/* Description - Shown only on mobile after the form */}
          <div className="lg:hidden w-full mt-6">
            <p className="text-sm md:text-base text-gray-700">
              Land high-paying jobs by choosing Ivy Pro's courses that are accredited by NASSCOM, IIT and Govt. of India (MEITY) and compiled as per National Occupation Standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;