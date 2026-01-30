"use client"
import React, { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle,
  Users,
  Sparkles,
  Briefcase,
  Award,
  Calendar,
  ArrowRight,
  GraduationCap,
  Phone,
  Mail,
  Send,
  Clock,
  MapPin,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  BarChart3,
  LineChart,
  Target,
  Shield,
  Globe,
  Users2,
  Building,
  Rocket,
  Brain,
  Cpu,
  Zap,
  DollarSign,
  TargetIcon,
  PieChart,
  Lightbulb,
  BookOpen,
  Headphones,
  FileText,
  CheckSquare,
  Clock4,
  AwardIcon,
  ShieldCheck,
  Globe2,
  BadgeCheck,
  Star,
  Trophy,
  Check,
  Download,
  Play,
  ArrowUpRight,
  BarChart,
  Code,
  Database,
  Cloud,
  LucideIcon,
  ArrowLeft,
  ExternalLink
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Chart.js imports
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

// Import case study images
import Case1 from "../../assests/casestudies/Case1.webp";
import Case2 from "../../assests/casestudies/Case2.webp";
import Case4 from "../../assests/casestudies/Case4.webp";

// Import client logo images
import AtlasCopco from "../../assests/casestudies/AtlasCopco.png";
import Bandhanbank from "../../assests/casestudies/Bandhanbank.png";
import Canon from "../../assests/casestudies/Canon.png";
import Capgemini from "../../assests/casestudies/Capgemini.jpg";
import Chola from "../../assests/casestudies/Chola.png";
import Cognizant from "../../assests/casestudies/Cognizant.jpg";
import Genpact from "../../assests/casestudies/Genpact.png";
import Honeywell from "../../assests/casestudies/Honeywell.png";
import HSBC from "../../assests/casestudies/HSBC.jpg";
import ICRA from "../../assests/casestudies/ICRA.png";
import Indianoil from "../../assests/casestudies/Indianoil.png";
import ITCInfotech from "../../assests/casestudies/ITC Infotech.png";
import Lalbaba from "../../assests/casestudies/Lalbaba.jpg";
import MOL from "../../assests/casestudies/MOL.png";
import MSP from "../../assests/casestudies/MSP.png";

const expertiseData = [
  {
    id: '01',
    title: "GENAI & AI SOLUTIONS",
    icon: <Sparkles className="h-6 w-6 mb-4 text-purple-200" />,
    description: "Cutting-edge AI capabilities for leaders, technical experts, and domain professionals.",
    topics: [
      "GenAI for Leaders",
      "GenAI for All",
      "Machine Learning",
      "Applied GenAI for Business Teams",
      "Agentic AI: Strategy & ROI",
      "Large Language Models",
      "Ethical Considerations and Responsible AI",
      "Predictive Maintenance using GenAI"
    ],
    gradient: "from-purple-700 via-violet-800 to-indigo-900",
    shadow: "shadow-purple-900/50"
  },
  {
    id: '02',
    title: "LEADERSHIP & STRATEGY",
    icon: <Users2 className="h-6 w-6 mb-4 text-amber-200" />,
    description: "Empowering organizations with strategic vision and corporate excellence.",
    topics: [
      "Vision Strategy",
      "Strategic Leadership",
      "Corporate Excellence",
      "Outbound Team Empowerment",
      "Agile Thinking & Problem Solving",
      "Goal Setting & Achievement"
    ],
    gradient: "from-amber-600 via-orange-700 to-yellow-900",
    shadow: "shadow-amber-900/50"
  },
  {
    id: '03',
    title: "DATA SCIENCE & ANALYTICS",
    icon: <BarChart3 className="h-6 w-6 mb-4 text-blue-200" />,
    description: "Transforming raw data into actionable business intelligence.",
    topics: [
      "Predictive Analytics using R / SAS / Python / SPSS",
      "Advanced Statistical Analysis and Interpretation",
      "Statistical Models (Time Series, Decision Tree, Neural Network, etc.)",
      "Text Mining",
      "Retail Analytics",
      "Marketing Analytics"
    ],
    gradient: "from-blue-600 via-blue-700 to-slate-900",
    shadow: "shadow-blue-900/50"
  },
  {
    id: '04',
    title: "DATA ENGINEERING & CLOUD",
    icon: <Brain className="h-6 w-6 mb-4 text-cyan-200" />,
    description: "Building robust infrastructure for big data and cloud computing.",
    topics: [
      "Big Data Overview using Hadoop",
      "PySpark",
      "AWS & Cloud Computing of Big Data",
      "Scala",
      "Microsoft Business Intelligence Suite",
      "Tableau",
      "QlickView",
      "Dashboarding using Advanced Excel and VBA"
    ],
    gradient: "from-cyan-600 via-teal-700 to-emerald-900",
    shadow: "shadow-cyan-900/50"
  },

  {
    id: '06',
    title: "PROFESSIONAL PERFORMANCE",
    icon: <Briefcase className="h-6 w-6 mb-4 text-slate-200" />,
    description: "Enhancing individual skills and organizational productivity tools.",
    topics: [
      "Power Automate",
      "Power Query",
      "Power Pivot",
      "Power BI",
      "Negotiation Skills",
      "Professional English",
      "Voice Training",
      "Email Etiquette"
    ],
    gradient: "from-slate-600 via-gray-700 to-zinc-900",
    shadow: "shadow-slate-900/50"
  }
];

// L&D Challenges Data
const ldChallenges = [
  {
    title: 'Skills Gap in AI & Data',
    description: 'Teams lack foundational knowledge in data analytics and AI concepts',
    icon: Brain,
    solution: 'Structured GenAI and Data Science bootcamps with hands-on projects'
  },
  {
    title: 'Low Training ROI',
    description: 'Difficulty measuring impact of training investments',
    icon: TargetIcon,
    solution: 'Custom KPIs and reporting dashboards that track business outcomes'
  },
  {
    title: 'Adoption Challenges',
    description: 'Trained employees struggle to apply learning on the job',
    icon: TrendingUp,
    solution: 'Post-training coaching and on-the-job reinforcement programs'
  },
  {
    title: 'Budget Constraints',
    description: 'Need effective training without massive upfront investment',
    icon: DollarSign,
    solution: 'Flexible programs with clear ROI and performance-based pricing'
  }
];

// Success Pathway Data
const successPathway = [
  {
    step: 1,
    title: 'Assessment & Strategy',
    duration: 'Week 1-2',
    description: 'Comprehensive skills assessment and customized training blueprint',
    outcome: 'Detailed L&D strategy document with business goals'
  },
  {
    step: 2,
    title: 'Program Launch',
    duration: 'Week 3-4',
    description: 'Kickoff training with cohorts and personalized learning paths',
    outcome: 'First batch of trained employees and engagement metrics'
  },
  {
    step: 3,
    title: 'Implementation & Support',
    duration: 'Month 2-4',
    description: 'Ongoing training, mentoring, and project-based learning',
    outcome: 'Deployed AI/Analytics projects and business improvements'
  },
  {
    step: 4,
    title: 'Impact & Optimization',
    duration: 'Month 5+',
    description: 'Measure results, optimize programs, scale across organization',
    outcome: 'Documented ROI and scaled implementation roadmap'
  }
];

// Client Data for Impact Dashboard
const clientData = [
  {
    id: 'honeywell',
    name: 'Honeywell',
    industry: 'Industrial Manufacturing',
    desc: 'Enterprise-wide GenAI and Data Analytics transformation',
    metric: '90% Faster Decisions',
    color: '#2563eb',
    chartType: 'line',
    chartLabels: ['Week 1', 'Week 4', 'Week 8', 'Week 12', 'Week 16'],
    chartData: [20, 35, 60, 80, 90],
    keyMetrics: [
      { label: 'Employees Trained', value: '1,200+' },
      { label: 'Process Improvements', value: '45' },
      { label: 'Time Saved/Week', value: '240 hrs' }
    ],
    testimonial: 'Ivy transformed how our teams approach data-driven decisions. The ROI was evident within weeks.',
    author: 'L&D Director, Honeywell'
  },
  {
    id: 'itc',
    name: 'ITC Ltd',
    industry: 'FMCG & Agriculture',
    desc: 'Leadership AI program for senior management',
    metric: '70% Adoption',
    color: '#7c3aed',
    chartType: 'bar',
    chartLabels: ['Awareness', 'Training', '30 Days', '60 Days', '90 Days'],
    chartData: [85, 92, 78, 88, 85],
    keyMetrics: [
      { label: 'CxOs Trained', value: '120+' },
      { label: 'GenAI Tools Adopted', value: '85%' },
      { label: 'Collaboration Score', value: '+40%' }
    ],
    testimonial: 'Our executives now lead with AI confidence. The practical approach made all the difference.',
    author: 'Chief Learning Officer, ITC'
  },
  {
    id: 'tatasteel',
    name: 'Tata Steel',
    industry: 'Steel Manufacturing',
    desc: 'Centralized L&D ecosystem creation (Gurukul)',
    metric: '55% Engagement ↑',
    color: '#dc2626',
    chartType: 'line',
    chartLabels: ['Month 1', 'Month 3', 'Month 6', 'Month 9', 'Month 12'],
    chartData: [35, 45, 50, 52, 55],
    keyMetrics: [
      { label: 'Employees Upskilled', value: '2,500+' },
      { label: 'Operational Efficiency', value: '+40%' },
      { label: 'Employee Retention', value: '+25%' }
    ],
    testimonial: 'Creating Gurukul changed our L&D culture. Every plant now drives continuous learning.',
    author: 'Head of HR, Tata Steel'
  }
];

// FAQ Data
const faqData = [
  {
    q: 'How do you ensure training adoption beyond the classroom?',
    a: 'We use a multi-layered approach: on-the-job coaching, reinforcement through projects, dedicated Project Deans, and measurable adoption metrics tracked through our LMS. Post-training support is included for 90+ days.'
  },
  {
    q: 'Can you customize the curriculum for our specific industry?',
    a: 'Absolutely. We work with your team to customize case studies, projects, and examples to match your industry, business challenges, and functional areas (Finance, Sales, Operations, HR, etc.).'
  },
  {
    q: 'What ROI can we expect from the training?',
    a: 'Our clients typically see 40-60% efficiency gains within 3-6 months, with documented savings averaging $500K-$2M+ depending on scale. We set clear KPIs and track impact throughout the program.'
  },
  {
    q: 'How long does it take to see measurable results?',
    a: 'Quick wins appear within 4-8 weeks. Significant organizational impact is typically visible within 3-6 months, with sustained benefits compounding over time.'
  },
  {
    q: 'Do you provide ongoing support after the program?',
    a: 'Yes. We include 90+ days of post-training support with dedicated Project Deans, reinforcement sessions, and adoption tracking to ensure lasting impact.'
  },
  {
    q: 'What delivery formats do you offer?',
    a: 'We offer hybrid solutions: instructor-led workshops, online self-paced learning, cohort-based programs, one-on-one coaching, and blended approaches customized to your needs.'
  }
];

// Client logos data
const clientLogos = [
  { id: 1, name: 'Honeywell', logo: Honeywell.src, alt: 'Honeywell logo' },
  { id: 2, name: 'ITC Infotech', logo: ITCInfotech.src, alt: 'ITC Infotech logo' },

  { id: 5, name: 'HSBC', logo: HSBC.src, alt: 'HSBC logo' },
  { id: 6, name: 'Genpact', logo: Genpact.src, alt: 'Genpact logo' },
  { id: 7, name: 'Atlas Copco', logo: AtlasCopco.src, alt: 'Atlas Copco logo' },
  { id: 8, name: 'Bandhan Bank', logo: Bandhanbank.src, alt: 'Bandhan Bank logo' },
  { id: 9, name: 'Canon', logo: Canon.src, alt: 'Canon logo' },
  { id: 10, name: 'Capgemini', logo: Capgemini.src, alt: 'Capgemini logo' },
  { id: 11, name: 'Chola', logo: Chola.src, alt: 'Chola logo' },
  { id: 12, name: 'Cognizant', logo: Cognizant.src, alt: 'Cognizant logo' },
  { id: 13, name: 'ICRA', logo: ICRA.src, alt: 'ICRA logo' },
  { id: 14, name: 'Indian Oil', logo: Indianoil.src, alt: 'Indian Oil logo' },
  { id: 15, name: 'Lalbaba', logo: Lalbaba.src, alt: 'Lalbaba logo' },
  { id: 16, name: 'MOL', logo: MOL.src, alt: 'MOL logo' },
  { id: 17, name: 'MSP', logo: MSP.src, alt: 'MSP logo' },
];

const Enterprise = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    teamSize: '',
    challenge: '',
    message: ''
  });
  const [heroFormData, setHeroFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHeroSubmitting, setIsHeroSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [activeClient, setActiveClient] = useState('honeywell');
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [alumniCount, setAlumniCount] = useState(0);
  const [firmsCount, setFirmsCount] = useState(0);
  const [savingsCount, setSavingsCount] = useState(0);
  const [activeSection, setActiveSection] = useState('overview');
  const [openPillar, setOpenPillar] = useState<string>('pillar1');
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Case Studies Data
  const caseStudies = [
    {
      id: 'case-study-1',
      businessType: 'Industrial Manufacturing Engineering',
      title: 'Enterprise-Wide Training in Data Analytics, Data Science & AI',
      subtitle: 'Empowering employees across all levels to make faster, data-driven business decisions',
      image: Case1.src,
      impact: [
        '90% improvement in decision-making speed',
        '60% rise in employee engagement with data',
        '50% reduction in repetitive reporting time'
      ]
    },
    {
      id: 'case-study-2',
      businessType: 'Steel Manufacturing Engineering',
      title: 'Establishing "Gurukul" – A Centralized Learning & Development Department',
      subtitle: 'Driving productivity, skill enhancement, and revenue growth through structured L&D ecosystem',
      image: Case2.src,
      impact: [
        '40% improvement in machine handling efficiency',
        '55% boost in employee engagement scores',
        'Faster workforce readiness across plants'
      ]
    },
    {
      id: 'case-study-3',
      businessType: 'Global Retail & Consumer Goods',
      title: 'AI for Leaders: Enabling CxOs & Senior Executives',
      subtitle: 'Equipping leadership with dashboard automation, GenAI, and AI agents for competitive advantage',
      image: Case4.src,
      impact: [
        '70% reduction in strategic reporting delays',
        'High adoption of GenAI tools among executives',
        'Strengthened cross-department collaboration'
      ]
    }
  ];

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle hero form submission
  const handleHeroFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsHeroSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsHeroSubmitting(false);
      setStatusMessage('Thank you! We will contact you within 24 hours.');
      setHeroFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    }, 1500);
  };

  // Animate counters on mount
  useEffect(() => {
    const animateCounter = (setter: React.Dispatch<React.SetStateAction<number>>, target: number, duration: number) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
      return timer;
    };

    const timer1 = animateCounter(setAlumniCount, 32500, 2000);
    const timer2 = animateCounter(setFirmsCount, 400, 2000);
    const timer3 = animateCounter(setSavingsCount, 85, 2000);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);

  // Setup auto-scrolling for logos
  useEffect(() => {
    const container = logoContainerRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1.2; // Adjust speed here (lower = slower)

    const animateScroll = () => {
      if (!isPaused && container) {
        scrollPosition += scrollSpeed;

        // Reset to start when reaching the end
        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0;
        }

        container.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animateScroll);
    };

    animationId = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  // Get active client data
  const activeClientData = clientData.find(client => client.id === activeClient) || clientData[0];

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* HERO SECTION - Updated with 3 buttons and contact form */}
        <section className="relative bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white overflow-hidden min-h-[90vh] flex items-center">
          {/* Abstract Background Elements for Depth */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-900 rounded-full blur-[120px]"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 py-12 md:py-24 relative z-10">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

              {/* Left Column - Sophisticated Typography */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 backdrop-blur-md px-4 py-2 rounded-full">
                  <Trophy className="h-4 w-4 text-blue-400" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-200">Established 2007</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tighter">
                  BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">CAPABILITY</span>
                  <span className="block mt-2">DRIVE IMPACT</span>
                  <span className="block text-3xl md:text-4xl font-light text-slate-400 mt-4 tracking-normal italic">Future-Proof Your Talent</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl border-l-2 border-blue-600 pl-6">
                  Custom, ROI-focused corporate training in <span className="text-white font-semibold">GenAI, Data, and Leadership</span> for global enterprises.
                </p>

                {/* Action Buttons with Micro-interactions */}
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="group bg-white/5 border-slate-700 text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 rounded-xl px-8"
                    onClick={() => scrollToSection('why-choose-section')}
                  >
                    <Star className="mr-2 h-4 w-4 group-hover:fill-current" />
                    Why Ivy
                  </Button>
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] rounded-xl px-8"
                    onClick={() => scrollToSection('our-expertise')}
                  >
                    <Brain className="mr-2 h-4 w-4" />
                    Our Expertise
                  </Button>
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] rounded-xl px-8"
                    onClick={() => scrollToSection('case-studies-section')}
                  >
                    <Brain className="mr-2 h-4 w-4" />
                    View Casestudies                  </Button>
                </div>

                {/* Client Logos - Subtle Glassmorphism */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
                    Strategic Training Partner To
                  </p>

                  <div className="relative">
                    <div ref={logoContainerRef} className="flex overflow-hidden">
                      <div className="flex animate-scroll whitespace-nowrap gap-12 items-center">

                        {clientLogos.map((logo) => (
                          <div
                            key={logo.id}
                            className="relative h-14 w-28 opacity-80 hover:opacity-100 transition-opacity"
                          >
                            <Image
                              src={logo.logo}
                              alt={logo.alt}
                              fill
                              className="object-contain"
                            />
                          </div>
                        ))}

                        {/* Duplicate for infinite loop */}
                        {clientLogos.map((logo) => (
                          <div
                            key={`${logo.id}-dup`}
                            className="relative h-14 w-28 opacity-80 hover:opacity-100 transition-opacity"
                          >
                            <Image
                              src={logo.logo}
                              alt={logo.alt}
                              fill
                              className="object-contain"
                            />
                          </div>
                        ))}

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - The "Masterclass" Form Design */}
              <div className="relative">
                {/* Decorative Glow */}
                <div className="absolute -inset-4 bg-blue-500/10 rounded-[2.5rem] blur-2xl"></div>

                <div className="relative bg-[#0f172a] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

                  {/* PROFESSIONAL VIDEO SECTION - Styled as a Hero Feature */}
                  <div className="relative group/video h-52 md:h-64 bg-black">
                    <iframe
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/video:opacity-100 transition-opacity"
                      src="https://www.youtube.com/embed/iBVByzbsvNQ?autoplay=1&mute=1&loop=1&playlist=iBVByzbsvNQ&controls=0&modestbranding=1&rel=0&iv_load_policy=3"
                      allow="autoplay; encrypted-media"
                    ></iframe>
                    {/* Video Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-black/40"></div>
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-white/80">Experience Ivy</span>
                    </div>
                  </div>

                  {/* Form Area */}
                  <div className="p-8">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-white tracking-tight">Enterprise Solutions</h2>
                      <p className="text-slate-400 text-sm mt-1">Book a strategy call with our senior advisors.</p>
                    </div>

                    <form onSubmit={handleHeroFormSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Full Name</label>
                          <Input
                            className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-600 focus:ring-blue-500 focus:border-blue-500 rounded-xl"
                            placeholder="John Doe"
                            value={heroFormData.name}
                            onChange={(e) => setHeroFormData({ ...heroFormData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Work Email</label>
                          <Input
                            type="email"
                            className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-600 focus:ring-blue-500 focus:border-blue-500 rounded-xl"
                            placeholder="john@enterprise.com"
                            value={heroFormData.email}
                            onChange={(e) => setHeroFormData({ ...heroFormData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Company / Organization</label>
                        <Input
                          className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-600 focus:ring-blue-500 focus:border-blue-500 rounded-xl"
                          placeholder="e.g. Fortune 500 Co."
                          value={heroFormData.company}
                          onChange={(e) => setHeroFormData({ ...heroFormData, company: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Training Requirements</label>
                        <Textarea
                          className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-600 focus:ring-blue-500 focus:border-blue-500 rounded-xl resize-none"
                          placeholder="How can we help your team?"
                          rows={3}
                          value={heroFormData.message}
                          onChange={(e) => setHeroFormData({ ...heroFormData, message: e.target.value })}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-500 py-7 text-md font-bold rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/20 group"
                        disabled={isHeroSubmitting}
                      >
                        {isHeroSubmitting ? (
                          <span className="flex items-center gap-2">
                            <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Syncing...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Calendar className="h-5 w-5 opacity-70" />
                            Secure Free Consultation
                          </span>
                        )}
                      </Button>

                      <p className="text-[10px] text-center text-slate-500 uppercase tracking-[0.15em]">
                        Strictly Confidential • Response in &lt; 24h
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        
        {/* CASE STUDIES SECTION */}
        <section id="case-studies-section" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Enterprise Case Studies
              </h2>
              <p className="text-slate-600">
                Real-world examples of how we've helped organizations transform their workforce and achieve measurable business impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-blue-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">
                        {caseStudy.businessType}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {caseStudy.title}
                    </h3>

                    <p className="text-slate-600 mb-4 text-sm">
                      {caseStudy.subtitle}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                        <TargetIcon className="h-4 w-4 text-green-600" />
                        Key Impacts:
                      </h4>
                      <ul className="space-y-2">
                        {caseStudy.impact.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/casestudies#${caseStudy.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm group/link"
                    >
                      Read full case study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8"
                asChild
              >
                <Link href="/casestudies">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View All Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </section>


          {/* WHY ENTERPRISES CHOOSE IVY PRO SCHOOL */}
        <section id="why-choose-section" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Why Enterprises Choose Ivy Pro School?
                </h2>
                <p className="text-slate-600 max-w-3xl mx-auto">
                  Ivy Professional School is a top-ranked Data & AI professional education provider and corporate training partner, focused on measurable business impact since 2007.
                </p>
              </div>

              {/* Four Key Value Pillars */}
              <div className="space-y-4">
                {/* Pillar 1 */}
                <Collapsible open={openPillar === 'pillar1'} onOpenChange={(open) => open && setOpenPillar('pillar1')}>
                  <CollapsibleTrigger className="w-full">
                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                            <span className="font-bold">1</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">Proven track record</h3>
                            <p className="text-slate-600">Trusted by industry leaders since 2007</p>
                          </div>
                        </div>
                        {openPillar === 'pillar1' ? (
                          <ChevronUp className="h-5 w-5 text-slate-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-slate-400" />
                        )}
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="bg-white/80 rounded-b-xl border border-t-0 border-slate-200 p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            <span className="font-semibold">{alumniCount.toLocaleString()}+ alumni</span> working across {firmsCount}+ organizations
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />

                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            <span className="font-semibold">ISO 9001 certified</span> professional education provider, ranked among the top Data & AI schools in India
                          </span>
                        </li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Pillar 2 */}
                <Collapsible open={openPillar === 'pillar2'} onOpenChange={(open) => open && setOpenPillar('pillar2')}>
                  <CollapsibleTrigger className="w-full">
                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                            <span className="font-bold">2</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">Business-aligned, not tool-aligned</h3>
                            <p className="text-slate-600">Customized solutions for your specific needs</p>
                          </div>
                        </div>
                        {openPillar === 'pillar2' ? (
                          <ChevronUp className="h-5 w-5 text-slate-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-slate-400" />
                        )}
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="bg-white/80 rounded-b-xl border border-t-0 border-slate-200 p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            <span className="font-semibold">Programs customized</span> to your industry, functions and roles (Finance, HR, Sales, Ops, Tech)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            <span className="font-semibold">Client-specific case studies</span> built on your data and workflows
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            <span className="font-semibold">Trainers are experienced problem-solvers</span> and delivery leaders, not just academic instructors
                          </span>
                        </li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Pillar 3 */}
                <Collapsible open={openPillar === 'pillar3'} onOpenChange={(open) => open && setOpenPillar('pillar3')}>
                  <CollapsibleTrigger className="w-full">
                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                            <span className="font-bold">3</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">Measurable, documented results</h3>
                            <p className="text-slate-600">Tangible ROI and business impact</p>
                          </div>
                        </div>
                        {openPillar === 'pillar3' ? (
                          <ChevronUp className="h-5 w-5 text-slate-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-slate-400" />
                        )}
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="bg-white/80 rounded-b-xl border border-t-0 border-slate-200 p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            <span className="font-semibold">40–60% average efficiency gain</span> across large analyst and business teams
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            <span className="font-semibold">$8M in documented savings</span> through AI and automation initiatives at scale
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            <span className="font-semibold">30+ high-value AI and GenAI use cases</span> implemented per enterprise engagement
                          </span>
                        </li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Pillar 4 */}
                <Collapsible open={openPillar === 'pillar4'} onOpenChange={(open) => open && setOpenPillar('pillar4')}>
                  <CollapsibleTrigger className="w-full">
                    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                            <span className="font-bold">4</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900">Full ecosystem, not one-off workshops</h3>
                            <p className="text-slate-600">End-to-end learning solutions</p>
                          </div>
                        </div>
                        {openPillar === 'pillar4' ? (
                          <ChevronUp className="h-5 w-5 text-slate-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-slate-400" />
                        )}
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="bg-white/80 rounded-b-xl border border-t-0 border-slate-200 p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            <span className="font-semibold">AI-led assessment platform</span> to benchmark skills and personalize learning paths
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            <span className="font-semibold">Cloud LMS, AI Tutor and structured learning journeys</span>
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            <span className="font-semibold">Dedicated Project Deans and post-training handholding</span> to ensure adoption and ROI
                          </span>
                        </li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-12">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 px-8"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Your Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>


        <section id="our-expertise" className="bg-slate-950 py-20 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-extrabold mb-10">Our Expertise</h2>

            {/* SQUEEZE → EXPAND STRIP */}
            <div className="flex h-[520px] w-full gap-4">
              {expertiseData.map((card, i) => (
                <div
                  key={i}
                  className="
                group relative flex-1 rounded-2xl overflow-hidden
                transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
                hover:flex-[4]
              "
                >
                  {/* BACKGROUND */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${card.gradient}`} />
                  <div className="absolute inset-0 bg-black/35" />

                  {/* CONTENT */}
                  <div className="relative z-10 h-full p-6 flex flex-col">
                    {/* TOP */}
                    <div>
                      {card.icon}
                      <h3 className="mt-4 text-xl font-bold tracking-wide">
                        {card.title}
                      </h3>

                      {/* DESCRIPTION */}
                      {card.description && (
                        <p
                          className="
                        mt-4 text-sm text-white/80
                        opacity-0 translate-y-4
                        transition-all duration-500
                        group-hover:opacity-100 group-hover:translate-y-0
                        max-w-sm
                      "
                        >
                          {card.description}
                        </p>
                      )}

                      {/* TOPICS */}
                      <ul
                        className="
                      mt-6 space-y-2 text-sm
                      opacity-0 translate-y-6
                      transition-all duration-500 delay-100
                      group-hover:opacity-100 group-hover:translate-y-0
                    "
                      >
                        {card.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                            <span className="text-white/90">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* BOTTOM */}
                    <div className="mt-auto flex items-end justify-between">
                      <div>
                        <div className="text-4xl font-black">{card.id}</div>
                        <div className="text-xs uppercase tracking-widest opacity-80">
                          {card.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      

        {/* L&D CHALLENGES SECTION */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Common L&D Challenges We Solve
              </h2>
              <p className="text-slate-600">
                Every challenge is an opportunity. Here's how we help L&D managers transform obstacles into measurable successes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ldChallenges.map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-slate-200">
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{challenge.title}</h3>
                        <p className="text-slate-600 mb-4">{challenge.description}</p>
                      </div>
                      <div className="mt-auto pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold">
                          <ArrowRight className="h-4 w-4" />
                          <span>Our Solution:</span>
                        </div>
                        <p className="text-slate-700 mt-1">{challenge.solution}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SUCCESS PATHWAY */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Your 4-Step Success Pathway
              </h2>
              <p className="text-slate-600">
                A structured approach to ensure measurable results at every stage of your team's transformation.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden lg:block"></div>

              <div className="space-y-12 lg:space-y-0">
                {successPathway.map((step, index) => (
                  <div
                    key={step.step}
                    className={`relative lg:flex lg:items-center lg:gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Step Circle */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg z-10">
                      {step.step}
                    </div>

                    {/* Content */}
                    <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'} pt-20 lg:pt-0`}>
                      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock4 className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-semibold text-blue-600">{step.duration}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-600 mb-4">{step.description}</p>
                        <div className="bg-white rounded-lg p-3 border border-slate-200">
                          <p className="text-sm font-semibold text-slate-900">Deliverable:</p>
                          <p className="text-blue-600">{step.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT DASHBOARD - Enhanced for L&D */}
        <section id="impact-dashboard" className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Real Impact for L&D Managers
              </h2>
              <p className="text-slate-600">
                See how fellow L&D professionals achieved measurable success and earned recognition for their training initiatives.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Client Selector with L&D Focus */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                <div className="p-4 bg-blue-900 text-white font-semibold">
                  <div className="flex items-center gap-2">
                    <Users2 className="h-4 w-4" />
                    <span>L&D Success Stories</span>
                  </div>
                </div>
                <div className="divide-y divide-slate-100">
                  {clientData.map((client) => (
                    <button
                      key={client.id}
                      onClick={() => setActiveClient(client.id)}
                      className={`w-full text-left p-4 hover:bg-slate-50 border-b border-slate-100 transition flex justify-between items-center group ${client.id === activeClient ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
                        }`}
                    >
                      <div>
                        <div className="font-bold text-slate-800 group-hover:text-blue-700">
                          {client.name}
                        </div>
                        <div className="text-xs text-slate-500">{client.industry}</div>
                        <div className="flex gap-2 mt-1">
                          {client.keyMetrics.slice(0, 2).map((metric, idx) => (
                            <span key={idx} className="text-xs bg-slate-100 px-2 py-1 rounded">
                              {metric.label}: {metric.value}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-blue-500" />
                    </button>
                  ))}
                </div>
                <div className="p-6 mt-auto bg-blue-50">
                  <div className="flex items-start gap-2 mb-2">
                    <Award className="h-4 w-4 text-blue-600 mt-1" />
                    <p className="text-sm text-blue-800 font-semibold">L&D Achievement:</p>
                  </div>
                  <p className="text-sm text-blue-800 italic">
                    "{activeClientData.testimonial}"
                  </p>
                  <p className="text-xs text-blue-600 font-bold mt-2">
                    - {activeClientData.author}
                  </p>
                </div>
              </div>

              {/* Enhanced Visualization Area */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 sm:p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <BadgeCheck className="h-5 w-5 text-blue-600" />
                      <h3 className="text-2xl font-bold text-slate-800">
                        {activeClientData.name} - L&D Transformation
                      </h3>
                    </div>
                    <p className="text-slate-500">{activeClientData.desc}</p>
                  </div>
                  <div
                    className="px-4 py-2 rounded-lg font-bold text-xl"
                    style={{ backgroundColor: `${activeClientData.color}20`, color: activeClientData.color }}
                  >
                    {activeClientData.metric}
                  </div>
                </div>

                {/* Chart Container */}
                <div className="h-64 w-full mb-8">
                  {activeClientData.chartType === 'line' ? (
                    <Line
                      data={{
                        labels: activeClientData.chartLabels,
                        datasets: [{
                          label: activeClientData.metric,
                          data: activeClientData.chartData,
                          backgroundColor: `${activeClientData.color}20`,
                          borderColor: activeClientData.color,
                          borderWidth: 3,
                          tension: 0.4,
                          fill: true
                        }]
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: { display: true, position: 'bottom' },
                          tooltip: {
                            callbacks: {
                              label: (context) => `${context.parsed.y} units`
                            }
                          }
                        }
                      }}
                    />
                  ) : (
                    <Bar
                      data={{
                        labels: activeClientData.chartLabels,
                        datasets: [{
                          label: activeClientData.metric,
                          data: activeClientData.chartData,
                          backgroundColor: activeClientData.color,
                          borderRadius: 6,
                        }]
                      }}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: { display: true, position: 'bottom' }
                        }
                      }}
                    />
                  )}
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {activeClientData.keyMetrics.map((metric, index) => (
                    <div key={index} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <div className="text-sm text-slate-500">{metric.label}</div>
                      <div className="font-bold text-2xl text-slate-800 mt-1">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENHANCED FAQ */}
        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Questions from Fellow L&D Managers
                </h2>
                <p className="text-slate-600">
                  Get answers to the most common questions about implementing effective AI and data training.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqData.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-blue-600">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CONTACT CTA SECTION */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Team?
              </h2>

              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a free consultation and custom training blueprint for your organization
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <TargetIcon className="h-8 w-8 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Custom Assessment</h4>
                  <p className="text-blue-200 text-sm">Identify skill gaps and opportunities</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <FileText className="h-8 w-8 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Tailored Blueprint</h4>
                  <p className="text-blue-200 text-sm">Customized learning path for your team</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <DollarSign className="h-8 w-8 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">ROI Projection</h4>
                  <p className="text-blue-200 text-sm">Clear business impact metrics</p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-100 px-8 text-lg"
                onClick={() => setIsContactModalOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* ENHANCED CONTACT MODAL */}
        <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
          <DialogContent className="sm:max-w-[800px] rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 p-6">
              {/* Left Column - Info */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Ivy Pro School Enterprise
                  </h3>
                  <p className="text-blue-600 font-semibold">Since 2007</p>
                  <p className="text-slate-600 text-sm mt-2">Top-ranked Data & AI training partner</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">What to Expect:</p>
                      <p className="text-sm text-slate-600">Free 60-minute strategy session</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <TargetIcon className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">You'll Receive:</p>
                      <p className="text-sm text-slate-600">Custom training blueprint</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users2 className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">Global Reach:</p>
                      <p className="text-sm text-slate-600">India, US, Europe, Australia, Singapore</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Get Your Free Consultation</h2>
                <form onSubmit={(e) => { e.preventDefault(); setIsContactModalOpen(false); }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                      <Input placeholder="Your name" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
                      <Input placeholder="e.g., L&D Manager" className="w-full" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                    <Input placeholder="Your company" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <Input type="email" placeholder="Your work email" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Team Size</label>
                    <Input placeholder="Number of team members" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Training Interest
                    </label>
                    <Textarea
                      placeholder="Which programs are you interested in? (GenAI, Analytics, Data Science, Leadership)"
                      rows={3}
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Free Consultation
                  </Button>
                </form>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </>
  );
};

export default Enterprise;
