"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Award, CheckCircle, X, ChevronRight, NotebookPen } from "lucide-react";

/* Official WhatsApp logo path from SimpleIcons */
const WhatsAppIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="#25D366" />
    <path fill="#ffffff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
import { Course } from "@/lib/api";
import E from "@/assests/E&ICT.webp";
import ibm from "@/assests/IBM2.webp";
import deloitte from "@/assests/deloitte.webp";
import pwc from "@/assests/pwc.webp";
import amazon from "@/assests/amazon.webp";
import NASSCOM from "@/assests/NASSCOM.png";
import ivy from "@/assests/ivy.png";
import IIT_logo from "@/assests/IIT_logo.jpg"; // Import the IIT_logo
import IIT_BACKGROUND from "@/assests/IIT_BACKGROUND.webp";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import NASSCOMNEW from "@/assests/NASSCOMNEW.webp";
import PritiJha from "@/assests/alumni/PritiJha.webp";
import PranabKumarPaul from "@/assests/alumni/PranabKumarPaul.webp";
import AnishBanerjee from "@/assests/alumni/AnishBanerjee.webp";
import AtlasCopco from "@/assests/casestudies/AtlasCopco.png";
import Lalbaba from "@/assests/casestudies/Lalbaba.jpg";
import TMILL from "@/assests/casestudies/TMILL.webp";

interface CourseHeroProps {
  course: Course;
}


