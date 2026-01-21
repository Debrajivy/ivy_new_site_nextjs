"use client"

import { use } from "react" // ADD THIS IMPORT
import { notFound } from "next/navigation"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/helpcenter/Footer"
import FooterMain from "@/components/layout/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Bot, Search, Shield, Zap, Globe, ArrowLeft } from "lucide-react"
import Link from "next/link"

const categoryData = {
  "llms": {
    title: "Large Language Models",
    description: "The foundation models powering modern AI applications",
    icon: Brain,
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  },
  "ai-agents": {
    title: "AI Agents",
    description: "Autonomous systems that can plan and execute tasks",
    icon: Bot,
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  },
  "tools": {
    title: "AI Tools & Platforms",
    description: "Essential tools and platforms for AI development",
    icon: Search,
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  },
  "ethics": {
    title: "AI Ethics & Safety",
    description: "Responsible AI development and deployment",
    icon: Shield,
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  },
  "computer-vision": {
    title: "Computer Vision",
    description: "AI that understands and processes visual information",
    icon: Globe,
    color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  },
  "audio-ai": {
    title: "Audio AI",
    description: "Speech recognition, generation, and audio processing",
    icon: Zap,
    color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
  },
}

// Sample topics for the category (you would fetch these based on the category)
const categoryTopics = [
  {
    id: 1,
    title: "Large Language Models (LLMs)",
    slug: "large-language-models",
    category: "llms",
    difficulty: "Beginner" as const,
    shortDescription: "The foundation models powering ChatGPT, Claude, and modern AI",
    estimatedLearningTime: "2-3 weeks",
  },
  {
    id: 2,
    title: "Prompt Engineering & Optimization",
    slug: "prompt-engineering",
    category: "llms",
    difficulty: "Beginner" as const,
    shortDescription: "The art and science of getting better results from AI models",
    estimatedLearningTime: "1-2 weeks",
  },
  // Add more topics...
]

// FIX: Update PageProps to use Promise for Next.js 15
interface PageProps {
  params: Promise<{
    category: string
  }>
}

export default function CategoryPage({ params }: PageProps) {
  // FIX: Use the use() hook to unwrap the params promise
  const { category: categoryParam } = use(params)
  
  const category = categoryData[categoryParam as keyof typeof categoryData]

  if (!category) {
    notFound()
  }

  const Icon = category.icon
  const topics = categoryTopics.filter(topic => topic.category === categoryParam)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/AIHelpCenter">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to All Topics
            </Button>
          </Link>
        </div>

        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <Badge className={`text-lg ${category.color}`}>
              {category.title}
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Link key={topic.id} href={`/ai/${topic.category}/${topic.slug}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {topic.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <Badge variant="secondary">{topic.difficulty}</Badge>
                    <span>{topic.estimatedLearningTime}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {topics.length === 0 && (
          <Card className="text-center p-12">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-muted rounded-full">
                <Brain className="w-8 h-8 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">No topics found</h3>
                <p className="text-muted-foreground">
                  We're constantly adding new topics to this category.
                </p>
              </div>
            </div>
          </Card>
        )}
      </main>

      {/* <Footer /> */}
      <FooterMain />
    </div>
  )
}