"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, Star, Filter } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

interface Course {
  id: string
  title: string
  description: string
  image: string
  category: string
  students: number
  duration: string
  rating: number
  reviewCount: number
  isFeatured: boolean
  level: "Beginner" | "Intermediate" | "Advanced"
  slug: string
}

// Mock Data - In real app, this would come from an API
const allCourses: Course[] = [
  {
    id: "1",
    title: "Data Science Bootcamp",
    description: "Comprehensive data science program covering Python, statistics, machine learning and more",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Data Science",
    students: 2345,
    duration: "16 weeks",
    rating: 4.9,
    reviewCount: 567,
    isFeatured: true,
    level: "Intermediate",
    slug: "data-science-bootcamp",
  },
  {
    id: "2",
    title: "Generative AI Masterclass",
    description: "Learn to build and deploy generative AI models like GPT, DALL-E, and more",
    image:
      "https://images.unsplash.com/photo-1677442135968-6bb674d4f8a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    category: "Generative AI",
    students: 1876,
    duration: "10 weeks",
    rating: 4.8,
    reviewCount: 432,
    isFeatured: true,
    level: "Advanced",
    slug: "generative-ai-masterclass",
  },
  {
    id: "3",
    title: "Data Engineering Essentials",
    description: "Master data pipelines, ETL processes, and big data technologies",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Data Engineering",
    students: 1549,
    duration: "12 weeks",
    rating: 4.7,
    reviewCount: 345,
    isFeatured: true,
    level: "Advanced",
    slug: "data-engineering-essentials",
  },
  {
    id: "4",
    title: "Deep Learning Specialization",
    description: "Neural networks, CNN, RNN, transformers, and deep learning applications",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Deep Learning",
    students: 1243,
    duration: "14 weeks",
    rating: 4.8,
    reviewCount: 298,
    isFeatured: false,
    level: "Advanced",
    slug: "deep-learning-specialization",
  },
  {
    id: "5",
    title: "Python for Data Science",
    description: "Master Python programming fundamentals for data analysis and visualization",
    image:
      "https://images.unsplash.com/photo-1649180556628-9ba704115795?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Data Science",
    students: 3210,
    duration: "8 weeks",
    rating: 4.6,
    reviewCount: 512,
    isFeatured: false,
    level: "Beginner",
    slug: "python-for-data-science",
  },
  {
    id: "6",
    title: "Machine Learning Fundamentals",
    description: "Build a solid foundation in machine learning algorithms and implementations",
    image:
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Machine Learning",
    students: 2456,
    duration: "10 weeks",
    rating: 4.7,
    reviewCount: 378,
    isFeatured: false,
    level: "Intermediate",
    slug: "machine-learning-fundamentals",
  },
  {
    id: "7",
    title: "NLP with Transformers",
    description: "Advanced natural language processing using transformer architectures",
    image:
      "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    category: "Machine Learning",
    students: 1879,
    duration: "12 weeks",
    rating: 4.9,
    reviewCount: 214,
    isFeatured: false,
    level: "Advanced",
    slug: "nlp-with-transformers",
  },
  {
    id: "8",
    title: "Big Data with Spark",
    description: "Process and analyze massive datasets using Apache Spark and Hadoop",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Data Engineering",
    students: 1345,
    duration: "10 weeks",
    rating: 4.6,
    reviewCount: 289,
    isFeatured: false,
    level: "Intermediate",
    slug: "big-data-with-spark",
  },
]

// Categories with descriptions
const categories = [
  {
    name: "Data Science",
    description:
      "Learn to extract insights and value from data through statistical analysis, machine learning, and data visualization.",
  },
  {
    name: "Data Engineering",
    description:
      "Master the skills to design, build, and maintain data pipelines and infrastructure for efficient data processing.",
  },
  {
    name: "Generative AI",
    description:
      "Explore cutting-edge techniques for creating AI systems that can generate new content like images, text, and code.",
  },
  {
    name: "Machine Learning",
    description:
      "Build intelligent systems that can learn from data and make predictions or decisions without being explicitly programmed.",
  },
  {
    name: "Deep Learning",
    description:
      "Dive into neural networks and advanced architectures that power modern AI in image recognition, natural language processing, and more.",
  },
]

