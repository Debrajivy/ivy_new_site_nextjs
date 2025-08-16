
import React from 'react';
import { ArrowUpRight, Bookmark, MapPin, Briefcase, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface JobListProps {
  filter: string;
}

const JobList = ({ filter }: JobListProps) => {
  // Mock data - in a real app this would come from an API
  const jobs = [
    {
      id: 1,
      title: 'Senior Data Scientist',
      company: 'TechCorp',
      logo: 'https://via.placeholder.com/50',
      location: 'Remote',
      type: 'fulltime',
      salary: '$120,000 - $150,000',
      posted: '2 days ago',
      skills: ['Python', 'TensorFlow', 'SQL', 'AWS'],
      description: 'We are looking for an experienced data scientist to join our team and lead machine learning initiatives...'
    },
    {
      id: 2,
      title: 'Machine Learning Engineer',
      company: 'AI Solutions',
      logo: 'https://via.placeholder.com/50',
      location: 'New York, NY (Hybrid)',
      type: 'fulltime',
      salary: '$110,000 - $140,000',
      posted: '1 week ago',
      skills: ['PyTorch', 'Python', 'Deep Learning', 'MLOps'],
      description: 'Join our team to build and deploy machine learning models at scale...'
    },
    {
      id: 3,
      title: 'Data Engineer',
      company: 'DataFlow Inc.',
      logo: 'https://via.placeholder.com/50',
      location: 'San Francisco, CA',
      type: 'fulltime',
      salary: '$100,000 - $130,000',
      posted: '3 days ago',
      skills: ['Spark', 'Python', 'SQL', 'Airflow'],
      description: 'Design and implement data pipelines and ETL processes...'
    },
    {
      id: 4,
      title: 'AI Research Intern',
      company: 'Research Labs',
      logo: 'https://via.placeholder.com/50',
      location: 'Remote',
      type: 'internship',
      salary: '$30/hr',
      posted: '5 days ago',
      skills: ['Python', 'NLP', 'Research'],
      description: 'Join our research team for a summer internship working on cutting-edge NLP models...'
    },
    {
      id: 5,
      title: 'Data Analyst (Part-time)',
      company: 'Analytics Co',
      logo: 'https://via.placeholder.com/50',
      location: 'Chicago, IL (Remote)',
      type: 'parttime',
      salary: '$40/hr',
      posted: '1 day ago',
      skills: ['SQL', 'Tableau', 'Excel', 'Python'],
      description: 'Part-time role analyzing business data and creating dashboards...'
    }
  ];

  const filteredJobs = filter === 'all' ? jobs : jobs.filter(job => job.type === filter);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-gray-500">Showing {filteredJobs.length} results</span>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <select className="border rounded-md px-2 py-1 text-sm">
            <option>Most recent</option>
            <option>Salary: High to low</option>
            <option>Salary: Low to high</option>
            <option>Most relevant</option>
          </select>
        </div>
      </div>
      
      {filteredJobs.length === 0 ? (
        <div className="text-center py-8 bg-white rounded-lg shadow-sm">
          <p className="text-gray-500">No jobs found matching your filters.</p>
        </div>
      ) : (
        filteredJobs.map(job => (
          <div key={job.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-md" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-bold text-lg">{job.title}</h3>
                  <Button variant="ghost" size="icon">
                    <Bookmark className="h-5 w-5" />
                  </Button>
                </div>
                <p className="text-primary font-medium">{job.company}</p>
                
                <div className="flex gap-4 mt-2 text-gray-500 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    {job.type === 'fulltime' ? 'Full-time' : 
                     job.type === 'parttime' ? 'Part-time' : 
                     job.type === 'contract' ? 'Contract' : 'Internship'}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.posted}
                  </div>
                </div>
                
                <div className="mt-3">
                  <p className="text-gray-700">{job.description}</p>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map(skill => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                  <span className="font-medium text-green-700">{job.salary}</span>
                </div>
                
                <div className="mt-4 pt-4 border-t flex justify-between items-center">
                  <div>
                    <Badge variant="outline" className="bg-primary/5 text-primary">AI Match: 92%</Badge>
                  </div>
                  <Button>
                    View Job <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      
      <div className="flex justify-center">
        <Button variant="outline">Load More Jobs</Button>
      </div>
    </div>
  );
};

export default JobList;
