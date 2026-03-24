import { Image } from "expo-image";
import {
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
      className="border border-tertiary-100 mb-4 p-5 gap-3"
    >
      <Image
        source={image}
        style={{ width: 100, height: 100 }}
        contentFit="cover"
      />

      <Text className="text-xs tracking-label-lg text-brand-secondary font-bold mt-2">
        {location}
      </Text>

      <Text className="font-playfair text-3xl text-primary-900 leading-tight">
        {name}
      </Text>

      <Text className="text-base text-tertiary-500 italic leading-6">
        "{quote}"
      </Text>

      <View className="border-t border-tertiary-100 pt-4 flex-row justify-between items-center">
        <Text className="text-xs tracking-label-lg text-primary-900 font-bold">
          {selections} SELECTIONS
        </Text>
        <Text className="text-primary-900">→</Text>
      </View>
    </TouchableOpacity>
  );
};
