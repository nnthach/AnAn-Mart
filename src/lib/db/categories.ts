import 'server-only';
import { supabaseAdmin } from '@/lib/db/client';

export interface GetCategoriesParams {
  is_active?: boolean;
  sort_by?: 'name' | 'created_at';
  order?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface CategoryInput {
  name: {
    vi: string;
    en: string;
  };
  description: {
    vi: string;
    en: string;
  };
  slug: {
    vi: string;
    en: string;
  };
}

export async function getCategoryById(id: string) {
  const { data, error } = await supabaseAdmin.from('categories').select('*').eq('id', id).single();

  if (error) throw error;
  return data;
}

export async function getCategories(params: GetCategoriesParams = {}) {
  const { is_active, sort_by = 'created_at', order = 'desc', page = 1, limit = 10 } = params;

  const ascending = order === 'asc';

  const pageNum = Math.max(1, page);
  const limitNum = Math.min(100, Math.max(1, limit));
  const from = (pageNum - 1) * limitNum;
  const to = from + limitNum - 1;

  let query = supabaseAdmin
    .from('categories')
    .select('*', { count: 'exact' })
    .order(sort_by, { ascending })
    .range(from, to);

  if (is_active !== undefined) {
    query = query.eq('is_active', is_active);
  }

  const { data, error, count } = await query;
  if (error) throw error;

  return {
    data,
    pagination: {
      page: pageNum,
      limit: limitNum,
      total_items: count ?? 0,
      total_pages: count ? Math.ceil(count / limitNum) : 0,
    },
  };
}

export async function createCategory(input: CategoryInput) {
  const { data, error } = await supabaseAdmin
    .from('categories')
    .insert({
      name: input.name,
      description: input.description,
      slug: input.slug,
      is_active: true,
    })
    .select('*')
    .single();

  if (error) throw error;
  return data;
}

export async function updateCategory(id: string, input: CategoryInput) {
  const { data, error } = await supabaseAdmin
    .from('categories')
    .update({
      name: input.name,
      description: input.description,
      slug: input.slug,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select('*')
    .single();

  if (error) throw error;
  return data;
}

export async function deleteCategory(id: string) {
  const { error } = await supabaseAdmin.from('categories').delete().eq('id', id);
  if (error) throw error;
}
