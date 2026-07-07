// Type/interface dùng chung nhiều nơi đặt tại đây.
export type Nullable<T> = T | null;

export interface ProductTranslation {
  name: string;
  slug: string;
  description: string;
  locale: string;
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  price: number;
  slug: string;
  image_url: string[];
  category_id: string;
  category_name: string;
  category: CategoryItem;
  categories: CategoryItem;
  product_translations: ProductTranslation[];
  is_active: boolean;
  created_at: string;
  updated_at: string | null;
}

export interface CategoryItem {
  id: string;
  name: {
    en: string;
    vi: string;
  };
  description: {
    en: string;
    vi: string;
  };
  is_active: boolean;
  slug: {
    en: string;
    vi: string;
  };
  created_at: string;
  updated_at: string | null;
}

export interface RawProduct {
  id: string;
  price: number;
  image_url: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string | null;
  categories: { id: string; name: string } | null;
  product_translations: ProductTranslation[];
}

export interface Pagination {
  page: number;
  limit: number;
  total_items: number;
  total_pages: number;
}
