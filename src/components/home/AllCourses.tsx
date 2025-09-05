"use client";
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Clock, Star, CheckCircle, Search, Filter as FilterIcon, X as CloseIcon } from 'lucide-react';
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

// Assuming these asset paths are correct for your project
import webp1 from "@/assests/webp1.webp";
import webp2 from "@/assests/webp2.webp";
import webp3 from "@/assests/datascience.jpeg";
import webp4 from "@/assests/webp4.webp";
import DS from "@/assests/DSI.webp";
import CDE from "@/assests/CDE.webp";
import ML from "@/assests/ML.webp";
import GA from "@/assests/GAI.webp";
import DA from "@/assests/DA.webp";
import BA from "@/assests/BA.webp";
import DV from "@/assests/DV.webp";
import CDI from "@/assests/CDI.webp";
import CDEI from "@/assests/CDEI.webp";
import Image, { StaticImageData } from 'next/image';

interface Course {
  id: string;
  title: string;
  description: string;
  image: StaticImageData; // Assuming you are using Next.js with static images
  category: string;
  students: number;
  duration: string;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  slug: string;
  keyFeatures: string[];
}

const ALL_COURSE_CATEGORIES = [
  "Data Science",
  "Cloud Data Engineering",
  "Analytics",
  "Data Visualization",
  "Generative AI"
];

const featuredCourses: Course[] = [
  {
    id: '1',
    title: "Executive Generative AI Course with IIT Guwahati",
    description: "Learn to build and deploy GenAI models like GPT, DALL·E, and more",
    image: GA,
    category: "Generative AI",
    students: 2345,
    duration: "6 months",
    rating: 4.9,
    reviewCount: 567,
    isFeatured: true,
    slug: "iit-generative-ai-course",
    keyFeatures: [
      "20+ real-life project",
      "Live doubt-clearing sessions",
      "Learn Machine Learning, Deep Learning, Langchain, RAG, Transformer, LLM"
    ]
  },
  {
    id: '2',
    title: "Data Science & AI with IIT Guwahati",
    description: "Master end-to-end data science, AI, and visualization tools",
    image: DS,
    category: "Data Science",
    students: 1876,
    duration: "12 months",
    rating: 4.8,
    reviewCount: 432,
    isFeatured: true,
    slug: "iit-data-science-course",
    keyFeatures: [
      "50+ real-life projects",
      "Live doubt-clearing sessions",
      "Learn Adv Excel, SQL, Python, Power BI, VBA, Machine Learning & Tensorflow"
    ]
  },
  {
    id: '3',
    title: "Cloud Data Engineering Certification",
    description: "Master data pipelines, big data tools, and real-time processing",
    image: CDE,
    category: "Cloud Data Engineering",
    students: 1549,
    duration: "8 months",
    rating: 4.7,
    reviewCount: 345,
    isFeatured: true,
    slug: "data-engineering-course",
    keyFeatures: [
      "Hands-on with AWS, Azure, GCP",
      "Build scalable data architectures",
      "Real-time data stream processing"
    ]
  },
  {
    id: '4',
    title: "Data Science with Machine Learning & AI Certification",
    description: "Become job-ready with ML, DL, Python, and visualization tools",
    image: ML,
    category: "Data Science",
    students: 1243,
    duration: "12 months",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "data-science-and-ml-course",
    keyFeatures: [
      "In-depth ML algorithms",
      "Deep learning with TensorFlow/PyTorch",
      "Data visualization with Power BI"
    ]
  },
  {
    id: '5',
    title: "Data Visualization Course",
    description: "Deep dive into neural networks and advanced ML techniques",
    image: DV,
    category: "Data Visualization",
    students: 987,
    duration: "7 months",
    rating: 4.7,
    reviewCount: 210,
    isFeatured: true,
    slug: "data-visualization-course",
    keyFeatures: [
      "Master Tableau, Power BI",
      "Create interactive dashboards",
      "Storytelling with data"
    ]
  },
  {
    id: '6',
    title: "Data Analytics with Visualization Certification Course",
    description: "Learn Hadoop, Spark, and big data processing frameworks",
    image: DA,
    category: "Analytics",
    students: 876,
    duration: "11 months",
    rating: 4.6,
    reviewCount: 187,
    isFeatured: true,
    slug: "data-analytics-course",
    keyFeatures: [
      "Analyze large datasets",
      "Data mining techniques"
    ]
  },
  {
    id: '7',
    title: "Business Analytics Certification Course",
    description: "Strategic AI implementation for executives and managers",
    image: BA,
    category: "Analytics",
    students: 654,
    duration: "8 months",
    rating: 4.8,
    reviewCount: 143,
    isFeatured: true,
    slug: "business-analytics-course",
    keyFeatures: [
      "Data-driven decision making",
      "Predictive modeling for business"
    ]
  },
  {
    id: '8',
    title: "Cloud Data Engineering Course with IIT Guwahati",
    description: "Image processing and recognition with deep learning",
    image: CDEI,
    category: "Cloud Data Engineering",
    students: 543,
    duration: "8 months",
    rating: 4.7,
    reviewCount: 132,
    isFeatured: true,
    slug: "iit-data-engineering-course",
    keyFeatures: [
      "30+ real-life projects",
      "Live doubt-clearing sessions",
      "Learn industry focused tools i.e. Azure, Hive, MongoDB, Spark, Kafka & Hadoop"
    ]
  },
];

