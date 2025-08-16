
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { topicCategories, getPopularTopics } from '@/lib/mockTopicsData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, ChevronRight, BookOpen, Trophy, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import TopicsLeaderboard from '@/components/topics/TopicsLeaderboard';

const Topics = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const popularTopics = getPopularTopics();

  return (
    <>
      <Helmet>
        <title>Ivy Topics - Learn Data Science & AI</title>
        <meta 
          name="description" 
          content="Explore in-depth articles, tutorials, and interactive lessons on data science, AI, machine learning, and more with Ivy Topics." 
        />
        <meta 
          name="keywords" 
          content="data science resources, AI tutorials, machine learning articles, programming guides, data engineering, Ivy Professional School" 
        />
      </Helmet>

      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ivy-blue to-ivy-purple py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ivy Topics</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive resources on Data Science, AI, and Analytics to boost your knowledge and career.
            </p>
            
            <div className="max-w-2xl mx-auto relative">
              <Input 
                type="text" 
                placeholder="Search for topics, concepts, or skills..."
                className="pl-10 pr-4 py-6 text-black bg-white shadow-lg rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute top-3.5 left-3 h-5 w-5 text-gray-400" />
              <Button className="absolute right-2 top-2">
                Search
              </Button>
            </div>
          </div>
        </section>

        {/* Category Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">Browse by Category</h2>
              <Link to="/topics/categories" className="text-primary flex items-center hover:underline">
                View All Categories <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topicCategories.map((category) => (
                <Link 
                  to={`/topics/categories/${category.slug}`} 
                  key={category.id}
                  className="card-hover"
                >
                  <Card className="border-0 shadow-md h-full transition-all duration-300 hover:shadow-xl">
                    <CardHeader>
                      <CardTitle className="flex items-center text-primary">
                        <BookOpen className="h-6 w-6 mr-2" />
                        {category.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {category.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="flex items-center mt-2">
                        Explore Topics <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="popular" className="w-full">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Featured Content</h2>
                <TabsList className="bg-gray-100">
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="latest">Latest</TabsTrigger>
                  <TabsTrigger value="beginner">Beginner Friendly</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="popular" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularTopics.map((topic) => (
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
              </TabsContent>
              
              <TabsContent value="latest" className="mt-0">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Check back soon for our latest articles!</p>
                </div>
              </TabsContent>
              
              <TabsContent value="beginner" className="mt-0">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Our beginner-friendly content is coming soon!</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Gamification Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <Trophy className="h-7 w-7 mr-2 text-accent" />
                  Gamify Your Learning
                </h2>
                <p className="text-lg mb-6">
                  Make your learning journey more engaging and effective with our gamification system. 
                  Earn points, collect badges, and track your progress as you explore our content.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className={cn(
                    "border-l-4 border-l-secondary",
                    "border-t-0 border-r-0 border-b-0 shadow-md"
                  )}>
                    <CardHeader>
                      <CardTitle className="text-xl text-secondary">Take Quizzes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Test your knowledge with interactive quizzes and earn points for correct answers.</p>
                    </CardContent>
                  </Card>
                  <Card className={cn(
                    "border-l-4 border-l-accent",
                    "border-t-0 border-r-0 border-b-0 shadow-md"
                  )}>
                    <CardHeader>
                      <CardTitle className="text-xl text-accent">Earn Badges</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Collect achievement badges as you master topics and complete learning milestones.</p>
                    </CardContent>
                  </Card>
                  <Card className={cn(
                    "border-l-4 border-l-primary",
                    "border-t-0 border-r-0 border-b-0 shadow-md"
                  )}>
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">Track Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Monitor your learning journey with detailed progress tracking and analytics.</p>
                    </CardContent>
                  </Card>
                  <Card className={cn(
                    "border-l-4 border-l-ivy-orange",
                    "border-t-0 border-r-0 border-b-0 shadow-md"
                  )}>
                    <CardHeader>
                      <CardTitle className="text-xl text-ivy-orange">Compete & Share</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Join the leaderboard and share your achievements with the community.</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                    Create Your Learning Profile
                  </Button>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <Users className="h-7 w-7 mr-2 text-primary" />
                  <h3 className="text-2xl font-bold">Leaderboard</h3>
                </div>
                <TopicsLeaderboard />
              </div>
            </div>
          </div>
        </section>
                
        {/* Call to Action */}
        <section className="py-16 bg-ivy-gradient text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Advance Your Career?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take your learning to the next level with our structured courses 
              and get certified in Data Science, AI, and more.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="text-white">
                Explore Courses
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Topics;
