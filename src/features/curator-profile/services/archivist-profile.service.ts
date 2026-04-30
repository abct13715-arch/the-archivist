import {supabase} from '@/lib/supabase';

export const archivistProfileService = {
  getArchivistProfiles: async () => {
    return await supabase.from('archivist_profiles').select('*');
  },

  getProfileByUserId: async (userId: string) => {
    return await supabase
      .from('archivist_profiles')
      .select(
        `
        *,
        user:users(*)
      `,
      )
      .eq('user_id', userId)
      .single();
  },
};
