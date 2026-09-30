"use client"

import dynamic from "next/dynamic"
import { Bot, Sparkles } from "lucide-react"
import { useState } from "react"

const CourseAIAdvisor = dynamic(() => import("./CourseAIAdvisor"), {
  ssr: false,
  loading: () => (
    <div className="mx-auto max-w-6xl rounded-2xl border border-[#009fda]/30 bg-white p-5 text-sm text-slate-500 shadow-sm">
      Opening the course assistant…
    </div>
  ),
})

interface CourseAIAdvisorShellProps {
  courseTitle: string
  courseSlug: string
}

export default function CourseAIAdvisorShell(props: CourseAIAdvisorShellProps) {
  const [active, setActive] = useState(false)

  if (active) {
    return (
      <div className="bg-white px-4 py-6 sm:py-8">
        <CourseAIAdvisor {...props} initiallyOpen />
      </div>
    )
  }

  return (
    <section className="bg-white px-4 py-6 sm:py-8" aria-label={`${props.courseTitle} AI assistant`}>
      <div className="mx-auto max-w-6xl rounded-2xl border border-[#009fda]/30 bg-gradient-to-r from-[#009fda]/5 via-white to-[#f7af34]/5 p-4 shadow-sm sm:p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="truncate text-base font-semibold text-slate-900 sm:text-lg">
                Ask about {props.courseTitle.trim()}
              </h2>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-[#009fda]/10 px-2 py-1 text-[11px] font-bold text-[#007cab]">
                AI <Sparkles className="h-3 w-3" />
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Load the assistant only when you need a course-specific answer.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setActive(true)}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#009fda] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#007cab]"
          >
            <Bot className="h-4 w-4" /> Ask AI
          </button>
        </div>
      </div>
    </section>
  )
}
