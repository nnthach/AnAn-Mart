import ShopHeroSection from '@/app/shop/_components/ShopHeroSection';
import ShopSection from '@/app/shop/_components/ShopSection';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function ShopPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ShopHeroSection />
        <ShopSection />
      </main>
      <Footer />
    </div>
  );
}
