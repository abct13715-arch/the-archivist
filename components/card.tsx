import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import {
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type CardProps = {
  image: ImageSourcePropType;
  name: string;
  rating: number;
  description: string;
  onPress?: () => void;
};

export const Card = ({
  image,
  name,
  rating,
  description,
  onPress,
}: CardProps) => {
  return (
    <View
      style={{
        backgroundColor: Colors.light.surface,
        borderColor: Colors.light.border,
      }}
      className="border p-6 items-center gap-4 my-2"
    >
      <Image
        source={image}
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          borderWidth: 1,
          borderColor: Colors.light.border,
          tintColor: undefined,
        }}
      />

      <View className="items-center gap-1">
        <Text
          style={{
            color: Colors.light.text,
            fontFamily: "PlayfairDisplay_700Bold",
          }}
          className="text-lg"
        >
          {name}
        </Text>
        <View className="flex-row items-center gap-1">
          <Ionicons name="star" size={14} color={Colors.brand.secondary} />
          <Text
            style={{ color: Colors.light.textSecondary }}
            className="text-xs tracking-widest"
          >
            {rating.toFixed(1)} RATING
          </Text>
        </View>
      </View>

      <Text
        style={{ color: Colors.light.text }}
        className="text-sm text-center italic leading-6 px-4"
      >
        &ldquo;{description}&rdquo;
      </Text>

      <TouchableOpacity
        onPress={onPress}
        style={{ borderColor: Colors.light.border }}
        className="border px-auto py-4 mt-2 w-full"
      >
        <Text
          style={{ color: Colors.light.text }}
          className="text-xs tracking-widest text-center"
        >
          VIEW SHOP
        </Text>
      </TouchableOpacity>
    </View>
  );
};
