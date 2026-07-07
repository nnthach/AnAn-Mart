import { Search } from 'lucide-react';

import type { ProductCategory } from '@/app/(public)/shop/_lib/products';
import { Input } from '@/components/ui/input';

export type SortOption = 'featured' | 'nameAsc' | 'priceAsc' | 'priceDesc';

const SORT_OPTIONS: SortOption[] = ['featured', 'nameAsc', 'priceAsc', 'priceDesc'];
const PER_PAGE_OPTIONS = [8, 12, 16, 24];

const SELECT_CLASS =
  'h-10 rounded-md border border-input bg-transparent px-3 text-sm font-medium text-gray-700 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50';

interface CategoryOption {
  key: ProductCategory;
  label: string;
  count: number;
}

interface ShopToolbarProps {
  allLabel: string;
  totalCount: number;
  categories: CategoryOption[];
  activeCategory: ProductCategory | 'all';
  onCategoryChange: (category: ProductCategory | 'all') => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  sortLabels: Record<SortOption, string>;
  perPage: number;
  onPerPageChange: (perPage: number) => void;
  perPageSuffix: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder: string;
}

export function ShopToolbar({
  allLabel,
  totalCount,
  categories,
  activeCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  sortLabels,
  perPage,
  onPerPageChange,
  perPageSuffix,
  searchValue,
  onSearchChange,
  searchPlaceholder,
}: ShopToolbarProps) {
  return (
    <div className="border-border mb-8 flex flex-col gap-4 border-b pb-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap gap-3">
        <select
          value={activeCategory}
          onChange={(event) => onCategoryChange(event.target.value as ProductCategory | 'all')}
          className={SELECT_CLASS}
        >
          <option value="all">
            {allLabel} ({totalCount})
          </option>
          {categories.map(({ key, label, count }) => (
            <option key={key} value={key}>
              {label} ({count})
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value as SortOption)}
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
          onChange={(event) => onPerPageChange(Number(event.target.value))}
          className={SELECT_CLASS}
        >
          {PER_PAGE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option} {perPageSuffix}
            </option>
          ))}
        </select>
      </div>

      <div className="relative w-full lg:w-72">
        <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-gray-400" />
        <Input
          type="search"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={searchPlaceholder}
          className="h-10 rounded-md pl-9"
        />
      </div>
    </div>
  );
}
