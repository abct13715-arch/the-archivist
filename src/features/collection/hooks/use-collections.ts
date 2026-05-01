import {useQuery} from '@tanstack/react-query';

import {collectionSchema} from '../models';
import {collectionService} from '../services/collection.service';

export const useGetCollections = () => {
  return useQuery({
    queryKey: ['collections'],
    queryFn: async () => {
      const {data, error} = await collectionService.getCollections();
      if (error) throw new Error(error.message);
      return data;
    },
  });
};

export const useGetCollectionById = (id: string) => {
  return useQuery({
    queryKey: ['collections', id],
    queryFn: async () => {
      const {data, error} = await collectionService.getCollectionById(id);
      if (error) throw new Error(error.message);
      return data;
    },
    enabled: !!id,
  });
};

export const useGetFeaturedCollections = () => {
  return useQuery({
    queryKey: ['collections', 'featured'],
    queryFn: async () => {
      const {data, error} = await collectionService.getFeaturedCollection();
      if (error) throw new Error(error.message);

      try {
        const collection = collectionSchema.parse(data);

        // If there's a path and it's not already a full URL, get the public URL
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
