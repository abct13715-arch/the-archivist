import { Colors } from "@/constants/theme";
import { Text, View } from "react-native";

type TCuratorStats = {
  selections: number;
  collections: number;
  years: number;
};

type CuratorInfoProps = {
  role: string;
  name: string;
  location: string;
  stats: TCuratorStats;
};

export const CuratorInfo = ({ role, name, location, stats }: CuratorInfoProps) => {
  return (
    <View
      style={{
        backgroundColor: Colors.light.surface,
        borderColor: Colors.light.border,
      }}
      className="p-8 border"
    >
      <View className="flex-col md:flex-row md:items-end justify-between gap-8">
        <View>
          <Text
            style={{
              color: Colors.light.textSecondary,
              letterSpacing: 2,
            }}
            className="text-xs mb-2"
          >
            {role.toUpperCase()}
          </Text>
          <Text
            style={{
              color: Colors.light.text,
              fontFamily: "PlayfairDisplay_700Bold",
            }}
            className="text-5xl tracking-tighter"
          >
            {name}
          </Text>
          <Text
            style={{
              color: Colors.brand.secondary,
              letterSpacing: 2,
            }}
            className="text-sm mt-4"
          >
            {location}
          </Text>
        </View>

        <View className="flex-row md:flex-col gap-8 md:gap-4 md:border-t-0 md:border-l border-t border-[#D8D8D0] pt-6 md:pt-0 md:pl-8">
          <View className="items-center md:items-start">
            <Text
              style={{
                color: Colors.light.text,
                fontFamily: "PlayfairDisplay_700Bold",
              }}
              className="text-2xl"
            >
              {stats.selections}
            </Text>
            <Text
              style={{
                color: Colors.light.textSecondary,
                letterSpacing: 2,
              }}
              className="text-[10px] opacity-60"
            >
              SELECTIONS
            </Text>
          </View>
          <View className="items-center md:items-start">
            <Text
              style={{
                color: Colors.light.text,
                fontFamily: "PlayfairDisplay_700Bold",
              }}
              className="text-2xl"
            >
              {stats.collections}
            </Text>
            <Text
              style={{
                color: Colors.light.textSecondary,
                letterSpacing: 2,
              }}
              className="text-[10px] opacity-60"
            >
              COLLECTIONS
            </Text>
          </View>
          <View className="items-center md:items-start">
            <Text
              style={{
                color: Colors.light.text,
                fontFamily: "PlayfairDisplay_700Bold",
              }}
              className="text-2xl"
            >
              {stats.years}
            </Text>
            <Text
              style={{
                color: Colors.light.textSecondary,
                letterSpacing: 2,
              }}
              className="text-[10px] opacity-60"
            >
              YEARS
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
