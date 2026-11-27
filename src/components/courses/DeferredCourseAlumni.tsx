"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"

const CourseAlumni = dynamic(() => import("./CourseAlumni"), {
  ssr: false,
  loading: () => <div className="min-h-[560px] bg-white" aria-hidden="true" />,
})

export default function DeferredCourseAlumni({ courseId, brandName }: { courseId: string; brandName?: string }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.location.hash === "#course-alumni-section") {
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
      { rootMargin: "600px 0px" },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div ref={rootRef}>{visible ? <CourseAlumni courseId={courseId} brandName={brandName} /> : <div className="min-h-[560px]" />}</div>
}
