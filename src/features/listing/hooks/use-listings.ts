import {useQuery} from '@tanstack/react-query';

import {listingSchema, listingsSchema} from '../models';
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

      const listing = listingSchema.parse(data);

      const images = (listing.images || []).map((img: any) => ({
        uri: img.image_path.startsWith('http')
          ? img.image_path
          : listingImageService.getPublicUrl(img.image_path),
      }));

      return {
        ...listing,
        image: images[0] || null,
        images: images,
        formattedPrice: new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: listing.currency || 'USD',
        }).format(listing.price),
        condition: (listing.condition || 'curated').toUpperCase(),
        curatedBy: listing.archivist?.display_name || 'Archivist',
        totalRatings: listing.reviews?.length || 0,
        descriptionArray: listing.description
          ? listing.description.split('\n\n')
          : [],
      };
    },
    enabled: !!id,
  });
};

export const useGetRelatedListings = (
  archivistId: string,
  excludeId: string,
) => {
  return useQuery({
    queryKey: ['listings', 'related', archivistId, excludeId],
    queryFn: async () => {
      const {data, error} = await listingService.getRelatedListings(
        archivistId,
        excludeId,
      );
      if (error) throw new Error(error.message);

      return data.map((item: any) => {
        const listing = listingSchema.parse(item);
        const imgPath = listing.images?.[0]?.image_path;
        return {
          ...listing,
          brand: listing.category?.name || 'Curation',
          formattedPrice: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: listing.currency || 'USD',
          }).format(listing.price),
          image: imgPath
            ? {
                uri: imgPath.startsWith('http')
                  ? imgPath
                  : listingImageService.getPublicUrl(imgPath),
              }
            : null,
        };
      });
    },
    enabled: !!archivistId,
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
