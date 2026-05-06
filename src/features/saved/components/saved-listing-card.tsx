import {Colors} from '@/constants/theme';
import {MaterialIcons} from '@expo/vector-icons';
import {Image} from 'expo-image';
import {router} from 'expo-router';
import {Text, TouchableOpacity, View} from 'react-native';

import {TSavedListing} from '../data';

type Props = {
  listing: TSavedListing;
};

export const SavedListingCard = ({listing}: Props) => {
  const handlePress = () => {
    router.push(`/listing/${listing.id}`);
  };

  return (
    <View className="overflow-hidden border border-neutral-300 bg-surface">
      <View className="overflow-hidden">
        <Image
          source={listing.image}
          style={{width: '100%', aspectRatio: 1}}
          contentFit="cover"
        />
      </View>

      <View className="border-t border-neutral-300 px-4 pt-6">
        <View className="mb-2 flex-row items-start justify-between">
          <Text
            className="mr-2 flex-1 font-playfair text-2xl leading-tight text-primary-900"
            numberOfLines={2}
          >
            {listing.title}
          </Text>
          <MaterialIcons
            name="bookmark"
            size={24}
            color={Colors.brand.secondary}
          />
        </View>

        <Text className="mb-2 text-[10px] font-bold uppercase tracking-widest text-tertiary-500">
          {listing.studio}
        </Text>

        <Text className="text-lg text-primary-900">{listing.price}</Text>
      </View>
      <View className="px-2 py-2">
        <TouchableOpacity
          onPress={handlePress}
          className="border border-primary-900 px-6 py-2"
        >
          <Text className="text-center text-[10px] font-bold uppercase tracking-widest text-primary-900">
            VIEW PIECE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
