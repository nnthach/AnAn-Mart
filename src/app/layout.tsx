import './globals.css';

import { Geist, Playfair_Display } from 'next/font/google';

import { I18nProvider } from '@/context/I18nContext';
import { cn } from '@/lib/utils';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'An An Mart | Hoi An Alcohol Shop',
  description:
    'Premium grocery & wine destination in Hoi An — imported wines, spirits, gourmet snacks, coffee, souvenirs and daily essentials.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" className={cn('font-sans', geist.variable, playfairDisplay.variable)}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
