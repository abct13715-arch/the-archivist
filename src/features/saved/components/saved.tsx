import { Colors } from "@/constants/theme";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { savedCollections, savedProducts } from "../data";
import { SavedCollections } from "./saved-collections";
import { SavedLoadMore } from "./saved-load-more";
import { SavedProductCard } from "./saved-product-card";
import { SavedTabToggle } from "./saved-tab-toggle";

export const Saved = () => {
  const [activeTab, setActiveTab] = useState<"objects" | "collections">(
    "objects",
  );

  return (
    <ScrollView
      className="flex-1"
      style={{ backgroundColor: Colors.brand.neutral }}
    >
      <View className="px-6 pt-10 pb-6">
        <View className="mb-12 border-b border-neutral-300 pb-8">
          <Text className="font-playfair text-5xl text-primary-900 leading-tight tracking-tighter uppercase">
            SAVED ARCHIVE
          </Text>
          <Text
            className="mt-4 text-tertiary-500 leading-relaxed"
            style={{ maxWidth: 400 }}
          >
            {activeTab === "objects"
              ? "A personal repository of enduring craft, curated by your hand. These objects represent the intersection of form, function, and history."
              : "A personal repository of enduring craft, curated by your hand. These collections represent themed intersections of form, function, and history."}
          </Text>
        </View>

        <SavedTabToggle activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === "objects" ? (
          <>
            <View className="flex-row flex-wrap justify-between gap-y-6">
              {savedProducts.map((product) => (
                <View
                  key={product.id}
                  className="w-[48%]"
                  style={{
                    marginBottom: 32,
                  }}
                >
                  <SavedProductCard product={product} />
                </View>
              ))}
            </View>

            <SavedLoadMore shownCount={savedProducts.length} totalCount={28} />
          </>
        ) : (
          <SavedCollections collections={savedCollections} />
        )}
      </View>
    </ScrollView>
  );
};
