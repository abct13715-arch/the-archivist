import { supabase } from '@/lib/supabase';

export const listingImageService = {
  getListingImages: async () => {
    return await supabase.from('listing_images').select('*');
  },

  uploadImage: async (file: File | Blob, path: string) => {
    const { data, error } = await supabase.storage
      .from('listings')
      .upload(path, file);
    return { data, error };
  },

  getPublicUrl: (path: string) => {
    return supabase.storage.from('listings').getPublicUrl(path).data.publicUrl;
  },
};
