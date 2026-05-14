"use client";
import React, { useEffect } from 'react';
import { X, CheckCircle, Award, Users, Clock, Shield, Star, GraduationCap, TrendingUp } from 'lucide-react';
import icon from "@/assests/icon.webp";
import NASSCOM from "@/assests/NASSCOM.webp";
import IBM from "@/assests/IBM.png";
import IIT from "@/assests/IIT.png";

interface RegisterModalProps {
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose }) => {
  useEffect(() => {
    const container = document.getElementById('register-modal-iframe');
    if (!container) return;
    container.innerHTML = '';
    const iframe = document.createElement('iframe');
    iframe.name = "leadsquared_landing_page_frame";
    iframe.src = "https://ivyproschool.viewpage.co/IVY?ignoremxtracking=mxtrue";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.frameBorder = "0";
    iframe.style.border = "none";
    container.appendChild(iframe);
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.innerHTML = "var MXLandingPageId = '2c296ae6-63a9-11f0-aa4a-06f2115baecb';";
    container.appendChild(script);
  }, []);

  const benefits = [
    { Icon: GraduationCap, text: "Live classes with IIT & IIM faculty" },
    { Icon: Shield, text: "NASSCOM, IBM & MEITY certified" },
    { Icon: Users, text: "37,500+ professionals trained" },
    { Icon: Award, text: "100% placement support" },
    { Icon: TrendingUp, text: "67% average salary hike" },
    { Icon: Clock, text: "Flexible weekend & weekday batches" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
        style={{ maxHeight: '92vh' }}
      >
        {/* ── Left Branding Panel (desktop only) ── */}
        <div
          className="hidden lg:flex lg:w-[42%] flex-col justify-between p-8"
          style={{ background: 'linear-gradient(145deg, #013a81 0%, #009fda 100%)' }}
        >
          {/* Top content */}
          <div>
            {/* Logo */}
            <img
              src={typeof icon === 'string' ? icon : icon.src}
              alt="Ivy Professional School"
              className="h-11 mb-7 brightness-0 invert"
            />

            <h2 className="text-2xl font-bold text-white leading-snug mb-2">
              Book Your Free<br />Demo Class
            </h2>
            <p className="text-blue-200 text-sm mb-8 leading-relaxed">
              Experience India's #1 Data & AI training before you commit. No obligation — just learning.
            </p>

            {/* Benefits */}
            <div className="space-y-3.5">
              {benefits.map(({ Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-[#f7af34]" />
                  </div>
                  <span className="text-sm text-white/90">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: Accreditations + Rating */}
          <div className="mt-8">
            <p className="text-[10px] text-blue-300 uppercase tracking-widest mb-3 font-semibold">
              Accredited &amp; Recognised By
            </p>
            <div className="flex items-center gap-2 mb-5 flex-wrap">
              {[
                { src: typeof NASSCOM === 'string' ? NASSCOM : NASSCOM.src, alt: 'NASSCOM' },
                { src: typeof IBM === 'string' ? IBM : IBM.src, alt: 'IBM' },
                { src: typeof IIT === 'string' ? IIT : IIT.src, alt: 'IIT' },
              ].map((logo) => (
                <div key={logo.alt} className="bg-white rounded-lg px-2.5 py-1.5">
                  <img src={logo.src} alt={logo.alt} className="h-5 w-auto object-contain" />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-[#f7af34] text-[#f7af34]" />
                ))}
              </div>
              <div>
                <span className="text-white font-bold text-sm">4.8 / 5</span>
                <span className="text-blue-200 text-xs ml-1.5">from 2,250+ reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Form Panel ── */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* Mobile header */}
          <div
            className="flex items-center justify-between p-4 border-b lg:hidden"
            style={{ background: 'linear-gradient(90deg, #013a81 0%, #009fda 100%)' }}
          >
            <div className="flex items-center gap-2.5">
              <img
                src={typeof icon === 'string' ? icon : icon.src}
                alt="Ivy Pro School"
                className="h-8 brightness-0 invert"
              />
              <div>
                <p className="text-white font-bold text-sm leading-none">Book Free Demo Class</p>
                <p className="text-blue-200 text-xs mt-0.5">India's #1 Data &amp; AI Institute</p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <X className="h-4 w-4 text-white" />
            </button>
          </div>

          {/* Desktop close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 z-20 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors hidden lg:flex items-center justify-center"
          >
            <X className="h-4 w-4 text-gray-600" />
          </button>

          {/* LeadSquared iframe */}
          <div
            id="register-modal-iframe"
            className="flex-1 overflow-hidden"
            style={{ minHeight: 500 }}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
