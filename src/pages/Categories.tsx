
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AllCourses from '@/components/home/AllCourses';
const categories = [
  {
    name: "Data Science",
    description: "Learn to extract insights and value from data through statistical analysis, machine learning, and data visualization.",
    icon: "📊",
    courses: 12,
    slug: "data-science"
  },
  {
    name: "Data Engineering",
    description: "Master the skills to design, build, and maintain data pipelines and infrastructure for efficient data processing.",
    icon: "⚙️",
    courses: 8,
    slug: "data-engineering"
  },
  {
    name: "Generative AI",
    description: "Explore cutting-edge techniques for creating AI systems that can generate new content like images, text, and code.",
    icon: "🤖",
    courses: 6,
    slug: "generative-ai"
  },
  {
    name: "Machine Learning",
    description: "Build intelligent systems that can learn from data and make predictions or decisions without being explicitly programmed.",
    icon: "🧠",
    courses: 10,
    slug: "machine-learning"
  },
  {
    name: "Deep Learning",
    description: "Dive into neural networks and advanced architectures that power modern AI in image recognition, natural language processing, and more.",
    icon: "🔥",
    courses: 7,
    slug: "deep-learning"
  },
  {
    name: "Big Data",
    description: "Learn to process, store, and analyze massive datasets using distributed computing frameworks and cloud technologies.",
    icon: "📚",
    courses: 5,
    slug: "big-data"
  }
];

const Categories = () => {
  return (
    <>
      <Navbar />
      <AllCourses/>
      {/* <main className="min-h-screen">
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Course Categories</h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore our wide range of data science and AI courses designed to help you master the skills needed for today's tech landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Card key={category.name} className="card-hover border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{category.courses} Courses</span>
                      <Button variant="outline" asChild>
                        <Link to={`/categories/${category.slug}`} className="flex items-center">
                          Browse <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main> */}
      <Footer />
    </>
  );
};

export default Categories;
