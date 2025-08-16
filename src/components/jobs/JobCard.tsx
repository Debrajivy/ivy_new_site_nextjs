
import React from 'react';
import { ArrowUpRight, Briefcase, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface JobCardProps {
  job: {
    id: number;
    title: string;
    company: string;
    matchScore: number;
    skillMatch: string[];
    location: string;
    salary: string;
    description: string;
  };
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-5 hover:shadow-md transition-shadow relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-bl-md">
        {job.matchScore}% Match
      </div>
      
      <div className="mb-3">
        <Progress value={job.matchScore} className="h-1.5 mt-1" />
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">{job.title}</h3>
          <p className="text-primary font-medium">{job.company}</p>
        </div>
      </div>
      
      <div className="flex gap-4 mt-2 text-gray-500 text-sm">
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1" />
          {job.location}
        </div>
      </div>
      
      <div className="mt-3">
        <p className="text-gray-700 text-sm">{job.description}</p>
      </div>
      
      <div className="mt-3">
        <div className="text-xs text-gray-500 mb-1">Matched Skills:</div>
        <div className="flex flex-wrap gap-2">
          {job.skillMatch.map(skill => (
            <Badge key={skill} variant="outline" className="bg-primary/10 text-primary">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t flex justify-between items-center">
        <span className="font-medium text-green-700">{job.salary}</span>
        <Button size="sm">
          View Job <ArrowUpRight className="ml-1 h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
