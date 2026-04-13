import { images } from "@/assets/images";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const HERO_HEIGHT = SCREEN_WIDTH < 375 ? 380 : 442;

const STATS = [
  { value: "12k+", label: "Active Curators" },
  { value: "50k+", label: "Archived Objects" },
  { value: "145", label: "Global Cities" },
  { value: "24/7", label: "Expert Support" },
];

export const GuestProfile = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-neutral-100">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View className="relative" style={{ height: HERO_HEIGHT }}>
          <Image
            source={images.onboardingBg}
            className="absolute inset-0"
            style={{ width: "100%", height: "100%" }}
            contentFit="cover"
          />
          <View className="absolute inset-0 bg-black/10" />
          <View className="absolute inset-0 justify-end">
            <View className="p-8">
              <Text
                className="font-playfair text-white italic"
                style={{
                  fontSize: 40,
                  letterSpacing: -2,
                  lineHeight: 44,
                }}
              >
                Join the {"\n"}Modern Archive
              </Text>
            </View>
          </View>
        </View>

        {/* Two-Column Membership Invitation */}
        <View
          className={`flex-${SCREEN_WIDTH >= 768 ? "row" : "col"} border-b border-neutral-300`}
        >
          {/* Left Panel */}
          <View
            className={`${SCREEN_WIDTH >= 768 ? "w-1/2" : "w-full"} p-8 justify-center ${SCREEN_WIDTH >= 768 ? "border-r border-neutral-300" : ""}`}
          >
            <View className="max-w-[400px]">
              <Text className="text-[10px] font-bold tracking-[4px] text-secondary-500 mb-4">
                MEMBERSHIP INVITATION
              </Text>
              <Text className="font-playfair text-primary-900 text-[28px] tracking-[-1px] leading-9 mb-8">
                A dedicated space for the discerning collector.
              </Text>
              <Text className="text-base text-tertiary-500 leading-7 mb-4">
                Save your favorite objects, track your listings, and connect
                with other archivists across the globe.
              </Text>
              <Text className="text-base text-tertiary-500 leading-7">
                As a member, you gain access to our curated provenance reports
                and early access to archival releases.
              </Text>
            </View>
          </View>

          {/* Right Panel */}
          <View
            className={`${SCREEN_WIDTH >= 768 ? "w-1/2" : "w-full"} p-8 bg-white/50 items-center justify-center`}
          >
            <View className="w-full max-w-[320px] gap-4">
              <TouchableOpacity
                className="bg-secondary-500 py-5 px-8 items-center"
                onPress={() => router.push("/(auth)/register")}
              >
                <Text className="text-white text-[11px] font-bold tracking-[4px]">
                  CREATE ACCOUNT
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="border border-primary-900 bg-transparent py-5 px-8 items-center"
                onPress={() => router.push("/(auth)/login")}
              >
                <Text className="text-primary-900 text-[11px] font-bold tracking-[4px]">
                  LOGIN
                </Text>
              </TouchableOpacity>

              <Text className="text-[9px] font-medium tracking-[3px] text-tertiary-500 text-center mt-6">
                BY CONTINUING, YOU AGREE TO OUR TERMS OF SERVICE.
              </Text>
            </View>
          </View>
        </View>

        {/* Community Stats */}
        <View className="flex-row flex-wrap border-b border-neutral-300">
          {STATS.map((stat, index) => {
            const isLastInRow =
              (index + 1) % 2 === 0 || index === STATS.length - 1;
            const isLastRow = index >= 2;

            return (
              <View
                key={stat.label}
                className={`w-1/2 p-8 items-center justify-center ${!isLastInRow ? "border-r border-neutral-300" : ""} ${!isLastRow ? "border-b border-neutral-300" : ""}`}
              >
                <Text className="font-playfair text-primary-900 text-2xl">
                  {stat.value}
                </Text>
                <Text className="text-[9px] font-bold tracking-[3.2px] text-tertiary-500 mt-2">
                  {stat.label}
                </Text>
              </View>
            );
          })}
        </View>

        {/* Pull Quote Section */}
        <View className="bg-white p-16 items-center justify-center">
          <View className="max-w-[500px] border-l-2 border-secondary-500 pl-8">
            <Text className="font-playfair text-primary-900 text-2xl italic leading-9">
              &quot;Objects are not just things; they are the physical vessels
              of our history, waiting to be rediscovered and
              recontextualized.&quot;
            </Text>
            <Text className="text-[10px] font-bold tracking-[4px] text-tertiary-500 mt-6">
              — THE ARCHIVIST MANIFESTO
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
