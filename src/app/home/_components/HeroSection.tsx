import { Headset, MapPin, ShieldCheck, ShoppingBag, Truck } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

const TRUST_BADGES = [
  { icon: Truck, title: 'Fast Delivery', subtitle: 'In Hoi An Area' },
  { icon: ShieldCheck, title: 'Imported Products', subtitle: '100% Genuine' },
  { icon: Headset, title: 'Support 24/7', subtitle: 'Support Any Time' },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
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

      <div className="relative z-10 mx-auto max-w-2xl px-4 py-24 text-center md:px-8">
        <p className="font-heading text-3xl leading-tight font-medium text-white italic sm:text-4xl">
          Your Premium
        </p>
        <h1 className="font-heading text-primary text-4xl leading-tight font-bold sm:text-5xl">
          Grocery &amp; Wine
        </h1>
        <p className="font-heading text-3xl leading-tight font-medium text-white sm:text-4xl">
          Destination in Hoi An
        </p>

        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
          Discover imported wines, premium spirits, gourmet snacks, coffee, souvenirs, and daily
          essentials — all in one trusted local store.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button size="lg" className="gap-2 rounded-full px-6">
            <ShoppingBag className="size-4" />
            Shop Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-accent gap-2 rounded-full bg-white px-6"
          >
            <MapPin className="size-4" />
            Visit Our Store
          </Button>
        </div>

        <dl className="mt-10 grid grid-cols-3 gap-4">
          {TRUST_BADGES.map(({ icon: Icon, title, subtitle }) => (
            <div key={title} className="flex flex-col items-center gap-1">
              <Icon className="size-5 text-red-400" />
              <dt className="text-xs font-semibold text-white sm:text-sm">{title}</dt>
              <dd className="text-[11px] text-white/70 sm:text-xs">{subtitle}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
