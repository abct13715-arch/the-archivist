import { Navbar } from "@/components";
import { Colors } from "@/constants/theme";
import {
  PlayfairDisplay_700Bold,
  useFonts,
} from "@expo-google-fonts/playfair-display";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import "../global.css";

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

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <ThemeProvider value={ArchivistTheme}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(auth)/onboarding" />
            <Stack.Screen name="(auth)/login" />
            <Stack.Screen name="(auth)/register" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen
              name="collection/index"
              options={{
                headerShown: true,
                header: () => <Navbar routeName="collection" />,
              }}
            />
            <Stack.Screen
              name="collection/[id]"
              options={{
                headerShown: true,
                header: () => <Navbar routeName="collection/detail" />,
              }}
            />
            <Stack.Screen name="drawer/[path]" />
            <Stack.Screen
              name="listing/[id]"
              options={{
                headerShown: true,
                header: () => <Navbar routeName="listing-detail" />,
              }}
            />
            <Stack.Screen
              name="listing/create"
              options={{
                headerShown: true,
                header: () => <Navbar routeName="Create listing" />,
              }}
            />
            <Stack.Screen
              name="curator/[id]"
              options={{
                headerShown: true,
                header: () => <Navbar routeName="curator" />,
              }}
            />
          </Stack>
          <StatusBar style="dark" />
        </ThemeProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
