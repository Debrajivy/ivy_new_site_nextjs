"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Award, X, ChevronRight, NotebookPen, Wrench } from "lucide-react";

/* Official WhatsApp logo path from SimpleIcons */
const WhatsAppIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="#25D366" />
    <path fill="#ffffff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
import type { Course } from "@/lib/api";
import ibm from "@/assests/IBM2.webp";
import deloitte from "@/assests/deloitte.webp";
import pwc from "@/assests/pwc.webp";
import amazon from "@/assests/amazon.webp";
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
import prepai from "@/assests/casestudies/prepai.webp";
import srijanvalley from "@/assests/casestudies/srijanvalley.webp";
import timesof from "@/assests/casestudies/timesof.webp";
import tatasteel from "@/assests/casestudies/tatasteel.webp";
import msp from "@/assests/casestudies/msp.webp";
import bridge from "@/assests/casestudies/bridge.webp";
import apple from "@/assests/casestudies/apple.webp";
import google from "@/assests/casestudies/google.webp";
import ITC from "../../assests/casestudies/ITC.webp";
import Honeywell from "../../assests/casestudies/Honeywell.png";
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
import AdityaKumarBarikImg from "@/assests/alumni/AdityaKumarBarik.webp";
import AdityaKumarBarikCurImg from "@/assests/company/AdityaKumarBarikCur.webp";
import TanmayChakrabortyImg from "@/assests/alumni/TanmayChakraborty.webp";
import TanmayChakrabortyCurImg from "@/assests/company/TanmayChakrabortyCur.webp";
import TaniaLahaImg from "@/assests/alumni/TaniaLaha.webp";
import TaniaLahaCurImg from "@/assests/company/TaniaLahaCur.webp";
import SatyajitPramanikImg from "@/assests/alumni/SatyajitPramanik.webp";
import SatyajitPramanikCurImg from "@/assests/company/SatyajitPramanikCur.webp";
import PritiJhaCurImg from "@/assests/company/PritiJhaCur.webp";
import AnishBanerjeeCurImg from "@/assests/company/AnishBanerjeeCur.webp";
import PranabKumarPaulCurImg from "@/assests/company/PranabKumarPaulCur.webp";
import KinjalDasguptaImg from "@/assests/alumni/KinjalDasgupta.webp";
import KinjalDasguptaCurImg from "@/assests/company/KinjalDasguptaCur.webp";
import RajdeepTaluckdarImg from "@/assests/alumni/RajdeepTaluckdar.webp";
import RajdeepTaluckdarCurImg from "@/assests/company/RajdeepTaluckdarCur.webp";
import SohiniDasImg from "@/assests/alumni/SohiniDas.webp";
import SohiniDasCurImg from "@/assests/company/SohiniDasCur.webp";
import AnimeshSinghImg from "@/assests/alumni/AnimeshSingh.webp";
import AnimeshSinghCurImg from "@/assests/company/AnimeshSinghCur.webp";
import MrinalDharImg from "@/assests/alumni/MrinalDhar.webp";
import MrinalDharCurImg from "@/assests/company/MrinalDharCur.webp";
import AnkitaPaulImg from "@/assests/alumni/AnkitaPaul.webp";
import AnkitaPaulCurImg from "@/assests/company/AnkitaPaulCur.webp";
import ArpanBasuImg from "@/assests/alumni/ArpanBasu.webp";
import ArpanBasuCurImg from "@/assests/company/ArpanBasuCur.webp";
import AbhinavSinhaImg from "@/assests/alumni/AbhinavSinha.webp";
import AbhinavSinhaCurImg from "@/assests/company/AbhinavSinhaCur.webp";
import SayanNayakImg from "@/assests/alumni/SayanNayak.webp";
import SayanNayakCurImg from "@/assests/company/SayanNayakCur.webp";
import SoumalyaDuttaImg from "@/assests/alumni/SoumalyaDutta.webp";
import SoumalyaDuttaCurImg from "@/assests/company/SoumalyaDuttaCur.webp";
import SenjutiDasImg from "@/assests/alumni/SenjutiDas.webp";
import SenjutiDasCurImg from "@/assests/company/SenjutiDasCur.webp";
import BalkrishnaAgarwalImg from "@/assests/alumni/BalkrishnaAgarwal.webp";
import BalkrishnaAgarwalCurImg from "@/assests/company/BalkrishnaAgarwalCur.webp";
import AbhishekBhadraImg from "@/assests/alumni/AbhishekBhadra.webp";
import AbhishekBhadraCurImg from "@/assests/company/AbhishekBhadraCur.webp";
import SamikBhattacharyyaImg from "@/assests/alumni/SamikBhattacharyya.webp";
import SamikBhattacharyyaCurImg from "@/assests/company/SamikBhattacharyyaCur.webp";
import SouvikBoseImg from "@/assests/alumni/SouvikBose.webp";
import SouvikBoseCurImg from "@/assests/company/SouvikBosecur.webp";
import type { StaticImageData } from "next/image";

interface HeroAlumni {
  name: string;
  role: string;
  image: StaticImageData;
  company: StaticImageData;
}

