'use client';

import { Clock, Mail, Phone, MapPin as MapPinIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import LocationMap from '@/components/features/LocationMap';
import { useI18n } from '@/context/I18nContext';

export default function ContactSection() {
  const { t, locale } = useI18n();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const CONTACT_INFO = [
    {
      icon: MapPinIcon,
      label:
        locale === 'vi'
          ? '191 Lý Thường Kiệt, Phường Hội An Tây, Thành phố Đà Nẵng, Việt Nam'
          : '191 Ly Thuong Kiet, Phuong Hoi An Tay, Thanh pho Da Nang, Viet Nam',
    },
    { icon: Clock, label: '8:00 AM - 12:30 AM' },
    { icon: Phone, label: '+84 90 123 45 67' },
    { icon: Mail, label: 'info@ananmarthoian.com' },
  ] as const;

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
      <div className="grid lg:grid-cols-2">
        <div className="grid h-100 grid-cols-[minmax(220px,260px)_1fr] overflow-hidden rounded-t-2xl shadow-sm lg:rounded-tl-2xl lg:rounded-tr-none lg:rounded-bl-2xl">
          <div className="bg-primary flex h-full flex-col justify-center gap-4 p-6 text-white">
            <h2 className="font-heading text-lg font-bold tracking-wide uppercase">
              {t('contactPage.infoHeading')}
            </h2>
            <ul className="space-y-3 text-sm text-white/90">
              {CONTACT_INFO.map(({ icon: Icon, label }) => (
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

      <div className="border-border mx-auto mt-14 max-w-2xl border-t pt-14">
        <h2 className="font-heading text-primary text-center text-2xl font-bold sm:text-3xl">
          {t('contactPage.formHeading')}
        </h2>

        {isSubmitted ? (
          <p className="mt-8 text-center text-sm text-gray-600">
            {t('contactPage.submitButton')} ✓
          </p>
        ) : (
          <form
            className="mt-8 flex flex-col gap-5"
            onSubmit={(event) => {
              event.preventDefault();
              setIsSubmitted(true);
            }}
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                {t('contactPage.nameLabel')}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={t('contactPage.namePlaceholder')}
                className="focus-visible:ring-ring/50 mt-1.5 h-11 w-full rounded-md border border-gray-300 px-3 text-sm outline-none focus-visible:ring-3"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                {t('contactPage.emailLabel')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t('contactPage.emailPlaceholder')}
                className="focus-visible:ring-ring/50 mt-1.5 h-11 w-full rounded-md border border-gray-300 px-3 text-sm outline-none focus-visible:ring-3"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                {t('contactPage.messageLabel')}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={t('contactPage.messagePlaceholder')}
                className="focus-visible:ring-ring/50 mt-1.5 w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus-visible:ring-3"
              />
            </div>

            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 mt-2 rounded-lg py-3 text-sm font-semibold text-white transition-colors"
            >
              {t('contactPage.submitButton')}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
