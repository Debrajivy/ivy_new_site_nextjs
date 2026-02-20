import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, GraduationCap, Building, Award, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import meityLogo from '@/assests/meity.webp';
import Nasscom from '@/assests/NASSCOM.webp';
import IBM from '@/assests/placement/IBM_MAIN.webp';
import IIT from "@/assests/IIT2.webp";
import img1 from "@/assests/img1.webp";
import img2 from "@/assests/img2.webp";
import img3 from "@/assests/img3.webp";
import microsoftd from "../../assests/microsoftd.webp";
import googled from "../../assests/googled.webp";
import ibmd from "../../assests/ibmd.webp"
import amazond from "../../assests/amazond.webp"
import deloitted from "../../assests/deloitted.webp";
import pwcd from "../../assests/pwcd.webp";
import capgeminid from "../../assests/capgeminid.webp";
import pwctra from "@/assests/Pwctra.webp";
import tescotra from "@/assests/Tescotra.webp";
import hsbctra from "@/assests/hsbctra.webp";
import tatatra from "@/assests/Tatatra1.webp";
import ITctra from "@/assests/ITCtra.webp";
import honeywelltra from "@/assests/Honeywelltra.webp";
import genpacttra from "@/assests/Genpacttra.webp";
import cognizanttra from "@/assests/Cognizanttra.webp";
import accenturetra from "@/assests/Accenturetra.webp";
import Image from 'next/image';
import Link from "next/link";
const Partners = () => {
  const partners = [
    { name: 'Pwc', logo: pwctra },
    { name: 'Tesco', logo: tescotra },
    { name: 'HSBC', logo: hsbctra },
    { name: 'TataSteel', logo: tatatra },
    { name: 'ITC', logo: ITctra },
    { name: 'Honeywell', logo: honeywelltra },
    { name: 'Genpact', logo: genpacttra },
    { name: 'Cognizant', logo: cognizanttra },
    { name: 'Accenture', logo: accenturetra },
  ];

  const getAccreditationIcon = (description: any) => {
    switch (description) {
      case 'Academic Partner':
        return GraduationCap;
      case 'Recognized by MeitY':
        return GraduationCap;
      case 'Industry Standards':
        return Award;
      case 'Technology Partner':
        return Award;
      default:
        return null;
    }
  };

  const accreditations = [
    // {
    //   logo: IIT,
    //   description: 'Academic Partner',
    //   badge: 'Official Partner'
    // },
    {
      logo: meityLogo,
      description: 'Recognized by MeitY',
      badge: 'Govt. Recognition'
    },
    {
      logo: Nasscom,
      description: 'Industry Standards',
      badge: 'Learning Partner'
    },
    {
      logo: IBM,
      description: 'Technology Partner',
      badge: 'Learning Partner'
    }
  ];

  const enterpriseEvents = [
    {
      id: 1,
      company: "Business Insights at TESCO",
      image: img1,
      description: "Executive KPI dashboards workshop on Tableau"
    },
    {
      id: 2,
      company: "Agile & Sprint Planning at iQuanti",
      image: img3,
      description: "Session on real-time backlog management"
    },
    {
      id: 3,
      company: "Advanced AI for CXOs at Atlas Copco",
      image: img2,
      description: "Strategic Integration of AI for Manufacturing Leadership"
    },
  ];

  return (
    <section className="bg-gray-50 py-8 md:py-16">
      <div className="container mx-auto px-4">


        <div className="mb-8 md:mb-12" style={{ marginTop: -20 }}>
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-4 px-2">
            Stand out with our Reputed Partnership Certification
          </h2>
        </div>

        {/* UPDATED ACCREDITATIONS SECTION STARTS HERE */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {accreditations.map((item) => {
            const IconComponent = getAccreditationIcon(item.description);
            return (
              <div
                key={item.description}
                className="relative flex flex-col items-center p-4 bg-white rounded-lg shadow-sm text-center w-full max-w-[220px]" // Removed border styles here
              >
                {/* Top-right icon with light outer border and 3D shade */}
                {IconComponent && (
                  <div className="absolute -top-3 -right-3 p-1 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <div className="bg-[#00a1db] rounded-full p-2 flex items-center justify-center">
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                  </div>
                )}

                {/* Big Size Logo - Directly on the card, no nested border/box */}
                <div style={{ marginTop: -20 }} className="flex items-center justify-center mb-4">
                  <Image
                    width={128}
                    height={128}
                    src={item.logo}
                    alt={`${item.description} logo`}
                    className="h-32 w-32 object-contain" // Increased size to h-32 w-32
                    loading="lazy"
                  />
                </div>

                <p style={{ marginTop: -30 }} className="text-base font-medium text-gray-700 mb-2 leading-tight">{item.description}</p>

                {/* Badge as blue text with checkmark */}
                <span className="text-[#00a1db] text-sm flex items-center gap-1 font-medium whitespace-nowrap">
                  <CheckCircle className="h-3.5 w-3.5" />
                  {item.badge}
                </span>
              </div>
            );
          })}
        </div>
        {/* UPDATED ACCREDITATIONS SECTION ENDS HERE */}

        {/* Fortune 500 Partners Section */}
        <div className="mb-8 mt-12">
          <h2 className="text-center text-lg sm:text-xl font-medium text-gray-600 px-2">
            Ivy led AI Transformation in Fortune 500 Companies          </h2>
        </div>

        {
          <div className="flex flex-wrap justify-center items-center gap-x-0 gap-y-0 sm:gap-x-6 sm:gap-y-4">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center w-[calc(33.333%)] sm:w-24 h-20 sm:h-24">
                <Image
                  width={128}
                  height={128}
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-14 sm:h-16 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                  loading="lazy"
                />
              </div>
            ))}

            <div className="flex items-center justify-center w-full sm:w-auto h-20 sm:h-24 mt-2 sm:mt-0">
              <p style={{ marginTop: 30, fontWeight: 'bold' }} className="text-gray-500 text-sm sm:text-base font-light opacity-70 leading-tight text-center">
                and many more...
              </p>
            </div>
          </div>
        }

        {/* Enterprise Training in Action Section */}
        <div style={{ backgroundColor: '#e3e8eb', marginTop: '40px', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }} className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="flex flex-col items-center gap-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2 px-2">
                  How Does Ivy Pro School Enable Enterprise in AI Transformation?
                </h2>
                <p className="text-gray-500 text-sm max-w-2xl mx-auto px-2">
                  Join 500+ companies who trust Ivy Professional School for their data science and AI training needs
                </p>
              </div>
            </div>




            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {enterpriseEvents.map((event) => (
                <Link
                  key={event.id}
                  href="https://ivyproschool.com/enterprise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card key={event.id} className="overflow-hidden border-none shadow-md">
                    <div>
                      <img
                        src={event.image.src}
                        alt={`Training at ${event.company}`}
                        className="w-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 style={{ color: '#00a1db' }} className="font-semibold text-lg">{event.company}</h4>
                      <p className="text-sm text-gray-600">{event.description}</p>
                    </CardContent>
                  </Card>
                </Link>

              ))}
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {enterpriseEvents.map((event) => (
                <Link
                  key={event.id}
                  href="https://ivyproschool.com/enterprise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <div>
                      <Image
                        width={128}
                        height={128}
                        src={event.image}
                        alt={`Training at ${event.company}`}
                        className="w-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4
                        style={{ color: "#00a1db" }}
                        className="font-semibold text-lg"
                      >
                        {event.company}
                      </h4>
                      <p className="text-sm text-gray-600">{event.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;