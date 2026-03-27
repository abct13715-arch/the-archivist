import { Feather } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { FilterBottomSheet } from "./filter-bottom-sheet";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const filterBottomSheetRef = useRef<BottomSheetModal>(null);

  return (
    <>
      <View className="px-6 py-6 border-b border-neutral-300">
        <View className="flex-row items-center gap-4 border border-primary-900 p-3 bg-white">
          <Feather name="search" size={16} color="#1A1A1A" />
          <TextInput
            value={search}
            onChangeText={setSearch}
            className="flex-1 text-[10px] tracking-widest uppercase font-bold text-primary-900"
            placeholder="SEARCH THE ARCHIVE..."
            placeholderTextColor="#7A7A6E"
          />
          <View className="h-4 w-[1px] bg-neutral-300" />
          <TouchableOpacity
            onPress={() => filterBottomSheetRef.current?.present()}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Text className="text-[10px] font-bold tracking-widest text-primary-900">
              FILTER
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FilterBottomSheet ref={filterBottomSheetRef} />
    </>
  );
};
