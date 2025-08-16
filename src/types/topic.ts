
export interface TopicCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface Topic {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  categoryId: string;
  author: string;
  publishDate: string;
  readTime: number;
  tags: string[];
  image: string;
  isPopular: boolean;
  seoKeywords: string[];
  seoDescription: string;
}

export interface Quiz {
  id: string;
  topicId: string;
  title: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctOption: number;
  explanation: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  image: string;
  requiredPoints: number;
}

export interface UserProgress {
  userId: string;
  completedTopics: string[];
  points: number;
  badges: string[];
  quizzesPassed: string[];
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  avatar: string;
  points: number;
  badges: number;
  rank: number;
}
