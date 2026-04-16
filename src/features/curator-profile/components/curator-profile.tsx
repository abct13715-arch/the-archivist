import {useState} from 'react';
import {Colors} from '@/constants/theme';
import {ScrollView, View} from 'react-native';

import {tabs, TCuratorProfile} from '../data';
import {CuratorAboutTab} from './curator-about-tab';
import {CuratorHero} from './curator-hero';
import {CuratorInfo} from './curator-info';
import {CuratorListings} from './curator-listings';
import {CuratorQuote} from './curator-quote';
import {CuratorTabs} from './curator-tabs';

type CuratorProfileProps = {
  curator: TCuratorProfile;
};

export const CuratorProfile = ({curator}: CuratorProfileProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <ScrollView
      style={{backgroundColor: Colors.brand.neutral}}
      contentContainerStyle={{paddingBottom: 96}}
    >
      <CuratorHero portrait={curator.portrait} />

      <View className="relative z-10 -mt-20 px-6 md:px-12">
        <CuratorInfo
          role={curator.role}
          name={curator.name}
          location={curator.location}
          stats={curator.stats}
        />
      </View>

      <View className="mt-12 px-6 md:px-12">
        <CuratorQuote quote={curator.quote} author={curator.quoteAuthor} />
      </View>

      <View className="mt-12">
        <View className="px-6 md:px-12">
          <CuratorTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </View>

        <View className="mt-8 px-6 md:px-12">
          {activeTab === 'LISTINGS' && (
            <CuratorListings listings={curator.listings} />
          )}
          {activeTab === 'ABOUT' && (
            <CuratorAboutTab
              bio={curator.bio}
              approach={curator.approach}
              expertise={curator.expertise}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};
