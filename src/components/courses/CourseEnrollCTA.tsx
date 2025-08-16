
import React from 'react';
import { Button } from '@/components/ui/button';
import { Course } from '@/lib/api';
import { CheckCircle, Calendar, CreditCard, BookOpen, Award, BarChart4, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CourseEnrollCTAProps {
  course: Course;
}

const CourseEnrollCTA = ({ course }: CourseEnrollCTAProps) => {
  return (
    <></>
    // <section className="py-16 bg-gradient-to-r from-ivy-purple to-ivy-blue text-white">
    //   <div className="container mx-auto px-4">
    //     <div className="max-w-6xl mx-auto">
    //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
    //         <div className="lg:col-span-2 space-y-6">
    //           <h2 className="text-3xl font-bold">Ready to Transform Your Career?</h2>
    //           <p className="text-lg opacity-90">
    //             Join our community of over 50,000 successful alumni and learn from industry experts who are leaders in their field.
    //             With a 94% placement rate, our focus is on getting you job-ready and connecting you with top employers.
    //           </p>
              
    //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    //             <div className="flex items-start">
    //               <CheckCircle className="mt-1 mr-2" />
    //               <div>
    //                 <h4 className="font-semibold">Job-Ready Skills</h4>
    //                 <p className="text-sm opacity-75">Curriculum designed with industry needs in mind</p>
    //               </div>
    //             </div>
    //             <div className="flex items-start">
    //               <CheckCircle className="mt-1 mr-2" />
    //               <div>
    //                 <h4 className="font-semibold">Industry Connections</h4>
    //                 <p className="text-sm opacity-75">Access to our network of Fortune 500 companies</p>
    //               </div>
    //             </div>
    //             <div className="flex items-start">
    //               <CheckCircle className="mt-1 mr-2" />
    //               <div>
    //                 <h4 className="font-semibold">Hands-On Projects</h4>
    //                 <p className="text-sm opacity-75">Build a portfolio with real-world projects</p>
    //               </div>
    //             </div>
    //             <div className="flex items-start">
    //               <CheckCircle className="mt-1 mr-2" />
    //               <div>
    //                 <h4 className="font-semibold">Placement Assistance</h4>
    //                 <p className="text-sm opacity-75">Resume building, interviews, and job placement</p>
    //               </div>
    //             </div>
    //           </div>
              
    //           <div className="bg-white/10 p-5 rounded-lg mt-6">
    //             <div className="font-bold mb-3 flex items-center">
    //               <Award className="mr-2" /> Career Outcomes
    //             </div>
    //             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
    //               <div>
    //                 <div className="text-3xl font-bold mb-1">94%</div>
    //                 <p className="text-sm opacity-75">Placement Rate</p>
    //               </div>
    //               <div>
    //                 <div className="text-3xl font-bold mb-1">70%</div>
    //                 <p className="text-sm opacity-75">Average Salary Increase</p>
    //               </div>
    //               <div>
    //                 <div className="text-3xl font-bold mb-1">500+</div>
    //                 <p className="text-sm opacity-75">Hiring Companies</p>
    //               </div>
    //             </div>
    //           </div>
              
    //           <div className="pt-4 flex flex-col sm:flex-row gap-4">
    //             <Button size="lg" className="bg-ivy-orange hover:bg-opacity-90">
    //               Enroll Now
    //             </Button>
    //             <Button variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20">
    //               Download Syllabus
    //             </Button>
    //           </div>
              
    //           <div className="pt-2 text-sm opacity-75">
    //             <p>*Limited seats available for upcoming batch starting June 15, 2025</p>
    //           </div>
    //         </div>
            
    //         <div>
    //           <Card className="bg-white/10 border-none shadow-lg">
    //             <CardContent className="p-6 space-y-6">
    //               <div className="space-y-2">
    //                 <h3 className="font-bold text-xl">Course Details</h3>
                    
    //                 <div className="flex items-center">
    //                   <Calendar size={18} className="mr-2 opacity-70" />
    //                   <div>
    //                     <div className="text-sm opacity-70">Next Batch</div>
    //                     <div>June 15, 2025</div>
    //                   </div>
    //                 </div>
                    
    //                 <div className="flex items-center">
    //                   <BookOpen size={18} className="mr-2 opacity-70" />
    //                   <div>
    //                     <div className="text-sm opacity-70">Duration</div>
    //                     <div>{course.duration}</div>
    //                   </div>
    //                 </div>
                    
    //                 <div className="flex items-center">
    //                   <CreditCard size={18} className="mr-2 opacity-70" />
    //                   <div>
    //                     <div className="text-sm opacity-70">Payment Options</div>
    //                     <div>Full payment or EMI available</div>
    //                   </div>
    //                 </div>
                    
    //                 <div className="flex items-center">
    //                   <BarChart4 size={18} className="mr-2 opacity-70" />
    //                   <div>
    //                     <div className="text-sm opacity-70">Job Support</div>
    //                     <div>Lifetime career services</div>
    //                   </div>
    //                 </div>
                    
    //                 <div className="flex items-center">
    //                   <Building size={18} className="mr-2 opacity-70" />
    //                   <div>
    //                     <div className="text-sm opacity-70">Hiring Partners</div>
    //                     <div>500+ top companies</div>
    //                   </div>
    //                 </div>
    //               </div>
                  
    //               <div className="pt-4 space-y-3">
    //                 <Button className="w-full bg-white text-ivy-purple hover:bg-white/90">
    //                   Apply Now
    //                 </Button>
    //                 <Button variant="outline" className="w-full border-white text-white hover:bg-white/20">
    //                   Schedule a Call
    //                 </Button>
    //               </div>
                  
    //               <div className="text-center text-sm opacity-75">
    //                 <p>Have questions? Call us at +91-98765-43210</p>
    //               </div>
    //             </CardContent>
    //           </Card>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default CourseEnrollCTA;
