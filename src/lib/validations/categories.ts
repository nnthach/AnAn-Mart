import { z } from 'zod';

export const categoryInputSchema = (
  t: (path: string) => string,
  namespace: 'createModal' | 'updateModal' = 'createModal',
) =>
  z.object({
    name_vi: z.string().min(1, t(`admin.categoriesPage.${namespace}.errors.nameViRequired`)),
    name_en: z.string().min(1, t(`admin.categoriesPage.${namespace}.errors.nameEnRequired`)),
    description_vi: z
      .string()
      .min(1, t(`admin.categoriesPage.${namespace}.errors.descriptionViRequired`)),
    description_en: z
      .string()
      .min(1, t(`admin.categoriesPage.${namespace}.errors.descriptionEnRequired`)),
  });

export type CategoryFormData = z.infer<ReturnType<typeof categoryInputSchema>>;
