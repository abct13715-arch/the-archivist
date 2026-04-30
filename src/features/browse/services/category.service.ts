import {supabase} from '@/lib/supabase';

export const categoryService = {
  getCategories: async () => {
    return await supabase.from('categories').select('*');
  },
};
