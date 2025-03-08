import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Define paths that don't require authentication
const publicPaths = ['/', '/signin', '/signup', '/auth/callback', '/about', '/contact', '/privacy', '/terms']

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  
  // Create a Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  const supabase = createClient(supabaseUrl, supabaseKey)
  
  // Get the session from the cookie
  const authCookie = req.cookies.get('sb-auth-token')?.value
  
  let session = null
  if (authCookie) {
    try {
      // Set the cookie in the client
      supabase.auth.setSession({
        access_token: authCookie,
        refresh_token: '',
      })
      
      // Get the session
      const { data } = await supabase.auth.getSession()
      session = data.session
    } catch (error) {
      console.error('Error getting session:', error)
    }
  }

  // Check if the path requires authentication
  const path = req.nextUrl.pathname
  const isPublicPath = publicPaths.some(publicPath => path === publicPath || path.startsWith('/api/'))
  
  // Only check session for protected routes
  if (!isPublicPath) {
    // If no session and trying to access protected route, redirect to login
    if (!session && path.startsWith('/application')) {
      const redirectUrl = new URL('/signin', req.url)
      redirectUrl.searchParams.set('redirect', path)
      return NextResponse.redirect(redirectUrl)
    }

    // If session exists and trying to access auth pages
    if (session && (path.startsWith('/signin') || path.startsWith('/signup'))) {
      return NextResponse.redirect(new URL('/application', req.url))
    }
  }
  
  return res
}

// Specify which paths this middleware should run on
export const config = {
  matcher: [
    // Match all routes except for static files, api routes that don't require auth, and other excluded paths
    '/((?!_next/static|_next/image|favicon.ico|images|.*\\.png$).*)',
    '/application/:path*',
    '/signin',
    '/signup',
  ],
}
