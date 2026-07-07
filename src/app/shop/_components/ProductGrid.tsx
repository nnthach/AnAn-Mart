import { ChevronLeft, ChevronRight, PackageSearch } from 'lucide-react';

import { ProductCard } from '@/app/shop/_components/ProductCard';
import type { Product, ProductCategory } from '@/app/shop/_lib/products';
import { cn } from '@/lib/utils';

interface ProductGridProps {
  products: Product[];
  categoryLabels: Record<ProductCategory, string>;
  addToCartLabel: string;
  emptyLabel: string;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  previousLabel: string;
  nextLabel: string;
}

export function ProductGrid({
  products,
  categoryLabels,
  addToCartLabel,
  emptyLabel,
  page,
  totalPages,
  onPageChange,
  previousLabel,
  nextLabel,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="border-border flex flex-col items-center gap-3 rounded-xl border border-dashed py-20 text-center">
        <PackageSearch className="size-8 text-gray-300" strokeWidth={1.5} />
        <p className="text-sm text-gray-500">{emptyLabel}</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            categoryLabel={categoryLabels[product.category]}
            addToCartLabel={addToCartLabel}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <nav aria-label="pagination" className="mt-10 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            aria-label={previousLabel}
            className="border-border flex size-9 items-center justify-center rounded-md border text-gray-600 transition-colors hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-40"
          >
            <ChevronLeft className="size-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onPageChange(item)}
              aria-current={item === page ? 'page' : undefined}
              className={cn(
                'flex size-9 items-center justify-center rounded-md border text-sm font-semibold transition-colors',
                item === page
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-gray-600 hover:bg-gray-100',
              )}
            >
              {item}
            </button>
          ))}

          <button
            type="button"
            onClick={() => onPageChange(page + 1)}
            disabled={page === totalPages}
            aria-label={nextLabel}
            className="border-border flex size-9 items-center justify-center rounded-md border text-gray-600 transition-colors hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-40"
          >
            <ChevronRight className="size-4" />
          </button>
        </nav>
      )}
    </>
  );
}
