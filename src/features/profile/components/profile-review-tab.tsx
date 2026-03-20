import { Colors } from "@/constants/theme";
import { Text, View } from "react-native";

export type Review = {
  id: string;
  name: string;
  text: string;
  rating: number;
};

export const ProfileReviewsTab = ({ reviews }: { reviews: Review[] }) => (
  <View className="px-4 gap-4 mt-4">
    {reviews.map((review) => (
      <View
        key={review.id}
        style={{ borderBottomColor: Colors.light.border }}
        className="border-b pb-4 gap-2"
      >
        <View className="flex-row justify-between items-center">
          <Text
            style={{
              color: Colors.light.text,
              fontFamily: "PlayfairDisplay_700Bold",
            }}
            className="text-base"
          >
            {review.name}
          </Text>
          <View className="flex-row gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Text
                key={i}
                style={{
                  color:
                    i < review.rating
                      ? Colors.brand.secondary
                      : Colors.light.border,
                }}
              >
                ★
              </Text>
            ))}
          </View>
        </View>
        <Text
          style={{ color: Colors.light.textSecondary }}
          className="text-sm leading-6"
        >
          {review.text}
        </Text>
      </View>
    ))}
  </View>
);
