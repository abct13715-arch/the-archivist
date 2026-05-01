import {z} from 'zod';

export const categorySchema = z.object({
  id: z.number(),
  name: z.string(),
  created_at: z.string().nullable().optional(),
});

export const categoriesSchema = z.array(categorySchema);

export type TCategory = z.infer<typeof categorySchema>;
