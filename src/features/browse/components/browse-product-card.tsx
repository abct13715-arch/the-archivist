import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";
import { TBrowseProduct } from "../data";

type Props = {
  product: TBrowseProduct;
};

export const BrowseProductCard = ({ product }: Props) => {
  return (
    <View className={`w-[46%] ${product.isAsymmetric ? "mt-8" : ""}`}>
      <View className="border border-neutral-300 relative mb-4">
        <Image
          source={product.image}
          style={{ width: "100%", aspectRatio: 3 / 4 }}
          contentFit="cover"
        />
        <TouchableOpacity className="absolute top-3 right-3 opacity-30">
          <IconSymbol name="heart" size={18} color="#1A1A1A" />
        </TouchableOpacity>
      </View>
      <Text className="font-playfair text-lg text-primary-900 leading-tight mb-1">
        {product.title}
      </Text>
      <Text className="text-[11px] font-bold tracking-widest text-brand-secondary">
        {product.price}
      </Text>
    </View>
  );
};
