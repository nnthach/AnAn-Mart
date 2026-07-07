import 'server-only';
import * as categoriesDb from '@/lib/db/categories';
import { formatToSlug } from '@/lib/utils';
import type { CategoryFormData } from '@/lib/validations/categories';

export const categoryService = {
  async create(input: CategoryFormData) {
    return categoriesDb.createCategory({
      name: { vi: input.name_vi, en: input.name_en },
      description: { vi: input.description_vi ?? '', en: input.description_en ?? '' },
      slug: { vi: formatToSlug(input.name_vi), en: formatToSlug(input.name_en) },
    });
  },

  async update(id: string, input: CategoryFormData) {
    return categoriesDb.updateCategory(id, {
      name: { vi: input.name_vi, en: input.name_en },
      description: { vi: input.description_vi ?? '', en: input.description_en ?? '' },
      slug: { vi: formatToSlug(input.name_vi), en: formatToSlug(input.name_en) },
    });
  },

  async delete(id: string) {
    return categoriesDb.deleteCategory(id);
  },
};
