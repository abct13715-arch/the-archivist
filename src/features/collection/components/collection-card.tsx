import { Image } from "expo-image";
import {
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
    <View className="mb-10 p-2 pb-4 border border-primary-100 bg-white">
      <View className="relative">
        <Image
          source={image}
          style={{ width: "100%", aspectRatio: 1 }}
          contentFit="cover"
        />
        <View className="absolute top-3 left-3 bg-white px-3 py-3 border border-primary-900">
          <Text className="text-xs tracking-label-lg text-primary-900 font-bold">
            SERIES {seriesNumber}
          </Text>
        </View>
      </View>

      <View className="mt-4 gap-2 p-2">
        <Text className="font-playfair text-3xl text-primary-900 leading-tight">
          {title}
        </Text>
        <Text className="text-sm leading-6 text-tertiary-500">
          {description}
        </Text>
        <TouchableOpacity
          className="flex-row items-center gap-2 mt-1 border-b border-primary-900 pb-1 self-start"
          onPress={onPress}
        >
          <Text className="text-xs tracking-label-lg text-primary-900 font-bold">
            VIEW COLLECTION
          </Text>
          <Text className="text-primary-900">→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
