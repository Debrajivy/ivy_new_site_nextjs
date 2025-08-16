"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, PlayCircle, ArrowRight, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import aparupa from "@/assests/aparupa.webp";
import nandini from "@/assests/nandini.webp";
import vishal from "@/assests/vishal.webp";
import Arghadeep from "@/assests/Arghadip.webp";
import Acp from "@/assests/Acp.webp";
import Acc from "@/assests/Acc.webp";
import Vtc from "@/assests/Vtc.webp";
import Vtp from "@/assests/Vtp.webp";
import Nac from "@/assests/Nac.webp";
import Krishna from "@/assests/Krishna.webp";
import Aghradip from "@/assests/Aghradip.webp";
import Google from "@/assests/Google.webp";

interface CareerProgression {
  previous: {
    company: string
    role: string
    logo: string
  }
  current: {
    company: string
    role: string
    logo: string
  }
}

interface Testimonial {
  id: string
  name: string
  image: string
  content: string
  rating: number
  course: string
  location?: string
  videoUrl?: string
  careerProgression?: CareerProgression
  linkedinUrl?: string // Added linkedinUrl to testimonial interface
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Vishal Tiwary",
    image: vishal,
    content:
      "The Data Science bootcamp transformed my career trajectory. Now I'm not just working at PwC, but also mentoring juniors in the field.",
    rating: 5,
    course: "Business Analytics",
    location: "Kolkata, 2018-19",
    videoUrl: "https://www.youtube.com/embed/vrq7tlJGPig",
    careerProgression: {
      previous: {
        company: "Barclays",
        role: "Treasury Data Analyst",
        logo: Vtp,
      },
      current: {
        company: "PwC",
        role: "Senior Data Analyst",
        logo: Vtc,
      },
    },
    linkedinUrl: "https://www.linkedin.com/in/vishal-tiwary-b6860817b", // Example LinkedIn URL
  },
  {
    id: "2",
    name: "Krishnakoli Datta",
    image: Krishna,
    content:
      "It has been a great experience with IVY. They solve every single doubts. They even arrange one to one classes for students",
    rating: 5,
    course: "Data Analytics ",
    location: "Kolkata, 2023-24",
    videoUrl: "https://www.youtube.com/embed/e0xsjgz0Sz4",
    careerProgression: {
      previous: {
        company: "Fresher",
        role: "",
        logo: "",
      },
      current: {
        company: "Ecolab",
        role: "Data Analyst Trainee",
        logo: Nac,
      },
    },
    linkedinUrl: "https://www.linkedin.com/in/krishnakoli-datta-096a18206/", // Example LinkedIn URL
  },
  {
    id: "3",
    name: "Nandini Agarwal",
    image: nandini,
    content:
      "What sets Ivy apart is the personal attention. The director helped me solve a real-world problem I was facing at work during class hours!",
    rating: 4,
    course: "Data Science ",
    location: "Kolkata, 2022-23",
    videoUrl: "https://youtube.com/embed/_ApyXRNrh3A",
    careerProgression: {
      previous: {
        company: "Fresher",
        role: "",
        logo: "",
      },
      current: {
        company: "ECOLAB",
        role: "Trainee Data Analyst",
        logo: Nac,
      },
    },
    linkedinUrl: "https://www.linkedin.com/in/nandinii-agarwaal", // Example LinkedIn URL
  },
  {
    id: "4",
    name: "Arghadip Charan",
    image: Arghadeep,
    content:
      "Overall experience is really very good. I want to thanks Eshaani Agarwal maam for her attractive and responsive classes.",
    rating: 5,
    course: "Data Science With ML DL",
    location: "Kolkata, 2024-25",
    videoUrl: "https://youtube.com/embed/_ApyXRNrh3A",
    careerProgression: {
      previous: {
        company: "Cognifyz Technologies",
        role: "Data Analyst Intern",
        logo: Acp,
      },
      current: {
        company: "Ivy Professional School",
        role: "Data Analyst",
        logo: Acc,
      },
    },
    linkedinUrl: "https://www.linkedin.com/in/arghadip-charan", // Example LinkedIn URL
  },
]

