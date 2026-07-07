'use client';

import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

import { useI18n } from '@/context/I18nContext';

import LocationMap from './LocationMap';

export function StoreGallery() {
  const { t } = useI18n();

  const STORE_INFO = [
    { icon: MapPin, label: '191 Lý Thường Kiệt,\nHội An, Quảng Nam, Vietnam' },
    { icon: Clock, label: `${t('homepage.storeGallery.openDaily')}\n8:00 AM - 12:30 AM` },
    { icon: Phone, label: '+84 90 123 45 67' },
    { icon: Mail, label: 'info@ananmarthoian.com' },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 md:px-8">
      <div className="grid lg:grid-cols-2">
        <div className="grid h-100 grid-cols-[minmax(220px,260px)_1fr] overflow-hidden rounded-t-2xl shadow-sm lg:rounded-tl-2xl lg:rounded-tr-none lg:rounded-bl-2xl">
          <div className="bg-primary flex h-full flex-col justify-center gap-4 p-6 text-white">
            <h2 className="font-heading text-lg font-bold tracking-wide uppercase">
              {t('homepage.storeGallery.visitOurStore')}
            </h2>
            <ul className="space-y-3 text-sm text-white/90">
              {STORE_INFO.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-2">
                  <Icon className="mt-0.5 size-4 shrink-0" />
                  <span className="whitespace-pre-line">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-full">
            <Image
              src="/images/store_image.jpg"
              alt="An An Mart store interior"
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="h-100 overflow-hidden rounded-b-2xl shadow-sm lg:rounded-tr-2xl lg:rounded-br-2xl lg:rounded-bl-none">
          <LocationMap />
        </div>
      </div>
    </section>
  );
}
