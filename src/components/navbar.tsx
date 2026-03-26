import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

type NavbarProps = {
  routeName: string;
};

export const Navbar = ({ routeName }: NavbarProps) => {
  return (
    <View
      style={{
        backgroundColor: Colors.brand.neutral,
        borderBottomColor: Colors.light.border,
      }}
      className="w-full px-4 pt-16 pb-4 border-b flex-row justify-between items-center"
    >
      <Text className="text-2xl font-playfair text-primary-900">
        THE ARCHIVIST
      </Text>

      {["index", "browse", "profile", "cart"].includes(routeName) ? (
        <TouchableOpacity onPress={() => router.push("/drawer")}>
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
    </View>
  );
};
