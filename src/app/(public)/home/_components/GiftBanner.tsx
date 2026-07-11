'use client';

import { ChevronRight, Gift } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { useI18n } from '@/context/I18nContext';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

export function GiftBanner() {
  const { t } = useI18n();
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 md:px-8">
      <div
        ref={ref}
        className={cn(
          'from-primary relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl bg-linear-to-r to-red-800 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left md:px-10',
          !inView && 'opacity-0',
          inView && 'animate-fadeInUp',
        )}
      >
        <Gift className="absolute -top-6 -left-6 size-32 text-white/10" strokeWidth={1} />

        <div className="relative flex flex-col items-center gap-3 sm:flex-row sm:items-center">
          <Gift className="hidden size-10 shrink-0 text-white sm:block" strokeWidth={1.5} />
          <div>
            <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
              {t('homepage.giftBanner.title')}
            </h2>
            <p className="mt-1 text-sm text-white/85">{t('homepage.giftBanner.description')}</p>
          </div>
        </div>

        <Link href={'/shop'}>
          <Button
            variant="outline"
            className="hover:text-primary relative gap-1.5 rounded-full border-white bg-transparent px-5 text-white hover:bg-white"
          >
            {t('homepage.giftBanner.cta')}
            <ChevronRight className="size-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
