'use client';

import { LogIn, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import LanguageToggle from '@/components/features/LanguageToggle';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '/', active: true },
  { label: 'Shop', href: '/shop' },
  { label: 'About Us', href: '/about' },
  { label: 'Delivery', href: '/delivery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="border-primary/15 relative flex size-12 items-center justify-center overflow-hidden rounded-full border bg-white shadow-sm md:size-14">
            <Image
              src="/images/logo.png"
              alt="An An Mart"
              width={100}
              height={100}
              priority
              className="size-full object-cover"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'hover:text-primary pb-1 tracking-wide uppercase transition-colors',
                link.active
                  ? 'text-primary border-primary border-b-2'
                  : isScrolled
                    ? 'text-gray-700'
                    : 'text-white',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
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
            Sign In
          </Link>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Đóng menu' : 'Mở menu'}
          className={cn(
            'rounded-lg p-2 transition-colors md:hidden',
            isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10',
          )}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isMenuOpen ? (
        <nav className="border-border flex flex-col gap-3 border-t bg-white px-4 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium tracking-wide uppercase',
                link.active ? 'text-primary' : 'text-gray-700',
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
