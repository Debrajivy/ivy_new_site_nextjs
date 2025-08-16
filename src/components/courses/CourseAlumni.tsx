
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Linkedin, PlayCircle } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchAlumniByourse } from '@/lib/api';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Testimonials from '../home/Testimonials';

interface CourseAlumniProps {
  courseId: string;
}

const CourseAlumni = ({ courseId }: CourseAlumniProps) => {
  const { data: alumni, isLoading } = useQuery({
    queryKey: ['alumni', courseId],
    queryFn: () => fetchAlumniByourse(courseId),
  });

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse h-8 w-64 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="animate-pulse h-4 w-96 bg-gray-200 rounded mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  // if (!alumni || alumni.length === 0) {
  //   return null;
  // }

  return (
    <Testimonials/>
  );
};

export default CourseAlumni;
