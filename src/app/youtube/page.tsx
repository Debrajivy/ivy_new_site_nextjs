"use client";
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Youtube as YoutubeIcon, Play, Clock, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link'; // Updated to use Next.js Link

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  date: string;
  type: 'tutorial' | 'success-story' | 'tech-talk' | 'project';
}

const videos: Video[] = [
  {
    id: '1',
    title: "Excel Basics in Hindi",
    description: "Learn to implement a neural network using Python and NumPy, without any deep learning frameworks.",
    thumbnail: "https://i.ytimg.com/vi/Knz-xAGD3BI/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB9mxY0PX9vblsoCEkEtAdNUtt_xA",
    duration: "28:45",
    views: "45K",
    date: "2023-12-05",
    type: "tutorial"
  },
  {
    id: '2',
    title: "Generative AI Use Case",
    description: "Learn and build with GenAI — tools, careers, projects, and real-world use cases across Excel, bots, and automation.",
    thumbnail: "https://i.ytimg.com/vi/J6T4MFhQlkQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBAv2QBOzWAnkOtkQsKrlyANxtbKA",
    duration: "15:20",
    views: "32K",
    date: "2024-02-17",
    type: "success-story"
  },
  {
    id: '3',
    title: "The Future of Generative AI in 2025 and Beyond",
    description: "Our experts discuss the emerging trends and future directions of generative AI technologies.",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
    duration: "42:15",
    views: "67K",
    date: "2024-01-22",
    type: "tech-talk"
  },
  {
    id: '4',
    title: "Introduction to Data Engineering Pipelines",
    description: "A step-by-step guide to building robust data pipelines with modern tools like Apache Airflow.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    duration: "34:50",
    views: "28K",
    date: "2023-11-09",
    type: "tutorial"
  },
  {
    id: '5',
    title: "Building a Sentiment Analysis Tool - Project Walkthrough",
    description: "Complete project tutorial: Create a sentiment analysis tool using Python, NLTK, and deploy it as a web application.",
    thumbnail: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    duration: "55:30",
    views: "19K",
    date: "2024-03-12",
    type: "project"
  },
  {
    id: '6',
    title: "How Maria Transformed Her Career with Data Science",
    description: "Maria shares how she went from a marketing role to leading a data team after completing our Data Science Bootcamp.",
    thumbnail: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    duration: "12:45",
    views: "23K",
    date: "2023-09-28",
    type: "success-story"
  },
  {
    id: '7',
    title: "Data Visualization Techniques for Impactful Presentations",
    description: "Master the art of creating compelling data visualizations that tell a story and drive decision making.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
    duration: "38:20",
    views: "34K",
    date: "2024-02-05",
    type: "tutorial"
  },
  {
    id: '8',
    title: "Ethical Considerations in AI Development",
    description: "A panel discussion on the ethical challenges and responsibilities in developing AI systems.",
    thumbnail: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    duration: "47:15",
    views: "41K",
    date: "2023-12-18",
    type: "tech-talk"
  }
];

