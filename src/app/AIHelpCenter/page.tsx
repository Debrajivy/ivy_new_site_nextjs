"use client"

import type React from "react"
import { useState, useMemo } from "react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/helpcenter/Footer";
import FooterMain from "@/components/layout/Footer";

import {
  Sparkles,
  Search,
  TrendingUp,
  Bot,
  Brain,
  Code,
  Globe,
  Shield,
  Zap,
  BookOpen,
  Users,
  ArrowRight,
  Filter,
  X,
  ExternalLink,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// ============================================
// TYPE DEFINITIONS - What each topic contains
// ============================================

type TopicCategory = "LLMs" | "AI Agents" | "Tools" | "Ethics" | "Computer Vision" | "Audio AI"
type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced"
type TrendStatus = "Hot" | "Rising" | "Stable"

interface AITopic {
  id: number
  title: string
  category: TopicCategory
  difficulty: DifficultyLevel
  status: TrendStatus
  icon: React.ElementType
  shortDescription: string
  whatIsIt: string
  whyItMatters: string
  howToLearn: string[]
  keyTools: string[]
  resources: { name: string; url: string }[]
  estimatedLearningTime: string
}

// ============================================
// AI TOPICS DATA - Real trending AI topics students should know
// ============================================

const aiTopics: AITopic[] = [
  {
    id: 1,
    title: "Perplexity AI & RAG Systems",
    category: "Tools",
    difficulty: "Intermediate",
    status: "Hot",
    icon: Search,
    shortDescription: "AI-powered search that combines real-time web data with language models",
    whatIsIt:
      "Perplexity uses Retrieval-Augmented Generation (RAG) to search the internet in real-time and provide accurate, cited answers. Unlike traditional chatbots, it fetches current information before generating responses.",
    whyItMatters:
      "RAG is revolutionizing how AI accesses information. Instead of relying only on training data, AI can now search and cite sources like a research assistant, making it more accurate and trustworthy.",
    howToLearn: [
      "Start by using Perplexity.ai to understand how it differs from ChatGPT",
      "Learn the basics of vector databases (stores information for quick retrieval)",
      "Study how embeddings work (converting text into numbers AI can search)",
      "Build a simple RAG system using LangChain or LlamaIndex",
      "Practice creating a mini search engine that answers questions from your documents",
    ],
    keyTools: ["Perplexity AI", "LangChain", "Pinecone", "Weaviate", "OpenAI Embeddings"],
    resources: [
      { name: "Perplexity AI Official Site", url: "https://perplexity.ai" },
      { name: "LangChain RAG Tutorial", url: "https://python.langchain.com/docs/tutorials/rag/" },
    ],
    estimatedLearningTime: "2-3 weeks",
  },
  {
    id: 2,
    title: "AI Agents & Autonomous Systems",
    category: "AI Agents",
    difficulty: "Advanced",
    status: "Hot",
    icon: Bot,
    shortDescription: "AI that can plan, execute tasks, and make decisions independently",
    whatIsIt:
      "AI Agents are systems that can break down complex tasks, use tools, make decisions, and work towards goals with minimal human input. Think of them as AI assistants that can actually DO things, not just chat.",
    whyItMatters:
      "This is the future of AI - systems that can write code, conduct research, manage projects, and solve problems end-to-end. Companies are building agents that can replace entire workflows.",
    howToLearn: [
      "Understand the difference between chatbots and agents (agents take action)",
      "Learn about ReAct (Reasoning + Acting) framework",
      "Study tool-calling and function-calling in LLMs",
      "Build a simple agent that can search the web and summarize findings",
      "Explore AutoGPT, BabyAGI, and LangGraph for agent frameworks",
    ],
    keyTools: ["AutoGPT", "LangGraph", "CrewAI", "OpenAI Assistants API", "Anthropic Claude"],
    resources: [
      { name: "LangGraph Documentation", url: "https://langchain-ai.github.io/langgraph/" },
      { name: "OpenAI Assistants Guide", url: "https://platform.openai.com/docs/assistants/overview" },
    ],
    estimatedLearningTime: "4-6 weeks",
  },
  {
    id: 3,
    title: "Large Language Models (LLMs)",
    category: "LLMs",
    difficulty: "Beginner",
    status: "Stable",
    icon: Brain,
    shortDescription: "The foundation models powering ChatGPT, Claude, and modern AI",
    whatIsIt:
      "LLMs are massive neural networks trained on huge amounts of text data. They learn patterns in language and can generate human-like text, answer questions, write code, and more.",
    whyItMatters:
      "LLMs are the backbone of the AI revolution. Understanding how they work helps you use them effectively and build applications on top of them.",
    howToLearn: [
      "Start with the basics: What is a neural network?",
      "Learn about transformers (the architecture behind LLMs)",
      "Understand tokens, context windows, and temperature settings",
      "Practice prompt engineering - how to ask AI for better results",
      "Experiment with different models: GPT-4, Claude, Llama, Mistral",
    ],
    keyTools: ["ChatGPT", "Claude", "Llama 3", "Mistral", "Gemini"],
    resources: [
      { name: "Intro to LLMs by Andrej Karpathy", url: "https://www.youtube.com/watch?v=zjkBMFhNj_g" },
      { name: "OpenAI Prompt Engineering Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
    ],
    estimatedLearningTime: "2-3 weeks",
  },
  {
    id: 4,
    title: "Prompt Engineering & Optimization",
    category: "LLMs",
    difficulty: "Beginner",
    status: "Rising",
    icon: Zap,
    shortDescription: "The art and science of getting better results from AI models",
    whatIsIt:
      "Prompt engineering is about crafting the right instructions to get AI to produce exactly what you need. It's like learning the language AI understands best.",
    whyItMatters:
      "Good prompts can make the difference between useless and amazing AI outputs. This skill is in high demand and improves everything you build with AI.",
    howToLearn: [
      "Learn the basic prompt patterns: instruction, few-shot, chain-of-thought",
      "Practice with different AI models to see how they respond",
      "Study prompt libraries and successful examples",
      "Experiment with system prompts and role-playing",
      "Learn about prompt injection and safety considerations",
    ],
    keyTools: ["ChatGPT", "Claude", "PromptBase", "LangChain PromptTemplates"],
    resources: [
      { name: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/" },
      { name: "OpenAI Best Practices", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
    ],
    estimatedLearningTime: "1-2 weeks",
  },
  {
    id: 5,
    title: "Open Source AI Models",
    category: "LLMs",
    difficulty: "Intermediate",
    status: "Rising",
    icon: Code,
    shortDescription: "Free, customizable AI models you can run yourself",
    whatIsIt:
      "Open source models like Llama, Mistral, and Phi are powerful AI models you can download, modify, and run on your own hardware without paying API fees.",
    whyItMatters:
      "Open source democratizes AI. You can customize models for specific tasks, ensure data privacy, and avoid ongoing costs. Many companies prefer this for sensitive applications.",
    howToLearn: [
      "Start with Hugging Face - the GitHub of AI models",
      "Learn how to download and run models locally using Ollama",
      "Understand model quantization (making models smaller and faster)",
      "Practice fine-tuning a small model on your own data",
      "Explore model evaluation and benchmarking",
    ],
    keyTools: ["Hugging Face", "Ollama", "LM Studio", "Llama 3", "Mistral"],
    resources: [
      { name: "Hugging Face Hub", url: "https://huggingface.co/models" },
      { name: "Ollama Documentation", url: "https://ollama.ai/" },
    ],
    estimatedLearningTime: "3-4 weeks",
  },
  {
    id: 6,
    title: "AI Ethics & Safety",
    category: "Ethics",
    difficulty: "Beginner",
    status: "Rising",
    icon: Shield,
    shortDescription: "Understanding responsible AI development and deployment",
    whatIsIt:
      "AI Ethics covers bias, fairness, privacy, transparency, and the societal impact of AI systems. It's about building AI that helps humanity without causing harm.",
    whyItMatters:
      "As AI becomes more powerful, ethical considerations become critical. Understanding these issues makes you a more responsible developer and helps prevent harmful applications.",
    howToLearn: [
      "Study real-world AI failures and their consequences",
      "Learn about bias in training data and how it affects outputs",
      "Understand privacy concerns with AI (data collection, model training)",
      "Explore AI safety research and alignment problems",
      "Follow current AI policy and regulation developments",
    ],
    keyTools: ["AI Incident Database", "Fairlearn", "IBM AI Fairness 360"],
    resources: [
      { name: "AI Ethics Guidelines", url: "https://www.unesco.org/en/artificial-intelligence/recommendation-ethics" },
      { name: "AI Incident Database", url: "https://incidentdatabase.ai/" },
    ],
    estimatedLearningTime: "2-3 weeks",
  },
  {
    id: 7,
    title: "Multimodal AI (Vision + Language)",
    category: "Computer Vision",
    difficulty: "Advanced",
    status: "Hot",
    icon: Globe,
    shortDescription: "AI that understands both images and text together",
    whatIsIt:
      "Multimodal AI can process and generate multiple types of data - text, images, audio, video. Models like GPT-4 Vision can analyze images and answer questions about them.",
    whyItMatters:
      "The real world is multimodal. AI that can understand images, read text, and hear audio is far more useful than text-only systems. This is powering everything from medical diagnosis to autonomous vehicles.",
    howToLearn: [
      "Start with image classification basics using pre-trained models",
      "Learn about CLIP (Contrastive Language-Image Pre-training)",
      "Experiment with GPT-4 Vision or Claude 3 for image understanding",
      "Study image generation models like DALL-E and Stable Diffusion",
      "Explore video understanding and generation",
    ],
    keyTools: ["GPT-4 Vision", "CLIP", "Stable Diffusion", "Midjourney", "Segment Anything"],
    resources: [
      { name: "OpenAI Vision Guide", url: "https://platform.openai.com/docs/guides/vision" },
      { name: "Hugging Face Vision Models", url: "https://huggingface.co/models?pipeline_tag=image-classification" },
    ],
    estimatedLearningTime: "4-5 weeks",
  },
  {
    id: 8,
    title: "Voice AI & Speech Recognition",
    category: "Audio AI",
    difficulty: "Intermediate",
    status: "Rising",
    icon: Sparkles,
    shortDescription: "AI that can understand and generate human speech",
    whatIsIt:
      "Voice AI includes speech-to-text (transcription), text-to-speech (voice generation), and voice cloning. It's what powers Siri, Alexa, and AI voice assistants.",
    whyItMatters:
      "Voice is the most natural interface for humans. As voice AI improves, it's enabling hands-free computing, accessibility tools, and more natural human-AI interaction.",
    howToLearn: [
      "Start with Whisper (OpenAI's speech recognition model)",
      "Learn about audio processing and spectrograms",
      "Experiment with text-to-speech APIs (ElevenLabs, OpenAI TTS)",
      "Study voice cloning technology and its applications",
      "Build a simple voice assistant using existing APIs",
    ],
    keyTools: ["Whisper", "ElevenLabs", "OpenAI TTS", "Google Speech-to-Text"],
    resources: [
      { name: "OpenAI Whisper", url: "https://github.com/openai/whisper" },
      { name: "ElevenLabs Documentation", url: "https://elevenlabs.io/docs" },
    ],
    estimatedLearningTime: "3-4 weeks",
  },
]

// ============================================
// HELPER COMPONENTS
// ============================================

// Badge color mapping for visual consistency
const categoryColors: Record<TopicCategory, string> = {
  LLMs: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "AI Agents": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  Tools: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Ethics: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  "Computer Vision": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  "Audio AI": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
}

const difficultyColors: Record<DifficultyLevel, string> = {
  Beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  Advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
}

// ============================================
// TOPIC CARD - Shows brief overview of each AI topic
// ============================================

function TopicCard({ topic, onClick }: { topic: AITopic; onClick: () => void }) {
  const Icon = topic.icon

  return (
    <Card
      className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          {topic.status === "Hot" && (
            <Badge variant="destructive" className="gap-1">
              <TrendingUp className="w-3 h-3" />
              Hot
            </Badge>
          )}
          {topic.status === "Rising" && (
            <Badge variant="secondary" className="gap-1">
              <ArrowRight className="w-3 h-3" />
              Rising
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg leading-tight">{topic.title}</CardTitle>
        <CardDescription className="line-clamp-2">{topic.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className={categoryColors[topic.category]}>{topic.category}</Badge>
          <Badge className={difficultyColors[topic.difficulty]}>{topic.difficulty}</Badge>
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            {topic.estimatedLearningTime}
          </span>
          <span className="text-primary font-medium group-hover:underline">Learn more →</span>
        </div>
      </CardContent>
    </Card>
  )
}

// ============================================
// TOPIC DETAIL MODAL - Full learning guide for each topic
// ============================================

function TopicDetailModal({ topic, onClose }: { topic: AITopic | null; onClose: () => void }) {
  if (!topic) return null

  const Icon = topic.icon

  return (
    <div
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-background border border-border rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-start justify-between">
          <div className="flex items-start gap-4 flex-1">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{topic.title}</h2>
              <div className="flex flex-wrap gap-2">
                <Badge className={categoryColors[topic.category]}>{topic.category}</Badge>
                <Badge className={difficultyColors[topic.difficulty]}>{topic.difficulty}</Badge>
                <Badge variant="outline">{topic.estimatedLearningTime}</Badge>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* What is it? */}
          <section>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              What is it?
            </h3>
            <p className="text-muted-foreground leading-relaxed">{topic.whatIsIt}</p>
          </section>

          {/* Why it matters */}
          <section>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Why it matters
            </h3>
            <p className="text-muted-foreground leading-relaxed">{topic.whyItMatters}</p>
          </section>

          {/* How to learn */}
          <section>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              How to learn (Step-by-step)
            </h3>
            <ol className="space-y-3">
              {topic.howToLearn.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <p className="text-muted-foreground leading-relaxed pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Key tools */}
          <section>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              Key tools & platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              {topic.keyTools.map((tool) => (
                <Badge key={tool} variant="secondary" className="text-sm">
                  {tool}
                </Badge>
              ))}
            </div>
          </section>

          {/* Resources */}
          <section>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-primary" />
              Learning resources
            </h3>
            <div className="space-y-2">
              {topic.resources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-accent transition-colors group"
                >
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  <span className="text-sm font-medium group-hover:text-primary">{resource.name}</span>
                </a>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="pt-4 border-t border-border">
            <Button className="w-full" size="lg">
              Start Learning {topic.title}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================

export default function AILearningHub() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<TopicCategory | "All">("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | "All">("All")
  const [selectedTopic, setSelectedTopic] = useState<AITopic | null>(null)

  // Filter topics based on search and filters
  const filteredTopics = useMemo(() => {
    return aiTopics.filter((topic) => {
      const matchesSearch =
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.category.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === "All" || topic.category === selectedCategory
      const matchesDifficulty = selectedDifficulty === "All" || topic.difficulty === selectedDifficulty

      return matchesSearch && matchesCategory && matchesDifficulty
    })
  }, [searchQuery, selectedCategory, selectedDifficulty])

  const categories: (TopicCategory | "All")[] = [
    "All",
    "LLMs",
    "AI Agents",
    "Tools",
    "Computer Vision",
    "Audio AI",
    "Ethics",
  ]
  const difficulties: (DifficultyLevel | "All")[] = ["All", "Beginner", "Intermediate", "Advanced"]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Your AI Learning Journey Starts Here</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Master the <span className="text-primary">Trending AI Topics</span> Everyone's Talking About
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
            From Perplexity's RAG systems to autonomous AI agents - learn the technologies shaping the future. Clear
            explanations, step-by-step guides, and resources curated for students.
          </p>
        </section>

        {/* Search and Filters */}
        <section id="trending" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Card className="p-6">
            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search AI topics, tools, or concepts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium mb-2 block">Difficulty</label>
                  <div className="flex flex-wrap gap-2">
                    {difficulties.map((difficulty) => (
                      <Button
                        key={difficulty}
                        variant={selectedDifficulty === difficulty ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedDifficulty(difficulty)}
                      >
                        {difficulty}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results count */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="w-4 h-4" />
                <span>
                  Showing {filteredTopics.length} of {aiTopics.length} topics
                </span>
              </div>
            </div>
          </Card>
        </section>

        {/* Topics Grid */}
        <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          {filteredTopics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTopics.map((topic) => (
                <TopicCard key={topic.id} topic={topic} onClick={() => setSelectedTopic(topic)} />
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-muted rounded-full">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">No topics found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("All")
                    setSelectedDifficulty("All")
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            </Card>
          )}
        </section>

        {/* How to Use This Hub */}
        <section id="learn" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary rounded-lg">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">How to Use This Learning Hub</h2>
                <p className="text-muted-foreground">Follow these steps to maximize your AI learning journey</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="font-semibold">Browse & Discover</h3>
                <p className="text-sm text-muted-foreground">
                  Explore trending AI topics. Use filters to find topics matching your skill level.
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="font-semibold">Learn Step-by-Step</h3>
                <p className="text-sm text-muted-foreground">
                  Click any topic to see detailed explanations, learning paths, and resources.
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="font-semibold">Practice & Build</h3>
                <p className="text-sm text-muted-foreground">
                  Use the recommended tools and resources to build real projects and gain hands-on experience.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Community CTA */}
        <section id="community" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 text-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Join the AI Learning Community</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
              Connect with other students, share your projects, ask questions, and stay updated on the latest AI trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Join Discord Community
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Submit a Topic
              </Button>
            </div>
          </Card>
        </section>
      </main>

      <Footer />
      <FooterMain />

      {/* Topic Detail Modal */}
      {selectedTopic && <TopicDetailModal topic={selectedTopic} onClose={() => setSelectedTopic(null)} />}
    </div>
  )
}
