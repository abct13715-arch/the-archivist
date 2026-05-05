import {listingImageService} from '@/features/listing/services/listing-image.service';
import {useQuery} from '@tanstack/react-query';

import {collectionSchema, collectionsSchema} from '../models';
import {collectionService} from '../services/collection.service';

export const useGetCollections = () => {
  return useQuery({
    queryKey: ['collections'],
    queryFn: async () => {
      const {data, error} = await collectionService.getCollections();
      if (error) throw new Error(error.message);

      try {
        const collections = collectionsSchema.parse(data);

        for (const collection of collections) {
          if (
            collection.cover_path &&
            !collection.cover_path.startsWith('http')
          ) {
            collection.cover_path = collectionService.getCoverUrl(
              collection.cover_path,
            );
          }
        }

        return collections;
      } catch (error) {
        console.error('Detailed Zod Error:', JSON.stringify(error, null, 2));
        throw error;
      }
    },
  });
};

export const useGetCollectionById = (id: string) => {
  return useQuery({
    queryKey: ['collections', id],
    queryFn: async () => {
      const {data, error} = await collectionService.getCollectionById(id);
      if (error) throw new Error(error.message);

      const collection = collectionSchema.parse(data);

      // Resolve collection cover URL
      if (collection.cover_path && !collection.cover_path.startsWith('http')) {
        collection.cover_path = collectionService.getCoverUrl(
          collection.cover_path,
        );
      }

      // Resolve listing image URLs
      if (collection.collection_listings) {
        for (const cl of collection.collection_listings) {
          if (cl.listing.listing_images) {
            for (const img of cl.listing.listing_images) {
              if (img.image_path && !img.image_path.startsWith('http')) {
                img.image_path = listingImageService.getPublicUrl(
                  img.image_path,
                );
              }
            }
          }
        }
      }
      return collection;
    },
    enabled: !!id,
  });
};
export const useGetFeaturedCollection = () => {
  return useQuery({
    queryKey: ['collections', 'featured'],
    queryFn: async () => {
      const {data, error} = await collectionService.getFeaturedCollection();
      if (error) throw new Error(error.message);

      try {
        const collection = collectionSchema.parse(data[0]);

        if (
          collection.cover_path &&
          !collection.cover_path.startsWith('http')
        ) {
          collection.cover_path = collectionService.getCoverUrl(
            collection.cover_path,
          );
        }

        return collection;
      } catch (error) {
        console.error('Detailed Zod Error:', JSON.stringify(error, null, 2));
        throw error;
      }
    },
  });
};

export const useGetFeaturedCollections = () => {
  return useQuery({
    queryKey: ['all', 'collections', 'featured'],
    queryFn: async () => {
      const {data, error} = await collectionService.getFeaturedCollections();
      if (error) throw new Error(error.message);

      try {
        const collections = collectionSchema.array().parse(data);

        for (const collection of collections) {
          if (
            collection.cover_path &&
            !collection.cover_path.startsWith('http')
          ) {
            collection.cover_path = collectionService.getCoverUrl(
              collection.cover_path,
            );
          }
        }

        return collections;
      } catch (error) {
        console.error('Detailed Zod Error:', JSON.stringify(error, null, 2));
        throw error;
      }
    },
  });
};
