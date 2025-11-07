// /app/casestudies/[slug]/page.tsx
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { fullCaseStudies } from './caseStudyData'; // Assuming the data file is in the same directory

// This type definition assumes the structure of your data in caseStudyData.ts
interface CaseStudyDetailProps {
  params: {
    slug: string;
  };
}

const CaseStudyDetailPage: React.FC<CaseStudyDetailProps> = ({ params }) => {
  const { slug } = params;
  const caseStudy = fullCaseStudies[slug as keyof typeof fullCaseStudies];

  if (!caseStudy) {
    // If the slug doesn't match any case study, show 404
    return notFound();
  }

  const { fullContent, title, businessType, image } = caseStudy;
  const { situation, problem, solution, impact } = fullContent;

  const sectionClasses = "mb-8 p-6 bg-white rounded-lg shadow-md";

  // Helper component for list sections (Problem, Solution Key Aspects, Impact)
  const ListSection: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
    <div className={sectionClasses}>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">{title}</h2>
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

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-12">
        
        {/* Breadcrumbs & Header */}
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
              <nav className="breadcrumbs flex items-center gap-1">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/casestudies">Case Studies</Link>
                <span>/</span>
                <span className="font-bold">{businessType}</span>
              </nav>
            </Badge>
            <p className="text-xl md:text-2xl font-medium text-gray-600 mb-4 italic">
              {fullContent.subtitle}
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
        <ListSection title="Problem" items={problem} />
        
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
        <ListSection title="Impact" items={impact} />

        <div className="mt-10 pt-6 border-t border-gray-200">
          <Link href="/casestudies" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
            &larr; Back to all Case Studies
          </Link>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default CaseStudyDetailPage;