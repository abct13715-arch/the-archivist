import {useQuery} from '@tanstack/react-query';

import {archivistProfileService} from '../services/archivist-profile.service';

export const useGetArchivistProfile = (userId: string) => {
  return useQuery({
    queryKey: ['archivist_profile', userId],
    queryFn: async () => {
      const {data, error} =
        await archivistProfileService.getProfileByUserId(userId);
      if (error) throw new Error(error.message);
      return data;
    },
    enabled: !!userId,
  });
};
