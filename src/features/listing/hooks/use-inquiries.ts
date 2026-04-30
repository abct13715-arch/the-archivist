import {useQuery} from '@tanstack/react-query';

import {inquiryService} from '../services/inquiry.service';

export const useGetInquiries = () => {
  return useQuery({
    queryKey: ['inquiries'],
    queryFn: async () => {
      const {data, error} = await inquiryService.getInquiries();

      if (error) throw new Error(error.message);
      return data;
    },
  });
};
