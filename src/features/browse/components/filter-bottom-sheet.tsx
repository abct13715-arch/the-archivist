import React, {forwardRef, useState} from 'react';
import {Colors} from '@/constants/theme';
import {Ionicons} from '@expo/vector-icons';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import {BottomSheetComponent} from '../../../components/ui/bottom-sheet';

interface FilterBottomSheetProps {
  onApply?: (filters: any) => void;
  onClear?: () => void;
}

export const FilterBottomSheet = forwardRef<
  BottomSheetModal,
  FilterBottomSheetProps
>(({onApply, onClear}, reference) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [condition, setCondition] = useState('All');
  const [rating, setRating] = useState(0);

  const handleApply = () => {
    onApply?.({
      price: {min: minPrice, max: maxPrice},
      condition,
      rating,
    });
    // @ts-ignore
    reference.current?.dismiss();
  };

  const handleClear = () => {
    setMinPrice('');
    setMaxPrice('');
    setCondition('All');
    setRating(0);
    onClear?.();
  };

  return (
    <BottomSheetComponent ref={reference} snapPoints={['85%']} useScroll={true}>
      <View className="flex-1 gap-10 pb-10">
        {/* Header */}
        <View className="flex-row items-center justify-between border-b border-neutral-300 pb-6">
          <Text className="font-playfair text-2xl uppercase tracking-tighter text-primary-900">
            Filters
          </Text>
          <TouchableOpacity
            onPress={handleClear}
            activeOpacity={0.7}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          >
            <Text className="text-[11px] font-bold uppercase tracking-label-lg text-tertiary-500">
              Clear All
            </Text>
          </TouchableOpacity>
        </View>

        {/* Price Range */}
        <View>
          <Text className="mb-4 text-[10px] font-bold uppercase tracking-label-xl text-tertiary-500">
            Price Range
          </Text>
          <View className="flex-row items-center gap-4">
            <View className="flex-1 rounded-none border border-neutral-300 bg-surface p-4">
              <Text className="mb-1 text-[9px] font-bold uppercase tracking-label-md text-tertiary-500">
                Min
              </Text>
              <View className="flex-row items-center gap-1">
                <Text className="font-bold text-primary-900">$</Text>
                <TextInput
                  value={minPrice}
                  onChangeText={setMinPrice}
                  placeholder="0.00"
                  placeholderTextColor={Colors.palette.tertiary300}
                  keyboardType="numeric"
                  className="flex-1 text-[13px] font-bold text-primary-900"
                />
              </View>
            </View>
            <View className="flex-1 rounded-none border border-neutral-300 bg-surface p-4">
              <Text className="mb-1 text-[9px] font-bold uppercase tracking-label-md text-tertiary-500">
                Max
              </Text>
              <View className="flex-row items-center gap-1">
                <Text className="font-bold text-primary-900">$</Text>
                <TextInput
                  value={maxPrice}
                  onChangeText={setMaxPrice}
                  placeholder="10,000+"
                  placeholderTextColor={Colors.palette.tertiary300}
                  keyboardType="numeric"
                  className="flex-1 text-[13px] font-bold text-primary-900"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Condition */}
        <View>
          <Text className="mb-4 text-[10px] font-bold uppercase tracking-label-xl text-tertiary-500">
            Condition
          </Text>
          <View className="flex-row gap-2">
            {['All', 'mint', 'excellent', 'good', 'fair'].map(c => (
              <TouchableOpacity
                key={c}
                onPress={() => setCondition(c)}
                className={`flex-1 items-center justify-center border py-4 ${
                  condition === c
                    ? 'border-secondary-500 bg-secondary-500'
                    : 'border-neutral-300 bg-surface'
                } rounded-none`}
              >
                <Text
                  className={`text-[10px] font-bold uppercase tracking-label-lg ${
                    condition === c ? 'text-white' : 'text-primary-900'
                  }`}
                >
                  {c.toUpperCase()}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Rating */}
        <View>
          <Text className="mb-4 text-[10px] font-bold uppercase tracking-label-xl text-tertiary-500">
            Seller Rating
          </Text>
          <View className="flex-row items-center gap-4 rounded-none border border-neutral-300 bg-surface p-5">
            {[1, 2, 3, 4, 5].map(s => (
              <TouchableOpacity
                key={s}
                onPress={() => setRating(s)}
                className="items-center"
              >
                <Ionicons
                  name={rating >= s ? 'star' : 'star-outline'}
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
              <Text className="ml-2 text-[11px] font-bold tracking-label-md text-primary-900">
                {rating}.0 & UP
              </Text>
            )}
          </View>
        </View>

        {/* Apply Button */}
        <TouchableOpacity
          onPress={handleApply}
          activeOpacity={0.9}
          className="mt-4 w-full flex-row items-center justify-center gap-3 rounded-none bg-secondary-500 py-5"
        >
          <Text className="text-[13px] font-bold uppercase tracking-label-xl text-white">
            Apply Filters
          </Text>
        </TouchableOpacity>
      </View>
    </BottomSheetComponent>
  );
});

FilterBottomSheet.displayName = 'FilterBottomSheet';
