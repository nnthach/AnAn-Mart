'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ImagePlus, Loader2, Pencil, X } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
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
import { uploadFileToCloudinary } from '@/lib/upload-cloudinary';
import { createProductSchema, type ProductFormData } from '@/lib/validations/products';
import { listCategoriesAction } from '@/server/actions/categories';
import { updateProductAction } from '@/server/actions/products';
import type { CategoryItem } from '@/types';

import type React from 'react';

interface ProductImage {
  id: string;
  url: string;
  file?: File;
}

const MAX_IMAGES = 5;

interface UpdateProductModalProps {
  id: string;
  defaultValues: ProductFormData;
  imageUrls: string[];
  onUpdated?: () => void;
}

export default function UpdateProductModal({
  id,
  defaultValues,
  imageUrls,
  onUpdated,
}: UpdateProductModalProps) {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<ProductImage[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [loadingMeta, setLoadingMeta] = useState(false);

  const { locale, t } = useI18n();

  const productSchema = useMemo(() => createProductSchema(t, 'updateModal'), [t]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const fetchCategories = async () => {
    setLoadingMeta(true);
    const result = await listCategoriesAction({
      is_active: true,
      sort_by: 'name',
      order: 'asc',
      limit: 100,
    });
    if (result.success) setCategories(result.data);
    else console.error(result.error);
    setLoadingMeta(false);
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    if (files.length === 0) return;

    setImages((prev) => {
      const remainingSlots = MAX_IMAGES - prev.length;
      const newImages = files.slice(0, remainingSlots).map((file) => ({
        id: crypto.randomUUID(),
        url: URL.createObjectURL(file),
        file,
      }));
      return [...prev, ...newImages];
    });
    event.target.value = '';
  };

  const handleRemoveImage = (imageId: string) => {
    setImages((prev) => {
      const target = prev.find((image) => image.id === imageId);
      if (target?.file) URL.revokeObjectURL(target.url);
      return prev.filter((image) => image.id !== imageId);
    });
  };

  const onSubmit = async (data: ProductFormData) => {
    try {
      const newFiles = images
        .map((image) => image.file)
        .filter((file): file is File => Boolean(file));
      const uploadedUrls =
        newFiles.length > 0 ? ((await uploadFileToCloudinary(newFiles)) as string[]) : [];
      const existingUrls = images.filter((image) => !image.file).map((image) => image.url);

      const result = await updateProductAction(id, {
        ...data,
        image_urls: [...existingUrls, ...uploadedUrls],
      });

      if (!result.success) {
        console.error(result.error);
        toast.error(locale === 'vi' ? 'Không thể cập nhật sản phẩm.' : 'Failed to update product.');
        return;
      }

      toast.success(
        locale === 'vi' ? 'Cập nhật sản phẩm thành công!' : 'Product updated successfully!',
      );
      setOpen(false);
      onUpdated?.();
    } catch (error) {
      console.error(error);
      toast.error(locale === 'vi' ? 'Không thể cập nhật sản phẩm.' : 'Failed to update product.');
    }
  };

  const handleOpenChange = (next: boolean) => {
    if (next) {
      fetchCategories();
      reset(defaultValues);
      setImages(imageUrls.map((url) => ({ id: crypto.randomUUID(), url })));
    } else {
      images.forEach((image) => {
        if (image.file) URL.revokeObjectURL(image.url);
      });
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
    setOpen(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={<Button variant="ghost" size="icon" className="h-8 w-8" />}>
        <Pencil className="h-3.5 w-3.5" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{t('admin.productsPage.updateModal.title')}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="custom-scrollbar max-h-[60vh] space-y-4 overflow-y-auto py-2 pr-1">
            <div className="space-y-1.5">
              <label className="text-foreground mb-1.5 flex text-sm font-medium">
                {t('admin.modal.image')}
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="group border-border relative aspect-square overflow-hidden rounded-md border"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={image.url} alt="" className="h-full w-full object-cover" />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(image.id)}
                      className="bg-background/80 hover:bg-background absolute top-1 right-1 rounded-full p-0.5 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ))}

                {images.length < MAX_IMAGES && (
                  <button
                    type="button"
                    onClick={handleImageClick}
                    className="border-muted-foreground/40 bg-muted/30 text-muted-foreground hover:border-primary/60 hover:bg-muted/50 flex aspect-square flex-col items-center justify-center gap-1 rounded-md border-2 border-dashed transition-colors"
                  >
                    <ImagePlus className="h-5 w-5" />
                    <span className="text-xs">{t('admin.modal.addImage')}</span>
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <InputFormField
                label={t('admin.productsPage.updateModal.fields.nameVi')}
                placeholder="Ví dụ: Rượu vang Bordeaux"
                type="text"
                error={errors.name_vi?.message}
                disabled={isSubmitting}
                required
                {...register('name_vi')}
              />
              <InputFormField
                label={t('admin.productsPage.updateModal.fields.nameEn')}
                placeholder="E.g: Bordeaux Wine"
                type="text"
                error={errors.name_en?.message}
                disabled={isSubmitting}
                {...register('name_en')}
              />
            </div>

            <InputFormField
              label={t('admin.productsPage.updateModal.fields.price')}
              placeholder="0"
              type="number"
              error={errors.price?.message}
              disabled={isSubmitting}
              required
              {...register('price', { valueAsNumber: true })}
            />

            <InputFormField
              label={t('admin.productsPage.updateModal.fields.descriptionVi')}
              placeholder="Mô tả..."
              type="textarea"
              rows={3}
              error={errors.description_vi?.message}
              disabled={isSubmitting}
              {...register('description_vi')}
            />
            <InputFormField
              label={t('admin.productsPage.updateModal.fields.descriptionEn')}
              placeholder="Description..."
              type="textarea"
              rows={3}
              error={errors.description_en?.message}
              disabled={isSubmitting}
              {...register('description_en')}
            />

            {loadingMeta ? (
              <div className="text-muted-foreground flex items-center gap-2 py-2 text-sm">
                <Loader2 className="h-4 w-4 animate-spin" />
                {t('admin.modal.loading')}
              </div>
            ) : (
              <InputFormField
                label={t('admin.productsPage.updateModal.fields.category')}
                type="select"
                error={errors.category_id?.message}
                disabled={isSubmitting}
                required
                selectData={[
                  {
                    value: '',
                    label: t('admin.productsPage.updateModal.fields.categoryPlaceholder'),
                  },
                  ...categories.map((cat) => ({ value: cat.id, label: cat.name[locale] })),
                ]}
                {...register('category_id')}
              />
            )}
          </div>

          <DialogFooter className="mt-4 gap-2">
            <Button type="submit" disabled={isSubmitting} className="min-w-24">
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                t('admin.productsPage.updateModal.submit')
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
