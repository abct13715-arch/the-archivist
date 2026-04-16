import {useEffect} from 'react';
import {router} from 'expo-router';
import {ScrollView, Text, View} from 'react-native';

import {useCollection} from '../data';
import {CollectionCard} from './collection-card';

export const Collection = () => {
  const {collections} = useCollection();

  useEffect(() => {
    console.log('collections', collections);
  }, [collections]);

  return (
    <ScrollView className="flex-1 bg-neutral-100">
      <View className="px-6 pb-4 pt-8">
        <Text className="font-playfair text-7xl leading-tight text-primary-900">
          The Archives
        </Text>

        <Text className="mt-6 text-2xl leading-10 text-tertiary-500">
          A curated sanctuary of form and function. Each entry in our archive is
          selected for its historical resonance, architectural integrity, and
          enduring aesthetic contribution to the modern landscape.
        </Text>
        <View className="my-4 h-px w-1/3 bg-primary-900" />
        <Text className="mb-6 text-xs font-bold tracking-label-lg text-primary-900">
          CURATED SERIES 2024
        </Text>
      </View>
      <View className="px-6">
        {collections.map((item, index) => (
          <View key={index}>
            <CollectionCard
              key={item.id}
              seriesNumber={item.seriesNumber}
              title={item.title}
              description={item.description}
              image={item.image}
              onPress={() => router.push(`/collection/${item.id}`)}
            />

            {index === 1 && (
              <View className="mb-10 border-y border-tertiary-100 py-10">
                <View className="border-l-2 border-brand-secondary py-2 pl-5">
                  <Text className="font-playfair text-3xl italic leading-10 text-primary-700">
                    "Design is not just what it looks like and feels like.
                    Design is how it works."
                  </Text>
                  <Text className="mt-3 text-xs tracking-label-lg text-tertiary-500">
                    — THE ARCHIVIST MANIFESTO
                  </Text>
                </View>
              </View>
            )}
          </View>
        ))}
      </View>

      <View className="px-6 pb-16 pt-10">
        <View className="mb-8 border-t border-tertiary-100" />

        <Text className="mb-4 text-xs font-bold tracking-label-lg text-tertiary-500">
          THE PHILOSOPHY
        </Text>

        <Text className="mb-10 font-playfair text-4xl leading-tight text-primary-900">
          We do not curate for the moment. We archive for the future. Every
          collection is a testament to the idea that true beauty is immutable
          and transcends the cycle of trends.
        </Text>

        <View className="mb-10 flex-row gap-16">
          <View className="gap-3">
            <Text className="text-xs font-bold tracking-label-lg text-tertiary-500">
              ARCHIVES
            </Text>
            <Text className="text-xs font-bold tracking-label-md text-primary-900">
              EXPLORE ALL
            </Text>
            <Text className="text-xs font-bold tracking-label-md text-primary-900">
              BY DECADE
            </Text>
            <Text className="text-xs font-bold tracking-label-md text-primary-900">
              BY DESIGNER
            </Text>
          </View>

          <View className="gap-3">
            <Text className="text-xs font-bold tracking-label-lg text-tertiary-500">
              INQUIRY
            </Text>
            <Text className="text-xs font-bold tracking-label-md text-primary-900">
              PRIVATE VIEWINGS
            </Text>
            <Text className="text-xs font-bold tracking-label-md text-primary-900">
              SUBMISSIONS
            </Text>
          </View>
        </View>

        <View className="border-t border-tertiary-100 pt-6">
          <Text className="text-center text-xs tracking-label-sm text-tertiary-500">
            © 2024 THE ARCHIVIST COLLECTIVE. ALL RIGHTS RESERVED.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
