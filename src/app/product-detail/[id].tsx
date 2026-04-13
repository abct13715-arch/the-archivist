import { ProductDetail, getProductById } from "@/features/product/components";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ProductDetailPage() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const product = getProductById(id);

  if (!product) {
    return (
      <View className="flex-1 items-center justify-center bg-neutral-100">
        <Text className="text-lg text-tertiary-500">Product not found</Text>
      </View>
    );
  }

  return (
    <ProductDetail
      product={product}
      showFullDetails={true}
      onAddToCart={() => {
        console.log("Add to cart:", product.id);
      }}
      onSaveLater={() => {
        console.log("Save for later:", product.id);
      }}
      onRelatedProductPress={(relatedId) => {
        console.log("Navigate to related product:", relatedId);
      }}
    />
  );
}
