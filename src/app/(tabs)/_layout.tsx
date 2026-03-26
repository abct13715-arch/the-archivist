import { Navbar } from "@/components";
import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { router, Tabs } from "expo-router";
import { useRef } from "react";
import { PanResponder, View } from "react-native";

export default function TabLayout() {
  const swipeResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, g) =>
        Math.abs(g.dx) > Math.abs(g.dy) && g.dx < -20,

      onPanResponderRelease: (_, g) => {
        if (g.dx < -60) {
          router.push("/drawer");
        }
      },
    }),
  ).current;
  return (
    <View className="flex-1" {...swipeResponder.panHandlers}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.light.text,
          tabBarInactiveTintColor: Colors.light.textSecondary,
          headerShown: true,
          tabBarButton: HapticTab,
          header: ({ route }) => <Navbar routeName={route?.name} />,
          tabBarStyle: {
            backgroundColor: Colors.brand.neutral,
            borderTopColor: Colors.light.border,
            borderTopWidth: 0.5,
            height: 70,
            paddingBottom: 12,
            paddingTop: 10,
          },
          tabBarLabelStyle: {
            letterSpacing: 2,
            fontSize: 10,
            fontWeight: "600",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="browse"
          options={{
            title: "Browse",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="square.grid.2x2.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="person.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="cart.fill" color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
