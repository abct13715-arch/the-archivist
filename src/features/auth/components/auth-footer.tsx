import React from 'react';
import {Text, View} from 'react-native';

export const AuthFooter = () => {
  return (
    <View className="mt-12 flex w-full flex-col gap-8 border-t border-border bg-brand-neutral px-8 py-12">
      <View className="space-y-4">
        <Text className="font-playfair text-lg uppercase tracking-tighter text-brand-primary">
          THE MODERN ARCHIVIST
        </Text>
        <Text className="text-[11px] uppercase tracking-widest text-brand-tertiary">
          © 2024 THE MODERN ARCHIVIST. ALL RIGHTS RESERVED.
        </Text>
      </View>
      <View className="flex-row flex-wrap gap-x-12 gap-y-4">
        <View className="gap-3">
          <Text className="text-[11px] font-bold uppercase tracking-widest text-brand-primary">
            Support
          </Text>
          <Text className="text-[11px] uppercase tracking-widest text-brand-tertiary underline">
            Shipping
          </Text>
        </View>
        <View className="gap-3">
          <Text className="text-[11px] font-bold uppercase tracking-widest text-brand-primary">
            Legal
          </Text>
          <Text className="text-[11px] uppercase tracking-widest text-brand-tertiary underline">
            Privacy
          </Text>
        </View>
      </View>
    </View>
  );
};
