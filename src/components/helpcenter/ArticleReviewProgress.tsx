"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const REVIEW_URL =
  "https://www.google.com/search?q=ivy+professional+school&rlz=1C1ONGR_enIN1115IN1115&oq=&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7Mg0IARAuGK8BGMcBGIAEMgcIAhAAGIAEMhAIAxAuGIMBGLEDGIAEGOUEMgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYQTIGCAcQRRg80gEIMzA0N2owajeoAgiwAgHxBRMMy4WLy7978QUTMMy4WLy_ew&sourceid=chrome&ie=UTF-8#lrd=0x3a02771797fccdc1:0xca64261fceaf2af6,3,,,";

/**
 * Reading progress bar fixed to the top of the page, plus a review prompt
 * that appears once when the reader reaches the end of the article.
 */
export default function ArticleReviewProgress() {
  const [progress, setProgress] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);
  const [promptShown, setPromptShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100));
      setProgress(pct);
      if (pct >= 95 && !promptShown) {
        setShowPrompt(true);
        setPromptShown(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [promptShown]);

  const openReview = () => {
    window.open(REVIEW_URL, "_blank", "noopener,noreferrer");
    setShowPrompt(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200" aria-hidden="true">
        <div
          className="h-full transition-all duration-300"
          style={{ width: `${progress}%`, background: "linear-gradient(90deg, #1a98cb, #0b5394)" }}
        />
      </div>

      {showPrompt && (
        <div
          className="fixed top-16 sm:top-20 right-2 sm:right-4 md:right-6 z-50 max-w-xs sm:max-w-sm"
          role="dialog"
          aria-label="Review Ivy Professional School"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="h-8 sm:h-10 w-8 sm:w-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#1a98cb] to-[#0b5394]">
                <Star className="h-4 sm:h-6 w-4 sm:w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Found this guide useful?</h3>
                <p className="text-xs sm:text-sm text-gray-600">Share your feedback</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm">
              You&apos;ve read {Math.round(progress)}% of this guide. A short review of Ivy Professional School helps other learners decide.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={openReview}
                className="flex-1 text-white font-bold py-2 sm:py-3 rounded-lg sm:rounded-xl hover:opacity-90 transition-opacity text-sm bg-gradient-to-r from-[#1a98cb] to-[#0b5394]"
              >
                Write a Review
              </button>
              <button
                onClick={() => setShowPrompt(false)}
                className="px-3 sm:px-4 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
