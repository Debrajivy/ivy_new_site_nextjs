"use client"
import React, { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle,
  Users,
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
  BadgeCheck
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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [activeClient, setActiveClient] = useState('honeywell');
  const [activeTab, setActiveTab] = useState('genai');
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [alumniCount, setAlumniCount] = useState(0);
  const [firmsCount, setFirmsCount] = useState(0);
  const [savingsCount, setSavingsCount] = useState(0);
  const [activeSection, setActiveSection] = useState('overview');

  // Advisor Introduction Section
  const advisorProfile = {
    name: "Rajesh Kumar",
    title: "Enterprise Solutions Advisor",
    experience: "12+ years in L&D Strategy",
    specialization: "AI & Data Skill Transformation",
    quote: "As an L&D manager, your challenge isn't just training—it's creating measurable business impact. Let me show you how Ivy Pro bridges that gap.",
    credentials: [
      "Certified L&D Professional",
      "AI in Education Specialist",
      "ROI Measurement Expert"
    ]
  };

  // Enhanced Client data with more metrics
  const clientData = [
    {
      id: 'honeywell',
      name: 'Honeywell',
      industry: 'Manufacturing / Tech',
      metric: '$8 Million Saved',
      desc: 'Saved in 6 months with 30+ new AI POCs.',
      testimonial: "Ivy Pro's training delivered measurable ROI within the first quarter. Our team went from theory to implementation seamlessly.",
      author: "Global L&D Director, Honeywell",
      chartData: [0.5, 2, 5, 8],
      chartLabels: ['Month 1', 'Month 2', 'Month 4', 'Month 6'],
      chartType: 'line',
      color: '#ef4444',
      keyMetrics: [
        { label: 'ROI Achieved', value: '425%' },
        { label: 'Time to Competency', value: '-40%' },
        { label: 'Project Success Rate', value: '92%' }
      ]
    },
    {
      id: 'itc',
      name: 'ITC Limited',
      industry: 'FMCG / Manufacturing',
      metric: '40% Efficiency Gain',
      desc: 'Efficiency gained across 400+ Analysts.',
      testimonial: "The customized curriculum using our own data made all the difference. Real problems, real solutions.",
      author: "Chief Learning Officer, ITC",
      chartData: [100, 110, 125, 140],
      chartLabels: ['Baseline', 'Training', 'Implementation', 'Post-Review'],
      chartType: 'bar',
      color: '#10b981',
      keyMetrics: [
        { label: 'Analyst Productivity', value: '+65%' },
        { label: 'Training Completion', value: '98%' },
        { label: 'Skill Application', value: '89%' }
      ]
    },
    {
      id: 'coke',
      name: 'Coca-Cola',
      industry: 'Beverage / Retail',
      metric: '60+ Managers',
      desc: 'Senior Managers upskilled in GenAI to drive strategy.',
      testimonial: "Perfect blend of strategic thinking and hands-on skills. Our leaders now speak data fluently.",
      author: "VP of Talent Development, Coca-Cola",
      chartData: [10, 30, 45, 60],
      chartLabels: ['Cohort 1', 'Cohort 2', 'Cohort 3', 'Total'],
      chartType: 'bar',
      color: '#f59e0b',
      keyMetrics: [
        { label: 'Leadership Buy-in', value: '100%' },
        { label: 'Strategic Projects', value: '28' },
        { label: 'Promotion Rate', value: '+35%' }
      ]
    },
    {
      id: 'tata',
      name: 'Tata Steel',
      industry: 'Steel / Manufacturing',
      metric: 'Digital Transformation',
      desc: 'Upskilling workforce for Industry 4.0 readiness.',
      testimonial: "The phased approach with measurable milestones made our digital transformation measurable and manageable.",
      author: "Head of Digital Learning, Tata Steel",
      chartData: [20, 40, 60, 85],
      chartLabels: ['Q1', 'Q2', 'Q3', 'Q4'],
      chartType: 'line',
      color: '#3b82f6',
      keyMetrics: [
        { label: 'Digital Adoption', value: '78%' },
        { label: 'Cost Reduction', value: '32%' },
        { label: 'Employee Engagement', value: '+42%' }
      ]
    }
  ];

  // L&D Manager Challenges
  const ldChallenges = [
    {
      title: "Proving ROI to Leadership",
      description: "How to demonstrate tangible business value from training investments",
      solution: "We provide pre & post-training business impact assessment with quantifiable metrics",
      icon: DollarSign
    },
    {
      title: "Customization for Specific Needs",
      description: "Generic training doesn't address unique organizational challenges",
      solution: "100% customizable curriculum using your own datasets and business scenarios",
      icon: TargetIcon
    },
    {
      title: "Measuring Skill Application",
      description: "Tracking how learned skills translate to real work outcomes",
      solution: "Project-based learning with live business problems and performance tracking",
      icon: PieChart
    },
    {
      title: "Keeping Pace with AI",
      description: "Staying current with rapidly evolving AI and data technologies",
      solution: "Quarterly curriculum updates and continuous learning pathways",
      icon: Lightbulb
    }
  ];

  // Success Pathway for L&D Managers
  const successPathway = [
    {
      step: 1,
      title: "Needs Assessment",
      description: "Free 90-minute consultation to map your specific challenges",
      duration: "1-2 weeks",
      outcome: "Customized Learning Blueprint"
    },
    {
      step: 2,
      title: "Pilot Program",
      description: "Start with a small cohort to validate approach and ROI",
      duration: "4-6 weeks",
      outcome: "Measurable Pilot Results"
    },
    {
      step: 3,
      title: "Full Rollout",
      description: "Scale to entire teams with phased implementation",
      duration: "3-6 months",
      outcome: "Organization-wide Skill Transformation"
    },
    {
      step: 4,
      title: "Continuous Support",
      description: "Ongoing mentoring, updates, and advanced pathways",
      duration: "Ongoing",
      outcome: "Sustained Competitive Advantage"
    }
  ];

  // Enhanced curriculum data
  const curriculumData = {
    genai: {
      title: "GenAI for Business Leaders & Practitioners",
      content: "Transform your organization with practical AI implementation. From prompt engineering to building AI agents, we ensure your team applies learning immediately to real business challenges.",
      tags: ["LLMs", "Prompt Engineering", "Business Strategy", "Ethics", "Implementation"],
      icon: Brain,
      modules: [
        "Strategic AI Leadership",
        "Practical Prompt Engineering",
        "Building AI Agents",
        "Ethical AI Implementation",
        "ROI Measurement Framework"
      ],
      outcomes: [
        "Lead AI-driven transformation",
        "Build and deploy AI solutions",
        "Measure AI ROI effectively"
      ]
    },
    analytics: {
      title: "Advanced Data Analytics & Visualization",
      content: "Master the modern data stack with your organization's actual data. Move from descriptive reporting to predictive insights that drive business decisions.",
      tags: ["Python", "SQL", "Tableau", "Predictive Models", "Real Data"],
      icon: BarChart3,
      modules: [
        "Data Strategy & Governance",
        "Advanced SQL & Python",
        "Predictive Analytics",
        "Business Intelligence Dashboards",
        "Data Storytelling"
      ],
      outcomes: [
        "Build data-driven culture",
        "Create predictive models",
        "Deliver actionable insights"
      ]
    },
    leadership: {
      title: "Data Strategy for Leadership",
      content: "Empower CXOs and VPs with the strategic framework to build, manage, and scale data and AI initiatives that deliver measurable business value.",
      tags: ["ROI Calculation", "Team Management", "AI Ethics", "Decision Making", "Strategy"],
      icon: Users2,
      modules: [
        "Building Data Strategy",
        "AI Investment Framework",
        "Team Building & Scaling",
        "Change Management",
        "Performance Measurement"
      ],
      outcomes: [
        "Develop data strategy",
        "Build high-performing teams",
        "Measure transformation success"
      ]
    }
  };

  // Enhanced FAQ for L&D Managers
  const faqData = [
    {
      q: "How do you measure and guarantee ROI?",
      a: "We establish baseline metrics before training and track: 1) Project completion rates, 2) Time savings on key tasks, 3) Quality improvements, 4) Business impact metrics. Our clients typically see 3-8x ROI within 6-12 months."
    },
    {
      q: "Can you work with our specific tools and datasets?",
      a: "Absolutely. We customize all training using your actual tools (Tableau, Power BI, Python environments) and your own datasets. This ensures immediate relevance and application."
    },
    {
      q: "How do you handle different skill levels in the same team?",
      a: "We conduct pre-assessments and create personalized learning paths. Our blended approach includes: foundational modules for beginners, advanced workshops for practitioners, and leadership sessions for managers."
    },
    {
      q: "What ongoing support do you provide?",
      a: "Post-training support includes: 1) 3 months of mentoring, 2) Access to expert community, 3) Quarterly update sessions, 4) Advanced certification pathways, 5) Annual skill gap assessments."
    },
    {
      q: "How do you keep content current with AI advancements?",
      a: "Our curriculum is updated quarterly. We have dedicated AI research teams and industry partnerships that ensure we're always teaching the latest tools, techniques, and best practices."
    }
  ];

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

  // Get active client data
  const activeClientData = clientData.find(client => client.id === activeClient) || clientData[0];

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* ADVISOR HERO SECTION */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Advisor Introduction */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <BadgeCheck className="h-4 w-4" />
                  <span className="text-sm font-medium">Enterprise L&D Advisor</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Hello, I'm Your <span className="text-blue-300">L&D Advisor</span> From Ivy Pro School
                </h1>
                
                <div className="space-y-6">
                  <p className="text-xl text-blue-100 leading-relaxed">
                    As an L&D Manager, you're tasked with building skills that drive business growth. 
                    Let me show you how Ivy Pro delivers <span className="font-semibold text-white">measurable ROI</span> through 
                    customized AI and data training.
                  </p>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Lightbulb className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="italic text-blue-100">"{advisorProfile.quote}"</p>
                        <p className="mt-2 font-semibold">— {advisorProfile.name}, {advisorProfile.title}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Advisor Credentials */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {advisorProfile.credentials.map((cred, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                      <p className="text-sm font-medium">{cred}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats and CTA */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6">Why L&D Managers Choose Ivy Pro</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-500/20 p-3 rounded-full">
                        <DollarSign className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold">Guaranteed ROI Measurement</p>
                        <p className="text-sm text-blue-200">Track business impact, not just completion rates</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-500/20 p-3 rounded-full">
                        <TargetIcon className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="font-semibold">100% Customization</p>
                        <p className="text-sm text-blue-200">Train with your data, your tools, your challenges</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-amber-500/20 p-3 rounded-full">
                        <BookOpen className="h-6 w-6 text-amber-400" />
                      </div>
                      <div>
                        <p className="font-semibold">Continuous Learning Pathways</p>
                        <p className="text-sm text-blue-200">From foundation to mastery with ongoing support</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Assessment CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-center">
                  <h4 className="text-xl font-bold mb-2">Get Your Free L&D Assessment</h4>
                  <p className="text-blue-100 mb-4">60-minute consultation + customized roadmap</p>
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-900 hover:bg-blue-100 w-full"
                    onClick={() => setIsContactModalOpen(true)}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Free Consultation
                  </Button>
                </div>
              </div>
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
                      className={`w-full text-left p-4 hover:bg-slate-50 border-b border-slate-100 transition flex justify-between items-center group ${
                        client.id === activeClient ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
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

        {/* ROI CALCULATOR FOR L&D */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Estimate Your Training ROI
                </h2>
                <p className="text-slate-600">
                  Use our calculator to project potential returns on your L&D investment
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Team Size
                    </label>
                    <Input type="number" placeholder="e.g., 25" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Average Salary ($)
                    </label>
                    <Input type="number" placeholder="e.g., 80,000" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Expected Efficiency Gain (%)
                    </label>
                    <Input type="number" placeholder="e.g., 30" className="w-full" />
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Projected ROI</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Annual Salary Cost</span>
                      <span className="font-bold text-slate-900">$2,000,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Expected Efficiency Value</span>
                      <span className="font-bold text-green-600">$600,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Training Investment</span>
                      <span className="font-bold text-blue-600">$150,000</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-slate-900">Projected Annual ROI</span>
                      <span className="text-2xl font-bold text-green-600">300%</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6" size="lg">
                    Get Detailed ROI Analysis
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CURRICULUM SECTION - Enhanced */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <Tabs defaultValue="genai" className="w-full">
              <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Curriculum Designed for L&D Success
                  </h2>
                  <p className="text-slate-600">
                    Each program includes measurable outcomes, assessment frameworks, and L&D reporting tools.
                  </p>
                </div>
                <TabsList className="mt-4 md:mt-0">
                  <TabsTrigger value="genai">GenAI</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="leadership">Leadership</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="genai" className="space-y-6">
                <CurriculumCard data={curriculumData.genai} />
              </TabsContent>
              
              <TabsContent value="analytics" className="space-y-6">
                <CurriculumCard data={curriculumData.analytics} />
              </TabsContent>
              
              <TabsContent value="leadership" className="space-y-6">
                <CurriculumCard data={curriculumData.leadership} />
              </TabsContent>
            </Tabs>
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

        {/* ADVISOR CONTACT SECTION */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Headphones className="h-4 w-4" />
                <span className="text-sm font-medium">Direct Access to Advisor</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Build Your L&D Success Story Together
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Schedule a 60-minute strategy session with me. We'll map your challenges, 
                identify opportunities, and create a customized roadmap for success.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <FileText className="h-8 w-8 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Customized Blueprint</h4>
                  <p className="text-blue-200 text-sm">Tailored learning strategy for your organization</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <CheckSquare className="h-8 w-8 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">ROI Projection</h4>
                  <p className="text-blue-200 text-sm">Clear metrics and success indicators</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <AwardIcon className="h-8 w-8 mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Implementation Plan</h4>
                  <p className="text-blue-200 text-sm">Step-by-step rollout strategy</p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-100 px-8 text-lg"
                onClick={() => setIsContactModalOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Strategy Session
              </Button>
            </div>
          </div>
        </section>

        {/* ENHANCED CONTACT MODAL */}
        <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
          <DialogContent className="sm:max-w-[800px] rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 p-6">
              {/* Left Column - Advisor Info */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {advisorProfile.name}
                  </h3>
                  <p className="text-blue-600 font-semibold">{advisorProfile.title}</p>
                  <p className="text-slate-600 text-sm mt-2">{advisorProfile.experience} experience</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">What to Expect:</p>
                      <p className="text-sm text-slate-600">60-minute strategy session</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <TargetIcon className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">You'll Receive:</p>
                      <p className="text-sm text-slate-600">Customized L&D blueprint</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">No Cost:</p>
                      <p className="text-sm text-slate-600">Free consultation + roadmap</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Schedule Your L&D Strategy Session</h2>
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
                      Current L&D Challenge
                    </label>
                    <Textarea 
                      placeholder="Tell us about your specific challenge or goal..."
                      rows={3}
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Free Session
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

// Curriculum Card Component
const CurriculumCard = ({ data }: { data: any }) => {
  const Icon = data.icon;
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <Icon className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{data.title}</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {data.tags.map((tag: string, index: number) => (
                <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-700">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="md:w-2/3 space-y-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Overview</h4>
              <p className="text-slate-600">{data.content}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Key Modules</h4>
                <ul className="space-y-2">
                  {data.modules.map((module: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-slate-700">{module}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 mb-3">Learning Outcomes</h4>
                <ul className="space-y-2">
                  {data.outcomes.map((outcome: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <TargetIcon className="h-4 w-4 text-blue-500" />
                      <span className="text-slate-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="pt-4 border-t border-slate-200">
              <Button className="w-full md:w-auto" size="lg">
                Download Detailed Syllabus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;