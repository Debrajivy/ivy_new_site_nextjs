"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Bot, Sparkles, LineChart, Search, BookOpen, Zap } from 'lucide-react';

const AIFeatures = () => {
  // Define the gradient style once to reuse it for the section and buttons
  const gradientBackgroundStyle = {
    background: 'linear-gradient(to right, #CF5106, #CB2E3F, #8912DC)', // Orange to Red-Purple to Deep Purple
    textShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)' // Text shadow for better readability
  };

  return (
    <section
      className="py-16 text-white"
      style={gradientBackgroundStyle} // Apply the gradient to the section
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
            <Sparkles size={16} className="mr-2" />
            AI-Powered Learning
          </div>
          {/* Updated Main Heading */}
          <h2 className="text-3xl font-bold mb-4">
            Introducing{" "}
            <a
              href="https://prepai.ivyproschool.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] hover:underline "
            >
              PrepAI
            </a>
            – Your AI-Powered Career Copilot
          </h2>
          {/* Updated Subheading */}
          <p className="text-white/80 max-w-3xl mx-auto">
            PrepAI, powered by Ivy Pro School, that provides role-based diagnosis, detailed feedback, lesson plans, AI interviews, an AI career coach, and connections with real recruiters—all in one place.          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
            <div className="p-3 rounded-full bg-white/20 inline-block mb-4">
              <Bot className="h-6 w-6 text-white" />
            </div>
            {/* Updated Feature Heading */}
            <h3 className="text-xl font-bold mb-2">ATS-Optimized Job Resumes</h3>
            {/* Updated Feature Description */}
            <p className="text-white/80 mb-4">
              Build job-ready resumes with PrepAI that boost your shortlist chances.
            </p>
            <a href="https://prepai.ivyproschool.com/ai/resume" target="_blank" rel="noopener noreferrer">
              <Button
                variant="secondary"
                className="text-white"
                style={gradientBackgroundStyle}
              >
                Create Resume
              </Button>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
            <div className="p-3 rounded-full bg-white/20 inline-block mb-4">
              <Sparkles className="h-6 w-6 text-white" />            </div>
            {/* Updated Feature Heading */}
            <h3 className="text-xl font-bold mb-2">Live Mock Interviews</h3>
            {/* Updated Feature Description */}
            <p className="text-white/80 mb-4">
              {/* Take a quick quiz and see what skills you need to crack your dream role. */}
              Practice with Live interviewer and get instant feedback to improve your answers.

            </p>
            <a href="https://prepai.ivyproschool.com/ai/interview" target="_blank" rel="noopener noreferrer">
              <Button
                variant="secondary"
                className="text-white"
                style={gradientBackgroundStyle}
              >
                Start Interview
              </Button>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
            <div className="p-3 rounded-full bg-white/20 inline-block mb-4">
              <Search className="h-6 w-6 text-white" />
            </div>
            {/* Updated Feature Heading */}
            <h3 className="text-xl font-bold mb-2">Find Real Recruiters</h3>
            {/* Updated Feature Description */}
            <p className="text-white/80 mb-4">
              {/* Get a plan to learn only what matters, based on your quiz and goal. */}
              Match with hiring managers based on your resume and skill set.
            </p>
            <a href="https://prepai.ivyproschool.com/ai/hiring-search" target="_blank" rel="noopener noreferrer">
              <Button
                variant="secondary"
                className="text-white"
                style={gradientBackgroundStyle}
              >
                Find Recruiters              </Button>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
            <div className="p-3 rounded-full bg-white/20 inline-block mb-4">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            {/* Updated Feature Heading */}
            <h3 className="text-xl font-bold mb-2">Speak with Recruiter</h3>
            {/* Updated Feature Description */}
            <p className="text-white/80 mb-4">

              Chat directly with Fortune 500 recruiters about jobs, interviews, and more            </p>
            <a href="https://prepai.ivyproschool.com/ai/interview/speak-with-recruiters" target="_blank" rel="noopener noreferrer">
              <Button
                variant="secondary"
                className="text-white"
                style={gradientBackgroundStyle}
              >
                Talk to Recruiter
              </Button>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
            <div className="p-3 rounded-full bg-white/20 inline-block mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            {/* Updated Feature Heading */}
            <h3 className="text-xl font-bold mb-2">AI Career Coach</h3>
            {/* Updated Feature Description */}
            <p className="text-white/80 mb-4">
              Get tailored career coaching and growth tips from your personalized coach.           </p>
            <a href="https://prepai.ivyproschool.com/ai/interview/ai-career-coach" target="_blank" rel="noopener noreferrer">
              <Button
                variant="secondary"
                className="text-white"
                style={gradientBackgroundStyle}
              >
                Get Advice
              </Button>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
            <div className="p-3 rounded-full bg-white/20 inline-block mb-4">
              {/* <Sparkles className="h-6 w-6 text-white" /> */}
              <LineChart className="h-6 w-6 text-white" />

            </div>
            {/* Updated Feature Heading */}
            <h3 className="text-xl font-bold mb-2">Identify Skill Gaps</h3>
            {/* Updated Feature Description */}
            <p className="text-white/80 mb-4">
              {/* Match with hiring managers based on your resume and skill set. */}
              Generate MCQs, test yourself, and track your progress in real time.
            </p>
            <a href="https://prepai.ivyproschool.com/ai/quiz" target="_blank" rel="noopener noreferrer">
              <Button
                variant="secondary"
                className="text-white"
                style={gradientBackgroundStyle}
              >
                Take a Test
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
