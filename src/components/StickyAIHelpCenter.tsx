// src/components/common/StickyAIHelpCenter.tsx
"use client";
import React, { useEffect } from 'react';
import { MessageSquareText } from 'lucide-react';

// --- Configuration ---
const PRIMARY_COLOR = '#6366F1'; 
const PRIMARY_COLOR_HOVER = '#4F46E5';
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
  const helpCenterPath = "/AIHelpCenter"; 

  return (
    <div className="fixed bottom-4 right-4 z-50" >
      <a 
        href={helpCenterPath} 
        style={{ 
          backgroundColor: PRIMARY_COLOR,
          boxShadow: `0 8px 15px -4px ${PRIMARY_COLOR}60`,
          padding:8
        }}
        className={`
          text-white 
          ${BUTTON_SIZE_MOBILE} ${BUTTON_SIZE_DESKTOP} // Responsive sizes
          rounded-full sm:rounded-3xl // Round on mobile, pill/oblong on desktop
          flex items-center justify-center sm:justify-start // Center on mobile, align left on desktop
          py-2 px-4 // Consistent padding for desktop text
          transition-all duration-300 ease-in-out
          cursor-pointer
          overflow-hidden
          
          hover:scale-[1.05] 
          hover:bg-[${PRIMARY_COLOR_HOVER}]
          
          relative 
          group 
          blink-animation
        `}

      >
        {/* Lucide Icon: Always visible */}
        <MessageSquareText 
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
        style={{marginLeft:5}}
        >
          AI Help Center
        </span>
      </a>
    </div>
  );
};

export default StickyAIHelpCenter;