
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import PrateekAgarwal from "@/assests/pratilk.webp";
import eeshani from "@/assests/eeshani.webp";
import prakhar from "@/assests/prakhar.webp";
import raju from "@/assests/raju.webp";
import Image, { StaticImageData } from 'next/image';

interface Faculty {
  id: string;
  name: string;
  position: string;
  expertise: string;
  experience: string;
  previousCompanies: string[];
  image: StaticImageData;
}

const faculty: Faculty[] = [
  {
    id: '1',
    name: "Prateek Agarwal",
    position: "Founder, Ivy Pro School | Time2Justice",
    expertise: "Consulting, Analytics, Data Science",
    experience: "16+ years",
    previousCompanies: ["Worked with 50+ global firms (IIT KGP, IIM Kolkata, IIT Delhi – trained students)"],
    image: PrateekAgarwal
  },
  {
    id: '2',
    name: " Eeshani Agrawal",
    position: "Co Founder, Ivy Pro School",
    expertise: "Data Consulting, Training, Analytics Strategy",
    experience: "16+ years",
    previousCompanies: ["Top IITs, IIMs, ISI; 9,000+ professionals trained"],
    image:eeshani
  },
  {
    id: '3',
    name: "Prakhar Gupta",
    position: "Co-founder, Adorhythm",
    expertise: "Statistics, AI, Analytics, Business Advisory",
    experience: "12+ years",
    previousCompanies: ["Consultant to global firms; IIT Delhi alumnus"],
    image: prakhar
  },
  {
    id: '4',
    name: "Raju Kumar Misra",
    position: "Corporate Trainer & Author",
    expertise: "Ex-Oracle, Ex-IISc, Kaggle Grandmaster",
    experience: "15+ years",
    previousCompanies: ["PwC", "Fractal Analytics"],
    image:raju
  }
];


const linkedinLinks: { [key: string]: string } = {
  '1': "https://www.linkedin.com/in/prateekagrawal",
  '2': "https://www.linkedin.com/in/eeshani-agrawal-b674045"
};
const TopFaculty = () => {
  return (
    <section style={{paddingBottom:15}} className="bg-ivy-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            {/* <Award className="h-6 w-6 text-ivy-orange" /> */}
            <h2 style={{marginTop:10}} className="text-3xl font-bold">Who Are the Data & AI Experts Teaching at Ivy Pro School?</h2>
          </div>
          
          <p className="text-gray-600 max-w-3xl mx-auto">
            All Ivy instructors are experienced industry professionals with over 10 years of expertise across 
            Data Science, GenAI, and Analytics. They don't just teach—they mentor, guide, and personally 
            invest in your success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         {faculty.map((member) => {
            const link = linkedinLinks[member.id];
            
            // Check if a link exists for the current member
            if (link) {
              return (
                <a href={link} key={member.id} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all h-full">
                    <div className="bg-ivy-blue h-2"></div>
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center mb-4">
                        <div className="rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                          <Image
                            width={96}
                            height={96} 
                            src={member.image} 
                            alt={member.name} 
                            className="w-24 h-24 object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-lg text-center">{member.name}</h3>
                        <p className="text-primary font-medium text-sm">{member.position}</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <GraduationCap className="h-5 w-5 text-ivy-orange mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium text-sm">Expertise</p>
                            <p className="text-gray-600 text-sm">{member.expertise}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Briefcase className="h-5 w-5 text-ivy-blue mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium text-sm">Previous Companies</p>
                            <p className="text-gray-600 text-sm">{member.previousCompanies.join(", ")}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Award className="h-5 w-5 text-ivy-orange mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium text-sm">Experience</p>
                            <p className="text-gray-600 text-sm">{member.experience}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              );
            } else {
              return (
                <Card key={member.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all h-full">
                  <div className="bg-ivy-blue h-2"></div>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center mb-4">
                      <div className="rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                        <Image
                          width={96}
                          height={96} 
                          src={member.image} 
                          alt={member.name} 
                          className="w-24 h-24 object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-lg text-center">{member.name}</h3>
                      <p className="text-primary font-medium text-sm">{member.position}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <GraduationCap className="h-5 w-5 text-ivy-orange mr-2 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Expertise</p>
                          <p className="text-gray-600 text-sm">{member.expertise}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Briefcase className="h-5 w-5 text-ivy-blue mr-2 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Previous Companies</p>
                          <p className="text-gray-600 text-sm">{member.previousCompanies.join(", ")}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="h-5 w-5 text-ivy-orange mr-2 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Experience</p>
                          <p className="text-gray-600 text-sm">{member.experience}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default TopFaculty;
