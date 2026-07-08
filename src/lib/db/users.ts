import 'server-only';
import { supabaseAdmin } from '@/lib/db/client';

export async function getUserProfileById(id: string) {
  const { data, error } = await supabaseAdmin
    .from('users')
    .select(`id, full_name, role, status, staffs(id, is_active)`)
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

export async function createUserProfile(input: { id: string; full_name: string }) {
  const { error } = await supabaseAdmin.from('users').insert({
    id: input.id,
    full_name: input.full_name,
    role: 'customer',
    status: 'active',
    has_password: true,
  });

  if (error) throw error;
}
