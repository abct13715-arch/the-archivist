import React, {useState} from 'react';
import {Colors} from '@/constants/theme';
import {Ionicons} from '@expo/vector-icons';
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const SocialLogin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGoogleLogin = async () => {
    setIsSubmitting(true);
    try {
    } catch (error: any) {
      Alert.alert(
        'Login Error',
        error.message || 'Failed to sign in with Google',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="mb-10">
      <TouchableOpacity
        className="h-14 w-full flex-row items-center justify-center gap-3 border border-brand-primary"
        onPress={handleGoogleLogin}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <ActivityIndicator color={Colors.brand.primary} />
        ) : (
          <>
            <Ionicons
              name="logo-google"
              size={20}
              color={Colors.brand.primary}
            />
            <Text className="text-[11px] font-bold uppercase tracking-widest text-brand-primary">
              Continue with Google
            </Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};
