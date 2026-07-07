'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { getProductById, getProducts, type GetProductsParams } from '@/lib/db/products';
import { createProductSchema } from '@/lib/validations/products';
import { productService } from '@/server/services/products';

const noopTranslate = (key: string) => key;

const productMutationSchema = createProductSchema(noopTranslate).extend({
  image_urls: z.array(z.string()).default([]),
});

export async function listProductsAction(input: GetProductsParams) {
  try {
    const result = await getProducts(input);
    return { success: true as const, data: result.data, pagination: result.pagination };
  } catch (error) {
    console.error('List products error:', error);
    return { success: false as const, error: 'Failed to fetch products' };
  }
}

export async function getProductAction(id: string) {
  try {
    const data = await getProductById(id);
    return { success: true as const, data };
  } catch (error) {
    console.error('Get product error:', error);
    return { success: false as const, error: 'Failed to fetch product' };
  }
}

export async function createProductAction(input: unknown) {
  try {
    const data = productMutationSchema.parse(input);
    await productService.create(data);
    revalidatePath('/admin/products');
    return { success: true as const };
  } catch (error) {
    console.error('Create product error:', error);
    return { success: false as const, error: 'Không thể tạo sản phẩm' };
  }
}

export async function updateProductAction(id: string, input: unknown) {
  try {
    const data = productMutationSchema.parse(input);
    await productService.update(id, data);
    revalidatePath('/admin/products');
    return { success: true as const };
  } catch (error) {
    console.error('Update product error:', error);
    return { success: false as const, error: 'Không thể cập nhật sản phẩm' };
  }
}

export async function deleteProductAction(id: string) {
  try {
    await productService.delete(id);
    revalidatePath('/admin/products');
    return { success: true as const };
  } catch (error) {
    console.error('Delete product error:', error);
    return { success: false as const, error: 'Không thể xóa sản phẩm' };
  }
}
