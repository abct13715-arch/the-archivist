import {useMemo, useRef} from 'react';
import {useAuth} from '@/contexts/auth-context';
import {
  ListingDetail,
  useGetListingById,
  useGetRelatedListings,
} from '@/features';
import {LoginBottomSheet} from '@/features/auth';
import {TListingDetail} from '@/features/listing/data';
import {useLocalSearchParams, useRouter} from 'expo-router';
import {ActivityIndicator, Text, View} from 'react-native';

export default function ListingDetailPage() {
  const {id} = useLocalSearchParams<{id: string}>();
  const router = useRouter();
  const {user, isGuest} = useAuth();
  const bottomSheetReference = useRef<any>(null);

  const {data: listing, isLoading, error} = useGetListingById(id!);
  const {data: relatedListings} = useGetRelatedListings(
    listing?.archivist_id || '',
    id!,
  );

  const listingWithRelated: TListingDetail | null = useMemo(() => {
    if (!listing) return null;
    return {
      id: listing.id,
      image: listing.images?.[0] || null,
      images: listing.images,
      condition: listing.condition,
      title: listing.title,
      subtitle: listing.subtitle || listing.category?.name,
      price: listing.formattedPrice,
      priceLabel: listing.price_label || undefined,
      curatedBy: listing.curatedBy,
      rating: Number(listing.rating) || 0,
      totalRatings: listing.totalRatings,
      quote: listing.quote || undefined,
      description: listing.descriptionArray,
      specs: (listing.specs as any) || undefined,
      relatedListings:
        relatedListings?.map(r => ({
          id: r.id,
          brand: r.brand,
          title: r.title,
          price: r.formattedPrice,
          image: r.image,
        })) || [],
    };
  }, [listing, relatedListings]);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-neutral-100">
        <ActivityIndicator size="large" color="#1A1A1A" />
      </View>
    );
  }

  if (error || !listingWithRelated) {
    return (
      <View className="flex-1 items-center justify-center bg-neutral-100">
        <Text className="text-lg text-tertiary-500">
          {error ? 'Error loading listing' : 'Listing not found'}
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <ListingDetail
        listing={listingWithRelated}
        showFullDetails={true}
        onAddToCart={() => {
          console.log('Add to cart:', listingWithRelated.id);
        }}
        onSaveLater={() => {
          if (!user || isGuest) {
            bottomSheetReference.current?.present();
            return;
          }
          console.log('Save for later:', listingWithRelated.id);
        }}
        onRelatedListingPress={relatedId => {
          router.push(`/listing/${relatedId}`);
        }}
      />
      <LoginBottomSheet ref={bottomSheetReference} />
    </View>
  );
}
