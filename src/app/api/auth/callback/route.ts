import { NextResponse, type NextRequest } from 'next/server';

import { supabaseAdmin } from '@/lib/db/client';
import { createSupabaseServerClient } from '@/lib/db/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const code = searchParams.get('code');
    const next = searchParams.get('next') ?? '/';

    if (!code) {
      return NextResponse.redirect(new URL('/signin?error=auth', req.url));
    }

    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (error || !data.user) {
      return NextResponse.redirect(new URL('/signin?error=auth', req.url));
    }

    // upsert profile
    await supabaseAdmin.from('users').upsert(
      {
        id: data.user.id,
        full_name: data.user.user_metadata.full_name,
        avatar_url: data.user.user_metadata.avatar_url ?? null,
        role: 'customer',
        status: 'active', // Google auto verify email
        has_password: false,
      },
      { onConflict: 'id', ignoreDuplicates: true }, // nếu đã có email signup rồi confirm thì bỏ qua
    );

    // case email confirm not login gg
    // if user inactive => active
    await supabaseAdmin
      .from('users')
      .update({ status: 'active' })
      .eq('id', data.user.id)
      .eq('status', 'inactive'); //  update if inactive

    return NextResponse.redirect(new URL(next, req.url));
  } catch (error) {
    console.error('Error in auth callback:', error);
    return NextResponse.redirect(new URL('/signin?error=auth', req.url));
  }
}
