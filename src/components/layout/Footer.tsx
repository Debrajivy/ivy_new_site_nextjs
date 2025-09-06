
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const officeLocations = [
    {
      city: "Kolkata",
      address: "Camac Street"
    },
    {
      city: "Pune",
      address: "Shivaji Nagar"
    },
    {
      city: "Bangalore",
      address: "Indiranagar"
    },
    {
      city: "Delhi",
      address: "Karol Bagh"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Link href="/" className="flex items-center">
                <img
                  src="/lovable-uploads/ff3e5927-bf09-4aeb-a4ff-3583075c362e.png"
                  alt="Ivy Professional School"
                  className="h-12 mb-3"
                />
              </Link>
              <div className="mt-2 flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://w3.org/2000/svg" className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm">4.8/5 (2,250+ reviews)</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Leading the way in data science and AI education since 2008, empowering professionals to transform their careers.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/ivyproschool" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/ivyproschool" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://in.linkedin.com/school/ivy-professional-school" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com/ivyproschool" aria-label="YouTube" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://instagram.com/ivyproschool" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><Link href="/courses/iit-data-science-course" className="text-gray-300 hover:text-white transition-colors">IIT Data Science</Link></li>
              <li><Link href="/courses/data-engineering-course">Cloud Data Engineering</Link></li>
              <li><Link href="/courses/iit-generative-ai-course" className="text-gray-300 hover:text-white transition-colors">Executive Generative AI</Link></li>
              <li><Link href="/courses/data-science-and-ml-course" className="text-gray-300 hover:text-white transition-colors">Machine Learning & AI</Link></li>
              <li><Link href="/courses/iit-data-engineering-course" className="text-gray-300 hover:text-white transition-colors">IIT Data Engineering</Link></li>
              <li><Link href="/courses/data-analytics-course" className="text-gray-300 hover:text-white transition-colors">Data Analytics</Link></li>
              <li><Link href="/courses/business-analytics-course" className="text-gray-300 hover:text-white transition-colors">Business Analytics</Link></li>
              <li><Link href="/courses/data-visualization-course" className="text-gray-300 hover:text-white transition-colors">Data Visualization</Link></li>
              {/* <li><Link href="/categories/deep-learning" className="text-gray-300 hover:text-white transition-colors">Deep Learning</Link></li>
              <li><Link href="/categories" className="text-gray-300 hover:text-white transition-colors">All Courses</Link></li> */}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {/* <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about#founders" className="text-gray-300 hover:text-white transition-colors">Our Founders</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li> */}
              <li><Link href="/enterprise" className="text-gray-300 hover:text-white transition-colors">Enterprise</Link></li>
              <li><Link href="/alumni" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="https://youtube.com/ivyproschool" className="text-gray-300 hover:text-white transition-colors">YouTube Channel</Link></li>
              <li><Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            {/* <h3 className="font-semibold text-lg mb-4">Subscribe</h3> */}
            {/* <p className="text-gray-300 mb-4">
              Stay updated with our latest courses and AI news.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700"
              />
              <Button className="bg-ivy-blue text-white hover:bg-opacity-90">Subscribe</Button>
            </div> */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-gray-300">info@ivyproschool.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-gray-300">+91 9748441111</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Our Offices</h4>
              <div className="grid grid-cols-2 gap-2">
                {officeLocations.map((office, index) => (
                  <div key={index} className="flex items-start">
                    <MapPin size={14} className="mr-1 flex-shrink-0 mt-0.5 text-gray-400" />
                    <div className="text-sm">
                      <span className="text-gray-300 font-medium">{office.city}</span>
                      <p className="text-gray-400 text-xs">{office.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          {/* Use grid-cols-1 for mobile, and grid-cols-3 for medium screens and up */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Column 1: Data Engineering Course text */}
            <div className="w-full flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4">
              <Link href="/courses/data-engineering-course-in-kolkata">
                <p className="text-gray-400 text-xs hover:text-white transition-colors">
                  Data Engineering Course in Kolkata
                </p>
              </Link>
             
            </div>

            {/* Column 2: Copyright */}
            <div className="flex justify-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Ivy Professional School. All rights reserved.
              </p>
            </div>

            {/* Column 3: Links */}
            <div className="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/sitemap.xml" className="text-gray-400 text-sm hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