const getBadgeColor = (type: string) => {
  switch (type) {
    case 'tutorial':
      return 'bg-blue-100 text-blue-700';
    case 'success-story':
      return 'bg-green-100 text-green-700';
    case 'tech-talk':
      return 'bg-purple-100 text-purple-700';
    case 'project':
      return 'bg-amber-100 text-amber-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const getBadgeText = (type: string) => {
  switch (type) {
    case 'tutorial':
      return 'Tutorial';
    case 'success-story':
      return 'Success Story';
    case 'tech-talk':
      return 'Tech Talk';
    case 'project':
      return 'Project';
    default:
      return type;
  }
};

const Youtube = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const filteredVideos = (type: string = 'all') => {
    return videos
      .filter(video => 
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(video => type === 'all' || video.type === type);
  };

  // Function to handle video click - in a real app, this would navigate to a video player page
  const handleVideoClick = (videoId: string) => {
    // In a real implementation, this would navigate to a video detail page
    // history.push(`/youtube/video/${videoId}`);
  };
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <YoutubeIcon className="text-red-600 h-12 w-12 mr-4" />
              <h1 className="text-4xl font-bold">Ivy School YouTube Channel</h1>
            </div>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Tutorials, success stories, and insights about data science, data engineering, and AI
            </p>
            <div className="flex justify-center">
              <Button className="bg-red-600 hover:bg-red-700" size="lg" asChild>
                <a href="https://youtube.com/channel/IvyProfessionalSchool" target="_blank" rel="noopener noreferrer">
                  Subscribe to Our Channel
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="text" 
                  placeholder="Search videos..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-gray-500" />
                <span className="text-sm text-gray-500">Filter by:</span>
                <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">Latest</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">Popular</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">Oldest</Badge>
              </div>
            </div>
          </div>
        </div>
        
        {/* Video Content */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all">
              <TabsList className="mb-8">
                <TabsTrigger value="all">All Videos</TabsTrigger>
                <TabsTrigger value="tutorial">Tutorials</TabsTrigger>
                <TabsTrigger value="tech-talk">Tech Talks</TabsTrigger>
                <TabsTrigger value="success-story">Success Stories</TabsTrigger>
                <TabsTrigger value="project">Projects</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredVideos().map(video => (
                    video.id === '1' ? (
                      <a href="https://youtube.com/playlist?list=PL6ajVQ6jyjvBsAx6PZ8pltPSj_J-xCtGU&si=jnxah3_BhMiWQ2fx" key={video.id} target="_blank" rel="noopener noreferrer">
                        <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                          <div className="relative">
                            <img 
                              src={video.thumbnail} 
                              alt={video.title}
                              className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <div className="rounded-full bg-white/80 p-3">
                                <Play className="h-8 w-8 text-primary" />
                              </div>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {video.duration}
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <div className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${getBadgeColor(video.type)}`}>
                              {getBadgeText(video.type)}
                            </div>
                            <h3 className="font-semibold line-clamp-2 mb-2">{video.title}</h3>
                            <p className="text-sm text-gray-600 line-clamp-3 mb-3">{video.description}</p>
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>{video.views} views</span>
                              <span>
  {new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(video.date))}
</span>
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    ) : (
                      <Link href={`/youtube/video/${video.id}`} key={video.id}>
                        <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                          <div className="relative">
                            <img 
                              src={video.thumbnail} 
                              alt={video.title}
                              className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <div className="rounded-full bg-white/80 p-3">
                                <Play className="h-8 w-8 text-primary" />
                              </div>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {video.duration}
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <div className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${getBadgeColor(video.type)}`}>
                              {getBadgeText(video.type)}
                            </div>
                            <h3 className="font-semibold line-clamp-2 mb-2">{video.title}</h3>
                            <p className="text-sm text-gray-600 line-clamp-3 mb-3">{video.description}</p>
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>{video.views} views</span>
                              <span>
  {new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(video.date))}
</span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    )
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tutorial">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredVideos('tutorial').length > 0 ? (
                    filteredVideos('tutorial').map(video => (
                      video.id === '1' ? (
                        <a href="https://youtube.com/playlist?list=PL6ajVQ6jyjvBsAx6PZ8pltPSj_J-xCtGU&si=jnxah3_BhMiWQ2fx" key={video.id} target="_blank" rel="noopener noreferrer">
                          <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                              <img 
                                src={video.thumbnail} 
                                alt={video.title}
                                className="w-full h-48 object-cover"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <div className="rounded-full bg-white/80 p-3">
                                  <Play className="h-8 w-8 text-primary" />
                                </div>
                              </div>
                              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {video.duration}
                              </div>
                            </div>
                            <CardContent className="p-4">
                              <div className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${getBadgeColor(video.type)}`}>
                                {getBadgeText(video.type)}
                              </div>
                              <h3 className="font-semibold line-clamp-2 mb-2">{video.title}</h3>
                              <p className="text-sm text-gray-600 line-clamp-3 mb-3">{video.description}</p>
                              <div className="flex justify-between text-xs text-gray-500">
                                <span>{video.views} views</span>
                                <span>
  {new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(video.date))}
</span>
                              </div>
                            </CardContent>
                          </Card>
                        </a>
                      ) : (
                        <Link href={`/youtube/video/${video.id}`} key={video.id}>
                          <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                              <img 
                                src={video.thumbnail} 
                                alt={video.title}
                                className="w-full h-48 object-cover"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <div className="rounded-full bg-white/80 p-3">
                                  <Play className="h-8 w-8 text-primary" />
                                </div>
                              </div>
                              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {video.duration}
                              </div>
                            </div>
                            <CardContent className="p-4">
                              <div className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${getBadgeColor(video.type)}`}>
                                {getBadgeText(video.type)}
                              </div>
                              <h3 className="font-semibold line-clamp-2 mb-2">{video.title}</h3>
                              <p className="text-sm text-gray-600 line-clamp-3 mb-3">{video.description}</p>
                              <div className="flex justify-between text-xs text-gray-500">
                                <span>{video.views} views</span>
                                <span>
  {new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(video.date))}
</span>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      )
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-gray-500">No tutorial videos found</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="tech-talk">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredVideos('tech-talk').length > 0 ? (
                    filteredVideos('tech-talk').map(video => (
                      <Link href={`/youtube/video/${video.id}`} key={video.id}>
                        <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                          <div className="relative">
                            <img 
                              src={video.thumbnail} 
                              alt={video.title}
                              className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <div className="rounded-full bg-white/80 p-3">
                                <Play className="h-8 w-8 text-primary" />
                              </div>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {video.duration}
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <div className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${getBadgeColor(video.type)}`}>
                              {getBadgeText(video.type)}
                            </div>
                            <h3 className="font-semibold line-clamp-2 mb-2">{video.title}</h3>
                            <p className="text-sm text-gray-600 line-clamp-3 mb-3">{video.description}</p>
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>{video.views} views</span>
                              <span>
  {new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(video.date))}
</span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-gray-500">No tech talk videos found</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="success-story">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredVideos('success-story').length > 0 ? (
                    filteredVideos('success-story').map(video => (
                      <Link href={`/youtube/video/${video.id}`} key={video.id}>
                        <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                          <div className="relative">
                            <img 
                              src={video.thumbnail} 
                              alt={video.title}
                              className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <div className="rounded-full bg-white/80 p-3">
                                <Play className="h-8 w-8 text-primary" />
                              </div>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {video.duration}
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <div className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${getBadgeColor(video.type)}`}>
                              {getBadgeText(video.type)}
                            </div>
                            <h3 className="font-semibold line-clamp-2 mb-2">{video.title}</h3>
                            <p className="text-sm text-gray-600 line-clamp-3 mb-3">{video.description}</p>
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>{video.views} views</span>
                              <span>
  {new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(video.date))}
</span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-gray-500">No success story videos found</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="project">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredVideos('project').length > 0 ? (
                    filteredVideos('project').map(video => (
                      <Link href={`/youtube/video/${video.id}`} key={video.id}>
                        <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                          <div className="relative">
                            <img 
                              src={video.thumbnail} 
                              alt={video.title}
                              className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <div className="rounded-full bg-white/80 p-3">
                                <Play className="h-8 w-8 text-primary" />
                              </div>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {video.duration}
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <div className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${getBadgeColor(video.type)}`}>
                              {getBadgeText(video.type)}
                            </div>
                            <h3 className="font-semibold line-clamp-2 mb-2">{video.title}</h3>
                            <p className="text-sm text-gray-600 line-clamp-3 mb-3">{video.description}</p>
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>{video.views} views</span>
                              <span>
  {new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(video.date))}
</span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-gray-500">No project videos found</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Youtube;