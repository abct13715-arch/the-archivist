import { Pagination } from "@/components";
import { Colors } from "@/constants/theme";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { browseProducts } from "../data";
import { BrowseProductCard } from "./browse-product-card";
import { CategoryGrid } from "./category-grid";
import { FeaturedCollections } from "./featured-collections";
import { SearchBar } from "./search-bar";

export const Browse = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePagePress = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <ScrollView
      className="flex-1"
      style={{ backgroundColor: Colors.brand.neutral }}
    >
      <SearchBar />
      <FeaturedCollections />
      <CategoryGrid />

      <View className="px-6 py-10 flex-row flex-wrap justify-between gap-y-2">
        {browseProducts.map((product) => (
          <BrowseProductCard 
            key={product.id} 
            product={product}
            onToggleBookmark={(id, bookmarked) => {
              console.log("Bookmark toggled:", id, bookmarked);
            }}
          />
        ))}
      </View>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNext}
        onPrev={handlePrev}
        onPagePress={handlePagePress}
      />
    </ScrollView>
  );
};
