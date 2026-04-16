import {Image} from 'expo-image';
import {ImageSourcePropType, Text, TouchableOpacity, View} from 'react-native';

type CollectionCardProps = {
  seriesNumber: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
  onPress: () => void;
};

export const CollectionCard = ({
  seriesNumber,
  title,
  description,
  image,
  onPress,
}: CollectionCardProps) => {
  return (
    <View className="mb-10 border border-primary-100 bg-white p-2 pb-4">
      <View className="relative">
        <Image
          source={image}
          style={{width: '100%', aspectRatio: 1}}
          contentFit="cover"
        />
        <View className="absolute left-3 top-3 border border-primary-900 bg-white px-3 py-3">
          <Text className="text-xs font-bold tracking-label-lg text-primary-900">
            SERIES {seriesNumber}
          </Text>
        </View>
      </View>

      <View className="mt-4 gap-2 p-2">
        <Text className="font-playfair text-3xl leading-tight text-primary-900">
          {title}
        </Text>
        <Text className="text-sm leading-6 text-tertiary-500">
          {description}
        </Text>
        <TouchableOpacity
          className="mt-1 flex-row items-center gap-2 self-start border-b border-primary-900 pb-1"
          onPress={onPress}
        >
          <Text className="text-xs font-bold tracking-label-lg text-primary-900">
            VIEW COLLECTION
          </Text>
          <Text className="text-primary-900">→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
