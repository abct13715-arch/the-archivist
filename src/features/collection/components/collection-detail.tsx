import {useEffect, useState} from 'react';
import {Image} from 'expo-image';
import {useLocalSearchParams} from 'expo-router';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {useCollectionDetail} from '../data';
import {CollectionItemCard} from './collection-item-card';

const ITEMS_PER_PAGE = 3;

export const CollectionDetail = () => {
  const {id} = useLocalSearchParams<{id: string}>();
  const collection = useCollectionDetail(id);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    console.log('collection', collection);
  }, [collection]);
  const visibleItems = collection.items.slice(0, visibleCount);
  const hasMore = visibleCount < collection.items.length;

  return (
    <ScrollView>
      <Image
        source={collection.heroImage}
        style={{width: '100%', height: 250}}
        contentFit="cover"
      />

      <View className="bg-white px-6 pb-10 pt-6">
        <Text className="pb-4 text-xs tracking-label-lg text-tertiary-500">
          COLLECTION / {collection.collectionNumber}
        </Text>

        <Text className="mt-3 font-playfair text-7xl leading-tight text-primary-900">
          {collection.title}
        </Text>

        <View className="mt-4 flex-row items-center gap-3">
          <View className="h-px w-8 bg-brand-secondary" />
          <Text className="text-xs tracking-label-lg text-brand-secondary">
            {collection.badge}
          </Text>
        </View>
      </View>
      <View className="bg-neutral-100 px-6 py-10">
        <View className="my-8 border-l border-brand-secondary pl-5">
          <Text className="font-playfair text-3xl italic leading-8 text-primary-900">
            &ldquo;{collection.quote}&rdquo;
          </Text>
          <Text className="mt-3 text-xs tracking-label-lg text-tertiary-500">
            {collection.quoteAuthor}
          </Text>
        </View>

        <Text className="mb-4 text-sm font-bold tracking-label-lg text-primary-900">
          {collection.intentTitle}
        </Text>

        {collection.intentDescription.map((paragraph, index) => (
          <Text
            key={index}
            className="mb-4 text-base leading-7 text-primary-700"
          >
            {paragraph}
          </Text>
        ))}
      </View>

      <View className="px-6">
        {visibleItems.map(item => (
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
            onPress={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
            className="mt-4 items-center border border-brand-secondary py-4"
          >
            <Text className="text-xs font-bold tracking-label-lg text-brand-secondary">
              VIEW MORE
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View className="mx-2 my-8 items-center gap-6 px-8 py-12">
        <Text className="text-center text-xs tracking-label-xl text-primary-900">
          THE ARCHIVE IS NEVER COMPLETE
        </Text>

        <Text className="text-center font-playfair text-4xl leading-tight text-primary-900">
          Inquire About Custom Commissions
        </Text>

        <TouchableOpacity
          onPress={() => console.log('contact')}
          className="items-center bg-brand-secondary px-10 py-4"
        >
          <Text className="text-xs font-bold tracking-label-lg text-neutral-100">
            CONTACT THE ATELIER
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
