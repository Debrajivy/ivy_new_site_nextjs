
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getTopic, getTopicQuiz, getCategory } from '@/lib/mockTopicsData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle 
} from '@/components/ui/card';
import { 
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  BookOpen, Clock, Calendar, Tag, Share2, Bookmark, ThumbsUp, 
  MessageSquare, Award, ChevronRight, CheckCircle, XCircle, AlertCircle, Trophy
} from 'lucide-react';
import TopicQuiz from '@/components/topics/TopicQuiz';
import RelatedTopics from '@/components/topics/RelatedTopics';

const TopicDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [topic, setTopic] = useState<any>(null);
  const [category, setCategory] = useState<any>(null);
  const [quiz, setQuiz] = useState<any>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    if (slug) {
      const topicData = getTopic(slug);
      if (topicData) {
        setTopic(topicData);
        
        const categoryData = getCategory(topicData.categoryId);
        if (categoryData) {
          setCategory(categoryData);
        }
        
        const quizData = getTopicQuiz(topicData.id);
        if (quizData) {
          setQuiz(quizData);
        }
      }
    }
    
    // Reset reading progress when topic changes
    setReadingProgress(0);
    
    // Simulate reading progress for demo purposes
    const interval = setInterval(() => {
      setReadingProgress((prev) => {
        const newProgress = prev + Math.random() * 5;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [slug]);
  
  if (!topic || !category) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-semibold">Loading topic...</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{topic.title} | Ivy Topics</title>
        <meta 
          name="description" 
          content={topic.seoDescription} 
        />
        <meta 
          name="keywords" 
          content={topic.seoKeywords.join(', ')} 
        />
      </Helmet>

      <Navbar />
      
      <main className="bg-gray-50 min-h-screen">
        {/* Progress Bar */}
        <div className="fixed top-16 left-0 right-0 z-40">
          <Progress value={readingProgress} className="rounded-none h-1" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/topics">Topics</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/topics/categories/${category.slug}`}>{category.name}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{topic.title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-md overflow-hidden">
                <div className="h-64 md:h-96 overflow-hidden">
                  <img 
                    src={topic.image} 
                    alt={topic.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {topic.tags.map((tag: string, index: number) => (
                      <Badge key={index} variant="outline" className="bg-gray-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-3xl md:text-4xl">{topic.title}</CardTitle>
                  <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-4 gap-y-2 mt-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{topic.publishDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{topic.readTime} min read</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>{category.name}</span>
                    </div>
                    <div>
                      By <span className="font-medium">{topic.author}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: topic.content }}
                  />
                </CardContent>
                
                <CardFooter className="flex flex-wrap justify-between gap-4 border-t bg-gray-50 p-6">
                  <div className="flex space-x-3">
                    <Button variant="ghost" size="sm" className="flex items-center">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>Like</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center">
                      <Bookmark className="h-4 w-4 mr-1" />
                      <span>Save</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center">
                      <Share2 className="h-4 w-4 mr-1" />
                      <span>Share</span>
                    </Button>
                  </div>
                  
                  {quiz && !showQuiz && (
                    <Button 
                      className="bg-gradient-to-r from-primary to-secondary text-white"
                      onClick={() => setShowQuiz(true)}
                    >
                      Take Quiz
                      <Award className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </CardFooter>
              </Card>
              
              {/* Quiz Section */}
              {quiz && showQuiz && (
                <div className="mt-8">
                  <TopicQuiz quiz={quiz} onFinish={() => setShowQuiz(false)} />
                </div>
              )}
              
              {/* Related Topics */}
              <div className="mt-8">
                <RelatedTopics categoryId={category.id} currentTopicId={topic.id} />
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* About Author */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>About the Author</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                      {topic.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold">{topic.author}</h4>
                      <p className="text-sm text-muted-foreground">Data Science Expert</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    An experienced data scientist and educator with expertise in machine learning,
                    deep learning, and data visualization.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Profile</Button>
                </CardFooter>
              </Card>
              
              {/* Points & Badges */}
              <Card className="border-0 shadow-md">
                <CardHeader className="bg-gradient-to-r from-ivy-purple to-ivy-blue text-white">
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Your Learning Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Trophy className="h-5 w-5 mr-2 text-amber-500" />
                      <span>Points Earned</span>
                    </div>
                    <Badge variant="outline" className="bg-amber-50 text-amber-700">
                      +{quiz ? (showQuiz ? 0 : 10) : 5}
                    </Badge>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm">Started reading</span>
                    </div>
                    <div className="flex items-center">
                      {readingProgress >= 50 ? (
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      ) : (
                        <AlertCircle className="h-4 w-4 mr-2 text-gray-300" />
                      )}
                      <span className="text-sm">Read 50% of article</span>
                    </div>
                    <div className="flex items-center">
                      {readingProgress >= 100 ? (
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      ) : (
                        <AlertCircle className="h-4 w-4 mr-2 text-gray-300" />
                      )}
                      <span className="text-sm">Completed reading</span>
                    </div>
                    <div className="flex items-center">
                      {quiz && !showQuiz ? (
                        <XCircle className="h-4 w-4 mr-2 text-red-500" />
                      ) : quiz && showQuiz ? (
                        <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                      ) : (
                        <AlertCircle className="h-4 w-4 mr-2 text-gray-300" />
                      )}
                      <span className="text-sm">Completed quiz</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    disabled={!quiz || showQuiz}
                  >
                    <Award className="mr-2 h-4 w-4" />
                    {!quiz ? 'No Quiz Available' : showQuiz ? 'Taking Quiz...' : 'Take Quiz Now'}
                  </Button>
                </CardContent>
              </Card>
              
              {/* Table of Contents */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Table of Contents</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-64">
                    <div className="p-4 space-y-2">
                      <a href="#" className="block hover:text-primary transition-colors">
                        Introduction
                      </a>
                      <a href="#" className="block hover:text-primary transition-colors pl-3">
                        What is {topic.tags[0]}?
                      </a>
                      <a href="#" className="block hover:text-primary transition-colors">
                        Key Components
                      </a>
                      <a href="#" className="block hover:text-primary transition-colors pl-3">
                        Component 1
                      </a>
                      <a href="#" className="block hover:text-primary transition-colors pl-3">
                        Component 2
                      </a>
                      <a href="#" className="block hover:text-primary transition-colors pl-3">
                        Component 3
                      </a>
                      <a href="#" className="block hover:text-primary transition-colors">
                        Applications
                      </a>
                      <a href="#" className="block hover:text-primary transition-colors">
                        Advanced Concepts
                      </a>
                      <a href="#" className="block hover:text-primary transition-colors">
                        Conclusion
                      </a>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
              
              {/* CTA */}
              <Card className="border-0 shadow-md bg-ivy-gradient text-white">
                <CardHeader>
                  <CardTitle>Want to Learn More?</CardTitle>
                  <CardDescription className="text-white opacity-90">
                    Take a comprehensive course on this topic
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our expert-led courses provide in-depth knowledge and practical skills in {category.name}.
                  </p>
                  <Button className="w-full bg-white text-primary hover:bg-gray-100">
                    Explore Courses <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
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

export default TopicDetail;
