import { Colors } from "@/constants/theme";
import { router } from "expo-router";
import { ScrollView } from "react-native";
import { featuredCollection } from "../data";
import { FeaturedCollection } from "./featured-collection";
import { HomeBottom } from "./home-bottom";
import { HomeMiddle } from "./home-middle";

export const Home = () => {
  return (
    <ScrollView
      className="flex-1"
      style={{ backgroundColor: Colors.light.surface }}
    >
      <FeaturedCollection
        collection={featuredCollection}
        onExplore={() =>
          router.push({
            pathname: "/collection/[id]",
            params: { id: featuredCollection.id },
          })
        }
        onViewAll={() => router.push("/collection")}
      />
      <HomeMiddle />
      <HomeBottom />
    </ScrollView>
  );
};
