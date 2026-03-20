import { Colors } from "@/constants/theme";
import { ScrollView } from "react-native";
import { HomeBottom } from "./home-bottom";
import { HomeHero } from "./home-hero";
import { HomeMiddle } from "./home-middle";

export const Home = () => {
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
};
