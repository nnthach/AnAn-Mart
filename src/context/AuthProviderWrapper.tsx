import { AuthProvider } from '@/context/AuthContext';
import { authService } from '@/server/services/auth';

export async function AuthProviderWrapper({ children }: { children: React.ReactNode }) {
  let initialUser = null;

  try {
    initialUser = await authService.getCurrentUser();
  } catch {
    initialUser = null;
  }

  return <AuthProvider initialUser={initialUser}>{children}</AuthProvider>;
}