const CourseCategory = () => {
  const params = useParams()
  const slug = params?.slug as string
  const [selectedLevel, setSelectedLevel] = React.useState<string[]>([])
  const [showFilters, setShowFilters] = React.useState(false)

  // Find current category info
  const currentCategory = categories.find((category) => category.name.toLowerCase().replace(/\s+/g, "-") === slug) || {
    name: "All Courses",
    description: "Browse our complete catalog of data science and AI courses",
  }

  // Filter courses based on category and selected level
  const filteredCourses = allCourses.filter((course) => {
    const categoryMatch = !slug || slug === "all" || course.category.toLowerCase().replace(/\s+/g, "-") === slug

    const levelMatch = selectedLevel.length === 0 || selectedLevel.includes(course.level)

    return categoryMatch && levelMatch
  })

  const handleLevelFilter = (level: string) => {
    setSelectedLevel((prev) => (prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-4">{currentCategory.name}</h1>
        <p className="text-gray-600 max-w-3xl">{currentCategory.description}</p>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Filters</h3>
              <Button variant="ghost" size="sm">
                Reset
              </Button>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-medium mb-2">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/categories"
                    className={`text-sm ${!slug || slug === "all" ? "text-primary font-medium" : "text-gray-600"}`}
                  >
                    All Courses
                  </Link>
                </li>
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`text-sm ${slug === category.name.toLowerCase().replace(/\s+/g, "-") ? "text-primary font-medium" : "text-gray-600"}`}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Difficulty Level</h4>
              <div className="space-y-2">
                {["Beginner", "Intermediate", "Advanced"].map((level) => (
                  <label key={level} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-primary focus:ring-primary mr-2"
                      checked={selectedLevel.includes(level)}
                      onChange={() => handleLevelFilter(level)}
                    />
                    <span className="text-sm text-gray-600">{level}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          {/* Mobile filter button */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <div className="text-sm text-gray-600">{filteredCourses.length} courses</div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter size={16} />
              Filters
            </Button>
          </div>

          {/* Mobile filters */}
          {showFilters && (
            <div className="md:hidden bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Filters</h3>
                <Button variant="ghost" size="sm">
                  Reset
                </Button>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  <Link href="/categories">
                    <Badge variant={!slug || slug === "all" ? "default" : "outline"} className="cursor-pointer">
                      All
                    </Badge>
                  </Link>
                  {categories.map((category) => (
                    <Link key={category.name} href={`/categories/${category.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Badge
                        variant={slug === category.name.toLowerCase().replace(/\s+/g, "-") ? "default" : "outline"}
                        className="cursor-pointer"
                      >
                        {category.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Difficulty Level</h4>
                <div className="flex flex-wrap gap-2">
                  {["Beginner", "Intermediate", "Advanced"].map((level) => (
                    <Badge
                      key={level}
                      variant={selectedLevel.includes(level) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleLevelFilter(level)}
                    >
                      {level}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <Card key={course.id} className="card-hover h-full flex flex-col">
                  <div className="relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary">{course.category}</Badge>
                    {course.isFeatured && <Badge className="absolute top-3 right-3 badge-featured">Featured</Badge>}
                  </div>
                  <CardHeader className="pb-2">
                    <h3 className="text-lg font-bold line-clamp-2">{course.title}</h3>
                  </CardHeader>
                  <CardContent className="pb-2 flex-grow">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Users size={16} className="mr-1" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 flex flex-col items-start">
                    <div className="flex items-center mb-4 w-full">
                      <div className="flex items-center">
                        <Star size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="ml-1 font-medium">{course.rating}</span>
                      </div>
                      <span className="text-gray-500 text-sm ml-2">({course.reviewCount})</span>
                    </div>
                    <Link href={`/courses/${course.slug}`} className="w-full">
                      <Button className="w-full">View Details</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-lg font-medium text-gray-600">No courses found</h3>
                <p className="text-gray-500">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCategory
