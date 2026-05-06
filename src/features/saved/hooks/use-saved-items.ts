import {collectionService} from '@/features/collection/services/collection.service';
import {listingImageService} from '@/features/listing/services/listing-image.service';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

import {savedCollectionsSchema, savedItemsSchema} from '../models/schema';
import {savedItemService} from '../services/saved-item.service';

export const useGetSavedListings = (userId: string) => {
  return useQuery({
    queryKey: ['saved_items', userId],
    queryFn: async () => {
      const {data, error} = await savedItemService.getSavedListings(userId);
      if (error) {
        throw new Error(error.message);
      }

      if (!data) {
        return [];
      }

      const savedItems = savedItemsSchema.parse(data);

      for (const item of savedItems) {
        if (item.listing?.listing_images) {
          for (const img of item.listing.listing_images) {
            if (img.image_path && !img.image_path.startsWith('http')) {
              img.image_path = listingImageService.getPublicUrl(img.image_path);
            }
          }
        }
      }
      return savedItems;
    },
    enabled: !!userId,
  });
};

export const useGetSavedCollections = (userId: string) => {
  return useQuery({
    queryKey: ['saved_collections', userId],
    queryFn: async () => {
      const {data, error} = await savedItemService.getSavedCollections(userId);
      if (error) {
        throw new Error(error.message);
      }

      if (!data) {
        return [];
      }

      const savedCollections = savedCollectionsSchema.parse(data);

      for (const item of savedCollections) {
        if (
          item.collection?.cover_path &&
          !item.collection.cover_path.startsWith('http')
        ) {
          item.collection.cover_path = collectionService.getCoverUrl(
            item.collection.cover_path,
          );
        }
      }
      return savedCollections;
    },
    enabled: !!userId,
  });
};

export const useToggleSavedItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      userId,
      listingId,
    }: {
      userId: string;
      listingId: string;
    }) => {
      const {error} = await savedItemService.toggleSavedItem(userId, listingId);
      if (error) {
        throw new Error(
          error instanceof Error
            ? error.message
            : (error as any).message || 'An unexpected error occurred',
        );
      }
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['saved_items', variables.userId],
      });
      queryClient.invalidateQueries({
        queryKey: [
          'is_saved',
          variables.userId,
          variables.listingId,
          'listing',
        ],
      });
    },
  });
};

export const useToggleSavedCollection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      userId,
      collectionId,
    }: {
      userId: string;
      collectionId: string;
    }) => {
      const {error} = await savedItemService.toggleSavedCollection(
        userId,
        collectionId,
      );
      if (error) {
        throw new Error(
          error instanceof Error
            ? error.message
            : (error as any).message || 'An unexpected error occurred',
        );
      }
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['saved_collections', variables.userId],
      });
      queryClient.invalidateQueries({
        queryKey: [
          'is_saved',
          variables.userId,
          variables.collectionId,
          'collection',
        ],
      });
    },
  });
};

export const useCheckIsSaved = (
  userId: string,
  itemId: string,
  type: 'listing' | 'collection',
) => {
  return useQuery({
    queryKey: ['is_saved', userId, itemId, type],
    queryFn: async () => {
      const {data, error} = await savedItemService.isItemSaved(
        userId,
        itemId,
        type,
      );
      if (error) throw error;
      return data;
    },
    enabled: !!userId && !!itemId,
  });
};

export const useIsSaved = (
  userId: string,
  itemId: string,
  type: 'listing' | 'collection',
) => {
  const {data} = useCheckIsSaved(userId, itemId, type);
  return !!data;
};
