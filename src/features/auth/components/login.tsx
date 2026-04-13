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

export const Login = () => {
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
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View className="w-full max-w-md self-center px-6 py-12">
              <View className="mb-12">
                <Text className="font-playfair text-5xl font-bold tracking-tighter uppercase mb-2 text-brand-primary">
                  LOGIN
                </Text>
                <Text className="text-[10px] uppercase tracking-[0.2em] text-brand-tertiary">
                  Enter the modern archive
                </Text>
              </View>

              <SocialLogin />

              <View className="relative flex-row items-center mb-10">
                <View className="flex-1 h-[1px] bg-border" />
                <Text className="mx-4 text-[10px] uppercase tracking-[0.3em] text-brand-tertiary">
                  OR
                </Text>
                <View className="flex-1 h-[1px] bg-border" />
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
                  <TouchableOpacity className="absolute right-4 bottom-[-8]">
                    <Text className="text-[10px] uppercase tracking-widest text-brand-tertiary underline">
                      Forgot?
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  className="w-full py-5 bg-brand-secondary mt-8 items-center"
                  onPress={() => {
                    router.dismissAll();
                    router.push("/(tabs)");
                  }}
                >
                  <Text className="text-white text-[12px] uppercase tracking-[0.25em] font-bold">
                    Log In
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="mt-12 pt-8 border-t border-border items-center">
                <TouchableOpacity
                  onPress={() => router.replace("/(auth)/register")}
                >
                  <Text className="text-[11px] uppercase tracking-widest text-brand-tertiary">
                    Don&apos;t have an account?{" "}
                    <Text className="text-brand-primary font-bold">Sign Up</Text>
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
