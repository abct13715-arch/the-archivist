import {useQuery} from '@tanstack/react-query';

import {profileService} from '../services/profile.service';

export const useGetUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const {data, error} = await profileService.getProfiles();

      if (error) throw new Error(error.message);
      return data;
    },
  });
};
