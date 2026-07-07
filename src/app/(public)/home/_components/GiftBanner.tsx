'use client';

import { ChevronRight, Gift } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useI18n } from '@/context/I18nContext';

export function GiftBanner() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="from-primary relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl bg-linear-to-r to-red-800 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left md:px-10">
        <Gift className="absolute -top-6 -left-6 size-32 text-white/10" strokeWidth={1} />

        <div className="relative flex flex-col items-center gap-3 sm:flex-row sm:items-center">
          <Gift className="hidden size-10 shrink-0 text-white sm:block" strokeWidth={1.5} />
          <div>
            <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
              {t('homepage.giftBanner.title')}
            </h2>
            <p className="mt-1 text-sm text-white/85">
              {t('homepage.giftBanner.description')}
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          className="hover:text-primary relative gap-1.5 rounded-full border-white bg-transparent px-5 text-white hover:bg-white"
        >
          {t('homepage.giftBanner.cta')}
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
