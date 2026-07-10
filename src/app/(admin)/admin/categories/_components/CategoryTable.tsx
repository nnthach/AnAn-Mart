'use client';

import { LayoutGrid, Trash2 } from 'lucide-react';
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
import { deleteCategoryAction } from '@/server/actions/categories';
import type { CategoryItem } from '@/types';

import UpdateCategoryModal from './UpdateCategoryModal';

interface CategoryTableProps {
  categories: CategoryItem[];
}

export default function CategoryTable({ categories }: CategoryTableProps) {
  const { t, locale } = useI18n();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    await deleteCategoryAction(id);
    toast.success(locale === 'vi' ? 'Xóa danh mục thành công!' : 'Category deleted successfully!');
    router.refresh();
  };

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="w-12 text-center">{t('admin.table.columns.no')}</TableHead>
          <TableHead>{t('admin.categoriesPage.table.columns.name')}</TableHead>
          <TableHead>{t('admin.categoriesPage.table.columns.description')}</TableHead>
          <TableHead>{t('admin.table.columns.status')}</TableHead>
          <TableHead>{t('admin.table.columns.createdAt')}</TableHead>
          <TableHead className="text-right">{t('admin.table.columns.actions')}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.length === 0 ? (
          <TableRow>
            <TableCell colSpan={6} className="text-muted-foreground py-20 text-center">
              <div className="flex flex-col items-center gap-3">
                <LayoutGrid className="h-10 w-10 opacity-30" />
                <p className="text-sm">{t('admin.table.empty')}</p>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          categories.map((category, index) => (
            <TableRow key={category.id}>
              <TableCell className="text-muted-foreground text-center text-xs">
                {index + 1}
              </TableCell>
              <TableCell className="font-medium">
                {category.name[locale] ?? category.name.vi}
              </TableCell>
              <TableCell className="text-sm">
                {category.description[locale] ?? category.description.vi}
              </TableCell>
              <TableCell>
                <Badge variant={category.is_active ? 'success' : 'warning'}>
                  {category.is_active
                    ? t('admin.table.status.active')
                    : t('admin.table.status.inactive')}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">
                {new Date(category.created_at).toLocaleDateString('vi-VN')}
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-end gap-2">
                  <UpdateCategoryModal
                    id={category.id}
                    defaultValues={{
                      name_vi: category.name.vi,
                      name_en: category.name.en,
                      description_vi: category.description.vi,
                      description_en: category.description.en,
                    }}
                  />
                  <Button
                    onClick={() => handleDelete(category.id)}
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
