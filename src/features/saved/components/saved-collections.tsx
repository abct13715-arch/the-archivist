import { Text, View } from "react-native";
import { TSavedCollection, savedCollections } from "../data";
import { SavedCollectionCard } from "./saved-collection-card";

type Props = {
  collections?: TSavedCollection[];
};

export const SavedCollections = ({ collections = savedCollections }: Props) => {
  return (
    <View>
      <View className="justify-between gap-8 mb-12">
        <View className="flex-row items-start gap-4">
          <View className="w-[2px] h-12 bg-secondary mt-1" />
          <Text className="font-playfair text-xl italic leading-relaxed text-primary-900">
            &quot;A personal repository of enduring craft, curated by your hand.
            These collections represent themed intersections of form, function,
            and history.&quot;
          </Text>
        </View>
        <View className="border-l-2 border-neutral-300 pl-4">
          <Text className="text-xl tracking-[0.2em] uppercase text-primary-900 mb-1">
            TOTAL CURATIONS
          </Text>
          <Text className="text-2xl tracking-tighter text-primary-900">
            0{collections.length}
          </Text>
        </View>
      </View>

      <View className="gap-12">
        {collections.map((collection, index) => (
          <SavedCollectionCard
            key={collection.id}
            collection={collection}
            index={index}
          />
        ))}
      </View>
    </View>
  );
};
