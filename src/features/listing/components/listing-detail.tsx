import {useEffect, useMemo, useRef, useState} from 'react';
import {useAuth} from '@/contexts/auth-context';
import {Image} from 'expo-image';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {IconSymbol} from '@/components/ui/icon-symbol';

import {
  useCheckIsSaved,
  useToggleSavedItem,
} from '../../saved/hooks/use-saved-items';
import type {TListingDetail} from '../data';
import {ListingProvenance} from './listing-provenance';
import {ListingSpecs} from './listing-specs';
import {ListingTrustBadges} from './listing-trust-badges';

const {width} = Dimensions.get('window');

type ListingDetailProps = {
  listing: TListingDetail;
  onAddToCart?: () => void;
  onSaveLater?: () => void;
  showFullDetails?: boolean;
  onRelatedListingPress?: (listingId: string) => void;
};

export const ListingDetail = ({
  listing,
  onAddToCart,
  onSaveLater,
  showFullDetails = false,
  onRelatedListingPress,
}: ListingDetailProps) => {
  const {user} = useAuth();
  const {data: isSavedQuery} = useCheckIsSaved(
    user?.id ?? '',
    listing.id,
    'listing',
  );
  const toggleSaved = useToggleSavedItem();

  const [isSavedLocal, setIsSavedLocal] = useState<boolean | undefined>();
  const debounceTimer = useRef<number | null>(null);

  // Sync local state when query data changes
  useEffect(() => {
    if (isSavedQuery !== undefined) {
      setIsSavedLocal(isSavedQuery);
    }
  }, [isSavedQuery]);

  const handleToggleSaved = () => {
    if (!user?.id) {
      onSaveLater?.();
      return;
    }

    // 1. Immediate UI update
    const nextState = !isSavedLocal;
    setIsSavedLocal(nextState);

    // 2. Debounce the actual API call
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      // Only trigger if the final local state differs from the server state
      if (nextState !== isSavedQuery) {
        toggleSaved.mutate({userId: user.id, listingId: listing.id});
      }
    }, 500);
  };

  const allImages = useMemo(() => {
    const images: (typeof listing.image)[] = [];

    if (listing.images && listing.images.length > 0) {
      images.push(...listing.images);
    } else {
      images.push(listing.image);
      if (listing.relatedListings) {
        for (const rp of listing.relatedListings) {
          if (rp.image) images.push(rp.image);
        }
      }
    }

    return images;
  }, [listing]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedImage = allImages[selectedIndex] || listing.image;

  return (
    <ScrollView
      className="flex-1 bg-neutral-100"
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={selectedImage}
        contentFit="cover"
        style={{width, aspectRatio: 1}}
      />

      {allImages.length > 1 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{padding: 12, gap: 2}}
          className="border-b border-border"
        >
          {allImages.map((img, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedIndex(index)}
              className={`border ${
                selectedIndex === index
                  ? 'border-secondary-500'
                  : 'border-border'
              } ${selectedIndex === index ? 'border-2' : ''}`}
            >
              <Image
                source={img}
                contentFit="cover"
                style={{width: 60, height: 60}}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      <View className="gap-4 px-5 pb-10 pt-5">
        <View className="self-start border border-secondary-500 px-2 py-1">
          <Text className="text-[10px] font-bold uppercase tracking-label-lg text-secondary-500">
            {listing.condition}
          </Text>
        </View>

        <Text className="font-playfair text-3xl leading-tight text-brand-primary lg:text-4xl">
          {listing.title}
        </Text>

        {listing.subtitle && (
          <Text className="text-xl text-tertiary-500">{listing.subtitle}</Text>
        )}

        <View className="mb-10 border-b border-border pb-10">
          <Text className="mb-2 font-playfair text-3xl text-brand-primary">
            {listing.price}
          </Text>
          <Text className="text-sm uppercase tracking-label-lg text-tertiary-500">
            {listing.priceLabel || 'Available for immediate acquisition'}
          </Text>
        </View>

        <TouchableOpacity
          onPress={onAddToCart}
          className="items-center bg-secondary-500 py-5"
        >
          <Text className="text-sm font-bold tracking-label-lg text-white">
            ADD TO CART
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleToggleSaved}
          className={`flex-row items-center justify-center gap-2 border py-5 ${
            isSavedLocal ? 'border-secondary-500' : 'border-brand-primary'
          }`}
        >
          <IconSymbol
            name={isSavedLocal ? 'bookmark.fill' : 'bookmark'}
            size={14}
            color={isSavedLocal ? '#C8522A' : '#1A1A1A'}
          />
          <Text
            className={`text-sm font-bold tracking-label-lg ${
              isSavedLocal ? 'text-secondary-500' : 'text-brand-primary'
            }`}
          >
            {isSavedLocal ? 'SAVED' : 'SAVE'}
          </Text>
        </TouchableOpacity>

        <ListingTrustBadges />
      </View>

      {showFullDetails && listing.quote && listing.description && (
        <View className="px-5 pb-10">
          <ListingProvenance
            quote={listing.quote}
            description={listing.description}
          />
          {listing.specs && <ListingSpecs specs={listing.specs} />}
        </View>
      )}

      {listing.relatedListings && listing.relatedListings.length > 0 && (
        <View className="px-5 pb-10">
          <View className="mb-10">
            <Text className="mb-2 text-[10px] uppercase tracking-label-lg text-tertiary-500">
              Curation
            </Text>
            <Text className="font-playfair text-3xl text-brand-primary">
              More from {listing.curatedBy}
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 8}}
          >
            {listing.relatedListings.map(related => (
              <TouchableOpacity
                key={related.id}
                onPress={() => onRelatedListingPress?.(related.id)}
                className="mr-8 w-[280px]"
              >
                <View className="mb-4 aspect-[3/4] border border-border">
                  <Image
                    source={related.image}
                    style={{width: '100%', height: '100%'}}
                    contentFit="cover"
                  />
                </View>
                <Text className="mb-1 text-[10px] uppercase tracking-label-md text-tertiary-500">
                  {related.brand}
                </Text>
                <Text className="mb-2 font-playfair text-lg uppercase text-brand-primary">
                  {related.title}
                </Text>
                <Text className="text-sm">{related.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </ScrollView>
  );
};
