'use client';

import { Filter } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useI18n } from '@/context/I18nContext';

const DEFAULT_LIMIT = 8;

const LIMIT_OPTIONS = [DEFAULT_LIMIT, 10, 15, 20, 50];

interface FilterState {
  is_active: boolean | undefined;
  sort_by: 'name' | 'created_at';
  order: 'asc' | 'desc';
  limit: number;
}

const DEFAULT_FILTER: FilterState = {
  is_active: undefined,
  sort_by: 'created_at',
  order: 'desc',
  limit: DEFAULT_LIMIT,
};

function getFilterFromSearchParams(searchParams: URLSearchParams): FilterState {
  const isActiveParam = searchParams.get('is_active');
  const sortByParam = searchParams.get('sort_by');
  const orderParam = searchParams.get('order');
  const limitParam = searchParams.get('limit');

  return {
    is_active: isActiveParam === null ? undefined : isActiveParam === 'true',
    sort_by: sortByParam === 'name' ? 'name' : DEFAULT_FILTER.sort_by,
    order: orderParam === 'asc' ? 'asc' : DEFAULT_FILTER.order,
    limit: limitParam ? Number(limitParam) || DEFAULT_LIMIT : DEFAULT_LIMIT,
  };
}

export default function OrderFilter() {
  const { t } = useI18n();
  const router = useRouter();
  const searchParams = useSearchParams();

  const appliedFilter = getFilterFromSearchParams(searchParams);
  const [tempFilter, setTempFilter] = useState<FilterState>(appliedFilter);

  const applyFilter = (filter: FilterState) => {
    const params = new URLSearchParams();

    if (filter.is_active !== undefined) params.set('is_active', String(filter.is_active));
    if (filter.sort_by !== DEFAULT_FILTER.sort_by) params.set('sort_by', filter.sort_by);
    if (filter.order !== DEFAULT_FILTER.order) params.set('order', filter.order);
    if (filter.limit !== DEFAULT_FILTER.limit) params.set('limit', String(filter.limit));
    params.set('page', '1');

    router.push(`?${params.toString()}`);
  };

  const handleApply = () => applyFilter(tempFilter);

  const handleClearFilter = () => {
    setTempFilter(DEFAULT_FILTER);
    applyFilter(DEFAULT_FILTER);
  };

  const isFilterActive =
    appliedFilter.is_active !== undefined ||
    appliedFilter.sort_by !== DEFAULT_FILTER.sort_by ||
    appliedFilter.order !== DEFAULT_FILTER.order ||
    appliedFilter.limit !== DEFAULT_FILTER.limit;

  const activeFilterCount =
    (appliedFilter.is_active !== undefined ? 1 : 0) +
    (appliedFilter.sort_by !== DEFAULT_FILTER.sort_by ||
    appliedFilter.order !== DEFAULT_FILTER.order
      ? 1
      : 0) +
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
        <PopoverContent align="start" className="w-56">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <p className="text-sm leading-none font-medium">
                {t('admin.categoriesPage.filters.statusLabel')}
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
                <option value="">{t('admin.categoriesPage.filters.statusAll')}</option>
                <option value="true">{t('admin.categoriesPage.filters.statusActive')}</option>
                <option value="false">{t('admin.categoriesPage.filters.statusInactive')}</option>
              </select>
            </div>

            <div className="grid gap-2">
              <p className="text-sm leading-none font-medium">
                {t('admin.categoriesPage.filters.sortByLabel')}
              </p>
              <select
                className="h-9 w-full rounded-md border px-2 text-sm"
                value={tempFilter.sort_by}
                onChange={(event) =>
                  setTempFilter((prev) => ({
                    ...prev,
                    sort_by: event.target.value as FilterState['sort_by'],
                  }))
                }
              >
                <option value="created_at">
                  {t('admin.categoriesPage.filters.sortByCreatedAt')}
                </option>
                <option value="name">{t('admin.categoriesPage.filters.sortByName')}</option>
              </select>
            </div>

            <div className="grid gap-2">
              <p className="text-sm leading-none font-medium">
                {t('admin.categoriesPage.filters.orderLabel')}
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
                <option value="desc">{t('admin.categoriesPage.filters.orderDesc')}</option>
                <option value="asc">{t('admin.categoriesPage.filters.orderAsc')}</option>
              </select>
            </div>

            <div className="grid gap-2">
              <p className="text-sm leading-none font-medium">
                {t('admin.categoriesPage.filters.limitLabel')}
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
