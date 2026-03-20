import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import {
  Dimensions,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 48) / 2;

type ItemCardProps = {
  image: ImageSourcePropType;
  category: string;
  title: string;
  onPress?: () => void;
  onWishlist?: () => void;
};

export const ItemCard = ({
  image,
  category,
  title,
  onPress,
  onWishlist,
}: ItemCardProps) => {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: Colors.light.surface,
        borderColor: Colors.light.border,
        width: CARD_WIDTH,
      }}
      className="border"
    >
      <Image
        source={image}
        contentFit="cover"
        style={{ width: CARD_WIDTH, aspectRatio: 3 / 4 }}
      />

      <View
        style={{ borderTopColor: Colors.light.border }}
        className="border-t px-3 pt-3 pb-4"
      >
        <Text
          style={{ color: Colors.light.textSecondary, letterSpacing: 1.5 }}
          className="text-xs mb-1"
        >
          {category}
        </Text>

        <View className="flex-row justify-between items-center">
          <Text
            style={{
              color: Colors.light.text,
              fontFamily: "PlayfairDisplay_700Bold",
            }}
            className="text-lg flex-1"
          >
            {title}
          </Text>

          <TouchableOpacity
            onPress={() => {
              setWishlisted(!wishlisted);
              onWishlist?.();
            }}
            style={{ borderColor: Colors.light.border }}
            className="border p-2"
          >
            <Ionicons
              name={wishlisted ? "heart" : "heart-outline"}
              size={16}
              color={wishlisted ? Colors.brand.secondary : Colors.light.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
