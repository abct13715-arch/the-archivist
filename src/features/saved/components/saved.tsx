import {useState} from 'react';
import {Colors} from '@/constants/theme';
import {useAuth} from '@/contexts/auth-context';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';

import {
  useGetSavedCollections,
  useGetSavedListings,
} from '../hooks/use-saved-items';
import {SavedCollections} from './saved-collections';
import {SavedListingCard} from './saved-listing-card';
import {SavedLoadMore} from './saved-load-more';
import {SavedTabToggle} from './saved-tab-toggle';

export const Saved = () => {
  const [activeTab, setActiveTab] = useState<'objects' | 'collections'>(
    'objects',
  );
  const [visibleCount, setVisibleCount] = useState(4);
  const {user, isLoading: isUserLoading} = useAuth();

  const {data: savedListings, isLoading: isListingsLoading} =
    useGetSavedListings(user?.id ?? '');
  const {data: savedCollections, isLoading: isCollectionsLoading} =
    useGetSavedCollections(user?.id ?? '');

  const displayedListings = savedListings?.slice(0, visibleCount);

  if (isUserLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView
      className="flex-1"
      style={{backgroundColor: Colors.brand.neutral}}
    >
      <View className="px-6 pb-6 pt-10">
        <View className="mb-12 border-b border-neutral-300 pb-8">
          <Text className="font-playfair text-5xl uppercase leading-tight tracking-tighter text-primary-900">
            SAVED ARCHIVE
          </Text>
          <Text
            className="mt-4 leading-relaxed text-tertiary-500"
            style={{maxWidth: 400}}
          >
            {activeTab === 'objects'
              ? 'A personal repository of enduring craft, curated by your hand. These objects represent the intersection of form, function, and history.'
              : 'A personal repository of enduring craft, curated by your hand. These collections represent themed intersections of form, function, and history.'}
          </Text>
        </View>

        <SavedTabToggle activeTab={activeTab} onTabChange={setActiveTab} />

        {isListingsLoading || isCollectionsLoading ? (
          <View className="py-20">
            <ActivityIndicator size="large" />
          </View>
        ) : activeTab === 'objects' ? (
          <>
            <View className="flex-row flex-wrap justify-between gap-y-6">
              {displayedListings?.map(item => {
                return (
                  <View
                    key={item.id}
                    className="w-[48%]"
                    style={{
                      marginBottom: 32,
                    }}
                  >
                    {item.listing ? (
                      <SavedListingCard
                        listing={{
                          id: item.listing.id,
                          title: item.listing.title,
                          studio:
                            item.listing.archivist?.display_name ?? 'Unknown',
                          price: `$${item.listing.price}`,
                          image: {
                            uri:
                              item.listing.listing_images?.[0]?.image_path ??
                              '',
                          },
                        }}
                      />
                    ) : (
                      <Text>Listing data missing</Text>
                    )}
                  </View>
                );
              })}
            </View>

            {(savedListings?.length ?? 0) > visibleCount && (
              <SavedLoadMore
                shownCount={displayedListings?.length ?? 0}
                totalCount={savedListings?.length ?? 0}
                onLoadMore={() => setVisibleCount(previous => previous + 4)}
              />
            )}
          </>
        ) : (
          <SavedCollections
            collections={
              savedCollections?.map(sc => ({
                id: sc.collection?.id ?? '',
                image: {uri: sc.collection?.cover_path ?? ''},
                title: sc.collection?.title ?? '',
                curator: sc.collection?.archivist?.display_name ?? 'Unknown',
                itemCount: 0,
              })) ?? []
            }
          />
        )}
      </View>
    </ScrollView>
  );
};
