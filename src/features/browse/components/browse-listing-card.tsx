import {useCallback, useState} from 'react';
import {Colors} from '@/constants/theme';
import {TListing} from '@/features/listing/models';
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

  const handleToggle = useCallback(() => {
    if (onRequireAuth) {
      onRequireAuth();
      return;
    }
    const newState = !bookmarked;
    setBookmarked(newState);
  }, [bookmarked, onRequireAuth]);

  const handlePress = useCallback(() => {
    router.push(`/listing/${listing.id}`);
  }, [listing.id]);

  return (
    <TouchableOpacity onPress={handlePress} className="mb-10 w-[46%]">
      <View className="relative mb-4 border border-neutral-300">
        <Image
          source={listing.images[0].image_path}
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
      <Text className="text-[11px] font-bold uppercase tracking-widest text-secondary-500">
        {listing.price}
      </Text>
    </TouchableOpacity>
  );
};
