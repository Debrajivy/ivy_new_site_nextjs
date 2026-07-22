"use client"

import { FormEvent, useRef, useState } from "react"
import { Bot, Loader2, Send, Sparkles, X } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { getCoursePageFaqs } from "@/components/courses/CourseFAQ"

type ChatMessage = {
  role: "user" | "assistant"
  content: string
}

interface CourseAIAdvisorProps {
  courseTitle: string
  courseSlug: string
}

const QUICK_QUESTIONS = [
  "What is the course fee?",
  "What is the exact duration?",
  "What is covered in the curriculum?",
  "What are the prerequisites?",
]

export default function CourseAIAdvisor({ courseTitle, courseSlug }: CourseAIAdvisorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const openAssistant = () => {
    setIsOpen(true)
    window.setTimeout(() => inputRef.current?.focus(), 100)
  }

  const askQuestion = async (question: string) => {
    const trimmedQuestion = question.trim().slice(0, 300)
    if (!trimmedQuestion || isLoading) return

    const previousMessages = messages.slice(-4)
    setIsOpen(true)
    setInput("")
    setMessages((current) => [...current, { role: "user", content: trimmedQuestion }])
    setIsLoading(true)

    try {
      const response = await fetch("/api/course-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseSlug,
          message: trimmedQuestion,
          history: previousMessages,
          courseFaqs: getCoursePageFaqs(courseTitle, courseSlug),
        }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "Unable to get an answer")

      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.answer },
      ])
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: "I’m unable to answer right now. Please try again shortly or speak with an Ivy counsellor.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void askQuestion(input)
  }

  return (
    <section className="bg-white px-4 py-6 sm:py-8" aria-label={`${courseTitle} AI assistant`}>
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[#009fda]/30 bg-gradient-to-r from-[#009fda]/5 via-white to-[#f7af34]/5 shadow-sm">
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="truncate text-base font-semibold text-slate-900 sm:text-lg">
                  Ask about {courseTitle.trim()}
                </h2>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-[#009fda]/10 px-2 py-1 text-[11px] font-bold text-[#007cab]">
                  AI <Sparkles className="h-3 w-3" />
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Get quick answers based only on this course’s details.
              </p>
            </div>
            {isOpen && (
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                aria-label="Close AI assistant"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {!isOpen ? (
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              <button
                type="button"
                onClick={openAssistant}
                className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#009fda]/40 bg-gradient-to-r from-[#009fda]/10 to-[#f7af34]/10 px-4 py-2.5 text-sm font-semibold text-[#013a81] shadow-sm transition hover:border-[#009fda] hover:shadow-md"
              >
                <Bot className="h-4 w-4 text-[#009fda]" /> Ask AI
              </button>
              {QUICK_QUESTIONS.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => void askQuestion(question)}
                  className="shrink-0 rounded-xl border border-slate-100 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-sm transition hover:border-[#009fda]/40 hover:text-[#007cab] hover:shadow-md"
                >
                  {question}
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-4">
              <div className="max-h-72 space-y-3 overflow-y-auto rounded-xl border border-slate-100 bg-white/80 p-3 sm:p-4">
                {messages.length === 0 && (
                  <div className="rounded-lg bg-[#009fda]/5 p-3 text-sm text-slate-700">
                    Hi! Ask me anything about this course—curriculum, eligibility, projects, or outcomes.
                  </div>
                )}
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[88%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                        message.role === "user"
                          ? "bg-[#009fda] text-white"
                          : "bg-slate-100 text-slate-800"
                      }`}
                    >
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Loader2 className="h-4 w-4 animate-spin text-[#009fda]" /> Thinking…
                  </div>
                )}
              </div>

              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {QUICK_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    type="button"
                    disabled={isLoading}
                    onClick={() => void askQuestion(question)}
                    className="shrink-0 rounded-full border border-[#009fda]/20 bg-white px-3 py-1.5 text-xs text-slate-600 transition hover:border-[#009fda] hover:text-[#007cab] disabled:opacity-50"
                  >
                    {question}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value.slice(0, 300))}
                  disabled={isLoading}
                  placeholder="Ask a question about this course…"
                  aria-label="Question for course AI assistant"
                  className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#009fda] focus:ring-2 focus:ring-[#009fda]/15 disabled:bg-slate-50"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#009fda] text-white transition hover:bg-[#007cab] disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Send question"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-2 text-center text-[10px] text-slate-400">
                AI can make mistakes. Confirm important details with an Ivy counsellor.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
