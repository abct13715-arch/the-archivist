import { supabase } from '@/lib/supabase';

export const collectionListingService = {
  getCollectionListings: async () => {
    return await supabase.from('collection_listings').select('*');
  },
};
