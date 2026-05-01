import {supabase} from '@/lib/supabase';

export const collectionService = {
  getCollections: async () => {
    return await supabase.from('collections').select('*');
  },

  getCollectionById: async (id: string) => {
    return await supabase
      .from('collections')
      .select(
        `
        *,
        listings:collection_listings(
          listing:listings(*)
        )
      `,
      )
      .eq('id', id)
      .single();
  },

  getFeaturedCollection: async () => {
    return await supabase
      .from('collections')
      .select('*')
      .eq('is_featured', true)
      .single();
  },

  uploadCoverImage: async (file: File | Blob, path: string) => {
    const {data, error} = await supabase.storage
      .from('collections')
      .upload(path, file);
    return {data, error};
  },

  getCoverUrl: (path: string) => {
    return supabase.storage.from('collections').getPublicUrl(path).data
      .publicUrl;
  },
};
