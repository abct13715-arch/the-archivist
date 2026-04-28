import { useQuery } from '@tanstack/react-query';
import { collectionListingService } from '../services/collection-listing.service';

export const useGetCollectionListings = () => {
  return useQuery({
    queryKey: ['collection_listings'],
    queryFn: async () => {
      const { data, error } = await collectionListingService.getCollectionListings();

      if (error) throw new Error(error.message);
      return data;
    },
  });
};
