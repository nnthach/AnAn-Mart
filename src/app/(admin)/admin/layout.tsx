import { notFound } from 'next/navigation';

import AdminLayoutClient from '@/components/layout/admin/AdminLayoutClient';
import { AuthProvider } from '@/context/AuthContext';
import { authService } from '@/server/services/auth';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await authService.getCurrentUser();

  if (!user || user.role !== 'admin') {
    notFound();
  }

  return (
    <AuthProvider initialUser={user}>
      <AdminLayoutClient>{children}</AdminLayoutClient>
    </AuthProvider>
  );
}
