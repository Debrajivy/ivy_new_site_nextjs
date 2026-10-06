import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CoursesListing from '@/components/courses/CoursesListing';

export const metadata: Metadata = {
  title: 'All Data Science & AI Courses | Ivy Professional School',
  description:
    'Explore NASSCOM, IBM & IIT certified Data Science, Generative AI, Data Engineering, and Data Analytics courses. Join a 37,500+ alumni community with a reported 67% average salary hike.',
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
      'NASSCOM, IBM & IIT certified Data Science, Gen AI, and Data Engineering courses for a 37,500+ alumni community, with placement support.',
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
