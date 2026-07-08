'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

import { ProductGallery } from '@/app/(public)/shop/[slug]/_components/ProductGallery';
import { ProductCard } from '@/app/(public)/shop/_components/ProductCard';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useI18n } from '@/context/I18nContext';
import { formatPrice } from '@/lib/utils';
import type { ProductItem } from '@/types';

interface ProductDetailViewProps {
  product: ProductItem;
  relatedProducts: ProductItem[];
}

export function ProductDetailView({ product, relatedProducts }: ProductDetailViewProps) {
  const { t, locale } = useI18n();
  const categoryLabel = product.category?.name[locale] ?? '';
  const images = product.image_urls.length > 0 ? product.image_urls : ['/images/logo.png'];

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
            <BreadcrumbPage>{product.name[locale]}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <ProductGallery
          images={images}
          productName={product.name[locale]}
          previousLabel={t('shopPage.pagination.previous')}
          nextLabel={t('shopPage.pagination.next')}
        />

        <div className="flex flex-col">
          {categoryLabel && (
            <span className="bg-primary w-fit rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
              {categoryLabel}
            </span>
          )}

          <h1 className="font-heading mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            {product.name[locale]}
          </h1>

          <p className="text-primary mt-3 text-2xl font-bold">{formatPrice(product.price)}</p>

          <p className="mt-5 leading-relaxed text-gray-600">{product.description[locale]}</p>

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
                href={`/shop/${relatedProduct.slug[locale]}`}
                image={relatedProduct.image_urls[0] ?? '/images/logo.png'}
                name={relatedProduct.name[locale]}
                price={relatedProduct.price}
                categoryLabel={relatedProduct.category?.name[locale] ?? ''}
                addToCartLabel={t('shopPage.addToCart')}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
