"use client";

import React, { useState, useEffect } from 'react';
import BootcampCar1 from "@/assests/BootcampCar1.webp";
import BootcampCar2 from "@/assests/BootcampCar2.webp";
import BootcampCar3 from "@/assests/BootcampCar3.webp";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { PlayCircle, CalendarDays, Clock, User, Users, Award } from 'lucide-react';
import Eeshani from "@/assests/eeshani.webp";
// Define interfaces for data structure
import type { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link"

interface BootcampEvent {
    id: string;
    banner: string | StaticImageData;
    name: string;
    date: string;
    time: string;
    mentoredBy?: string;
    attendees?: number;
    expired?: boolean;
    certificateProvided?: boolean;
    category: '' | '' | 'AI Agent' | 'Gen AI' | 'Automation' | 'SQL' | 'Python' | 'Other';
    outcomePoints?: string[];
    facultyProfilePic?: string | StaticImageData;
    facultyName?: string;
    facultyDesignation?: string;
    youtubeUrl?: string; // New field for YouTube URL
}

const App: React.FC = () => {
    const [currentSection, setCurrentSection] = useState<'Upcoming' | 'Past'>('Upcoming');
    const [pastBootcampCategoryFilter, setPastBootcampCategoryFilter] = useState('All');
    const [isPgaeOpen, setIsPageOpen] = useState(false);

    // Sample data for all bootcamps with YouTube URLs for past events
    const allBootcamps: BootcampEvent[] = [
        {
            id: 'u1',
            banner: BootcampCar1,
            name: '',
            date: '12th July, Sat',
            time: '06:30 PM - 07:30 PM',
            certificateProvided: false,
            expired: false,
            category: '',
            outcomePoints: [
                'Learn advanced targeting strategies',
                'Optimize ad creatives for higher conversions',
                'Understand Facebook Pixel implementation',
                'Scale your ad campaigns effectively',
            ],
            facultyProfilePic: Eeshani,
            facultyName: 'Eeshani Agrawal',
            facultyDesignation: 'Co Founder, Ivy Pro School',
        },
        {
            id: 'u2',
            banner: BootcampCar2,
            name: 'Social Media Marketing Automation',
            date: '20th July, Sun',
            time: '08:00 PM - 09:30 PM',
            certificateProvided: false,
            expired: false,
            category: '',
            outcomePoints: [
                'Automate social media posting',
                'Leverage AI for content creation',
                'Track performance with analytics tools',
                'Build a consistent brand presence',
            ],
            facultyProfilePic: 'https://placehold.co/100x100/33FF57/FFFFFF?text=FS',
            facultyName: 'Faculty Sarah Lee',
            facultyDesignation: 'Social Media Strategist',
        },
        // {
        //     id: 'u3',
        //     banner: BootcampCar3,
        //     name: 'Introduction to Generative AI',
        //     date: '25th July, Fri',
        //     time: '06:00 PM - 07:30 PM',
        //     certificateProvided: false,
        //     expired: false,
        //     category: 'Gen AI',
        //     outcomePoints: [
        //         'Understand the basics of Generative AI',
        //         'Explore different Gen AI models',
        //         'Learn to prompt effectively',
        //         'Identify real-world applications',
        //     ],
        //     facultyProfilePic: 'https://placehold.co/100x100/33A1FF/FFFFFF?text=FA',
        //     facultyName: 'Faculty Alex Kim',
        //     facultyDesignation: 'AI/ML Specialist',
        // },
        {
            id: 'p1',
            banner: 'https://img.youtube.com/vi/JDVCzgF6J64/maxresdefault.jpg', // YouTube thumbnail
            name: 'How to Create Dashboard for Employee Attendance using Power BI',
            date: '14th January, Tuesday',
            time: '6:00 - 7:00 PM',
            expired: true,
            attendees: 450,
            certificateProvided: true,
            category: '',
            youtubeUrl: 'https://www.youtube.com/watch?v=JDVCzgF6J64' // YouTube URL
        },

        {
            id: 'p2',
            banner: 'https://img.youtube.com/vi/J9p5uZMnPec/maxresdefault.jpg', // YouTube thumbnail
            name: 'How to Build a Smart Real Estate Assistant with Generative AI',
            date: '15th January, Wednesday',
            time: '6:00 - 7:00 PM',
            expired: true,
            attendees: 550,
            certificateProvided: true,
            category: 'Gen AI',
            youtubeUrl: 'https://www.youtube.com/watch?v=J9p5uZMnPec' // YouTube URL
        },

        {
            id: 'p3',
            banner: 'https://i.ytimg.com/vi/0NnsjUiWo7A/maxresdefault.jpg', // YouTube thumbnail
            name: 'Automating Customer Support & FAQs with AI on Telegram',
            date: '11th February, Tuesday',
            time: '7:00 - 8:00 PM',
            expired: true,
            attendees: 440,
            certificateProvided: true,
            category: 'Gen AI',
            youtubeUrl: 'https://www.youtube.com/live/0NnsjUiWo7A' // YouTube URL
        },

        {
            id: 'p4',
            banner: 'https://i.ytimg.com/vi/0NnsjUiWo7A/maxresdefault.jpg', // YouTube thumbnail
            name: 'Amazon Product Recommendation System using GenAI',
            date: '12th February, Wednesday',
            time: '7:00 - 8:00 PM',
            expired: true,
            attendees: 370,
            certificateProvided: true,
            category: 'Gen AI',
            youtubeUrl: 'https://www.youtube.com/watch?v=0NnsjUiWo7A' // YouTube URL
        },

        {
            id: 'p5',
            banner: 'https://img.youtube.com/vi/FkEQupUEvtM/maxresdefault.jpg', // YouTube thumbnail
            name: 'Using GenAI to Analyze IPL 2025 Auction Player Stats',
            date: '28th November 2024, Thursday',
            time: '6:00 - 7:00 PM',
            expired: true,
            attendees: 709,
            certificateProvided: true,
            category: 'AI Agent',
            youtubeUrl: 'https://www.youtube.com/watch?v=FkEQupUEvtM' // YouTube URL
        },

        {
            id: 'p6',
            banner: 'https://img.youtube.com/vi/f8Da8x8KNXE/maxresdefault.jpg', // YouTube thumbnail
            name: 'Build Your Own Tax Planner Bot with GenAI',
            date: '29th November, Friday',
            time: '6:00 - 7:00 PM',
            expired: true,
            attendees: 890,
            certificateProvided: true,
            category: 'Python',
            youtubeUrl: 'https://www.youtube.com/watch?v=f8Da8x8KNXE' // YouTube URL
        },

        {
            id: 'p7',
            banner: 'https://img.youtube.com/vi/nJPdv70xA0k/maxresdefault.jpg', // YouTube thumbnail
            name: 'Create a Christmas Gift Sales Dashboard in Power BI',
            date: '27th December, Friday',
            time: '5:30 - 6:30 PM',
            expired: true,
            attendees: 498,
            certificateProvided: true,
            category: 'AI Agent',
            youtubeUrl: 'https://www.youtube.com/watch?v=nJPdv70xA0k' // YouTube URL
        },

        {
            id: 'p8',
            banner: 'https://i.ytimg.com/vi/MaG7XIyyNxQ/maxresdefault.jpg', // YouTube thumbnail
            name: 'Build Insurance Planner with GenAI in Excel',
            date: '28th December, Saturday',
            time: '5:30 - 6:30 PM',
            expired: true,
            attendees: 467,
            certificateProvided: true,
            category: '',
            youtubeUrl: 'https://www.youtube.com/watch?v=MaG7XIyyNxQ' // YouTube URL
        },

        {
            id: 'p9',
            banner: 'https://img.youtube.com/vi/HcQHErC2Ek0/maxresdefault.jpg', // YouTube thumbnail
            name: 'Predict Heart Disease using Tableau',
            date: '22nd November 2024, Friday',
            time: '5:30 - 6:30 PM',
            expired: true,
            attendees: 402,
            certificateProvided: true,
            category: 'SQL',
            youtubeUrl: 'https://www.youtube.com/watch?v=HcQHErC2Ek0' // YouTube URL
        },

        {
            id: 'p10',
            banner: 'https://i.ytimg.com/vi/vkz7XGlCKMk/maxresdefault.jpg', // YouTube thumbnail
            name: 'Automate Personal Finances with GenAI',
            date: '23rd November, Saturday',
            time: '5:30 - 6:30 PM',
            expired: true,
            attendees: 500,
            certificateProvided: true,
            category: '',
            youtubeUrl: "https://www.youtube.com/watch?app=desktop&v=vkz7XGlCKMk"
        },

        {
            id: 'p11',
            banner: 'https://img.youtube.com/vi/ucVqABYBsuQ/maxresdefault.jpg', // YouTube thumbnail
            name: 'GenAI to Decode Blood Reports for Early Detection',
            date: '24th October, Thursday',
            time: '6:00 - 7:00 PM',
            expired: true,
            attendees: 391,
            certificateProvided: true,
            category: 'Python',
            youtubeUrl: 'https://www.youtube.com/watch?v=ucVqABYBsuQ' // YouTube URL
        },

        {
            id: 'p12',
            banner: 'https://i.ytimg.com/vi/c58FfFG0HuI/maxresdefault.jpg', // YouTube thumbnail
            name: 'How to build a Nutritionist GenAI Chatbot',
            date: '25th October, Friday',
            time: '6:00 - 7:00 PM',
            expired: true,
            attendees: 461,
            certificateProvided: true,
            category: 'Automation',
            youtubeUrl: 'https://www.youtube.com/watch?v=c58FfFG0HuI' // YouTube URL
        },
        {
            id: 'p13',
            banner: 'https://img.youtube.com/vi/YuXtQcApE5U/maxresdefault.jpg', // YouTube thumbnail
            name: 'Reducing Employee Attrition with GenAI in Excel',
            date: '27th August, Tuesday',
            time: '5:00 - 6:00 PM',
            expired: true,
            attendees: 309,
            certificateProvided: true,
            category: 'Automation',
            youtubeUrl: 'https://www.youtube.com/watch?v=YuXtQcApE5U' // YouTube URL
        },

        {
            id: 'p14',
            banner: 'https://img.youtube.com/vi/XoMiGRTBmQk/maxresdefault.jpg', // YouTube thumbnail
            name: 'Human Resource Analytics using Power BI',
            date: '28th August, Wednesday',
            time: '5:00 - 6:00 PM',
            expired: true,
            attendees: 294,
            certificateProvided: true,
            category: 'Python',
            youtubeUrl: 'https://www.youtube.com/watch?v=XoMiGRTBmQk' // YouTube URL
        },

        {
            id: 'p15',
            banner: 'https://img.youtube.com/vi/yYbU_Bihvdc/maxresdefault.jpg', // YouTube thumbnail
            name: 'Azure Data Factory: End-to-End ETL Pipeline',
            date: '30th July, Tuesday',
            time: '5:30 - 7:00 PM',
            expired: true,
            attendees: 684,
            certificateProvided: true,
            category: 'SQL',
            youtubeUrl: 'https://www.youtube.com/watch?v=yYbU_Bihvdc' // YouTube URL
        },

        {
            id: 'p16',
            banner: 'https://i.ytimg.com/vi/NDHPeQnRItw/maxresdefault.jpg', // YouTube thumbnail
            name: 'Power BI End-to-End project using AI for beginners',
            date: '31st July, Wednesday',
            time: '5:30 - 7:30 PM',
            expired: true,
            attendees: 600,
            certificateProvided: true,
            category: 'SQL',
            youtubeUrl: 'https://www.youtube.com/watch?v=NDHPeQnRItw&t=13s' // YouTube URL
        },

        {
            id: 'p17',
            banner: 'https://i.ytimg.com/vi/N-JsbgqBVIU/maxresdefault.jpg', // YouTube thumbnail
            name: 'Win Big in Fantasy Cricket AI powered IPL player insights & build your own team',
            date: '21st March, Friday',
            time: '6:00 - 7:00 PM',
            expired: true,
            attendees: 120,
            certificateProvided: true,
            category: 'Python',
            youtubeUrl: 'https://www.youtube.com/live/N-JsbgqBVIU' // YouTube URL
        }
    ];

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
    const upcomingBootcamps = allBootcamps.filter(event => !event.expired)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const pastBootcamps = allBootcamps.filter(event => event.expired);

    const nextUpcomingBootcamp = upcomingBootcamps.length > 0 ? upcomingBootcamps[0] : null;

    const getFilteredBootcamps = () => {
        if (currentSection === 'Upcoming') {
            return upcomingBootcamps;
        } else {
            if (pastBootcampCategoryFilter === 'All') {
                return pastBootcamps;
            } else {
                return pastBootcamps.filter(event => event.category === pastBootcampCategoryFilter);
            }
        }
    };

    const bootcampRegisterPageOpen = () => {
        setIsPageOpen(true);
    }
    // Function to handle Watch Now button click
    const handleWatchNow = (url: string) => {
        window.open(url, '_blank');
    };

    const BootcampCard: React.FC<{ event: BootcampEvent; isCarousel?: boolean }> = ({ event, isCarousel }) => (
        <div className={`
            bg-white rounded-xl shadow-lg overflow-hidden flex flex-col relative
            ${isCarousel ? 'w-96 h-52' : 'w-full md:w-[300px] lg:w-[320px] mx-auto'}
            transform transition-all duration-300 hover:scale-105
        `}>
            {/* "Certificate Provided" badge */}
            {event.certificateProvided && (
                <div className="absolute top-2 right-2 bg-gray-500 text-white text-xs px-2 py-1 rounded-full z-10 flex items-center">
                    {/* <Award className="w-3 h-3 mr-1" /> */}
                    Past Event
                </div>
            )}

            {/* Event banner image */}
            <img
                src={typeof event.banner === 'string' ? event.banner : event.banner.src}
                alt={event.name}
                className={`w-full ${isCarousel ? 'h-full ' : 'w-full '} `}
            />

            {/* Card content - only show if not in carousel */}
            {!isCarousel && (
                <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                        <h3 className="font-semibold text-lg mb-2 text-gray-800">{event.name}</h3>

                        {/* Date and Time */}
                        <div className="flex items-center text-gray-600 text-sm mb-1">
                            <CalendarDays className="w-4 h-4 mr-1" />
                            <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm mb-3">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{event.time}</span>
                        </div>

                        {/* Mentored by information */}
                        {event.mentoredBy && (
                            <div className="flex items-center text-gray-700 text-sm mb-3">
                                <User className="w-4 h-4 mr-1" />
                                <span>Mentored by: <span className="font-medium">{event.mentoredBy}</span></span>
                            </div>
                        )}
                    </div>

                    {/* Register Now button or Watch Now button for expired events */}
                    <div className="mt-4">
                        {event.expired ? (
                            event.youtubeUrl ? (
                                <button
                                    onClick={() => handleWatchNow(event.youtubeUrl!)}
                                    className="w-full bg-[#009fda] text-white py-2 px-4 rounded-lg hover:bg-[#124685] transition duration-300 shadow-md flex items-center justify-center"
                                >
                                    <PlayCircle className="w-5 h-5 mr-2" />
                                    Watch Now
                                </button>
                            ) : (
                                <p className="text-red-600 font-semibold text-center mb-2">Recording Not Available</p>
                            )
                        ) : (
                            // Corrected: Using <a> tag for navigation
                            <a
                                href='/bootcampregister' // Replace '/' with your actual registration page URL
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md flex items-center justify-center"
                            >
                                Register Now
                            </a>
                        )}

                        {event.attendees ? (
                            <>
                                <p className="w-full text-gray-500 text-sm mt-2 text-center flex items-center justify-center">
                                    <Users className="w-4 h-4 mr-1" />
                                    {event.attendees.toLocaleString()} participants
                                </p>
                            </>
                        ) : null}
                    </div>
                </div>
            )}
        </div>
    );

    const HeroSection: React.FC = () => {
        const [carouselIndex, setCarouselIndex] = useState(0);

        useEffect(() => {
            if (upcomingBootcamps.length < 3) return;

            const interval = setInterval(() => {
                setCarouselIndex((prev) => (prev + 1) % upcomingBootcamps.length);
            }, 3000);
            return () => clearInterval(interval);
        }, [upcomingBootcamps.length, carouselIndex]);

        const getCarouselCards = () => {
            if (upcomingBootcamps.length === 0) return [];
            if (upcomingBootcamps.length === 1) return [upcomingBootcamps[0]];
            if (upcomingBootcamps.length === 2) return [upcomingBootcamps[0], upcomingBootcamps[1]];

            const cards = [];
            cards.push(upcomingBootcamps[carouselIndex]);
            cards.push(upcomingBootcamps[(carouselIndex + 1) % upcomingBootcamps.length]);
            cards.push(upcomingBootcamps[(carouselIndex + 2) % upcomingBootcamps.length]);
            return cards;
        };

        const displayedCarouselCards = getCarouselCards();

        return (
            <>
                <Navbar />
                
                <section className="relative bg-gradient-to-br bg-[#013a81] text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden flex items-center justify-center min-h-[600px]">
                    {/* Animated Background Elements */}
                    
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <div className="absolute w-72 h-72 bg-blue-500 rounded-full opacity-10 -top-20 -left-20 animate-float-1 mix-blend-screen filter blur-xl"></div>
                        <div className="absolute w-96 h-96 bg-purple-500 rounded-full opacity-10 -bottom-30 -right-30 animate-float-2 animation-delay-2000 mix-blend-screen filter blur-xl"></div>
                        <div className="absolute w-80 h-80 bg-yellow-500 rounded-full opacity-10 top-1/3 left-1/4 animate-float-3 animation-delay-4000 mix-blend-screen filter blur-xl"></div>
                    </div>
                    

                    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center relative z-10 gap-12">
                        {/* Left Content Area */}
                        <div style={{marginTop:-30}} className="text-center lg:text-left">
                                    <Badge
                                          style={{
                                            backgroundColor: "#4eaec3",
                                            color: "white",
                                            fontWeight: "normal",
                                          }}
                                          className="text-white hover:bg-white/20 w-fit mb-4"
                                        >
                                          <nav className="breadcrumbs">
                                            <Link href="/">Home</Link>
                                            <span>/</span>
                                            <Link href="/bootcamp">Join a free data & AI webinar</Link>
                                            {/* Removed broken course link due to missing 'course' variable */}
                                          </nav>
                                        </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mb-4 animate-fade-in-down drop-shadow-lg">
                                Unlock Your Potential with <span className="text-yellow-300">Expert</span>
                            </h1>
                            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in-left opacity-90">
                                Join our free masterclasses, designed by industry experts from IIT & IIM to give you an unparalleled edge in your career journey.
                            </p>

                            {/* Next Upcoming Bootcamp Details */}
                            {nextUpcomingBootcamp ? (
                                <div className="mb-12 animate-fade-in-left text-left lg:text-left">
                                    <h2 className="text-3xl font-bold text-yellow-200 mb-4">
                                        Excel & AI Agent Free Certification Bootcamp: {nextUpcomingBootcamp.name}
                                    </h2>
                                    <div className="flex items-center text-blue-100 text-lg mb-2">
                                        <CalendarDays className="w-6 h-6 mr-2 text-yellow-300" />
                                        <span>{nextUpcomingBootcamp.date}</span>
                                    </div>
                                    <div className="flex items-center text-blue-100 text-lg mb-6">
                                        <Clock className="w-6 h-6 mr-2 text-yellow-300" />
                                        <span>{nextUpcomingBootcamp.time}</span>
                                    </div>

                                    {/* Faculty Profile and Details */}
                                    {nextUpcomingBootcamp.facultyProfilePic && nextUpcomingBootcamp.facultyName && (
                                        <div className="flex items-center mb-8">
                                            <img
                                                src={typeof nextUpcomingBootcamp.facultyProfilePic === 'string'
                                                    ? nextUpcomingBootcamp.facultyProfilePic
                                                    : nextUpcomingBootcamp.facultyProfilePic?.src}
                                                alt={nextUpcomingBootcamp.facultyName}
                                                className="w-20 h-20 rounded-full mr-4 border-4 border-yellow-300 object-cover shadow-lg"
                                                onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100/FF5733/FFFFFF?text=FP'; }}
                                            />
                                            <div>
                                                <p className="text-xl font-semibold text-yellow-200">{nextUpcomingBootcamp.facultyName}</p>
                                                {nextUpcomingBootcamp.facultyDesignation && (
                                                    <p className="text-base text-blue-100 opacity-80">{nextUpcomingBootcamp.facultyDesignation}</p>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    <button className="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 py-2 px-10 rounded-xl text-xl font-bold hover:from-yellow-300 hover:to-orange-400 transition duration-300 shadow-xl transform hover:-translate-y-1 hover:scale-105 active:scale-95">
                                        <a href='/bootcampregister' > Register Now</a>
                                    </button>
                                </div>
                            ) : (
                                <p className="text-lg md:text-xl text-blue-100 mb-8 animate-fade-in-left">
                                    No upcoming masterclasses scheduled at the moment. Stay tuned for exciting updates!
                                </p>
                            )}

                            {/* Attendee and Learner Stats */}
                            <div className="flex justify-center lg:justify-start space-x-6">
                                <div className="bg-white/10 text-white p-6 rounded-xl shadow-xl flex flex-col items-center border border-white/20 animate-fade-in-up transform hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
                                    <span className="text-4xl font-bold text-yellow-300">1 Lakh+</span>
                                    <span className="text-sm mt-1 opacity-80">Attendees Till Date</span>
                                </div>
                                <div className="bg-white/10 text-white p-6 rounded-xl shadow-xl flex flex-col items-center border border-white/20 animate-fade-in-up delay-200 transform hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
                                    <span className="text-4xl font-bold text-yellow-300">37K+</span>
                                    <span className="text-sm mt-1 opacity-80">Success Alumni</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Carousel Area */}
                        <div className="lg:w-1/2 flex justify-center items-center relative h-[450px] md:h-[550px] w-full max-w-md overflow-hidden rounded-2xl">
                            {upcomingBootcamps.length > 0 ? (
                                <div className="relative w-full h-full flex flex-col items-center justify-center">
                                    {displayedCarouselCards.map((event, index) => {
                                        let translateY = 0;
                                        let opacity = 1;
                                        let scale = 1;
                                        let zIndex = 1;
                                        let filter = '';

                                        if (displayedCarouselCards.length >= 3) {
                                            if (index === 0) {
                                                translateY = -150;
                                                opacity = 0.6;
                                                scale = 0.8;
                                                zIndex = 0;
                                                filter = 'blur(4px)';
                                            } else if (index === 1) {
                                                translateY = 0;
                                                opacity = 1;
                                                scale = 1;
                                                zIndex = 2;
                                            } else if (index === 2) {
                                                translateY = 150;
                                                opacity = 0.6;
                                                scale = 0.8;
                                                zIndex = 0;
                                                filter = 'blur(4px)';
                                            }
                                        } else if (displayedCarouselCards.length === 2) {
                                            if (index === 0) {
                                                translateY = -100;
                                                opacity = 0.7;
                                                scale = 0.9;
                                                filter = 'blur(2px)';
                                            } else if (index === 1) {
                                                translateY = 50;
                                                opacity = 1;
                                                scale = 1;
                                            }
                                        } else if (displayedCarouselCards.length === 1) {
                                            translateY = 0;
                                            opacity = 1;
                                            scale = 1;
                                        }

                                        return (
                                            <div
                                                key={event.id}
                                                className="absolute w-full h-[150px] transition-all duration-700 ease-in-out flex justify-center items-center"
                                                style={{
                                                    transform: `translateY(${translateY}px) scale(${scale})`,
                                                    opacity: opacity,
                                                    zIndex: zIndex,
                                                    filter: filter,
                                                }}
                                            >
                                                <BootcampCard event={event} isCarousel={true} />
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-white text-center text-xl p-4">No upcoming bootcamps for carousel.</div>
                            )}
                        </div>
                    </div>
                </section>
            </>
        );
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
            {/* Tailwind CSS CDN and Google Fonts (Inter) */}
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            {/* Lucide Icons CDN */}
            <script src="https://unpkg.com/lucide@latest"></script>
            {/* Custom CSS for animations */}
            <style>
                {`
          body {
            font-family: 'Inter', sans-serif;
          }
          @keyframes fade-in-down {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fade-in-left {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.8s ease-out forwards;
          }
          .animate-fade-in-left {
            animation: fade-in-left 0.8s ease-out forwards;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
          @keyframes float-1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(20px, -30px) scale(1.05); }
          }
          @keyframes float-2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-25px, 35px) scale(0.95); }
          }
          @keyframes float-3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(30px, 20px) scale(1.1); }
          }
          .animate-float-1 { animation: float-1 10s infinite ease-in-out; }
          .animate-float-2 { animation: float-2 12s infinite ease-in-out; }
          .animate-float-3 { animation: float-3 11s infinite ease-in-out; }
          .btn-glow:hover {
            box-shadow: 0 0 15px rgba(255, 255, 0, 0.7), 0 0 30px rgba(255, 165, 0, 0.5);
          }
        `}
            </style>

            {/* Hero Section */}
            <HeroSection />

            <main className="container mx-auto py-12 px-4 md:px-8 lg:px-16">
                {/* Primary Section Filter: Upcoming / Past */}
                <div className="flex justify-center mb-8 flex-wrap">
                    <button
                        className={`
              px-8 py-3 rounded-full text-lg font-medium mx-2 my-2
              ${currentSection === 'Upcoming' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
              transition duration-300
            `}
                        onClick={() => {
                            setCurrentSection('Upcoming');
                            setPastBootcampCategoryFilter('All');
                        }}
                    >
                        Upcoming Bootcamps ({upcomingBootcamps.length})
                    </button>
                    <button
                        className={`
              px-8 py-3 rounded-full text-lg font-medium mx-2 my-2
              ${currentSection === 'Past' ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
              transition duration-300
            `}
                        onClick={() => setCurrentSection('Past')}
                    >
                        Past Bootcamps ({pastBootcamps.length})
                    </button>
                </div>

                {/* Secondary Filter for Past Bootcamps */}
                {currentSection === 'Past' && (
                    <div className="flex justify-center mb-8 flex-wrap">
                        {['All', 'AI Agent', 'Gen AI', 'Automation', 'SQL', 'Python'].map((category) => (
                            <button
                                key={category}
                                className={`
                  px-4 py-2 rounded-full text-sm font-medium mx-1 my-1
                  ${pastBootcampCategoryFilter === category ? 'bg-blue-500 text-white shadow-sm' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                  transition duration-300
                `}
                                onClick={() => setPastBootcampCategoryFilter(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}

                {/* Display Filtered Bootcamps */}
                <section className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
                        {currentSection === 'Upcoming' ? 'Upcoming Events' : 'Past Event Highlights'}
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-10 w-fit mx-auto">
                        {getFilteredBootcamps().length > 0 ? (
                            getFilteredBootcamps().map((event) => (
                                <BootcampCard key={event.id} event={event} />
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-600 text-lg">
                                No {currentSection === 'Upcoming' ? 'upcoming' : 'past'} bootcamps found for this selection.
                            </p>
                        )}
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default App;