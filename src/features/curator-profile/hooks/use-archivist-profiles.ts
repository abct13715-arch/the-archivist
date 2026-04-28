import { useQuery } from '@tanstack/react-query';
import { archivistProfileService } from '../services/archivist-profile.service';

export const useGetArchivistProfiles = () => {
  return useQuery({
    queryKey: ['archivist_profiles'],
    queryFn: async () => {
      const { data, error } = await archivistProfileService.getArchivistProfiles();

      if (error) throw new Error(error.message);
      return data;
    },
  });
};
