// src/components/common/StickyAICareerAssessment.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { Briefcase, Zap, ChevronUp, ChevronDown, EyeOff } from 'lucide-react';

// --- Configuration ---
const PRIMARY_COLOR_FALLBACK = '#c4d283';
const TEXT_COLOR = '#FFFFFF';

// Gradient Colors
const GRADIENT_START_COLOR = '#c4d283';
const GRADIENT_END_COLOR = '#7aa0b3';
const PRIMARY_COLOR_HOVER = '#d4972c';

// Vertical Bar Dimensions
const BAR_HEIGHT = 'h-40';
const BAR_WIDTH = 'w-16';
const ICON_SIZE = 24;

interface StickyAICareerAssessmentProps {
    onToggleAIAdvisor: (isOpen: boolean) => void;
    isAIAdvisorOpen: boolean;
}

const StickyAICareerAssessment: React.FC<StickyAICareerAssessmentProps> = ({
    onToggleAIAdvisor,
    isAIAdvisorOpen
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    // Detect mobile screen
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    // Blink animation effect
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

    // Handle hide button
    const handleHide = () => {
        setIsHidden(true);
        setIsMenuOpen(false);
    };

    // Handle show button (when hidden)
    const handleShow = () => {
        setIsHidden(false);
    };

    const careerAssessmentPath = "#call-to-action-section";

    // If hidden on mobile, show a small show button
    if (isMobile && isHidden) {
        return (
            <div className="fixed bottom-4 left-0 z-50">
                <button
                    onClick={handleShow}
                    style={{
                        background: `linear-gradient(180deg, ${GRADIENT_START_COLOR}, ${GRADIENT_END_COLOR})`,
                        color: TEXT_COLOR
                    }}
                    className="w-12 h-12 rounded-r-xl flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200"
                >
                    <Briefcase size={20} />
                    <span className="text-[8px] mt-1 font-semibold">Show</span>
                </button>
            </div>
        );
    }

    return (
        <div className="fixed bottom-4 left-0 z-50">

            {/* Dropdown Menu for Desktop */}
            {isMenuOpen && !isMobile && (
                <div className="absolute bottom-1/2 left-full ml-1 w-72 bg-white rounded-xl shadow-2xl overflow-hidden ring-1 ring-gray-200 transform translate-y-1/2">
                    {/* AI Career Coach Item (Toggle) */}
                    <button
                        onClick={handleToggleAdvisor}
                        className="flex items-center w-full p-4 text-left text-gray-800 hover:bg-gray-50 transition duration-150 ease-in-out border-b border-gray-100"
                    >
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

            {/* Expanded Menu for Mobile - Shows options directly below the button */}
            {isMenuOpen && isMobile && (
                <div className="absolute bottom-full left-0 mb-1 w-16 bg-white rounded-t-xl shadow-2xl overflow-hidden ring-1 ring-gray-200">
                    {/* AI Career Coach Item */}
                    <button
                        onClick={handleToggleAdvisor}
                        className="flex flex-col items-center justify-center w-full p-3 text-center text-gray-800 hover:bg-gray-50 transition duration-150 ease-in-out border-b border-gray-100"
                    >
                        <Briefcase size={20} className="text-blue-500 mb-1" />
                        <span className="text-[10px] font-semibold leading-tight">AI Career</span>
                    </button>

                    {/* Course Advisor Item */}
                    <a
                        href={careerAssessmentPath}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex flex-col items-center justify-center w-full p-3 text-center text-gray-800 hover:bg-gray-50 transition duration-150 ease-in-out border-b border-gray-100"
                    >
                        <Zap size={20} className="text-yellow-500 mb-1" />
                        <span className="text-[10px] font-semibold leading-tight">Course Advisor</span>
                    </a>

                    {/* Hide/Squeeze Option - Only on Mobile */}
                    <button
                        onClick={handleHide}
                        className="flex flex-col items-center justify-center w-full p-3 text-center text-gray-800 hover:bg-gray-50 transition duration-150 ease-in-out"
                    >
                        <EyeOff size={20} className="text-gray-500 mb-1" />
                        <span className="text-[10px] font-semibold leading-tight">Hide</span>
                    </button>
                </div>
            )}

            {/* Main Sticky Button - Vertical Tab */}
            <button
                onClick={handleToggleMenu}
                style={{
                    background: `linear-gradient(180deg, ${GRADIENT_START_COLOR}, ${GRADIENT_END_COLOR})`,
                    boxShadow: `0 8px 15px -4px #00000040`,
                    color: TEXT_COLOR
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

                {/* Text Label */}
                <div className="
                    text-center 
                    text-[10px] font-semibold
                    whitespace-normal leading-tight
                    mt-1 
                "
                    style={{ lineHeight: '1.1' }}
                >
                    <span>AI Career and Course Advisor</span>
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