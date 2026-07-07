'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';

import { ProductGallery } from '@/app/(public)/shop/[slug]/_components/ProductGallery';
import { ProductCard } from '@/app/(public)/shop/_components/ProductCard';
import { formatPrice, PRODUCTS, type Product } from '@/app/(public)/shop/_lib/products';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useI18n } from '@/context/I18nContext';

const RELATED_PRODUCTS_LIMIT = 4;

interface ProductDetailViewProps {
  product: Product;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const { t } = useI18n();
  const categoryLabel = t(`homepage.categoryGrid.categories.${product.category}.title`);

  const relatedProducts = useMemo(
    () =>
      PRODUCTS.filter(
        (candidate) => candidate.category === product.category && candidate.id !== product.id,
      ).slice(0, RELATED_PRODUCTS_LIMIT),
    [product.category, product.id],
  );

  return (
    <div className="mx-auto max-w-7xl px-4 pt-24 pb-16 md:px-8 md:pt-28">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/" />}>{t('header.nav.home')}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link href="/shop" />}>{t('header.nav.shop')}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <ProductGallery
          images={product.images}
          productName={product.name}
          previousLabel={t('shopPage.pagination.previous')}
          nextLabel={t('shopPage.pagination.next')}
        />

        <div className="flex flex-col">
          <span className="bg-primary w-fit rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
            {categoryLabel}
          </span>

          <h1 className="font-heading mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            {product.name}
          </h1>

          <p className="text-primary mt-3 text-2xl font-bold">{formatPrice(product.price)}</p>

          <p className="mt-5 leading-relaxed text-gray-600">{product.description}</p>

          <button
            type="button"
            className="bg-primary hover:bg-primary/90 mt-8 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold text-white transition-colors sm:w-fit sm:px-10"
          >
            <ShoppingCart className="size-4" />
            {t('shopPage.addToCart')}
          </button>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="via-primary h-px w-10 bg-linear-to-r from-transparent to-transparent" />
            <h2 className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              {t('shopPage.relatedProducts')}
            </h2>
            <span className="via-primary h-px w-10 bg-linear-to-r from-transparent to-transparent" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                categoryLabel={categoryLabel}
                addToCartLabel={t('shopPage.addToCart')}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
