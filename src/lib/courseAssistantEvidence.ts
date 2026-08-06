export type CourseAlumniFact = { name: string; role: string }

const dataScienceAlumni: CourseAlumniFact[] = [
  { name: "Aditya Kumar Barik", role: "Data Scientist" },
  { name: "Tanmay Chakraborty", role: "ML Engineer" },
  { name: "Tania Laha", role: "Decision Scientist" },
  { name: "Satyajit Pramanik", role: "Data Analyst" },
]
const genAIAlumni: CourseAlumniFact[] = [
  { name: "Priti Jha", role: "Business Analyst" },
  { name: "Anish Banerjee", role: "Associate" },
  { name: "Pranab Kumar Paul", role: "Cloud Big-Data Engineer" },
  { name: "Kinjal Dasgupta", role: "Data Engineer (BI)" },
]
const cloudDataEngineeringAlumni: CourseAlumniFact[] = [
  { name: "Rajdeep Taluckdar", role: "Data Engineer" },
  { name: "Pranab Kumar Paul", role: "Cloud Big-Data Engineer" },
  { name: "Kinjal Dasgupta", role: "Data Engineer (BI)" },
  { name: "Sohini Das", role: "Data Engineer" },
]
const dataEngineeringAlumni: CourseAlumniFact[] = [
  { name: "Rajdeep Taluckdar", role: "Data Engineer" },
  { name: "Kinjal Dasgupta", role: "Data Engineer (BI)" },
  { name: "Sohini Das", role: "Data Engineer" },
  { name: "Animesh Singh", role: "Information Analyst II" },
]
const visualizationAlumni: CourseAlumniFact[] = [
  { name: "Sayan Nayak", role: "Senior Analyst-Decision Science" },
  { name: "Soumalya Dutta", role: "Research Associate" },
  { name: "Senjuti Das", role: "Senior Consultant" },
  { name: "Abhinav Sinha", role: "HR Analytics" },
]
const analyticsGenAIAlumni: CourseAlumniFact[] = [
  { name: "Mrinal Dhar", role: "Senior Analyst" },
  { name: "Ankita Paul", role: "Analyst" },
  { name: "Arpan Basu", role: "Analyst-MMA" },
  { name: "Abhinav Sinha", role: "HR Analytics" },
]
const businessAnalyticsAlumni: CourseAlumniFact[] = [
  { name: "Mrinal Dhar", role: "Senior Analyst" },
  { name: "Balkrishna Agarwal", role: "Analyst-Actuarial" },
  { name: "Abhishek Bhadra", role: "Senior Associate" },
  { name: "Ankita Paul", role: "Analyst" },
]
const cybersecurityAlumni: CourseAlumniFact[] = [
  { name: "Samik Bhattacharyya", role: "Manager - OT/IoT Cybersecurity" },
  { name: "Mrinal Dhar", role: "Senior Analyst" },
  { name: "Arpan Basu", role: "Analyst-MMA" },
  { name: "Souvik Bose", role: "Data Science Consultant" },
]

export function getCourseAssistantAlumni(courseTitle: string): CourseAlumniFact[] {
  const title = courseTitle.trim()
  if (title === "Generative AI Course" || title.startsWith("Generative AI Course in")) return genAIAlumni
  if (title === "Cloud Data Engineering Course with IIT Guwahati") return cloudDataEngineeringAlumni
  if (title === "Data Engineering Course" || title.startsWith("Data Engineering Course in")) return dataEngineeringAlumni
  if (title === "Data Analytics With Visualization" || title.startsWith("Data Analytics With Visualization in")) return visualizationAlumni
  if (title === "Data Analytics and Generative AI Course") return analyticsGenAIAlumni
  if (title === "Business Analytics with Python") return businessAnalyticsAlumni
  if (title === "Cybersecurity Fundamentals") return cybersecurityAlumni
  if (title === "Data Science with Machine Learning & AI Certification" || title.startsWith("Data Science with Machine Learning & AI Course") || title === "AI and Machine Learning Course" || title === "Data science course (Pay after Placement)") return dataScienceAlumni
  return []
}

export function getCoursePlacementFacts(courseTitle: string) {
  if (courseTitle.trim() === "AI for Beginners") return [
    "The page describes learning support, live doubt-clearing, community and networking, and resume building; it does not present the 94% full-time placement statistic for this course.",
  ]
  return [
    "The course page says Ivy provides end-to-end career support from resume building to job placement.",
    "The Job Placement Program works with 500+ hiring partners.",
    "The page reports a 94% placement rate for full-time program graduates; this is not a course-specific cohort rate or a placement guarantee unless a course FAQ explicitly says so.",
    "The page's Placement Support link opens the Ivy alumni and placement-success page at /alumni.",
  ]
}
