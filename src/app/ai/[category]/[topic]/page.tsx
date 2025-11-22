"use client"

import { useState, use } from "react"
import { notFound } from "next/navigation"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/helpcenter/Footer"
import FooterMain from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Sparkles,
  TrendingUp,
  BookOpen,
  Code,
  ExternalLink,
  ArrowLeft,
  Clock,
  Users,
  Brain,
  Bot,
  Search,
  Shield,
  Zap,
  Globe,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"

const learningStepDescriptions: Record<string, Record<number, string>> = {
  "perplexity-ai-rag-systems": {
    0: "Perplexity.ai is a search engine powered by AI. Try asking it questions and compare the results with ChatGPT. Notice how Perplexity provides sources and real-time information.",
    1: "Vector databases store information in a format that AI can search through quickly. Learn about Pinecone, Weaviate, or Milvus. Understand how they differ from traditional databases.",
    2: "Embeddings convert text into numbers (vectors) that represent meaning. Study how OpenAI embeddings work and why similar texts have similar embeddings.",
    3: "LangChain and LlamaIndex are frameworks that make building RAG systems easier. Start with simple examples and gradually build more complex systems.",
    4: "Create a mini search engine that takes your own documents and answers questions about them. This is the practical application of everything you've learned.",
  },
  "ai-agents-autonomous-systems": {
    0: "Chatbots respond to input, but agents take action. Study how agents can use tools, make decisions, and work towards goals independently.",
    1: "ReAct stands for Reasoning + Acting. Learn how agents think through problems and then take actions based on their reasoning.",
    2: "Tool-calling allows LLMs to use functions and APIs. Understand how to define tools and let the model decide when to use them.",
    3: "Build an agent that can search the web, read results, and summarize findings. This teaches you the core agent pattern.",
    4: "Explore frameworks like AutoGPT, BabyAGI, and LangGraph. Each has different approaches to building autonomous systems.",
    5: "Practice building agents that chain multiple tools together. For example: search → analyze → write report → send email.",
  },
  "large-language-models": {
    0: "Neural networks are the foundation of AI. Learn about neurons, layers, and how information flows through a network.",
    1: "Transformers are the architecture behind modern LLMs. Understand attention mechanisms and why they're so powerful.",
    2: "Tokens are how LLMs process text. Learn about context windows (how much text an LLM can see at once) and temperature (randomness in responses).",
    3: "Prompt engineering is about asking the right questions. Study techniques like few-shot learning and chain-of-thought prompting.",
    4: "Different models have different strengths. Experiment with GPT-4, Claude, Llama, and Mistral to understand their differences.",
    5: "Fine-tuning lets you customize models for specific tasks. Learn when to fine-tune vs. when to use prompt engineering.",
  },
  "prompt-engineering-optimization": {
    0: "Learn the basic patterns: giving clear instructions, providing examples (few-shot), and asking the model to think step-by-step (chain-of-thought).",
    1: "Different models respond differently to the same prompt. Test your prompts across multiple models to see variations.",
    2: "Study successful prompts on PromptBase and other libraries. Analyze what makes them effective.",
    3: "System prompts set the context for the entire conversation. Learn how to use role-playing and context to improve outputs.",
    4: "Prompt injection is when users try to manipulate the AI. Learn how to protect against it and write safer prompts.",
    5: "Advanced techniques like tree-of-thought and self-consistency can improve reasoning. Study these for complex problem-solving.",
  },
  "open-source-ai-models": {
    0: "Hugging Face is the GitHub of AI models. Learn how to browse, download, and understand model cards.",
    1: "Ollama lets you run models locally without paying for APIs. Install it and experiment with different models.",
    2: "Quantization makes models smaller and faster by reducing precision. Learn about different quantization levels (4-bit, 8-bit, etc.).",
    3: "Fine-tuning a model on your own data makes it better for your specific use case. Start with a small model and small dataset.",
    4: "Benchmarks help you compare models. Learn about MMLU, HellaSwag, and other evaluation metrics.",
    5: "Different architectures (Llama, Mistral, Phi) have different trade-offs. Understand when to use each one.",
  },
  "ai-ethics-safety": {
    0: "Study real cases where AI went wrong: biased hiring algorithms, misinformation spread, privacy violations. Learn from these failures.",
    1: "Bias in training data leads to biased AI. Learn how to identify bias and why it matters in applications like hiring and lending.",
    2: "AI systems collect and use personal data. Understand privacy concerns and regulations like GDPR.",
    3: "AI alignment is about making sure AI systems do what we want. Study the alignment problem and why it's important.",
    4: "AI policy is evolving rapidly. Follow developments in AI regulation and understand the implications for developers.",
    5: "Learn practical techniques to measure and reduce bias in your models. Use tools like Fairlearn and IBM AI Fairness 360.",
  },
  "multimodal-ai-vision-language": {
    0: "Image classification is the foundation. Learn how to use pre-trained models to identify objects in images.",
    1: "CLIP connects images and text. Understand how it learns to match images with descriptions.",
    2: "GPT-4 Vision and Claude 3 can analyze images and answer questions about them. Experiment with these capabilities.",
    3: "Image generation models like DALL-E and Stable Diffusion create images from text. Learn how they work and their limitations.",
    4: "Video understanding is the next frontier. Learn how models process sequences of frames.",
    5: "Build applications that combine multiple input types. For example: analyze an image, extract text, and generate a report.",
  },
  "voice-ai-speech-recognition": {
    0: "Whisper is OpenAI's speech-to-text model. Download it and transcribe audio files. Notice how it handles accents and background noise.",
    1: "Audio processing involves converting sound waves into spectrograms. Learn the basics of audio signal processing.",
    2: "Text-to-speech APIs like ElevenLabs and OpenAI TTS convert text to natural-sounding speech. Experiment with different voices and languages.",
    3: "Voice cloning technology can replicate a person's voice. Understand the technology and ethical implications.",
    4: "Build a simple voice assistant that listens, understands, and responds. This combines speech recognition and generation.",
    5: "Real-time speech processing is challenging. Learn about streaming audio and low-latency processing.",
  },
}

