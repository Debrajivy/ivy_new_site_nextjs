// /app/casestudies/page.tsx
'use client'

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowLeft } from 'lucide-react';
// Assuming these imports work based on your project structure
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// --- DATA & ASSETS (Moved into this file) ---
// Importing image assets as modules
import Case1 from "../../assests/casestudies/Case1.webp";
import Case2 from "../../assests/casestudies/Case2.webp";
import Case4 from "../../assests/casestudies/Case4.webp";

// Complete Case Study Data Structure
const fullCaseStudies = {
  'case-study-1': {
    id: 'case-study-1',
    businessType: 'Industrial Manufacturing Engineering',
    title: 'Enterprise-Wide Training in Data Analytics, Data Science & AI',
    subtitle: 'Empowering employees across all levels to make faster, data-driven business decisions',
    image: Case1.src,
    fullContent: {
      situation: 'The organization is a global leader in industrial solutions, operating across multiple business verticals. While it had access to large volumes of operational and business data, decision-making was often slow and reactive. Reports were delayed, and employees across departments heavily depended on a small set of analysts for insights. This created bottlenecks in problem-solving and hampered overall agility.',
      problem: [
        'Decision-making lagged due to delayed access to critical reports.',
        'Teams relied on external support to generate even basic dashboards and KPIs.',
        'Business managers lacked confidence in using data for decision-making.',
        'Limited knowledge of advanced tools such as AI, automation, and storytelling with data.',
        'Leaders wanted an organization-wide uplift in data literacy to reduce dependence on centralized analytics.',
      ],
      solution: {
        intro: 'Ivy Professional School partnered with the client to design and deliver a tailored Data Analytics, Data Science & AI training program. The program was customized for different departments—finance, operations, HR, and leadership—ensuring relevance to daily workflows.',
        keyAspects: [
          'Customized Training Pathways – Beginner, intermediate, and advanced tracks for learners across roles.',
          'Hands-On Business Problem Solving – Real-world datasets aligned with the company’s manufacturing and service operations.',
          'Effective Dashboarding & Storytelling – Building Power BI dashboards and crafting narratives to support faster leadership decisions.',
          'Automation in Analytics – Training on automating repetitive reporting processes and workflows to save time.',
          'Machine Learning Use Cases – Exposure to ML models for forecasting, anomaly detection, and operational optimization.',
          'Cross-Functional Learning – Interactive workshops where multiple departments collaborated on solving shared business challenges.',
        ],
      },
      impact: [
        '90% improvement in decision-making speed within three months.',
        '60% rise in employee engagement with data as teams became confident in generating and interpreting insights.',
        'Significant reduction in dependency on central analytics teams, enabling self-service reporting.',
        'Automation reduced repetitive reporting time by over 50%, freeing teams to focus on high-value work.',
        'Early adoption of ML in business processes, with teams applying predictive analytics in operations and finance.',
        'Improved cross-department collaboration, as leaders and managers used a common data-driven language.',
        'Faster turnaround on strategic decisions, improving competitiveness in a fast-paced market.',
      ],
    },
  },
  'case-study-2': {
    id: 'case-study-2',
    businessType: 'Steel Manufacturing Engineering',
    title: 'Establishing “Gurukul” – A Centralized Learning & Development Department for Workforce Transformation',
    subtitle: 'Driving productivity, skill enhancement, and revenue growth through a structured, AI-enabled L&D ecosystem',
    image: Case2.src,
    fullContent: {
      situation: 'The organization, a leading steel manufacturer with multiple plants across India, faced significant challenges in training and workforce development. Training for labor and machine operators was inconsistent, recruitment across plants was fragmented, and managers lacked tools to make data-driven workforce decisions. Leadership realized the need for a formal Learning & Development (L&D) department that could centralize training, streamline recruitment, and directly link employee development to business growth.',
      problem: [
        'No structured L&D function to oversee workforce capability building.',
        'Training quality varied widely across plants, leading to inefficiencies in machine handling.',
        'Lack of consistent onboarding and development programs for new recruits.',
        'Managers were not equipped with tools to link workforce development to business performance.',
        'Leadership wanted to align training outcomes with measurable revenue impact.',
      ],
      solution: {
        intro: 'Ivy Professional School partnered with the client to design and set up a full-fledged L&D department called Gurukul, making it the backbone of workforce transformation across all plants and departments.',
        keyAspects: [
          'Establishment of Gurukul – Designed the structure, processes, and vision for a centralized L&D department to serve as a strategic partner for growth.',
          'Plant-Wide Training Programs – Standardized machine training for laborers and technical teams, ensuring consistent skills across facilities.',
          'Recruitment Integration – Assisted in hiring strategies for multiple plants and departments, creating a pipeline of skilled talent.',
          'Digital Learning & Tools – Introduced AI-enabled assessments and personalized learning journeys for employees.',
          'Leadership Development – Conducted workshops for managers on data analytics, dashboards, and business storytelling to strengthen decision-making.',
          'Continuous Monitoring – Built a feedback and evaluation framework to measure training impact and refine programs.',
        ],
      },
      impact: [
        'Launched Gurukul as the company’s first centralized L&D department, embedding learning into the organizational DNA.',
        'Improved machine handling efficiency by 40%, reducing errors and downtime across plants.',
        'Accelerated recruitment and onboarding, enabling faster workforce readiness.',
        'Boosted employee engagement scores by 55% within the first six months of Gurukul’s launch.',
        'Enhanced leadership decision-making, linking workforce training directly to revenue outcomes.',
        'Delivered measurable business impact, with better-trained employees driving efficiency, productivity, and profitability.',
      ],
    },
  },
  'case-study-3': {
    id: 'case-study-3',
    businessType: 'Global Retail & Consumer Goods',
    title: 'AI for Leaders: Enabling CxOs & Senior Executives to Drive Enterprise Transformation',
    subtitle: 'Equipping senior leadership across departments with dashboard automation, GenAI, and AI agents for competitive advantage',
    image: Case4.src,
    fullContent: {
      situation: 'A global retail giant wanted its CxOs and senior executives to move beyond traditional reporting and embrace AI-first decision-making. While the company had strong business intelligence systems, leadership processes were still manual, time-consuming, and reactive. With rapid advances in Generative AI (GenAI) and AI agents, executives recognized the need to reimagine how decisions were made at the enterprise level — across finance, operations, marketing, supply chain, and HR.',
      problem: [
        'CxOs and senior leaders were relying on delayed dashboards and manual insights, slowing strategic actions.',
        'Awareness of GenAI, MCP, and AI agents was limited, creating uncertainty about their enterprise impact.',
        'Leadership wanted practical, hands-on exposure to AI tools rather than abstract theory.',
        'Executives needed a structured framework for prompt engineering to maximize AI value in decision-making.',
        'The organization lacked AI leadership champions to guide transformation across departments.',
      ],
      solution: {
        intro: 'Ivy Professional School designed a cross-functional “AI for Leaders” program tailored specifically for senior leadership, including CxOs, VPs, and department heads. The program was built to blend technical exposure with strategic application, ensuring leaders could adopt AI in ways that directly impacted business outcomes.',
        keyAspects: [
          'Executive Dashboard Automation – Enabling CxOs to track KPIs in real time with self-updating, automated dashboards.',
          'GenAI for Enterprise Leaders – Training on LLMs (ChatGPT, Gemini) for strategic insight generation and scenario testing.',
          'Prompt Engineering Frameworks – Teaching structured prompts tailored to executive needs (e.g., decision briefs, market scans).',
          'AI Agents & MCP – Demonstrating how multi-agent systems and Model Context Protocol can support enterprise workflows.',
          'Cross-Department Use Cases – Finance (forecasting), Operations (process efficiency), HR (talent analytics), Supply Chain (demand planning), Marketing (campaign optimization).',
          'Responsible AI & Governance – Building awareness of risk, compliance, and ethical considerations for leadership-level AI adoption.',
        ],
      },
      impact: [
        'Faster decision-making at the CxO level, reducing strategic reporting delays by over 70%.',
        'High adoption of GenAI tools among senior executives, building a culture of AI-first leadership.',
        'CxOs across functions became AI champions, accelerating enterprise-wide digital transformation.',
        'Improved foresight & agility — leaders simulated business scenarios with GenAI, improving resilience against market volatility.',
        'Cross-department collaboration strengthened, with leaders sharing a unified AI-enabled decision-making framework.',
        'The program positioned the enterprise as a future-ready retail leader, prepared to compete in a GenAI-driven business environment.',
      ],
    },
  },
};

