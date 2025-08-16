import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CourseHero from '@/components/courses/CourseHero';
import CourseOverview from '@/components/courses/CourseOverview';
import CourseCurriculum from '@/components/courses/CourseCurriculum';
import CourseProjects from '@/components/courses/CourseProjects';
import CourseAlumni from '@/components/courses/CourseAlumni';
import CourseFAQ from '@/components/courses/CourseFAQ';
import CourseAccreditation from '@/components/courses/CourseAccreditation';
import CourseTestimonials from '@/components/courses/CourseTestimonials';
import CourseEnrollCTA from '@/components/courses/CourseEnrollCTA';
import CourseJobSupport from '@/components/courses/CourseJobSupport';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { fetchCourseById } from '@/lib/api';
import { useLocation, useNavigate } from 'react-router-dom';

// IMPORT THE NEW COURSE SUB-NAVIGATION COMPONENT HERE
import CourseSubNavigation from '../components/CourseSubNavigation';

const CoursePage = () => {
  const { slug } = useParams<{ slug: string }>();
     const navigate = useNavigate();

  const { data: course, isLoading, error } = useQuery({
    queryKey: ['course', slug],
    queryFn: () => fetchCourseById(slug || ''),
  });

  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center h-64">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
                <div className="h-6 w-40 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !course) {
   navigate(`/`, { replace: true });
  }

  return (
    <>
      <Helmet>
        <title>{course.title} | Ivy Professional School</title>
        <meta name="description" content={course.description} />
        <meta name="keywords" content={`${course.title}, ${course.category}, Ivy Professional School, Data Science, AI, Machine Learning, Course, Training`} />
        <meta property="og:title" content={`${course.title} | Ivy Professional School`} />
        <meta property="og:description" content={course.description} />
        <meta property="og:image" content={course.image} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${course.title} | Ivy Professional School`} />
        <meta name="twitter:description" content={course.description} />
        <meta name="twitter:image" content={course.image} />
        <link rel="canonical" href={`https://ivyprofessionalschool.com/courses/${slug}`} />
      </Helmet>

      <Navbar />
      <main>
        <CourseHero course={course} />

        {/* RENDER THE NEW COURSE-SPECIFIC STICKY NAVIGATION */}
        <CourseSubNavigation />

        {/* ADD 'id' ATTRIBUTES TO EACH SECTION COMPONENT */}
        <div id="course-accreditation-section">
          <CourseAccreditation />
        </div>
        <div id="course-overview-section">
          <CourseOverview course={course} />
        </div>
        <div id="course-curriculum-section">
          <CourseCurriculum course={course} />
        </div>
        <div id="course-projects-section">
          <CourseProjects course={course} />
        </div>
        <div id="course-jobsupport-section">
          <CourseJobSupport course={course} />
        </div>
        <div id="course-alumni-section">
          <CourseAlumni courseId={course.id} />
        </div>
        <div id="course-testimonials-section">
          <CourseTestimonials courseId={course.id} />
        </div>
        <div id="course-faq-section">
          <CourseFAQ course={course} />
        </div>
        <div id="course-enrollcta-section"> {/* Optional: Add an ID if you want to link to CTA */}
          <CourseEnrollCTA course={course} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CoursePage;