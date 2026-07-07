'use client';

import { PageHero } from '@/components/features/PageHero';
import { useI18n } from '@/context/I18nContext';

export default function ShopHeroSection() {
  const { t } = useI18n();

  return (
    <PageHero
      image="/images/feature/wine.jpg"
      imageAlt="Premium wine bottles at An An Mart"
      homeLabel={t('header.nav.home')}
      currentLabel={t('header.nav.shop')}
      title={t('shopPage.title')}
      description={t('shopPage.description')}
    />
  );
}
