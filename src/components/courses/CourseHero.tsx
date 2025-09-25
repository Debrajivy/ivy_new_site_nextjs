"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Award, CheckCircle } from "lucide-react";
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

interface CourseHeroProps {
  course: Course;
}


const CourseHero = ({ course }: CourseHeroProps) => {

  console.log("course insight", course)
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
  const LEAD_SQUARED_API_HOST = "https://api.leadsquared.com/v2/";
  const ACCESS_KEY = "u$rce467998c43a742e21a2b2747962236d";
  const SECRET_KEY = "4f6bdb2f5df64d29fcdce73901dadb80fbcf0406";

  const API_URL = `${LEAD_SQUARED_API_HOST}LeadManagement.svc/Lead.Create?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}`;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  let sourceCampaignValue = "";
  if (course.title === "AI for Product Manager") {
    sourceCampaignValue = "AI for Product Manager";
  } else if (course.title === "Executive Generative AI Course with IIT Guwahati") {
    sourceCampaignValue = "IIT-G GenAI";
  } else if (course.title === "Cloud Data Engineering Course with IIT Guwahati") {
    sourceCampaignValue = "IIT-G Data Engg";
  } else if (course.title === "Data Science & AI with IIT Guwahati") {
    sourceCampaignValue = "IIT-G Data Science";
  } else if (course.title === "Data Science with Machine Learning & AI Certification") {
    sourceCampaignValue = "Nasscom";
  } else if (course.title === "Cloud Data Engineering Certification") {
    sourceCampaignValue = "Data Engineering";
  } else if (course.title === "Business Analytics Certification Course") {
    sourceCampaignValue = "Business Analytics Certification";
  } else if (course.title === "Data Analytics with Visualization Certification Course") {
    sourceCampaignValue = "Data Analytics and Visualization (Tableau & Power BI)";
  } else if (course.title === "Data science course (Pay after Placement)") {
    sourceCampaignValue = "ISA";
  } else if (course.title === "Data Visualization Course") {
    sourceCampaignValue = "Data Visualization and Reporting (Tableau & Power BI)";
  } else {
    sourceCampaignValue = course.title; // fallback (or whatever you prefer)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setSubmitStatus("submitting");
    setSubmitMessage("Submitting your details...");

    // ✅ keep your full payload
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
        Value: "Organic Search",
      },
      {
        Attribute: "mx_Course",
        Value: sourceCampaignValue
      },
      {
        Attribute: "SourceMedium",
        Value: "Google"
      },

    ];

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("LeadSquared API Response:", result);

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
    "Data Science & AI with IIT Guwahati": "260 Hours",
    "AI for Product Manager": "180 Hours",
    "Data Analytics with Visualization Certification Course": "195 Hours",
    "Cloud Data Engineering Certification": "120 Hours",
    "Cloud Data Engineering Course with IIT Guwahati": "120 Hours",
    "Business Analytics Certification Course": "185 Hours",
    "Executive Generative AI Course with IIT Guwahati": "75 Hours",
    "Business Analytics with Python": "190 Hours",
    "Data Visualization Course": "160 Hours",
    "Cybersecurity Fundamentals": "170 Hours",
  };

  // usage


  // Determine if it's the specific IIT Guwahati course
  const isIITGuwahatiCourse =
    course.title === "Data Science & AI with IIT Guwahati" ||
    course.title === "Executive Generative AI Course with IIT Guwahati" ||
    course.title === "Cloud Data Engineering Course with IIT Guwahati";
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section
      style={{
        marginTop: -30,
        // Conditional background for IIT Guwahati course
        backgroundImage: isIITGuwahatiCourse
          ? `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${IIT_BACKGROUND.src})`
          : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // If it's the IIT Guwahati course, remove the explicit background color to avoid clash
        backgroundColor: isIITGuwahatiCourse ? 'transparent' : '#179fc8',
      }}
      className={`py-10 text-white ${!isIITGuwahatiCourse
        ? "bg-gradient-to-r from-ivy-blue to-ivy-orange"
        : ""
        }`}
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
                <div className="flex items-center bg-white/40 rounded-full px-4 py-2 w-fit">
                  <p className="text-[#221e1f] font-bold">Powered by</p>
                </div>
                {course.title === "Data Science with Machine Learning & AI Certification" ||
                  course.title === "Data science course (Pay after Placement)" ? (
                  <Image

                    width={150}
                    height={50}
                    className="h-20 w-auto object-contain"
                    src={NASSCOM}
                    alt="NASSCOM Certification"
                  />
                ) : course.title === "Cloud Data Engineering Certification" ||
                  course.title === "Data Visualization Course" ||
                  course.title ===
                  "Data Analytics with Visualization Certification Course" ||
                  course.title === "Business Analytics Certification Course" ||
                  course.title === "AI for Product Manager" || course.title === "Data Engineering Course in Kolkata" ? (
                  <Image

                    width={150}
                    height={50}
                    className="h-20 w-auto object-contain"
                    src={ivy}
                    alt="ivy"
                  />
                ) : (
                  <Image

                    width={150}
                    height={50}
                    className="h-10 w-auto object-contain"
                    src={E}
                    alt="E & ICT"
                  />
                )}
              </div>
            </div>

            <p style={{ marginTop: 10 }} className="text-lg opacity-90">
              {course.description}
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Users size={16} className="mr-2" />
                <span>
                  {course.title === "AI for Product Manager"
                    ? "720 students"
                    : course.title === "Executive Generative AI Course with IIT Guwahati"
                      ? "1220 students"
                      : course.title === "Data Science & AI with IIT Guwahati"
                        ? "1136 students"
                        : course.title === "Cloud Data Engineering Certification"
                          ? "862 students"
                          : course.title === "Data Science with Machine Learning & AI Certification"
                            ? "1158 students"
                            : course.title === "Data Visualization Course"
                              ? "855 students"
                              : course.title === "Data Analytics with Visualization Certification Course"
                                ? "967 students"
                                : course.title === "Business Analytics Certification Course"
                                  ? "25,090 students"
                                  : course.title === "Cloud Data Engineering Course with IIT Guwahati"
                                    ? "445 students"
                                    : course.title === "Data science course (Pay after Placement)"
                                      ? "430 students"
                                      : "N/A"}
                </span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Clock size={16} className="mr-2" />

                <span>{courseHours[course.title] || "225 Hours"}</span>

              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Star size={16} className="mr-2" />
                <span> {course.title === "AI for Product Manager"
                  ? "4.7 (195 reviews)"
                  : course.title === "Executive Generative AI Course with IIT Guwahati"
                    ? "4.9 (209 reviews)"
                    : course.title === "Data Science & AI with IIT Guwahati"
                      ? "4.8 (230 reviews)"
                      : course.title === "Cloud Data Engineering Certification"
                        ? "4.7 (198 reviews)"
                        : course.title === "Data Science with Machine Learning & AI Certification"
                          ? "4.8 (324 reviews)"
                          : course.title === "Data Visualization Course"
                            ? "4.7 (212 reviews)"
                            : course.title === "Data Analytics with Visualization Certification Course"
                              ? "4.6 (286 reviews)"
                              : course.title === "Business Analytics Certification Course"
                                ? "4.8 (6983 reviews)"
                                : course.title === "Cloud Data Engineering Course with IIT Guwahati"
                                  ? "4.7 (189 reviews)"
                                  : course.title === "Data science course (Pay after Placement)"
                                    ? "4.8 (109 reviews)"
                                    : "N/A"}</span>
              </div>

              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Award size={16} className="mr-2" />
                {course.title === "Data Science with Machine Learning & AI Certification" ||
                  course.title === "Data science course (Pay after Placement)"
                  ? "NASSCOM Certification"
                  : course.title === "Cloud Data Engineering Certification" ||
                    course.title === "Data Visualization Course" ||
                    course.title ===
                    "Data Analytics with Visualization Certification Course" ||
                    course.title === "Business Analytics Certification Course" ||
                    course.title === "AI for Product Manager"
                    ? "Ivy Professional School Certification"
                    : "E & ICT Academy, IIT Guwahati Certification"}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-white text-sm font-medium">
                Find our Alumni at
              </div>

              {course.title ===
                "Executive Generative AI Course with IIT Guwahati" ||
                course.title === "Data Science & AI with IIT Guwahati" ||
                course.title ===
                "Cloud Data Engineering Course with IIT Guwahati" ? (
                <div className="flex items-center bg-white/40 rounded-full px-4 py-2 w-fit mx-auto sm:mx-0">
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 lg:gap-6">
                    {partners.map((partner) => (
                      <div key={partner.name} className="flex items-center">
                        <Image

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
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 text-white hover:bg-white/20"
                onClick={() => {
                  let syllabusUrl = "";

                  if (
                    course.title ===
                    "Executive Generative AI Course with IIT Guwahati"
                  ) {
                    syllabusUrl =
                      "https://drive.google.com/file/d/1G7uBOCpBKFvzEyXHM34vc6afqUJmdF_A/preview";
                  } else if (
                    course.title === "Data Science & AI with IIT Guwahati"
                  ) {
                    syllabusUrl =
                      "https://drive.google.com/file/d/13O3soUlLzRLcJGezJ23HmnPlQSerT_JJ/preview";
                  } else if (
                    course.title === "Cloud Data Engineering Certification"
                  ) {
                    syllabusUrl =
                      "https://drive.google.com/file/d/1bHZMTFm-ESPIR5dr5ZbVEJPZjTRY_K5N/preview";
                  } else if (
                    course.title === "Data Science with Machine Learning & AI Certification"
                  ) {
                    syllabusUrl =
                      "https://drive.google.com/file/d/1GzZjPir-BJYQDuVYiiBu6RxU5LsUuC7_/preview";
                  } else if (course.title === "Data Visualization Course") {
                    syllabusUrl =
                      "https://drive.google.com/file/d/1TpyFrVqjCLdAsIEc-p9S2pUaD6AgJsXN/preview";
                  } else if (
                    course.title ===
                    "Data Analytics with Visualization Certification Course"
                  ) {
                    syllabusUrl =
                      "https://drive.google.com/file/d/1ih3Z5PO5ExixAxmoBu0SJKjYs5-wDRp9/preview";
                  } else if (
                    course.title === "Business Analytics Certification Course"
                  ) {
                    syllabusUrl =
                      "https://drive.google.com/file/d/1u64bLjLe_lgItjmn9OagsaZNuyd9bz8K/preview";
                  } else if (
                    course.title ===
                    "Cloud Data Engineering Course with IIT Guwahati"
                  ) {
                    syllabusUrl =
                      "https://drive.google.com/file/d/1PrR-EKLovlmE3lxKFILL6eXhlCWeOmAB/preview";
                  } else if (course.title === "AI for Product Manager") {
                    syllabusUrl =
                      "https://drive.google.com/file/d/1Xmqo75SkOo9RBOUrgr0Xsn_XQUMUJJ2a/preview";
                  }
                  else if (
                    course.title === "Data science course (Pay after Placement)"
                  ) {
                    syllabusUrl =
                      "https://drive.google.com/file/d/1GzZjPir-BJYQDuVYiiBu6RxU5LsUuC7_/preview";
                  }

                  //city specific
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
                  <span className="text-[#1a98cb]">FREE</span>
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
                      Next batch starting in September
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                      <span className="text-red-600 font-medium">
                        Limited seats left!
                      </span>
                    </div>
                  </div>
                </div>


              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
