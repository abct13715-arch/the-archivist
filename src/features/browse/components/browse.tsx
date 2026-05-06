import {useEffect, useRef, useState} from 'react';
import {Pagination} from '@/components';
import {Colors} from '@/constants/theme';
import {useAuth} from '@/contexts/auth-context';
import {LoginBottomSheet} from '@/features/auth';
import {usePaginatedListings} from '@/features/listing/hooks/use-paginated-listings';
import {useGetSavedListings} from '@/features/saved/hooks/use-saved-items';
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

export const Browse = () => {
  const filterBottomSheetReference = useRef<BottomSheetModal>(null);
  const authBottomSheetReference = useRef<BottomSheetModal>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategoryId, setActiveCategoryId] = useState<number>(0);
  const [inputValue, setInputValue] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [filters, setFilters] = useState<FilterCriteria>({});

  const {user} = useAuth();
  const {data: savedItems} = useGetSavedListings(user?.id ?? '');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(inputValue);
      setCurrentPage(1);
    }, 500);

    return () => clearTimeout(handler);
  }, [inputValue]);

  const isFilterActive =
    (filters.price?.min !== '' && filters.price?.min !== undefined) ||
    (filters.price?.max !== '' && filters.price?.max !== undefined) ||
    (filters.condition && filters.condition !== 'All') ||
    (filters.rating && filters.rating > 0);

  const hasActiveFilters =
    activeCategoryId !== 0 || debouncedQuery.length > 0 || isFilterActive;

  const {data: response, isLoading} = usePaginatedListings({
    category_id: activeCategoryId === 0 ? undefined : activeCategoryId,
    minPrice: filters.price?.min
      ? Number.parseFloat(filters.price.min)
      : undefined,
    maxPrice: filters.price?.max
      ? Number.parseFloat(filters.price.max)
      : undefined,
    condition:
      filters.condition && filters.condition !== 'All'
        ? filters.condition
        : undefined,
    searchQuery: debouncedQuery,
    rating: filters.rating && filters.rating > 0 ? filters.rating : undefined,
    page: currentPage,
  });

  const listings = response?.data || [];
  const totalPages = response?.count ? Math.ceil(response.count / 6) : 1;

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
        value={inputValue}
        onChangeText={text => {
          setInputValue(text);
        }}
        onFilterPress={() => filterBottomSheetReference.current?.present()}
        hasActiveFilters={!!isFilterActive}
      />
      {!hasActiveFilters && <FeaturedCollections />}
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
      ) : listings.length === 0 ? (
        <View className="items-center px-6 py-20">
          <Text className="text-tertiary-500">
            No listings found matching these criteria.
          </Text>
        </View>
      ) : (
        <>
          <View className="flex-row flex-wrap justify-between gap-y-2 px-6 pt-10">
            {listings.map(listing => {
              const isBookmarked = savedItems?.some(
                item => item.listing_id === listing.id,
              );

              return (
                <BrowseListingCard
                  key={listing.id}
                  listing={listing}
                  isBookmarked={isBookmarked}
                  onRequireAuth={() => {
                    if (!user) {
                      authBottomSheetReference.current?.present();
                    }
                  }}
                />
              );
            })}
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
        ref={filterBottomSheetReference}
        onApply={newFilters => {
          setFilters(newFilters);
          setCurrentPage(1);
        }}
        onClear={() => setFilters({})}
      />
      <LoginBottomSheet ref={authBottomSheetReference} />
    </ScrollView>
  );
};
