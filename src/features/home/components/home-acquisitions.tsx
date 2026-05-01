import {useState} from 'react';
import {useGetListings} from '@/features/listing/hooks/use-listings';
import {Image} from 'expo-image';
import {router} from 'expo-router';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

export const HomeAcquisitions = () => {
  const {data: listings, isLoading} = useGetListings();
  const [loadedCount, setLoadedCount] = useState(0);

  const dataReady = !isLoading && !!listings;
  const displayedListings = listings?.slice(0, 4) || [];
  const imagesReady =
    dataReady && loadedCount >= Math.min(displayedListings.length, 4);

  const showLocalLoader = !dataReady || !imagesReady;

  const handleImageLoad = () => {
    setLoadedCount(previous => previous + 1);
  };

  return (
    <View className="relative py-8">
      {showLocalLoader && (
        <View className="items-center justify-center py-32">
          <ActivityIndicator size="large" color="#C8522A" />
        </View>
      )}

      <View
        style={{
          opacity: showLocalLoader ? 0 : 1,
          height: showLocalLoader ? 0 : 'auto',
          overflow: 'hidden',
        }}
      >
        <View className="mx-auto mb-4 h-px w-2/3 bg-tertiary-100" />

        <View className="py-14">
          <View className="mx-4 mb-0 flex-row items-start justify-between px-6 pb-4">
            <Text className="w-1/2 text-xs font-bold tracking-label-lg text-primary-900">
              SHOP THE CONVERSATION
            </Text>
            <TouchableOpacity
              onPress={() => router.push('/browse')}
              className="w-1/2 items-end"
            >
              <Text className="text-right text-xs font-bold tracking-label-md text-brand-secondary">
                VIEW FULL DIALOGUE GALLERY
              </Text>
            </TouchableOpacity>
          </View>

          <View className="mx-4 border border-tertiary-100">
            <View className="flex-row flex-wrap">
              {displayedListings.map((listing, index) => {
                const isFirstRow = index < 2;
                const isLeftColumn = index % 2 === 0;
                const imageUrl = listing.images?.[0]?.image_path;

                return (
                  <TouchableOpacity
                    key={listing.id}
                    onPress={() => router.push(`/listing/${listing.id}`)}
                    className={`w-1/2 p-4 ${isFirstRow ? 'border-b' : ''} ${
                      isLeftColumn ? 'border-r' : ''
                    } border-tertiary-100`}
                  >
                    <Image
                      source={imageUrl}
                      style={{width: '100%', aspectRatio: 1}}
                      contentFit="cover"
                      onLoad={handleImageLoad}
                    />
                    <View className="gap-1 pt-3">
                      <Text className="text-xs font-bold uppercase tracking-label-lg text-brand-secondary">
                        {listing.category?.name || 'OBJECT'}
                      </Text>
                      <Text
                        className="font-playfair text-lg leading-tight text-primary-900"
                        numberOfLines={1}
                      >
                        {listing.title}
                      </Text>
                      <Text className="text-sm text-primary-900">
                        ${listing.price}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View className="mx-auto mb-4 h-px w-2/3 bg-tertiary-100" />
      </View>
    </View>
  );
};
