import {useEffect, useState} from 'react';
import {router} from 'expo-router';
import {Text, View} from 'react-native';

import {useCurators} from '../data';
import {CuratorArrowNav} from './curator-arrow-nav';
import {CuratorCard} from './curator-card';

const ITEMS_PER_PAGE = 3;

export const HomeCurators = () => {
  const {curators} = useCurators();
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(curators.length / ITEMS_PER_PAGE);
  const visibleCurators = curators.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  useEffect(() => {
    console.log('curators', curators);
  }, [curators]);

  return (
    <View className="px-6 pt-4">
      <Text className="mb-2 text-xs font-bold tracking-label-lg text-tertiary-500">
        THE COLLECTIVE
      </Text>

      <Text className="font-playfair text-5xl italic leading-tight text-primary-900">
        Voices of the Archive.
      </Text>

      <CuratorArrowNav
        onPrev={() => setPage(p => Math.max(p - 1, 0))}
        onNext={() => setPage(p => Math.min(p + 1, totalPages - 1))}
        canGoPrev={page > 0}
        canGoNext={page < totalPages - 1}
      />

      <View className="mt-4">
        {visibleCurators.map(curator => (
          <CuratorCard
            key={curator.id}
            image={curator.image}
            location={curator.location}
            name={curator.name}
            quote={curator.quote}
            selections={curator.selections}
            onPress={() =>
              router.push({
                pathname: '/curator/[id]',
                params: {id: curator.id},
              } as any)
            }
          />
        ))}
      </View>
      <View className="-mx-6 mt-10 gap-6 bg-primary-900 px-6 py-12">
        <View className="items-center gap-2">
          <Text className="font-playfair text-4xl tracking-label-xl text-neutral-100">
            THE ARCHIVIST
          </Text>
          <Text className="text-xs tracking-label-xl text-tertiary-300">
            PERMANENT DESIGN LABORATORY
          </Text>
        </View>

        <View className="mt-4 flex-row justify-center gap-16">
          <View className="gap-3">
            <Text className="text-xs font-bold tracking-label-lg text-brand-secondary">
              JOURNAL
            </Text>
            <Text className="text-sm text-neutral-100">Essays</Text>
            <Text className="text-sm text-neutral-100">Interviews</Text>
          </View>
          <View className="gap-3">
            <Text className="text-xs font-bold tracking-label-lg text-brand-secondary">
              ARCHIVE
            </Text>
            <Text className="text-sm text-neutral-100">Objects</Text>
            <Text className="text-sm text-neutral-100">Makers</Text>
          </View>
        </View>

        <Text className="mt-4 text-center text-xs tracking-label-lg text-tertiary-500">
          EST. MMXXIV
        </Text>
      </View>
    </View>
  );
};
