import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define paths that don't require authentication
const publicPaths = ['/', '/signin', '/signup', '/auth/callback', '/about', '/contact', '/privacy', '/terms']

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()
  
  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req: request, res })
  
  // Refresh session if expired - required for Server Components
  await supabase.auth.getSession()
  
  // Check if the path requires authentication
  const path = request.nextUrl.pathname
  const isPublicPath = publicPaths.some(publicPath => path === publicPath || path.startsWith('/api/'))
  
  // Get the session
  const {
    data: { session },
  } = await supabase.auth.getSession()
  
  // If no session and trying to access protected route, redirect to login
  if (!session && !isPublicPath) {
    const redirectUrl = new URL('/signin', request.url)
    // Add the original URL as a query parameter so we can redirect after login
    redirectUrl.searchParams.set('redirectUrl', request.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }
  
  // If user is signed in and trying to access auth pages, redirect to application
  if (session && (path === '/signin' || path === '/signup')) {
    return NextResponse.redirect(new URL('/application', request.url))
  }
  
  return res
}

// Specify which paths this middleware should run on
export const config = {
  matcher: [
    // Match all routes except for static files, api routes that don't require auth, and other excluded paths
    '/((?!_next/static|_next/image|favicon.ico|images|.*\\.png$).*)',
  ],
} 