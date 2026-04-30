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

import {ResetPasswordFormData, resetPasswordSchema} from '../models';
import {AuthHeader} from './auth-header';
import {AuthInput} from './auth-input';

export const ResetPassword = () => {
  const router = useRouter();
  const {updatePassword} = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    setIsSubmitting(true);
    try {
      const {error} = await updatePassword(data.password);

      if (error) throw error;

      Alert.alert('Success', 'Your password has been reset successfully.', [
        {text: 'OK', onPress: () => router.replace('/(auth)/login')},
      ]);
    } catch (error: any) {
      Alert.alert(
        'Reset Failed',
        error.message || 'An unexpected error occurred. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-brand-neutral">
      <View className="flex-1">
        <AuthHeader />
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
                  RESET PASSWORD
                </Text>
                <Text className="text-[10px] uppercase tracking-[0.2em] text-brand-tertiary">
                  Enter your new password below
                </Text>
              </View>

              <View className="space-y-8">
                <Controller
                  control={control}
                  name="password"
                  render={({field: {onChange, onBlur, value}}) => (
                    <AuthInput
                      label="New Password"
                      placeholder="••••••••"
                      showPasswordToggle
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      error={errors.password?.message}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="confirmPassword"
                  render={({field: {onChange, onBlur, value}}) => (
                    <AuthInput
                      label="Confirm New Password"
                      placeholder="••••••••"
                      showPasswordToggle
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      error={errors.confirmPassword?.message}
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
                      Update Password
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
