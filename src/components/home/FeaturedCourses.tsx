"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Clock, Star, ChevronUp, ChevronDown, ChevronRight, CheckCircle } from 'lucide-react'; // Added CheckCircle for bullet points
import webp1 from "@/assests/webp1.webp";
import webp2 from "@/assests/webp2.webp";
import webp3 from "@/assests/datascience.jpeg";
import webp4 from "@/assests/webp4.webp";
import DS from "@/assests/DSI.webp";
import CDE from "@/assests/CDE.webp";
import ML from "@/assests/ML.webp";
import GA from "@/assests/GAI.webp";
import AIPM from "@/assests/AIPM.webp";

import DA from "@/assests/DA.webp";
import BA from "@/assests/BA.webp";
import DV from "@/assests/DV.webp";
import CDI from "@/assests/CDI.webp";
import CDEI from "@/assests/CDEI.webp";
import DSPAP from "@/assests/DSPAP.webp";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Course {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  category: string;
  students: number;
  duration: string;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  slug: string;
  keyFeatures: string[]; // Added keyFeatures array for bullet points
}

const featuredCourses: Course[] = [
  {
    id: '9',
    title: "AI for Product Manager",
    description: "Learn to leverage AI tools and techniques to enhance project management efficiency.",
    image: AIPM,
    category: "Project Manager",
    students: 440,
    duration: "6 weeks",
    rating: 4.7,
    reviewCount: 122,
    isFeatured: true,
    slug: "ai-product-manager-course",
    keyFeatures: [
      "20+ real-life products scenarios",
      "Industry-Focused Tools: Learn tools like PromptLayer, AI Agents, LangChain, Firebase Studio.",
    ]
  },
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
    category: "Data Engineering",
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
    title: "Data Science with Machine Learning & AI",
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
    category: "Visualization", // This seems like a mismatch with the description. It's listed as "Deep Learning" but the description is "Deep dive into neural networks and advanced ML techniques" which is appropriate but the title is "Data Visualization Course" which contradicts. If you want this to be a Data Visualization course, the description should be updated. I'll keep the description as is but noted this discrepancy.
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
    category: "Analytics", // This also seems like a mismatch. Title is "Business Analytics" but category and description point to AI. I'll keep it as is.
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
    category: "Big Data", // Another mismatch. Title is "Cloud Data Engineering" but description points to "Computer Vision". I'll keep it as is.
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
  {
    id: '10',
    title: "Data science course (Pay after Placement)",
     description: "Become job-ready with ML, DL, Python, and visualization tools",
    image: DSPAP,
    category: "Data Science",
    students: 1243,
    duration: "12 months",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: true,
    slug: "no-upfront-fees-data-science-and-ml-course",
    keyFeatures: [
      "In-depth ML algorithms",
      "Deep learning with TensorFlow/PyTorch",
      "Data visualization with Power BI"
    ]
  }

];

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Card className="card-hover h-full flex flex-col">
      <div className="relative">
        <Image
          src={course.image}
          alt={course.title}
          className="w-full h-auto max-h-60 object-cover rounded-t-lg"
        />

        <Badge className="absolute top-3 left-3 bg-primary">{course.category}</Badge>
        {course.isFeatured && (() => {
          switch (course.title) {
             case "AI for Product Manager":
              return <Badge className="absolute top-3 right-3 badge-featured">New</Badge>;
            case "Executive Generative AI Course with IIT Guwahati":
              return <Badge className="absolute top-3 right-3 badge">Trending</Badge>;
            case "Data Science & AI with IIT Guwahati":
              return <Badge className="absolute top-3 right-3 badge-genai">Featured</Badge>;
            case "Cloud Data Engineering Certification":
              return <Badge className="absolute top-3 right-3 badge-fullstack">Popular </Badge>;
            case "Data Science with Machine Learning & AI":
              return <Badge className="absolute top-3 right-3 badge-business">Best Choice</Badge>;
            case "Data Visualization Course":
              return <Badge className="absolute top-3 right-3 badge-deeplearning">Popular</Badge>;
            case "Data Analytics with Visualization Certification Course":
              return <Badge className="absolute top-3 right-3 badge-dataeng">Best Choice</Badge>;
            case "Business Analytics Certification Course":
              return <Badge className="absolute top-3 right-3 badge-analytics">Featured </Badge>;
            case "Cloud Data Engineering Course with IIT Guwahati":
              return <Badge className="absolute top-3 right-3 badge-ml">New</Badge>;
            default:
              return null;
          }
        })()}
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold">{course.title}</h3>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{course.students.toLocaleString()} students</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{course.duration}</span>
          </div>
        </div>
        {/* New section for key features */}
        {course.keyFeatures && course.keyFeatures.length > 0 && (
          <ul className="text-sm text-gray-700 space-y-1">
            {course.keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle size={16} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter className="pt-2 flex flex-col items-start">
        <div className="flex items-center mb-4 w-full">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span className="ml-1 font-medium">{course.rating}</span>
          </div>
          <span className="text-gray-500 text-sm ml-2">({course.reviewCount} reviews)</span>
        </div>
        <Link
          href={`/courses/${course.slug}`}
          className="w-full"
          onClick={() => window.scrollTo(0, 0)}
        >
          <Button className="w-full">View Program</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const FeaturedCourses = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);

  // Always show first 4 courses
  const initialCourses = featuredCourses.slice(0, 4);
  // Show remaining courses only when showAllCourses is true
  const remainingCourses = featuredCourses.slice(4);

  const toggleShowAllCourses = () => {
    setShowAllCourses(!showAllCourses);
  };

  return (
    <section className="py-5 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Which Data & AI Courses Should I Explore at Ivy?</h2>
            <p className="text-gray-600 max-w-2xl">
              Explore our most popular Data, GenAI and Data Engineering Courses
            </p>
          </div>
          <Link href="/categories" className="mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center">
              View All Courses
              <ChevronRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initialCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {showAllCourses && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {remainingCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}

        {featuredCourses.length > 4 && (
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              onClick={toggleShowAllCourses}
              className="flex items-center"
            >
              {showAllCourses ? 'Show Less' : 'Show More'}
              {showAllCourses ? (
                <ChevronUp size={16} className="ml-2" />
              ) : (
                <ChevronDown size={16} className="ml-2" />
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedCourses;