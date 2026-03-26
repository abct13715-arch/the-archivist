import { images } from "@/assets";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const ARCHIVIST_LINKS = [
  {
    label: "MY LISTINGS",
    href: "/profile",
    icon: "list" as const,
  },
  {
    label: "CREATE LISTING",
    href: "/listing/create",
    icon: "add" as const,
  },
  {
    label: "BECOME AN ARCHIVIST",
    href: "/become-archivist",
    icon: "shield-checkmark" as const,
  },
];

const CATEGORIES = [
  { label: "ART", href: "/browse?category=art" },
  { label: "COLLECTIBLES", href: "/browse?category=collectibles" },
  { label: "DECOR", href: "/browse?category=decor" },
  { label: "FASHION", href: "/browse?category=fashion" },
  { label: "JEWELRY", href: "/browse?category=jewelry" },
  { label: "PHOTOGRAPHY", href: "/browse?category=photography" },
  { label: "PRINTS", href: "/browse?category=prints" },
  { label: "SCULPTURE", href: "/browse?category=sculpture" },
];

const user = {
  name: "Julian Vane",
  role: "Curator",
  avatar: images.profileFace,
};

export const Drawer = () => {
  const handleNav = (href: string) => {
    router.push(href as any);
  };

  return (
    <View className="flex-1 bg-neutral-100">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View className="w-full px-4 pt-16 pb-4 border-b border-tertiary-100 flex-row justify-between items-center">
          <Text className="text-2xl font-playfair text-primary-900">
            THE ARCHIVIST
          </Text>

          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="close" size={30} color={Colors.light.text} />
          </TouchableOpacity>
        </View>

        <View className="mt-6">
          {ARCHIVIST_LINKS.map((link, index) => (
            <TouchableOpacity
              key={link.label}
              onPress={() => handleNav(link.href)}
              className="flex-row items-center justify-between px-6 py-5 border-b border-tertiary-100"
            >
              <View className="flex-row items-center gap-5">
                <View className="bg-brand-secondary w-10 h-10 items-center justify-center">
                  <Ionicons name={link.icon} size={20} color="#FFFFFF" />
                </View>
                <Text className="text-sm tracking-label-lg text-primary-900 font-bold">
                  {link.label}
                </Text>
              </View>
              <Ionicons
                name="arrow-forward"
                size={18}
                color={Colors.palette.primary300}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View className="px-6 mt-8 pb-6">
          <View className="flex-row items-center gap-3 mb-6">
            <Text className="text-xs tracking-label-lg text-tertiary-500 font-bold">
              CATEGORIES
            </Text>
            <View className="h-px flex-1 bg-tertiary-100" />
          </View>

          <View className="flex-row flex-wrap gap-y-5">
            {CATEGORIES.map((cat) => (
              <TouchableOpacity
                key={cat.label}
                onPress={() => handleNav(cat.href)}
                className="w-1/2"
              >
                <Text className="text-xs tracking-label-lg text-primary-900">
                  {cat.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* footer */}
      <View className="border-t border-tertiary-100 px-6 py-4 mb-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <Image
              source={user.avatar}
              style={{ width: 64, height: 64 }}
              contentFit="cover"
            />
            <View className="gap-1">
              <Text className="font-playfair text-xl text-primary-900">
                {user.name}
              </Text>
              <View className="flex-row items-center gap-2">
                <Text className="text-xs tracking-label-lg text-brand-secondary font-bold">
                  {user.role.toUpperCase()}
                </Text>
              </View>
            </View>
          </View>

          <View className="flex-row gap-3">
            <TouchableOpacity
              onPress={() => handleNav("/settings")}
              className="border border-tertiary-100 w-12 h-12 items-center justify-center"
            >
              <Ionicons
                name="settings-outline"
                size={22}
                color={Colors.light.text}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log("logout")}
              className="border border-tertiary-100 w-12 h-12 items-center justify-center"
            >
              <Ionicons
                name="log-out-outline"
                size={22}
                color={Colors.light.text}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
