import {Colors} from '@/constants/theme';
import {router} from 'expo-router';
import {ScrollView} from 'react-native';

import {featuredCollection} from '../data';
import {FeaturedCollection} from './featured-collection';
import {HomeAcquisitions} from './home-acquisitions';
import {HomeCurators} from './home-curators';

export const Home = () => {
  return (
    <ScrollView
      className="flex-1"
      style={{backgroundColor: Colors.brand.neutral}}
    >
      <FeaturedCollection
        collection={featuredCollection}
        onExplore={() =>
          router.push({
            pathname: '/collection/[id]',
            params: {id: featuredCollection.id},
          })
        }
        onViewAll={() => router.push('/collection')}
      />
      <HomeAcquisitions />
      <HomeCurators />
    </ScrollView>
  );
};
