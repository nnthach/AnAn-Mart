import 'server-only';

import { supabase } from '@/lib/db/client';
import type { ProductItem } from '@/types';

export interface GetPublicProductsParams {
  category_slug?: string;
  sort_by?: 'created_at' | 'price';
  order?: 'asc' | 'desc';
  page?: number;
  limit?: number;
  search?: string;
}

interface ProductTranslationRow {
  locale: 'vi' | 'en';
  name: string;
  description: string | null;
  slug: string;
}

interface ProductRow {
  id: string;
  price: number;
  image_urls: string[] | null;
  category_id: string;
  is_active: boolean;
  created_at: string;
  updated_at: string | null;
  category: { id: string; name: { vi: string; en: string } } | null;
  product_translations: ProductTranslationRow[];
}

function mapProductRow(row: ProductRow): ProductItem {
  const findTranslation = (locale: 'vi' | 'en') =>
    row.product_translations.find((item) => item.locale === locale);

  const vi = findTranslation('vi');
  const en = findTranslation('en');

  return {
    id: row.id,
    name: { vi: vi?.name ?? '', en: en?.name ?? '' },
    description: { vi: vi?.description ?? '', en: en?.description ?? '' },
    slug: { vi: vi?.slug ?? '', en: en?.slug ?? '' },
    price: row.price,
    image_urls: row.image_urls ?? [],
    category_id: row.category_id,
    category: row.category,
    is_active: row.is_active,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

export async function getPublicProducts(params: GetPublicProductsParams = {}) {
  const {
    category_slug,
    sort_by = 'created_at',
    order = 'desc',
    page = 1,
    limit = 12,
    search,
  } = params;

  const ascending = order === 'asc';
  const pageNum = Math.max(1, page);
  const limitNum = Math.min(50, Math.max(1, limit));
  const from = (pageNum - 1) * limitNum;
  const to = from + limitNum - 1;

  let query = supabase
    .from('products')
    .select(
      `
        id,
        price,
        image_urls,
        category_id,
        is_active,
        created_at,
        updated_at,
        category:categories!inner(id, name),
        product_translations!inner(locale, name, description, slug)
      `,
      { count: 'exact' },
    )
    .eq('is_active', true)
    .order(sort_by, { ascending })
    .range(from, to);

  if (category_slug) {
    const safeSlug = category_slug.replace(/[^a-z0-9-]/g, '');
    if (safeSlug) {
      query = query.or(`slug->>vi.eq.${safeSlug},slug->>en.eq.${safeSlug}`, {
        referencedTable: 'category',
      });
    }
  }

  if (search) {
    query = query.ilike('product_translations.name', `%${search}%`);
  }

  const { data, error, count } = await query;
  if (error) throw error;

  return {
    data: (data as unknown as ProductRow[]).map(mapProductRow),
    pagination: {
      page: pageNum,
      limit: limitNum,
      total_items: count ?? 0,
      total_pages: count ? Math.ceil(count / limitNum) : 0,
    },
  };
}
