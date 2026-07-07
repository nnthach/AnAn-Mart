'use client';

import { DollarSign, Package, ShoppingCart, Users } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { useI18n } from '@/context/I18nContext';

const STATS = [
  { key: 'revenue', icon: DollarSign, value: '128.500.000₫' },
  { key: 'orders', icon: ShoppingCart, value: '342' },
  { key: 'customers', icon: Users, value: '1.204' },
  { key: 'products', icon: Package, value: '512' },
] as const;

export default function AdminDashboardPage() {
  const { t } = useI18n();

  return (
    <div>
      <h1 className="text-2xl font-bold">{t('admin.dashboard.title')}</h1>
      <p className="text-muted-foreground mt-1 text-sm">{t('admin.dashboard.welcome')}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map(({ key, icon: Icon, value }) => (
          <Card key={key}>
            <CardContent className="flex items-center gap-4">
              <span className="bg-primary/10 text-primary flex size-11 shrink-0 items-center justify-center rounded-full">
                <Icon className="size-5" />
              </span>
              <div>
                <p className="text-muted-foreground text-xs">{t(`admin.dashboard.stats.${key}`)}</p>
                <p className="text-xl font-bold">{value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
