import React from 'react';
import {images} from '@/assets/images';
import {Image} from 'expo-image';
import {useRouter} from 'expo-router';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const HERO_HEIGHT = SCREEN_WIDTH < 375 ? 380 : 442;

const STATS = [
  {value: '12k+', label: 'Active Curators'},
  {value: '50k+', label: 'Archived Objects'},
  {value: '145', label: 'Global Cities'},
  {value: '24/7', label: 'Expert Support'},
];

export const GuestProfile = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-neutral-100">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View className="relative" style={{height: HERO_HEIGHT}}>
          <Image
            source={images.onboardingBg}
            className="absolute inset-0"
            style={{width: '100%', height: '100%'}}
            contentFit="cover"
          />
          <View className="absolute inset-0 bg-black/10" />
          <View className="absolute inset-0 justify-end">
            <View className="p-8">
              <Text
                className="font-playfair italic text-white"
                style={{
                  fontSize: 40,
                  letterSpacing: -2,
                  lineHeight: 44,
                }}
              >
                Join the {'\n'}Modern Archive
              </Text>
            </View>
          </View>
        </View>

        {/* Two-Column Membership Invitation */}
        <View
          className={`flex-${SCREEN_WIDTH >= 768 ? 'row' : 'col'} border-b border-neutral-300`}
        >
          {/* Left Panel */}
          <View
            className={`${SCREEN_WIDTH >= 768 ? 'w-1/2' : 'w-full'} justify-center p-8 ${SCREEN_WIDTH >= 768 ? 'border-r border-neutral-300' : ''}`}
          >
            <View className="max-w-[400px]">
              <Text className="mb-4 text-[10px] font-bold tracking-[4px] text-secondary-500">
                MEMBERSHIP INVITATION
              </Text>
              <Text className="mb-8 font-playfair text-[28px] leading-9 tracking-[-1px] text-primary-900">
                A dedicated space for the discerning collector.
              </Text>
              <Text className="mb-4 text-base leading-7 text-tertiary-500">
                Save your favorite objects, track your listings, and connect
                with other archivists across the globe.
              </Text>
              <Text className="text-base leading-7 text-tertiary-500">
                As a member, you gain access to our curated provenance reports
                and early access to archival releases.
              </Text>
            </View>
          </View>

          {/* Right Panel */}
          <View
            className={`${SCREEN_WIDTH >= 768 ? 'w-1/2' : 'w-full'} items-center justify-center bg-white/50 p-8`}
          >
            <View className="w-full max-w-[320px] gap-4">
              <TouchableOpacity
                className="items-center bg-secondary-500 px-8 py-5"
                onPress={() => router.push('/(auth)/register')}
              >
                <Text className="text-[11px] font-bold tracking-[4px] text-white">
                  CREATE ACCOUNT
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="items-center border border-primary-900 bg-transparent px-8 py-5"
                onPress={() => router.push('/(auth)/login')}
              >
                <Text className="text-[11px] font-bold tracking-[4px] text-primary-900">
                  LOGIN
                </Text>
              </TouchableOpacity>

              <Text className="mt-6 text-center text-[9px] font-medium tracking-[3px] text-tertiary-500">
                BY CONTINUING, YOU AGREE TO OUR TERMS OF SERVICE.
              </Text>
            </View>
          </View>
        </View>

        {/* Community Stats */}
        <View className="flex-row flex-wrap border-b border-neutral-300">
          {STATS.map((stat, index) => {
            const isLastInRow =
              (index + 1) % 2 === 0 || index === STATS.length - 1;
            const isLastRow = index >= 2;

            return (
              <View
                key={stat.label}
                className={`w-1/2 items-center justify-center p-8 ${!isLastInRow ? 'border-r border-neutral-300' : ''} ${!isLastRow ? 'border-b border-neutral-300' : ''}`}
              >
                <Text className="font-playfair text-2xl text-primary-900">
                  {stat.value}
                </Text>
                <Text className="mt-2 text-[9px] font-bold tracking-[3.2px] text-tertiary-500">
                  {stat.label}
                </Text>
              </View>
            );
          })}
        </View>

        {/* Pull Quote Section */}
        <View className="items-center justify-center bg-white p-16">
          <View className="max-w-[500px] border-l-2 border-secondary-500 pl-8">
            <Text className="font-playfair text-2xl italic leading-9 text-primary-900">
              &quot;Objects are not just things; they are the physical vessels
              of our history, waiting to be rediscovered and
              recontextualized.&quot;
            </Text>
            <Text className="mt-6 text-[10px] font-bold tracking-[4px] text-tertiary-500">
              — THE ARCHIVIST MANIFESTO
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
