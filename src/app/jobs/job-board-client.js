"use client"
import { useState } from "react"
import JobFilters from "@/components/jobs/JobFilters"
import JobList from "@/components/jobs/JobList"
import JobRecommendation from "@/components/jobs/JobRecommendation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const JobBoardClient = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  return (
    <section className="container mx-auto px-4 py-12">
      <Tabs defaultValue="browse" className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Jobs for Data Professionals</h2>
          <TabsList>
            <TabsTrigger value="browse">Browse Jobs</TabsTrigger>
            <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="browse" className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <JobFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          </div>
          <div className="lg:col-span-3">
            <JobList filter={activeFilter} />
          </div>
        </TabsContent>

        <TabsContent value="recommendations">
          <JobRecommendation />
        </TabsContent>
      </Tabs>
    </section>
  )
}

export default JobBoardClient
