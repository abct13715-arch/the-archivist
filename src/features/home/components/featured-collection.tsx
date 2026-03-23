import { Colors } from "@/constants/theme";
import { TFeaturedCollection } from "@/types";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";

type FeaturedCollectionProps = {
  collection: TFeaturedCollection;
  onExplore: () => void;
  onViewAll: () => void;
};

export const FeaturedCollection = ({
  collection,
  onExplore,
  onViewAll,
}: FeaturedCollectionProps) => {
  return (
    <View>
      <Image
        source={collection.image}
        style={{ width: "100%", height: 380 }}
        contentFit="cover"
      />

      <View className="px-8 py-10">
        <Text className="text-label-md font-bold tracking-label-lg text-brand-secondary">
          FEATURED COLLECTION
        </Text>

        <Text className="font-playfair text-5xl text-primary-900 py-4 leading-tight">
          {collection.title.toUpperCase()}
        </Text>

        <View
          style={{
            borderLeftColor: Colors.brand.secondary,
            borderLeftWidth: 2,
          }}
          className="pl-4 py-1"
        >
          <Text className="text-base leading-7 text-primary-900">
            {collection.description}
          </Text>
        </View>

        <View className="pt-6 gap-3">
          <TouchableOpacity
            onPress={onExplore}
            style={{ backgroundColor: Colors.brand.primary }}
            className="px-4 py-4 items-center"
          >
            <Text className="text-neutral-100 text-xs tracking-label-lg font-bold">
              EXPLORE THE COLLECTION
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onViewAll}
            style={{ borderColor: Colors.light.border }}
            className="border px-4 py-4 items-center"
          >
            <Text className="text-primary-900 text-xs tracking-label-lg">
              VIEW ALL COLLECTIONS
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
