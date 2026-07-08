import 'server-only';

import { supabase } from '@/lib/db/client';
import type { CategoryItem } from '@/types';

export async function getPublicCategories(): Promise<CategoryItem[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: true });

  if (error) throw error;
  return data as CategoryItem[];
}
