import './globals.css';

import { Geist, Playfair_Display } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import {
  APP_DESCRIPTION,
  APP_NAME,
  STORE_ADDRESS,
  STORE_EMAIL,
  STORE_OPENING_HOURS,
  STORE_PHONE,
} from '@/config/constants';
import { env } from '@/config/env';
import { AuthProviderWrapper } from '@/context/AuthProviderWrapper';
import { I18nProvider } from '@/context/I18nContext';
import { cn } from '@/lib/utils';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });

const SITE_URL = env.NEXT_PUBLIC_SITE_URL;
const SEO_KEYWORDS = [
  'An An Mart',
  'Hoi An alcohol shop',
  'Hội An tạp hóa',
  'rượu vang nhập khẩu Hội An',
  'imported wine Hoi An',
  'whisky Hoi An',
  'premium grocery Hoi An',
  'gourmet snacks Hoi An',
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${APP_NAME} | Hoi An Grocery`, template: `%s | ${APP_NAME}` },
  description: APP_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: SITE_URL,
    siteName: APP_NAME,
    title: `${APP_NAME} | Hoi An Alcohol Shop`,
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} | Hoi An Alcohol Shop`,
    description: APP_DESCRIPTION,
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LiquorStore',
  name: APP_NAME,
  description: APP_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/images/banner2.png`,
  telephone: STORE_PHONE,
  email: STORE_EMAIL,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: STORE_ADDRESS,
    addressLocality: 'Hội An',
    addressRegion: 'Quảng Nam',
    addressCountry: 'VN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: env.NEXT_PUBLIC_STORE_LAT,
    longitude: env.NEXT_PUBLIC_STORE_LNG,
  },
  openingHours: STORE_OPENING_HOURS,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" className={cn('font-sans', geist.variable, playfairDisplay.variable)}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <I18nProvider>
          <AuthProviderWrapper>{children}</AuthProviderWrapper>
        </I18nProvider>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
