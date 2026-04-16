import {Image} from 'expo-image';
import {ImageSourcePropType, Text, TouchableOpacity, View} from 'react-native';

type CuratorCardProps = {
  image: ImageSourcePropType;
  location: string;
  name: string;
  quote: string;
  selections: number;
  onPress: () => void;
};

export const CuratorCard = ({
  image,
  location,
  name,
  quote,
  selections,
  onPress,
}: CuratorCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="mb-4 gap-3 border border-tertiary-100 p-5"
    >
      <Image
        source={image}
        style={{width: 100, height: 100}}
        contentFit="cover"
      />

      <Text className="mt-2 text-xs font-bold tracking-label-lg text-brand-secondary">
        {location}
      </Text>

      <Text className="font-playfair text-3xl leading-tight text-primary-900">
        {name}
      </Text>

      <Text className="text-base italic leading-6 text-tertiary-500">
        &quot;{quote}&quot;
      </Text>

      <View className="flex-row items-center justify-between border-t border-tertiary-100 pt-4">
        <Text className="text-xs font-bold tracking-label-lg text-primary-900">
          {selections} SELECTIONS
        </Text>
        <Text className="text-primary-900">→</Text>
      </View>
    </TouchableOpacity>
  );
};
