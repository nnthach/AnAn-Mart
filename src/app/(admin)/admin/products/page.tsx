import { getProducts } from '@/lib/db/products';

import AdminProductClient from './_components/AdminProductClient';

const DEFAULT_LIMIT = 8;

interface AdminProductPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function AdminProductPage({ searchParams }: AdminProductPageProps) {
  const params = await searchParams;
  const search = typeof params.search === 'string' ? params.search.trim() : '';

  const { data, pagination } = await getProducts({
    is_active: params.is_active === undefined ? undefined : params.is_active === 'true',
    category_slug: typeof params.category_slug === 'string' ? params.category_slug : undefined,
    sort_by: params.sort_by === 'price' ? 'price' : 'created_at',
    order: (params.order as 'asc' | 'desc') ?? 'desc',
    page: Number(params.page) || 1,
    limit: Number(params.limit) || DEFAULT_LIMIT,
    search: search || undefined,
  });

  return <AdminProductClient products={data} pagination={pagination} />;
}
