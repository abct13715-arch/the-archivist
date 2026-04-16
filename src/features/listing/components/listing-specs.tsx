import {Text, View} from 'react-native';

import type {TListingSpecs} from '../data';

type SpecsProps = {
  specs: TListingSpecs;
};

export const ListingSpecs = ({specs}: SpecsProps) => {
  const specItems = [
    {label: 'Year', value: specs.year},
    {label: 'Movement', value: specs.movement},
    {label: 'Diameter', value: specs.diameter},
    {label: 'Case Material', value: specs.caseMaterial},
    {label: 'Condition', value: specs.condition},
    {label: 'Accessories', value: specs.accessories},
  ].filter(item => item.value);

  if (specItems.length === 0) return null;

  return (
    <View className="pt-12">
      <View className="border-t border-border">
        <View className="flex-row flex-wrap px-5 pt-12">
          {specItems.map(item => (
            <View key={item.label} className="mb-12 w-1/2 pr-4">
              <Text className="mb-2 text-[10px] uppercase tracking-widest text-tertiary-500">
                {item.label}
              </Text>
              <Text className="font-playfair text-xl text-brand-primary">
                {item.value}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
