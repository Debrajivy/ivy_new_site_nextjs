"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function NotFound() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname && (pathname === "/blog" || pathname.startsWith("/blog/"))) {
      return // let /blog and /blog/* pass through, don't redirect
    }
    router.replace("/")
  }, [router, pathname])

  return null
}
