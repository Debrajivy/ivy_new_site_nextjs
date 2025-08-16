import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function Loading() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
              <div className="h-6 w-40 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
