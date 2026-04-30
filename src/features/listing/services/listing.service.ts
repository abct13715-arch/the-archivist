import {supabase} from '@/lib/supabase';

export const listingService = {
  getListings: async () => {
    return await supabase.from('listings').select('*');
  },

  getListingById: async (id: string) => {
    return await supabase
      .from('listings')
      .select(
        `
        *,
        archivist:users(*)
      `,
      )
      .eq('id', id)
      .single();
  },

  getListingsByArchivistId: async (archivistId: string) => {
    return await supabase
      .from('listings')
      .select('*')
      .eq('archivist_id', archivistId);
  },
};
