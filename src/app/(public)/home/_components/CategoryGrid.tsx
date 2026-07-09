'use client';

import { Beer, Candy, Coffee, CupSoda, Gift, GlassWater, ShoppingBag, Wine } from 'lucide-react';
import Image from 'next/image';

import { useI18n } from '@/context/I18nContext';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  { key: 'premiumWines', icon: Wine, image: '/images/one-stop/premium-wine.jpg' },
  { key: 'whisky', icon: GlassWater, image: '/images/one-stop/whisky.jpg' },
  { key: 'craftBeer', icon: Beer, image: '/images/one-stop/beer.jpg' },
  { key: 'coffee', icon: Coffee, image: '/images/one-stop/coffee.jpg' },
  { key: 'snacks', icon: Candy, image: '/images/one-stop/snack.jpg' },
  { key: 'drinks', icon: CupSoda, image: '/images/one-stop/drink.jpg' },
  { key: 'souvenirs', icon: Gift, image: '/images/one-stop/sourvenir.jpg' },
  { key: 'travelEssentials', icon: ShoppingBag, image: '/images/one-stop/travel.jpg' },
] as const;

const MARQUEE_CATEGORIES = [...CATEGORIES, ...CATEGORIES];

export function CategoryGrid() {
  const { t } = useI18n();
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 md:px-8">
      <div className="mb-10 flex items-center justify-center gap-4">
        <span className="via-primary h-px w-10 bg-linear-to-r from-transparent to-transparent" />
        <h2 className="text-primary text-center text-xs font-semibold tracking-[0.2em] uppercase">
          {t('homepage.categoryGrid.heading')}
        </h2>
        <span className="via-primary h-px w-10 bg-linear-to-r from-transparent to-transparent" />
      </div>

      <div
        ref={ref}
        className={cn('overflow-hidden', !inView && 'opacity-0', inView && 'animate-fadeUp')}
      >
        <div className="animate-marquee hover:paused flex w-max gap-4 px-1">
          {MARQUEE_CATEGORIES.map(({ key, icon: Icon, image }, index) => {
            const title = t(`homepage.categoryGrid.categories.${key}.title`);

            return (
              <div
                key={`${key}-${index}`}
                className="group/card relative w-40 shrink-0 sm:w-44 lg:w-48"
              >
                <div className="ring-border relative aspect-3/4 overflow-hidden rounded-2xl shadow-sm ring-1">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 12vw, (min-width: 640px) 25vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent transition-colors duration-500 group-hover/card:from-black/90 group-hover/card:via-black/35" />

                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 p-4 text-center">
                    <span className="mb-1 flex size-10 items-center justify-center rounded-full bg-white shadow-md">
                      <Icon className="text-primary size-4" strokeWidth={1.5} />
                    </span>
                    <h3 className="text-xs font-semibold tracking-wide text-white uppercase sm:text-sm">
                      {title}
                    </h3>
                    <p className="max-h-0 overflow-hidden text-[11px] leading-snug text-white/80 opacity-0 transition-all duration-500 group-hover/card:mt-0.5 group-hover/card:max-h-12 group-hover/card:opacity-100">
                      {t(`homepage.categoryGrid.categories.${key}.subtitle`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
