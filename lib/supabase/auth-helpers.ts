"use client";

import { createClient } from '@/lib/supabase/client';
import { NextRequest, NextResponse } from 'next/server';

export async function createMiddlewareClient({ req, res }: { req: NextRequest; res: NextResponse }) {
  const supabase = createClient();
  
  // You might need to handle cookies manually here
  // This is a simplified version
  
  return supabase;
} 