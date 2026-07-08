'use client';

import { LogIn, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import LanguageToggle from '@/components/features/LanguageToggle';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useAuth } from '@/context/AuthContext';
import { useI18n } from '@/context/I18nContext';
import { cn, getInitials } from '@/lib/utils';

const NAV_LINKS = [
  { key: 'home', href: '/' },
  { key: 'shop', href: '/shop' },
  { key: 'aboutUs', href: '/about' },
  { key: 'contact', href: '/contact' },
] as const;

interface HeaderProps {
  forceScrolled?: boolean;
}

export default function Header({ forceScrolled = false }: HeaderProps) {
  const { t } = useI18n();
  const { user, logout } = useAuth();

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const isScrolled = forceScrolled || hasScrolled;

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLinkActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const dashboardHref =
    user?.role === 'admin' ? '/admin' : user?.role === 'staff' ? '/staff' : null;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        isScrolled
          ? 'border-border bg-white/95 backdrop-blur'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href="/" className="flex w-[250px] shrink-0 items-center gap-2">
          <span className="border-primary/15 relative flex size-10 items-center justify-center overflow-hidden rounded-full border bg-white shadow-sm md:size-12">
            <Image
              src="/images/logo.png"
              alt="An An Mart"
              width={80}
              height={80}
              priority
              className="size-full object-cover"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-xs font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'hover:text-primary pb-1 tracking-wide uppercase transition-colors',
                isLinkActive(link.href)
                  ? 'text-primary border-primary border-b-2'
                  : isScrolled
                    ? 'text-gray-700'
                    : 'text-white',
              )}
            >
              {t(`header.nav.${link.key}`)}
            </Link>
          ))}
        </nav>

        <div className="flex hidden w-[250px] items-center justify-end gap-3 md:flex">
          <LanguageToggle isScrolled={isScrolled} />

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <button
                    type="button"
                    className="flex cursor-pointer items-center gap-2 rounded-full transition"
                    aria-label={t('header.dropdown.accountMenu')}
                  >
                    <Avatar size="default">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
                        {getInitials(user.full_name)}
                      </AvatarFallback>
                    </Avatar>
                  </button>
                }
              />

              <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-semibold">{user.full_name}</p>
                      <p className="text-muted-foreground text-xs capitalize">{user.role}</p>
                    </div>
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator />

                  {dashboardHref && (
                    <DropdownMenuItem render={<Link href={dashboardHref} />}>
                      {t('header.dropdown.dashboard')}
                    </DropdownMenuItem>
                  )}

                  <DropdownMenuItem render={<Link href="/profile" />}>
                    {t('header.dropdown.profile')}
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem variant="destructive" onClick={logout}>
                    {t('header.dropdown.signOut')}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              href="/signin"
              className={cn(
                'flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium tracking-wide transition-colors',
                isScrolled
                  ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  : 'border-white text-white hover:bg-white hover:text-gray-900',
              )}
            >
              <LogIn className="size-4" />
              {t('header.signIn')}
            </Link>
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle isScrolled={isScrolled} />

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger
              aria-label={t('header.menu.open')}
              className={cn(
                'rounded-lg p-2 transition-colors',
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10',
              )}
            >
              <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>An An Mart</SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-3 px-4">
                {NAV_LINKS.map((link) => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        className={cn(
                          'text-sm font-medium tracking-wide uppercase',
                          isLinkActive(link.href) ? 'text-primary' : 'text-gray-700',
                        )}
                      />
                    }
                  >
                    {t(`header.nav.${link.key}`)}
                  </SheetClose>
                ))}
              </nav>

              <SheetFooter>
                {user ? (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 px-1 pb-1">
                      <Avatar size="sm">
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
                          {getInitials(user.full_name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{user.full_name}</p>
                        <p className="text-muted-foreground text-xs capitalize">{user.role}</p>
                      </div>
                    </div>

                    {dashboardHref && (
                      <SheetClose
                        nativeButton={false}
                        render={
                          <Link
                            href={dashboardHref}
                            className="text-sm font-medium tracking-wide text-gray-700"
                          />
                        }
                      >
                        {t('header.dropdown.dashboard')}
                      </SheetClose>
                    )}

                    <SheetClose
                      nativeButton={false}
                      render={
                        <Link
                          href="/profile"
                          className="text-sm font-medium tracking-wide text-gray-700"
                        />
                      }
                    >
                      {t('header.dropdown.profile')}
                    </SheetClose>

                    <SheetClose
                      onClick={logout}
                      className="text-destructive border-destructive/30 hover:bg-destructive/10 flex items-center justify-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium tracking-wide transition-colors"
                    >
                      {t('header.dropdown.signOut')}
                    </SheetClose>
                  </div>
                ) : (
                  <SheetClose
                    nativeButton={false}
                    render={
                      <Link
                        href="/signin"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium tracking-wide transition-colors"
                      />
                    }
                  >
                    <LogIn className="size-4" />
                    {t('header.signIn')}
                  </SheetClose>
                )}
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
