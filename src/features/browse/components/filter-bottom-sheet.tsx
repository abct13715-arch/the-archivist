import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { forwardRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { BottomSheetComponent } from "../../../components/ui/bottom-sheet";
import { categories } from "../data";

interface FilterBottomSheetProps {
  onApply?: (filters: any) => void;
  onClear?: () => void;
}

export const FilterBottomSheet = forwardRef<
  BottomSheetModal,
  FilterBottomSheetProps
>(({ onApply, onClear }, reference) => {
  const [selectedCategory, setSelectedCategory] = useState("EVERYTHING");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [condition, setCondition] = useState("All");
  const [rating, setRating] = useState(0);

  const handleApply = () => {
    onApply?.({
      category: selectedCategory,
      price: { min: minPrice, max: maxPrice },
      condition,
      rating,
    });
    // @ts-ignore
    reference.current?.dismiss();
  };

  const handleClear = () => {
    setSelectedCategory("EVERYTHING");
    setMinPrice("");
    setMaxPrice("");
    setCondition("All");
    setRating(0);
    onClear?.();
  };

  return (
    <BottomSheetComponent ref={reference} snapPoints={["85%"]} useScroll={true}>
      <View className="flex-1 gap-8 pb-10">
        {/* Header */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <FontAwesome5 name="filter" size={20} color="#333333" />
            <Text className="text-lg text-primary-lightGray">Filters</Text>
          </View>
          <TouchableOpacity onPress={handleClear} activeOpacity={0.7}>
            <Text className="text-sm font-medium text-gray-400 uppercase tracking-widest">
              Clear
            </Text>
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View>
          <Text className="mb-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
            Collection
          </Text>
          <View className="flex-row flex-wrap gap-2">
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                onPress={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-3xl border ${
                  selectedCategory === cat
                    ? "bg-[#333333] border-[#333333]"
                    : "bg-white border-[#DEDEDE]"
                }`}
              >
                <Text
                  className={`text-xs font-bold tracking-widest uppercase ${
                    selectedCategory === cat
                      ? "text-white"
                      : "text-primary-lightGray"
                  }`}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Price Range */}
        <View>
          <Text className="mb-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
            Price Range
          </Text>
          <View className="flex-row items-center gap-4">
            <View className="flex-1 bg-[#F9FAFB] rounded-2xl border border-[#DEDEDE] p-4">
              <Text className="text-[10px] uppercase font-bold text-gray-400 mb-1">
                Min
              </Text>
              <View className="flex-row items-center gap-1">
                <Text className="text-primary-lightGray font-bold">$</Text>
                <TextInput
                  value={minPrice}
                  onChangeText={setMinPrice}
                  placeholder="0.00"
                  keyboardType="numeric"
                  className="flex-1 font-bold text-primary-lightGray"
                />
              </View>
            </View>
            <View className="flex-1 bg-[#F9FAFB] rounded-2xl border border-[#DEDEDE] p-4">
              <Text className="text-[10px] uppercase font-bold text-gray-400 mb-1">
                Max
              </Text>
              <View className="flex-row items-center gap-1">
                <Text className="text-primary-lightGray font-bold">$</Text>
                <TextInput
                  value={maxPrice}
                  onChangeText={setMaxPrice}
                  placeholder="10,000+"
                  keyboardType="numeric"
                  className="flex-1 font-bold text-primary-lightGray"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Condition */}
        <View>
          <Text className="mb-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
            Condition
          </Text>
          <View className="flex-row gap-2">
            {["All", "New", "Vintage", "Restored"].map((c) => (
              <TouchableOpacity
                key={c}
                onPress={() => setCondition(c)}
                className={`flex-1 items-center justify-center py-4 rounded-3xl border ${
                  condition === c
                    ? "bg-[#333333] border-[#333333]"
                    : "bg-[#F9FAFB] border-[#DEDEDE]"
                }`}
              >
                <Text
                  className={`text-xs font-bold tracking-widest uppercase ${
                    condition === c ? "text-white" : "text-primary-lightGray"
                  }`}
                >
                  {c}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Rating */}
        <View>
          <Text className="mb-4 text-xs font-medium text-gray-500 uppercase tracking-widest">
            Seller Rating
          </Text>
          <View className="flex-row gap-4 items-center bg-[#F9FAFB] p-5 rounded-3xl border border-[#DEDEDE]">
            {[1, 2, 3, 4, 5].map((s) => (
              <TouchableOpacity
                key={s}
                onPress={() => setRating(s)}
                className="items-center"
              >
                <Ionicons
                  name={rating >= s ? "star" : "star-outline"}
                  size={24}
                  color={rating >= s ? "#333333" : "#DEDEDE"}
                />
              </TouchableOpacity>
            ))}
            {rating > 0 && (
              <Text className="text-xs font-bold text-gray-600 ml-2">
                {rating}.0 & up
              </Text>
            )}
          </View>
        </View>

        {/* Apply Button */}
        <TouchableOpacity
          onPress={handleApply}
          activeOpacity={0.8}
          className="mt-4 w-full bg-[#333333] py-5 rounded-[30px] items-center justify-center flex-row gap-3 shadow-black/5 border border-[#1A1A1A]"
        >
          <MaterialIcons name="done" size={24} color="white" />
          <Text className="text-white text-lg font-bold tracking-widest uppercase">
            Apply Filters
          </Text>
        </TouchableOpacity>
      </View>
    </BottomSheetComponent>
  );
});

FilterBottomSheet.displayName = "FilterBottomSheet";
