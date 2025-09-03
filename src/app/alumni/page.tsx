"use client"

import { useState, useMemo } from "react"
import { Search, Star, ArrowRight, Phone } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge";

import { allAlumni, filterCategories, type AlumniData } from "@/lib/alumni-data"
import AlumniProfileSidebar from "@/components/AlumniProfileSidebar"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Placeholder from "@/assests/placeholder.png"
import Link from "next/link";

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, index) => (
    <Star key={index} className={`w-4 h-4 ${index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
  ))
}

const Alumni = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const [selectedAlumni, setSelectedAlumni] = useState<AlumniData | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }
  const handleViewProfile = (alumni: AlumniData) => {
    setSelectedAlumni(alumni)
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const filteredAlumni = useMemo(() => {
    let filtered = allAlumni

    if (selectedFilters.length > 0) {
      filtered = filtered.filter((alumni) => alumni.categories.some((category) => selectedFilters.includes(category)))
    }

    if (searchTerm) {
      const search = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (alumni) =>
          alumni.name.toLowerCase().includes(search) ||
          alumni.title.toLowerCase().includes(search) ||
          (typeof alumni.location === "string" && alumni.location.toLowerCase().includes(search)),
      )
    }

    return filtered
  }, [selectedFilters, searchTerm])

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Alumni Network</h1>


            <Badge
              style={{
                backgroundColor: "#4eaec3",
                color: "white",
                fontWeight: "normal",
              }}
              className="text-white hover:bg-white/20 w-fit mb-4"
            >
              <nav className="breadcrumbs">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/alumni">Alumni</Link>
                {/* Removed broken course link due to missing 'course' variable */}
              </nav>
            </Badge>

            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search alumni..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 py-2">Quick Filters:</span>
              {filterCategories.map((filter) => (
                <button
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className={`px-3 py-1 text-xs rounded-full border transition-colors ${selectedFilters.includes(filter)
                    ? "bg-blue-100 border-blue-300 text-blue-700"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Alumni Cards */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlumni.map((alumni, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleViewProfile(alumni)}
              >
                {/* Header - Compact */}
                <div className="flex items-start gap-4 mb-2">
                  <div className="relative">
                    <Image
                      width={64}
                      height={64}
                      loading="lazy"
                      src={alumni.image || Placeholder}
                      alt={alumni.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg text-gray-900">{alumni.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{alumni.title}</p>
                    <p className="text-sm text-gray-600">{alumni.location}</p>
                  </div>
                </div>

                {/* Company Transition - Tight Layout */}
                <div className="mb-2">
                  <div className="flex items-center justify-between">
                    <div style={{ marginTop: 20, fontWeight: "bold" }} className="text-center">
                      <p style={{ fontSize: 13 }} className="text-xs text-gray-500 mb-0 leading-tight">
                        {alumni.previousCompany.role}
                      </p>
                      <div className="p-1 min-h-[40px] flex items-center justify-center">
                        <Image
                          width={80}
                          height={80}
                          src={alumni.previousCompany.company || Placeholder}
                          alt="Previous company"
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                    </div>

                    <ArrowRight className="w-8 text-gray-400 mx-1" />

                    <div style={{ marginTop: 20, fontWeight: "bold" }} className="text-center">
                      <p style={{ fontSize: 13 }} className="text-xs text-gray-500 mb-0 leading-tight">
                        {alumni.currentCompany.role}
                      </p>
                      <div className="p-1 min-h-[40px] flex items-center justify-center">
                        <Image
                          width={80}
                          height={80}
                          src={alumni.currentCompany.company || "/placeholder.svg"}
                          alt="Current company"
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Salary & CTA - Compact */}
                <div className="mb-3 text-center">
                  <div
                    className={`inline-block px-3 py-1.5 rounded-full transition-colors ${alumni.name === "Abhinav Sinha" || alumni.name === "Priti Jha"
                      ? "bg-green-100 hover:bg-green-200"
                      : "bg-gray-100 hover:bg-gray-200"
                      }`}
                  >
                    {alumni.name === "Abhinav Sinha" ? (
                      <p style={{ color: "green" }} className="text-xs font-medium">
                        400% hike after Ivy Pro School
                      </p>
                    ) : alumni.name === "Priti Jha" ? (
                      <p style={{ color: "green" }} className="text-xs font-medium">
                        200% hike after Ivy Pro School
                      </p>
                    ) : (
                      <p className="text-xs font-medium text-gray-700">Connect to know Salary Hike</p>
                    )}
                  </div>
                </div>
                <div className="flex gap-1 text-sm">
                  <button
                    onClick={() => handleViewProfile(alumni)}
                    style={{ fontSize: 12 }}
                    className="flex-1 text-black hover:text-[#0077a8] font-medium py-1"
                  >
                    Connect with {alumni.name.split(" ")[0]} {">"}
                  </button>
                  <button
                    onClick={() => handleViewProfile(alumni)}
                    className="flex-1 text-[#009fda] hover:text-[#0077a8] font-medium py-1"
                  >
                    View Profile {">"}
                  </button>
                </div>
              </div>
            ))}
            {/* Conditionally render the AlumniProfileSidebar when an alumnus is selected and sidebar is open */}
            {selectedAlumni && (
              <AlumniProfileSidebar isOpen={isSidebarOpen} onClose={closeSidebar} alumnus={selectedAlumni} />
            )}
            {/* NEW: Sticky Fixed Bottom Section */}
            {/* <div className="fixed bottom-0 left-0 right-0 bg-[#013a81] text-white p-2 z-50">
              <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-8 h-8 text-white" />
                  <div>
                    <p className="font-semibold text-s">Want to connect with someone you think matches your profile?</p>
                    <p className="text-sm text-gray-300">Let us help you connect with the right person</p>
                  </div>
                </div>
                <button className="bg-[#193f82] hover:bg-[#193f82] text-white font-bold py-3 px-6 rounded-lg text-xs whitespace-nowrap">
                  Request 1-1 Alumni Session                  </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Alumni
