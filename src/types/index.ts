// Type/interface dùng chung nhiều nơi đặt tại đây.
export type Nullable<T> = T | null;

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

export interface ProductCategory {
  id: string;
  name: {
    en: string;
    vi: string;
  };
}

export interface ProductItem {
  id: string;
  name: {
    en: string;
    vi: string;
  };
  description: {
    en: string;
    vi: string;
  };
  slug: {
    en: string;
    vi: string;
  };
  price: number;
  image_urls: string[];
  category_id: string;
  category: ProductCategory | null;
  is_active: boolean;
  created_at: string;
  updated_at: string | null;
}

export interface Pagination {
  page: number;
  limit: number;
  total_items: number;
  total_pages: number;
}
