import React, { useState, useEffect } from 'react'; // Import useEffect
import { Linkedin } from "lucide-react";
import AanchalBhatia from "@/assests/alumni/AanchalBhatia.webp";
import LahariSaha from "@/assests/alumni/LahariSaha.webp";
import NavinPatle from "@/assests/alumni/NavinPatle.webp";
import SankhadiptyaPaul from "@/assests/alumni/SankhadiptyaPaul.webp";

interface AlumniData {
    name: string;
    title: string;
    location: string;
    rating: number;
    image: string;
    linkedin?: string;
    previousCompany: {
        company: string;
        role: string;
    };
    currentCompany: {
        company: string;
        role: string;
    };
    university?: string;
    degree?: string;
    workExperiencePreScaler?: string;
}

interface AlumniProfileSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    alumnus: AlumniData;
}

const AlumniProfileSidebar: React.FC<AlumniProfileSidebarProps> = ({ isOpen, onClose, alumnus }) => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        countryCode: '+91',
        graduationYear: '',
        interests: [] as string[]
    });

    // Reset showForm to false whenever the sidebar is opened or alumnus changes
    useEffect(() => {
        if (isOpen) {
            setShowForm(false);
            // Optionally, also reset formData here if you want a clean form every time
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                countryCode: '+91',
                graduationYear: '',
                interests: []
            });
        }
    }, [isOpen, alumnus]); // Depend on isOpen and alumnus

    if (!alumnus) return null;

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <svg
                key={index}
                className={`w-5 h-5 ${index < rating ? 'fill-current text-yellow-500' : 'text-gray-300'}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.565-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>
        ));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        // Allow only numbers
        if (/^\d*$/.test(value)) {
            setFormData(prev => ({ ...prev, phone: value }));
        }
    };

    const handleInterestChange = (interest: string) => {
        setFormData(prev => {
            if (prev.interests.includes(interest)) {
                return { ...prev, interests: prev.interests.filter(i => i !== interest) };
            } else {
                return { ...prev, interests: [...prev.interests, interest] };
            }
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Here you would typically send the data to your backend
        setShowForm(false);
        onClose(); // Close the sidebar after submission
    };

    return (
        <div style={{marginBottom:80}} className={`fixed inset-0 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

            {/* Sidebar Content */}
            <div className="relative w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 h-full bg-white shadow-lg ml-auto">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"
                    onClick={onClose}
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                {/* Profile Content */}
                <div className="p-6 sm:p-8 md:p-10 lg:p-12 overflow-y-auto h-full pb-20 overflow-scroll">
                    {!showForm ? (
                        <>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Alumni Profile</h2>
                            </div>

                            {/* Profile Header */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 text-center sm:text-left">
                                <div className="relative">
                                    <img
                                        src={alumnus.image}
                                        alt={alumnus.name}
                                        className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 shadow-md"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center sm:justify-start gap-2">
                                        {alumnus.name}
                                        {alumnus.linkedin && (
                                            <a href={alumnus.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png?20140125013055"
                                                    alt="LinkedIn"
                                                    className="h-5 w-5"
                                                />
                                            </a>
                                        )}
                                    </h3>
                                    <p className="text-lg text-gray-700 mt-1">{alumnus.title}</p>
                                    <div className="flex items-center justify-center sm:justify-start text-yellow-500 mt-2">
                                        {renderStars(alumnus.rating)}
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2 flex items-center justify-center sm:justify-start gap-2">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                                        {alumnus.location}
                                    </p>
                                    {alumnus.university && (
                                        <p className="text-sm text-gray-600 mt-1 flex items-center justify-center sm:justify-start gap-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.081a1 1 0 00-.788 0L.283 6.388A1 1 0 001 7.91v9a1 1 0 001 1h16a1 1 0 001-1v-9a1 1 0 00.717-1.522L10.394 2.081zM10 12a3 3 0 100-6 3 3 0 000 6z"></path></svg>
                                            {alumnus.university}
                                        </p>
                                    )}
                                    {alumnus.degree && (
                                        <p className="text-sm text-gray-600 mt-1 flex items-center justify-center sm:justify-start gap-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd"></path></svg>
                                            {alumnus.degree}
                                        </p>
                                    )}
                                    {alumnus.workExperiencePreScaler && (
                                        <p className="text-sm text-gray-600 mt-1 flex items-center justify-center sm:justify-start gap-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm2 4a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm1 3a1 1 0 100 2h2a1 1 0 100-2H9zm-1 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                            {alumnus.workExperiencePreScaler}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Pre Ivy / Post Ivy Section */}
                            <div className="flex flex-row items-center justify-between my-8">
                                <div className="text-center w-1/3">
                                    <p className="text-lg font-semibold text-gray-700 mb-2">Pre Ivy Pro</p>
                                    <img
                                        src={alumnus.previousCompany.company}
                                        alt={alumnus.previousCompany.role}
                                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mx-auto"
                                    />
                                    <p className="text-sm sm:text-md text-gray-600 mt-2">{alumnus.previousCompany.role}</p>
                                </div>
                                <div className="text-2xl sm:text-4xl text-gray-400 mx-2">→</div>
                                <div className="text-center w-1/3">
                                    <p className="text-lg font-semibold text-gray-700 mb-2">Post Ivy Pro</p>
                                    <img
                                        src={alumnus.currentCompany.company}
                                        alt={alumnus.currentCompany.role}
                                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mx-auto"
                                    />
                                    <p className="text-sm sm:text-md text-gray-600 mt-2">{alumnus.currentCompany.role}</p>
                                </div>
                            </div>

                            {/* Connect 1-1 with Alumni Section */}
                            <div className="bg-gradient-to-r from-[#013a81] to-blue-500 rounded-lg p-6 text-white text-center shadow-lg my-8">
                                <h4 className="text-xl font-bold mb-3 flex items-center justify-center">
                                    Connect with Alumni
                                    <span className="bg-yellow-300 text-purple-900 text-xs px-2 py-1 rounded-full font-semibold ml-2 relative -top-1">NEW</span>
                                </h4>
                                <p className="text-md mb-4">
                                    We'll match you with an alumni based on your availability and career goals.
                                </p>
                                <div className="flex justify-center items-center -space-x-2 mb-4">
                                    <img src={AanchalBhatia} alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                                    <img src={LahariSaha} alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                                    <img src={NavinPatle} alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                                    <img src={SankhadiptyaPaul} alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                                </div>
                                <p className="text-sm mb-6">+1380 Learners have connected with alumni</p>
                                <button
                                    className="bg-white text-[#013a81] font-bold py-3 px-8 rounded-lg text-sm hover:bg-gray-100 transition-colors"
                                    onClick={() => setShowForm(true)}
                                >
                                    REQUEST FOR 1-1 SESSION
                                </button>
                                <div className="flex items-center justify-center mt-4 text-sm">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png"
                                        alt="Verified"
                                        className="h-4 w-4"
                                    />
                                    <span className="ml-2">Sharing about their Ivy experience</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Take your career to the next level now!</h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-lg font-medium text-gray-900 mb-2">Full Name*</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-lg font-medium text-gray-900 mb-2">Email*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="block text-lg font-medium text-gray-900 mb-2">Phone Number*</label>
                                    <p className="text-sm text-gray-600 mb-2">OTP will be sent to this number for verification</p>
                                    <div className="flex gap-2">
                                        <select
                                            name="countryCode"
                                            value={formData.countryCode}
                                            onChange={handleInputChange}
                                            className="w-20 px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="+91">+91</option>

                                        </select>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handlePhoneChange}
                                            placeholder="Enter your mobile number"
                                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                            maxLength={10}
                                        />
                                    </div>
                                </div>

                                {/* Graduation Year */}
                                <div>
                                    <label className="block text-lg font-medium text-gray-900 mb-2">Years of experience*</label>
                                    <input
                                        type="text"
                                        name="graduationYear"
                                        value={formData.graduationYear}
                                        onChange={handleInputChange}
                                        placeholder="Year of Graduation"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>

                                {/* Interests */}
                                <div>
                                    <label className="block text-lg font-medium text-gray-900 mb-2">Your Topic of Interest*</label>
                                    <div className="space-y-2">
                                        {['Data Science', 'Generative AI', 'Machine Learning', 'Data Engineering', 'Build AI Agents'].map((interest) => (
                                            <div key={interest} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id={interest}
                                                    checked={formData.interests.includes(interest)}
                                                    onChange={() => handleInterestChange(interest)}
                                                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                                                />
                                                <label htmlFor={interest} className="ml-2 text-gray-700">{interest}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div style={{marginBottom:40}}>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
                                    >
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AlumniProfileSidebar;