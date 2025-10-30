"use client";
import React, { useState, useCallback, useMemo } from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Mail, Phone, MapPin, Search, CheckCircle, XCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
// --- TYPESCRIPT INTERFACES AND TYPES ---

interface StudentData {
    id: string;
    branch: string;
    name: string;
    program: string;
    completionMonth: string;
    level: string;
}

type VerificationResult = {
    status: 'success';
    data: StudentData;
} | {
    status: 'not_found' | 'error';
    message: string;
};

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
}

interface InputProps {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    "aria-label"?: string; // Optional for accessibility links
}

interface VerificationDetailProps {
    label: string;
    value: string | undefined;
}

interface PageProps {
    navigate: (page: string) => void;
}

// --- PLACEHOLDER COMPONENTS (for single-file execution) ---

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', disabled = false }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`px-4 py-2 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
        {children}
    </button>
);

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, className = '' }) => (
    <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`p-3 rounded-lg border focus:border-blue-500 transition-colors duration-200 ${className}`}
    />
);

// --- HARDCODED STUDENT DATA (Typed Array) ---
const studentData: StudentData[] = [
    { id: "IVY/05/17/1417", branch: "Kolkata", name: "Tufan Maity", program: "Big Data Analytics", completionMonth: "2018-04-18", level: "Distinction" },
    { id: "IVY/01/17/1097", branch: "Kolkata", name: "Priyanka Srivastava", program: "Business Analytics", completionMonth: "2018-01-18", level: "Completion" },
    { id: "IVY/04/17/1312", branch: "Delhi", name: "Swati Katyal", program: "Predictive Modelling and Analysis", completionMonth: "2018-12-17", level: "Completion" },
    { id: "IVY/11/16/18", branch: "Kolkata", name: "Zibraan Ahmed", program: "Big Data Analytics", completionMonth: "2018-04-18", level: "Distinction" },
    { id: "IVY/3/16/11", branch: "Kolkata", name: "Sayanti Pal", program: "Business Analytics", completionMonth: "2018-03-17", level: "Completion" },
    { id: "IVY/07/17/1214", branch: "Kolkata", name: "Chinmoyee Dev", program: "EXCEL VBA SQL R Tableau", completionMonth: "2018-04-19", level: "Completion" },
    { id: "IVY/05/17/1413", branch: "Kolkata", name: "Asmit Kumar", program: "EXCEL VBA SQL SAS R Tableau (2017-18)", completionMonth: "2018-02-01", level: "Completion" },
    { id: "IVY/08/17/1626", branch: "Delhi", name: "Abhishek Sharan", program: "EXCEL VBA SQL SAS R (2017-18)", completionMonth: "2018-07-01", level: "Completion" },
    { id: "IVY/01/17/1079", branch: "Delhi", name: "Amit Suyal", program: "EXCEL VBA SQL SAS R (2016-17)", completionMonth: "2018-02-01", level: "Completion" },
    { id: "IVY/06/16/795", branch: "Kolkata", name: "Salma S Khatoon", program: "EXCEL VBA SQL SAS R (2016-17)", completionMonth: "2018-08-01", level: "Completion" },
    { id: "IVY/05/18/1792", branch: "Bangalore", name: "Jerusha Samuel", program: "EXCEL VBA SQL SAS R", completionMonth: "2019-01-01", level: "Completion" }
];


// --- VERIFY CERTIFICATE PAGE COMPONENT ---

