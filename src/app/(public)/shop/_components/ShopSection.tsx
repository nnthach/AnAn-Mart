import { ProductGrid } from '@/app/(public)/shop/_components/ProductGrid';
import { ShopToolbar } from '@/app/(public)/shop/_components/ShopToolbar';
import type { CategoryItem, Pagination, ProductItem } from '@/types';

interface ShopSectionProps {
  products: ProductItem[];
  pagination: Pagination;
  categories: CategoryItem[];
}

export default function ShopSection({ products, pagination, categories }: ShopSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
      <ShopToolbar categories={categories} totalCount={pagination.total_items} />
      <ProductGrid products={products} pagination={pagination} />
    </section>
  );
}