const dsAlumni: HeroAlumni[] = [
  { name: "Aditya Kumar Barik", role: "Data Scientist", image: AdityaKumarBarikImg, company: AdityaKumarBarikCurImg },
  { name: "Tanmay Chakraborty", role: "ML Engineer", image: TanmayChakrabortyImg, company: TanmayChakrabortyCurImg },
  { name: "Tania Laha", role: "Decision Scientist", image: TaniaLahaImg, company: TaniaLahaCurImg },
  { name: "Satyajit Pramanik", role: "Data Analyst", image: SatyajitPramanikImg, company: SatyajitPramanikCurImg },
];
const genAIAlumni: HeroAlumni[] = [
  { name: "Priti Jha", role: "Business Analyst", image: PritiJha, company: PritiJhaCurImg },
  { name: "Anish Banerjee", role: "Associate", image: AnishBanerjee, company: AnishBanerjeeCurImg },
  { name: "Pranab Kumar Paul", role: "Cloud Big-Data Engineer", image: PranabKumarPaul, company: PranabKumarPaulCurImg },
  { name: "Kinjal Dasgupta", role: "Data Engineer (BI)", image: KinjalDasguptaImg, company: KinjalDasguptaCurImg },
];
const cloudDataEngAlumni: HeroAlumni[] = [
  { name: "Rajdeep Taluckdar", role: "Data Engineer", image: RajdeepTaluckdarImg, company: RajdeepTaluckdarCurImg },
  { name: "Pranab Kumar Paul", role: "Cloud Big-Data Engineer", image: PranabKumarPaul, company: PranabKumarPaulCurImg },
  { name: "Kinjal Dasgupta", role: "Data Engineer (BI)", image: KinjalDasguptaImg, company: KinjalDasguptaCurImg },
  { name: "Sohini Das", role: "Data Engineer", image: SohiniDasImg, company: SohiniDasCurImg },
];
const dataEngAlumni: HeroAlumni[] = [
  { name: "Rajdeep Taluckdar", role: "Data Engineer", image: RajdeepTaluckdarImg, company: RajdeepTaluckdarCurImg },
  { name: "Kinjal Dasgupta", role: "Data Engineer (BI)", image: KinjalDasguptaImg, company: KinjalDasguptaCurImg },
  { name: "Sohini Das", role: "Data Engineer", image: SohiniDasImg, company: SohiniDasCurImg },
  { name: "Animesh Singh", role: "Information Analyst II", image: AnimeshSinghImg, company: AnimeshSinghCurImg },
];
const dataVizAlumni: HeroAlumni[] = [
  { name: "Sayan Nayak", role: "Senior Analyst-Decision Science", image: SayanNayakImg, company: SayanNayakCurImg },
  { name: "Soumalya Dutta", role: "Research Associate", image: SoumalyaDuttaImg, company: SoumalyaDuttaCurImg },
  { name: "Senjuti Das", role: "Senior Consultant", image: SenjutiDasImg, company: SenjutiDasCurImg },
  { name: "Abhinav Sinha", role: "HR Analytics", image: AbhinavSinhaImg, company: AbhinavSinhaCurImg },
];
const dataAnalyticsGenAIAlumni: HeroAlumni[] = [
  { name: "Mrinal Dhar", role: "Senior Analyst", image: MrinalDharImg, company: MrinalDharCurImg },
  { name: "Ankita Paul", role: "Analyst", image: AnkitaPaulImg, company: AnkitaPaulCurImg },
  { name: "Arpan Basu", role: "Analyst-MMA", image: ArpanBasuImg, company: ArpanBasuCurImg },
  { name: "Abhinav Sinha", role: "HR Analytics", image: AbhinavSinhaImg, company: AbhinavSinhaCurImg },
];
const businessAnalyticsAlumni: HeroAlumni[] = [
  { name: "Mrinal Dhar", role: "Senior Analyst", image: MrinalDharImg, company: MrinalDharCurImg },
  { name: "Balkrishna Agarwal", role: "Analyst-Actuarial", image: BalkrishnaAgarwalImg, company: BalkrishnaAgarwalCurImg },
  { name: "Abhishek Bhadra", role: "Senior Associate", image: AbhishekBhadraImg, company: AbhishekBhadraCurImg },
  { name: "Ankita Paul", role: "Analyst", image: AnkitaPaulImg, company: AnkitaPaulCurImg },
];
const cybersecurityAlumni: HeroAlumni[] = [
  { name: "Samik Bhattacharyya", role: "Manager - OT/IoT Cybersecurity", image: SamikBhattacharyyaImg, company: SamikBhattacharyyaCurImg },
  { name: "Mrinal Dhar", role: "Senior Analyst", image: MrinalDharImg, company: MrinalDharCurImg },
  { name: "Arpan Basu", role: "Analyst-MMA", image: ArpanBasuImg, company: ArpanBasuCurImg },
  { name: "Souvik Bose", role: "Data Science Consultant", image: SouvikBoseImg, company: SouvikBoseCurImg },
];

const EXCLUDED_COURSES = ["AI for Entrepreneurs", "AI for Beginners", "AI for Product Managers"];

