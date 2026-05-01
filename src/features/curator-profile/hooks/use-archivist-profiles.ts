import {images} from '@/assets';
import {profileService} from '@/features/profile/services/profile.service';
import {useQuery} from '@tanstack/react-query';

import {archivistProfileService} from '../services/archivist-profile.service';

export const useGetArchivistProfiles = () => {
  return useQuery({
    queryKey: ['archivist_profiles'],
    queryFn: async () => {
      const {data, error} =
        await archivistProfileService.getArchivistProfiles();

      if (error) {
        throw new Error(error.message);
      }

      return (data || []).map(profile => {
        let avatarUrl = profile.user?.avatar_url;

        if (avatarUrl && !avatarUrl.startsWith('http')) {
          avatarUrl = profileService.getAvatarUrl(avatarUrl);
        }

        return {
          id: profile.id,
          image: avatarUrl ? {uri: avatarUrl} : images.profileFace,
          location: profile.location || 'Unknown',
          name: profile.user?.display_name || 'Anonymous',
          quote: profile.bio || '',
          selections: (profile.listings as any)?.[0]?.count || 0,
        };
      });
    },
  });
};
