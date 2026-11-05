// Shared bootcamp data for the /bootcamp page and the AI course heroes.
// Add new recordings at the TOP of latestRecordings: course pages show the first three.

export type BootcampCategory = "Data Engineering" | "AI Agent" | "SQL" | "Claude AI" | "AI Apps";

export interface BootcampRecording {
  id: string;
  videoId: string;
  title: string;
  category: BootcampCategory;
  youtubeUrl: string;
  thumbnail: string;
  summary: string;
}

// Registration form for the next live session. The /bootcamp page also reads the session
// title, date and time from this form, so update the form itself for each new session.
export const bootcampRegisterUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScGHiuSIQfwayT9WspvAs5AXqFnQE9uHmb4K3Sbr63JD7XiHg/viewform";

// Shown on /bootcamp while a session is live.
export const liveSessionZoomUrl =
  "https://us02web.zoom.us/j/88210597294?pwd=uWE5rS4XBvPPysH3TNtDvmi4ehJeCO.1";

// Recording links shown on /bootcamp after a session ends, keyed by session date (YYYY-MM-DD, IST).
// Until a session's date is added here, the page links to the YouTube channel instead.
export const sessionRecordings: Record<string, string> = {
  "2026-11-04": "https://www.youtube.com/watch?v=2Uz83lGb53s",
};

export const youtubeChannelUrl = "https://youtube.com/ivyproschool";

export const latestRecordings: BootcampRecording[] = [
  {
    id: "prompt-ai-like-pro",
    videoId: "hrI8UfZg9A4",
    title: "How to Prompt AI Like a Pro at Work | Full Masterclass with Arpan Saxena",
    category: "AI Apps",
    youtubeUrl: "https://www.youtube.com/live/hrI8UfZg9A4?si=Pnr_KGZJ2jm8B2ug",
    thumbnail: "https://i.ytimg.com/vi/hrI8UfZg9A4/hqdefault.jpg",
    summary: "Learn practical prompting techniques for getting clearer, more useful results from AI in everyday professional workflows.",
  },
  {
    id: "rag-ai-agents-agentic-ai",
    videoId: "o6ZjB25OmFE",
    title: "RAG vs. AI Agents vs. Agentic AI Explained LIVE | Free Bootcamp by Ivy Professional School",
    category: "AI Agent",
    youtubeUrl: "https://www.youtube.com/live/o6ZjB25OmFE?si=9IQYqT_lfTkjvUTT",
    thumbnail: "https://i.ytimg.com/vi/o6ZjB25OmFE/hqdefault.jpg",
    summary: "Understand the differences between RAG, AI agents, and agentic AI through a practical live bootcamp.",
  },
  {
    id: "de-ai-era",
    videoId: "gJaAinGssMY",
    title: "Data Engineering in the AI Era | Live Bootcamp for Beginners to Advanced",
    category: "Data Engineering",
    youtubeUrl: "https://www.youtube.com/watch?v=gJaAinGssMY",
    thumbnail: "https://i.ytimg.com/vi/gJaAinGssMY/hqdefault.jpg",
    summary: "A practical walkthrough of modern data engineering skills, tools, and AI-era workflows.",
  },
  {
    id: "claude-doc-agent",
    videoId: "pZRU5wXpDzA",
    title: "How to Use Claude to Create an AI Agent to Summarize Documents | Claude AI Bootcamp 2026",
    category: "Claude AI",
    youtubeUrl: "https://www.youtube.com/watch?v=pZRU5wXpDzA",
    thumbnail: "https://i.ytimg.com/vi/pZRU5wXpDzA/hqdefault.jpg",
    summary: "Build a document summarization workflow with Claude and understand how AI agents support knowledge work.",
  },
  {
    id: "text-to-sql-agent",
    videoId: "uukEZ8cPJ7g",
    title: "Build a Text-to-SQL AI Agent: Generate SQL Queries from Natural Language",
    category: "SQL",
    youtubeUrl: "https://www.youtube.com/watch?v=uukEZ8cPJ7g&t=119s",
    thumbnail: "https://i.ytimg.com/vi/uukEZ8cPJ7g/hqdefault.jpg",
    summary: "Learn how natural-language prompts can be converted into SQL queries for analytics workflows.",
  },
  {
    id: "free-ai-apps",
    videoId: "nXxvyuxpYkI",
    title: "Stop Paying for Claude Code | Build & Deploy AI Apps for FREE",
    category: "AI Apps",
    youtubeUrl: "https://www.youtube.com/watch?v=nXxvyuxpYkI&t=13s",
    thumbnail: "https://i.ytimg.com/vi/nXxvyuxpYkI/hqdefault.jpg",
    summary: "Explore a no-cost path to building and deploying AI apps without heavy tooling overhead.",
  },
  {
    id: "claude-data-ai-pro",
    videoId: "XR56kedmoLo",
    title: "How to Use Claude AI as a Data & AI Professional | Free Hands-on Bootcamp (2026)",
    category: "Claude AI",
    youtubeUrl: "https://www.youtube.com/watch?v=XR56kedmoLo&t=14s",
    thumbnail: "https://i.ytimg.com/vi/XR56kedmoLo/hqdefault.jpg",
    summary: "A hands-on session for using Claude AI across data analysis, reporting, and professional workflows.",
  },
];

export const categoryStyles: Record<BootcampCategory, string> = {
  "Data Engineering": "bg-cyan-50 text-cyan-700 border-cyan-100",
  "AI Agent": "bg-indigo-50 text-indigo-700 border-indigo-100",
  SQL: "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Claude AI": "bg-violet-50 text-violet-700 border-violet-100",
  "AI Apps": "bg-amber-50 text-amber-700 border-amber-100",
};

// Course pages (by slug) that show the latest bootcamp recordings in the hero.
const bootcampCourseSlugs = new Set([
  "ai-for-beginners-course",
  "ai-product-manager-course",
  "ai-machine-learning-course",
  "iit-data-science-course",
  "data-science-and-ml-course",
  "no-upfront-fees-data-science-and-ml-course",
  "data-science-course-kolkata",
  "data-science-course-delhi",
  "data-science-course-pune",
  "data-science-course-chennai",
  "data-science-course-bangalore",
  "data-science-course-mumbai",
  "generative-ai-course",
  "generative-ai-course-kolkata",
  "generative-ai-course-bangalore",
  "generative-ai-course-delhi",
  "generative-ai-course-mumbai",
  "generative-ai-course-pune",
  "generative-ai-course-chennai",
  "data-analytics-and-generative-ai-course",
  "data-visualization-course",
]);

export const showsBootcampRecordings = (slug: string) => bootcampCourseSlugs.has(slug);