const getAlumniCardId = (name: string) =>
  `alumni-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

const heroAlumniReviews: Record<string, string> = {
  "Aditya Kumar Barik": "Ivy helped me move from Python development into a Data Scientist role.",
  "Tanmay Chakraborty": "The ML training helped me grow into a Machine Learning Engineer.",
  "Tania Laha": "Ivy's data science learning path supported my move into decision science.",
  "Satyajit Pramanik": "The program helped me transition from risk analysis to data analytics.",
  "Priti Jha": "Ivy helped me build the analytics confidence for my Business Analyst role.",
  "Anish Banerjee": "The training helped me move from data quality work into an Associate role.",
  "Pranab Kumar Paul": "Ivy helped me shift from process operations into cloud big-data engineering.",
  "Kinjal Dasgupta": "The data training helped me grow into a Data Engineer BI role.",
  "Rajdeep Taluckdar": "Ivy helped me transition from risk operations to data engineering.",
  "Sohini Das": "The program helped me move from market research into data engineering.",
  "Animesh Singh": "Ivy's analytics training helped me step into an Information Analyst role.",
  "Sayan Nayak": "The visualization training helped me grow in decision science analytics.",
  "Soumalya Dutta": "Ivy helped me move from software testing into research analytics.",
  "Senjuti Das": "The data visualization path supported my growth into consulting.",
  "Mrinal Dhar": "Ivy helped me move from software development into analytics.",
  "Ankita Paul": "The business analytics program strengthened my analyst career path.",
  "Arpan Basu": "Ivy helped me grow from research work into an Analyst-MMA role.",
  "Abhinav Sinha": "Ivy helped me turn HR experience into an analytics career.",
  "Balkrishna Agarwal": "The analytics training supported my actuarial analyst journey.",
  "Abhishek Bhadra": "Ivy helped me move from management trainee to senior associate.",
  "Samik Bhattacharyya": "The analytics foundation helped me grow into cybersecurity leadership.",
  "Souvik Bose": "Ivy helped me build the foundation for data science consulting.",
};

function getHeroAlumni(courseTitle: string): HeroAlumni[] | null {
  if (EXCLUDED_COURSES.includes(courseTitle)) return null;
  const t = courseTitle;
  if (
    t === "Data Science with Machine Learning & AI Certification" ||
    t.startsWith("Data Science with Machine Learning & AI Course") ||
    t === "AI and Machine Learning Course" ||
    t === "Data science course (Pay after Placement)"
  ) return dsAlumni;
  if (t === "Generative AI Course" || t.startsWith("Generative AI Course in")) return genAIAlumni;
  if (t === "Cloud Data Engineering Course with IIT Guwahati") return cloudDataEngAlumni;
  if (t === " Data Engineering Course" || t.startsWith("Data Engineering Course in")) return dataEngAlumni;
  if (t === "Data Analytics With Visualization" || t.startsWith("Data Analytics With Visualization in")) return dataVizAlumni;
  if (t === "Data Analytics and Generative AI Course") return dataAnalyticsGenAIAlumni;
  if (t === "Business Analytics with Python") return businessAnalyticsAlumni;
  if (t === "Cybersecurity Fundamentals") return cybersecurityAlumni;
  return dsAlumni;
}

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
    captchaAnswer: "",
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
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [leadPopupOpen, setLeadPopupOpen] = useState(false);
  const [pendingSyllabusUrl, setPendingSyllabusUrl] = useState("");
  const [captchaCode, setCaptchaCode] = useState("7KQ4");

  const createCaptchaCode = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  };

  const refreshCaptcha = () => {
    setCaptchaCode(createCaptchaCode());
    setFormData((prevData) => ({
      ...prevData,
      captchaAnswer: "",
    }));
  };

  const closeLeadPopup = () => {
    setLeadPopupOpen(false);
    setPendingSyllabusUrl("");
    setSubmitStatus(null);
    setSubmitMessage("");
    setFormData((prevData) => ({
      ...prevData,
      captchaAnswer: "",
    }));
  };

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

    if (pendingSyllabusUrl && formData.captchaAnswer.trim().toUpperCase() !== captchaCode) {
      setSubmitStatus("error");
      setSubmitMessage("Please enter the verification code exactly as shown.");
      refreshCaptcha();
      return;
    }

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
          setSubmitMessage(
            pendingSyllabusUrl
              ? "Thank you! Opening course details..."
              : "Form submitted successfully!"
          );

          if (pendingSyllabusUrl) {
            setTimeout(() => {
              window.open(pendingSyllabusUrl, "_blank", "noopener,noreferrer");
              setLeadPopupOpen(false);
              setPendingSyllabusUrl("");
              setFormData((prevData) => ({
                ...prevData,
                captchaAnswer: "",
              }));
            }, 1000);
            return;
          }

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

  // Determine if it's the specific IIT Guwahati course
  const isIITGuwahatiCourse =
    course.title === "Data Science with Machine Learning & AI Certification" ||
    course.title === "Generative AI Course" ||
    course.title === "Cloud Data Engineering Course with IIT Guwahati";
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
                  <Link href="/courses">Courses</Link>
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


              {/* <div
                style={{ marginTop: 10 }}
                className="flex items-center gap-4 w-full"
              >
                {" "}
                
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
                
                ) : null}
              </div> */}
            </div>

            <p style={{ marginTop: 10, fontSize: 20 }} className="text-lg font-bold opacity-90">
              {course.description}
            </p>

            <div>
              {
                course.title === "AI for Entrepreneurs" ?
                  <>
                    {/* <h2 className="text-4xl font-bold text-white mb-8">
                      What You Will Learn
                    </h2> */}

                    <div className="space-y-6">

                      <p style={{ fontSize: 17 }} className="font-normal  text-white">
                        {/* <span className="font-bold" style={{ color: '#2b2b2b' }}>•</span>{" "} */}
                        ⦿ Use ChatGPT, Claude, Gemini, and Grok for business
                        communication, research, and executive reporting.
                      </p>

                      <p style={{ fontSize: 17 }} className="font-normal  text-white">
                        {/* <span className="font-bold" style={{ color: '#2b2b2b' }}>•</span>{" "} */}
                        ⦿ Create brand messages, competitor insights, product photos,
                        reels, and lead generation workflows.
                      </p>

                      <p style={{ fontSize: 17 }} className="font-normal  text-white">
                        {/* <span className="font-bold" style={{ color: '#2b2b2b' }}>•</span>{" "} */}
                        ⦿ No-Code Automation:
                        Build trigger-based workflows for customer inquiries,
                        data entry, invoice processing, and back-office tasks.
                      </p>

                      <p style={{ fontSize: 17 }} className="font-normal  text-white">
                        {/* <span className="font-bold" style={{ color: '#2b2b2b' }}>•</span>{" "} */}
                        ⦿ Data & Roadmaps:
                        Analyze business data, create AI-assisted dashboards,
                        and design a custom AI implementation roadmap.
                      </p>

                    </div>
                  </>
                  :
                  course.title === "Data Science with Machine Learning & AI Certification" || course.title === "Data Science with Machine Learning & AI Course in Kolkata" || course.title === "Data Science with Machine Learning & AI Course in Delhi" || course.title === "Data Science with Machine Learning & AI Course in Mumbai" || course.title === "Data Science with Machine Learning & AI Course in Bangalore" || course.title === "Data Science with Machine Learning & AI Course in Chennai" || course.title === "Data Science with Machine Learning & AI Course in Pune" ?
                    <>
                      {/* <h2 className="text-4xl font-bold text-white mb-8">
                        What You Will Learn
                      </h2> */}

                      <div className="space-y-6">

                        <p style={{ fontSize: 17 }} className="font-normal  text-white" >
                          {/* <span
                            className="font-bold"
                            style={{ color: "#2b2b2b" }}
                          >
                            Analytics Core:
                          </span>{" "} */}
                          ⦿ Master Advanced Excel, SQL, Tableau, Power BI, Python, R,
                          statistics, and business reporting.
                        </p>

                        <p style={{ fontSize: 17 }} className="font-normal  text-white">
                          {/* <span
                            className="font-bold"
                            style={{ color: "#2b2b2b" }}
                          >
                            ML & Deep Learning:
                          </span>{" "} */}
                          ⦿ Build predictive modeling, clustering, decision trees,
                          ensemble techniques, NLP, and deep learning.
                        </p>

                        <p style={{ fontSize: 17 }} className="font-normal  text-white">
                          {/* <span
                            className="font-bold"
                            style={{ color: "#2b2b2b" }}
                          >
                            AI-Assisted Efficiency:
                          </span>{" "} */}
                          ⦿ Use Generative AI for rapid SQL generation, automated EDA,
                          dashboard insights, and documentation.
                        </p>

                        <p style={{ fontSize: 17 }} className="font-normal  text-white">
                          {/* <span
                            className="font-bold"
                            style={{ color: "#2b2b2b" }}
                          >
                            Portfolio & Career Prep:
                          </span>{" "} */}
                          ⦿ Build hands-on projects across industry use cases with
                          interview coaching and placement support.
                        </p>

                      </div>
                    </>
                    :
                    course.title === "Data Analytics and Generative AI Course" ?
                      <>
                        {/* <h2 className="text-4xl font-bold text-white mb-8">
                          What You Will Learn
                        </h2> */}
                        <div className="space-y-6">
                          <p style={{ fontSize: 17 }} className="font-normal  text-white">
                            {/* <span className="font-bold"
                              style={{ color: "#2b2b2b" }}
                            >
                              Core Analytics:
                            </span>{" "} */}
                            ⦿ Master Excel, SQL, Power BI, and Power Pivot for data
                            cleaning, dashboards, and reporting.
                          </p>

                          <p style={{ fontSize: 17 }} className="font-normal  text-white">
                            {/* <span className="font-bold"
                              style={{ color: "#2b2b2b" }}
                            >
                              GenAI Execution:
                            </span>{" "} */}
                            ⦿ Leverage Generative AI for advanced business research,
                            coding support, and workflow automation.
                          </p>

                          <p style={{ fontSize: 17 }} className="font-normal  text-white">

                            ⦿ Build your Python foundation to design and deploy custom
                            GenAI applications using Streamlit.
                          </p>

                          <p style={{ fontSize: 17 }} className="font-normal  text-white">

                            ⦿ Combine analytics and GenAI to automate executive reports
                            and solve complex business problems.
                          </p>
                        </div>
                      </>
                      :
                      course.title === "Data Analytics With Visualization" || course.title === "Data Analytics With Visualization in Kolkata" || course.title === "Data Analytics With Visualization in Delhi" || course.title === "Data Analytics With Visualization in Mumbai" || course.title === "Data Analytics With Visualization in Bangalore" || course.title === "Data Analytics With Visualization in Chennai" || course.title === "Data Analytics With Visualization in Pune" ?

                        <>
                          {/* <h2 className="text-4xl font-bold text-white mb-8">
                            What You Will Learn
                          </h2> */}
                          <div className="space-y-6">
                            <p style={{ fontSize: 17 }} className="font-normal  text-white">
                              {/* <span className="font-bold"
                              style={{ color: "#2b2b2b" }}
                            >
                              Core Analytics:
                            </span>{" "} */}
                              ⦿ Learn executive business analysis, interactive pivot tables, dynamic dashboards, and AI-assisted workflows.
                            </p>

                            <p style={{ fontSize: 17 }} className="font-normal  text-white">
                              {/* <span className="font-bold"
                              style={{ color: "#2b2b2b" }}
                            >
                              GenAI Execution:
                            </span>{" "} */}
                              ⦿ Manage corporate databases, write complex queries, and use AI tools to optimize SQL code.
                            </p>

                            <p style={{ fontSize: 17 }} className="font-normal  text-white">

                              ⦿ Build enterprise dashboards using Power Query, data modeling, advanced charts, and DAX formulas.
                            </p>

                            <p style={{ fontSize: 17 }} className="font-normal  text-white">

                              ⦿ Master data cleaning, predictive modeling, and automated EDA using Pandas, NumPy, and Seaborn.
                            </p>
                          </div>
                        </>
                        :


                        course.title === "AI for Beginners" ?
                          <>
                            {/* <h2 className="text-4xl font-bold text-white mb-8">
                        What You Will Learn
                      </h2> */}

                            <div className="space-y-6">

                              <p style={{ fontSize: 17 }} className="font-normal  text-white" >
                                {/* <span
                            className="font-bold"
                            style={{ color: "#2b2b2b" }}
                          >
                            Analytics Core:
                          </span>{" "} */}
                                ⦿ Master the anatomy of effective prompts, prompt chaining, fact-checking protocols, and citation-backed research using Perplexity AI and NotebookLM.
                              </p>

                              <p style={{ fontSize: 17 }} className="font-normal  text-white">
                                {/* <span
                            className="font-bold"
                            style={{ color: "#2b2b2b" }}
                          >
                            ML & Deep Learning:
                          </span>{" "} */}
                                ⦿ Create stunning digital assets by learning text-to-image styling, automated video production, and custom music composition using Suno.
                              </p>

                              <p style={{ fontSize: 17 }} className="font-normal  text-white">
                                {/* <span
                            className="font-bold"
                            style={{ color: "#2b2b2b" }}
                          >
                            AI-Assisted Efficiency:
                          </span>{" "} */}
                                ⦿ Build functional, interactive web applications from scratch using natural language, basic coding logic, and modern no-code platforms like Lovable.
                              </p>

                              <p style={{ fontSize: 17 }} className="font-normal  text-white">
                                {/* <span
                            className="font-bold"
                            style={{ color: "#2b2b2b" }}
                          >
                            Portfolio & Career Prep:
                          </span>{" "} */}
                                ⦿ Automate data visualization and formulas in Google Sheets, draft unbiased surveys, and generate professional presentations, emails, and AI voiceovers.
                              </p>

                            </div>
                          </> :
                          course.title === "Data science course (Pay after Placement)" ?
                            <div className="space-y-6">

                              <p style={{ fontSize: 17 }} className="font-normal  text-white" >
                                {/* <span
                            className="font-bold"
                            style={{ color: "#2b2b2b" }}
                          >
                            Analytics Core:
                          </span>{" "} */}
                                ⦿ Master Advanced Excel, SQL, Tableau, Power BI, Python, R,
                                statistics, and business reporting.
                              </p>

                              <p style={{ fontSize: 17 }} className="font-normal  text-white">
                                {/* <span
                            className="font-bold"
                            style={{ color: "#2b2b2b" }}
                          >
                            ML & Deep Learning:
                          </span>{" "} */}
                                ⦿ Build predictive modeling, clustering, decision trees,
                                ensemble techniques, NLP, and deep learning.
                              </p>

                              <p style={{ fontSize: 17 }} className="font-normal  text-white">
                                {/* <span
                            className="font-bold"
                            style={{ color: "#2b2b2b" }}
                          >
                            AI-Assisted Efficiency:
                          </span>{" "} */}
                                ⦿ Use Generative AI for rapid SQL generation, automated EDA,
                                dashboard insights, and documentation.
                              </p>

                              <p style={{ fontSize: 17 }} className="font-normal  text-white">
                                {/* <span
                            className="font-bold"
                            style={{ color: "#2b2b2b" }}
                          >
                            Portfolio & Career Prep:
                          </span>{" "} */}
                                ⦿ Build hands-on projects across industry use cases with
                                interview coaching and placement support.
                              </p>

                            </div>

                            :

                            course.title === "AI for Product Managers" ?
                              <div className="space-y-6">

                                <p style={{ fontSize: 17 }} className="font-normal  text-white" >
                                  {/* <span
                            className="font-bold"
                            style={{ color: "#2b2b2b" }}
                          >
                            Analytics Core:
                          </span>{" "} */}
                                  ⦿	Learn the "Build vs. Prompt vs. Buy" framework, evaluate problem feasibility via the AI Opportunity Matrix, and differentiate between foundational AI and feature-based AI.
                                </p>

                                <p style={{ fontSize: 17 }} className="font-normal  text-white">
                                  {/* <span
                            className="font-bold"
                            style={{ color: "#2b2b2b" }}
                          >
                            ML & Deep Learning:
                          </span>{" "} */}
                                  ⦿ Apply advanced prompt engineering styles (CoT, few-shot) to automate internal operations like Zendesk support triage, in-product copywriting, and PRD generation.
                                </p>

                                <p style={{ fontSize: 17 }} className="font-normal  text-white">
                                  {/* <span
                            className="font-bold"
                            style={{ color: "#2b2b2b" }}
                          >
                            AI-Assisted Efficiency:
                          </span>{" "} */}
                                  ⦿ Evaluate multi-agent orchestration platforms and Retrieval-Augmented Generation (RAG) architectures to securely connect enterprise data to customer support and compliance systems.
                                </p>

                                <p style={{ fontSize: 17 }} className="font-normal  text-white">
                                  {/* <span
                            className="font-bold"
                            style={{ color: "#2b2b2b" }}
                          >
                            Portfolio & Career Prep:
                          </span>{" "} */}
                                  ⦿ Build testable stakeholder prototypes using no-code AI tools, while designing "LLM-as-a-judge" evaluation pipelines to monitor prompt drift, hallucinations, and compliance risk.
                                </p>

                              </div>


                              :
                              course.title === "AI and Machine Learning Course" ?
                                <>


                                  <div className="space-y-6">
                                    <p style={{ fontSize: 17 }} className="font-normal  text-white">
                                      {/* <span className="font-bold"
                              style={{ color: "#2b2b2b" }}
                            >
                              Core Analytics:
                            </span>{" "} */}
                                      ⦿ Master probability distributions, exploratory data analysis, feature engineering, and statistical testing in Python.
                                    </p>

                                    <p style={{ fontSize: 17 }} className="font-normal  text-white">
                                      {/* <span className="font-bold"
                              style={{ color: "#2b2b2b" }}
                            >
                              GenAI Execution:
                            </span>{" "} */}
                                      ⦿ Build and optimize machine learning models using Scikit-Learn, NumPy, Pandas, and Seaborn.                              </p>

                                    <p style={{ fontSize: 17 }} className="font-normal  text-white">

                                      ⦿ Architect natural language processing solutions, decision trees, clustering, and deep learning networks.                              </p>

                                    <p style={{ fontSize: 17 }} className="font-normal  text-white">

                                      ⦿ Deploy live web applications using Flask, Streamlit, automated EDA pipelines, and code documentation.                              </p>
                                  </div>
                                </>
                                :
                                course.title === " Advanced Generative AI Course" || course.title === "Generative AI Course in Kolkata" || course.title === "Generative AI Course in Mumbai" || course.title === "Generative AI Course in Delhi" || course.title === "Generative AI Course in Bangalore" || course.title === "Generative AI Course in Chennai" || course.title === "Generative AI Course in Pune" ?
                                  <>


                                    <div style={{ marginTop: 50 }} className="space-y-6">
                                      <p style={{ fontSize: 17 }} className="font-normal  text-white">

                                        ⦿ Master Python setup, Git workflows, prompt engineering (ReAct, Tree-of-Thought), tokenization, and advanced API integrations.                                </p>
                                      <p style={{ fontSize: 17 }} className="font-normal  text-white">

                                        ⦿ Implement open-source model fine-tuning using LoRA/QLoRA alongside robust vector database retrieval-augmented generation pipelines.                              </p>

                                      <p style={{ fontSize: 17 }} className="font-normal  text-white">

                                        ⦿ Architect multi-agent execution frameworks, custom tools, and complex stateful workflows using LangGraph and LCEL.
                                      </p>
                                      <p style={{ fontSize: 17 }} className="font-normal  text-white">

                                        ⦿ Deploy scalable AI microservices via FastAPI and Docker, and build multi-sensory applications using Vision, Whisper, and Stable Diffusion.                                </p>
                                    </div>
                                  </>
                                  :
                                  <div className="space-y-6">

                                    <p style={{ fontSize: 17 }} className="font-normal  text-white" >

                                      ⦿	Master MySQL database operations, advanced query writing, window functions, and Python data manipulation.
                                    </p>

                                    <p style={{ fontSize: 17 }} className="font-normal  text-white">

                                      ⦿ Process large-scale data using distributed computing, HDFS, YARN, MapReduce, and Hive optimization.
                                    </p>

                                    <p style={{ fontSize: 17 }} className="font-normal  text-white">

                                      ⦿ Build scalable live pipelines using Apache Spark, Spark SQL, RDDs, and Apache Kafka workflows.
                                    </p>

                                    <p style={{ fontSize: 17 }} className="font-normal  text-white">

                                      ⦿ Design secure data pipelines using Azure Data Factory, Blob Storage, Data Lake, and Databricks.
                                    </p>

                                  </div>

              }
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                {
                  course.title != "AI for Beginners" ? <Users size={16} className="mr-2" /> : <Wrench size={16} className="mr-2" />
                }
                <span>
                  {course.title === "AI for Product Managers"
                    ? "720 students"
                    :
                    course.title === "AI for Entrepreneurs" ? "100 students"
                      : course.title === "Advanced Generative AI Course" || course.title === "Generative AI Course in Kolkata" || course.title === "Generative AI Course in Delhi" || course.title === "Generative AI Course in Pune" || course.title === "Generative AI Course in Chennai" || course.title === "Generative AI Course in Bangalore" || course.title === "Generative AI Course in Mumbai"
                        ? "1220 students"
                        :
                        course.title === "AI for Beginners" ? "15+ AI Tools"
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
                                            : "1220 students"}
                </span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Clock size={16} className="mr-2" />

                {/* <span>{courseHours[course.title] || "225 Hours"}</span> */}
                {course.title === "AI and Machine Learning Course"
                  ? "80 Hours" :
                  course.title === "AI for Beginners" ? "20 Hours" :
                    course.title === "AI for Entrepreneurs" ? "20 Hours" :
                      course.title === "Data Science with Machine Learning & AI Certification" || course.title === "Data Science with Machine Learning & AI Course in Kolkata" || course.title === "Data Science with Machine Learning & AI Course in Delhi" || course.title === "Data Science with Machine Learning & AI Course in Pune" || course.title === "Data Science with Machine Learning & AI Course in Chennai" || course.title === "Data Science with Machine Learning & AI Course in Bangalore" || course.title === "Data Science with Machine Learning & AI Course in Mumbai"
                        ? "232 Hours"
                        : course.title === "AI for Product Managers"
                          ? "24 Hours"
                          :
                          "160 Hours"
                }              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Star size={16} className="mr-2" />
                <span> {course.title === "AI for Product Managers"
                  ? "4.7 (195 reviews)"
                  : course.title === "AI for Entrepreneurs" ? "4.8 (90 reviews)"
                    : course.title === "Advanced Generative AI Course" || course.title === "Generative AI Course in Kolkata" || course.title === "Generative AI Course in Delhi" || course.title === "Generative AI Course in Pune" || course.title === "Generative AI Course in Chennai" || course.title === "Generative AI Course in Bangalore" || course.title === "Generative AI Course in Mumbai"
                      ? "4.9 (209 reviews)" :
                      course.title === "AI for Beginners" ? "4.8 (25 reviews)"
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
                                          : "4.9 (209 reviews)"}</span>
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
                      course.title === "AI for Beginners" ? "Ivy Professional School Certification" : course.title === "AI for Product Managers" || course.title === "Generative AI Course" || course.title === "Generative AI Course in Kolkata" || course.title === "Generative AI Course in Delhi" || course.title === "Generative AI Course in Pune" || course.title === "Generative AI Course in Chennai" || course.title === "Generative AI Course in Bangalore" || course.title === "Generative AI Course in Mumbai" || course.title === "AI and Machine Learning Course" || course.title === "AI for Entrepreneurs"
                      ? "Ivy Professional School Certification"
                      : "Ivy Professional School Certification"}
              </div>

              <Link
                href="/alumni"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#013a81] shadow-sm transition-all hover:bg-blue-100 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#013a81]"
              >
                <Award size={16} className="mr-2" />
                Placement Support
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4">

              {
                course.title != "AI for Beginners" ?
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-blue-100 text-[#013a81] hover:bg-[#013a81] hover:text-white" onClick={() => {
                      let syllabusUrl = "";

                      if (
                        course.title ===
                        "Generative AI Course" || course.title === "Generative AI Course in Kolkata" || course.title === "Generative AI Course in Delhi" || course.title === "Generative AI Course in Pune" || course.title === "Generative AI Course in Chennai" || course.title === "Generative AI Course in Bangalore" || course.title === "Generative AI Course in Mumbai"
                      ) {
                        syllabusUrl =
                          "https://drive.google.com/file/d/1y6iqAqiIPd7_DAAirOBVb2sKLeJKdQF5/preview";
                      } else if (
                        course.title === "Data Science with Machine Learning & AI Certification" || course.title === "Data Science with Machine Learning & AI Course in Kolkata" || course.title === "Data Science with Machine Learning & AI Course in Delhi" || course.title === "Data Science with Machine Learning & AI Course in Pune" || course.title === "Data Science with Machine Learning & AI Course in Chennai" || course.title === "Data Science with Machine Learning & AI Course in Bangalore" || course.title === "Data Science with Machine Learning & AI Course in Mumbai"
                      ) {
                        syllabusUrl =
                          "https://drive.google.com/file/d/1a1gYATYn33yUVxWXZOdp5aGjFkYXCCk4/preview";
                      } else if (
                        course.title === " Data Engineering Course"
                      ) {
                        syllabusUrl =
                          "https://drive.google.com/file/d/1Pyygn3rr0vlwyxShgYolK99q6rRb1Ncv/preview";
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
                          "https://drive.google.com/file/d/1a1gYATYn33yUVxWXZOdp5aGjFkYXCCk4/preview";
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
                          "https://drive.google.com/file/d/1gVuaONPzZV3gCU-MWCZmkAKh-V-csTqk/preview";
                      }

                      else if (course.title === "Data Engineering Course in Kolkata" || course.title === "Data Engineering Course in Delhi" || course.title === "Data Engineering Course in Pune" || course.title === "Data Engineering Course in Chennai" || course.title === "Data Engineering Course in Bangalore" || course.title === "Data Engineering Course in Mumbai") {
                        syllabusUrl =
                          "https://drive.google.com/file/d/1Pyygn3rr0vlwyxShgYolK99q6rRb1Ncv/preview";
                      }
                      else {
                        syllabusUrl = "https://drive.google.com/file/d/1y6iqAqiIPd7_DAAirOBVb2sKLeJKdQF5/preview";
                      }
                      if (!syllabusUrl) {
                        setSubmitStatus("error");
                        setSubmitMessage("Course details are not available for this course yet.");
                        return;
                      }
                      setPendingSyllabusUrl(syllabusUrl);
                      setLeadPopupOpen(true);
                      setCaptchaCode(createCaptchaCode());
                      setFormData((prevData) => ({
                        ...prevData,
                        captchaAnswer: "",
                      }));
                      setSubmitStatus(null);
                      setSubmitMessage("");
                    }}
                  >
                    Get Course Details                  </Button>
                  :
                  null

              }





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

            <div className="space-y-2">
              {
                course.title === "AI for Entrepreneurs" ? (
                  <div className="text-white text-sm font-medium">
                    AI Training delivered to
                  </div>
                ) : course.title === "AI for Beginners" ? (
                  <div className="text-white text-sm font-medium">
                    Tools You'll Master in
                  </div>
                ) : (
                  <div className="text-white text-sm font-medium">
                    Find our Alumni at
                  </div>
                )
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
                          className="object-contain opacity-100 transition-all h-12 sm:h-14 lg:h-16 w-auto max-w-[100px] sm:max-w-[120px] lg:max-w-[150px]" />
                      </div>
                    ))}
                  </div>
                </div>
              ) : course.title === "AI for Entrepreneurs" ? (
                /* Logic for AI for Entrepreneurs */
                <div className="flex items-center bg-[#ffffffa9] rounded-full px-5 py-2.5 w-fit mx-auto sm:mx-0 shadow-sm border border-white/10">
                  <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
                    {[
                      { name: "Atlas Copco", logo: AtlasCopco },
                      { name: "The Times of India", logo: timesof },
                      { name: "Tata Steel", logo: tatasteel },
                      { name: "ITC", logo: ITC },
                      { name: "Honeywell", logo: Honeywell },
                    ].map((partner) => (
                      <div key={partner.name} className="flex items-center justify-center">
                        <Image
                          loading="lazy"
                          width={140}
                          height={40}
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          /* h-5 (20px) on mobile is very subtle and clean.
                             h-8 (32px) on desktop is the standard professional height.
                             Reduced max-widths to keep them contained.
                          */
                          className="object-contain w-auto 
                   h-6 sm:h-8 lg:h-10 
max-w-[90px] sm:max-w-[120px] lg:max-w-[150px]
                     opacity-90 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) :


                course.title === "AI for Beginners" ? (
                  /* Logic for AI for Beginners */
                  <div className="flex items-center bg-[#ffffffa9] rounded-full px-5 py-2.5 w-fit mx-auto sm:mx-0 shadow-sm border border-white/10">
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
                      {[
                        { name: "Claude", logo: Claude },
                        { name: "Lovable", logo: Lovable },
                        { name: "Replit", logo: Replit },
                        { name: "Canva", logo: Canva },
                        { name: "Chatgpt", logo: Chatgpt },

                      ].map((partner) => (
                        <div key={partner.name} className="flex items-center justify-center">
                          <Image
                            loading="lazy"
                            width={140}
                            height={40}
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            /* h-5 (20px) on mobile is very subtle and clean.
                               h-8 (32px) on desktop is the standard professional height.
                               Reduced max-widths to keep them contained.
                            */
                            className="object-contain w-auto 
                   h-6 sm:h-8 lg:h-10 
max-w-[90px] sm:max-w-[120px] lg:max-w-[150px]
                     opacity-90 hover:opacity-100 transition-opacity"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ) :




                  (
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




            {/* Alumni Cards - shown for all applicable courses */}
            {(() => {
              const heroAlumni = getHeroAlumni(course.title);
              if (!heroAlumni) return null;
              const cardStyles = [
                { bg: "from-[#dff0fb] to-white", border: "border-[#a8d8f0]", ring: "ring-[#3aade0]", roleColor: "text-[#0077b6]" },
                { bg: "from-[#eee6ff] to-white", border: "border-[#ccb8f7]", ring: "ring-[#8b5cf6]", roleColor: "text-[#6d28d9]" },
                { bg: "from-[#d9f5e8] to-white", border: "border-[#9ddbbf]", ring: "ring-[#34c87a]", roleColor: "text-[#0e7c46]" },
                { bg: "from-[#fff0d9] to-white", border: "border-[#f5cc88]", ring: "ring-[#f59e0b]", roleColor: "text-[#b45309]" },
              ];
              return (
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {heroAlumni.map((alumni, index) => {
                    const s = cardStyles[index % 4];
                    return (
                      <div
                        key={alumni.name}
                        role="button"
                        tabIndex={0}
                        onClick={() => router.push(`/alumni#${getAlumniCardId(alumni.name)}`)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            router.push(`/alumni#${getAlumniCardId(alumni.name)}`);
                          }
                        }}
                        className={`bg-gradient-to-b ${s.bg} rounded-xl p-2 flex flex-col items-center text-center gap-1.5 shadow-md border ${s.border} cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white`}
                        aria-label={`View ${alumni.name} on alumni page`}
                      >
                        <div className={`relative w-10 h-10 rounded-full overflow-hidden ring-2 ${s.ring} flex-shrink-0`}>
                          <Image src={alumni.image} alt={alumni.name} fill sizes="40px" className="object-cover" />
                        </div>
                        <div className="w-full">
                          <p className="font-bold text-gray-800 text-[12px] leading-tight line-clamp-2">{alumni.name}</p>
                          <p className={`text-[10px] font-semibold mt-0.5 line-clamp-1 ${s.roleColor}`}>{alumni.role}</p>
                        </div>
                        <div className={`w-full border-t ${s.border} pt-1`}>
                          <div className="relative h-12 w-full">
                            <Image src={alumni.company} alt={`${alumni.name}'s company`} fill sizes="140px" className="object-contain" />
                          </div>
                        </div>
                        <p className="min-h-[34px] text-[10px] leading-snug text-gray-600 line-clamp-2">
                          &ldquo;{heroAlumniReviews[alumni.name] || "Ivy helped me build practical skills for my career move."}&rdquo;
                        </p>
                        <Link
                          href="/reviews"
                          onClick={(e) => e.stopPropagation()}
                          className="text-[10px] font-bold text-[#013a81] hover:underline"
                        >
                          Show more reviews
                        </Link>
                      </div>
                    );
                  })}
                </div>
              );
            })()}

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




          </div>

          <div style={{ marginTop: 30 }}>
            {course.title === "AI for Entrepreneurs" && (
              <div className="mb-4 rounded-xl overflow-hidden shadow-lg">
                {videoPlaying ? (
                  <iframe
                    width="100%"
                    height="340"
                    src="https://www.youtube.com/embed/jnygCU3KFHg?autoplay=1"
                    title="AI for Entrepreneurs"
                    style={{ border: "none" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                  />
                ) : (
                  <div
                    className="relative cursor-pointer group"
                    onClick={() => setVideoPlaying(true)}
                  >
                    <img
                      src="https://img.youtube.com/vi/jnygCU3KFHg/hqdefault.jpg"
                      alt="AI for Entrepreneurs video thumbnail"
                      className="w-full object-cover"
                      style={{ height: 340 }}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <div className="bg-red-600 rounded-full p-4 shadow-xl group-hover:scale-110 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-8 h-8"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            {/* {course.title === "AI for Entrepreneurs" && (
              <div className="mb-4 rounded-xl overflow-hidden shadow-lg">
                {videoPlaying ? (
                  <iframe
                    width="100%"
                    height="340"
                    src="https://www.youtube.com/embed/_Z2Dw0id6dA?autoplay=1"
                    title="AI for Entrepreneurs"
                    style={{ border: "none" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                  />
                ) : (
                  <div
                    className="relative cursor-pointer group"
                    onClick={() => setVideoPlaying(true)}
                  >
                    <img
                      src="https://img.youtube.com/vi/_Z2Dw0id6dA/hqdefault.jpg"
                      alt="AI for Entrepreneurs video thumbnail"
                      className="w-full object-cover"
                      style={{ height: 340 }}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <div className="bg-red-600 rounded-full p-4 shadow-xl group-hover:scale-110 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-8 h-8"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )} */}
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
                {
                  course.title != "AI for Beginners" ?
                    <p className="text-gray-600 text-sm md:text-base">
                      Learn with Experts & Industry Leaders from IIT & IIM
                    </p>
                    :
                    <p className="text-gray-600 text-sm md:text-base">
                      Learn with Seasoned AI Experts of the Industry
                    </p>

                }

              </div>

              <form
                id="course-lead-form"
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
                    {/* <option value="Hyderabad">Hyderabad</option> */}
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
                      : pendingSyllabusUrl
                        ? "Submit & Open Course Details"
                        : "Register Now"}
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
                        course.title === "AI for Entrepreneurs"
                          ? "Next batch starting from 10th April, 2026"
                          : course.title === "AI for Beginners"
                            ? "Batch Starting From 4th May, 2026"
                            : "New batch starting 30th May and 13th June, 2026"
                      }

                    </span>

                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>

                      {
                        course.title != "AI for Beginners" ?
                          <span className="text-red-600 font-medium">
                            Limited seats left!
                          </span> :
                          <span className="text-red-600 font-medium">
                            Summers Special!      </span>
                      }

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
      {leadPopupOpen && pendingSyllabusUrl && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm">
          <div className="relative max-h-[calc(100vh-32px)] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="bg-gradient-to-r from-[#013a81] via-[#009fda] to-[#f7af34] px-6 py-5 text-white">
              <button
                type="button"
                onClick={closeLeadPopup}
                className="absolute right-4 top-4 rounded-full bg-white/15 p-1.5 text-white transition-colors hover:bg-white/25"
                aria-label="Close course details form"
              >
                <X className="h-4 w-4" />
              </button>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">
                Course Details
              </p>
              <h2 className="mt-2 pr-8 text-2xl font-extrabold leading-tight">
                Get the brochure
              </h2>
              <p className="mt-2 text-sm text-white/85 line-clamp-2">
                {course.title}
              </p>
            </div>

            <form className="space-y-3 p-6 text-slate-900" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your Name*"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-all focus:border-[#009fda] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009fda]/20"
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Enter your Email*"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-all focus:border-[#009fda] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009fda]/20"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                placeholder="Enter your phone*"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-all focus:border-[#009fda] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009fda]/20"
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <select
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition-all focus:border-[#009fda] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#009fda]/20"
                required
                name="city"
                value={formData.city}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select your city*
                </option>
                <option value="Kolkata">Kolkata</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Pune">Pune</option>
                {/* <option value="Hyderabad">Hyderabad</option> */}
                <option value="Chennai">Chennai</option>
              </select>

              <div className="rounded-xl border border-dashed border-[#009fda]/45 bg-gradient-to-br from-sky-50 via-white to-amber-50 p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Human Check
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      Type the code shown below
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={refreshCaptcha}
                    className="rounded-full border border-[#009fda]/30 bg-white px-3 py-1.5 text-xs font-bold text-[#013a81] shadow-sm transition-colors hover:bg-sky-100"
                  >
                    Refresh
                  </button>
                </div>

                <div className="relative mb-3 overflow-hidden rounded-lg border border-slate-200 bg-[#fff7df] px-4 py-3 shadow-inner">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "repeating-linear-gradient(135deg, #009fda 0 2px, transparent 2px 12px)" }} />
                  <div className="relative flex select-none items-center justify-center gap-1 font-mono text-3xl font-black tracking-[0.35em] text-[#013a81]">
                    {captchaCode.split("").map((char, index) => (
                      <span
                        key={`${char}-${index}`}
                        className={index % 2 === 0 ? "-rotate-6 text-[#013a81]" : "rotate-6 text-[#bc4e00]"}
                      >
                        {char}
                      </span>
                    ))}
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Enter verification code*"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm uppercase tracking-widest transition-all focus:border-[#009fda] focus:outline-none focus:ring-2 focus:ring-[#009fda]/20"
                  required
                  name="captchaAnswer"
                  value={formData.captchaAnswer}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              <Button
                type="submit"
                className="w-full py-3 text-white"
                style={{ backgroundColor: "#013a81" }}
                disabled={submitStatus === "submitting"}
              >
                {submitStatus === "submitting" ? "Submitting..." : "Submit & Open Course Details"}
              </Button>

              {submitMessage && (
                <p
                  className={`text-center text-sm font-medium ${submitStatus === "success" ? "text-green-600" : "text-red-600"
                    }`}
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      )}

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
                <>
                  <span className="sm:hidden">
                    <WhatsAppIcon size={24} />
                  </span>
                  <span className="hidden sm:inline">
                    <WhatsAppIcon size={28} />
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
