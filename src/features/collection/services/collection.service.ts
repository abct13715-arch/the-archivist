import { supabase } from '@/lib/supabase';

export const collectionService = {
  getCollections: async () => {
    return await supabase.from('collections').select('*');
  },
};
