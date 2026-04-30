import {useQuery} from '@tanstack/react-query';

import {reviewService} from '../services/review.service';

export const useGetReviewsByArchivist = (archivistId: string) => {
  return useQuery({
    queryKey: ['reviews', archivistId],
    queryFn: async () => {
      const {data, error} =
        await reviewService.getReviewsByArchivistId(archivistId);
      if (error) throw new Error(error.message);
      return data;
    },
    enabled: !!archivistId,
  });
};
