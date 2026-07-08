import { AuthProvider } from '@/context/AuthContext';
import { authService } from '@/server/services/auth';

export async function AuthProviderWrapper({ children }: { children: React.ReactNode }) {
  const initialUser = await authService.getCurrentUser();

  return <AuthProvider initialUser={initialUser}>{children}</AuthProvider>;
}
