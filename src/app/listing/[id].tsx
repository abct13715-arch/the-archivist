import {getListingById, ListingDetail} from '@/features';
import {useLocalSearchParams} from 'expo-router';
import {Text, View} from 'react-native';

export default function ListingDetailPage() {
  const {id} = useLocalSearchParams<{id: string}>();

  const listing = getListingById(id);

  if (!listing) {
    return (
      <View className="flex-1 items-center justify-center bg-neutral-100">
        <Text className="text-lg text-tertiary-500">Listing not found</Text>
      </View>
    );
  }

  return (
    <ListingDetail
      listing={listing}
      showFullDetails={true}
      onAddToCart={() => {
        console.log('Add to cart:', listing.id);
      }}
      onSaveLater={() => {
        console.log('Save for later:', listing.id);
      }}
      onRelatedListingPress={relatedId => {
        console.log('Navigate to related listing:', relatedId);
      }}
    />
  );
}
