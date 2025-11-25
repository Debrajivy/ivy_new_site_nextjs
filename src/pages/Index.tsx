// src/app/index.tsx (or similar main page file)
"use client"
import React, { useState } from 'react'; 
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import AIFeatures from '@/components/home/AIFeatures';
import Testimonials from '@/components/home/Testimonials';
import YoutubeSection from '@/components/home/YoutubeSection';
import CallToAction from '@/components/home/CallToAction';
import Partners from '@/components/home/Partners';
import AIAdvisor from '@/components/home/AIAdvisor'; 
import TopFaculty from '@/components/home/TopFaculty';
import DayAtIvy from '@/components/home/DayAtIvy';
import FAQ from '@/components/home/FAQ';
import WhatsAppCommunity from '@/components/home/WhatsAppCommunity';
import PlacementReportCTA from '@/components/home/PlacementReportCTA';
import CertificateVerification from '@/app/certificateVerification/page';
import StickyAIHelpCenter from '@/components/StickyAIHelpCenter';
import StickyAICareerAssessment from '@/components/StickyAICareerAssessment'; // <--- NEW IMPORT
import Notifications from '@/components/layout/Notification';

const Index: React.FC = () => {
    // State to control the visibility of the AIAdvisor section
    const [showAIAdvisor, setShowAIAdvisor] = useState(false); 

    return (
        <>
        <Notifications/>
        <Navbar />
        <main className=' overflow-hidden'>
            
            <Hero />
            {/* RIGHT SIDE STICKY BUTTON */}
            <StickyAIHelpCenter />

            {/* LEFT SIDE STICKY BUTTON (NEW) */}
            <StickyAICareerAssessment 
                onToggleAIAdvisor={setShowAIAdvisor} 
                isAIAdvisorOpen={showAIAdvisor}
            />

            <Partners />
            <FeaturedCourses />
            
            {/* ID for Career Assessment (CallToAction) */}
            <div id="call-to-action-section"> 
                <CallToAction />
            </div>
            
            {/* <CertificateVerification /> */}
            <PlacementReportCTA />
            <TopFaculty />
            <DayAtIvy />
            <WhyChooseUs />
            <AIFeatures />
            
            {/* ID for AI Career Coach (AIAdvisor) and Conditional rendering */}
          
                <div id="ai-advisor-section"> {/* <--- NEW ID WRAPPER */}
                    <AIAdvisor />
                </div>
        

            <Testimonials />
            <WhatsAppCommunity />
            <YoutubeSection />
            <FAQ />
        </main>
        <Footer />
        </>
    );
};

export default Index;