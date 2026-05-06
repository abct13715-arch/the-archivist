import {collectionSchema} from '@/features/collection/models/schema';
import {
  listingSchema as baseListingSchema,
  listingImageSchema,
} from '@/features/listing/models/schema';
import {z} from 'zod';

export const listingSchema = baseListingSchema.extend({
  listing_images: z.array(listingImageSchema).optional(),
});

export const savedItemSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  listing_id: z.string(),
  created_at: z.string().nullable().optional(),
  listing: listingSchema.optional(),
});

export type TSavedItem = z.infer<typeof savedItemSchema>;

export const savedItemsSchema = z.array(savedItemSchema);

export const savedCollectionSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  collection_id: z.string(),
  created_at: z.string().nullable().optional(),
  collection: collectionSchema.optional(),
});

export type TSavedCollectionItem = z.infer<typeof savedCollectionSchema>;

export const savedCollectionsSchema = z.array(savedCollectionSchema);
