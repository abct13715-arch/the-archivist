import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import {
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type ProfileCardProps = {
  backgroundImage: ImageSourcePropType;
  profileImage: ImageSourcePropType;
  name: string;
  location: string;
  memberSince: string;
  responseRate: string;
  badge: string;
  onShare?: () => void;
};

export const ProfileCard = ({
  backgroundImage,
  profileImage,
  name,
  location,
  memberSince,
  responseRate,
  badge,
  onShare,
}: ProfileCardProps) => {
  return (
    <View style={{ backgroundColor: Colors.brand.neutral }}>
      <View style={{ height: 180 }}>
        <Image
          source={backgroundImage}
          contentFit="cover"
          style={{ width: "100%", height: "100%" }}
        />
        <View
          style={{
            position: "absolute",
            bottom: -60,
            right: 24,
            borderWidth: 3,
            borderColor: Colors.light.surface,
          }}
        >
          <Image
            source={profileImage}
            contentFit="cover"
            style={{ width: 120, height: 120 }}
          />
        </View>
      </View>

      <View className="px-6 pt-16 pb-8 gap-3">
        <Text
          style={{
            color: Colors.light.text,
            fontFamily: "PlayfairDisplay_700Bold",
            lineHeight: 48,
          }}
          className="text-4xl"
        >
          {name}
        </Text>

        <View className="flex-row gap-6 items-center">
          <View className="flex-row items-center gap-1">
            <Ionicons
              name="location-outline"
              size={13}
              color={Colors.light.textSecondary}
            />
            <Text
              style={{ color: Colors.light.textSecondary, letterSpacing: 1 }}
              className="text-xs"
            >
              {location}
            </Text>
          </View>
          <Text
            style={{ color: Colors.light.textSecondary, letterSpacing: 1 }}
            className="text-xs"
          >
            MEMBER SINCE {memberSince}
          </Text>
        </View>

        <Text
          style={{ color: Colors.light.textSecondary, letterSpacing: 1 }}
          className="text-xs"
        >
          RESPONSE RATE: {responseRate}
        </Text>

        <View className="flex-row gap-3 mt-2">
          <TouchableOpacity
            style={{ backgroundColor: Colors.light.text }}
            className="flex-row items-center gap-2 px-5 py-3"
          >
            <Ionicons name="star" size={14} color={Colors.brand.neutral} />
            <Text
              style={{ color: Colors.brand.neutral, letterSpacing: 2 }}
              className="text-xs font-bold"
            >
              {badge}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onShare}
            style={{ borderColor: Colors.light.border }}
            className="border p-3 items-center justify-center"
          >
            <Ionicons
              name="share-outline"
              size={18}
              color={Colors.light.text}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
