'use server';

import { revalidatePath } from 'next/cache';

import { getCategories, type GetCategoriesParams } from '@/lib/db/categories';
import { categoryInputSchema } from '@/lib/validations/categories';
import { categoryService } from '@/server/services/categories';

const noopTranslate = (key: string) => key;

export async function listCategoriesAction(input: GetCategoriesParams) {
  try {
    const result = await getCategories(input);
    return { success: true as const, data: result.data, pagination: result.pagination };
  } catch (error) {
    console.error('List categories error:', error);
    return { success: false as const, error: 'Failed to fetch categories' };
  }
}

export async function createCategoryAction(input: unknown) {
  try {
    const data = categoryInputSchema(noopTranslate).parse(input);
    await categoryService.create(data);
    revalidatePath('/admin/categories');
    return { success: true as const };
  } catch (error) {
    console.error('Create category error:', error);
    return { success: false as const, error: 'Không thể tạo danh mục' };
  }
}

export async function updateCategoryAction(id: string, input: unknown) {
  try {
    const data = categoryInputSchema(noopTranslate).parse(input);
    await categoryService.update(id, data);
    revalidatePath('/admin/categories');
    return { success: true as const };
  } catch (error) {
    console.error('Update category error:', error);
    return { success: false as const, error: 'Không thể cập nhật danh mục' };
  }
}

export async function deleteCategoryAction(id: string) {
  try {
    await categoryService.delete(id);
    revalidatePath('/admin/categories');
    return { success: true as const };
  } catch (error) {
    console.error('Delete category error:', error);
    return { success: false as const, error: 'Không thể xóa danh mục' };
  }
}
