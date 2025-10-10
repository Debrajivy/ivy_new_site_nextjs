"use client";
import React, { useMemo } from 'react';
import { Bell, Sparkles, TrendingUp, Cpu, Cloud } from 'lucide-react';

/**
 * Announcement Marquee Component
 * * This component creates a continuously scrolling notification bar
 * using React, Tailwind CSS, and a custom CSS keyframe animation.
 * The content is dynamically generated from an array of announcements
 * and is duplicated to ensure a seamless looping effect.
 */

// Define the announcements based on modern courses for a school like Ivy Pro School
const ANNOUNCEMENTS = [
  {
    icon: Sparkles,
    text: "HOT COURSES NOW: AI for Product Managerss & Generative AI - Enroll Today!",
    color: "text-amber-300"
  },
  {
    icon: Bell,
    text: "Upcoming Bootcamp: Next Data Science & ML Bootcamp starts November 15th! Limited seats remaining.",
    color: "text-white"
  },
  {
    icon: TrendingUp,
    text: "New Trending AI Help Center is now LIVE to support your learning journey.",
    color: "text-green-300"
  },
  {
    icon: Cloud,
    text: "To see our upcoming contests, join us or call our helpline today!",
    color: "text-blue-300"
  },
 
];
// Helper component for a single announcement item
type AnnouncementItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  color: string;
};

const AnnouncementItem: React.FC<AnnouncementItemProps> = ({ icon: Icon, text, color }) => (
  // Reduced vertical padding (py-2 -> py-1)
  <div className="flex items-center space-x-3 mx-8 py-1 md:mx-12 lg:mx-16">
    {/* Reduced icon size (w-5 h-5 -> w-4 h-4) */}
    <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
    {/* Reduced text size (text-sm -> text-xs) */}
    <span className={`text-xs font-semibold tracking-wider uppercase ${color} transition-colors duration-8000 hover:text-white`}>
      {text}
    </span>
    {/* Separator size adjusted for smaller text */}
    <span className="text-gray-400 text-base mx-2">•</span>
  </div>
);

// Main component
const Notifications = () => {
  // We duplicate the announcements a few times to ensure the marquee content is long enough for smooth looping
  const duplicatedAnnouncements = useMemo(() => {
    return [
      ...ANNOUNCEMENTS,
      ...ANNOUNCEMENTS,
      ...ANNOUNCEMENTS,
      ...ANNOUNCEMENTS,
    ];
  }, []);

  return (
    <div className="w-full bg-[#013a81] shadow-xl overflow-hidden lg">
      {/* The style block defines the critical CSS animation. 
        We use translate3d for hardware acceleration and define the 
        keyframes to loop the content seamlessly.
      */}
      <style jsx global>{`
        /* Define the keyframe animation for continuous scrolling */
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0); /* Start at original position */
          }
          100% {
            /* Translate by -100% to ensure the content loops perfectly */
            transform: translate3d(-100%, 0, 0); 
          }
        }

        .marquee-content {
          /* Apply animation: marquee animation, duration increased to 180 seconds (3 minutes) for a very slow speed, linear timing, infinite loop */
          animation: marquee 180s linear infinite;
        }
      `}</style>
      
      <div className="marquee-container w-full py-0.5">
        {/* The inner container holds the content. We use flex and whitespace-nowrap 
          to force all items into a single, long line. 
        */}
        <div 
          className="marquee-content flex items-center h-full"
          style={{ width: 'max-content' }} // Ensures the content takes the full width of all items
        >
          {duplicatedAnnouncements.map((announcement, index) => (
            <AnnouncementItem 
              key={index}
              icon={announcement.icon}
              text={announcement.text}
              color={announcement.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Default export for Next.js page usage
export default Notifications;
