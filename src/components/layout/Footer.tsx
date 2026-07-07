'use client';

import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { useI18n } from '@/context/I18nContext';

const QUICK_LINKS = [
  { key: 'shop', href: '/shop' },
  { key: 'aboutUs', href: '/about' },
  { key: 'delivery', href: '/delivery' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/contact' },
  { key: 'terms', href: '/terms' },
] as const;

const POPULAR_CATEGORIES = [
  'wine',
  'whisky',
  'craftBeer',
  'snacks',
  'coffee',
  'souvenirs',
  'travelEssentials',
] as const;

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    path: 'M13.5 9H15V6h-1.5C11.6 6 10 7.6 10 9.5V11H8v3h2v7h3v-7h2.1l.4-3H13v-1.1c0-.6.4-.9 1-.9Z',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    path: 'M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 5.8a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6ZM16.3 8a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8ZM17 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1.5 13a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 17V7A1.5 1.5 0 0 1 7 5.5h10A1.5 1.5 0 0 1 18.5 7v10Z',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/8490123456',
    path: 'M12 3a9 9 0 0 0-7.8 13.4L3 21l4.7-1.2A9 9 0 1 0 12 3Zm0 16.2a7.2 7.2 0 0 1-3.7-1l-.3-.2-2.8.7.7-2.7-.2-.3A7.2 7.2 0 1 1 12 19.2Zm4-5.4c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1s-.6.7-.7.8-.3.2-.5.1a5.9 5.9 0 0 1-1.7-1.1 6.5 6.5 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.3-.4.2-.3v-.3c0-.1-.5-1.2-.7-1.6s-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.8 2c0 1.2.8 2.3 1 2.5s1.6 2.5 3.9 3.4a4.4 4.4 0 0 0 2.6.5 2.2 2.2 0 0 0 1.5-1 1.8 1.8 0 0 0 .1-1c-.1-.2-.2-.2-.4-.3Z',
  },
];

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-border border-t bg-gray-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 md:px-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="border-primary/15 relative flex size-10 items-center justify-center overflow-hidden rounded-full border bg-white shadow-sm">
              <Image
                src="/images/logo.png"
                alt="An An Mart"
                width={100}
                height={100}
                className="size-full object-cover"
              />
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-600">{t('footer.tagline')}</p>
          <div className="mt-4 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="border-primary text-primary hover:bg-primary flex size-8 items-center justify-center rounded-full border transition-colors hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-primary text-xs font-semibold tracking-widest uppercase">
            {t('footer.contactTitle')}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <MapPin className="text-primary mt-0.5 size-4 shrink-0" />
              191 Ly Thuong Kiet, Hoi An, Quang Nam, Vietnam
            </li>
            <li className="flex items-start gap-2">
              <Clock className="text-primary mt-0.5 size-4 shrink-0" />
              {t('footer.openDaily')}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="text-primary mt-0.5 size-4 shrink-0" />
              +84 90 123 45 67
            </li>
            <li className="flex items-start gap-2">
              <Mail className="text-primary mt-0.5 size-4 shrink-0" />
              info@ananmarthoian.com
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:contents">
          <div>
            <h3 className="text-primary text-xs font-semibold tracking-widest uppercase">
              {t('footer.quickLinksTitle')}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-600">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {t(`footer.quickLinks.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-primary text-xs font-semibold tracking-widest uppercase">
              {t('footer.popularCategoriesTitle')}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-600">
              {POPULAR_CATEGORIES.map((key) => (
                <li key={key} className="hover:text-primary transition-colors">
                  {t(`footer.popularCategories.${key}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-border border-t">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-gray-500 md:px-8">
          © {new Date().getFullYear()} {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}
