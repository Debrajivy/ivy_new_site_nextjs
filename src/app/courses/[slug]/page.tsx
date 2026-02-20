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
// Prefer the alias to avoid fragile relatives
import CourseSubNavigation from "@/components/CourseSubNavigation"
import MicroLinkFAQ from "@/components/MicroLinkFAQ"

// Types that match Next's generated PageProps
type Params = { slug: string }
type AsyncPageProps = { params: Promise<Params> }

export async function generateMetadata(
  { params }: AsyncPageProps
): Promise<Metadata> {
  try {
    const { slug } = await params
    const course = await fetchCourseById(slug)



    if (!course) return { title: "Course Not Found | Ivy Professional School" }

    return {
      title: `${course?.metaData?.title ? course?.metaData?.title : `${course.title} | Ivy Professional School`}`,
      description: course.description,
      keywords: `${course.title}, ${course.category}, Ivy Professional School, Data Science, AI, Machine Learning, Course, Training`,
      openGraph: {
        title: `${course?.metaData?.title ? course?.metaData?.title : `${course.title} | Ivy Professional School`}`,
        description: course.description,
        images: [course.image],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${course?.metaData?.title ? course?.metaData?.title : `${course.title} | Ivy Professional School`}`,
        description: course.description,
        images: [course.image],
      },
      alternates: {
        canonical: `https://ivyproschool.com/courses/${slug}`,
      },
    }
  } catch {
    return { title: "Course Not Found | Ivy Professional School" }
  }
}

export default async function CoursePage({ params }: AsyncPageProps) {
  try {
    const { slug } = await params
    const course = await fetchCourseById(slug)

    if (!course) notFound()

    return (
      <>
        <Navbar />
        <main>
          <CourseHero course={course} />

          {/* Sticky sub-nav */}
          <CourseSubNavigation />

          {/* Anchor targets */}
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
            <CourseEnrollCTA course={course} />
          </div>
          <div id="course-enrollcta-section">
            <MicroLinkFAQ course={course} />
          </div>
        </main>
        <Footer />
      </>
    )
  } catch (error) {
    console.error("Error rendering course page:", error)
    notFound()
  }
}
