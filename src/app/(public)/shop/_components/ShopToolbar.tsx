'use client';

import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Input } from '@/components/ui/input';
import { useI18n } from '@/context/I18nContext';
import { useDebounce } from '@/hooks/useDebounce';
import type { CategoryItem } from '@/types';

type SortOption = 'featured' | 'price_asc' | 'price_desc';

const SORT_OPTIONS: SortOption[] = ['featured', 'price_asc', 'price_desc'];
const PER_PAGE_OPTIONS = [8, 12, 16, 24];
const DEFAULT_PER_PAGE = 12;

const SELECT_CLASS =
  'h-10 rounded-md border bg-transparent px-3 text-sm font-medium text-gray-700 outline-none transition-colors focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50';

interface ShopToolbarProps {
  categories: CategoryItem[];
  totalCount: number;
}

export function ShopToolbar({ categories, totalCount }: ShopToolbarProps) {
  const { t, locale } = useI18n();
  const router = useRouter();
  const searchParams = useSearchParams();

  // param
  const activeCategory = searchParams.get('category') ?? 'all';
  const sortBy = (searchParams.get('sort') as SortOption | null) ?? 'featured';
  const perPage = Number(searchParams.get('limit')) || DEFAULT_PER_PAGE;

  // search
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') ?? '');
  const debouncedQuery = useDebounce(searchQuery, 300);
  const isFirstRender = useRef(true);

  // run param
  const pushParams = useCallback(
    (updates: Record<string, string | undefined>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, value]) => {
        if (value) params.set(key, value);
        else params.delete(key);
      });
      params.set('page', '1');
      router.push(`?${params.toString()}`);
    },
    [searchParams, router],
  );

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    pushParams({ search: debouncedQuery || undefined });
  }, [debouncedQuery, pushParams]);

  const sortLabels: Record<SortOption, string> = {
    featured: t('shopPage.sortBy.featured'),
    price_asc: t('shopPage.sortBy.priceAsc'),
    price_desc: t('shopPage.sortBy.priceDesc'),
  };

  return (
    <div className="border-border mb-8 flex flex-col gap-4 border-b pb-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap gap-3">
        <select
          value={activeCategory}
          onChange={(event) =>
            pushParams({ category: event.target.value === 'all' ? undefined : event.target.value })
          }
          className={SELECT_CLASS}
        >
          <option value="all">
            {t('shopPage.filtersAll')} ({totalCount})
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.slug[locale]}>
              {category.name[locale]}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(event) =>
            pushParams({ sort: event.target.value === 'featured' ? undefined : event.target.value })
          }
          className={SELECT_CLASS}
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {sortLabels[option]}
            </option>
          ))}
        </select>

        <select
          value={perPage}
          onChange={(event) =>
            pushParams({
              limit:
                event.target.value === String(DEFAULT_PER_PAGE) ? undefined : event.target.value,
            })
          }
          className={SELECT_CLASS}
        >
          {PER_PAGE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option} {t('shopPage.perPageSuffix')}
            </option>
          ))}
        </select>
      </div>

      <div className="relative w-full lg:w-72">
        <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-400" />
        <Input
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder={t('shopPage.searchPlaceholder')}
          className={`${SELECT_CLASS} pl-9`}
        />
      </div>
    </div>
  );
}
