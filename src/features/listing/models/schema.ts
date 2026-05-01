import {z} from 'zod';

// Enums (shared across features)
export const listingStatusEnum = z.enum([
  'draft',
  'active',
  'reserved',
  'sold',
]);
export const listingConditionEnum = z.enum([
  'mint',
  'excellent',
  'good',
  'fair',
]);
export const currencyCodeEnum = z.enum(['USD', 'EUR', 'GBP', 'INR']);
export const inquiryStatusEnum = z.enum([
  'pending',
  'active',
  'completed',
  'cancelled',
]);

export const listingSchema = z.object({
  id: z.string(),
  archivist_id: z.string().optional(),
  category_id: z.number().optional(),
  title: z.string(),
  description: z.string().nullable().optional(),
  price: z.any(),
  currency: z.string().optional(),
  condition: z.string().optional(),
  status: z.string().optional(),
  created_at: z.string().nullable().optional(),
  category: z.any().optional(),
  images: z.any().optional(),
});

export type TListing = z.infer<typeof listingSchema>;

export const listingsSchema = z.array(listingSchema);

export const listingImageSchema = z.object({
  id: z.string(),
  listing_id: z.string(),
  image_path: z.string(),
  display_order: z.number(),
  created_at: z.string().nullable().optional(),
});

export type TListingImage = z.infer<typeof listingImageSchema>;

export const listingImagesSchema = z.array(listingImageSchema);
