import {Colors} from '@/constants/theme';
import {Image} from 'expo-image';
import {ImageSourcePropType, Text, TouchableOpacity, View} from 'react-native';

type CuratorListingCardProps = {
  index: string;
  name: string;
  image: ImageSourcePropType;
  category: string;
  price: string;
  onPress?: () => void;
};

export const CuratorListingCard = ({
  index,
  name,
  image,
  category,
  price,
  onPress,
}: CuratorListingCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: Colors.light.border,
      }}
      className="overflow-hidden border bg-surface"
    >
      <Image
        source={image}
        contentFit="cover"
        style={{width: '100%', aspectRatio: 4 / 5}}
        className="grayscale"
      />
      <View
        style={{borderTopColor: Colors.light.border}}
        className="border-t px-6 py-4"
      >
        <View className="flex-row items-start justify-between">
          <View className="flex-1">
            <Text
              style={{
                color: Colors.brand.secondary,
                letterSpacing: 2,
              }}
              className="mb-1 text-[10px]"
            >
              {category.toUpperCase()}
            </Text>
            <Text
              style={{
                color: Colors.light.text,
                fontFamily: 'PlayfairDisplay_700Bold',
              }}
              className="text-2xl"
            >
              {index}. {name}
            </Text>
          </View>
          <Text
            style={{
              color: Colors.light.text,
              fontFamily: 'PlayfairDisplay_700Bold',
            }}
            className="text-lg"
          >
            {price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
