"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, PlayCircle, ArrowRight, Linkedin, MessageSquare, ShieldCheck } from "lucide-react"
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
import Image, { StaticImageData } from "next/image"
import Arya from "@/assests/Arya.webp";
import Debatreya from "@/assests/Debatreya.webp";
import Soumee from "@/assests/Soumee.webp";
import Tathagata from "@/assests/Tathagata.webp";

interface CareerProgression {

    current: {
        company: string
        role: string
    }
}


interface Testimonial {
    id: string
    name: string
    image: StaticImageData
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
        name: "Arya Bondale",
        image: Arya,
        content:
            "",
        rating: 5,
        course: "Data Science",
        location: "Kolkata, 2021-23",
        videoUrl: "https://youtube.com/embed/vrq7tlJGPig",
        careerProgression: {

            current: {
                company: "dentsu",
                role: "Senior Analyst (Gen AI)",
            },
        },
        linkedinUrl: "https://www.linkedin.com/in/arya-bondale-a44608206", // Example LinkedIn URL
    },
    {
        id: "2",
        name: "Soumee Ghosh",
        image: Soumee,
        content:
            "",
        rating: 5,
        course: "Data Science",
        location: "Kolkata, 2021-22",
        videoUrl: "https://youtube.com/embed/e0xsjgz0Sz4",
        careerProgression: {

            current: {
                company: "Tredence Inc",
                role: "Data Scientist",
            },
        },
        linkedinUrl: "https://www.linkedin.com/in/soumee-ghosh-b11547209", // Example LinkedIn URL
    },
    {
        id: "3",
        name: "Debatreya Betal",
        image: Debatreya,
        content:
            "",
        rating: 5,
        course: "Data Science, Analytics with Visualization",
        location: "Kolkata, 2023",
        videoUrl: "https://youtube.com/embed/_ApyXRNrh3A",
        careerProgression: {

            current: {
                company: "AI / ML Intern",
                role: "Trainee Data Analyst",
            },
        },
        linkedinUrl: "https://www.linkedin.com/in/dbetal17", // Example LinkedIn URL
    },
    {
        id: "4",
        name: "Tathagata Ghosh",
        image: Tathagata,
        content:
            "",
        rating: 5,
        course: "Business Analytics",
        location: "Kolkata, 2013",
        videoUrl: "https://youtube.com/embed/_ApyXRNrh3A",
        careerProgression: {

            current: {
                company: "Lead Data & AI Scientist",
                role: "Tata Consultancy Services",
            },
        },
        linkedinUrl: "https://www.linkedin.com/in/tathagata-ghosh-534a9142", // Example LinkedIn URL
    },
]

const CareerProgressionDisplay = ({ progression }: { progression: CareerProgression }) => {
    return (
        <div className="p-4 rounded-lg mb-4" style={{ background: "linear-gradient(to right, #1a98cb20, #f7ac2c20)" }}>
            <div className="flex items-center justify-between">

                {/* Current Company */}
                <div className="flex-1 flex items-center justify-center flex-col text-center mx-2">
                    <div
                        className="text-xs font-medium"
                        style={{ color: "#efa72a", fontWeight: "bold" }}
                    >
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
                    <Image
                        loading="lazy"
                        width={16} // Adjusted width to 16px
                        height={16} // Adjusted height to 16px 
                        src={Google} alt="Google" className="h-4 w-4 mr-2" />
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? "fill-current" : "text-gray-300"}`}
                            style={{ color: i < testimonial.rating ? "#f7ac2c" : undefined }}
                        />
                    ))}
                </div>

                {/* Review Content */}


                {/* Student Profile */}
                <div className="flex items-center mb-4 relative"> {/* Added relative for positioning LinkedIn icon */}
                    <Image
                        loading="lazy"
                        width={64} // Adjusted width to 64px
                        height={64} // Adjusted height to 64px
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
                            <img
                                alt="LinkedIn"
                                className="rounded-[50%] w-3 h-3 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/72px-LinkedIn_icon.svg.png?20210220164014" />
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
                                {/* <Button
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
                                </Button> */}
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

const StudentTestimonials = () => {
    const [showContactOptions, setShowContactOptions] = useState(false);
    const [showCaptcha, setShowCaptcha] = useState(false);
    const [captchaCode, setCaptchaCode] = useState("");
    const [userInput, setUserInput] = useState("");

    // generate random captcha like a4T6bY7
    const generateCaptcha = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let code = "";
        for (let i = 0; i < 7; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setCaptchaCode(code);
    };

    // your original WhatsApp function but gated by captcha
    const handleWhatsAppClick = () => {
        if (userInput !== captchaCode) {
            alert("Verification failed. Please try again.");
            generateCaptcha();
            setUserInput("");
            return;
        }

        const phoneNumber = "919748441111";
        const defaultMessage =
            "Hello! I'm interested in transforming my career into AI with Ivy Pro School. Could you please help me with more information?";
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const encodedMessage = encodeURIComponent(defaultMessage);

        const whatsappUrl = isMobile
            ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
            : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");

        // reset captcha state
        setShowCaptcha(false);
        setUserInput("");
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="text-center md:text-left w-full md:w-auto">
                        <h2 className="text-4xl font-bold mb-4 text-[#030712]">
                            What are alumni says about Ivy Pro School reviews            </h2>
                        <p className="max-w-2xl mx-auto md:mx-0 text-lg" style={{ color: "#79808a" }}>
                            These reviews show how our faculty, curriculum, and teaching methods, real world projects have helped our students learn the right skills, gain practical experience to find jobs in top companies.
                        </p>
                    </div>

                </div>

                {/* StudentTestimonials Grid */}


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
                <div className="mt-16 text-center" >
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
                                style={{ backgroundColor: '#25D366' }} // WhatsApp green color
                                onClick={() => {
                                    generateCaptcha();
                                    setShowCaptcha(true);
                                }}
                            >
                                <MessageSquare className="mr-2 h-5 w-5" />
                                Chat on WhatsApp
                            </Button>
                        </div>

                        {showCaptcha && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                                <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
                                    <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                                    <h3 className="text-lg font-bold mb-2">Verification Required</h3>
                                    <p className="text-sm text-gray-600 mb-4">Enter the code below to continue</p>

                                    <div className="font-mono text-lg tracking-widest bg-gray-100 px-4 py-2 rounded-lg mb-3">
                                        {captchaCode}
                                    </div>

                                    <input
                                        type="text"
                                        value={userInput}
                                        onChange={(e) => setUserInput(e.target.value)}
                                        placeholder="Enter the code"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 mb-4"
                                    />

                                    <div className="flex justify-between gap-2">
                                        <Button
                                            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                                            onClick={handleWhatsAppClick}
                                        >
                                            Verify & Continue
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="flex-1"
                                            onClick={() => setShowCaptcha(false)}
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StudentTestimonials;