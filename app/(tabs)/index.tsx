import { HomeBottom, HomeHero, HomeMiddle } from "@/components";
import { Colors } from "@/constants/theme";
import { ScrollView } from "react-native";

export default function Home() {
  return (
    <ScrollView
      className="flex-1"
      style={{
        backgroundColor: Colors.light.surface,
        borderBottomColor: Colors.light.border,
      }}
    >
      <HomeHero />
      <HomeMiddle />
      <HomeBottom />
    </ScrollView>
  );
}
