export const COURSE_ENROLLMENT_ANSWER =
  "To enroll, fill out and submit the form at the top-right of this course page. The Ivy team will contact you to help complete your enrollment."

export const COURSE_PLACEMENT_ASSISTANCE_ANSWER = `## Placement Assistance (Not Job Guarantee)

Ivy Professional School provides **placement assistance, not a job guarantee**.

**Lifetime Job Assistance:** Job assistance is provided for a lifetime, with no restriction on the number of job applications, provided eligibility and tool criteria are met for each role.

**How the Placement Assistance Process Works:**

- **Job Openings:** Companies share job openings with us throughout the year.
- **Student Community:** These openings are posted in our student WhatsApp community.
- **Tool-Based Roles:** The roles are typically tool-based, for example:
  - Data Analyst - Excel + Power BI
  - MIS Analyst - Advanced Excel
- **Eligibility to Apply:** If a student has completed the required tools and meets the eligibility criteria, they may apply for the opening.
- **Internal Shortlisting:** Ivy shortlists students based on whether they have cleared the final assessment of the required tool (for example, passing the Excel final exam for an Excel-based role).
- **CV Forwarding:** Once shortlisted, the CV is forwarded to the company.
- **Company Recruitment:** From that stage onward, the entire recruitment process - shortlisting, interviews, and final selection - is fully managed by the company. Ivy does not influence or control the company's hiring decisions.

**How Ivy Supports Students:**

- CV building and structuring
- Project portfolio development
- Interview preparation and mock sessions
- Career guidance

This ensures students are well-prepared and improves their chances of selection.

We are one of the earliest institutes in India to start training and consulting in the Data domain, and over the years have built a strong reputation within the corporate ecosystem. Because of our structured assessments, practical exposure, and industry-aligned curriculum, learners from Ivy are well-prepared and industry-ready.

Our focus has always been on quality learning and strong fundamentals, so that our students not only secure opportunities but are able to create a meaningful impact and build long-term careers in the industry.`

export function isCourseEnrollmentQuestion(question: string) {
  const normalized = question.toLowerCase().replace(/[^a-z0-9\s]/g, " ")
  const asksHow = /\b(how|where|process|steps?|way|want|ready)\b/.test(normalized)
  const enrollmentAction = /\b(enroll?(?:ment|ing|ed)?|register|registration|apply|application|admission|join|sign\s*up)\b/.test(normalized)

  return enrollmentAction && asksHow
}

export function isCoursePlacementAssistanceQuestion(question: string) {
  const normalized = question.toLowerCase().replace(/[^a-z0-9\s]/g, " ")
  const placementIntent = /\b(placement|placements|job|jobs|career|hiring)\b/.test(normalized)
  const assistanceOrAssurance = /\b(assistance|assist|support|guarantee|guaranteed|guaranty|gurantee|garantee|assurance|assured|promise|provide|provided|available|offer|offered|referral|referrals|opportunity|opportunities)\b/.test(normalized)
  const asksAboutGettingAJob = /\b(get|secure|land|find)\b.*\b(job|jobs|placed|placement)\b/.test(normalized)

  return (placementIntent && assistanceOrAssurance) || asksAboutGettingAJob
}
