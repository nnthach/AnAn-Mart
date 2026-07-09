import ContactHeroSection from '@/app/(public)/contact/_components/ContactHeroSection';
import ContactSection from '@/app/(public)/contact/_components/ContactSection';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liên Hệ',
  description:
    'Liên hệ An An Mart tại 191 Lý Thường Kiệt, Hội An — gọi điện, email hoặc ghé trực tiếp cửa hàng để được tư vấn.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ContactHeroSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
