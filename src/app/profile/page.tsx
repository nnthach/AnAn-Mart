import { ProfileComingSoon } from '@/app/profile/_components/ProfileComingSoon';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header forceScrolled />
      <main className="flex-1">
        <ProfileComingSoon />
      </main>
      <Footer />
    </div>
  );
}
