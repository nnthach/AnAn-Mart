'use client';

import { Headset, MapPin, ShieldCheck, ShoppingBag, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { useI18n } from '@/context/I18nContext';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const TRUST_BADGES = [
  { key: 'fastDelivery', icon: Truck },
  { key: 'importedProducts', icon: ShieldCheck },
  { key: 'support', icon: Headset },
] as const;

export function HeroSection() {
  const { t } = useI18n();
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="animate-imageFade absolute inset-0">
        <Image
          src="/images/banner.png"
          alt="An An Mart — premium wines, spirits and Hoi An gifts"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div
        ref={ref}
        className={cn(
          'relative z-10 mx-auto max-w-2xl px-4 py-24 text-center md:px-8',
          !inView && 'opacity-0',
          inView && 'animate-fadeInUp',
        )}
      >
        <p className="font-heading text-3xl leading-tight font-medium text-white italic sm:text-4xl">
          {t('homepage.hero.eyebrow')}
        </p>
        <h1 className="font-heading text-primary text-4xl leading-tight font-bold sm:text-5xl">
          {t('homepage.hero.titleHighlight')}
        </h1>
        <p className="font-heading text-3xl leading-tight font-medium text-white sm:text-4xl">
          {t('homepage.hero.subtitle')}
        </p>

        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
          {t('homepage.hero.description')}
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href={'/shop'}>
            <Button size="lg" className="gap-2 rounded-full px-6">
              <ShoppingBag className="size-4" />
              {t('homepage.hero.shopNow')}
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-accent gap-2 rounded-full bg-white px-6"
          >
            <MapPin className="size-4" />
            {t('homepage.hero.visitStore')}
          </Button>
        </div>

        <dl className="mt-10 grid grid-cols-3 gap-4">
          {TRUST_BADGES.map(({ key, icon: Icon }, index) => (
            <div
              key={key}
              className={cn('flex flex-col items-center gap-1', inView && 'animate-fadeUp')}
              style={inView ? { animationDelay: `${0.3 + index * 0.1}s` } : undefined}
            >
              <Icon className="size-5 text-red-400" />
              <dt className="text-xs font-semibold text-white sm:text-sm">
                {t(`homepage.hero.trustBadges.${key}.title`)}
              </dt>
              <dd className="text-[11px] text-white/70 sm:text-xs">
                {t(`homepage.hero.trustBadges.${key}.subtitle`)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
