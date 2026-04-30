import {useQuery} from '@tanstack/react-query';

import {listingImageService} from '../services/listing-image.service';

export const useGetListingImages = () => {
  return useQuery({
    queryKey: ['listing_images'],
    queryFn: async () => {
      const {data, error} = await listingImageService.getListingImages();

      if (error) throw new Error(error.message);
      return data;
    },
  });
};
