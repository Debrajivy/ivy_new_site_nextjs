"use client";
import React, { useState, useEffect } from "react";
import { MessageCircle, X, ChevronRight } from "lucide-react";

const WHATSAPP_NUMBER = "919748441111";

const ctaOptions = [
  {
    label: "Ask about placements",
    emoji: "🎓",
    getMessage: (course: string) =>
      course
        ? `Hi! I'd like to know about placements for the *${course}* at Ivy Professional School.`
        : "Hi! I'd like to know about placements at Ivy Professional School.",
  },
  {
    label: "Talk to a counselor",
    emoji: "🧑‍💼",
    getMessage: (course: string) =>
      course
        ? `Hi! I'd like to talk to a counselor about the *${course}* at Ivy Professional School.`
        : "Hi! I'd like to talk to a counselor about courses at Ivy Professional School.",
  },
  {
    label: "Check eligibility in 2 mins",
    emoji: "💬",
    getMessage: (course: string) =>
      course
        ? `Hi! I'd like to check my eligibility for the *${course}* at Ivy Professional School.`
        : "Hi! I'd like to check my eligibility for courses at Ivy Professional School.",
  },
];

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    // Read course name set by CourseHero via window.__courseName
    const sync = () => {
      if (typeof window !== "undefined" && (window as any).__courseName) {
        setCourseName((window as any).__courseName);
      }
    };
    sync();
    window.addEventListener("courseNameSet", sync);

    // Hide pulse after 5s
    const timer = setTimeout(() => setShowPulse(false), 5000);

    return () => {
      window.removeEventListener("courseNameSet", sync);
      clearTimeout(timer);
    };
  }, []);

  const handleCTA = (getMessage: (course: string) => string) => {
    const message = encodeURIComponent(getMessage(courseName));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* Expandable panel */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-72 overflow-hidden">
          {/* Header */}
          <div className="bg-[#25D366] px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm leading-tight">Ivy Pro School</p>
              <p className="text-xs text-green-100">● Typically replies in minutes</p>
            </div>
          </div>

          {/* Body */}
          <div className="p-4">
            {courseName && (
              <div className="mb-3 bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                <p className="text-xs text-gray-500">
                  Course:{" "}
                  <span className="font-semibold text-gray-700">{courseName}</span>
                </p>
              </div>
            )}

            <p className="text-xs text-gray-500 mb-3">How can we help you today?</p>

            <div className="flex flex-col gap-2">
              {ctaOptions.map((option) => (
                <button
                  key={option.label}
                  onClick={() => handleCTA(option.getMessage)}
                  className="flex items-center justify-between w-full text-left px-4 py-3 rounded-xl bg-gray-50 hover:bg-[#25D366]/10 border border-transparent hover:border-[#25D366]/30 transition-all group"
                >
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#128C7E]">
                    {option.emoji} {option.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#25D366] shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <div className="relative">
        {/* Pulse ring */}
        {showPulse && !isOpen && (
          <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-40" />
        )}
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
            setShowPulse(false);
          }}
          className={`relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 ${
            isOpen ? "bg-gray-700 rotate-0" : "bg-[#25D366]"
          }`}
          aria-label={isOpen ? "Close chat" : "Chat with us on WhatsApp"}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white" />
          )}
        </button>
      </div>
    </div>
  );
}
