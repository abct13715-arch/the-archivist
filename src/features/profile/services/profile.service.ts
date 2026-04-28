import { supabase } from '@/lib/supabase';

export const profileService = {
  getProfiles: async () => {
    return await supabase.from('users').select('*');
  },
};
