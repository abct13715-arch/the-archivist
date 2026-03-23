import { router } from "expo-router";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { useCollection } from "../data";
import { CollectionCard } from "./collection-card";

export const Collection = () => {
  const { collections } = useCollection();

  useEffect(() => {
    console.log("collections", collections);
  }, [collections]);

  return (
    <ScrollView className="flex-1 bg-neutral-100">
      <View className="px-6 pt-8 pb-4">
        <Text className="font-playfair text-7xl text-primary-900 leading-tight">
          The Archives
        </Text>

        <Text className="text-2xl leading-10 text-tertiary-500 mt-6">
          A curated sanctuary of form and function. Each entry in our archive is
          selected for its historical resonance, architectural integrity, and
          enduring aesthetic contribution to the modern landscape.
        </Text>
        <View className="h-px bg-primary-900 w-1/3 my-4" />
        <Text className="text-xs tracking-label-lg text-primary-900 font-bold mb-6">
          CURATED SERIES 2024
        </Text>
      </View>
      <View className="px-6">
        {collections.map((item, index) => (
          <View key={index}>
            <CollectionCard
              key={item.id}
              seriesNumber={item.seriesNumber}
              title={item.title}
              description={item.description}
              image={item.image}
              onPress={() => router.push(`/collection/${item.id}`)}
            />

            {index === 1 && (
              <View className="border-y border-tertiary-100 py-10 mb-10">
                <View className="border-l-2 border-brand-secondary pl-5 py-2">
                  <Text className="font-playfair text-3xl text-primary-700 italic leading-10">
                    "Design is not just what it looks like and feels like.
                    Design is how it works."
                  </Text>
                  <Text className="text-xs tracking-label-lg text-tertiary-500 mt-3">
                    — THE ARCHIVIST MANIFESTO
                  </Text>
                </View>
              </View>
            )}
          </View>
        ))}
      </View>

      <View className="px-6 pt-10 pb-16">
        <View className="border-t border-tertiary-100 mb-8" />

        <Text className="text-xs tracking-label-lg text-tertiary-500 font-bold mb-4">
          THE PHILOSOPHY
        </Text>

        <Text className="font-playfair text-4xl text-primary-900 leading-tight mb-10">
          We do not curate for the moment. We archive for the future. Every
          collection is a testament to the idea that true beauty is immutable
          and transcends the cycle of trends.
        </Text>

        <View className="flex-row gap-16 mb-10">
          <View className="gap-3">
            <Text className="text-xs tracking-label-lg text-tertiary-500 font-bold">
              ARCHIVES
            </Text>
            <Text className="text-xs tracking-label-md text-primary-900 font-bold">
              EXPLORE ALL
            </Text>
            <Text className="text-xs tracking-label-md text-primary-900 font-bold">
              BY DECADE
            </Text>
            <Text className="text-xs tracking-label-md text-primary-900 font-bold">
              BY DESIGNER
            </Text>
          </View>

          <View className="gap-3">
            <Text className="text-xs tracking-label-lg text-tertiary-500 font-bold">
              INQUIRY
            </Text>
            <Text className="text-xs tracking-label-md text-primary-900 font-bold">
              PRIVATE VIEWINGS
            </Text>
            <Text className="text-xs tracking-label-md text-primary-900 font-bold">
              SUBMISSIONS
            </Text>
          </View>
        </View>

        <View className="border-t border-tertiary-100 pt-6">
          <Text className="text-xs tracking-label-sm text-tertiary-500 text-center">
            © 2024 THE ARCHIVIST COLLECTIVE. ALL RIGHTS RESERVED.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
