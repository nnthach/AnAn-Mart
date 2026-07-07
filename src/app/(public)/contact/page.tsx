import ContactHeroSection from '@/app/(public)/contact/_components/ContactHeroSection';
import ContactSection from '@/app/(public)/contact/_components/ContactSection';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

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
