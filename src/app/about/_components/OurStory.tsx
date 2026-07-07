'use client';

import Image from 'next/image';

import { useI18n } from '@/context/I18nContext';

const STATS = [
  { value: '8+', key: 'years' },
  { value: '500+', key: 'products' },
  { value: '20,000+', key: 'customers' },
] as const;

export default function OurStory() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
          <Image
            src="/images/ourstore/our-store-two.jpg"
            alt="Wine selection at An An Mart"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="font-heading text-primary text-2xl font-bold sm:text-3xl">
            {t('aboutPage.storyHeading')}
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600">{t('aboutPage.storyParagraph')}</p>

          <dl className="border-border mt-8 grid grid-cols-3 gap-4 border-t pt-8">
            {STATS.map(({ value, key }) => (
              <div key={key}>
                <dt className="font-heading text-primary text-2xl font-bold sm:text-3xl">
                  {value}
                </dt>
                <dd className="mt-1 text-xs text-gray-500 sm:text-sm">
                  {t(`aboutPage.stats.${key}`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
