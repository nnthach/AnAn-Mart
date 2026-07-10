import { CategoryGrid } from '@/app/(public)/home/_components/CategoryGrid';
import { FeaturedCollections } from '@/app/(public)/home/_components/FeaturedCollections';
import { FeaturedProducts } from '@/app/(public)/home/_components/FeaturedProducts';
import { GiftBanner } from '@/app/(public)/home/_components/GiftBanner';
import { HeroSection } from '@/app/(public)/home/_components/HeroSection';
import ScrollToTopButton from '@/app/(public)/home/_components/ScrollToTopButton';
import { StoreGallery } from '@/app/(public)/home/_components/StoreGallery';
import { WhyChooseUs } from '@/app/(public)/home/_components/WhyChooseUs';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-linear-to-r from-[#f8f8f8] to-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts />
        <FeaturedCollections />
        <GiftBanner />
        <WhyChooseUs />
        <StoreGallery />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
