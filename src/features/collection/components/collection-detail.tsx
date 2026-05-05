import {useState} from 'react';
import {Image} from 'expo-image';
import {useLocalSearchParams} from 'expo-router';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useGetCollectionById} from '../hooks/use-collections';
import {CollectionItemCard} from './collection-item-card';

const ITEMS_PER_PAGE = 3;

export const CollectionDetail = () => {
  const {id} = useLocalSearchParams<{id: string}>();
  const {data: collection, isLoading, error} = useGetCollectionById(id);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error || !collection) {
    return (
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-center text-red-500">
          Error loading collection: {error?.message}
        </Text>
      </View>
    );
  }

  const listings = collection.collection_listings || [];
  const visibleItems = listings.slice(0, visibleCount);
  const hasMore = visibleCount < listings.length;

  return (
    <ScrollView>
      <Image
        source={{uri: collection.cover_path || ''}}
        style={{width: '100%', height: 250}}
        contentFit="cover"
      />

      <View className="bg-white px-6 pb-10 pt-6">
        <Text className="pb-4 text-xs tracking-label-lg text-tertiary-500">
          COLLECTION / {collection.volume || 'N/A'}
        </Text>

        <Text className="mt-3 font-playfair text-7xl leading-tight text-primary-900">
          {collection.title}
        </Text>
      </View>
      <View className="bg-neutral-100 px-6 py-10">
        <View className="my-8 border-l-2 border-brand-secondary pl-5">
          <Text className="font-playfair text-3xl italic leading-8 text-primary-900">
            &ldquo;{collection.description}&rdquo;
          </Text>
        </View>
      </View>

      <View className="px-6">
        {visibleItems.map(cl => (
          <CollectionItemCard
            key={cl.listing.id}
            name={cl.listing.title}
            image={{uri: cl.listing.listing_images?.[0]?.image_path || ''}}
            category={cl.listing.category?.name || 'GENERAL'}
            price={cl.listing.price ? `$${cl.listing.price}` : 'N/A'}
            onPress={() => console.log(cl.listing.id)}
          />
        ))}

        {hasMore && (
          <TouchableOpacity
            onPress={() =>
              setVisibleCount(previous => previous + ITEMS_PER_PAGE)
            }
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
