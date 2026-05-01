import {useQuery} from '@tanstack/react-query';

import {listingsSchema} from '../models';
import {listingImageService} from '../services/listing-image.service';
import {listingService} from '../services/listing.service';

export const useGetListings = () => {
  return useQuery({
    queryKey: ['listings'],
    queryFn: async () => {
      const {data, error} = await listingService.getListings();
      if (error) throw new Error(error.message);

      try {
        const listings = listingsSchema.parse(data);

        // Resolve image URLs
        return listings.map(listing => {
          if (listing.images && listing.images.length > 0) {
            const firstImage = listing.images[0];
            if (
              firstImage.image_path &&
              !firstImage.image_path.startsWith('http')
            ) {
              firstImage.image_path = listingImageService.getPublicUrl(
                firstImage.image_path,
              );
            }
          }
          return listing;
        });
      } catch (error) {
        console.error(
          'Detailed Listings Zod Error:',
          JSON.stringify(error, null, 2),
        );
        throw error;
      }
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
