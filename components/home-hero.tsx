import { Colors } from "@/constants/theme";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";

export const HomeHero = () => {
  return (
    <View>
      <View>
        <Image
          source={require("@/assets/images/home-hero.png")}
          style={{ width: "100%", height: 300 }}
        />
      </View>
      <View className="px-8 py-10">
        <View>
          <Text
            style={{
              color: Colors.brand.secondary,
              letterSpacing: 3,
              fontSize: 13,
              fontWeight: "600",
            }}
          >
            FEATURED COLLECTION
          </Text>
        </View>
        <View className="py-4">
          <Text
            style={{
              color: Colors.light.text,
              fontFamily: "PlayfairDisplay_700Bold",
            }}
            className="text-4xl font-bold"
          >
            THE{"\n"}
            BRUTALIST{"\n"}
            SERIES
          </Text>
        </View>
        <View
          style={{
            borderLeftColor: Colors.brand.secondary,
            borderLeftWidth: 2,
          }}
          className="pl-4 py-1"
        >
          <Text
            style={{ color: Colors.light.text, fontFamily: "your-sans-font" }}
            className="text-base leading-7"
          >
            A curated selection of objects that prioritize raw materials and
            unyielding geometry. Curated by the London Archive for the modern
            home.
          </Text>
        </View>
        <View className="pt-4">
          <TouchableOpacity
            onPress={() => console.log("pressed")}
            className="bg-black px-4 py-4 w-2/3"
          >
            <Text className="text-white text-base text-center">
              EXPLORE THE COLLECTION
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
