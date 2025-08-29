"use client"; // make sure this is at the top if you're in Next.js app directory

import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone } from "lucide-react";
import AllCourses from "@/components/home/AllCourses";

const Categories = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect device only on client side
  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    }
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "919748441111";
    const defaultMessage =
      "Hello! I would like to schedule a phone call with a human career advisor from Ivy Professional School. Please provide available time slots.";
    const encodedMessage = encodeURIComponent(defaultMessage);

    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleCallClick = () => {
    if (isMobile) {
      window.location.href = `tel:7676882222`;
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center px-4 py-12 md:py-16 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#009fda]">
          Thank You for Your Enquiry!
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-xl">
          Your submission has been received successfully. Our academic counselor
          will get back to you soon!
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={handleWhatsAppClick}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Enquire on WhatsApp
          </Button>

          <Button
            variant="outline"
            onClick={handleCallClick}
            className="flex items-center justify-center"
          >
            <Phone className="mr-2 h-4 w-4" />
            {isMobile ? (
              "Call Now"
            ) : (
              <>
                Call: <span className="ml-1 font-mono">7676882222</span>
              </>
            )}
          </Button>
        </div>
      </main>

      <AllCourses />
      <Footer />
    </>
  );
};

export default Categories;
