import { supabase } from '@/lib/supabase';

export const listingService = {
  getListings: async () => {
    return await supabase.from('listings').select('*');
  },
};
