"use client"

import Testimonials from "../home/Testimonials"
import StudentTestimonials from "../home/StudentTestimonials" // Import the StudentTestimonials component

interface CourseAlumniProps {
  courseId: string
}

const CourseAlumni = ({ courseId }: CourseAlumniProps) => {
  // Add logic: if courseId is 9, show StudentTestimonials, otherwise show Testimonials
  if (courseId === "9") {
    return <StudentTestimonials />
  } else {
    return <Testimonials />
  }
}

export default CourseAlumni