const CourseCard = ({ course }: { course: Course }) => {
  return (
    // IMPORTANT: Adjusted min-h and added 'h-auto' to ensure cards adapt to content
     <Card className="card-hover flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg min-h-[520px] h-auto">
      {/* Improved Image Container - Won't crop on any device */}
      <div className="relative w-full aspect-video bg-gray-100 flex items-center justify-center">
        <Image
          width={400}
          height={300}
          src={course.image}
          alt={course.title}
          className="w-full h-full object-contain p-1"
          loading="lazy"
        />
        
        {/* Category Badge */}
        <Badge className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
          {course.category}
        </Badge>
        
        {/* Featured Badge */}
        {course.isFeatured && (() => {
          let badgeText = "";
          let badgeClass = "";
          switch (course.title) {
            case "Executive Generative AI Course with IIT Guwahati":
              badgeText = "Trending";
              badgeClass = "bg-green-500 text-white";
              break;
            case "Data Science & AI with IIT Guwahati":
              badgeText = "Featured";
              badgeClass = "bg-orange-500 text-white";
              break;
            case "Cloud Data Engineering Certification":
              badgeText = "Popular";
              badgeClass = "bg-red-500 text-white";
              break;
            case "Data Science with Machine Learning & AI Certification":
              badgeText = "Best Choice";
              badgeClass = "bg-indigo-500 text-white";
              break;
            case "Data Visualization Course":
              badgeText = "Popular";
              badgeClass = "bg-pink-500 text-white";
              break;
            case "Data Analytics with Visualization Certification Course":
              badgeText = "Best Choice";
              badgeClass = "bg-teal-500 text-white";
              break;
            case "Business Analytics Certification Course":
              badgeText = "Featured";
              badgeClass = "bg-cyan-500 text-white";
              break;
            case "Cloud Data Engineering Course with IIT Guwahati":
              badgeText = "New";
              badgeClass = "bg-yellow-600 text-white";
              break;
            default:
              return null;
          }
          return (
            <Badge className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold shadow-md ${badgeClass}`}>
              {badgeText}
            </Badge>
          );
        })()}
      </div>

      {/* Card Content */}
      <CardHeader className="p-4 pb-2 flex-shrink-0">
        <h3 className="text-xl font-extrabold text-gray-800 leading-tight">
          {course.title}
        </h3>
      </CardHeader>

      <CardContent className="p-4 pt-0 flex-grow flex flex-col justify-between">
        <p className="text-gray-600 text-sm mb-3 line-clamp-4">
          {course.description}
        </p>
        
        <div className="flex flex-wrap gap-y-2 justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center mr-4">
            <Users size={16} className="mr-1 text-blue-500" />
            <span>{course.students.toLocaleString()} students</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1 text-purple-500" />
            <span>{course.duration}</span>
          </div>
        </div>

        {course.keyFeatures && course.keyFeatures.length > 0 && (
          <ul className="text-sm text-gray-700 space-y-1 mb-4">
            {course.keyFeatures.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle size={16} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
            {course.keyFeatures.length > 3 && (
              <li className="text-xs text-gray-500 italic">
                (and {course.keyFeatures.length - 3} more features)
              </li>
            )}
          </ul>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0 flex flex-col items-start border-t border-gray-100">
        <div className="flex items-center mb-3 w-full justify-between">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="ml-1 font-bold text-gray-800">{course.rating}</span>
            <span className="text-gray-500 text-xs ml-1">({course.reviewCount} reviews)</span>
          </div>
          <Link
            href={`/courses/${course.slug}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-colors duration-300 shadow-md">
              View Program
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

const FeaturedCourses = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false); // State for mobile filter panel

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (category === "All") {
      if (checked) {
        setSelectedCategories(ALL_COURSE_CATEGORIES);
      } else {
        setSelectedCategories([]);
      }
    } else {
      setSelectedCategories(prev => {
        if (checked) {
          return [...prev, category];
        } else {
          return prev.filter(c => c !== category);
        }
      });
    }
  };


  const filteredCourses = featuredCourses.filter(course => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category);
    const matchesSearchTerm = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  const isAllChecked = selectedCategories.length === ALL_COURSE_CATEGORIES.length;

  return (
    <section className="py-12 bg-gray-50 min-h-screen"> {/* Added min-h-screen */}
      <div className="container mx-auto px-4">
        {/* Page Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Explore Our Top-Rated Data & AI Programs
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover a curated selection of our most popular Data Science, Generative AI, and Data Engineering courses, designed to accelerate your career.
          </p>
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <Button
            onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center text-lg shadow-md"
          >
            {isFilterPanelOpen ? (
              <>
                <CloseIcon size={20} className="mr-2" /> Hide Filters
              </>
            ) : (
              <>
                <FilterIcon size={20} className="mr-2" /> Show Filters
              </>
            )}
          </Button>
        </div>

        {/* Main Content Area: Filters on left, Courses on right */}
        <div className="flex flex-col lg:flex-row gap-8 items-start"> {/* Added items-start */}
          {/* Filter Sidebar (Conditional visibility for mobile) */}
          <aside
            className={`
              w-full lg:w-72
              ${isFilterPanelOpen ? 'block' : 'hidden'} lg:block
              bg-white p-6 rounded-lg shadow-md border border-gray-200
              lg:sticky lg:top-8 // Adjusted sticky behavior
              lg:self-start // Helps sticky element align to start
            `}
            style={{ maxHeight: 'calc(100vh - 4rem)' }} // Limit height for sticky behavior on large screens
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-5 border-b pb-3">
              Quick Filter
            </h3>

            {/* Search Input */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-col space-y-3 overflow-y-auto pr-2" style={{ maxHeight: 'calc(100% - 150px)' }}> {/* Added overflow-y-auto and max-height */}
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Categories</h4>
              {/* "All" Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="filter-all"
                  checked={isAllChecked}
                  onCheckedChange={(checked) => handleCategoryChange("All", checked === true)}
                  className="w-5 h-5 border-2 border-blue-400 data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
                />
                <label htmlFor="filter-all" className="text-base font-medium text-gray-700 cursor-pointer select-none">
                  All Courses
                </label>
              </div>

              {/* Individual Category Filters */}
              {ALL_COURSE_CATEGORIES.map(category => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`filter-${category.toLowerCase().replace(/\s/g, '-')}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) => handleCategoryChange(category, checked === true)}
                    className="w-5 h-5 border-2 border-blue-400 data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
                  />
                  <label
                    htmlFor={`filter-${category.toLowerCase().replace(/\s/g, '-')}`}
                    className="text-base font-medium text-gray-700 cursor-pointer select-none"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </aside>

          {/* Course Cards Grid */}
          <div className="flex-1">
            {filteredCourses.length > 0 ? (
              // IMPORTANT: Changed to lg:grid-cols-3 and added grid-auto-rows-fr for explicit row sizing
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 grid-auto-rows-fr">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-white rounded-lg shadow-md border border-gray-200">
                <p className="text-xl text-gray-600">No courses found matching your criteria.</p>
                <Button
                  onClick={() => {
                    setSelectedCategories([]);
                    setSearchTerm('');
                    setIsFilterPanelOpen(false);
                  }}
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-lg transition-colors duration-300"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;