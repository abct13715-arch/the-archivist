import {supabase} from '@/lib/supabase';

export const savedItemService = {
  getSavedItems: async () => {
    return await supabase.from('saved_items').select('*');
  },
};
