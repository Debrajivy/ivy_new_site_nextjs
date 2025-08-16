
import React from 'react';
import { Link } from 'react-router-dom';
import { getTopicsByCategory } from '@/lib/mockTopicsData';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, BookOpen } from 'lucide-react';

interface RelatedTopicsProps {
  categoryId: string;
  currentTopicId: string;
}

const RelatedTopics: React.FC<RelatedTopicsProps> = ({ categoryId, currentTopicId }) => {
  const allCategoryTopics = getTopicsByCategory(categoryId);
  const relatedTopics = allCategoryTopics
    .filter(topic => topic.id !== currentTopicId)
    .slice(0, 3);
    
  if (relatedTopics.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Related Topics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedTopics.map((topic) => (
          <Link to={`/topics/${topic.slug}`} key={topic.id} className="card-hover">
            <Card className="border-0 shadow-md h-full">
              <div className="h-40 overflow-hidden">
                <img 
                  src={topic.image} 
                  alt={topic.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardContent className="pt-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{topic.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{topic.description}</p>
                <div className="flex items-center mt-3 text-xs text-gray-500 space-x-3">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{topic.readTime} min</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-3 w-3 mr-1" />
                    <span>Article</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                {topic.tags.slice(0, 2).map((tag, index) => (
                  <Badge key={index} variant="outline" className="mr-1 text-xs">
                    {tag}
                  </Badge>
                ))}
                {topic.tags.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{topic.tags.length - 2}
                  </Badge>
                )}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedTopics;
