import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import JobBoardClient from "./job-board-client"

export const metadata: Metadata = {
  title: "AI-Powered Job Board | Ivy Professional School",
  description:
    "Find your dream job in data science, AI, machine learning and more. Get AI-powered job recommendations tailored to your skills and career goals.",
}

const JobBoard = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI-Powered Job Board for Data & Tech Professionals
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Find your dream job with help from our AI career assistant that matches your skills with the right
                opportunities
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

        <JobBoardClient />
      </main>

      <Footer />
    </>
  )
}

export default JobBoard
