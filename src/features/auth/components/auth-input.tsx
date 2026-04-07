import { Colors } from "@/constants/theme";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface AuthInputProps extends TextInputProps {
  label: string;
}

export const AuthInput = ({ label, ...props }: AuthInputProps) => {
  return (
    <View className="relative mt-8">
      <View className="absolute -top-2 left-3 bg-brand-neutral px-1 z-10">
        <Text className="text-[10px] uppercase tracking-widest text-brand-tertiary">
          {label}
        </Text>
      </View>
      <TextInput
        className="w-full px-4 py-4 border border-border text-brand-primary"
        placeholderTextColor={Colors.brand.tertiary}
        {...props}
      />
    </View>
  );
};
