"use client"

import React, { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X, ChevronDown, Briefcase, BookOpen, ChevronRight, GraduationCap, NotebookPen, Building, Trophy } from "lucide-react"
import review from "../../assests/review.webp"
import Image, { StaticImageData } from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

import DS from "@/assests/DSI.webp"
import CDE from "@/assests/CDE.webp"
import ML from "@/assests/ML.webp"
import GA from "@/assests/GAI.webp"
import DA from "@/assests/DA.webp"
import BA from "@/assests/BA.webp"
import DV from "@/assests/DV.webp"
import CDI from "@/assests/CDI.webp"
import AIPM from "@/assests/AIPM.webp"
import icon from "../../assests/icon.webp"

const courseCategories = {
  "AI for Product Managers": [
    {
      title: "AI for Product Managers",
      href: "/courses/ai-product-manager-course",
      description: "2-month program designed to help managers harness the power of AI and GenAI for smarter decisions and innovation.",
      image: AIPM,
    }
  ],
  "Data Science & AI": [
    // {
    //   title: "Data Science with Machine Learning & AI Certification",
    //   href: "/courses/iit-data-science-course",
    //   description: "Master end-to-end data science, AI, and visualization tools",
    //   image: DS,
    // },
    {
      title: "Data Science with Machine Learning & AI Certification",
      href: "/courses/data-science-and-ml-course",
      description: "11-month NASSCOM-certified program designed to build strong foundations in Data Science, Machine Learning, and AI.",
      image: ML,

    },

  ],
  "Data Engineering": [
    {
      title: "Data Engineering Course",
      href: "/courses/data-engineering-course",
      description: "8-month industry-aligned program designed to build expertise in modern Data Engineering and cloud-based data pipelines.",
      image: CDE,
    },
    // {
    //   title: "Cloud Data Engineering with IIT Guwahati",
    //   href: "/courses/iit-data-engineering-course",
    //   description: "Advanced cloud data engineering with industry experts",
    //   image: CDI,
    // },
  ],
  "Data Analytics": [
    {
      title: "Data Analytics Course",
      href: "/courses/data-analytics-course",
      description: "8-month program to build strong analytical, statistical, and visualization skills for data-driven decision-making.",
      image: DA,
    },
    {
      title: "Data Analytics and Generative AI Course",
      href: "/courses/data-analytics-and-generative-ai-course",
      description: "7-month program combining data analytics and generative AI to transform raw data into intelligent business insights.",
      image: BA,
    }
    // {
    //   title: "Data Analytics and Generative AI Course",
    //   href: "/courses/data-analytics-and-generative-ai-course",
    //   description: "Strategic AI implementation for executives and managers",
    //   image: BA,
    // }
  ],
  // "Data Visualization": [
  //   {
  //     title: "Data Analytics and Generative AI Course",
  //     href: "/courses/data-visualization-course",
  //     description: "Deep dive into advanced visualization techniques",
  //     image: DV,
  //   },
  // ],
  "Generative AI": [
    {
      title: "Generative AI Course",
      href: "/courses/iit-generative-ai-course",
      description: "5-month advanced program to master Generative AI, from app building to multimodal AI integration and frameworks.",
      image: GA,
    },
  ],
  "Machine Learning": [
    {
      title: "AI and Machine Learning Course",
      href: "/courses/ai-machine-learning-course",
      description: "4-month program focused on mastering core AI and Machine Learning concepts through hands-on modeling and real-world applications.",
      image: GA,
    },
  ],
  "Data Science (Pay after Placement)": [
    {
      title: "Data Science with Machine Learning & AI Certification",
      href: "/courses/no-upfront-fees-data-science-and-ml-course",
      description: "Become job-ready with ML, DL, Python, and visualization tools",
      image: ML,
    },
  ],

}

