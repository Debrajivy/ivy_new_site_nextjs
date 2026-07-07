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
import CourseEnrollCTA from "@/components/courses/CourseEnrollCTA"
import CourseJobSupport from "@/components/courses/CourseJobSupport"
import type { Metadata } from "next"
import { fetchCourseById, fetchCourses } from "@/lib/api"
// Prefer the alias to avoid fragile relatives
import CourseSubNavigation from "@/components/CourseSubNavigation"
import CourseRelatedLinks from "@/components/courses/CourseRelatedLinks"
import CourseAIAdvisor from "@/components/courses/CourseAIAdvisor"
import CourseEntrepreneurDetails from "@/components/courses/CourseEntrepreneurDetails"

// Types that match Next's generated PageProps
type Params = { slug: string }
type AsyncPageProps = { params: Promise<Params> }

// Course data is local and changes only when the application is deployed.
// Pre-render every known course (including city pages) so crawlers always
// receive the complete page in the initial HTML response.
export const dynamic = "force-static"
export const dynamicParams = false

export async function generateStaticParams(): Promise<Params[]> {
  const courses = await fetchCourses()
  return courses.map(({ slug }) => ({ slug }))
}

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
          <CourseSubNavigation course={course} />
          <CourseAIAdvisor courseTitle={course.title} courseSlug={course.slug} />
          {/* Anchor targets */}
          <div id="course-accreditation-section">
            <CourseAccreditation />
          </div>
          <div id="course-overview-section" className="course-deferred-section">
            <CourseOverview course={course} />
          </div>
          <div id="course-curriculum-section" className="course-deferred-section">
            <CourseCurriculum course={course} />
          </div>
          <div id="course-projects-section" className="course-deferred-section">
            <CourseProjects course={course} />
          </div>
                    {course.title === "AI for Entrepreneurs" && <CourseEntrepreneurDetails />}
          <div id="course-jobsupport-section" className="course-deferred-section">
            <CourseJobSupport course={course} />
          </div>

          <div id="course-alumni-section" className="course-deferred-section">
            <CourseAlumni courseId={course.id} />
          </div>
          <div id="course-faq-section" className="course-deferred-section">
            <CourseFAQ course={course} />
          </div>
          <div id="course-enrollcta-section" className="course-deferred-section">
            <CourseEnrollCTA course={course} />
          </div>
          <div className="course-deferred-section">
            <CourseRelatedLinks course={course} />
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
