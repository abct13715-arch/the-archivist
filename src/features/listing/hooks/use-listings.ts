import {useQuery} from '@tanstack/react-query';

import {listingService} from '../services/listing.service';

export const useGetListings = () => {
  return useQuery({
    queryKey: ['listings'],
    queryFn: async () => {
      const {data, error} = await listingService.getListings();

      if (error) throw new Error(error.message);
      return data;
    },
  });
};

export const useGetListingById = (id: string) => {
  return useQuery({
    queryKey: ['listings', id],
    queryFn: async () => {
      const {data, error} = await listingService.getListingById(id);
      if (error) throw new Error(error.message);
      return data;
    },
    enabled: !!id,
  });
};

export const useGetListingsByArchivist = (archivistId: string) => {
  return useQuery({
    queryKey: ['listings', {archivistId}],
    queryFn: async () => {
      const {data, error} =
        await listingService.getListingsByArchivistId(archivistId);
      if (error) throw new Error(error.message);
      return data;
    },
    enabled: !!archivistId,
  });
};
