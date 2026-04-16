import {Text, View} from 'react-native';

import {savedCollections, TSavedCollection} from '../data';
import {SavedCollectionCard} from './saved-collection-card';

type Props = {
  collections?: TSavedCollection[];
};

export const SavedCollections = ({collections = savedCollections}: Props) => {
  return (
    <View>
      <View className="mb-12 justify-between gap-8">
        <View className="flex-row items-start gap-4">
          <View className="bg-secondary mt-1 h-12 w-[2px]" />
          <Text className="font-playfair text-xl italic leading-relaxed text-primary-900">
            &quot;A personal repository of enduring craft, curated by your hand.
            These collections represent themed intersections of form, function,
            and history.&quot;
          </Text>
        </View>
        <View className="border-l-2 border-neutral-300 pl-4">
          <Text className="mb-1 text-xl uppercase tracking-[0.2em] text-primary-900">
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