const allCourses = [

  {
    title: "AI for Product Managerss",
    href: "/courses/ai-product-manager-course",
    description: "Leverage AI tools and techniques to enhance project management",
    image: AIPM,
  },
  {
    title: "Generative AI Course",
    href: "/courses/iit-generative-ai-course",
    description: "Learn to build and deploy GenAI models like GPT, DALL·E, and more",
    image: GA,
  },
  // {
  //   title: "Data Science with Machine Learning & AI Certification",
  //   href: "/courses/iit-data-science-course",
  //   description: "Master end-to-end data science, AI, and visualization tools",
  //   image: DS,
  // },
  {
    title: " Data Engineering Course",
    href: "/courses/data-engineering-course",
    description: "Master data pipelines, big data tools, and real-time processing",
    image: CDE,
  },
  {
    title: "Data Science with Machine Learning & AI Certification",
    href: "/courses/data-science-and-ml-course",
    description: "Become job-ready with ML, DL, Python, and visualization tools",
    image: ML,
  },
  {
    title: "Data Analytics and Generative AI Course",
    href: "/courses/data-visualization-course",
    description: "Deep dive into neural networks and advanced ML techniques",
    image: DV,
  },
  {
    title: "Data Analytics Course",
    href: "/courses/data-analytics-course",
    description: "Learn Hadoop, Spark, and big data processing frameworks",
    image: DA,
  },
  {
    title: "Data Analytics and Generative AI Course",
    href: "/courses/data-analytics-and-generative-ai-course",
    description: "Strategic AI implementation for executives and managers",
    image: BA,
  },
  {
    title: "Cloud Data Engineering Course with IIT Guwahati",
    href: "/courses/iit-data-engineering-course",
    description: "Image processing and recognition with deep learning",
    image: CDI,
  },
  {
    title: "AI and Machine Learning Course",
    href: "/courses/ai-machine-learning-course",
    description: "4-month program focused on mastering core AI and Machine Learning concepts through hands-on modeling and real-world applications.",
    image: CDI,
  },
  // {
  //   title: "Data science course (Pay after Placement)",
  //   href: "/courses/no-upfront-fees-data-science-and-ml-course",
  //   description: "Become job-ready with ML, DL, Python, and visualization tools",
  //   image: ML,
  // }
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    image?: string | StaticImageData;
    href: string; // Make href required
  }
>(
  ({ className, title, children, image, href }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            href={href}
            ref={ref}
            className={cn("flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors", className)}
          >
            {image && (
              <img
                src={typeof image === "string" ? image : image.src}
                alt={title}
                className="w-12 h-12 object-contain rounded-md flex-shrink-0"
              />
            )}
            <div>
              <div className="text-sm font-medium leading-none mb-1">{title}</div>
              <div className="text-sm leading-snug text-muted-foreground line-clamp-2">
                {children}
              </div>
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"

const MultiLevelDropdown = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <NavigationMenuContent>
      <div className="flex w-[800px]">
        <div className="w-1/3 bg-gray-50 p-4 border-r">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Course Categories</h3>
          <ul className="space-y-1">
            {Object.keys(courseCategories).map((category) => (
              <li key={category}>
                <button
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-between group",
                    activeCategory === category
                      ? "bg-blue-100 text-[#009fda]"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                  )}
                  onMouseEnter={() => setActiveCategory(category)}
                >
                  {category}
                  <ChevronRight className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-2/3 p-4">
          {activeCategory && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">{activeCategory} Courses</h3>
              <ul className="space-y-3">
                {courseCategories[activeCategory as keyof typeof courseCategories].map((course) => (
                  <ListItem
                    key={course.title}
                    title={course.title}
                    href={course.href}
                    className="transition-all duration-300 hover:bg-gradient-to-r hover:from-[#e0f7f7] hover:to-[#f0faf0] hover:shadow-md hover:text-[#009fda] rounded-lg"
                    image={course.image}
                  >
                    <div style={{ fontSize: 13 }}>{course.description}</div>
                    {/* <div >{course.month}</div> */}
                  </ListItem>
                ))}
              </ul>
            </div>
          )}
          {!activeCategory && (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p>Hover over a category to see courses</p>
            </div>
          )}
        </div>
      </div>
    </NavigationMenuContent>
  )
}

const AnimatedPhoneButton = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      window.location.href = "tel:7676882222";
    } else {
      setShowNumber(!showNumber); // Toggle instead of timeout for better UX
    }
  };

  return (
    <div className="relative inline-block">
      <Button
        variant="ghost"
        size="icon"
        className="relative h-10 w-10 rounded-full p-0 group"
        onClick={handleClick}
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#f7af34] opacity-30 animate-ping" />

        {/* Solid background */}
        <span className="absolute inset-0 rounded-full bg-[#f7af34]" />

        {/* Phone icon */}
        <Phone className="h-5 w-5 text-white relative z-10" />
      </Button>

      {/* Desktop number display - now positioned below */}
      {showNumber && !isMobile && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-50 animate-fade-in">
          <div className="text-center whitespace-nowrap">
            <span className="text-sm font-medium text-gray-700">Call us at</span>
            <div className="text font-bold text-[#009fda]">
              7676882222
            </div>
          </div>
          {/* Tooltip arrow pointing up */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-white"></div>
        </div>
      )}
    </div>
  );
};

