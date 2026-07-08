'use client';

import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import type { UserItem } from '@/types';

import { useI18n } from './I18nContext';

export interface AuthUser extends UserItem {
  staff?: {
    id: string;
    is_active: boolean;
  } | null;
}

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
    try {
      await fetch('/api/auth/signout', { method: 'POST' });
      toast.success(locale === 'vi' ? 'Đăng xuất thành công!' : 'Sign out successfully!');
    } catch {
      toast.error(locale === 'vi' ? 'Đăng xuất thất bại!' : 'Failed to sign out!');
    } finally {
      setUser(null);
      router.push('/');
      router.refresh();
    }
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
