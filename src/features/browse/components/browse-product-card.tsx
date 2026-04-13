import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TBrowseProduct } from "../data";

type Props = {
  product: TBrowseProduct;
  isBookmarked?: boolean;
  onToggleBookmark?: (id: string, bookmark: boolean) => void;
};

export const BrowseProductCard = ({
  product,
  isBookmarked = false,
  onToggleBookmark,
}: Props) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const handleToggle = useCallback(() => {
    const newState = !bookmarked;
    setBookmarked(newState);
    if (onToggleBookmark) {
      onToggleBookmark(product.id, newState);
    }
  }, [bookmarked, onToggleBookmark, product.id]);

  const handlePress = useCallback(() => {
    router.push(`/product-detail/${product.id}`);
  }, [product.id]);

  return (
    <TouchableOpacity onPress={handlePress} className="w-[46%] mb-10">
      <View className="border border-neutral-300 relative mb-4">
        <Image
          source={product.image}
          style={{ width: "100%", aspectRatio: 3 / 4 }}
          contentFit="cover"
        />
        <TouchableOpacity
          className="absolute top-3 right-3"
          onPress={handleToggle}
        >
          <MaterialIcons
            name={bookmarked ? "bookmark" : "bookmark-outline"}
            size={24}
            color={Colors.brand.secondary}
          />
        </TouchableOpacity>
      </View>
      <Text
        className="font-playfair text-lg text-primary-900 leading-tight mb-1"
        numberOfLines={2}
      >
        {product.title}
      </Text>
      <Text className="text-[11px] font-bold tracking-widest text-secondary-500 uppercase">
        {product.price}
      </Text>
    </TouchableOpacity>
  );
};