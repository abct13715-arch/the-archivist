import { supabase } from '@/lib/supabase';

export const profileService = {
  getProfiles: async () => {
    return await supabase.from('users').select('*');
  },

  uploadAvatar: async (file: File | Blob, path: string) => {
    const { data, error } = await supabase.storage
      .from('avatars')
      .upload(path, file);
    return { data, error };
  },

  getAvatarUrl: (path: string) => {
    return supabase.storage.from('avatars').getPublicUrl(path).data.publicUrl;
  },
};
