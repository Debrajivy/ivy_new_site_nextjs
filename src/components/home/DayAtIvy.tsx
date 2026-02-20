
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Users } from 'lucide-react';
import presentation from "@/assests/1.webp";
import workshop from "@/assests/2.webp";
import networking from "@/assests/3.webp";
import training from "@/assests/4.webp";
import CallToAction from './CallToAction';
import Image from 'next/image';

const DayAtIvy = () => {
  const campusEvents = [
    {
      id: 1,
      title: "Project Presentations",
      description: "Students presenting their capstone projects to industry mentors",
      image: presentation,
      tag: "Classroom"
    },
    {
      id: 2,
      title: "Workshop Session",
      description: "Hands-on AI model building workshop with our industry experts",
      image: workshop,
      tag: "Workshop"
    },
    {
      id: 3,
      title: "Networking Event",
      description: "Students connecting with alumni and potential employers",
      image: networking,
      tag: "Community"
    },
    // {
    //   id: 4,
    //   title: "Enterprise Training Session",
    //   description: "Corporate training program for banking professionals",
    //   image: training,
    //   tag: "Enterprise"
    // }
  ];

 return (
  <section className="py-8 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center gap-2 mb-4">
          {/* <Camera className="h-6 w-6 text-ivy-orange" /> */}
          <h2 className="text-3xl font-bold">What’s a Typical Day Like for a AI Learner at Ivy?</h2>
        </div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Take a glimpse into the vibrant learning environment at Ivy Professional School.
          From interactive workshops to networking events, our campus is always buzzing with activity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campusEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-all border-none">
            <div className="relative w-full">
              <Image
                width={500}
                height={300}
                src={event.image}
                alt={event.title}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
              <div className="absolute top-2 right-2 bg-white/90 text-primary text-xs font-medium px-2 py-1 rounded">
                {event.tag}
              </div>
            </div>
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-1">{event.title}</h3>
              <p className="text-gray-600 text-sm">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    {/* Moved CallToAction outside the container div */}
    {/* <CallToAction /> */}

    {/* <div style={{marginTop:10}} className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-lg">
          <Users className="text-primary h-5 w-5" />
          <span className="text-gray-600 text-sm">Join our next campus open day on June 15, 2025</span>
        </div>
      </div> */}
  </section>
);
};

export default DayAtIvy;
