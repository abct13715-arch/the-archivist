import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthHeader } from "./auth-header";
import { AuthInput } from "./auth-input";
import { SocialLogin } from "./social-login";

export const Register = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-brand-neutral">
      <View className="flex-1">
        <AuthHeader
          showBack
          onBack={() => router.back()}
        />
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 24}
        >
          <ScrollView
            className="flex-1"
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View className="w-full max-w-md self-center px-6 py-12">
              <View className="mb-10">
                <Text className="font-playfair text-4xl font-bold tracking-tighter uppercase mb-2 text-brand-primary">
                  CREATE ACCOUNT
                </Text>
                <Text className="text-[10px] uppercase tracking-[0.2em] text-brand-tertiary">
                  Join our curated digital gallery
                </Text>
              </View>

              <SocialLogin />

              <View className="relative flex-row items-center mb-10">
                <View className="flex-1 h-[1px] bg-border" />
                <Text className="mx-4 text-[10px] uppercase tracking-[0.3em] text-brand-tertiary">
                  Or use email
                </Text>
                <View className="flex-1 h-[1px] bg-border" />
              </View>

              <View className="space-y-6">
                <AuthInput label="Full Name" placeholder="ALEXANDER VOGUE" />
                <AuthInput
                  label="Email Address"
                  placeholder="ARCHIVIST@STUDIO.COM"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <AuthInput
                  label="Password"
                  placeholder="••••••••••••"
                  showPasswordToggle
                />
              </View>

              <View className="mt-8 flex-row gap-3">
                <View className="w-4 h-4 border border-border mt-1" />
                <Text className="flex-1 text-[11px] text-brand-tertiary uppercase tracking-wider leading-relaxed">
                  By signing up, you agree to our{" "}
                  <Text className="text-brand-primary underline">
                    Terms of Service
                  </Text>{" "}
                  and{" "}
                  <Text className="text-brand-primary underline">
                    Privacy Policy
                  </Text>
                  .
                </Text>
              </View>

              <TouchableOpacity
                className="w-full py-5 bg-brand-secondary mt-10 items-center"
                onPress={() => {
                  router.dismissAll();
                  router.push("/(tabs)");
                }}
              >
                <Text className="text-white text-[12px] uppercase tracking-[0.2em] font-bold">
                  Sign Up
                </Text>
              </TouchableOpacity>

              <View className="mt-10 pt-6 border-t border-border items-center">
                <TouchableOpacity onPress={() => router.replace("/(auth)/login")}>
                  <Text className="text-[11px] uppercase tracking-widest text-brand-tertiary">
                    Already have an account?{" "}
                    <Text className="text-brand-primary font-bold">Log In</Text>
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
