import { notFound } from 'next/navigation';

import { ProductDetailView } from '@/app/(public)/shop/[slug]/_components/ProductDetailView';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { getProductBySlug, getPublicProducts } from '@/lib/db/product-public';

import type { Metadata } from 'next';

const RELATED_PRODUCTS_LIMIT = 4;

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  return {
    title: product ? `${product.name.vi} | An An Mart` : 'Product | An An Mart',
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const { data: relatedProducts } = await getPublicProducts({
    category_id: product.category_id,
    exclude_id: product.id,
    limit: RELATED_PRODUCTS_LIMIT,
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Header forceScrolled />
      <main className="flex-1">
        <ProductDetailView product={product} relatedProducts={relatedProducts} />
      </main>
      <Footer />
    </div>
  );
}
