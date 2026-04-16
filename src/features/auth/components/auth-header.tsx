import React from 'react';
import {Colors} from '@/constants/theme';
import {Ionicons} from '@expo/vector-icons';
import {useRouter} from 'expo-router';
import {Text, TouchableOpacity, View} from 'react-native';

interface AuthHeaderProps {
  showBack?: boolean;
  title?: string;
  onBack?: () => void;
}

export const AuthHeader = ({
  showBack = false,
  title = 'THE ARCHIVIST',
  onBack,
}: AuthHeaderProps) => {
  const router = useRouter();

  return (
    <View className="w-full flex-row items-center justify-between border-b border-border bg-brand-neutral px-6 py-4">
      {showBack && (
        <TouchableOpacity onPress={onBack || (() => router.back())}>
          <Ionicons name="arrow-back" size={24} color={Colors.brand.primary} />
        </TouchableOpacity>
      )}
      <Text className="font-playfair text-3xl font-bold uppercase tracking-tighter text-brand-primary">
        {title}
      </Text>
    </View>
  );
};
