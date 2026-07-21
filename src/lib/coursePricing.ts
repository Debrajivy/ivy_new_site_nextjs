export type CoursePricing = {
  courseFee: number
  registration: number
  emi: number
  months: number
}

export const coursePricing: Record<string, CoursePricing> = {
  "Data Analytics With Visualization": { courseFee: 42000, registration: 10000, emi: 3556, months: 9 },
  "AI for Beginners": { courseFee: 10000, registration: 10000, emi: 3556, months: 9 },
  "Data Analytics and Generative AI Course": { courseFee: 41000, registration: 10000, emi: 3445, months: 9 },
  "Data Science with Machine Learning & AI Certification": { courseFee: 56000, registration: 10000, emi: 5111, months: 9 },
  "Data Science with Machine Learning & AI Course in Delhi": { courseFee: 56000, registration: 10000, emi: 5111, months: 9 },
  "Data Science with Machine Learning & AI Course in Kolkata": { courseFee: 56000, registration: 10000, emi: 5111, months: 9 },
  "Data Science with Machine Learning & AI Course in Pune": { courseFee: 56000, registration: 10000, emi: 5111, months: 9 },
  "Data Science with Machine Learning & AI Course in Chennai": { courseFee: 56000, registration: 10000, emi: 5111, months: 9 },
  "Data Science with Machine Learning & AI Course in Mumbai": { courseFee: 56000, registration: 10000, emi: 5111, months: 9 },
  " Data Engineering Course": { courseFee: 58500, registration: 10000, emi: 5389, months: 9 },
  "AI for Entrepreneurs": { courseFee: 34900, registration: 14950, emi: 5389, months: 9 },
  "Data Engineering Course in Kolkata": { courseFee: 58500, registration: 10000, emi: 5389, months: 9 },
  "Data Engineering Course in Delhi": { courseFee: 58500, registration: 10000, emi: 5389, months: 9 },
  "Data Engineering Course in Bangalore": { courseFee: 58500, registration: 10000, emi: 5389, months: 9 },
  "Data Engineering Course in Mumbai": { courseFee: 58500, registration: 10000, emi: 5389, months: 9 },
  "Data Engineering Course in Pune": { courseFee: 58500, registration: 10000, emi: 5389, months: 9 },
  "Data Engineering Course in Chennai": { courseFee: 58500, registration: 10000, emi: 5389, months: 9 },
  "Data Analytics With Visualization in Kolkata": { courseFee: 42000, registration: 10000, emi: 3556, months: 9 },
  "Data Analytics With Visualization in Delhi": { courseFee: 42000, registration: 10000, emi: 3556, months: 9 },
  "Data Analytics With Visualization in Bangalore": { courseFee: 42000, registration: 10000, emi: 3556, months: 9 },
  "Data Analytics With Visualization in Mumbai": { courseFee: 42000, registration: 10000, emi: 3556, months: 9 },
  "Data Analytics With Visualization in Pune": { courseFee: 42000, registration: 10000, emi: 3556, months: 9 },
  "Data Analytics With Visualization in Chennai": { courseFee: 42000, registration: 10000, emi: 3556, months: 9 },
  " Advanced Generative AI Course": { courseFee: 69000, registration: 10000, emi: 6556, months: 9 },
  "Generative AI Course in Kolkata": { courseFee: 69000, registration: 10000, emi: 6556, months: 9 },
  "Generative AI Course in Delhi": { courseFee: 69000, registration: 10000, emi: 6556, months: 9 },
  "Generative AI Course in Bangalore": { courseFee: 69000, registration: 10000, emi: 6556, months: 9 },
  "Generative AI Course in Mumbai": { courseFee: 69000, registration: 10000, emi: 6556, months: 9 },
  "Generative AI Course in Pune": { courseFee: 69000, registration: 10000, emi: 6556, months: 9 },
  "Generative AI Course in Chennai": { courseFee: 69000, registration: 10000, emi: 6556, months: 9 },
  "AI for Product Managers": { courseFee: 29000, registration: 10000, emi: 9500, months: 2 },
  "AI and Machine Learning Course": { courseFee: 39000, registration: 10000, emi: 3223, months: 9 },
  "Data science course (Pay after Placement)": { courseFee: 135000, registration: 10000, emi: 13890, months: 9 },
}

export function getCoursePricing(title: string) {
  const normalizedTitle = title.trim()
  return coursePricing[title] || coursePricing[normalizedTitle] || coursePricing[` ${normalizedTitle}`]
}
