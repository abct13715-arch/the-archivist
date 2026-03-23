import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

type NavbarProps = {
  routeName: string;
};

export const Navbar = ({ routeName }: NavbarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  if (isSearchOpen) {
    return (
      <View
        style={{
          backgroundColor: Colors.light.surface,
          borderBottomColor: Colors.light.border,
        }}
        className="w-full px-4 pt-20 pb-4 border-b flex-row items-center gap-3"
      >
        <TextInput
          autoFocus
          placeholder="Search..."
          placeholderTextColor={Colors.light.textSecondary}
          style={{ backgroundColor: Colors.palette.neutral100 }}
          className="flex-1 rounded-xl px-4 py-2 text-base"
        />
        <TouchableOpacity onPress={() => setIsSearchOpen(false)}>
          <Text className="text-base text-primary-900">Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: Colors.light.surface,
        borderBottomColor: Colors.light.border,
      }}
      className="w-full px-4 pt-16 pb-4 border-b flex-row justify-between items-center"
    >
      <View className="flex-row items-center gap-3">
        {["index", "browse", "profile", "cart"].includes(routeName) ? (
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={30} color={Colors.light.icon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons
              name="arrow-back-outline"
              size={30}
              color={Colors.light.icon}
            />
          </TouchableOpacity>
        )}
        <Text className="text-2xl font-playfair text-primary-900">
          THE ARCHIVIST
        </Text>
      </View>
      <TouchableOpacity onPress={() => setIsSearchOpen(true)}>
        <Ionicons name="search-outline" size={26} color={Colors.light.icon} />
      </TouchableOpacity>
    </View>
  );
};
