import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const cookieStore = cookies()
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    try {
      const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          cookies: {
            get(name: string) {
              try {
                return cookieStore.get(name)?.value
              } catch (error) {
                console.error('Error getting cookie:', error)
                return undefined
              }
            },
            set(name: string, value: string, options: any) {
              try {
                cookieStore.set({ name, value, ...options })
              } catch (error) {
                console.error('Error setting cookie:', error)
              }
            },
            remove(name: string, options: any) {
              try {
                cookieStore.set({ name, value: '', ...options })
              } catch (error) {
                console.error('Error removing cookie:', error)
              }
            },
          },
        }
      )

      // Exchange the code for a session
      await supabase.auth.exchangeCodeForSession(code)
    } catch (error) {
      console.error('Error in auth callback:', error)
    }
  }

  // Redirect to the application page after successful authentication
  return NextResponse.redirect(new URL('/application', request.url))
}
