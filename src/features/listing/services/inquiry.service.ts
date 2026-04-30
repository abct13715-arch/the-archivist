import {supabase} from '@/lib/supabase';

export const inquiryService = {
  getInquiries: async () => {
    return await supabase.from('inquiries').select('*');
  },
};
