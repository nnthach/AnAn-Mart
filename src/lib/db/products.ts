import 'server-only';

import { supabaseAdmin } from '@/lib/db/client';
import type { ProductItem } from '@/types';

export interface GetProductsParams {
  is_active?: boolean;
  category_id?: string;
  sort_by?: 'created_at' | 'price';
  order?: 'asc' | 'desc';
  page?: number;
  limit?: number;
  search?: string;
}

export interface ProductTranslationInput {
  vi: { name: string; description?: string; slug: string };
  en: { name: string; description?: string; slug: string };
}

export interface CreateProductData {
  price: number;
  category_id: string;
  image_urls?: string[];
  translations: ProductTranslationInput;
}

export interface UpdateProductData {
  price?: number;
  category_id?: string;
  image_urls?: string[];
  translations?: Partial<ProductTranslationInput>;
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

const PRODUCT_SELECT = `
  id,
  price,
  image_urls,
  category_id,
  is_active,
  created_at,
  updated_at,
  category:categories(id, name),
  product_translations(locale, name, description, slug)
`;

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

export async function getProductById(id: string): Promise<ProductItem> {
  const { data, error } = await supabaseAdmin
    .from('products')
    .select(PRODUCT_SELECT)
    .eq('id', id)
    .single();

  if (error) throw error;
  return mapProductRow(data as unknown as ProductRow);
}

export async function getProducts(params: GetProductsParams = {}) {
  const {
    is_active,
    category_id,
    sort_by = 'created_at',
    order = 'desc',
    page = 1,
    limit = 10,
    search,
  } = params;

  const ascending = order === 'asc';
  const pageNum = Math.max(1, page);
  const limitNum = Math.min(100, Math.max(1, limit));
  const from = (pageNum - 1) * limitNum;
  const to = from + limitNum - 1;

  let query = supabaseAdmin
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
      category:categories(id, name),
      product_translations!inner(locale, name, description, slug)
    `,
      { count: 'exact' },
    )
    .order(sort_by, { ascending })
    .range(from, to);

  if (is_active !== undefined) {
    query = query.eq('is_active', is_active);
  }

  if (category_id) {
    query = query.eq('category_id', category_id);
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

export async function createProduct(input: CreateProductData) {
  const { data: product, error: productError } = await supabaseAdmin
    .from('products')
    .insert({
      price: input.price,
      category_id: input.category_id,
      image_urls: input.image_urls ?? [],
      is_active: true,
    })
    .select('id')
    .single();

  if (productError) throw productError;

  const { error: translationError } = await supabaseAdmin.from('product_translations').insert([
    {
      product_id: product.id,
      locale: 'vi',
      name: input.translations.vi.name,
      description: input.translations.vi.description ?? '',
      slug: input.translations.vi.slug,
    },
    {
      product_id: product.id,
      locale: 'en',
      name: input.translations.en.name,
      description: input.translations.en.description ?? '',
      slug: input.translations.en.slug,
    },
  ]);

  if (translationError) {
    // rollback thủ công nếu translation lỗi
    await supabaseAdmin.from('products').delete().eq('id', product.id);
    throw translationError;
  }

  return getProductById(product.id);
}

export async function updateProduct(id: string, input: UpdateProductData) {
  const productUpdate: Record<string, unknown> = {};
  if (input.price !== undefined) productUpdate.price = input.price;
  if (input.category_id !== undefined) productUpdate.category_id = input.category_id;
  if (input.image_urls !== undefined) productUpdate.image_urls = input.image_urls;

  if (Object.keys(productUpdate).length > 0) {
    productUpdate.updated_at = new Date().toISOString();
    const { error } = await supabaseAdmin.from('products').update(productUpdate).eq('id', id);
    if (error) throw error;
  }

  if (input.translations?.vi) {
    const { error } = await supabaseAdmin
      .from('product_translations')
      .update({
        name: input.translations.vi.name,
        description: input.translations.vi.description ?? '',
        slug: input.translations.vi.slug,
      })
      .eq('product_id', id)
      .eq('locale', 'vi');

    if (error) throw error;
  }

  if (input.translations?.en) {
    const { error } = await supabaseAdmin
      .from('product_translations')
      .update({
        name: input.translations.en.name,
        description: input.translations.en.description ?? '',
        slug: input.translations.en.slug,
      })
      .eq('product_id', id)
      .eq('locale', 'en');

    if (error) throw error;
  }

  return getProductById(id);
}

export async function deleteProduct(id: string) {
  const { error } = await supabaseAdmin.from('products').delete().eq('id', id);
  if (error) throw error;
}
