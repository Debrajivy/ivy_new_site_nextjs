"use client";
import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Briefcase,
  Code,
  Cpu,
  Database,
  Layout,
  Layers,
  MessageSquare,
  Server,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { data } from './lib/data';

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 />,
  BookOpen: <BookOpen />,
  Briefcase: <Briefcase />,
  Code: <Code />,
  Cpu: <Cpu />,
  Database: <Database />,
  Layout: <Layout />,
  Layers: <Layers />,
  MessageSquare: <MessageSquare />,
  Server: <Server />,
  ShieldCheck: <ShieldCheck />,
  Zap: <Zap />,
};

const AIHelpCenterLanding = () => {
  return (
    <>
      <header className="mx-auto max-w-4xl px-4 pb-8 pt-10 text-center sm:px-6 sm:pb-10 sm:pt-14">
        <span className="mb-3 inline-flex rounded-full bg-sky-100 px-4 py-1.5 text-sm font-bold text-[#007fb5]">
          AI Help Center
        </span>
        <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl">What would you like to learn today?</h1>
        <p className="mt-4 text-base text-gray-600 sm:text-lg">Browse our comprehensive library of AI and data science tutorials</p>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {Object.entries(data.categories).map(([id, cat]: [string, any]) => (
            <article
              key={id}
              className="group relative overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:p-6"
            >
              <Link
                href={`/aihelpcenter/${id}`}
                className="block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009fda] focus-visible:ring-offset-2"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#009fda] text-white shadow-lg sm:mb-4 sm:h-12 sm:w-12 sm:rounded-2xl">
                  {iconMap[cat.icon]}
                </div>
                <h2 className="text-base font-bold text-gray-900 transition-colors group-hover:text-blue-600 sm:text-lg">{cat.title}</h2>
                <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">{cat.count}</p>
              </Link>
              {cat.latestTopic && (
                <Link
                  href={`/aihelpcenter/${id}/${cat.latestTopic.id}`}
                  aria-label={`Read the latest ${cat.title} tutorial: ${cat.latestTopic.title}`}
                  className="mt-3 flex items-center gap-2 rounded-lg bg-blue-50 p-2 transition-colors hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009fda] focus-visible:ring-offset-2 sm:mt-4 sm:rounded-xl sm:p-3"
                >
                  <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-[#009fda] sm:h-2 sm:w-2" />
                  <span className="line-clamp-2 text-xs font-bold text-blue-700">Latest: {cat.latestTopic.title}</span>
                  <ArrowRight size={12} className="ml-auto shrink-0 text-blue-400 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </main>
    </>
  );
};

export default AIHelpCenterLanding;
