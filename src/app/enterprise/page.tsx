
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Briefcase, Award, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Enterprise = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
                  <Briefcase size={16} className="mr-2" />
                  Enterprise Solutions
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Upskill Your Workforce with Data & AI Training
                </h1>
                <p className="text-xl text-white/80 mb-8 max-w-xl">
                  Customized cohort-based training programs to equip your team with the skills needed to drive innovation and stay ahead in the data-driven world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/enterprise-consultation">
                      Request Consultation
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10">
                    Download Brochure
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Enterprise training" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted By */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-lg font-medium text-gray-600 mb-8">
              Trusted by Leading Organizations
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" 
                alt="Microsoft logo" 
                className="h-8 md:h-10 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
                alt="IBM logo" 
                className="h-8 md:h-10 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
                alt="Amazon logo" 
                className="h-8 md:h-10 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Deloitte_Logo.png" 
                alt="Deloitte logo" 
                className="h-8 md:h-10 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                alt="Google logo" 
                className="h-8 md:h-10 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>
          </div>
        </div>
        
        {/* Solutions */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Tailored Enterprise Solutions</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We design custom training programs that address your organization's specific needs and challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Team Upskilling</h3>
                  <p className="text-gray-600 mb-4">
                    Enhance your existing team's capabilities with comprehensive training in data science, AI, and data engineering.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {['Customized curriculum', 'Hands-on projects', 'Progress tracking', 'Certification'].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Custom Projects</h3>
                  <p className="text-gray-600 mb-4">
                    Develop real-world solutions for your business challenges through our project-based learning approach.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {['Business problem analysis', 'Solution architecture', 'Guided implementation', 'Knowledge transfer'].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Flexible Delivery</h3>
                  <p className="text-gray-600 mb-4">
                    Choose from various delivery formats that fit your team's schedule and learning preferences.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {['Live virtual training', 'On-site workshops', 'Hybrid approach', 'Self-paced options'].map((item, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Process */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                A systematic process designed to deliver maximum impact and ROI for your organization
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Needs Assessment</h3>
                <p className="text-gray-600">
                  We analyze your current capabilities and identify skills gaps to target.
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Program Design</h3>
                <p className="text-gray-600">
                  Custom curriculum developed to address your specific business objectives.
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Implementation</h3>
                <p className="text-gray-600">
                  Expert-led training delivered in the format that works best for your team.
                </p>
              </div>
              
              <div className="text-center">
                <div className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Evaluation & Support</h3>
                <p className="text-gray-600">
                  Ongoing assessment and guidance to ensure knowledge retention and application.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Case Studies */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                See how organizations have transformed their data capabilities with our training programs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
                      alt="IBM logo" 
                      className="h-8 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">IBM</h3>
                  <p className="text-gray-600 mb-4">
                    "The custom AI training program developed by Ivy Professional School has significantly accelerated our product development cycles and improved our predictive models."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-3">
                      <img 
                        src="https://randomuser.me/api/portraits/men/32.jpg" 
                        alt="Client" 
                        className="rounded-full w-10 h-10 object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">Michael Johnson</div>
                      <div className="text-sm text-gray-500">Director of Data Science</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" 
                      alt="Microsoft logo" 
                      className="h-8 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Microsoft</h3>
                  <p className="text-gray-600 mb-4">
                    "Ivy's enterprise training helped us bridge critical skills gaps in our engineering team, enabling us to deliver more innovative solutions to our customers."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-3">
                      <img 
                        src="https://randomuser.me/api/portraits/women/44.jpg" 
                        alt="Client" 
                        className="rounded-full w-10 h-10 object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">Sarah Thompson</div>
                      <div className="text-sm text-gray-500">VP of Engineering</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Deloitte_Logo.png" 
                      alt="Deloitte logo" 
                      className="h-8 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Deloitte</h3>
                  <p className="text-gray-600 mb-4">
                    "The data engineering program delivered exceptional ROI, equipping our consultants with the skills to implement advanced data solutions for our clients."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-3">
                      <img 
                        src="https://randomuser.me/api/portraits/men/75.jpg" 
                        alt="Client" 
                        className="rounded-full w-10 h-10 object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">Robert Chen</div>
                      <div className="text-sm text-gray-500">Managing Partner</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/case-studies" className="flex items-center">
                  View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Organization?</h2>
              <p className="text-xl text-white/80 mb-8">
                Schedule a consultation with our enterprise team to discuss your training needs and how we can help you achieve your data and AI objectives.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/enterprise-consultation">
                    Schedule a Consultation
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10">
                  Download Enterprise Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Enterprise;
