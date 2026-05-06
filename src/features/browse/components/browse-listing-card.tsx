import {useCallback, useEffect, useState} from 'react';
import {Colors} from '@/constants/theme';
import {useAuth} from '@/contexts/auth-context';
import {TListing} from '@/features/listing/models';
import {useToggleSavedItem} from '@/features/saved/hooks/use-saved-items';
import {MaterialIcons} from '@expo/vector-icons';
import {Image} from 'expo-image';
import {router} from 'expo-router';
import {Text, TouchableOpacity, View} from 'react-native';

type Props = {
  listing: TListing;
  isBookmarked?: boolean;
  onRequireAuth?: () => void;
};

export const BrowseListingCard = ({
  listing,
  isBookmarked = false,
  onRequireAuth,
}: Props) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);
  const {user} = useAuth();
  const {mutate: toggleSave} = useToggleSavedItem();

  useEffect(() => {
    setBookmarked(isBookmarked);
  }, [isBookmarked]);

  const handleToggle = useCallback(() => {
    if (!user) {
      onRequireAuth?.();
      return;
    }

    setBookmarked(!bookmarked);

    toggleSave(
      {
        userId: user.id,
        listingId: listing.id,
      },
      {
        onSuccess: () => console.log('Save toggle successful'),
        onError: error => console.error('Save toggle failed:', error),
      },
    );
  }, [bookmarked, user, onRequireAuth, toggleSave, listing.id]);

  const handlePress = useCallback(() => {
    router.push(`/listing/${listing.id}`);
  }, [listing.id]);

  const imageUrl = listing.images?.[0]?.image_path;

  return (
    <TouchableOpacity onPress={handlePress} className="mb-10 w-[46%]">
      <View className="relative mb-4 border border-neutral-300">
        <Image
          source={imageUrl}
          style={{width: '100%', aspectRatio: 3 / 4}}
          contentFit="cover"
        />
        <TouchableOpacity
          className="absolute right-3 top-3"
          onPress={handleToggle}
        >
          <MaterialIcons
            name={bookmarked ? 'bookmark' : 'bookmark-outline'}
            size={24}
            color={Colors.brand.secondary}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          />
        </TouchableOpacity>
      </View>
      <Text
        className="mb-1 font-playfair text-lg leading-tight text-primary-900"
        numberOfLines={2}
      >
        {listing.title}
      </Text>
      <View className="flex-row items-center justify-between">
        <Text className="text-[11px] font-bold uppercase tracking-widest text-secondary-500">
          ${listing.price}
        </Text>
        <View className="flex-row items-center gap-1">
          <MaterialIcons name="star" size={14} color={Colors.brand.secondary} />
          <Text className="text-[11px] font-bold text-primary-900">
            {listing.rating ? listing.rating.toFixed(1) : 'N/A'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
