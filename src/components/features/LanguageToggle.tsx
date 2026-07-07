'use client';

import { Globe } from 'lucide-react';

import { useI18n } from '@/context/I18nContext';
import type { Locale } from '@/lib/translations';
import { cn } from '@/lib/utils';

const NEXT_LOCALE: Record<Locale, Locale> = { en: 'vi', vi: 'en' };

export default function LanguageToggle({ isScrolled }: { isScrolled?: boolean }) {
  const { locale, setLocale } = useI18n();

  return (
    <button
      type="button"
      onClick={() => setLocale(NEXT_LOCALE[locale])}
      aria-label={`Switch language to ${NEXT_LOCALE[locale].toUpperCase()}`}
      className={cn(
        'group flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium tracking-wide uppercase transition-colors',
        isScrolled
          ? 'hover:border-primary hover:text-primary border-gray-200 text-gray-700'
          : 'border-white/30 text-white/90 hover:border-white hover:text-white',
      )}
    >
      <Globe className="size-4 transition-transform duration-500 group-hover:rotate-180" />
      <span>{locale}</span>
    </button>
  );
}
