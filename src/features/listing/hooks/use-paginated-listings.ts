import {useQuery} from '@tanstack/react-query';

import {listingsSchema} from '../models';
import {listingImageService} from '../services/listing-image.service';
import {listingService} from '../services/listing.service';

interface UsePaginatedListingsParameters {
  category_id?: number;
  minPrice?: number;
  maxPrice?: number;
  condition?: string;
  searchQuery?: string;
  rating?: number;
  page?: number;
}

export const usePaginatedListings = (
  params: UsePaginatedListingsParameters,
) => {
  return useQuery({
    queryKey: ['listings', params],
    queryFn: async () => {
      const {data, count, error} = await listingService.searchListings(params);
      if (error) throw new Error(error.message);

      const listings = listingsSchema.parse(data);

      const resolvedListings = listings.map(listing => {
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

      return {data: resolvedListings, count};
    },
  });
};
