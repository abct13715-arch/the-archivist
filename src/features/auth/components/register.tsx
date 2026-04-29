import React, {useState} from 'react';
import {useAuth} from '@/contexts/auth-context';
import {zodResolver} from '@hookform/resolvers/zod';
import {useRouter} from 'expo-router';
import {Controller, useForm} from 'react-hook-form';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {RegisterFormData, registerSchema} from '../models';
import {AuthHeader} from './auth-header';
import {AuthInput} from './auth-input';
import {SocialLogin} from './social-login';

export const Register = () => {
  const router = useRouter();
  const {signUp} = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true);
    try {
      const {data: authData, error} = await signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.fullName,
          },
        },
      });

      if (error) throw error;

      if (authData.session) {
        router.replace('/');
      } else {
        router.push({
          pathname: '/(auth)/verify-email',
          params: {email: data.email},
        });
      }
    } catch (error: any) {
      console.log(error);
      Alert.alert(
        'Registration Failed',
        error.message || 'An unexpected error occurred',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View className="w-full max-w-md self-center px-6 py-12">
              <View className="mb-10">
                <Text className="mb-2 font-playfair text-4xl font-bold uppercase tracking-tighter text-brand-primary">
                  CREATE ACCOUNT
                </Text>
                <Text className="text-[10px] uppercase tracking-[0.2em] text-brand-tertiary">
                  Join our curated digital gallery
                </Text>
              </View>

              <SocialLogin />

              <View className="relative mb-10 flex-row items-center">
                <View className="h-[1px] flex-1 bg-border" />
                <Text className="mx-4 text-[10px] uppercase tracking-[0.3em] text-brand-tertiary">
                  Or use email
                </Text>
                <View className="h-[1px] flex-1 bg-border" />
              </View>

              <View className="space-y-6">
                <Controller
                  control={control}
                  name="fullName"
                  render={({field: {onChange, onBlur, value}}) => (
                    <AuthInput
                      label="Full Name"
                      placeholder="ALEXANDER VOGUE"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      error={errors.fullName?.message}
                      autoCapitalize="words"
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="email"
                  render={({field: {onChange, onBlur, value}}) => (
                    <AuthInput
                      label="Email Address"
                      placeholder="ARCHIVIST@STUDIO.COM"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      error={errors.email?.message}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="password"
                  render={({field: {onChange, onBlur, value}}) => (
                    <AuthInput
                      label="Password"
                      placeholder="••••••••••••"
                      showPasswordToggle
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      error={errors.password?.message}
                    />
                  )}
                />
              </View>

              <View className="mt-8 flex-row gap-3">
                <View className="mt-1 h-4 w-4 border border-border" />
                <Text className="flex-1 text-[11px] uppercase leading-relaxed tracking-wider text-brand-tertiary">
                  By signing up, you agree to our{' '}
                  <Text className="text-brand-primary underline">
                    Terms of Service
                  </Text>{' '}
                  and{' '}
                  <Text className="text-brand-primary underline">
                    Privacy Policy
                  </Text>
                  .
                </Text>
              </View>

              <TouchableOpacity
                className="mt-10 w-full items-center bg-brand-secondary py-5"
                onPress={handleSubmit(onSubmit)}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text className="text-[12px] font-bold uppercase tracking-[0.2em] text-white">
                    Sign Up
                  </Text>
                )}
              </TouchableOpacity>

              <View className="mt-10 items-center border-t border-border pt-6">
                <TouchableOpacity
                  onPress={() => router.replace('/(auth)/login')}
                >
                  <Text className="text-[11px] uppercase tracking-widest text-brand-tertiary">
                    Already have an account?{' '}
                    <Text className="font-bold text-brand-primary">Log In</Text>
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
