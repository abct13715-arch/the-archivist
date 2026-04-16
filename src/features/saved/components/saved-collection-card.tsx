import {Colors} from '@/constants/theme';
import {MaterialIcons} from '@expo/vector-icons';
import {Image} from 'expo-image';
import {router} from 'expo-router';
import {Text, TouchableOpacity, View} from 'react-native';

import {TSavedCollection} from '../data';

type Props = {
  collection: TSavedCollection;
  index: number;
};

export const SavedCollectionCard = ({collection, index}: Props) => {
  const handlePress = () => {
    router.push(`/collection/${collection.id}`);
  };

  return (
    <View className="border border-neutral-300 bg-surface">
      <View className="aspect-[4/5] overflow-hidden border-b border-neutral-300">
        <Image
          source={collection.image}
          style={{width: '100%', height: '100%'}}
          contentFit="cover"
        />
      </View>

      <View className="p-8">
        <Text className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-tertiary-500">
          COLLECTION 0{index + 1}
        </Text>
        <Text
          className="mb-2 text-2xl font-bold uppercase leading-none tracking-tighter"
          style={{color: Colors.brand.primary}}
        >
          {collection.title}
        </Text>
        <Text className="mb-8 text-[10px] font-bold uppercase tracking-widest text-tertiary-500">
          {collection.itemCount} ITEMS
        </Text>

        <TouchableOpacity
          onPress={handlePress}
          className="flex-row items-center"
        >
          <Text className="text-secondary mr-2 border-b pb-2 text-[11px] font-bold uppercase tracking-widest">
            VIEW COLLECTION
          </Text>
          <MaterialIcons
            name="north-east"
            size={16}
            color={Colors.brand.secondary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
