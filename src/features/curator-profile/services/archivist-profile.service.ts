import { supabase } from '@/lib/supabase';

export const archivistProfileService = {
  getArchivistProfiles: async () => {
    return await supabase.from('archivist_profiles').select('*');
  },
};
