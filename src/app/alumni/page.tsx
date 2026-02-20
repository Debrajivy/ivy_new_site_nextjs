"use client"

import { useState, useMemo } from "react"
import { Search, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
// Data & Components
import { allAlumni, filterCategories, type AlumniData } from "@/lib/alumni-data"
import AlumniProfileSidebar from "@/components/AlumniProfileSidebar"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Placeholder from "@/assests/placeholder.png"

const FAQ_DATA = [
  {
    question: "Which companies hire Ivy Professional School students?",
    answer: "Our students are recruited by global industry leaders and \"Big 4\" consulting firms. Top hiring partners include **Amazon, Google, PwC, IBM, LinkedIn, HSBC, Deloitte, Ipsos, and Publicis Global Delivery**. Ivy students are currently making an impact across technology, finance, and global analytics sectors."
  },
  {
    question: "What is the average salary hike for students after an Ivy course?",
    answer: "While individual growth depends on experience and performance, Ivy Professional School students typically report an average **salary hike of 40% to 60%**. Exceptional career transformations within our network have seen students achieve **hikes between 200% and 400%** when transitioning into specialized Data Science and AI roles."
  },
  {
    question: "Can students from non-tech backgrounds transition to Data Science?",
    answer: "Absolutely. A significant portion of our success stories comes from students who started in **non-tech roles** such as HR, Sales, or Operations. Through our structured curriculum, these students have successfully pivoted into roles like **Data Analysts and Machine Learning Engineers** at companies like **Ipsos and HSBC**."
  },
  {
    question: "How does Ivy support students in their career journey?",
    answer: "Beyond the classroom, we provide students with access to a massive network of **32,000+ alumni** for mentorship and networking. This community, combined with our dedicated placement support, ensures students are prepared for the rigorous hiring processes of top-tier global firms."
  },
  {
    question: "Does Ivy Professional School provide placement assistance to students?",
    answer: "**Yes, we provide comprehensive, lifetime placement support to all our students.** Our dedicated career cell works closely with students on **resume building, LinkedIn profile optimization, and mock interview preparation**. By leveraging our vast network of **32,000+ alumni** and 400+ corporate hiring partners, we ensure our students are prioritized for job openings at top-tier firms like **PwC, IBM, and Accenture**."
  }
];

const Alumni = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedAlumni, setSelectedAlumni] = useState<AlumniData | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(9)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  // --- SEO SCHEMA GENERATION ---
  const structuredData = useMemo(() => {
    // 1. FAQ Page Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQ_DATA.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/\*\*/g, ""), // Clean stars for search results
        },
      })),
    };

    // 2. ItemList Schema for Alumni Profiles
    const itemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Ivy Professional School Alumni Profiles",
      "description": "Success stories of students transitioning to Data Science roles at top firms.",
      "itemListElement": allAlumni.slice(0, 20).map((alumni, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Person",
          "name": alumni.name,
          "jobTitle": alumni.currentCompany.role,
          "image": alumni.image?.src || "",
          "description": `${alumni.name} transitioned to ${alumni.currentCompany.role} from a background in ${alumni.previousCompany.role}.`,
          "affiliation": {
            "@type": "Organization",
            "name": "Ivy Professional School"
          }
        },
      })),
    };

    return [faqSchema, itemListSchema];
  }, []);

  const renderBoldText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
    setVisibleCount(9)
  }

  const filteredAlumni = useMemo(() => {
    let filtered = allAlumni
    if (selectedFilters.length > 0) {
      filtered = filtered.filter((alumni) => alumni.categories.some((cat) => selectedFilters.includes(cat)))
    }
    if (searchTerm) {
      const search = searchTerm.toLowerCase()
      filtered = filtered.filter((a) =>
        a.name.toLowerCase().includes(search) ||
        a.currentCompany.role.toLowerCase().includes(search)
      )
    }
    return filtered
  }, [selectedFilters, searchTerm])

  const displayedAlumni = filteredAlumni.slice(0, visibleCount);

  return (
    <>
      {/* Schema Markup Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              Join a Global Network of 32,000+ Industry Leaders
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-[#009fda] mb-6">
              Empowering Career Transformations from Non-Tech to Data Science Excellence.
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-4xl mb-8">
              Become part of an elite community where {renderBoldText("**32,000+ Ivy Professional School students**")} have successfully transitioned into high-impact careers at {renderBoldText("**Fortune 500 companies**")}. Our students move from non-tech roles into specialized positions such as Data Scientists and Business Analysts at world-class organizations like {renderBoldText("**Amazon, Google, and LinkedIn**")}. By mastering industry-relevant skills, our students have secured life-changing career moves with {renderBoldText("**salary hikes reaching up to 400%**")}.
            </p>

            <Badge style={{ backgroundColor: "#4eaec3", color: "white" }} className="mb-8">
              <nav className="flex gap-2 font-normal">
                <Link href="/">Home</Link> / <Link href="/alumni">Alumni</Link>
              </nav>
            </Badge>

            <div className="relative max-w-2xl mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search alumni..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#009fda] outline-none"
                onChange={(e) => { setSearchTerm(e.target.value); setVisibleCount(9); }}
              />
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-bold text-gray-700 mr-2">Quick Filters:</span>
              {filterCategories.map((filter) => (
                <button
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className={`px-4 py-1.5 text-xs rounded-full border transition-all ${selectedFilters.includes(filter)
                    ? "bg-[#009fda] border-[#009fda] text-white"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ALUMNI GRID */}
        <div id="alumni-grid" className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedAlumni.map((alumni, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col group">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    loading="lazy"
                    src={alumni.image || Placeholder}
                    alt={alumni.name}
                    width={64} height={64}
                    className="rounded-full object-cover border-2 border-gray-50 shadow-sm"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#009fda] transition-colors">{alumni.name}</h3>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-tight">{alumni.title}</p>
                    <p className="text-[10px] text-gray-400">{alumni.location}</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between gap-2 mb-6">
                  <div className="text-center flex-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Previous</p>
                    <Image loading="lazy" src={alumni.previousCompany.company} alt="Prev" width={50} height={30} className="mx-auto object-contain h-8" />
                    <p className="text-[10px] mt-1 text-gray-500 truncate">{alumni.previousCompany.role}</p>
                  </div>
                  <ArrowRight className="w-5 text-gray-300 flex-shrink-0" />
                  <div className="text-center flex-1">
                    <p className="text-[10px] font-bold text-[#009fda] uppercase mb-2">Current</p>
                    <Image loading="lazy" src={alumni.currentCompany.company} alt="Curr" width={50} height={30} className="mx-auto object-contain h-8" />
                    <p className="text-[10px] mt-1 text-gray-900 font-bold truncate">{alumni.currentCompany.role}</p>
                  </div>
                </div>

                <div className="mb-6 text-center">
                  <div className={`inline-block px-5 py-2 rounded-full text-[11px] font-extrabold ${alumni.name === "Abhinav Sinha" || alumni.name === "Priti Jha"
                    ? "bg-[#e8f5e9] text-[#2e7d32]" : "bg-gray-100 text-gray-500"}`}>
                    {alumni.name === "Abhinav Sinha" ? "400% hike after Ivy Pro School" :
                      alumni.name === "Priti Jha" ? "200% hike after Ivy Pro School" :
                        "Connect to see Salary Hike"}
                  </div>
                </div>

                <div className="mt-auto flex border-t border-gray-100 pt-4 items-center justify-between">
                  <button className="text-[11px] font-black text-gray-800 hover:text-[#009fda]">CONNECT {">"}</button>
                  <button
                    onClick={() => { setSelectedAlumni(alumni); setIsSidebarOpen(true) }}
                    className="text-[11px] font-black text-[#009fda] hover:underline"
                  >
                    VIEW PROFILE {">"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < filteredAlumni.length && (
            <div className="mt-16 text-center">
              <button
                onClick={() => setVisibleCount(v => v + 9)}
                className="inline-flex items-center gap-2 border-2 border-[#009fda] text-[#009fda] px-10 py-3 rounded-full font-bold hover:bg-[#009fda] hover:text-white transition-all shadow-sm"
              >
                Load More Alumni <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* FAQ SECTION */}
        <div className="bg-white py-24 border-t">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Alumni Success FAQ</h2>
            <div className="divide-y divide-gray-100 border-t border-gray-100">
              {FAQ_DATA.map((faq, idx) => (
                <div key={idx} className="group">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex justify-between items-center py-6 text-left"
                  >
                    <span className="text-lg font-bold text-gray-900 group-hover:text-[#009fda] transition-colors">{faq.question}</span>
                    {openFaqIndex === idx ? <ChevronUp className="w-5 h-5 text-[#009fda]" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === idx ? "max-h-96 opacity-100 pb-8" : "max-h-0 opacity-0"}`}>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {renderBoldText(faq.answer)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 30 }}>
              <h4 className="text-lg font-bold text-blue-900">Still have questions?</h4>
              <p style={{ marginTop: 10 }} className="text-blue-700 text-sm">Speak directly with our career counselors in Kolkata.</p>
            </div>
            <Button
              style={{ marginTop: 10 }}
              onClick={() => isMobile ? window.location.href = "tel:7676882222" : alert("Call us at 7676882222")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              <MessageCircle size={18} className="mr-2" />
              Schedule a Consultation
            </Button>
          </div>
        </div>





        {selectedAlumni && (
          <AlumniProfileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} alumnus={selectedAlumni} />
        )}
      </div>
      <Footer />
    </>
  )
}

export default Alumni