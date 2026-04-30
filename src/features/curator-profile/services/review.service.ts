import {supabase} from '@/lib/supabase';

export const reviewService = {
  getReviews: async () => {
    return await supabase.from('reviews').select('*');
  },

  getReviewsByArchivistId: async (archivistId: string) => {
    return await supabase
      .from('reviews')
      .select(
        `
        *,
        reviewer:users!reviewer_id(*)
      `,
      )
      .eq('archivist_id', archivistId);
  },
};
