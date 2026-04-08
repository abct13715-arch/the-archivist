import { images } from "@/assets/images";
import { Colors } from "@/constants/theme";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.brand.neutral }}
      className="flex-1"
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={{ height: HERO_HEIGHT }}>
          <Image
            source={images.onboardingBg}
            style={StyleSheet.absoluteFill}
            contentFit="cover"
          />
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: "rgba(0,0,0,0.1)" },
            ]}
          />
          <View style={[StyleSheet.absoluteFill, { justifyContent: "flex-end" }]}>
            <View className="p-8">
              <Text
                style={{
                  fontFamily: "PlayfairDisplay_700Bold",
                  fontSize: 40,
                  fontStyle: "italic",
                  color: "#FFFFFF",
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
          style={{
            flexDirection: SCREEN_WIDTH >= 768 ? "row" : "column",
            borderBottomWidth: 1,
            borderBottomColor: Colors.light.border,
          }}
        >
          {/* Left Panel */}
          <View
            style={{
              width: SCREEN_WIDTH >= 768 ? "50%" : "100%",
              padding: 32,
              borderRightWidth: SCREEN_WIDTH >= 768 ? 1 : 0,
              borderRightColor: Colors.light.border,
              justifyContent: "center",
            }}
          >
            <View style={{ maxWidth: 400 }}>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "700",
                  letterSpacing: 4,
                  color: Colors.brand.secondary,
                  marginBottom: 16,
                }}
              >
                MEMBERSHIP INVITATION
              </Text>
              <Text
                style={{
                  fontFamily: "PlayfairDisplay_700Bold",
                  fontSize: 28,
                  color: Colors.brand.primary,
                  letterSpacing: -1,
                  lineHeight: 36,
                  marginBottom: 32,
                }}
              >
                A dedicated space for the discerning collector.
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: Colors.brand.tertiary,
                  lineHeight: 28,
                  marginBottom: 16,
                }}
              >
                Save your favorite objects, track your listings, and connect
                with other archivists across the globe.
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: Colors.brand.tertiary,
                  lineHeight: 28,
                }}
              >
                As a member, you gain access to our curated provenance reports
                and early access to archival releases.
              </Text>
            </View>
          </View>

          {/* Right Panel */}
          <View
            style={{
              width: SCREEN_WIDTH >= 768 ? "50%" : "100%",
              padding: 32,
              backgroundColor: "rgba(255,255,255,0.5)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ width: "100%", maxWidth: 320, gap: 16 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.brand.secondary,
                  paddingVertical: 20,
                  paddingHorizontal: 32,
                  alignItems: "center",
                }}
                onPress={() => router.push("/(auth)/register")}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 11,
                    fontWeight: "700",
                    letterSpacing: 4,
                  }}
                >
                  CREATE ACCOUNT
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: Colors.brand.primary,
                  backgroundColor: "transparent",
                  paddingVertical: 20,
                  paddingHorizontal: 32,
                  alignItems: "center",
                }}
                onPress={() => router.push("/(auth)/login")}
              >
                <Text
                  style={{
                    color: Colors.brand.primary,
                    fontSize: 11,
                    fontWeight: "700",
                    letterSpacing: 4,
                  }}
                >
                  LOGIN
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  fontSize: 9,
                  fontWeight: "500",
                  letterSpacing: 3,
                  color: Colors.brand.tertiary,
                  textAlign: "center",
                  marginTop: 24,
                }}
              >
                BY CONTINUING, YOU AGREE TO OUR TERMS OF SERVICE.
              </Text>
            </View>
          </View>
        </View>

        {/* Community Stats */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            borderBottomWidth: 1,
            borderBottomColor: Colors.light.border,
          }}
        >
          {STATS.map((stat, index) => {
            const isLastInRow =
              (index + 1) % 2 === 0 || index === STATS.length - 1;
            const isLastRow = index >= 2;

            return (
              <View
                key={stat.label}
                style={{
                  width: "50%",
                  padding: 32,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRightWidth: isLastInRow ? 0 : 1,
                  borderRightColor: Colors.light.border,
                  borderBottomWidth: isLastRow ? 0 : 1,
                  borderBottomColor: Colors.light.border,
                }}
              >
                <Text
                  style={{
                    fontFamily: "PlayfairDisplay_700Bold",
                    fontSize: 24,
                    color: Colors.brand.primary,
                  }}
                >
                  {stat.value}
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    fontWeight: "700",
                    letterSpacing: 3.2,
                    color: Colors.brand.tertiary,
                    marginTop: 8,
                  }}
                >
                  {stat.label}
                </Text>
              </View>
            );
          })}
        </View>

        {/* Pull Quote Section */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            padding: 64,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              maxWidth: 500,
              alignSelf: "center",
              borderLeftWidth: 2,
              borderLeftColor: Colors.brand.secondary,
              paddingLeft: 32,
            }}
          >
            <Text
              style={{
                fontFamily: "PlayfairDisplay_700Bold",
                fontSize: 24,
                fontStyle: "italic",
                color: Colors.brand.primary,
                lineHeight: 36,
              }}
            >
              &quot;Objects are not just things; they are the physical vessels
              of our history, waiting to be rediscovered and recontextualized.&quot;
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: "700",
                letterSpacing: 4,
                color: Colors.brand.tertiary,
                marginTop: 24,
              }}
            >
              — THE ARCHIVIST MANIFESTO
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
