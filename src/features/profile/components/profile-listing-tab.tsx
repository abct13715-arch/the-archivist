import { Colors } from "@/constants/theme";
import { Image } from "expo-image";
import { useState } from "react";
import { ImageSourcePropType, Text, View } from "react-native";
import { ProfileFilterBar } from "./profile-filter-bar";

export type Listing = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  category: string;
  price: string;
  badge?: "AVAILABLE" | "RESERVED";
};

type ProfileListingsTabProps = {
  listings: Listing[];
  quote: string;
  quoteAuthor: string;
};

const filters = ["ALL ITEMS", "FURNITURE", "LIGHTING", "RARE BOOKS"];

export const ProfileListingsTab = ({
  listings,
  quote,
  quoteAuthor,
}: ProfileListingsTabProps) => {
  const [selectedFilter, setSelectedFilter] = useState("ALL ITEMS");

  const filtered =
    selectedFilter === "ALL ITEMS"
      ? listings
      : listings.filter((l) =>
          l.category.toLowerCase().includes(selectedFilter.toLowerCase()),
        );

  return (
    <View>
      <ProfileFilterBar
        filters={filters}
        selected={selectedFilter}
        onSelect={setSelectedFilter}
      />

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
          "{quote}"
        </Text>
        <Text
          style={{ color: Colors.light.textSecondary, letterSpacing: 1 }}
          className="text-xs"
        >
          {quoteAuthor}
        </Text>
      </View>

      {filtered.map((item) => (
        <View
          key={item.id}
          style={{ borderTopColor: Colors.light.border }}
          className="border-t mx-4"
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
                  style={{ color: Colors.light.surface, letterSpacing: 1 }}
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
                style={{ color: Colors.light.textSecondary, letterSpacing: 1 }}
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
  );
};
