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
  const [firstLine, secondLine] = collection.title.split("\n");

  return (
    <View>
      <View className="px-6 pt-10 pb-6">
        <View className="border border-primary-900 self-start px-3 py-1">
          <Text className="text-xs tracking-label-lg text-primary-900 font-bold">
            {collection.volume}
          </Text>
        </View>

        <View className="mt-4">
          <Text className="font-playfair text-6xl text-primary-900 leading-tight">
            {firstLine}
          </Text>
          <Text className="font-playfair text-6xl text-brand-secondary italic leading-tight">
            {secondLine}
          </Text>
        </View>

        <Text className="text-base leading-7 text-tertiary-500 mt-3">
          {collection.description}
        </Text>

        <View className="gap-3 mt-6">
          <TouchableOpacity
            onPress={onExplore}
            className="bg-primary-900 px-6 py-4 self-start"
          >
            <Text className="text-neutral-100 text-xs tracking-label-lg font-bold">
              EXPLORE THE COLLECTION
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onViewAll}
            className="border border-primary-900 px-6 py-4 self-start"
          >
            <Text className="text-primary-900 text-xs tracking-label-lg">
              VIEW ALL COLLECTIONS
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="pb-8 px-6">
        <View className="relative">
          <Image
            source={collection.image}
            style={{ width: "100%", aspectRatio: 3 / 4 }}
            contentFit="cover"
          />

          <View className="absolute bottom-0 left-0 bg-white px-3 py-2">
            <Text className="text-xs tracking-label-lg text-tertiary-500">
              {collection.imageCaption}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
