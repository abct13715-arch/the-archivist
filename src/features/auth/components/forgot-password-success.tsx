import React from 'react';
import {useRouter} from 'expo-router';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Ionicons} from '@expo/vector-icons';
import {Colors} from '@/constants/theme';
import {AuthHeader} from './auth-header';

export const ForgotPasswordSuccess = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-brand-neutral">
      <View className="flex-1">
        <AuthHeader />
        <View className="flex-1 items-center justify-center px-6">
          <View className="mb-8 h-24 w-24 items-center justify-center rounded-full border border-brand-primary/20 bg-white/50">
            <Ionicons name="checkmark" size={48} color={Colors.brand.primary} />
          </View>
          
          <Text className="mb-4 font-playfair text-3xl font-bold uppercase tracking-tighter text-brand-primary">
            Email Sent
          </Text>
          
          <Text className="mb-12 text-center text-[12px] uppercase leading-relaxed tracking-[0.15em] text-brand-tertiary">
            We have sent a recovery link to your email.{'\n'}Please check your inbox to continue.
          </Text>

          <TouchableOpacity
            className="w-full max-w-xs items-center bg-brand-primary py-5"
            onPress={() => router.replace('/(auth)/login')}
          >
            <Text className="text-[11px] font-bold uppercase tracking-[0.25em] text-white">
              Back to Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
