"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"
import type { Course } from "@/lib/api"

const CourseFAQ = dynamic(() => import("./CourseFAQ"), {
  ssr: false,
  loading: () => <div className="min-h-[640px] bg-gray-50" aria-hidden="true" />,
})

interface DeferredCourseFAQProps {
  course: Pick<Course, "title" | "slug">
}

export default function DeferredCourseFAQ({ course }: DeferredCourseFAQProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.location.hash === "#course-faq-section") {
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

  return (
    <div ref={rootRef}>
      {visible ? <CourseFAQ course={course as Course} /> : <div className="min-h-[640px] bg-gray-50" aria-hidden="true" />}
    </div>
  )
}
