import {z} from 'zod';

export const collectionSchema = z.object({
  id: z.string(),
  archivist_id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  cover_path: z.string().nullable(),
  volume: z.string().nullable().optional(),
  image_caption: z.string().nullable().optional(),
  is_featured: z.boolean().default(false),
  created_at: z.string().nullable().optional(),
});

export type TCollection = z.infer<typeof collectionSchema>;

export const collectionsSchema = z.array(collectionSchema);

export const collectionListingSchema = z.object({
  collection_id: z.string(),
  listing_id: z.string(),
  display_order: z.number(),
});

export type TCollectionListing = z.infer<typeof collectionListingSchema>;

export const collectionListingsSchema = z.array(collectionListingSchema);
