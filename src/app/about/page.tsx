import AboutCta from '@/app/about/_components/AboutCta';
import AboutHeroSection from '@/app/about/_components/AboutHeroSection';
import OurStory from '@/app/about/_components/OurStory';
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
