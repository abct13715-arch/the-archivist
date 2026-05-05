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
        archivist:users(
          *,
          profile:archivist_profiles(*)
        ),
        collection_listings(
          collection_id,
          listing_id,
          display_order,
          listing:listings(
            *,
            category:categories(name),
            listing_images(*)
          )
        )
      `,
      )
      .eq('id', id)
      .order('display_order', {
        foreignTable: 'collection_listings',
        ascending: true,
      })
      .single();
  },

  getFeaturedCollection: async () => {
    return await supabase
      .from('collections')
      .select('*')
      .eq('is_featured', true)
      .limit(1);
  },

  getFeaturedCollections: async () => {
    return await supabase
      .from('collections')
      .select('*')
      .eq('is_featured', true);
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
