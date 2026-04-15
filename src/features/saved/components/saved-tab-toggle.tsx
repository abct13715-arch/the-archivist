import { Colors } from "@/constants/theme";
import { Text, TouchableOpacity, View } from "react-native";

type TabType = "objects" | "collections";

type Props = {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
};

export const SavedTabToggle = ({ activeTab, onTabChange }: Props) => {
  const handleTabPress = (tab: TabType) => {
    onTabChange(tab);
  };

  return (
    <View className="flex-row gap-12 mb-12 border-b border-neutral-300">
      <TouchableOpacity
        onPress={() => handleTabPress("objects")}
        className="pb-4"
        style={{
          borderBottomWidth: 2,
          borderBottomColor:
            activeTab === "objects" ? Colors.palette.primary900 : "transparent",
        }}
      >
        <Text
          className="text-[11px] font-bold tracking-widest uppercase"
          style={{
            color:
              activeTab === "objects"
                ? Colors.palette.primary900
                : Colors.light.textSecondary,
          }}
        >
          OBJECTS
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleTabPress("collections")}
        className="pb-4"
        style={{
          borderBottomWidth: 2,
          borderBottomColor:
            activeTab === "collections"
              ? Colors.palette.primary900
              : "transparent",
        }}
      >
        <Text
          className="text-[11px] font-bold tracking-widest uppercase"
          style={{
            color:
              activeTab === "collections"
                ? Colors.palette.primary900
                : Colors.light.textSecondary,
          }}
        >
          COLLECTIONS
        </Text>
      </TouchableOpacity>
    </View>
  );
};
