"use client"

import Testimonials from "../home/Testimonials"
import StudentTestimonials from "../home/StudentTestimonials" // Import the StudentTestimonials component

interface CourseAlumniProps {
  courseId: string
  brandName?: string
}

const CourseAlumni = ({ courseId, brandName }: CourseAlumniProps) => {
  // Add logic: if courseId is 9, show StudentTestimonials, otherwise show Testimonials
  if (courseId === "9") {
    return <StudentTestimonials />
  } else {
    return <Testimonials brandName={brandName} />
  }
}

export default CourseAlumni