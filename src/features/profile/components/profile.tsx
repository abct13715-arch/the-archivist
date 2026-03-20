import { images } from "@/assets/images";
import { Colors } from "@/constants/theme";
import { Image } from "expo-image";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { filters, listings, reviews, tabs } from "../data";
import { ProfileCard } from "./profile-card";

export const Profile = () => {
  const [activeTab, setActiveTab] = useState("LISTINGS");
  const [selectedFilter, setSelectedFilter] = useState("ALL ITEMS");

  const filtered =
    selectedFilter === "ALL ITEMS"
      ? listings
      : listings.filter((l) =>
          l.category.toLowerCase().includes(selectedFilter.toLowerCase()),
        );

  return (
    <ScrollView style={{ backgroundColor: Colors.light.surface }}>
      <ProfileCard
        backgroundImage={images.profileBackground}
        profileImage={images.profileFace}
        name="Julian Vane"
        location="BERLIN, DE"
        memberSince="2019"
        responseRate="98%"
        badge="MASTER CURATOR"
        onShare={() => console.log("shared")}
      />

      <View>
        <View
          style={{ borderBottomColor: Colors.light.border }}
          className="flex-row border-b"
        >
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className="flex-1 items-center py-3"
              style={{
                borderBottomWidth: activeTab === tab ? 2 : 0,
                borderBottomColor: Colors.light.text,
              }}
            >
              <Text
                style={{
                  color:
                    activeTab === tab
                      ? Colors.light.text
                      : Colors.light.textSecondary,
                  letterSpacing: 2,
                }}
                className="text-xs font-bold"
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {activeTab === "LISTINGS" && (
          <View>
            <View
              style={{ borderBottomColor: Colors.light.border }}
              className="border-b px-4 pb-3 gap-2"
            >
              <Text
                style={{ color: Colors.light.textSecondary, letterSpacing: 2 }}
                className="text-xs mt-3"
              >
                FILTERS
              </Text>
              {filters.map((f) => (
                <TouchableOpacity
                  key={f}
                  onPress={() => setSelectedFilter(f)}
                  className="flex-row items-center gap-2 py-1"
                >
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor:
                        selectedFilter === f
                          ? Colors.brand.secondary
                          : Colors.light.border,
                    }}
                  />
                  <Text
                    style={{
                      color:
                        selectedFilter === f
                          ? Colors.light.text
                          : Colors.light.textSecondary,
                      letterSpacing: 1,
                    }}
                    className="text-xs"
                  >
                    {f}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View
              style={{ backgroundColor: Colors.palette.neutral100 }}
              className="mx-4 my-4 p-4"
            >
              <Text
                style={{
                  color: Colors.light.text,
                  fontFamily: "PlayfairDisplay_700Bold",
                  lineHeight: 24,
                }}
                className="text-base italic mb-1"
              >
                "Curating the forgotten and the permanent."
              </Text>
              <Text
                style={{ color: Colors.light.textSecondary, letterSpacing: 1 }}
                className="text-xs"
              >
                ARCHIVIST'S NOTE
              </Text>
            </View>

            {filtered.map((item) => (
              <View
                key={item.id}
                style={{
                  borderTopColor: Colors.light.border,
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.light.border,
                }}
                className="border-t mx-4 my-4"
              >
                <View style={{ position: "relative" }}>
                  <Image
                    source={item.image}
                    contentFit="cover"
                    style={{ width: "100%", aspectRatio: 4 / 3 }}
                  />
                  {item.badge && (
                    <View
                      style={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        backgroundColor:
                          item.badge === "AVAILABLE"
                            ? Colors.brand.secondary
                            : Colors.palette.primary500,
                      }}
                      className="px-2 py-1"
                    >
                      <Text
                        style={{
                          color: Colors.light.surface,
                          letterSpacing: 1,
                        }}
                        className="text-xs"
                      >
                        {item.badge}
                      </Text>
                    </View>
                  )}
                </View>
                <View className="py-3 gap-1">
                  <Text
                    style={{
                      color: Colors.light.text,
                      fontFamily: "PlayfairDisplay_700Bold",
                    }}
                    className="text-lg"
                  >
                    {item.title}
                  </Text>
                  <View className="flex-row justify-between items-center">
                    <Text
                      style={{
                        color: Colors.light.textSecondary,
                        letterSpacing: 1,
                      }}
                      className="text-xs"
                    >
                      {item.category}
                    </Text>
                    <Text
                      style={{
                        color: Colors.light.text,
                        fontFamily: "PlayfairDisplay_700Bold",
                      }}
                      className="text-base"
                    >
                      {item.price}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}

        {activeTab === "REVIEWS" && (
          <View className="px-4 gap-4 mt-4">
            {reviews.map((review) => (
              <View
                key={review.id}
                style={{ borderBottomColor: Colors.light.border }}
                className="border-b pb-4 gap-2"
              >
                <View className="flex-row justify-between items-center">
                  <Text
                    style={{
                      color: Colors.light.text,
                      fontFamily: "PlayfairDisplay_700Bold",
                    }}
                    className="text-base"
                  >
                    {review.name}
                  </Text>
                  <View className="flex-row gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Text
                        key={i}
                        style={{
                          color:
                            i < review.rating
                              ? Colors.brand.secondary
                              : Colors.light.border,
                        }}
                      >
                        ★
                      </Text>
                    ))}
                  </View>
                </View>
                <Text
                  style={{ color: Colors.light.textSecondary }}
                  className="text-sm leading-6"
                >
                  {review.text}
                </Text>
              </View>
            ))}
          </View>
        )}

        {activeTab === "ABOUT" && (
          <View
            style={{
              borderLeftColor: Colors.brand.secondary,
              borderLeftWidth: 2,
            }}
            className="mx-4 mt-4 pl-4 py-2"
          >
            <Text
              style={{ color: Colors.light.text }}
              className="text-base leading-7"
            >
              Julian has been curating rare objects from European estates since
              2019. Specialising in mid-century furniture, brutalist lighting,
              and archival printed matter.
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};