const VerifyCertificatePage: React.FC<PageProps> = ({ navigate }) => {
    const [certificateId, setCertificateId] = useState<string>('');
    const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSearch = () => {
        if (!certificateId.trim()) {
            setVerificationResult({ status: 'error', message: 'Please enter a certificate number to search.' });
            return;
        }

        setIsLoading(true);
        setVerificationResult(null);

        // Simulate API call delay (using local data)
        setTimeout(() => {
            const idToSearch = certificateId.trim().toUpperCase();
            const result = studentData.find(
                (student) => student.id.toUpperCase() === idToSearch
            );

            if (result) {
                setVerificationResult({ status: 'success', data: result });
            } else {
                setVerificationResult({ status: 'not_found', message: `Certificate ID "${certificateId}" not found in our records.` });
            }
            setIsLoading(false);
        }, 500); // 500ms delay for visual feedback
    };

    const VerificationDetail: React.FC<VerificationDetailProps> = ({ label, value }) => (
        <div>
            <p className="text-sm font-medium text-gray-500">{label}</p>
            <p className="text-lg font-semibold text-gray-900">{value || 'N/A'}</p>
        </div>
    );

    const renderResult = () => {
        if (!verificationResult) return null;

        if (verificationResult.status === 'success') {
            const data = verificationResult.data;
            return (
                <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl shadow-lg">
                    <div className="flex items-center text-green-700 mb-4">
                        <CheckCircle size={24} className="mr-3" />
                        <h3 className="text-xl font-bold">Certificate Verified Successfully!</h3>
                    </div>
                    <p className="text-gray-700 mb-4">The following details are confirmed:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        <VerificationDetail label="Certificate ID" value={data.id} />
                        <VerificationDetail label="Student Name" value={data.name} />
                        <VerificationDetail label="Program Name" value={data.program} />
                        {/* <VerificationDetail label="Completion Status" value={data.level} /> */}
                        <VerificationDetail label="Completion Date" value={data.completionMonth} />
                        {/* <VerificationDetail label="Issuing Branch" value={data.branch} /> */}
                    </div>
                </div>
            );
        } else if (verificationResult.status === 'not_found') {
            return (
                <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-xl shadow-lg text-red-700">
                    <div className="flex items-center mb-2">
                        <XCircle size={24} className="mr-3" />
                        <h3 className="text-xl font-bold">Verification Failed</h3>
                    </div>
                    <p>{verificationResult.message}</p>
                </div>
            );
        } else if (verificationResult.status === 'error') {
            return (
                <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl shadow-lg text-yellow-700">
                    <p>{verificationResult.message}</p>
                </div>
            );
        }
        return null;
    };


    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8" style={{ marginTop: 100 }}>
            <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-2xl">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                    Verify Certificate
                </h1>
                <p className="text-gray-600 mb-8">
                    Enter the unique Certificate ID (e.g., IVY/05/17/1417) to instantly validate the student's credentials against our records.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Input
                        placeholder="Enter Certificate ID"
                        value={certificateId}
                        onChange={(e) => setCertificateId(e.target.value)}
                        className="flex-grow bg-white border-gray-300 text-gray-800 focus:ring-blue-500"
                    />
                    <Button
                        onClick={handleSearch}
                        className="bg-[#009fda] text-white  disabled:opacity-50 flex items-center justify-center shadow-md rounded-lg"          >
                        {isLoading ? (
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            <Search size={20} className="mr-2" />
                        )}
                        Search
                    </Button>
                </div>

                {renderResult()}
            </div>
        </div>
    );
};


// --- FOOTER COMPONENT ---

