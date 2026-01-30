"use client";
import React from 'react';
import Link from 'next/link';
import {
  FileStack,
  GraduationCap,
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
import data from './AIHelpCenter.json';

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

const AIHelpCenterLanding = () => {
  return (
    <>
      <header className="px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-12 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4 sm:mb-6">What would you like to learn today?</h1>
        <p className="text-lg sm:text-xl text-gray-600">Browse our comprehensive library of AI and data science tutorials</p>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {Object.entries(data.categories).map(([id, cat]: [string, any]) => (
            <Link
              key={id}
              href={`/aihelpcenter/${id}`}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-6 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-1 cursor-pointer block`}
            >
              <div className="mb-3 sm:mb-4 inline-flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl text-white shadow-lg" style={{ backgroundColor: themeColors.primary }}>
                {iconMap[cat.icon]}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{cat.title}</h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-500 font-medium">{cat.count}</p>
              {id === "python-basics" && (
                <div className="mt-3 sm:mt-4 flex items-center gap-2 rounded-lg sm:rounded-xl bg-blue-50 p-2 sm:p-3">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-pulse rounded-full" style={{ backgroundColor: themeColors.primary }}></div>
                  <span className="text-xs font-bold text-blue-700">Latest: Merging CSV Files</span>
                  <ArrowRight size={12} className="ml-auto text-blue-400" />
                </div>
              )}
              {id === "genai-llm" && (
                <div className="mt-3 sm:mt-4 flex items-center gap-2 rounded-lg sm:rounded-xl bg-purple-50 p-2 sm:p-3">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-pulse rounded-full" style={{ backgroundColor: themeColors.primary }}></div>
                  <span className="text-xs font-bold text-purple-700">New: RAG vs Fine-Tuning</span>
                  <ArrowRight size={12} className="ml-auto text-purple-400" />
                </div>
              )}
              {id === "visualization" && (
                <div className="mt-3 sm:mt-4 flex items-center gap-2 rounded-lg sm:rounded-xl bg-orange-50 p-2 sm:p-3">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-pulse rounded-full" style={{ backgroundColor: themeColors.secondary }}></div>
                  <span className="text-xs font-bold text-orange-700">Featured: Dual-Axis Charts</span>
                  <ArrowRight size={12} className="ml-auto text-orange-400" />
                </div>
              )}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight size={20} className="text-gray-300" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default AIHelpCenterLanding;