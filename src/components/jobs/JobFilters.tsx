
import React from 'react';
import { Check, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface JobFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const JobFilters = ({ activeFilter, setActiveFilter }: JobFiltersProps) => {
  const jobTypes = [
    { id: 'all', label: 'All Jobs', count: 340 },
    { id: 'fulltime', label: 'Full-time', count: 245 },
    { id: 'parttime', label: 'Part-time', count: 48 },
    { id: 'contract', label: 'Contract', count: 32 },
    { id: 'internship', label: 'Internship', count: 15 },
  ];

  const experienceLevels = [
    { id: 'entry', label: 'Entry Level', count: 124 },
    { id: 'mid', label: 'Mid Level', count: 156 },
    { id: 'senior', label: 'Senior Level', count: 60 },
  ];

  const locations = [
    { id: 'remote', label: 'Remote', count: 210 },
    { id: 'hybrid', label: 'Hybrid', count: 45 },
    { id: 'onsite', label: 'On-site', count: 85 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="font-semibold text-xl mb-4">Filters</h3>
      
      <div className="mb-6">
        <div className="mb-2">Job Types</div>
        <div className="space-y-2">
          {jobTypes.map((type) => (
            <div key={type.id} 
              onClick={() => setActiveFilter(type.id)} 
              className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer hover:bg-gray-50 ${activeFilter === type.id ? 'bg-primary/10 text-primary font-medium' : ''}`}
            >
              <span>{type.label}</span>
              <Badge variant="outline">{type.count}</Badge>
            </div>
          ))}
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="experience">
          <AccordionTrigger>Experience Level</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 mt-2">
              {experienceLevels.map((level) => (
                <div key={level.id} className="flex items-center space-x-2">
                  <Checkbox id={level.id} />
                  <Label htmlFor={level.id} className="flex justify-between w-full">
                    <span>{level.label}</span>
                    <span className="text-gray-500 text-sm">{level.count}</span>
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location">
          <AccordionTrigger>Location</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 mt-2">
              {locations.map((location) => (
                <div key={location.id} className="flex items-center space-x-2">
                  <Checkbox id={location.id} />
                  <Label htmlFor={location.id} className="flex justify-between w-full">
                    <span>{location.label}</span>
                    <span className="text-gray-500 text-sm">{location.count}</span>
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="skills">
          <AccordionTrigger>Skills</AccordionTrigger>
          <AccordionContent>
            <Input placeholder="Search skills" className="mb-2" />
            <div className="flex flex-wrap gap-2 mt-2">
              {['Python', 'SQL', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'NLP', 'Data Visualization'].map((skill) => (
                <Badge key={skill} variant="outline" className="cursor-pointer hover:bg-primary/10 hover:text-primary">
                  {skill}
                </Badge>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="salary">
          <AccordionTrigger>Salary Range</AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-4">
              <Input type="number" placeholder="Min" className="w-full" />
              <Input type="number" placeholder="Max" className="w-full" />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Average salary range: $80K - $120K
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="mt-6 pt-6 border-t">
        <button className="w-full bg-primary text-white py-2 rounded-md">
          Apply Filters
        </button>
        <button className="w-full text-gray-500 py-2 mt-2">
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default JobFilters;
