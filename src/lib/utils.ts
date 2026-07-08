import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { NextRequest } from 'next/server';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(fullName: string): string {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);

  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0]!.charAt(0).toUpperCase();

  return (parts[0]!.charAt(0) + parts[parts.length - 1]!.charAt(0)).toUpperCase();
}

export function formatToSlug(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/gi, 'd')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function formatPrice(price: number): string {
  return `${price.toLocaleString('vi-VN')}₫`;
}

export function getSearchParams(req: NextRequest) {
  const params = req.nextUrl.searchParams;

  return {
    is_active: params.get('is_active'),
    category_id: params.get('category_id'),
    store_id: params.get('store_id'),
    city: params.get('city'),
    district: params.get('district'),
    type: params.get('type'),
    sort_by: params.get('sort_by') ?? 'created_at',
    order: params.get('order') ?? 'desc',
    locale: params.get('locale') ?? 'vi',
    page: params.get('page') ?? '1',
    limit: params.get('limit') ?? '10',
    search: params.get('search')?.trim() ?? '',
  };
}
