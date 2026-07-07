'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import AdminPagination from '@/components/features/AdminPagination';
import { useI18n } from '@/context/I18nContext';
import type { Pagination, ProductItem } from '@/types';

import CreateProductModal from './CreateProductModal';
import ProductFilter from './ProductFilter';
import ProductTable from './ProductTable';

interface Props {
  products: ProductItem[];
  pagination: Pagination;
}

export default function AdminProductClient({ products, pagination }: Props) {
  const { t } = useI18n();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-foreground text-2xl font-bold">
          {t('admin.productsPage.headerTitle.title')}
        </h1>
        <p className="text-muted-foreground text-sm">
          {t('admin.productsPage.headerTitle.subtitle')}
        </p>
      </div>

      <div className="bg-card rounded-xl border shadow-sm">
        <div className="flex items-center justify-between border-b px-4 py-4">
          <ProductFilter />
          <CreateProductModal />
        </div>

        <ProductTable products={products} />

        <div className="flex items-center justify-between border-t px-6 py-3">
          <p className="text-muted-foreground text-xs">
            {t('admin.table.pagination.showing')}{' '}
            <span className="text-foreground font-medium">{products.length}</span>{' '}
            {t('admin.table.pagination.of')}{' '}
            <span className="text-foreground font-medium">{pagination.total_items}</span>{' '}
            {t('admin.table.pagination.items')}
          </p>

          <AdminPagination
            page={pagination.page}
            totalPages={pagination.total_pages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
