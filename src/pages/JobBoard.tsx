
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JobFilters from '@/components/jobs/JobFilters';
import JobList from '@/components/jobs/JobList';
import JobRecommendation from '@/components/jobs/JobRecommendation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const JobBoard = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <>
      <Helmet>
        <title>AI-Powered Job Board | Ivy Professional School</title>
        <meta name="description" content="Find your dream job in data science, AI, machine learning and more. Get AI-powered job recommendations tailored to your skills and career goals." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-gray-50">
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI-Powered Job Board for Data & Tech Professionals
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Find your dream job with help from our AI career assistant that matches your skills with the right opportunities
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <input 
                  type="text"
                  placeholder="Search jobs by title, skills or company"
                  className="px-4 py-3 rounded-lg text-gray-800 w-full sm:w-96"
                />
                <button className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                  Search Jobs
                </button>
              </div>
            </div>
          </div>
        </section>
        
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
      </main>
      
      <Footer />
    </>
  );
};

export default JobBoard;
