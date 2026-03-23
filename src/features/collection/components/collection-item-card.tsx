import { Image } from "expo-image";
import {
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type CollectionItemCardProps = {
  name: string;
  image: ImageSourcePropType;
  category: string;
  price: string;
  onPress: () => void;
};

export const CollectionItemCard = ({
  name,
  image,
  category,
  price,
  onPress,
}: CollectionItemCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} className="py-8">
      <Image
        source={image}
        style={{ width: "100%", aspectRatio: 1 }}
        contentFit="cover"
      />
      <View className="flex-row justify-between items-center py-3">
        <View>
          <Text className="text-xs tracking-label-lg text-tertiary-500 mb-1">
            {category}
          </Text>
          <Text className="font-playfair text-lg text-primary-900">{name}</Text>
        </View>
        <Text className="font-playfair text-base text-primary-900">
          {price}
        </Text>
      </View>
      <View className="border-b border-primary-100" />
    </TouchableOpacity>
  );
};
