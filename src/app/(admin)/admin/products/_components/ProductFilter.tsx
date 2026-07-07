'use client';

import { Filter, Search, X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useI18n } from '@/context/I18nContext';
import { useDebounce } from '@/hooks/useDebounce';

const DEFAULT_LIMIT = 8;

const LIMIT_OPTIONS = [DEFAULT_LIMIT, 10, 15, 20, 50];

interface FilterState {
  is_active: boolean | undefined;
  order: 'asc' | 'desc';
  limit: number;
}

const DEFAULT_FILTER: FilterState = {
  is_active: undefined,
  order: 'desc',
  limit: DEFAULT_LIMIT,
};

function getFilterFromSearchParams(searchParams: URLSearchParams): FilterState {
  const isActiveParam = searchParams.get('is_active');
  const orderParam = searchParams.get('order');
  const limitParam = searchParams.get('limit');

  return {
    is_active: isActiveParam === null ? undefined : isActiveParam === 'true',
    order: orderParam === 'asc' ? 'asc' : DEFAULT_FILTER.order,
    limit: limitParam ? Number(limitParam) || DEFAULT_LIMIT : DEFAULT_LIMIT,
  };
}

export default function ProductFilter() {
  const { t } = useI18n();
  const router = useRouter();
  const searchParams = useSearchParams();

  const appliedFilter = getFilterFromSearchParams(searchParams);
  const [tempFilter, setTempFilter] = useState<FilterState>(appliedFilter);

  const [search, setSearch] = useState(searchParams.get('search') ?? '');
  const debouncedSearch = useDebounce(search, 500);
  const isFirstRender = useRef(true);

  const pushParams = (filter: FilterState, searchValue: string) => {
    const params = new URLSearchParams();

    if (filter.is_active !== undefined) params.set('is_active', String(filter.is_active));
    if (filter.order !== DEFAULT_FILTER.order) params.set('order', filter.order);
    if (filter.limit !== DEFAULT_FILTER.limit) params.set('limit', String(filter.limit));
    if (searchValue) params.set('search', searchValue);
    params.set('page', '1');

    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    pushParams(appliedFilter, debouncedSearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  const handleApply = () => pushParams(tempFilter, search);

  const handleClearFilter = () => {
    setTempFilter(DEFAULT_FILTER);
    setSearch('');
    pushParams(DEFAULT_FILTER, '');
  };

  const isFilterActive =
    appliedFilter.is_active !== undefined ||
    appliedFilter.order !== DEFAULT_FILTER.order ||
    appliedFilter.limit !== DEFAULT_FILTER.limit;

  const activeFilterCount =
    (appliedFilter.is_active !== undefined ? 1 : 0) +
    (appliedFilter.order !== DEFAULT_FILTER.order ? 1 : 0) +
    (appliedFilter.limit !== DEFAULT_FILTER.limit ? 1 : 0);

  return (
    <div className="flex items-center gap-3">
      <Popover onOpenChange={(isOpen) => isOpen && setTempFilter(appliedFilter)}>
        <PopoverTrigger render={<Button variant="outline" className="gap-2" />}>
          <Filter className="h-4 w-4" />
          {t('button.filter')}
          {activeFilterCount > 0 && (
            <span className="bg-primary text-primary-foreground ml-1 rounded-full px-1.5 py-0.5 text-[10px] leading-none font-semibold">
              {activeFilterCount}
            </span>
          )}
        </PopoverTrigger>
        <PopoverContent align="start" className="w-64">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <p className="text-sm leading-none font-medium">
                {t('admin.productsPage.filters.statusLabel')}
              </p>
              <select
                className="h-9 w-full rounded-md border px-2 text-sm"
                value={tempFilter.is_active === undefined ? '' : String(tempFilter.is_active)}
                onChange={(event) => {
                  const value = event.target.value;
                  setTempFilter((prev) => ({
                    ...prev,
                    is_active: value === '' ? undefined : value === 'true',
                  }));
                }}
              >
                <option value="">{t('admin.productsPage.filters.statusAll')}</option>
                <option value="true">{t('admin.productsPage.filters.statusActive')}</option>
                <option value="false">{t('admin.productsPage.filters.statusInactive')}</option>
              </select>
            </div>

            <div className="grid gap-2">
              <p className="text-sm leading-none font-medium">
                {t('admin.productsPage.filters.orderLabel')}
              </p>
              <select
                className="h-9 w-full rounded-md border px-2 text-sm"
                value={tempFilter.order}
                onChange={(event) =>
                  setTempFilter((prev) => ({
                    ...prev,
                    order: event.target.value as FilterState['order'],
                  }))
                }
              >
                <option value="desc">{t('admin.productsPage.filters.orderDesc')}</option>
                <option value="asc">{t('admin.productsPage.filters.orderAsc')}</option>
              </select>
            </div>

            <div className="grid gap-2">
              <p className="text-sm leading-none font-medium">
                {t('admin.productsPage.filters.limitLabel')}
              </p>
              <select
                className="h-9 w-full rounded-md border px-2 text-sm"
                value={String(tempFilter.limit)}
                onChange={(event) =>
                  setTempFilter((prev) => ({
                    ...prev,
                    limit: parseInt(event.target.value, 10),
                  }))
                }
              >
                {LIMIT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <PopoverClose render={<Button onClick={handleApply} />}>
              {t('button.apply')}
            </PopoverClose>
          </div>
        </PopoverContent>
      </Popover>

      <div className="relative">
        <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 h-4 w-4 -translate-y-1/2" />
        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={t('admin.productsPage.searchPlaceholder')}
          className="border-border h-9 w-56 bg-white pr-8 pl-8 text-sm"
        />
        {search && (
          <button
            type="button"
            onClick={() => setSearch('')}
            aria-label={t('admin.productsPage.clearSearch')}
            className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2.5 -translate-y-1/2"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isFilterActive && (
        <button
          onClick={handleClearFilter}
          className="text-muted-foreground hover:text-foreground cursor-pointer text-xs underline underline-offset-2"
        >
          {t('button.clearFilter')}
        </button>
      )}
    </div>
  );
}
