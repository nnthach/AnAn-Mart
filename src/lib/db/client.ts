import 'server-only';

import { createServerClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';

import { env } from '@/config/env';

import type { NextRequest, NextResponse } from 'next/server';

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '';
const supabaseServiceKey = env.SUPABASE_SECRET_KEY || '';

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const supabaseAdmin = supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  : supabase;

// server client — dùng trong API route khi cần đọc/ghi cookie
export function createSupabaseServerClient(req: NextRequest, res: NextResponse) {
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookieOptions: {
      httpOnly: true,
      // secure: env.NODE_ENV === "production",
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
    },
    cookies: {
      getAll: () => req.cookies.getAll(),
      setAll: (cookiesToSet) => {
        cookiesToSet.forEach(({ name, value, options }) => {
          res.cookies.set(name, value, {
            ...options,
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            path: '/',
          });
        });
      },
    },
  });
}
