import {useState} from 'react';
import {setIsHorizontalScrolling} from '@/contexts/horizontal-scroll-context';
import {useGetFeaturedCollections} from '@/features/collection/hooks/use-collections';
import {Image} from 'expo-image';
import {useRouter} from 'expo-router';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const FeaturedCollections = () => {
  const router = useRouter();
  const {data: collections = [], isLoading} = useGetFeaturedCollections();
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0);

  const isAllImagesLoaded =
    collections.length > 0 && imagesLoadedCount === collections.length;

  if (isLoading && collections.length > 0 && !isAllImagesLoaded) {
    return (
      <View className="py-20">
        <ActivityIndicator color="#C8522A" />
      </View>
    );
  }

  if (collections.length === 0) return null;

  return (
    <View className="border-b border-neutral-300 py-10">
      <View className="mb-6 flex-row items-center justify-between px-6">
        <Text className="font-playfair text-3xl tracking-tighter text-primary-900">
          Featured Collections
        </Text>
        <TouchableOpacity
          onPress={() => router.push('/collection')}
          className="border-b border-primary-900 pb-0.5"
        >
          <Text className="text-[10px] font-bold uppercase tracking-widest text-primary-900">
            VIEW ALL
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="px-6"
        contentContainerStyle={{paddingRight: 40}}
        onScrollBeginDrag={() => setIsHorizontalScrolling(true)}
        onScrollEndDrag={() => setIsHorizontalScrolling(false)}
        onStartShouldSetResponderCapture={() => true}
        onMoveShouldSetResponderCapture={() => true}
      >
        {collections.map(collection => (
          <TouchableOpacity
            key={collection.id}
            onPress={() => router.push(`/collection/${collection.id}`)}
            className="mr-6 w-[280px]"
          >
            <View className="mb-4 aspect-[4/5] border border-neutral-300">
              <Image
                source={{uri: collection.cover_path || undefined}}
                style={{width: '100%', height: '100%'}}
                contentFit="cover"
                onLoad={() =>
                  setImagesLoadedCount(previous =>
                    Math.min(previous + 1, collections.length),
                  )
                }
              />
            </View>
            <Text className="mb-1 text-[10px] tracking-widest text-tertiary-500">
              {collection.volume}
            </Text>
            <Text className="font-playfair text-xl leading-tight text-primary-900">
              {collection.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
