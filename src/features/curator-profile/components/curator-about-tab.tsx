import { Colors } from "@/constants/theme";
import { Text, View } from "react-native";

type CuratorAboutTabProps = {
  bio: string;
  approach: string;
  expertise: string[];
};

export const CuratorAboutTab = ({
  bio,
  approach,
  expertise,
}: CuratorAboutTabProps) => {
  return (
    <View className="px-6 pt-6 gap-8">
      <View>
        <Text
          style={{
            color: Colors.light.textSecondary,
            letterSpacing: 2,
          }}
          className="text-xs mb-4"
        >
          BIOGRAPHY
        </Text>
        <Text
          style={{
            color: Colors.light.text,
            lineHeight: 28,
          }}
          className="text-base leading-7"
        >
          {bio}
        </Text>
      </View>

      <View
        style={{
          borderLeftColor: Colors.brand.secondary,
          borderLeftWidth: 2,
        }}
        className="pl-6"
      >
        <Text
          style={{
            color: Colors.light.text,
            fontFamily: "PlayfairDisplay_700Bold",
            fontStyle: "italic",
            lineHeight: 28,
          }}
          className="text-base"
        >
          &quot;{approach}&quot;
        </Text>
      </View>

      <View>
        <Text
          style={{
            color: Colors.light.textSecondary,
            letterSpacing: 2,
          }}
          className="text-xs mb-4"
        >
          EXPERTISE
        </Text>
        <View className="gap-3">
          {expertise.map((item, index) => (
            <View
              key={index}
              style={{ borderBottomColor: Colors.light.border }}
              className="border-b pb-3"
            >
              <Text
                style={{
                  color: Colors.light.text,
                }}
                className="text-base"
              >
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
