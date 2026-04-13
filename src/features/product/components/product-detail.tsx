import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image } from "expo-image";
import { useMemo, useState } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import type { TProductDetail } from "../data";
import { ProductProvenance } from "./product-provenance";
import { ProductSpecs } from "./product-specs";
import { ProductTrustBadges } from "./product-trust-badges";

const { width } = Dimensions.get("window");

type ProductDetailProps = {
  product: TProductDetail;
  onAddToCart?: () => void;
  onSaveLater?: () => void;
  showFullDetails?: boolean;
  onRelatedProductPress?: (productId: string) => void;
};

export const ProductDetail = ({
  product,
  onAddToCart,
  onSaveLater,
  showFullDetails = false,
  onRelatedProductPress,
}: ProductDetailProps) => {
  const allImages = useMemo(() => {
    const images: (typeof product.image)[] = [];

    if (product.images && product.images.length > 0) {
      images.push(...product.images);
    } else {
      images.push(product.image);
      if (product.relatedProducts) {
        product.relatedProducts.forEach((rp) => {
          if (rp.image) images.push(rp.image);
        });
      }
    }

    return images;
  }, [product]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedImage = allImages[selectedIndex] || product.image;

  return (
    <ScrollView
      className="flex-1 bg-neutral-100"
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={selectedImage}
        contentFit="cover"
        style={{ width, aspectRatio: 1 }}
      />

      {allImages.length > 1 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 12, gap: 2 }}
          className="border-b border-border"
        >
          {allImages.map((img, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedIndex(index)}
              className={`border ${
                selectedIndex === index
                  ? "border-secondary-500"
                  : "border-border"
              } ${selectedIndex === index ? "border-2" : ""}`}
            >
              <Image
                source={img}
                contentFit="cover"
                style={{ width: 60, height: 60 }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      <View className="px-5 pt-5 pb-10 gap-4">
        <View className="self-start px-2 py-1 border border-secondary-500">
          <Text className="text-[10px] font-bold uppercase tracking-label-lg text-secondary-500">
            {product.condition}
          </Text>
        </View>

        <Text className="text-3xl lg:text-4xl font-playfair text-brand-primary leading-tight">
          {product.title}
        </Text>

        {product.subtitle && (
          <Text className="text-xl text-tertiary-500">{product.subtitle}</Text>
        )}

        <View className="border-b border-border pb-10 mb-10">
          <Text className="text-3xl font-playfair text-brand-primary mb-2">
            {product.price}
          </Text>
          <Text className="text-sm uppercase tracking-label-lg text-tertiary-500">
            {product.priceLabel || "Available for immediate acquisition"}
          </Text>
        </View>

        <TouchableOpacity
          onPress={onAddToCart}
          className="bg-secondary-500 py-5 items-center"
        >
          <Text className="text-sm font-bold text-white tracking-label-lg">
            ADD TO CART
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onSaveLater}
          className="border border-brand-primary py-5 items-center flex-row justify-center gap-2"
        >
          <IconSymbol name="bookmark" size={14} color="#1A1A1A" />
          <Text className="text-sm tracking-label-lg text-brand-primary">
            SAVE FOR LATER
          </Text>
        </TouchableOpacity>

        <ProductTrustBadges />
      </View>

      {showFullDetails && product.quote && product.description && (
        <View className="px-5 pb-10">
          <ProductProvenance
            quote={product.quote}
            description={product.description}
          />
          {product.specs && <ProductSpecs specs={product.specs} />}
        </View>
      )}

      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <View className="px-5 pb-10">
          <View className="mb-10">
            <Text className="text-[10px] uppercase tracking-label-lg text-tertiary-500 mb-2">
              Curation
            </Text>
            <Text className="text-3xl font-playfair text-brand-primary">
              More from {product.curatedBy}
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8 }}
          >
            {product.relatedProducts.map((related) => (
              <TouchableOpacity
                key={related.id}
                onPress={() => onRelatedProductPress?.(related.id)}
                className="w-[280px] mr-8"
              >
                <View className="aspect-[3/4] border border-border mb-4">
                  <Image
                    source={related.image}
                    style={{ width: "100%", height: "100%" }}
                    contentFit="cover"
                  />
                </View>
                <Text className="text-[10px] uppercase tracking-label-md text-tertiary-500 mb-1">
                  {related.brand}
                </Text>
                <Text className="text-lg font-playfair text-brand-primary uppercase mb-2">
                  {related.title}
                </Text>
                <Text className="text-sm">{related.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </ScrollView>
  );
};
