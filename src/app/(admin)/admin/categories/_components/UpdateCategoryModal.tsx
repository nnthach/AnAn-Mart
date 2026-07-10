'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Pencil } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import InputFormField from '@/components/features/InputFormField';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useI18n } from '@/context/I18nContext';
import { categoryInputSchema, type CategoryFormData } from '@/lib/validations/categories';
import { updateCategoryAction } from '@/server/actions/categories';

interface UpdateCategoryModalProps {
  id: string;
  defaultValues: CategoryFormData;
  onUpdated?: () => void;
}

export default function UpdateCategoryModal({
  id,
  defaultValues,
  onUpdated,
}: UpdateCategoryModalProps) {
  const [open, setOpen] = useState(false);
  const { t, locale } = useI18n();

  const categorySchema = useMemo(() => categoryInputSchema(t, 'updateModal'), [t]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
    defaultValues,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: CategoryFormData) => {
    const result = await updateCategoryAction(id, data);

    if (result.success) {
      toast.success(
        locale === 'vi' ? 'Cập nhật danh mục thành công!' : 'Category updated successfully!',
      );
      setOpen(false);
      onUpdated?.();
    } else {
      console.error(result.error);
      toast.error(locale === 'vi' ? 'Không thể cập nhật danh mục.' : 'Failed to update category.');
    }
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) reset(defaultValues);
    setOpen(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={<Button variant="ghost" size="icon" className="h-8 w-8" />}>
        <Pencil className="h-3.5 w-3.5" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{t('admin.categoriesPage.updateModal.title')}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="space-y-4 py-2">
            <InputFormField
              label={t('admin.categoriesPage.updateModal.fields.nameVi')}
              placeholder="Ví dụ: Rượu vang"
              type="text"
              error={errors.name_vi?.message}
              disabled={isSubmitting}
              required
              {...register('name_vi')}
            />

            <InputFormField
              label={t('admin.categoriesPage.updateModal.fields.nameEn')}
              placeholder="E.g. Wine"
              type="text"
              error={errors.name_en?.message}
              disabled={isSubmitting}
              required
              {...register('name_en')}
            />

            <InputFormField
              label={t('admin.categoriesPage.updateModal.fields.descriptionVi')}
              placeholder="Mô tả ngắn về danh mục..."
              type="textarea"
              rows={2}
              error={errors.description_vi?.message}
              disabled={isSubmitting}
              required
              {...register('description_vi')}
            />

            <InputFormField
              label={t('admin.categoriesPage.updateModal.fields.descriptionEn')}
              placeholder="Short description about this category..."
              type="textarea"
              rows={2}
              error={errors.description_en?.message}
              disabled={isSubmitting}
              required
              {...register('description_en')}
            />
          </div>

          <DialogFooter className="mt-4 gap-2">
            <Button type="submit" disabled={isSubmitting} className="min-w-24">
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                t('admin.categoriesPage.updateModal.submit')
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
