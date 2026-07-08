import ShopHeroSection from '@/app/(public)/shop/_components/ShopHeroSection';
import ShopSection from '@/app/(public)/shop/_components/ShopSection';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { getPublicCategories } from '@/lib/db/category-public';
import { getPublicProducts } from '@/lib/db/product-public';

const DEFAULT_LIMIT = 12;

interface ShopPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const search = typeof params.search === 'string' ? params.search.trim() : '';
  const sort = typeof params.sort === 'string' ? params.sort : 'featured';

  const [{ data: products, pagination }, categories] = await Promise.all([
    getPublicProducts({
      category_slug: typeof params.category === 'string' ? params.category : undefined,
      sort_by: sort === 'price_asc' || sort === 'price_desc' ? 'price' : 'created_at',
      order: sort === 'price_asc' ? 'asc' : 'desc',
      page: Number(params.page) || 1,
      limit: Number(params.limit) || DEFAULT_LIMIT,
      search: search || undefined,
    }),
    getPublicCategories(),
  ]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ShopHeroSection />
        <ShopSection products={products} pagination={pagination} categories={categories} />
      </main>
      <Footer />
    </div>
  );
}
