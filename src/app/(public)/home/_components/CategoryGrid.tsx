'use client';

import {
  Beer,
  Candy,
  ChevronLeft,
  ChevronRight,
  Coffee,
  CupSoda,
  Gift,
  GlassWater,
  ShoppingBag,
  Wine,
} from 'lucide-react';
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

export function CategoryGrid() {
  const { t } = useI18n();
  const { ref, inView } = useInView<HTMLDivElement>();

  const scrollByAmount = (direction: 1 | -1) => {
    ref.current?.scrollBy({ left: direction * 320, behavior: 'smooth' });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 md:px-8">
      <div className="mb-10 flex items-center justify-center gap-4">
        <span className="via-primary h-px w-10 bg-linear-to-r from-transparent to-transparent" />
        <h2 className="text-primary text-center text-xs font-semibold tracking-[0.2em] uppercase">
          {t('homepage.categoryGrid.heading')}
        </h2>
        <span className="via-primary h-px w-10 bg-linear-to-r from-transparent to-transparent" />
      </div>

      <div className="group/row relative">
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollByAmount(-1)}
          className="border-border text-foreground hover:text-primary absolute top-1/2 left-0 z-30 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white opacity-0 shadow-md transition-opacity duration-200 group-hover/row:opacity-100 hover:shadow-lg"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollByAmount(1)}
          className="border-border text-foreground hover:text-primary absolute top-1/2 right-0 z-30 flex size-9 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white opacity-0 shadow-md transition-opacity duration-200 group-hover/row:opacity-100 hover:shadow-lg"
        >
          <ChevronRight className="size-4" />
        </button>

        <div
          ref={ref}
          className={cn(
            'flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1',
            'scrollbar-none',
            '[&:has(.cat-card:hover)_.cat-card:not(:hover)]:scale-[0.97] [&:has(.cat-card:hover)_.cat-card:not(:hover)]:opacity-80',
          )}
        >
          {CATEGORIES.map(({ key, icon: Icon, image }, index) => {
            const title = t(`homepage.categoryGrid.categories.${key}.title`);

            return (
              <div
                key={key}
                className={cn(
                  'cat-card group/card relative w-40 shrink-0 origin-bottom snap-start transition-all duration-500 ease-out hover:z-20 hover:-translate-y-1 hover:scale-105 sm:w-44 lg:w-48',
                  !inView && 'opacity-0',
                  inView && 'animate-fadeUp',
                )}
                style={inView ? { animationDelay: `${index * 0.08}s` } : undefined}
              >
                <div className="ring-border relative aspect-3/4 overflow-hidden rounded-2xl shadow-sm ring-1 transition-all duration-500 group-hover/card:ring-2 group-hover/card:ring-white/80 group-hover/card:shadow-xl group-hover/card:shadow-black/30">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 12vw, (min-width: 640px) 25vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                  />
                  <div className="from-black/85 via-black/10 absolute inset-0 bg-linear-to-t to-transparent transition-colors duration-500 group-hover/card:from-black/90 group-hover/card:via-black/35" />

                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 p-4 text-center">
                    <span className="mb-1 flex size-10 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-500 group-hover/card:scale-105">
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
