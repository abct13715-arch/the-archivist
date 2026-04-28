import { supabase } from '@/lib/supabase';

export const reviewService = {
  getReviews: async () => {
    return await supabase.from('reviews').select('*');
  },
};
