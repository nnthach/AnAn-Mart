import { redirect } from 'next/navigation';

import { authService } from '@/server/services/auth';
import type { UserRoleEnum } from '@/types';

const ROLE_HOME_PATH: Record<UserRoleEnum, string> = {
  admin: '/admin/dashboard',
  staff: '/staff/dashboard',
  customer: '/',
};

function isValidRole(role: string): role is UserRoleEnum {
  return role === 'admin' || role === 'staff' || role === 'customer';
}

interface Props {
  allowedRoles: UserRoleEnum[];
  children: React.ReactNode;
}

export async function RolePermission({ allowedRoles, children }: Props) {
  const user = await authService.getCurrentUser();

  if (!user) {
    redirect('/signin');
  }

  if (!isValidRole(user.role) || !allowedRoles.includes(user.role)) {
    redirect(isValidRole(user.role) ? (ROLE_HOME_PATH[user.role] ?? '/') : '/');
  }

  return <>{children}</>;
}
