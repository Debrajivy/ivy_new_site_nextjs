// /app/casestudies/page.tsx
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Case1 from "../../assests/casestudies/Case1.webp";
import Case2 from "../../assests/casestudies/Case2.webp";
import Case4 from "../../assests/casestudies/Case4.webp";

// Updated Placeholder data with subtitles
const caseStudies = [
  {
    id: 'case-study-1',
    businessType: 'Industrial Manufacturing Engineering',
    title: 'Enterprise-Wide Training in Data Analytics, Data Science & AI',
    subtitle: 'Empowering employees across all levels to make faster, data-driven business decisions',
    image: Case1.src, // REVERTED
    link: '/', // CHANGED
  },
  {
    id: 'case-study-2',
    businessType: 'Steel Manufacturing Engineering',
    title: 'Establishing “Gurukul” – A Centralized Learning & Development Department for Workforce Transformation',
    subtitle: 'Driving productivity, skill enhancement, and revenue growth through a structured, AI-enabled L&D ecosystem',
    image: Case2.src,
    link: '/', // CHANGED
  },
  {
    id: 'case-study-3',
    businessType: 'Global Retail & Consumer Goods',
    title: 'AI for Leaders: Enabling CxOs & Senior Executives to Drive Enterprise Transformation',
    subtitle: 'Equipping senior leadership across departments with dashboard automation, GenAI, and AI agents for competitive advantage',
    image: Case4.src,
    link: '/', // CHANGED
  },
];

const CaseStudiesPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const industries = ['All Industries', 'Industrial Manufacturing Engineering', 'Steel Manufacturing Engineering', 'Global Retail & Consumer Goods'];

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedIndustry(e.target.value);
  };

  const filteredCaseStudies = selectedIndustry === 'All Industries'
    ? caseStudies
    : caseStudies.filter(cs => cs.businessType === selectedIndustry);

  // Helper function to truncate text and add ellipsis
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  return (
    <>
      <Navbar />
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
                <Link href="/casestudies">Case Studies</Link> 
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
            <Link
              key={caseStudy.id}
              href={"/"}
              className="block w-full h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.01]"
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
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudiesPage;