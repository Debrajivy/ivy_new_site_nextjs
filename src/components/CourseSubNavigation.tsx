import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react'; // Removed Menu as it's no longer used for mobile sub-nav

const CourseSubNavigation = () => {
  const [isSubNavSticky, setIsSubNavSticky] = useState(false);
  const [showFixedPopup, setShowFixedPopup] = useState(false);
  const [canShowPopupAfterDelay, setCanShowPopupAfterDelay] = useState(false);
  const [hasPopupBeenDismissed, setHasPopupBeenDismissed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileNavItem, setActiveMobileNavItem] = useState(''); // New state for active mobile nav item

  const handleClick = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  // Full list of navigation items for desktop
  const navItems = [
    { name: 'Overview & Faculty', id: 'course-overview-section' },
    { name: 'Curriculum & Fees', id: 'course-curriculum-section' },
    { name: 'Projects', id: 'course-projects-section' },
    { name: 'Job Support & Certificates', id: 'course-jobsupport-section' },
    { name: 'Review', id: 'course-alumni-section' },
    { name: 'FAQ', id: 'course-faq-section' },
  ];

  // Filtered list for mobile, with single-word names
  const mobileNavItems = [
    { name: 'Curriculum & Fees', mobileName: 'Curriculum', id: 'course-curriculum-section' },
    { name: 'Projects', mobileName: 'Projects', id: 'course-projects-section' },
    { name: 'Job Support & Certificates', mobileName: 'Job Support', id: 'course-jobsupport-section' },
    { name: 'Review', mobileName: 'Review', id: 'course-alumni-section' },
  ];

  const NAVBAR_HEIGHT = 60;
  const SUBNAV_HEIGHT = 60;

  // Effect for handling the 15-second delay for the popup
  useEffect(() => {
    const timer = setTimeout(() => {
      setCanShowPopupAfterDelay(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  // Effect to set initial active item (e.g., if page loads with a hash in URL)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      // Find if the hash matches any mobile nav item ID
      const matchingItem = mobileNavItems.find(item => item.id === hash);
      if (matchingItem) {
        setActiveMobileNavItem(hash);
      }
    } else if (mobileNavItems.length > 0) {
      // If no hash, set the first mobile nav item as active by default
      setActiveMobileNavItem(mobileNavItems[0].id);
    }
  }, []); // Run once on component mount

  // Effect for handling scroll logic and popup visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 700;
      setIsSubNavSticky(window.scrollY > scrollThreshold);

      const popupThreshold = 300;

      if (
        canShowPopupAfterDelay &&
        window.scrollY > popupThreshold &&
        !showFixedPopup &&
        !hasPopupBeenDismissed
      ) {
        setShowFixedPopup(true);
      } else if (window.scrollY <= popupThreshold && showFixedPopup) {
        setShowFixedPopup(false);
      }

      // Logic to update activeMobileNavItem based on scroll position
      // This is a common pattern for "scrollspy"
      let currentActiveId = '';
      for (let i = mobileNavItems.length - 1; i >= 0; i--) {
        const item = mobileNavItems[i];
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider an item "active" if its top is within the viewport,
          // with a slight offset to account for sticky headers/padding
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActiveId = item.id;
            break;
          }
        }
      }
      setActiveMobileNavItem(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showFixedPopup, canShowPopupAfterDelay, hasPopupBeenDismissed, mobileNavItems]); // Add mobileNavItems to dependencies

  const handleClosePopup = () => {
    setShowFixedPopup(false);
    setHasPopupBeenDismissed(true);
  };

  const handleNavItemClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth < 1024 ? 0 : NAVBAR_HEIGHT + SUBNAV_HEIGHT + 20;

      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth',
      });
      // Set active item immediately on click for mobile nav
      if (window.innerWidth < 1024) {
        setActiveMobileNavItem(id);
      }
    }
  };

  return (
    <>
      {/* Desktop Sub-navigation (unchanged) */}
      <nav
        className={`w-full bg-[#006dd9] text-white py-3 shadow-md transition-all duration-300 z-40 ${
          isSubNavSticky ? 'fixed left-0 animate-slideDown' : 'relative'
        } hidden lg:block`}
        style={isSubNavSticky ? { top: `${NAVBAR_HEIGHT}px` } : {}}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavItemClick(item.id);
                }}
                className="hover:text-blue-200 font-medium transition-colors whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      {isSubNavSticky && (
        <nav className="fixed bottom-0 left-0 w-full bg-[#006dd9] text-white py-2 shadow-md z-50 lg:hidden animate-slideUp">
          <div className="container mx-auto px-4 flex justify-around items-center text-xs">
            {mobileNavItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavItemClick(item.id);
                }}
                // Apply active styles based on activeMobileNavItem state
                className={`flex flex-col items-center p-2 rounded-lg transition-colors
                  ${activeMobileNavItem === item.id ? 'bg-[#013a81] text-white shadow-lg' : 'hover:bg-[#013a81]'}`
                }
              >
                <span className="font-medium whitespace-nowrap">{item.mobileName}</span>
              </a>
            ))}
          </div>
        </nav>
      )}

      {/* Full-screen pop-up (Apply Now form) */}
      {isOpen ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} />
            <div className="relative z-10 w-full max-w-md">
              <div className="bg-white border border-gray-200 rounded-xl shadow-2xl p-6 transition-all duration-300">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Join Two Classes for <span style={{ color: '#1a98cb' }}>FREE</span>
                  </h2>
                  <p className="text-gray-600 mb-4" style={{ fontSize: 14 }}>
                    Learn with Experts & Industry Leaders from IIT & IIM
                  </p>
                </div>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your Name*"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your Email*"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Enter your phone*"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-400"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled className="text-gray-400">
                        Select your city*
                      </option>
                      <option value="Kolkata" className="text-gray-800">
                        Kolkata
                      </option>
                      <option value="Delhi" className="text-gray-800">
                        Delhi
                      </option>
                      <option value="Mumbai" className="text-gray-800">
                        Mumbai
                      </option>
                      <option value="Bangalore" className="text-gray-800">
                        Bangalore
                      </option>
                      <option value="Pune" className="text-gray-800">
                        Pune
                      </option>
                      <option value="Hyderabad" className="text-gray-800">
                        Hyderabad
                      </option>
                      <option value="Chennai" className="text-gray-800">
                        Chennai
                      </option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full py-3" style={{ backgroundColor: '#013a81' }}>
                    Apply Now
                  </Button>
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <p className="text-sm font-semibold text-center">
                      <span style={{ color: '#1a98cb' }}>Next batch starting in August &nbsp;</span>
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                      <span className="text-red-600">&nbsp;Limited seats left!</span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {/* Fixed Position Pop-up */}
      {showFixedPopup && (
        <div className="fixed bottom-4 right-4 bg-white p-6 rounded-lg shadow-xl z-50 max-w-sm w-full animate-slideUp">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={handleClosePopup}
          >
            <X size={20} />
          </Button>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Limited Time Offer!</h3>
          <p className="text-gray-700 mb-4">
            Don't miss out! Enroll now and get special discounts on our popular courses.
          </p>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleClick}>
            Enroll Now
          </Button>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default CourseSubNavigation;