const CourseHero = ({ course }: CourseHeroProps) => {

  const router = useRouter(); // ⬅️ add this inside component

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    program: "",
    branch: "",
  });

  // State for form submission status and message
  const [submitStatus, setSubmitStatus] = useState<any>(null);
  const [submitMessage, setSubmitMessage] = useState<any>("");

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

  const [chatOpen, setChatOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowPulse(false), 5000);
    return () => clearTimeout(t);
  }, []);

  const WHATSAPP_NUMBER = "919748441111";

  const courseCTAs = [
    {
      emoji: "📈",
      label: "Upskill for my current role",
      msg: `Hi! I want to upskill for my current role. I'm interested in the *${course.title}* at Ivy Professional School. Can you help?`,
    },
    {
      emoji: "🚀",
      label: "Career switch into Data/AI",
      msg: `Hi! I'm looking to switch my career into Data/AI. I'm interested in the *${course.title}* at Ivy Professional School. Can you guide me?`,
    },
    {
      emoji: "🎓",
      label: "Do you need placement assistance?",
      msg: `Hi! I'd like to know about placement assistance for the *${course.title}* at Ivy Professional School. Can you share details?`,
    },
  ];

  let sourceCampaignValue = "";
  if (course.title === "AI for Product Managers") {
    sourceCampaignValue = "AI for Product Managers";
  } else if (course.title === "Generative AI Course") {
    sourceCampaignValue = "IIT-G GenAI";
  } else if (course.title === "Cloud Data Engineering Course with IIT Guwahati") {
    sourceCampaignValue = "IIT-G Data Engg";
  } else if (course.title === "Data Science with Machine Learning & AI Certification") {
    sourceCampaignValue = "IIT-G Data Science";
  } else if (course.title === "Data Science with Machine Learning & AI Certification") {
    sourceCampaignValue = "Nasscom";
  } else if (course.title === " Data Engineering Course") {
    sourceCampaignValue = "Data Engineering";
  } else if (course.title === "Data Analytics and Generative AI Course") {
    sourceCampaignValue = "Business Analytics Certification";
  } else if (course.title === "Data Analytics With Visualization") {
    sourceCampaignValue = "Data Analytics and Visualization (Tableau & Power BI)";
  } else if (course.title === "Data science course (Pay after Placement)") {
    sourceCampaignValue = "ISA";
  } else if (course.title === "Data Analytics and Generative AI Course") {
    sourceCampaignValue = "Data Visualization and Reporting (Tableau & Power BI)";
  } else {
    sourceCampaignValue = course.title; // fallback (or whatever you prefer)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setSubmitStatus("submitting");
    setSubmitMessage("Submitting your details...");

    // ✅ keep your full payload
    // const payload = [
    //   {
    //     Attribute: "EmailAddress",
    //     Value: formData.email,
    //   },
    //   {
    //     Attribute: "FirstName",
    //     Value: formData.name,
    //   },
    //   {
    //     Attribute: "Phone",
    //     Value: formData.phone,
    //   },
    //   {
    //     Attribute: "mx_Citywise",
    //     Value: formData.city,
    //   },
    //   {
    //     Attribute: "mx_Program",
    //     Value: formData.program,
    //   },
    //   {
    //     Attribute: "mx_What_is_Your_Nearest_Branch",
    //     Value: formData.branch,
    //   },
    //   {
    //     Attribute: "Source",
    //     Value: "Organic Search",
    //   },
    //   {
    //     Attribute: "mx_Course",
    //     Value: sourceCampaignValue
    //   },
    //   {
    //     Attribute: "SourceMedium",
    //     Value: "Google"
    //   },
    //   {
    //     Attribute: "Source",
    //     Value: "Pay per Click Ads",
    //   }
    // ];


    const payload = [
      {
        Attribute: "EmailAddress",
        Value: formData.email,
      },
      {
        Attribute: "FirstName",
        Value: formData.name,
      },
      {
        Attribute: "Phone",
        Value: formData.phone,
      },
      {
        Attribute: "mx_Citywise",
        Value: formData.city,
      },
      {
        Attribute: "mx_Program",
        Value: formData.program,
      },
      {
        Attribute: "mx_What_is_Your_Nearest_Branch",
        Value: formData.branch,
      },
      {
        Attribute: "Source",
        Value: "Organic Search",  // ⬅️ Only one Source attribute
      },
      {
        Attribute: "mx_Course",
        Value: sourceCampaignValue
      },
      {
        Attribute: "SourceMedium",
        Value: "Google"
      }
    ];

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();

        if (result && result.Status === "Success") {
          setSubmitStatus("success");
          setSubmitMessage("Form submitted successfully!");

          // ✅ Redirect to Thank You page after submission
          setTimeout(() => {
            router.push(`/courses/${course.slug}/thankyou`); // unique URL for GTM conversion tracking
          }, 1500);
        } else {
          setSubmitStatus("error");
          setSubmitMessage(
            result.Message ||
            "An error occurred during submission. Please try again."
          );
        }
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          `Failed to submit form. Server responded with status: ${response.status}`
        );
      }
    } catch (error) {
      console.error(
        "Network or JavaScript error during form submission:",
        error
      );
      setSubmitStatus("error");
      setSubmitMessage(
        "An error occurred. Please check your internet connection and try again."
      );
    }
  };
  const partners = [
    { name: "Amazon", logo: amazon },
    { name: "IBM", logo: ibm },
    { name: "Deloitte", logo: deloitte },
    { name: "PwC", logo: pwc },
  ];
  const courseHours: Record<string, string> = {
    "Data Science with Machine Learning & AI Certification": "260 Hours",
    "AI for Product Managers": "180 Hours",
    "Data Analytics With Visualization": "195 Hours",
    " Data Engineering Course": "120 Hours",
    "Cloud Data Engineering Course with IIT Guwahati": "120 Hours",
    "Data Analytics and Generative AI Course": "185 Hours",
    "Generative AI Course": "75 Hours",
    "Business Analytics with Python": "190 Hours",
    "Cybersecurity Fundamentals": "170 Hours",
  };

  // usage

  const dataScienceAlumni = [
    { name: "Priti Jha", studentImg: PritiJha, companyLogo: amazon },
    { name: "Pranab Kumar Paul", studentImg: PranabKumarPaul, companyLogo: ibm },
    { name: "Anish Banerjee", studentImg: AnishBanerjee, companyLogo: pwc },
  ];
  // Determine if it's the specific IIT Guwahati course
  const isIITGuwahatiCourse =
    course.title === "Data Science with Machine Learning & AI Certification" ||
    course.title === "Generative AI Course" ||
    course.title === "Cloud Data Engineering Course with IIT Guwahati";
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section
      style={{ marginTop: -30 }}
      className="py-10 text-white bg-gradient-to-r from-ivy-blue to-ivy-orange"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div style={{ marginTop: 10 }} className="flex flex-col">
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
                  <Link href="/categories">Courses</Link>
                  <span>/</span>
                  <Link href={`/courses/${course.slug}`}>{course.slug}</Link>
                </nav>
              </Badge>
              {/* City specific content */}
              {
                course.title != "Data Engineering Course in Kolkata" ?

                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    {course.title}
                  </h1>
                  :
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Data Engineering Course in Kolkata
                  </h1>

              }


              <div
                style={{ marginTop: 10 }}
                className="flex items-center gap-4 w-full"
              >
                {" "}
                {/* Added w-full to make it full screen width */}
                {/* <div className="flex items-center bg-white/40 rounded-full px-4 py-2 w-fit">
                  <p className="text-[#221e1f] font-bold">Powered by </p>
                </div> */}
                {course.title === "Data Science with Machine Learning & AI Certification" ||
                  course.title === "Data science course (Pay after Placement)" ? (
                  <Image
                    loading="lazy"
                    width={170}
                    height={120}
                    className="h-32 w-auto object-contain"
                    src={NASSCOMNEW}
                    alt="NASSCOM Certification"
                  />
                ) : course.title === " Data Engineering Course" || course.title === "Generative AI Course" || course.title === "Data Engineering Course in Kolkata" || course.title === "Data Engineering Course in Delhi" || course.title === "Data Engineering Course in Pune" || course.title === "Data Engineering Course in Chennai" || course.title === "Data Engineering Course in Bangalore" || course.title === "Data Engineering Course in Mumbai" ||
                  course.title === "Data Analytics With Visualization" || course.title === "Data Analytics With Visualization in Kolkata" || course.title === "Data Analytics With Visualization in Delhi" || course.title === "Data Analytics With Visualization in Pune" || course.title === "Data Analytics With Visualization in Chennai" || course.title === "Data Analytics With Visualization in Bangalore" || course.title === "Data Analytics With Visualization in Mumbai" ||
                  course.title === "Generative AI Course" ||
                  course.title === "AI for Product Managers" || course.title === "AI and Machine Learning Course" || course.title === "Data Engineering Course in Kolkata" || course.title === "Data Science with Machine Learning & AI Course in Kolkata" ? (
                  <Image
                    loading="lazy"
                    width={150}
                    height={50}
                    className="h-20 w-auto object-contain"
                    src={ivy}
                    alt="ivy"
                  />
                ) : null}
              </div>
            </div>

            <p style={{ marginTop: 10 }} className="text-lg opacity-90">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Users size={16} className="mr-2" />
                <span>
                  {course.title === "AI for Product Managers"
                    ? "720 students"
                    :
                    course.title === "AI for Entrepreneurs" ? "100 students"
                      : course.title === "Generative AI Course" || course.title === "Generative AI Course in Kolkata" || course.title === "Generative AI Course in Delhi" || course.title === "Generative AI Course in Pune" || course.title === "Generative AI Course in Chennai" || course.title === "Generative AI Course in Bangalore" || course.title === "Generative AI Course in Mumbai"
                        ? "1220 students"
                        : course.title === "Data Science with Machine Learning & AI Certification" || course.title === "Data Science with Machine Learning & AI Course in Kolkata" || course.title === "Data Science with Machine Learning & AI Course in Delhi" || course.title === "Data Science with Machine Learning & AI Course in Pune" || course.title === "Data Science with Machine Learning & AI Course in Chennai" || course.title === "Data Science with Machine Learning & AI Course in Bangalore" || course.title === "Data Science with Machine Learning & AI Course in Mumbai"
                          ? "1440 students"
                          : course.title === " Data Engineering Course" || course.title === "Data Engineering Course in Kolkata" || course.title === "Data Engineering Course in Delhi" || course.title === "Data Engineering Course in Pune" || course.title === "Data Engineering Course in Chennai" || course.title === "Data Engineering Course in Bangalore" || course.title === "Data Engineering Course in Mumbai"
                            ? "862 students"
                            : course.title === "Data Science with Machine Learning & AI Certification"
                              ? "1158 students"
                              : course.title === "Data Analytics and Generative AI Course"
                                ? "855 students"
                                : course.title === "Data Analytics With Visualization" || course.title === "Data Analytics With Visualization in Kolkata" || course.title === "Data Analytics With Visualization in Delhi" || course.title === "Data Analytics With Visualization in Pune" || course.title === "Data Analytics With Visualization in Chennai" || course.title === "Data Analytics With Visualization in Bangalore" || course.title === "Data Analytics With Visualization in Mumbai"
                                  ? "967 students"
                                  : course.title === "Data Analytics and Generative AI Course"
                                    ? "25,090 students"
                                    : course.title === "Cloud Data Engineering Course with IIT Guwahati"
                                      ? "445 students"
                                      : course.title === "AI and Machine Learning Course" ? "658 students"
                                        : course.title === "Data science course (Pay after Placement)"
                                          ? "430 students"
                                          : "N/A"}
                </span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Clock size={16} className="mr-2" />

                {/* <span>{courseHours[course.title] || "225 Hours"}</span> */}
                {course.title === "AI and Machine Learning Course"
                  ? "32 Hours" :
                  course.title === "AI for Entrepreneurs" ? "20 Hours" :
                    course.title === "Data Science with Machine Learning & AI Certification"
                      ? "232 Hours"
                      : course.title === "AI for Product Managers"
                        ? "24 Hours"
                        : "225 Hours"
                }              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Star size={16} className="mr-2" />
                <span> {course.title === "AI for Product Managers"
                  ? "4.7 (195 reviews)"
                  : course.title === "AI for Entrepreneurs" ? "4.8 (90 reviews)"
                    : course.title === "Generative AI Course" || course.title === "Generative AI Course in Kolkata" || course.title === "Generative AI Course in Delhi" || course.title === "Generative AI Course in Pune" || course.title === "Generative AI Course in Chennai" || course.title === "Generative AI Course in Bangalore" || course.title === "Generative AI Course in Mumbai"
                      ? "4.9 (209 reviews)"
                      : course.title === "Data Science with Machine Learning & AI Certification"
                        ? "4.8 (230 reviews)"
                        : course.title === " Data Engineering Course" || course.title === "Data Engineering Course in Kolkata" || course.title === "Data Engineering Course in Delhi" || course.title === "Data Engineering Course in Pune" || course.title === "Data Engineering Course in Chennai" || course.title === "Data Engineering Course in Bangalore" || course.title === "Data Engineering Course in Mumbai"
                          ? "4.7 (198 reviews)"
                          : course.title === "Data Science with Machine Learning & AI Certification" || course.title === "Data Science with Machine Learning & AI Course in Kolkata" || course.title === "Data Science with Machine Learning & AI Course in Delhi" || course.title === "Data Science with Machine Learning & AI Course in Pune" || course.title === "Data Science with Machine Learning & AI Course in Chennai" || course.title === "Data Science with Machine Learning & AI Course in Bangalore" || course.title === "Data Science with Machine Learning & AI Course in Mumbai" ?
                            "4.8 (324 reviews)"
                            : course.title === "Data Analytics and Generative AI Course"
                              ? "4.7 (212 reviews)"
                              : course.title === "Data Analytics With Visualization" || course.title === "Data Analytics With Visualization in Kolkata" || course.title === "Data Analytics With Visualization in Delhi" || course.title === "Data Analytics With Visualization in Pune" || course.title === "Data Analytics With Visualization in Chennai" || course.title === "Data Analytics With Visualization in Bangalore" || course.title === "Data Analytics With Visualization in Mumbai"
                                ? "4.6 (286 reviews)"
                                : course.title === "Data Analytics and Generative AI Course"
                                  ? "4.8 (6983 reviews)"
                                  : course.title === "Cloud Data Engineering Course with IIT Guwahati"
                                    ? "4.7 (189 reviews)"
                                    : course.title === "AI and Machine Learning Course" ? "4.8 (230 reviews)"
                                      : course.title === "Data science course (Pay after Placement)"
                                        ? "4.8 (109 reviews)"
                                        : "N/A"}</span>
              </div>



              {
                course.title === "AI for Entrepreneurs" ?

                  <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                    <NotebookPen size={16} className="mr-2" />
                    Weekday Evening Sessions
                  </div>

                  :

                  null
              }






              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Award size={16} className="mr-2" />
                {course.title === "Data Science with Machine Learning & AI Certification" || course.title === "Data Science with Machine Learning & AI Course in Kolkata" || course.title === "Data Science with Machine Learning & AI Course in Delhi" || course.title === "Data Science with Machine Learning & AI Course in Pune" || course.title === "Data Science with Machine Learning & AI Course in Chennai" || course.title === "Data Science with Machine Learning & AI Course in Bangalore" || course.title === "Data Science with Machine Learning & AI Course in Mumbai"
                  ? "NASSCOM Certification"
                  : course.title === "Data science course (Pay after Placement)"
                    ? "NASSCOM Certification"
                    : course.title === " Data Engineering Course" || course.title === "Data Engineering Course in Kolkata" || course.title === "Data Engineering Course in Delhi" || course.title === "Data Engineering Course in Pune" || course.title === "Data Engineering Course in Chennai" || course.title === "Data Engineering Course in Bangalore" || course.title === "Data Engineering Course in Mumbai" ||
                      course.title === "Data Analytics and Generative AI Course" ||
                      course.title ===
                      "Data Analytics With Visualization" || course.title === "Data Analytics With Visualization in Kolkata" || course.title === "Data Analytics With Visualization in Delhi" || course.title === "Data Analytics With Visualization in Pune" || course.title === "Data Analytics With Visualization in Chennai" || course.title === "Data Analytics With Visualization in Bangalore" || course.title === "Data Analytics With Visualization in Mumbai" ||
                      course.title === "Data Analytics and Generative AI Course" ||
                      course.title === "AI for Product Managers" || course.title === "Generative AI Course" || course.title === "Generative AI Course in Kolkata" || course.title === "Generative AI Course in Delhi" || course.title === "Generative AI Course in Pune" || course.title === "Generative AI Course in Chennai" || course.title === "Generative AI Course in Bangalore" || course.title === "Generative AI Course in Mumbai" || course.title === "AI and Machine Learning Course" || course.title === "AI for Entrepreneurs"
                      ? "Ivy Professional School Certification"
                      : ""}
              </div>
            </div>

            <div className="space-y-2">
              {
                course.title === "AI for Entrepreneurs" ?
              <div className="text-white text-sm font-medium">
                AI Training delivered to
              </div>
              :
                 <div className="text-white text-sm font-medium">
                Find our Alumni at
              </div>
              }



              {course.title === "Generative AI Course" ||
                course.title === "Data Science with Machine Learning & AI Certification" ||
                course.title === "Cloud Data Engineering Course with IIT Guwahati" ? (
                <div className="flex items-center bg-white/40 rounded-full px-4 py-2 w-fit mx-auto sm:mx-0">
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 lg:gap-6">
                    {partners.map((partner) => (
                      <div key={partner.name} className="flex items-center">
                        <Image
                          loading="lazy"
                          width={150}
                          height={50}
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="object-contain opacity-100 transition-all h-10 sm:h-12 lg:h-14 w-auto max-w-[80px] sm:max-w-[100px] lg:max-w-[120px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : course.title === "AI for Entrepreneurs" ? (
                /* Logic for AI for Entrepreneurs */
               <div className="flex items-center bg-[#013b81b2] rounded-full px-4 py-2 w-fit mx-auto sm:mx-0">
  <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-5">
    {[
      { name: "Atlas Copco", logo: AtlasCopco },
      { name: "Lalbaba", logo: Lalbaba },
      { name: "TMILL", logo: TMILL },
    ].map((partner) => (
      <div key={partner.name} className="flex items-center">
        <Image
          loading="lazy"
          width={120} 
          height={40} 
          src={partner.logo}
          alt={`${partner.name} logo`}
          className="object-contain opacity-100 transition-all h-8 sm:h-10 lg:h-11 w-auto max-w-[65px] sm:max-w-[85px] lg:max-w-[100px]"
        />
      </div>
    ))}
  </div>
</div>
              ) : (
                /* Default/Fallback for other courses */
                <div className="flex items-center bg-[#75a082]/40 rounded-full px-4 py-2 w-fit mx-auto sm:mx-0">
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 lg:gap-6">
                    {partners.map((partner) => (
                      <div key={partner.name} className="flex items-center">
                        <Image
                          loading="lazy"
                          width={150}
                          height={50}
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="object-contain opacity-100 transition-all h-10 sm:h-12 lg:h-14 w-auto max-w-[80px] sm:max-w-[100px] lg:max-w-[120px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* {course.title ===
                "Generative AI Course" ||
                course.title === "Data Science with Machine Learning & AI Certification" ||
                course.title ===
                "Cloud Data Engineering Course with IIT Guwahati" ? (
                <div className="flex items-center bg-white/40 rounded-full px-4 py-2 w-fit mx-auto sm:mx-0">
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 lg:gap-6">
                    {partners.map((partner) => (
                      <div key={partner.name} className="flex items-center">
                        <Image
                          loading="lazy"
                          width={150}
                          height={50}
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="object-contain opacity-100 transition-all h-10 sm:h-12 lg:h-14 w-auto max-w-[80px] sm:max-w-[100px] lg:max-w-[120px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center bg-[#75a082]/40 rounded-full px-4 py-2 w-fit mx-auto sm:mx-0">
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 lg:gap-6">
                    {partners.map((partner) => (
                      <div key={partner.name} className="flex items-center">
                        <Image
                          loading="lazy"
                          width={150}
                          height={50}
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="object-contain opacity-100 transition-all h-10 sm:h-12 lg:h-14 w-auto max-w-[80px] sm:max-w-[100px] lg:max-w-[120px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )} */}
            </div>


            {/* <div className="space-y-4 overflow-hidden py-4">
              <div className="text-white text-base font-semibold px-2">
                Find our Alumni at
              </div>

              {course.title === "Data Science with Machine Learning & AI Certification" ? (
                <div className="relative flex overflow-hidden bg-white/10 backdrop-blur-md rounded-2xl py-8 border border-white/20">
                  <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .alumni-scroll-container {
          display: flex;
          animation: marquee 30s linear infinite;
          gap: 2rem;
        }
        .alumni-scroll-container:hover {
          animation-play-state: paused;
        }
      `}</style>

                  <div className="alumni-scroll-container whitespace-nowrap items-center px-4">
                    {[...dataScienceAlumni, ...dataScienceAlumni].map((alumni, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-5 bg-white p-4 px-7 rounded-2xl shadow-xl border border-gray-100 transition-transform duration-300 hover:scale-105"
                        style={{ minWidth: 'max-content' }}
                      >
                        <div className="relative">
                          <Image
                            src={alumni.studentImg}
                            alt={alumni.name}
                            width={65}
                            height={65}
                            className="rounded-full object-cover border-2 border-[#75a082]/20 shadow-sm"
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <span className="text-slate-900 text-lg font-bold leading-tight">
                            {alumni.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="bg-[#75a082]/10 text-[#75a082] text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                              Data Science
                            </span>
                            <span className="text-gray-400 text-xs font-medium italic">at</span>
                          </div>
                        </div>

                        <div className="pl-5 border-l-2 border-gray-50 flex items-center min-w-[100px] justify-center">
                          <Image
                            src={alumni.companyLogo}
                            alt="Company Logo"
                            width={110}
                            height={45}
                            className="object-contain h-9 w-auto"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className={`flex items-center ${course.title === "Generative AI Course" || course.title === "Cloud Data Engineering Course with IIT Guwahati"
                  ? "bg-white/30 backdrop-blur-md"
                  : "bg-[#75a082]/40"
                  } rounded-full px-6 py-3 w-fit mx-auto sm:mx-0 border border-white/10`}>
                  <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                    {partners.map((partner) => (
                      <div key={partner.name} className="flex items-center transition-transform hover:scale-110">
                        <Image
                          width={150}
                          height={50}
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="object-contain h-9 sm:h-11 w-auto max-w-[100px] sm:max-w-[120px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div> */}



            <div className="flex flex-wrap items-center gap-4">




              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 text-white hover:bg-white/20"
                onClick={() => {
                  let syllabusUrl = "";

                  if (
                    course.title ===
                    "Generative AI Course"
                  ) {
                    syllabusUrl =
                      "https://drive.google.com/file/d/1cT9-gqqqifm-HvBE81WDsql0FxQIs8hP/preview";
                  } else if (
                    course.title === "Data Science with Machine Learning & AI Certification" || course.title === "Data Science with Machine Learning & AI Course in Kolkata" || course.title === "Data Science with Machine Learning & AI Course in Delhi" || course.title === "Data Science with Machine Learning & AI Course in Pune" || course.title === "Data Science with Machine Learning & AI Course in Chennai" || course.title === "Data Science with Machine Learning & AI Course in Bangalore" || course.title === "Data Science with Machine Learning & AI Course in Mumbai"
                  ) {
                    syllabusUrl =
                      "https://drive.google.com/file/d/1a1gYATYn33yUVxWXZOdp5aGjFkYXCCk4/preview";
                  } else if (
                    course.title === " Data Engineering Course"
                  ) {
                    syllabusUrl =
                      "https://drive.google.com/file/d/15dM1mZal1HjDpJYYj2z0MB41bJf7egi2/preview";
                  } else if (
                    course.title ===
                    "Data Analytics With Visualization" || course.title === "Data Analytics With Visualization in Kolkata" || course.title === "Data Analytics With Visualization in Delhi" || course.title === "Data Analytics With Visualization in Pune" || course.title === "Data Analytics With Visualization in Chennai" || course.title === "Data Analytics With Visualization in Bangalore" || course.title === "Data Analytics With Visualization in Mumbai"
                  ) {
                    syllabusUrl =
                      "https://drive.google.com/file/d/13LLhT-UYWyEtwOHa5ycbVoOGkgLAw3pr/preview";
                  } else if (
                    course.title === "Data Analytics and Generative AI Course"
                  ) {
                    syllabusUrl =
                      "https://drive.google.com/file/d/1Z7JSZ6hlidaSbNAX4so5eXBBJHlSmxJN/preview";
                  } else if (
                    course.title ===
                    "Cloud Data Engineering Course with IIT Guwahati"
                  ) {
                    syllabusUrl =
                      "https://drive.google.com/file/d/1PrR-EKLovlmE3lxKFILL6eXhlCWeOmAB/preview";
                  } else if (course.title === "AI for Product Managers") {
                    syllabusUrl =
                      "https://drive.google.com/file/d/1lwkKAtfPeDvY1lU2h0CdD3RqqT2QLgEZ/preview";
                  }
                  else if (
                    course.title === "Data science course (Pay after Placement)"
                  ) {
                    syllabusUrl =
                      "https://drive.google.com/file/d/1GzZjPir-BJYQDuVYiiBu6RxU5LsUuC7_/preview";
                  }
                  else if (
                    course.title === "AI and Machine Learning Course"
                  ) {
                    syllabusUrl =
                      "https://drive.google.com/file/d/1p4d84pQ8c-HmIYD7fUH16HNPkmfQzN7r/preview";
                  }
                  else if (
                    course.title === "AI for Entrepreneurs"
                  ) {
                    syllabusUrl =
                      "https://drive.google.com/file/d/1moogMI6nv5NIfdR3kp0XurQye80EOUJH/preview";
                  }

                  else if (course.title === "Data Engineering Course in Kolkata") {
                    syllabusUrl =
                      "https://drive.google.com/file/d/1bHZMTFm-ESPIR5dr5ZbVEJPZjTRY_K5N/preview";
                  }
                  window.open(syllabusUrl, "_blank");
                }}
              >
                Download Syllabus
              </Button>


              {course.title === "Data Science with Machine Learning & AI Certification" ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  Earn ₹8,000* from Govt. of India incentive program
                </div>
              ) : null}
            </div>
          </div>

          <div style={{ marginTop: 30 }}>
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 w-full h-full flex flex-col">
              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Join Two Classes for{" "}
                  <span className="text-[#1a98cb]">No Cost</span>
                  {course.title === "AI for Entrepreneurs" && (
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-sm md:text-base font-bold bg-amber-100 text-amber-600 animate-pulse border border-amber-200">
                      (New Course)
                    </span>
                  )}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Learn with Experts & Industry Leaders from IIT & IIM
                </p>
              </div>

              <form
                style={{ color: "black" }}
                className="space-y-4 flex-grow"
                onSubmit={handleSubmit}
              >
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
                    <option value="" disabled className="text-gray-400">
                      Select your city*
                    </option>
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
                    style={{ backgroundColor: "#013a81" }}
                    disabled={submitStatus === "submitting"}
                  >
                    {submitStatus === "submitting"
                      ? "Applying..."
                      : "Apply Now"}
                  </Button>

                  {submitMessage && (
                    <p
                      className={`text-center mt-2 text-sm ${submitStatus === "success"
                        ? "text-green-600"
                        : "text-red-600"
                        }`}
                    >
                      {submitMessage}
                    </p>
                  )}

                  <div
                    style={{ marginTop: 10 }}
                    className="flex flex-wrap items-center justify-center gap-1 pt-2 text-sm"
                  >
                    <span className="text-[#1a98cb] font-medium">
                      {
                        course.title === "AI for Entrepreneurs" ? "Next batch starting from 10th April, 2026" : "New batch starting 7th and 21st March, 2026"
                      }

                    </span>
                   
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                      <span className="text-red-600 font-medium">
                        Limited seats left!
                      </span>
                    </div>
                  </div>
                  <div
                    style={{ marginTop: 10 }}
                    className="flex flex-wrap items-center justify-center gap-1 pt-2 text-sm"
                  >
                  
                    <span className="text-[#1a98cb] font-medium">
                      {
                        course.title === "AI for Entrepreneurs" ? "Every Mon, Wed, Fri from 7:00 to 8:30 PM" : null
                      }

                    </span>
                   
                  </div>
                </div>


              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ── WhatsApp floating widget ── */}
      {/* ── WhatsApp floating widget ── */}
      <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end gap-3" style={{ pointerEvents: "none" }}>

        {/* Expandable panel */}
        {chatOpen && (
          <div
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ease-in-out"
            /* Mobile: nearly full width | Desktop: 288px (w-72) */
            style={{
              width: "min(320px, calc(100vw - 32px))",
              pointerEvents: "auto",
              marginBottom: "8px"
            }}
          >
            {/* Header */}
            <div className="px-4 py-3 flex items-center gap-3" style={{ background: "#25D366" }}>
              <WhatsAppIcon size={24} />
              <div className="flex-1">
                <p className="font-semibold text-white text-sm leading-tight">Ivy Pro School</p>
                <p className="text-[10px] text-green-100 mt-0.5">● Typically replies in minutes</p>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="p-1 rounded-full hover:bg-black/10 text-white/80 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-3 max-h-[60vh] overflow-y-auto">
              <div className="mb-3 rounded-lg px-3 py-2" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                <p className="text-[11px] text-gray-500 uppercase tracking-wider font-bold mb-0.5">Course Context</p>
                <p className="text-xs text-gray-700 font-medium line-clamp-1">
                  {course.title}
                </p>
              </div>

              <p className="text-[11px] text-gray-400 mb-2 px-1">How can we help you?</p>

              <div className="flex flex-col gap-2">
                {courseCTAs.map((cta) => (
                  <a
                    key={cta.label}
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(cta.msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-3 py-3 rounded-xl bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-200 transition-all active:scale-[0.98]"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="text-xs font-semibold text-gray-700 leading-snug">
                      {cta.emoji} {cta.label}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom row: pill label + round button */}
        <div className="flex items-center gap-2" style={{ pointerEvents: "auto" }}>
          {/* Hide the text pill on mobile (hidden) and show on small screens and up (sm:flex) */}
          {!chatOpen && (
            <button
              onClick={() => { setChatOpen(true); setShowPulse(false); }}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 rounded-full shadow-lg text-white text-xs font-bold whitespace-nowrap hover:brightness-110 transition-all"
              style={{ background: "#25D366" }}
            >
              <WhatsAppIcon size={16} />
              Ask about this course
            </button>
          )}

          <div className="relative shrink-0">
            {showPulse && !chatOpen && (
              <span className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ background: "#25D366" }} />
            )}
            <button
              onClick={() => { setChatOpen(prev => !prev); setShowPulse(false); }}
              className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-90"
              style={{ background: chatOpen ? "#374151" : "#25D366" }}
              aria-label={chatOpen ? "Close WhatsApp chat" : "Chat on WhatsApp"}
            >
              {chatOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <WhatsAppIcon size={window?.innerWidth < 640 ? 24 : 28} />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
