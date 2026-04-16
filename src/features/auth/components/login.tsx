import React from 'react';
import {useRouter} from 'expo-router';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {AuthHeader} from './auth-header';
import {AuthInput} from './auth-input';
import {SocialLogin} from './social-login';

export const Login = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-brand-neutral">
      <View className="flex-1">
        <AuthHeader showBack onBack={() => router.back()} />
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 24}
        >
          <ScrollView
            className="flex-1"
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View className="w-full max-w-md self-center px-6 py-12">
              <View className="mb-12">
                <Text className="mb-2 font-playfair text-5xl font-bold uppercase tracking-tighter text-brand-primary">
                  LOGIN
                </Text>
                <Text className="text-[10px] uppercase tracking-[0.2em] text-brand-tertiary">
                  Enter the modern archive
                </Text>
              </View>

              <SocialLogin />

              <View className="relative mb-10 flex-row items-center">
                <View className="h-[1px] flex-1 bg-border" />
                <Text className="mx-4 text-[10px] uppercase tracking-[0.3em] text-brand-tertiary">
                  OR
                </Text>
                <View className="h-[1px] flex-1 bg-border" />
              </View>

              <View className="space-y-8">
                <AuthInput
                  label="Email Address"
                  placeholder="email@example.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                <View className="relative">
                  <AuthInput
                    label="Password"
                    placeholder="••••••••"
                    showPasswordToggle
                  />
                  <TouchableOpacity className="absolute bottom-[-8] right-4">
                    <Text className="text-[10px] uppercase tracking-widest text-brand-tertiary underline">
                      Forgot?
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  className="mt-8 w-full items-center bg-brand-secondary py-5"
                  onPress={() => {
                    router.dismissAll();
                    router.push('/(tabs)');
                  }}
                >
                  <Text className="text-[12px] font-bold uppercase tracking-[0.25em] text-white">
                    Log In
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="mt-12 items-center border-t border-border pt-8">
                <TouchableOpacity
                  onPress={() => router.replace('/(auth)/register')}
                >
                  <Text className="text-[11px] uppercase tracking-widest text-brand-tertiary">
                    Don&apos;t have an account?{' '}
                    <Text className="font-bold text-brand-primary">
                      Sign Up
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};
