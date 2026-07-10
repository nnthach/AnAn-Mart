'use client';

import { ProductCard } from '@/app/(public)/shop/_components/ProductCard';
import { useI18n } from '@/context/I18nContext';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import type { ProductItem } from '@/types';

interface FeaturedProductsGridProps {
  products: ProductItem[];
}

export function FeaturedProductsGrid({ products }: FeaturedProductsGridProps) {
  const { t, locale } = useI18n();
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 md:px-8">
      <div className="mb-10 flex items-center justify-center gap-4">
        <span className="via-primary h-px w-10 bg-linear-to-r from-transparent to-transparent" />
        <h2 className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
          {t('homepage.featuredProducts.heading')}
        </h2>
        <span className="via-primary h-px w-10 bg-linear-to-r from-transparent to-transparent" />
      </div>

      <div ref={ref} className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={cn(!inView && 'opacity-0', inView && 'animate-scaleIn')}
            style={inView ? { animationDelay: `${index * 0.08}s` } : undefined}
          >
            <ProductCard
              href={`/shop/${product.slug[locale]}`}
              image={product.image_urls[0] ?? '/images/logo.png'}
              name={product.name[locale]}
              price={product.price}
              categoryLabel={product.category?.name[locale] ?? ''}
              addToCartLabel={t('shopPage.addToCart')}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
