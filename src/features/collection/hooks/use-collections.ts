import { useQuery } from '@tanstack/react-query';
import { collectionService } from '../services/collection.service';

export const useGetCollections = () => {
  return useQuery({
    queryKey: ['collections'],
    queryFn: async () => {
      const { data, error } = await collectionService.getCollections();

      if (error) throw new Error(error.message);
      return data;
    },
  });
};
