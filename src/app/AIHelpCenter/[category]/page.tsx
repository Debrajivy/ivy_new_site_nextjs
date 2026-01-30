"use client";

import React, { use } from 'react';
import Link from 'next/link';
import {
  FileStack,
  Database,
  AlertCircle,
  ArrowRight,
  Code,
  Play,
  Clock,
  Calendar,
  ChevronRight,
  Terminal,
  Layers,
  BookOpen,
  Cpu,
  BarChart3,
  Server,
  Briefcase,
  ShieldCheck,
  Zap,
  Layout,
  MessageSquare,
  Search,
  FileText,
  Star,
  Table,
  Image as ImageIcon,
  Check,
  AlertTriangle,
  Scissors,
  AlignLeft,
  MessageCircle,
  Palette,
  Gauge,
  Linkedin
} from 'lucide-react';
import data from '../AIHelpCenter.json';

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  "Code": <Code />,
  "Database": <Database />,
  "AlertCircle": <AlertCircle />,
  "ArrowRight": <ArrowRight />,
  "Play": <Play />,
  "Clock": <Clock />,
  "Calendar": <Calendar />,
  "ChevronRight": <ChevronRight />,
  "Terminal": <Terminal />,
  "Layers": <Layers />,
  "BookOpen": <BookOpen />,
  "Cpu": <Cpu />,
  "BarChart3": <BarChart3 />,
  "Server": <Server />,
  "Briefcase": <Briefcase />,
  "ShieldCheck": <ShieldCheck />,
  "Zap": <Zap />,
  "Layout": <Layout />,
  "MessageSquare": <MessageSquare />,
  "Search": <Search />,
  "FileText": <FileText />,
  "FileStack": <FileStack />,
  "Star": <Star />,
  "Table": <Table />,
  "ImageIcon": <ImageIcon />,
  "Check": <Check />,
  "AlertTriangle": <AlertTriangle />,
  "Scissors": <Scissors />,
  "AlignLeft": <AlignLeft />,
  "MessageCircle": <MessageCircle />,
  "Palette": <Palette />,
  "Gauge": <Gauge />,
  "Linkedin": <Linkedin />
};

// Theme Colors
const themeColors = {
  primary: '#009fda',
  secondary: '#f7af34',
  darkBlue: '#013a81',
  dark: '#111827',
  light: '#f8fafc'
};

interface PageProps {
  params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: PageProps) {
  // Use the use() hook to unwrap the params promise
  const unwrappedParams = use(params);
  const { category: categorySlug } = unwrappedParams;
  
  const category = data.categories[categorySlug as keyof typeof data.categories];
  
  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-24 sm:pt-32 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-gray-900 mb-4">Category not found</h1>
          <Link href="/aihelpcenter" className="text-blue-600 hover:text-blue-800 font-medium">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // Get all topics from all subcategories
  const allTopics: any[] = [];
  
  if ('subcategories' in category && category.subcategories) {
    Object.entries(category.subcategories).forEach(([subcatId, subcat]: [string, any]) => {
      if ('topics' in subcat && subcat.topics) {
        subcat.topics.forEach((topic: any) => {
          allTopics.push({
            ...topic,
            subcategoryId: subcatId,
            subcategoryTitle: subcat.title,
            subcategoryIcon: subcat.icon
          });
        });
      }
    });
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-4 sm:pt-6">
        <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-500 mb-6 sm:mb-8">
          <Link href="/aihelpcenter" className="hover:text-blue-600 transition-colors text-sm sm:text-base">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-blue-600 font-medium text-sm sm:text-base">
            {category.title}
          </span>
        </nav>
      </div>

      <header className="px-4 sm:px-6 pt-6 sm:pt-8 pb-8 sm:pb-12 text-center max-w-4xl mx-auto">
        <div className="mb-4 sm:mb-6 inline-flex h-16 sm:h-20 w-16 sm:w-20 items-center justify-center rounded-2xl sm:rounded-3xl text-white shadow-xl" style={{ backgroundColor: themeColors.primary }}>
          {iconMap[category.icon] || <div>Icon</div>}
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-gray-900 mb-3 sm:mb-4">{category.title}</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">{category.description}</p>
        <p className="text-base sm:text-lg text-gray-500 font-medium">{category.count}</p>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 sm:pb-24">
        {allTopics.length > 0 ? (
          <>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">All Tutorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {allTopics.map((topic: any, idx: number) => (
                <Link
                  key={idx}
                  href={`/aihelpcenter/${categorySlug}/${topic.id}`}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-1 cursor-pointer block"
                >
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="h-10 sm:h-12 w-10 sm:w-12 flex items-center justify-center rounded-xl sm:rounded-2xl text-white shadow-lg" style={{ backgroundColor: themeColors.primary }}>
                      {iconMap[topic.subcategoryIcon] || <div>Icon</div>}
                    </div>
                    <span className="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded-full">
                      {topic.subcategoryTitle}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 line-clamp-2">{topic.description}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm text-gray-400 gap-2">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {topic.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {topic.date}
                    </span>
                  </div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight size={20} className="text-blue-400" />
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-8 sm:py-12">
            <p className="text-lg sm:text-xl text-gray-600">No tutorials available yet.</p>
          </div>
        )}
      </main>
    </>
  );
}