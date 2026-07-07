import { notFound } from 'next/navigation';

import { ProductDetailView } from '@/app/(public)/shop/[slug]/_components/ProductDetailView';
import { getProductById } from '@/app/(public)/shop/_lib/products';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import type { Metadata } from 'next';

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductById(slug);

  return {
    title: product ? `${product.name} | An An Mart` : 'Product | An An Mart',
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductById(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header forceScrolled />
      <main className="flex-1">
        <ProductDetailView product={product} />
      </main>
      <Footer />
    </div>
  );
}
