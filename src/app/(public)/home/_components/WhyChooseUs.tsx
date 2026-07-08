'use client';

import { BadgeCheck, CreditCard, Gift, Headset, ShoppingBag, Truck } from 'lucide-react';

import { useI18n } from '@/context/I18nContext';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const FEATURES = [
  { key: 'wideSelection', icon: Gift },
  { key: 'bestQuality', icon: BadgeCheck },
  { key: 'fastDelivery', icon: Truck },
  { key: 'support', icon: Headset },
  { key: 'giftWrapping', icon: ShoppingBag },
  { key: 'securePayment', icon: CreditCard },
] as const;

export function WhyChooseUs() {
  const { t } = useI18n();
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="border-border rounded-2xl border bg-white p-6 shadow-sm sm:p-10">
        <div className="mb-10 flex items-center justify-center gap-4">
          <span className="via-primary h-px w-10 bg-linear-to-r from-transparent to-transparent" />
          <h2 className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            {t('homepage.whyChooseUs.heading')}
          </h2>
          <span className="via-primary h-px w-10 bg-linear-to-r from-transparent to-transparent" />
        </div>

        <div ref={ref} className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {FEATURES.map(({ key, icon: Icon }, index) => (
            <div
              key={key}
              className={cn(
                'flex flex-col items-center text-center',
                !inView && 'opacity-0',
                inView && 'animate-scaleIn',
              )}
              style={inView ? { animationDelay: `${index * 0.08}s` } : undefined}
            >
              <span className="border-primary text-primary mb-3 flex size-12 items-center justify-center rounded-full border-2">
                <Icon className="size-5" strokeWidth={1.5} />
              </span>
              <h3 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
                {t(`homepage.whyChooseUs.features.${key}.title`)}
              </h3>
              <p className="mt-1 text-[11px] leading-snug text-gray-500">
                {t(`homepage.whyChooseUs.features.${key}.subtitle`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
