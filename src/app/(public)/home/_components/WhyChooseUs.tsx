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
    <section className="mx-auto max-w-7xl px-4 pb-12 md:px-8">
      <div className="border-border rounded-2xl border bg-white p-8 shadow-sm sm:p-14">
        <div className="mb-12 flex items-center justify-center gap-4">
          <span className="via-primary h-px w-10 bg-linear-to-r from-transparent to-transparent" />
          <h2 className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            {t('homepage.whyChooseUs.heading')}
          </h2>
          <span className="via-primary h-px w-10 bg-linear-to-r from-transparent to-transparent" />
        </div>

        <div ref={ref} className="relative grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div
            className="bg-border pointer-events-none absolute inset-x-0 top-8 hidden h-px lg:block"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-8 hidden h-px overflow-hidden lg:block"
            aria-hidden
          >
            <span className="animate-circuitFlow from-primary/0 via-primary to-primary/0 absolute top-1/2 h-px w-32 -translate-y-1/2 bg-linear-to-r blur-[1px]" />
          </div>

          {FEATURES.map(({ key, icon: Icon }, index) => (
            <div
              key={key}
              className={cn(
                'relative flex flex-col items-center text-center',
                !inView && 'opacity-0',
                inView && 'animate-scaleIn',
              )}
              style={inView ? { animationDelay: `${index * 0.08}s` } : undefined}
            >
              <span className="relative mb-4 flex size-16 items-center justify-center">
                <span
                  className="border-primary/50 absolute inset-0 animate-ping rounded-full border-2"
                  style={{ animationDelay: `${index * 0.2}s`, animationDuration: '2.4s' }}
                  aria-hidden
                />
                <span className="border-primary text-primary relative flex size-16 items-center justify-center rounded-full border-2 bg-white">
                  <Icon className="size-6" strokeWidth={1.5} />
                </span>
              </span>
              <h3 className="text-sm font-semibold tracking-wide text-gray-900 uppercase">
                {t(`homepage.whyChooseUs.features.${key}.title`)}
              </h3>
              <p className="mt-1.5 max-w-[16ch] text-xs leading-snug text-gray-500">
                {t(`homepage.whyChooseUs.features.${key}.subtitle`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
