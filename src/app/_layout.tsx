import { Navbar } from "@/components";
import { Colors } from "@/constants/theme";
import {
  PlayfairDisplay_700Bold,
  useFonts,
} from "@expo-google-fonts/playfair-display";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";

export const unstable_settings = {
  anchor: "(tabs)",
};

const ArchivistTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.light.background,
    card: Colors.light.surface,
    text: Colors.light.text,
    border: Colors.light.border,
    primary: Colors.brand.secondary,
  },
};

export default function RootLayout() {
  const [loaded] = useFonts({ PlayfairDisplay_700Bold });
  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);
  if (!loaded) return null;
  return (
    <ThemeProvider value={ArchivistTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="collection/index"
          options={{
            headerShown: true,
            animation: "slide_from_bottom",
            header: () => <Navbar routeName="collection" />,
          }}
        />
        <Stack.Screen
          name="collection/[id]"
          options={{
            headerShown: true,
            animation: "slide_from_bottom",
            header: () => <Navbar routeName="collection/detail" />,
          }}
        />
        <Stack.Screen name="drawer/[path]" />
      </Stack>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
