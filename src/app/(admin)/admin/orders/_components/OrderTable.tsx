'use client';

import { ClipboardList } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import type { badgeVariants } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useI18n } from '@/context/I18nContext';

import type { MockOrder, OrderPaymentStatus, OrderStatus } from '../_lib/mock-orders';
import type { VariantProps } from 'class-variance-authority';

type BadgeVariant = VariantProps<typeof badgeVariants>['variant'];

const STATUS_VARIANT: Record<OrderStatus, BadgeVariant> = {
  pending: 'warning',
  processing: 'secondary',
  shipping: 'default',
  completed: 'success',
  cancelled: 'destructive',
};

const PAYMENT_VARIANT: Record<OrderPaymentStatus, BadgeVariant> = {
  paid: 'success',
  unpaid: 'warning',
};

interface OrderTableProps {
  orders: MockOrder[];
}

export function OrderTable({ orders }: OrderTableProps) {
  const { t } = useI18n();

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="w-12 text-center">{t('admin.table.columns.no')}</TableHead>
          <TableHead>{t('admin.ordersPage.table.columns.orderCode')}</TableHead>
          <TableHead>{t('admin.ordersPage.table.columns.customer')}</TableHead>
          <TableHead>{t('admin.ordersPage.table.columns.items')}</TableHead>
          <TableHead>{t('admin.ordersPage.table.columns.total')}</TableHead>
          <TableHead>{t('admin.table.columns.status')}</TableHead>
          <TableHead>{t('admin.ordersPage.table.columns.payment')}</TableHead>
          <TableHead>{t('admin.table.columns.createdAt')}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.length === 0 ? (
          <TableRow>
            <TableCell colSpan={8} className="text-muted-foreground py-20 text-center">
              <div className="flex flex-col items-center gap-3">
                <ClipboardList className="h-10 w-10 opacity-30" />
                <p className="text-sm">{t('admin.table.empty')}</p>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          orders.map((order, index) => (
            <TableRow key={order.id}>
              <TableCell className="text-muted-foreground text-center text-xs">
                {index + 1}
              </TableCell>
              <TableCell className="font-medium">{order.code}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>{order.itemsCount}</TableCell>
              <TableCell>{order.total.toLocaleString('vi-VN')} VND</TableCell>
              <TableCell>
                <Badge variant={STATUS_VARIANT[order.status]}>
                  {t(`admin.ordersPage.status.${order.status}`)}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={PAYMENT_VARIANT[order.payment]}>
                  {t(`admin.ordersPage.payment.${order.payment}`)}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">
                {new Date(order.createdAt).toLocaleDateString('vi-VN')}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