const CareerProgressionDisplay = ({ progression }: { progression: CareerProgression }) => {
  return (
    <div className="p-4 rounded-lg mb-4" style={{ background: "linear-gradient(to right, #1a98cb20, #f7ac2c20)" }}>
      <div className="flex items-center justify-between">
        {/* Previous Company */}
        <div className="flex-1 text-center mx-2 flex flex-col items-center">
          <div className=" rounded-lg p-2 shadow-sm w-full flex flex-col items-center justify-center"> {/* Removed 'border' class, changed p-3 to p-2 for minor internal padding */}
            <div className="flex items-center justify-center h-12 w-full">
              {progression.previous.logo ? (
                <img
                  src={progression.previous.logo}
                  alt={progression.previous.company}
                  className="h-32 w-auto max-w-full object-contain" // Increased height to h-32, max-w-full
                />
              ) : (
                <span className="text-sm font-medium text-gray-500">{progression.previous.company}</span>
              )}
            </div>
          </div>
          <div className="text-xs mt-2" style={{ color: "#1a98cb" }}>
            {progression.previous.role}
          </div>
        </div>

        {/* Arrow */}
        <div className="px-2">
          <div className="rounded-full p-2" style={{ background: "linear-gradient(to right, #1a98cb, #f7ac2c)" }}>
            <ArrowRight className="h-4 w-4 text-white" />
          </div>
        </div>

        {/* Current Company */}
        <div className="flex-1 text-center mx-2 flex flex-col items-center">
          <div className="rounded-lg p-2 shadow-sm w-full flex flex-col items-center justify-center"> {/* Removed 'border' class, changed p-3 to p-2 for minor internal padding */}
            <div className="flex items-center justify-center  h-12 w-full">
              <img
                src={progression.current.logo || "/placeholder.svg"}
                alt={progression.current.company}
                className="h-32 w-auto max-w-full object-contain" // Increased height to h-32, max-w-full
              />
            </div>
          </div>
          <div className="text-xs font-medium mt-2" style={{ color: "#efa72a", fontWeight: 'bold' }}>
            {progression.current.role}
          </div>
        </div>
      </div>
    </div>
  )
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white h-full flex flex-col" style={{ borderTop: "4px solid #1a98cb" }}>
      <CardContent className="p-6 flex flex-col h-full">
        {/* Rating */}
        <div className="flex mb-4 justify-center items-center">
          <img src={Google} alt="Google" className="h-4 w-4 mr-2" />
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < testimonial.rating ? "fill-current" : "text-gray-300"}`}
              style={{ color: i < testimonial.rating ? "#f7ac2c" : undefined }}
            />
          ))}
        </div>

        {/* Review Content */}
        <div className="flex-grow min-h-[120px] mb-4 flex items-center">
          <p className="italic text-center p-4 rounded-lg w-full" style={{
            color: "#777f89",
            backgroundColor: "#1a98cb10",
            borderLeftColor: "#1a98cb",
          }}>
            "{testimonial.content}"
          </p>
        </div>

        {/* Student Profile */}
        <div className="flex items-center mb-4 relative"> {/* Added relative for positioning LinkedIn icon */}
          <img
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            className="h-16 w-16 rounded-full mr-4 object-cover border-2"
            style={{ borderColor: "#1a98cb" }}
          />
          {testimonial.linkedinUrl && (
            <a
              href={testimonial.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              // Adjusted positioning to be consistently at bottom-right of the image
              // Smaller padding and icon size
              className="absolute bottom-[-8px] left-[40px] // Adjust these values for precise positioning
                         bg-[#0077B5] rounded-full p-1 border-2 border-white shadow-md
                         hover:scale-110 transition-transform duration-200" // Added hover effect
              title="View LinkedIn Profile"
            >
              <img className="rounded-[50%] w-3 h-3 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/72px-LinkedIn_icon.svg.png?20210220164014" />
            </a>
          )}
          <div>
            <h4 className="font-bold text-lg" style={{ color: "#013a81" }}>
              {testimonial.name}
            </h4>
            <div className="text-sm font-medium" style={{ color: "#1a98cb" }}>
              {testimonial.course}
            </div>
            {testimonial.location && (
              <div className="text-xs italic" style={{ color: "#f7ac2c", fontWeight: 'bold' }}>
                {testimonial.location}
              </div>
            )}
          </div>
        </div>

        {/* Career Progression */}
        {testimonial.careerProgression && (
          <div className="mb-4">
            <CareerProgressionDisplay progression={testimonial.careerProgression} />
          </div>
        )}

        {/* Video Button */}
        {testimonial.videoUrl && (
          <div className="mt-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  className="w-full border-2 hover:text-white"
                  style={{
                    borderColor: "#f7ac2c",
                    color: "#f7ac2c",
                    backgroundColor: "white",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f7ac2c"
                    e.currentTarget.style.color = "white"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "white"
                    e.currentTarget.style.color = "#f7ac2c"
                  }}
                >
                  <PlayCircle className="w-4 h-4 mr-2" /> Watch Success Story
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
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
      </CardContent>
    </Card>
  )
}

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left w-full md:w-auto">
            <h2 className="text-4xl font-bold mb-4 text-[#030712]">
              What Are Alumni Saying About Their Career
            </h2>
            <p className="max-w-2xl mx-auto md:mx-0 text-lg" style={{ color: "#79808a" }}>
              These reviews show how our faculty, curriculum, and teaching methods, real world projects have helped our students learn the right skills, gain practical experience to find jobs in top companies.
            </p>
          </div>

        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div style={{ marginTop: 40 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            className="text-white font-semibold"
            style={{ backgroundColor: '#f7ac2c' }}
          >
            <a
              href="https://youtube.com/playlist?list=PL6ajVQ6jyjvCXW4Xfcn_XYXsSzfggBsW1&si=wSg25UvxKRPC6CdL"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch More Student Success Stories on YouTube
            </a>
          </Button>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div
            className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border-1"
            style={{ borderColor: "#1a98cb" }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#013a81" }}>
              Ready to Transform Your Career into AI?
            </h3>
            <p className="mb-6" style={{ color: "#1a98cb" }}>
              Join thousands of successful professionals who started their journey with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="text-white font-semibold"
                style={{ backgroundColor: '#009fda' }}
              >
                <a
                  href="https://youtube.com/playlist?list=PL6ajVQ6jyjvCXW4Xfcn_XYXsSzfggBsW1&si=wSg25UvxKRPC6CdL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Free Consultation                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;