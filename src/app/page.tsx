import { CategoryGrid } from '@/app/home/_components/CategoryGrid';
import { FeaturedCollections } from '@/app/home/_components/FeaturedCollections';
import { GiftBanner } from '@/app/home/_components/GiftBanner';
import { HeroSection } from '@/app/home/_components/HeroSection';
import { StoreGallery } from '@/app/home/_components/StoreGallery';
import { WhyChooseUs } from '@/app/home/_components/WhyChooseUs';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-linear-to-r from-[#f8f8f8] to-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoryGrid />
        <FeaturedCollections />
        <GiftBanner />
        <WhyChooseUs />
        <StoreGallery />
      </main>
      <Footer />
    </div>
  );
}
