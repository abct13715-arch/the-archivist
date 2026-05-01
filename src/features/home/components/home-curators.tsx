import {useState} from 'react';
import {useGetArchivistProfiles} from '@/features/curator-profile/hooks/use-archivist-profiles';
import {router} from 'expo-router';
import {ActivityIndicator, Text, View} from 'react-native';

import {CuratorArrowNav} from './curator-arrow-nav';
import {CuratorCard} from './curator-card';

const ITEMS_PER_PAGE = 3;

export const HomeCurators = () => {
  const {data: curators = [], isLoading} = useGetArchivistProfiles();
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(curators.length / ITEMS_PER_PAGE);
  const visibleCurators = curators.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  if (isLoading) {
    return (
      <View className="px-6 py-10">
        <ActivityIndicator color="#C8522A" />
      </View>
    );
  }

  if (curators.length === 0) return null;

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

        <Text className="mt-4 text-center text-xs tracking-label-lg text-tertiary-500">
          EST. MMXXIV
        </Text>
      </View>
    </View>
  );
};
