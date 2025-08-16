
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link'; // Updated to use Next.js Link
import { Calendar, ChevronRight } from 'lucide-react';

interface TrialClassCTAProps {
  variant?: 'default' | 'compact' | 'inline';
  className?: string;
}

const TrialClassCTA = ({ variant = 'default', className = '' }: TrialClassCTAProps) => {
  if (variant === 'compact') {
    return (
      <div className={`bg-gray-50 p-4 rounded-lg ${className}`}>
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Try First 2 Classes Free</h3>
            <p className="text-gray-600 text-sm">Experience our teaching methodology firsthand</p>
          </div>
          <Button className="ml-auto whitespace-nowrap" asChild>
            <Link href="/register-trial">Register Now</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`flex items-center ${className}`}>
        <Calendar className="h-5 w-5 text-primary mr-2" />
        <span className="mr-2 font-medium">New students:</span>
        <Link href="/register-trial" className="text-primary font-medium hover:underline flex items-center">
          Try First 2 Classes Free <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl ${className}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center mb-2">
            <Calendar className="h-5 w-5 text-primary mr-2" />
            <h3 className="font-bold text-xl">Try Before You Commit</h3>
          </div>
          <p className="text-gray-600">
            Experience the Ivy difference with two free trial classes. No obligations, just quality learning.
          </p>
        </div>
        
        <Button size="lg" className="bg-ivy-blue-dominant" asChild>
          <Link href="/register-trial">Register for Free Trial Classes</Link>
        </Button>
      </div>
    </div>
  );
};

export default TrialClassCTA;
