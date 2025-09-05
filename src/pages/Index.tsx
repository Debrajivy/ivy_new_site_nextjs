import React from 'react';
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
import AIAdvisor from '@/components/home/AIAdvisor'; // Ensure this import path is correct
import TopFaculty from '@/components/home/TopFaculty';
import DayAtIvy from '@/components/home/DayAtIvy';
import FAQ from '@/components/home/FAQ';
import WhatsAppCommunity from '@/components/home/WhatsAppCommunity';
import PlacementReportCTA from '@/components/home/PlacementReportCTA';

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className=' overflow-hidden'>
        <Hero />
        <Partners />
        <FeaturedCourses />
        <CallToAction />

        <PlacementReportCTA />
        <TopFaculty />
        <DayAtIvy />
        <WhyChooseUs />
        <AIFeatures />
        {/* The AIAdvisor component is now directly rendered on the Index page */}
        <AIAdvisor />
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
