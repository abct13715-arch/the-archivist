import {z} from 'zod';

export const savedItemSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  listing_id: z.string(),
  created_at: z.string().nullable().optional(),
});

export type TSavedItem = z.infer<typeof savedItemSchema>;

export const savedItemsSchema = z.array(savedItemSchema);
