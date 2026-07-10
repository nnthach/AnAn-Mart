'use client';

import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { signOutAction } from '@/server/actions/auth';
import type { AuthUser } from '@/types';

import { useI18n } from './I18nContext';

interface AuthContextType {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
  initialUser,
}: {
  children: React.ReactNode;
  initialUser: AuthUser | null;
}) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const router = useRouter();
  const { locale } = useI18n();

  useEffect(() => {
    setUser(initialUser); // đồng bộ khi initialUser đổi
  }, [initialUser]);

  const logout = async () => {
    const result = await signOutAction();

    if (result.success) {
      toast.success(locale === 'vi' ? 'Đăng xuất thành công!' : 'Signed out successfully!');
    } else {
      toast.error(locale === 'vi' ? 'Đăng xuất thất bại!' : 'Failed to sign out!');
    }

    setUser(null);
    router.push('/');
    router.refresh();
  };

  return <AuthContext.Provider value={{ user, setUser, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('failed to init useAuth');
  }

  return context;
}
