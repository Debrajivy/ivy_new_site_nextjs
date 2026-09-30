"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"
import type { Course } from "@/lib/api"

const CourseCurriculum = dynamic(() => import("./CourseCurriculum"), {
  ssr: false,
  loading: () => <div className="min-h-[720px] bg-white" aria-hidden="true" />,
})

interface DeferredCourseCurriculumProps {
  course: Pick<Course, "title" | "duration" | "curriculum">
}

export default function DeferredCourseCurriculum({ course }: DeferredCourseCurriculumProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.location.hash === "#course-curriculum-section") {
      setVisible(true)
      return
    }

    const element = rootRef.current
    if (!element || !("IntersectionObserver" in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "800px 0px" },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={rootRef}>
      {visible ? <CourseCurriculum course={course as Course} /> : <div className="min-h-[720px] bg-white" aria-hidden="true" />}
    </div>
  )
}
