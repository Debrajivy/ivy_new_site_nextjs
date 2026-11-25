import { NextRequest, NextResponse } from "next/server"

// Send traffic that reaches the app on the default Azure hostname to the
// canonical site, so the Azure address is never served or indexed.
export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase()

  if (host.endsWith(".azurewebsites.net")) {
    const { pathname, search } = request.nextUrl
    return NextResponse.redirect(`https://ivyproschool.com${pathname}${search}`, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
}
