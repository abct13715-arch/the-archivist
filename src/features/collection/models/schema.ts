import {archivistProfileSchema} from '@/features/curator-profile/models';
import {
  listingSchema as baseListingSchema,
  listingImageSchema,
} from '@/features/listing/models';
import {z} from 'zod';

export const listingSchema = baseListingSchema.extend({
  listing_images: z.array(listingImageSchema).optional(),
  category: z.object({name: z.string()}).optional(),
});

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
  archivist: z
    .object({
      id: z.string(),
      display_name: z.string(),
      avatar_path: z.string().nullable(),
      profile: archivistProfileSchema.nullable().optional(),
    })
    .optional(),
  collection_listings: z
    .array(z.lazy(() => collectionListingSchema))
    .optional(),
});

export type TCollection = z.infer<typeof collectionSchema>;

export const collectionsSchema = z.array(collectionSchema);

export const collectionListingSchema = z.object({
  collection_id: z.string(),
  listing_id: z.string(),
  display_order: z.number(),
  listing: listingSchema,
});

export type TCollectionListing = z.infer<typeof collectionListingSchema>;

export const collectionListingsSchema = z.array(collectionListingSchema);
