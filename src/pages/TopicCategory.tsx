
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, BookOpen } from 'lucide-react';

// This would typically come from an API, but for now we're using mock data
const getTopicsByCategory = (slug: string) => {
  return [
    {
      id: 1,
      title: "Introduction to Machine Learning Algorithms",
      slug: "intro-machine-learning-algorithms",
      description: "A beginner-friendly guide to understanding the most common machine learning algorithms and their applications.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3",
      author: "Dr. Sarah Chen",
      readTime: 12,
      tags: ["Machine Learning", "AI", "Algorithms"]
    },
    {
      id: 2,
      title: "Data Preprocessing Techniques for Effective Analysis",
      slug: "data-preprocessing-techniques",
      description: "Learn essential data preprocessing methods to clean and prepare your data for analysis and modeling.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      author: "Michael Roberts",
      readTime: 8,
      tags: ["Data Science", "Preprocessing", "Data Cleaning"]
    },
    {
      id: 3,
      title: "Building Neural Networks with PyTorch",
      slug: "building-neural-networks-pytorch",
      description: "A step-by-step guide to creating and training neural networks using the PyTorch framework.",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3",
      author: "Dr. Alex Wong",
      readTime: 15,
      tags: ["Deep Learning", "PyTorch", "Neural Networks"]
    }
  ];
};

// This would also come from an API in a real application
const getCategoryInfo = (slug: string) => {
  return {
    name: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: "Explore in-depth articles and tutorials on " + slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    count: 12
  };
};

const TopicCategory = () => {
  const { slug } = useParams();
  const topics = getTopicsByCategory(slug || '');
  const category = getCategoryInfo(slug || '');

  return (
    <>
      <Helmet>
        <title>{category.name} Topics | Ivy Professional School</title>
        <meta 
          name="description" 
          content={`${category.description} - Ivy Professional School`}
        />
      </Helmet>

      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ivy-blue to-blue-500 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-2 text-sm">
              <Link to="/" className="text-white/80 hover:text-white">Home</Link>
              <ChevronRight className="h-4 w-4 mx-1 text-white/60" />
              <Link to="/topics" className="text-white/80 hover:text-white">Topics</Link>
              <ChevronRight className="h-4 w-4 mx-1 text-white/60" />
              <span className="text-white">{category.name}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
            <p className="text-xl md:text-2xl mb-2 max-w-3xl">
              {category.description}
            </p>
            <p className="text-white/80">
              {category.count} articles in this category
            </p>
          </div>
        </section>

        {/* Topics List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <Link 
                  to={`/topics/${topic.slug}`} 
                  key={topic.id}
                  className="card-hover"
                >
                  <Card className="border-0 shadow-md h-full overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={topic.image} 
                        alt={topic.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{topic.title}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>By {topic.author}</span>
                        <span className="mx-2">•</span>
                        <span>{topic.readTime} min read</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {topic.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2">
                      {topic.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-100">
                          {tag}
                        </Badge>
                      ))}
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
            
            {topics.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">No topics found</h3>
                <p className="text-gray-600">
                  We're working on adding content to this category. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default TopicCategory;
