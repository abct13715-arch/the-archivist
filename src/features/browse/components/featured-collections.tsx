import { Image } from "expo-image";
import { ScrollView, Text, View } from "react-native";
import { browseCollections } from "../data";
import { setIsHorizontalScrolling } from "@/contexts/horizontal-scroll-context";

export const FeaturedCollections = () => {
  return (
    <View className="py-10 border-b border-neutral-300">
      <View className="px-6 mb-6 flex-row justify-between items-end">
        <Text className="font-playfair text-3xl tracking-tighter text-primary-900">
          Featured Collections
        </Text>
        <Text className="text-[10px] tracking-widest text-tertiary-500 pb-1">
          VIEW ALL
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="px-6"
        contentContainerStyle={{ paddingRight: 40 }}
        onScrollBeginDrag={() => setIsHorizontalScrolling(true)}
        onScrollEndDrag={() => setIsHorizontalScrolling(false)}
        onStartShouldSetResponderCapture={() => true}
        onMoveShouldSetResponderCapture={() => true}
      >
        {browseCollections.map((collection) => (
          <View key={collection.id} className="mr-6 w-[280px]">
            <View className="aspect-[4/5] border border-neutral-300 mb-4">
              <Image
                source={collection.image}
                style={{ width: "100%", height: "100%" }}
                contentFit="cover"
              />
            </View>
            <Text className="text-[10px] tracking-widest text-tertiary-500 mb-1">
              {collection.series}
            </Text>
            <Text className="font-playfair text-xl text-primary-900 leading-tight">
              {collection.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
