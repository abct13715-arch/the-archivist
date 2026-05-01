import {z} from 'zod';

export const reviewSchema = z.object({
  id: z.string(),
  reviewer_id: z.string(),
  archivist_id: z.string(),
  listing_id: z.string(),
  rating: z.number().int().min(1).max(5),
  body: z.string().nullable(),
  created_at: z.string().nullable().optional(),
});

export type TReview = z.infer<typeof reviewSchema>;

export const reviewsSchema = z.array(reviewSchema);