// Simplified list of case studies for the initial grid view
const caseStudiesList = Object.values(fullCaseStudies);

// --- Detail View Sub-Components (Helper functions) ---
const ListSection: React.FC<{ title: string; items: string[]; titleColor: string }> = ({ title, items, titleColor }) => {
  const sectionClasses = "mb-8 p-6 bg-white rounded-lg shadow-md";
  return (
    <div className={sectionClasses}>
      <h2 className={`text-2xl font-bold ${titleColor} mb-4`}>{title}</h2>
      <ul className="list-disc pl-5 space-y-3 text-gray-700">
        {items.map((item, index) => (
          <li key={index}>
            <span className="font-semibold">{item.split(' – ')[0]}</span>
            {item.includes(' – ') && (` – ${item.split(' – ').slice(1).join(' – ')}`)}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Define the type for a single case study item in the full data structure
type CaseStudyItem = typeof fullCaseStudies['case-study-1'];

interface DetailViewProps {
  caseStudy: CaseStudyItem;
  onBack: () => void;
}

const CaseStudyDetailView: React.FC<DetailViewProps> = ({ caseStudy, onBack }) => {
  const { fullContent, title, businessType, image, subtitle } = caseStudy;
  const { situation, problem, solution, impact } = fullContent;
  const sectionClasses = "mb-8 p-6 bg-white rounded-lg shadow-md";

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to all Case Studies
      </button>

      {/* Header */}
      <div className="flex flex-col mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3">{title}</h1>
        <Badge
          style={{
            backgroundColor: "#4eaec3",
            color: "white",
            fontWeight: "normal",
          }}
          className="text-white w-fit mb-4"
        >
          {/* UPDATED BREADCRUMBS LOGIC */}
          <nav className="breadcrumbs flex items-center gap-1">
            <Link href="/">Home</Link>
            <span>/</span>
            {/* Use onClick to trigger local state change back to the list view */}
            <span onClick={onBack} className="cursor-pointer hover:underline">
              Case Studies
            </span>
            <span>/</span>
            <span className="font-bold">{businessType}</span>
          </nav>
        </Badge>
        <p className="text-xl md:text-2xl font-medium text-gray-600 mb-4 italic">
          {subtitle}
        </p>
        <span className="text-md font-semibold text-gray-500 uppercase">
          Type of Business: {businessType}
        </span>
      </div>

      {/* Image Section */}
      <div className="mb-10 rounded-xl overflow-hidden shadow-2xl">
        <img
          src={image}
          alt={title}
          className="w-full object-cover max-h-[500px]"
        />
      </div>

      {/* Situation Section */}
      <div className={sectionClasses}>
        <h2 className="text-2xl font-bold text-red-600 mb-4">Situation</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {situation}
        </p>
      </div>

      {/* Problem Section */}
      <ListSection title="Problem" items={problem} titleColor="text-red-600" />

      {/* Solution Section */}
      <div className={sectionClasses}>
        <h2 className="text-2xl font-bold text-green-700 mb-4">Solution</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {solution.intro}
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Key aspects of the solution included:</h3>
        <ul className="list-disc pl-5 space-y-3 text-gray-700">
          {solution.keyAspects.map((item, index) => (
            <li key={index}>
              <span className="font-semibold">{item.split(' – ')[0]}</span>
              {item.includes(' – ') && (` – ${item.split(' – ').slice(1).join(' – ')}`)}
            </li>
          ))}
        </ul>
      </div>

      {/* Impact Section */}
      <ListSection title="Impact" items={impact} titleColor="text-blue-700" />

      <div className="mt-10 pt-6 border-t border-gray-200">
        <button
          onClick={onBack}
          className="text-blue-600 hover:text-blue-800 font-semibold transition-colors flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to all Case Studies
        </button>
      </div>
    </div>
  );
};

// --- Main Case Studies Page Component (Client Component) ---

const CaseStudiesPage = () => {
  // State to manage the selected industry filter
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  // State to manage which case study detail is currently displayed (null for list view)
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const industries = ['All Industries', 'Industrial Manufacturing Engineering', 'Steel Manufacturing Engineering', 'Global Retail & Consumer Goods'];

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedIndustry(e.target.value);
  };

  // Handler to show the detail view
  const handleCardClick = (slug: string) => {
    setSelectedSlug(slug);
    // Optional: Scroll to the top when the detail view loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handler to return to the list view
  const handleBack = useCallback(() => {
    setSelectedSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Determine the content to display
  const isDetailView = selectedSlug !== null;
  const currentCaseStudy = isDetailView ? fullCaseStudies[selectedSlug as keyof typeof fullCaseStudies] : null;

  // Filter logic for the list view
  const filteredCaseStudies = selectedIndustry === 'All Industries'
    ? caseStudiesList
    : caseStudiesList.filter(cs => cs.businessType === selectedIndustry);

  // Helper function to truncate text and add ellipsis
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };


  // --- Conditional Rendering for List View ---
  const renderListView = () => {
    return (
      <div className="container mx-auto px-4 py-8 ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Case Studies</h1>
            <Badge
              style={{
                backgroundColor: "#4eaec3",
                color: "white",
                fontWeight: "normal",
              }}
              className="text-white w-fit mb-4"
            >
              <nav className="breadcrumbs flex items-center gap-1">
                <Link href="/">Home</Link>
                <span>/</span>
                <span className='font-bold'>Case Studies</span>
              </nav>
            </Badge>
          </div>
          <div className="relative inline-block w-full md:w-auto">
            <select
              value={selectedIndustry}
              onChange={handleIndustryChange}
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 pl-4 pr-8 py-2 rounded-md shadow leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors cursor-pointer"
            >
              {industries.map(industry => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredCaseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              // Use onClick handler for local state change
              onClick={() => handleCardClick(caseStudy.id)}
              className="block w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.01] cursor-pointer"
            >
              <div className="w-full aspect-video">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-4">
                <span className="text-sm font-semibold text-gray-500 uppercase">{caseStudy.businessType}</span>
                <h3 className="mt-2 text-lg font-bold text-gray-900 leading-tight">{caseStudy.title}</h3>
                <p className="mt-2 text-sm text-gray-700 leading-tight">
                  {truncateText(caseStudy.subtitle, 100)}
                </p>
                <div className="mt-2 flex justify-start">
                  <span className="text-sm text-blue-600 font-semibold hover:underline cursor-pointer">
                    Read More
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };


  return (
    <>
      <Navbar />
      {/* Main Content Rendering Logic */}
      {isDetailView && currentCaseStudy ? (
        <CaseStudyDetailView caseStudy={currentCaseStudy} onBack={handleBack} />
      ) : (
        renderListView()
      )}
      <Footer />
    </>
  );
};

export default CaseStudiesPage;