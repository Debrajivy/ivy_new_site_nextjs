"use client"

import { useState, useEffect } from "react"
import { fetchAlumniByourse } from "@/lib/api"
import Testimonials from "../home/Testimonials"

interface CourseAlumniProps {
  courseId: string
}

const CourseAlumni = ({ courseId }: CourseAlumniProps) => {
  const [alumni, setAlumni] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadAlumni = async () => {
      try {
        setIsLoading(true)
        const data = await fetchAlumniByourse(courseId)
        setAlumni(data)
      } catch (err) {
        setError(err)
        console.error("Failed to fetch alumni:", err)
      } finally {
        setIsLoading(false)
      }
    }

    if (courseId) {
      loadAlumni()
    }
  }, [courseId])

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
    )
  }

  // if (!alumni || alumni.length === 0) {
  //   return null;
  // }

  return <Testimonials />
}

export default CourseAlumni
