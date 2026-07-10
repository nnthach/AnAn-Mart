import { FeaturedProductsGrid } from '@/app/(public)/home/_components/FeaturedProductsGrid';
import { getPublicProducts } from '@/lib/db/product-public';

const FEATURED_CATEGORY_SLUG = 'wine';
const FEATURED_PRODUCT_LIMIT = 8;

export async function FeaturedProducts() {
  const { data: products } = await getPublicProducts({
    category_slug: FEATURED_CATEGORY_SLUG,
    sort_by: 'created_at',
    order: 'desc',
    limit: FEATURED_PRODUCT_LIMIT,
  });

  if (products.length === 0) return null;

  return <FeaturedProductsGrid products={products} />;
}
