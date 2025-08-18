import React from "react";
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Eeshani from "@/assests/eeshani.webp";
import Pratik from "@/assests/pratilk.webp";
import Image from "next/image";
const BootcampRegister = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
        {/* Hero Section with Deep Blue Background and Image Card */}
        <header className="bg-blue-900 text-white py-16 px-4 md:px-8 relative overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block md:inline">Excel & AI Agent Bootcamp</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-medium text-blue-100">
                Get Certified with 2 days Live workshop
              </p>

              <div className="bg-gradient-to-r from-blue-300 to-white text-blue-900 py-4 px-8 rounded-full inline-block text-lg font-bold shadow-xl mb-8 animate-pulse mx-auto text-center">
                LIVE Session | 19th & 20th July | 6:30 – 7:30 PM IST
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl border border-white/20 mx-auto text-center">
                <p className="text-lg font-medium text-white mb-2">
                  No Recordings Will Be Provided | Limited Spots Available
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://i.ytimg.com/vi/PrfdCvEYqYA/maxresdefault.jpg"
                  alt="Excel & AI Bootcamp"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Registration Open Banner - Positive Color */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-6 px-4 text-center sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-2xl md:text-3xl font-bold">
              Registration Open - Limited Seats!
            </div>
            <a
              href="https://forms.gle/ZrbWaijfhbFGVKLF9"
              className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors shadow-md"
            >
              Register Now
            </a>
          </div>
        </section>

        <main className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-16">
          {/* What You Will Learn Section */}
          <section className="space-y-12">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
              What You Will Learn
            </h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
              From automation to AI agents — discover how these skills can elevate
              your daily tasks and career trajectory.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Excel Automation Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                  <h3 className="text-2xl font-bold">Excel Automation Mastery</h3>
                  <p className="text-blue-100 mt-2">Thursday, 19th June</p>
                </div>
                <div className="p-6">
                  <p className="text-lg font-medium text-gray-800 mb-4">
                    Master Excel Automation: Build Smart Reports with Python
                    Integration
                  </p>
                  <p className="text-gray-600 mb-6">
                    Learn how to integrate Python into Excel for powerful
                    automation that saves hours of manual work.
                  </p>
                  <div className="mb-6">
                    <p className="font-semibold text-blue-700 mb-3">
                      Tools Used:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        Excel
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        Python
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        Power Query
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span> Automate
                      dashboards and reports
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span> Create
                      reusable smart templates
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span> Eliminate
                      manual data tasks
                    </li>
                  </ul>
                </div>
              </div>

              {/* GenAI Agent Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-teal-600 to-green-600 p-6 text-white">
                  <h3 className="text-2xl font-bold">GenAI Agent in Action</h3>
                  <p className="text-teal-100 mt-2">Friday, 20th June</p>
                </div>
                <div className="p-6">
                  <p className="text-lg font-medium text-gray-800 mb-4">
                    Let Your AI Agent Find the Perfect Car: Match Budget, Style &
                    Comfort in Seconds
                  </p>
                  <p className="text-gray-600 mb-6">
                    Dive into the world of Generative AI by building a task-based
                    AI Agent that makes complex decisions simple.
                  </p>
                  <div className="mb-6">
                    <p className="font-semibold text-teal-700 mb-3">
                      Tools Used:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                        ChatGPT
                      </span>
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                        GenAI Workflows
                      </span>
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                        LangChain
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">✓</span> Build guided
                      decision-makers
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">✓</span> Master prompt
                      chaining techniques
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">✓</span> Explore real
                      business automation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Expert Instructors Section */}
          <section className="space-y-12">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
              Learn with Industry Experts
            </h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Get trained by professionals who have transformed businesses with AI
              and automation.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Eeshani Agrawal */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-6 flex flex-col md:flex-row items-center gap-6">
                  <Image
                    width={128}
                    height={128}
                    src={Eeshani}
                    alt="Eeshani Agrawal"
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-200 shadow-md"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      Eeshani Agrawal
                    </h3>
                    <p className="text-blue-700 font-semibold mb-3">
                      Data Storyteller | Excel & Power BI Specialist
                    </p>
                    <p className="text-gray-600">
                      Coached 9000+ professionals | Consulted 50+ Fortune 500
                      Companies
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        Data Analytics
                      </span>
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        Automation
                      </span>
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        Business Intelligence
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prateek Agrawal */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-6 flex flex-col md:flex-row items-center gap-6">
                  <Image
                    width={128}
                    height={128}
                    src={Pratik}
                    alt="Prateek Agrawal"
                    className="w-32 h-32 rounded-full object-cover border-4 border-teal-200 shadow-md"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      Prateek Agrawal
                    </h3>
                    <p className="text-teal-700 font-semibold mb-3">
                      Founder, Ivy Professional School | AI & Data Science Expert
                    </p>
                    <p className="text-gray-600">
                      Top 20 Data Science Academicians | Texas A&M University
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        AI Strategy
                      </span>
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        Data Science
                      </span>
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        Education
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="space-y-12" id="register">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
              Why Attend This Bootcamp?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Real-World Use Cases",
                  desc: "See how professionals automate reports and build AI agents for business decisions.",
                },
                {
                  title: "No Coding Needed",
                  desc: "Concepts explained step-by-step with live walkthroughs anyone can follow.",
                },
                {
                  title: "Free Certification",
                  desc: "Validate your skillset with a certificate to add to your resume.",
                },
                {
                  title: "Exclusive Access",
                  desc: "No recordings available - learn it live or miss it.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Who Should Attend */}
          <section className="space-y-12">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
              Who Should Attend?
            </h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-8">
              This bootcamp is perfect for professionals across all business
              functions:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Data & Finance Professionals",
                "Operations & HR Teams",
                "Sales & Marketing Experts",
                "Entrepreneurs & Founders",
                "Aspiring Data Analysts",
                "AI Enthusiasts",
                "Educators & Trainers",
                "Students & Researchers",
              ].map((role, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200 shadow-sm text-center"
                >
                  <p className="font-medium text-gray-800">{role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="space-y-12">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
              Success Stories
            </h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-8">
              Hear what past attendees have achieved:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100 shadow-md">
                <div className="flex items-center mb-4">
                  <div>
                    <p className="italic text-gray-800 text-lg">
                      "Within a week, I automated my entire sales reporting using
                      Python in Excel!"
                    </p>
                    <p className="font-semibold text-right text-blue-700 mt-4">
                      — Ritika, MIS Executive
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-xl border border-teal-100 shadow-md">
                <div className="flex items-center mb-4">
                  <div>
                    <p className="italic text-gray-800 text-lg">
                      "The AI Agent demo blew my mind! I implemented a similar
                      solution for our client proposals."
                    </p>
                    <p className="font-semibold text-right text-teal-700 mt-4">
                      — Karthik, MBA Student
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="space-y-12">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
              Why Ivy Professional School?
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "17+", label: "Years of Excellence" },
                { value: "33,500+", label: "Alumni Network" },
                { value: "400+", label: "Expert Educators" },
                { value: "280+", label: "Partner Companies" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100"
                >
                  <p className="text-4xl font-extrabold text-blue-700 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-lg text-gray-700">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Registration Form Section */}
          {/* <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl p-8 md:p-12 shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Ready to Transform Your Skills?
              </h2>
              <p className="text-xl text-center mb-8 text-blue-100">
                Register now for the Excel & AI Agent Bootcamp
              </p>

              <form className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="profession" className="block mb-2 font-medium">
                    Profession
                  </label>
                  <select
                    id="profession"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white text-white"
                  >
                    <option value="">Select your profession</option>
                    <option value="data">Data Professional</option>
                    <option value="finance">Finance</option>
                    <option value="marketing">Marketing</option>
                    <option value="hr">HR</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-700 hover:bg-gray-100 font-bold py-4 px-6 rounded-lg transition-colors shadow-lg text-lg"
                  >
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </section> */}
        </main>

        {/* Footer */}
      
      </div>
      <Footer />

    </>




  );
};

export default BootcampRegister;

