import AboutCta from '@/app/(public)/about/_components/AboutCta';
import AboutHeroSection from '@/app/(public)/about/_components/AboutHeroSection';
import OurStory from '@/app/(public)/about/_components/OurStory';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Về Chúng Tôi',
  description:
    'An An Mart là cửa hàng gia đình đáng tin cậy tại Hội An, phục vụ rượu vang, rượu mạnh và nhu yếu phẩm chất lượng cho cả người dân địa phương và du khách.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AboutHeroSection />
        <OurStory />
        <AboutCta />
      </main>
      <Footer />
    </div>
  );
}