const ApplyNowModal = ({ onClose }: { onClose: () => void }) => {
  useEffect(() => {
    // This is the container element where the iframe will be added
    const iframeContainer = document.getElementById('iframe-container');

    if (iframeContainer) {
      // Clear any previous content
      iframeContainer.innerHTML = '';

      // Create the iframe element
      const iframe = document.createElement('iframe');
      iframe.name = "leadsquared_landing_page_frame";
      iframe.src = "https://ivyproschool.viewpage.co/IVY?ignoremxtracking=mxtrue";
      iframe.width = "100%"; // Use percentage for responsiveness
      iframe.height = "100%"; // Use percentage for responsiveness
      iframe.frameBorder = "0";
      iframe.marginWidth = "0";
      iframe.marginHeight = "0";
      iframe.scrolling = "no";
      iframe.style.border = "none";

      // Append the iframe to the container
      iframeContainer.appendChild(iframe);

      // Create and append the script element
      const script = document.createElement('script');
      script.type = "text/javascript";
      script.innerHTML = "var MXLandingPageId = '2c296ae6-63a9-11f0-aa4a-06f2115baecb';";
      iframeContainer.appendChild(script);
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-sm h-[80vh] md:h-[600px] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 transition-colors z-20"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
        <div id="iframe-container" className="bg-white rounded-xl shadow-xl p-6 h-full w-full" />
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showApplyModal, setShowApplyModal] = useState(false)
  const [isCoursesExpanded, setIsCoursesExpanded] = useState(false)

  const handleApplyClick = useCallback(() => {
    setShowApplyModal(true)
  }, [])

  return (
    <>
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src={typeof icon === "string" ? icon : icon.src}
                alt="Ivy Professional School"
                className="h-9"
              />
            </Link>

            <div className="hidden lg:flex items-center px-3 py-2 col-span-2 md:col-span-1">
              <div className="flex flex-col items-start ml-2">
                <div className="flex items-center px-3 py-2 rounded-lg col-span-2 md:col-span-1">
                  <img
                    src={typeof review === "string" ? review : review?.src || "/placeholder.svg"}
                    alt="Rating"
                    className="w-36 h-9 border-2 border-white object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:hidden flex items-center space-x-2 ml-2">
              <div className="flex items-center  py-2 rounded-lg col-span-2 md:col-span-1">
                <img
                  src={typeof review === "string" ? review : review?.src || "/placeholder.svg"}
                  alt="Rating"
                  className="w-32 h-8 md:w-48 md:h-12 border-2 border-white object-cover"
                />
              </div>

              <AnimatedPhoneButton />
              <Button
                className="bg-gradient-to-r from-ivy-blue text-white px-1.5 py-1 text-sm"
                onClick={handleApplyClick}
              >
                Apply Now
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    style={{ backgroundColor: "#009fda", color: "white" }}
                    className="bg-transparent"
                  >
                    Courses
                  </NavigationMenuTrigger>
                  <MultiLevelDropdown />
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/alumni" className="flex items-center">
                    <button
                      style={{ marginLeft: 10, fontWeight: "bold" }}
                      className="border border-[#009fda] text-[#009fda] px-6 py-2 rounded-md hover:text-[#013a81] transition duration-200"
                    >
                      Alumni & Reviews
                    </button>
                  </Link>
                </NavigationMenuItem>
                {/* 🎯 Updated Code for Case Studies Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* Set a dark background for the entire dropdown content */}
                    {/* Added 'items-stretch' to the grid to ensure all items fill the available height */}
                    <ul
                      className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2 items-stretch"
                      style={{ backgroundColor: '#013a81' }}
                    >
                      <li className="">
                        <NavigationMenuLink asChild>
                          {/* Ensured Link/Card takes up full height of the list item (which now stretches) */}
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-white p-6 no-underline outline-none transition-all duration-300 transform hover:scale-[1.02] shadow-2xl hover:bg-gray-50"
                            href="/casestudies"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-[#000B19]">
                              Case Studies
                            </div>
                            <p className="text-sm leading-tight text-gray-700">
                              Explore our case studies, discover real-world applications and transformations.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {/* Updated ListItem for Bootcamp - assuming ListItem itself renders a div that fills its space */}
                      <ListItem
                        href="/bootcamp"
                        title="Bootcamp"
                        // Adding h-full here might help if ListItem accepts this prop for its container
                        className="bg-white text-[#000B19] shadow-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-[1.02] h-full"
                      >
                        Unlock Your Potential with Expert-led Bootcamps.

                      </ListItem>
                      {/* New ListItem for Blog */}
                      <ListItem
                        href="https://ivyproschool.com/blog"
                        title="Blog"
                        className="bg-white text-[#000B19] shadow-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-[1.02] h-full"
                      >
                        Explore the Future of Data, Gen AI, Analytics & Career Growth with Ivy's Insights
                      </ListItem>
                      <ListItem
                        href="https://ivyproschool.com/AIHelpCenter"
                        title="AI Help Center"
                        className="bg-white text-[#000B19] shadow-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-[1.02] h-full"
                      >
                        Master the Trending AI Topics Everyone's Talking About
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* 🎯 End of Updated Code */}

                {/* <NavigationMenuItem>
                  <Link href="/bootcamp" className="flex items-center px-3 py-2 text-sm font-medium">
                    Bootcamp
                  </Link>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <Link href="/enterprise" className="flex items-center px-3 py-2 text-sm font-medium">
                    Enterprise
                  </Link>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <Link href="/verify-certificate" className="flex items-center px-3 py-2 text-sm font-medium">
                    Verify Certificate
                  </Link>
                </NavigationMenuItem> */}
                {/* <NavigationMenuItem>
                  <a style={{ fontSize: 14 }} href="https://ivyproschool.com/blog" >
                    Blog
                  </a>
                </NavigationMenuItem> */}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <AnimatedPhoneButton />
              <Button
                className="bg-gradient-to-r from-ivy-blue"
                onClick={handleApplyClick}
                style={{
                  backgroundImage: 'linear-gradient(bottom, #bc4e00 10%, #ff9300 100%)',
                  borderBottomColor: '#bc4e00',
                  textShadow: '0px -1px 1px #eb6200'
                }}
              >
                Apply Now
              </Button>
            </div>
          </div>

          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 mt-16 bg-white overflow-y-auto shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-2">
              {/* Main "Our Courses" Link */}
              <h2 style={{ color: 'black' }} className="text-lg font-bold text-white-900 mb-2 px-2 flex items-center gap-2">
                <BookOpen style={{ color: 'black' }} className="h-5 w-5 text-ivy-white" />
                Our Courses
              </h2>

              {/* All Courses in a single list */}
              {allCourses.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 hover:border-ivy-blue transition-all duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src={typeof category.image === "string" ? category.image : category.image?.src || "/placeholder.svg"}
                    alt={category.title}
                    className="w-10 h-10 object-contain rounded-md flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 space-y-1">
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-ivy-blue break-words">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 break-words">{category.description}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-ivy-blue mt-1 flex-shrink-0" />
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <h2 style={{ color: 'black' }} className="text-lg font-bold text-white-900 mb-2 px-2 flex items-center gap-2">
                <Link style={{ color: 'black' }} className="h-5 w-5 text-white-600" href="#" />
                <BookOpen style={{ color: 'black', marginLeft: -25 }} className="h-5 w-5 text-ivy-white" />

                Quick Links
              </h2>
              <div className="flex flex-col space-y-2">
                {/* Alumni & Reviews */}
                <Link
                  href="/alumni"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 hover:border-ivy-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Trophy className="h-5 w-5 text-amber-500" />
                  <span style={{ fontWeight: 'bold' }} className="font-medium text-gray-800">Alumni & Reviews</span>
                </Link>

                {/* Case Studies */}
                <Link
                  href="/casestudies"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 hover:border-ivy-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Briefcase className="h-5 w-5 text-indigo-600" />
                  <span style={{ fontWeight: 'bold' }} className="font-medium text-gray-800">Case Studies</span>
                </Link>

                {/* Bootcamp */}
                <Link
                  href="/bootcamp"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 hover:border-ivy-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <span style={{ fontWeight: 'bold' }} className="font-medium text-gray-800">Bootcamp</span>
                </Link>

                {/* Enterprise */}
                <Link
                  href="/enterprise"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 hover:border-ivy-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Building className="h-5 w-5 text-green-600" />
                  <span style={{ fontWeight: 'bold' }} className="font-medium text-gray-800">Enterprise</span>
                </Link>

                {/* Blog */}
                <a
                  href="https://ivyproschool.com/blog"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 hover:border-ivy-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <NotebookPen className="h-5 w-5 text-blue-600" />
                  <span style={{ fontWeight: 'bold' }} className="font-medium text-gray-800">Blog</span>
                </a>

                {/* Contact Us */}
                <Link
                  href="/contact-us"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 hover:border-ivy-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="h-5 w-5 text-red-600" />
                  <span style={{ fontWeight: 'bold' }} className="font-medium text-gray-800">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {showApplyModal && (
        <ApplyNowModal onClose={() => setShowApplyModal(false)} />
      )}

      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.2s ease-out forwards;
          }
          @keyframes ring-pulse {
            0% { transform: scale(1); opacity: 0.6; }
            70% { transform: scale(1.4); opacity: 0; }
            100% { opacity: 0; }
          }
          @keyframes fade-in-slide-down {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-slide-down {
            animation: fade-in-slide-down 0.3s ease-out forwards;
          }
        `}
      </style>
    </>
  )
}

export default Navbar
