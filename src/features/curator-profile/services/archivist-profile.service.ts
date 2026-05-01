import {supabase} from '@/lib/supabase';

export const archivistProfileService = {
  getArchivistProfiles: async () => {
    return await supabase.from('archivist_profiles').select(`
        *,
        user:users(id, display_name, avatar_url:avatar_path),
        listings:listings(count)
      `);
  },

  getProfileByUserId: async (userId: string) => {
    return await supabase
      .from('archivist_profiles')
      .select(
        `
        *,
        user:users(id, display_name, avatar_url:avatar_path)
      `,
      )
      .eq('user_id', userId)
      .single();
  },
};
