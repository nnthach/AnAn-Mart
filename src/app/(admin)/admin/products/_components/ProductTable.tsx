'use client';

import { LayoutGrid, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useI18n } from '@/context/I18nContext';
import { deleteProductAction } from '@/server/actions/products';
import type { ProductItem } from '@/types';

import UpdateProductModal from './UpdateProductModal';

interface ProductTableProps {
  products: ProductItem[];
}

export default function ProductTable({ products }: ProductTableProps) {
  const { t, locale } = useI18n();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    const result = await deleteProductAction(id);
    if (!result.success) {
      toast.error(t('admin.productsPage.deleteFailed'));
      return;
    }
    router.refresh();
  };

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="w-12 text-center">{t('admin.table.columns.no')}</TableHead>
          <TableHead>{t('admin.productsPage.table.columns.image')}</TableHead>
          <TableHead>{t('admin.productsPage.table.columns.name')}</TableHead>
          <TableHead>{t('admin.productsPage.table.columns.price')}</TableHead>
          <TableHead>{t('admin.productsPage.table.columns.category')}</TableHead>
          <TableHead>{t('admin.table.columns.status')}</TableHead>
          <TableHead>{t('admin.table.columns.createdAt')}</TableHead>
          <TableHead className="text-right">{t('admin.table.columns.actions')}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.length === 0 ? (
          <TableRow>
            <TableCell colSpan={8} className="text-muted-foreground py-20 text-center">
              <div className="flex flex-col items-center gap-3">
                <LayoutGrid className="h-10 w-10 opacity-30" />
                <p className="text-sm">{t('admin.table.empty')}</p>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          products.map((product, index) => (
            <TableRow key={product.id}>
              <TableCell className="text-muted-foreground text-center text-xs">
                {index + 1}
              </TableCell>
              <TableCell>
                <div className="relative h-12 w-12 overflow-hidden rounded-md">
                  <Image
                    src={product.image_urls[0] ?? '/images/logo.png'}
                    alt={product.name[locale]}
                    fill
                    className="object-cover"
                  />
                </div>
              </TableCell>
              <TableCell className="font-medium">{product.name[locale]}</TableCell>
              <TableCell>{product.price.toLocaleString('vi-Vn')} VND</TableCell>
              <TableCell>{product.category?.name[locale] ?? '-'}</TableCell>
              <TableCell>
                <Badge variant={product.is_active ? 'success' : 'warning'}>
                  {product.is_active
                    ? t('admin.table.status.active')
                    : t('admin.table.status.inactive')}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">
                {new Date(product.created_at).toLocaleDateString('vi-VN')}
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-2">
                  <UpdateProductModal
                    id={product.id}
                    defaultValues={{
                      name_vi: product.name.vi,
                      name_en: product.name.en,
                      description_vi: product.description.vi,
                      description_en: product.description.en,
                      price: product.price,
                      category_id: product.category_id,
                    }}
                    imageUrls={product.image_urls}
                  />
                  <Button
                    onClick={() => handleDelete(product.id)}
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:text-destructive hover:bg-destructive/10 h-8 w-8"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
