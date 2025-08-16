import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CalendarCheck, Sparkles } from 'lucide-react';
import AssessmentModal from './AssessmentModal'; // Import the new AssessmentModal

const CallToAction: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false); // State for assessment modal

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      window.location.href = "tel:7676882222";
    } else {
      setShowNumber(true);
      const timer = setTimeout(() => {
        setShowNumber(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  };

  return (
    <section className="py-16 bg-[#013a81] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
              <Sparkles size={16} className="mr-2" />
              Limited-time offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Ready to Accelerate Your <br />Data Science Career?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join our next cohort and transform your professional trajectory with
              expert-led live sessions and hands-on projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/categories">
                  Explore Courses
                </Link>
              </Button>
              {/* <Button size="lg" variant="outline" className="bg-white/10" onClick={handleClick}>
                <CalendarCheck className="mr-2 h-4 w-4" />
                Schedule Free Consultation
              </Button> */}
            </div>
            {showNumber && !isMobile && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-50 animate-fade-in">
                <div className="text-center">
                  <p className="text-gray-700 font-medium">Call us at:</p>
                  <a href="tel:7676882222" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
                    7676882222
                  </a>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
              </div>
            )}
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Get a Personalized Learning Plan</h3>
            <div className="space-y-6">
              <div className="bg-white/10 p-4 rounded-lg flex gap-4">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Take the AI Skill Assessment</h4>
                  <p className="text-sm text-white/70">Identify your strengths and areas for improvement</p>
                </div>
              </div>

              <div className="bg-white/10 p-4 rounded-lg flex gap-4">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Get Custom Course Recommendations</h4>
                  <p className="text-sm text-white/70">Tailored to your career goals and current skill level</p>
                </div>
              </div>

              <div className="bg-white/10 p-4 rounded-lg flex gap-4">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Join a Learning Cohort</h4>
                  <p className="text-sm text-white/70">Learn alongside peers with similar goals and interests</p>
                </div>
              </div>
            </div>

            {/* This button now opens the AssessmentModal */}
            <Button className="w-full mt-8" size="lg" onClick={() => setIsAssessmentModalOpen(true)}>
              Start Assessment
            </Button>
          </div>
        </div>
      </div>

      {/* Render the Assessment Modal */}
      <AssessmentModal
        isOpen={isAssessmentModalOpen}
        onClose={() => setIsAssessmentModalOpen(false)}
      />
    </section>
  );
};

export default CallToAction;
