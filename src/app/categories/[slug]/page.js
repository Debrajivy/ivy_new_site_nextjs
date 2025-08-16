
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CourseCategory from '@/components/categories/CourseCategory';

const CategoryPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <CourseCategory />
      </main>
      <Footer />
    </>
  );
};

export default CategoryPage;
