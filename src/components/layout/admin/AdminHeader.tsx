'use client';

import { Bell } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LanguageToggle from '@/components/features/LanguageToggle';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useAuth } from '@/context/AuthContext';
import { useI18n } from '@/context/I18nContext';
import { getInitials } from '@/lib/utils';

const BREADCRUMB_MAP: Record<string, string> = {
  dashboard: 'dashboard',
  categories: 'categories',
  ingredients: 'ingredients',
  orders: 'orders',
  products: 'products',
  reviews: 'reviews',
  customers: 'customers',
  settings: 'settings',
  staffs: 'staffs',
  stores: 'stores',
  'store-inventories': 'storeInventories',
};

function useBreadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  // segments: ["admin", "dashboard"] or ["admin", "products", "123"]
  const crumbs = segments.slice(1).map((seg, idx) => ({
    label: BREADCRUMB_MAP[seg] ?? seg,
    href: '/' + segments.slice(0, idx + 2).join('/'),
    isLast: idx === segments.slice(1).length - 1,
  }));
  return crumbs;
}

export function AdminHeader() {
  const crumbs = useBreadcrumbs();
  const { t } = useI18n();
  const { user, logout } = useAuth();

  return (
    <header className="border-border bg-background sticky top-0 z-30 flex h-14 items-center gap-2 border-b px-6 backdrop-blur-sm">
      <SidebarTrigger className="text-muted-foreground hover:text-foreground -ml-1" />

      <Separator orientation="vertical" className="mr-2 h-4" />

      <Breadcrumb className="flex-1">
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink
              render={<Link href="/" className="text-muted-foreground hover:text-foreground" />}
            >
              {t('admin.brand.name')}
            </BreadcrumbLink>
          </BreadcrumbItem>
          {crumbs.map((crumb) => (
            <span key={crumb.href} className="flex items-center gap-1.5">
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                {crumb.isLast ? (
                  <BreadcrumbPage className="font-medium">
                    {t(`admin.headerBreadcrumb.${crumb.label}`)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    render={
                      <Link
                        href={crumb.href}
                        className="text-muted-foreground hover:text-foreground"
                      />
                    }
                  >
                    {t(`admin.headerBreadcrumb.${crumb.label}`)}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </span>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground relative"
          aria-label={t('admin.header.notifications')}
        >
          <Bell className="h-5 w-5" />
          <span className="bg-primary absolute top-1.5 right-1.5 h-2 w-2 rounded-full" />
        </Button>

        <LanguageToggle isScrolled />

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label={t('admin.header.account')}
              />
            }
          >
            <Avatar className="size-8">
              <AvatarFallback className="bg-primary/20 text-primary text-xs font-semibold">
                {user ? getInitials(user.full_name) : 'AD'}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuGroup>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col gap-0.5">
                  <p className="truncate text-sm font-semibold">{user?.full_name ?? 'Admin'}</p>
                  <p className="text-muted-foreground truncate text-xs">{user?.email ?? ''}</p>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>{t('admin.headerDropdown.profile')}</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive" onClick={logout}>
              {t('admin.headerDropdown.signOut')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
