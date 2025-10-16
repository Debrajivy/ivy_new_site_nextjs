
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CalendarClock, Users, Medal, Briefcase, TrendingUp, Award } from 'lucide-react';

const features = [
  {
    icon: <CalendarClock className="h-8 w-8 text-primary" />,
    title: "17+ Years of Excellence",
    description: "Delivering high-quality data science & AI education since 2008 with proven expertise"
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Live Interactive Learning",
    description: "Interactive sessions with faculty with 24*7 feedback support session & collaboration"
  },
  {
    icon: <Medal className="h-8 w-8 text-primary" />,
    title: "Industry Expert Instructors",
    description: "Learn from industry professionals IIT, IIM, Fortune 500 & top tech companies"
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Flexible Hybrid Classes",
    description: "Join flexible Weekend & Weekday batches with Online/Offline & Live classes"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Career Growth",
    description: "94% of our students report significant career advancement within 6 months."
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Accredited Certification",
    description: "Industry-recognized credentials ie, IBM, Nasscom & many more"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 style={{marginTop:-20}} className="text-3xl font-bold mb-4">Why Ivy Pro School is the  Right Choice for Data Science or GenAI Career?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We combine academic excellence with practical industry knowledge to deliver 
            transformative learning experiences for data professionals worldwide.
          </p>
        </div>
        
        <div style={{marginTop:-20}} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
