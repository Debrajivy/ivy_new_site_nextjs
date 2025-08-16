import { notFound } from "next/navigation"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CourseHero from "@/components/courses/CourseHero"
import CourseOverview from "@/components/courses/CourseOverview"
import CourseCurriculum from "@/components/courses/CourseCurriculum"
import CourseProjects from "@/components/courses/CourseProjects"
import CourseAlumni from "@/components/courses/CourseAlumni"
import CourseFAQ from "@/components/courses/CourseFAQ"
import CourseAccreditation from "@/components/courses/CourseAccreditation"
import CourseTestimonials from "@/components/courses/CourseTestimonials"
import CourseEnrollCTA from "@/components/courses/CourseEnrollCTA"
import CourseJobSupport from "@/components/courses/CourseJobSupport"
import type { Metadata } from "next"
import { fetchCourseById } from "@/lib/api"

// IMPORT THE NEW COURSE SUB-NAVIGATION COMPONENT HERE
import CourseSubNavigation from "../../../components/CourseSubNavigation"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {

  const resolvedParams = await params; // 👈 ensure params is resolved

  try {
    const course = await fetchCourseById(resolvedParams.slug)

    if (!course) {
      return {
        title: "Course Not Found | Ivy Professional School",
      }
    }

    return {
      title: `${course.title} | Ivy Professional School`,
      description: course.description,
      keywords: `${course.title}, ${course.category}, Ivy Professional School, Data Science, AI, Machine Learning, Course, Training`,
      openGraph: {
        title: `${course.title} | Ivy Professional School`,
        description: course.description,
        images: [course.image],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${course.title} | Ivy Professional School`,
        description: course.description,
        images: [course.image],
      },
      alternates: {
        canonical: `https://ivyprofessionalschool.com/courses/${resolvedParams.slug}`,
      },
    }
  } catch (error) {
    return {
      title: "Course Not Found | Ivy Professional School",
    }
  }
}

export default async function CoursePage({ params }: { params: { slug: string } }) {
  let course
   const { slug } = await params; // ✅ resolve params first

  try {
    course = await fetchCourseById(slug)
  } catch (error) {
    console.error("Error fetching course:", error)
    notFound()
  }

  if (!course) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main>
        <CourseHero course={course} />

        {/* RENDER THE NEW COURSE-SPECIFIC STICKY NAVIGATION */}
        <CourseSubNavigation />

        {/* ADD 'id' ATTRIBUTES TO EACH SECTION COMPONENT */}
        <div id="course-accreditation-section">
          <CourseAccreditation />
        </div>
        <div id="course-overview-section">
          <CourseOverview course={course} />
        </div>
        <div id="course-curriculum-section">
          <CourseCurriculum course={course} />
        </div>
        <div id="course-projects-section">
          <CourseProjects course={course} />
        </div>
        <div id="course-jobsupport-section">
          <CourseJobSupport course={course} />
        </div>
        <div id="course-alumni-section">
          <CourseAlumni courseId={course.id} />
        </div>
        <div id="course-testimonials-section">
          <CourseTestimonials courseId={course.id} />
        </div>
        <div id="course-faq-section">
          <CourseFAQ course={course} />
        </div>
        <div id="course-enrollcta-section">
          {" "}
          {/* Optional: Add an ID if you want to link to CTA */}
          <CourseEnrollCTA course={course} />
        </div>
      </main>
      <Footer />
    </>
  )
}
