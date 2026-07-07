import AboutCta from '@/app/(public)/about/_components/AboutCta';
import AboutHeroSection from '@/app/(public)/about/_components/AboutHeroSection';
import OurStory from '@/app/(public)/about/_components/OurStory';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

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
