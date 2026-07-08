'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useAuth } from '@/context/AuthContext';
import type { UserRoleEnum } from '@/types';

const ROLE_HOME_PATH: Record<UserRoleEnum, string> = {
  admin: '/admin/dashboard',
  staff: '/staff/dashboard',
  customer: '/',
};

interface RolePermissionProps {
  allowedRoles: UserRoleEnum[];
  children: React.ReactNode;
}

export const RolePermission: React.FC<RolePermissionProps> = ({ allowedRoles, children }) => {
  const { user } = useAuth();
  const router = useRouter();

  const hasPermission = !!user && allowedRoles.includes(user.role);

  useEffect(() => {
    if (!user) {
      router.replace('/');
      return;
    }

    if (!hasPermission) {
      router.replace(ROLE_HOME_PATH[user.role] ?? '/');
    }
  }, [user, hasPermission, router]);

  if (!hasPermission) return null;

  return <>{children}</>;
};
