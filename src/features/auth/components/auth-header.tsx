import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface AuthHeaderProps {
  showBack?: boolean;
  title?: string;
  onBack?: () => void;
}

export const AuthHeader = ({
  showBack = false,
  title = "THE ARCHIVIST",
  onBack,
}: AuthHeaderProps) => {
  const router = useRouter();

  return (
    <View className="w-full px-6 py-4 border-b border-border flex-row justify-between items-center bg-brand-neutral">
      {showBack && (
        <TouchableOpacity onPress={onBack || (() => router.back())}>
          <Ionicons name="arrow-back" size={24} color={Colors.brand.primary} />
        </TouchableOpacity>
      )}
      <Text className="text-3xl font-playfair tracking-tighter uppercase font-bold text-brand-primary">
        {title}
      </Text>
    </View>
  );
};
