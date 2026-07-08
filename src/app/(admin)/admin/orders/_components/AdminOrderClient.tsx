'use client';

import { OrderTable } from '@/app/(admin)/admin/orders/_components/OrderTable';
import { useI18n } from '@/context/I18nContext';

import type { MockOrder } from '../_lib/mock-orders';

interface AdminOrderClientProps {
  orders: MockOrder[];
}

export function AdminOrderClient({ orders }: AdminOrderClientProps) {
  const { t } = useI18n();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-foreground text-2xl font-bold">
          {t('admin.ordersPage.headerTitle.title')}
        </h1>
        <p className="text-muted-foreground text-sm">
          {t('admin.ordersPage.headerTitle.subtitle')}
        </p>
      </div>

      <div className="bg-card rounded-xl border shadow-sm">
        <OrderTable orders={orders} />

        <div className="flex items-center justify-between border-t px-6 py-3">
          <p className="text-muted-foreground text-xs">
            {t('admin.table.pagination.showing')}{' '}
            <span className="text-foreground font-medium">{orders.length}</span>{' '}
            {t('admin.table.pagination.of')}{' '}
            <span className="text-foreground font-medium">{orders.length}</span>{' '}
            {t('admin.table.pagination.items')}
          </p>
        </div>
      </div>
    </div>
  );
}
