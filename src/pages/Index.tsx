// src/app/index.tsx (or similar main page file)
"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Above-fold: load eagerly
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Partners from '@/components/home/Partners';

// Below-fold: lazy-loaded to reduce initial JS bundle
const Footer = dynamic(() => import('@/components/layout/Footer'));
const FeaturedCourses = dynamic(() => import('@/components/home/FeaturedCourses'));
const CallToAction = dynamic(() => import('@/components/home/CallToAction'));
const PlacementReportCTA = dynamic(() => import('@/components/home/PlacementReportCTA'));
const TopFaculty = dynamic(() => import('@/components/home/TopFaculty'));
const DayAtIvy = dynamic(() => import('@/components/home/DayAtIvy'));
const WhyChooseUs = dynamic(() => import('@/components/home/WhyChooseUs'));
const AIFeatures = dynamic(() => import('@/components/home/AIFeatures'));
const AIAdvisor = dynamic(() => import('@/components/home/AIAdvisor'));
const Testimonials = dynamic(() => import('@/components/home/Testimonials'));
const WhatsAppCommunity = dynamic(() => import('@/components/home/WhatsAppCommunity'));
const YoutubeSection = dynamic(() => import('@/components/home/YoutubeSection'));
const FAQ = dynamic(() => import('@/components/home/FAQ'));

// UI-only deferred components (no SSR needed)
const StickyAIHelpCenter = dynamic(() => import('@/components/StickyAIHelpCenter'), { ssr: false });
const StickyAICareerAssessment = dynamic(() => import('@/components/StickyAICareerAssessment'), { ssr: false });
const Notifications = dynamic(() => import('@/components/layout/Notification'), { ssr: false });

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
                <div id="ai-advisor-section">
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
