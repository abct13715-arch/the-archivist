import {useState} from 'react';
import {Colors} from '@/constants/theme';
import {ScrollView, Text, View} from 'react-native';

import {savedCollections, savedListings} from '../data';
import {SavedCollections} from './saved-collections';
import {SavedListingCard} from './saved-listing-card';
import {SavedLoadMore} from './saved-load-more';
import {SavedTabToggle} from './saved-tab-toggle';

export const Saved = () => {
  const [activeTab, setActiveTab] = useState<'objects' | 'collections'>(
    'objects',
  );

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

        {activeTab === 'objects' ? (
          <>
            <View className="flex-row flex-wrap justify-between gap-y-6">
              {savedListings.map(listing => (
                <View
                  key={listing.id}
                  className="w-[48%]"
                  style={{
                    marginBottom: 32,
                  }}
                >
                  <SavedListingCard listing={listing} />
                </View>
              ))}
            </View>

            <SavedLoadMore shownCount={savedListings.length} totalCount={28} />
          </>
        ) : (
          <SavedCollections collections={savedCollections} />
        )}
      </View>
    </ScrollView>
  );
};
