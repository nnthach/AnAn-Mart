'use client';

import { ChevronUp, LayoutDashboard, Package, ShoppingCart, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { useAuth } from '@/context/AuthContext';
import { useI18n } from '@/context/I18nContext';
import { cn, getInitials } from '@/lib/utils';

const NAV_MANAGEMENT = [
  { key: 'dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { key: 'orders', href: '/admin/orders', icon: ShoppingCart },
];

const NAV_PRODUCTS = [
  { key: 'products', href: '/admin/products', icon: Package },
  { key: 'categories', href: '/admin/categories', icon: Tag },
];

interface NavItem {
  key: string;
  href: string;
  icon: React.ElementType;
}

function NavGroup({
  items,
  label,
  pathname,
  t,
}: {
  items: NavItem[];
  label: string;
  pathname: string;
  t: (key: string) => string;
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname === item.href;
          const title = t(`admin.sidebar.nav.${item.key}`);
          return (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                isActive={isActive}
                tooltip={title}
                className={cn(
                  'transition-colors',
                  isActive &&
                    'bg-primary/15 text-primary hover:bg-primary/20 hover:text-primary font-medium',
                )}
                render={<Link href={item.href} />}
              >
                <item.icon
                  className={cn('h-4 w-4', isActive ? 'text-primary' : 'text-muted-foreground')}
                />
                <span>{title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

export function AdminSidebar() {
  const pathname = usePathname();
  const { t } = useI18n();
  const { user, logout } = useAuth();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-sidebar-border border-b pb-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent"
              render={<Link href="/admin/dashboard" />}
            >
              <span className="border-primary/15 relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-white">
                <Image
                  src="/images/logo.png"
                  alt="An An Mart"
                  width={64}
                  height={64}
                  className="size-full object-cover"
                />
              </span>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="text-sidebar-foreground truncate font-bold">
                  {t('admin.brand.name')}
                </span>
                <span className="text-muted-foreground truncate text-xs">
                  {t('admin.brand.tagline')}
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavGroup
          items={NAV_MANAGEMENT}
          label={t('admin.sidebar.groups.management')}
          pathname={pathname}
          t={t}
        />

        <NavGroup
          items={NAV_PRODUCTS}
          label={t('admin.sidebar.groups.products')}
          pathname={pathname}
          t={t}
        />
      </SidebarContent>

      <SidebarFooter className="border-sidebar-border border-t pt-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  />
                }
              >
                <Avatar className="size-8 rounded-lg">
                  <AvatarFallback className="bg-primary/20 text-primary rounded-lg text-xs font-semibold">
                    {user ? getInitials(user.full_name) : 'AD'}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{user?.full_name ?? 'Admin'}</span>
                  <span className="text-muted-foreground truncate text-xs">
                    {user?.email ?? ''}
                  </span>
                </div>
                <ChevronUp className="text-muted-foreground ml-auto h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="min-w-52 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuItem>
                  <span>{t('admin.sidebar.user.profile')}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>{t('admin.sidebar.user.account')}</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive" onClick={logout}>
                  <span>{t('admin.sidebar.user.signOut')}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
