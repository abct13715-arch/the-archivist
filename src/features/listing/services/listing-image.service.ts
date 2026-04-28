import { supabase } from '@/lib/supabase';

export const listingImageService = {
  getListingImages: async () => {
    return await supabase.from('listing_images').select('*');
  },
};
