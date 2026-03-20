import { Tabs } from "expo-router";
import React, { useEffect } from "react";

import { Navbar } from "@/components";
import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  PlayfairDisplay_700Bold,
  useFonts,
} from "@expo-google-fonts/playfair-display";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const [loaded] = useFonts({ PlayfairDisplay_700Bold });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  const colorScheme = useColorScheme();

  if (!loaded) return null;
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.text,
        tabBarInactiveTintColor: Colors.light.textSecondary,
        headerShown: true,
        tabBarButton: HapticTab,
        header: ({ route }) => <Navbar routeName={route.name} />,
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
  );
}
