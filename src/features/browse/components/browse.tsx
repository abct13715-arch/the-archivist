import {useRef, useState} from 'react';
import {Pagination} from '@/components';
import {Colors} from '@/constants/theme';
import {LoginBottomSheet} from '@/features/auth';
import {ScrollView, View} from 'react-native';

import {browseListings} from '../data';
import {BrowseListingCard} from './browse-listing-card';
import {CategoryGrid} from './category-grid';
import {FeaturedCollections} from './featured-collections';
import {SearchBar} from './search-bar';

export const Browse = () => {
  const bottomSheetReference = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;

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
      <SearchBar />
      <FeaturedCollections />
      <CategoryGrid />

      <View className="flex-row flex-wrap justify-between gap-y-2 px-6 py-10">
        {browseListings.map(listing => (
          <BrowseListingCard
            key={listing.id}
            listing={listing}
            onRequireAuth={() => {
              bottomSheetReference.current?.present();
            }}
          />
        ))}
      </View>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNext}
        onPrev={handlePrevious}
        onPagePress={handlePagePress}
      />
      <LoginBottomSheet ref={bottomSheetReference} />
    </ScrollView>
  );
};
