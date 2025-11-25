// src/components/common/StickyAICareerAssessment.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { Briefcase, Zap, ChevronUp, ChevronDown, MessageSquareText } from 'lucide-react';

// --- Configuration ---
// NEW LIGHT, PROFESSIONAL SKY BLUE
// PRIMARY_COLOR is no longer used for the background, but kept for text/shadow
const PRIMARY_COLOR_FALLBACK = '#c4d283'; // Fallback color (top of gradient)
const TEXT_COLOR = '#FFFFFF';           // White text for high contrast

// Gradient Colors
const GRADIENT_START_COLOR = '#c4d283';
const GRADIENT_END_COLOR = '#7aa0b3';
const PRIMARY_COLOR_HOVER = '#d4972c'; // Keeping the original darker hover color for consistency (you may want to adjust this for the new palette)

// Vertical Bar Dimensions
const BAR_HEIGHT = 'h-40';
const BAR_WIDTH = 'w-16';
const ICON_SIZE = 24;

interface StickyAICareerAssessmentProps {
    // ... (interface remains the same)
    onToggleAIAdvisor: (isOpen: boolean) => void;
    isAIAdvisorOpen: boolean;
}

const StickyAICareerAssessment: React.FC<StickyAICareerAssessmentProps> = ({
    onToggleAIAdvisor,
    isAIAdvisorOpen
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // ... (useEffect for blink-animation-left keyframes remains here)
    useEffect(() => {
        if (document.getElementById('blink-animation-style-left')) return;

        const style = document.createElement('style');
        style.id = 'blink-animation-style-left';
        style.innerHTML = `
            @keyframes blink-keyframe-left {
                0%, 100% { 
                    opacity: 1; 
                    transform: scale(1);
                }
                50% { 
                    opacity: 0.8; 
                    transform: scale(0.98); 
                }
            }

            .blink-animation-left {
                animation: blink-keyframe-left 2.5s ease-in-out infinite; 
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.getElementById('blink-animation-style-left')?.remove();
        };
    }, []);


    // Toggle the main menu
    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            onToggleAIAdvisor(false);
        }
    };

    // Toggle the AI Advisor component and scroll to it
    const handleToggleAdvisor = () => {
        const newState = !isAIAdvisorOpen;
        onToggleAIAdvisor(newState);
        setIsMenuOpen(false);

        if (newState) {
            setTimeout(() => {
                document.getElementById('ai-advisor-section')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    };

    const careerAssessmentPath = "#call-to-action-section";

    return (
        <div className="fixed top-1/2 left-0 z-50 transform -translate-y-1/2">

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-1/2 left-full ml-1 w-72 bg-white rounded-xl shadow-2xl overflow-hidden ring-1 ring-gray-200 transform -translate-y-1/2">
                    {/* AI Career Coach Item (Toggle) */}
                    <button
                        onClick={handleToggleAdvisor}
                        className="flex items-center w-full p-4 text-left text-gray-800 hover:bg-gray-50 transition duration-150 ease-in-out border-b border-gray-100"
                    >
                        {/* Swapping icon for a more distinct AI-related one, like Robot */}
                        <Briefcase size={20} className="text-blue-500 mr-3 flex-shrink-0" />
                        <div>
                            <p className="font-semibold">AI Career Advisor</p>
                            <p className="text-xs text-gray-500">Instant career guidance and advice</p>
                        </div>
                        {isAIAdvisorOpen ? (
                            <ChevronUp size={16} className="ml-auto text-gray-400" />
                        ) : (
                            <ChevronDown size={16} className="ml-auto text-gray-400" />
                        )}
                    </button>

                    {/* Career Assessment Item (Link) */}
                    <a
                        href={careerAssessmentPath}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center w-full p-4 text-left text-gray-800 hover:bg-gray-50 transition duration-150 ease-in-out"
                    >
                        <Zap size={20} className="text-yellow-500 mr-3 flex-shrink-0" />
                        <div>
                            <p className="font-semibold">Course Advisor</p>
                            <p className="text-xs text-gray-500">Find your perfect career path</p>
                        </div>
                    </a>
                </div>
            )}

            {/* Main Sticky Button - Vertical Tab */}
            <button
                onClick={handleToggleMenu}
                style={{
                    // --- GRADIENT STYLE APPLIED HERE ---
                    background: `linear-gradient(180deg, ${GRADIENT_START_COLOR}, ${GRADIENT_END_COLOR})`,
                    boxShadow: `0 8px 15px -4px #00000040`, // Using a standard shadow for better contrast
                    color: TEXT_COLOR // White text color
                }}
                className={`
                    ${BAR_WIDTH} ${BAR_HEIGHT}
                    rounded-r-xl
                    flex flex-col items-center justify-center
                    py-2 px-1 
                    transition-all duration-300 ease-in-out
                    cursor-pointer
                    overflow-hidden
                    hover:scale-x-[1.05]
                    /* Removed hover:bg-[${PRIMARY_COLOR_HOVER}] as a gradient is used */
                    relative 
                    group 
                    blink-animation-left
                `}
            >
                {/* Icon */}
                <Briefcase
                    size={ICON_SIZE}
                    className="flex-shrink-0 mb-1"
                />

                {/* Text Label: Reduced font size for tighter fit */}
                <div className="
                    text-center 
                    text-[10px] font-semibold // text-[10px] is smaller than text-xs (12px)
                    whitespace-normal leading-tight
                    mt-1 
                "
                    style={{ lineHeight: '1.1' }}
                >
                    <span>  AI Career and Course Advisor </span><br />
                    {/* <span>Course Advisor</span> */}
                </div>

                {/* Dropdown Chevron */}
                {isMenuOpen ? (
                    <ChevronDown size={ICON_SIZE / 2} className="mt-2" />
                ) : (
                    <ChevronUp size={ICON_SIZE / 2} className="mt-2" />
                )}
            </button>
        </div>
    );
};

export default StickyAICareerAssessment;