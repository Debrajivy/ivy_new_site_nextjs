import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PlayCircle, CalendarDays, Clock, User, Users, Award } from 'lucide-react'
import BootcampClient from './bootcamp-client'

// <CHANGE> Define interfaces for data structure
interface BootcampEvent {
    id: string;
    banner: string;
    name: string;
    date: string;
    time: string;
    mentoredBy?: string;
    attendees?: number;
    expired?: boolean;
    certificateProvided?: boolean;
    category: '' | '' | 'AI Agent' | 'Gen AI' | 'Automation' | 'SQL' | 'Python' | 'Other';
    outcomePoints?: string[];
    facultyProfilePic?: string;
    facultyName?: string;
    facultyDesignation?: string;
    youtubeUrl?: string;
}

// <CHANGE> Sample data for all bootcamps - moved to server component level
const allBootcamps: BootcampEvent[] = [
    {
        id: 'u1',
        banner: '/assets/BootcampCar1.webp',
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
        facultyProfilePic: '/assets/eeshani.webp',
        facultyName: 'Eeshani Agrawal',
        facultyDesignation: 'Co Founder, Ivy Pro School',
    },
    {
        id: 'u2',
        banner: '/assets/BootcampCar2.webp',
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
    {
        id: 'u3',
        banner: '/assets/BootcampCar3.webp',
        name: 'Introduction to Generative AI',
        date: '25th July, Fri',
        time: '06:00 PM - 07:30 PM',
        certificateProvided: false,
        expired: false,
        category: 'Gen AI',
        outcomePoints: [
            'Understand the basics of Generative AI',
            'Explore different Gen AI models',
            'Learn to prompt effectively',
            'Identify real-world applications',
        ],
        facultyProfilePic: 'https://placehold.co/100x100/33A1FF/FFFFFF?text=FA',
        facultyName: 'Faculty Alex Kim',
        facultyDesignation: 'AI/ML Specialist',
    },
    {
        id: 'p1',
        banner: 'https://img.youtube.com/vi/JDVCzgF6J64/maxresdefault.jpg',
        name: 'How to Create Dashboard for Employee Attendance using Power BI',
        date: '14th January, Tuesday',
        time: '6:00 - 7:00 PM',
        expired: true,
        attendees: 450,
        certificateProvided: true,
        category: '',
        youtubeUrl: 'https://www.youtube.com/watch?v=JDVCzgF6J64'
    },
    {
        id: 'p2',
        banner: 'https://img.youtube.com/vi/J9p5uZMnPec/maxresdefault.jpg',
        name: 'How to Build a Smart Real Estate Assistant with Generative AI',
        date: '15th January, Wednesday',
        time: '6:00 - 7:00 PM',
        expired: true,
        attendees: 550,
        certificateProvided: true,
        category: 'Gen AI',
        youtubeUrl: 'https://www.youtube.com/watch?v=J9p5uZMnPec'
    },
    {
        id: 'p3',
        banner: 'https://i.ytimg.com/vi/0NnsjUiWo7A/maxresdefault.jpg',
        name: 'Automating Customer Support & FAQs with AI on Telegram',
        date: '11th February, Tuesday',
        time: '7:00 - 8:00 PM',
        expired: true,
        attendees: 440,
        certificateProvided: true,
        category: 'Gen AI',
        youtubeUrl: 'https://www.youtube.com/live/0NnsjUiWo7A'
    },
    {
        id: 'p4',
        banner: 'https://i.ytimg.com/vi/0NnsjUiWo7A/maxresdefault.jpg',
        name: 'Amazon Product Recommendation System using GenAI',
        date: '12th February, Wednesday',
        time: '7:00 - 8:00 PM',
        expired: true,
        attendees: 370,
        certificateProvided: true,
        category: 'Gen AI',
        youtubeUrl: 'https://www.youtube.com/watch?v=0NnsjUiWo7A'
    },
    {
        id: 'p5',
        banner: 'https://img.youtube.com/vi/FkEQupUEvtM/maxresdefault.jpg',
        name: 'Using GenAI to Analyze IPL 2025 Auction Player Stats',
        date: '28th November 2024, Thursday',
        time: '6:00 - 7:00 PM',
        expired: true,
        attendees: 709,
        certificateProvided: true,
        category: 'AI Agent',
        youtubeUrl: 'https://www.youtube.com/watch?v=FkEQupUEvtM'
    },
    {
        id: 'p6',
        banner: 'https://img.youtube.com/vi/f8Da8x8KNXE/maxresdefault.jpg',
        name: 'Build Your Own Tax Planner Bot with GenAI',
        date: '29th November, Friday',
        time: '6:00 - 7:00 PM',
        expired: true,
        attendees: 890,
        certificateProvided: true,
        category: 'Python',
        youtubeUrl: 'https://www.youtube.com/watch?v=f8Da8x8KNXE'
    },
    {
        id: 'p7',
        banner: 'https://img.youtube.com/vi/nJPdv70xA0k/maxresdefault.jpg',
        name: 'Create a Christmas Gift Sales Dashboard in Power BI',
        date: '27th December, Friday',
        time: '5:30 - 6:30 PM',
        expired: true,
        attendees: 498,
        certificateProvided: true,
        category: 'AI Agent',
        youtubeUrl: 'https://www.youtube.com/watch?v=nJPdv70xA0k'
    },
    {
        id: 'p8',
        banner: 'https://i.ytimg.com/vi/MaG7XIyyNxQ/maxresdefault.jpg',
        name: 'Build Insurance Planner with GenAI in Excel',
        date: '28th December, Saturday',
        time: '5:30 - 6:30 PM',
        expired: true,
        attendees: 467,
        certificateProvided: true,
        category: '',
        youtubeUrl: 'https://www.youtube.com/watch?v=MaG7XIyyNxQ'
    },
    {
        id: 'p9',
        banner: 'https://img.youtube.com/vi/HcQHErC2Ek0/maxresdefault.jpg',
        name: 'Predict Heart Disease using Tableau',
        date: '22nd November 2024, Friday',
        time: '5:30 - 6:30 PM',
        expired: true,
        attendees: 402,
        certificateProvided: true,
        category: 'SQL',
        youtubeUrl: 'https://www.youtube.com/watch?v=HcQHErC2Ek0'
    },
    {
        id: 'p10',
        banner: 'https://i.ytimg.com/vi/vkz7XGlCKMk/maxresdefault.jpg',
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
        banner: 'https://img.youtube.com/vi/ucVqABYBsuQ/maxresdefault.jpg',
        name: 'GenAI to Decode Blood Reports for Early Detection',
        date: '24th October, Thursday',
        time: '6:00 - 7:00 PM',
        expired: true,
        attendees: 391,
        certificateProvided: true,
        category: 'Python',
        youtubeUrl: 'https://www.youtube.com/watch?v=ucVqABYBsuQ'
    },
    {
        id: 'p12',
        banner: 'https://i.ytimg.com/vi/c58FfFG0HuI/maxresdefault.jpg',
        name: 'How to build a Nutritionist GenAI Chatbot',
        date: '25th October, Friday',
        time: '6:00 - 7:00 PM',
        expired: true,
        attendees: 461,
        certificateProvided: true,
        category: 'Automation',
        youtubeUrl: 'https://www.youtube.com/watch?v=c58FfFG0HuI'
    },
    {
        id: 'p13',
        banner: 'https://img.youtube.com/vi/YuXtQcApE5U/maxresdefault.jpg',
        name: 'Reducing Employee Attrition with GenAI in Excel',
        date: '27th August, Tuesday',
        time: '5:00 - 6:00 PM',
        expired: true,
        attendees: 309,
        certificateProvided: true,
        category: 'Automation',
        youtubeUrl: 'https://www.youtube.com/watch?v=YuXtQcApE5U'
    },
    {
        id: 'p14',
        banner: 'https://img.youtube.com/vi/XoMiGRTBmQk/maxresdefault.jpg',
        name: 'Human Resource Analytics using Power BI',
        date: '28th August, Wednesday',
        time: '5:00 - 6:00 PM',
        expired: true,
        attendees: 294,
        certificateProvided: true,
        category: 'Python',
        youtubeUrl: 'https://www.youtube.com/watch?v=XoMiGRTBmQk'
    },
    {
        id: 'p15',
        banner: 'https://img.youtube.com/vi/yYbU_Bihvdc/maxresdefault.jpg',
        name: 'Azure Data Factory: End-to-End ETL Pipeline',
        date: '30th July, Tuesday',
        time: '5:30 - 7:00 PM',
        expired: true,
        attendees: 684,
        certificateProvided: true,
        category: 'SQL',
        youtubeUrl: 'https://www.youtube.com/watch?v=yYbU_Bihvdc'
    },
    {
        id: 'p16',
        banner: 'https://i.ytimg.com/vi/NDHPeQnRItw/maxresdefault.jpg',
        name: 'Power BI End-to-End project using AI for beginners',
        date: '31st July, Wednesday',
        time: '5:30 - 7:30 PM',
        expired: true,
        attendees: 600,
        certificateProvided: true,
        category: 'SQL',
        youtubeUrl: 'https://www.youtube.com/watch?v=NDHPeQnRItw&t=13s'
    },
    {
        id: 'p17',
        banner: 'https://i.ytimg.com/vi/N-JsbgqBVIU/maxresdefault.jpg',
        name: 'Win Big in Fantasy Cricket AI powered IPL player insights & build your own team',
        date: '21st March, Friday',
        time: '6:00 - 7:00 PM',
        expired: true,
        attendees: 120,
        certificateProvided: true,
        category: 'Python',
        youtubeUrl: 'https://www.youtube.com/live/N-JsbgqBVIU'
    }
];

// <CHANGE> Helper function to get next upcoming bootcamp
function getNextUpcomingBootcamp() {
    const upcomingBootcamps = allBootcamps
        .filter(event => !event.expired)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    return upcomingBootcamps.length > 0 ? upcomingBootcamps[0] : null;
}

// <CHANGE> Dynamic metadata generation based on upcoming bootcamps
export async function generateMetadata(): Promise<Metadata> {
    const nextBootcamp = getNextUpcomingBootcamp();
    const upcomingCount = allBootcamps.filter(event => !event.expired).length;
    
    return {
        title: nextBootcamp 
            ? `${nextBootcamp.name || 'Excel & AI Agent Free Certification Bootcamp'} - Free Bootcamp | Ivy Pro School`
            : 'Free Bootcamps & Masterclasses | Ivy Pro School',
        description: nextBootcamp
            ? `Join our free bootcamp: ${nextBootcamp.name || 'Excel & AI Agent Free Certification Bootcamp'} on ${nextBootcamp.date}. Expert-led training from IIT & IIM professionals.`
            : 'Join our free masterclasses designed by industry experts from IIT & IIM. Learn AI, automation, data analytics and more.',
        keywords: [
            'free bootcamp',
            'AI training',
            'data analytics',
            'Excel automation',
            'GenAI',
            'Python',
            'SQL',
            'IIT',
            'IIM',
            'professional development'
        ],
        openGraph: {
            title: nextBootcamp?.name || 'Free Bootcamps & Masterclasses',
            description: nextBootcamp 
                ? `Free bootcamp on ${nextBootcamp.date} - ${nextBootcamp.time}`
                : `${upcomingCount} upcoming bootcamps available`,
            images: [
                {
                    url: nextBootcamp?.banner || '/assets/BootcampCar1.webp',
                    width: 1200,
                    height: 630,
                    alt: nextBootcamp?.name || 'Free Bootcamp'
                }
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: nextBootcamp?.name || 'Free Bootcamps & Masterclasses',
            description: nextBootcamp 
                ? `Join our free bootcamp on ${nextBootcamp.date}`
                : 'Expert-led training from IIT & IIM professionals',
            images: [nextBootcamp?.banner || '/assets/BootcampCar1.webp'],
        },
        alternates: {
            canonical: '/bootcamps',
        }
    }
}

// <CHANGE> Main page component - server component that passes data to client component
export default function BootcampsPage() {
    return <BootcampClient bootcamps={allBootcamps} />
}
