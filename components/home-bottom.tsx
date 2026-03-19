import { Colors } from "@/constants/theme";
import { Text, TouchableOpacity, View } from "react-native";
import { Card } from "./card";

export const HomeBottom = () => {
  return (
    <View>
      <View
        className="px-6 py-10"
        style={{
          backgroundColor: Colors.brand.neutral,
          borderBottomColor: Colors.light.border,
        }}
      >
        <View>
          <Text
            style={{
              color: Colors.light.text,
              fontFamily: "PlayfairDisplay_700Bold",
            }}
            className="text-4xl font-bold py-2"
          >
            The Curators
          </Text>
          <Text className="text-lg py-2">
            We work with a global network of archivists, estate managers, and
            specialist collectors to bring the rarest objects to light.
          </Text>
          <View className="py-4">
            <TouchableOpacity
              onPress={() => console.log("pressed")}
              style={{
                borderColor: Colors.dark.border,
              }}
              className=" px-6 py-4 w-1/2 border"
            >
              <Text className="text-sm text-center">PARTNER WITH US</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Card
            image={require("@/assets/images/curator-1.png")}
            name="Anders Holm"
            rating={4.9}
            description="Specialist in 20th century Danish modernism and industrial lighting."
            onPress={() => console.log("pressed")}
          />
          <Card
            image={require("@/assets/images/curator-2.png")}
            name="Clara Saint-James"
            rating={5.0}
            description="Curating exceptional textiles and rare ceramics from private European estates."
            onPress={() => console.log("pressed")}
          />
        </View>
      </View>
      <View className="p-8">
        <View
          style={{
            borderLeftColor: Colors.brand.secondary,
            borderLeftWidth: 3,
          }}
          className="pl-6 py-2"
        >
          <Text
            style={{
              color: Colors.dark.surface,
              fontFamily: "PlayfairDisplay_700Bold",
              lineHeight: 38,
            }}
            className="text-4xl italic mb-8"
          >
            &ldquo;Authenticity isn&apos;t just about a certificate. It&apos;s
            about the resonance of a physical object surviving through
            time.&rdquo;
          </Text>
          <Text
            style={{ color: Colors.brand.tertiary, letterSpacing: 2 }}
            className="text-xs"
          >
            — DR. ELIAS VANCE, LEAD CURATOR
          </Text>
        </View>
      </View>
    </View>
  );
};