// Complete AI Topics Data
const aiTopics = [
  {
    id: 1,
    title: "Perplexity AI & RAG Systems",
    slug: "perplexity-ai-rag-systems",
    category: "tools",
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
      { name: "Vector Databases Explained", url: "https://www.pinecone.io/learn/vector-database/" },
    ],
    estimatedLearningTime: "2-3 weeks",
    prerequisites: ["Basic Python knowledge", "Understanding of APIs", "Familiarity with AI concepts"],
  },
  {
    id: 2,
    title: "AI Agents & Autonomous Systems",
    slug: "ai-agents-autonomous-systems",
    category: "ai-agents",
    difficulty: "Advanced",
    status: "Hot",
    icon: Bot,
    shortDescription: "AI that can plan, execute tasks, and make decisions independently",
    whatIsIt:
      "AI Agents are systems that can break down complex tasks, use tools, make decisions, and work towards goals with minimal human input. Think of them as AI assistants that can actually DO things, not just chat. They can browse the web, use software, analyze data, and complete multi-step workflows autonomously.",
    whyItMatters:
      "This is the future of AI - systems that can write code, conduct research, manage projects, and solve problems end-to-end. Companies are building agents that can replace entire workflows. From customer service to software development, autonomous agents are transforming how work gets done.",
    howToLearn: [
      "Understand the difference between chatbots and agents (agents take action)",
      "Learn about ReAct (Reasoning + Acting) framework",
      "Study tool-calling and function-calling in LLMs",
      "Build a simple agent that can search the web and summarize findings",
      "Explore AutoGPT, BabyAGI, and LangGraph for agent frameworks",
      "Practice building agents that can use multiple tools in sequence",
    ],
    keyTools: ["AutoGPT", "LangGraph", "CrewAI", "OpenAI Assistants API", "Anthropic Claude", "Microsoft Autogen"],
    resources: [
      { name: "LangGraph Documentation", url: "https://langchain-ai.github.io/langgraph/" },
      { name: "OpenAI Assistants Guide", url: "https://platform.openai.com/docs/assistants/overview" },
      { name: "AI Agents Tutorial", url: "https://www.agents.wiki/" },
    ],
    estimatedLearningTime: "4-6 weeks",
    prerequisites: ["Strong programming skills", "Experience with APIs", "Understanding of LLMs", "Python knowledge"],
  },
  {
    id: 3,
    title: "Large Language Models (LLMs)",
    slug: "large-language-models",
    category: "llms",
    difficulty: "Beginner",
    status: "Stable",
    icon: Brain,
    shortDescription: "The foundation models powering ChatGPT, Claude, and modern AI",
    whatIsIt:
      "LLMs are massive neural networks trained on huge amounts of text data. They learn patterns in language and can generate human-like text, answer questions, write code, and more. These models understand context, follow instructions, and demonstrate remarkable reasoning capabilities across diverse domains.",
    whyItMatters:
      "LLMs are the backbone of the AI revolution. Understanding how they work helps you use them effectively and build applications on top of them. They're transforming industries from education to healthcare, and creating entirely new job categories like prompt engineering and AI oversight.",
    howToLearn: [
      "Start with the basics: What is a neural network?",
      "Learn about transformers (the architecture behind LLMs)",
      "Understand tokens, context windows, and temperature settings",
      "Practice prompt engineering - how to ask AI for better results",
      "Experiment with different models: GPT-4, Claude, Llama, Mistral",
      "Study fine-tuning and how to customize models for specific tasks",
    ],
    keyTools: ["ChatGPT", "Claude", "Llama 3", "Mistral", "Gemini", "Hugging Face Transformers"],
    resources: [
      { name: "Intro to LLMs by Andrej Karpathy", url: "https://www.youtube.com/watch?v=zjkBMFhNj_g" },
      { name: "OpenAI Prompt Engineering Guide", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
      { name: "Hugging Face Course", url: "https://huggingface.co/learn/nlp-course/chapter1/1" },
    ],
    estimatedLearningTime: "2-3 weeks",
    prerequisites: ["Basic programming knowledge", "Understanding of machine learning concepts"],
  },
  {
    id: 4,
    title: "Prompt Engineering & Optimization",
    slug: "prompt-engineering-optimization",
    category: "llms",
    difficulty: "Beginner",
    status: "Rising",
    icon: Zap,
    shortDescription: "The art and science of getting better results from AI models",
    whatIsIt:
      "Prompt engineering is about crafting the right instructions to get AI to produce exactly what you need. It's like learning the language AI understands best. This involves understanding how models interpret different phrasing, context, and examples to generate optimal outputs.",
    whyItMatters:
      "Good prompts can make the difference between useless and amazing AI outputs. This skill is in high demand and improves everything you build with AI. Companies are hiring prompt engineers with salaries over $300k because effective prompting can save thousands of hours and dramatically improve AI performance.",
    howToLearn: [
      "Learn the basic prompt patterns: instruction, few-shot, chain-of-thought",
      "Practice with different AI models to see how they respond",
      "Study prompt libraries and successful examples",
      "Experiment with system prompts and role-playing",
      "Learn about prompt injection and safety considerations",
      "Master advanced techniques like tree-of-thought and self-consistency",
    ],
    keyTools: ["ChatGPT", "Claude", "PromptBase", "LangChain PromptTemplates", "OpenAI Playground"],
    resources: [
      { name: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/" },
      { name: "OpenAI Best Practices", url: "https://platform.openai.com/docs/guides/prompt-engineering" },
      { name: "Learn Prompting", url: "https://learnprompting.org/" },
    ],
    estimatedLearningTime: "1-2 weeks",
    prerequisites: ["Basic understanding of AI", "Experience using chatbots"],
  },
  {
    id: 5,
    title: "Open Source AI Models",
    slug: "open-source-ai-models",
    category: "llms",
    difficulty: "Intermediate",
    status: "Rising",
    icon: Code,
    shortDescription: "Customizable AI models you can run yourself",
    whatIsIt:
      "Open source models like Llama, Mistral, and Phi are powerful AI models you can download, modify, and run on your own hardware without paying API fees. These models are developed by research organizations and companies that believe in democratizing AI technology.",
    whyItMatters:
      "Open source democratizes AI. You can customize models for specific tasks, ensure data privacy, and avoid ongoing costs. Many companies prefer this for sensitive applications. The open-source AI community is rapidly advancing, with models sometimes outperforming proprietary ones on specific tasks.",
    howToLearn: [
      "Start with Hugging Face - the GitHub of AI models",
      "Learn how to download and run models locally using Ollama",
      "Understand model quantization (making models smaller and faster)",
      "Practice fine-tuning a small model on your own data",
      "Explore model evaluation and benchmarking",
      "Learn about different model architectures and their trade-offs",
    ],
    keyTools: ["Hugging Face", "Ollama", "LM Studio", "Llama 3", "Mistral", "vLLM", "TensorRT"],
    resources: [
      { name: "Hugging Face Hub", url: "https://huggingface.co/models" },
      { name: "Ollama Documentation", url: "https://ollama.ai/" },
      { name: "Open LLM Leaderboard", url: "https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard" },
    ],
    estimatedLearningTime: "3-4 weeks",
    prerequisites: ["Python programming", "Basic ML knowledge", "Understanding of APIs"],
  },
  {
    id: 6,
    title: "AI Ethics & Safety",
    slug: "ai-ethics-safety",
    category: "ethics",
    difficulty: "Beginner",
    status: "Rising",
    icon: Shield,
    shortDescription: "Understanding responsible AI development and deployment",
    whatIsIt:
      "AI Ethics covers bias, fairness, privacy, transparency, and the societal impact of AI systems. It's about building AI that helps humanity without causing harm. This field addresses questions about AI alignment, value loading, and ensuring AI systems behave as intended.",
    whyItMatters:
      "As AI becomes more powerful, ethical considerations become critical. Understanding these issues makes you a more responsible developer and helps prevent harmful applications. From biased hiring algorithms to misinformation spread, ethical AI practices are essential for building trust and ensuring positive societal impact.",
    howToLearn: [
      "Study real-world AI failures and their consequences",
      "Learn about bias in training data and how it affects outputs",
      "Understand privacy concerns with AI (data collection, model training)",
      "Explore AI safety research and alignment problems",
      "Follow current AI policy and regulation developments",
      "Practice implementing fairness metrics and bias mitigation techniques",
    ],
    keyTools: ["AI Incident Database", "Fairlearn", "IBM AI Fairness 360", "What-If Tool", "Model Cards"],
    resources: [
      { name: "AI Ethics Guidelines", url: "https://www.unesco.org/en/artificial-intelligence/recommendation-ethics" },
      { name: "AI Incident Database", url: "https://incidentdatabase.ai/" },
      { name: "Partnership on AI", url: "https://www.partnershiponai.org/" },
    ],
    estimatedLearningTime: "2-3 weeks",
    prerequisites: ["Critical thinking skills", "Understanding of social impact", "Basic AI knowledge"],
  },
  {
    id: 7,
    title: "Multimodal AI (Vision + Language)",
    slug: "multimodal-ai-vision-language",
    category: "computer-vision",
    difficulty: "Advanced",
    status: "Hot",
    icon: Globe,
    shortDescription: "AI that understands both images and text together",
    whatIsIt:
      "Multimodal AI can process and generate multiple types of data - text, images, audio, video. Models like GPT-4 Vision can analyze images and answer questions about them. These systems understand the relationships between different modalities, enabling richer and more contextual understanding.",
    whyItMatters:
      "The real world is multimodal. AI that can understand images, read text, and hear audio is far more useful than text-only systems. This is powering everything from medical diagnosis to autonomous vehicles. Multimodal AI enables applications like visual question answering, image captioning, and cross-modal retrieval.",
    howToLearn: [
      "Start with image classification basics using pre-trained models",
      "Learn about CLIP (Contrastive Language-Image Pre-training)",
      "Experiment with GPT-4 Vision or Claude 3 for image understanding",
      "Study image generation models like DALL-E and Stable Diffusion",
      "Explore video understanding and generation",
      "Practice building applications that combine multiple input types",
    ],
    keyTools: ["GPT-4 Vision", "CLIP", "Stable Diffusion", "Midjourney", "Segment Anything", "DALL-E 3"],
    resources: [
      { name: "OpenAI Vision Guide", url: "https://platform.openai.com/docs/guides/vision" },
      { name: "Hugging Face Vision Models", url: "https://huggingface.co/models?pipeline_tag=image-classification" },
      {
        name: "CLIP Paper",
        url: "https://cdn.openai.com/papers/Learning_Transferable_Visual_Models_From_Natural_Language_Supervision.pdf",
      },
    ],
    estimatedLearningTime: "4-5 weeks",
    prerequisites: ["Computer vision basics", "Understanding of neural networks", "Python programming"],
  },
  {
    id: 8,
    title: "Voice AI & Speech Recognition",
    slug: "voice-ai-speech-recognition",
    category: "audio-ai",
    difficulty: "Intermediate",
    status: "Rising",
    icon: Sparkles,
    shortDescription: "AI that can understand and generate human speech",
    whatIsIt:
      "Voice AI includes speech-to-text (transcription), text-to-speech (voice generation), and voice cloning. It's what powers Siri, Alexa, and AI voice assistants. Modern voice AI can understand natural speech patterns, accents, and even emotional tones in human speech.",
    whyItMatters:
      "Voice is the most natural interface for humans. As voice AI improves, it's enabling Hands-off computing, accessibility tools, and more natural human-AI interaction. Voice interfaces are becoming crucial for applications in healthcare, automotive, smart homes, and customer service.",
    howToLearn: [
      "Start with Whisper (OpenAI's speech recognition model)",
      "Learn about audio processing and spectrograms",
      "Experiment with text-to-speech APIs (ElevenLabs, OpenAI TTS)",
      "Study voice cloning technology and its applications",
      "Build a simple voice assistant using existing APIs",
      "Explore real-time speech processing and streaming",
    ],
    keyTools: ["Whisper", "ElevenLabs", "OpenAI TTS", "Google Speech-to-Text", "Amazon Polly", "Resemble AI"],
    resources: [
      { name: "OpenAI Whisper", url: "https://github.com/openai/whisper" },
      { name: "ElevenLabs Documentation", url: "https://elevenlabs.io/docs" },
      { name: "Speech Recognition Course", url: "https://speechprocessing.org/" },
    ],
    estimatedLearningTime: "3-4 weeks",
    prerequisites: ["Audio processing basics", "Python programming", "API integration skills"],
  },
]

const categoryColors = {
  llms: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "ai-agents": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  tools: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  ethics: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  "computer-vision": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  "audio-ai": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
}

const difficultyColors = {
  Beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  Advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
}

type PageProps = {
  params: Promise<{
    category: string;
    topic: string;
  }>;
};

export default function TopicDetailPage({ params }: PageProps) {
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set())
  const [learningStarted, setLearningStarted] = useState(false)

  // Use the use() hook to unwrap the params promise - FIXED FOR NEXT.JS 15
  const unwrappedParams = use(params)
  const { category, topic: topicSlug } = unwrappedParams

  const aiTopic = aiTopics.find((t) => t.slug === topicSlug && t.category === category)

  if (!aiTopic) {
    notFound()
  }

  const toggleStep = (index: number) => {
    const newExpanded = new Set(expandedSteps)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedSteps(newExpanded)
  }

  const handleStartLearning = () => {
    setLearningStarted(true)
    // Expand all steps when learning journey starts
    const allSteps = new Set(aiTopic.howToLearn.map((_, i) => i))
    setExpandedSteps(allSteps)
    // Scroll to learning path section
    setTimeout(() => {
      document.getElementById("learning-path")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const Icon = aiTopic.icon
  const relatedTopics = aiTopics.filter((t) => t.category === category && t.id !== aiTopic.id)

  const descriptions = learningStepDescriptions[aiTopic.slug] || {}

  const formatCategoryName = (category: string): string => {
    const categoryNames: Record<string, string> = {
      llms: "LLMs",
      "ai-agents": "AI Agents",
      tools: "Tools",
      ethics: "Ethics",
      "computer-vision": "Computer Vision",
      "audio-ai": "Audio AI",
    }
    return categoryNames[category] || category
  }

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

          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4 ml-2">
            <Link href="/AIHelpCenter" className="hover:text-foreground transition-colors">
              Help Center
            </Link>
            <span>/</span>
            <span className="hover:text-foreground transition-colors">{formatCategoryName(category)}</span>
            <span>/</span>
            <span className="text-foreground font-medium">{aiTopic.title}</span>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-start gap-6 mb-8">
          <div className="p-4 bg-primary/10 rounded-xl">
            <Icon className="w-12 h-12 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Badge className={categoryColors[aiTopic.category as keyof typeof categoryColors]}>
                {aiTopic.category
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Badge>
              <Badge className={difficultyColors[aiTopic.difficulty as keyof typeof difficultyColors]}>
                {aiTopic.difficulty}
              </Badge>
              {aiTopic.status === "Hot" && (
                <Badge variant="destructive" className="gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Hot Topic
                </Badge>
              )}
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {aiTopic.estimatedLearningTime}
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">{aiTopic.title}</h1>
            <p className="text-xl text-muted-foreground">{aiTopic.shortDescription}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is it? */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  What is it?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{aiTopic.whatIsIt}</p>
              </CardContent>
            </Card>

            {/* Why it matters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Why it matters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{aiTopic.whyItMatters}</p>
              </CardContent>
            </Card>

            {/* Learning Path */}
            <Card id="learning-path">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Learning Path
                </CardTitle>
                {learningStarted && (
                  <p className="text-sm text-green-600 dark:text-green-400 mt-2 font-medium">
                    ✓ Learning journey active
                  </p>
                )}
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {aiTopic.howToLearn.map((step, index) => (
                    <li key={index} className="space-y-2">
                      <button
                        onClick={() => toggleStep(index)}
                        className="w-full flex gap-4 items-start hover:bg-accent/50 p-3 rounded-lg transition-colors text-left"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-none">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-muted-foreground leading-relaxed">{step}</p>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                            expandedSteps.has(index) ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {expandedSteps.has(index) && (
                        <div className="ml-12 mt-2 border-l border-muted pl-4">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {descriptions[index] || "Explore this step in detail to understand its core concept."}
                          </p>
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Tools */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Key Tools & Platforms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {aiTopic.keyTools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-sm mr-2 mb-2">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  Learning Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {aiTopic.resources.map((resource) => (
                    <a
                      key={resource.name}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-accent transition-colors group"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                      <span className="text-sm font-medium group-hover:text-primary">{resource.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Prerequisites */}
            {aiTopic.prerequisites && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Prerequisites
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {aiTopic.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            <Button
              className="w-full"
              size="lg"
              onClick={handleStartLearning}
              variant={learningStarted ? "secondary" : "default"}
            >
              {learningStarted ? "✓ Learning Journey Active" : "Start Learning Journey"}
            </Button>
          </div>
        </div>

        {/* Related Topics */}
        {relatedTopics.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Topics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTopics.slice(0, 3).map((relatedTopic) => (
                <Link key={relatedTopic.id} href={`/ai/${relatedTopic.category}/${relatedTopic.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <relatedTopic.icon className="w-5 h-5 text-primary" />
                        </div>
                        <Badge className={difficultyColors[relatedTopic.difficulty as keyof typeof difficultyColors]}>
                          {relatedTopic.difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{relatedTopic.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{relatedTopic.shortDescription}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <FooterMain />
    </div>
  )
}