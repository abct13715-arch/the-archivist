import { useQuery } from '@tanstack/react-query';
import { listingService } from '../services/listing.service';

export const useGetListings = () => {
  return useQuery({
    queryKey: ['listings'],
    queryFn: async () => {
      const { data, error } = await listingService.getListings();

      if (error) throw new Error(error.message);
      return data;
    },
  });
};
