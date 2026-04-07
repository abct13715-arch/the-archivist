import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const SocialLogin = () => {
  return (
    <View className="mb-10">
      <TouchableOpacity className="w-full h-14 border border-brand-primary flex-row items-center justify-center gap-3">
        <Ionicons name="logo-google" size={20} color={Colors.brand.primary} />
        <Text className="text-[11px] uppercase tracking-widest text-brand-primary font-bold">
          Continue with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};
