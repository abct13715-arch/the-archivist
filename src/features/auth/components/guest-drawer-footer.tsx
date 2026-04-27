import React from 'react';
import {useRouter} from 'expo-router';
import {Text, TouchableOpacity, View} from 'react-native';

export const GuestDrawerFooter = () => {
  const router = useRouter();

  return (
    <View className="border-white/1 border-t bg-brand-primary p-8 pb-12">
      <View className="mx-auto space-y-8">
        <View className="space-y-4 pb-4">
          <Text className="font-playfair text-5xl leading-none tracking-tighter text-brand-neutral">
            Join the{'\n'}Community
          </Text>
        </View>

        <View className="flex flex-col gap-4">
          <TouchableOpacity
            className="items-center justify-center bg-brand-secondary px-10 py-5"
            onPress={() => router.push('/(auth)/register')}
          >
            <Text className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Create Account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="items-center justify-center border border-white/20 px-10 py-5"
            onPress={() => router.push('/(auth)/login')}
          >
            <Text className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
