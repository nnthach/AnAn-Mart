'use client';

import { PageHero } from '@/components/features/PageHero';
import { useI18n } from '@/context/I18nContext';

export default function ContactHeroSection() {
  const { t } = useI18n();

  return (
    <PageHero
      image="/images/ourstore/our-store-three.jpg"
      imageAlt="A customer browsing the wine shelves at An An Mart"
      homeLabel={t('header.nav.home')}
      currentLabel={t('header.nav.contact')}
      title={t('contactPage.title')}
      description={t('contactPage.tagline')}
    />
  );
}
