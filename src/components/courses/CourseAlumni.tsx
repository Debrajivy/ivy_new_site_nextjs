"use client"

import Testimonials from "../home/Testimonials"



interface CourseAlumniProps {
  courseId: string
}

const CourseAlumni = ({ courseId }: CourseAlumniProps) => {

  // if (!alumni || alumni.length === 0) {
  //   return null;
  // }

  return <Testimonials />
}

export default CourseAlumni
