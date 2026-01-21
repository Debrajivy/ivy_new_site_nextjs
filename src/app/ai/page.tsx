"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/helpcenter/Footer"
import FooterMain from "@/components/layout/Footer"
import { ArrowRight, Sparkles, BookOpen, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <p className="text-sm font-medium text-primary">Welcome to AI Learning Hub</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Master AI from Basics to Advanced</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn everything about Large Language Models, AI Agents, Prompt Engineering, and more. Structured learning
            paths designed for everyone.
          </p>
          <Link href="/aihelpcenter">
            <Button size="lg" className="gap-2">
              Explore Topics <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </section>

        {/* Features */}
        <section className="grid md:grid-cols-3 gap-6 mb-20">
          <Card>
            <CardHeader>
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Comprehensive Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                From LLMs and AI Agents to Ethics and Multimodal AI. All the topics you need to master modern AI.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Structured Learning Paths</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Each topic includes step-by-step learning paths with descriptions, resources, and practical exercises.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Hands-On Practice</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Learn by doing. Build projects, experiment with tools, and apply your knowledge to real-world problems.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="bg-primary/5 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your AI learning journey?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose a topic and begin learning today. No prerequisites needed!
          </p>
          <Link href="/aihelpcenter">
            <Button size="lg">Browse All Topics</Button>
          </Link>
        </section>
      </main>

      {/* <Footer /> */}
      <FooterMain />
    </div>
  )
}
