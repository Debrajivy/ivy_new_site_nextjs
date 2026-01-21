// src/components/common/StickyAIHelpCenter.tsx
"use client";
import React, { useEffect } from 'react';
import { Bot } from 'lucide-react';

// --- Configuration ---
// Removed PRIMARY_COLOR as it's replaced by the gradient
const GRADIENT_START_COLOR = '#c4d283'; // Top color
const GRADIENT_END_COLOR = '#7aa0b3';   // Bottom color
const TEXT_COLOR = '#FFFFFF';           // White text for high contrast on the new gradient

// Mobile: Standard FAB size (56px x 56px) - ICON ONLY
const BUTTON_SIZE_MOBILE = 'w-14 h-14';
// Desktop: WIDER pill/oblong shape (e.g., 140px wide x 56px tall) - ICON + TEXT
const BUTTON_SIZE_DESKTOP = 'sm:w-36 sm:h-14'; // Note: h-14 is 56px
const ICON_SIZE = 24; // Constant size for icon on both mobile/desktop

const StickyAIHelpCenter: React.FC = () => {
  // Inject the custom blink keyframes
  useEffect(() => {
    if (document.getElementById('blink-animation-style')) return;

    const style = document.createElement('style');
    style.id = 'blink-animation-style';
    style.innerHTML = `
      @keyframes blink-keyframe {
        0%, 100% { 
          opacity: 1; 
          transform: scale(1);
        }
        50% { 
          opacity: 0.7; 
          transform: scale(0.98); 
        }
      }

      .blink-animation {
        animation: blink-keyframe 2s ease-in-out infinite; 
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.getElementById('blink-animation-style')?.remove();
    };
  }, []);
  const helpCenterPath = "/aihelpcenter";

  return (
    <div className="fixed bottom-4 right-4 z-50" >
      <a
        href={helpCenterPath}
        style={{
          // --- GRADIENT STYLE APPLIED HERE ---
          background: `linear-gradient(180deg, ${GRADIENT_START_COLOR}, ${GRADIENT_END_COLOR})`,
          color: TEXT_COLOR, // Set text color to white
          boxShadow: `0 8px 15px -4px #00000040`, // Generic shadow for better contrast on the new colors
          padding: 8
        }}
        className={`
          ${BUTTON_SIZE_MOBILE} ${BUTTON_SIZE_DESKTOP} // Responsive sizes
          rounded-full sm:rounded-3xl // Round on mobile, pill/oblong on desktop
          flex items-center justify-center sm:justify-start // Center on mobile, align left on desktop
          py-2 px-4 // Consistent padding for desktop text
          transition-all duration-300 ease-in-out
          cursor-pointer
          overflow-hidden
          
          hover:scale-[1.05] 
          /* Removed hover:bg for PRIMARY_COLOR_HOVER as the gradient is used, and Tailwind hover can't easily modify background property set by style prop */
          
          relative 
          group 
          blink-animation
        `}

      >
        {/* Lucide Icon: Always visible */}
        <Bot
          size={ICON_SIZE}
          className="flex-shrink-0" // Prevents icon from shrinking
        />

        {/* Text Label: Hidden on mobile, visible on desktop */}
        <span className="
          hidden sm:block // Hide text on mobile
          text-sm font-semibold ml-2 // Add margin left for spacing
          whitespace-nowrap leading-none 
          opacity-100 
        "
          style={{ marginLeft: 5 }}
        >
          AI Help Center
        </span>
      </a>
    </div>
  );
};

export default StickyAIHelpCenter;