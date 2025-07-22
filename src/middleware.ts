import { NextRequest, NextResponse } from "next/server";

// Public pages
const publicPages = ["/login"];

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token")?.value;

  // Allow access to public pages
  if (publicPages.includes(pathname)) {
    // If login redirect to dashboard
    if (token && pathname === "/login") {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next();
  }

  // If not login redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Protected routes
export const config = {
  matcher: ["/", "/login", "/dashboard", "/products", "/settings"],
};
