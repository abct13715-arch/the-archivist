import {Image} from 'expo-image';
import {router} from 'expo-router';
import {Text, TouchableOpacity, View} from 'react-native';

import {useAcquisitions} from '../data';

export const HomeAcquisitions = () => {
  const {acquisitions} = useAcquisitions();

  const handleListingPress = (index: number) => {
    const listingId = (index + 1).toString();
    router.push(`/listing/${listingId}`);
  };

  return (
    <View className="py-8">
      <View className="mx-auto mb-4 h-px w-2/3 bg-tertiary-100" />

      <View className="py-14">
        <View className="mx-4 mb-0 flex-row items-start justify-between px-6 pb-4">
          <Text className="w-1/2 text-xs font-bold tracking-label-lg text-primary-900">
            SHOP THE CONVERSATION
          </Text>
          <TouchableOpacity
            onPress={() => router.push('/browse')}
            className="w-1/2 items-end"
          >
            <Text className="text-right text-xs font-bold tracking-label-md text-brand-secondary">
              VIEW FULL DIALOGUE GALLERY
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mx-4 border border-tertiary-100">
          <View className="flex-row">
            <TouchableOpacity
              onPress={() => handleListingPress(0)}
              className="w-1/2 border-b border-r border-tertiary-100 p-4"
            >
              <Image
                source={acquisitions[0].image}
                style={{width: '100%', aspectRatio: 1}}
                contentFit="cover"
              />
              <View className="gap-1 pt-3">
                <Text className="text-xs font-bold tracking-label-lg text-brand-secondary">
                  {acquisitions[0].category}
                </Text>
                <Text className="font-playfair text-lg leading-tight text-primary-900">
                  {acquisitions[0].name}
                </Text>
                <Text className="text-sm text-primary-900">
                  {acquisitions[0].price}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleListingPress(1)}
              className="w-1/2 border-b border-tertiary-100 p-4"
            >
              <Image
                source={acquisitions[1].image}
                style={{width: '100%', aspectRatio: 1}}
                contentFit="cover"
              />
              <View className="gap-1 pt-3">
                <Text className="text-xs font-bold tracking-label-lg text-brand-secondary">
                  {acquisitions[1].category}
                </Text>
                <Text className="font-playfair text-lg leading-tight text-primary-900">
                  {acquisitions[1].name}
                </Text>
                <Text className="text-sm text-primary-900">
                  {acquisitions[1].price}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-row">
            <TouchableOpacity
              onPress={() => handleListingPress(2)}
              className="w-1/2 border-r border-tertiary-100 p-4"
            >
              <Image
                source={acquisitions[2].image}
                style={{width: '100%', aspectRatio: 1}}
                contentFit="cover"
              />
              <View className="gap-1 pt-3">
                <Text className="text-xs font-bold tracking-label-lg text-brand-secondary">
                  {acquisitions[2].category}
                </Text>
                <Text className="font-playfair text-lg leading-tight text-primary-900">
                  {acquisitions[2].name}
                </Text>
                <Text className="text-sm text-primary-900">
                  {acquisitions[2].price}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleListingPress(3)}
              className="w-1/2 p-4"
            >
              <Image
                source={acquisitions[3].image}
                style={{width: '100%', aspectRatio: 1}}
                contentFit="cover"
              />
              <View className="gap-1 pt-3">
                <Text className="text-xs font-bold tracking-label-lg text-brand-secondary">
                  {acquisitions[3].category}
                </Text>
                <Text className="font-playfair text-lg leading-tight text-primary-900">
                  {acquisitions[3].name}
                </Text>
                <Text className="text-sm text-primary-900">
                  {acquisitions[3].price}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="mx-auto mb-4 h-px w-2/3 bg-tertiary-100" />
    </View>
  );
};
