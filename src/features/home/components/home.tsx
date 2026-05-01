import {useState} from 'react';
import {Colors} from '@/constants/theme';
import {useGetFeaturedCollection} from '@/features/collection/hooks/use-collections';
import {router} from 'expo-router';
import {ActivityIndicator, ScrollView, View} from 'react-native';

import {FeaturedCollection} from './featured-collection';
import {HomeAcquisitions} from './home-acquisitions';
import {HomeCurators} from './home-curators';

export const Home = () => {
  const {data: featuredData, isLoading} = useGetFeaturedCollection();
  const [imageLoaded, setImageLoaded] = useState(false);

  const showLoader = isLoading || !featuredData || !imageLoaded;

  return (
    <View className="flex-1" style={{backgroundColor: Colors.brand.neutral}}>
      {showLoader && (
        <View className="absolute inset-0 z-50 items-center justify-center bg-brand-neutral">
          <ActivityIndicator size="large" color="#C8522A" />
        </View>
      )}

      <ScrollView
        style={{
          backgroundColor: Colors.brand.neutral,
          opacity: showLoader ? 0 : 1,
        }}
      >
        {featuredData && (
          <FeaturedCollection
            collection={featuredData}
            onImageLoad={() => setImageLoaded(true)}
            onExplore={() =>
              router.push({
                pathname: '/collection/[id]',
                params: {id: featuredData.id},
              })
            }
            onViewAll={() => router.push('/collection')}
          />
        )}
        <HomeAcquisitions />
        <HomeCurators />
      </ScrollView>
    </View>
  );
};
