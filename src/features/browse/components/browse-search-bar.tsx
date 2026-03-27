import { Feather } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const CATEGORIES = [
  "FURNITURE",
  "LIGHTING",
  "TEXTILES",
  "CERAMICS",
  "OBJECTS",
  "ARCHIVE",
];

const LOCATIONS = [
  "NEW YORK",
  "LOS ANGELES",
  "CHICAGO",
  "SAN FRANCISCO",
  "LONDON",
  "PARIS",
  "BERLIN",
  "TOKYO",
];

const PRICE_RANGES = [
  { label: "Under $500", min: 0, max: 500 },
  { label: "$500 - $1,000", min: 500, max: 1000 },
  { label: "$1,000 - $2,500", min: 1000, max: 2500 },
  { label: "$2,500 - $5,000", min: 2500, max: 5000 },
  { label: "$5,000+", min: 5000, max: Infinity },
];

export default function BrowseSearchBar() {
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<typeof PRICE_RANGES[0] | null>(null);

  const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  const openFilter = () => {
    setVisible(true);
    
    // Reset position before animating
    translateY.setValue(SCREEN_HEIGHT);
    
    // Small delay to ensure Modal is rendered
    setTimeout(() => {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 280,
        useNativeDriver: true,
      }).start();
    }, 10);
  };

  const closeFilter = () => {
    Animated.timing(translateY, {
      toValue: SCREEN_HEIGHT,
      duration: 260,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
    });
  };

  const handleApplyFilters = () => {
    console.log("Filters Applied:", {
      search,
      category: selectedCategory,
      location: selectedLocation,
      priceRange: selectedPriceRange,
    });

    closeFilter();
  };

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSelectedLocation(null);
    setSelectedPriceRange(null);
    console.log("Filters Cleared");
  };

  return (
    <>
      {/* SEARCH BAR */}
      <View className="px-5 mt-4">
        <View className="flex-row items-center border border-primary-900 px-4 py-3 bg-surface">
          <Feather name="search" size={16} color="#7A7A6E" />

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="SEARCH THE ARCHIVE..."
            placeholderTextColor="#8A8880"
            className="flex-1 ml-3 text-[13px] tracking-label-md text-primary-900"
          />

          <View className="w-px h-5 bg-neutral-300 mx-3" />

          <TouchableOpacity
            onPress={openFilter}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text className="text-[11px] tracking-label-lg text-primary-900">
              FILTER
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* FILTER BOTTOM SHEET */}
      <Modal visible={visible} transparent animationType="none">
        {/* Overlay */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={closeFilter}
          className="flex-1 bg-black/40 justify-end"
        >
          {/* Bottom Sheet */}
          <Animated.View
            style={{ transform: [{ translateY }] }}
            className="bg-neutral-100 rounded-t-none border-t border-primary-900"
          >
            {/* Handle Bar */}
            <View className="items-center py-4">
              <View className="w-12 h-1 bg-neutral-500 rounded-full" />
            </View>

            {/* Header */}
            <View className="flex-row justify-between items-center px-6 pb-4 border-b border-neutral-300">
              <Text className="text-2xl font-playfair text-primary-900 tracking-tighter">
                FILTER
              </Text>

              <TouchableOpacity onPress={closeFilter} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                <Feather name="x" size={24} color="#1A1A1A" />
              </TouchableOpacity>
            </View>

            {/* Filter Content */}
            <ScrollView className="max-h-[60vh]" showsVerticalScrollIndicator={false}>
              {/* CATEGORY */}
              <View className="px-6 py-5 border-b border-neutral-300">
                <Text className="text-[10px] tracking-label-xl text-tertiary-500 mb-3">
                  CATEGORY
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  {CATEGORIES.map((category) => (
                    <TouchableOpacity
                      key={category}
                      onPress={() => {
                        setSelectedCategory(category);
                        console.log("Category Selected:", category);
                      }}
                      className={`px-4 py-3 border ${
                        selectedCategory === category
                          ? "bg-primary-900 border-primary-900"
                          : "border-neutral-300 bg-surface"
                      }`}
                    >
                      <Text
                        className={`text-[10px] tracking-label-lg ${
                          selectedCategory === category
                            ? "text-white"
                            : "text-primary-900"
                        }`}
                      >
                        {category}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* LOCATION */}
              <View className="px-6 py-5 border-b border-neutral-300">
                <Text className="text-[10px] tracking-label-xl text-tertiary-500 mb-3">
                  LOCATION
                </Text>
                <View className="flex-row flex-wrap gap-2">
                  {LOCATIONS.map((location) => (
                    <TouchableOpacity
                      key={location}
                      onPress={() => {
                        setSelectedLocation(location);
                        console.log("Location Selected:", location);
                      }}
                      className={`px-4 py-3 border ${
                        selectedLocation === location
                          ? "bg-primary-900 border-primary-900"
                          : "border-neutral-300 bg-surface"
                      }`}
                    >
                      <Text
                        className={`text-[10px] tracking-label-lg ${
                          selectedLocation === location
                            ? "text-white"
                            : "text-primary-900"
                        }`}
                      >
                        {location}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* PRICE RANGE */}
              <View className="px-6 py-5 border-b border-neutral-300">
                <Text className="text-[10px] tracking-label-xl text-tertiary-500 mb-3">
                  PRICE RANGE
                </Text>
                <View className="gap-2">
                  {PRICE_RANGES.map((range, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setSelectedPriceRange(range);
                        console.log("Price Range Selected:", range);
                      }}
                      className={`flex-row justify-between items-center px-4 py-3 border ${
                        selectedPriceRange === range
                          ? "bg-primary-900 border-primary-900"
                          : "border-neutral-300 bg-surface"
                      }`}
                    >
                      <Text
                        className={`text-[10px] tracking-label-lg ${
                          selectedPriceRange === range
                            ? "text-white"
                            : "text-primary-900"
                        }`}
                      >
                        {range.label}
                      </Text>
                      {selectedPriceRange === range && (
                        <Feather name="check" size={16} color="#FFFFFF" />
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </ScrollView>

            {/* Footer Actions */}
            <View className="px-6 py-5 border-t border-neutral-300 bg-neutral-100">
              <View className="flex-row gap-3">
                <TouchableOpacity
                  onPress={handleClearFilters}
                  className="flex-1 py-3 border border-primary-900 bg-surface items-center"
                >
                  <Text className="text-[11px] tracking-label-lg text-primary-900">
                    CLEAR ALL
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={handleApplyFilters}
                  className="flex-1 py-3 bg-secondary-500 items-center"
                >
                  <Text className="text-[11px] tracking-label-lg text-white">
                    APPLY FILTERS
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}
