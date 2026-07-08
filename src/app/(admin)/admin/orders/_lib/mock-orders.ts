export type OrderStatus = 'pending' | 'processing' | 'shipping' | 'completed' | 'cancelled';
export type OrderPaymentStatus = 'paid' | 'unpaid';

export interface MockOrder {
  id: string;
  code: string;
  customerName: string;
  itemsCount: number;
  total: number;
  status: OrderStatus;
  payment: OrderPaymentStatus;
  createdAt: string;
}

export const MOCK_ORDERS: MockOrder[] = [
  {
    id: '1',
    code: 'ORD-1024',
    customerName: 'Nguyễn Văn An',
    itemsCount: 3,
    total: 1850000,
    status: 'completed',
    payment: 'paid',
    createdAt: '2026-07-06T08:12:00Z',
  },
  {
    id: '2',
    code: 'ORD-1023',
    customerName: 'Trần Thị Bích',
    itemsCount: 1,
    total: 650000,
    status: 'shipping',
    payment: 'paid',
    createdAt: '2026-07-06T03:40:00Z',
  },
  {
    id: '3',
    code: 'ORD-1022',
    customerName: 'Lê Minh Châu',
    itemsCount: 5,
    total: 4320000,
    status: 'processing',
    payment: 'unpaid',
    createdAt: '2026-07-05T14:05:00Z',
  },
  {
    id: '4',
    code: 'ORD-1021',
    customerName: 'John Carter',
    itemsCount: 2,
    total: 980000,
    status: 'pending',
    payment: 'unpaid',
    createdAt: '2026-07-05T09:22:00Z',
  },
  {
    id: '5',
    code: 'ORD-1020',
    customerName: 'Phạm Quốc Dũng',
    itemsCount: 4,
    total: 2750000,
    status: 'completed',
    payment: 'paid',
    createdAt: '2026-07-04T17:50:00Z',
  },
  {
    id: '6',
    code: 'ORD-1019',
    customerName: 'Sophie Martin',
    itemsCount: 1,
    total: 320000,
    status: 'cancelled',
    payment: 'unpaid',
    createdAt: '2026-07-04T11:15:00Z',
  },
  {
    id: '7',
    code: 'ORD-1018',
    customerName: 'Hoàng Thị Em',
    itemsCount: 6,
    total: 5100000,
    status: 'completed',
    payment: 'paid',
    createdAt: '2026-07-03T16:30:00Z',
  },
  {
    id: '8',
    code: 'ORD-1017',
    customerName: 'David Nguyen',
    itemsCount: 2,
    total: 1150000,
    status: 'shipping',
    payment: 'paid',
    createdAt: '2026-07-03T10:05:00Z',
  },
];
