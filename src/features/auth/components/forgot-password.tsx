import React, {useState} from 'react';
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

import {useAuth} from '@/contexts/auth-context';
import {ForgotPasswordFormData, forgotPasswordSchema} from '../models';
import {AuthHeader} from './auth-header';
import {AuthInput} from './auth-input';

export const ForgotPassword = () => {
  const router = useRouter();
  const {resetPassword} = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsSubmitting(true);
    try {
      const {error} = await resetPassword(data.email);

      if (error) throw error;

      router.replace('/(auth)/forgot-password-success');
    } catch (error: any) {
      Alert.alert(
        'Request Failed',
        error.message || 'Please check your email and try again.',
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
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View className="w-full max-w-md self-center px-6 py-12">
              <View className="mb-12">
                <Text className="mb-2 font-playfair text-4xl font-bold uppercase tracking-tighter text-brand-primary">
                  FORGOT PASSWORD
                </Text>
                <Text className="text-[10px] uppercase tracking-[0.2em] text-brand-tertiary">
                  Enter your email to receive a reset link
                </Text>
              </View>

              <View className="space-y-8">
                <Controller
                  control={control}
                  name="email"
                  render={({field: {onChange, onBlur, value}}) => (
                    <AuthInput
                      label="Email Address"
                      placeholder="email@example.com"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      error={errors.email?.message}
                    />
                  )}
                />

                <TouchableOpacity
                  className="mt-8 w-full items-center bg-brand-secondary py-5"
                  onPress={handleSubmit(onSubmit)}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <ActivityIndicator color="white" />
                  ) : (
                    <Text className="text-[12px] font-bold uppercase tracking-[0.25em] text-white">
                      Send Reset Link
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};
