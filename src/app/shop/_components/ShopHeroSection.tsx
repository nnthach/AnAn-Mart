'use client';

import Image from 'next/image';
import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useI18n } from '@/context/I18nContext';

export default function ShopHeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative flex items-end overflow-hidden pt-28 pb-10 md:pt-32 md:pb-12">
      <Image
        src="/images/feature/wine.jpg"
        alt="Premium wine bottles at An An Mart"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList className="text-white/60">
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/" className="hover:text-white" />}>
                {t('header.nav.home')}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/40" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">{t('header.nav.shop')}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="font-heading mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t('shopPage.title')}
        </h1>
        <p className="mt-2 max-w-lg text-sm text-white/70 sm:text-base">
          {t('shopPage.description')}
        </p>
      </div>
    </section>
  );
}
