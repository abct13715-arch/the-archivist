import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

interface AuthInputProps extends TextInputProps {
  label: string;
  showPasswordToggle?: boolean;
}

export const AuthInput = ({
  label,
  showPasswordToggle,
  secureTextEntry,
  ...props
}: AuthInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isSecure = showPasswordToggle ? !isPasswordVisible : secureTextEntry;

  return (
    <View className="relative mt-8">
      <View className="absolute -top-2 left-3 bg-brand-neutral px-1 z-10">
        <Text className="text-[10px] uppercase tracking-widest text-brand-tertiary">
          {label}
        </Text>
      </View>
      <View className="relative">
        <TextInput
          className="w-full px-4 py-4 border border-border text-brand-primary pr-12"
          placeholderTextColor={Colors.brand.tertiary}
          secureTextEntry={isSecure}
          {...props}
        />
        {showPasswordToggle && (
          <TouchableOpacity
            className="absolute right-4 top-4"
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
              size={20}
              color={Colors.brand.tertiary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
