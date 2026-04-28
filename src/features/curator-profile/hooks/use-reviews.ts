import { useQuery } from '@tanstack/react-query';
import { reviewService } from '../services/review.service';

export const useGetReviews = () => {
  return useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const { data, error } = await reviewService.getReviews();

      if (error) throw new Error(error.message);
      return data;
    },
  });
};
