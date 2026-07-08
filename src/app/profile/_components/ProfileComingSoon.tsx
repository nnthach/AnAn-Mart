'use client';

import { Construction } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { useI18n } from '@/context/I18nContext';

export function ProfileComingSoon() {
  const { t } = useI18n();

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 pt-32 pb-20 text-center md:px-8 md:pt-40">
      <span className="bg-primary/10 flex size-16 items-center justify-center rounded-full">
        <Construction className="text-primary size-7" strokeWidth={1.5} />
      </span>

      <span className="text-primary mt-6 text-xs font-semibold tracking-[0.2em] uppercase">
        {t('profilePage.badge')}
      </span>

      <h1 className="font-heading mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
        {t('profilePage.title')}
      </h1>

      <p className="mt-4 leading-relaxed text-gray-600">{t('profilePage.description')}</p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button variant="outline" className="rounded-full px-6" render={<Link href="/" />}>
          {t('profilePage.backHome')}
        </Button>
        <Button className="rounded-full px-6" render={<Link href="/shop" />}>
          {t('profilePage.continueShopping')}
        </Button>
      </div>
    </div>
  );
}
