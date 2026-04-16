import {router} from 'expo-router';
import {View} from 'react-native';

import {TCuratorListing} from '../data';
import {CuratorListingCard} from './curator-listing-card';

type CuratorListingsProps = {
  listings: TCuratorListing[];
};

export const CuratorListings = ({listings}: CuratorListingsProps) => {
  return (
    <View className="flex-col gap-4">
      {listings.map(listing => (
        <CuratorListingCard
          key={listing.id}
          {...listing}
          onPress={() => router.push(`/listing/${listing.id}`)}
        />
      ))}
    </View>
  );
};
