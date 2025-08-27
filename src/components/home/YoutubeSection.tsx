import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Youtube, ExternalLink, Play } from 'lucide-react';
import youtube1 from "@/assests/youtube1.jpeg";
import youtube2 from "@/assests/youtube2.jpeg";
import youtube3 from "@/assests/youtube3.jpeg";
import youtube4 from "@/assests/youtube4.jpeg";
import Image, { StaticImageData } from 'next/image';

interface VideoItem {
  id: string;
  title: string;
  thumbnail: StaticImageData;
  views: string;
  type: 'tutorial' | 'success-story' | 'tech-talk' | 'project-showcase';
  url: string;
}

const videos: VideoItem[] = [
  {
    id: '1',
    title: "Data Science Tutorials",
    thumbnail: youtube1,
    views: "15K",
    type: "tutorial",
    url: "https://youtube.com/playlist?list=PL6ajVQ6jyjvAA53KTnvn1kYDjafJjogNS"
  },
  {
    id: '2',
    title: "Industry Case Studies & Projects by Students",
    thumbnail: youtube2,
    views: "22K",
    type: "project-showcase",
    url: "https://youtube.com/playlist?list=PL6ajVQ6jyjvBNzNS9GBB1QfiNzRJ--F1t"
  },
  {
    id: '3',
    title: "Analyticshala - Expert Talks",
    thumbnail:youtube3,
    views: "18K",
    type: "tech-talk",
    url: "https://youtube.com/playlist?list=PL6ajVQ6jyjvAdxv4QdhfvOlb9OGvbwDSl"
  },
  {
    id: '4',
    title: "Data Science Interview Experience and Placement Success Stories",
    thumbnail: youtube4,
    views: "35K",
    type: "success-story",
    url: "https://youtube.com/playlist?list=PL6ajVQ6jyjvBne1iy2SkQs_g-E4Ee-ehn"
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
    case 'project-showcase':
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
    case 'project-showcase':
      return 'Project Showcase';
    default:
      return type;
  }
};

const YoutubeSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="flex items-center">
            <Youtube className="text-red-600 h-8 w-8 mr-3" />
            <div>
              <h2 className="text-3xl font-bold">Learn From Our Community</h2>
              <p className="text-gray-600">Real projects, career transformations, and expert insights</p>
            </div>
          </div>
          <Button variant="default" className="mt-4 md:mt-0" asChild>
            <a
              href="https://youtube.com/channel/IvyProfessionalSchool"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Subscribe <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                <div className="relative">
                  <Image
                    width={400}
                    height={300}
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="rounded-full bg-white/80 p-3">
                      <Play className="h-8 w-8 text-primary" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.views} views
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${getBadgeColor(video.type)}`}>
                    {getBadgeText(video.type)}
                  </div>
                  <h3 className="font-semibold line-clamp-2">{video.title}</h3>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <a
              href="https://youtube.com/channel/IvyProfessionalSchool"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Videos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;