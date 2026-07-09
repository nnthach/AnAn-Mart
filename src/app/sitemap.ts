import { env } from '@/config/env';

import type { MetadataRoute } from 'next';

const STATIC_ROUTES: Array<{ path: string; priority: number; changeFrequency: 'daily' | 'weekly' }> = [
  { path: '', priority: 1, changeFrequency: 'daily' },
  { path: '/shop', priority: 0.9, changeFrequency: 'daily' },
  { path: '/about', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'weekly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${env.NEXT_PUBLIC_SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
