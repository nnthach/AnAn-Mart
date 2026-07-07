'use client';

import { useEffect, useMemo, useState } from 'react';

import { ProductGrid } from '@/app/shop/_components/ProductGrid';
import { ShopToolbar, type SortOption } from '@/app/shop/_components/ShopToolbar';
import { PRODUCT_CATEGORIES, PRODUCTS, type ProductCategory } from '@/app/shop/_lib/products';
import { useI18n } from '@/context/I18nContext';
import { useDebounce } from '@/hooks/useDebounce';

const DEFAULT_PER_PAGE = 12;

export default function ShopSection() {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [perPage, setPerPage] = useState(DEFAULT_PER_PAGE);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const debouncedQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    setPage(1);
  }, [activeCategory, debouncedQuery, sortBy, perPage]);

  const categoryLabels = useMemo(
    () =>
      Object.fromEntries(
        PRODUCT_CATEGORIES.map((key) => [key, t(`homepage.categoryGrid.categories.${key}.title`)]),
      ) as Record<ProductCategory, string>,
    [t],
  );

  const categories = useMemo(
    () =>
      PRODUCT_CATEGORIES.map((key) => ({
        key,
        label: categoryLabels[key],
        count: PRODUCTS.filter((product) => product.category === key).length,
      })),
    [categoryLabels],
  );

  const sortLabels: Record<SortOption, string> = {
    featured: t('shopPage.sortBy.featured'),
    nameAsc: t('shopPage.sortBy.nameAsc'),
    priceAsc: t('shopPage.sortBy.priceAsc'),
    priceDesc: t('shopPage.sortBy.priceDesc'),
  };

  const filteredProducts = useMemo(() => {
    const query = debouncedQuery.trim().toLowerCase();

    const filtered = PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesQuery = query === '' || product.name.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });

    const sorted = [...filtered];
    switch (sortBy) {
      case 'nameAsc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'priceAsc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        sorted.sort((a, b) => b.price - a.price);
        break;
    }

    return sorted;
  }, [activeCategory, debouncedQuery, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / perPage));
  const paginatedProducts = filteredProducts.slice((page - 1) * perPage, page * perPage);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
      <ShopToolbar
        allLabel={t('shopPage.filtersAll')}
        totalCount={PRODUCTS.length}
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
        sortLabels={sortLabels}
        perPage={perPage}
        onPerPageChange={setPerPage}
        perPageSuffix={t('shopPage.perPageSuffix')}
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder={t('shopPage.searchPlaceholder')}
      />

      <ProductGrid
        products={paginatedProducts}
        categoryLabels={categoryLabels}
        addToCartLabel={t('shopPage.addToCart')}
        emptyLabel={t('shopPage.empty')}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        previousLabel={t('shopPage.pagination.previous')}
        nextLabel={t('shopPage.pagination.next')}
      />
    </section>
  );
}
