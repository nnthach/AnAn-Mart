import { AdminOrderClient } from '@/app/(admin)/admin/orders/_components/AdminOrderClient';
import { MOCK_ORDERS } from '@/app/(admin)/admin/orders/_lib/mock-orders';

export default function AdminOrderPage() {
  return <AdminOrderClient orders={MOCK_ORDERS} />;
}
