import './globals.css';

import { Geist } from 'next/font/google';

import { cn } from '@/lib/utils';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';


const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Duotech Next.js App',
  description: 'Next.js app theo kiến trúc chuẩn Duotech.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" className={cn('font-sans', geist.variable)}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
