"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/") // instantly redirect to home
  }, [router])

  return null // don't render anything, just redirect
}
