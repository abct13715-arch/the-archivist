import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { FilterBar } from "./filter-bar";
import { ItemCard } from "./item-card";

const data = [
  {
    image: require("@/assets/images/chair.png"),
    category: "BAUHAUS / FURNITURE",
    title: "Series-A Chair",
  },
  {
    image: require("@/assets/images/stone-monolith.png"),
    category: "STUDIO / SCULPTURE",
    title: "Stone Monolith",
  },
  {
    image: require("@/assets/images/bowl.png"),
    category: "ARTISAN / CERAMICS",
    title: "Fired Clay Bowl",
  },
  {
    image: require("@/assets/images/clock.png"),
    category: "OBJECT / VINTAGE",
    title: "Stationary Clock",
  },
];

export const HomeMiddle = () => {
  return (
    <View>
      <FilterBar />
      <View className="px-6 py-8">
        <Text
          style={{ color: Colors.brand.secondary, letterSpacing: 3 }}
          className="text-xs mb-2"
        >
          VOLUME IV / 2024
        </Text>
        <Text
          style={{
            color: Colors.light.text,
            fontFamily: "PlayfairDisplay_700Bold",
            lineHeight: 52,
          }}
          className="text-5xl mb-6"
        >
          New Acquisitions
        </Text>
        <View
          style={{ borderTopColor: Colors.light.border }}
          className="border-t pt-4"
        >
          <TouchableOpacity className="flex-row items-center gap-2">
            <Text
              style={{ color: Colors.light.text, letterSpacing: 2 }}
              className="text-xs"
            >
              VIEW FULL ARCHIVE
            </Text>
            <Ionicons
              name="arrow-forward"
              size={14}
              color={Colors.light.text}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row flex-wrap gap-4 px-4 py-6">
        {data.map((item, index) => (
          <ItemCard
            key={index}
            image={item.image}
            category={item.category}
            title={item.title}
            onPress={() => console.log(item.title)}
          />
        ))}
      </View>
    </View>
  );
};
