"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"

export default function NotFound() {
  const router = useRouter()
  const pathname = usePathname()
  const [countdown, setCountdown] = useState(10)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])


  useEffect(() => {
    if (countdown <= 0) return

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [countdown])

  useEffect(() => {
    if (countdown === 2) {
      router.push("/")
    }
  }, [countdown, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        {isHydrated ? (
          <p className="text-lg text-gray-500 mb-4">
            Redirecting to home in <span className="font-bold text-blue-600">{countdown}</span> seconds...
          </p>
        ) : (
          <p className="text-lg text-gray-500 mb-4">Redirecting to home...</p>
        )}
        <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home Now
        </Link>
      </div>
    </div>
  )
}
