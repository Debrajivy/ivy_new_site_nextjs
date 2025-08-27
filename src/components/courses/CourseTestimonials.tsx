"use client"

import { useState, useEffect } from "react"
import { fetchTestimonialsByCourse } from "@/lib/api"

interface CourseTestimonialsProps {
  courseId: string
}

const CourseTestimonials = ({ courseId }: CourseTestimonialsProps) => {
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        setIsLoading(true)
        const data = await fetchTestimonialsByCourse(courseId)
        setTestimonials(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load testimonials")
      } finally {
        setIsLoading(false)
      }
    }

    if (courseId) {
      loadTestimonials()
    }
  }, [courseId])

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse h-8 w-64 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="animate-pulse h-4 w-96 bg-gray-200 rounded mx-auto"></div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-600">
            <p>Error loading testimonials: {error}</p>
          </div>
        </div>
      </section>
    )
  }

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Student Testimonials</h2>
          <div className="flex items-center justify-center">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((value) => (
                <Star 
                  key={value} 
                  className="h-5 w-5 text-yellow-500 fill-yellow-500" 
                />
              ))}
            </div>
            <span className="ml-2 font-semibold">4.8/5</span>
            <span className="mx-2 text-gray-500">•</span>
            <span className="text-gray-600">2,250+ reviews on Google</span>
          </div>
        </div> */}
        {/*         
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-all h-full flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <div className="relative flex-grow">
                  <p className="italic text-gray-700 mb-6">"{testimonial.content}"</p>
                  
                  {testimonial.videoUrl && (
                    <div className="mt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="w-full flex items-center justify-center bg-transparent">
                            <PlayCircle size={16} className="mr-2" />
                            Watch Video Testimonial
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <div className="aspect-video">
                            <iframe 
                              width="100%" 
                              height="100%" 
                              src={testimonial.videoUrl} 
                              title={`${testimonial.name} testimonial`}
                              frameBorder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen
                            ></iframe>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center mt-6">
                  <img 
                    src={testimonial.image || "/placeholder.svg"} 
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* <div className="mt-12 flex justify-center">
          <div className="max-w-md p-6 bg-gray-50 rounded-lg shadow-sm text-center">
            <h3 className="font-bold text-lg mb-2">Google Reviews</h3>
            <div className="flex items-center justify-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((value) => (
                  <Star 
                    key={value} 
                    className={`h-5 w-5 ${value <= 4 ? 'text-yellow-500 fill-yellow-500' : 'text-yellow-500 fill-yellow-500'}`} 
                  />
                ))}
              </div>
              <span className="ml-2 font-semibold">4.8/5</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">Based on 2,250+ reviews</p>
            <Button variant="outline" asChild>
              <a 
                href="https://google.com/search?q=ivy+professional+school+reviews" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                See All Reviews
              </a>
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default CourseTestimonials
