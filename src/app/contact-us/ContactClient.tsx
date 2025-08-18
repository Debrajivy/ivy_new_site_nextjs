"use client"

import type React from "react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, Clock, Send, ChevronRight } from "lucide-react"

const ContactClient = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to backend in real application
    console.log("Form submitted")
  }

  const officeLocations = [
    {
      city: "Kolkata",
      address: "Camac St, West Bengal 700017",
      mapUrl: "https://maps.app.goo.gl/qPX2pAFBFZLiqvZ87",
    },
    {
      city: "Pune",
      address: "Shivajinagar, Maharashtra 411016",
      mapUrl: "https://maps.app.goo.gl/1Q11x9DzucF8MWUr9",
    },
    {
      city: "Bangalore",
      address: "Indiranagar, Karnataka 560038",
      mapUrl: "https://maps.app.goo.gl/faxoYXNquyqNyxVaA",
    },
    {
      city: "Delhi",
      address: "Karol Bagh, New Delhi 110055",
      mapUrl: "https://maps.app.goo.gl/8L2Hc1ee8iwJ4QsE6",
    },
  ]

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-ivy-blue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Have questions about our courses or need assistance? Our team is here to help you on your learning
              journey.
            </p>
          </div>
        </div>

        {/* Contact Form and Info */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Please describe your query in detail..." rows={5} required />
                  </div>
                  <div>
                    <Button type="submit" className="bg-ivy-blue w-full sm:w-auto" size="lg">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </div>
                </form>

                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:info@ivyproschool.com" className="text-primary hover:underline">
                          info@ivyproschool.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+919748441111" className="text-primary hover:underline">
                          +91 9748441111
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Office Hours</p>
                        <p className="text-gray-600">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {officeLocations.map((office, index) => (
                    <Card key={index} className="border-none shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-lg">{office.city}</h3>
                            <p className="text-gray-600 mb-3">{office.address}</p>
                            <a
                              href={office.mapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary text-sm hover:underline flex items-center"
                            >
                              View on Map <ChevronRight className="h-3 w-3 ml-1" />
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Try Our Free Classes</h3>
                  <p className="mb-4">
                    Experience our teaching methodology firsthand. Register for two free trial classes and explore our
                    learning environment.
                  </p>
                  <Button className="bg-ivy-blue">Register for Free Classes</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default ContactClient
