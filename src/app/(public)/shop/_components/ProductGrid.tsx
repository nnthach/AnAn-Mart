'use client';

import { ChevronLeft, ChevronRight, PackageSearch } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

import { ProductCard } from '@/app/(public)/shop/_components/ProductCard';
import { useI18n } from '@/context/I18nContext';
import { cn } from '@/lib/utils';
import type { Pagination, ProductItem } from '@/types';

interface ProductGridProps {
  products: ProductItem[];
  pagination: Pagination;
}

export function ProductGrid({ products, pagination }: ProductGridProps) {
  const { t, locale } = useI18n();
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    if (page < 1 || page > pagination.total_pages || page === pagination.page) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));
    router.push(`?${params.toString()}`);
  };

  if (products.length === 0) {
    return (
      <div className="border-border flex flex-col items-center gap-3 rounded-xl border border-dashed py-20 text-center">
        <PackageSearch className="size-8 text-gray-300" strokeWidth={1.5} />
        <p className="text-sm text-gray-500">{t('shopPage.empty')}</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            href={`/shop/${product.slug[locale]}`}
            image={product.image_urls[0] ?? '/images/logo.png'}
            name={product.name[locale]}
            price={product.price}
            categoryLabel={product.category?.name[locale] ?? ''}
            addToCartLabel={t('shopPage.addToCart')}
          />
        ))}
      </div>

      {pagination.total_pages > 1 && (
        <nav aria-label="pagination" className="mt-10 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => goToPage(pagination.page - 1)}
            disabled={pagination.page === 1}
            aria-label={t('shopPage.pagination.previous')}
            className="border-border flex size-9 cursor-pointer items-center justify-center rounded-md border text-gray-600 transition-colors hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-40"
          >
            <ChevronLeft className="size-4" />
          </button>

          {Array.from({ length: pagination.total_pages }, (_, i) => i + 1).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => goToPage(item)}
              aria-current={item === pagination.page ? 'page' : undefined}
              className={cn(
                'flex size-9 cursor-pointer items-center justify-center rounded-md border text-sm font-semibold transition-colors',
                item === pagination.page
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-gray-600 hover:bg-gray-100',
              )}
            >
              {item}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goToPage(pagination.page + 1)}
            disabled={pagination.page === pagination.total_pages}
            aria-label={t('shopPage.pagination.next')}
            className="border-border flex size-9 cursor-pointer items-center justify-center rounded-md border text-gray-600 transition-colors hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-40"
          >
            <ChevronRight className="size-4" />
          </button>
        </nav>
      )}
    </>
  );
}
