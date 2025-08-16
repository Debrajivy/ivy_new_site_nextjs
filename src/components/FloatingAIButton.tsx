// src/components/FloatingAIButton.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { Bot } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const FloatingAIButton: React.FC = () => {
  return (
    // Link to the home page when the button is clicked
    <Link to="/">
      {/* Container for the button and text, positioned fixed */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center group">
        {/* Text that appears on hover, hidden on small screens by default */}
        <span className="
          bg-primary text-white text-sm px-3 py-2 rounded-lg shadow-lg
          mr-3 opacity-0 scale-95 transition-all duration-300 ease-in-out
          group-hover:opacity-100 group-hover:scale-100
          md:opacity-100 md:scale-100 md:relative md:mr-3 md:bg-transparent md:text-gray-700 md:shadow-none
          md:group-hover:text-primary md:font-semibold
        ">
          AI Advisor
        </span>
        <Button
          className="rounded-full w-14 h-14 flex items-center justify-center shadow-lg animate-bounce-slow"
          aria-label="Open AI Advisor"
        >
          <Bot className="h-7 w-7" />
        </Button>
      </div>
    </Link>
  );
};

export default FloatingAIButton;
