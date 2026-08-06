export const COURSE_ENROLLMENT_ANSWER =
  "To enroll, fill out and submit the form at the top-right of this course page. The Ivy team will contact you to help complete your enrollment."

export function isCourseEnrollmentQuestion(question: string) {
  const normalized = question.toLowerCase().replace(/[^a-z0-9\s]/g, " ")
  const asksHow = /\b(how|where|process|steps?|way|want|ready)\b/.test(normalized)
  const enrollmentAction = /\b(enroll?(?:ment|ing|ed)?|register|registration|apply|application|admission|join|sign\s*up)\b/.test(normalized)

  return enrollmentAction && asksHow
}
