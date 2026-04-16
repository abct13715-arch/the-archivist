import {TFeaturedCollection} from '@/types';
import {Image} from 'expo-image';
import {Text, TouchableOpacity, View} from 'react-native';

type FeaturedCollectionProps = {
  collection: TFeaturedCollection;
  onExplore: () => void;
  onViewAll: () => void;
};

export const FeaturedCollection = ({
  collection,
  onExplore,
  onViewAll,
}: FeaturedCollectionProps) => {
  const [firstLine, secondLine] = collection.title.split('\n');

  return (
    <View>
      <View className="px-6 pb-6 pt-10">
        <View className="self-start border border-primary-900 px-3 py-1">
          <Text className="text-xs font-bold tracking-label-lg text-primary-900">
            {collection.volume}
          </Text>
        </View>

        <View className="mt-4">
          <Text className="font-playfair text-6xl leading-tight text-primary-900">
            {firstLine}
          </Text>
          <Text className="font-playfair text-6xl italic leading-tight text-brand-secondary">
            {secondLine}
          </Text>
        </View>

        <Text className="mt-3 text-base leading-7 text-tertiary-500">
          {collection.description}
        </Text>

        <View className="mt-6 gap-3">
          <TouchableOpacity
            onPress={onExplore}
            className="self-start bg-primary-900 px-6 py-4"
          >
            <Text className="text-xs font-bold tracking-label-lg text-neutral-100">
              EXPLORE THE COLLECTION
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onViewAll}
            className="self-start border border-primary-900 px-6 py-4"
          >
            <Text className="text-xs tracking-label-lg text-primary-900">
              VIEW ALL COLLECTIONS
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-6 pb-8">
        <View className="relative">
          <Image
            source={collection.image}
            style={{width: '100%', aspectRatio: 3 / 4}}
            contentFit="cover"
          />

          <View className="absolute bottom-0 left-0 bg-white px-3 py-2">
            <Text className="text-xs tracking-label-lg text-tertiary-500">
              {collection.imageCaption}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
