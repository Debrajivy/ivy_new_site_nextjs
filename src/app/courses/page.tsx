import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CoursesListing from '@/components/courses/CoursesListing';

export const metadata: Metadata = {
  title: 'All Data Science & AI Courses | Ivy Professional School',
  description:
    'Explore 10+ NASSCOM, IBM & IIT certified Data Science, Generative AI, Data Engineering, and Data Analytics courses. 37,500+ trained professionals. 67% average salary hike. Join India\'s #1 Data & AI institute.',
  keywords: [
    'data science course',
    'generative AI course',
    'data engineering course',
    'data analytics course',
    'machine learning course',
    'AI course India',
    'NASSCOM certified course',
    'IIT data science',
    'Ivy Professional School courses',
    'data science certification',
  ],
  openGraph: {
    title: 'All Data Science & AI Courses | Ivy Professional School',
    description:
      'NASSCOM, IBM & IIT certified Data Science, Gen AI, Data Engineering courses. 37,500+ professionals trained. 100% placement support.',
    type: 'website',
    url: 'https://ivyproschool.com/courses',
  },
  alternates: {
    canonical: 'https://ivyproschool.com/courses',
  },
};

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <CoursesListing />
      <Footer />
    </>
  );
}
