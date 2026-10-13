"use client";

import React, { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
import { data } from '../lib/data';
import { categoryImages } from '../lib/categoryImages';

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

  if (categorySlug === 'genai-llm') {
    const topicOrder = [
      'do-llms-remember-previous-conversations',
      'what-is-generative-ai',
      'what-an-embedding-actually-is',
      'how-are-llms-trained',
      'how-do-llm-context-windows-work',
      'harness-engineering-in-ai',
      'rag-vs-finetuning',
      'how-llms-generate-insights',
      'connecting-llms-to-sql',
    ];

    allTopics.sort(
      (a, b) => topicOrder.indexOf(a.id) - topicOrder.indexOf(b.id)
    );
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-6">
        <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm font-medium text-gray-500 sm:mb-5">
          <Link href="/aihelpcenter" className="hover:text-blue-600 transition-colors text-sm sm:text-base">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-blue-600 font-medium text-sm sm:text-base">
            {category.title}
          </span>
        </nav>
      </div>

      <header className="mx-auto max-w-7xl px-4 sm:px-6">
        <h1 className="sr-only">{category.title}</h1>
        <div className="relative aspect-[3/1] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/10 sm:rounded-3xl">
          <Image
            src={categoryImages[categorySlug]}
            alt={`${category.title}: ${category.description}`}
            fill
            priority
            sizes="(min-width: 1280px) 1216px, calc(100vw - 2rem)"
            className="object-cover"
            placeholder="blur"
          />
          <div className="absolute bottom-3 right-3 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-bold text-[#013a81] shadow-sm backdrop-blur sm:bottom-5 sm:right-5 sm:px-4 sm:py-2 sm:text-sm">
            {category.count}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-10">
        {allTopics.length > 0 ? (
          <>
            <div className="mb-5 flex items-end justify-between gap-4 sm:mb-7">
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#009fda]">Keep learning</p>
                <h2 className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">All Tutorials</h2>
              </div>
              <span className="hidden text-sm font-medium text-slate-500 sm:block">{category.count}</span>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 sm:gap-6">
              {allTopics.map((topic: any) => (
                <Link
                  key={topic.id}
                  href={`/aihelpcenter/${categorySlug}/${topic.id}`}
                  className="group relative flex min-h-64 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-950/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009fda] focus-visible:ring-offset-2 sm:p-6"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#009fda] via-[#1687cf] to-[#013a81]" />
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-[#008ec8] ring-1 ring-sky-100 transition-colors group-hover:bg-[#009fda] group-hover:text-white sm:h-12 sm:w-12">
                      {iconMap[topic.subcategoryIcon] || <div>Icon</div>}
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-right text-xs font-semibold text-slate-600">
                      {topic.subcategoryTitle}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-extrabold leading-snug text-gray-900 transition-colors group-hover:text-[#007fb5]">
                    {topic.title}
                  </h3>
                  <p className="mb-5 line-clamp-3 text-sm leading-6 text-slate-500">{topic.description}</p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {topic.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {topic.date}
                    </span>
                    <span className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 text-[#009fda] transition-all group-hover:bg-[#009fda] group-hover:text-white">
                      <ArrowRight size={15} />
                    </span>
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
