"use client";
import React, { useState, useEffect } from 'react';
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
  Image as ImageIcon
} from 'lucide-react';
import Navbar from "@/components/layout/Navbar"
import FooterMain from "@/components/layout/Footer";
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
  "ImageIcon": <ImageIcon />
};

// Helper function to add backlinks to text
const addBacklinks = (text: string) => {
  if (!text) return '';
  return text
    .replace(/modern business/g, '<a href="https://blog.ivyproschool.com/decoding-business-analytics-vs-business-intelligence/" class="text-[#013a81] font-semibold underline decoration-indigo-200 underline-offset-4 hover:text-indigo-600 transition-colors">modern business</a>')
    .replace(/Python/g, '<a href="https://blog.ivyproschool.com/decoding-business-analytics-vs-business-intelligence/" class="text-[#013a81] font-semibold underline decoration-indigo-200 underline-offset-4 hover:text-indigo-600 transition-colors">Python</a>')
    .replace(/pandas library/g, '<a href="https://blog.ivyproschool.com/top-9-reasons-to-learn-python-to-become-data-scientist-ai-expert/" class="text-[#013a81] font-semibold underline decoration-indigo-200 underline-offset-4 hover:text-indigo-600 transition-colors">pandas library</a>')
    .replace(/for data analysis/g, '<a href="https://ivyproschool.com/courses/data-analytics-and-generative-ai-course" class="text-[#013a81] font-semibold underline decoration-indigo-200 underline-offset-4 hover:text-indigo-600 transition-colors">for data analysis</a>')
    .replace(/data engineering pipelines/g, '<a href="https://ivyproschool.com/courses/data-engineering-course" class="text-[#013a81] font-semibold underline decoration-indigo-200 underline-offset-4 hover:text-indigo-600 transition-colors">data engineering pipelines</a>');
};

// Helper function to highlight Python code
const highlightPythonCode = (code: string) => {
  if (!code) return '';
  const escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return escaped
    .replace(
      /\b(import|from|as|def|class|return|if|elif|else|for|while|in|try|except|with)\b/g,
      '<span class="text-purple-400">$1</span>'
    )
    .replace(
      /\b(pd|read_csv|DataFrame|True|False|None|concat|fillna|to_csv|glob)\b/g,
      '<span class="text-blue-400">$1</span>'
    )
    .replace(
      /('[^']*'|"[^"]*")/g,
      '<span class="text-green-400">$1</span>'
    )
    .replace(
      /^#.*$/gm,
      '<span class="text-gray-400 italic">$&</span>'
    );
};

// Helper function to highlight GenAI/LLM code
const highlightGenAICode = (code: string) => {
  if (!code) return '';
  const escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return escaped
    .replace(
      /\b(import|from|as|def|class|return|if|elif|else|for|while|in|try|except|with|async|await)\b/g,
      '<span class="text-purple-400">$1</span>'
    )
    .replace(
      /\b(openai|langchain|llama_index|transformers|torch|numpy|pandas|RAG|FineTuning|retrieval|generation|embedding|vector|Llama|huggingface|retriever|chain|pipeline|TrainingArguments|Trainer)\b/gi,
      '<span class="text-blue-400">$1</span>'
    )
    .replace(
      /('[^']*'|"[^"]*")/g,
      '<span class="text-green-400">$1</span>'
    )
    .replace(
      /^#.*$/gm,
      '<span class="text-gray-400 italic">$&</span>'
    );
};

