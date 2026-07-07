'use client';

import { LogIn, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import LanguageToggle from '@/components/features/LanguageToggle';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useI18n } from '@/context/I18nContext';
import { cn } from '@/lib/utils';

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

          <Link
            href="/sign-in"
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
                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href="/sign-in"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium tracking-wide transition-colors"
                    />
                  }
                >
                  <LogIn className="size-4" />
                  {t('header.signIn')}
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
