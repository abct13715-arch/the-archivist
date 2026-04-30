import {useQuery} from '@tanstack/react-query';

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
