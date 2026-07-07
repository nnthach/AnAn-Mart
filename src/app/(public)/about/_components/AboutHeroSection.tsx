'use client';

import { PageHero } from '@/components/features/PageHero';
import { useI18n } from '@/context/I18nContext';

export default function AboutHeroSection() {
  const { t } = useI18n();

  return (
    <PageHero
      image="/images/ourstore/our-store-one.jpg"
      imageAlt="Inside the An An Mart wine cellar"
      homeLabel={t('header.nav.home')}
      currentLabel={t('header.nav.aboutUs')}
      title={t('aboutPage.title')}
      description={t('aboutPage.tagline')}
    />
  );
}
