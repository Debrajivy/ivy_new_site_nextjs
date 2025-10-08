
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Mail, Phone, ArrowRight, Linkedin, Twitter, Globe } from 'lucide-react';
import TrialClassCTA from '@/components/shared/TrialClassCTA';

const About = () => {
  const founders = [
    {
      name: "Dr. Arnab Bose",
      title: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
      bio: "With over 20 years of experience in data science, Dr. Bose founded Ivy Professional School with a vision to bridge the gap between theoretical education and industry needs.",
      linkedin: "https://linkedin.com/in/drbose",
      twitter: "https://twitter.com/drbose"
    },
    {
      name: "Subrata Sengupta",
      title: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3",
      bio: "An AI pioneer with expertise in building scalable data systems, Subrata leads Ivy's curriculum development and ensures our teaching methods are at the cutting edge of technology.",
      linkedin: "https://linkedin.com/in/subratasengupta",
      twitter: "https://twitter.com/subratasengupta"
    }
  ];

  const associatedCompanies = [
    {
      name: "DataWiz Analytics",
      description: "An analytics company specializing in business intelligence solutions, co-founded by Ivy Professional School.",
      website: "https://datawizanalytics.com"
    },
    {
      name: "AI Innovation Hub",
      description: "A research center focusing on cutting-edge AI applications in healthcare and finance, established in partnership with Ivy.",
      website: "https://aiinnovationhub.org"
    },
    {
      name: "TechTalent Connect",
      description: "A recruitment platform connecting data science professionals with top companies, launched as an Ivy initiative.",
      website: "https://techtalentconnect.com"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Ivy Professional School</h1>
              <p className="text-xl text-gray-600 mb-8">
                Leading the way in data science and AI education since 2008
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <p className="text-gray-600">Years of Excellence</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <p className="text-gray-600">Students Trained</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <p className="text-gray-600">Expert Instructors</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <p className="text-gray-600">Placement Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2008, Ivy Professional School began with a simple mission: to bridge the gap between theoretical data science education and practical industry needs. 
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a small training center with just three instructors has grown into a globally recognized institution with a presence across multiple countries and a faculty of over 200 industry experts.
                </p>
                <p className="text-gray-600">
                  Through economic shifts and technological revolutions, we've continuously evolved our curriculum to ensure our students are always prepared for the cutting edge of the data science and AI landscape.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                  alt="Ivy Professional School team" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <span className="font-medium">Est. 2008</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Founders Section */}
        <div id="founders" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Founders</h2>
              <p className="text-gray-600">
                Meet the visionaries who established Ivy Professional School and continue to guide our mission
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {founders.map((founder, index) => (
                <Card key={index} className="border-none shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-2/5 h-60 md:h-auto">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full md:w-3/5 p-6">
                      <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
                      <p className="text-primary text-sm font-medium mb-3">{founder.title}</p>
                      <p className="text-gray-600 text-sm mb-4">{founder.bio}</p>
                      <div className="flex space-x-3">
                        <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                          <Linkedin size={18} />
                        </a>
                        <a href={founder.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                          <Twitter size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Associated Companies */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Associated Companies</h2>
              <p className="text-gray-600">
                Organizations co-founded or closely associated with Ivy Professional School
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {associatedCompanies.map((company, index) => (
                <Card key={index} className="border-none shadow-md h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{company.name}</h3>
                    <p className="text-gray-600 mb-4">{company.description}</p>
                    <a 
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center text-primary hover:underline text-sm"
                    >
                      <Globe size={16} className="mr-2" />
                      Visit Website
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Our Mission & Vision */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower professionals with the skills, knowledge, and confidence to excel in the data-driven world through high-quality education that blends theoretical foundations with practical applications.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the premier global institution for data science and AI education, creating a community of skilled professionals who drive innovation and solve complex real-world problems through data.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600">
                The principles that guide everything we do at Ivy Professional School
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary">🌟</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in everything we do, from curriculum design to student support.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary">🔄</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We embrace change and continuously evolve our teaching methods and course content.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Community</h3>
                  <p className="text-gray-600">
                    We foster a supportive community where students and instructors collaborate and grow together.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* CTA for Trial Classes */}
        <div className="container mx-auto px-4 pb-16">
          <TrialClassCTA />
        </div>
        
        {/* Contact Us */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600">
                Have questions? We're here to help. Reach out to our team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Our Locations</h3>
                  <div className="space-y-4">
                    <div className="flex">
                      <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Kolkata</h4>
                        <p className="text-gray-600">Salt Lake Sector V, Kolkata</p>
                      </div>
                    </div>
                    <div className="flex">
                      <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Pune</h4>
                        <p className="text-gray-600">Baner Road, Pune</p>
                      </div>
                    </div>
                    <div className="flex">
                      <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Bangalore</h4>
                        <p className="text-gray-600">Koramangala, Bangalore</p>
                      </div>
                    </div>
                    <div className="flex">
                      <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Delhi</h4>
                        <p className="text-gray-600">Connaught Place, Delhi</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex">
                      <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-gray-600">info@ivyproschool.com</p>
                      </div>
                    </div>
                    <div className="flex">
                      <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Phone</h4>
                        <p className="text-gray-600">+91 7676882222</p>
                      </div>
                    </div>
                    <Button className="w-full mt-2" asChild>
                      <Link href="/contact-us" className="flex items-center justify-center">
                        Send a Message <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