const App = () => {
  const [view, setView] = useState('landing');
  const [activeCategory, setActiveCategory] = useState('');
  const [activeSubcategory, setActiveSubcategory] = useState('');
  const [activeTopic, setActiveTopic] = useState('');
  const [activeSection, setActiveSection] = useState('intro');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showReviewPrompt, setShowReviewPrompt] = useState(false);
  const [reviewPromptShown, setReviewPromptShown] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    if ((data.categories as Record<string, any>)[categoryId]?.subcategories) {
      setView('category');
    } else {
      setView('topic-list');
    }
  };

  const handleSubcategoryClick = (subcategoryId: string) => {
    setActiveSubcategory(subcategoryId);
    setView('subcategory');
  };

  const handleTopicClick = (topicId: string) => {
    setActiveTopic(topicId);
    setView('topic');
    setScrollProgress(0);
    setReviewPromptShown(false);
    setShowReviewPrompt(false);
  };

  const handleBackToLanding = () => {
    setView('landing');
    setActiveCategory('');
    setActiveSubcategory('');
    setActiveTopic('');
  };

  const handleBackToCategory = () => {
    setView('category');
    setActiveSubcategory('');
    setActiveTopic('');
  };

  const handleBackToSubcategory = () => {
    setView('subcategory');
    setActiveTopic('');
  };

  const openReviewPage = () => {
    window.open('https://www.google.com/search?q=ivy+professional+school&rlz=1C1ONGR_enIN1115IN1115&oq=&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7Mg0IARAuGK8BGMcBGIAEMgcIAhAAGIAEMhAIAxAuGIMBGLEDGIAEGOUEMgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYQTIGCAcQRRg80gEIMzA0N2owajeoAgiwAgHxBRMMy4WLy7978QUTDMuFi8u_ew&sourceid=chrome&ie=UTF-8#lrd=0x3a02771797fccdc1:0xca64261fceaf2af6,3,,,', '_blank');
    setShowReviewPrompt(false);
  };

  useEffect(() => {
    if (view !== 'topic') return;

    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      
      if (documentHeight > 0) {
        const progress = (scrolled / documentHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
        
        if (progress >= 95 && !reviewPromptShown) {
          setShowReviewPrompt(true);
          setReviewPromptShown(true);
        }
      }
    };

    window.addEventListener('scroll', calculateScrollProgress);
    calculateScrollProgress();

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
    };
  }, [view, reviewPromptShown]);

  const renderBreadcrumbs = () => {
    const breadcrumbs = [];

    if (view !== 'landing') {
      breadcrumbs.push(
        <button key="home" onClick={handleBackToLanding} className="hover:text-indigo-600 transition-colors">
          Home
        </button>
      );
    }

    if (view === 'category' || view === 'subcategory' || view === 'topic-list' || view === 'topic') {
      breadcrumbs.push(
        <ChevronRight key="arrow1" size={14} />,
        <button key="category" onClick={() => handleCategoryClick(activeCategory)} className="hover:text-indigo-600 transition-colors">
          {(data.categories as Record<string, any>)[activeCategory]?.title}
        </button>
      );
    }

    if (view === 'subcategory' || view === 'topic') {
      breadcrumbs.push(
        <ChevronRight key="arrow2" size={14} />,
        <button key="subcategory" onClick={() => handleSubcategoryClick(activeSubcategory)} className="hover:text-indigo-600 transition-colors">
          {(data.categories as Record<string, any>)[activeCategory]?.subcategories?.[activeSubcategory]?.title}
        </button>
      );
    }

    if (view === 'topic') {
      breadcrumbs.push(
        <ChevronRight key="arrow3" size={14} />,
        <span key="topic" className="text-indigo-600 font-medium">
          {activeTopic === 'merge-csv-files' ? 'Merging CSV Files' : 
           activeTopic === 'rag-vs-finetuning' ? 'RAG vs Fine-Tuning' : 'Tutorial'}
        </span>
      );
    }

    return breadcrumbs;
  };

  const renderTopicContent = () => {
    const topic = (data.categories as any)[activeCategory]?.subcategories?.[activeSubcategory]?.topics?.find((t: any) => t.id === activeTopic);
    if (!topic) return null;

    const content = topic.content;

    return (
      <article className="lg:col-span-3">
        <div className="rounded-[2.5rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-14">
          {/* Introduction Section */}
          <section id="intro" className="max-w-none mb-16">
            {content.sections?.find((s: any) => s.id === 'intro')?.content?.map((item: any, idx: number) => (
              <div key={idx}>
                {item.type === 'paragraph' && item.hasBar && (
                  <div className="relative pl-6 mb-8">
                    <div className="absolute left-0 top-1.5 w-1.5 h-8 bg-indigo-600 rounded-full"></div>
                    <p className="text-xl leading-relaxed text-slate-600" dangerouslySetInnerHTML={{ 
                      __html: addBacklinks(item.text)
                    }} />
                  </div>
                )}
                {item.type === 'paragraph' && !item.hasBar && (
                  <p className="text-xl leading-relaxed text-slate-600 mb-8" dangerouslySetInnerHTML={{ 
                    __html: addBacklinks(item.text)
                  }} />
                )}
              </div>
            ))}
          </section>

          {/* Table of Contents for GenAI */}
          {content.sections?.find((s: any) => s.type === 'toc') && (
            <div className="my-16 rounded-2xl bg-slate-50 p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <BookOpen size={20} /> {content.sections.find((s: any) => s.type === 'toc')?.title}
              </h3>
              <ul className="space-y-2 text-slate-700">
                {content.sections.find((s: any) => s.type === 'toc')?.content?.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-indigo-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Analogy Section */}
          {content.sections?.find((s: any) => s.type === 'analogy') && (
            <div className="my-16 rounded-[2rem] bg-indigo-600 p-10 text-white shadow-2xl shadow-indigo-200">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-2xl bg-white/20 p-3">
                  {iconMap[content.sections.find((s: any) => s.type === 'analogy')?.icon || 'Layers']}
                </div>
                <h3 className="text-3xl font-bold">{content.sections.find((s: any) => s.type === 'analogy')?.title}</h3>
              </div>
              <p className="text-xl leading-relaxed text-indigo-50 mb-8">
                {content.sections.find((s: any) => s.type === 'analogy')?.content?.main}
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {content.sections.find((s: any) => s.type === 'analogy')?.content?.cards?.map((card: any, idx: number) => (
                  <div key={idx} className={`rounded-2xl ${idx === 1 ? 'bg-indigo-500 border-white/20 shadow-lg' : 'bg-indigo-700/50 border-white/10'} border p-6`}>
                    <h4 className="font-black uppercase text-xs tracking-widest text-indigo-300 mb-3">{card.title}</h4>
                    <p className="text-indigo-50 font-medium">{card.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content Sections */}
          {content.sections?.filter((s: any) => !['intro', 'toc', 'analogy'].includes(s.type || s.id)).map((section: any) => (
            <section key={section.id} id={section.id} className="mt-20">
              {section.phase && (
                <div className="mb-8">
                  <div className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                    {section.phase}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{section.title}</h2>
                </div>
              )}
              {!section.phase && (
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{section.title}</h2>
              )}

              {section.content?.map((item: any, idx: number) => {
                if (item.type === 'paragraph') {
                  return <p key={idx} className="text-lg leading-relaxed text-slate-600 mb-8" dangerouslySetInnerHTML={{ 
                    __html: addBacklinks(item.text)
                  }} />;
                }
                if (item.type === 'subtitle') {
                  return <h3 key={idx} className="text-2xl font-bold text-slate-800 mb-4 mt-12">{item.text}</h3>;
                }
                if (item.type === 'code') {
                  const borderColors: Record<string, string> = {
                    'indigo': 'border-indigo-500',
                    'emerald': 'border-emerald-500',
                    'blue': 'border-blue-500',
                    'purple': 'border-purple-500'
                  };
                  const borderClass = borderColors[item.borderColor] || 'border-indigo-500';
                  
                  return (
                    <div key={idx} className={`my-8 overflow-hidden rounded-2xl bg-black font-mono text-sm shadow-xl border-l-[6px] ${borderClass}`}>
                      <div className="bg-gray-900 px-6 py-3 border-b border-gray-800 flex justify-between items-center">
                        <span className="text-gray-400 text-xs font-medium">{item.title}</span>
                        <Terminal size={14} className="text-gray-500" />
                      </div>
                      <pre className="p-8 leading-8 overflow-x-auto text-gray-100" style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                        <code dangerouslySetInnerHTML={{ 
                          __html: activeCategory === 'genai-llm' ? highlightGenAICode(item.code) : highlightPythonCode(item.code)
                        }} />
                      </pre>
                    </div>
                  );
                }
                if (item.type === 'explanation') {
                  const colorMap: Record<string, { border: string, bg: string, text: string }> = {
                    'indigo': { border: 'border-indigo-50', bg: 'bg-indigo-50/30', text: 'text-indigo-700' },
                    'emerald': { border: 'border-emerald-50', bg: 'bg-emerald-50/30', text: 'text-emerald-700' },
                    'blue': { border: 'border-blue-50', bg: 'bg-blue-50/30', text: 'text-blue-700' },
                    'purple': { border: 'border-purple-50', bg: 'bg-purple-50/30', text: 'text-purple-700' }
                  };
                  const color = colorMap[item.borderColor] || colorMap.indigo;
                  
                  return (
                    <div key={idx} className={`my-8 rounded-2xl border-2 p-8 ${color.border} ${color.bg}`}>
                      <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-6" style={{ color: color.text }}>
                        <Search size={16} /> {item.title}
                      </h4>
                      <div className="space-y-4">
                        {item.content.split('\n\n').map((paragraph: string, pIdx: number) => (
                          <p key={pIdx} className="text-slate-700 leading-relaxed italic">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      {item.note && (
                        <p className="mt-4 text-slate-700 font-medium">{item.note}</p>
                      )}
                    </div>
                  );
                }
                if (item.type === 'quote') {
                  return (
                    <p key={idx} className="text-lg leading-relaxed text-slate-600 mb-8 italic border-l-4 border-purple-200 pl-6">
                      {item.text}
                    </p>
                  );
                }
                if (item.type === 'table') {
                  return (
                    <div key={idx} className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
                      <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Table size={16} className="text-indigo-600" />
                          <span className="text-sm font-semibold text-slate-700">{item.title}</span>
                        </div>
                        <span className="text-xs text-slate-500">Comparison Table</span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-slate-100">
                              {item.headers?.map((header: string, hIdx: number) => (
                                <th key={hIdx} className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider border-b border-slate-200">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200">
                            {item.rows?.map((row: any[], rIdx: number) => (
                              <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                {row.map((cell: string, cIdx: number) => (
                                  <td key={cIdx} className="px-6 py-4 text-sm text-slate-700 border-r border-slate-200 last:border-r-0">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                }
                if (item.type === 'image') {
                  return (
                    <div key={idx} className="my-8">
                      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
                        <div className="flex items-center gap-2 mb-4">
                          <ImageIcon size={16} className="text-indigo-600" />
                          <span className="text-sm font-semibold text-slate-700">{item.title}</span>
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden bg-slate-100">
                          <iframe
                            src={item.url}
                            className="w-full h-full border-0"
                            title={item.title}
                            allow="autoplay"
                          />
                        </div>
                        {item.caption && (
                          <p className="mt-3 text-sm text-slate-600 text-center">{item.caption}</p>
                        )}
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </section>
          ))}

          {/* Troubleshooting Section */}
          {content.troubleshooting && (
            <section id="troubleshooting" className="mt-24 border-t border-slate-100 pt-20">
              <div className="mb-12">
                <h2 className="text-4xl font-black text-slate-900 mb-4">{content.troubleshooting.title}</h2>
                <p className="text-xl text-slate-500">{content.troubleshooting.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.troubleshooting.cards?.map((card: any, idx: number) => {
                  const colorMap: Record<string, { border: string, shadow: string, bg: string, text: string }> = {
                    'red': { border: 'border-red-50', shadow: 'shadow-red-50/50', bg: 'bg-red-100', text: 'text-red-600' },
                    'amber': { border: 'border-amber-50', shadow: 'shadow-amber-50/50', bg: 'bg-amber-100', text: 'text-amber-600' },
                    'indigo': { border: 'border-indigo-50', shadow: 'shadow-indigo-50/50', bg: 'bg-indigo-100', text: 'text-indigo-600' }
                  };
                  const color = colorMap[card.color] || colorMap.indigo;
                  
                  return (
                    <div key={idx} className={`rounded-3xl border-2 ${color.border} bg-white p-8 shadow-xl ${color.shadow} hover:-translate-y-2 transition-transform`}>
                      <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${color.bg}`}>
                        {iconMap[card.icon]}
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{card.content}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Conclusion Section */}
          {content.conclusion && (
            <section className="mt-24 space-y-10">
              <div className="rounded-[2.5rem] bg-slate-950 p-12 text-white">
                <h2 className="text-4xl font-bold mb-6">{content.conclusion.title}</h2>
                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                  <p dangerouslySetInnerHTML={{ 
                    __html: addBacklinks(content.conclusion.content)
                  }} />
                </div>
              </div>

              {content.conclusion.checklist && (
                <div className="rounded-3xl border-4 border-indigo-600 p-10">
                  <h3 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Summary Checklist</h3>
                  <div className="space-y-6">
                    {content.conclusion.checklist.map((step: any, idx: number) => (
                      <div key={idx} className="flex items-center gap-4 group">
                        <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">✓</div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                          <span className="font-black text-slate-900 min-w-[100px]">{step.item}:</span>
                          <span className="text-indigo-600 font-mono text-sm bg-indigo-50 px-3 py-1 rounded-lg">{step.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {content.conclusion.finalNote && (
                <p className="text-xl font-medium text-slate-600 pt-10 text-center italic">
                  {content.conclusion.finalNote}
                </p>
              )}

              {content.conclusion.finalParagraph && (
                <p className="text-lg text-slate-500 text-center leading-relaxed max-w-2xl mx-auto">
                  {content.conclusion.finalParagraph}
                </p>
              )}
            </section>
          )}

          {/* CTA Section */}
          {content.cta && (
            <div className="mt-20 flex flex-col items-center justify-center rounded-[3rem] bg-indigo-600 py-16 px-10 text-center text-white shadow-2xl">
              <h2 className="text-4xl font-bold mb-6">{content.cta.title}</h2>
              <p className="text-indigo-100 text-lg mb-10 max-w-xl">{content.cta.content}</p>
              <button className="rounded-full bg-white px-10 py-5 text-lg font-black text-indigo-600 shadow-xl hover:scale-105 active:scale-95 transition-all">
                {content.cta.buttonText}
              </button>
            </div>
          )}
        </div>
      </article>
    );
  };

  // Category View
  if (view === 'category') {
    const category = (data.categories as Record<string, any>)[activeCategory];
    const subcategories = category.subcategories || {};

    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-8">
            {renderBreadcrumbs()}
          </nav>
        </div>

        <header className="px-6 pt-8 pb-12 text-center max-w-4xl mx-auto">
          <div className={`${category.color} mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl text-white shadow-xl`}>
            {iconMap[category.icon]}
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-4">{category.title}</h1>
          <p className="text-xl text-slate-600 mb-8">{category.description}</p>
          <p className="text-lg text-slate-500 font-medium">{category.count}</p>
        </header>

        <main className="mx-auto max-w-7xl px-6 pb-24">
          {Object.keys(subcategories).length > 0 ? (
            <>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Subcategories</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(subcategories).map(([id, subcat]: [string, any]) => (
                  <div
                    key={id}
                    onClick={() => handleSubcategoryClick(id)}
                    className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                  >
                    <div className={`${subcat.color} mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg`}>
                      {iconMap[subcat.icon]}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {subcat.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 font-medium">{subcat.count}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-indigo-600 font-medium">
                      <span>Explore topics</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">No subcategories available yet.</p>
            </div>
          )}
        </main>
        <FooterMain />
      </div>
    );
  }

  // Subcategory View
  if (view === 'subcategory') {
    const category = (data.categories as Record<string, any>)[activeCategory];
    const subcategory = category?.subcategories?.[activeSubcategory];
    const topics = subcategory?.topics || [];

    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-8">
            {renderBreadcrumbs()}
          </nav>
        </div>

        <header className="px-6 pt-8 pb-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className={`${category.color} h-16 w-16 flex items-center justify-center rounded-3xl text-white shadow-xl`}>
              {iconMap[category.icon]}
            </div>
            <div className={`${subcategory.color} h-16 w-16 flex items-center justify-center rounded-3xl text-white shadow-xl`}>
              {iconMap[subcategory.icon]}
            </div>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-4">{subcategory.title}</h1>
          <p className="text-xl text-slate-600 mb-8">Tutorials and guides for {subcategory.title.toLowerCase()}</p>
          <p className="text-lg text-slate-500 font-medium">{subcategory.count}</p>
        </header>

        <main className="mx-auto max-w-7xl px-6 pb-24">
          {topics.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Tutorials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topics.map((topic: any, idx: number) => (
                  <div
                    key={idx}
                    onClick={() => handleTopicClick(topic.id)}
                    className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                      <FileText />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-4">{topic.description}</p>
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {topic.duration}
                      </span>
                      <span>{topic.date}</span>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronRight size={20} className="text-indigo-400" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">No tutorials available yet.</p>
            </div>
          )}
        </main>
        <FooterMain />
      </div>
    );
  }

  // Topic List View
  if (view === 'topic-list') {
    const category = (data.categories as Record<string, any>)[activeCategory];

    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navbar />
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-8">
            {renderBreadcrumbs()}
          </nav>
        </div>

        <header className="px-6 pt-8 pb-12 text-center max-w-4xl mx-auto">
          <div className={`${category.color} mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl text-white shadow-xl`}>
            {iconMap[category.icon]}
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-4">{category.title}</h1>
          <p className="text-xl text-slate-600 mb-8">{category.description}</p>
          <p className="text-lg text-slate-500 font-medium">{category.count}</p>
        </header>

        <main className="mx-auto max-w-7xl px-6 pb-24">
          <div className="text-center py-12">
            <p className="text-xl text-slate-600">Tutorials coming soon for {category.title}.</p>
          </div>
        </main>
        <FooterMain />
      </div>
    );
  }

  // Topic View (Tutorial)
  if (view === 'topic') {
    const topic = (data.categories as Record<string, any>)[activeCategory]?.subcategories?.[activeSubcategory]?.topics?.find((t: any) => t.id === activeTopic);
    if (!topic) return null;

    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-700">
        <Navbar />
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-200">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        {showReviewPrompt && (
          <div className="fixed top-20 right-6 z-50 max-w-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-indigo-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Enjoying this tutorial?</h3>
                  <p className="text-sm text-slate-600">Share your feedback!</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4 text-sm">
                You've completed {Math.round(scrollProgress)}% of this tutorial. Help others by sharing your experience with Ivy Professional School.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={openReviewPage}
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Write a Review
                </button>
                <button
                  onClick={() => setShowReviewPrompt(false)}
                  className="px-4 py-3 text-slate-600 hover:text-slate-900 font-medium"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mx-auto max-w-7xl px-6 pt-8">
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
            {renderBreadcrumbs()}
          </nav>
        </div>

        <header className="bg-white px-6 pt-6 pb-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-8 max-w-4xl text-4xl font-extrabold leading-[1.15] text-slate-900 md:text-6xl">
              {topic.content.hero.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 border-t border-slate-100 pt-8 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                  {topic.content.hero.author?.charAt(0) || 'AI'}
                </div>
                <span>By <span className="text-slate-900">{topic.content.hero.author}</span></span>
              </div>
              <div className="flex items-center gap-2 border-l border-slate-200 pl-6">
                <Calendar size={16} />
                <span>{topic.content.hero.date}</span>
              </div>
              <div className="flex items-center gap-2 border-l border-slate-200 pl-6">
                <Clock size={16} />
                <span>{topic.content.hero.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {topic.content.video?.youtubeId && (
          <div className="mx-auto -mt-8 max-w-5xl px-6">
            <div className="group relative aspect-video overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${topic.content.video.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${topic.content.video.youtubeId}&controls=1`}
                title={topic.content.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-8 left-8">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">
                    Interactive Lesson
                  </span>
                  <h3 className="text-2xl font-bold text-white">{topic.content.video.title}</h3>
                </div>
              </div>
            </div>
          </div>
        )}

        <main className="mx-auto mt-16 max-w-7xl px-6 pb-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {renderTopicContent()}

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Roadmap</h4>
                  <div className="flex flex-col gap-4">
                    {data.navigation.toc.map((link: any) => (
                      <button
                        key={link.id}
                        onClick={() => scrollTo(link.id)}
                        className={`text-left text-sm font-bold transition-all border-l-4 pl-4 ${activeSection === link.id
                          ? 'text-indigo-600 border-indigo-600'
                          : 'text-slate-400 border-transparent hover:text-slate-600'
                          }`}
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl shadow-xl text-white text-center">
                  <h3 className="font-bold text-xl mb-2">{data.navigation.sidebarLinks.title}</h3>
                  <p className="text-sm text-blue-100 mb-6">{data.navigation.sidebarLinks.content}</p>
                  <button style={{ marginTop: 10 }} className="w-full bg-white text-blue-700 font-bold py-3 rounded-xl hover:bg-blue-50">
                    {data.navigation.sidebarLinks.buttonText}
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </main>
        <FooterMain />
      </div>
    );
  }

  // Landing View
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <header className="px-6 pt-16 pb-12 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-black tracking-tight text-slate-900 mb-6">What would you like to learn today?</h1>
        <p className="text-xl text-slate-600">Browse our comprehensive library of AI and data science tutorials</p>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(data.categories).map(([id, cat]: [string, any]) => (
            <div
              key={id}
              onClick={() => handleCategoryClick(id)}
              className={`group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer`}
            >
              <div className={`${cat.color} mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg`}>
                {iconMap[cat.icon]}
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{cat.title}</h3>
              <p className="mt-1 text-sm text-slate-500 font-medium">{cat.count}</p>
              {id === "python-basics" && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-indigo-50 p-3">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-indigo-500"></div>
                  <span className="text-xs font-bold text-indigo-700">Latest: Merging CSV Files</span>
                  <ArrowRight size={12} className="ml-auto text-indigo-400" />
                </div>
              )}
              {id === "genai-llm" && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-purple-50 p-3">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-purple-500"></div>
                  <span className="text-xs font-bold text-purple-700">New: RAG vs Fine-Tuning</span>
                  <ArrowRight size={12} className="ml-auto text-purple-400" />
                </div>
              )}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight size={20} className="text-slate-300" />
              </div>
            </div>
          ))}
        </div>
      </main>
      <FooterMain />
    </div>
  );
};

export default App;