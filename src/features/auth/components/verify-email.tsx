import React, {useState} from 'react';
import {Colors} from '@/constants/theme';
import {useAuth} from '@/contexts/auth-context';
import {Ionicons} from '@expo/vector-icons';
import {useLocalSearchParams, useRouter} from 'expo-router';
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {AuthHeader} from './auth-header';

export const VerifyEmail = () => {
  const router = useRouter();
  const {email} = useLocalSearchParams<{email: string}>();
  const {resendVerificationEmail} = useAuth();
  const [isResending, setIsResending] = useState(false);

  const handleResend = async () => {
    if (!email) return;

    setIsResending(true);
    try {
      const {error} = await resendVerificationEmail(email);
      if (error) {
        Alert.alert('Error', error.message);
      } else {
        Alert.alert(
          'Success',
          'A new verification link has been sent to your email.',
        );
      }
    } catch {
      Alert.alert('Error', 'An unexpected error occurred.');
    } finally {
      setIsResending(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-brand-neutral">
      <View className="flex-1">
        <AuthHeader showBack onBack={() => router.back()} />

        <View className="flex-1 items-center justify-center px-6">
          <View className="mb-8 h-24 w-24 items-center justify-center rounded-full border border-brand-primary/20 bg-white/50">
            <Ionicons
              name="mail-outline"
              size={48}
              color={Colors.brand.primary}
            />
          </View>

          <Text className="mb-4 text-center font-playfair text-3xl font-bold uppercase tracking-tighter text-brand-primary">
            Verify Your Email
          </Text>

          <Text className="mb-2 text-center text-[12px] uppercase leading-relaxed tracking-[0.15em] text-brand-tertiary">
            We&apos;ve sent an activation link to:
          </Text>

          <Text className="mb-8 text-center font-bold text-brand-primary">
            {email || 'your email'}
          </Text>

          <Text className="mb-12 text-center text-[12px] uppercase leading-relaxed tracking-[0.15em] text-brand-tertiary">
            Please check your inbox and click the link{'\n'}to activate your
            account.
          </Text>

          <View className="w-full max-w-xs gap-4">
            <TouchableOpacity
              className="items-center bg-brand-primary py-5"
              onPress={() => router.replace('/(auth)/login')}
              disabled={isResending}
            >
              <Text className="text-[11px] font-bold uppercase tracking-[0.25em] text-white">
                Back to Login
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="items-center border border-brand-primary/20 bg-white/50 py-5"
              onPress={handleResend}
              disabled={isResending}
            >
              {isResending ? (
                <ActivityIndicator size="small" color={Colors.brand.primary} />
              ) : (
                <Text className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-primary">
                  Resend Link
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
