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
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="animate-imageFade absolute inset-0 h-full w-full">
        <Image
          src="/images/banner2.png"
          alt="An An Mart — premium wines, spirits and Hoi An gifts"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 h-full w-full bg-linear-to-r from-black/95 via-black/70 to-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 md:px-8">
        <div
          ref={ref}
          className={cn(
            'max-w-2xl text-left',
            !inView && 'opacity-0',
            inView && 'animate-fadeInRight',
          )}
        >
          <p className="text-xs font-medium tracking-[0.25em] text-[#C9A24B] uppercase sm:text-sm">
            {t('homepage.hero.eyebrow')}
          </p>
          <h1 className="font-heading mt-4 text-4xl leading-[1.15] font-extrabold uppercase sm:text-5xl lg:text-6xl">
            <span className="block text-white">{t('homepage.hero.titleLine1')}</span>
            <span className="block text-white">
              {t('homepage.hero.titleLine2Prefix')}{' '}
              <span className="text-primary">{t('homepage.hero.titleHighlight')}</span>
            </span>
            <span className="mt-1 block text-2xl text-[#C9A24B] sm:text-3xl lg:text-4xl">
              {t('homepage.hero.titleLine3')}
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
            {t('homepage.hero.description')}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
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
              onClick={() =>
                document.getElementById('store-gallery')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <MapPin className="size-4" />
              {t('homepage.hero.visitStore')}
            </Button>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {TRUST_BADGES.map(({ key, icon: Icon }, index) => (
              <div
                key={key}
                className={cn('flex items-center gap-2', inView && 'animate-fadeUp')}
                style={inView ? { animationDelay: `${0.3 + index * 0.1}s` } : undefined}
              >
                <Icon className="text-primary size-5 shrink-0" />
                <div>
                  <dt className="text-xs font-semibold text-white sm:text-sm">
                    {t(`homepage.hero.trustBadges.${key}.title`)}
                  </dt>
                  <dd className="text-[11px] text-white/70 sm:text-xs">
                    {t(`homepage.hero.trustBadges.${key}.subtitle`)}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
