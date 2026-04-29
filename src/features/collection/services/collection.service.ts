import { supabase } from '@/lib/supabase';

export const collectionService = {
  getCollections: async () => {
    return await supabase.from('collections').select('*');
  },

  uploadCoverImage: async (file: File | Blob, path: string) => {
    const { data, error } = await supabase.storage
      .from('collections')
      .upload(path, file);
    return { data, error };
  },

  getCoverUrl: (path: string) => {
    return supabase.storage.from('collections').getPublicUrl(path).data.publicUrl;
  },
};
