'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Plus } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import InputFormField from '@/components/features/InputFormField';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useI18n } from '@/context/I18nContext';
import { categoryInputSchema, type CategoryFormData } from '@/lib/validations/categories';
import { createCategoryAction } from '@/server/actions/categories';

const INITIAL_FORM: CategoryFormData = {
  name_vi: '',
  name_en: '',
  description_vi: '',
  description_en: '',
};

interface CreateCategoryModalProps {
  onCreated?: () => void;
}

export default function CreateCategoryModal({ onCreated }: CreateCategoryModalProps) {
  const { t, locale } = useI18n();
  const [open, setOpen] = useState(false);

  const categorySchema = useMemo(() => categoryInputSchema(t, 'createModal'), [t]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema),
    defaultValues: INITIAL_FORM,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: CategoryFormData) => {
    const result = await createCategoryAction(data);

    if (result.success) {
      toast.success(
        locale === 'vi' ? 'Tạo danh mục thành công!' : 'Category created successfully!',
      );
      reset();
      setOpen(false);
      onCreated?.();
    } else {
      console.error(result.error);
      toast.error(locale === 'vi' ? 'Không thể tạo danh mục.' : 'Failed to create category.');
    }
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) reset();
    setOpen(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={<Button className="gap-2" />}>
        <Plus className="h-4 w-4" />
        {t('admin.categoriesPage.createModal.trigger')}
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{t('admin.categoriesPage.createModal.title')}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="space-y-4 py-2">
            <InputFormField
              label={t('admin.categoriesPage.createModal.fields.nameVi')}
              placeholder="Ví dụ: Rượu vang"
              type="text"
              error={errors.name_vi?.message}
              disabled={isSubmitting}
              required
              {...register('name_vi')}
            />

            <InputFormField
              label={t('admin.categoriesPage.createModal.fields.nameEn')}
              placeholder="E.g. Wine"
              type="text"
              error={errors.name_en?.message}
              disabled={isSubmitting}
              required
              {...register('name_en')}
            />

            <InputFormField
              label={t('admin.categoriesPage.createModal.fields.descriptionVi')}
              placeholder="Mô tả ngắn về danh mục..."
              type="textarea"
              rows={2}
              error={errors.description_vi?.message}
              disabled={isSubmitting}
              required
              {...register('description_vi')}
            />

            <InputFormField
              label={t('admin.categoriesPage.createModal.fields.descriptionEn')}
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
            <DialogClose
              render={<Button type="button" variant="outline" disabled={isSubmitting} />}
            >
              {t('admin.modal.cancel')}
            </DialogClose>
            <Button type="submit" disabled={isSubmitting} className="min-w-24">
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                t('admin.categoriesPage.createModal.submit')
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
