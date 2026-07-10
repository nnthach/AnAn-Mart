'use client';

import { ChevronRight, MapPin } from 'lucide-react';
import Link from 'next/link';

import LocationMap from '@/components/features/LocationMap';
import { useI18n } from '@/context/I18nContext';

export default function AboutCta() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 md:px-8">
      <div className="from-primary relative flex flex-col items-center gap-4 overflow-hidden rounded-t-2xl bg-linear-to-r to-red-800 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left md:px-10">
        <MapPin className="absolute -top-6 -left-6 size-32 text-white/10" strokeWidth={1} />

        <div className="relative flex items-center gap-3">
          <MapPin className="hidden size-10 shrink-0 text-white sm:block" strokeWidth={1.5} />
          <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
            {t('aboutPage.ctaTitle')}
          </h2>
        </div>

        <Link
          href="/contact"
          className="hover:text-primary relative flex items-center gap-1.5 rounded-full border border-white bg-transparent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white"
        >
          {t('aboutPage.ctaButton')}
          <ChevronRight className="size-4" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-b-2xl">
        <LocationMap />
      </div>
    </section>
  );
}
