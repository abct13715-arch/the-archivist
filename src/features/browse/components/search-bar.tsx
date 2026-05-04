import React from 'react';
import {Colors} from '@/constants/theme';
import {Feather} from '@expo/vector-icons';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onFilterPress: () => void;
  hasActiveFilters?: boolean;
}

export const SearchBar = ({
  value,
  onChangeText,
  onFilterPress,
  hasActiveFilters = false,
}: SearchBarProps) => {
  return (
    <View className="border-b border-neutral-300 px-6 py-6">
      <View className="flex-row items-center gap-4 border border-primary-900 bg-white p-3">
        <Feather name="search" size={16} color={Colors.brand.primary} />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          className="flex-1 text-[10px] font-bold uppercase tracking-widest text-primary-900"
          placeholder="SEARCH THE ARCHIVE..."
          placeholderTextColor={Colors.brand.tertiary}
        />
        <View className="h-4 w-[1px] bg-neutral-300" />
        <TouchableOpacity
          onPress={onFilterPress}
          hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
        >
          <View>
            <Text className="text-[10px] font-bold tracking-widest text-primary-900">
              FILTER
            </Text>
            {hasActiveFilters && (
              <View className="absolute -right-2 -top-2 h-2 w-2 rounded-full bg-secondary-500" />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