const Footer: React.FC<PageProps> = ({ navigate }) => {
    // Use a navigation handler instead of next/link
    const NavLink: React.FC<NavLinkProps> = useCallback(({ href, children, className = '' }) => {
        // Determine if the link is external or internal (for simulation)
        const isExternal = href.startsWith('http') || href.startsWith('//') || href.startsWith('#');
        const targetPage = href.startsWith('/') ? href.substring(1) : href;

        if (isExternal) {
            return (
                <a href={href} className={`text-gray-300 hover:text-white transition-colors ${className}`} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            );
        }

        return (
            <button
                onClick={() => navigate(targetPage)}
                className={`text-gray-300 hover:text-white transition-colors text-left ${className}`}
            >
                {children}
            </button>
        );
    }, [navigate]);

    const officeLocations = [
        {
            city: "Kolkata",
            address: "14B, Camac St (5th Floor)"
        },
        {
            city: "Pune",
            address: "Shivajinagar, Maharashtra 411016"
        },
        {
            city: "Bangalore",
            address: "George Thangaiah Complex, Kalyan Nagar, Indira Nagar 1st Stage, H Colony, Indiranagar, Bengaluru, Karnataka 560038"
        },
        {
            city: "Delhi",
            address: "Start Works, 1st Floor DCM Building Barakhamba Road"
        }
    ];

    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Logo & Social */}
                    <div>
                        <div className="mb-6">
                            <NavLink href="home" className="flex items-center p-0">
                                <span className="text-2xl font-bold text-indigo-400">IVY School</span>
                            </NavLink>
                            <div className="mt-2 flex items-center">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="ml-2 text-sm">4.8/5 (2,250+ reviews)</span>
                            </div>
                        </div>
                        <p className="text-gray-300 mb-4 text-sm">
                            Leading the way in data science and AI education since 2008, empowering professionals to transform their careers.
                        </p>
                        <div className="flex space-x-4">
                            <NavLink href="https://facebook.com/ivyproschool" aria-label="Facebook"><Facebook size={20} /></NavLink>
                            <NavLink href="https://twitter.com/ivyproschool" aria-label="Twitter"><Twitter size={20} /></NavLink>
                            <NavLink href="https://in.linkedin.com/school/ivy-professional-school" aria-label="LinkedIn"><Linkedin size={20} /></NavLink>
                            <NavLink href="https://youtube.com/ivyproschool" aria-label="YouTube"><Youtube size={20} /></NavLink>
                            <NavLink href="https://instagram.com/ivyproschool" aria-label="Instagram"><Instagram size={20} /></NavLink>
                        </div>
                    </div>

                    {/* Column 2: Courses */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Courses</h3>
                        <ul className="space-y-2 text-sm">
                            <li><NavLink href="/courses/data-science-and-ml-course"> Data Science</NavLink></li>
                            <li><NavLink href="/courses/data-engineering-course"> Data Engineering</NavLink></li>
                            <li><NavLink href="/courses/iit-generative-ai-course"> Generative AI</NavLink></li>
                            <li><NavLink href="/courses/ai-machine-learning-course">Machine Learning & AI</NavLink></li>
                            <li><NavLink href="/courses/data-analytics-course">Data Analytics</NavLink></li>
                            <li><NavLink href="/courses/no-upfront-fees-data-science-and-ml-course">Data Science (Pay after placement)</NavLink></li>
                        </ul>
                    </div>

                    {/* Column 3: Company (Updated) */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            {/* NEW LINK ADDED HERE */}
                            <li><NavLink href="verify-certificate" className="font-bold text-indigo-300 hover:text-white">Verify Certificate</NavLink></li>
                            {/* Existing Links */}
                            <li><NavLink href="/enterprise">Enterprise</NavLink></li>
                            <li><NavLink href="/alumni">Testimonials</NavLink></li>
                            <li><NavLink href="https://youtube.com/ivyproschool">YouTube Channel</NavLink></li>
                            <li><NavLink href="/contact-us">Contact Us</NavLink></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact & Offices */}
                    <div>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <Mail size={16} className="mr-2 text-indigo-400" />
                                <span className="text-gray-300 text-sm">info@ivyproschool.com</span>
                            </div>
                            <div className="flex items-center">
                                <Phone size={16} className="mr-2 text-indigo-400" />
                                <span className="text-gray-300 text-sm">+91 7676882222</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h4 className="text-sm font-semibold mb-3 border-b border-gray-800 pb-1">Our Offices</h4>
                            <div className="grid grid-cols-2 gap-3">
                                {officeLocations.map((office, index) => (
                                    <div key={index} className="flex items-start">
                                        <MapPin size={14} className="mr-1 flex-shrink-0 mt-0.5 text-gray-400" />
                                        <div className="text-sm leading-tight">
                                            <span className="text-gray-300 font-medium">{office.city}</span>
                                            <p className="text-gray-400 text-xs mt-0.5">{office.address}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-10 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0 text-xs">
                        {/* Left: Course Link */}
                        <div className="order-2 md:order-1">
                            <NavLink href="/courses/data-engineering-course-in-kolkata" className="text-gray-400 hover:text-white">
                                Data Engineering Course in Kolkata
                            </NavLink>
                        </div>

                        {/* Center: Copyright */}
                        <div className="order-1 md:order-2">
                            <p className="text-gray-400">
                                &copy; {new Date().getFullYear()} Ivy Professional School. All rights reserved.
                            </p>
                        </div>

                        {/* Right: Policy Links */}
                        <div className="flex space-x-4 order-3 md:order-3">
                            <NavLink href="/privacy">Privacy Policy</NavLink>
                            <NavLink href="/terms">Terms of Service</NavLink>
                            <NavLink href="/sitemap.xml">Sitemap</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};


// --- MAIN APP COMPONENT (Simulating Next.js Routing) ---

const App: React.FC = () => {
    // --- CHANGE MADE HERE ---
    // Initial state is set to 'verify-certificate' so the app starts on the search page.
    const [currentPage, setCurrentPage] = useState<string>('verify-certificate');

    // Function to simulate client-side navigation
    const navigate = useCallback((page: string) => {
        // Basic guard against unknown pages, defaults to verify-certificate if not home
        setCurrentPage(page === 'home' ? 'home' : 'verify-certificate');
    }, []);

    const renderPage = useMemo(() => {
        switch (currentPage) {
            case 'verify-certificate':
                return <VerifyCertificatePage navigate={navigate} />;
            case 'home':
            default:
                // Simple Home/Content Placeholder, now accessible via the main logo link
                return (
                    <div className="min-h-screen p-8 bg-white text-gray-800">
                        <div className="max-w-4xl mx-auto py-12">
                            <h1 className="text-4xl font-bold mb-4">Welcome to IVY Professional School</h1>
                            <p className="text-lg">This is the main content area. Use the navigation links in the footer or click the logo to switch views.</p>
                            <div className="h-96 w-full bg-gray-100 mt-8 rounded-lg flex items-center justify-center text-gray-500">
                                Main Page Content Placeholder
                            </div>
                        </div>
                    </div>
                );
        }
    }, [currentPage, navigate]);

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
                {renderPage}
            </main>
            <Footer navigate={navigate} />
        </div>
    );
};

export default App;
