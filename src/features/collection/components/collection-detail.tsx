import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useCollectionDetail } from "../data";
import { CollectionItemCard } from "./collection-item-card";
const ITEMS_PER_PAGE = 3;

export const CollectionDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const collection = useCollectionDetail(id);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    console.log("collection", collection);
  }, [collection]);
  const visibleItems = collection.items.slice(0, visibleCount);
  const hasMore = visibleCount < collection.items.length;
  return (
    <ScrollView>
      <Image
        source={collection.heroImage}
        style={{ width: "100%", height: 250 }}
        contentFit="cover"
      />

      <View className="px-6 pt-6 pb-10 bg-white">
        <Text className="text-xs tracking-label-lg text-tertiary-500 pb-4">
          COLLECTION / {collection.collectionNumber}
        </Text>

        <Text className="font-playfair text-7xl text-primary-900 mt-3 leading-tight">
          {collection.title}
        </Text>

        <View className="flex-row items-center gap-3 mt-4">
          <View className="h-px w-8 bg-brand-secondary" />
          <Text className="text-xs tracking-label-lg text-brand-secondary">
            {collection.badge}
          </Text>
        </View>
      </View>
      <View className="bg-neutral-100 px-6 py-10">
        <View className="border-l border-brand-secondary pl-5 my-8">
          <Text className="font-playfair text-3xl text-primary-900 italic leading-8">
            &ldquo;{collection.quote}&rdquo;
          </Text>
          <Text className="text-xs tracking-label-lg text-tertiary-500 mt-3">
            {collection.quoteAuthor}
          </Text>
        </View>

        <Text className="text-sm tracking-label-lg text-primary-900 font-bold mb-4">
          {collection.intentTitle}
        </Text>

        {collection.intentDescription.map((paragraph, index) => (
          <Text
            key={index}
            className="text-base leading-7 text-primary-700 mb-4"
          >
            {paragraph}
          </Text>
        ))}
      </View>

      <View className="px-6">
        {visibleItems.map((item) => (
          <CollectionItemCard
            key={item.id}
            name={item.name}
            image={item.image}
            category={item.category}
            price={item.price}
            onPress={() => console.log(item.id)}
          />
        ))}

        {hasMore && (
          <TouchableOpacity
            onPress={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
            className="border border-brand-secondary py-4 items-center mt-4"
          >
            <Text className="text-xs tracking-label-lg text-brand-secondary font-bold">
              VIEW MORE
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View className="mx-2 my-8 px-8 py-12 items-center gap-6">
        <Text className="text-xs tracking-label-xl text-primary-900 text-center">
          THE ARCHIVE IS NEVER COMPLETE
        </Text>

        <Text className="font-playfair text-4xl text-primary-900 text-center leading-tight">
          Inquire About Custom Commissions
        </Text>

        <TouchableOpacity
          onPress={() => console.log("contact")}
          className="bg-brand-secondary px-10 py-4 items-center"
        >
          <Text className="text-xs tracking-label-lg text-neutral-100 font-bold">
            CONTACT THE ATELIER
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
