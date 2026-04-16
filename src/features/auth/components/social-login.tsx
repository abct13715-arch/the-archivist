import React from 'react';
import {Colors} from '@/constants/theme';
import {Ionicons} from '@expo/vector-icons';
import {Text, TouchableOpacity, View} from 'react-native';

export const SocialLogin = () => {
  return (
    <View className="mb-10">
      <TouchableOpacity className="h-14 w-full flex-row items-center justify-center gap-3 border border-brand-primary">
        <Ionicons name="logo-google" size={20} color={Colors.brand.primary} />
        <Text className="text-[11px] font-bold uppercase tracking-widest text-brand-primary">
          Continue with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};
