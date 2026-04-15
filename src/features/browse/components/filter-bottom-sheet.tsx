import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
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
      <View className="flex-1 gap-10 pb-10">
        {/* Header */}
        <View className="flex-row items-center justify-between pb-6 border-b border-neutral-300">
          <Text className="text-2xl font-playfair text-primary-900 tracking-tighter uppercase">
            Filters
          </Text>
          <TouchableOpacity
            onPress={handleClear}
            activeOpacity={0.7}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text className="text-[11px] font-bold text-tertiary-500 uppercase tracking-label-lg">
              Clear All
            </Text>
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View>
          <Text className="mb-4 text-[10px] font-bold text-tertiary-500 uppercase tracking-label-xl">
            Collection
          </Text>
          <View className="flex-row flex-wrap gap-2">
            {categories.map((cat) => (
              <TouchableOpacity
                key={cat}
                onPress={() => setSelectedCategory(cat)}
                className={`px-5 py-3 border ${
                  selectedCategory === cat
                    ? "bg-secondary-500 border-secondary-500"
                    : "bg-surface border-neutral-300"
                } rounded-none`}
              >
                <Text
                  className={`text-[10px] font-bold tracking-label-lg uppercase ${
                    selectedCategory === cat ? "text-white" : "text-primary-900"
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
          <Text className="mb-4 text-[10px] font-bold text-tertiary-500 uppercase tracking-label-xl">
            Price Range
          </Text>
          <View className="flex-row items-center gap-4">
            <View className="flex-1 bg-surface border border-neutral-300 p-4 rounded-none">
              <Text className="text-[9px] uppercase font-bold text-tertiary-500 mb-1 tracking-label-md">
                Min
              </Text>
              <View className="flex-row items-center gap-1">
                <Text className="text-primary-900 font-bold">$</Text>
                <TextInput
                  value={minPrice}
                  onChangeText={setMinPrice}
                  placeholder="0.00"
                  placeholderTextColor={Colors.palette.tertiary300}
                  keyboardType="numeric"
                  className="flex-1 font-bold text-primary-900 text-[13px]"
                />
              </View>
            </View>
            <View className="flex-1 bg-surface border border-neutral-300 p-4 rounded-none">
              <Text className="text-[9px] uppercase font-bold text-tertiary-500 mb-1 tracking-label-md">
                Max
              </Text>
              <View className="flex-row items-center gap-1">
                <Text className="text-primary-900 font-bold">$</Text>
                <TextInput
                  value={maxPrice}
                  onChangeText={setMaxPrice}
                  placeholder="10,000+"
                  placeholderTextColor={Colors.palette.tertiary300}
                  keyboardType="numeric"
                  className="flex-1 font-bold text-primary-900 text-[13px]"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Condition */}
        <View>
          <Text className="mb-4 text-[10px] font-bold text-tertiary-500 uppercase tracking-label-xl">
            Condition
          </Text>
          <View className="flex-row gap-2">
            {["All", "New", "Vintage", "Restored"].map((c) => (
              <TouchableOpacity
                key={c}
                onPress={() => setCondition(c)}
                className={`flex-1 items-center justify-center py-4 border ${
                  condition === c
                    ? "bg-secondary-500 border-secondary-500"
                    : "bg-surface border-neutral-300"
                } rounded-none`}
              >
                <Text
                  className={`text-[10px] font-bold tracking-label-lg uppercase ${
                    condition === c ? "text-white" : "text-primary-900"
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
          <Text className="mb-4 text-[10px] font-bold text-tertiary-500 uppercase tracking-label-xl">
            Seller Rating
          </Text>
          <View className="flex-row gap-4 items-center bg-surface p-5 border border-neutral-300 rounded-none">
            {[1, 2, 3, 4, 5].map((s) => (
              <TouchableOpacity
                key={s}
                onPress={() => setRating(s)}
                className="items-center"
              >
                <Ionicons
                  name={rating >= s ? "star" : "star-outline"}
                  size={20}
                  color={
                    rating >= s
                      ? Colors.brand.secondary
                      : Colors.palette.tertiary100
                  }
                />
              </TouchableOpacity>
            ))}
            {rating > 0 && (
              <Text className="text-[11px] font-bold text-primary-900 ml-2 tracking-label-md">
                {rating}.0 & UP
              </Text>
            )}
          </View>
        </View>

        {/* Apply Button */}
        <TouchableOpacity
          onPress={handleApply}
          activeOpacity={0.9}
          className="mt-4 w-full bg-secondary-500 py-5 items-center justify-center flex-row gap-3 rounded-none"
        >
          <Text className="text-white text-[13px] font-bold tracking-label-xl uppercase">
            Apply Filters
          </Text>
        </TouchableOpacity>
      </View>
    </BottomSheetComponent>
  );
});

FilterBottomSheet.displayName = "FilterBottomSheet";
