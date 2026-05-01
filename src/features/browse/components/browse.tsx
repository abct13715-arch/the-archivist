import {useMemo, useRef, useState} from 'react';
import {Pagination} from '@/components';
import {Colors} from '@/constants/theme';
import {LoginBottomSheet} from '@/features/auth';
import {useGetListings} from '@/features/listing/hooks/use-listings';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';

import {BrowseListingCard} from './browse-listing-card';
import {CategoryGrid} from './category-grid';
import {FeaturedCollections} from './featured-collections';
import {FilterBottomSheet} from './filter-bottom-sheet';
import {SearchBar} from './search-bar';

interface FilterCriteria {
  price?: {min: string; max: string};
  condition?: string;
  rating?: number;
}

const ITEMS_PER_PAGE = 6;

export const Browse = () => {
  const bottomSheetReference = useRef<BottomSheetModal>(null);
  const {data: listings = [], isLoading} = useGetListings();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategoryId, setActiveCategoryId] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterCriteria>({});

  const filteredListings = useMemo(() => {
    let result = listings;

    if (activeCategoryId !== 0) {
      result = result.filter(l => l.category_id === activeCategoryId);
    }

    if (searchQuery) {
      result = result.filter(l =>
        l.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (filters.price?.min || filters.price?.max) {
      const min = Number.parseFloat(filters.price.min) || 0;
      const max = Number.parseFloat(filters.price.max) || Infinity;
      result = result.filter(l => l.price >= min && l.price <= max);
    }

    if (filters.condition && filters.condition !== 'All') {
      result = result.filter(l => l.condition === filters.condition);
    }

    return result;
  }, [listings, activeCategoryId, searchQuery, filters]);

  const totalPages = Math.ceil(filteredListings.length / ITEMS_PER_PAGE) || 1;
  const paginatedListings = useMemo(() => {
    return filteredListings.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE,
    );
  }, [filteredListings, currentPage]);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePagePress = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <ScrollView
      className="flex-1"
      style={{backgroundColor: Colors.brand.neutral}}
    >
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onFilterPress={() => bottomSheetReference.current?.present()}
      />
      <FeaturedCollections />
      <CategoryGrid
        activeCategoryId={activeCategoryId}
        onSelect={id => {
          setActiveCategoryId(id);
          setCurrentPage(1);
        }}
      />

      {isLoading ? (
        <View className="py-20">
          <ActivityIndicator color="#C8522A" />
        </View>
      ) : filteredListings.length === 0 ? (
        <View className="items-center px-6 py-20">
          <Text className="text-tertiary-500">
            No listings found matching these criteria.
          </Text>
        </View>
      ) : (
        <>
          <View className="flex-row flex-wrap justify-between gap-y-2 px-6 pt-10">
            {paginatedListings.map(listing => (
              <BrowseListingCard
                key={listing.id}
                listing={listing}
                onRequireAuth={() => {
                  bottomSheetReference.current?.present();
                }}
              />
            ))}
          </View>
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onNext={handleNext}
              onPrev={handlePrevious}
              onPagePress={handlePagePress}
            />
          )}
        </>
      )}
      <FilterBottomSheet
        ref={bottomSheetReference}
        onApply={newFilters => {
          setFilters(newFilters);
          setCurrentPage(1);
        }}
        onClear={() => setFilters({})}
      />
      <LoginBottomSheet ref={bottomSheetReference} />
    </ScrollView>
  );
};
