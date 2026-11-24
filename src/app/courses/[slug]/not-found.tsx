import Link from "next/link"
import Navbar from "@/components/layout/Navbar"

// Kept deliberately light: Next.js embeds this tree in every course page's
// payload, so it must not render the full Footer (that added ~28 KB per page).
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The course you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Browse All Courses
          </Link>
        </div>
      </main>
    </>
  )
}
