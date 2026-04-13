import { images } from "@/assets/images";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Onboarding = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-black">
      {/* Full-bleed Background Image with Dark Overlay */}
      <View style={StyleSheet.absoluteFill}>
        <Image
          source={images.onboardingBg}
          style={[StyleSheet.absoluteFill, { opacity: 0.4 }]}
          contentFit="cover"
          transition={500}
        />
        <LinearGradient
          colors={["rgba(0,0,0,0.6)", "transparent", "rgba(0,0,0,0.8)"]}
          style={StyleSheet.absoluteFill}
        />
      </View>

      <SafeAreaView className="flex-1">
        {/* Header Overlay */}
        <View className="flex-row justify-between items-center w-full px-8 py-6">
          <Text className="text-3xl font-playfair tracking-tighter uppercase text-white">
            THE ARCHIVIST
          </Text>
          <TouchableOpacity>
            <Ionicons name="bag-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Main Content Overlay */}
        <View className="flex-1 justify-end p-8 pb-12">
          <View className="max-w-xl space-y-10">
            {/* Branding & Introduction */}
            <View className="space-y-6">
              <Text className="text-[11px] uppercase tracking-[0.25em] text-white/70 font-bold my-8">
                Volume I : The Beginning
              </Text>
              <Text className="font-playfair text-6xl tracking-tighter text-white">
                Timeless{"\n"}Design.{"\n"}Curated.
              </Text>
              <View className="w-16 h-[2px] bg-brand-secondary mt-4" />
              <Text className="text-white/80 text-lg leading-relaxed max-w-md my-8">
                Discover a rare archive of iconic furniture and architectural
                masterpieces. We curate authentic design heritage for the
                discerning collector.
              </Text>
            </View>

            {/* Actions */}
            <View className="flex flex-col gap-4 max-w-sm">
              <TouchableOpacity
                className="bg-brand-secondary py-6 px-10 flex-row items-center justify-between group"
                onPress={() => router.push("/(auth)/register")}
              >
                <Text className="text-white text-[12px] uppercase tracking-[0.2em] font-bold">
                  Create Account
                </Text>
                <Ionicons name="arrow-forward" size={20} color="white" />
              </TouchableOpacity>

              <TouchableOpacity
                className="bg-transparent border border-white py-6 px-10 flex-row items-center justify-between group"
                onPress={() => router.push("/(auth)/login")}
              >
                <Text className="text-white text-[12px] uppercase tracking-[0.2em] font-bold">
                  Login
                </Text>
                <Ionicons name="log-in-outline" size={20} color="white" />
              </TouchableOpacity>

              <TouchableOpacity
                className="mt-2 items-center"
                onPress={() => {
                  router.dismissAll();
                  router.replace("/(tabs)");
                }}
              >
                <Text className="text-[11px] uppercase tracking-[0.2em] text-white/60">
                  Continue as Guest
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Meta Context */}
          <View className="pt-8 mt-12 border-t border-white/20 flex-row justify-between items-center">
            <View className="flex flex-col gap-1">
              <Text className="text-[9px] uppercase tracking-widest text-white/50">
                Next Auction
              </Text>
              <Text className="font-playfair italic text-sm text-white">
                Autumn Collection {"24'"}
              </Text>
            </View>
            <View className="flex-row gap-6">
              <TouchableOpacity>
                <Ionicons
                  name="share-outline"
                  size={20}
                  color="rgba(255,255,255,0.5)"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="information-circle-outline"
                  size={20}
                  color="rgba(255,255,255,0.5)"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
