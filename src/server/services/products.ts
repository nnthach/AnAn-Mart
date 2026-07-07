import 'server-only';

import * as productsDb from '@/lib/db/products';
import { formatToSlug } from '@/lib/utils';
import type { ProductFormData } from '@/lib/validations/products';

export interface ProductMutationInput extends ProductFormData {
  image_urls: string[];
}

function buildTranslations(input: ProductMutationInput) {
  const nameEn = input.name_en || input.name_vi;

  return {
    vi: {
      name: input.name_vi,
      description: input.description_vi,
      slug: formatToSlug(input.name_vi),
    },
    en: {
      name: nameEn,
      description: input.description_en,
      slug: formatToSlug(nameEn),
    },
  };
}

export const productService = {
  async create(input: ProductMutationInput) {
    return productsDb.createProduct({
      price: input.price,
      category_id: input.category_id,
      image_urls: input.image_urls,
      translations: buildTranslations(input),
    });
  },

  async update(id: string, input: ProductMutationInput) {
    return productsDb.updateProduct(id, {
      price: input.price,
      category_id: input.category_id,
      image_urls: input.image_urls,
      translations: buildTranslations(input),
    });
  },

  async delete(id: string) {
    return productsDb.deleteProduct(id);
  },
};
