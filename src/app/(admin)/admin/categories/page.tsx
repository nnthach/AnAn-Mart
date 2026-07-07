import { getCategories } from '@/lib/db/categories';

import AdminCategoryClient from './_components/AdminCategoryClient';

const DEFAULT_LIMIT = 8;

interface AdminCategoryPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function AdminCategoryPage({ searchParams }: AdminCategoryPageProps) {
  const params = await searchParams;

  const { data, pagination } = await getCategories({
    is_active: params.is_active === undefined ? undefined : params.is_active === 'true',
    sort_by: (params.sort_by as 'name' | 'created_at') ?? 'created_at',
    order: (params.order as 'asc' | 'desc') ?? 'desc',
    page: Number(params.page) || 1,
    limit: Number(params.limit) || DEFAULT_LIMIT,
  });

  return <AdminCategoryClient categories={data} pagination={pagination} />;
}
